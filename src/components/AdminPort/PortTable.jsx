import { React, useState, useEffect, useContext } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/system";
import { GridActionsCellItem, gridClasses } from "@mui/x-data-grid";
import { api } from "../../axiosConfig.js";
import { DataGrid } from "@mui/x-data-grid";
import { MessageContext } from "../../contexts/MessageContext.jsx";
import { MenuItem, Select, TextField, Typography } from "@mui/material";
import BoatPopupButton from "../Ports/Popover.jsx";

export default function AdminPort({ portName }) {
  const { setMessage } = useContext(MessageContext);

  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);

  const [rows, setRows] = useState([]);
  const [ships, setShips] = useState([]);
  const [forceReload, setForceReload] = useState(false);

  useEffect(() => {
    const getShips = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        const sortedShips = res.data
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name, "ru-RU"));
        setShips(sortedShips);
      } catch (err) {
        console.error("Ошибка загрузки судов", err);
      } finally {
      }
    };
    const getRows = async () => {
      try {
        const res = await api.get("/ports/getAllByPort", {
          params: { portName: portName },
        });
        setRows(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getShips();
    getRows();
  }, [forceReload]);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleDeleteClick = (id) => async () => {
    setUpdateFlag(true);
    await api.delete(`/ports/deleteById/${id}`);
    setForceReload((prev) => !prev);
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.id_ship === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error",
      }));
      return;
    }
    const updatedRow = { ...newRow };
    if (updateFlag) {
      try {
        await api.post("/ports/change", {
          ...updatedRow,
        });
        setForceReload((prev) => !prev);
      } catch (err) {
        setMessage(() => ({
          open: true,
          messageText: err.response.data,
          severity: "error",
        }));
        return;
      }
    } else {
      try {
        await api.post("/ports/add", {
          ...updatedRow,
        });
        setForceReload((prev) => !prev);
      } catch (err) {
        setMessage(() => ({
          open: true,
          messageText: err.response.data,
          severity: "error",
        }));
        console.log(err.response.data);
        return;
      }
    }
    setUpdateFlag(false);
    return updatedRow;
  };

  const columns = [
    {
      field: "id_ship",
      headerName: "Название судна",
      width: 150,
      editable: true,
      renderCell: (params) => {
        const ship = ships.find((ship) => ship.id === params.value);
        return <span>{ship ? ship.name : "Не указано"}</span>;
      },
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: "id_ship",
              value: event.target.value,
            })
          }
          fullWidth
        >
          {ships.map((ship) => (
            <MenuItem key={ship.id} value={ship.id}>
              {ship.name}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    { field: "portName", headerName: "Порт", width: 120, editable: true },
    {
      field: "date",
      headerName: "Дата добавления записи",
      width: 185,
      editable: false,
      valueGetter: (params) => {
        if (!params.value) return "—"; // Если даты нет, показываем дефис
        return new Date(params.value).toLocaleString("ru-RU");
      },
    },
    { field: "place", headerName: "Прибыл из:", width: 100, editable: true },
    {
      field: "gruz_type",
      headerName: "Тип груза:",
      width: 100,
      editable: true,
    },
    {
      field: "gruz_amount",
      headerName: "Масса/объем груза:",
      width: 150,
      editable: true,
    },
    {
      field: "date_enter",
      headerName: "Прибытие",
      width: 120,
      editable: true,
      valueGetter: (params) => {
        if (!params.value) return "—"; // Если даты нет, показываем дефис
        return new Date(params.value).toLocaleString("ru-RU");
      },
      renderEditCell: (params) => (
        <TextField
          type="datetime-local"
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: "date_enter",
              value: event.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "date_out",
      headerName: "Отправление",
      valueGetter: (params) => {
        if (!params.value) return "—"; // Если даты нет, показываем дефис
        return new Date(params.value).toLocaleString("ru-RU");
      },
      width: 120,
      editable: true,
      renderEditCell: (params) => (
        <TextField
          type="datetime-local"
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: "date_out",
              value: event.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "sostav",
      headerName: "Состав",
      width: 120,
      editable: true,
      valueGetter: (params) => {
        const shipNames = (params.value || [])
          .map((id) => ships.find((ship) => ship.id === id)?.name) // Находим имя судна по id
          .filter(Boolean) // Убираем undefined
          .join(", "); // Объединяем в строку через запятую
        return shipNames || "—"; // Если пусто, показываем дефис
      },
    },
    { field: "content", headerName: "Описание", width: 120, editable: true },
    {
      field: "status",
      headerName: "Статус",
      width: 140,
      editable: true,
      renderCell: (params) => {
        let styles = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          borderRadius: "20px",
          border: "1px solid blue",
          padding: "5px 5px",
          minWidth: "120px",
          textAlign: "center",
        };

        if (params.value === "Отправлено") {
          styles.color = "dark";
          styles.backgroundColor = "rgba(90, 240, 90, 0.8)";
        }
        if (params.value === "Ожидание") {
          styles.color = "dark";
          styles.backgroundColor = "rgba(247, 255, 1, 0.97)";
        }

        return <Box sx={styles}>{params.value}</Box>;
      },
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({
              id: params.id,
              field: "status",
              value: event.target.value,
            })
          }
          fullWidth
        >
          <MenuItem value="Отправлено">Отправлено</MenuItem>
          <MenuItem value="Ожидание">Ожидание</MenuItem>
        </Select>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 200,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <BoatPopupButton
            ships={ships}
            portName={portName}
            id={id}
            forceReload={forceReload}
          />,
        ];
      },
    },
  ];

  return (
    <Typography>
      <DataGrid
        initialState={{
          sorting: {
            sortModel: [{ field: "name", sort: "desc" }],
          },
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
        getRowHeight={() => "auto"}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 1,
          },
          height: 600,
        }}
      />
    </Typography>
  );
}

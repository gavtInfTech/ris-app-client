import { React, useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, minWidth } from "@mui/system";
import Style from "./style.module.css";
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  gridClasses,
} from "@mui/x-data-grid";
import { api } from "../../axiosConfig.js";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { MessageContext } from "../../contexts/MessageContext.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NoticeForm from "./PortForm.jsx";
import PopupEdit from "./PopupEdit.jsx";
import Archive from "./Archive.jsx";

export default function Port(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const { auth } = useContext(AuthContext);
  const [ships, setShips] = useState([]);
  const [nameCell, setNameCell] = useState("");
  const portName = props.portName;
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [waitingRows, setWaitingRows] = useState([]);
  const [sendedRows, setSendedRows] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setOpenSecond(false);
    setSelectedRow(null);
  };

  const handleViewClick = (id) => async () => {
    try {
      const rowData = rows.find((row) => row.id === id);
      if (!rowData) {
        console.error("Row not found");
        return;
      }

      const res = await api.get(`/ports/getAllStatus?id_ship=${id}`);
      setSelectedRow(res.data);
      setOpen(true); // Открываем диалог
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  const handleSecondViewClick = () => () => {
    setOpenSecond(true); // Открываем диалог
  };

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        const sortedShips = res.data
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name, "ru-RU"));
        setShips(sortedShips);
      } catch (err) {
        console.error("Ошибка загрузки судов", err);
      }
    };
    fetchShips();
  }, []);

  useEffect(() => {
    setIsEditAllowed(true);
  }, []);

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get("/ports/getAllByPort", {
          params: { portName: portName },
        });
        setRows(res.data);
        setWaitingRows(res.data.filter((item) => item.status != "Отправлено"));
        setSendedRows(res.data.filter((item) => item.status == "Отправлено"));
      } catch (err) {
        console.log(err);
      }
    };
    getRows();
  }, [forceReload]);
  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const statusOptions = ["Отправлено", "Ожидание"];

  const getStatusColor = (status) => {
    if (status === "Отправлено") return "green";
    if (status === "Ожидание") return "yellow";
    return "inherit";
  };

  const handleEditClick = (id) => () => {
    setUpdateFlag(true);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    setUpdateFlag(true);
    await api.delete(`/ports/deleteById/${id}`);
    setForceReload((prev) => !prev);
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (!editedRow.id_ship) {
      // Проверяем на null, undefined, пустую строку
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }
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
      width: 100,
      editable: false,
      valueGetter: (params) => {
        if (!params.value) return "—"; // Если даты нет, показываем дефис
        return new Date(params.value).toLocaleString("ru-RU");
      },
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
    { field: "content", headerName: "Контент", width: 200, editable: true },
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
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View"
            className="textPrimary"
            onClick={handleViewClick(id)}
            color="inherit"
          />,
          <PopupEdit
            data={selectedRow ? selectedRow : rows}
            portName={portName}
            ships={ships}
            id={id}
            setForceReload={setForceReload}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Typography>
      <Accordion
        sx={{
          maxWidth: 1240,
          backgroundColor: "#ebf4fc",
          mb: "20px",
          boxShadow: "0px 1px 1px #b4b8c2",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ ml: "20px", fontSize: 17 }}>Архив судов</Typography>
        </AccordionSummary>
        <AccordionDetails className={Style.accordionDetails2}>
        <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: "name", sort: "desc" }],
              },
            }}
            rows={sendedRows}
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
              maxWidth: 1400,
              height: 600,
            }}
          />
        </AccordionDetails>
      </Accordion>
      <NoticeForm
        setForceReload={setForceReload}
        portName={portName}
      ></NoticeForm>
      <DataGrid
        initialState={{
          sorting: {
            sortModel: [{ field: "name", sort: "desc" }],
          },
        }}
        rows={waitingRows}
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
          maxWidth: 1400,
          height: 600,
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "80vw",
            height: "80vh",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <DialogTitle>Статусы судна</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <DataGrid
              initialState={{
                sorting: {
                  sortModel: [{ field: "name", sort: "desc" }],
                },
              }}
              rows={selectedRow}
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
                maxWidth: 1400,
                height: 600,
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </Typography>
  );
}

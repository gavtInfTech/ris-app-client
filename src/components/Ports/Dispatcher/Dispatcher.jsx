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
import PropTypes from "prop-types";
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  gridClasses,
} from "@mui/x-data-grid";
import { api } from "../../../axiosConfig.js";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { forbiddenTime } from "../../admin/Time/forbiddenTime.js";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { MenuItem, Select, TextField } from "@mui/material";

function EditToolbar(props) {
  const { setRows, setRowModesModel, portName } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => {
      console.log("THIS IS OLD ROWS", oldRows); // Check what 'oldRows' is
      return [
        ...oldRows,
        {
          id,
          portName: portName,
          name: null,
          date_enter: null,
          date_out: null,
          type: null,
          id_ship: null,
        },
      ];
    });
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "planDepth" },
    }));
  };

  return (
    <GridToolbarContainer sx={{ color: "#4778e9" }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Добавить данные
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
  portName: PropTypes.string.isRequired
};

export default function Dispatcher(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const { auth } = useContext(AuthContext);
  const [ships, setShips] = useState([]);
  const [nameCell,setNameCell] = useState("");
  const portName = props.portName;
  const handleChange = () => {
    // Вызываем onUpdate для информирования родительского компонента
    props.onUpdate();
  };
  useEffect(() => {
    const fetchShips = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        setShips(res.data);
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
        const res = await api.get("/ports/getAllByPort",  {
          params: { portName: portName },
        });
        setRows(res.data);
    } catch (err) {
        console.log(err);
    }
    };
    handleChange();
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
    if (status === "Ожидание") return "red";
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
    await api.delete(`/ports/deleteById/${id}`)
    setForceReload((prev) => !prev);     
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (!editedRow.id_ship) { // Проверяем на null, undefined, пустую строку
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
      width: 120,
      editable: true,
      renderCell: (params) => {
        const ship = ships.find((ship) => ship.id === params.value);
        return <span>{ship ? ship.name : "Не указано"}</span>;  // Отображаем название судна или текст "Не указано"
      },
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) => params.api.setEditCellValue({ id: params.id, field: "id_ship", value: event.target.value })}
          fullWidth
        >
          {ships.map((ship) => (
            <MenuItem key={ship.id} value={ship.id}>{ship.name}</MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: "number_ship",
      headerName: "№ судна",
      width: 120,
      editable: true,
      type: "string"
    },
    {
      field: "Тип судна",
      headerName: "Тип судна",
      type: "string",
      editable: true,
      width: 140,
      renderCell: (params) => <span>{params.value}</span>,  // Display the selected type
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) => {
            const newValue = event.target.value;
            // Update the cell value
            params.api.setEditCellValue({ id: params.id, field: "type", value: newValue });
            // Set the selected type to the nameCell state
            setNameCell(newValue);
          }}
          fullWidth
        >
          <MenuItem value="Пассажирский">Пассажирский</MenuItem>
          <MenuItem value="Грузовой">Грузовой</MenuItem>
        </Select>
      ),
    },
    {
      field: "captain",
      headerName: "Капитан судна",
      width: 120,
      editable: true,
      type: "string"
    },
   
    {
      field: "sostav",
      headerName: "Составы",
      type: "string",
      editable: true,
      width: 80,
      renderCell: (params) => <span>{params.value}</span>,  // Display the selected type
      renderEditCell: (params) => (
        <Select
          value={params.value || ""}
          onChange={(event) =>
            params.api.setEditCellValue({ id: params.id, field: "sostav", value: event.target.value })
          }
          fullWidth
        >
          <MenuItem value="Есть">Есть</MenuItem>
          <MenuItem value="Нету">Нету</MenuItem>
        </Select>
      ),
    },
    { field: "data", headerName:  "Данные о составе", editable: true, width: 130 },
    { field: "place", headerName: "Прибыл из", editable: true, width: 120 },
    {
      field: "date_enter",
      headerName: "Прибытие в порт",
      width: 160,
      editable: true,
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
      headerName: "Отправление из порта",
      width: 160,
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
      field: "status",
      headerName: "Статус",
      type: "string",
      editable: true,
      width: 160,
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
          textAlign: "center"
        };
        
        if (params.value === "Отправлено") {
          styles.color = "dark";
          styles.backgroundColor = "rgba(90, 240, 90, 0.8)";
        }
        if (params.value === "Ожидание") {
             styles.color = "dark";
          styles.backgroundColor = "rgba(255, 119, 119, 0.97)";
        }
        
        return (
          <Box sx={styles}>
            {params.value}
          </Box>
        );
      },
      renderEditCell: (params) => {
        return (
          <Select
            value={params.value}
            onChange={(event) => params.api.setEditCellValue({
              id: params.id,
              field: params.field,
              value: event.target.value,
            })}
            fullWidth
          >
            <MenuItem value="Отправлено">Отправлено</MenuItem>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
          </Select>
        );
      }
    }
    ,
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
  
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{portName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: "name", sort: "desc" }],
              },
            }}
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
              maxWidth: 1400,
              height: 600,
            }}
            components={{
              Toolbar: EditToolbar,
            }}
            componentsProps={{
              toolbar: { setRows, setRowModesModel, portName },
            }}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

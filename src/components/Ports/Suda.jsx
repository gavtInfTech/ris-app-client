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
import ReplayIcon from "@mui/icons-material/Replay";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
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
import { forbiddenTime } from "../admin/Time/forbiddenTime.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    const newRow = {
      id,
      name: null,
      owner: null,
      reg_id: null,
      type: null,
      class: null,
      project_number: null,
      gruzopodem: null,
      material: null,
      engine: null,
      rull: null,
      speed: null,
      length: null,
      width: null,
      osadka_gryz: null,
      osadka_poroshnem: null,
      osadka_nadstroiki: null,
    };
  
    setRows((oldRows) =>
      [newRow, ...oldRows].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      )
    );
  
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
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
};

export default function Suda(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
      setIsEditAllowed(true);
  }, []);

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get("/allShips/getAllShips");
        setRows(res.data);
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
    await api.delete(`/allShips/deleteShip/${id}`)
    setForceReload((prev) => !prev);     
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (!editedRow.name) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.name === null || newRow.owner === null) {
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
          await api.post("/allShips/changeShip", {
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
        await api.post("/allShips/addShip", {
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
      field: "id",
      headerName: "ID",
      type: "string",
      width: 100,
      editable: false,
    },
    {
      field: "name",
      headerName: "Название",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "owner",
      headerName: "Владелец",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "reg_id",
      headerName: "Регистрационный номер",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "type",
      headerName: "Тип",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "class",
      headerName: "Класс",
      type: "string",
      width: 120,
      editable: true,
    },
    {
      field: "project_number",
      headerName: "Проектный номер",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "gruzopodem",
      headerName: "Грузоподъемность, т",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "material",
      headerName: "Материал корпуса",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "engine",
      headerName: "Двигатель",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "rull",
      headerName: "Рулевое управление",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "speed",
      headerName: "Скорость, км/ч",
      type: "string",
      width: 140,
      editable: true,
    },
    {
      field: "length",
      headerName: "Длина, м",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "width",
      headerName: "Ширина, м",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "osadka_gryz",
      headerName: "Осадка с грузом, м",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "osadka_poroshnem",
      headerName: "Осадка порожнем, м",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "osadka_nadstroiki",
      headerName: "Осадка надстройки, м",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Действия",
      width: 120,
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
        <Typography sx={{ ml: "20px", fontSize: 17 }}>Суда</Typography>
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
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

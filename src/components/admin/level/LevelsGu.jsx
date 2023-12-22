import { React, useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import PropTypes from "prop-types";
import { forbiddenTime } from "../Time/forbiddenTime";
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  gridClasses
} from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { Box } from "@mui/system";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        date: new Date(),
        level1: null,
        level2: null,
        level1Change: null,
        level2Change: null,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "level1" },
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

export default function LevelsGuAdmin(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [forceReload, setForceReload] = useState(false);
  const [isEditAllowed, setIsEditAllowed] = useState(true);

  useEffect(() => {
    const currentTime = new Date();
    setIsEditAllowed(currentTime < forbiddenTime);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/levelsGu/getAllByHydronode", {
          params: { hydropost: props.hydronode },
        });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        let ready = res.data.sort((a, b) => a.date.getTime() - b.date.getTime());
        const filteredReady = ready.filter((row) => {
          // Проверяем, есть ли в массиве ready элемент с аналогичным id, но с припиской "_change"
          const hasChange = ready.some((changeRow) => changeRow.id === row.id + '_change');
        
          // Возвращаем элемент, если для него нет соответствующего id с припиской "_change"
          return !hasChange;
        });
        setRows(filteredReady);
        if (!isEditAllowed){
          setMessage(() => ({
            open: true,
            messageText: `Изменения после ${forbiddenTime.getHours()}:00 должны подтверждаться Администрацией!`,
            severity: "warning",
          }));
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [forceReload]);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date().toDateString();
    
    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today) {
      // Если не равно, выводим сообщение и не выполняем действие
      setMessage(() => ({
        open: true,
        messageText: "Редактирование прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    }
  
    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  
  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date().toDateString();
  
    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today) {
      // Если не равно, выводим сообщение и не выполняем действие
      setMessage(() => ({
        open: true,
        messageText: "Удаление прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    }
  
    try {
      isEditAllowed ? await api.delete(`/levelsGu/delete/${id}`) : await api.post(`/levelsGu/deleteWithConfirm/${id}`);
      setForceReload((prev) => !prev);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.hydronode === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (
      newRow.level1 === null ||
      newRow.level1 === "" ||
      newRow.level2 === null ||
      newRow.level2 === ""
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error",
      }));
      return;
    }

    const updatedRow = {
      ...newRow,
      river: props.river,
      hydronode: props.hydronode,
    };

    if (updateFlag) {
      try {
        if (isEditAllowed){
            await api.post("/levelsGu/change", {...updatedRow, typeOfChange: "Изменено", confirmation: isEditAllowed });
        }
        else{
            await api.post("/levelsGu/change", {...updatedRow, 
            id: updatedRow.id.includes("_change") ? updatedRow.id : updatedRow.id + "_change", 
            typeOfChange: "Изменено", 
            confirmation: isEditAllowed }
          );
        }
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    } else {
      try {
        let res = await api.post("/levelsGu/add", {...updatedRow,  typeOfChange: "Добавлено", confirmation: isEditAllowed });
        setForceReload((prev) => !prev);
      } catch (err) {
        setMessage((prevState) => ({
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
      field: "date",
      headerName: "Дата",
      type: "date",
      width: 120,
      editable: false,
    },
    {
      field: "level1",
      headerName: "Уровень воды над ПГ, ВБ (см)",
      type: "string",
      width: 220,
      editable: true,
    },
    {
      field: "level2",
      headerName: "Уровень воды над ПГ, НБ (см)",
      type: "string",
      width: 220,
      editable: true,
    },
    {
      field: "level1Change",
      headerName: "Изменение ВБ",
      type: "string",
      editable: true,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level1Change < 0,
          positive: params.row.level1Change > 0,
          default:
            params.row.level1Change === '0' || params.row.level1Change === "-",
        });
      },
      width: 115,
    },
    {
      field: "level2Change",
      headerName: "Изменение НБ",
      type: "string",
      editable: true,
      cellClassName: (params) => {
        if (params.row.level2Change === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level2Change < 0,
          positive: params.row.level2Change > 0,
          default:
            params.row.level2Change === '0' || params.row.level2Change === "-",
        });
      },
      width: 115,
    },
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
    {
      field: "typeOfChange",
      headerName: "Тип изменения",
      type: "number",
      width: 120,
      editable: false,
    },
    {
      field: "confirmation",
      headerName: "Статус",
      type: "boolean",
      width: 120,
      editable: false,
    }
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>
          {props.hydronode}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            height: 600,
            maxWidth: 1150,
            "& .super-app.negative": {
              backgroundColor: "#d47483",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.positive": {
              backgroundColor: "rgba(157, 255, 118, 0.49)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.default": {
              backgroundColor: "rgba(114, 163, 255, 0.49)",
              color: "#1a3e72",
              fontWeight: "600",
            },
          }}
        >
         <DataGrid
  rows={rows}
  columns={columns}
  editMode="row"
  rowModesModel={rowModesModel}
  onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
  onRowEditStart={handleRowEditStart}
  onRowEditStop={handleRowEditStop}
  processRowUpdate={processRowUpdate}
  components={{
    Toolbar: EditToolbar,
  }}
  componentsProps={{
    toolbar: { setRows, setRowModesModel },
  }}
  experimentalFeatures={{ newEditingApi: true }}
  sx={{
    [`& .${gridClasses.cell}`]: {
      ml: "1px"
    },
  }}
/>

        
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

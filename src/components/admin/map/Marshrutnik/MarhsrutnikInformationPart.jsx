import { React, useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  gridClasses,
} from "@mui/x-data-grid";
import { api } from "../../../../axiosConfig";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { MessageContext } from "../../../../contexts/MessageContext";



function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      { id, name: null, category: null, shore: null, distance: null }, // Новая строка
      ...oldRows, // Существующие строки
    ]);
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

export default function MarhsrutnikInformationPart(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const scores = ["-","Л","П"]

  const categoryData = [
    "База отдыха", "Гидроузел", "Гидропост",
     "Граница", "Инфраструктура", "Канал", 
     "Карьер", "ЛЭП", "Мост", 
     "Мост а/д", "Мост ж/д", 
     "Населенный пункт", "Озеро", "Остров",
      "Перекат", "Порт", "Предприятия", 
      "Причал", "Пристань", "Паром", 
      "Паромная переправа", "Ручей", 
      "Рыбацкий стан", "Санаторий", 
      "Стоянка", "Старица", "Трубопровод", 
      "Устье", "Хутор", "Шлюз", "Затон"
  ];

  const riversArray = [
    "Припять",
    "Припять",
    "Днепровско-Бугский канал",
    "Шлюзованный участок реки Мухавец",
    "Западная Двина",
    "Нёман",
    "Августовский канал",
    "Сож",
    "Березина",
    "Припять",
    "Припять",
    "Припять",
    "Припять",
    "Днепр"
  ];
  
  const riversArrayOptions = [
    "Августовский канал",
    "Березина",
    "Днепр",
    "Днепровско-Бугский канал",
    "Западная Двина",
    "Нёман",
    "Припять",
    "Сож",
    "Шлюзованный участок реки Мухавец"
  ];
  

  
  
  useEffect(() => {
    const getRows = async () => {
      try {
        console.log("HERE DATA");
        const res = await api.get("/marshrutnik/getAll");
        const updatedRows = res.data.map(row => ({ ...row, code_riv: riversArray[Number(row.code_riv) - 1] }));
        updatedRows.sort((a, b) => a.code_riv.localeCompare(b.code_riv));
        setRows(updatedRows);
      } catch (err) {
        console.log(err);
      }
    };

    getRows();
  }, []);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    try {
      await api.delete("/marshrutnik/delete/" + id);
      setRows(rows.filter((row) => row.id !== id));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.name === null) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.name === null || newRow.name.length === 0) {
      setMessage(() => ({
        open: true,
        messageText: "Поле ФИО не заполненно.",
        severity: "error",
      }));
      return;
    }

    if (
      newRow.category === null ||
      newRow.category.length === 0 
    ) {
      setMessage(() => ({
        open: true,
        messageText:
          "Поле категория не заполнено.",
        severity: "error",
      }));
      return;
    }

    if (
      newRow.shore === null ||
      newRow.shore.length === 0
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Поле берег не заполнено.",
        severity: "error",
      }));
      return;
    }

    if (updateFlag) {
      try {
        await api.post("/marshrutnik/change", {...newRow, code_riv: riversArray.indexOf(newRow.code_riv)});
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
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
        await api.post("/marshrutnik/add", {...newRow, code_riv: riversArray.indexOf(newRow.code_riv)});
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
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
    return newRow;
  };

  const columns = [
    {
      field: "name",
      headerName: "Наименование объекта",
      type: "string",
      width: 300,
      editable: true,
    },
    {
      field: "category",
      headerName: "Категория",
      valueOptions: categoryData,
      type: "singleSelect",
      width: 150,
      editable: true,
    },
    {
      field: "shore",
      headerName: "Берег",
      valueOptions: scores,
      type: "singleSelect",
      width: 120,
      editable: true,
    },
    {
      field: "distance",
      headerName: "Расстояние от устья",
      type: "string",
      width: 300,
      editable: true,
    },
    {
      field: "marshrutnik_number",
      headerName: "№ в маршрутнике",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "code_riv",
      headerName: "Река",
      valueOptions: riversArrayOptions,
      type: "singleSelect",
      width: 150,
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
    <Box sx={{ display: "flex", justifyContent: "center", pt: "10px" }}>
        <DataGrid
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
            maxWidth: 1350,
            height: 700,
          }}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
  );
}

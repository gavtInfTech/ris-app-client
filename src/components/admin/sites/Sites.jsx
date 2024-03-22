import { useContext } from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import {
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { AuthContext } from "../../../contexts/AuthContext";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { api } from "../../../axiosConfig";
import { customComparator } from "../../vvp/siteMethods";

const rivers = [
  "Днепр",
  "Березина",
  "Сож",
  "Неман",
  "Мухавец",
  "Днепро-Бугский канал",
  "Пина",
  "Верхний участок реки Припять",
  "Припять",
  "Микашевичский канал",
  "Горынь",
  "Западная Двина",
  "Туровский затон",
  "Августовский канал",
  "Свислочь",
];

const organisations = [
  "РУ ЭСП \"Днепро-Бугский водный путь\"",
  "РУ Днепро-Двинское предприятие водных путей \"Белводпуть\"",
  "РУ Днепро-Березинское предприятие водных путей",
  "Нижне - Припятский"
]

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const { auth } = useContext(AuthContext);

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, name: "", river: "", firstKM: "", secondKM: "" },
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

export default function Sites() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const { auth } = useContext(AuthContext);
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/sites/getAll");
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setRows(res.data.sort(customComparator));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
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
      let res = await api.delete("/sites/delete/" + id);
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
    if (editedRow.name === "") {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (
      newRow.name === "" ||
      newRow.river === "" ||
      newRow.startKM === "" ||
      newRow.endKM === ""
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error",
      }));
      return;
    }

    if (updateFlag) {
      try {
        let res = await api.post("/sites/change", newRow);
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
      } catch (err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    } else {
      try {
        let res = await api.post("/sites/add", newRow);
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)).sort(customComparator));
      } catch (err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    }
    setUpdateFlag(false);
    return newRow;
  };

  let columns = [
    {
      field: "name",
      headerName: "Название участка",
      width: 400,
      editable: true,
    },
    { 
      field: 'organisation', 
      headerName: 'Название предприятия', 
      type: 'singleSelect',
      valueOptions: organisations,
      width: 300, 
      editable: true 
    },
    {
      field: "river",
      headerName: "Река",
      type: "singleSelect",
      valueOptions: rivers,
      width: 230,
      editable: true,
    },
    {
      field: "firstKM",
      headerName: "Начальный километр",
      type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "secondKM",
      headerName: "Конечный километр",
      type: "number",
      width: 150,
      editable: true,
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
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "10px" }}>
      <DataGrid
        getRowHeight={() => "auto"}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 2,
          },
          height: 700,
          maxWidth: 1360,
        }}
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
      />
    </Box>
  );
}

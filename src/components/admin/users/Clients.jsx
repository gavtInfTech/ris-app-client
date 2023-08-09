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
import { api } from "../../../axiosConfig";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import styles from "./style.module.css";
import Typography from "@mui/material/Typography";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, fio: null, email: null, password: null, confirmed: false },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "fio" },
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

export default function Depth(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get("/clients/getAll");
        console.log(res.data);
        setRows(res.data);
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
      let res = await api.delete("/clients/delete/" + id);
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
    if (editedRow.fio === null) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.fio === null || newRow.fio.length === 0) {
      setMessage(() => ({
        open: true,
        messageText: "Поле ФИО не заполненно.",
        severity: "error",
      }));
      return;
    }

    if (
      newRow.email === null ||
      newRow.email.length === 0 ||
      !EMAIL_REGEXP.test(newRow.email)
    ) {
      setMessage(() => ({
        open: true,
        messageText:
          "Поле электронная почта не заполнено либо неверный формат ввода.",
        severity: "error",
      }));
      return;
    }

    if (
      newRow.password === null ||
      newRow.password.length === 0 ||
      newRow.password.length < 6
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Поле пароль не заполнено либо слишком короткий пароль.",
        severity: "error",
      }));
      return;
    }

    if (updateFlag) {
      try {
        let res = await api.post("/clients/change", newRow);
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
        let res = await api.post("/clients/registrationClient", newRow);
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
      field: "fio",
      headerName: "ФИО",
      type: "string",
      width: 400,
      editable: true,
    },
    {
      field: "email",
      headerName: "Электронная почта",
      type: "string",
      width: 300,
      editable: true,
    },
    {
      field: "password",
      headerName: "Пароль",
      width: 220,
      editable: true,
    },
    {
      field: "confirmed",
      headerName: "Подтвержден",
      type: "boolean",
      width: 120,
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
            maxWidth: 1160,
            height: 700
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

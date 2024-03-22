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
import { Box } from "@mui/system";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { forbiddenTime } from "../Time/forbiddenTime";
import { AuthContext } from "../../../contexts/AuthContext";
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, difference: 0, date: new Date(), level1: null, level2: null },
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

export default function LevelsGpAdmin(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const { auth } = useContext(AuthContext);
  const { hydropost } = props;
  const basicZeroGraphLevel = {
    "Могилев": 65,
    "Жлобин": 50,
    "Речица": 44,
    "Лоев": 74,
    "Бобруйск": 1,
    "Светлогорск": 396,
    "Славгород": 50,
    "Гомель": 40,
    "Пинск": 101,
    "Коробье": 127,
    "Черничи": 222,
    "Петриков": 438,
    "Мозырь": 80,
    "Наровля": 79,
    "Сураж": 60,
    "Витебск": 41,
    "Гродно": 40,
  };
  const organisations = {
    'РУ ЭСП "Днепро-Бугский водный путь"': 1,
    'РУ Днепро-Двинское предприятие водных путей "Белводпуть"': 2,
    "РУ Днепро-Березинское предприятие водных путей": 3,
    "Государственная администрация водного транспорта": 4,
    "Нижне - Припятский": 5,
    "Гродненский участок": 6,
    "Витебскводтранс": 7,
  };

  function getNumber(organisationName) {
    return organisations[organisationName] || null;
}

  useEffect(() => {
    const currentTime = new Date();
    if (auth.role === "Администратор") {
      setIsEditAllowed(true);
    } else {
      setIsEditAllowed(currentTime < forbiddenTime);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/levelsGp/getAllByHydropost", {
          params: { hydropost: props.hydropost },
        });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
          item.difference = Number(item.difference);
        });

        let ready = res.data.sort(
          (a, b) => a.date.getTime() - b.date.getTime()
        );
        const filteredReady = ready.filter((row) => {
          // Проверяем, есть ли в массиве ready элемент с аналогичным id, но с припиской "_change"
          const hasChange = ready.some(
            (changeRow) => changeRow.id === row.id + "_change"
          );

          // Возвращаем элемент, если для него нет соответствующего id с припиской "_change"
          return !hasChange;
        });
        setRows(filteredReady);
        if (!isEditAllowed) {
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

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleEditClick = (id) => () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();
    console.log(auth.role);

    if (row.date.toDateString() !== today.toDateString()) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        setRowModesModel({
          ...rowModesModel,
          [id]: { mode: GridRowModes.Edit },
        });
        return;
      }
      setMessage(() => ({
        open: true,
        messageText: "Редактирование прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    } else {
      setUpdateFlag(true);
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    }
  };

  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();
    console.log(auth.role !== "Администратор");

    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today.toDateString()) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        try {
          isEditAllowed
            ? await api.delete(`/levelsGp/delete/${id}`)
            : await api.post(`/levelsGp/deleteWithConfirm/${id}`);
          setForceReload((prev) => !prev);
        } catch (err) {
          console.log(err.response.data);
        }
        return;
      }
      setMessage(() => ({
        open: true,
        messageText: "Удаление прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    } else {
      try {
        isEditAllowed
          ? await api.delete(`/levelsGp/delete/${id}`)
          : await api.post(`/levelsGp/deleteWithConfirm/${id}`);
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const handleCancelClick = (id) => () => {
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.hydropost === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    if (newRow.level1 === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error",
      }));
      return;
    }

    const updatedRow = {
      ...newRow,
      level2: newRow.level1 - basicZeroGraphLevel[hydropost],
      river: props.river,
      hydropost: props.hydropost,
    };

    let updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    let hydropostData = updatedRows.filter(
      (row) => row.hydropost === updatedRow.hydropost
    );
    hydropostData.sort((a, b) => a.date.getTime() - b.date.getTime());
    let index = hydropostData.findIndex((item) => item.id === updatedRow.id);
    let difference;
    // hydropostData.filter((item) =>!item.id.includes("_change"))
    if (index - 1 < 0) {
      difference = 0;
    } else {
      difference =
        hydropostData[index].level1 - hydropostData[index - 1].level1;
      updatedRow.difference = difference;
    }
    if (hydropostData[index + 1] !== undefined) {
      hydropostData[index + 1].difference =
        hydropostData[index + 1].level1 - hydropostData[index].level1;

      try {
        if (isEditAllowed) {
          let res = await api.post("/levelsGp/change", {
            ...hydropostData[index + 1],
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
          });
        } else {
          let res = await api.post("/levelsGp/change", {
            ...hydropostData[index + 1],
            id: hydropostData[index + 1].id.includes("_change")
              ? hydropostData[index + 1].id
              : hydropostData[index + 1].id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation)
          });
        }
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    }

    if (updateFlag) {
      try {
        if (isEditAllowed) {
          await api.post("/levelsGp/change", {
            ...updatedRow,
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation)
          });
        } else {
          await api.post("/levelsGp/change", {
            ...updatedRow,
            id: updatedRow.id.includes("_change")
              ? updatedRow.id
              : updatedRow.id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation)
          });
        }
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    } else {
      try {
        await api.post("/levelsGp/add", {
          ...updatedRow,
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
          organisation: getNumber(auth.organisation)
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
      field: "date",
      headerName: "Дата",
      type: "date",
      editable:  auth.role === "Администратор" ? true : false,
      width: 120,
    },
    {
      field: "level1",
      headerName: "Уровень воды над 0 граф",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "level2",
      headerName: "Уровень воды над ПГ",
      type: "number",
      width: 180,
      editable:  auth.role === "Администратор" ? true : false,
    },
    {
      field: "difference",
      headerName: "Прибыло (+), убыло (-)",
      type: "number",
      cellClassName: (params) => {
        if (params.value === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.value < 0,
          positive: params.value > 0,
          default: params.value === 0,
        });
      },
      width: 180,
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
      type: "string",
      width: 120,
      editable: false,
    },
    {
      field: "confirmation",
      headerName: "Статус",
      type: "boolean",
      width: 120,
      editable: false,
    },
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>
          {props.hydropost}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            height: 600,
            maxWidth: 1024,
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
            initialState={{
              sorting: {
                sortModel: [{ field: "date", sort: "desc" }],
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
            components={{
              Toolbar: EditToolbar,
            }}
            componentsProps={{
              toolbar: { setRows, setRowModesModel },
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

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
import { forbiddenTime } from "../Time/forbiddenTime";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const organisations = [
  'РУЭСП "Днепро-Бугский водный путь"',
  'РУ Днепро-Двинское предприятие водных путей "Белводпуть"',
  "РУ Днепро-Березинское предприятие водных путей",
  'Филиал \"Нижне-Припятский\" г. Мозырь',
  'Филиал \"Гродненский участок\" г. Гродно',
  'Филиал \"Витебскводтранс\" г. Витебск',
];

const status = ["В процессе выполнения", "Выполнена", "Однодневная"];
const workType = [
"Буксировка к месту работы(на путевых работах)",
"Дноочищение(на путевых работах)",
"Дноуглубление(на путевых работах)",
"Изыскания(на путевых работах)",
"Траление(на путевых работах)",
"Дноочищение(на других работах)",
"Дноуглубление(на других работах)",
"Изыскания(на других работах)",
"Траление(на других работах)",
"Прочие на других работах",
"Отстой флота",
"Ожидание фронта работ",
"Изъятие нерудных строительных материалов (НСМ)",
"Ремонтные работы",
"Работы по содержанию СГТС",
"Выходной",
]
function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const { auth } = useContext(AuthContext);
  const handleClick = () => {
    const id = randomId();

    // Set the date to the current date and time
    const currentDate = new Date();
    const formattedCurrentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds()
    );

    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        organisation: props.organisation,
        number: props.ship,
        typeOfWork: "-",
        riverName: "-",
        distance: "-",
        place: "-",
        date_start: formattedCurrentDate,
        date: formattedCurrentDate,
        date_end: formattedCurrentDate,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "number" },
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
  ship: PropTypes.string,
  organisation: PropTypes.string,
};

export default function Dislocation(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const { auth } = useContext(AuthContext);
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const [rowEditable, setRowEditable] = useState(true);
  const ship = props.ship;
  const organisation = props.organisation;
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
        const res = await api.get("/dislocation/getAllByOrganisation", {
          params: { organisationName: props.organisation },
        });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
          item.date_start = new Date(item.date_start);
          item.date_end = new Date(item.date_end);
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

        const filteredByShip = filteredReady.filter((row) => row.number == props.ship);

        setRows(filteredByShip);
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
  const handlerReplayClick = (id) => async () => {
    try {
      const findObjectById = (array, id) => {
        return array.find((obj) => obj.id === id);
      };
      const notice = findObjectById(rows, id);

      if (!notice) {
        console.error("Notice with the specified ID not found.");
        return;
      }
      try {
        const currentDate = new Date();
        const formattedCurrentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          currentDate.getHours(),
          currentDate.getMinutes(),
          currentDate.getSeconds()
        );

        let res = await api.post("/dislocation/add", {
          ...notice,
          id: randomId(),
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
          date_start: new Date(notice.date_start),
          date_end: new Date(notice.date_end)
        });
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleEditClick = (id) => () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();

    // // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today.toDateString()) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        setRowModesModel({
          ...rowModesModel,
          [id]: { mode: GridRowModes.Edit },
        });
        return;
      }
      else{
        setRowEditable(false);
        setRowModesModel({
          ...rowModesModel,
          [id]: { mode: GridRowModes.Edit },
        });
        setMessage(() => ({
          open: true,
          messageText: "Разрешено изменение даты конца работы!",
          severity: "warning",
        }));
      }
  
      return;
    } else {
    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    setRowEditable(true);
  };

  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();

    // Проверка, что значение в столбце "Дата" равно сегодняшней дате
    if (row.date.toDateString() !== today.toDateString()) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        try {
          isEditAllowed
            ? await api.delete(`/dislocation/delete/${id}`)
            : await api.post(`/dislocation/deleteWithConfirm/${id}`);
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
          ? await api.delete(`/dislocation/delete/${id}`)
          : await api.post(`/dislocation/deleteWithConfirm/${id}`);
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const handleCancelClick = (id) => () => {
    setRowEditable(true);
    setUpdateFlag(false);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.organisation === null) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    console.log(newRow);
    if (
      newRow.organisation === null ||
      newRow.number === "" ||
      newRow.typeOfWork === "" ||
      newRow.riverName === "" ||
      newRow.distance === "" ||
      newRow.place === "" ||
      newRow.date_start === null ||
      newRow.date_end === null ||
      newRow.statusOfWork === null
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
        const currentDate = new Date();

        // Предположим, что newRow.date_start содержит дату в формате 'год-месяц-день 00:00:00'
        // Преобразуем строку даты в объект JavaScript Date
        const startDate = new Date(newRow.date_start);
        const endDate = new Date(newRow.date_end);

        // Заменяем время в startDate на текущее время
        startDate.setHours(
          currentDate.getHours(),
          currentDate.getMinutes(),
          currentDate.getSeconds()
        );
        endDate.setHours(
          currentDate.getHours(),
          currentDate.getMinutes(),
          currentDate.getSeconds()
        );

        // Обновляем date_start в newRow
        newRow.date_start = startDate.toISOString();
        newRow.date_end = endDate.toISOString();

        if (isEditAllowed) {
          await api.post("/dislocation/change", {
            ...newRow,
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
          });
        } else {
          await api.post("/dislocation/change", {
            ...newRow,
            id: newRow.id.includes("_change")
              ? newRow.id
              : newRow.id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
          });
        }
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        setUpdateFlag(false);
        return;
      }
    } else {
      try {
        let res = await api.post("/dislocation/add", {
          ...newRow,
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
        });
        setForceReload((prev) => !prev);
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
      field: "date",
      headerName: "Дата публикации",
      type: "date",
      width: 150,
      editable: auth.role === "Администратор" ? true : false,
    },
    {
      field: "number",
      headerName: "№ судна / партии",
      width: 140,
      editable: false,
    },
    {
      field: "typeOfWork",
      headerName: "Вид работы",
      type: "singleSelect",
      valueOptions: workType,
      width: 250,
      editable: rowEditable,
    },
    {
      field: "riverName",
      headerName: "Наименование реки и № участка*",
      width: 225,
      editable: rowEditable,
    },
    {
      field: "distance",
      headerName: "Км от устья",
      width: 100,
      editable: rowEditable,
    },
    {
      field: "place",
      headerName: "Место дислокации	",
      width: 200,
      editable: rowEditable,
    },
    {
      field: "date_start",
      headerName: "Дата начала работы",
      type: "date",
      width: 150,
      editable: rowEditable,
    },
    {
      field: "date_end",
      headerName: "Дата конца работы",
      type: "date",
      width: 150,
      editable: true,
    },
    {
      field: "statusOfWork",
      headerName: "Статус Работы",
      type: "singleSelect",
      valueOptions: status,
      width: 300,
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
      width: 150,
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
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{props.ship}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            height: "100%",
            maxWidth: "100%",
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
            getRowHeight={() => "auto"}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 2,
              },
              height: 700,
              maxWidth: 1600,
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
              toolbar: { setRows, setRowModesModel, ship, organisation },
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

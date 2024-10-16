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
import { api } from "../../../axiosConfig";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { forbiddenTime } from "../Time/forbiddenTime";
import { AuthContext } from "../../../contexts/AuthContext";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, date: new Date(), depth: null, width: null, forecastDate: null }, // Добавляем значение по умолчанию для forecastDate
    ]);
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
};

export default function Depth(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);
  const { auth } = useContext(AuthContext);
  const organisations = {
    'РУЭСП "Днепро-Бугский водный путь"': 1,
    'РУ Днепро-Двинское предприятие водных путей "Белводпуть"': 2,
    "РУ Днепро-Березинское предприятие водных путей": 3,
    "Государственная администрация водного транспорта": 4,
    'Филиал \"Нижне-Припятский\" г. Мозырь': 5,
    'Филиал \"Гродненский участок\" г. Гродно': 6,
    'Филиал \"Витебскводтранс\" г. Витебск': 7,
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
    const getRows = async () => {
      try {
        const res = await api.get("/gabs/getAllBySite", {
            params: { site: props.site },
        });
        const filteredData = res.data.map(item => {
            // Преобразуем даты из строк в объекты типа Date
            item.date = item.date ? new Date(item.date) : null;
            item.forecastDate = item.forecastDate ? new Date(item.forecastDate) : null;
            return item;
        });
        
        // Фильтруем объекты, исключая те, у которых дата равна null
        const filteredReady = filteredData.filter(row => row.date !== null);
        
        // Сортируем отфильтрованные данные
        const sortedData = filteredReady.sort((a, b) => a.date.getTime() - b.date.getTime());



        const finalMassiv = sortedData.filter((row) => {
          // Проверяем, есть ли в массиве ready элемент с аналогичным id, но с припиской "_change"
          const hasChange = sortedData.some(
            (changeRow) => changeRow.id === row.id + "_change"
          );

          // Возвращаем элемент, если для него нет соответствующего id с припиской "_change"
          return !hasChange;
        });

        setRows(finalMassiv);

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

    getRows();
  }, [forceReload]);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();

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

  const handlerReplayClick = (id) => async () => {
    try {
      const findObjectById = (array, id) => {
        return array.find((obj) => obj.id === id);
      };
      const gab = findObjectById(rows, id);

      if (!gab) {
        console.error("Notice with the specified ID not found.");
        return;
      }
      try {
        await api.post("/gabs/add", {
          ...gab,
          id: randomId(),
          date: new Date(),
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
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
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date();

    if (row.date.toDateString() !== today.toDateString()) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        try {
          isEditAllowed
            ? await api.delete(`/gabs/delete/${id}`)
            : await api.post(`/gabs/deleteWithConfirm/${id}`);
          setForceReload((prev) => !prev);
        } catch (err) {
          console.log(err.response.data);
        }
        return;
      }
      setMessage(() => ({
        open: true,
        messageText: "Редактирование прошлых дат запрещено.",
        severity: "warning",
      }));
      return;
    } else {
      try {
        isEditAllowed
          ? await api.delete(`/gabs/delete/${id}`)
          : await api.post(`/gabs/deleteWithConfirm/${id}`);
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
    if (editedRow.site === undefined) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.depth === null || newRow.width === null) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все обязательные поля!",
        severity: "error",
      }));
      return;
    }
    const updatedRow = { ...newRow, site: props.site };
    if (updateFlag) {
      try {
        const currentDate = new Date();

        // Предположим, что newRow.date_start содержит дату в формате 'год-месяц-день 00:00:00'
        // Преобразуем строку даты в объект JavaScript Date
        if (updatedRow.forecastDate){
          const startDate = new Date(updatedRow.forecastDate);
        
          // Заменяем время в startDate на текущее время
          startDate.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
          
          // Обновляем date_start в newRow
          updatedRow.forecastDate = startDate.toISOString();
        }
        else{
          updatedRow.forecastDate = null;
        }

        if (isEditAllowed) {
          await api.post("/gabs/change", {
            ...updatedRow,
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
          });
        } else {
          await api.post("/gabs/change", {
            ...updatedRow,
            id: updatedRow.id.includes("_change")
              ? updatedRow.id
              : updatedRow.id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
            forecastDate: updatedRow.forecastDate ? new Date(updatedRow.forecastDate) : null
          });
          setForceReload((prev) => !prev);
        }
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
        await api.post("/gabs/add", {
          ...updatedRow,
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
          organisation: getNumber(auth.organisation),
          forecastDate: updatedRow.forecastDate ? new Date(updatedRow.forecastDate) : null,
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
      field: "planDepth",
      headerName: "Плановая глубина, см",
      type: "string",
      width: 140,
      editable: true,
    },
    {
      field: "date",
      headerName: "Дата",
      type: "date",
      width: 120,
      editable:  auth.role === "Администратор" ? true : false,
    },
    {
      field: "limitedRoll",
      headerName: "Лимитирующий участок, перекат",
      width: 250,
      editable: true,
    },
    {
      field: "depth",
      headerName: "Глубина, см*",
      type: "string",
      width: 100,
      editable: true,
    },
    {
      field: "width",
      headerName: "Ширина, м*",
      type: "string",
      width: 90,
      editable: true,
    },
    {
      field: "forecastDate",
      headerName: "Дата прогноза",
      type: "date",
      width: 120,
      editable: true,
    },
    {
      field: "forecastDepth",
      headerName: "Прогнозируемая глубина, м",
      type: "string",
      width: 200,
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
          <GridActionsCellItem
            icon={<ReplayIcon />}
            label="Повторить"
            onClick={handlerReplayClick(id)}
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
    },
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ ml: "20px", fontSize: 17 }}>{props.site}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
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

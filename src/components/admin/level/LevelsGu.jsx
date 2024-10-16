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
  gridClasses,
} from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { Box } from "@mui/system";
import { AuthContext } from "../../../contexts/AuthContext";

 //Добавить в БД гидропосты, исправить
 const basicLevels = {
  "Судоходный г/у №12 Стахово":[520, 247, 130.78, 128.05],
  "Судоходный г/у №11 Качановичи": [442, 222, 133.35, 131.15],

  "Судоходный г/у №1 Дубой": [500, 260, 136.00, 133.60],

  "Судоходный г/у №2 Переруб": [390, 176, 138.10, 136.00],
  "Судоходный г/у №3 Рагодощ": [385, 195, 139.90, 138.10],
  "Судоходный г/у №4 Овзичи": [380, 200, 141.70, 139.90],
  "Судоходный г/у №5 Ляховичи": [410, 217, 143.60, 141.70],
  "Судоходный г/у Кобрин": [790, 255, 143.60, 138.25],

  "Судоходный г/у №8 Залузье": [485, 250, 138.25, 136.25],
  "Судоходный г/у №9 Новосады": [420, 181, 135,90, 133.50],
  "Судоходный г/у №10 Тришин": [415, 275, 133.50, 132.10],
  "Брест плотина": [275, 190, 132.10, 131.25],

  "Судоходный шлюз Витебская ГЭС": [0, 41, 139, 123.68],

  "Гродненская ГЭС":[0, 40, 102, 91.71],
  "Полоцкая ГЭС": [0,0, 118, 0],

  "Белорусская часть г/у Кужинец":[248, 190, 103.20, 100.3],
  "Судоходный г/у Волкушек":[240, 130, 100.3, 96.3],
  "Судоходный г/у Домбровка":[260, 120, 96.3, 93],
  "Судоходный г/у Немново":[225, 165, 93, 0],
}

function getBasicLevels(hydronode) {
return basicLevels[hydronode] || null;
}

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const { hydronode } = props;
 

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        date: new Date(),
        level1_basic_reuka: getBasicLevels(hydronode)[0],
        level2_basic_reuka: getBasicLevels(hydronode)[1],
        level1_basic_mbc: getBasicLevels(hydronode)[2],
        level2_basic_mbc: getBasicLevels(hydronode)[3],
        level1: null,
        level2: null,
        level1_VBChange: null,
        level2_NBChange: null,
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
  hydronode: PropTypes.string.isRequired,
};

export default function LevelsGuAdmin(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [forceReload, setForceReload] = useState(false);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const { auth } = useContext(AuthContext);
  const { hydronode } = props;


//Такая же херня
  const organisations = {
    'РУЭСП "Днепро-Бугский водный путь"': 1,
    'РУ Днепро-Двинское предприятие водных путей "Белводпуть"': 2,
    "РУ Днепро-Березинское предприятие водных путей": 3,
    "Государственная администрация водного транспорта": 4,
    'Филиал \"Нижне-Припятский\" г. Мозырь': 5,
    'Филиал \"Гродненский участок\" г. Гродно': 6,
    'Филиал \"Витебскводтранс\" г. Витебск': 7,
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
    const getData = async () => {
      try {
        const res = await api.get("/levelsGu/getAllByHydronode", {
          params: { hydropost: props.hydronode },
        });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
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

  const handleDeleteClick = (id) => async () => {
    const row = rows.find((row) => row.id === id);
    const today = new Date().toDateString();

    // Проверка, что значение в столбце "Дата" не равно сегодняшней дате
    // ИЛИ пользователь не является администратором
    if (row.date.toDateString() !== today) {
      if (auth.role === "Администратор") {
        setUpdateFlag(true);
        try {
          isEditAllowed
            ? await api.delete(`/levelsGu/delete/${id}`)
            : await api.post(`/levelsGu/deleteWithConfirm/${id}`);
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
          ? await api.delete(`/levelsGu/delete/${id}`)
          : await api.post(`/levelsGu/deleteWithConfirm/${id}`);
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
      }
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
      level1_VBChange: parseFloat((newRow.level1_basic_reuka == 0 ? (newRow.level1 - newRow.level1_basic_mbc) * 100 : newRow.level1 - newRow.level1_basic_reuka).toFixed(0)),
      level2_NBChange: parseFloat((newRow.level2_basic_reuka == 0 ? (newRow.level2 - newRow.level2_basic_mbc) * 100 : newRow.level2 - newRow.level2_basic_reuka).toFixed(0)),
    };    

    let updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );

    let hydronodeData = updatedRows.filter(
      (row) => row.hydronode === updatedRow.hydronode
    );

    hydronodeData.sort((a, b) => a.date.getTime() - b.date.getTime());
    

    //Index - это id строки в таблице
    let index = hydronodeData.findIndex((item) => item.id === updatedRow.id);
    let differenceLevel1;
    let differenceLevel2;
    // hydronodeData.filter((item) =>!item.id.includes("_change"))
    if (index - 1 < 0) {
      differenceLevel1 = 0;
      differenceLevel2 = 0;
      updatedRow.level1Change = differenceLevel1;
      updatedRow.level2Change = differenceLevel2;

    } else {
      if (newRow.level1_basic_reuka == 0){
        differenceLevel1 = parseFloat((hydronodeData[index].level1 - hydronodeData[index - 1].level1) * 100).toFixed(0)
      }
      else{
        differenceLevel1 = parseFloat(hydronodeData[index].level1 - hydronodeData[index - 1].level1).toFixed(0)
      }

      if( newRow.level2_basic_reuka == 0) {
        differenceLevel2 = parseFloat((hydronodeData[index].level2 - hydronodeData[index - 1].level2) * 100).toFixed(0)
      }
      else{
        differenceLevel2 = parseFloat(hydronodeData[index].level2 - hydronodeData[index - 1].level2).toFixed(0)
      }
      
      updatedRow.level1Change = differenceLevel1;
      updatedRow.level2Change = differenceLevel2;
    }
    if (hydronodeData[index + 1] !== undefined) {
      hydronodeData[index + 1].level1Change =
        parseFloat(hydronodeData[index + 1].level1 - hydronodeData[index].level1);

      hydronodeData[index + 1].level2Change = parseFloat(
        hydronodeData[index + 1].level2 - hydronodeData[index].level2).toFixed(0);

      try {
        if (isEditAllowed) {
          let res = await api.post("/levelsGu/change", {
            ...hydronodeData[index + 1],
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
          });
        } else {
          let res = await api.post("/levelsGu/change", {
            ...hydronodeData[index + 1],
            id: hydronodeData[index + 1].id.includes("_change")
              ? hydronodeData[index + 1].id
              : hydronodeData[index + 1].id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
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
          await api.post("/levelsGu/change", {
            ...updatedRow,
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
          });
        } else {
          await api.post("/levelsGu/change", {
            ...updatedRow,
            id: updatedRow.id.includes("_change")
              ? updatedRow.id
              : updatedRow.id + "_change",
            typeOfChange: "Изменено",
            confirmation: isEditAllowed,
            organisation: getNumber(auth.organisation),
          });
        }
        setForceReload((prev) => !prev);
      } catch (err) {
        console.log(err.response.data);
        return;
      }
    } else {
      try {
        let res = await api.post("/levelsGu/add", {
          ...updatedRow,
          typeOfChange: "Добавлено",
          confirmation: isEditAllowed,
          organisation: getNumber(auth.organisation),
        });
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
      editable:  auth.role === "Администратор" ? true : false,
    },
    {
      field: "level1_basic_reuka",
      headerName: `ПУ над "0" рейки, ВБ (см)`,
      type: "string",
      width: 120,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          default_up:
           getBasicLevels(hydronode)[0] != 0,
        });
      },
      editable: auth.role === "Администратор" ? true : false,
    },
    {
      field: "level2_basic_reuka",
      headerName: `ПУ над "0" рейки, НБ (см)`,
      type: "string",
      width: 120,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          default:
           getBasicLevels(hydronode)[1] != 0,
        });
      },
      editable: auth.role === "Администратор" ? true : false,
    },
    {
      field: "level1_basic_mbc",
      headerName: `ПУ, ВБ (мБС)`,
      type: "string",
      width: 120,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          default_up:
            getBasicLevels(hydronode)[0] == 0 && getBasicLevels(hydronode)[2] != 0,
        });
      },
      editable: auth.role === "Администратор" ? true : false,
    },
    {
      field: "level2_basic_mbc",
      headerName: "ПУ, НБ (мБС)",
      type: "string",
      width: 120,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          default:
            getBasicLevels(hydronode)[1] == 0 && getBasicLevels(hydronode)[3] != 0,
        });
      },
      editable: auth.role === "Администратор" ? true : false,
    },
    {
      field: "level1",
      headerName: getBasicLevels(hydronode)[0] != 0 ? `Уровень воды над "0" рейки, ВБ (см)`: `Уровень воды над ПУ, ВБ (мБС)`,
      type: "string",
      width: 220,
      editable: true,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          bold:
           true,
        });
      },
    },
    {
      field: "level2",
      headerName:getBasicLevels(hydronode)[1] != 0 ? `Уровень воды над "0" рейки, НБ (см)`: `Уровень воды над ПУ, НБ (мБС)`,
      type: "string",
      width: 220,
      editable: true,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          bold:
           true,
        });
      },
    },
    {
      field: "level1_VBChange",
      headerName: "Уровень воды над ПУ, ВБ (см)",
      type: "string",
      editable: false,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level1_VBChange < 0,
          positive: params.row.level1_VBChange > 0,
          default:
            params.row.level1_VBChange === "0" || params.row.level1_VBChange === "-" || params.row.level1_VBChange === parseFloat(0).toFixed(0),
        });
      },
      width: 115,
    },
    {
      field: "level2_NBChange",
      headerName: "Уровень воды над ПУ, НБ (см)",
      type: "string",
      editable: false,
      cellClassName: (params) => {
        if (params.row.level2_NBChange === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level2_NBChange < 0,
          positive: params.row.level2_NBChange > 0,
          default:
            params.row.level2_NBChange === "0" || params.row.level2_NBChange === "-" || params.row.level2_NBChange === parseFloat(0).toFixed(0),
        });
      },
      width: 115,
    },
    {
      field: "level1Change",
      headerName: "Изменение ВБ, см",
      type: "string",
      editable: false,
      cellClassName: (params) => {
        if (params.row.level1Change === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level1Change < 0,
          positive: params.row.level1Change > 0,
          default:
            params.row.level1Change === "0" || params.row.level1Change === "-" || params.row.level1Change === parseFloat(0).toFixed(0),
        });
      },
      width: 115,
    },
    {
      field: "level2Change",
      headerName: "Изменение НБ, см",
      type: "string",
      editable: false,
      cellClassName: (params) => {
        if (params.row.level2Change === null) {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level2Change < 0,
          positive: params.row.level2Change > 0,
          default:
            params.row.level2Change === "0" || params.row.level2Change === "-" || params.row.level2Change === parseFloat(0).toFixed(0),
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
          {props.hydronode}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            height: 600,
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
            "& .super-app.default_up": {
              backgroundColor: "rgba(114, 163, 255, 0.65)",
              color: "#1a3e72",
              fontWeight: "600",
            },
            "& .super-app.bold": {
              fontWeight: "600",
            }
          }}
        >
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: "date", sort: "desc" }],
              }
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
              toolbar: { setRows, setRowModesModel, hydronode},
            }}
            experimentalFeatures={{ newEditingApi: true }}
            sx={{
              [`& .${gridClasses.cell}`]: {
                ml: "1px",
              },
            }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

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
import ReplayIcon from "@mui/icons-material/Replay";
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

const organisations = [
  'РУЭСП "Днепро-Бугский водный путь"',
  'РУ Днепро-Двинское предприятие водных путей "Белводпуть"',
  "РУ Днепро-Березинское предприятие водных путей",
  'Филиал \"Нижне-Припятский\" г. Мозырь',
  'Филиал \"Гродненский участок\" г. Гродно',
  'Филиал \"Витебскводтранс\" г. Витебск',
];

const status = ["В процессе выполнения", "Выполнена", "Однодневная"];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const { auth } = useContext(AuthContext);
  const handleClick = () => {
    const id = randomId();
    let organisation;
    if (auth.role === "Администратор") organisation = null;
    else {
      organisation = auth.organisation;
    }

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
        organisation: organisation,
        number: "",
        typeOfWork: "-",
        riverName: "-",
        distance: "-",
        place: "-",
        date_start: formattedCurrentDate,
        date: formattedCurrentDate,
        date_end: formattedCurrentDate,
        dopInfo: "-",
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
};

export default function Spravka(props) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const { auth } = useContext(AuthContext);
  const [updateFlag, setUpdateFlag] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [isEditAllowed, setIsEditAllowed] = useState(true);
  const [forceReload, setForceReload] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    if (auth.role === "Администратор") {
      setIsEditAllowed(true);
    } else {
      setIsEditAllowed(true);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/spravka/getAllByOrganisation", {
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

        let res = await api.post("/spravka/add", {
          ...notice,
          id: randomId(),
          date: new Date(notice.date_start),
          organisation: props.organisation,
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

    setUpdateFlag(true);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    // }
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
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
            ? await api.delete(`/spravka/delete/${id}`)
            : await api.post(`/spravka/delete/${id}`);
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
          ? await api.delete(`/spravka/delete/${id}`)
          : await api.post(`/spravka/delete/${id}`);
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
    if (editedRow.organisation === null) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (updateFlag) {
      try {
        if (isEditAllowed) {
          await api.post("/spravka/change", {
            ...newRow,
            organisation: props.organisation,
          });
        } else {
          await api.post("/spravka/change", {
            ...newRow,
            id: newRow.id.includes("_change")
              ? newRow.id
              : newRow.id + "_change",
            organisation: props.organisation,
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
        let res = await api.post("/spravka/add", {
          ...newRow,
          organisation: props.organisation,
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
      field: "number_in_exploitation",
      headerName: "Количество судов в эксплуатации",
      width: 250,
      editable: true,
    },
    {
      field: "number_in_otstoy",
      headerName: "На отстое",
      width: 150,
      editable: true,
    },
    {
      field: "volume_gryzov",
      headerName: "Объем перевозок грузов, тыс. тонн",
      width: 225,
      editable: true,
    },
    {
      field: "volume_passashirov",
      headerName: "Объем перевозок пассажиров, чел.",
      width: 225,
      editable: true,
    },
    {
      field: "volume_dnouglubitelnih",
      headerName: "Объем дноуглубительных работ, нормо-кубометро-часов",
      width: 200,
      editable: true,
    },
    {
      field: "volume_izvlecheniya",
      headerName: "Объем извлеченных нерудных строительных материалов, тыс. тонн",
      width: 150,
      editable: true,
    },
    {
      field: "number_avariy",
      headerName: "Наличие аварий",
      width: 150,
      editable: true,
    },
    {
      field: "number_avariynih_proichestviy",
      headerName: "Наличие аварийных происшествий",
      width: 300,
      editable: true,
    },
    {
      field: "brak_in_work",
      headerName: "Брак в работе",
      width: 150,
      editable: true,
    },
    {
      field: "osobie_transportnie",
      headerName: "Особые транспортные аварийные случаи",
      width: 300,
      editable: true,
    },
    {
      field: "dopInfo",
      headerName: "Дополнительная информация",
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
          // <GridActionsCellItem
          //   icon={<ReplayIcon />}
          //   label="Повторить"
          //   onClick={handlerReplayClick(id)}
          //   color="inherit"
          // />,
        ];
      },
    },
  ];

  // if (auth.role === "Администратор") {
  //   columns = [
  //     {
  //       field: "organisation",
  //       headerName: "Название предприятия",
  //       type: "singleSelect",
  //       valueOptions: organisations,
  //       width: 300,
  //       editable: true,
  //     },
  //     ...columns,
  //   ];
  // }

  return (
        <Box
          sx={{
            height: "100%",
            backgroundColor: "white",
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
              toolbar: { setRows, setRowModesModel },
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
  );
}

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  GridActionsCellItem,
  gridClasses,
} from "@mui/x-data-grid";
import { api } from "../../../axiosConfig";
import { DataGrid } from "@mui/x-data-grid";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { forbiddenTime } from "../Time/forbiddenTime";
import { AuthContext } from "../../../contexts/AuthContext";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import styles from "./style.module.css";
import { ConstructionOutlined } from "@mui/icons-material";

const organisations = [
  'РУ ЭСП "Днепро-Бугский водный путь"',
  'РУ Днепро-Двинское предприятие водных путей "Белводпуть"',
  "РУ Днепро-Березинское предприятие водных путей",
];

function Table(props) {
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
      setIsEditAllowed(currentTime < forbiddenTime);
    }
  }, []);

  function formatDate(dateString) {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    return new Intl.DateTimeFormat("ru-RU", options).format(
      new Date(dateString)
    );
  }
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("ORGG ID", props.organisationId);
        const res = await api.get(
          `/confirmation/getAll/${props.organisationId}`
        );
        console.log(res);
        const mergedData = [];
        // Проверяем, есть ли данные в res.data.bridgeGabs, и если да, добавляем их в массив
        if (res.data.bridgeGabs && res.data.bridgeGabs.length > 0) {
          mergedData.push(...res.data.bridgeGabs);
        }

        // Проверяем, есть ли данные в res.data.dislocations, и если да, добавляем их в массив
        if (res.data.dislocations && res.data.dislocations.length > 0) {
          mergedData.push(...res.data.dislocations);
        }

        // Проверяем, есть ли данные в res.data.gabs, и если да, добавляем их в массив
        if (res.data.gabs && res.data.gabs.length > 0) {
          mergedData.push(...res.data.gabs);
        }

        // Проверяем, есть ли данные в res.data.levelGps, и если да, добавляем их в массив
        if (res.data.levelGps && res.data.levelGps.length > 0) {
          mergedData.push(...res.data.levelGps);
        }

        const processedData = mergedData.map((item) => {
          const id = item.id;

          if (id.includes("_change")) {
            return;
          }
          console.log(item);
          console.log("THIS IS ITEM", item);
          const before = item
            ? Object.entries(item)
                .filter(
                  ([key]) =>
                    ![
                      "id",
                      "typeOfChange",
                      "confirmation",
                      "organisation",
                    ].includes(key)
                )
                .map(([key, value]) => {
                  let prefix = "";

                  // Добавляем префикс в зависимости от свойства
                  switch (key) {
                    case "date":
                      prefix = "Дата: ";
                      value = formatDate(value);
                      break;
                    case "hydropost":
                      prefix = "Гидропост: ";
                      break;
                    case "level1":
                      prefix = "Уровень 1: ";
                      break;
                    case "level2":
                      prefix = "Уровень 2: ";
                      break;
                    case "difference":
                      prefix = "Различие: ";
                      break;
                    case "bridge":
                      prefix = "Мост: ";
                      break;
                    case "distance":
                      prefix = "Расстояние: ";
                      break;
                    case "number":
                      prefix = "Номер: ";
                      break;
                    case "place":
                      prefix = "Место: ";
                      break;
                    case "riverName":
                      prefix = "Река: ";
                      break;
                    case "typeOfWork":
                      prefix = "Тип работ: ";
                      break;
                    case "depth":
                      prefix = "Глубина: ";
                      break;
                    case "forecastDepth":
                      prefix = "Ожидаемая глубина: ";
                      break;
                    case "forecastDate":
                      prefix = "Дата прогноза: ";
                      value = formatDate(value);
                      break;
                    case "limitedRoll":
                      prefix = "Ограничивающий перекат: ";
                      break;
                    case "planDepth":
                      prefix = "Плановая глубина: ";
                      break;
                    case "width":
                      prefix = "Ширина: ";
                      break;
                    // Добавьте другие свойства, если необходимо
                  }

                  return prefix + value;
                })
                .join(", ")
            : "-";

          // Check if there is a corresponding item with '_change' suffix
          const changeItem = mergedData.find(
            (change) => change.id === `${id}_change`
          );
          const typeOfRequest = changeItem
            ? changeItem.typeOfChange
            : item.typeOfChange;

          // Determine the 'after' value based on the presence of '_change' item
          const after = changeItem
            ? Object.entries(changeItem)
                .filter(
                  ([key]) =>
                    ![
                      "id",
                      "typeOfChange",
                      "confirmation",
                      "organisation",
                    ].includes(key)
                )
                .map(([key, value]) => {
                  let prefix = "";

                  // Добавляем префикс в зависимости от свойства
                  switch (key) {
                    case "date":
                      prefix = "Дата: ";
                      value = formatDate(value);
                      break;
                    case "hydropost":
                      prefix = "Гидропост: ";
                      break;
                    case "level1":
                      prefix = "Уровень 1: ";
                      break;
                    case "level2":
                      prefix = "Уровень 2: ";
                      break;
                    case "difference":
                      prefix = "Различие: ";
                      break;
                    case "bridge":
                      prefix = "Мост: ";
                      break;
                    case "distance":
                      prefix = "Расстояние: ";
                      break;
                    case "number":
                      prefix = "Номер: ";
                      break;
                    case "place":
                      prefix = "Место: ";
                      break;
                    case "riverName":
                      prefix = "Река: ";
                      break;
                    case "typeOfWork":
                      prefix = "Тип работ: ";
                      break;
                    case "depth":
                      prefix = "Глубина: ";
                      break;
                    case "forecastDepth":
                      prefix = "Ожидаемая глубина: ";
                      break;
                    case "limitedRoll":
                      prefix = "Ограничивающий перекат: ";
                      break;
                    case "planDepth":
                      prefix = "Плановая глубина: ";
                      break;
                    case "width":
                      prefix = "Ширина: ";
                      break;
                  }

                  return prefix + value;
                })
                .join(", ")
            : "-";

          return {
            id,
            typeOfRequest,
            before,
            after,
          };
        });
        const filteredProcessedData = processedData.filter(
          (item) => item !== undefined
        );
        setRows(filteredProcessedData);
        console.log(processedData);
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

  const handleAcceptClick = (id) => async () => {
    let actionsForAccept = {
      "Добавлено": "confirmAdd",
      "Изменено": "confirmChange",
      "Удалено": "confirmDelete",
    };
    const row = rows.find((row) => row.id === id);
    try {
      await api.post(
        `/confirmation/${actionsForAccept[row.typeOfRequest]}/${id}`
      );
      console.log( `/confirmation/${actionsForAccept[row.typeOfRequest]}/${id}`)
      setForceReload((prev) => !prev);
    } catch (err) {
      console.log(err.response.data);
    }
    return;
  };

  const handleRejectClick = (id) => async () => {
    try {
      await api.delete(
        `/confirmation/reject/${id}`
      );
      setForceReload((prev) => !prev);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  let columns = [
    {
      field: "typeOfRequest",
      headerName: "Тип запроса",
      width: 250,
      editable: true,
    },
    {
      field: "before",
      headerName: "До",
      width: 300,
      editable: true,
    },
    {
      field: "after",
      headerName: "После",
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
        return [
          <GridActionsCellItem
            icon={<DoneIcon sx={{ fontSize: 22 }} />}
            label="Edit"
            className="textPrimary"
            onClick={handleAcceptClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<CloseIcon sx={{ fontSize: 22 }} />}
            label="Delete"
            onClick={handleRejectClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <DataGrid
      getRowHeight={() => "auto"}
      sx={{
        [`& .${gridClasses.cell}`]: {
          py: 2,
        },
        height: 700,
        maxWidth: 1000,
        minWidth: 1000,
      }}
      rows={rows}
      columns={columns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
      onRowEditStart={handleRowEditStart}
      onRowEditStop={handleRowEditStop}
      componentsProps={{
        toolbar: { setRows, setRowModesModel },
      }}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ConfirmPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMdScreen = useMediaQuery("(max-width:1200px)");

  return (
    <Box sx={{ display: "flex" }}>
      {/* Tabs on the left */}
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          marginRight: 20,
        }}
      >
        <Tabs
          orientation={isMdScreen ? "horizontal" : "vertical"}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="Vertical tabs example"
          sx={{ borderColor: "divider" }}
        >
          <Tab label='РУ ЭСП "Днепро-Бугский водный путь"' {...a11yProps(0)} />
          <Tab
            label='РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
            {...a11yProps(1)}
          />
          <Tab
            label="РУ Днепро-Березинское предприятие водных путей"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {/* DataGrid centered on the page */}
      <Box>
        <CustomTabPanel value={value} index={0}>
          <Table organisationId={1} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Table organisationId={2} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Table organisationId={3} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

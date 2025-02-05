import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DispatcherAccordion from "./Dispatcher/DispatcherAccordion";
import Suda from "./Suda";
import { IconShip } from "@tabler/icons-react";
import { api } from "../../axiosConfig";
import { renderStatus } from "@mui/x-data-grid-generator";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ShipDirectory() {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  React.useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get("/ports/getDataNumber");
        console.log("VSEE SIDOO", res.data)
        setRows(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRows();
  }, [update]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          width: "13%",
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab label="Диспетчеризация" {...a11yProps(0)} />
          <Tab label="Справочник по судам" {...a11yProps(1)} />
          <Tab label="Тарифные расстояния" {...a11yProps(2)} />
          <Tab label="Статистика порта" {...a11yProps(3)} />
          <Tab label="Документы" {...a11yProps(4)} />
          <Tab label="Причальный сбор" {...a11yProps(5)} />
          <Tab label="Видеоконтроль" {...a11yProps(6)} />


        </Tabs>
      </Box>
      <Box sx={{ width: "87%", p: 2, height: "100vh", overflow: "auto" }}>
        <TabPanel value={value} index={0}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    color: "#343C6A",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  Диспетчер порта: Диспетчер порта
                </div>
              </div>
              <div
                style={{
                  color: "#343C6A",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                {new Date().toLocaleString()} {/* Convert Date to string */}
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconShip />
                <text>Всего судов портах</text>
                <text>{rows[0]}</text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconShip />
                <text>Пассажирских</text>
                <text>{rows[1]}</text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconShip />
                <text>Грузовых</text>
                <text>{rows[2]}</text>
              </div>
            </div>
          </div>
          <DispatcherAccordion onUpdate={() => setUpdate(prev => !prev)} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Suda></Suda>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Suda></Suda>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Заглушка
        </TabPanel>
        <TabPanel value={value} index={4}>
        Заглушка
        </TabPanel>
        <TabPanel value={value} index={5}>
        Заглушка
        </TabPanel>
        <TabPanel value={value} index={6}>
        Заглушка
        </TabPanel>
      </Box>
    </Box>
  );
}

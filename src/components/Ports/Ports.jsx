import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { api } from "../../axiosConfig";
import { ports } from "../infrastructure/ports/data";
import { Button, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Suda from "./Suda";
import AdminPort from "../AdminPort/AdminPorts";
import { AuthContext } from "../../contexts/AuthContext";
function TabPanel({ children, value, index, ...other }) {
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
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedPort, setSelectedPort] = useState(null);
  const { auth } = useContext(AuthContext);
  const [newPorts, setNewPorts] = useState([]);
    const filteredPorts = auth.role === "Диспетчер порта" 
    ? ports.filter(port => port.name === auth.organisation)
    : ports;

  useEffect(() => {
    const getRows = async () => {
      try {
        const res = await api.get("/ports/getDataNumber");
        console.log("VSEE SIDOO", res.data);
        setRows(res.data);
        console.log("THIS NEW PORTS", newPorts)
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
      }
    };

    getRows();
  }, [update]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectPort = (portId) => {
    setSelectedPort(portId);
  };

  const handleBack = () => {
    setSelectedPort(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", mt: auth.role == "Диспетчер порта" || auth.role == "Диспетчер портов" ? "80px" : 10 }}>
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
          {selectedPort ? (
            <>
              <Button variant="outlined" onClick={handleBack} sx={{ mb: 2 }}>
                Назад
              </Button>
              <AdminPort portId={selectedPort} />
            </>
          ) : (
            <Stack direction="column" spacing={1}>
              {filteredPorts.map((port) =>
              (
                <Button
                  variant="outlined"
                  key={port.id}
                  onClick={() => handleSelectPort(port.id)}
                >
                  {port.name}
                </Button>
              ))}

            </Stack>
          )}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Suda></Suda>
        </TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
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

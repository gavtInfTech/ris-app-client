import { React, useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import style from "./style.module.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import PathInformationMap from "./map/PathInformationMap";
import Sib from "../sib/Sib";
import { api } from "../../axiosConfig";

export default function PathInformationMenu() {
  const { pathname } = useLocation();
  const [signs, setSigns] = useState([]);
  const [rifts, setRifts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [sites, setSites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getSigns = async () => {
      try {
        const resSigns = await api.get("/signs/getAll");
        const resRifts = await api.get("/rifts/getAll");
        const resAlerts = await api.get("/alerts/getAll");
        const resSites = await api.get("/sites/getAll");
        resAlerts.data.forEach((alert) => {alert.date = new Date(alert.date).toLocaleString().slice(0, 10)})
        setSigns(resSigns.data);
        setRifts(resRifts.data);
        setAlerts(resAlerts.data);
        setSites(resSites.data);
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    getSigns();
  }, []);

  return (
    <>
    { isLoaded && <Box
      sx={{
        bgcolor: "background.paper",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        className={style.appBar}
        sx={{ bgcolor: "SteelBlue", width: "100%" }} 
      >
        <Tabs
          value={pathname}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              height: 3,
            },
          }}
          textColor="inherit"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Днепр"
            value={`/path-information/dnepr`}
            to={`/path-information/dnepr`}
            component={Link}
          />
          <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Березина"
            value={`/path-information/berezina`}
            to={`/path-information/berezina`}
            component={Link}
          />
          <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Западная Двина"
            value={`/path-information/dvina`}
            to={`/path-information/dvina`}
            component={Link}
          />
          <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Неман"
            value={`/path-information/neman`}
            to={`/path-information/neman`}
            component={Link}
          />
            <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Припять-Микашевичи"
            value={`/path-information/pripyat1`}
            to={`/path-information/pripyat1`}
            component={Link}
          />
               <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Микашевичи-Брест"
            value={`/path-information/pripyat2`}
            to={`/path-information/pripyat2`}
            component={Link}
          />
             <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Сож"
            value={`/path-information/soj`}
            to={`/path-information/soj`}
            component={Link}
          />
           <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Маршрутник"
            value={`/path-information/marshrutnik`}
            to={`/path-information/marshrutnik`}
            component={Link}
          />
           <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="CИБ"
            value={`/path-information/sib`}
            to={`/path-information/sib`}
            component={Link}
          />
        </Tabs>
      </AppBar>

      <Routes>
        <Route path="/*" element={<PathInformationMap allSites={sites} signs={signs} rifts={rifts} alerts={alerts} />} />
      </Routes>
    </Box> }
    </>
  );
}

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

  useEffect(() => {
    const getSigns = async () => {
      try {
        const resSigns = await api.get("/signs/getAll");
        const resRifts = await api.get("/rifts/getAll");
        setSigns(resSigns.data);
        setRifts(resRifts.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSigns();
  }, []);

  return (
    <Box
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
            label="Мухавец"
            value={`/path-information/muhavets`}
            to={`/path-information/muhavets`}
            component={Link}
          />
            <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Днепро-Бугский канал"
            value={`/path-information/dbk`}
            to={`/path-information/dbk`}
            component={Link}
          />
            <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Пина"
            value={`/path-information/pina`}
            to={`/path-information/pina`}
            component={Link}
          />
               <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Припять"
            value={`/path-information/pripyat`}
            to={`/path-information/pripyat`}
            component={Link}
          />
             <Tab
            sx={{ width: 200, height: 70, fontSize: 14 }}
            label="Сож"
            value={`/path-information/soj`}
            to={`/path-information/soj`}
            component={Link}
          />
        </Tabs>
      </AppBar>

      <Routes>
        <Route path="/dnepr" element={<PathInformationMap signs={signs} rifts={rifts} />} />
        <Route
          path="/berezina"
          element={<PathInformationMap signs={signs} rifts={rifts} />}
        />
        <Route path="/dvina" element={<PathInformationMap signs={signs} rifts={rifts} />} />
        <Route path="/neman" element={<PathInformationMap signs={signs} rifts={rifts} />} />
        <Route
          path="/muhavets" 
          element={<PathInformationMap signs={signs} rifts={rifts} />}
        />
        <Route
          path="/dbk" 
          element={<PathInformationMap signs={signs} rifts={rifts} />}
        />
        <Route
          path="/pina" 
          element={<PathInformationMap signs={signs} rifts={rifts} />}
        />
        <Route
          path="/pripyat"
          element={<PathInformationMap signs={signs} rifts={rifts} />}
        />
        <Route path="/soj" element={<PathInformationMap signs={signs} rifts={rifts} />} />
      </Routes>
    </Box>
  );
}

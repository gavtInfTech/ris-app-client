import { React, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InformationTab from "./InformationTab";
import style from "./style.module.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Users from "./users/Users";
import Clients from "./users/Clients";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../../ProtectedRoute";
import Sites from "./sites/Sites";
import ConfirmPage from "./confirmPage/ConfirmPage";
import { api } from "../../axiosConfig";
import { useState } from "react";

export default function FullWidthTabs() {
  const { pathname } = useLocation();
  const { auth } = useContext(AuthContext);
  const [isConfirms, setIsConfirms] = useState(false);
  let value;
  let rolePath = auth.rolePath;
  console.log(pathname);
  if (pathname.includes("informationTab"))
    value = `/admin-${rolePath}/informationTab`;
  else if (pathname.includes("spravka")) value = `/admin-${rolePath}/spravka`;
  else if (pathname.includes("clients")) value = "/admin-main/clients";
  else if (pathname.includes("sites")) value = "/admin-main/sites";
  else if (pathname.includes("marshrutnik")) value = "/admin-main/marshrutnik";
  else if (pathname.includes("confirmPage")) value = "/admin-main/confirmPage";
  else value = "/admin-main/users";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(
          `/confirmation/getAll`
        );
        console.log("RESSS DATA!", res.data);
        res.data ? setIsConfirms(true) : setIsConfirms(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  });

  return (
    <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
      <AppBar
        position="static"
        className={style.appBar}
        sx={{ bgcolor: "SteelBlue", width: "100%" }}
      >
        <Tabs
          value={value}
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
            sx={{ width: 300, height: 70, fontSize: 14 }}
            label="Текущая информация"
            value={`/admin-${rolePath}/informationTab`}
            to={ auth.organisation == "Белорусское речное пароходство" ? `/admin-${rolePath}/informationTab/spravkaorabote` : `/admin-${rolePath}/informationTab/levels/levelsGp`}
            component={Link}
          />
          {auth.role === "Администратор" && (
            <Tab
              sx={{ width: 300, height: 70, fontSize: 14 }}
              label="Участки"
              value={`/admin-main/sites`}
              to={`/admin-main/sites`}
              component={Link}
            />
          )}
          {auth.role === "Администратор" && (
            <Tab
              sx={{ width: 300, fontSize: 14 }}
              label="Пользователи от предприятий водных путей"
              value="/admin-main/users"
              to="/admin-main/users"
              component={Link}
            />
          )}
          {auth.role === "Администратор" && (
            <Tab
              sx={{ width: 300, fontSize: 14 }}
              label="Клиенты"
              value="/admin-main/clients"
              to="/admin-main/clients"
              component={Link}
            />
          )}
          {auth.role === "Администратор" && (
            <Tab
              sx={{ width: 300, fontSize: 14,  color: isConfirms ? "red" : "white" }}
              label="Подтверждение"
              value="/admin-main/confirmPage"
              to="/admin-main/confirmPage"
              component={Link}
            />
          )}
        </Tabs>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/informationTab/*" element={<InformationTab />} />
          <Route element={<ProtectedRoute role="Администратор" />}>
            <Route path="/sites" element={<Sites />} />
          </Route>
          <Route element={<ProtectedRoute role="Администратор" />}>
            <Route path="/users" element={<Users />} />
          </Route>
          <Route element={<ProtectedRoute role="Администратор" />}>
            <Route path="/clients" element={<Clients />} />
          </Route>
          <Route element={<ProtectedRoute role="Администратор" />}>
            <Route path="/confirmPage" element={<ConfirmPage/>} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

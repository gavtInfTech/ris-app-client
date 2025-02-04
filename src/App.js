import { React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./index.css";
import Login from "./components/login/Login";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
// import MainTab from "./components/admin/MainTab";
import LevelsGp from "./components/waterLevels/levelsGp/LevelsGp";
import LevelsGu from "./components/waterLevels/levelsGu/LevelsGu";
import VVP from "./components/vvp/VVP";
import InfMenu from "./components/infrastructure/InfMenu";
import NoticesMainPage from "./components/noticesUser/NoticesMainPage";
import Gabarit from "./components/gabarit/Gabarit";
import Gateways from "./components/infrastructure/gateways/Gateways";
import Bridges from "./components/infrastructure/bridges/Bridges";
import Ports from "./components/infrastructure/ports/Ports";
import GES from "./components/infrastructure/ges/GES";
import LevelsMenu from "./components/waterLevels/LevelsMenu";
import Registration from "./components/login/Registration";
import CommonSib from "./components/sib/CommonSib";
import MainGabs from "./components/gabsPage/MainGabs";
import MainTab from "./components/admin/MainTab";
import MainTabClient from "./components/client/MainTabClient";
import BridgeGabs from "./components/infrastructure/bridges/BridgeGabs";
import PathInformationMenu from "./components/admin/PathInformationMenu";
import { AuthContext } from "./contexts/AuthContext";
import PortsPage from "./components/Ports/Ports";
import ShipDirectory from "./components/Ports/Ports";

// const PathInformationMenu = lazy(() => import("./components/admin/PathInformationMenu"));
// const MainTabClient = lazy(() => import("./components/client/MainTabClient")); 
// const MainTab = lazy(() => import("./components/admin/MainTab"));
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/notices" />} />
          <Route path="/vvp" element={<VVP />} />
          <Route path="/notices" element={<NoticesMainPage />} />
          <Route path="/notices/:id" element={<NoticesMainPage />} />
          <Route path="/sib" element={<CommonSib />} />
          <Route path="/levelsGp" element={<LevelsGp />} />
          <Route path="/levelsGu" element={<LevelsGu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/infmenu" element={<InfMenu />} />
          <Route path="/gabarit" element={<Gabarit />} />
          <Route path="/gateways" element={<Gateways />} />
          <Route path="/bridges" element={<Bridges />} />
          <Route path="/bridgeGabs" element={<BridgeGabs />} />
          <Route path="/ports" element={<Ports />} />
          <Route path="/allPorts" element={<ShipDirectory />} />
          <Route path="/ges" element={<GES />} />
          <Route path="/levelsMenu" element={<LevelsMenu />} />
          <Route path="/limit" element={<MainGabs />} />
          <Route element={ <ProtectedRoute role="Путевик" /> } >
              <Route path="/path-information/*" element={<PathInformationMenu />} ></Route>
          </Route>
          <Route element={<ProtectedRoute role="Администратор" />}>
            <Route path="/admin-main/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={"РУ Днепро-Березинское предприятие водных путей"}
              />
            }
          >
            <Route path="/admin-berezinskoe/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={'РУЭСП "Днепро-Бугский водный путь"'}
              />
            }
          >
            <Route path="/admin-bugskoe/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={'Диспетчер портов'}
              />
            }
          >
            <Route path="/dispetcher-portov" element={<ShipDirectory />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={
                  'РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
                }
              />
            }
          >
            <Route path="/admin-dvinskoe/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={
                  'Филиал \"Нижне-Припятский\" г. Мозырь'
                }
              />
            }
          >
            <Route path="/admin-nijnepripyat/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={
                  'Филиал \"Гродненский участок\" г. Гродно'
                }
              />
            }
          >
            <Route path="/admin-grodnenskiy/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={
                  'Филиал \"Витебскводтранс\" г. Витебск'  
                }
              />
            }
          >
            <Route path="/admin-vitebskvodtrans/*" element={<MainTab />}></Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                organisation={
                  'Белорусское речное пароходство'
                }
              />
            }
          >
            <Route path="/admin-parahodstvo/*" element={<MainTab />}></Route>
          </Route>
          <Route element={<ProtectedRoute role="Клиент" />}>
            <Route path="/client/*" element={<MainTabClient />}></Route>
          </Route>
        </Route>
   
      </Routes>
    </BrowserRouter>
  );
}

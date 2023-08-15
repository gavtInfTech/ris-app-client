import { React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./index.css";
const Login = lazy(() => import("./components/login/Login"));
const Layout = lazy(() => import("./components/layout/Layout"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const MainTab = lazy(() => import("./components/admin/MainTab"));
const LevelsGp = lazy(() =>
  import("./components/waterLevels/levelsGp/LevelsGp")
);
const LevelsGu = lazy(() =>
  import("./components/waterLevels/levelsGu/LevelsGu")
);
const VVP = lazy(() => import("./components/vvp/VVP"));
const InfMenu = lazy(() => import("./components/infrastructure/InfMenu"));
const NoticesMainPage = lazy(() =>
  import("./components/noticesUser/NoticesMainPage")
);
const Gabarit = lazy(() => import("./components/gabarit/Gabarit"));
const Gateways = lazy(() =>
  import("./components/infrastructure/gateways/Gateways")
);
const Bridges = lazy(() =>
  import("./components/infrastructure/bridges/Bridges")
);
const Ports = lazy(() => import("./components/infrastructure/ports/Ports"));
const GES = lazy(() => import("./components/infrastructure/ges/GES"));
const LevelsMenu = lazy(() => import("./components/waterLevels/LevelsMenu"));
const Registration = lazy(() => import("./components/login/Registration"));
const CommonSib = lazy(() => import("./components/sib/CommonSib"));
const MainGabs = lazy(() => import("./components/gabsPage/MainGabs"));
const MainTabClient = lazy(() => import("./components/client/MainTabClient"));
const BridgeGabs = lazy(() =>
  import("./components/infrastructure/bridges/BridgeGabs")
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/vvp" />} />
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
            <Route path="/ges" element={<GES />} />
            <Route path="/levelsMenu" element={<LevelsMenu />} />
            <Route path="/limit" element={<MainGabs />} />
            {/* <Route element={ <ProtectedRoute role="Клиент" /> } >
                        <Route path='/client/*' element={<MainTabClient />} ></Route>
                    </Route> */}
            <Route element={<ProtectedRoute role="Администратор" />}>
              <Route path="/admin-main/*" element={<MainTab />}></Route>
            </Route>
            <Route
              element={
                <ProtectedRoute
                  organisation={
                    "РУ Днепро-Березинское предприятие водных путей"
                  }
                />
              }
            >
              <Route path="/admin-berezinskoe/*" element={<MainTab />}></Route>
            </Route>
            <Route
              element={
                <ProtectedRoute
                  organisation={'РУ ЭСП "Днепро-Бугский водный путь"'}
                />
              }
            >
              <Route path="/admin-bugskoe/*" element={<MainTab />}></Route>
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
            <Route element={<ProtectedRoute role={"Клиент"} />}>
              <Route path="/client/*" element={<MainTabClient />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

import { React } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import './index.css';
import Login from './components/login/Login';
import Layout from './components/layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import MainTab from './components/admin/MainTab';
import LevelsGp from './components/waterLevels/levelsGp/LevelsGp';
import LevelsGu from './components/waterLevels/levelsGu/LevelsGu';
import VVP from './components/vvp/VVP'
import InfMenu from './components/infrastructure/InfMenu';
import NoticesMainPage from './components/noticesUser/NoticesMainPage';
import Gabarit from './components/gabarit/Gabarit';
import Gateways from './components/infrastructure/gateways/Gateways';
import Bridges from './components/infrastructure/bridges/Bridges';
import Ports from './components/infrastructure/ports/Ports';
import GES from './components/infrastructure/ges/GES';
import LevelsMenu from './components/waterLevels/LevelsMenu';
import Weather from './components/weather/Weather';
import Users from './components/admin/users/Users';
import Sib from './components/sib/Sib'
import MainGabs from './components/gabsPage/MainGabs'



export default function App() {

    return (
        <BrowserRouter>
            <Routes>
            <Route path='/qwe' element={<Users />} />
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Navigate to='/vvp' />} />
                <Route path='/vvp' element={<VVP />}/>
                <Route path='/notices' element={<NoticesMainPage />}/>
                <Route path='/sib' element={<Sib />}/>
                <Route path='/levelsGp' element={<LevelsGp />}/>
                <Route path='/levelsGu' element={<LevelsGu />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/infmenu' element={<InfMenu />}/>
                <Route path='/gabarit' element={<Gabarit />}/>
                <Route path='/gateways' element={<Gateways />}/>
                <Route path='/bridges' element={<Bridges />}/>
                <Route path='/ports' element={<Ports />}/>
                <Route path='/ges' element={<GES />}/>
                <Route path='/levelsMenu' element={<LevelsMenu />}/>
                <Route path='/limit' element={<MainGabs />}/>
                <Route element={ <ProtectedRoute role="Администратор" /> } >
                    <Route path='/admin-main/*' element={<MainTab />} ></Route>
                </Route>
                <Route element={ <ProtectedRoute organisation={"РУ Днепро-Березинское предприятие водных путей"} /> } >
                    <Route path='/admin-berezinskoe/*' element={<MainTab />} ></Route>
                </Route>
                <Route element={ <ProtectedRoute organisation={"РУ ЭСП \"Днепро-Бугский водный путь\""} /> } >
                    <Route path='/admin-bugskoe/*' element={<MainTab />} ></Route>
                </Route>
                <Route element={ <ProtectedRoute organisation={"РУ Днепро-Двинское предприятие водных путей \"Белводпуть\""} /> } >
                    <Route path='/admin-dvinskoe/*' element={<MainTab />} ></Route>
                </Route>

                <Route path='/weather' element={ <Weather /> } />
            </Route>
            </Routes>
        </BrowserRouter>
    )
}
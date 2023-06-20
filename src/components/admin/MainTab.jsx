import { React, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InformationTab from './InformationTab';
import Style from './style.module.css'
import { Route, Routes, Link, useLocation} from 'react-router-dom';
import Users from './users/Users';
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from '../../ProtectedRoute';

export default function FullWidthTabs() {
  const {pathname} = useLocation();
  const {auth} = useContext(AuthContext);
  let value;
  let rolePath = auth.rolePath;

  if (pathname.includes("informationTab")) value=`/admin-${rolePath}/informationTab`;
  else if (pathname.includes("spravka")) value = `/admin-${rolePath}/spravka`;
  else value = "/admin-main/users";

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', height: '100%' }}>
      <AppBar position="static" className={Style.appBar} sx={{ bgcolor: 'SteelBlue', width: '100%' }}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              height: 3
            }
          }}
          textColor="inherit"
        >
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Текущая информация" 
            value={`/admin-${rolePath}/informationTab`} 
            to={`/admin-${rolePath}/informationTab/levels/levelsGp`} 
            component={Link} 
          />
          { auth.role === 'Администратор' && 
          <Tab sx={{ width: 300, fontSize: 14  }} 
            label="Пользователи" 
            value="/admin-main/users" 
            to="/admin-main/users" 
            component={Link}
          />}
          {/* <Tab sx={{ width: 300, fontSize: 14  }} 
            label="Справочная информация" 
            value="/main-admin/spravka" 
            to="/main-admin/spravka" 
            component={Link}
          /> */}
        </Tabs>
      </AppBar>

        <Box sx={{ p: 3 }}>
          <Routes>
              <Route path="/informationTab/*" element={<InformationTab />} />
              {/* <Route path="/spravka" element={<Map />} /> */}
              <Route element={ <ProtectedRoute role="Администратор" /> } >
                <Route path="/users" element={<Users />} />
              </Route>
          </Routes>
        </Box>
    </Box>
  );
}
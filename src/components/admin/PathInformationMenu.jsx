import { React, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InformationTab from './InformationTab';
import PathInformationTab from './PathInformationMenu';
import style from './style.module.css'
import { Route, Routes, Link, useLocation} from 'react-router-dom';
import Users from './users/Users';
import Clients from './users/Clients';
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from '../../ProtectedRoute';

export default function PathInformationMenu() {
  const {pathname} = useLocation();
  const {auth} = useContext(AuthContext);
  let value;
  let rolePath = auth.rolePath;

  if (pathname.includes("informationTab")) value=`/admin-${rolePath}/informationTab`;
  else if (pathname.includes("spravka")) value = `/admin-${rolePath}/spravka`;
  else if (pathname.includes("clients")) value = "/admin-main/clients";
  else value = "/admin-main/users";

  return (
    <Box sx={{ bgcolor: 'background.paper',  height: '100%' }}>
      <AppBar position="static" className={style.appBar} sx={{ bgcolor: 'SteelBlue', width: '100%' }}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              height: 3
            }
          }}
          textColor="inherit"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Днепр" 
            value={`/admin-path/dnepr`} 
            to={`/admin-path/dnepr`} 
            component={Link} 
          />
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Березина" 
            value={`/admin-path/berezina`} 
            to={`/admin-path/berezina`} 
            component={Link} 
          />
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Припять" 
            value={`/admin-path/pripyat`} 
            to={`/admin-path/pripyat`} 
            component={Link} 
          />
        </Tabs>
      </AppBar>

        <Box sx={{ p: 3 }}>
          <Routes>
              <Route path="/informationTab/*" element={<InformationTab />} />
              <Route path="/travelInformation/*" element={<PathInformationTab />} />
              <Route element={ <ProtectedRoute role="Администратор" /> } >
                <Route path="/users" element={<Users />} />
              </Route>
              <Route element={ <ProtectedRoute role="Администратор" /> } >
                <Route path="/clients" element={<Clients />} />
              </Route>
          </Routes>
        </Box>
    </Box>
  );
}
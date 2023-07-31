import { React, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import style from './style.module.css'
import { Route, Routes, Link, useLocation} from 'react-router-dom';
import Sib from '../sib/Sib'

export default function FullWidthTabs() {
  const {pathname} = useLocation();

  return (
    <Box sx={{ bgcolor: 'background.paper',  height: '100%' }}>
      <AppBar position="static" className={style.appBar} sx={{ bgcolor: 'SteelBlue', width: '100%' }}>
        <Tabs
          value={pathname}
          indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              height: 3
            }
          }}
          textColor="inherit"
        >
          <Tab sx={{ width: 300, height: 70, fontSize: 14 }} 
            label="Сводный информационный бюллетень" 
            value={'/client/sib'} 
            to={'/client/sib'} 
            component={Link} 
          />
        </Tabs>
      </AppBar>

        <Box sx={{ p: 3, mt: '50px' }}>
          <Routes>
              <Route path="/sib" element={<Sib />} />
          </Routes>
        </Box>
    </Box>
  );
}
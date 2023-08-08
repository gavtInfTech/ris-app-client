import  { React, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RiverAccordionGp from './level/RiverAccordionGp';
import RiverAccordionGu from './level/RiverAccordionGu';
import RiverAccordionBridge from './bridge/RiverAccordionBridge';
import RiverAccordionDepth from './depth/RiverAccordionDepth';
import NoticeMain from './notice/NoticeMain';
import Dislocation from './dislocation/Dislocation';
import { Link, useLocation, Route, Routes } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import NestedList from "../admin/Test";
import Sib from '../sib/Sib';
import WorkMap from './map/WorkMap';

export default function InformationTab() {
  const {auth} = useContext(AuthContext);
  let info = auth.info;
  let {pathname} = useLocation();
  let value;
  let rolePath = auth.rolePath;

  if (pathname.includes("levelsGp")) {
    value = "levelsGp";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }
  if (pathname.includes("levelsGu")) {
    value = "levelsGu";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }

  return ( <div>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width:'100%' }}
    >
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={pathname}
        aria-label="Vertical tabs example"
        sx={{ borderColor: 'divider', width: '15%' }}
      >
        <Tab sx={{ height: 60, fontSize: 14 }} label="Уровни воды" value={`/admin-${rolePath}/informationTab/levels`} to={`/admin-${rolePath}/informationTab/levels/levelsGp`} component={Link}/>
        <Tab sx={{ height: 60, fontSize: 14 }} label="Габариты судового хода" value={`/admin-${rolePath}/informationTab/gabs`} to={`/admin-${rolePath}/informationTab/gabs`} component={Link}/>
        <Tab sx={{ height: 60, fontSize: 14 }} label="Габариты подмостовых переходов" value={`/admin-${rolePath}/informationTab/bridges`} to={`/admin-${rolePath}/informationTab/bridges`} component={Link}/>
        <Tab sx={{ height: 60, fontSize: 14 }} label="Дислокация тех. флота" value={`/admin-${rolePath}/informationTab/dislocation`} to={`/admin-${rolePath}/informationTab/dislocation`} component={Link}/>
        <Tab sx={{ height: 60, fontSize: 14 }} label="Уведомления" value={`/admin-${rolePath}/informationTab/notices`} to={`/admin-${rolePath}/informationTab/notices`} component={Link} />
        <Tab sx={{ height: 60, fontSize: 14 }} label="Сводный информационный бюллетень" value={`/admin-${rolePath}/informationTab/sib`} to={`/admin-${rolePath}/informationTab/sib`} component={Link} />
      </Tabs>

      <Box sx={{ pl: 4, pb: 4, width: '100%'}}>
          <Routes>
              <Route path="/levels/*" element={
                <Box>
                  <Tabs
                    variant="scrollable"
                    value={value}
                    aria-label="Vertical tabs example"
                    sx={{ pt: 1, pl: 3, pb: 5 }}
                  >
                    <Tab sx={{ height: 60, fontSize: 14, width: 300 }} label="Уровни воды на гидропостах" value="levelsGp" to={`/admin-${rolePath}/informationTab/levels/levelsGp`} component={Link}/>
                    <Tab sx={{ height: 60, fontSize: 14, width: 300 }} label="Уровни воды на гидроузлах" value="levelsGu" to={`/admin-${rolePath}/informationTab/levels/levelsGu`} component={Link}/>
                  </Tabs>


                  <Routes>
                      <Route path="/levelsGp" element={
                        <Box  sx={{ pl: 4, pb: 4 }}>
                          {
                            info.hydropostRivers.map((river) => {
                              return <RiverAccordionGp river = {river}/>
                            })
                          }
                        </Box>
                      } />
                      <Route path="/levelsGu" element={
                        <Box  sx={{ pl: 4, pb: 4 }}>
                          {
                            info.hydronodeRivers.map((river) => {
                              return <RiverAccordionGu river = {river}/>
                            })
                          }
                        </Box>
                      } />
                  </Routes>

                  
                  </Box>
              } />
              <Route path="/gabs" element={
                <Box sx={{ pl: 6, pt: 4 }}>
                  {
                    info.siteRivers.map((river) => {
                      return <RiverAccordionDepth river = {river}/>
                    })
                  }
                </Box>
              } />
              <Route path="/bridges" element={
                <Box sx={{ pl: 6, pt: 4 }}>
                  {
                    info.bridgeRivers.map((river) => {
                      return <RiverAccordionBridge river = {river}/>
                    })
                  }
                </Box>
              } />
              <Route path="/dislocation" element={
                <Box sx={{ pl: 6, pt: 4 }}>
                  <WorkMap />
                </Box>
              } />
              <Route path="/notices" element={
                <Box sx={{ pl: 6, pt: 4 }}>
                  <NoticeMain />
                </Box>
              } />
               <Route path="/sib" element={
                <Box sx={{ mt: '40px' }}>
                  <Sib />
                </Box>
              } />
          </Routes>
        </Box>
    </Box>
    </div>
  );
}
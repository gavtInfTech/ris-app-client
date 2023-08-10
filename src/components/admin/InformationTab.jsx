import { React, useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RiverAccordionGp from "./level/RiverAccordionGp";
import RiverAccordionGu from "./level/RiverAccordionGu";
import RiverAccordionBridge from "./bridge/RiverAccordionBridge";
import RiverAccordionDepth from "./depth/RiverAccordionDepth";
import NoticeMain from "./notice/NoticeMain";
import Dislocation from "./dislocation/Dislocation";
import { Link, useLocation, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Sib from "../sib/Sib";
import WorkMap from "./map/WorkMap";
import styles from "./style.module.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from '@mui/material';

export default function InformationTab() {
  const { auth } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  let info = auth.info;
  let { pathname } = useLocation();
  let value;
  let rolePath = auth.rolePath;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMdScreen = useMediaQuery('(max-width:1200px)');

  if (pathname.includes("levelsGp")) {
    value = "levelsGp";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }
  if (pathname.includes("levelsGu")) {
    value = "levelsGu";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: { xs: 'column', lg: 'row' },
          width: "100%",
        }}
      >
        <Tabs
          orientation={isMdScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={pathname}
          aria-label="Vertical tabs example"
          sx={{ borderColor: "divider" }}
        >
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Уровни воды"
            value={`/admin-${rolePath}/informationTab/levels`}
            to={`/admin-${rolePath}/informationTab/levels/levelsGp`}
            component={Link}
          />
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Габариты судового хода"
            value={`/admin-${rolePath}/informationTab/gabs`}
            to={`/admin-${rolePath}/informationTab/gabs`}
            component={Link}
          />
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Габариты подмостовых переходов"
            value={`/admin-${rolePath}/informationTab/bridges`}
            to={`/admin-${rolePath}/informationTab/bridges`}
            component={Link}
          />
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Дислокация тех. флота"
            value={`/admin-${rolePath}/informationTab/dislocation`}
            to={`/admin-${rolePath}/informationTab/dislocation`}
            component={Link}
          />
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Уведомления"
            value={`/admin-${rolePath}/informationTab/notices`}
            to={`/admin-${rolePath}/informationTab/notices`}
            component={Link}
          />
          <Tab
            sx={{ height: 60, fontSize: 14 }}
            label="Сводный информационный бюллетень"
            value={`/admin-${rolePath}/informationTab/sib`}
            to={`/admin-${rolePath}/informationTab/sib`}
            component={Link}
          />
        </Tabs>

        <Box className={styles.tabPanel}>
          <Routes>
            <Route
              path="/levels/*"
              element={
                <Box>
                  <Tabs
                    variant="scrollable"
                    value={value}
                    aria-label="Vertical tabs example"
                    sx={{ mr: -3, pb: 5 }}
                    allowScrollButtonsMobile
                  >
                    <Tab
                      sx={{ height: 60, fontSize: 14, width: 300 }}
                      label="Уровни воды на гидропостах"
                      value="levelsGp"
                      to={`/admin-${rolePath}/informationTab/levels/levelsGp`}
                      component={Link}
                    />
                    <Tab
                      sx={{ height: 60, fontSize: 14, width: 300 }}
                      label="Уровни воды на гидроузлах"
                      value="levelsGu"
                      to={`/admin-${rolePath}/informationTab/levels/levelsGu`}
                      component={Link}
                    />
                  </Tabs>

                  <Routes>
                    <Route
                      path="/levelsGp"
                      element={info.hydropostRivers.map((river) => {
                        return <RiverAccordionGp river={river} />;
                      })}
                    />
                    <Route
                      path="/levelsGu"
                      element={info.hydronodeRivers.map((river) => {
                        return <RiverAccordionGu river={river} />;
                      })}
                    />
                  </Routes>
                </Box>
              }
            />
            <Route
              path="/gabs"
              element={info.siteRivers.map((river) => {
                return <RiverAccordionDepth river={river} />;
              })}
            />
            <Route
              path="/bridges"
              element={info.bridgeRivers.map((river) => {
                return <RiverAccordionBridge river={river} />;
              })}
            />
            <Route path="/dislocation" element={<Dislocation />} />
            <Route path="/notices" element={<NoticeMain />} />
            <Route path="/sib" element={<Sib />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

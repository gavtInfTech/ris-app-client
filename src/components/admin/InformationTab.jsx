import { React, useContext, useState, useEffect } from "react";
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
import styles from "./style.module.css";
import { useMediaQuery } from "@mui/material";
import { api } from "../../axiosConfig";
import { customComparator } from "../vvp/siteMethods";
import RiverAccordionDislocation from "./dislocation/RiverAccordionDislocation";
import RiverAccordionSpravka from "./spravkaorabote/RiverAccordionSpravka";
import DownloadTable from "../component/DownloadTable";
import {
  generatePdfFileByPeriodDislocation,
  generatePdfFileByPeriodGabs,
  generatePdfFileByPeriodLevelsGP,
  generatePdfFileByPeriodLevelsGU,
} from "../sib/generatePdfFile";

export default function InformationTab() {
  const [sites, setSites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { auth } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [organisationsName, setOrganisationsName] = useState([]);
  const [spravkaOrganisations, setspravkaOrganisations] = useState([]);

  let info = auth.info;
  let { pathname } = useLocation();
  let value;
  let rolePath = auth.rolePath;

  const [ships, setShips] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/sites/getAll");
        setSites(res.data.sort(customComparator));
        const organisations = await api.get("/ships/getAllOrganisations");
        console.log(organisations);
        console.log(auth.info.sibOrganizations);
        setOrganisationsName(auth.info.sibOrganizations);
        setspravkaOrganisations(auth.info.spravkaOrganisations);
        setShips(
          await Promise.all(
            organisations.data.map(async (org) => {
              const resOrg = await api.get("/ships/getAllByOrganisation", {
                params: { organisationName: org },
              });
              return {
                organisation: org,
                ships: resOrg.data.map((ship) => ship.name),
              };
            })
          )
        );
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
        setIsLoaded(true);
      }
    };
    getData();
  }, []);

  console.log(sites);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMdScreen = useMediaQuery("(max-width:1200px)");

  if (pathname.includes("levelsGp")) {
    value = "levelsGp";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }
  if (pathname.includes("levelsGu")) {
    value = "levelsGu";
    pathname = `/admin-${rolePath}/informationTab/levels`;
  }

  return (
    <>
      {isLoaded && (
        <Box
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            width: "100%",
          }}
        >
          <Tabs
            orientation={isMdScreen ? "horizontal" : "vertical"}
            variant="scrollable"
            allowScrollButtonsMobile
            value={pathname}
            aria-label="Vertical tabs example"
            sx={{ borderColor: "divider" }}
          >
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Уровни воды"
                value={`/admin-${rolePath}/informationTab/levels`}
                to={`/admin-${rolePath}/informationTab/levels/levelsGp`}
                component={Link}
              />
            )}
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Габариты судового хода"
                value={`/admin-${rolePath}/informationTab/gabs`}
                to={`/admin-${rolePath}/informationTab/gabs`}
                component={Link}
              />
            )}
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Габариты подмостовых переходов"
                value={`/admin-${rolePath}/informationTab/bridges`}
                to={`/admin-${rolePath}/informationTab/bridges`}
                component={Link}
              />
            )}
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Дислокацию тех. флота и ИРП"
                value={`/admin-${rolePath}/informationTab/dislocation`}
                to={`/admin-${rolePath}/informationTab/dislocation`}
                component={Link}
              />
            )}
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Извещения"
                value={`/admin-${rolePath}/informationTab/notices`}
                to={`/admin-${rolePath}/informationTab/notices`}
                component={Link}
              />
            )}
            {auth.organisation != "Белорусское речное пароходство" && (
              <Tab
                sx={{ height: 60, fontSize: 14 }}
                label="Сводный информационный бюллетень"
                value={`/admin-${rolePath}/informationTab/sib`}
                to={`/admin-${rolePath}/informationTab/sib`}
                component={Link}
              />
            )}
            <Tab
              sx={{ height: 60, fontSize: 14 }}
              label="Справка о работе организаций внутреннего водного транспорта"
              value={`/admin-${rolePath}/informationTab/spravkaorabote`}
              to={`/admin-${rolePath}/informationTab/spravkaorabote`}
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
                      sx={{ pb: 5 }}
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
                        element={info.hydropostRivers.map((river, index) => {
                          return (
                            <div>
                              {index == 0 &&
                              auth.organisation ===
                                "Государственная администрация водного транспорта" ? (
                                <DownloadTable
                                  generatePDF={generatePdfFileByPeriodLevelsGP}
                                  way={"levelsGp"}
                                ></DownloadTable>
                              ) : (
                                " "
                              )}
                              <RiverAccordionGp river={river} />
                            </div>
                          );
                        })}
                      />
                      <Route
                        path="/levelsGu"
                        element={info.hydronodeRivers.map((river, index) => {
                          return (
                            <div>
                              {index == 0 &&
                              auth.organisation ===
                                "Государственная администрация водного транспорта" ? (
                                <DownloadTable
                                  generatePDF={generatePdfFileByPeriodLevelsGU}
                                  way={"levelsGu"}
                                ></DownloadTable>
                              ) : (
                                " "
                              )}
                              <RiverAccordionGu river={river} />
                            </div>
                          );
                        })}
                      />
                    </Routes>
                  </Box>
                }
              />
              <Route
                path="/gabs"
                element={info.siteRivers.map((river, index) => {
                  let riverSites;

                  if (
                    auth.organisation ===
                    "Государственная администрация водного транспорта"
                  ) {
                    riverSites = sites.filter((site) => site.river === river);
                  } else if (
                    auth.organisation ===
                    'РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
                  ) {
                    riverSites = sites.filter(
                      (site) =>
                        site.river === river &&
                        (site.organisation === auth.organisation ||
                          site.organisation ===
                            'Филиал "Гродненский участок" г. Гродно')
                    );
                  } else {
                    riverSites = sites.filter(
                      (site) =>
                        site.river === river &&
                        site.organisation === auth.organisation
                    );
                  }
                  return (
                    <div>
                      {index == 0 &&
                      auth.organisation ===
                        "Государственная администрация водного транспорта" ? (
                        <DownloadTable
                          generatePDF={generatePdfFileByPeriodGabs}
                          way={"gabs"}
                        ></DownloadTable>
                      ) : (
                        " "
                      )}
                      <RiverAccordionDepth river={river} sites={riverSites} />
                    </div>
                  );
                })}
              />
              <Route
                path="/bridges"
                element={info.bridgeRivers.map((river) => {
                  return <RiverAccordionBridge river={river} />;
                })}
              />
              <Route
                path="/dislocation"
                element={organisationsName.map((organisation, index) => {
                  return (
                    <div>
                      {index == 0 &&
                      auth.organisation ===
                        "Государственная администрация водного транспорта" ? (
                        <DownloadTable
                          generatePDF={generatePdfFileByPeriodDislocation}
                          way={"dislocation"}
                        ></DownloadTable>
                      ) : (
                        " "
                      )}
                      <RiverAccordionDislocation
                        organisation={organisation}
                        ships={
                          ships.filter(
                            (ship) => ship.organisation == organisation
                          )[0].ships
                        }
                      />
                    </div>
                  );
                })}
              />
              <Route
                path="/spravkaorabote"
                element={spravkaOrganisations.map((organisation) => {
                  return <RiverAccordionSpravka organisation={organisation} />;
                })}
              />

              <Route path="/notices" element={<NoticeMain sites={sites} />} />
              <Route path="/sib" element={<Sib />} />
            </Routes>
          </Box>
        </Box>
      )}
    </>
  );
}

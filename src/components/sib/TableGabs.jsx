import { React } from "react";
import { siteGroups } from "../admin/adminInfo";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import * as adminInfo from "../admin/adminInfo";

const emptyObj = {
  planDepth: "—",
  date: "—",
  limitedRoll: "—",
  depth: "—",
  width: "—",
  forecastDate: "—",
  forecastDepth: "—",
};

export default function TableGabs(props) {
  let rows = [];
  const { auth } = useContext(AuthContext);
  const allInfo = props.allInfo;
  let informationData; 
  if(allInfo){
    informationData = adminInfo;
  }
  else{
    informationData = auth.info;

  }
  let index = 0;
  props.sites.map((site) => {
    let rowData = props.data.find((dat) => dat.site === site.name);
    if (rowData === undefined)
      rows.push({ site: site.name, river: site.river, ...emptyObj });
    else rows.push(rowData);
  });

  const riverRows = (river) => {
    let filteredRows = rows.filter((row) => row.river === river);
    let riverRows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="left">{row.site}</TableCell>
          <TableCell align="center">{row.planDepth}</TableCell>
          <TableCell align="center">
            {row.date.toLocaleString().slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.limitedRoll}</TableCell>
          <TableCell align="center">{row.depth}</TableCell>
          <TableCell align="center">{row.width}</TableCell>
          <TableCell align="center">
            {row.forecastDate.toLocaleString().slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.forecastDepth}</TableCell>
        </TableRow>
      );
    });
    return riverRows;
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        3. НАИМЕНЬШИЕ ГАБАРИТЫ СУДОВОГО ХОДА
      </Typography>
      <TableContainer sx={{ marginBottom: 5 }}>
        <Table id="gabsTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">
                Наименование рек и участков
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Плановая глубина, см
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Дата
              </TableCell>
              <TableCell rowSpan={2} align="center" style={{maxWidth: "200px", minWidth: "175px"}}>
                Лимитирующий участок, перекат
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Глубина, см
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Ширина, м
              </TableCell>
              <TableCell colSpan={2} align="center">
                Прогноз
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">Глубина, см</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.sibDistricts.map((riverName) => {
              const rows = [];
              rows.push(
                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    {riverName}
                  </TableCell>
                </TableRow>
              );
              rows.push(riverRows(informationData.siteRivers[index]));
              index = index + 1;
              return rows;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

import { React } from "react";
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

export default function TableDislocations(props) {
  const data = props.data;
  const allInfo = props.allInfo;
  const { auth } = useContext(AuthContext);
  let informationData; 
  if(allInfo){
    informationData = adminInfo;
  }
  else{
    informationData = auth.info;

  }
  const riverRows = (organisation) => {
    let filteredRows = data.filter(
      (item) => item.organisation === organisation
    );
    let rows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="center">{row.number}</TableCell>
          <TableCell align="center">{row.typeOfWork}</TableCell>
          <TableCell align="center">{row.riverName}</TableCell>
          <TableCell align="center">{row.distance}</TableCell>
          <TableCell align="center">{row.place}</TableCell>
          <TableCell align="center">
            {row.date_start
              .toLocaleString()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join(".")}
          </TableCell>
        </TableRow>
      );
    });
    return rows;
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ
      </Typography>
      <TableContainer sx={{ marginBottom: 5 }}>
        <Table id="dislocationsTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">
                № судна/партии
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Вид работы
              </TableCell>
              <TableCell colSpan={3} align="center">
                Место работы
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Дата начала работы
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Наименование реки и № участка
              </TableCell>
              <TableCell align="center">Км от устья</TableCell>
              <TableCell align="center">Место дислокации</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.sibOrganizations.map((riverName) => {
              const rows = [];
              rows.push(
                <TableRow key={riverName}>
                  <TableCell
                    align="left"
                    colSpan={6}
                    sx={{ fontWeight: "bold" }}
                  >
                    {riverName}
                  </TableCell>
                </TableRow>
              );
              rows.push(...riverRows(riverName));
              return rows;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

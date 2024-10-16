import { React, useContext } from "react";
import { hydronodes } from "../waterLevels/levelsGu/data";
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
import * as adminInfo from "../admin/adminInfo";

export default function TableLevelsGu(props) {
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
  let rows = hydronodes.map((row) => {
    let rowData = data.find((dat) => dat.hydronode === row.hydronode);
    if (rowData === undefined) return { ...row };
    return {
      ...row,
      level1_VBChange: rowData.level1_VBChange,
      level2_NBChange: rowData.level2_NBChange,
      level1Change: rowData.level1Change === "-" ? "—" : rowData.level1Change,
      level2Change: rowData.level2Change === "-" ? "—" : rowData.level2Change,
      date: rowData.date.toLocaleString().slice(0, 10),
    };
  });

  const riverRows = (river) => {
    let filteredRows = rows.filter((row) => row.river === river);
    let riverRows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="left">{row.hydronode}</TableCell>
          <TableCell align="center">{row.level1_VBChange}</TableCell>
          <TableCell align="center">{row.level2_NBChange}</TableCell>
          <TableCell align="center">{row.level1Change}</TableCell>
          <TableCell align="center">{row.level2Change}</TableCell>
        </TableRow>
      );
    });
    return riverRows;
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        2. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА
      </Typography>
      <TableContainer sx={{ marginBottom: 5 }}>
        <Table id="levelsGuTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">
                Наименование рек каналов и гидроузлов
              </TableCell>
              <TableCell colSpan={2} align="center">
                Уровни воды над проектным горизонтом, см
              </TableCell>
              <TableCell colSpan={2} align="center">
                Изменение уровня за сутки, см
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ВБ</TableCell>
              <TableCell align="center">НБ</TableCell>
              <TableCell align="center">ВБ</TableCell>
              <TableCell align="center">НБ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.hydronodeRivers.map((riverName) => {
              const rows = [];
              rows.push(
                <TableRow key={riverName}>
                  <TableCell
                    align="left"
                    colSpan={6}
                    sx={{ fontWeight: "bold" }}
                  >
                     {[
                      "Днепро-Бугский канал",
                      "Микашевичский канал",
                      "Туровский затон",
                      "Августовский канал",
                      "Верхний участок реки Припять",
                    ].includes(riverName)
                      ? riverName
                      : `р. ${riverName}`}
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

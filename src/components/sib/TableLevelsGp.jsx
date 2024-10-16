import { React, useState, useEffect } from "react";
import { hydroposts } from "../waterLevels/levelsGp/data";
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
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as adminInfo from "../admin/adminInfo";

export default function TableLevelsGp(props) {
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

  console.log(hydroposts);
  let rows = hydroposts.map((row) => {
    let rowData = data.find((dat) => dat.hydropost === row.hydropost);
    if (rowData === undefined) return { ...row };
    return {
      ...row,
      level1: rowData.level1,
      level2: rowData.level2,
      date: rowData.date.toLocaleString().slice(0, 10),
      difference: rowData.difference,
    };
  });

  const riverRows = (river) => {
    let filteredRows = rows.filter((row) => row.river === river);
    let riverRows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="left">{row.hydropost}</TableCell>
          <TableCell align="center">{row.level1}</TableCell>
          <TableCell align="center">{row.level2}</TableCell>
          <TableCell align="center">{row.difference}</TableCell>
          <TableCell colSpan={2} align="center" sx={row.difference == 0 ? {backgroundColor: "#BAD2FF"} : row.difference == "—" ? {} :  row.difference > 0 ? { backgroundColor: "#CFFFBC"} : { backgroundColor: "#D47483"} }>{row.difference == 0 ? "►" : row.difference == "—" ? "—" : row.difference > 0 ? "▲" : "▼"}</TableCell>
        </TableRow>
      );
    });
    return riverRows;
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        1. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ НА 8 ЧАСОВ УТРА
      </Typography>
      <TableContainer sx={{ marginBottom: 5 }}>
        <Table id="levelsGpTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">
                Наименование рек и гидрологических постов
              </TableCell>
              <TableCell colSpan={2} align="center">
                Уровни воды, см
              </TableCell>
              <TableCell colSpan={2} rowSpan={2} align="center">
                Прибыло (+), <br /> убыло (-), см
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Над "0" граф.</TableCell>
              <TableCell align="center">Над проектным горизонтом</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.hydropostRivers.map((riverName) => {
              const rows = [];
              rows.push(
                <TableRow key={riverName}>
                  <TableCell
                    align="left"
                    colSpan={5}
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

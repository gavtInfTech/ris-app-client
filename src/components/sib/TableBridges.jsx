import { React, useState, useEffect } from "react";
import { bridgeGroups } from "../admin/adminInfo";
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

function keyToRiver(key) {
  // eslint-disable-next-line default-case
  switch (key) {
    case "dnepr":
      return "Днепр";
    case "berezina":
      return "Березина";
    case "soj":
      return "Сож";
    case "neman":
      return "Неман";
    case "avgCanal":
      return "Августовский канал";
    case "dbk":
      return "Днепро-Бугский канал";
    case "pina":
      return "Пина";
    case "vpripyat":
      return "Верхний участок реки Припять";
    case "pripyat":
      return "Припять";
    case "zapDvina":
      return "Западная Двина";
    case "muhavets":
      return "Мухавец";
  }
}

export default function TableBridges(props) {
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

  let rows = [];
  Object.keys(informationData.bridgeGroups).forEach((key) => {
    informationData.bridgeGroups[key].forEach((bridge) => {
      const rowData = data.find((item) => item.bridge === bridge.name);
      rows.push({
        bridge: bridge.name,
        river: keyToRiver(key),
        height: rowData ? rowData.height : "—",
        kilometr: bridge.kilometr || "—",
        rsu: bridge.rsu || "—",
      });
    });
  });

  const riverRows = (river) => {
    let filteredRows = rows.filter((row) => row.river === river);
    let riverRows = filteredRows.map((row) => {
      return (
        <TableRow key={row.bridge}>
          <TableCell align="left">{row.bridge}</TableCell>
          <TableCell align="center">{row.kilometr}</TableCell>
          <TableCell align="center">{row.rsu}</TableCell>
          <TableCell align="center">{row.height}</TableCell>
        </TableRow>
      );
    });
    return riverRows;
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        5. ГАБАРИТЫ ПОДМОСТОВЫХ ПЕРЕХОДОВ
      </Typography>
      <TableContainer sx={{ marginBottom: 5 }}>
        <Table id="bridgesTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} align="center">
                Наименование рек и мостов
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Километр реки/канала
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Высота подмостового габарита над РСУ, м
              </TableCell>
              <TableCell rowSpan={2} align="center">
                Текущая высота пролета, м
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.bridgeRivers.map((riverName) => {
              const rows = [];
              rows.push(
                <TableRow key={riverName}>
                  <TableCell
                    align="left"
                    colSpan={8}
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

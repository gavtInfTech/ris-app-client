import { React, useState, useEffect } from "react";
import { siteRivers } from "../admin/adminInfo";
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
import { api } from "../../axiosConfig";
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
    case "muhavets":
      return "Мухавец";
    case "dnepBug":
      return "Днепро-Бугский канал";
    case "pina":
      return "Пина";
    case "upperPripyat":
      return "Верхний участок реки Припять";
    case "pripyat":
      return "Припять";
    case "mikashevichskiCanal":
      return "Микашевичский канал";
    case "gorin":
      return "Горынь";
    case "zapDvina":
      return "Западная Двина";
    case "turovskiZaton":
      return "Туровский затон";
    case "avgustovskiCanal":
      return "Августовский канал";
    case "svisloch":
      return "Свислочь";
  }
}

export default function TableNotices(props) {
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
  const riverRows = (river) => {
    let filteredRows = data.filter(
      (row) =>
        row.river === river &&
        (row.organisation == auth.organisation ||
          auth.organisation ==
            "Государственная администрация водного транспорта" ||
          !auth.organisation ||
          allInfo ||
          (auth.organisation == `РУЭСП "Днепро-Бугский водный путь"` &&
            row.river == "Западная Двина"))
    );

    if (filteredRows.length === 0) return;
    const riverRows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="left">{row.site}</TableCell>
          <TableCell align="center">
            {row.date.toLocaleString().slice(11, 17)}
          </TableCell>
          <TableCell align="center">{row.cause}</TableCell>
          <TableCell align="center">{row.content}</TableCell>
        </TableRow>
      );
    });
    return (
      <>
        <TableRow>
          <TableCell align="left" colSpan={4} sx={{ fontWeight: "bold" }}>
            {river}
          </TableCell>
        </TableRow>
        {riverRows}
      </>
    );
  };

  return (
    <>
      <Typography sx={{ fontSize: 18, alignSelf: "start" }}>
        6. ИЗВЕЩЕНИЯ
      </Typography>
      <TableContainer>
        <Table id="noticesTable" className={styles.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Наименование рек и участков</TableCell>
              <TableCell align="center">Время</TableCell>
              <TableCell align="center">Причина извещения</TableCell>
              <TableCell align="center">Содержание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informationData.siteRivers.map((river) => {
              return riverRows(river);
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

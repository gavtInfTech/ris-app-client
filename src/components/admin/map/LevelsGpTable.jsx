import React from "react";
import { useState, useEffect } from "react";
import { numberToCaseMonth } from "./numberToCaseMonth";
import styles from "./style.module.css";

export default function LevelsGpTable(props) {
  const [headerCells, setHeaderCells] = useState([]);
  const [rows, setRows] = useState([]);
  console.log(props.levelsGp);
  useEffect(() => {
    let currentDate = new Date(props.session.startDate);
    let hydroposts = [];
    let rows = [];
    let headerCells = [];
    headerCells.push(<td className={styles.th}>Гидропост</td>);

    props.levelsGp.forEach((item) => {
      if (!hydroposts.includes(item.hydropost)) hydroposts.push(item.hydropost);
    });

    while (currentDate <= props.session.endDate) {
      headerCells.push(
        <td className={styles.th}>
          {currentDate.getDate()} {numberToCaseMonth(currentDate.getMonth())}{" "}
          {currentDate.getFullYear()}
        </td>
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setHeaderCells(headerCells);

    hydroposts.forEach((hydropost) => {
      currentDate = new Date(props.session.startDate);
      let rowCells = [];
      rowCells.push(<td>{hydropost}</td>);
      let filteredLevelsGp = props.levelsGp.filter(
        (level) => level.hydropost === hydropost
      );
      while (currentDate <= props.session.endDate) {
        let cell = filteredLevelsGp.find(
          (level) => level.date.getDate() === currentDate.getDate()
        );
        if (cell === undefined) rowCells.push(<td>-</td>);
        else rowCells.push(<td>{cell.level1}</td>);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      rows.push(<tr>{rowCells}</tr>);
    });
    setRows(rows);
  }, [props.levelsGp]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>{headerCells}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

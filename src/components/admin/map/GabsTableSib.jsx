import React from "react";
import { useState, useEffect } from "react";
import { numberToCaseMonth } from "./numberToCaseMonth";
import styles from "./style.module.css";

function customComparator(a, b) {
    const A = a.name.split(' ')[0].split('.');
    const B = b.name.split(' ')[0].split('.');

    for (let i = 0; i < Math.max(A.length, B.length); i++) {
      const partA = parseInt(A[i]) || 0;
      const partB = parseInt(B[i]) || 0;
  
      if (partA !== partB) {
        return partA - partB;
      }
    }
    return 0;
  }

export default function GabsTableSib(props) {
  const [headerCells, setHeaderCells] = useState([]);
  const [rows, setRows] = useState([]);
 
  useEffect(() => {
    let currentDate = new Date(props.session.startDate);
    let sites = props.sites;
    let rows = [];
    let headerCells = [];
    
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

    sites.forEach((site) => {
      let siteAccordance = props.siteAccordances.find((item) => item.site === site.name);
      currentDate = new Date(props.session.startDate);
      let rowCells = [];
      rowCells.push(<td>{site.name}</td>);
      let filteredGabs = props.gabs.filter(
        (gab) => gab.site === site.name
      );
      while (currentDate <= props.session.endDate) {

        if (siteAccordance === undefined) {
          rowCells.push(<td>-</td>)
        } else {
          let cell = filteredGabs.find(
            (gab) => gab.date.getDate() === currentDate.getDate() && currentDate.getDate() === siteAccordance.date.getDate()
          );
          if (cell === undefined || cell.planDepth === null) rowCells.push(<td>-</td>);
          else rowCells.push(<td>{cell.planDepth}/{cell.width}</td>);
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      rows.push(<tr>{rowCells}</tr>);
    });
    setRows(rows);
  }, [props.gabs]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
            <td rowSpan="2">Наименование участка</td>
            <td colSpan={headerCells.length}>Минимальные габариты пути</td>
        </tr>
        <tr>{headerCells}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
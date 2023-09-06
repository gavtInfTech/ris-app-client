import React from "react";
import { useState, useEffect } from "react";
import { numberToCaseMonth } from "./numberToCaseMonth";
import styles from "./style.module.css";

function customComparator(a, b) {
  const A = a.name.split(" ")[0].split(".");
  const B = b.name.split(" ")[0].split(".");

  for (let i = 0; i < Math.max(A.length, B.length); i++) {
    const partA = parseInt(A[i]) || 0;
    const partB = parseInt(B[i]) || 0;

    if (partA !== partB) {
      return partA - partB;
    }
  }
  return 0;
}

export default function GabsTableActual(props) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let sites = props.sites.sort(customComparator);
    let rows = [];

    sites.forEach((site) => {
      let rowCells = [];
      rowCells.push(<td>{site.name}</td>);
      let filteredGabs = props.gabs.filter((gab) => gab.site === site.name);
      let siteAccordance = props.siteAccordances.find((item) => item.site === site.name);
      if (siteAccordance) {
        let gab = filteredGabs.find((gab) => gab.date.getDate() === siteAccordance.date.getDate());
        if (!gab) {
          rowCells.push(<td>-</td>);
          rowCells.push(<td>-</td>);
        } else {
          rowCells.push(
            <td>
              {gab.depth}/{gab.width}
            </td>
            
          );
          rowCells.push(
            <td>{siteAccordance.accordance ? "Соответствует" : "Не соответствует"}</td>
          );
        }
      }
      rows.push(<tr>{rowCells}</tr>);
    });
    setRows(rows);
  }, [props.gabs]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Наименование участка</td>
          <td>Габарит</td>
          <td>Степень соответсвия</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

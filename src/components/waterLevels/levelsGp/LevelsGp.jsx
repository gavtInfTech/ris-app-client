import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "./style.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { hydroposts } from "./data";
import AdditionalInfo from "./AdditionalInfo";
import Graph from "./Graph";
import clsx from "clsx";
import { api } from "../../../axiosConfig";
import TableLevelsGp from "../../sib/TableLevelsGp";
import { TextField, Typography } from "@mui/material";
export default function LevelsGp(props) {
  const [levelsGpDataByDate, setLevelsGpDataByDate] = useState([]);
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];

  useEffect(() => {
    const getData = async () => {
      try {
        const resLevelsGp = await api.get("/levelsGp/getAllByDate", {
          params: { date: new Date(date) },
        });
        resLevelsGp.data.forEach((item) => {
          item.date = new Date(item.date);
        });

        const filteredresLevelsGp = resLevelsGp.data.filter(
          (item) => item.confirmation === true
        );

        setLevelsGpDataByDate(filteredresLevelsGp);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={styles.tablesContainer} style={{backgroundColor: "white",}}>
        <Typography sx={{ fontSize: 19, marginBottom: "20px" }}>
          Габариты на лимитирующих перекатах на <span> </span>
          {
            <TextField
              name="date"
              type={"date"}
              value={date}
              onChange={handleChangeDate}
              variant="standard"
              InputProps={{
                inputProps: { min: minDateFormatted, max: maxDate },
              }}
            />
          }
        </Typography>
        <TableLevelsGp allInfo={true} data={levelsGpDataByDate}></TableLevelsGp>
      </div>
    </div>
  );
}

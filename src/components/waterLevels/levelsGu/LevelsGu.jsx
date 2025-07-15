import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "./style.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { hydroposts } from "./data";
import clsx from "clsx";
import { api } from "../../../axiosConfig";
import TableLevelsGu from "../../sib/TableLevelsGu";
import { TextField, Typography } from "@mui/material";
export default function LevelsGu(props) {
  const [levelsGuDataByDate, setLevelsGuDataByDate] = useState([]);
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];

  useEffect(() => {
    const getData = async () => {
      try {
        const resLevelsGu = await api.get("/levelsGu/getAllByDate", {
          params: { date: new Date(date) },
        });
        resLevelsGu.data.forEach((item) => {
          item.date = new Date(item.date);
        });

        const filteredresLevelsGu = resLevelsGu.data.filter(
          (item) => item.confirmation === true
        );

        setLevelsGuDataByDate(filteredresLevelsGu);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [date]);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
      <div className={styles.tablesContainer} style={{backgroundColor: "white",}}>
        <Typography sx={{ fontSize: 19, marginBottom: "20px" }}>
          СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА на <span> </span>
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
        <TableLevelsGu allInfo={true} data={levelsGuDataByDate} headerHidden={true} />
      </div>
    </div>
  );
}

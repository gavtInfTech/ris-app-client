import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "./style.module.css";
import { api } from "../../../axiosConfig";
import TableBridges from "../../sib/TableBridges";
import { TextField, Typography } from "@mui/material";
export default function BridgeGabs(props) {
  const [bridgesDataByDate, setBridgesDataByDate] = useState([]);
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];

  useEffect(() => {
    const getData = async () => {
      try {
      const resBridges = await api.get("/bridges/getAllByDate", {
             params: { date: new Date(date) },
           });
           resBridges.data.forEach((item) => {
             item.date = new Date(item.date);
           });
           const filteredresBridges = resBridges.data.filter(
             (item) => item.confirmation === true
           );
   
           setBridgesDataByDate(filteredresBridges);
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
            <TableBridges allInfo={true} data={bridgesDataByDate} />
      </div>
    </div>
  );
}

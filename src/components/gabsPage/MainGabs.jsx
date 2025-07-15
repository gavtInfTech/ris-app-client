import { React, useState, useEffect } from "react";
import styles from "./style.module.css";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { api } from "../../axiosConfig";
import { customComparator } from "../vvp/siteMethods";
import TableGabs from "../sib/TableGabs";

export default function MainGabs() {
  const [gabsDataByDate, setGabsDataByDate] = useState([]);
  const [date, setDate] = useState(new Date());
  const [sites, setSites] = useState([]);

  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const resGabs = await api.get("/gabs/getAllByDate", {
          params: { date: new Date(date) },
        });
        resGabs.data.forEach((item) => {
          item.date = new Date(item.date);
        });

        const filteredresGabs = resGabs.data.filter(
          (item) => item.confirmation === true
        );

        setGabsDataByDate(
          filteredresGabs.map((doc) => ({
            ...doc,
            planDepth: doc.planDepth !== null ? doc.planDepth : "—",
            date: new Date(doc.date),
            limitedRoll: doc.limitedRoll !== null ? doc.limitedRoll : "—",
            forecastDate:
              doc.forecastDate !== null ? new Date(doc.forecastDate) : "—",
            forecastDepth: doc.forecastDepth !== null ? doc.forecastDepth : "—",
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    const getSites = async () => {
      const resSites = await api.get("/sites/getAll");
      const newSites = resSites.data.sort(customComparator);
      setSites(newSites);
    };
    getData();
    getSites();
  }, [date]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div
        className={styles.tablesContainer}
        style={{ backgroundColor: "white" }}
      >
        <Typography sx={{ fontSize: 19, marginBottom: "20px" }}>
          ГАБАРИТЫ НА ЛИМИТИРУЮЩИХ ПЕРЕКАТАХ на <span> </span>
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
        <TableGabs
          allInfo={true}
          data={gabsDataByDate}
          headerHidden={true}
          sites={sites}
        />
      </div>
    </div>
  );
}

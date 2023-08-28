import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Box } from "@mui/system";
import { api } from "../../../axiosConfig";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const monthToNumber = (month) => {
  // eslint-disable-next-line default-case
  switch (month) {
    case "Январь":
      return 0;
    case "Февраль":
      return 1;
    case "Март":
      return 2;
    case "Апрель":
      return 3;
    case "Май":
      return 4;
    case "Июнь":
      return 5;
    case "Июль":
      return 6;
    case "Август":
      return 7;
    case "Сентябрь":
      return 8;
    case "Октябрь":
      return 9;
    case "Ноябрь":
      return 10;
    case "Декабрь":
      return 11;
  }
};

const numberToMonth = (number) => {
  // eslint-disable-next-line default-case
  switch (number) {
    case 0:
      return "Январь";
    case 1:
      return "Февраль";
    case 2:
      return "Март";
    case 3:
      return "Апрель";
    case 4:
      return "Май";
    case 5:
      return "Июнь";
    case 6:
      return "Июль";
    case 7:
      return "Август";
    case 8:
      return "Сентябрь";
    case 9:
      return "Октябрь";
    case 10:
      return "Ноябрь";
    case 11:
      return "Декабрь";
  }
};

export default function PathInformationPart(props) {
  const [session, setSession] = useState();
  const [changes, setChanges] = useState([]);
  const [month, setMonth] = useState(() => {
    let currentDate = new Date();
    return numberToMonth(currentDate.getMonth());
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const resSession = await api.get("/sessions/getByMonth", {
          params: { month: monthToNumber(month), river: props.river },
        });
        
        let currentDate = new Date();

        setSession({
          ...resSession.data,
        });

        const resChanges = await api.get("/changes/getBySession", {
          params: { session: resSession.data.id },
        });
        setChanges(resChanges.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [month]);

  const handleMonthChange = (event) => {
    let value = event.target.value;
    setMonth(value);
  };
  console.log(Boolean(session));
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        mt: 2,
        flexDirection: "column",
      }}
    >
      <TextField
        sx={{ width: "50%", fontSize: "50px" }}
        name="month"
        select
        label="Месяц проведения осмотра"
        value={month}
        onChange={handleMonthChange}
        variant="standard"
        inputProps={{ style: { fontSize: 40 } }}
        InputLabelProps={{ style: { fontSize: 20 } }}
      >
        {months.map((month) => (
          <MenuItem key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </TextField>
      {!Boolean(session) && (
        <Typography sx={{ fontSize: 20, mt: "10vh", textAlign: "center" }}>
          За выбранный месяц на реке {props.river} осмотра не проводилось.
        </Typography>
      )}

      {Boolean(session) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 15, mt: 2 }}>АКТ</Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
            осмотра внутренних водных путей № _/202_
          </Typography>
        </Box>
      )}
    </Box>
  );
}

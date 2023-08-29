import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Box } from "@mui/system";
import { api } from "../../../axiosConfig";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import LevelsGpTable from "./LevelsGpTable";

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

const numberToCaseMonth = (number) => {
  // eslint-disable-next-line default-case
  switch (number) {
    case 0:
      return "января";
    case 1:
      return "февраля";
    case 2:
      return "марта";
    case 3:
      return "апреля";
    case 4:
      return "мая";
    case 5:
      return "июня";
    case 6:
      return "июля";
    case 7:
      return "августа";
    case 8:
      return "сентября";
    case 9:
      return "октября";
    case 10:
      return "ноября";
    case 11:
      return "декабря";
  }
};

export default function PathInformationPart(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [session, setSession] = useState();
  const [changes, setChanges] = useState([]);
  const [sites, setSites] = useState([]);
  const [levelsGp, setLevelsGp] = useState([]);
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
        if (resSession.data === "") setSession(null);
        else
          setSession({
            ...resSession.data,
            startDate: new Date(resSession.data.startDate),
            endDate: new Date(resSession.data.endDate),
          });
        
        const resChanges = await api.get("/changes/getBySession", {
          params: { session: resSession.data.id },
        });
        resChanges.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setChanges(resChanges.data);

        const resSites = await api.get("/sites/getAllByRiver", {
          params: { river: props.river },
        });
        setSites(resSites.data);
        console.log(resSites);
        const resLevelsGp = await api.get(
          "/levelsGp/getAllByPeriodAndRiver",
          {
            params: {
              startPeriod: new Date(resSession.data.startDate),
              endPeriod: new Date(resSession.data.endDate),
              river: props.river,
            },
          }
        );
        resLevelsGp.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setLevelsGp(resLevelsGp.data);
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [month, props.river]);

  const handleMonthChange = (event) => {
    let value = event.target.value;
    setMonth(value);
  };

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
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 15, mt: 2 }}>
            АКТ
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
            осмотра внутренних водных путей № _/202_
          </Typography>
          <Typography className={styles.typography} sx={{ mt: 3 }}>
            1. Комиссия в составе: {session.inspector1}, {session.inspector2},{" "}
            {session.inspector3}, {session.inspector4}
          </Typography>
          <Typography className={styles.typography}>
            2. Осмотр производился при уровнях воды по гидропостам:
          </Typography>
          <LevelsGpTable session={session} levelsGp={levelsGp} />
        </Box>
      )}
    </Box>
  );
}

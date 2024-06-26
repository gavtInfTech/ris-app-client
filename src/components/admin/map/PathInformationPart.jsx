import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Box } from "@mui/system";
import { api } from "../../../axiosConfig";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import LevelsGpTable from "./LevelsGpTable";
import GabsTableSib from "./GabsTableSib";
import GabsTableActual from "./GabsTableActual";
import { getSiteByCoords } from "../../vvp/siteMethods";
import DocxFile from "./DocxFile";

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
  const [sites, setSites] = useState([]);
  const [siteAccordances, setSiteAccordances] = useState([]);
  const [signNotices, setSignNotices] = useState([]);
  const [levelsGp, setLevelsGp] = useState([]);
  const [gabs, setGabs] = useState([]);
  const [month, setMonth] = useState(() => {
    let currentDate = new Date();
    return numberToMonth(currentDate.getMonth());
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setSites(props.sites);

        const resSession = await api.get("/sessions/getByMonth", {
          params: { month: monthToNumber(month), river: props.river },
        });
        console.log(resSession);
        if (resSession.data === "") {
          setSession(null);
          props.setAlerts([]);
        } else
          setSession({
            ...resSession.data,
            startDate: new Date(resSession.data.startDate),
            endDate: new Date(resSession.data.endDate),
          });
          console.log(resSession.data);

        const resLevelsGp = await api.get("/levelsGp/getAllByPeriodAndRiver", {
          params: {
            startPeriod: new Date(resSession.data.startDate),
            endPeriod: new Date(resSession.data.endDate),
            river: props.river,
          },
        });
        resLevelsGp.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setLevelsGp(resLevelsGp.data);

        const resGabs = await api.get("/gabs/getAllByPeriodAndRiver", {
          params: {
            startPeriod: new Date(resSession.data.startDate),
            endPeriod: new Date(resSession.data.endDate),
            river: props.river,
          },
        });
        resGabs.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setGabs(resGabs.data);

        const resAlerts = await api.get("/alerts/getAllByPeriodAndRiver", {
          params: {
            startPeriod: new Date(resSession.data.startDate),
            endPeriod: new Date(resSession.data.endDate),
            river: props.river,
          },
        });
        resAlerts.data.forEach((item) => {
          item.date = new Date(item.date).toLocaleString().slice(0, 10);
        });
        props.setAlerts(resAlerts.data);
        
        const resSignNotices = await api.get(
          "/signNotices/getAllByPeriodAndRiver",
          {
            params: {
              session: resSession.data.id,
              river: props.river,
            },
          }
        );
        console.log(resSignNotices);
        setSignNotices(resSignNotices.data);

        const resSiteAccordances = await api.get(
          "/siteAccordances/getAllByPeriodAndRiver",
          {
            params: {
              startPeriod: new Date(resSession.data.startDate),
              endPeriod: new Date(resSession.data.endDate),
              river: props.river,
            },
          }
        );
        resSiteAccordances.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setSiteAccordances(resSiteAccordances.data);
        console.log(resSiteAccordances.data);
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [month, props.river, props.sites]);
  
  const handleMonthChange = (event) => {
    let value = event.target.value;
    setIsLoaded(false);
    setMonth(value);
  };

  let notices = [];
  for (let i = 0; i < sites.length; i++) {
    let n = 1;
    notices.push(
      <Typography className={styles.typography}>
        5.{i + 1}. На участке {sites[i].name}:
      </Typography>
    );
    for (let j = 0; j < signNotices.length; j++) {
      if (
        sites[i].name ===
        getSiteByCoords(
          props.river,
          [signNotices[j].latitude, signNotices[j].longitude],
          sites
        )
      ) {
        notices.push(
          <Typography className={styles.typography}>
            5.{i + 1}.{n}. Знак: {signNotices[j].sign}; километр: {signNotices[j].kilometrage}; комментарий: {signNotices[j].comment}.
          </Typography>
        );
        n++;
      }
    }
  }

  if (props.alerts.length > 0) {
    for (let i = 0; i < props.alerts.length; i++) {
      notices.push(
        <Typography className={styles.typography}>
          5.{i + 1 + sites.length}. {props.alerts[i].comment}{" "}
        </Typography>
      );
    }
  }

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
      {!Boolean(session) && 
        <Typography sx={{ fontSize: 20, mt: "10vh", textAlign: "center" }}>
          За выбранный месяц на реке {props.river} осмотра не проводилось.
        </Typography>
      }

      {Boolean(session) && isLoaded && 
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
            осмотра внутренних водных путей № _/2023
          </Typography>
          <Typography className={styles.typography} sx={{ mt: 3 }}>
            1. Комиссия в составе: {session.inspector1 !== null && session.inspector1}, {session.inspector1 !== null && session.inspector2},{" "}
            {session.inspector1 !== null && session.inspector3}, {session.inspector1 !== null && session.inspector4}
          </Typography>
          <Typography className={styles.typography}>
            2. Осмотр производился при уровнях воды по гидропостам:
          </Typography>
          <LevelsGpTable session={session} levelsGp={levelsGp} />
          <Typography className={styles.typography}>
            3. Минимальные габариты судового хода согласно заданию по
            дифференцированным гарантированным габаритам внутреннего водного
            пути должны составлять:
          </Typography>
          <GabsTableSib
            session={session}
            sites={sites}
            siteAccordances={siteAccordances}
            gabs={gabs}
          />
          <Typography className={styles.typography}>
            4. Промеры габаритов на перекатах осмотренных участков водного пути
            соответствуют заданию по дифференцированным гарантированным
            габаритам и сведениям о фактических габаритах, отраженным в сводном
            информационном бюллетене с «{session.startDate.getDate()}»{" "}
            {numberToCaseMonth(session.startDate.getMonth())}{" "}
            {session.startDate.getFullYear()} г. по «{session.endDate.getDate()}
            » {numberToCaseMonth(session.endDate.getMonth())}{" "}
            {session.endDate.getFullYear()} г. Фактические минимальные габариты
            на перекатах составили:
          </Typography>
          <GabsTableActual
            sites={sites}
            siteAccordances={siteAccordances}
            gabs={gabs}
          />
          <Typography className={styles.typography}>
            5. Рекомендации комиссии по улучшению судоходных условий на участках
            внутренних водных путей Республики Беларусь р. {props.river}:
          </Typography>
          {notices}
          <DocxFile
            river={props.river}
            session={session}
            levelsGp={levelsGp}
            sites={sites}
            siteAccordances={siteAccordances}
            gabs={gabs}
            alerts={props.alerts}
            signNotices={signNotices}
          />
        </Box>
      }
    </Box>
  );
}

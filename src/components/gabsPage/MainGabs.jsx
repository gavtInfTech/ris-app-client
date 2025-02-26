import { React, useState, useEffect } from "react";
import styles from "./style.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";
import { api } from "../../axiosConfig";
import { customComparator } from "../vvp/siteMethods";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const emptyObj = {
  planDepth: "—",
  date: "—",
  limitedRoll: "—",
  depth: "—",
  width: "—",
  forecastDate: "—",
  forecastDepth: "—",
};

function keyToRiver(key) {
  // eslint-disable-next-line default-case
  switch (key) {
    case "dnepr":
      return "Днепр";
    case "berezina":
      return "Березина";
    case "soj":
      return "Сож";
    case "neman":
      return "Неман";
    case "muhavets":
      return "Мухавец";
    case "dnepBug":
      return "Днепро-Бугский канал";
    case "pina":
      return "Пина";
    case "upperPripyat":
      return "Верхний участок реки Припять";
    case "pripyat":
      return "Припять";
    case "mikashevichskiCanal":
      return "Микашевичский канал";
    case "gorin":
      return "Горынь";
    case "zapDvina":
      return "Западная Двина";
    case "turovskiZaton":
      return "Туровский затон";
    case "avgustovskiCanal":
      return "Августовский канал";
    case "svisloch":
      return "Свислочь";
  }
}

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          border: "1px solid #cacbcc",
        },
        head: {
          fontWeight: "bold",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "2px solid #ebf4fc",
        },
      },
    },
  },
});

export default function MainGabs() {
  const [data, setData] = useState([]);
  const [sites, setSites] = useState([]);
  const [date, setDate] = useState("");
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    console.log(auth)
    let todayDate = new Date();
    const dateParts = todayDate.toLocaleString().slice(0, 10).split(".");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    setDate(formattedDate);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const resSites = await api.get("/sites/getAll");
        setSites(resSites.data.sort(customComparator));
        const res = await api.get("/gabs/getAllByDate", {
          params: { date: new Date(date) },
        });
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setData(
          res.data.map((doc) => ({
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
    getData();
  }, [date]);

  let rows = [];
  sites.map((site) => {
    let rowData = data.find((dat) => dat.site === site.name);
    if (rowData === undefined)
      rows.push({ site: site.name, river: site.river, ...emptyObj });
    else rows.push(rowData);
  });

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];

  const riverRows = (river) => {
    let filteredRows = rows.filter((row) => row.river === river);
    let riverRows = filteredRows.map((row) => {
      return (
        <TableRow>
          <TableCell align="left">{row.site}</TableCell>
          <TableCell align="center">{row.planDepth}</TableCell>
          <TableCell align="center">
            {row.date.toLocaleString().slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.limitedRoll}</TableCell>
          <TableCell align="center">{row.depth}</TableCell>
          <TableCell align="center">{row.width}</TableCell>
          <TableCell align="center">
            {row.forecastDate.toLocaleString().slice(0, 10)}
          </TableCell>
          <TableCell align="center">{row.forecastDepth}</TableCell>
        </TableRow>
      );
    });
    return riverRows;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Typography sx={{ fontSize: 19 }}>
          Габариты на лимитирующих пер.тах на <span> </span>
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

        <div id="tablesContainer" className={styles.tablesContainer}>
          <TableContainer>
            <Table id="gabsTable" className={styles.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2} align="center">
                    Наименование рек и участков
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Плановая глубина, см
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Дата
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Лимитирующий участок, пер.т
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Глубина, см
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Ширина, м
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    Прогноз
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Дата</TableCell>
                  <TableCell align="center">Глубина, см</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    1. р. Днепр &#40;дер.Левки &#40;воздушный переход&#41; -
                    н.п. Любеч &#40;граница Белводпуть - Укрводпуть&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Днепр")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    2. р. Березина &#40;г.Березино &#40;Березино -
                    пристань&#41; - устье реки Березина
                  </TableCell>
                </TableRow>
                {riverRows("Березина")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    3. р. Сож &#40;г.Славгород &#40;Славгород - город&#41; -
                    устье реки Сож&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Сож")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    4. р. Неман &#40;деревня Яблоново &#40;вход в затон&#41; -
                    граница с Литовской Республикой&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Неман")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    5. р. Мухавец &#40;г.Брест &#40;речной порт Брест&#41; -
                    г.Кобрин &#40;слияние реки Мухавец и Днепро-Бугского
                    канала&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Мухавец")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    6. Днепро - Бугский канал &#40;г.Кобрин &#40;слияние реки
                    Мухавец и Днепро-Бугский канал&#41; - слияние Днепро-Бугский канал и реки Пина&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Днепро-Бугский канал")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    7. р. Пина &#40;слияние Днепро-Бугский канал и реки Пина - г.Пинск
                    &#40;слияние реки Пина и реки Припять&#41; - знак
                    "запрещение прохода"&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Пина")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    8. верхний участок реки Припять &#40;7 км реки Припять -
                    г.Пинск, слияние реки Припять и реки Пина&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Верхний участок реки Припять")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    9. р. Припять &#40;г.Пинск &#40;слияние реки Пина и реки
                    Припять&#41; - пер.т Усовский-1 &#40;граница с
                    Украиной&#41;&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Припять")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    10. Микашевичский канал &#40;устье Микашевичского канала -
                    речной порт Микашевичи&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Микашевичский канал")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    11. р. Горынь &#40;пер.т Комора-2 - устье реки
                    Горынь&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Горынь")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    12. р. Западная Двина &#40;деревня Сураж - Полоцкая
                    гидроэлектростанция&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Западная Двина")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    13. Туровский затон &#40;г.Туров &#40;вход в затон&#41; -
                    г.Туров &#40;причал&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Туровский затон")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    14. Августовский канал &#40;Граница с Республикой Польша -
                    устье Августовского канала &#40;слияние с рекой
                    Неман&#41;&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Августовский канал")}

                <TableRow>
                  <TableCell
                    align="left"
                    colSpan={8}
                    sx={{ fontWeight: "bold" }}
                  >
                    15. р. Свислочь &#40;Минская кольцевая автомобильная
                    дорога - переулок Канатный&#41;
                  </TableCell>
                </TableRow>
                {riverRows("Свислочь")}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

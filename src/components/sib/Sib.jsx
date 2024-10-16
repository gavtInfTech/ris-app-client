import { React, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Button from "@mui/material/Button";
import styles from "./style.module.css";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TableLevelsGp from "./TableLevelsGp";
import TableLevelsGu from "./TableLevelsGu";
import TableGabs from "./TableGabs";
import TableDislocations from "./TableDislocations";
import TableBridges from "./TableBridges";
import TableNotices from "./TableNotices";
import TextField from "@mui/material/TextField";
import { saveAs } from "file-saver";
import {
  generatePdfFileByDate,
  generatePdfFileByPeriod,
} from "./generatePdfFile";
import { api } from "../../axiosConfig";
import { customComparator } from "../vvp/siteMethods";
import DescriptionIcon from "@mui/icons-material/Description";
import EMobiledataIcon from "@mui/icons-material/EMobiledata";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FunctionsIcon from "@mui/icons-material/Functions";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { addEmitHelper } from "typescript";

require("jspdf-autotable");

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

export default function Sib() {
  const { auth } = useContext(AuthContext);
  const [sites, setSites] = useState([]);
  const [date, setDate] = useState(() => {
    let todayDate = new Date();
    const dateParts = todayDate.toLocaleString().slice(0, 10).split(".");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return formattedDate;
  });
  const [startPeriod, setStartPeriod] = useState();
  const [endPeriod, setEndPeriod] = useState();
  const [levelsGpDataByDate, setLevelsGpDataByDate] = useState([]);
  const [levelsGuDataByDate, setLevelsGuDataByDate] = useState([]);
  const [gabsDataByDate, setGabsDataByDate] = useState([]);
  const [dislocationsDataByDate, setDislocationsDataByDate] = useState([]);
  const [bridgesDataByDate, setBridgesDataByDate] = useState([]);
  const [noticesDataByDate, setNoticesDataByDate] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const resSites = await api.get("/sites/getAll");
        const newSites = resSites.data.sort(customComparator);
        if (
          auth.organisation ==
          "Государственная администрация водного транспорта"
        ) {
          setSites(newSites);
        } else {
          if (
            auth.organisation ==
           'РУ Днепро-Двинское предприятие водных путей "Белводпуть"'
          ) {
            setSites(
              newSites.filter(
                (site) =>
                  site.organisation == auth.organisation ||
                  site.organisation == 'Филиал "Гродненский участок" г. Гродно'
              )
            );
          } else {
            if(auth.organisation == 'РУЭСП "Днепро-Бугский водный путь"'){
              setSites(
                newSites.filter(
                  (site) =>
                    site.organisation == auth.organisation ||
                    site.organisation == 'Филиал "Витебскводтранс" г. Витебск' ||
                    site.organisation == 'Филиал "Гродненский участок" г. Гродно' ||
                    site.organisation == 'Филиал "Нижне-Припятский" г. Мозырь'
                )
              );
            }
            else{
            setSites(
              newSites.filter((site) => site.organisation == auth.organisation)
            );
            }  
          }
        }
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

        const resDislocations = await api.get("/dislocation/getAllByDate", {
          params: { date: new Date(date) },
        });
        resDislocations.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        const filteredresDislocations = resDislocations.data.filter(
          (item) => item.confirmation === true
        );

        setDislocationsDataByDate(filteredresDislocations);

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

        const resNotices = await api.get("/notices/getAllByDate", {
          params: { date: new Date(date) },
        });
        resNotices.data.forEach((item) => {
          item.date = new Date(item.date);
        });

        setNoticesDataByDate(
          resNotices.data.map((doc) => {
            let cause = "";
            if (doc.cause1) {
              cause += "Изменение СНО; ";
            }
            if (doc.cause2) {
              cause += "Гидрометеорологические условия; ";
            }
            if (doc.cause3) {
              cause += "Путевые работы; ";
            }

            return { ...doc, cause: cause };
          })
        );
      } catch (err) {
        console.log(err);
      }
    };

    const fetchData = async () => {
      try {
        await getData();
        setLoading(true);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeStartPeriod = (event) => {
    setStartPeriod(event.target.value);
  };

  const handleChangeEndPeriod = (event) => {
    setEndPeriod(event.target.value);
  };

  const generatePdfFile = async () => {
    try {
      const resLevelsGp = await api.get("/levelsGp/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resLevelsGp.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      let levelsGpDataByPeriod = resLevelsGp.data;

      const resLevelsGu = await api.get("/levelsGu/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resLevelsGu.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      let levelsGuDataByPeriod = resLevelsGu.data;

      const resGabs = await api.get("/gabs/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resGabs.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      let gabsDataByPeriod = resGabs.data.map((doc) => ({
        ...doc,
        planDepth: doc.planDepth !== null ? doc.planDepth : "—",
        date: new Date(doc.date),
        limitedRoll: doc.limitedRoll !== null ? doc.limitedRoll : "—",
        forecastDate:
          doc.forecastDate !== null ? new Date(doc.forecastDate) : "—",
        forecastDepth: doc.forecastDepth !== null ? doc.forecastDepth : "—",
      }));

      const resDislocations = await api.get("/dislocation/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      console.log("REES DISLOCATION", resDislocations);
      resDislocations.data.forEach((item) => {
        item.date = new Date(item.date);
        item.date_start = new Date(item.date_start);
        item.date_end = new Date(item.date_end);
      });
      let dislocationsDataByPeriod = resDislocations.data;

      const resBridges = await api.get("/bridges/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resBridges.data.forEach((item) => {
        item.date = new Date(item.date);
      });
      let bridgesDataByPeriod = resBridges.data;

      const resNotices = await api.get("/notices/getAllByPeriod", {
        params: {
          startPeriod: new Date(startPeriod),
          endPeriod: new Date(endPeriod),
        },
      });
      resNotices.data.forEach((item) => {
        item.date = new Date(item.date);
      });

      let noticesDataByPeriod = resNotices.data.map((doc) => {
        let cause = "";
        if (doc.cause1) {
          cause += "Изменение СНО; ";
        }
        if (doc.cause2) {
          cause += "Гидрометеорологические условия; ";
        }
        if (doc.cause3) {
          cause += "Путевые работы; ";
        }

        return { ...doc, cause: cause };
      });

      generatePdfFileByPeriod(
        new Date(startPeriod),
        new Date(endPeriod),
        levelsGpDataByPeriod,
        levelsGuDataByPeriod,
        gabsDataByPeriod,
        dislocationsDataByPeriod,
        bridgesDataByPeriod,
        noticesDataByPeriod,
        sites,
        auth.info
      );
    } catch (err) {
      console.log(err);
    }
  };

  const generateExcelFile = (date) => {
    const workbook = XLSX.utils.book_new();

    // Объединяем данные из всех таблиц в одну общую таблицу
    const combinedData = [];
    // , headerIndexForGap, headerGap,
    function combineTableDataWithHeader(
      tableId,
      sheetName,
      headerIndexforGap,
      headerGap,
      secondHeaderGap
    ) {
      const table = document.getElementById(tableId);
      const rows = table.getElementsByTagName("tr");

      const headerRow = rows[0]; // Заголовок столбцов
      const headerData = [
        ...Array.from(headerRow.getElementsByTagName("th")).map(
          (cell) => cell.innerText
        ),
      ];

      //добавляет отступы с определенного индексаxc
      headerData.splice(headerIndexforGap, 0, ...Array(headerGap).fill(""));

      // const headerCells = headerRow.getElementsByTagName("th");
      // for (let j = 0; j < headerCells.length; j++) {
      //   headerData.push(headerCells[j].innerText);
      // }

      combinedData.push([sheetName]); // Заголовок листа
      combinedData.push(headerData); // Заголовок столбцов

      const subheaderRow = rows[1]; // Подзаголовок столбцов
      if (subheaderRow) {
        const subheaderData = [
          ...Array(secondHeaderGap).fill(""), // Добавляем пустые строки для отступа перед подзаголовком
          ...Array.from(subheaderRow.getElementsByTagName("th")).map(
            (cell) => cell.innerText
          ),
          ...Array.from(subheaderRow.getElementsByTagName("td")).map(
            (cell) => cell.innerText
          ),
        ]; // Добавляем пустое значение в начало строки
        combinedData.push(subheaderData); // Добавляем подзаголовок в строку
      }

      for (let i = 2; i < rows.length; i++) {
        const rowData = [];
        const cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
          rowData.push(cells[j].innerText);
        }
        combinedData.push(rowData);
      }
    }

    // Вызываем функцию для каждой таблицы с соответствующим заголовком
    combineTableDataWithHeader(
      "levelsGpTable",
      "1. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ НА 8 ЧАСОВ УТРА",
      2,
      1,
      1
    );
    combineTableDataWithHeader(
      "levelsGuTable",
      "2. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА",
      2,
      1,
      1
    );
    combineTableDataWithHeader(
      "gabsTable",
      "3. НАИМЕНЬШИЕ ГАБАРИТЫ СУДОВОГО ХОДА",
      0,
      0,
      6
    );
    combineTableDataWithHeader(
      "dislocationsTable",
      "4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ",
      3,
      2,
      2
    );
    combineTableDataWithHeader(
      "bridgesTable",
      "5. ГАБАРИТЫ ПОДМОСТОВЫХ ПЕРЕХОДОВ",
      0,
      0,
      0
    );
    combineTableDataWithHeader("noticesTable", "6. ИЗВЕЩЕНИЯ", 0, 0, 0);

    const formattedDate = new Date(date).toLocaleDateString("ru-RU");
    combinedData.push([""]);
    combinedData.push([""]);
    combinedData.push(["Дата:", "Подпись:"]);
    combinedData.push([`${formattedDate}`]);

    // Преобразуем объединенные данные в лист
    const combinedSheet = XLSX.utils.aoa_to_sheet(combinedData);

    // Устанавливаем ширину столбцов
    const columnWidths = [
      { wch: 110 }, // Ширина первого столбца
      { wch: 25 },
      { wch: 30 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 }, // Ширина второго столбца
      // Добавьте дополнительные значения ширины для других столбцов
    ];
    combinedSheet["!cols"] = columnWidths;

    // Создание стилей для текста Arial Narrow и размера шрифта 10
    const style = {
      font: {
        name: "Arial Narrow",
        sz: 10,
      },
    };

    // Применение стилей ко всем ячейкам в листе
    Object.keys(combinedSheet).forEach((key) => {
      if (key[0] === "!") return;
      combinedSheet[key].s = style;
    });

    // // Создание структуры данных с объединёнными ячейками
    // const mergedCells = [
    //   // Пример: объединяем первые две ячейки первой строки
    //   { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } },
    //   { s: { r: 1, c: 1 }, e: { r: 1, c: 2 } },
    //   // Добавьте другие объединённые ячейки, если нужно
    // ];

    // // Установка объединённых ячеек в свойстве !merges
    // combinedSheet["!merges"] = mergedCells;

    // Добавляем лист с объединенными данными в книгу
    XLSX.utils.book_append_sheet(workbook, combinedSheet, date);

    // Генерируем Excel файл
    const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], { type: "application/octet-stream" });
    saveAs(blob, `sib_${date}.xlsx`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="contnetForPdf" className={styles.container}>
        <h2>СВОДНЫЙ ИНФОРМАЦИОННЫЙ БЮЛЛЕТЕНЬ</h2>
        <br />
        <Typography sx={{ fontSize: 18 }}>
          По внутренним водным путям Республики Беларусь на <span> </span>
          {
            <TextField
              name="date"
              type={"date"}
              value={date}
              onChange={handleChangeDate}
              variant="standard"
            />
          }
        </Typography>
        <div>
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: "10px", width: "50px" }}
            onClick={() =>
              generatePdfFileByDate(
                date,
                levelsGpDataByDate,
                levelsGuDataByDate,
                gabsDataByDate,
                dislocationsDataByDate,
                bridgesDataByDate,
                noticesDataByDate,
                sites,
                auth.info
              )
            }
            disabled={!loading}
            title="Скачать PDF"
          >
            <PictureAsPdfIcon />
          </Button>

          <Button
            variant="contained"
            type="submit"
            sx={{ margin: "2px", width: "50px" }}
            onClick={() => generateExcelFile(date)}
            disabled={!loading}
            title="Скачать Excel"
          >
            Excel
          </Button>
        </div>

        <Typography sx={{ fontSize: 18 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ m: 1, width: "200px" }}
            onClick={generatePdfFile}
            disabled={!loading}
          >
            Скачать за период
          </Button>
          <TextField
            name="startPeriod"
            type={"date"}
            value={startPeriod}
            onChange={handleChangeStartPeriod}
            variant="standard"
            sx={{ m: 1 }}
          />
          По <span> </span>
          <TextField
            name="endPeriod"
            type={"date"}
            value={endPeriod}
            onChange={handleChangeEndPeriod}
            variant="standard"
            sx={{ m: 1 }}
          />
        </Typography>

        <div id="tablesContainer" className={styles.tablesContainer}>
          <TableLevelsGp data={levelsGpDataByDate} />
          <TableLevelsGu data={levelsGuDataByDate} />
          <TableGabs data={gabsDataByDate} sites={sites} />
          <TableDislocations data={dislocationsDataByDate} />
          <TableBridges data={bridgesDataByDate} />
          <TableNotices data={noticesDataByDate} />
        </div>
      </div>
    </ThemeProvider>
  );
}

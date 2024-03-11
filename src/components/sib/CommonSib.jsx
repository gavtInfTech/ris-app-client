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
import Box from "@mui/material/Box";
import { customComparator } from "../vvp/siteMethods";

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

export default function CommonSib() {
  const [date, setDate] = useState(() => {
    let todayDate = new Date();
    const dateParts = todayDate.toLocaleString().slice(0, 10).split(".");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return formattedDate;
  });
  const [sites, setSites] = useState([]);
  const [startPeriod, setStartPeriod] = useState();
  const [endPeriod, setEndPeriod] = useState();
  const [levelsGpDataByDate, setLevelsGpDataByDate] = useState([]);
  const [levelsGuDataByDate, setLevelsGuDataByDate] = useState([]);
  const [gabsDataByDate, setGabsDataByDate] = useState([]);
  const [dislocationsDataByDate, setDislocationsDataByDate] = useState([]);
  const [bridgesDataByDate, setBridgesDataByDate] = useState([]);
  const [noticesDataByDate, setNoticesDataByDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resSites = await api.get("/sites/getAll");
        setSites(resSites.data.sort(customComparator));

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
              cause += "Метеологические условия; ";
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
    getData();
  }, [date]);

  const today = new Date();
  const maxDate = today.toISOString().split("T")[0]; // Формат: год-месяц-день

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 2);

  const minDateFormatted = minDate.toISOString().split("T")[0];

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
      resDislocations.data.forEach((item) => {
        item.date = new Date(item.date);
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
          cause += "Метеологические условия; ";
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
        noticesDataByPeriod
      );
    } catch (err) {
      console.log(err);
    }
  };

  const generateExcelFile = () => {
    const workbook = XLSX.utils.book_new();

    const sheetLevelsGp = XLSX.utils.table_to_sheet(
      document.getElementById("levelsGpTable")
    );
    const sheetNameLevelsGp = "Уровни воды на гидропостах";

    const sheetLevelsGu = XLSX.utils.table_to_sheet(
      document.getElementById("levelsGuTable")
    );
    const sheetNameLevelsGu = "Уровни воды на гидроузлах";

    const sheetGabs = XLSX.utils.table_to_sheet(
      document.getElementById("gabsTable")
    );
    const sheetNameGabs = "Габариты судового хода";

    const sheetDislocations = XLSX.utils.table_to_sheet(
      document.getElementById("dislocationsTable")
    );
    const sheetNameDislocations = "Дислокация технического флота";

    const sheetBridges = XLSX.utils.table_to_sheet(
      document.getElementById("bridgesTable")
    );
    const sheetNameBridges = "Габариты подмостовых переходов";

    const sheetNotices = XLSX.utils.table_to_sheet(
      document.getElementById("noticesTable")
    );
    const sheetNameNotices = "Извещения";

    XLSX.utils.book_append_sheet(workbook, sheetLevelsGp, sheetNameLevelsGp);
    XLSX.utils.book_append_sheet(workbook, sheetLevelsGu, sheetNameLevelsGu);
    XLSX.utils.book_append_sheet(workbook, sheetGabs, sheetNameGabs);
    XLSX.utils.book_append_sheet(
      workbook,
      sheetDislocations,
      sheetNameDislocations
    );
    XLSX.utils.book_append_sheet(workbook, sheetBridges, sheetNameBridges);
    XLSX.utils.book_append_sheet(workbook, sheetNotices, sheetNameNotices);

    // Генерируем Excel файл
    const excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], { type: "application/octet-stream" });
    saveAs(blob, `sib_${date}.xlsx`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="contnetForPdf" className={styles.container} sx={{ mt: "50px" }}>
        <h2>СВОДНЫЙ ИНФОРМАЦИОННЫЙ БЮЛЛЕТЕНЬ</h2>
        <br />
        <Typography sx={{ margin: 5, maxWidth: "75%" }}>
          <Typography sx={{ fontSize: 18, marginBottom: 2, textAlign: "left" }}>
            Информационный бюллетень является сводным документом оперативных
            сведений о состоянии внутренних водных путей Республики Беларусь,
            получаемых ежедневно от республиканских унитарных предприятий
            водного пути.
          </Typography>
          <Typography sx={{ fontSize: 18, marginBottom: 2, textAlign: "left" }}>
            Сводный информационный бюллетень содержит следующую основную
            ежедневную информацию: сведения об уровнях воды по основным
            гидропостам; данные о наименьших глубине и ширине судовых ходов с
            указанием лимитирующих участков пути; сведения об изменениях в
            расстановке навигационных знаков, об открытии или закрытии судовых
            ходов; информация об ограничениях и особых условиях движения судов;
            сведения об условиях судоходства в местах производства строительных,
            подводно-технических и дноуглубительных работ; гидрологическая
            информация, включающая данные о ледовых образованиях; сведения о
            дислокации технического флота и изыскательских партий.
          </Typography>
          <Typography sx={{ fontSize: 18, marginBottom: 5, textAlign: "left" }}>
            <span>
              <b>Дополнительная информация</b>
            </span>{" "}
            <br></br> На основании п. 261{" "}
            <a
              href="https://gawt.by/wp-content/uploads/zakonodatelstvo/vnutrennij/24-%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BE%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B5%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D1%83%D1%82%D0%B5%D0%B2%D1%8B%D1%85%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%20%D1%81%20%D0%B8%D0%B7%D0%BC.%2010.03.22.pdf"
              style={{ textDecoration: "underline" }}
            >
              «Инструкции о порядке выполнения путевых работ и содержания
              судоходных гидротехнических сооружений на внутренних водных путях
              Республики Беларусь»
            </a>
            утверждённой приказом Министерства Транспорта и Коммуникаций от
            03.06.2021 №121-Ц организации, осуществляющие перевозки пассажиров и
            грузов по внутренним водным путям по договору с государственным
            учреждением “Государственная администрация водного транспорта”,
            получают следующую периодическую информацию: лоцманские карты;
            извещения судоводителям; ежедневную информацию о состоянии
            внутренних водных путей. По вопросам заключения договора обращается
            по тел. (017) 270-18-69.
          </Typography>
        </Typography>
        <Typography sx={{ fontSize: 18 }}>
            По внутренним водным путям Республики Беларусь на <span> </span>
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
          <TableLevelsGp data={levelsGpDataByDate} />
          <TableLevelsGu data={levelsGuDataByDate} />
          <TableGabs data={gabsDataByDate} sites={sites} />
          <TableDislocations data={dislocationsDataByDate} />
          <TableBridges data={bridgesDataByDate} />
          <TableNotices data={noticesDataByDate} />
        </div>
      </Box>
    </ThemeProvider>
  );
}

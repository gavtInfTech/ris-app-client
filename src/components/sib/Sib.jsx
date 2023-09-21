import {React, useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';
import styles from './style.module.css';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TableLevelsGp from './TableLevelsGp';
import TableLevelsGu from './TableLevelsGu';
import TableGabs from './TableGabs';
import TableDislocations from './TableDislocations';
import TableBridges from './TableBridges';
import TableNotices from './TableNotices';
import TextField from '@mui/material/TextField';
import { saveAs } from 'file-saver';
import {generatePdfFileByDate, generatePdfFileByPeriod} from './generatePdfFile';
import { api } from '../../axiosConfig';
import { customComparator } from '../vvp/siteMethods';

require("jspdf-autotable");

const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', 
            border: '1px solid #cacbcc',
          },
          head: {
            fontWeight: 'bold'
          }
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            width: '100%', 
            border: '2px solid #ebf4fc',
          },
        },
      },
    },
  });

export default function Sib () {
  const [sites, setSites] = useState([]);
  const [date, setDate] = useState(() => {
    let todayDate = new Date();
    const dateParts = todayDate.toLocaleString().slice(0, 10).split('.');
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

  useEffect(() => {
    const getData = async () => {
      try {
          const resSites = await api.get("/sites/getAll");
          setSites(resSites.data.sort(customComparator));

          const resLevelsGp = await api.get("/levelsGp/getAllByDate", { params: { date: new Date(date) } });
          resLevelsGp.data.forEach((item) => {
            item.date = new Date(item.date);
          })
          setLevelsGpDataByDate(resLevelsGp.data);

          const resLevelsGu = await api.get("/levelsGu/getAllByDate", { params: { date: new Date(date) } });
          resLevelsGu.data.forEach((item) => {
              item.date = new Date(item.date);
            })
          setLevelsGuDataByDate(resLevelsGu.data);

          const resGabs = await api.get("/gabs/getAllByDate", { params: { date: new Date(date) } });
          resGabs.data.forEach((item) => {
            item.date = new Date(item.date);
          })
          setGabsDataByDate(resGabs.data.map((doc) => ({...doc, 
              planDepth: doc.planDepth !== null ? doc.planDepth : "—",
              date: new Date(doc.date),
              limitedRoll: doc.limitedRoll !== null ? doc.limitedRoll : "—",
              forecastDate: doc.forecastDate !== null ? new Date(doc.forecastDate) : "—",
              forecastDepth: doc.forecastDepth !== null ? doc.forecastDepth : "—"})));

          const resDislocations = await api.get("/dislocation/getAllByDate", { params: { date: new Date(date) } });
          resDislocations.data.forEach((item) => {
            item.date = new Date(item.date);
          })
          setDislocationsDataByDate(resDislocations.data);

          const resBridges = await api.get("/bridges/getAllByDate", { params: { date: new Date(date) } });
          resBridges.data.forEach((item) => {
            item.date = new Date(item.date);
          })
          setBridgesDataByDate(resBridges.data);

          const resNotices = await api.get("/notices/getAllByDate", { params: { date: new Date(date) } });
          resNotices.data.forEach((item) => {
            item.date = new Date(item.date);
          })

          setNoticesDataByDate(resNotices.data.map((doc) => {
              let cause = "";
              if (doc.cause1) {cause += "Изменение СНО; " }
              if (doc.cause2) {cause += "Метеологические условия; " }
              if (doc.cause3) {cause += "Опасно для жизни; " }
              
              return {...doc, cause: cause};
              }))
        } catch (err) { 
          console.log(err)
        }
    }   
    getData();
  }, [date])

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  }

  const handleChangeStartPeriod = (event) => {
    setStartPeriod(event.target.value);
  }

  const handleChangeEndPeriod = (event) => {
    setEndPeriod(event.target.value);
  }

  const generatePdfFile = async () => {
    try {
      const resLevelsGp = await api.get("/levelsGp/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resLevelsGp.data.forEach((item) => {
        item.date = new Date(item.date);
      })
      let levelsGpDataByPeriod = resLevelsGp.data;

      const resLevelsGu = await api.get("/levelsGu/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resLevelsGu.data.forEach((item) => {
          item.date = new Date(item.date);
        })
      let levelsGuDataByPeriod = resLevelsGu.data;

      const resGabs = await api.get("/gabs/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resGabs.data.forEach((item) => {
        item.date = new Date(item.date);
      })
      let gabsDataByPeriod = resGabs.data.map((doc) => ({...doc, 
          planDepth: doc.planDepth !== null ? doc.planDepth : "—",
          date: new Date(doc.date),
          limitedRoll: doc.limitedRoll !== null ? doc.limitedRoll : "—",
          forecastDate: doc.forecastDate !== null ? new Date(doc.forecastDate) : "—",
          forecastDepth: doc.forecastDepth !== null ? doc.forecastDepth : "—"}));

      const resDislocations = await api.get("/dislocation/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resDislocations.data.forEach((item) => {
        item.date = new Date(item.date);
      })
      let dislocationsDataByPeriod = resDislocations.data;

      const resBridges = await api.get("/bridges/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resBridges.data.forEach((item) => {
        item.date = new Date(item.date);
      })
      let bridgesDataByPeriod = resBridges.data;

      const resNotices = await api.get("/notices/getAllByPeriod", { params: { startPeriod: new Date(startPeriod), endPeriod: new Date(endPeriod) } });
      resNotices.data.forEach((item) => {
        item.date = new Date(item.date);
      })

      let noticesDataByPeriod = resNotices.data.map((doc) => {
          let cause = "";
          if (doc.cause1) {cause += "Изменение СНО; " }
          if (doc.cause2) {cause += "Метеологические условия; " }
          if (doc.cause3) {cause += "Опасно для жизни; " }
          
          return {...doc, cause: cause};
          })

      generatePdfFileByPeriod(new Date(startPeriod), new Date(endPeriod), levelsGpDataByPeriod, levelsGuDataByPeriod, gabsDataByPeriod, dislocationsDataByPeriod, bridgesDataByPeriod, noticesDataByPeriod, sites)
    } catch (err) { 
      console.log(err)
    }
  }

  const generateExcelFile = () => {
    const workbook = XLSX.utils.book_new();

    const sheetLevelsGp = XLSX.utils.table_to_sheet(document.getElementById('levelsGpTable'));
    const sheetNameLevelsGp = 'Уровни воды на гидропостах';

    const sheetLevelsGu = XLSX.utils.table_to_sheet(document.getElementById('levelsGuTable'));
    const sheetNameLevelsGu = 'Уровни воды на гидроузлах';

    const sheetGabs = XLSX.utils.table_to_sheet(document.getElementById('gabsTable'));
    const sheetNameGabs = 'Габариты судового хода';

    const sheetDislocations = XLSX.utils.table_to_sheet(document.getElementById('dislocationsTable'));
    const sheetNameDislocations = 'Дислокация технического флота';

    const sheetBridges = XLSX.utils.table_to_sheet(document.getElementById('bridgesTable'));
    const sheetNameBridges = 'Габариты подмостовых переходов';

    const sheetNotices = XLSX.utils.table_to_sheet(document.getElementById('noticesTable'));
    const sheetNameNotices = 'Извещения';

    XLSX.utils.book_append_sheet(workbook, sheetLevelsGp, sheetNameLevelsGp);
    XLSX.utils.book_append_sheet(workbook, sheetLevelsGu, sheetNameLevelsGu);
    XLSX.utils.book_append_sheet(workbook, sheetGabs, sheetNameGabs);
    XLSX.utils.book_append_sheet(workbook, sheetDislocations, sheetNameDislocations);
    XLSX.utils.book_append_sheet(workbook, sheetBridges, sheetNameBridges);
    XLSX.utils.book_append_sheet(workbook, sheetNotices, sheetNameNotices);

    // Генерируем Excel файл
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelFile], { type: 'application/octet-stream' });
    saveAs(blob, `sib_${date}.xlsx`);
  };

 
  return (
    <ThemeProvider theme={theme}>
        <div id='contnetForPdf' className={styles.container} >
            <h2>СВОДНЫЙ ИНФОРМАЦИОННЫЙ БЮЛЛЕТЕНЬ</h2><br/>
            <Typography sx={{fontSize: 18}} >По внутренним водным путям Республики Беларусь на <span> </span>
             {
              <TextField
                name="date"
                type={'date'}
                value={date}
                onChange={handleChangeDate}
                variant="standard"
              />
            }
            </Typography>

            <Button 
                variant="contained"  
                type='submit'
                sx={{margin: "10px", width: '120px'}}
                onClick={() => generatePdfFileByDate(date, levelsGpDataByDate, levelsGuDataByDate, gabsDataByDate, dislocationsDataByDate, bridgesDataByDate, noticesDataByDate, sites)}
                >
                    Скачать 
            </Button>

            <Typography sx={{fontSize: 18}} >
              <span>     </span>
              <TextField
                name="startPeriod"
                type={'date'}
                value={startPeriod}
                onChange={handleChangeStartPeriod}
                variant="standard"
                sx={{ m: 1 }}
              />
              По <span>     </span>
              <TextField
                name="endPeriod"
                type={'date'}
                value={endPeriod}
                onChange={handleChangeEndPeriod}
                variant="standard"
                sx={{ m: 1 }}
              />
              <Button 
                variant="contained"  
                type='submit'
                sx={{m: 1, width: '120px'}}
                onClick={generatePdfFile}
                >
                    Скачать 
            </Button>
            </Typography>

            <div id='tablesContainer' className={styles.tablesContainer}>
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
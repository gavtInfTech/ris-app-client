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

  const [date, setDate] = useState('');

  useEffect(() => {
    let todayDate = new Date();
    const dateParts = todayDate.toLocaleString().slice(0, 10).split('.');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    setDate(formattedDate);
  }, [])

  const handleChangeDate = (event) => {
    setDate(event.target.value);
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
        <div className={styles.container} >
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
                onClick={generateExcelFile}
                >
                    Скачать 
            </Button>

            <div id='tablesContainer' className={styles.tablesContainer}>
              <TableLevelsGp date={date} />
              <TableLevelsGu date={date} />
              <TableGabs date={date} />
              <TableDislocations date={date} />
              <TableBridges date={date} />
              <TableNotices date={date} />
            </div>
            
        </div>
    </ThemeProvider>
  );
}
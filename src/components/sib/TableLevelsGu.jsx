import {React} from 'react';
import {hydronodes} from '../waterLevels/levelsGu/data'
import { Table, TableRow,TableCell,TableHead,TableBody, TableContainer } from "@mui/material";
import { Typography } from '@mui/material';
import styles from './style.module.css';

export default function TableLevelsGu(props) {
    const data = props.data;

      let rows = hydronodes.map((row) => {
        let rowData = data.find((dat) => (dat.hydronode === row.hydronode));
        if (rowData === undefined) return {...row};
        return {
          ...row,
          level1: rowData.level1,
          level2: rowData.level2,
          date: rowData.date.toLocaleString().slice(0, 10),
        };
      })

      const riverRows = (river) => {
        let filteredRows = rows.filter((row) => ( row.river === river ));
        let riverRows = filteredRows.map((row) => {
          return (
              <TableRow >
                  <TableCell align="left">{row.hydronode}</TableCell>
                  <TableCell align="center">{row.level1}</TableCell>
                  <TableCell align="center">{row.level2}</TableCell>
              </TableRow>
          )
        })
          return riverRows;
      }
      
      return (
        <>
            <Typography sx={{fontSize: 18, alignSelf: 'start'}}>2. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА</Typography>
            <TableContainer sx={{marginBottom: 5}}>
            <Table id='levelsGuTable' className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2} align="center">Наименование рек каналов и гидроузлов</TableCell>
                        <TableCell colSpan={2} align="center">Уровни воды над проектным горизонтом, см</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">ВБ</TableCell>
                        <TableCell align="center">НБ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Припять</TableCell>
                    </TableRow>
                    {riverRows("Припять")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Пина</TableCell>
                    </TableRow>
                    {riverRows("Пина")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>ДБК</TableCell>
                    </TableRow>
                    {riverRows("ДБК")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Мухавец</TableCell>
                    </TableRow>
                    {riverRows("Мухавец")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Западная Двина</TableCell>
                    </TableRow>
                    {riverRows("Западная Двина")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Неман</TableCell>
                    </TableRow>
                    {riverRows("Неман")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>Августовский канал</TableCell>
                    </TableRow>
                    {riverRows("Августовский канал")}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}
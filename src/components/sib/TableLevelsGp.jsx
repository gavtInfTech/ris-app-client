import {React, useState, useEffect} from 'react';
import {hydroposts} from '../waterLevels/levelsGp/data'
import { Table, TableRow,TableCell,TableHead,TableBody, TableContainer } from "@mui/material";
import { Typography } from '@mui/material';
import styles from './style.module.css';

export default function TableLevelsGp(props) {
    const data = props.data;
 
      let rows = hydroposts.map((row) => {
        let rowData = data.find((dat) => (dat.hydropost === row.hydropost));
        if (rowData === undefined) return {...row};
        return {
          ...row,
          level1: rowData.level1,
          level2: rowData.level2,
          date: rowData.date.toLocaleString().slice(0, 10),
          difference: rowData.difference
        };
      })

      const riverRows = (river) => {
        let filteredRows = rows.filter((row) => ( row.river === river ));
        let riverRows = filteredRows.map((row) => {
          return (
              <TableRow >
                  <TableCell align="left">{row.hydropost}</TableCell>
                  <TableCell align="center">{row.level1}</TableCell>
                  <TableCell align="center">{row.level2}</TableCell>
                  <TableCell align="center">{row.difference}</TableCell>
              </TableRow>
          )
        })
          return riverRows;
      }
      
      return (
        <>
            <Typography sx={{fontSize: 18, alignSelf: 'start'}}>1. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ НА 8 ЧАСОВ УТРА</Typography>
            <TableContainer sx={{marginBottom: 5}}>
            <Table id='levelsGpTable' className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2} align="center">Наименование рек и гидрологических постов</TableCell>
                        <TableCell colSpan={2} align="center">Уровни воды, см</TableCell>
                        <TableCell rowSpan={2} align="center">Прибыло (+), <br/> убыло (-)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Над "0" граф.</TableCell>
                        <TableCell align="center">Над проектным горизонтом</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Днепр</TableCell>
                    </TableRow>
                    {riverRows("Днепр")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Березина</TableCell>
                    </TableRow>
                    {riverRows("Березина")}

                    <TableRow>
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Сож</TableCell>
                    </TableRow>
                    {riverRows("Сож")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Припять</TableCell>
                    </TableRow>
                    {riverRows("Припять")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Горынь</TableCell>
                    </TableRow>
                    {riverRows("Горынь")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Западная Двина</TableCell>
                    </TableRow>
                    {riverRows("Западная Двина")}

                    <TableRow >
                        <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>р. Неман</TableCell>
                    </TableRow>
                    {riverRows("Неман")}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}
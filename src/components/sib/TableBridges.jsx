import {React, useState, useEffect} from 'react';
import { bridgeGroups } from '../admin/adminInfo'
import { Table, TableRow,TableCell,TableHead,TableBody, TableContainer } from "@mui/material";
import { Typography } from '@mui/material';
import styles from './style.module.css';

function keyToRiver(key) {
    // eslint-disable-next-line default-case
    switch(key) {
        case 'dnepr': return 'Днепр'
        case 'berezina': return 'Березина'
        case 'soj': return 'Сож'
        case 'neman': return 'Неман'
        case 'avgCanal': return 'Августовский канал'
        case 'dbk': return 'Днепро-Бугский канал'
        case 'pripyat': return 'Припять'
        case 'zapDvina': return 'Западная Двина'
    }
}

export default function TableGabs(props) {
    const data = props.data;

        let rows = [];
        for (var key in bridgeGroups) {
          // eslint-disable-next-line no-loop-func
          bridgeGroups[key].map((bridge) => {
              let rowData = data.find((item) => (item.bridge === bridge));
              if (rowData === undefined) rows.push({bridge: bridge, river: keyToRiver(key), height: '—'});
               else rows.push(rowData);
          })
        }

      const riverRows = (river) => {
        let filteredRows = rows.filter((row) => ( row.river === river ));
        let riverRows = filteredRows.map((row) => {
          return (
              <TableRow >
                  <TableCell align="left">{row.bridge}</TableCell>
                  <TableCell align="center">{row.height}</TableCell>
              </TableRow>
          )
        })
          return riverRows;
      }
      
      return (
        <>
            <Typography sx={{fontSize: 18, alignSelf: 'start'}}>5. ГАБАРИТЫ ПОДМОСТОВЫХ ПЕРЕХОДОВ</Typography>
            <TableContainer sx={{marginBottom: 5}}>
            <Table id='bridgesTable' className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2} align="center">Наименование рек и мостов</TableCell>
                        <TableCell rowSpan={2} align="center">Текущая высота пролета, м</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Днепр</TableCell>
                    </TableRow>
                    {riverRows("Днепр")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Березина</TableCell>
                    </TableRow>
                    {riverRows("Березина")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Сож</TableCell>
                    </TableRow>
                    {riverRows("Сож")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Неман</TableCell>
                    </TableRow>
                    {riverRows("Неман")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>Августовский канал</TableCell>
                    </TableRow>
                    {riverRows("Августовский канал")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>Днепро-Бугский канал</TableCell>
                    </TableRow>
                    {riverRows("Днепро-Бугский канал")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Припять</TableCell>
                    </TableRow>
                    {riverRows("Припять")}

                    <TableRow >
                        <TableCell align="left" colSpan={8} sx={{fontWeight: 'bold'}}>р. Западная Двина</TableCell>
                    </TableRow>
                    {riverRows("Западная Двина")}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}
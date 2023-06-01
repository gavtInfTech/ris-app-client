import {React, useState, useEffect} from 'react';
import {hydroposts} from '../waterLevels/levelsGp/data'
import { collection, query, getDocs } from "firebase/firestore";
import  { db }  from "../../init-firebase";
import { Table, TableRow,TableCell,TableHead,TableBody, TableContainer } from "@mui/material";
import { Typography } from '@mui/material';
import styles from './style.module.css';

export default function TableDislocations(props) {
    const [data, setData] = useState([]);
    const date = new Date(props.date).toLocaleString().slice(0, 10);
    
    useEffect(() => {
      const getData = async () => {
      const data = await getDocs(query(collection(db, "dislocations")));
      setData(data.docs.map((doc) => ({...doc.data(), date: doc.data().date.toDate()})))
      }   
      getData();
      }, [])

      const riverRows = (organisation) => {
        let filteredRows = data.filter((item) => ( item.organisation === organisation && item.date.toLocaleString().slice(0, 10) === date ));
        let riverRows = filteredRows.map((row) => {
          return (
              <TableRow >
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="center">{row.typeOfWork}</TableCell>
                  <TableCell align="center">{row.riverName}</TableCell>
                  <TableCell align="center">{row.distance}</TableCell>
                  <TableCell align="center">{row.place}</TableCell>
                  <TableCell align="center">{row.date.toLocaleString().slice(0, 10)}</TableCell>
              </TableRow>
          )
        })
          return riverRows;
      }
      
      return (
        <>
            <Typography sx={{fontSize: 18, alignSelf: 'start'}}>4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ</Typography>
            <TableContainer sx={{marginBottom: 5}}>
            <Table id='dislocationsTable' className={styles.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2} align="center">№ судна/партии</TableCell>
                        <TableCell rowSpan={2} align="center">Вид работы</TableCell>
                        <TableCell colSpan={3} align="center">Место работы</TableCell>
                        <TableCell rowSpan={2} align="center">Дата начала работы</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Наименование реки и № участка*</TableCell>
                        <TableCell align="center">Км от устья</TableCell>
                        <TableCell align="center">Место дислокации</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="left" colSpan={6} sx={{fontWeight: 'bold'}}>РУ ЭСП "Днепро-Бугский водный путь"</TableCell>
                    </TableRow>
                    {riverRows("РУ ЭСП \"Днепро-Бугский водный путь\"")}

                    <TableRow >
                        <TableCell align="left" colSpan={6} sx={{fontWeight: 'bold'}}>РУ Днепро-Двинское предприятие водных путей "Белводпуть"</TableCell>
                    </TableRow>
                    {riverRows("РУ Днепро-Двинское предприятие водных путей \"Белводпуть\"")}

                    <TableRow >
                        <TableCell align="left" colSpan={6} sx={{fontWeight: 'bold'}}>РУ Днепро-Березинское предприятие водных путей</TableCell>
                    </TableRow>
                    {riverRows("РУ Днепро-Березинское предприятие водных путей")}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}
import {React, useState, useEffect} from 'react';
import { siteRivers } from '../admin/adminInfo'
import { Table, TableRow,TableCell,TableHead,TableBody, TableContainer } from "@mui/material";
import { Typography } from '@mui/material';
import styles from './style.module.css';
import { api } from '../../axiosConfig';

const emptyObj = {
    planDepth: '—',
    date: '—',
    limitedRoll: '—',
    depth: '—',
    width: '—',
    forecastDate: '—',
    forecastDepth: '—'
}

function keyToRiver(key) {
    // eslint-disable-next-line default-case
    switch(key) {
        case 'dnepr': return 'Днепр'
        case 'berezina': return 'Березина'
        case 'soj': return 'Сож'
        case 'neman': return 'Неман'
        case 'muhavets': return 'Мухавец'
        case 'dnepBug': return 'Днепро-Бугский канал'
        case 'pina': return 'Пина'
        case 'upperPripyat': return 'Верхний участок реки Припять'
        case 'pripyat': return 'Припять'
        case 'mikashevichskiCanal': return 'Микашевичский канал'
        case 'gorin': return 'Горынь'
        case 'zapDvina': return 'Западная Двина'
        case 'turovskiZaton': return 'Туровский затон'
        case 'avgustovskiCanal': return 'Августовский канал'
        case 'svisloch': return 'Свислочь'
    }
}

export default function TableNotices(props) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const getData = async () => {
        try {
            const res = await api.get("/notices/getAllByDate", { params: { date: new Date(props.date) } });
            res.data.forEach((item) => {
              item.date = new Date(item.date);
            })

            setData(res.data.map((doc) => {
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
      }, [props.date])
      console.log(data);
    
      const riverRows = (river) => {
        
        let filteredRows = data.filter((row) => ( row.river === river));
        if (filteredRows.length === 0) return;
        const riverRows = filteredRows.map((row) => {
          return (
              <TableRow >
                  <TableCell align="left">{row.site}</TableCell>
                  <TableCell align="center">{row.date.toLocaleString().slice(11, 17)}</TableCell>
                  <TableCell align="center">{row.cause}</TableCell>
                  <TableCell align="center">{row.content}</TableCell>
              </TableRow>
          )
        })
          return (
            <>
            <TableRow >
                <TableCell align="left" colSpan={4} sx={{fontWeight: 'bold'}}>{river}</TableCell>
            </TableRow>
            {riverRows}
            </>
          )
      }
      
      return (
        <>
            <Typography sx={{fontSize: 18, alignSelf: 'start'}}>6. ИЗВЕЩЕНИЯ</Typography>
            <TableContainer>
                <Table id='noticesTable' className={styles.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Наименование рек и участков</TableCell>
                            <TableCell align="center">Время</TableCell>
                            <TableCell align="center">Причина уведомления</TableCell>
                            <TableCell align="center">Содержание</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {riverRows("Днепр")}
                        {riverRows("Березина")}
                        {riverRows("Сож")}
                        {riverRows("Неман")}
                        {riverRows("Мухавец")}
                        {riverRows("Днепро-Бугский канал")}
                        {riverRows("Пина")}
                        {riverRows("Верхний участок реки Припять")}
                        {riverRows("Припять")}
                        {riverRows("Микашевичский канал")}
                        {riverRows("Горынь")}
                        {riverRows("Западная Двина")}
                        {riverRows("Туровский затон")}
                        {riverRows("Августовский канал")}
                        {riverRows("Свислочь")}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
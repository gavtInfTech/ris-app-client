import  { React, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from './style.module.css'
import { YMaps, Map, Placemark} from "react-yandex-maps";
import { hydroposts } from './data';
import AdditionalInfo from './AdditionalInfo';
import Graph from './Graph';
import clsx from 'clsx';
import { api } from '../../../axiosConfig';

  let rows = [];

  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

  export default function LevelsGp(props) {

    const [map, setMap] = useState(mapState);
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const res = await api.get("/levelsGp/getAll");
          res.data.forEach((item) => {
            item.date = new Date(item.date);
          })
          setData(res.data);
        } catch (err) { 
          console.log(err)
        }
      }   
      getData();
      }, [])

      rows = hydroposts.map((row) => {
        let rowData = data.filter((dat) => (dat.hydropost === row.hydropost));
        if (rowData.length === 0) return row;
        let lastRecord = rowData[0];
        rowData.forEach((dat) => { if (dat.date.getTime() > lastRecord.date.getTime()) lastRecord = dat; })
      
        return {
          ...row,
          level1: lastRecord.level1,
          level2: lastRecord.level2,
          difference: lastRecord.difference,
          date: lastRecord.date.toLocaleString().slice(0, 10)
        }
      })

  const columns = [
    { 
      field: 'hydropost', 
      headerName: 'Гидропост',
      width: '150'
    },
    { 
      field: 'river', 
      headerName: 'Река', 
      width: '150'
    },
    { 
      field: 'date', 
      headerName: 'Дата измерения', 
      width: '130'
    },
    { 
      field: 'level1', 
      headerName: 'Уровень воды над 0 граф', 
      type: 'string',
      width: '190'
    },
    {
      field: 'level2',
      headerName: 'Уровень воды над ПГ',
      type: 'string',
      width: '160'
    },
    {
      field: 'difference',
      headerName: 'Прибыло (+), убыло (-), см',
      type: 'string',
      cellClassName: (params) => {
     
  
        return clsx('super-app', {
          negative: params.row.difference < 0,
          positive: params.row.difference > 0,
          default: params.row.difference === '0'
        });
      },
      width: 180,
    },
    {
      field: 'action1',
      type: 'actions',
      headerName: 'На карте',
      getActions: ({ id }) => {
        return [
          <Button
            options={rows.find(row => row.id === id).options}
            onClick={() => setMap({center: rows.find(row => row.id === id).coords, zoom: 15})}
            key={id}
          > 
          Показать
          </Button>
        ]
    },
    },
    {
        field: 'action2',
        type: 'actions',
        headerName: 'Показать график',
        width: '140',
        getActions: ({ id }) => {
          let row = rows.find(item => item.id === id);
          let filteredData = data.filter((dat) => (row.hydropost === dat.hydropost));
          filteredData.sort((a, b) => a.date.getTime() - b.date.getTime());
          let newData = filteredData.map((dat) => ([dat.date, Number(dat.level2)]));
          
          return [
            <Graph data={newData} row={row}/>
          ]
      },
    },
    {
        field: 'action3',
        type: 'actions',
        headerName: 'Дополнительная информация',
        width: '220',
        getActions: ({ id }) => {
          let info = rows.find(item => item.id === id);
          return [
           <AdditionalInfo info={info} id={id}/>
          ]
      },
    },
  ];

  const marks = rows.map((row) => {

    let contentBody = "Гидропост : " + row.hydropost +
    "<br> Река: " + row.river + 
    "<br> Уровень воды над 0 граф: " + row.level1 + 
    "<br> Уровень воды над ПГ: " + row.level2 +
    "<br> Прибыло (+), убыло (-), см: " + row.difference

    return (
        <Placemark geometry={row.coords} key={row.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
           options={{
             iconLayout: 'default#image',
             iconImageHref: '/images/levelGp.png',
             iconImageSize: [30, 30],
             iconImageOffset: [-15, -15],
            }} />
    )
    });

  return ( 
      <div className={styles.container}>
        <Box className={styles.element}
          sx={{
            '& .super-app.negative': {
              backgroundColor: '#d47483',
              color: '#1a3e72',
              fontWeight: '600',
            },
            '& .super-app.positive': {
              backgroundColor: 'rgba(157, 255, 118, 0.49)',
              color: '#1a3e72',
              fontWeight: '600',
            },
            '& .super-app.default': {
              backgroundColor: 'rgba(114, 163, 255, 0.49)',
              color: '#1a3e72',
              fontWeight: '600',
            },
          }}>
          <DataGrid
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            getRowHeight={() => 'auto'}
            sx={{
                [`& .${gridClasses.cell}`]: {
                  py: 1,
                },
              }}
          />
        </Box>
        <YMaps>
          <Map state={map} className={styles.element}>
            {marks}
          </Map>
        </YMaps> 
      </div>
  );
}
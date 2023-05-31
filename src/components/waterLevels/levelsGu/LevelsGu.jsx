import  { React, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from './style.module.css'
import { YMaps, Map, Placemark} from "react-yandex-maps";
import { hydronodes } from './data';
import { collection, query, where, getDocs } from "firebase/firestore";
import  { db }  from "../../../init-firebase.js";
import axios from 'axios';

  let rows = hydronodes;

  const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

  export default function LevelsGp(props) {

    const [map, setMap] = useState(mapState);
    const [data, setData] = useState([]);
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
      const getData = async () => {
      const data = await getDocs(query(collection(db, "levelsGu")));
      setData(data.docs.map((doc) => ({...doc.data(), date: doc.data().date.toDate()})))
      }   
      getData();
      }, [])

      rows = rows.map((row) => {
        let rowData = data.filter((dat) => (dat.hydronode === row.hydronode && dat.river === row.river));
        if (rowData.length === 0) return row;
        let lastRecord = rowData[0];
        rowData.forEach((dat) => { if (dat.date.getTime() > lastRecord.date.getTime()) lastRecord = dat; })
        row.level1 = lastRecord.level1;
        row.level2 = lastRecord.level2;
        row.date = lastRecord.date.toLocaleString().slice(0, 10);
        return row;
      })

  const columns = [
    { field: 'hydronode', 
      headerName: 'Гидроузел',
      width: '150'
    },
    { field: 'river', 
      headerName: 'Река', 
      width: '150'
    },
    { 
      field: 'date', 
      headerName: 'Дата измерения', 
    },
    { field: 'level1', 
      headerName: 'Уровень воды над ПГ, ВБ', 
      type: 'number',
      width: '190'
    },
    {
      field: 'level2',
      headerName: 'Уровень воды над ПГ, НБ',
      type: 'number',
      width: '160'
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
  ];

  const marks = rows.map((row) => {

    let contentBody = "Гидроузел : " + row.hydronode +
    "<br> Река: " + row.river + 
    "<br> Дата измерения: " + row.date + 
    "<br> Уровень воды над ПГ, ВБ: " + row.level1 + 
    "<br> Уровень воды над ПГ, НБ: " + row.level2

    return (
        <Placemark geometry={row.coords} key={row.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
           options={{
             iconLayout: 'default#image',
             iconImageHref: '/images/levelGu.png',
             iconImageSize: [30, 30],
            }} />
    )
    });

  return ( 
      <div className={styles.container}>
        <Box className={styles.element}>
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
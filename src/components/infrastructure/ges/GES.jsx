import  { React, useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from '../menu.module.css'
import { YMaps, Map, Placemark} from "react-yandex-maps";
import { ges } from './data';

    const rows = ges;

    const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function Shluzi(props) {

  const [map, setMap] = useState(mapState);

  const columns = [
    {
        field: 'name',
        headerName: 'Наименование ',
        width: 140,
    },
    {
        field: 'year',
        headerName: 'Год ввода в эксплуатацию',
        width: 150,
    },
    {
        field: 'river',
        headerName: 'Река (канал)',
        width: 150,
    },
    {
        field: 'power',
        headerName: 'Мощность, МВт',
        width: 140,
        type: 'number',
    },
    {
        field: 'owner',
        headerName: 'Собственник',
        width: 200,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'На карте',
      getActions: ({ id }) => {
        return [
          <Button
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

    let contentBody = "Наименование: " + row.name +
    "<br> Год ввода в эксплуатацию: " + row.year + 
    "<br> Река (канал): " + row.river + 
    "<br> Установленная мощность, МВт: " + row.power +
    "<br> Собственник: " + row.owner

    return (
        <Placemark geometry={row.coords} key={row.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
           options={{
             iconLayout: 'default#image',
             iconImageHref: '/images/ges.png',
             iconImageSize: [30, 30],
             iconImageOffset: [-15, -15]
            }} />
    )
    });

  return ( 
      <div className={styles.containerMap}>
        <Box className={styles.element}>
          <DataGrid
          getRowHeight={() => 'auto'}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
          }}
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
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
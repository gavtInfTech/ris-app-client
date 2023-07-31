import  { React, useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from '../menu.module.css'
import { YMaps, Map, Placemark} from "react-yandex-maps";
import { ports } from './data';

    const rows = ports;

    const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

    export default function Shluzi(props) {

    const [map, setMap] = useState(mapState);

  const columns = [
    {
        field: 'name',
        headerName: 'Наименование',
        width: 250,
      },
      {
        field: 'year',
        headerName: 'Год ввода в эксплуатацию',
        width: 190,
      },
      {
        field: 'river',
        headerName: 'Река (канал)',
        width: 150,
      },
      {
        field: 'coast',
        headerName: 'Берег',
        width: 90,
      },
      {
        field: 'place',
        headerName: 'Местоположение',
        width: 200,
      },
      {
        field: 'length',
        headerName: 'Длина причала, м',
        width: 130,
        type: 'number',
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

    let contentBody = "Адрес: " + row.address +
    "<br> Телефон: " + row.telephone + 
    "<br> E-mail: " + row.email + 
    `<br> <a href=${row.website} target="blank" style="color: blue">Перейти на сайт</a>`

    return (
        <Placemark geometry={row.coords} key={row.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
           options={{
             iconLayout: 'default#image',
             iconImageHref: '/images/port.png',
             iconImageSize: [30, 30],
             iconImageOffset: [-15, -15],
            //  hideIconOnBalloonOpen: false
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
import  { React, useState } from 'react';
import Button from '@mui/material/Button';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from '../menu.module.css'
import { YMaps, Map, Placemark} from "react-yandex-maps";
import { gateways } from './data';

    const rows = gateways;

    const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function Shluzi(props) {

    const [map, setMap] = useState(mapState);

  const columns = [
    { field: 'sluz', 
      headerName: 'Шлюз', 
    },
    { field: 'location', 
      headerName: 'Местоположение на реке(канале)', 
    },
    { field: 'date', 
      headerName: 'Год ввода в эксплуатацию', 
    },
    {
      field: 'amount',
      headerName: 'Количество камер, шт',
      type: 'number',
    },
    {
      field: 'length',
      headerName: 'Длина камеры между устоями(полезная), м',
      type: 'number',
    },
    {
        field: 'width',
        headerName: 'Ширина камеры(пролета), м',
        type: 'number',
      },
      {
        field: 'napor',
        headerName: 'Напор, м',
        type: 'number',
      },
      {
        field: 'depth',
        headerName: 'Глубина на пороге(ВГ/НГ), м',
        type: 'string',
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

    let contentBody = "Шлюз: " + row.sluz +
    "<br> Габариты сооружения: <br> " +
    "Длина камеры между устоями (полезная): " + row.length + 
    "<br> Ширина камеры, (пролета): " + row.width + 
    "<br> Напор: " + row.napor +
    "<br> Глубина на пороге (ВГ/НГ): " + row.depth

    return (
        <Placemark geometry={row.coords} key={row.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
           options={{
             iconLayout: 'default#image',
             iconImageHref: '/images/gateway.png',
             iconImageSize: [30, 30],
            }} />
    )
    });

  return ( 
      <div className={styles.containerMap}>
        <div className={styles.element}>
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
        </div>
        <YMaps>
          <Map state={map} className={styles.element}>
            {marks}
          </Map>
        </YMaps> 
      </div>
  );
}
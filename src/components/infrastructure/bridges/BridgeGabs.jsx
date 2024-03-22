import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "../menu.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { api } from '../../../axiosConfig';

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function BridgeGabs() {
  const [map, setMap] = useState(mapState);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/bridges/getLastBridgeGabs");
        setRows(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const columns = [
    { field: "bridge", headerName: "Название моста", width: "220" },
    { field: "river", headerName: "Река (канал)", width: "130" },
    { field: "date", headerName: "Дата последнего измерения", width: "210" },
    {
      field: "height",
      headerName: "Подмостовые габариты, м",
      width: "180",
      type: "number",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "На карте",
      getActions: ({ id }) => {
        return [
          <Button
            options={rows.find((row) => row.id === id).options}
            onClick={() =>
              setMap({
                center: rows.find((row) => row.id === id).coords,
                zoom: 15,
              })
            }
            key={id}
          >
            Показать
          </Button>,
        ];
      },
    },
  ];

  const marks = rows.map((row) => {
    let contentBody =
      "Название моста: " +
      row.bridge +
      "<br> Река (канал): " +
      row.river +
      "<br> Дата последнего измерения: " +
      row.date +
      "<br> Текущая высота пролета: " +
      row.height;

    return (
      <Placemark
        geometry={row.coords}
        key={row.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: "./images/bridge.png",
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15]
        }}
      />
    );
  });

  return (
    <div className={styles.containerMap}>
      <Box className={styles.element}>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          getRowHeight={() => "auto"}
          get
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

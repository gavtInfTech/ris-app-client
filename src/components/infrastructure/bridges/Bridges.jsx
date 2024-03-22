import { React, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses, nlNL  } from "@mui/x-data-grid";
import styles from "../menu.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { bridges } from "./data";
import { Typography } from "@mui/material";

const rows = bridges;

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };



export default function Shluzi(props) {
  const [map, setMap] = useState(mapState);

  const columns = [
    { field: "name", headerName: "Название моста", width: "220" },
    { field: "type", headerName: "Тип моста" },
    { field: "river", headerName: "Река (канал)", width: "130" },
    {
      field: "post",
      headerName: "Водомерный пост",
      width: "135",
    },
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
      row.name +
      "<br> Тип моста: " +
      row.type +
      "<br> Река (канал): " +
      row.river +
      "<br> Водомерный пост: " +
      row.post +
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
          iconImageOffset: [-15, -15],
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

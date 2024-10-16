import { React, useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "../menu.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { gateways } from "./data";
import { Box, Typography } from "@mui/material";

const rows = gateways;

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

function FooterCaption() {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6px",
      }}
    >
      <Typography fontSize={10}>
        Технические характеристики судоходных гидротехнических сооружений (СГТС)
        представлены на основании сведений, имеющихся в Государственной
        администрации водного транспорта. Для уточнения информации необходимо
        обращаться на предприятия, в хозяйственном ведении которых находятся
        данные СГТС.
      </Typography>
    </Box>
  );
}

export default function Shluzi(props) {
  const [map, setMap] = useState(mapState);

  const columns = [
    { field: "sluz", headerName: "Наименование шлюза", width: 250 },
    {
      field: "location",
      headerName: "Местоположение на реке(канале)",
      width: 250,
    },
    { field: "date", headerName: "Год ввода в эксплуатацию", width: 200 },
    {
      field: "amount",
      headerName: "Количество камер, шт",
      type: "number",
      width: 170,
    },
    {
      field: "length",
      headerName: "Длина камеры между устоями(полезная), м",
      type: "number",
      width: 310,
    },
    {
      field: "width",
      headerName: "Ширина камеры(пролета), м",
      type: "number",
      width: 250,
    },
    {
      field: "napor",
      headerName: "Напор, м",
      type: "number",
      width: 100,
    },
    {
      field: "depth",
      headerName: "Глубина на пороге(ВГ/НГ), м",
      type: "string",
      width: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "На карте",
      getActions: ({ id }) => {
        return [
          <Button
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
      "Шлюз: " +
      row.sluz +
      "<br> Габариты сооружения: <br> " +
      "Длина камеры между устоями (полезная): " +
      row.length +
      "<br> Ширина камеры, (пролета): " +
      row.width +
      "<br> Напор: " +
      row.napor +
      "<br> Глубина на пороге (ВГ/НГ), м: " +
      row.depth;

    return (
      <Placemark
        geometry={row.coords}
        key={row.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: "/images/gateway.png",
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  return (
    <div className={styles.containerMap}>
      <div className={styles.element}>
        <DataGrid
          components={{ Footer: FooterCaption }}
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          getRowHeight={() => "auto"}
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

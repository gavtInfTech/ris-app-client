import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "./style.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { api } from "../../../axiosConfig";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function LevelsGp(props) {
  const [map, setMap] = useState(mapState);
  const [hydronodes, setHydronodes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/levelsGu/getLastLevels");
       
        setHydronodes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const columns = [
    { field: "hydronode", headerName: "Гидроузел", width: "150" },
    { field: "river", headerName: "Река", width: "150" },
    {
      field: "date",
      headerName: "Дата измерения",
      width: "130",
    },
    {
      field: "level1",
      headerName: "Уровень воды над ПГ, ВБ",
      type: "number",
      width: "190",
    },
    {
      field: "level2",
      headerName: "Уровень воды над ПГ, НБ",
      type: "number",
      width: "180",
    },
    {
      field: "action1",
      type: "actions",
      headerName: "На карте",
      getActions: ({ id }) => {
        return [
          <Button
            options={hydronodes.find((row) => row.id === id).options}
            onClick={() =>
              setMap({
                center: hydronodes.find((row) => row.id === id).coords,
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

  const marks = hydronodes.map((row) => {
    let contentBody =
      "Гидроузел : " +
      row.hydronode +
      "<br> Река: " +
      row.river +
      "<br> Дата измерения: " +
      row.date +
      "<br> Уровень воды над ПГ, ВБ: " +
      row.level1 +
      "<br> Уровень воды над ПГ, НБ: " +
      row.level2;

    return (
      <Placemark
        geometry={row.coords}
        key={row.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: "/images/levelGu.png",
          iconImageSize: [30, 30],
        }}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Box className={styles.element}>
        <DataGrid
          rows={hydronodes}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          getRowHeight={() => "auto"}
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

import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import styles from "./style.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { api } from "../../../axiosConfig";
import { hydronodes } from "./data";
import clsx from "clsx";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function LevelsGp(props) {
  const [map, setMap] = useState(mapState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/levelsGu/getAll");
        res.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  let rows = hydronodes.map((row) => {
    let rowData = data.filter((dat) => dat.hydronode === row.hydronode);
    if (rowData.length === 0) return row;
    let lastRecord = rowData[0];
    rowData.forEach((dat) => {
      if (dat.date.getTime() > lastRecord.date.getTime()) lastRecord = dat;
    });

    return {
      ...row,
      level1: lastRecord.level1,
      level2: lastRecord.level2,
      level1Change: lastRecord.level1Change === "-" ? '—' : lastRecord.level1Change,
      level2Change: lastRecord.level2Change === "-" ? '—' : lastRecord.level2Change,
      date: lastRecord.date.toLocaleString().slice(0, 10),
    };
  });

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
      type: "string",
      width: "190",
    },
    {
      field: "level2",
      headerName: "Уровень воды над ПГ, НБ",
      type: "string",
      width: "190",
    },
    {
      field: "level1Change",
      headerName: "Изменение ВБ",
      type: "string",
      width: "115",
      cellClassName: (params) => {
        if (params.row.level1 === "—") {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level1Change < 0,
          positive: params.row.level1Change > 0,
          default:
            params.row.level1Change === "0" || params.row.level1Change === "—",
        });
      },
    },
    {
      field: "level2Change",
      headerName: "Изменение НБ",
      type: "string",
      width: "115",
      cellClassName: (params) => {
        if (params.row.level1 === "—") {
          return "";
        }

        return clsx("super-app", {
          negative: params.row.level2Change < 0,
          positive: params.row.level2Change > 0,
          default:
            params.row.level1Change === "0" || params.row.level2Change === "—",
        });
      },
    },
    {
      field: "action1",
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
      "Гидроузел: " +
      row.hydronode +
      "<br> Река: " +
      row.river +
      "<br> Дата измерения: " +
      row.date +
      "<br> Уровень воды над ПГ, ВБ: " +
      row.level1 +
      "<br> Уровень воды над ПГ, НБ: " +
      row.level2 +
      "<br> Изменение ВБ: " +
      row.level1Change +
      "<br> Изменение НБ: " +
      row.level2Change;

    return (
      <Placemark
        geometry={row.coords}
        key={row.id}
        properties={{ balloonContentBody: contentBody }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: "/images/levelGu.png",
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Box
        sx={{
          "& .super-app.negative": {
            backgroundColor: "#d47483",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.positive": {
            backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .super-app.default": {
            backgroundColor: "rgba(114, 163, 255, 0.49)",
            color: "#1a3e72",
            fontWeight: "600",
          },
        }}
        className={styles.element}
      >
        <DataGrid
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
      </Box>
      <YMaps>
        <Map state={map} className={styles.element}>
          {marks}
        </Map>
      </YMaps>
    </div>
  );
}

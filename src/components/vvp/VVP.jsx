import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import {
  YMaps,
  Map,
  Placemark,
  ListBoxItem,
  ListBox,
  Polyline,
} from "react-yandex-maps";
import { api } from "../../axiosConfig";
import { hydroposts } from "../waterLevels/levelsGp/data";
import { hydronodes } from "../waterLevels/levelsGu/data";
import { findSegmentByKilometer } from "./qwes";

const rivers = [
  {
    data: { content: "Припять" },
    coords: [51.4839, 29.9883],
  },
  {
    data: { content: "Днепр" },
    coords: [51.4839, 29.9883],
  },
  {
    data: { content: "Западная Двина" },
    coords: [55.432838, 28.94815],
  },
  {
    data: { content: "Неман" },
    coords: [53.8855, 23.7596],
  },
  {
    data: { content: "Сож" },
    coords: [51.949251, 30.808208],
  },
  {
    data: { content: "Свислочь" },
    coords: [53.925347, 27.534352],
  },
];

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
export default function VVP() {
  const [map, setMap] = useState(mapState);
  const [dataGp, setDataGp] = useState([]);
  const [dataGu, setDataGu] = useState([]);
  const [currentNotices, setCurrentNotices] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resSites = await api.get("/sites/getAll");
        setSites(resSites.data);

        const resGp = await api.get("/levelsGp/getAll");
        resGp.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setDataGp(resGp.data);

        const resGu = await api.get("/levelsGu/getAll");
        resGu.data.forEach((item) => {
          item.date = new Date(item.date);
        });
        setDataGu(resGu.data);

        const resNotices = await api.get("/notices/getCurrentNotices");
        resNotices.data.forEach((item) => {
          let date = new Date(item.date);
          item.date = date.toLocaleString().slice(0, 10);
        });
        setCurrentNotices(resNotices.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  let lastHydropostsData = hydroposts.map((row) => {
    let rowData = dataGp.filter((dat) => dat.hydropost === row.hydropost);
    if (rowData.length === 0) return row;
    let lastRecord = rowData[0];
    rowData.forEach((dat) => {
      if (dat.date.getTime() > lastRecord.date.getTime()) lastRecord = dat;
    });
    return {
      ...row,
      level1: lastRecord.level1,
      level2: lastRecord.level2,
      date: lastRecord.date.toLocaleString().slice(0, 10),
      difference: lastRecord.difference,
    };
  });

  let lastHydronodesData = hydronodes.map((row) => {
    let rowData = dataGu.filter((dat) => dat.hydronode === row.hydronode);
    if (rowData.length === 0) return row;
    let lastRecord = rowData[0];
    rowData.forEach((dat) => {
      if (dat.date.getTime() > lastRecord.date.getTime()) lastRecord = dat;
    });

    return {
      ...row,
      level1: lastRecord.level1,
      level2: lastRecord.level2,
      level1Change:
        lastRecord.level1Change === "-" ? "—" : lastRecord.level1Change,
      level2Change:
        lastRecord.level2Change === "-" ? "—" : lastRecord.level2Change,
      date: lastRecord.date.toLocaleString().slice(0, 10),
    };
  });

  const hydropostMarks = lastHydropostsData.map((item) => {
    let contentBody =
      "Гидропост: " +
      item.hydropost +
      "<br> Река: " +
      item.river +
      "<br> Уровень воды над 0 граф: " +
      item.level1 +
      "<br> Уровень воды над ПГ: " +
      item.level2 +
      "<br> Дата последнего измерения: " +
      item.date +
      "<br> Прибыло (+), убыло (-): " +
      item.difference;

    return (
      <Placemark
        geometry={item.coords}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: "/images/levelGp.png",
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  const hydronodeMarks = lastHydronodesData.map((item) => {
    let contentBody =
      "Гидроузел: " +
      item.hydronode +
      "<br> Река: " +
      item.river +
      "<br> Дата последнего измерения: " +
      item.date +
      "<br> Уровень воды над ПГ, ВБ: " +
      item.level1 +
      "<br> Уровень воды над ПГ, НБ: " +
      item.level2 +
      "<br> Изменение уровня за сутки, ВБ: " +
      item.level1Change +
      "<br> Изменение уровня за сутки, НБ: " +
      item.level2Change;

    return (
      <Placemark
        geometry={item.coords}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
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

  const polylines = sites.map((site) => {
    let isBalloonOpen = false;
    let notice = currentNotices.find((notice) => notice.site === site.name);
    let color = notice ? "#ff6f00" : "#0000ff";
    let propertyObject = {
      balloonContentBody:
        "<b>Река: " + site.river + "<br>Участок: " + site.name + "</b>",
    };
    if (notice) {
      propertyObject.balloonContentBody =
        propertyObject.balloonContentBody +
        "<br>Причина уведомления: " +
        notice.cause +
        "<br>Содержание: " +
        notice.content;
      propertyObject.balloonContentFooter = "Дата: " + notice.date;
    }
    return (
      <Polyline
        geometry={findSegmentByKilometer(site.river, site.firstKM, site.secondKM)}
        properties={propertyObject}
        modules={["geoObject.addon.balloon"]}
        options={{
          strokeColor: color,
          strokeWidth: 5,
        }}
        onClick={(event) => {
          isBalloonOpen = true;
          event
            .get("target")
            .options.set("strokeColor", "#8c00ff")
            .set("strokeWidth", 8);
        }}
        onBalloonClose={(event) => {
          isBalloonOpen = false;
          event
            .get("target")
            .options.set("strokeColor", color)
            .set("strokeWidth", 5);
        }}
        onMouseEnter={(event) => {
          event
            .get("target")
            .options.set("strokeColor", "#8c00ff")
            .set("strokeWidth", 8);
        }}
        onMouseLeave={(event) => {
          if (!isBalloonOpen) {
            event
              .get("target")
              .options.set("strokeColor", color)
              .set("strokeWidth", 5);
          }
        }}
      />
    );
  });

  return (
    <div className={styles.container}>
      <YMaps>
        <Map state={map} className={styles.map}>
          <ListBox data={{ content: "Водный путь" }}>
            {rivers.map((river) => (
              <ListBoxItem
                data={{ content: river.data.content }}
                options={{ selectOnClick: false }}
                onClick={() => setMap({ center: river.coords, zoom: 15 })}
              />
            ))}
          </ListBox>

          <ListBox data={{ content: "Гидропосты" }}>
            {hydroposts.map((hydropost) => (
              <ListBoxItem
                data={{ content: hydropost.hydropost }}
                onClick={() => setMap({ center: hydropost.coords, zoom: 15 })}
                options={{ selectOnClick: false }}
              />
            ))}
          </ListBox>

          <ListBox data={{ content: "Гидроузлы" }}>
            {lastHydronodesData.map((hydronode) => (
              <ListBoxItem
                data={{ content: hydronode.hydronode }}
                onClick={() => setMap({ center: hydronode.coords, zoom: 15 })}
                options={{ selectOnClick: false }}
              />
            ))}
          </ListBox>

          {polylines}
          {hydropostMarks}
          {hydronodeMarks}
        </Map>
      </YMaps>
    </div>
  );
}

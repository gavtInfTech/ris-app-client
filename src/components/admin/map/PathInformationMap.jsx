import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import {
  YMaps,
  Map,
  Placemark,
  ListBoxItem,
  ListBox,
  Polyline,
} from "react-yandex-maps";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function PathInformationMap(props) {
  const [map, setMap] = useState(mapState);
  const [contentHeight, setContentHeight] = useState();
  const { pathname } = useLocation();
  const [riverSigns, setRiverSigns] = useState([]);

  useEffect(() => {
    let signs = [];
    // eslint-disable-next-line default-case
    switch (pathname) {
      case "/path-information/dnepr":
        signs = props.signs.filter((sign) => sign.river === "Днепр");
        break;
      case "/path-information/berezina":
        signs = props.signs.filter((sign) => sign.river === "Березина");
        break;
      case "/path-information/dvina":
        signs = props.signs.filter((sign) => sign.river === "Западная Двина");
        break;
      case "/path-information/neman":
        signs = props.signs.filter((sign) => sign.river === "Неман");
        break;
      case "/path-information/pripyat1":
        signs = props.signs.filter((sign) => sign.river === "Припять");
        break;
      case "/path-information/pripyat2":
        signs = props.signs.filter((sign) => sign.river === "Верхний участок реки Припять");
        break;
      case "/path-information/soj":
        signs = props.signs.filter((sign) => sign.river === "Сож");
        break;
    }
    setRiverSigns(signs);
  }, [pathname, props.signs]);

  const riverSignsMarks = riverSigns.map((item) => {
    let contentBody =
      "Описание: " +
      item.description +
      "<br>Соответсвие цвета: " +
      (!item.place ? "Соответствует" : "Не соответствует") +
      "<br>Соответсвие места: " +
      (!item.size ? "Соответствует" : "Не соответствует") +
      "<br>Видимость: " +
      (!item.visibility ? "Соответствует" : "Не соответствует") +
      "<br>Комментарий: " +
      item.comment;
    return (
      <Placemark
        geometry={[item.latitude, item.longitude]}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: `/images/pathInformationImages/${item.image}.png`,
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  const calculateMaxHeight = () => {
    const windowHeight = window.innerHeight;

    if (window.innerWidth > 1200) {
      setContentHeight(windowHeight - 188);
    } else setContentHeight(null);
  };

  useEffect(() => {
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);
  }, []);

  return (
    <Box className={styles.container}>
      <Box
        sx={{ maxHeight: contentHeight + "px" }}
        className={styles.infoPart}
      ></Box>
      <Box className={styles.mapPart}>
        <YMaps>
          <Map state={map} className={styles.map}>
            {riverSignsMarks}
          </Map>
        </YMaps>
      </Box>
    </Box>
  );
}

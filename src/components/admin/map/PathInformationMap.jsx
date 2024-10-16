import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import {
  YMaps,
  Map,
  Placemark,
  ListBoxItem,
  ListBox,
  Polyline,
  Clusterer,
} from "react-yandex-maps";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { findSegmentByKilometer } from "../../vvp/siteMethods";
import PathInformationPart from "./PathInformationPart";
import { customComparator } from "../../vvp/siteMethods";
import MarhsrutnikInformationPart from "./Marshrutnik/MarhsrutnikInformationPart";
import Sib from "../../sib/Sib";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function PathInformationMap(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState(mapState);
  const [contentHeight, setContentHeight] = useState();
  const { pathname } = useLocation();
  const [signs, setSigns] = useState([]);
  const [sites, setSites] = useState([]);
  const [rifts, setRifts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [river, setRiver] = useState("Днепр");
  const [displaySigns, setDisplaySigns] = useState(true);
  const [displayRifts, setDisplayRifts] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    let riverSigns = [];
    let riverSites = [];
    let riverRifts = [];
    let riverAlerts = [];
    let pripyatSites = props.allSites.filter(
      (site) => site.river === "Припять"
    );
    // eslint-disable-next-line default-case
    switch (pathname) {
      case "/path-information/dnepr":
        setRiver("Днепр");
        riverSigns = props.signs.filter((sign) => sign.river === "Днепр");
        riverSites = props.allSites.filter((site) => site.river === "Днепр");
        riverRifts = props.rifts.filter((rift) => rift.river === "Днепр");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Днепр");
        break;
      case "/path-information/berezina":
        setRiver("Березина");
        riverSigns = props.signs.filter((sign) => sign.river === "Березина");
        riverSites = props.allSites.filter((site) => site.river === "Березина");
        riverRifts = props.rifts.filter((rift) => rift.river === "Березина");
        riverAlerts = props.alerts.filter(
          (alert) => alert.river === "Березина"
        );
        break;
      case "/path-information/dvina":
        setRiver("Западная Двина");
        riverSigns = props.signs.filter(
          (sign) => sign.river === "Западная Двина"
        );
        riverSites = props.allSites.filter(
          (site) => site.river === "Западная Двина"
        );
        riverRifts = props.rifts.filter(
          (rift) => rift.river === "Западная Двина"
        );
        riverAlerts = props.alerts.filter(
          (alert) => alert.river === "Западная Двина"
        );
        break;
      case "/path-information/neman":
        setRiver("Неман");
        riverSigns = props.signs.filter((sign) => sign.river === "Неман");
        riverSites = props.allSites.filter((site) => site.river === "Неман");
        riverRifts = props.rifts.filter((rift) => rift.river === "Неман");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Неман");
        break;
      case "/path-information/pripyat1":
        setRiver("Припять1");
        riverSigns = props.signs.filter((sign) => sign.river === "Припять1");
        riverSites = props.allSites.filter(
          (site) => site.river === "Микашевичский канал"
        );
        for (let i = pripyatSites.length - 1; i >= 0; i--) {
          if (pripyatSites[i].name.includes("устье Микашевичского канала")) {
            riverSites.push(pripyatSites[i]);
            break;
          } else {
            riverSites.push(pripyatSites[i]);
          }
        }

        riverRifts = props.rifts.filter((rift) => rift.river === "Припять1");
        riverAlerts = props.alerts.filter(
          (alert) => alert.river === "Припять1"
        );
        break;
      case "/path-information/pripyat2":
        setRiver("Припять2");
        riverSigns = props.signs.filter((sign) => sign.river === "Припять2");
        riverSites = props.allSites.filter(
          (site) =>
            site.river === "Мухавец" ||
            site.river === "Днепро-Бугский канал" ||
            site.river === "Пина" ||
            site.river === "Микашевичский канал" ||
            site.river === "Горынь" ||
            site.river === "Верхний участок реки Припять"
        );
        for (let i = 0; i < pripyatSites.length; i++) {
          if (pripyatSites[i].name.includes("устье Микашевичского канала")) {
            riverSites.push(pripyatSites[i]);
            break;
          } else {
            riverSites.push(pripyatSites[i]);
          }
        }

        riverRifts = props.rifts.filter((rift) => rift.river === "Припять2");
        riverAlerts = props.alerts.filter(
          (alert) => alert.river === "Припять2"
        );
        break;
      case "/path-information/soj":
        setRiver("Сож");
        riverSigns = props.signs.filter((sign) => sign.river === "Сож");
        riverSites = props.allSites.filter((site) => site.river === "Сож");
        riverRifts = props.rifts.filter((rift) => rift.river === "Сож");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Сож");
        break;
    }

    setSigns(riverSigns);
    setSites(riverSites.sort(customComparator));
    setRifts(riverRifts);
    // setAlerts(riverAlerts);
    setIsLoaded(true);
  }, [pathname, props.allSites]);

  const polylines = sites.map((site) => {
    let isBalloonOpen = false;
    let coords = findSegmentByKilometer(
      site.river,
      site.firstKM,
      site.secondKM
    );
    let color = "#0000ff";
    let propertyObject = {
      balloonContentBody: "Участок: " + site.name + "</b>",
    };
    return (
      <Polyline
        geometry={coords}
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

  const riverSignsMarks = signs.map((item) => {
    let contentBody =
      "Описание: " +
      item.description +
      "<br>Соответсвие цвета: " +
      (!item.place ? "Соответствует" : "Не соответствует") +
      "<br>Соответсвие места: " +
      (!item.size ? "Соответствует" : "Не соответствует") +
      "<br>Видимость: " +
      (!item.visibility ? "Соответствует" : "Не соответствует");
    return (
      <Placemark
        geometry={[item.latitude, item.longitude]}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: `/images/pathInformationImages/${item.image}.png`,
          iconImageSize: [35, 35],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  const riverRiftsMarks = rifts.map((item) => {
    let contentBody =
      "Описание: " +
      item.description +
      "<br>Уровень воды: " +
      item.waterLevel +
      "<br>Текущий уровень воды: " +
      item.currentWaterLevel;
    return (
      <Placemark
        geometry={[item.latitude, item.longitude]}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: `/images/pathInformationImages/rift.png`,
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -15],
        }}
      />
    );
  });

  const riverAlertMarks = alerts.map((item) => {
    let contentBody = "Содержание: " + item.comment + "<br>Дата: " + item.date;
    return (
      <Placemark
        geometry={[item.latitude, item.longitude]}
        key={item.id}
        properties={{ balloonContentBody: [contentBody] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          iconLayout: "default#image",
          iconImageHref: `/images/pathInformationImages/attention.png`,
          iconImageSize: [50, 50],
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
    <>
      {isLoaded ? (
        pathname === "/path-information/marshrutnik" ? (
          <MarhsrutnikInformationPart />
        ) : pathname === "/path-information/sib" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: "10px",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <Sib></Sib>
          </Box>
        ) : (
          <Box className={styles.container}>
            <Box
              sx={{ maxHeight: contentHeight + "px" }}
              className={styles.infoPart}
            >
              <PathInformationPart
                sites={sites}
                river={river}
                alerts={alerts}
                setAlerts={setAlerts}
              />
            </Box>
            <Box className={styles.mapPart}>
              <YMaps>
                <Map state={map} className={styles.map}>
                  <ListBox data={{ content: "Фильтрация" }}>
                    <ListBoxItem
                      data={{ content: "Знаки" }}
                      state={{ selected: displaySigns }}
                      options={{ selectOnClick: true }}
                      onClick={() => setDisplaySigns(!displaySigns)}
                    />
                    <ListBoxItem
                      data={{ content: "Перекаты" }}
                      state={{ selected: displayRifts }}
                      options={{ selectOnClick: true }}
                      onClick={() => setDisplayRifts(!displayRifts)}
                    />
                  </ListBox>
                  {polylines}
                  {displayRifts && riverRiftsMarks}
                  {displaySigns && riverSignsMarks}
                  {riverAlertMarks}
                </Map>
              </YMaps>
            </Box>
          </Box>
        )
      ) : (
        <p>Компонент загружается...</p>
      )}
    </>
  );
}

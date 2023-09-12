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
import { findSegmentByKilometer } from "../../vvp/qwes";
import PathInformationPart from "./PathInformationPart";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

const allSites = [
  {
    river: "Днепр",
    name: "1.1 дер.Левки (воздушный переход) – Прудки III",
    coords: findSegmentByKilometer("Днепр", 1531, 1575),
  },
  {
    river: "Днепр",
    name: "1.2 Прудки III – Могилев (мостовой переход)",
    coords: findSegmentByKilometer("Днепр", 1502, 1531),
  },
  {
    river: "Днепр",
    name: "1.3 Могилев (мостовой переход) – прк. Стайки III",
    coords: findSegmentByKilometer("Днепр", 1476, 1502),
  },
  {
    river: "Днепр",
    name: "1.4 прк. Стайки III – Быхов",
    coords: findSegmentByKilometer("Днепр", 1439, 1476),
  },
  {
    river: "Днепр",
    name: "1.5 Быхов – у.р. Друть",
    coords: findSegmentByKilometer("Днепр", 1313.5, 1439),
  },
  {
    river: "Днепр",
    name: "1.6 у.р. Друть – у.р. Березины",
    coords: findSegmentByKilometer("Днепр", 1206, 1313.5),
  },
  {
    river: "Днепр",
    name: "1.7 у.р. Березины – прк. Черное I",
    coords: findSegmentByKilometer("Днепр", 1188, 1206),
  },
  {
    river: "Днепр",
    name: "1.8 прк. Черное I – Речицкий ССРЗ",
    coords: findSegmentByKilometer("Днепр", 1180, 1188),
  },
  {
    river: "Днепр",
    name: "1.9 Речицкий ССРЗ – прк. Боровая I",
    coords: findSegmentByKilometer("Днепр", 1150, 1180),
  },
  {
    river: "Днепр",
    name: "1.10 прк. Боровая I – Подречицкое",
    coords: findSegmentByKilometer("Днепр", 1098, 1150),
  },
  {
    river: "Днепр",
    name: "1.11 Подречицкое – 1082 км",
    coords: findSegmentByKilometer("Днепр", 1082, 1098),
  },
  {
    river: "Днепр",
    name: "1.12 1082 км – Каменка",
    coords: findSegmentByKilometer("Днепр", 1080, 1082),
  },
  {
    river: "Днепр",
    name: "1.13 Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть)",
    coords: findSegmentByKilometer("Днепр", 1044.5, 1080),
  },
  {
    river: "Березина",
    name: "2.1 г.Березино (Березино пристань) – у.р. Волчанки",
    coords: findSegmentByKilometer("Березина", 199, 303),
  },
  {
    river: "Березина",
    name: "2.2 у.р. Волчанки – Бобруйский порт",
    coords: findSegmentByKilometer("Березина", 170, 199),
  },
  {
    river: "Березина",
    name: "2.3 Бобруйский порт – прк. Волышино",
    coords: findSegmentByKilometer("Березина", 145, 170),
  },
  {
    river: "Березина",
    name: "2.4 прк. Волышино – оз. Сельное",
    coords: findSegmentByKilometer("Березина", 61, 145),
  },
  {
    river: "Березина",
    name: "2.5 оз. Сельное – Якимова Слобода IV",
    coords: findSegmentByKilometer("Березина", 52, 61),
  },
  {
    river: "Березина",
    name: "2.6 Якимова Слобода IV – устье реки Березина",
    coords: findSegmentByKilometer("Березина", 0, 52),
  },
  {
    river: "Сож",
    name: "3.1 г. Славгород (Славгород - город) – Чечерский а/м мост",
    coords: findSegmentByKilometer("Сож", 205, 300),
  },
  {
    river: "Сож",
    name: "3.2.1 Чечерский автомобильный мост - пкр. у.р.Беседь 2",
    coords: findSegmentByKilometer("Сож", 147, 205),
  },
  {
    river: "Сож",
    name: "3.2.2 прк. у.р.Беседь 2 - прк. Крысин 1",
    coords: findSegmentByKilometer("Сож", 128, 147),
  },
  {
    river: "Сож",
    name: "3.3 прк. Крысин 1- Гомель пристань",
    coords: findSegmentByKilometer("Сож", 106, 128),
  },
  {
    river: "Сож",
    name: "3.4 Гомель пристань – порт Осовцы",
    coords: findSegmentByKilometer("Сож", 96, 106),
  },
  {
    river: "Сож",
    name: "3.5 порт Осовцы – прк. Никольский 3",
    coords: findSegmentByKilometer("Сож", 78, 96),
  },
  {
    river: "Сож",
    name: "3.6 прк. Никольский 3 – 35 км",
    coords: findSegmentByKilometer("Сож", 35, 78),
  },
  {
    river: "Сож",
    name: "3.7 35 км – прк. Карповка 1",
    coords: findSegmentByKilometer("Сож", 17, 35),
  },
  {
    river: "Сож",
    name: "3.8 прк. Карповка 1 – устье реки Сож",
    coords: findSegmentByKilometer("Сож", 0, 17),
  },
  {
    river: "Неман",
    name: "4.1 деревня Щечицы (вход в затон Яблоново) – д. Ковшово",
    coords: findSegmentByKilometer("Неман", 558, 573),
  },
  {
    river: "Неман",
    name: "4.2 деревня Ковшово – Гродненская ГЭС",
    coords: findSegmentByKilometer("Неман", 528, 558),
  },
  {
    river: "Неман",
    name: "4.3.1 Гродненская ГЭС - прк. Городнянка",
    coords: findSegmentByKilometer("Неман", 515, 528),
  },
  {
    river: "Неман",
    name: "4.3.2 прк. Городнянка - граница с Литовской Республикой",
    coords: findSegmentByKilometer("Неман", 481, 515),
  },
  {
    river: "Мухавец",
    name: '5.1 г. Брест (речной порт Брест) – г/у "Тришин"',
    coords: findSegmentByKilometer(
      "Мухавец",
      54.3,
      58.3
    ),
  },
  {
    river: "Мухавец",
    name: '5.2 г/у "Тришин" – г/у "Новосады"',
    coords: findSegmentByKilometer(
      "Мухавец",
      35.4,
      54.3
    ),
  },
  {
    river: "Мухавец",
    name: "5.3 г/у Новосады – г.Кобрин (слияние р. Мухавец и ДБК)",
    coords: findSegmentByKilometer("Мухавец", 0, 35.4),
  },
  {
    river: "Днепро-Бугский канал",
    name: "6.1 г. Кобрин (слияние р. Мухавец и ДБК) – слияние ДБК и р.Пина",
    coords: findSegmentByKilometer("Днепро-Бугский канал", 0, 92.5),
  },
  {
    river: "Пина",
    name: '7.1.1 слияние ДБК и реки Пина-г/у "Дубой"',
    coords: findSegmentByKilometer("Пина", 28, 41.2),
  },
  {
    river: "Пина",
    name: '7.1.2 г/у "Дубой" – порт Пинск',
    coords: findSegmentByKilometer("Пина", 9.7, 28),
  },
  {
    river: "Пина",
    name: "7.2 порт Пинск – г.Пинск (сл. рек Пина и Припять)",
    coords: findSegmentByKilometer("Пина", 0.7, 9.7),
  },
  {
    river: "Пина",
    name: '7.3 Слияние р.Пина и Припять – знак "Запрещение прохода"',
    coords: findSegmentByKilometer("Пина", 0, 0.7),
  },
  {
    river: "Верхний участок реки Припять",
    name: "8.1 7 км реки Припять – г.Пинск (слияние рек Пина и Припять)",
    coords: findSegmentByKilometer(
      "Верхний участок реки Припять",
      0,
      8
    ),
  },
  {
    river: "Припять",
    name: '9.1 г.Пинск (сл. рр Пина и Припять) – г/у "Качановичи"',
    coords: findSegmentByKilometer("Припять", 505.5, 530),
  },
  {
    river: "Припять",
    name: '9.2 г/у "Качановичи" – г/у "Стахово"',
    coords: findSegmentByKilometer("Припять", 480, 505.5),
  },
  {
    river: "Припять",
    name: '9.3 г/у "Стахово" – устье р. Горынь',
    coords: findSegmentByKilometer("Припять", 422, 480),
  },
  {
    river: "Припять",
    name: "9.4 устье р. Горынь – устье Микашевичского канала",
    coords: findSegmentByKilometer("Припять", 410, 422),
  },
  {
    river: "Припять",
    name: "9.5 устье Микашевичского канала - затон Кабачок",
    coords: findSegmentByKilometer("Припять", 309, 410),
  },
  {
    river: "Припять",
    name: "9.6 затон Кабачок - у.р. Птичь",
    coords: findSegmentByKilometer("Припять", 230, 309),
  },
  {
    river: "Припять",
    name: "9.7 у.р. Птичь - Пховский затон",
    coords: findSegmentByKilometer("Припять", 189, 230),
  },
  {
    river: "Припять",
    name: "9.8 Пховский затон - Мозырская БНС",
    coords: findSegmentByKilometer("Припять", 172, 189),
  },
  {
    river: "Припять",
    name: "9.9 Мозырская БНС - прк. Довлядовское спрямление",
    coords: findSegmentByKilometer("Припять", 81, 172),
  },
  {
    river: "Припять",
    name: "9.10 прк. Довлядовское спрямление - прк. Усовский 1 (граница с Украиной)",
    coords: findSegmentByKilometer("Припять", 63, 81),
  },
  {
    river: "Микашевичский канал",
    name: "10.1 устье Микашевичского канала – р.п. Микашевичи",
    coords: findSegmentByKilometer(
      "Микашевичский канал",
      0,
      6
    ),
  },
  {
    river: "Горынь",
    name: "11.1 перекат Комора-2 – устье реки Горынь",
    coords: findSegmentByKilometer("Горынь", 0, 13.8),
  },
  {
    river: "Западная Двина",
    name: "12.1 деревня Сураж – д. Круподеры",
    coords: findSegmentByKilometer(
      "Западная Двина",
      657,
      673
    ),
  },
  {
    river: "Западная Двина",
    name: "12.2 д. Круподеры – Витебская ГЭС",
    coords: findSegmentByKilometer(
      "Западная Двина",
      626,
      657
    ),
  },
  {
    river: "Западная Двина",
    name: "12.3 Витебская ГЭС – Витебск (груз.) порт",
    coords: findSegmentByKilometer(
      "Западная Двина",
      606,
      626
    ),
  },
  {
    river: "Западная Двина",
    name: "12.4 Витебск (груз.) порт – д. Слобода",
    coords: findSegmentByKilometer(
      "Западная Двина",
      586,
      606
    ),
  },
  {
    river: "Западная Двина",
    name: "12.5 д. Слобода – г. Бешенковичи",
    coords: findSegmentByKilometer(
      "Западная Двина",
      548,
      586
    ),
  },
  {
    river: "Западная Двина",
    name: "12.6 г. Бешенковичи – прк. Сосница",
    coords: findSegmentByKilometer(
      "Западная Двина",
      480,
      548
    ),
  },
  {
    river: "Западная Двина",
    name: "12.7 прк. Сосница – Полоцкая гидроэлектростанция",
    coords: findSegmentByKilometer(
      "Западная Двина",
      476,
      480
    ),
  },
  {
    river: "Туровский затон",
    name: "13.1 г. Туров (вход в затон) – г. Туров (причал)",
    coords: findSegmentByKilometer("Туровский затон", 0, 1.6),
  },
  {
    river: "Августовский канал",
    name: "14.1 Граница с Республикой Польша –16 км Августовского канала",
    coords: findSegmentByKilometer("Августовский канал", 16, 21.6),
  },
  {
    river: "Августовский канал",
    name: "14.2 16 км Августовского канала – устье Августовского канала (слияние с рекой Неман)",
    coords: findSegmentByKilometer("Августовский канал", 0, 16),
  },
  {
    river: "Свислочь",
    name: "15.1 ул. Парковая (Ждановичи) - МКАД",
    coords: [],
  },
  {
    river: "Свислочь",
    name: '15.2 МКАД – МГЭС (Водохранилище "Дрозды")',
    coords: [],
  },
  {
    river: "Свислочь",
    name: '15.3 МГЭС (в-ще "Дрозды") – ул.Орловская (ниж. гр. пляжа)',
    coords: [],
  },
  {
    river: "Свислочь",
    name: "15.4 ул.Орловская (ниж. гр. пляжа) – пер. Канатный",
    coords: [],
  },
  {
    river: "Свислочь",
    name: '15.5 пер. Канатный - пешеходный мост (сквер "Старостинская слобода")',
    coords: [],
  },
  {
    river: "Свислочь",
    name: '15.6 пешеходный мост (сквер "Старостинская") - Мост (ул. Янки Купалы)',
    coords: [],
  },
  {
    river: "Свислочь",
    name: "15.7 Мост (ул. Янки Купалы) - Подпорное сооруж. (Парк им. Горького)",
    coords: [],
  },
  {
    river: "Свислочь",
    name: "15.8 Подпорное сооруж. (Парк им. Горького) - ул. Первомайская",
    coords: [],
  },
];

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
    // eslint-disable-next-line default-case
    switch (pathname) {
      case "/path-information/dnepr":
        setRiver("Днепр");
        riverSigns = props.signs.filter((sign) => sign.river === "Днепр");
        riverSites = allSites.filter((site) => site.river === "Днепр");
        riverRifts = props.rifts.filter((rift) => rift.river === "Днепр");
        console.log(props.alerts);
        riverAlerts = props.alerts.filter((alert) => alert.river === "Днепр");
        break;
      case "/path-information/berezina":
        setRiver("Березина");
        riverSigns = props.signs.filter((sign) => sign.river === "Березина");
        riverSites = allSites.filter((site) => site.river === "Березина");
        riverRifts = props.rifts.filter((rift) => rift.river === "Березина");
        console.log(props.alerts);
        riverAlerts = props.alerts.filter((alert) => alert.river === "Березина");
        break;
      case "/path-information/dvina":
        setRiver("Западная Двина");
        riverSigns = props.signs.filter(
          (sign) => sign.river === "Западная Двина"
        );
        riverSites = allSites.filter((site) => site.river === "Западная Двина");
        riverRifts = props.rifts.filter(
          (rift) => rift.river === "Западная Двина"
        );
        riverAlerts = props.alerts.filter((alert) => alert.river === "Западная Двина");
        break;
      case "/path-information/neman":
        setRiver("Неман");
        riverSigns = props.signs.filter((sign) => sign.river === "Неман");
        riverSites = allSites.filter((site) => site.river === "Неман");
        riverRifts = props.rifts.filter((rift) => rift.river === "Неман");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Неман");
        break;
      case "/path-information/pripyat1":
        setRiver("Припять-Микашевичи");
        riverSigns = props.signs.filter((sign) => sign.river === "Припять1");
        riverSites = allSites.filter((site) => site.river === "Припять");
        riverRifts = props.rifts.filter((rift) => rift.river === "Припять1");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Припять1");
        break;
      case "/path-information/pripyat2":
        setRiver("Микашевичи-Брест");
        riverSigns = props.signs.filter((sign) => sign.river === "Припять2");
        riverSites = allSites.filter((site) => site.river === "Припять");
        riverRifts = props.rifts.filter((rift) => rift.river === "Припять2");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Припять2");
        break;
      case "/path-information/soj":
        setRiver("Сож");
        riverSigns = props.signs.filter((sign) => sign.river === "Сож");
        riverSites = allSites.filter((site) => site.river === "Сож");
        riverRifts = props.rifts.filter((rift) => rift.river === "Сож");
        riverAlerts = props.alerts.filter((alert) => alert.river === "Сож");
        break;
    }
    console.log(riverAlerts);
    setSigns(riverSigns);
    setSites(riverSites);
    setRifts(riverRifts);
    setAlerts(riverAlerts);
    setIsLoaded(true);
  }, [pathname, props.signs]);

  const polylines = sites.map((site) => {
    let isBalloonOpen = false;
    let color = "#0000ff";
    let propertyObject = {
      balloonContentBody: "Участок: " + site.name + "</b>",
    };
    return (
      <Polyline
        geometry={site.coords}
        properties={propertyObject}
        modules={["geoObject.addon.balloon"]}
        options={{
          strokeColor: color,
          strokeWidth: 4,
          strokeStyle: "3 4",
        }}
        onClick={(event) => {
          isBalloonOpen = true;
          event.get("target").options.set("strokeColor", "#8c00ff");
        }}
        onBalloonClose={(event) => {
          isBalloonOpen = false;
          event.get("target").options.set("strokeColor", color);
        }}
        onMouseEnter={(event) => {
          event.get("target").options.set("strokeColor", "#8c00ff");
        }}
        onMouseLeave={(event) => {
          if (!isBalloonOpen) {
            event.get("target").options.set("strokeColor", color);
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
    let contentBody =
      "Содержание: " +
      item.comment +
      "<br>Дата: " +
      item.date;
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
    <Box className={styles.container}>
      <Box
        sx={{ maxHeight: contentHeight + "px" }}
        className={styles.infoPart}
      >
       { isLoaded && <PathInformationPart river={river}/> }
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
  );
}

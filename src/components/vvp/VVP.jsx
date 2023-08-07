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
import { coordsDnepr } from './FairwayDnepr';
import { zeroPointDnepr} from './FairwayDnepr';
import { coordsBerezina } from './FairwayBerezina';
import { zeroPointBerezina} from './FairwayBerezina';
import { coordsNeman } from './FairwayNeman';
import { zeroPointNeman} from './FairwayNeman';
import { coordsSozh } from './FairwaySozh';
import { zeroPointSozh} from './FairwaySozh';
import { coordsWestDvina } from './FairwayWestDvina';
import { zeroPointWestDvina } from './FairwayWestDvina';
import { coordsDbk } from './FairwayDbk';
import { zeroPointDbk } from './FairwayDbk';
import { coordsMuhavets } from './FairwayMuhavets';
import { zeroPointMuhavets } from './FairwayMuhavets';
import { coordsPina } from './FairwayPina';
import { zeroPointPina } from './FairwayPina';
import { coordsUpperPripyat } from './FairwayUpperPripyat';
import { zeroPointUpperPripyat } from './FairwayUpperPripyat';
import { coordsAvgCanal } from './FairwayAvgCanal';
import { zeroPointAvgCanal } from './FairwayAvgCanal';
import { coordsPripyat } from './FairwayPripyat';
import { zeroPointPripyat } from './FairwayPripyat';
import { findSegmentByKilometer } from './qwes';

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

const sites = [
  {
    river: "Днепр",
    name: "1.1 дер.Левки (воздушный переход) – Прудки III",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1530, 1575)
  },
  {
    river: "Днепр",
    name: "1.2 Прудки III – Могилев (мостовой переход)",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1502, 1530)
  },
  {
    river: "Днепр",
    name: "1.3 Могилев (мостовой переход) – прк. Стайки III",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1476, 1502)
  },
  {
    river: "Днепр",
    name: "1.4 прк. Стайки III – Быхов",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1431, 1476)
  },
  {
    river: "Днепр",
    name: "1.5 Быхов – у.р. Друть",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1313, 1431)
  },
  {
    river: "Днепр",
    name: "1.6 у.р. Друть – у.р. Березины",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1206, 1313)
  },
  {
    river: "Днепр",
    name: "1.7 у.р. Березины – прк. Черное I",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1187, 1206)
  },
  {
    river: "Днепр",
    name: "1.8 прк. Черное I – Речицкий ССРЗ",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1180, 1187)
  },
  {
    river: "Днепр",
    name: "1.9 Речицкий ССРЗ – прк. Боровая I",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1150, 1180)
  },
  {
    river: "Днепр",
    name: "1.10 прк. Боровая I – Подречицкое",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1098, 1150)
  },
  {
    river: "Днепр",
    name: "1.11 Подречицкое – 1082 км",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1082, 1098)
  },
  {
    river: "Днепр",
    name: "1.12 1082 км – Каменка",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1080, 1082)
  },
  {
    river: "Днепр",
    name: "1.13 Каменка – н.п. Любеч (гр. Белводпуть - Укрводпуть)",
    coords: findSegmentByKilometer(coordsDnepr, zeroPointDnepr, 1040, 1080)
  },
  {
    river: "Березина",
    name: "2.1 г.Березино (Березино пристань) – у.р. Волчанки",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 199, 303)
  },
  {
    river: "Березина",
    name: "2.2 у.р. Волчанки – Бобруйский порт",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 170, 199)
  },
  {
    river: "Березина",
    name: "2.3 Бобруйский порт – прк. Волышино",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 145, 170)
  },
  {
    river: "Березина",
    name: "2.4 прк. Волышино – оз. Сельное",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 61, 145)
  },
  {
    river: "Березина",
    name: "2.5 оз. Сельное – Якимова Слобода IV",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 52, 61)
  },
  {
    river: "Березина",
    name: "2.6 Якимова Слобода IV – устье реки Березина",
    coords: findSegmentByKilometer(coordsBerezina, zeroPointBerezina, 0, 52)
  },
  {
    river: "Сож",
    name: "3.1 г. Славгород (Славгород - город) – Чечерский а/м мост",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 205, 300)
  },
  {
    river: "Сож",
    name: "3.2.1 Чечерский автомобильный мост - пкр. у.р.Беседь 2",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 147, 205)
  },
  {
    river: "Сож",
    name: "3.2.2 прк. у.р.Беседь 2 - прк. Крысин 1",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 128, 147)
  },
  {
    river: "Сож",
    name: "3.3 прк. Крысин 1- Гомель пристань",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 106, 128)
  },
  {
    river: "Сож",
    name: "3.4 Гомель пристань – порт Осовцы",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 96, 106)
  },
  {
    river: "Сож",
    name: "3.5 порт Осовцы – прк. Никольский 3",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 78, 96)
  },
  {
    river: "Сож",
    name: "3.6 прк. Никольский 3 – 35 км",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 35, 78)
  },
  {
    river: "Сож",
    name: "3.7 35 км – прк. Карповка 1",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 17, 35)
  },
  {
    river: "Сож",
    name: "3.8 прк. Карповка 1 – устье реки Сож",
    coords: findSegmentByKilometer(coordsSozh, zeroPointSozh, 0, 17)
  },
  {
    river: "Неман",
    name: "4.1 деревня Щечицы (вход в затон Яблоново) – д. Ковшово",
    coords: findSegmentByKilometer(coordsNeman, zeroPointNeman, 558, 573),
  },
  {
    river: "Неман",
    name: "4.2 деревня Ковшово – Гродненская ГЭС",
    coords: findSegmentByKilometer(coordsNeman, zeroPointNeman, 528, 558),
  },
  {
    river: "Неман",
    name: "4.3.1 Гродненская ГЭС - прк. Городнянка",
    coords: findSegmentByKilometer(coordsNeman, zeroPointNeman, 515, 528),
  },
  {
    river: "Неман",
    name: "4.3.2 прк. Городнянка - граница с Литовской Республикой",
    coords: findSegmentByKilometer(coordsNeman, zeroPointNeman, 481, 515),
  },
  {
    river: "Мухавец",
    name: '5.1 г. Брест (речной порт Брест) – г/у "Тришин"',
    coords: findSegmentByKilometer(coordsMuhavets, zeroPointMuhavets, 54.3, 58.3),
  },
  {
    river: "Мухавец",
    name: '5.2 г/у "Тришин" – г/у "Новосады"',
    coords: findSegmentByKilometer(coordsMuhavets, zeroPointMuhavets, 35.4, 54.3),
  },
  {
    river: "Мухавец",
    name: "5.3 г/у Новосады – г.Кобрин (слияние р. Мухавец и ДБК)",
    coords: findSegmentByKilometer(coordsMuhavets, zeroPointMuhavets, 0, 35.4),
  },
  {
    river: "Днепро-Бугский канал",
    name: "6.1 г. Кобрин (слияние р. Мухавец и ДБК) – слияние ДБК и р.Пина",
    coords: findSegmentByKilometer(coordsDbk, zeroPointDbk, 0, 92.5),
  },
  {
    river: "Пина",
    name: '7.1.1 слияние ДБК и реки Пина-г/у "Дубой"',
    coords: findSegmentByKilometer(coordsPina, zeroPointPina, 28, 41.2),
  },
  {
    river: "Пина",
    name: '7.1.2 г/у "Дубой" – порт Пинск',
    coords: findSegmentByKilometer(coordsPina, zeroPointPina, 9.7, 28),
  },
  {
    name: "7.2 порт Пинск – г.Пинск (сл. рек Пина и Припять)",
    coords: findSegmentByKilometer(coordsPina, zeroPointPina, 0.7, 9.7),
  },
  {
    river: "Пина",
    name: '7.3 Слияние р.Пина и Припять – знак "Запрещение прохода"',
    coords: findSegmentByKilometer(coordsPina, zeroPointPina, 0, 0.7),
  },
  {
    river: "Верхний участок реки Припять",
    name: "8.1 7 км реки Припять – г.Пинск (слияние рек Пина и Припять)",
    coords: findSegmentByKilometer(coordsUpperPripyat, zeroPointUpperPripyat, 0, 8),
  },
  {
    river: "Припять",
    name: '9.1 г.Пинск (сл. рр Пина и Припять) – г/у "Качановичи"',
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 505.5, 530),
  },
  {
    river: "Припять",
    name: '9.2 г/у "Качановичи" – г/у "Стахово"',
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 480, 505.5),
  },
  {
    river: "Припять",
    name: '9.3 г/у "Стахово" – устье р. Горынь',
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 422, 480),
  },
  {
    river: "Припять",
    name: "9.4 устье р. Горынь – устье Микашевичского канала",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 410, 422),
  },
  {
    river: "Припять",
    name: "9.5 устье Микашевичского канала - затон Кабачок",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 309, 410),
  },
  {
    river: "Припять",
    name: "9.6 затон Кабачок - у.р. Птичь",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 230, 309),
  },
  {
    river: "Припять",
    name: "9.7 у.р. Птичь - Пховский затон",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 189, 230),
  },
  {
    river: "Припять",
    name: "9.8 Пховский затон - Мозырская БНС",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 172, 189),
  },
  {
    river: "Припять",
    name: "9.9 Мозырская БНС - прк. Довлядовское спрямление",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 81, 172),
  },
  {
    river: "Припять",
    name: "9.10 прк. Довлядовское спрямление - прк. Усовский 1 (граница с Украиной)",
    coords: findSegmentByKilometer(coordsPripyat, zeroPointPripyat, 63, 81),
  },
  {
    river: "Микашевичский канал",
    name: "10.1 устье Микашевичского канала – р.п. Микашевичи",
    coords: [],
  },
  {
    river: "Горынь",
    name: "11.1 перекат Комора-2 – устье реки Горынь",
    coords: [],
  },
  {
    river: "Западная Двина",
    name: "12.1 деревня Сураж – д. Круподеры",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 657, 673),
  },
  {
    river: "Западная Двина",
    name: "12.2 д. Круподеры – Витебская ГЭС",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 626, 657),
  },
  {
    river: "Западная Двина",
    name: "12.3 Витебская ГЭС – Витебск (груз.) порт",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 606, 626),
  },
  {
    river: "Западная Двина",
    name: "12.4 Витебск (груз.) порт – д. Слобода",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 586, 606),
  },
  {
    river: "Западная Двина",
    name: "12.5 д. Слобода – г. Бешенковичи",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 548, 586),
  },
  {
    river: "Западная Двина",
    name: "12.6 г. Бешенковичи – прк. Сосница",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 480, 548),
  },
  {
    river: "Западная Двина",
    name: "12.7 прк. Сосница – Полоцкая гидроэлектростанция",
    coords: findSegmentByKilometer(coordsWestDvina, zeroPointWestDvina, 476, 480),
  },
  {
    river: "Туровский затон",
    name: "13.1 г. Туров (вход в затон) – г. Туров (причал)",
    coords: [],
  },
  {
    river: "Августовский канал",
    name: "14.1 Граница с Республикой Польша –16 км Августовского канала",
    coords: findSegmentByKilometer(coordsAvgCanal, zeroPointAvgCanal, 16, 21.6),
  },
  {
    river: "Августовский канал",
    name: "14.2 16 км Августовского канала – устье Августовского канала (слияние с рекой Неман)",
    coords: findSegmentByKilometer(coordsAvgCanal, zeroPointAvgCanal, 0, 16),
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

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };
export default function VVP() {
  const [map, setMap] = useState(mapState);
  const [dataGp, setDataGp] = useState([]);
  const [dataGu, setDataGu] = useState([]);
  const [currentNotices, setCurrentNotices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resGp = await api.get("/levelsGp/getAll");
        resGp.data.forEach((item) => {
          item.date = new Date(item.date);
          item.level1 = Number(item.level1);
          item.level2 = Number(item.level2);
          item.difference = Number(item.difference);
        });
        setDataGp(resGp.data);

        const resGu = await api.get("/levelsGu/getLastLevels");
        setDataGu(resGu.data);
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

  // const gatewaysMarks = gateways.map((item) => {

  //   let contentBody = "Шлюз: " + item.sluz +
  //   "<br> Габариты сооружения: <br> " +
  //   "Длина камеры между устоями (полезная): " + item.length +
  //   "<br> Ширина камеры, (пролета): " + item.width +
  //   "<br> Напор: " + item.napor +
  //   "<br> Глубина на пороге (ВГ/НГ): " + item.depth

  //   return (
  //       <Placemark geometry={item.coords} key={item.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
  //          options={{
  //            iconLayout: 'default#image',
  //            iconImageHref: '/images/gateway.png',
  //            iconImageSize: [30, 30],
  //           }} />
  //   )
  //   });

  //   const gesMarks = ges.map((item) => {

  //     let contentBody = "Наименование: " + item.name +
  //     "<br> Год ввода в эксплуатацию: " + item.year +
  //     "<br> Река (канал): " + item.river +
  //     "<br> Установленная мощность, МВт: " + item.power +
  //     "<br> Собственник: " + item.owner

  //     return (
  //         <Placemark geometry={item.coords} key={item.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
  //            options={{
  //              iconLayout: 'default#image',
  //              iconImageHref: '/images/ges.png',
  //              iconImageSize: [30, 30],
  //             }} />
  //     )
  //     });

  //     const portMarks = ports.map((item) => {

  //       let contentBody = "Адрес: " + item.address +
  //       "<br> Телефон: " + item.telephone +
  //       "<br> E-mail: " + item.email +
  //       `<br> <a href=${item.website} target="blank" style="color: blue">Перейти на сайт</a>`

  //       return (
  //           <Placemark geometry={item.coords} key={item.id} properties={{balloonContentBody: [contentBody]} } modules={['geoObject.addon.balloon']}
  //              options={{
  //                iconLayout: 'default#image',
  //                iconImageHref: '/images/port.png',
  //                iconImageSize: [30, 30],
  //               }} />
  //       )
  //       });

  const hydropostMarks = lastHydropostsData.map((item) => {
    let contentBody =
      "Гидропост : " +
      item.hydropost +
      "<br> Река: " +
      item.river +
      "<br> Уровень воды над 0 граф: " +
      item.level1 +
      "<br> Уровень воды над ПГ: " +
      item.level2 +
      "<br> Дата последнего измерения: " +
      item.date;

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

  const hydronodeMarks = dataGu.map((item) => {
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
      item.level2;

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
    return (
      <Polyline
        geometry={site.coords}
        properties={{ balloonContentBody: [site.name] }}
        modules={["geoObject.addon.balloon"]}
        options={{
          strokeColor: "#0000ff",
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
            .options.set("strokeColor", "#0000ff")
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
              .options.set("strokeColor", "#0000ff")
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

          {/* <ListBox data={{content: "Порты"}}>
            {ports.map((port) => (
              <ListBoxItem
                data={{ content: port.name }}
                onClick={() => setMap({center: port.coords, zoom: 15})}
                options={{ selectOnClick: false }}
              />
            ))}
          </ListBox> */}

          {/* <ListBox data={{ content: "Шлюзы" }}>
            {gateways.map((gateway) => (
              <ListBoxItem
                data={{ content: gateway.sluz }}
                onClick={() => setMap({center: gateway.coords, zoom: 15})}
                options={{ selectOnClick: false }}
              />
            ))}
          </ListBox> */}

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
            {dataGu.map((hydronode) => (
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

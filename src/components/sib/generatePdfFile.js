import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import {MontserratLight} from './font';
import {MontserratBold} from './font';
import {hydroposts} from '../waterLevels/levelsGp/data';
import {hydronodes} from '../waterLevels/levelsGu/data';
import { siteGroups } from '../admin/adminInfo';
import { bridgeGroups } from '../admin/adminInfo'

const generateSib = (doc, date, levelsGpData, levelsGuData, gabsData, dislocationsData, bridgesData, noticesData) => {

  date = new Date(date).toLocaleString().slice(0, 10);
  let currentY;

// Работа с данными о гидропостах

  let levelsGpRows = hydroposts.map((row) => {
    let rowData = levelsGpData.find((dat) => (dat.hydropost === row.hydropost));
    if (rowData === undefined) return {...row};
    return {
      ...row,
      level1: rowData.level1,
      level2: rowData.level2,
      date: rowData.date.toLocaleString().slice(0, 10),
      difference: rowData.difference
    };
  })

  const levelsGpRowsByRiver = (river) => {
    let filteredRows = levelsGpRows.filter((row) => ( row.river === river ));
    let rows = filteredRows.map((row) => {
      return ([row.hydropost, row.level1, row.level2, row.difference])
    })
      return rows;
  }

// Работа с данными о гидроузлах

  let levelsGuRows = hydronodes.map((row) => {
    let rowData = levelsGuData.find((dat) => (dat.hydronode === row.hydronode));
    if (rowData === undefined) return {...row};
    return {
      ...row,
      level1: rowData.level1,
      level2: rowData.level2,
      date: rowData.date.toLocaleString().slice(0, 10),
    };
  })

  const levelsGuRowsByRiver = (river) => {
    let filteredRows = levelsGuRows.filter((row) => ( row.river === river ));
    let rows = filteredRows.map((row) => {
      return ([row.hydronode, row.level1, row.level2])
    })
      return rows;
  }

// Работа с данными о наименьших гагабритах судового хода

  const emptyObj = {
    planDepth: '—',
    date: '—',
    limitedRoll: '—',
    depth: '—',
    width: '—',
    forecastDate: '—',
    forecastDepth: '—'
}

function keyToRiver(key) {
    // eslint-disable-next-line default-case
    switch(key) {
        case 'dnepr': return 'Днепр'
        case 'berezina': return 'Березина'
        case 'soj': return 'Сож'
        case 'neman': return 'Неман'
        case 'muhavets': return 'Мухавец'
        case 'dnepBug': return 'Днепро-Бугский канал'
        case 'pina': return 'Пина'
        case 'upperPripyat': return 'Верхний участок реки Припять'
        case 'pripyat': return 'Припять'
        case 'mikashevichskiCanal': return 'Микашевичский канал'
        case 'gorin': return 'Горынь'
        case 'zapDvina': return 'Западная Двина'
        case 'turovskiZaton': return 'Туровский затон'
        case 'avgustovskiCanal': return 'Августовский канал'
        case 'svisloch': return 'Свислочь'
    }
}

let gabsRows = [];
for (var key in siteGroups) {
  // eslint-disable-next-line no-loop-func
  siteGroups[key].map((site) => {
      let rowData = gabsData.find((dat) => (dat.site === site));
      if (rowData === undefined) gabsRows.push({site: site, river: keyToRiver(key), ...emptyObj});
       else gabsRows.push(rowData);
  })
}
const gabsRowsByRiver = (river) => {
let filteredRows = gabsRows.filter((row) => ( row.river === river ));
let rows = filteredRows.map((row) => {
  return ([
    row.site, 
    row.planDepth, 
    row.date.toLocaleString().slice(0, 10), 
    row.limitedRoll, 
    row.depth, 
    row.width, 
    row.forecastDate.toLocaleString().slice(0, 10), 
    row.forecastDepth
  ])
})
  return rows;
}

// Работа с данными о дислокации технического флота

const dislocationRowsByRiver = (organisation) => {
  let filteredRows = dislocationsData.filter((item) => ( item.organisation === organisation));
  let rows = filteredRows.map((row) => {
    return ([row.number, row.typeOfWork, row.riverName, row.distance, row.place, row.date.toLocaleString().slice(0, 10)]);
  })
    return rows;
}

// Работа с данными о габаритах подмостовых переходов

let bridgeRows = [];
for (var key in bridgeGroups) {
  // eslint-disable-next-line no-loop-func
  bridgeGroups[key].map((bridge) => {
      let rowData = bridgesData.find((item) => (item.bridge === bridge));
      if (rowData === undefined) bridgeRows.push({bridge: bridge, river: keyToRiver(key), height: '—'});
       else bridgeRows.push(rowData);
  })
}

const bridgeRowsByRiver = (river) => {
let filteredRows = bridgeRows.filter((row) => ( row.river === river ));
let rows = filteredRows.map((row) => {
  return ([row.bridge, row.height])
})
  return rows;
}

// Работа с данными об извещениях

const noticesRowsByRiver = (river) => {
        
  let filteredRows = noticesData.filter((row) => ( row.river === river));
  if (filteredRows.length === 0) return [];
  const riverRows = filteredRows.map((row) => {
    return [row.site, row.date.toLocaleString().slice(11, 17), row.cause, row.content];
  })
    return [
      [{ content: river , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
      ...riverRows
    ];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: '#9e9d9d',
    font: "Montserrat",
    fontSize: 9,
  
  };

  var headStyles = {
    halign: 'center',
    valign: 'middle',
    font: 'Montserrat',
    fontStyle: 'bold'
  };

  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('СВОДНЫЙ ИНФОРМАЦИОННЫЙ БЮЛЛЕТЕНЬ', 105, 15, {maxWidth: 200, font: 'bold', align: 'center'});
  doc.setFont(undefined, 'normal');
  doc.text(`По внутренним водным путям Республики Беларусь на ${date}`, 105, 25, {maxWidth: 200, align: 'center'});
  doc.text("1. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ НА 8 ЧАСОВ УТРА", 15, 40, { maxWidth: 180 });

    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      headStyles: headStyles,
      head: [
        [
          { content: 'Наименование рек каналов и гидроузлов', rowSpan: 2, styles: { cellWidth: 75 } },
          { content: 'Уровни воды над проектным горизонтом, см', colSpan: 2, },
          { content: 'Прибыло (+), убыло (-)', rowSpan: 2 },
        ],
        [
          { content: 'ВБ', styles: { cellWidth: 36 } },
          { content: 'НБ', styles: { cellWidth: 36 } },
        ]
      ],

      body: [
        [{ content: 'р. Припять' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Днепр'),
        [{ content: 'р. Березина' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Березина'),
        [{ content: 'р. Сож' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Сож'),
        [{ content: 'р. Припять' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Припять'),
        [{ content: 'р. Горынь' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Горынь'),
        [{ content: 'р. Западная Двина' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Западная Двина'),
        [{ content: 'р. Неман' , colSpan: 4, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGpRowsByRiver('Неман'),
      ],
      startY: 48
    })

    doc.addPage();
    currentY = doc.lastAutoTable.finalY;
    doc.text("2. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА", 15, 15, { maxWidth: 180 });
    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      headStyles: headStyles,
      head: [
        [
          { content: 'Наименование рек каналов и гидроузлов', rowSpan: 2, styles: { cellWidth: 100 } },
          { content: 'Уровни воды над проектным горизонтом, см', colSpan: 2 },
        ],
        [
          { content: 'ВБ' },
          { content: 'НБ' },
        ]
      ],

      body: [
        [{ content: 'р. Припять' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Припять'),
        [{ content: 'р. Пина' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Пина'),
        [{ content: 'ДБК' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('ДБК'),
        [{ content: 'р. Мухавец' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Мухавец'),
        [{ content: 'р. Западная Двина' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Западная Двина'),
        [{ content: 'р. Неман' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Неман'),
        [{ content: 'Августовский канал' , colSpan: 3, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...levelsGuRowsByRiver('Августовский канал'),
      ],
      startY: 18
    })

    currentY = doc.lastAutoTable.finalY;
    doc.text("3. НАИМЕНЬШИЕ ГАБАРИТЫ СУДОВОГО ХОДА", 15, currentY + 15);
    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      rowPageBreak: 'avoid',
      headStyles: headStyles,
      head: [
        [
          { content: 'Наименование рек и участков', rowSpan: 2 },
          { content: 'Плановая глубина', rowSpan: 2 },
          { content: 'Дата', rowSpan: 2 },
          { content: 'Лимитирующий перекат', rowSpan: 2 },
          { content: 'Глубина, см', rowSpan: 2 },
          { content: 'Ширина, м', rowSpan: 2 },
          { content: 'Прогноз', colSpan: 2 },
        ],
        [
          { content: 'Дата' },
          { content: 'Глубина' },
        ]
      ],

      body: [
        [{ content: '1. река Днепр (дер.Левки (воздушный переход) - н.п. Любеч (граница Белводпуть - Укрводпуть)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Днепр'),
        [{ content: '2. река Березина (г.Березино (Березино - пристань) - устье реки Березина' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Березина'),
        [{ content: '3. река Сож (г.Славгород (Славгород - город) - устье реки Сож)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Сож'),
        [{ content: '4. река Неман (деревня Яблоново (вход в затон) - граница с Литовской Республикой)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Неман'),
        [{ content: '5. река Мухавец (г.Брест (речной порт Брест) - г.Кобрин (слияние реки Мухавец и Днепро-Бугского канала)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Мухавец'),
        [{ content: '6. Днепро - Бугский канал (г.Кобрин (слияние реки Мухавец и ДБК) - слияние ДБК и реки Пина)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Днепро-Бугский канал'),
        [{ content: '7. река Пина (слияние ДБК и реки Пина - г.Пинск (слияние реки Пина и реки Припять) - знак "запрещение прохода")' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Пина'),
        [{ content: '8. верхний участок реки Припять (7 км реки Припять - г.Пинск, слияние реки Припять и реки Пина)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Верхний участок реки Припять'),
        [{ content: '9. река Припять (г.Пинск (слияние реки Пина и реки Припять) - перекат Усовский-1 (граница с Украиной))' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Припять'),
        [{ content: '10. Микашевичский канал (устье Микашевичского канала - речной порт Микашевичи)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Микашевичский канал'),
        [{ content: '11. река Горынь (перекат Комора-2 - устье реки Горынь)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Горынь'),
        [{ content: '12. река Западная Двина (деревня Сураж - Полоцкая гидроэлектростанция)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Западная Двина'),
        [{ content: '13. Туровский затон (г.Туров (вход в затон) - г.Туров (причал)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Туровский затон'),
        [{ content: '14. Августовский канал (Граница с Республикой Польша - устье Августовского канала (слияние с рекой Неман))' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Августовский канал'),
        [{ content: '15. река Свислочь (Минская кольцевая автомобильная дорога - переулок Канатный)' , colSpan: 8, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...gabsRowsByRiver('Свислочь')
      ],
      startY: currentY + 18
    })

    currentY = doc.lastAutoTable.finalY;
    doc.text("4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ", 15, currentY + 15);
    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      rowPageBreak: 'avoid',
      headStyles: headStyles,
      head: [
        [
          { content: '№ судна/партии', rowSpan: 2 },
          { content: 'Вид работы', rowSpan: 2 },
          { content: 'Место работы', colSpan: 3 },
          { content: 'Дата начала работы', rowSpan: 2 },
        ],
        [
          { content: 'Наименование реки и № участка' },
          { content: 'Км от устья' },
          { content: 'Место дислокации' }
        ]
      ],

      body: [
        [{ content: 'РУ ЭСП "Днепро-Бугский водный путь"' , colSpan: 6, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...dislocationRowsByRiver('РУ ЭСП "Днепро-Бугский водный путь"'),
        [{ content: 'РУ Днепро-Двинское предприятие водных путей "Белводпуть"' , colSpan: 6, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...dislocationRowsByRiver('РУ Днепро-Двинское предприятие водных путей "Белводпуть"'),
        [{ content: 'РУ Днепро-Березинское предприятие водных путей' , colSpan: 6, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...dislocationRowsByRiver('РУ Днепро-Березинское предприятие водных путей'),
      ],
      startY: currentY + 18
    })
    
    currentY = doc.lastAutoTable.finalY;
    doc.text("5. ГАБАРИТЫ ПОДМОСТОВЫХ ПЕРЕХОДОВ", 15, currentY + 15);
    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      rowPageBreak: 'avoid',
      headStyles: headStyles,
      head: [
        [
          { content: 'Наименование рек и мостов' },
          { content: 'Текущая высота пролета, м' },
        ]
      ],

      body: [
        [{ content: 'р. Днепр' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Днепр'),
        [{ content: 'р. Березина' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Березина'),
        [{ content: 'р. Сож' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Сож'),
        [{ content: 'р. Неман' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Неман'),
        [{ content: 'Августовский канал' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Августовский канал'),
        [{ content: 'ДБК' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('ДБК'),
        [{ content: 'р. Припять' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Припять'),
        [{ content: 'р. Западная Двина' , colSpan: 2, styles: { halign: 'left', fontStyle: 'bold'} }],
        ...bridgeRowsByRiver('Западная Двина')
      ],
      startY: currentY + 18
    })

    currentY = doc.lastAutoTable.finalY;
    doc.text("6. ИЗВЕЩЕНИЯ", 15, currentY + 15);
    autoTable(doc, {
      theme: 'plain',
      styles: styles,
      rowPageBreak: 'avoid',
      headStyles: headStyles,
      head: [
        [
          { content: 'Наименование рек и участков' },
          { content: 'Время' },
          { content: 'Причина уведомления' },
          { content: 'Содержание' },
        ]
      ],

      body: [
        ...noticesRowsByRiver("Днепр"),
        ...noticesRowsByRiver("Березина"),
        ...noticesRowsByRiver("Сож"),
        ...noticesRowsByRiver("Неман"),
        ...noticesRowsByRiver("Мухавец"),
        ...noticesRowsByRiver("Днепро-Бугский канал"),
        ...noticesRowsByRiver("Пина"),
        ...noticesRowsByRiver("Верхний участок реки Припять"),
        ...noticesRowsByRiver("Припять"),
        ...noticesRowsByRiver("Микашевичский канал"),
        ...noticesRowsByRiver("Горынь"),
        ...noticesRowsByRiver("Западная Двина"),
        ...noticesRowsByRiver("Туровский затон"),
        ...noticesRowsByRiver("Августовский канал"),
        ...noticesRowsByRiver("Свислочь")
      ],
      startY: currentY + 18
    })
    
  return doc;
   
}

export const generatePdfFileByDate = (date, levelsGpData, levelsGuData, gabsData, dislocationsData, bridgesData, noticesData) => {

  var doc = new jsPDF();
    doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
    doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
    doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
    doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
    doc.setFont("Montserrat");

    generateSib(doc, date, levelsGpData, levelsGuData, gabsData, dislocationsData, bridgesData, noticesData);

    doc.save(`СИБ за ${new Date(date).toLocaleString().slice(0, 10)}.pdf`);
  };

  export const generatePdfFileByPeriod = (startPeriod, endPeriod, levelsGpData, levelsGuData, gabsData, dislocationsData, bridgesData, noticesData) => {
    
    startPeriod = new Date(startPeriod.getFullYear(), startPeriod.getMonth(), startPeriod.getDate(), 0, 0, 0);
    endPeriod = new Date(endPeriod.getFullYear(), endPeriod.getMonth(), endPeriod.getDate(), 0, 0, 0); 

    var doc = new jsPDF();
      doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
      doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
      doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
      doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
      doc.setFont("Montserrat");
  
      for (let date = new Date(startPeriod); date <= endPeriod; date.setDate(date.getDate() + 1)) {
        let startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
        let endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
        let levelsGp = levelsGpData.filter((item) => (item.date >= startDate && item.date <= endDate));
        let levelsGu = levelsGuData.filter((item) => (item.date >= startDate && item.date <= endDate));
        let gabs = gabsData.filter((item) => (item.date >= startDate && item.date <= endDate));
        let dislocations = dislocationsData.filter((item) => (item.date >= startDate && item.date <= endDate));
        let bridges = bridgesData.filter((item) => (item.date >= startDate && item.date <= endDate));
        let notices = noticesData.filter((item) => (item.date >= startDate && item.date <= endDate));
        generateSib(doc, date, levelsGp, levelsGu, gabs, dislocations, bridges, notices);
        if (date.getTime() !== endPeriod.getTime()) doc.addPage();
      }
      doc.save(`СИБ за период с ${startPeriod.toLocaleString().slice(0, 10)} по ${endPeriod.toLocaleString().slice(0, 10)}.pdf`);
    };
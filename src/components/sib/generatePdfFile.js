import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { MontserratLight } from "./font";
import { MontserratBold } from "./font";
import { hydroposts } from "../waterLevels/levelsGp/data";
import { hydronodes } from "../waterLevels/levelsGu/data";
import { bridgeGroups } from "../admin/adminInfo";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { shapka } from "./shapka";
import { podval } from "./podval";

const generateSib = (
  doc,
  date,
  levelsGpData,
  levelsGuData,
  gabsData,
  dislocationsData,
  bridgesData,
  noticesData,
  sites,
  adminInfo
) => {
  date = new Date(date).toLocaleString().slice(0, 10);
  let currentY;
  // Работа с данными о гидропостах

  let levelsGpRows = hydroposts.map((row) => {
    let rowData = levelsGpData.find((dat) => dat.hydropost === row.hydropost);
    if (rowData === undefined) return { ...row };
    return {
      ...row,
      level1: rowData.level1,
      level2: rowData.level2,
      date: rowData.date.toLocaleString().slice(0, 10),
      difference: rowData.difference,
    };
  });

  const levelsGpRowsByRiver = (river) => {
    let filteredRows = levelsGpRows.filter((row) => row.river === river);

    let rows = filteredRows.map((row) => {
      let differenceStyle =
        row.difference == 0
          ? "▷"
          : row.difference == "—"
          ? "—"
          : row.difference > 0
          ? "▲"
          : "▼";
      let differenceCellStyle = { content: differenceStyle };
      return [
        row.hydropost,
        row.level1,
        row.level2,
        row.difference,
        differenceCellStyle,
      ];
    });
    return rows;
  };

  // Работа с данными о гидроузлах

  let levelsGuRows = hydronodes.map((row) => {
    let rowData = levelsGuData.find((dat) => dat.hydronode === row.hydronode);
    if (rowData === undefined) return { ...row };
    return {
      ...row,
      level1: rowData.level1_VBChange,
      level2: rowData.level2_NBChange,
      level1Change: rowData.level1Change === "-" ? "—" : rowData.level1Change,
      level2Change: rowData.level2Change === "-" ? "—" : rowData.level2Change,
      date: rowData.date.toLocaleString().slice(0, 10),
    };
  });

  const levelsGuRowsByRiver = (river) => {
    let filteredRows = levelsGuRows.filter((row) => row.river === river);
    let rows = filteredRows.map((row) => {
      return [
        row.hydronode,
        row.level1,
        row.level2,
        row.level1Change,
        row.level2Change,
      ];
    });
    return rows;
  };

  // Работа с данными о наименьших гагабритах судового хода

  const emptyObj = {
    planDepth: "—",
    date: "—",
    limitedRoll: "—",
    depth: "—",
    width: "—",
    forecastDate: "—",
    forecastDepth: "—",
  };

  function keyToRiver(key) {
    // eslint-disable-next-line default-case
    switch (key) {
      case "dnepr":
        return "Днепр";
      case "berezina":
        return "Березина";
      case "soj":
        return "Сож";
      case "neman":
        return "Неман";
      case "muhavets":
        return "Мухавец";
      case "dbk":
        return "Днепро-Бугский канал";
      case "pina":
        return "Пина";
      case "upperPripyat":
        return "Верхний участок реки Припять";
      case "pripyat":
        return "Припять";
      case "mikashevichskiCanal":
        return "Микашевичский канал";
      case "gorin":
        return "Горынь";
      case "zapDvina":
        return "Западная Двина";
      case "turovskiZaton":
        return "Туровский затон";
      case "avgCanal":
        return "Августовский канал";
      case "svisloch":
        return "Свислочь";
    }
  }
  function keyToRiverBridges(key) {
    // eslint-disable-next-line default-case
    switch (key) {
      case "dnepr":
        return "Днепр";
      case "berezina":
        return "Березина";
      case "soj":
        return "Сож";
      case "neman":
        return "Неман";
      case "avgCanal":
        return "Августовский канал";
      case "dbk":
        return "Днепро-Бугский канал";
      case "pripyat":
        return "Пина";
      case "vpripyat":
        return "Верхний участок реки Припять";
      case "zapDvina":
        return "Припять";
      case "pina":
        return "Западная Двина";
      case "muhavets":
        return "Мухавец";
    }
  }
  let gabsRows = [];
  sites.map((site) => {
    let rowData = gabsData.find((dat) => dat.site === site.name);
    if (rowData === undefined)
      gabsRows.push({ site: site.name, river: site.river, ...emptyObj });
    else gabsRows.push(rowData);
  });

  const gabsRowsByRiver = (river) => {
    let filteredRows = gabsRows.filter((row) => row.river === river);
    let rows = filteredRows.map((row) => {
      return [
        row.site,
        row.planDepth,
        row.date.toLocaleString().slice(0, 10),
        row.limitedRoll,
        row.depth,
        row.width,
        row.forecastDate.toLocaleString().slice(0, 10),
        row.forecastDepth,
      ];
    });
    return rows;
  };

  // Работа с данными о дислокации технического флота

  const dislocationRowsByRiver = (organisation) => {
    let filteredRows = dislocationsData.filter(
      (item) => item.organisation === organisation
    );
    let rows = filteredRows.map((row) => {
      return [
        row.number,
        row.typeOfWork,
        row.riverName,
        row.distance,
        row.place,
        row.date_start
          .toLocaleString()
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("."),
      ];
    });
    return rows;
  };

  // Работа с данными о габаритах подмостовых переходов

  const bridgeRowsByRiver = (river) => {
    let bridgeRows = [];

    for (var key in bridgeGroups) {
      bridgeGroups[key].forEach((bridgeGroup) => {
        let rowData = bridgesData.find(
          (item) => item.bridge === bridgeGroup.name
        );

        if (rowData === undefined) {
          bridgeRows.push({
            bridge: bridgeGroup.name,
            river: keyToRiverBridges(key),
            height: "—",
            kilometr: bridgeGroup.kilometr || "—",
            rsu: bridgeGroup.rsu || "—",
          });
        } else {
          bridgeRows.push({
            ...rowData,
            kilometr: bridgeGroup.kilometr || "—",
            rsu: bridgeGroup.rsu || "—",
          });
        }
      });
    }

    let filteredRows = bridgeRows.filter((row) => row.river === river);
    let rows = filteredRows.map((row) => {
      return [row.bridge, row.kilometr, row.rsu, row.height];
    });

    return rows;
  };

  // Работа с данными об извещениях

  const noticesRowsByRiver = (river) => {
    let filteredRows = noticesData.filter((row) => row.river === river);
    if (filteredRows.length === 0) return [];
    const riverRows = filteredRows.map((row) => {
      return [
        row.site,
        row.date.toLocaleString().slice(11, 17),
        row.cause,
        row.content,
      ];
    });
    return [
      [
        {
          content: river,
          colSpan: 4,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ],
      ...riverRows,
    ];
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: "#9e9d9d",
    font: "Montserrat",
    fontSize: 9,
  };

  var headStyles = {
    halign: "center",
    valign: "middle",
    font: "Montserrat",
    fontStyle: "bold",
  };

  doc.setFont(undefined, "bold");
  doc.setFontSize(12);
  doc.addImage(shapka, "PNG", 23, 5);
  doc.text("СВОДНЫЙ ИНФОРМАЦИОННЫЙ БЮЛЛЕТЕНЬ", 105, 30, {
    maxWidth: 200,
    font: "bold",
    align: "center",
  });
  doc.setFont(undefined, "normal");
  doc.text(
    `По внутренним водным путям Республики Беларусь на ${date}`,
    105,
    40,
    { maxWidth: 200, align: "center" }
  );
  doc.text(
    "1. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ НА 8 ЧАСОВ УТРА",
    10,
    50,
    { maxWidth: 180 }
  );

  autoTable(doc, {
    theme: "plain",
    styles: styles,
    headStyles: headStyles,
    didParseCell: function (data) {
      if (data.cell.text[0] == "▲") {
        data.cell.styles.fillColor = [207, 255, 188];
      }
      if (data.cell.text[0] == "▼") {
        data.cell.styles.fillColor = [212, 116, 131];
      }
      if (data.cell.text[0] == "▷") {
        data.cell.styles.fillColor = [186, 210, 255];
      }
    },
    head: [
      [
        {
          content: "Наименование рек каналов и гидроузлов",
          rowSpan: 2,
          styles: { cellWidth: 65 },
        },
        { content: "Уровни воды над проектным горизонтом, см", colSpan: 2 },
        { content: "Прибыло (+), убыло (-), см", colSpan: 2, rowSpan: 2 },
      ],
      [
        { content: `Над "0" граф.`, styles: { cellWidth: 36 } },
        { content: "Над проектным горизонтом", styles: { cellWidth: 36 } },
      ],
    ],

    body: adminInfo.hydropostRivers.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: [
            "Днепро-Бугский канал",
            "Микашевичский канал",
            "Туровский затон",
            "Августовский канал",
            "Верхний участок реки Припять",
          ].includes(riverName)
            ? riverName
            : `р. ${riverName}`,
          colSpan: 6,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...levelsGpRowsByRiver(riverName));
      return rows;
    }),
    startY: 58,
  });
  doc.addPage();
  currentY = doc.lastAutoTable.finalY;
  doc.text("2. СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ НА 8 УТРА", 15, 15, {
    maxWidth: 180,
  });
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    headStyles: headStyles,
    head: [
      [
        {
          content: "Наименование рек каналов и гидроузлов",
          rowSpan: 2,
          styles: { cellWidth: 100 },
        },
        { content: "Уровни воды над проектным горизонтом, см", colSpan: 2 },
        { content: "Изменение уровня за сутки, см", colSpan: 2 },
      ],
      [
        { content: "ВБ" },
        { content: "НБ" },
        { content: "ВБ" },
        { content: "НБ" },
      ],
    ],

    body: adminInfo.hydronodeRivers.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: [
            "Днепро-Бугский канал",
            "Микашевичский канал",
            "Туровский затон",
            "Августовский канал",
            "Верхний участок реки Припять",
          ].includes(riverName)
            ? riverName
            : `р. ${riverName}`,
          colSpan: 4,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...levelsGuRowsByRiver(riverName));
      return rows;
    }),
    startY: 18,
  });

  // currentY = doc.lastAutoTable.finalY;
  doc.addPage();
  doc.text("3. НАИМЕНЬШИЕ ГАБАРИТЫ СУДОВОГО ХОДА", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "Наименование рек и участков", rowSpan: 2 },
        { content: "Плановая глубина", rowSpan: 2 },
        { content: "Дата", rowSpan: 2 },
        { content: "Лимитирующий участок, перекат", rowSpan: 2 },
        { content: "Глубина, см", rowSpan: 2 },
        { content: "Ширина, м", rowSpan: 2 },
        { content: "Прогноз", colSpan: 2 },
      ],
      [{ content: "Дата" }, { content: "Глубина" }],
    ],

    body: adminInfo.sibDistricts.flatMap((riverName, index) => {
      const rows = [];
      rows.push([
        {
          content: `${riverName}`,
          colSpan: 8,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...gabsRowsByRiver(adminInfo.siteRivers[index]));
      return rows;
    }),
    startY: 18,
  });

  // currentY = doc.lastAutoTable.finalY;
  doc.addPage();
  doc.text("4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "№ судна/партии", rowSpan: 2 },
        { content: "Вид работы", rowSpan: 2 },
        { content: "Место работы", colSpan: 3 },
        { content: "Дата начала работы", rowSpan: 2 },
      ],
      [
        { content: "Наименование реки и № участка" },
        { content: "Км от устья" },
        { content: "Место дислокации" },
      ],
    ],

    body: adminInfo.sibOrganizations.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: `${riverName}`,
          colSpan: 8,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...dislocationRowsByRiver(riverName));
      return rows;
    }),
    startY: 18,
  });

  // currentY = doc.lastAutoTable.finalY;
  doc.addPage();
  doc.text("5. ГАБАРИТЫ ПОДМОСТОВЫХ ПЕРЕХОДОВ", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "Наименование рек и мостов" },
        { content: "Километр реки/канала" },
        { content: "Высота подмостового габарита над РСУ, м" },
        { content: "Текущая высота пролета, м" },
      ],
    ],

    body: adminInfo.bridgeRivers.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: [
            "Днепро-Бугский канал",
            "Микашевичский канал",
            "Туровский затон",
            "Августовский канал",
            "Верхний участок реки Припять",
          ].includes(riverName)
            ? riverName
            : `р. ${riverName}`,
          colSpan: 2,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...bridgeRowsByRiver(riverName));
      return rows;
    }),
    startY: 18,
  });

  // currentY = doc.lastAutoTable.finalY;
  doc.addPage();
  doc.text("6. ИЗВЕЩЕНИЯ", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "Наименование рек и участков" },
        { content: "Время" },
        { content: "Причина извещения" },
        { content: "Содержание" },
      ],
    ],

    body: adminInfo.siteRivers.flatMap((river) => noticesRowsByRiver(river)),
    startY: 18,
  });
  if (doc.autoTable.previous.finalY > 250) {
    doc.addPage();
    doc.addImage(podval, "PNG", 22, 10);
  } else {
    doc.addImage(podval, "PNG", 22, doc.autoTable.previous.finalY + 10);
  }
  return doc;
};

const generateLevelsGP = (doc, levelsGpData, adminInfo) => {
  let currentY;

  // Функция для работы с данными о гидропостах
  const levelsGpRowsByRiver = (river) => {
    let filteredRows = levelsGpData.filter((row) => row.river.name === river);

    let rows = filteredRows.map((row) => {
      let differenceStyle =
        row.difference == 0
          ? "▷"
          : row.difference == "—"
          ? "—"
          : row.difference > 0
          ? "▲"
          : "▼";

      let differenceCellStyle = { content: differenceStyle };

      // Преобразование даты в формат ru-RU
      let formattedDate = new Date(row.date).toLocaleDateString("ru-RU");

      return [
        row.hydropost,
        formattedDate, // Используем отформатированную дату
        row.level1,
        row.level2,
        row.difference,
        differenceCellStyle,
      ];
    });
    return rows;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: "#9e9d9d",
    font: "Montserrat",
    fontSize: 9,
  };

  var headStyles = {
    halign: "center",
    valign: "middle",
    font: "Montserrat",
    fontStyle: "bold",
  };

  doc.setFont(undefined, "bold");
  doc.setFontSize(12);

  doc.text("СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ ПО ОСНОВНЫМ ГИДРОПОСТАМ", 10, 50, {
    maxWidth: 180,
  });

  autoTable(doc, {
    theme: "plain",
    styles: styles,
    headStyles: headStyles,
    didParseCell: function (data) {
      if (data.cell.text[0] == "▲") {
        data.cell.styles.fillColor = [207, 255, 188];
      }
      if (data.cell.text[0] == "▼") {
        data.cell.styles.fillColor = [212, 116, 131];
      }
      if (data.cell.text[0] == "▷") {
        data.cell.styles.fillColor = [186, 210, 255];
      }
    },
    head: [
      [
        {
          content: "Наименование гидропостов",
          rowSpan: 2,
          styles: { cellWidth: 40 },
        },
        {
          content: "Выбранный промежуток времени",
          styles: { cellWidth: 26 },
          rowSpan: 2,
        },
        { content: "Уровни воды, см", colSpan: 2 },
        {
          content: "Прибыло (+), убыло (-), см",
          styles: { cellWidth: 26 },
          colSpan: 2,
          rowSpan: 2,
        },
      ],
      [
        { content: `Над "0" граф.`, styles: { cellWidth: 26 } },
        { content: "Над проектным горизонтом", styles: { cellWidth: 26 } },
      ],
    ],

    body: adminInfo.hydropostRivers.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: [
            "Днепро-Бугский канал",
            "Микашевичский канал",
            "Туровский затон",
            "Августовский канал",
            "Верхний участок реки Припять",
          ].includes(riverName)
            ? riverName
            : `р. ${riverName}`,
          colSpan: 6,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...levelsGpRowsByRiver(riverName));
      return rows;
    }),
    startY: 58,
  });

  if (doc.autoTable.previous.finalY > 250) {
    doc.addPage();
    doc.addImage(podval, "PNG", 22, 10);
  } else {
    doc.addImage(podval, "PNG", 22, doc.autoTable.previous.finalY + 10);
  }
  return doc;
};

const generateLevelsGU = (doc, levelsGuData, adminInfo) => {
  const levelsGuRowsByRiver = (river) => {
    let filteredRows = levelsGuData.filter((row) => row.river.name === river);
    let rows = filteredRows.map((row) => {
      return [
        row.hydronode,
        row.date.toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        row.level1_VBChange,
        row.level2_NBChange,
        row.level1Change === "-" ? "—" : row.level1Change,
        row.level2Change === "-" ? "—" : row.level2Change,
      ];
    });
    return rows;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: "#9e9d9d",
    font: "Montserrat",
    fontSize: 8, // Уменьшил размер шрифта
    cellPadding: 2, // Уменьшил отступы внутри ячеек
  };

  var headStyles = {
    halign: "center",
    valign: "middle",
    font: "Montserrat",
    fontStyle: "bold",
    fillColor: [240, 240, 240], // Светлый фон для заголовков
  };

  doc.setFont(undefined, "bold");
  doc.setFontSize(10); // Уменьшил размер шрифта заголовка

  doc.text("СВЕДЕНИЯ ОБ УРОВНЯХ ВОДЫ НА ГИДРОУЗЛАХ", 15, 15, {
    maxWidth: 180,
  });

  autoTable(doc, {
    theme: "plain",
    styles: styles,
    headStyles: headStyles,
    head: [
      [
        {
          content: "Наименование гидроузлов",
          rowSpan: 2,
          styles: { cellWidth: 50 }, // Сократил ширину
        },
        {
          content: "Дата",
          rowSpan: 2,
          styles: { cellWidth: 20 }, // Сократил ширину
        },
        { content: "Уровни воды, см", colSpan: 2 },
        { content: "Изменение уровня за сутки, см", colSpan: 2 },
      ],
      [
        { content: "ВБ", styles: { cellWidth: 30 } }, // Сократил ширину
        { content: "НБ", styles: { cellWidth: 30 } }, // Сократил ширину
        { content: "ВБ", styles: { cellWidth: 30 } }, // Сократил ширину
        { content: "НБ", styles: { cellWidth: 30 } }, // Сократил ширину
      ],
    ],

    body: adminInfo.hydronodeRivers.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: [
            "Днепро-Бугский канал",
            "Микашевичский канал",
            "Туровский затон",
            "Августовский канал",
            "Верхний участок реки Припять",
          ].includes(riverName)
            ? riverName
            : `р. ${riverName}`,
          colSpan: 6,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...levelsGuRowsByRiver(riverName));
      return rows;
    }),
    startY: 20,
    margin: { top: 20, left: 10, right: 10 }, // Добавил отступы
    pageBreak: "auto", // Автоматически добавлять страницы
    tableWidth: "auto", // Автоматическая ширина таблицы
  });

  // Проверка на добавление подвала в зависимости от конечного положения таблицы
  if (doc.autoTable.previous.finalY > 250) {
    doc.addPage();
    doc.addImage(podval, "PNG", 22, 10);
  } else {
    doc.addImage(podval, "PNG", 22, doc.autoTable.previous.finalY + 10);
  }

  return doc;
};

const generateLevelsGabs = (doc, levelsGuData, adminInfo) => {
  const gabsRowsByRiver = (river) => {
    let filteredRows = levelsGuData.filter((row) => row.river === river);

    filteredRows.sort((a, b) => {
      // Сначала сортировка по номеру участка
      const sectionComparison =
        parseFloat(a.site.split(" ")[0]) - parseFloat(b.site.split(" ")[0]);
      if (sectionComparison !== 0) {
        return sectionComparison;
      }

      // Если номера участков одинаковы, сортировка по дате
      return new Date(a.date) - new Date(b.date);
    });

    let rows = filteredRows.map((row) => {
      // Приведение даты к формату ru-RU
      const formattedDate = new Date(row.date).toLocaleDateString("ru-RU");
      const formattedForecastDate = row.forecastDate
        ? new Date(row.forecastDate).toLocaleDateString("ru-RU")
        : "";

      return [
        row.site,
        row.planDepth,
        formattedDate,
        row.limitedRoll,
        row.depth,
        row.width,
        formattedForecastDate,
        row.forecastDepth,
      ];
    });

    return rows;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: "#9e9d9d",
    font: "Montserrat",
    fontSize: 8, // Уменьшил размер шрифта
    cellPadding: 2, // Уменьшил отступы внутри ячеек
  };

  var headStyles = {
    halign: "center",
    valign: "middle",
    font: "Montserrat",
    fontStyle: "bold",
    fillColor: [240, 240, 240], // Светлый фон для заголовков
  };

  doc.setFont(undefined, "bold");
  doc.setFontSize(10); // Уменьшил размер шрифта заголовка

  doc.text("НАИМЕНЬШИЕ ГАБАРИТЫ СУДОВОГО ХОДА", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "Наименование рек и участков", rowSpan: 2 },
        { content: "Плановая глубина", rowSpan: 2 },
        { content: "Дата", rowSpan: 2 },
        { content: "Лимитирующий участок, перекат", rowSpan: 2 },
        { content: "Глубина, см", rowSpan: 2 },
        { content: "Ширина, м", rowSpan: 2 },
        { content: "Прогноз", colSpan: 2 },
      ],
      [{ content: "Дата" }, { content: "Глубина" }],
    ],

    body: adminInfo.sibDistricts.flatMap((riverName, index) => {
      const rows = [];
      rows.push([
        {
          content: `${riverName}`,
          colSpan: 8,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...gabsRowsByRiver(adminInfo.siteRivers[index]));
      return rows;
    }),
    startY: 20,
    margin: { top: 20, left: 10, right: 10 }, // Добавил отступы
    pageBreak: "auto", // Автоматически добавлять страницы
    tableWidth: "auto", // Автоматическая ширина таблицы
  });

  // Проверка на добавление подвала в зависимости от конечного положения таблицы
  if (doc.autoTable.previous.finalY > 250) {
    doc.addPage();
    doc.addImage(podval, "PNG", 22, 10);
  } else {
    doc.addImage(podval, "PNG", 22, doc.autoTable.previous.finalY + 10);
  }

  return doc;
};

const generateDislocation = (doc, dislocationsData, adminInfo) => {
  //фильтрация по организациям
  const dislocationRowsByRiver = (organisation) => {
    let filteredRows = dislocationsData.filter(
      (item) => item.organisation === organisation
    );
    let rows = filteredRows.map((row) => {
      return [
        row.number,
        row.typeOfWork,
        row.riverName,
        row.distance,
        row.place,
        row.date_start
          .toLocaleString()
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("."),
      ];
    });
    return rows;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var styles = {
    lineWidth: 0.1,
    lineColor: "#9e9d9d",
    font: "Montserrat",
    fontSize: 8, // Уменьшил размер шрифта
    cellPadding: 2, // Уменьшил отступы внутри ячеек
  };

  var headStyles = {
    halign: "center",
    valign: "middle",
    font: "Montserrat",
    fontStyle: "bold",
    fillColor: [240, 240, 240], // Светлый фон для заголовков
  };

  doc.setFont(undefined, "bold");
  doc.setFontSize(10); // Уменьшил размер шрифта заголовка

  doc.text("4. ДИСЛОКАЦИЯ ТЕХНИЧЕСКОГО ФЛОТА И ИЗЫСКАТЕЛЬСКИХ ПАРТИЙ", 15, 15);
  autoTable(doc, {
    theme: "plain",
    styles: styles,
    rowPageBreak: "avoid",
    headStyles: headStyles,
    head: [
      [
        { content: "№ судна/партии", rowSpan: 2 },
        { content: "Вид работы", rowSpan: 2 },
        { content: "Место работы", colSpan: 3 },
        { content: "Дата начала работы", rowSpan: 2 },
      ],
      [
        { content: "Наименование реки и № участка" },
        { content: "Км от устья" },
        { content: "Место дислокации" },
      ],
    ],

    body: adminInfo.sibOrganizations.flatMap((riverName) => {
      const rows = [];
      rows.push([
        {
          content: `${riverName}`,
          colSpan: 8,
          styles: { halign: "left", fontStyle: "bold" },
        },
      ]);
      rows.push(...dislocationRowsByRiver(riverName));
      return rows;
    }),
    startY: 18,
  });

  // Проверка на добавление подвала в зависимости от конечного положения таблицы
  if (doc.autoTable.previous.finalY > 250) {
    doc.addPage();
    doc.addImage(podval, "PNG", 22, 10);
  } else {
    doc.addImage(podval, "PNG", 22, doc.autoTable.previous.finalY + 10);
  }

  return doc;
};



export const generatePdfFileByDate = (
  date,
  levelsGpData,
  levelsGuData,
  gabsData,
  dislocationsData,
  bridgesData,
  noticesData,
  sites,
  adminInfo
) => {
  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  generateSib(
    doc,
    date,
    levelsGpData,
    levelsGuData,
    gabsData,
    dislocationsData,
    bridgesData,
    noticesData,
    sites,
    adminInfo
  );

  doc.save(`СИБ за ${new Date(date).toLocaleString().slice(0, 10)}.pdf`);
};

export const generatePdfFileByPeriod = (
  startPeriod,
  endPeriod,
  levelsGpData,
  levelsGuData,
  gabsData,
  dislocationsData,
  bridgesData,
  noticesData,
  sites,
  adminInfo
) => {
  startPeriod = new Date(
    startPeriod.getFullYear(),
    startPeriod.getMonth(),
    startPeriod.getDate(),
    0,
    0,
    0
  );
  endPeriod = new Date(
    endPeriod.getFullYear(),
    endPeriod.getMonth(),
    endPeriod.getDate(),
    0,
    0,
    0
  );

  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  for (
    let date = new Date(startPeriod);
    date <= endPeriod;
    date.setDate(date.getDate() + 1)
  ) {
    let startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0
    );
    let endDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59
    );
    let levelsGp = levelsGpData.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    let levelsGu = levelsGuData.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    let gabs = gabsData.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    let dislocations = dislocationsData.filter(
      (item) => startDate >= item.date_start && startDate <= item.date_end
    );

    let bridges = bridgesData.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );

    let notices = noticesData.filter(
      (item) => endDate >= item.date_start && startDate <= item.date_end
    );
    generateSib(
      doc,
      date,
      levelsGp,
      levelsGu,
      gabs,
      dislocations,
      bridges,
      noticesData,
      sites,
      adminInfo
    );
    if (date.getTime() !== endPeriod.getTime()) doc.addPage();
  }
  doc.save(
    `СИБ за период с ${startPeriod.toLocaleString().slice(0, 10)} по ${endPeriod
      .toLocaleString()
      .slice(0, 10)}.pdf`
  );
};

export const generatePdfFileByPeriodLevelsGP = (
  startPeriod,
  endPeriod,
  levelsGpData,
  adminInfo
) => {
  startPeriod = new Date(
    startPeriod.getFullYear(),
    startPeriod.getMonth(),
    startPeriod.getDate(),
    0,
    0,
    0
  );
  endPeriod = new Date(
    endPeriod.getFullYear(),
    endPeriod.getMonth(),
    endPeriod.getDate(),
    0,
    0,
    0
  );

  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  generateLevelsGP(doc, levelsGpData, adminInfo);

  doc.save(
    `Гидропосты за период с ${startPeriod
      .toLocaleString()
      .slice(0, 10)} по ${endPeriod.toLocaleString().slice(0, 10)}.pdf`
  );
};

export const generatePdfFileByPeriodLevelsGU = (
  startPeriod,
  endPeriod,
  levelsGuData,
  adminInfo
) => {
  startPeriod = new Date(
    startPeriod.getFullYear(),
    startPeriod.getMonth(),
    startPeriod.getDate(),
    0,
    0,
    0
  );
  endPeriod = new Date(
    endPeriod.getFullYear(),
    endPeriod.getMonth(),
    endPeriod.getDate(),
    0,
    0,
    0
  );

  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  generateLevelsGU(doc, levelsGuData, adminInfo);

  doc.save(
    `Гидроузлы за период с ${startPeriod
      .toLocaleString()
      .slice(0, 10)} по ${endPeriod.toLocaleString().slice(0, 10)}.pdf`
  );
};

export const generatePdfFileByPeriodGabs = (
  startPeriod,
  endPeriod,
  levelsGabsData,
  adminInfo
) => {
  startPeriod = new Date(
    startPeriod.getFullYear(),
    startPeriod.getMonth(),
    startPeriod.getDate(),
    0,
    0,
    0
  );
  endPeriod = new Date(
    endPeriod.getFullYear(),
    endPeriod.getMonth(),
    endPeriod.getDate(),
    0,
    0,
    0
  );

  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  generateLevelsGabs(doc, levelsGabsData, adminInfo);

  doc.save(
    `Габариты с ${startPeriod.toLocaleString().slice(0, 10)} по ${endPeriod
      .toLocaleString()
      .slice(0, 10)}.pdf`
  );
};

export const generatePdfFileByPeriodDislocation = (
  startPeriod,
  endPeriod,
  dislocationData,
  adminInfo
) => {
  startPeriod = new Date(
    startPeriod.getFullYear(),
    startPeriod.getMonth(),
    startPeriod.getDate(),
    0,
    0,
    0
  );
  endPeriod = new Date(
    endPeriod.getFullYear(),
    endPeriod.getMonth(),
    endPeriod.getDate(),
    0,
    0,
    0
  );

  var doc = new jsPDF();
  doc.addFileToVFS("MontserratLight.ttf", MontserratLight);
  doc.addFileToVFS("MontserratBold.ttf", MontserratBold);
  doc.addFont("MontserratLight.ttf", "Montserrat", "normal");
  doc.addFont("MontserratBold.ttf", "Montserrat", "bold");
  doc.setFont("Montserrat");

  generateDislocation(doc, dislocationData, adminInfo);

  doc.save(
    `Дислокация с ${startPeriod.toLocaleString().slice(0, 10)} по ${endPeriod
      .toLocaleString()
      .slice(0, 10)}.pdf`
  );
};

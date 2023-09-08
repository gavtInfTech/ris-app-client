import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "./style.module.css";
import { numberToCaseMonth } from "./numberToCaseMonth";
import { getSiteByCoords } from "../../vvp/qwes";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  WidthType,
  BorderStyle,
} from "docx";

export default function DocxFile(props) {
  const [hydropostRows, setHydropostRows] = useState([]);
  const [hydropostHeaderCells, setHydropostHeaderCells] = useState([]);
  const [sibRows, setSibRows] = useState([]);
  const [sibHeaderCells, setSibHeaderCells] = useState([]);
  const [actualRows, setActualRows] = useState([]);
  const [notices, setNotices] = useState([]);
  const [qualityControlRows, setQualityControlRows] = useState([]);
  const [signatureRows, setSignatureRows] = useState([]);

  useEffect(() => {
    //формирование таблицы уровней по гидропостам

    let currentDate = new Date(props.session.startDate);
    let hydroposts = [];
    let hydropostRows = [];
    let hydropostHeaderCells = [];

    hydropostHeaderCells.push(
      new TableCell({
        children: [
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "Гидропост",
                size: 27,
              }),
            ],
          }),
        ],
      })
    );

    props.levelsGp.forEach((item) => {
      if (!hydroposts.includes(item.hydropost)) hydroposts.push(item.hydropost);
    });

    while (currentDate <= props.session.endDate) {
      hydropostHeaderCells.push(
        new TableCell({
          children: [
            new Paragraph({
              alignment: "center",
              children: [
                new TextRun({
                  text:
                    currentDate.getDate() +
                    " " +
                    numberToCaseMonth(currentDate.getMonth()) +
                    " " +
                    currentDate.getFullYear(),
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setHydropostHeaderCells(hydropostHeaderCells);

    hydroposts.forEach((hydropost) => {
      currentDate = new Date(props.session.startDate);
      let rowCells = [];
      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              indent: {
                left: 60,
                right: 60,
              },
              children: [
                new TextRun({
                  text: hydropost,
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      let filteredLevelsGp = props.levelsGp.filter(
        (level) => level.hydropost === hydropost
      );
      while (currentDate <= props.session.endDate) {
        let cell = filteredLevelsGp.find(
          (level) => level.date.getDate() === currentDate.getDate()
        );
        if (cell === undefined)
          rowCells.push(
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: "-",
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
        else
          rowCells.push(
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: cell.level1,
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
        currentDate.setDate(currentDate.getDate() + 1);
      }
      hydropostRows.push(
        new TableRow({
          children: rowCells,
        })
      );
    });
    setHydropostRows(hydropostRows);

    // формирование таблицы минимальных габаритов судового хода

    currentDate = new Date(props.session.startDate);
    let sites = props.sites;
    let sibRows = [];
    let sibHeaderCells = [];

    while (currentDate <= props.session.endDate) {
      sibHeaderCells.push(
        new TableCell({
          children: [
            new Paragraph({
              alignment: "center",
              children: [
                new TextRun({
                  text:
                    currentDate.getDate() +
                    " " +
                    numberToCaseMonth(currentDate.getMonth()) +
                    " " +
                    currentDate.getFullYear(),
                  size: 27,
                }),
              ],
            }),
          ],
          verticalAlign: "center",
        })
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setSibHeaderCells(sibHeaderCells);

    sites.forEach((site) => {
      let siteAccordance = props.siteAccordances.find(
        (item) => item.site === site.name
      );
      currentDate = new Date(props.session.startDate);
      let rowCells = [];
      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              indent: {
                left: 60,
                right: 60,
              },
              children: [
                new TextRun({
                  text: site.name,
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      let filteredGabs = props.gabs.filter((gab) => gab.site === site.name);
      while (currentDate <= props.session.endDate) {
        if (siteAccordance === undefined) {
          rowCells.push(
            new TableCell({
              verticalAlign: "center",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: "-",
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
        } else {
          let cell = filteredGabs.find(
            (gab) =>
              gab.date.getDate() === currentDate.getDate() &&
              currentDate.getDate() === siteAccordance.date.getDate()
          );
          if (cell === undefined || cell.planDepth === null)
            rowCells.push(
              new TableCell({
                verticalAlign: "center",
                children: [
                  new Paragraph({
                    alignment: "center",
                    children: [
                      new TextRun({
                        text: "-",
                        size: 27,
                      }),
                    ],
                  }),
                ],
              })
            );
          else
            rowCells.push(
              new TableCell({
                verticalAlign: "center",
                children: [
                  new Paragraph({
                    alignment: "center",
                    children: [
                      new TextRun({
                        text: cell.planDepth + "/" + cell.width,
                        size: 27,
                      }),
                    ],
                  }),
                ],
              })
            );
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      sibRows.push(
        new TableRow({
          children: rowCells,
        })
      );
    });
    setSibRows(sibRows);

    // формирование таблицы актуальных габаритов судового хода

    let actualRows = [];

    sites.forEach((site) => {
      let rowCells = [];
      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              indent: {
                left: 60,
                right: 60,
              },
              children: [
                new TextRun({
                  text: site.name,
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      let filteredGabs = props.gabs.filter((gab) => gab.site === site.name);
      let siteAccordance = props.siteAccordances.find(
        (item) => item.site === site.name
      );
      if (siteAccordance) {
        let gab = filteredGabs.find(
          (gab) => gab.date.getDate() === siteAccordance.date.getDate()
        );
        if (!gab) {
          rowCells.push(
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "-",
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
          rowCells.push(
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "-",
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
        } else {
          rowCells.push(
            new TableCell({
              verticalAlign: "center",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: gab.depth + "/" + gab.width,
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
          rowCells.push(
            new TableCell({
              verticalAlign: "center",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: siteAccordance.accordance
                        ? "соответствует"
                        : "не соответствует",
                      size: 27,
                    }),
                  ],
                }),
              ],
            })
          );
        }
      }
      actualRows.push(
        new TableRow({
          children: rowCells,
        })
      );
    });
    setActualRows(actualRows);

    let notices = [];
    for (let i = 0; i < sites.length; i++) {
      let n = 1;
      notices.push(
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: "5." + (i + 1) + ". На участке " + sites[i].name + ":",
              size: 30,
            }),
          ],
        })
      );
      for (let j = 0; j < props.signNotices.length; j++) {
        if (
          sites[i].name ===
          getSiteByCoords(
            props.river,
            [props.signNotices[j].latitude, props.signNotices[j].longitude],
            sites
          )
        ) {
          notices.push(
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text:
                    "5." +
                    (i + 1) +
                    "." +
                    (j + 1) +
                    "." +
                    props.signNotices[j].comment +
                    " ",
                  size: 30,
                }),
              ],
            })
          );
        }
      }
    }

    if (props.alerts.length > 0) {
      for (let i = 0; i < props.alerts.length; i++) {
        notices.push(
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text:
                  "5." +
                  (i + 1 + sites.length) +
                  "." +
                  props.alerts[i].comment +
                  " ",
                size: 30,
              }),
            ],
          })
        );
      }
    }
    setNotices(notices);

    // формирование таблицы оценки качества содержания навигационного оборудования на участках

    let qualityControlRows = [];

    sites.forEach((site) => {
      let rowCells = [];
      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              indent: {
                left: 60,
                right: 60,
              },
              children: [
                new TextRun({
                  text: site.name,
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      rowCells.push(
        new TableCell({
          verticalAlign: "center",
          children: [
            new Paragraph({
              alignment: "center",
              children: [
                new TextRun({
                  text: "удовлетворительная",
                  size: 27,
                }),
              ],
            }),
          ],
        })
      );
      qualityControlRows.push(
        new TableRow({
          children: rowCells,
        })
      );
      setQualityControlRows(qualityControlRows);
    });

    let signatureRows = [];

    for (let i = 0; i < 4; i++) {
      let rowCells = [];

      rowCells.push(
        new TableCell({
          borders: {
            top: {
              color: "000000",
            },
            bottom: {
              color: "000000",
            },
            left: {
              color: "000000",
            },
            right: {
              color: "000000",
            },
          },
          width: {
            size: 2200,
            type: WidthType.DXA,
          },
          verticalAlign: "bottom",
          children: [],
        })
      );

      rowCells.push(
        new TableCell({
          borders: {
            top: {
              color: "000000",
            },
            bottom: {
              color: "000000",
            },
            left: {
              color: "000000",
            },
            right: {
              color: "000000",
            },
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
           
              indent: {
                left: 60,
                right: 60,
              },
              children: [
                new TextRun({
                  text: "заместитель начальника отдела путевых работ и инфраструктуры внутренних водных путей государственного учреждения «Государственная администрация водного транспорта» В.С.Джига",
                  size: 24,
                }),
              ],
            }),
          ],
        })
      );
      signatureRows.push(
        new TableRow({
          children: rowCells,
        })
      );
      signatureRows.push(
        new TableRow({
          children: [
            new TableCell({
              borders: {
                top: {
                  color: "000000",
                },
                bottom: {
                  color: "000000",
                },
                left: {
                  color: "000000",
                },
                right: {
                  color: "000000",
                },
              },
         
              verticalAlign: "bottom",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: "(подпись)",
                      size: 21,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    setSignatureRows(signatureRows);
  }, []);

  const generateDocxFile = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                left: 1280,
                right: 580,
                top: 1170,
                bottom: 900,
              },
            },
            size: 30,
          },
          children: [
            new Paragraph({
              alignment: "center",
              children: [
                new TextRun({
                  text: "АКТ",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            new Paragraph({
              alignment: "center",
              children: [
                new TextRun({
                  text: "осмотра внутренних водных путей № _/2023",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            new Paragraph({}),

            new Paragraph({
              children: [
                new TextRun({
                  text: "«день» месяц год г.",
                  bold: true,
                  size: 30,
                }),
              ],
            }),

            new Paragraph({}),

            new Paragraph({
              children: [
                new TextRun({
                  text:
                    "1. Комиссия в составе: " +
                    props.session.inspector1 +
                    ", " +
                    props.session.inspector2 +
                    ", " +
                    props.session.inspector3 +
                    ", " +
                    props.session.inspector4 +
                    ", ",
                  size: 30,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: "2. Осмотр производился при уровнях воды по гидропостам:",
                  size: 30,
                }),
              ],
            }),

            new Table({
              width: { size: "100%", type: "pct" },
              rows: [
                new TableRow({
                  children: hydropostHeaderCells,
                }),
                ...hydropostRows,
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: "3. Минимальные габариты судового хода согласно заданию по дифференцированным гарантированным габаритам внутреннего водного пути должны составлять:",
                  size: 30,
                }),
              ],
            }),

            new Table({
              width: { size: "100%", type: "pct" },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: "center",
                      rowSpan: 2,
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Наименование участка",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),

                    new TableCell({
                      columnSpan: sibHeaderCells.length,
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Минимальные габариты пути",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: sibHeaderCells,
                }),
                ...sibRows,
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  align: "center",
                  text:
                    "4. Промеры габаритов на перекатах осмотренных участков водного пути соответствуют заданию по дифференцированным гарантированным габаритам и сведениям о фактических габаритах, отраженным в сводном информационном бюллетене с «" +
                    props.session.startDate.getDate() +
                    "» " +
                    numberToCaseMonth(props.session.startDate.getMonth()) +
                    " " +
                    props.session.startDate.getFullYear() +
                    " г. по «" +
                    props.session.endDate.getDate() +
                    "» " +
                    numberToCaseMonth(props.session.endDate.getMonth()) +
                    " " +
                    props.session.endDate.getFullYear() +
                    " г. Фактические минимальные габариты на перекатах составили:",
                  size: 30,
                }),
              ],
            }),

            new Table({
              width: { size: "100%", type: "pct" },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: "center",
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Наименование участка",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),

                    new TableCell({
                      verticalAlign: "center",
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Габарит",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),

                    new TableCell({
                      verticalAlign: "center",
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Степень соответствия",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                ...actualRows,
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text:
                    "5. Рекомендации комиссии по улучшению судоходных условий на участках внутренних водных путей Республики Беларусь р. " +
                    props.river +
                    ":",
                  size: 30,
                }),
              ],
            }),
            ...notices,

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: "6. Вышеуказанные рекомендации комиссии по улучшению судоходных условий предприятию выполнить к  г.",
                  size: 30,
                }),
              ],
            }),

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: "7. Оценка качества содержания навигационного оборудования (согласно Приложению 1 и Приложению 2 к Положению об установлении индивидуальных критериев оценки содержания навигационного оборудования на участках водных путей с учетом их сложности и особенностей и порядке их применения от 29 марта 2023 года № 1-13/2) на участках:",
                  size: 30,
                }),
              ],
            }),

            new Table({
              width: { size: "100%", type: "pct" },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      verticalAlign: "center",
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Наименование участка водного пути",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),

                    new TableCell({
                      verticalAlign: "center",
                      children: [
                        new Paragraph({
                          alignment: "center",
                          children: [
                            new TextRun({
                              text: "Оценка качества содержания",
                              size: 27,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                ...qualityControlRows,
              ],
            }),

            new Paragraph({}),

            new Paragraph({
              alignment: AlignmentType.JUSTIFIED,
              children: [
                new TextRun({
                  text: "Члены комиссии:",
                  size: 30,
                }),
              ],
            }),

            new Paragraph({}),

            new Table({
              alignment: AlignmentType.CENTER,
              width: {
                size: 9000,
                type: WidthType.DXA,
              },
              rows: [...signatureRows],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "My Document.docx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button
        variant="contained"
        type="submit"
        className={styles.button}
        onClick={() => generateDocxFile()}
      >
        Скачать акт
      </Button>
    </>
  );
}

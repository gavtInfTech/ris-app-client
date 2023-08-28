const fs = require("fs");

let data = {
  "16a12bac-6771-4941-ba2d-7e562e917131": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Переломский ",
      "id": "16a12bac-6771-4941-ba2d-7e562e917131",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.893102,
      "longitude": 23.779782
    }
  },
  "16d47493-8bb7-4f97-888d-26c4677fb1eb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Воробей",
      "id": "16d47493-8bb7-4f97-888d-26c4677fb1eb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.655231,
      "longitude": 23.892096
    }
  },
  "230277a8-75c5-4104-ab18-025467d119d4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сольная баля верхн.",
      "id": "230277a8-75c5-4104-ab18-025467d119d4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.717622,
      "longitude": 23.764206
    }
  },
  "25b7c5b4-42f7-4cb2-87a7-aea4743b3628": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Княжеводский нижний",
      "id": "25b7c5b4-42f7-4cb2-87a7-aea4743b3628",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.454446,
      "longitude": 24.318747
    }
  },
  "28ea7dd7-1e43-4557-99d7-da6fa2623196": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бережанский ",
      "id": "28ea7dd7-1e43-4557-99d7-da6fa2623196",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.739558,
      "longitude": 23.786374
    }
  },
  "292e05c0-6621-4528-acfe-b6104ea94c8b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Науха",
      "id": "292e05c0-6621-4528-acfe-b6104ea94c8b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.652643,
      "longitude": 23.90714
    }
  },
  "3684e4b8-8f32-48fd-9fdc-d05e6ce09215": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гожанский нижн.",
      "id": "3684e4b8-8f32-48fd-9fdc-d05e6ce09215",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.808788,
      "longitude": 23.85458
    }
  },
  "406eb9f5-e949-4320-a73a-23a905048f3c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лунненский нижний",
      "id": "406eb9f5-e949-4320-a73a-23a905048f3c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.47481,
      "longitude": 24.264629
    }
  },
  "43b9e1a7-2ecc-4046-a7d0-50ee5315c42a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ятвезьский нижн.",
      "id": "43b9e1a7-2ecc-4046-a7d0-50ee5315c42a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.859449,
      "longitude": 23.787495
    }
  },
  "556b9687-f746-4da8-bf3c-f3aefa905cb7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гожанский ",
      "id": "556b9687-f746-4da8-bf3c-f3aefa905cb7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.79817,
      "longitude": 23.846394
    }
  },
  "57195373-5add-4e0a-b79e-c3f5ed00aad9": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гремянка ",
      "id": "57195373-5add-4e0a-b79e-c3f5ed00aad9",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.694486,
      "longitude": 23.771609
    }
  },
  "5850a2e3-06e0-4f2f-a108-077259196700": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Городнянка ",
      "id": "5850a2e3-06e0-4f2f-a108-077259196700",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.677389,
      "longitude": 23.797394
    }
  },
  "6cc5a79d-c49c-4d28-9e48-7e783a32b343": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Воля",
      "id": "6cc5a79d-c49c-4d28-9e48-7e783a32b343",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.451963,
      "longitude": 24.298284
    }
  },
  "714e5e62-1d4f-49d5-9acd-0e954d57ddda": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Румблевка ",
      "id": "714e5e62-1d4f-49d5-9acd-0e954d57ddda",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.657889,
      "longitude": 23.861084
    }
  },
  "734d46fc-8fdc-44e3-9691-da6f3bd338c4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Конкольский ",
      "id": "734d46fc-8fdc-44e3-9691-da6f3bd338c4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.760418,
      "longitude": 23.80278
    }
  },
  "75ab42ba-8ee2-4359-afeb-474f329b3d46": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кошелевка",
      "id": "75ab42ba-8ee2-4359-afeb-474f329b3d46",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.64411,
      "longitude": 23.913377
    }
  },
  "7693c77a-0f09-43b7-9786-1de8f0f82ffb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лунненский верхний",
      "id": "7693c77a-0f09-43b7-9786-1de8f0f82ffb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.45807,
      "longitude": 24.291175
    }
  },
  "76d88cb3-5597-4643-97b5-a99e2e69cf56": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Плосковский ",
      "id": "76d88cb3-5597-4643-97b5-a99e2e69cf56",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.830681,
      "longitude": 23.829586
    }
  },
  "82a85965-bde6-4309-8950-3cb4f1c01733": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сольная баля нижн.",
      "id": "82a85965-bde6-4309-8950-3cb4f1c01733",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.736713,
      "longitude": 23.782282
    }
  },
  "82e20699-5a30-4d2f-a970-040e9d12cf34": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Колотуха",
      "id": "82e20699-5a30-4d2f-a970-040e9d12cf34",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.646128,
      "longitude": 23.950866
    }
  },
  "ae6baeb3-ee7f-4671-be72-5cdbcc963fe5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Пальницкий ",
      "id": "ae6baeb3-ee7f-4671-be72-5cdbcc963fe5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.834587,
      "longitude": 23.811228
    }
  },
  "b1b1456e-82bf-4f74-bd42-1d415e675bd4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Меловец ",
      "id": "b1b1456e-82bf-4f74-bd42-1d415e675bd4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.709584,
      "longitude": 23.776627
    }
  },
  "c4945122-53bb-449a-9519-2a79a426c5e4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лукавицкий",
      "id": "c4945122-53bb-449a-9519-2a79a426c5e4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.869239,
      "longitude": 23.779659
    }
  },
  "c82a257e-b5dd-4884-84a5-9a93b0997e92": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Маньковский ",
      "id": "c82a257e-b5dd-4884-84a5-9a93b0997e92",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.778904,
      "longitude": 23.830844
    }
  },
  "d56b0a33-e2d2-46fc-87a2-a9861da0644e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Дмисевичский ",
      "id": "d56b0a33-e2d2-46fc-87a2-a9861da0644e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.88931,
      "longitude": 23.760349
    }
  },
  "d62e8507-7648-4963-a8a1-e77b409b7c2b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ятвезьский верхн.",
      "id": "d62e8507-7648-4963-a8a1-e77b409b7c2b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.851895,
      "longitude": 23.790759
    }
  },
  "e6f3df40-adec-4a11-916a-2587eb5525f5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Пышковский ",
      "id": "e6f3df40-adec-4a11-916a-2587eb5525f5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.686766,
      "longitude": 23.777315
    }
  },
  "e8f43b8d-cf41-443d-a865-0fe867ee9362": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Плебанский ",
      "id": "e8f43b8d-cf41-443d-a865-0fe867ee9362",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.819523,
      "longitude": 23.841651
    }
  },
  "e9576adc-802f-410d-b1c2-a190c9415e8b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Поднемновский",
      "id": "e9576adc-802f-410d-b1c2-a190c9415e8b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.881547,
      "longitude": 23.761115
    }
  },
  "ed9c86d3-dbc5-42a7-8295-0896c4435b7f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бережанск. верхн.",
      "id": "ed9c86d3-dbc5-42a7-8295-0896c4435b7f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.736189,
      "longitude": 23.791854
    }
  },
  "f3de3498-4dfc-4170-b830-3c61fd1be94c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Диковский ",
      "id": "f3de3498-4dfc-4170-b830-3c61fd1be94c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.680217,
      "longitude": 23.780485
    }
  }
  }

let transformedArray = [];

for (const key in data) {
    transformedArray.push({
      id: data[key].data.id,
      image: data[key].image,
      latitude: data[key].point.latitude,
      longitude: data[key].point.longitude,
      currentWaterLevel: data[key].data.currentWaterLevel,
      waterLevel: data[key].data.waterLevel,
      description: data[key].data.description,
    });
  }

let arrayForChange = [
  {
    "id": "16a12bac-6771-4941-ba2d-7e562e917131",
    "image": "riftnormal",
    "latitude": 53.893102,
    "longitude": 23.779782,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Переломский "
  },
  {
    "id": "16d47493-8bb7-4f97-888d-26c4677fb1eb",
    "image": "riftnormal",
    "latitude": 53.655231,
    "longitude": 23.892096,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Воробей"
  },
  {
    "id": "230277a8-75c5-4104-ab18-025467d119d4",
    "image": "riftnormal",
    "latitude": 23.764206,
    "longitude": 23.764206,
    "currentWaterLevel": 145,
    "waterLevel": 220,
    "description": "Сольная баля верхн."
  },
  {
    "id": "25b7c5b4-42f7-4cb2-87a7-aea4743b3628",
    "image": "riftnormal",
    "latitude": 53.454446,
    "longitude": 24.318747,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Княжеводский нижний"
  },
  {
    "id": "28ea7dd7-1e43-4557-99d7-da6fa2623196",
    "image": "riftnormal",
    "latitude": 23.786374,
    "longitude": 23.786374,
    "currentWaterLevel": 145,
    "waterLevel": 220,
    "description": "Бережанский "
  },
  {
    "id": "292e05c0-6621-4528-acfe-b6104ea94c8b",
    "image": "riftnormal",
    "latitude": 23.90714,
    "longitude": 23.90714,
    "currentWaterLevel": 115,
    "waterLevel": 220,
    "description": "Науха"
  },
  {
    "id": "3684e4b8-8f32-48fd-9fdc-d05e6ce09215",
    "image": "riftnormal",
    "latitude": 23.85458,
    "longitude": 23.85458,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Гожанский нижн."
  },
  {
    "id": "406eb9f5-e949-4320-a73a-23a905048f3c",
    "image": "riftnormal",
    "latitude": 53.47481,
    "longitude": 24.264629,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Лунненский нижний"
  },
  {
    "id": "43b9e1a7-2ecc-4046-a7d0-50ee5315c42a",
    "image": "riftnormal",
    "latitude": 23.787495,
    "longitude": 23.787495,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Ятвезьский нижн."
  },
  {
    "id": "556b9687-f746-4da8-bf3c-f3aefa905cb7",
    "image": "riftnormal",
    "latitude": 23.846394,
    "longitude": 23.846394,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Гожанский "
  },
  {
    "id": "57195373-5add-4e0a-b79e-c3f5ed00aad9",
    "image": "riftnormal",
    "latitude": 23.771609,
    "longitude": 23.771609,
    "currentWaterLevel": 125,
    "waterLevel": 220,
    "description": "Гремянка "
  },
  {
    "id": "5850a2e3-06e0-4f2f-a108-077259196700",
    "image": "riftnormal",
    "latitude": 23.797394,
    "longitude": 23.797394,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Городнянка "
  },
  {
    "id": "6cc5a79d-c49c-4d28-9e48-7e783a32b343",
    "image": "riftnormal",
    "latitude": 53.451963,
    "longitude": 24.298284,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Воля"
  },
  {
    "id": "714e5e62-1d4f-49d5-9acd-0e954d57ddda",
    "image": "riftnormal",
    "latitude": 23.861084,
    "longitude": 23.861084,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Румблевка "
  },
  {
    "id": "734d46fc-8fdc-44e3-9691-da6f3bd338c4",
    "image": "riftnormal",
    "latitude": 23.80278,
    "longitude": 23.80278,
    "currentWaterLevel": 140,
    "waterLevel": 220,
    "description": "Конкольский "
  },
  {
    "id": "75ab42ba-8ee2-4359-afeb-474f329b3d46",
    "image": "riftnormal",
    "latitude": 23.913377,
    "longitude": 23.913377,
    "currentWaterLevel": 115,
    "waterLevel": 220,
    "description": "Кошелевка"
  },
  {
    "id": "7693c77a-0f09-43b7-9786-1de8f0f82ffb",
    "image": "riftnormal",
    "latitude": 53.45807,
    "longitude": 24.291175,
    "currentWaterLevel": 220,
    "waterLevel": 220,
    "description": "Лунненский верхний"
  },
  {
    "id": "76d88cb3-5597-4643-97b5-a99e2e69cf56",
    "image": "riftnormal",
    "latitude": 23.829586,
    "longitude": 23.829586,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Плосковский "
  },
  {
    "id": "82a85965-bde6-4309-8950-3cb4f1c01733",
    "image": "riftnormal",
    "latitude": 23.782282,
    "longitude": 23.782282,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Сольная баля нижн."
  },
  {
    "id": "82e20699-5a30-4d2f-a970-040e9d12cf34",
    "image": "riftnormal",
    "latitude": 23.950866,
    "longitude": 23.950866,
    "currentWaterLevel": 120,
    "waterLevel": 220,
    "description": "Колотуха"
  },
  {
    "id": "ae6baeb3-ee7f-4671-be72-5cdbcc963fe5",
    "image": "riftnormal",
    "latitude": 23.811228,
    "longitude": 23.811228,
    "currentWaterLevel": 125,
    "waterLevel": 220,
    "description": "Пальницкий "
  },
  {
    "id": "b1b1456e-82bf-4f74-bd42-1d415e675bd4",
    "image": "riftnormal",
    "latitude": 23.776627,
    "longitude": 23.776627,
    "currentWaterLevel": 135,
    "waterLevel": 220,
    "description": "Меловец "
  },
  {
    "id": "c4945122-53bb-449a-9519-2a79a426c5e4",
    "image": "riftnormal",
    "latitude": 23.779659,
    "longitude": 23.779659,
    "currentWaterLevel": 135,
    "waterLevel": 220,
    "description": "Лукавицкий"
  },
  {
    "id": "c82a257e-b5dd-4884-84a5-9a93b0997e92",
    "image": "riftnormal",
    "latitude": 23.830844,
    "longitude": 23.830844,
    "currentWaterLevel": 150,
    "waterLevel": 220,
    "description": "Маньковский "
  },
  {
    "id": "d56b0a33-e2d2-46fc-87a2-a9861da0644e",
    "image": "riftnormal",
    "latitude": 23.760349,
    "longitude": 23.760349,
    "currentWaterLevel": 160,
    "waterLevel": 220,
    "description": "Дмисевичский "
  },
  {
    "id": "d62e8507-7648-4963-a8a1-e77b409b7c2b",
    "image": "riftnormal",
    "latitude": 23.790759,
    "longitude": 23.790759,
    "currentWaterLevel": 125,
    "waterLevel": 220,
    "description": "Ятвезьский верхн."
  },
  {
    "id": "e6f3df40-adec-4a11-916a-2587eb5525f5",
    "image": "riftnormal",
    "latitude": 23.777315,
    "longitude": 23.777315,
    "currentWaterLevel": 140,
    "waterLevel": 220,
    "description": "Пышковский "
  },
  {
    "id": "e8f43b8d-cf41-443d-a865-0fe867ee9362",
    "image": "riftnormal",
    "latitude": 23.841651,
    "longitude": 23.841651,
    "currentWaterLevel": 100,
    "waterLevel": 220,
    "description": "Плебанский "
  },
  {
    "id": "e9576adc-802f-410d-b1c2-a190c9415e8b",
    "image": "riftnormal",
    "latitude": 23.761115,
    "longitude": 23.761115,
    "currentWaterLevel": 145,
    "waterLevel": 220,
    "description": "Поднемновский"
  },
  {
    "id": "ed9c86d3-dbc5-42a7-8295-0896c4435b7f",
    "image": "riftnormal",
    "latitude": 23.791854,
    "longitude": 23.791854,
    "currentWaterLevel": 125,
    "waterLevel": 220,
    "description": "Бережанск. верхн."
  },
  {
    "id": "f3de3498-4dfc-4170-b830-3c61fd1be94c",
    "image": "riftnormal",
    "latitude": 23.780485,
    "longitude": 23.780485,
    "currentWaterLevel": 125,
    "waterLevel": 220,
    "description": "Диковский "
  }
]


arrayForChange.forEach((item) => { 
  let changeItem = transformedArray.find((obj) => obj.id === item.id);
  item.latitude = changeItem.latitude;
  item.longitude = changeItem.longitude;
 })
// for (const key in data) {
//   transformedArray.push({
//     id: data[key].data.id,
//     image: data[key].image,
//     latitude: data[key].point.latitude,
//     longitude: data[key].point.longitude,
//     color: data[key].data.color,
//     place: data[key].data.place,
//     size: data[key].data.size,
//     visibility: data[key].data.visibility,
//     kilometrage: data[key].data.kilometrage ? data[key].data.kilometrage : null,
//     comment: data[key].data.comment,
//     description: data[key].data.description
//   });
// }
// transformedArray.sort((a, b) =>  (a.kilometrage - b.kilometrage));

fs.writeFile(
  "asdf.js",
  `module.exports = ${JSON.stringify(arrayForChange, null, 2)}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Array has been written");
    }
  }
);

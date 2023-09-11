const fs = require("fs");

let data = {
  "04a2f923-b13c-4b3e-b330-52a5ef8c0971": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Проскурни 2",
      "id": "04a2f923-b13c-4b3e-b330-52a5ef8c0971",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.813668,
      "longitude": 30.102161
    }
  },
  "06d07506-9911-4ca5-980f-585ac94a0b06": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Черепица ",
      "id": "06d07506-9911-4ca5-980f-585ac94a0b06",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.857191,
      "longitude": 30.087582
    }
  },
  "06ed7979-15a0-4daa-9fb1-5f8e59027a93": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмеч 1 ",
      "id": "06ed7979-15a0-4daa-9fb1-5f8e59027a93",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.159636,
      "longitude": 30.636365
    }
  },
  "0a13ff04-8520-424b-961e-012c0dcef66c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сутков 5",
      "id": "0a13ff04-8520-424b-961e-012c0dcef66c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.027972,
      "longitude": 30.790302
    }
  },
  "0a706fdb-fafa-494c-802d-8b6b3f4d128d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шклов 2",
      "id": "0a706fdb-fafa-494c-802d-8b6b3f4d128d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.195635,
      "longitude": 30.313099
    }
  },
  "0a7c8021-bdd4-4164-996d-56075b7e8c30": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Слободка",
      "id": "0a7c8021-bdd4-4164-996d-56075b7e8c30",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.299425,
      "longitude": 30.266762
    }
  },
  "0c0bd66a-0880-4d62-b46e-333bb7bda651": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмы 2",
      "id": "0c0bd66a-0880-4d62-b46e-333bb7bda651",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.89114936542786,
      "longitude": 30.407906528385837
    }
  },
  "0c27bfc5-8f85-457d-814f-8d71291c7dcb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Н. Быхов 2        ",
      "id": "0c27bfc5-8f85-457d-814f-8d71291c7dcb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.324828,
      "longitude": 30.355393
    }
  },
  "0ffd7e82-42a8-42b9-8b6d-4a6e5b0d1a69": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Колочин 1 ",
      "id": "0ffd7e82-42a8-42b9-8b6d-4a6e5b0d1a69",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.197657,
      "longitude": 30.592529
    }
  },
  "10f6ee85-7153-4f95-b398-61a4c951120e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мочулы верхние ",
      "id": "10f6ee85-7153-4f95-b398-61a4c951120e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.965533,
      "longitude": 30.806112
    }
  },
  "11d19288-e98d-405d-948d-9d7ba54f08cd": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лучин       ",
      "id": "11d19288-e98d-405d-948d-9d7ba54f08cd",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.031807,
      "longitude": 30.030157
    }
  },
  "149bac6f-74e5-4a47-be9e-2364831bfa5c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Староречье ",
      "id": "149bac6f-74e5-4a47-be9e-2364831bfa5c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.492101,
      "longitude": 30.289893
    }
  },
  "16218501-f3b2-482d-a42a-18bc2b028ff3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жмуровка ",
      "id": "16218501-f3b2-482d-a42a-18bc2b028ff3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.340789,
      "longitude": 30.484553
    }
  },
  "167622d3-b30b-48c7-8842-f17202e9e541": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Деражичи",
      "id": "167622d3-b30b-48c7-8842-f17202e9e541",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.777503,
      "longitude": 30.622771
    }
  },
  "16ffa6e6-3a6c-486a-9b94-cffcbed6bbdc": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Речица 3",
      "id": "16ffa6e6-3a6c-486a-9b94-cffcbed6bbdc",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.367679,
      "longitude": 30.441424
    }
  },
  "1733c0e6-7314-439b-bb85-a8c2ad863b2f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стрешин  1  ",
      "id": "1733c0e6-7314-439b-bb85-a8c2ad863b2f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.713242,
      "longitude": 30.131806
    }
  },
  "1872f7b9-214b-4de9-8685-9d52265d64ce": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Леваши 1 ",
      "id": "1872f7b9-214b-4de9-8685-9d52265d64ce",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.232369,
      "longitude": 30.54809
    }
  },
  "1aeea95c-f621-46d4-aaf4-b55fa9a5bb9c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лоевский 1 ",
      "id": "1aeea95c-f621-46d4-aaf4-b55fa9a5bb9c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.937519,
      "longitude": 30.817533
    }
  },
  "1b99ae29-0ea3-477a-891c-29f27a661d6b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Студенка",
      "id": "1b99ae29-0ea3-477a-891c-29f27a661d6b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.915860003604166,
      "longitude": 30.448744329482054
    }
  },
  "1c9c0f88-e8a3-4050-8bd8-b66131b211ba": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Буйничи ",
      "id": "1c9c0f88-e8a3-4050-8bd8-b66131b211ba",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.841700880362104,
      "longitude": 30.27824588502679
    }
  },
  "1cf918b1-2471-4355-813f-7f646a2e4216": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Смычек 2",
      "id": "1cf918b1-2471-4355-813f-7f646a2e4216",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.604405,
      "longitude": 30.264682
    }
  },
  "1e1ef4a9-9ed3-4698-8301-b274b34443fd": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Прудки 3",
      "id": "1e1ef4a9-9ed3-4698-8301-b274b34443fd",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.0376276630169,
      "longitude": 30.38159382347314
    }
  },
  "1e860340-8d7e-4db6-b809-757423b3a9cb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бризгуны ",
      "id": "1e860340-8d7e-4db6-b809-757423b3a9cb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.245653,
      "longitude": 30.259168
    }
  },
  "1ef5977b-231f-4c27-9e19-531e2d37047a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "устье реки Сож",
      "id": "1ef5977b-231f-4c27-9e19-531e2d37047a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.946707,
      "longitude": 30.810016
    }
  },
  "21efdeaf-8144-4693-ade7-9f1358179289": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шихов",
      "id": "21efdeaf-8144-4693-ade7-9f1358179289",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.71095,
      "longitude": 30.16505
    }
  },
  "22500abb-ec6a-4511-a087-4e7b31a5341d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорский нижний ",
      "id": "22500abb-ec6a-4511-a087-4e7b31a5341d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.9094,
      "longitude": 30.762262
    }
  },
  "22888234-81be-43af-8dbe-528036c39f32": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Звонец 2 ",
      "id": "22888234-81be-43af-8dbe-528036c39f32",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.126335,
      "longitude": 30.690481
    }
  },
  "22974a6f-4eb2-4808-8744-e23f3f777b33": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вербуж 1 ",
      "id": "22974a6f-4eb2-4808-8744-e23f3f777b33",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.98815,
      "longitude": 30.798593
    }
  },
  "231f154d-697d-4530-8a8a-de92ce23fbfb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шапчицы 2",
      "id": "231f154d-697d-4530-8a8a-de92ce23fbfb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.251401,
      "longitude": 30.334831
    }
  },
  "25faf02a-7f9f-4bcd-95e0-47a1a05cece6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Змеи 2",
      "id": "25faf02a-7f9f-4bcd-95e0-47a1a05cece6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.739934,
      "longitude": 30.62712
    }
  },
  "261c1c05-c21b-45b5-a20a-fa2b65b596be": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Звонец 3",
      "id": "261c1c05-c21b-45b5-a20a-fa2b65b596be",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.107475,
      "longitude": 30.698373
    }
  },
  "266ee704-9e56-4c1d-85b0-a12c355ce41e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Городок 1 ",
      "id": "266ee704-9e56-4c1d-85b0-a12c355ce41e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.398176,
      "longitude": 30.378952
    }
  },
  "26869670-3acf-45fb-ace5-93bf19e7e3b0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шаровский 3",
      "id": "26869670-3acf-45fb-ace5-93bf19e7e3b0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.814557,
      "longitude": 30.671892
    }
  },
  "269abffc-2a14-4c91-b339-9a02e786c675": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мосток 1",
      "id": "269abffc-2a14-4c91-b339-9a02e786c675",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.95290774831006,
      "longitude": 30.412406486315973
    }
  },
  "280787c9-a18e-49cf-9473-ae6faba17994": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Боровая 2",
      "id": "280787c9-a18e-49cf-9473-ae6faba17994",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.264861,
      "longitude": 30.54454
    }
  },
  "2c03dbd6-3568-437d-893f-60a153ba8739": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Августово",
      "id": "2c03dbd6-3568-437d-893f-60a153ba8739",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.134608,
      "longitude": 30.362664
    }
  },
  "2caed04d-766b-4780-88c6-01fcbd92e28e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Седичи ",
      "id": "2caed04d-766b-4780-88c6-01fcbd92e28e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.578146,
      "longitude": 30.282248
    }
  },
  "2cde4a61-fbf0-463d-a19a-0ce22e647925": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Дубровенка ",
      "id": "2cde4a61-fbf0-463d-a19a-0ce22e647925",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.89096737190411,
      "longitude": 30.32324758307277
    }
  },
  "2e99b8ef-ce4b-4ea7-9589-6c41d542e895": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мохов 1 ",
      "id": "2e99b8ef-ce4b-4ea7-9589-6c41d542e895",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.021138,
      "longitude": 30.790252
    }
  },
  "2fa0de02-dc4b-474e-9ffd-c24cc5265df7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Глушец ",
      "id": "2fa0de02-dc4b-474e-9ffd-c24cc5265df7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.493404,
      "longitude": 30.306291
    }
  },
  "325f0b86-356e-46fa-bb7d-fc723988fcdc": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Боровка 1 ",
      "id": "325f0b86-356e-46fa-bb7d-fc723988fcdc",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.687619,
      "longitude": 30.291966
    }
  },
  "32d25f57-63fe-4ba7-92f0-f634635a0e6b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Радульский ",
      "id": "32d25f57-63fe-4ba7-92f0-f634635a0e6b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.840938,
      "longitude": 30.703672
    }
  },
  "33760289-64e5-43c8-b787-f49834da4a04": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стрешин верхн. ",
      "id": "33760289-64e5-43c8-b787-f49834da4a04",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.73475,
      "longitude": 30.117383
    }
  },
  "347417e4-1094-49b6-8758-5d1074953df1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бронное ",
      "id": "347417e4-1094-49b6-8758-5d1074953df1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.323402,
      "longitude": 30.505217
    }
  },
  "35b785bd-6a54-4f16-a99d-f7989b56eee3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорье 3",
      "id": "35b785bd-6a54-4f16-a99d-f7989b56eee3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.954275,
      "longitude": 30.069767
    }
  },
  "36b0d80c-c2ff-4340-bb04-10a56b2b2c8c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Глущик ",
      "id": "36b0d80c-c2ff-4340-bb04-10a56b2b2c8c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.578197,
      "longitude": 30.278182
    }
  },
  "375915cb-4096-42d3-8604-05cdf17024e4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Зборов  2",
      "id": "375915cb-4096-42d3-8604-05cdf17024e4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.11443,
      "longitude": 30.135322
    }
  },
  "377cf1ba-8b7d-4b35-8d70-7bb9ef16e8f0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Унорица 1 ",
      "id": "377cf1ba-8b7d-4b35-8d70-7bb9ef16e8f0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.463372,
      "longitude": 30.34662
    }
  },
  "37c3cd6f-8dfa-48a4-a708-2c55dec50736": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гадиловичская простка ",
      "id": "37c3cd6f-8dfa-48a4-a708-2c55dec50736",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.102005,
      "longitude": 30.252061
    }
  },
  "38c9f154-e45e-4ef2-8894-ce2c4f0956f8": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кобылка 2",
      "id": "38c9f154-e45e-4ef2-8894-ce2c4f0956f8",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.229502,
      "longitude": 30.286249
    }
  },
  "3a4ec7f0-08f2-4abd-b65a-1d4a71361c94": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Богушевка",
      "id": "3a4ec7f0-08f2-4abd-b65a-1d4a71361c94",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.295298,
      "longitude": 30.268689
    }
  },
  "3dbcacd3-e6c7-40b1-848e-60c2c9de461e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Прибор 2",
      "id": "3dbcacd3-e6c7-40b1-848e-60c2c9de461e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.47003,
      "longitude": 30.334801
    }
  },
  "3e1c19af-7e56-4d22-b536-dd588f66a42a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кобылка 3",
      "id": "3e1c19af-7e56-4d22-b536-dd588f66a42a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.225701,
      "longitude": 30.294447
    }
  },
  "3f466e40-3999-40c6-9db2-f8f29ef7b7c8": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вищин 1 ",
      "id": "3f466e40-3999-40c6-9db2-f8f29ef7b7c8",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.150148,
      "longitude": 30.273397
    }
  },
  "40f224b0-7283-400f-aa18-09101c930323": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лазаревичи ",
      "id": "40f224b0-7283-400f-aa18-09101c930323",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.283341,
      "longitude": 30.385271
    }
  },
  "42bd63d3-eeb2-469a-9217-538a788d6d4c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Чёрное 1 ",
      "id": "42bd63d3-eeb2-469a-9217-538a788d6d4c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.440482,
      "longitude": 30.374079
    }
  },
  "440a7958-663a-4434-830e-f624b8ef2727": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мокрянка",
      "id": "440a7958-663a-4434-830e-f624b8ef2727",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.530999,
      "longitude": 30.269489
    }
  },
  "44f97ec9-d20f-4998-87e7-becfbac22d60": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мосток 2",
      "id": "44f97ec9-d20f-4998-87e7-becfbac22d60",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.94437442793759,
      "longitude": 30.422356510260386
    }
  },
  "4566ef47-7fb6-4de5-a378-78c690daa975": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кистени  2",
      "id": "4566ef47-7fb6-4de5-a378-78c690daa975",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.18802,
      "longitude": 30.257931
    }
  },
  "47148839-5889-486c-9c9c-14836e7fdfeb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Каменка 1 ",
      "id": "47148839-5889-486c-9c9c-14836e7fdfeb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.919969,
      "longitude": 30.829448
    }
  },
  "483d3f00-8e62-49c7-8a74-c29fa78016a3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Трясна ",
      "id": "483d3f00-8e62-49c7-8a74-c29fa78016a3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.441213,
      "longitude": 30.347164
    }
  },
  "4893b457-2327-490d-84fa-f8400dffb681": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмы 1",
      "id": "4893b457-2327-490d-84fa-f8400dffb681",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.890844646807096,
      "longitude": 30.416442796834247
    }
  },
  "489b6fbd-06f8-49c7-b45e-4c8c343f906f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Коржичье 1",
      "id": "489b6fbd-06f8-49c7-b45e-4c8c343f906f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.93139747952817,
      "longitude": 30.44231568434529
    }
  },
  "48ca750d-af15-41c1-90c5-5f20e4fe2274": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мурачевка ",
      "id": "48ca750d-af15-41c1-90c5-5f20e4fe2274",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.02001,
      "longitude": 30.025986
    }
  },
  "49233824-9ff7-4e76-bd5a-94047dde30cb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Свержень  1",
      "id": "49233824-9ff7-4e76-bd5a-94047dde30cb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.115561,
      "longitude": 30.282075
    }
  },
  "4a53baed-2b8c-4ae8-ac62-c1eb57dfcbbb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Добрейка 2",
      "id": "4a53baed-2b8c-4ae8-ac62-c1eb57dfcbbb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.094628,
      "longitude": 30.373065
    }
  },
  "4a7e1bd9-6973-4fc7-9382-bbb436743434": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Речица 1 ",
      "id": "4a7e1bd9-6973-4fc7-9382-bbb436743434",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.373964,
      "longitude": 30.405317
    }
  },
  "4ad10fae-72d8-43b0-9c4b-171a6315cdaa": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Береговая Слобода 2 ",
      "id": "4ad10fae-72d8-43b0-9c4b-171a6315cdaa",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.534556,
      "longitude": 30.251075
    }
  },
  "4b738de4-f6db-47a0-a17d-f55f8f2a1e99": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Троечье",
      "id": "4b738de4-f6db-47a0-a17d-f55f8f2a1e99",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.88958433838026,
      "longitude": 30.332783071219097
    }
  },
  "4b94b166-223c-46d8-9054-414c8457174a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Тетерка 1 ",
      "id": "4b94b166-223c-46d8-9054-414c8457174a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.405406,
      "longitude": 30.347473
    }
  },
  "4d712345-ebeb-478f-b62f-eed49ee297bf": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Звонец 4",
      "id": "4d712345-ebeb-478f-b62f-eed49ee297bf",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.111253,
      "longitude": 30.713931
    }
  },
  "4dadbed7-4daa-460b-83dc-48a69b5d2c60": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вербуж 2",
      "id": "4dadbed7-4daa-460b-83dc-48a69b5d2c60",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.974372,
      "longitude": 30.801158
    }
  },
  "4deeedf1-df5c-4f52-8eae-1b679b607799": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лядо ",
      "id": "4deeedf1-df5c-4f52-8eae-1b679b607799",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.641118,
      "longitude": 30.283983
    }
  },
  "4e7175a6-b5c0-4f2b-a473-984454f8ae8a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ляхова Гора 4 ",
      "id": "4e7175a6-b5c0-4f2b-a473-984454f8ae8a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.079393,
      "longitude": 30.728718
    }
  },
  "4efed641-3cda-44c8-9cab-fd64db1ab049": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Речица угольная",
      "id": "4efed641-3cda-44c8-9cab-fd64db1ab049",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.353105,
      "longitude": 30.456561
    }
  },
  "500a4573-5719-4735-942c-ce5f68f14d92": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Олба нижняя 4",
      "id": "500a4573-5719-4735-942c-ce5f68f14d92",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.620129,
      "longitude": 30.243474
    }
  },
  "50450a63-2379-497b-9203-1d0503c08fe2": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмеч 3",
      "id": "50450a63-2379-497b-9203-1d0503c08fe2",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.143667,
      "longitude": 30.665717
    }
  },
  "507371c0-b73b-4002-ace0-4a74a07d312b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ксендзова гора ",
      "id": "507371c0-b73b-4002-ace0-4a74a07d312b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.505577,
      "longitude": 30.295677
    }
  },
  "51020ea6-34f0-464d-9add-e9332148ad9c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Проскурни 3",
      "id": "51020ea6-34f0-464d-9add-e9332148ad9c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.793651,
      "longitude": 30.106866
    }
  },
  "523e2c2c-e2da-4352-b84c-9a142717390e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Меловая  2",
      "id": "523e2c2c-e2da-4352-b84c-9a142717390e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.255877,
      "longitude": 30.383337
    }
  },
  "5402c556-dad6-4cbd-8119-9983be6bde6a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Н. Быхов 1 ",
      "id": "5402c556-dad6-4cbd-8119-9983be6bde6a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.332885,
      "longitude": 30.360477
    }
  },
  "553f846e-9e11-4d27-841d-3db4f799885b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Боровая 1",
      "id": "553f846e-9e11-4d27-841d-3db4f799885b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.275267,
      "longitude": 30.544352
    }
  },
  "554fbcf8-eea5-4079-ae70-65273bc97693": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кистени  ",
      "id": "554fbcf8-eea5-4079-ae70-65273bc97693",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.197078,
      "longitude": 30.253963
    }
  },
  "55c322d8-06aa-4c51-9f0b-b6050323917b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорье 1 ",
      "id": "55c322d8-06aa-4c51-9f0b-b6050323917b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.970867,
      "longitude": 30.046042
    }
  },
  "56b5d89e-b738-49a4-a210-3e95d2ef7cf7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вищин 2",
      "id": "56b5d89e-b738-49a4-a210-3e95d2ef7cf7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.136217,
      "longitude": 30.284146
    }
  },
  "59168ca0-d346-45fb-a605-161cdc7e2c12": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Горшок  ",
      "id": "59168ca0-d346-45fb-a605-161cdc7e2c12",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.480945,
      "longitude": 30.326318
    }
  },
  "593ba2af-8b54-46b1-a120-eec035a3f308": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кордон ",
      "id": "593ba2af-8b54-46b1-a120-eec035a3f308",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.373667,
      "longitude": 30.40021
    }
  },
  "5b5bbdc2-4ea0-4de1-ac40-ef228529474f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ваков ",
      "id": "5b5bbdc2-4ea0-4de1-ac40-ef228529474f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.083718,
      "longitude": 30.221449
    }
  },
  "5b618764-9b71-4a79-b85f-693bbbe4fd6f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Церковье 2",
      "id": "5b618764-9b71-4a79-b85f-693bbbe4fd6f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.587609,
      "longitude": 30.270538
    }
  },
  "5e8324da-ef1c-4ee2-bf6f-e94803ff8711": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Глыбово ",
      "id": "5e8324da-ef1c-4ee2-bf6f-e94803ff8711",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.477241,
      "longitude": 30.308733
    }
  },
  "5ec41617-1d65-4d1b-8aa5-46949842a371": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Каменка 2",
      "id": "5ec41617-1d65-4d1b-8aa5-46949842a371",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.907108,
      "longitude": 30.798572
    }
  },
  "6092223a-1278-45e0-98c7-b358d19bae3a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Острова 2",
      "id": "6092223a-1278-45e0-98c7-b358d19bae3a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.335886,
      "longitude": 30.368882
    }
  },
  "61dbf695-f04f-44de-aab6-75cf33590331": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Олба В",
      "id": "61dbf695-f04f-44de-aab6-75cf33590331",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.684187,
      "longitude": 30.206737
    }
  },
  "6254bd7f-a0e4-47d0-b863-66d694ad639b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "В.Заречье",
      "id": "6254bd7f-a0e4-47d0-b863-66d694ad639b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.189196,
      "longitude": 30.314011
    }
  },
  "6413ec97-aaaf-4bf4-8c08-bf7d0d4d7a8b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Леваши 2",
      "id": "6413ec97-aaaf-4bf4-8c08-bf7d0d4d7a8b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.225477,
      "longitude": 30.558035
    }
  },
  "64ccfb40-eee4-4ce8-99b8-fe1d80414991": {
    "data": {
      "currentWaterLevel": 220,
      "description": "В. Лазаревичи ",
      "id": "64ccfb40-eee4-4ce8-99b8-fe1d80414991",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.304137,
      "longitude": 30.380201
    }
  },
  "64f5f58a-31f2-49a2-b2ca-8afc716dc761": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Чаплин 1 ",
      "id": "64f5f58a-31f2-49a2-b2ca-8afc716dc761",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.138682,
      "longitude": 30.680631
    }
  },
  "6505f392-a38b-460a-88b4-97d30d05c809": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затон 3",
      "id": "6505f392-a38b-460a-88b4-97d30d05c809",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.769978,
      "longitude": 30.118619
    }
  },
  "65a56bdd-c088-4d3c-bbca-c2b563668a8c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Дебря 2",
      "id": "65a56bdd-c088-4d3c-bbca-c2b563668a8c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.88859936109516,
      "longitude": 30.3500065699578
    }
  },
  "6828b00f-42a9-4b17-8c80-f3f5335fff71": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Прудки 1",
      "id": "6828b00f-42a9-4b17-8c80-f3f5335fff71",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.046847,
      "longitude": 30.385553
    }
  },
  "695cd7a7-4c91-4325-a2ef-dd05c72885b1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Меловая  1        ",
      "id": "695cd7a7-4c91-4325-a2ef-dd05c72885b1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.271362,
      "longitude": 30.382387
    }
  },
  "6bcbefc5-e07b-4481-83e6-790cacfa4697": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Барколабово ",
      "id": "6bcbefc5-e07b-4481-83e6-790cacfa4697",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.618592,
      "longitude": 30.28806
    }
  },
  "6daf561c-72af-4f28-b656-b391691e7d19": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лысица 1 ",
      "id": "6daf561c-72af-4f28-b656-b391691e7d19",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.635305,
      "longitude": 30.286612
    }
  },
  "6eb2ecbb-0bca-4ba6-a7db-0bb6ede46bcb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затон 1 ",
      "id": "6eb2ecbb-0bca-4ba6-a7db-0bb6ede46bcb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.780262,
      "longitude": 30.118509
    }
  },
  "6f5376a1-5d6f-4f38-9c7c-ae733d51a163": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Золотой рог ",
      "id": "6f5376a1-5d6f-4f38-9c7c-ae733d51a163",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.558946,
      "longitude": 30.256477
    }
  },
  "71d50d39-b4f5-4b56-a25b-9534929d9ca6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копысь",
      "id": "71d50d39-b4f5-4b56-a25b-9534929d9ca6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.315478,
      "longitude": 30.278416
    }
  },
  "71e766e8-8c9a-4abf-a004-7d1b416b0aa4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Коловский рукав ",
      "id": "71e766e8-8c9a-4abf-a004-7d1b416b0aa4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.881573,
      "longitude": 30.722591
    }
  },
  "72b1d847-4839-4159-bfb5-37e2d8c40ece": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Горшок  1",
      "id": "72b1d847-4839-4159-bfb5-37e2d8c40ece",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.469442,
      "longitude": 30.308565
    }
  },
  "74175fcb-282a-4005-b180-77e965c71e1f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Горделево 2",
      "id": "74175fcb-282a-4005-b180-77e965c71e1f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.83585,
      "longitude": 30.102038
    }
  },
  "74bff3fa-eac1-4646-b2e3-a892075ed54f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Горделево 3",
      "id": "74bff3fa-eac1-4646-b2e3-a892075ed54f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.830997,
      "longitude": 30.096305
    }
  },
  "754e79a6-3cca-430e-a5a7-e8e9d20ba1d1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Белевичи 1",
      "id": "754e79a6-3cca-430e-a5a7-e8e9d20ba1d1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.068913,
      "longitude": 30.383051
    }
  },
  "78c52aa8-b6d8-4b7e-920f-dc702799840b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Обидовичи 3",
      "id": "78c52aa8-b6d8-4b7e-920f-dc702799840b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.358622,
      "longitude": 30.379085
    }
  },
  "8090f795-ad2a-43c8-99ae-306a570af180": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Заречье",
      "id": "8090f795-ad2a-43c8-99ae-306a570af180",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.182148,
      "longitude": 30.327252
    }
  },
  "813254ef-eed2-4c1c-8b63-3ccd1097f2c4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Прудки 2",
      "id": "813254ef-eed2-4c1c-8b63-3ccd1097f2c4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.041887,
      "longitude": 30.382978
    }
  },
  "84132282-84db-4f01-9044-dcd1865bbfda": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Церковье 1 ",
      "id": "84132282-84db-4f01-9044-dcd1865bbfda",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.601926,
      "longitude": 30.284382
    }
  },
  "86459abd-9b2c-4e1a-b040-c150e32c0582": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сутков 3",
      "id": "86459abd-9b2c-4e1a-b040-c150e32c0582",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.015769,
      "longitude": 30.750185
    }
  },
  "86ec7859-5b23-4795-86bd-4ff1bc1b26d2": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лебедевка  ",
      "id": "86ec7859-5b23-4795-86bd-4ff1bc1b26d2",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.935779,
      "longitude": 30.046346
    }
  },
  "8b05a61f-b555-4f22-abcf-d5b54af56474": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Синица  2",
      "id": "8b05a61f-b555-4f22-abcf-d5b54af56474",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.848355,
      "longitude": 30.067237
    }
  },
  "8c32fc8d-ab33-4836-9537-2e195ab2a339": {
    "data": {
      "currentWaterLevel": 220,
      "description": "фабрика \"Спартак\"",
      "id": "8c32fc8d-ab33-4836-9537-2e195ab2a339",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.217775,
      "longitude": 30.303064
    }
  },
  "8c6a5c82-ea8b-4a7d-a0ad-bf98969c8397": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новоселки 2",
      "id": "8c6a5c82-ea8b-4a7d-a0ad-bf98969c8397",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.75663792039961,
      "longitude": 30.26465309840745
    }
  },
  "8d979716-e61e-4ff9-82e6-1f134ff081d8": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Боровая ",
      "id": "8d979716-e61e-4ff9-82e6-1f134ff081d8",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.285295,
      "longitude": 30.544902
    }
  },
  "8daa8d32-fd58-4385-b408-63344044b9e3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорье 2",
      "id": "8daa8d32-fd58-4385-b408-63344044b9e3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.971669,
      "longitude": 30.056872
    }
  },
  "8db6fe88-0685-4bfc-afcc-09d49cd7300c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "В. Кистени ",
      "id": "8db6fe88-0685-4bfc-afcc-09d49cd7300c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.222632,
      "longitude": 30.239954
    }
  },
  "8eeb2a1f-2ff6-432a-a7b6-54e2b6744c86": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новосёлки 3",
      "id": "8eeb2a1f-2ff6-432a-a7b6-54e2b6744c86",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.789587,
      "longitude": 30.639829
    }
  },
  "9012e07b-9506-4d78-b0ef-5e389e6483fd": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Щитцы ",
      "id": "9012e07b-9506-4d78-b0ef-5e389e6483fd",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.863858,
      "longitude": 30.709794
    }
  },
  "905fc2ce-9fee-417e-a558-008b0c244186": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Зборов  1 ",
      "id": "905fc2ce-9fee-417e-a558-008b0c244186",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.102816,
      "longitude": 30.174197
    }
  },
  "9253b4a1-e052-4dc6-abe9-b5ed431aa81f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новая Дача ",
      "id": "9253b4a1-e052-4dc6-abe9-b5ed431aa81f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.697724,
      "longitude": 30.299254
    }
  },
  "93a7e9d9-d812-4b22-81e0-494cc92afae6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ляхова Гора 3",
      "id": "93a7e9d9-d812-4b22-81e0-494cc92afae6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.087942,
      "longitude": 30.715595
    }
  },
  "93f3d6cb-073d-4e5f-b9b7-690e0cd60227": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сутков 1 ",
      "id": "93f3d6cb-073d-4e5f-b9b7-690e0cd60227",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.026099,
      "longitude": 30.739369
    }
  },
  "93fd6270-82d6-4df6-9818-d43f6c620621": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Виляховка 1 ",
      "id": "93fd6270-82d6-4df6-9818-d43f6c620621",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.245938,
      "longitude": 30.29691
    }
  },
  "943547d1-4349-4549-93ed-4ab6b57a5d0a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Отверница ",
      "id": "943547d1-4349-4549-93ed-4ab6b57a5d0a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.323818,
      "longitude": 30.5209
    }
  },
  "96536012-7d5b-4e7b-bafe-bade22976704": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Синица  3",
      "id": "96536012-7d5b-4e7b-bafe-bade22976704",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.843435,
      "longitude": 30.074023
    }
  },
  "973d43c4-03c5-46ce-ad53-3572c9331461": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Олба нижняя 3 ",
      "id": "973d43c4-03c5-46ce-ad53-3572c9331461",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.627319,
      "longitude": 30.238717
    }
  },
  "981e2032-0e20-494f-b177-02bfe1c4370d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Горделево 1 ",
      "id": "981e2032-0e20-494f-b177-02bfe1c4370d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.838248,
      "longitude": 30.080095
    }
  },
  "9ab5a830-2303-4d41-ba03-5db6c6ac031e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Малиновка ",
      "id": "9ab5a830-2303-4d41-ba03-5db6c6ac031e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.000517,
      "longitude": 30.046226
    }
  },
  "9bff1318-8509-4752-9deb-a15a95467dc7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Порожек ",
      "id": "9bff1318-8509-4752-9deb-a15a95467dc7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.432267,
      "longitude": 30.330056
    }
  },
  "9c853f78-2ad2-4d59-9cee-6d97af53e219": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жлобинский верхн.  ",
      "id": "9c853f78-2ad2-4d59-9cee-6d97af53e219",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.9178,
      "longitude": 30.054385
    }
  },
  "a036608a-a151-4e6f-b60d-da3ebdd8cffc": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Овсяное ",
      "id": "a036608a-a151-4e6f-b60d-da3ebdd8cffc",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.386795,
      "longitude": 30.363722
    }
  },
  "a3ec0b75-f1a1-488d-97ac-106874d236bc": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Козьмино 2",
      "id": "a3ec0b75-f1a1-488d-97ac-106874d236bc",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.68074,
      "longitude": 30.190021
    }
  },
  "a48dbd9f-2323-4718-abb0-f82f58d99e88": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Полыковичи 2",
      "id": "a48dbd9f-2323-4718-abb0-f82f58d99e88",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.956737660912424,
      "longitude": 30.403021989831785
    }
  },
  "a5de11b8-8e03-43e2-945f-075112d3fcf9": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Свержень  ",
      "id": "a5de11b8-8e03-43e2-945f-075112d3fcf9",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.128749,
      "longitude": 30.296265
    }
  },
  "a63a64da-a029-4e5b-879b-fe9ff0d762e4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Верхне-Змеевская забора",
      "id": "a63a64da-a029-4e5b-879b-fe9ff0d762e4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.757253,
      "longitude": 30.624436
    }
  },
  "a650cc29-1eae-4111-bbd3-eac727dee2d7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сельский остров ",
      "id": "a650cc29-1eae-4111-bbd3-eac727dee2d7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.017318,
      "longitude": 30.056159
    }
  },
  "a7405e29-d9fa-4581-b270-f44a1a7667ab": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Олба нижняя 5 ",
      "id": "a7405e29-d9fa-4581-b270-f44a1a7667ab",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.611637,
      "longitude": 30.243507
    }
  },
  "ac1f30b9-70e0-4f70-b829-dbe3711decd7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Переделка 2",
      "id": "ac1f30b9-70e0-4f70-b829-dbe3711decd7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.036434,
      "longitude": 30.732974
    }
  },
  "aca9de19-a633-4d20-9bc2-b47ec511d465": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Боровка 2",
      "id": "aca9de19-a633-4d20-9bc2-b47ec511d465",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.681931,
      "longitude": 30.288705
    }
  },
  "ad7b4f77-2b17-4624-966f-3ab161166fcb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Переновая ",
      "id": "ad7b4f77-2b17-4624-966f-3ab161166fcb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.299927,
      "longitude": 30.527772
    }
  },
  "ad809dd9-e4f9-4bb6-91eb-73f72464cba3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмеч 2",
      "id": "ad809dd9-e4f9-4bb6-91eb-73f72464cba3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.151213,
      "longitude": 30.655064
    }
  },
  "addd4b11-33d8-4f9d-92c0-bcea98ee384e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кобылка 1",
      "id": "addd4b11-33d8-4f9d-92c0-bcea98ee384e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.240091,
      "longitude": 30.285459
    }
  },
  "ade31b92-9cf0-4ed1-ab09-ffbb79f3bedb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шелковая фабрика ",
      "id": "ade31b92-9cf0-4ed1-ab09-ffbb79f3bedb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.8834153809809,
      "longitude": 30.30309136365551
    }
  },
  "afd6cb7e-feb1-4767-a08f-3cff76469494": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Синица  1 ",
      "id": "afd6cb7e-feb1-4767-a08f-3cff76469494",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.854272,
      "longitude": 30.099326
    }
  },
  "b17bff61-5ebc-425d-96a1-05fef6398363": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сутков 4",
      "id": "b17bff61-5ebc-425d-96a1-05fef6398363",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.01579,
      "longitude": 30.764946
    }
  },
  "b29803a0-1b8c-4500-be81-ca15a2034c38": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Брусы ",
      "id": "b29803a0-1b8c-4500-be81-ca15a2034c38",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.646552,
      "longitude": 30.28054
    }
  },
  "b4292453-e034-4ef8-b540-9dce34a0868e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Задрутье ",
      "id": "b4292453-e034-4ef8-b540-9dce34a0868e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.042811,
      "longitude": 30.029141
    }
  },
  "b5321554-f302-4778-a7bd-3b9a6886c7a2": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Яново",
      "id": "b5321554-f302-4778-a7bd-3b9a6886c7a2",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.145429,
      "longitude": 30.356919
    }
  },
  "b681efbb-b7c3-40cf-9ab2-1db1fb178c04": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затишье ",
      "id": "b681efbb-b7c3-40cf-9ab2-1db1fb178c04",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.660372,
      "longitude": 30.299463
    }
  },
  "b9104eaf-d2cb-4b3e-af9b-d3de1af62691": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затишье  1 ",
      "id": "b9104eaf-d2cb-4b3e-af9b-d3de1af62691",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.651889,
      "longitude": 30.293801
    }
  },
  "b99cd14e-7d61-47e5-ad4e-ca4ade1c45c8": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Милоград ",
      "id": "b99cd14e-7d61-47e5-ad4e-ca4ade1c45c8",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.510429,
      "longitude": 30.271283
    }
  },
  "badd0233-ac59-4f45-a67d-802e940a9019": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мохов 2",
      "id": "badd0233-ac59-4f45-a67d-802e940a9019",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.013104,
      "longitude": 30.793207
    }
  },
  "bb395298-8e91-4ab1-86e3-aeb8b614f87a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Султановка ",
      "id": "bb395298-8e91-4ab1-86e3-aeb8b614f87a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.7851431055397,
      "longitude": 30.274994834606872
    }
  },
  "bb6c29ca-f3bf-4345-a0a1-6965f71b766a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Чаплин нижний ",
      "id": "bb6c29ca-f3bf-4345-a0a1-6965f71b766a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.131782,
      "longitude": 30.69309
    }
  },
  "bb7c9462-9659-4f29-8139-a70907cb85d3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Велин ",
      "id": "bb7c9462-9659-4f29-8139-a70907cb85d3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.205386,
      "longitude": 30.580288
    }
  },
  "bd1eee04-7b29-4ffa-a90e-668f1b736dc3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Рогачев 2",
      "id": "bd1eee04-7b29-4ffa-a90e-668f1b736dc3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.059881,
      "longitude": 30.036322
    }
  },
  "bd33d03a-7437-43f7-bc71-3e849e5a11b2": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мохов 3",
      "id": "bd33d03a-7437-43f7-bc71-3e849e5a11b2",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.001167,
      "longitude": 30.77706
    }
  },
  "bd3552e7-f387-4918-879b-37ded696171b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бронное ",
      "id": "bd3552e7-f387-4918-879b-37ded696171b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.545977,
      "longitude": 30.254618
    }
  },
  "bda9b3c1-f1cc-4bfe-b638-093fae08398a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затон 2",
      "id": "bda9b3c1-f1cc-4bfe-b638-093fae08398a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.774096,
      "longitude": 30.113516
    }
  },
  "bea336fb-e4cb-4ebe-a395-7efaf3edeb00": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Прибор 1 ",
      "id": "bea336fb-e4cb-4ebe-a395-7efaf3edeb00",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.468931,
      "longitude": 30.32081
    }
  },
  "bef0e27f-0917-463a-b2f6-fe220401e502": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Обидовичи 4",
      "id": "bef0e27f-0917-463a-b2f6-fe220401e502",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.35862,
      "longitude": 30.368665
    }
  },
  "bf968b12-033f-4c7f-a76d-2f6c0bccf8da": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гадиловичи ",
      "id": "bf968b12-033f-4c7f-a76d-2f6c0bccf8da",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.086935,
      "longitude": 30.253474
    }
  },
  "c20f80f8-2ae8-402e-94bb-00abef314fec": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Белый Берег 2",
      "id": "c20f80f8-2ae8-402e-94bb-00abef314fec",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.209665,
      "longitude": 30.568961
    }
  },
  "c251024b-1b09-4aa0-bfca-e1242addbb5e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Полыковичи 1",
      "id": "c251024b-1b09-4aa0-bfca-e1242addbb5e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.96061934940876,
      "longitude": 30.39446534923877
    }
  },
  "c32f0963-4bde-4b2b-9884-57cbd5de9208": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шаровский 1 ",
      "id": "c32f0963-4bde-4b2b-9884-57cbd5de9208",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.823951,
      "longitude": 30.697478
    }
  },
  "c3642e71-eee5-4861-8c12-e9038a069fb6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорье верхн. ",
      "id": "c3642e71-eee5-4861-8c12-e9038a069fb6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.990818,
      "longitude": 30.037427
    }
  },
  "c4a63af3-460c-4c96-95f6-3db010ea6175": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Затишье  2",
      "id": "c4a63af3-460c-4c96-95f6-3db010ea6175",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.645814,
      "longitude": 30.298621
    }
  },
  "c4b3985f-89c1-445c-862b-0cb19515cfd5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сутков 2",
      "id": "c4b3985f-89c1-445c-862b-0cb19515cfd5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.018433,
      "longitude": 30.735392
    }
  },
  "c4ee8f49-a42b-49d8-9670-2907fb50d86d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лопотня",
      "id": "c4ee8f49-a42b-49d8-9670-2907fb50d86d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.160481,
      "longitude": 30.352697
    }
  },
  "c54a5077-546d-41e7-8130-7a6c94bc66d6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лоевский 2",
      "id": "c54a5077-546d-41e7-8130-7a6c94bc66d6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.92861,
      "longitude": 30.826922
    }
  },
  "c583218c-f6ee-4834-a7de-1e2f23d5763f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Обидовичи 1 ",
      "id": "c583218c-f6ee-4834-a7de-1e2f23d5763f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.37907,
      "longitude": 30.365308
    }
  },
  "c5a95d2a-820c-4202-8c0b-782cf9a48338": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Белый Берег 1 ",
      "id": "c5a95d2a-820c-4202-8c0b-782cf9a48338",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.225405,
      "longitude": 30.572226
    }
  },
  "c63e5394-0b65-4b62-9a1d-75408895091c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Красногорский 1 ",
      "id": "c63e5394-0b65-4b62-9a1d-75408895091c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.896866,
      "longitude": 30.7816
    }
  },
  "c7f55af6-9e95-4f1b-b265-2e263d924ef1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Белевичи 2",
      "id": "c7f55af6-9e95-4f1b-b265-2e263d924ef1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.055551,
      "longitude": 30.381112
    }
  },
  "c8b65df4-15cf-46c4-bddd-e151918d5909": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лысица 2",
      "id": "c8b65df4-15cf-46c4-bddd-e151918d5909",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.635305,
      "longitude": 30.286612
    }
  },
  "c9801fba-4c84-46ad-8bed-60aac30db557": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Нижне-Змеевская забора",
      "id": "c9801fba-4c84-46ad-8bed-60aac30db557",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.759964,
      "longitude": 30.645837
    }
  },
  "cb610517-6fd0-44aa-ba48-72dc6e0f10d0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новосёлки 2",
      "id": "cb610517-6fd0-44aa-ba48-72dc6e0f10d0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.78933,
      "longitude": 30.656592
    }
  },
  "cc56c109-8654-4586-8982-9538906f920f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Смычек 1 ",
      "id": "cc56c109-8654-4586-8982-9538906f920f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.611254,
      "longitude": 30.251232
    }
  },
  "cd3fc4ca-cc11-499d-8db1-7c6ffda3ea3b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ляхова Гора 2",
      "id": "cd3fc4ca-cc11-499d-8db1-7c6ffda3ea3b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.096813,
      "longitude": 30.715644
    }
  },
  "ce33f37e-2c13-42bf-bda9-ee1cb1ab8b2e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Смычек 3",
      "id": "ce33f37e-2c13-42bf-bda9-ee1cb1ab8b2e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.610532,
      "longitude": 30.277575
    }
  },
  "cf11acd2-7b37-4aa0-ab6b-91aa1d768042": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Колочин 2",
      "id": "cf11acd2-7b37-4aa0-ab6b-91aa1d768042",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.180664,
      "longitude": 30.615617
    }
  },
  "cf412518-f378-4071-8d04-2df36278420f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Виляховка 2",
      "id": "cf412518-f378-4071-8d04-2df36278420f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.24327,
      "longitude": 30.262562
    }
  },
  "cfb6fad1-a28f-480a-97e7-fa32826de061": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мурованка",
      "id": "cfb6fad1-a28f-480a-97e7-fa32826de061",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.249601,
      "longitude": 30.272775
    }
  },
  "d16cb243-3c3a-4ec1-982e-d6da50e6671a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ляхова Гора 1 ",
      "id": "d16cb243-3c3a-4ec1-982e-d6da50e6671a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.107566,
      "longitude": 30.704392
    }
  },
  "d23952e3-b503-4882-bc3b-48c3262ba691": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Острова 1 ",
      "id": "d23952e3-b503-4882-bc3b-48c3262ba691",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.338394,
      "longitude": 30.376529
    }
  },
  "d2cabec3-f95f-4ce0-9b57-fef61b09ba4e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Проскурни 1 ",
      "id": "d2cabec3-f95f-4ce0-9b57-fef61b09ba4e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.820994,
      "longitude": 30.096584
    }
  },
  "d2d08e95-db5b-4f45-a8bb-0604408b1415": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новоселки 1 ",
      "id": "d2d08e95-db5b-4f45-a8bb-0604408b1415",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.770290257054846,
      "longitude": 30.265285775781393
    }
  },
  "d4c46d8a-81cb-4057-8c48-c6e186a2b0bb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Городок средний ",
      "id": "d4c46d8a-81cb-4057-8c48-c6e186a2b0bb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.38969,
      "longitude": 30.393548
    }
  },
  "da5644c9-97ce-46ff-9fa0-a8825f0129a7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стрешин  2",
      "id": "da5644c9-97ce-46ff-9fa0-a8825f0129a7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.706464,
      "longitude": 30.138644
    }
  },
  "dc4aaa9b-88f3-4d48-acf9-38ef56de1160": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ляхова Гора средняя ",
      "id": "dc4aaa9b-88f3-4d48-acf9-38ef56de1160",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.089437,
      "longitude": 30.724193
    }
  },
  "e054f3c3-93f5-4c95-b790-138b75a61bb0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стайки 1 ",
      "id": "e054f3c3-93f5-4c95-b790-138b75a61bb0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.71991750633389,
      "longitude": 30.28546963055888
    }
  },
  "e0981d78-7924-44ee-ab60-136a849405f4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Унорица 2",
      "id": "e0981d78-7924-44ee-ab60-136a849405f4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.449917,
      "longitude": 30.356192
    }
  },
  "e0bfc0bf-21f4-4a70-b328-cb08ce73c1f9": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Межники",
      "id": "e0bfc0bf-21f4-4a70-b328-cb08ce73c1f9",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.304295,
      "longitude": 30.273684
    }
  },
  "e0def84e-c80e-46e7-8a94-e363a9e68025": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Обидовичи 2",
      "id": "e0def84e-c80e-46e7-8a94-e363a9e68025",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.360268,
      "longitude": 30.359903
    }
  },
  "e12d1c7b-46c6-489e-8df7-45f089f2df74": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Коржичье 2",
      "id": "e12d1c7b-46c6-489e-8df7-45f089f2df74",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.92483324833511,
      "longitude": 30.439467274206322
    }
  },
  "e1341a4f-63e9-4445-97db-1c92662454e1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Новосёлки 1",
      "id": "e1341a4f-63e9-4445-97db-1c92662454e1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.794529,
      "longitude": 30.664674
    }
  },
  "e36af8c2-d570-448c-a32b-4ac5a22fa5b1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Рогачев 1 ",
      "id": "e36af8c2-d570-448c-a32b-4ac5a22fa5b1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.084783,
      "longitude": 30.074215
    }
  },
  "e3bc3f16-b574-4319-9eaa-f8911e906a7b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мышековка",
      "id": "e3bc3f16-b574-4319-9eaa-f8911e906a7b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.8862278137366,
      "longitude": 30.36738907099246
    }
  },
  "eaec93d4-4ca4-4588-a9f7-5e9c74a99911": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Дебря 1",
      "id": "eaec93d4-4ca4-4588-a9f7-5e9c74a99911",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.88916072810649,
      "longitude": 30.353329504343947
    }
  },
  "ec40e332-c712-4f95-8a72-20e6d2c5726f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стайки 3",
      "id": "ec40e332-c712-4f95-8a72-20e6d2c5726f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.70809211666965,
      "longitude": 30.30377399159832
    }
  },
  "ee3727af-1278-4fc7-97c5-1f5e80497f52": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Холмы 3",
      "id": "ee3727af-1278-4fc7-97c5-1f5e80497f52",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.89423195229598,
      "longitude": 30.397169661729436
    }
  },
  "ef32b728-a26c-4aaa-a566-4ac850b1dda1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ст. Быхов ",
      "id": "ef32b728-a26c-4aaa-a566-4ac850b1dda1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.52396,
      "longitude": 30.26418
    }
  },
  "f111d56d-e5ad-46c3-84c2-204171e61943": {
    "data": {
      "currentWaterLevel": 220,
      "description": "В. Полыковичи",
      "id": "f111d56d-e5ad-46c3-84c2-204171e61943",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.975477025098925,
      "longitude": 30.39451319485923
    }
  },
  "f1fdf548-bdbe-4ab7-8e00-4b8ab9913960": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Добрейка 1",
      "id": "f1fdf548-bdbe-4ab7-8e00-4b8ab9913960",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 54.108601,
      "longitude": 30.373081
    }
  },
  "f315cd6d-0b24-444a-8f4d-09001d26423c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Городок 2",
      "id": "f315cd6d-0b24-444a-8f4d-09001d26423c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.380667,
      "longitude": 30.397438
    }
  },
  "f543e2e3-3d26-4038-be31-cb22b61a53d1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Чёрное 2 ",
      "id": "f543e2e3-3d26-4038-be31-cb22b61a53d1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.42003,
      "longitude": 30.379227
    }
  },
  "f5466332-9cf2-4e7e-ac9c-3af7bc4ffa7b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вотня ",
      "id": "f5466332-9cf2-4e7e-ac9c-3af7bc4ffa7b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.318807,
      "longitude": 30.359643
    }
  },
  "f57039cd-ba1e-4d8e-b114-614be889b807": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стайки 2",
      "id": "f57039cd-ba1e-4d8e-b114-614be889b807",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.706994146470045,
      "longitude": 30.293962216468913
    }
  },
  "f6b454c1-111c-4c8c-95a3-0bf238b6e70d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шапчицы 1 ",
      "id": "f6b454c1-111c-4c8c-95a3-0bf238b6e70d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.24445,
      "longitude": 30.344523
    }
  },
  "f7e2c55d-336c-4ddf-bd52-622aa809326c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Белый Берег верхний ",
      "id": "f7e2c55d-336c-4ddf-bd52-622aa809326c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.237375,
      "longitude": 30.569441
    }
  },
  "f8745661-4383-4c4d-892f-aeda85bc6a7d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Дворец ",
      "id": "f8745661-4383-4c4d-892f-aeda85bc6a7d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.175985,
      "longitude": 30.622587
    }
  },
  "f949ae0f-222e-4587-8867-e40680e85c5d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Тетерка 2",
      "id": "f949ae0f-222e-4587-8867-e40680e85c5d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 53.392512,
      "longitude": 30.349341
    }
  },
  "faf271c4-46ec-455a-8de2-d5bf93a6d194": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Шаровский 2",
      "id": "faf271c4-46ec-455a-8de2-d5bf93a6d194",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.821104,
      "longitude": 30.686632
    }
  },
  "fafbfa78-afea-4e0c-89b4-8e0840e65e59": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Козьмино 1  ",
      "id": "fafbfa78-afea-4e0c-89b4-8e0840e65e59",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.690034,
      "longitude": 30.194688
    }
  },
  "fc6e8168-8b0d-4d60-900e-125a10b500c8": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Речица 2",
      "id": "fc6e8168-8b0d-4d60-900e-125a10b500c8",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.377744,
      "longitude": 30.422119
    }
  },
  "ffd2bff0-797c-4634-8f86-d7aadb8380a5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мочулы 2 ",
      "id": "ffd2bff0-797c-4634-8f86-d7aadb8380a5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 51.957562,
      "longitude": 30.806197
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

// let arrayForChange = [
  
// ]

// arrayForChange.forEach((item) => { 
//   let changeItem = transformedArray.find((obj) => obj.id === item.id);
//   item.latitude = changeItem.latitude;
//   item.longitude = changeItem.longitude;
//  })

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
//     description: data[key].data.description
//   });
// }


fs.writeFile(
  "asdf.js",
  `module.exports = ${JSON.stringify(transformedArray, null, 2)}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Array has been written");
    }
  }
);

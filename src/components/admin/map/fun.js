const fs = require("fs");

let data = {
  "003a839a-432b-442a-99d1-717de3432bf4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "003a839a-432b-442a-99d1-717de3432bf4",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "003a839a-432b-442a-99d1-717de3432bf4",
    "image": "name_of",
    "point": {
      "latitude": 53.6775807816,
      "longitude": 23.8200083727
    }
  },
  "0049147c-5d49-4c1b-85dc-2919b3984664": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 35",
      "id": "0049147c-5d49-4c1b-85dc-2919b3984664",
      "kilometrage": 563,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0049147c-5d49-4c1b-85dc-2919b3984664",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.488140464,
      "longitude": 24.2380057326
    }
  },
  "00c032b5-308e-45f9-a051-c63ab5684653": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 2",
      "id": "00c032b5-308e-45f9-a051-c63ab5684653",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00c032b5-308e-45f9-a051-c63ab5684653",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8724331129,
      "longitude": 23.7539827898
    }
  },
  "00fdbcb7-1e68-49d4-b3e6-9fd75bf0ece0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "00fdbcb7-1e68-49d4-b3e6-9fd75bf0ece0",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": true
    },
    "id": "00fdbcb7-1e68-49d4-b3e6-9fd75bf0ece0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7298438913,
      "longitude": 23.7771840122
    }
  },
  "0106167e-6f94-4188-bc57-1deb1bd9ef3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "0106167e-6f94-4188-bc57-1deb1bd9ef3d",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0106167e-6f94-4188-bc57-1deb1bd9ef3d",
    "image": "way_far",
    "point": {
      "latitude": 53.7780548757,
      "longitude": 23.8387683277
    }
  },
  "011a7da7-75d4-4f8f-b2e4-614ab25efa0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 5",
      "id": "011a7da7-75d4-4f8f-b2e4-614ab25efa0d",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "011a7da7-75d4-4f8f-b2e4-614ab25efa0d",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.8750667998,
      "longitude": 23.7582195097
    }
  },
  "013cd361-b790-47b9-9c2a-87149e88d3fc": {
    "data": {
      "color": false,
      "comment": "факт 10,6",
      "description": "Соблюдать надводный габарит  ",
      "id": "013cd361-b790-47b9-9c2a-87149e88d3fc",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "013cd361-b790-47b9-9c2a-87149e88d3fc",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8631492398,
      "longitude": 23.7472234394
    }
  },
  "013efa9e-77be-46f8-b5c3-15f3a054cda0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 21",
      "id": "013efa9e-77be-46f8-b5c3-15f3a054cda0",
      "kilometrage": 551,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "013efa9e-77be-46f8-b5c3-15f3a054cda0",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5482180021,
      "longitude": 24.1249490138
    }
  },
  "01617498-1fba-4c93-9f9f-7a3c1239e33a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "01617498-1fba-4c93-9f9f-7a3c1239e33a",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01617498-1fba-4c93-9f9f-7a3c1239e33a",
    "image": "name_of",
    "point": {
      "latitude": 53.8727356358,
      "longitude": 23.7613457797
    }
  },
  "01737442-706b-4125-b8f0-be2def9d605f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 32",
      "id": "01737442-706b-4125-b8f0-be2def9d605f",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01737442-706b-4125-b8f0-be2def9d605f",
    "image": "perev_right",
    "point": {
      "latitude": 53.7365652144,
      "longitude": 23.7883234136
    }
  },
  "019ceede-95bd-4f35-95ed-8520fc10c236": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "019ceede-95bd-4f35-95ed-8520fc10c236",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "019ceede-95bd-4f35-95ed-8520fc10c236",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8648936525,
      "longitude": 23.7223130564
    }
  },
  "036d86f8-1553-4367-9d01-6e40337d1ee0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 49",
      "id": "036d86f8-1553-4367-9d01-6e40337d1ee0",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "036d86f8-1553-4367-9d01-6e40337d1ee0",
    "image": "perev_right",
    "point": {
      "latitude": 53.6782688493,
      "longitude": 23.8169754048
    }
  },
  "039199c4-4371-4ce5-9116-719bbd811347": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "039199c4-4371-4ce5-9116-719bbd811347",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "039199c4-4371-4ce5-9116-719bbd811347",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6290786123,
      "longitude": 23.9863736812
    }
  },
  "039965e7-c420-4ccc-ad84-d4990b856d6f": {
    "data": {
      "color": false,
      "comment": "факт 10,3",
      "description": "Соблюдать надводный габарит  ",
      "id": "039965e7-c420-4ccc-ad84-d4990b856d6f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "039965e7-c420-4ccc-ad84-d4990b856d6f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8691274865,
      "longitude": 23.6820300045
    }
  },
  "04b8ec5a-a7e7-40df-bf35-555a87f23612": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "04b8ec5a-a7e7-40df-bf35-555a87f23612",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04b8ec5a-a7e7-40df-bf35-555a87f23612",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7607875073,
      "longitude": 23.8104101078
    }
  },
  "0552a1bc-620e-4428-8038-a25a6ff13be7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "0552a1bc-620e-4428-8038-a25a6ff13be7",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0552a1bc-620e-4428-8038-a25a6ff13be7",
    "image": "perev_left",
    "point": {
      "latitude": 53.8794985884,
      "longitude": 23.7548344292
    }
  },
  "05c9d75d-1934-4b01-82fd-7f2eb994ebbb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "05c9d75d-1934-4b01-82fd-7f2eb994ebbb",
      "kilometrage": 532,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05c9d75d-1934-4b01-82fd-7f2eb994ebbb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6170298946,
      "longitude": 24.0030800001
    }
  },
  "067b59b4-6bd9-4944-a5bd-f53473915d1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "067b59b4-6bd9-4944-a5bd-f53473915d1f",
      "kilometrage": 483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "067b59b4-6bd9-4944-a5bd-f53473915d1f",
    "image": "perev_left",
    "point": {
      "latitude": 53.8919910454,
      "longitude": 23.7734583753
    }
  },
  "067c07c2-fabf-4311-9d57-8fed9b4971f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "067c07c2-fabf-4311-9d57-8fed9b4971f1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "067c07c2-fabf-4311-9d57-8fed9b4971f1",
    "image": "perev_right",
    "point": {
      "latitude": 53.8615679217,
      "longitude": 23.6215673482
    }
  },
  "06c5b27f-aa34-4732-82c4-f626c1b534d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 12",
      "id": "06c5b27f-aa34-4732-82c4-f626c1b534d8",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06c5b27f-aa34-4732-82c4-f626c1b534d8",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8668500835,
      "longitude": 23.6482590118
    }
  },
  "06cbdedd-66f5-4e4d-b70a-9530ea2e1224": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "06cbdedd-66f5-4e4d-b70a-9530ea2e1224",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06cbdedd-66f5-4e4d-b70a-9530ea2e1224",
    "image": "perev_right",
    "point": {
      "latitude": 53.8633614529,
      "longitude": 23.7246258008
    }
  },
  "0738fc52-7ed3-477d-b0f8-38c0e2d67c8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 15",
      "id": "0738fc52-7ed3-477d-b0f8-38c0e2d67c8c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0738fc52-7ed3-477d-b0f8-38c0e2d67c8c",
    "image": "perev_left",
    "point": {
      "latitude": 53.8615187174,
      "longitude": 23.6080442318
    }
  },
  "07899d6b-5f50-48bd-81a1-f9536fa379fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 17",
      "id": "07899d6b-5f50-48bd-81a1-f9536fa379fc",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07899d6b-5f50-48bd-81a1-f9536fa379fc",
    "image": "buyo_right",
    "point": {
      "latitude": 53.6770815817,
      "longitude": 23.7838396817
    }
  },
  "0b26b1a5-13ee-42d8-9dad-007a12e84dd1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 2",
      "id": "0b26b1a5-13ee-42d8-9dad-007a12e84dd1",
      "kilometrage": 483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b26b1a5-13ee-42d8-9dad-007a12e84dd1",
    "image": "perev_right",
    "point": {
      "latitude": 53.8854906185,
      "longitude": 23.7706366835
    }
  },
  "0b8eeeee-ed5c-4c61-af38-4c9760a43e37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 15",
      "id": "0b8eeeee-ed5c-4c61-af38-4c9760a43e37",
      "kilometrage": 544,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b8eeeee-ed5c-4c61-af38-4c9760a43e37",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5173443245,
      "longitude": 24.0512698621
    }
  },
  "0be6af82-24d9-4fb9-be53-9f6102add22a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 12",
      "id": "0be6af82-24d9-4fb9-be53-9f6102add22a",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0be6af82-24d9-4fb9-be53-9f6102add22a",
    "image": "perev_left",
    "point": {
      "latitude": 53.8385446145,
      "longitude": 23.8125375577
    }
  },
  "0c1b42a6-7df6-49e0-a333-a3a99a36175b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "0c1b42a6-7df6-49e0-a333-a3a99a36175b",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c1b42a6-7df6-49e0-a333-a3a99a36175b",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 53.680356716,
      "longitude": 23.7732031042
    }
  },
  "0ca87d4f-3465-4a4c-8e37-ebebf1d3e7b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "0ca87d4f-3465-4a4c-8e37-ebebf1d3e7b1",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ca87d4f-3465-4a4c-8e37-ebebf1d3e7b1",
    "image": "bridge_low",
    "point": {
      "latitude": 53.4586036365,
      "longitude": 24.2785185981
    }
  },
  "0d2fdf42-26f2-47ff-b223-908ec71d87b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0d2fdf42-26f2-47ff-b223-908ec71d87b5",
      "kilometrage": 531,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d2fdf42-26f2-47ff-b223-908ec71d87b5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6170983537,
      "longitude": 23.9998941767
    }
  },
  "0e27aa68-b31d-46c2-90d7-4fb994206a27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 44",
      "id": "0e27aa68-b31d-46c2-90d7-4fb994206a27",
      "kilometrage": 567,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e27aa68-b31d-46c2-90d7-4fb994206a27",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4701964483,
      "longitude": 24.2567927749
    }
  },
  "0eae9a5c-79e3-421e-9827-5eba6039507b": {
    "data": {
      "color": false,
      "comment": "наклонен",
      "description": "Перевальный знак левый 43",
      "id": "0eae9a5c-79e3-421e-9827-5eba6039507b",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0eae9a5c-79e3-421e-9827-5eba6039507b",
    "image": "perev_left",
    "point": {
      "latitude": 53.6820190379,
      "longitude": 23.7715689936
    }
  },
  "10f76bcd-e68b-4b52-b542-7c3978639348": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "10f76bcd-e68b-4b52-b542-7c3978639348",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10f76bcd-e68b-4b52-b542-7c3978639348",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7497362286,
      "longitude": 23.8016778172
    }
  },
  "11503e7b-747e-4015-bbb2-e492a8ba4b4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 13",
      "id": "11503e7b-747e-4015-bbb2-e492a8ba4b4b",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11503e7b-747e-4015-bbb2-e492a8ba4b4b",
    "image": "perev_right",
    "point": {
      "latitude": 53.837336588,
      "longitude": 23.8215484483
    }
  },
  "12d11150-7085-4a84-b823-f3143d3840b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "12d11150-7085-4a84-b823-f3143d3840b0",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12d11150-7085-4a84-b823-f3143d3840b0",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6721823499,
      "longitude": 23.8265645705
    }
  },
  "15468cec-1672-402d-b892-6e02e2ed1977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "15468cec-1672-402d-b892-6e02e2ed1977",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15468cec-1672-402d-b892-6e02e2ed1977",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7214345019,
      "longitude": 23.7788603229
    }
  },
  "169c314a-632f-428d-be42-df71b52aab5e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 485",
      "id": "169c314a-632f-428d-be42-df71b52aab5e",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "169c314a-632f-428d-be42-df71b52aab5e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8756981805,
      "longitude": 23.7572217668
    }
  },
  "16a1335b-5b51-4124-8204-92a3d6878ba5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 45",
      "id": "16a1335b-5b51-4124-8204-92a3d6878ba5",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16a1335b-5b51-4124-8204-92a3d6878ba5",
    "image": "perev_left",
    "point": {
      "latitude": 53.6763094394,
      "longitude": 23.7866770971
    }
  },
  "16ec4189-d389-4a91-a8d7-1e8404f35e37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 3",
      "id": "16ec4189-d389-4a91-a8d7-1e8404f35e37",
      "kilometrage": 489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16ec4189-d389-4a91-a8d7-1e8404f35e37",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8502480646,
      "longitude": 23.7980695694
    }
  },
  "17ce27db-03fc-4b66-828d-05d3ec19ae49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 34",
      "id": "17ce27db-03fc-4b66-828d-05d3ec19ae49",
      "kilometrage": 562,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17ce27db-03fc-4b66-828d-05d3ec19ae49",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.4973270063,
      "longitude": 24.2337683277
    }
  },
  "181a1991-ced8-4755-b961-622a0148e779": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 40",
      "id": "181a1991-ced8-4755-b961-622a0148e779",
      "kilometrage": 566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "181a1991-ced8-4755-b961-622a0148e779",
    "image": "buyo_right",
    "point": {
      "latitude": 53.4736290831,
      "longitude": 24.2383559889
    }
  },
  "192d8418-9515-4b7e-9a86-589bf391cc60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "192d8418-9515-4b7e-9a86-589bf391cc60",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "192d8418-9515-4b7e-9a86-589bf391cc60",
    "image": "perev_left",
    "point": {
      "latitude": 53.858711823,
      "longitude": 23.5380225839
    }
  },
  "19638418-6fa0-4448-9011-97252de58ec7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "19638418-6fa0-4448-9011-97252de58ec7",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19638418-6fa0-4448-9011-97252de58ec7",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.7596512736,
      "longitude": 23.8100496613
    }
  },
  "1a406f1c-a83e-4b1f-97d2-8e5247aedbaf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 48",
      "id": "1a406f1c-a83e-4b1f-97d2-8e5247aedbaf",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a406f1c-a83e-4b1f-97d2-8e5247aedbaf",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4537539654,
      "longitude": 24.3035363249
    }
  },
  "1a4671cd-fc1b-42ce-8d38-c6787c3dd855": {
    "data": {
      "color": false,
      "comment": "факт 4,9",
      "description": "Соблюдать надводный габарит  ",
      "id": "1a4671cd-fc1b-42ce-8d38-c6787c3dd855",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a4671cd-fc1b-42ce-8d38-c6787c3dd855",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8700921474,
      "longitude": 23.6752301455
    }
  },
  "1ab1e8dc-1f3f-43e3-be5d-f53b88bb15b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Створный знак правый 2",
      "id": "1ab1e8dc-1f3f-43e3-be5d-f53b88bb15b3",
      "kilometrage": 550,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ab1e8dc-1f3f-43e3-be5d-f53b88bb15b3",
    "image": "stvor_right",
    "point": {
      "latitude": 53.5481241687,
      "longitude": 24.1123351612
    }
  },
  "1c73296e-46c5-4c07-9915-6d9ea6266408": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1c73296e-46c5-4c07-9915-6d9ea6266408",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c73296e-46c5-4c07-9915-6d9ea6266408",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8634777567,
      "longitude": 23.7472163698
    }
  },
  "1e04e67d-715f-43bc-9dc3-6e55ac14a6fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 17",
      "id": "1e04e67d-715f-43bc-9dc3-6e55ac14a6fb",
      "kilometrage": 545,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e04e67d-715f-43bc-9dc3-6e55ac14a6fb",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5156259715,
      "longitude": 24.0728079409
    }
  },
  "1f621aef-1728-443f-bf48-ed82729f9226": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "1f621aef-1728-443f-bf48-ed82729f9226",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f621aef-1728-443f-bf48-ed82729f9226",
    "image": "bridge_low",
    "point": {
      "latitude": 53.6724102515,
      "longitude": 23.8260108029
    }
  },
  "1f729244-11e0-44cb-8939-872eb7a12db5": {
    "data": {
      "color": false,
      "comment": "нету кнопочного левого и нет световой сигнализации",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "1f729244-11e0-44cb-8939-872eb7a12db5",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f729244-11e0-44cb-8939-872eb7a12db5",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8701703779,
      "longitude": 23.6743822679
    }
  },
  "205f3db3-d15b-4f57-a219-2edf8ca313f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 515",
      "id": "205f3db3-d15b-4f57-a219-2edf8ca313f9",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "205f3db3-d15b-4f57-a219-2edf8ca313f9",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6810082153,
      "longitude": 23.8024845689
    }
  },
  "21d54638-4808-4aac-bdef-8c2920bd123e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "21d54638-4808-4aac-bdef-8c2920bd123e",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21d54638-4808-4aac-bdef-8c2920bd123e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8594101269,
      "longitude": 23.5544686331
    }
  },
  "2204ff56-88d1-45ed-a4e5-fa0f65cdbb9a": {
    "data": {
      "color": false,
      "comment": "факт 10,3",
      "description": "Соблюдать надводный габарит  ",
      "id": "2204ff56-88d1-45ed-a4e5-fa0f65cdbb9a",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2204ff56-88d1-45ed-a4e5-fa0f65cdbb9a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8692049365,
      "longitude": 23.6790622373
    }
  },
  "2358dd79-6806-42cc-8a15-1a24d9e15ca7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2358dd79-6806-42cc-8a15-1a24d9e15ca7",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2358dd79-6806-42cc-8a15-1a24d9e15ca7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6608825384,
      "longitude": 23.8602653841
    }
  },
  "23de05bc-4359-4cac-821c-5c486d5d7b96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 37",
      "id": "23de05bc-4359-4cac-821c-5c486d5d7b96",
      "kilometrage": 509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23de05bc-4359-4cac-821c-5c486d5d7b96",
    "image": "perev_left",
    "point": {
      "latitude": 53.713781039,
      "longitude": 23.7678574612
    }
  },
  "255161a0-0a77-47cc-adc7-9050f677e15a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 10",
      "id": "255161a0-0a77-47cc-adc7-9050f677e15a",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "255161a0-0a77-47cc-adc7-9050f677e15a",
    "image": "perev_right",
    "point": {
      "latitude": 53.8624347223,
      "longitude": 23.6296331598
    }
  },
  "25daed40-41be-4ac3-bb92-9d1c648f4f49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "25daed40-41be-4ac3-bb92-9d1c648f4f49",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25daed40-41be-4ac3-bb92-9d1c648f4f49",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8592305484,
      "longitude": 23.5535177634
    }
  },
  "26090aa0-714a-4102-9f1e-9924c4f05d6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 7",
      "id": "26090aa0-714a-4102-9f1e-9924c4f05d6f",
      "kilometrage": 536,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26090aa0-714a-4102-9f1e-9924c4f05d6f",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5823692004,
      "longitude": 24.0158636548
    }
  },
  "26b0678e-a369-4095-a376-ac2d2304fdad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "26b0678e-a369-4095-a376-ac2d2304fdad",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26b0678e-a369-4095-a376-ac2d2304fdad",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6460531562,
      "longitude": 23.9200221741
    }
  },
  "275602b8-096f-4cd2-b030-c1d0098c863d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 36",
      "id": "275602b8-096f-4cd2-b030-c1d0098c863d",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "275602b8-096f-4cd2-b030-c1d0098c863d",
    "image": "perev_left",
    "point": {
      "latitude": 53.7165667235,
      "longitude": 23.7664514839
    }
  },
  "27b32290-abae-477a-a382-7e22149ec902": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 520",
      "id": "27b32290-abae-477a-a382-7e22149ec902",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27b32290-abae-477a-a382-7e22149ec902",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6597313462,
      "longitude": 23.8653477091
    }
  },
  "281c4df0-fb2d-42f3-b7ac-a0b36ee97c5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "281c4df0-fb2d-42f3-b7ac-a0b36ee97c5b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "281c4df0-fb2d-42f3-b7ac-a0b36ee97c5b",
    "image": "crossing_way",
    "point": {
      "latitude": 53.8646994205,
      "longitude": 23.5811824933
    }
  },
  "2896349e-aaaa-4329-ba5d-0d60018145d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2896349e-aaaa-4329-ba5d-0d60018145d9",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2896349e-aaaa-4329-ba5d-0d60018145d9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.861877493,
      "longitude": 23.5849775828
    }
  },
  "29117a6e-2aff-45f2-accb-056eaab8f851": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "29117a6e-2aff-45f2-accb-056eaab8f851",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29117a6e-2aff-45f2-accb-056eaab8f851",
    "image": "perev_left",
    "point": {
      "latitude": 53.8632765215,
      "longitude": 23.6267713085
    }
  },
  "29555756-a4e7-4f12-b132-a2dd4e34bed7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "29555756-a4e7-4f12-b132-a2dd4e34bed7",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29555756-a4e7-4f12-b132-a2dd4e34bed7",
    "image": "name_of",
    "point": {
      "latitude": 53.8854388151,
      "longitude": 23.7616880861
    }
  },
  "29695bdf-1929-47e4-9452-d8ce415a15a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "29695bdf-1929-47e4-9452-d8ce415a15a1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29695bdf-1929-47e4-9452-d8ce415a15a1",
    "image": "main_way",
    "point": {
      "latitude": 53.8861691116,
      "longitude": 23.7578403614
    }
  },
  "2bc3c143-8f6c-407a-89cd-9823c400dfdf": {
    "data": {
      "color": false,
      "comment": "обновить окраску опоры",
      "description": "Перевальный знак правый белый 42",
      "id": "2bc3c143-8f6c-407a-89cd-9823c400dfdf",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bc3c143-8f6c-407a-89cd-9823c400dfdf",
    "image": "perev_right",
    "point": {
      "latitude": 53.6863407313,
      "longitude": 23.7744853306
    }
  },
  "2c9e42d6-81d4-4c17-baa0-aea82e56936c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "2c9e42d6-81d4-4c17-baa0-aea82e56936c",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c9e42d6-81d4-4c17-baa0-aea82e56936c",
    "image": "perev_left",
    "point": {
      "latitude": 53.8866682101,
      "longitude": 23.7606633658
    }
  },
  "2d1205c3-162c-4828-a048-58c1325e41e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2d1205c3-162c-4828-a048-58c1325e41e8",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d1205c3-162c-4828-a048-58c1325e41e8",
    "image": "name_of",
    "point": {
      "latitude": 53.6004316559,
      "longitude": 24.0048133368
    }
  },
  "2d2e280d-a18b-46de-a391-b8d60af67544": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2d2e280d-a18b-46de-a391-b8d60af67544",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d2e280d-a18b-46de-a391-b8d60af67544",
    "image": "name_of",
    "point": {
      "latitude": 53.8866315859,
      "longitude": 23.7587416
    }
  },
  "2d89f0a6-2ec8-4e87-a1a1-ff064b2f2bd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 3",
      "id": "2d89f0a6-2ec8-4e87-a1a1-ff064b2f2bd5",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d89f0a6-2ec8-4e87-a1a1-ff064b2f2bd5",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8697287087,
      "longitude": 23.6712819952
    }
  },
  "2dbe4907-b478-4978-9d72-b7bcbe14ffc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Створный знак левый 1",
      "id": "2dbe4907-b478-4978-9d72-b7bcbe14ffc6",
      "kilometrage": 547,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2dbe4907-b478-4978-9d72-b7bcbe14ffc6",
    "image": "stvor_left",
    "point": {
      "latitude": 53.5218868722,
      "longitude": 24.092516288
    }
  },
  "2e413ec7-26c3-446c-8a8c-39db5bf8cb6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 1",
      "id": "2e413ec7-26c3-446c-8a8c-39db5bf8cb6f",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e413ec7-26c3-446c-8a8c-39db5bf8cb6f",
    "image": "buyo_separator",
    "point": {
      "latitude": 53.8862199799,
      "longitude": 23.7592448748
    }
  },
  "2f4f183b-4377-441c-9715-93590b8f251d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 26",
      "id": "2f4f183b-4377-441c-9715-93590b8f251d",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f4f183b-4377-441c-9715-93590b8f251d",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.77615074,
      "longitude": 23.8372501004
    }
  },
  "2fa6d8e7-ab6e-4c9c-93db-5b80a796196f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 14",
      "id": "2fa6d8e7-ab6e-4c9c-93db-5b80a796196f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2fa6d8e7-ab6e-4c9c-93db-5b80a796196f",
    "image": "perev_right",
    "point": {
      "latitude": 53.860010607,
      "longitude": 23.6125679115
    }
  },
  "3196a6f7-5369-43dc-bc38-51c38b324938": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3196a6f7-5369-43dc-bc38-51c38b324938",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3196a6f7-5369-43dc-bc38-51c38b324938",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6619004587,
      "longitude": 23.8612640786
    }
  },
  "31e25ebb-18cc-43a0-958f-a055ee790837": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "31e25ebb-18cc-43a0-958f-a055ee790837",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31e25ebb-18cc-43a0-958f-a055ee790837",
    "image": "main_way",
    "point": {
      "latitude": 53.677585064,
      "longitude": 23.813656224
    }
  },
  "31e60817-a3ed-44fb-b4b0-f140e9225c9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "31e60817-a3ed-44fb-b4b0-f140e9225c9e",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31e60817-a3ed-44fb-b4b0-f140e9225c9e",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8680523478,
      "longitude": 23.6550613158
    }
  },
  "31f4fcc5-ad00-4dad-8f59-316504ea92c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "31f4fcc5-ad00-4dad-8f59-316504ea92c8",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31f4fcc5-ad00-4dad-8f59-316504ea92c8",
    "image": "attention",
    "point": {
      "latitude": 53.8584765108,
      "longitude": 23.5374785898
    }
  },
  "3203bce2-0f19-4905-b784-1b4aef72ee16": {
    "data": {
      "color": false,
      "comment": "факт 10,6",
      "description": "Соблюдать надводный габарит  ",
      "id": "3203bce2-0f19-4905-b784-1b4aef72ee16",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3203bce2-0f19-4905-b784-1b4aef72ee16",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8645337611,
      "longitude": 23.7505804822
    }
  },
  "33aa4acd-c18a-4ab7-b215-00ae44934460": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "33aa4acd-c18a-4ab7-b215-00ae44934460",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33aa4acd-c18a-4ab7-b215-00ae44934460",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.4547093582,
      "longitude": 24.3036652751
    }
  },
  "33aead3a-5357-4802-9ab9-952a507d3c71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 3",
      "id": "33aead3a-5357-4802-9ab9-952a507d3c71",
      "kilometrage": 532,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33aead3a-5357-4802-9ab9-952a507d3c71",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.6152944543,
      "longitude": 24.0035009564
    }
  },
  "33b6bba8-c771-4327-886f-07db74432273": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "33b6bba8-c771-4327-886f-07db74432273",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33b6bba8-c771-4327-886f-07db74432273",
    "image": "way_far",
    "point": {
      "latitude": 53.7274169597,
      "longitude": 23.7796208812
    }
  },
  "33f7b2c8-05c7-445f-9636-929c8165f641": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ширина судового хода ограничена  ",
      "id": "33f7b2c8-05c7-445f-9636-929c8165f641",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33f7b2c8-05c7-445f-9636-929c8165f641",
    "image": "width_limit",
    "point": {
      "latitude": 53.8589126995,
      "longitude": 23.5488244861
    }
  },
  "340e34f2-bd32-4f75-98c7-0f23ecc02516": {
    "data": {
      "color": false,
      "comment": "всплыл",
      "description": "Левый буй 13",
      "id": "340e34f2-bd32-4f75-98c7-0f23ecc02516",
      "kilometrage": 506,
      "place": true,
      "size": false,
      "visibility": false
    },
    "id": "340e34f2-bd32-4f75-98c7-0f23ecc02516",
    "image": "buyo_left",
    "point": {
      "latitude": 53.7302936142,
      "longitude": 23.7780293651
    }
  },
  "351021b1-1ce3-46e8-bac6-aec732e7ff38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 19",
      "id": "351021b1-1ce3-46e8-bac6-aec732e7ff38",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "351021b1-1ce3-46e8-bac6-aec732e7ff38",
    "image": "buyo_separator",
    "point": {
      "latitude": 53.6775083305,
      "longitude": 23.8141962776
    }
  },
  "35126f12-5f7f-4719-85ca-dfa0765b4aef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "35126f12-5f7f-4719-85ca-dfa0765b4aef",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35126f12-5f7f-4719-85ca-dfa0765b4aef",
    "image": "raid_end_left",
    "point": {
      "latitude": 53.6793048513,
      "longitude": 23.7749894458
    }
  },
  "36526bc4-0532-4c43-ba2e-4d681453b0f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "36526bc4-0532-4c43-ba2e-4d681453b0f7",
      "kilometrage": 532,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36526bc4-0532-4c43-ba2e-4d681453b0f7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6179488915,
      "longitude": 24.0022912231
    }
  },
  "369b9385-ff43-4444-ba5b-f52297d92c8b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "369b9385-ff43-4444-ba5b-f52297d92c8b",
      "kilometrage": 492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "369b9385-ff43-4444-ba5b-f52297d92c8b",
    "image": "perev_left",
    "point": {
      "latitude": 53.8308923814,
      "longitude": 23.8225711973
    }
  },
  "37601e9e-db41-4524-83b7-e5f1942eba04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 21",
      "id": "37601e9e-db41-4524-83b7-e5f1942eba04",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37601e9e-db41-4524-83b7-e5f1942eba04",
    "image": "perev_right",
    "point": {
      "latitude": 53.8046873679,
      "longitude": 23.8564918295
    }
  },
  "37864291-30bc-4449-9d15-76241ab39b25": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 495",
      "id": "37864291-30bc-4449-9d15-76241ab39b25",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37864291-30bc-4449-9d15-76241ab39b25",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8094791006,
      "longitude": 23.8408589944
    }
  },
  "37f5d2e2-6930-4a48-93f4-d15b6d518040": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "37f5d2e2-6930-4a48-93f4-d15b6d518040",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37f5d2e2-6930-4a48-93f4-d15b6d518040",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8160615447,
      "longitude": 23.836863868
    }
  },
  "389d6251-5965-40d1-8ecb-e8a4fa7d8c5e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "389d6251-5965-40d1-8ecb-e8a4fa7d8c5e",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "389d6251-5965-40d1-8ecb-e8a4fa7d8c5e",
    "image": "crossing_way",
    "point": {
      "latitude": 53.8606249259,
      "longitude": 23.5599734129
    }
  },
  "3a056058-8135-4191-b23d-742688379ccf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3a056058-8135-4191-b23d-742688379ccf",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a056058-8135-4191-b23d-742688379ccf",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8631978028,
      "longitude": 23.7230815419
    }
  },
  "3a6c42b7-c5ec-47a9-9b9d-d7f0dc178621": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 14",
      "id": "3a6c42b7-c5ec-47a9-9b9d-d7f0dc178621",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a6c42b7-c5ec-47a9-9b9d-d7f0dc178621",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8598552141,
      "longitude": 23.5996516204
    }
  },
  "3aa343f3-868d-4825-9e6a-8a9207863fad": {
    "data": {
      "color": false,
      "comment": "факт 11,6",
      "description": "Соблюдать надводный габарит  ",
      "id": "3aa343f3-868d-4825-9e6a-8a9207863fad",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3aa343f3-868d-4825-9e6a-8a9207863fad",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8646242155,
      "longitude": 23.7234205135
    }
  },
  "3ad3988a-12ee-46d5-9f22-ae25ac17dae8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 4",
      "id": "3ad3988a-12ee-46d5-9f22-ae25ac17dae8",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ad3988a-12ee-46d5-9f22-ae25ac17dae8",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.6065076504,
      "longitude": 24.0041841107
    }
  },
  "3b4dd25b-5d02-41af-add2-748d9f57b01c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3b4dd25b-5d02-41af-add2-748d9f57b01c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b4dd25b-5d02-41af-add2-748d9f57b01c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8612519044,
      "longitude": 23.585559691
    }
  },
  "3c399a2e-56f8-4627-b05d-c1f5bb62d7e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1",
      "id": "3c399a2e-56f8-4627-b05d-c1f5bb62d7e1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c399a2e-56f8-4627-b05d-c1f5bb62d7e1",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8807850247,
      "longitude": 23.7505334946
    }
  },
  "3ced914d-3298-4ea4-b197-f8ec8a34b3bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 4",
      "id": "3ced914d-3298-4ea4-b197-f8ec8a34b3bc",
      "kilometrage": 567,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ced914d-3298-4ea4-b197-f8ec8a34b3bc",
    "image": "perev_right",
    "point": {
      "latitude": 53.471301792,
      "longitude": 24.2554880334
    }
  },
  "3d19dd3e-d83b-4b51-9bbd-e3e3d47348d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3d19dd3e-d83b-4b51-9bbd-e3e3d47348d1",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d19dd3e-d83b-4b51-9bbd-e3e3d47348d1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7481765464,
      "longitude": 23.8004481783
    }
  },
  "3de63319-5868-47e4-90c6-69418e64afcf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "3de63319-5868-47e4-90c6-69418e64afcf",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3de63319-5868-47e4-90c6-69418e64afcf",
    "image": "raid_start_left",
    "point": {
      "latitude": 53.6771678948,
      "longitude": 23.7805925095
    }
  },
  "3e3416a8-148e-4476-b348-d223fbde05b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 32",
      "id": "3e3416a8-148e-4476-b348-d223fbde05b9",
      "kilometrage": 560,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e3416a8-148e-4476-b348-d223fbde05b9",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5139358197,
      "longitude": 24.2097599947
    }
  },
  "3e4d86fb-d3f0-47e0-95f1-c897cf522941": {
    "data": {
      "color": false,
      "comment": "стоит 15",
      "description": "Скорость ограничена  ",
      "id": "3e4d86fb-d3f0-47e0-95f1-c897cf522941",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e4d86fb-d3f0-47e0-95f1-c897cf522941",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8722698923,
      "longitude": 23.7552573315
    }
  },
  "3ebb34ca-555d-4238-9cb2-67b21adc4c90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "3ebb34ca-555d-4238-9cb2-67b21adc4c90",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ebb34ca-555d-4238-9cb2-67b21adc4c90",
    "image": "stop",
    "point": {
      "latitude": 53.8587592147,
      "longitude": 23.5479560002
    }
  },
  "3f775b4d-21bf-40d0-a154-0bb7510aa545": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "3f775b4d-21bf-40d0-a154-0bb7510aa545",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f775b4d-21bf-40d0-a154-0bb7510aa545",
    "image": "raid_end_left",
    "point": {
      "latitude": 53.688996105,
      "longitude": 23.7741840395
    }
  },
  "406690b5-c29b-471a-b524-9bc6e5653a1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "406690b5-c29b-471a-b524-9bc6e5653a1e",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "406690b5-c29b-471a-b524-9bc6e5653a1e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6525208319,
      "longitude": 23.8868024299
    }
  },
  "4213049c-f258-45a9-94c0-2399023295f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 50",
      "id": "4213049c-f258-45a9-94c0-2399023295f4",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4213049c-f258-45a9-94c0-2399023295f4",
    "image": "perev_left",
    "point": {
      "latitude": 53.6549003192,
      "longitude": 23.8729477623
    }
  },
  "42746869-9361-4d97-8e19-0f0f2ba2bdb0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 2",
      "id": "42746869-9361-4d97-8e19-0f0f2ba2bdb0",
      "kilometrage": 531,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42746869-9361-4d97-8e19-0f0f2ba2bdb0",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.6213217687,
      "longitude": 23.9931637517
    }
  },
  "4301d605-e83f-40a6-9cd7-de6fff7963a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 500",
      "id": "4301d605-e83f-40a6-9cd7-de6fff7963a5",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4301d605-e83f-40a6-9cd7-de6fff7963a5",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7736710533,
      "longitude": 23.8346241434
    }
  },
  "44434575-091d-4abe-ae23-b5253753bd1b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "44434575-091d-4abe-ae23-b5253753bd1b",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44434575-091d-4abe-ae23-b5253753bd1b",
    "image": "way_far",
    "point": {
      "latitude": 53.7956676926,
      "longitude": 23.8508651851
    }
  },
  "44aa0570-8284-4255-8b0a-52e1a76e4217": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "44aa0570-8284-4255-8b0a-52e1a76e4217",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44aa0570-8284-4255-8b0a-52e1a76e4217",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8687465511,
      "longitude": 23.6819367601
    }
  },
  "44b72fee-1981-42df-91b7-dbb5737f135a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 37",
      "id": "44b72fee-1981-42df-91b7-dbb5737f135a",
      "kilometrage": 564,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44b72fee-1981-42df-91b7-dbb5737f135a",
    "image": "buyo_right",
    "point": {
      "latitude": 53.4871628766,
      "longitude": 24.2500469204
    }
  },
  "45e9f915-209d-4b24-b77d-0864485dd857": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 22",
      "id": "45e9f915-209d-4b24-b77d-0864485dd857",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45e9f915-209d-4b24-b77d-0864485dd857",
    "image": "perev_left",
    "point": {
      "latitude": 53.8607656774,
      "longitude": 23.5610787457
    }
  },
  "45f059d1-2da6-4aae-b305-397c7b05cac3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "45f059d1-2da6-4aae-b305-397c7b05cac3",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45f059d1-2da6-4aae-b305-397c7b05cac3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.662013093,
      "longitude": 23.8604667759
    }
  },
  "4658e8ef-8a2c-47e6-82ce-43d383cb9876": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 13",
      "id": "4658e8ef-8a2c-47e6-82ce-43d383cb9876",
      "kilometrage": 543,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4658e8ef-8a2c-47e6-82ce-43d383cb9876",
    "image": "buyo_right",
    "point": {
      "latitude": 53.5266985976,
      "longitude": 24.0509721401
    }
  },
  "4703e067-aadc-4742-9cd6-6af053a865fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 19",
      "id": "4703e067-aadc-4742-9cd6-6af053a865fe",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4703e067-aadc-4742-9cd6-6af053a865fe",
    "image": "perev_left",
    "point": {
      "latitude": 53.8101183444,
      "longitude": 23.8377039214
    }
  },
  "47690cb3-6dfc-4516-980f-c965e6e3a77b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "47690cb3-6dfc-4516-980f-c965e6e3a77b",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47690cb3-6dfc-4516-980f-c965e6e3a77b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8590840718,
      "longitude": 23.5547004616
    }
  },
  "478452d0-29ba-48d7-be30-67cc80c32ffc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 525",
      "id": "478452d0-29ba-48d7-be30-67cc80c32ffc",
      "kilometrage": 525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "478452d0-29ba-48d7-be30-67cc80c32ffc",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6425539321,
      "longitude": 23.9321439149
    }
  },
  "4786b846-fd8d-47f6-a653-876b27addbef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4786b846-fd8d-47f6-a653-876b27addbef",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4786b846-fd8d-47f6-a653-876b27addbef",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5288376345,
      "longitude": 24.1428527988
    }
  },
  "47cf9bca-9328-4460-bb2b-455160c9bcde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "47cf9bca-9328-4460-bb2b-455160c9bcde",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47cf9bca-9328-4460-bb2b-455160c9bcde",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6789977956,
      "longitude": 23.8063351299
    }
  },
  "483bb7bf-4dea-40a5-bf0d-b9c51dd3a9dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 5",
      "id": "483bb7bf-4dea-40a5-bf0d-b9c51dd3a9dd",
      "kilometrage": 534,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "483bb7bf-4dea-40a5-bf0d-b9c51dd3a9dd",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5983359861,
      "longitude": 24.0095001512
    }
  },
  "48829191-3ba1-49ae-8e07-c80d50357d2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 12",
      "id": "48829191-3ba1-49ae-8e07-c80d50357d2d",
      "kilometrage": 543,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48829191-3ba1-49ae-8e07-c80d50357d2d",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5283040555,
      "longitude": 24.0484724437
    }
  },
  "490e0edf-1cb2-4380-8dfa-895dd94c206c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 22",
      "id": "490e0edf-1cb2-4380-8dfa-895dd94c206c",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "490e0edf-1cb2-4380-8dfa-895dd94c206c",
    "image": "buyo_left",
    "point": {
      "latitude": 53.6751416878,
      "longitude": 23.8233035665
    }
  },
  "4943f00f-9772-49e7-beeb-9036acdd91c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "4943f00f-9772-49e7-beeb-9036acdd91c6",
      "kilometrage": 501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4943f00f-9772-49e7-beeb-9036acdd91c6",
    "image": "name_of",
    "point": {
      "latitude": 53.7702627307,
      "longitude": 23.8169982715
    }
  },
  "49c2c3e8-275e-450a-8368-25306b830ddc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "49c2c3e8-275e-450a-8368-25306b830ddc",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49c2c3e8-275e-450a-8368-25306b830ddc",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6705206655,
      "longitude": 23.8303702041
    }
  },
  "4ad046a3-a87f-46ba-b1f7-a1e4301a0a91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "4ad046a3-a87f-46ba-b1f7-a1e4301a0a91",
      "kilometrage": 545,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ad046a3-a87f-46ba-b1f7-a1e4301a0a91",
    "image": "name_of",
    "point": {
      "latitude": 53.5073562541,
      "longitude": 24.0667659956
    }
  },
  "4b60375d-43e1-4abf-9379-f1ef97617662": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4b60375d-43e1-4abf-9379-f1ef97617662",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b60375d-43e1-4abf-9379-f1ef97617662",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7290756306,
      "longitude": 23.7779259513
    }
  },
  "4bb87855-bde0-4f3e-b6d6-67a7a285edb5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "4bb87855-bde0-4f3e-b6d6-67a7a285edb5",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bb87855-bde0-4f3e-b6d6-67a7a285edb5",
    "image": "stop",
    "point": {
      "latitude": 53.8690688518,
      "longitude": 23.7583551509
    }
  },
  "4c62bcee-3d6e-4ec3-981b-ce2e3050b2a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 19",
      "id": "4c62bcee-3d6e-4ec3-981b-ce2e3050b2a5",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c62bcee-3d6e-4ec3-981b-ce2e3050b2a5",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8587427831,
      "longitude": 23.5529577575
    }
  },
  "4d25f5ff-bb3e-4de1-a9fe-1d33fbf65192": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "4d25f5ff-bb3e-4de1-a9fe-1d33fbf65192",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d25f5ff-bb3e-4de1-a9fe-1d33fbf65192",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8607433627,
      "longitude": 23.5858369134
    }
  },
  "4d4fc52d-c5ce-4e85-8684-d9c1ec15866d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 13",
      "id": "4d4fc52d-c5ce-4e85-8684-d9c1ec15866d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d4fc52d-c5ce-4e85-8684-d9c1ec15866d",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8665713155,
      "longitude": 23.6456053658
    }
  },
  "4d7e6a32-bdf8-466b-ac46-02fff5452704": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4d7e6a32-bdf8-466b-ac46-02fff5452704",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d7e6a32-bdf8-466b-ac46-02fff5452704",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4591606358,
      "longitude": 24.2784507787
    }
  },
  "4db9d0f9-13d3-4ed2-a57a-d623539ed46c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "4db9d0f9-13d3-4ed2-a57a-d623539ed46c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4db9d0f9-13d3-4ed2-a57a-d623539ed46c",
    "image": "attention",
    "point": {
      "latitude": 53.861445685,
      "longitude": 23.6136083658
    }
  },
  "4e227053-f3d5-445e-988b-47157896aca5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13",
      "id": "4e227053-f3d5-445e-988b-47157896aca5",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e227053-f3d5-445e-988b-47157896aca5",
    "image": "perev_left",
    "point": {
      "latitude": 53.8622423994,
      "longitude": 23.6151355712
    }
  },
  "4ec817fc-6895-41f0-8ad8-7aa2ffee98dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 24",
      "id": "4ec817fc-6895-41f0-8ad8-7aa2ffee98dd",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ec817fc-6895-41f0-8ad8-7aa2ffee98dd",
    "image": "buyo_right",
    "point": {
      "latitude": 53.6726092113,
      "longitude": 23.8262290954
    }
  },
  "5002baf6-b1b2-43ee-ac6e-21425f568e9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5002baf6-b1b2-43ee-ac6e-21425f568e9c",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5002baf6-b1b2-43ee-ac6e-21425f568e9c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6524307477,
      "longitude": 23.8875874667
    }
  },
  "5151a5dd-8ad4-427b-bdce-b504e9f29d80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 3",
      "id": "5151a5dd-8ad4-427b-bdce-b504e9f29d80",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5151a5dd-8ad4-427b-bdce-b504e9f29d80",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8659420216,
      "longitude": 23.755153334
    }
  },
  "5194e8c7-0b10-4c28-a0f9-e501d054a9c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "5194e8c7-0b10-4c28-a0f9-e501d054a9c8",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5194e8c7-0b10-4c28-a0f9-e501d054a9c8",
    "image": "way_far",
    "point": {
      "latitude": 53.7542477997,
      "longitude": 23.8040725564
    }
  },
  "51dad006-0f45-4091-93a8-1bc63d6c73a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 21",
      "id": "51dad006-0f45-4091-93a8-1bc63d6c73a2",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51dad006-0f45-4091-93a8-1bc63d6c73a2",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8681973702,
      "longitude": 23.5272663447
    }
  },
  "51e057aa-689c-41b5-bc71-431a0b102d59": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 14",
      "id": "51e057aa-689c-41b5-bc71-431a0b102d59",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51e057aa-689c-41b5-bc71-431a0b102d59",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8631801075,
      "longitude": 23.6254448672
    }
  },
  "51f2b807-28e2-4735-861c-fc35564cfaea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "51f2b807-28e2-4735-861c-fc35564cfaea",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51f2b807-28e2-4735-861c-fc35564cfaea",
    "image": "bridge_low",
    "point": {
      "latitude": 53.652940319,
      "longitude": 23.8860646304
    }
  },
  "543c5b6b-d3f3-4d26-a0a4-dc2686444110": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 26",
      "id": "543c5b6b-d3f3-4d26-a0a4-dc2686444110",
      "kilometrage": 554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "543c5b6b-d3f3-4d26-a0a4-dc2686444110",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.520528897,
      "longitude": 24.1433852019
    }
  },
  "547f67f4-d509-4da6-b347-ce32e81c319a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "547f67f4-d509-4da6-b347-ce32e81c319a",
      "kilometrage": 552,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "547f67f4-d509-4da6-b347-ce32e81c319a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5344232903,
      "longitude": 24.1382403376
    }
  },
  "54ed4e07-d664-4568-a648-a1cead46e757": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "54ed4e07-d664-4568-a648-a1cead46e757",
      "kilometrage": 559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54ed4e07-d664-4568-a648-a1cead46e757",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5171115105,
      "longitude": 24.2037211061
    }
  },
  "553a34e6-c7c1-49da-93dc-142d7e5ecef4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "553a34e6-c7c1-49da-93dc-142d7e5ecef4",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "553a34e6-c7c1-49da-93dc-142d7e5ecef4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4614970548,
      "longitude": 24.2736043068
    }
  },
  "55c17702-c301-4c47-99ad-6b095ace4226": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "55c17702-c301-4c47-99ad-6b095ace4226",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "55c17702-c301-4c47-99ad-6b095ace4226",
    "image": "perev_left",
    "point": {
      "latitude": 53.6524336391,
      "longitude": 23.8919425638
    }
  },
  "55de505a-4d56-4204-909e-e2d98b0dde58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "55de505a-4d56-4204-909e-e2d98b0dde58",
      "kilometrage": 570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "55de505a-4d56-4204-909e-e2d98b0dde58",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4586517941,
      "longitude": 24.2803321578
    }
  },
  "56c2fa68-bfd6-469a-86ac-0340037b47e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "56c2fa68-bfd6-469a-86ac-0340037b47e8",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56c2fa68-bfd6-469a-86ac-0340037b47e8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7610712129,
      "longitude": 23.8089201441
    }
  },
  "57593174-d53f-4aa7-bd5c-3259503bf7dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "57593174-d53f-4aa7-bd5c-3259503bf7dd",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57593174-d53f-4aa7-bd5c-3259503bf7dd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4608448224,
      "longitude": 24.2747219994
    }
  },
  "578b2b94-7ed1-4e83-9e10-1f29c1c8cebb": {
    "data": {
      "color": false,
      "comment": "щит не обновлен",
      "description": "Якорь не бросать  ",
      "id": "578b2b94-7ed1-4e83-9e10-1f29c1c8cebb",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "578b2b94-7ed1-4e83-9e10-1f29c1c8cebb",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7467283996,
      "longitude": 23.8006892433
    }
  },
  "5860cce8-b491-4dc5-906c-6f6bdbd8c539": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 23",
      "id": "5860cce8-b491-4dc5-906c-6f6bdbd8c539",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5860cce8-b491-4dc5-906c-6f6bdbd8c539",
    "image": "buyo_left",
    "point": {
      "latitude": 53.6725893715,
      "longitude": 23.8251145752
    }
  },
  "5994fcc4-a5e5-4881-b472-72997b5f41ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 27",
      "id": "5994fcc4-a5e5-4881-b472-72997b5f41ff",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5994fcc4-a5e5-4881-b472-72997b5f41ff",
    "image": "perev_right",
    "point": {
      "latitude": 53.7718842431,
      "longitude": 23.8318228401
    }
  },
  "59fd0a1f-3742-498e-8360-182e2fc031e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "59fd0a1f-3742-498e-8360-182e2fc031e6",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59fd0a1f-3742-498e-8360-182e2fc031e6",
    "image": "perev_left",
    "point": {
      "latitude": 53.7818462165,
      "longitude": 23.8393668995
    }
  },
  "5a8cfe5b-b5e1-4fc6-a5c6-bb960a3cd21b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 51",
      "id": "5a8cfe5b-b5e1-4fc6-a5c6-bb960a3cd21b",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a8cfe5b-b5e1-4fc6-a5c6-bb960a3cd21b",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.6532991155,
      "longitude": 23.8808573164
    }
  },
  "5adf7329-044c-4a91-817f-4936ca64a18d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 16",
      "id": "5adf7329-044c-4a91-817f-4936ca64a18d",
      "kilometrage": 545,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5adf7329-044c-4a91-817f-4936ca64a18d",
    "image": "buyo_right",
    "point": {
      "latitude": 53.5163855153,
      "longitude": 24.0634942414
    }
  },
  "5b458e35-3966-4736-a769-95ea03bcc8ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 16",
      "id": "5b458e35-3966-4736-a769-95ea03bcc8ec",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b458e35-3966-4736-a769-95ea03bcc8ec",
    "image": "perev_right",
    "point": {
      "latitude": 53.8266848525,
      "longitude": 23.8311655703
    }
  },
  "5c0b2197-2809-4f00-8918-86f10acfa72e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 570",
      "id": "5c0b2197-2809-4f00-8918-86f10acfa72e",
      "kilometrage": 570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c0b2197-2809-4f00-8918-86f10acfa72e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4557561553,
      "longitude": 24.2836074164
    }
  },
  "5c612991-1ffa-49f8-b467-4dd976d197f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 57",
      "id": "5c612991-1ffa-49f8-b467-4dd976d197f0",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c612991-1ffa-49f8-b467-4dd976d197f0",
    "image": "perev_left",
    "point": {
      "latitude": 53.6436689732,
      "longitude": 23.9576532924
    }
  },
  "5e552ea3-49e4-48f9-b1d4-523387c20999": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 31",
      "id": "5e552ea3-49e4-48f9-b1d4-523387c20999",
      "kilometrage": 559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5e552ea3-49e4-48f9-b1d4-523387c20999",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5204943808,
      "longitude": 24.1990780964
    }
  },
  "5ef21f3b-a9fc-4577-9f58-84beebbe9d85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5ef21f3b-a9fc-4577-9f58-84beebbe9d85",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ef21f3b-a9fc-4577-9f58-84beebbe9d85",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4602174846,
      "longitude": 24.271820927
    }
  },
  "5f67a270-b6b3-4479-997b-237cec45641d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "5f67a270-b6b3-4479-997b-237cec45641d",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f67a270-b6b3-4479-997b-237cec45641d",
    "image": "name_of",
    "point": {
      "latitude": 53.6896719476,
      "longitude": 23.7743727197
    }
  },
  "5f9a014c-440e-463f-b672-4c4190abffdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "5f9a014c-440e-463f-b672-4c4190abffdd",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f9a014c-440e-463f-b672-4c4190abffdd",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8699696266,
      "longitude": 23.6745187566
    }
  },
  "613325df-3ad4-41fe-a5cc-60d787c5b739": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "613325df-3ad4-41fe-a5cc-60d787c5b739",
      "kilometrage": 559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "613325df-3ad4-41fe-a5cc-60d787c5b739",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5199352729,
      "longitude": 24.2046342099
    }
  },
  "61f8a308-a1ed-41c5-b550-d156e9a04e91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение прохода  ",
      "id": "61f8a308-a1ed-41c5-b550-d156e9a04e91",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61f8a308-a1ed-41c5-b550-d156e9a04e91",
    "image": "passage_forbidden",
    "point": {
      "latitude": 53.6449829449,
      "longitude": 23.9687578727
    }
  },
  "6257c1f2-719a-4643-97fc-dd08db484e80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6257c1f2-719a-4643-97fc-dd08db484e80",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6257c1f2-719a-4643-97fc-dd08db484e80",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7211774336,
      "longitude": 23.7763868454
    }
  },
  "628921f3-11ca-4693-b676-03f7f6b2c494": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 16",
      "id": "628921f3-11ca-4693-b676-03f7f6b2c494",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "628921f3-11ca-4693-b676-03f7f6b2c494",
    "image": "buyo_left",
    "point": {
      "latitude": 53.6781887277,
      "longitude": 23.7783539948
    }
  },
  "62db2644-3607-4e36-a141-69c6d94184c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "62db2644-3607-4e36-a141-69c6d94184c4",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62db2644-3607-4e36-a141-69c6d94184c4",
    "image": "perev_left",
    "point": {
      "latitude": 53.4534573787,
      "longitude": 24.2940471968
    }
  },
  "63f85448-efdb-4783-abbc-ba44f08a1260": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "63f85448-efdb-4783-abbc-ba44f08a1260",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63f85448-efdb-4783-abbc-ba44f08a1260",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8642837779,
      "longitude": 23.7511451466
    }
  },
  "64653386-f51b-4abe-a08d-56a5c7fa1bb5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 15",
      "id": "64653386-f51b-4abe-a08d-56a5c7fa1bb5",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64653386-f51b-4abe-a08d-56a5c7fa1bb5",
    "image": "buyo_left",
    "point": {
      "latitude": 53.6869056291,
      "longitude": 23.7740056127
    }
  },
  "6480e24d-4b33-4682-b5da-dba3326497e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 36",
      "id": "6480e24d-4b33-4682-b5da-dba3326497e2",
      "kilometrage": 564,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6480e24d-4b33-4682-b5da-dba3326497e2",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.4871651113,
      "longitude": 24.2489431921
    }
  },
  "64e46689-8b8b-4c98-bb69-eb47d151fd80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 9",
      "id": "64e46689-8b8b-4c98-bb69-eb47d151fd80",
      "kilometrage": 488,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64e46689-8b8b-4c98-bb69-eb47d151fd80",
    "image": "perev_right",
    "point": {
      "latitude": 53.8560573231,
      "longitude": 23.7977124623
    }
  },
  "665ee796-7469-4b23-9d11-7f675e393c9f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "665ee796-7469-4b23-9d11-7f675e393c9f",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "665ee796-7469-4b23-9d11-7f675e393c9f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5337444122,
      "longitude": 24.13901308
    }
  },
  "6677068b-0034-409b-8e07-8e44d0bf6aae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 1",
      "id": "6677068b-0034-409b-8e07-8e44d0bf6aae",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6677068b-0034-409b-8e07-8e44d0bf6aae",
    "image": "perev_right",
    "point": {
      "latitude": 53.8666469499,
      "longitude": 23.7582628048
    }
  },
  "66e54f8c-e2f1-422d-aece-b8f59de38884": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "66e54f8c-e2f1-422d-aece-b8f59de38884",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66e54f8c-e2f1-422d-aece-b8f59de38884",
    "image": "attention",
    "point": {
      "latitude": 53.8781934576,
      "longitude": 23.7505724727
    }
  },
  "66fae8b0-a15b-4b7a-ada8-983afcd9e7bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "66fae8b0-a15b-4b7a-ada8-983afcd9e7bb",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66fae8b0-a15b-4b7a-ada8-983afcd9e7bb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8621027373,
      "longitude": 23.5692803935
    }
  },
  "6701def7-0b7f-4d19-853a-b8c2f68a62e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6701def7-0b7f-4d19-853a-b8c2f68a62e0",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6701def7-0b7f-4d19-853a-b8c2f68a62e0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8697227285,
      "longitude": 23.6751067247
    }
  },
  "686a6799-acef-4abf-a633-f83c8945b611": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 18",
      "id": "686a6799-acef-4abf-a633-f83c8945b611",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "686a6799-acef-4abf-a633-f83c8945b611",
    "image": "perev_left",
    "point": {
      "latitude": 53.8141341126,
      "longitude": 23.83369387
    }
  },
  "6909f8fc-8fb8-470c-b8dd-0ca9b7a65c3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 30",
      "id": "6909f8fc-8fb8-470c-b8dd-0ca9b7a65c3c",
      "kilometrage": 558,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6909f8fc-8fb8-470c-b8dd-0ca9b7a65c3c",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5219180106,
      "longitude": 24.1925723607
    }
  },
  "6911419b-1ecd-4461-9cb6-64163289b3dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6911419b-1ecd-4461-9cb6-64163289b3dd",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6911419b-1ecd-4461-9cb6-64163289b3dd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6704423573,
      "longitude": 23.8341447094
    }
  },
  "69493e34-2e50-4e93-bfa0-1873bf75e390": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "69493e34-2e50-4e93-bfa0-1873bf75e390",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69493e34-2e50-4e93-bfa0-1873bf75e390",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6271935723,
      "longitude": 23.9885804813
    }
  },
  "69757a69-9583-4312-a56a-7b36c7cfa56b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 530",
      "id": "69757a69-9583-4312-a56a-7b36c7cfa56b",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69757a69-9583-4312-a56a-7b36c7cfa56b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.627730243,
      "longitude": 23.9879820728
    }
  },
  "69d1f148-6d2f-4bdd-8ddb-7298497ae0cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "69d1f148-6d2f-4bdd-8ddb-7298497ae0cb",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69d1f148-6d2f-4bdd-8ddb-7298497ae0cb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.652732875,
      "longitude": 23.8853375616
    }
  },
  "6a2e97b9-12c9-42b1-8f9f-f9b25f752f50": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 53",
      "id": "6a2e97b9-12c9-42b1-8f9f-f9b25f752f50",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a2e97b9-12c9-42b1-8f9f-f9b25f752f50",
    "image": "perev_right",
    "point": {
      "latitude": 53.6521589173,
      "longitude": 23.9041251737
    }
  },
  "6ace4fe5-09fd-48f6-9f19-0668e1334e9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6ace4fe5-09fd-48f6-9f19-0668e1334e9e",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ace4fe5-09fd-48f6-9f19-0668e1334e9e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6265857787,
      "longitude": 23.9859677583
    }
  },
  "6b40df34-1265-4e2b-be69-0ab28b1de30e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "6b40df34-1265-4e2b-be69-0ab28b1de30e",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b40df34-1265-4e2b-be69-0ab28b1de30e",
    "image": "buyo_right",
    "point": {
      "latitude": 53.867882548,
      "longitude": 23.6596341956
    }
  },
  "6b819c43-f739-485d-91bb-a1526f26687a": {
    "data": {
      "color": false,
      "comment": "11,6 факт",
      "description": "Соблюдать надводный габарит  ",
      "id": "6b819c43-f739-485d-91bb-a1526f26687a",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b819c43-f739-485d-91bb-a1526f26687a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.863314409,
      "longitude": 23.7219539623
    }
  },
  "6b9d9352-7785-4335-8312-6d6b647f1001": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "6b9d9352-7785-4335-8312-6d6b647f1001",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b9d9352-7785-4335-8312-6d6b647f1001",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6615742063,
      "longitude": 23.8600736346
    }
  },
  "6c8dc040-8e5b-4271-8d6f-28443234ba77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6c8dc040-8e5b-4271-8d6f-28443234ba77",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c8dc040-8e5b-4271-8d6f-28443234ba77",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.669843366,
      "longitude": 23.8357756066
    }
  },
  "6d409b16-de49-41e4-9639-63b5836f280f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "6d409b16-de49-41e4-9639-63b5836f280f",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d409b16-de49-41e4-9639-63b5836f280f",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6697877719,
      "longitude": 23.8347465066
    }
  },
  "6d45fbbf-f3f9-4b6f-bd40-ea5d400a54bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "6d45fbbf-f3f9-4b6f-bd40-ea5d400a54bc",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d45fbbf-f3f9-4b6f-bd40-ea5d400a54bc",
    "image": "way_far",
    "point": {
      "latitude": 53.6782664145,
      "longitude": 23.8101419549
    }
  },
  "6d89fee4-1322-4418-8135-638a840022f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 6",
      "id": "6d89fee4-1322-4418-8135-638a840022f7",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d89fee4-1322-4418-8135-638a840022f7",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5902249101,
      "longitude": 24.0145801889
    }
  },
  "6f737593-9d9b-4cf2-93c2-e5c17c15725e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 6",
      "id": "6f737593-9d9b-4cf2-93c2-e5c17c15725e",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f737593-9d9b-4cf2-93c2-e5c17c15725e",
    "image": "perev_right",
    "point": {
      "latitude": 53.4553664703,
      "longitude": 24.3000916595
    }
  },
  "6fc4a9e5-8131-4df3-9242-31acb39bc88e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "6fc4a9e5-8131-4df3-9242-31acb39bc88e",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fc4a9e5-8131-4df3-9242-31acb39bc88e",
    "image": "stop",
    "point": {
      "latitude": 53.8590746043,
      "longitude": 23.5506498058
    }
  },
  "704d5904-4703-4a93-818a-c07bb4ee2c72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 8",
      "id": "704d5904-4703-4a93-818a-c07bb4ee2c72",
      "kilometrage": 538,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "704d5904-4703-4a93-818a-c07bb4ee2c72",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5716873361,
      "longitude": 24.0376638857
    }
  },
  "70ea5ad4-7828-4cd3-acfb-0977e42ae4a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "70ea5ad4-7828-4cd3-acfb-0977e42ae4a9",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70ea5ad4-7828-4cd3-acfb-0977e42ae4a9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8588251275,
      "longitude": 23.5536354575
    }
  },
  "7126cf25-8c73-4164-8ab7-9caca00f6ff8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "7126cf25-8c73-4164-8ab7-9caca00f6ff8",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7126cf25-8c73-4164-8ab7-9caca00f6ff8",
    "image": "raid_end_left",
    "point": {
      "latitude": 53.6765090723,
      "longitude": 23.8175391322
    }
  },
  "7132b24a-9b30-4b6a-9149-d914dc85494b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 510",
      "id": "7132b24a-9b30-4b6a-9149-d914dc85494b",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7132b24a-9b30-4b6a-9149-d914dc85494b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7053436531,
      "longitude": 23.7763719486
    }
  },
  "71d91d01-e5d2-4a1b-84d5-1c3454d39d8b": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "71d91d01-e5d2-4a1b-84d5-1c3454d39d8b",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "71d91d01-e5d2-4a1b-84d5-1c3454d39d8b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.747864359,
      "longitude": 23.8015788919
    }
  },
  "7258e122-61c7-4732-987b-4ada45346730": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7258e122-61c7-4732-987b-4ada45346730",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7258e122-61c7-4732-987b-4ada45346730",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.664134428,
      "longitude": 23.849947099
    }
  },
  "72c6943d-9361-4b9c-99b6-d4fe81718d67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "72c6943d-9361-4b9c-99b6-d4fe81718d67",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72c6943d-9361-4b9c-99b6-d4fe81718d67",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6630066353,
      "longitude": 23.8503250882
    }
  },
  "7364edbb-2cce-4c6e-90e8-82b3c842d65b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 54",
      "id": "7364edbb-2cce-4c6e-90e8-82b3c842d65b",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7364edbb-2cce-4c6e-90e8-82b3c842d65b",
    "image": "perev_left",
    "point": {
      "latitude": 53.6457582056,
      "longitude": 23.9173497411
    }
  },
  "7390bbb3-e5ac-494b-b5b3-a53ba56afce6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "7390bbb3-e5ac-494b-b5b3-a53ba56afce6",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7390bbb3-e5ac-494b-b5b3-a53ba56afce6",
    "image": "way_far",
    "point": {
      "latitude": 53.7257218345,
      "longitude": 23.7803010205
    }
  },
  "739160f0-ef7b-42ec-98fc-7688f25a392f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 4",
      "id": "739160f0-ef7b-42ec-98fc-7688f25a392f",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "739160f0-ef7b-42ec-98fc-7688f25a392f",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8404687697,
      "longitude": 23.8075280769
    }
  },
  "747340f9-c837-4d12-a4e3-c0b08503f5fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Створный знак правый 2",
      "id": "747340f9-c837-4d12-a4e3-c0b08503f5fd",
      "kilometrage": 550,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "747340f9-c837-4d12-a4e3-c0b08503f5fd",
    "image": "stvor_right",
    "point": {
      "latitude": 53.5487233031,
      "longitude": 24.112885091
    }
  },
  "748dac8d-e8a0-4efe-8edc-44c002170c43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "748dac8d-e8a0-4efe-8edc-44c002170c43",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "748dac8d-e8a0-4efe-8edc-44c002170c43",
    "image": "buyo_right",
    "point": {
      "latitude": 53.868425607,
      "longitude": 23.6621381609
    }
  },
  "74ae0b22-f024-4954-b14a-c6c1f058543f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "74ae0b22-f024-4954-b14a-c6c1f058543f",
      "kilometrage": 538,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74ae0b22-f024-4954-b14a-c6c1f058543f",
    "image": "name_of",
    "point": {
      "latitude": 53.5659088394,
      "longitude": 24.0455587641
    }
  },
  "751b78a4-672b-4927-8731-c605a81a3854": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 555",
      "id": "751b78a4-672b-4927-8731-c605a81a3854",
      "kilometrage": 555,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "751b78a4-672b-4927-8731-c605a81a3854",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5143838906,
      "longitude": 24.149157533
    }
  },
  "75261656-e4ad-4684-b4d3-c449250f20cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "75261656-e4ad-4684-b4d3-c449250f20cc",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75261656-e4ad-4684-b4d3-c449250f20cc",
    "image": "raid_start_left",
    "point": {
      "latitude": 53.6771339324,
      "longitude": 23.8152808704
    }
  },
  "754c9407-bd05-4692-b68a-cc3d67ad6306": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение стоянки судов по ширине, указанной в метрах  ",
      "id": "754c9407-bd05-4692-b68a-cc3d67ad6306",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "754c9407-bd05-4692-b68a-cc3d67ad6306",
    "image": "parking_width",
    "point": {
      "latitude": 53.6743050972,
      "longitude": 23.8230125331
    }
  },
  "7550304e-2c82-4058-b102-b7ba797f816c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7550304e-2c82-4058-b102-b7ba797f816c",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7550304e-2c82-4058-b102-b7ba797f816c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.679195821,
      "longitude": 23.804873455
    }
  },
  "755f9086-71c1-49f3-a066-d6ad9c8efe4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "755f9086-71c1-49f3-a066-d6ad9c8efe4d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "755f9086-71c1-49f3-a066-d6ad9c8efe4d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8688489987,
      "longitude": 23.6807577095
    }
  },
  "7646a1f4-dff0-4e34-9508-d5e0aec99774": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 18",
      "id": "7646a1f4-dff0-4e34-9508-d5e0aec99774",
      "kilometrage": 546,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7646a1f4-dff0-4e34-9508-d5e0aec99774",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5212099489,
      "longitude": 24.0874254929
    }
  },
  "77233769-d97c-4365-88bd-365a004188dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 21",
      "id": "77233769-d97c-4365-88bd-365a004188dc",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77233769-d97c-4365-88bd-365a004188dc",
    "image": "buyo_left",
    "point": {
      "latitude": 53.6757978586,
      "longitude": 23.8224885109
    }
  },
  "7750af7d-9605-472b-9d45-4069dd80f565": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7750af7d-9605-472b-9d45-4069dd80f565",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7750af7d-9605-472b-9d45-4069dd80f565",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8617465117,
      "longitude": 23.5843851875
    }
  },
  "7767c3a9-e545-4a02-aeb3-c74eb20673c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 11",
      "id": "7767c3a9-e545-4a02-aeb3-c74eb20673c3",
      "kilometrage": 541,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7767c3a9-e545-4a02-aeb3-c74eb20673c3",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5442871688,
      "longitude": 24.0508075675
    }
  },
  "77a586a2-2b4e-4509-8058-2f7a97d89463": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 9",
      "id": "77a586a2-2b4e-4509-8058-2f7a97d89463",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77a586a2-2b4e-4509-8058-2f7a97d89463",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8683311266,
      "longitude": 23.6546527943
    }
  },
  "78daf75f-2eeb-4a5d-8d27-6051fd2aceef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "78daf75f-2eeb-4a5d-8d27-6051fd2aceef",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78daf75f-2eeb-4a5d-8d27-6051fd2aceef",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.7262736746,
      "longitude": 23.7802873925
    }
  },
  "7a0c052e-ed72-4756-9920-c2856724a656": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7a0c052e-ed72-4756-9920-c2856724a656",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a0c052e-ed72-4756-9920-c2856724a656",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8604306859,
      "longitude": 23.5680332614
    }
  },
  "7a96ad16-a293-4875-960b-c598895a4bac": {
    "data": {
      "color": false,
      "comment": "стоит 15",
      "description": "Скорость ограничена  ",
      "id": "7a96ad16-a293-4875-960b-c598895a4bac",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a96ad16-a293-4875-960b-c598895a4bac",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8869523782,
      "longitude": 23.7545179224
    }
  },
  "7bb262ee-bbb4-462e-aa70-0f3f45ea07ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 17",
      "id": "7bb262ee-bbb4-462e-aa70-0f3f45ea07ea",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7bb262ee-bbb4-462e-aa70-0f3f45ea07ea",
    "image": "perev_right",
    "point": {
      "latitude": 53.823402088,
      "longitude": 23.8354403129
    }
  },
  "7bb2e214-da1a-483a-ace7-e32b0561edd7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7bb2e214-da1a-483a-ace7-e32b0561edd7",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7bb2e214-da1a-483a-ace7-e32b0561edd7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6532602743,
      "longitude": 23.8903937877
    }
  },
  "7bfabb2e-dd02-4713-bcfc-119d97621183": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "7bfabb2e-dd02-4713-bcfc-119d97621183",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7bfabb2e-dd02-4713-bcfc-119d97621183",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8590347049,
      "longitude": 23.5538154606
    }
  },
  "7c2b4430-0c77-4ec3-b372-1080bea76de7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20",
      "id": "7c2b4430-0c77-4ec3-b372-1080bea76de7",
      "kilometrage": 550,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c2b4430-0c77-4ec3-b372-1080bea76de7",
    "image": "buyo_right",
    "point": {
      "latitude": 53.5498235847,
      "longitude": 24.1210261518
    }
  },
  "7c9c14ba-a8e3-43e4-98df-db0bf83fbd13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 6",
      "id": "7c9c14ba-a8e3-43e4-98df-db0bf83fbd13",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c9c14ba-a8e3-43e4-98df-db0bf83fbd13",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8654048947,
      "longitude": 23.7102822479
    }
  },
  "7cf4e42d-5160-4dec-a276-679cab422468": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7cf4e42d-5160-4dec-a276-679cab422468",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cf4e42d-5160-4dec-a276-679cab422468",
    "image": "attention",
    "point": {
      "latitude": 53.8650868682,
      "longitude": 23.63963788
    }
  },
  "7d1dfe26-0b25-4dee-b8d1-ea5f4d2dd000": {
    "data": {
      "color": false,
      "comment": "факт 5",
      "description": "Скорость ограничена  ",
      "id": "7d1dfe26-0b25-4dee-b8d1-ea5f4d2dd000",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d1dfe26-0b25-4dee-b8d1-ea5f4d2dd000",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8703579083,
      "longitude": 23.6708621038
    }
  },
  "7d5119c9-e79e-47b9-80f9-38bedd8065f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7d5119c9-e79e-47b9-80f9-38bedd8065f3",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d5119c9-e79e-47b9-80f9-38bedd8065f3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8600473206,
      "longitude": 23.5669381079
    }
  },
  "7d6e1c75-c074-4eef-8e8b-a15bde5d6261": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7d6e1c75-c074-4eef-8e8b-a15bde5d6261",
      "kilometrage": 559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d6e1c75-c074-4eef-8e8b-a15bde5d6261",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5204172384,
      "longitude": 24.2035070498
    }
  },
  "7e06c925-4a0d-4e19-bc79-d5261af7c654": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "7e06c925-4a0d-4e19-bc79-d5261af7c654",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e06c925-4a0d-4e19-bc79-d5261af7c654",
    "image": "raid_start_left",
    "point": {
      "latitude": 53.6876982773,
      "longitude": 23.7736823739
    }
  },
  "7eb1c41b-72ce-4e48-b1f3-e4a42d560b61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 6",
      "id": "7eb1c41b-72ce-4e48-b1f3-e4a42d560b61",
      "kilometrage": 486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7eb1c41b-72ce-4e48-b1f3-e4a42d560b61",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.8691624978,
      "longitude": 23.7701071344
    }
  },
  "7f1bec79-9270-4455-9ca1-df576a3e8b93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7f1bec79-9270-4455-9ca1-df576a3e8b93",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f1bec79-9270-4455-9ca1-df576a3e8b93",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6709551425,
      "longitude": 23.8286471444
    }
  },
  "7f2891fd-3da7-4012-810d-910da510621b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "7f2891fd-3da7-4012-810d-910da510621b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f2891fd-3da7-4012-810d-910da510621b",
    "image": "perev_right",
    "point": {
      "latitude": 53.8594627571,
      "longitude": 23.6056437389
    }
  },
  "7f33cbd1-85af-4392-b6a6-2549d58a3dd9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 2",
      "id": "7f33cbd1-85af-4392-b6a6-2549d58a3dd9",
      "kilometrage": 544,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f33cbd1-85af-4392-b6a6-2549d58a3dd9",
    "image": "perev_left",
    "point": {
      "latitude": 53.5139706277,
      "longitude": 24.0596834355
    }
  },
  "7fca92f4-3cf4-4daf-ac40-ef1ef78c5e56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "7fca92f4-3cf4-4daf-ac40-ef1ef78c5e56",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fca92f4-3cf4-4daf-ac40-ef1ef78c5e56",
    "image": "perev_left",
    "point": {
      "latitude": 53.8644314348,
      "longitude": 23.5720607359
    }
  },
  "80c005ff-2c26-4367-a53c-3f9a38a2f69c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ширина судового хода ограничена  ",
      "id": "80c005ff-2c26-4367-a53c-3f9a38a2f69c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80c005ff-2c26-4367-a53c-3f9a38a2f69c",
    "image": "width_limit",
    "point": {
      "latitude": 53.8624428242,
      "longitude": 23.6234900589
    }
  },
  "81879746-44c8-4575-81e2-56a6eb349ebd": {
    "data": {
      "color": false,
      "comment": "факт 20",
      "description": "Скорость ограничена  ",
      "id": "81879746-44c8-4575-81e2-56a6eb349ebd",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81879746-44c8-4575-81e2-56a6eb349ebd",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8698834062,
      "longitude": 23.6723251947
    }
  },
  "83c74af2-ca7f-4559-80ed-62e02cc228d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 8",
      "id": "83c74af2-ca7f-4559-80ed-62e02cc228d9",
      "kilometrage": 488,
      "place": false,
      "size": false,
      "visibility": true
    },
    "id": "83c74af2-ca7f-4559-80ed-62e02cc228d9",
    "image": "perev_right",
    "point": {
      "latitude": 53.8628884009,
      "longitude": 23.7904091835
    }
  },
  "83d896b6-015f-44fe-98b7-57399b1f4059": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ширина судового хода ограничена  ",
      "id": "83d896b6-015f-44fe-98b7-57399b1f4059",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83d896b6-015f-44fe-98b7-57399b1f4059",
    "image": "width_limit",
    "point": {
      "latitude": 53.859012428,
      "longitude": 23.5498099897
    }
  },
  "84176240-eb8d-437a-86ae-7055446d1bfe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "84176240-eb8d-437a-86ae-7055446d1bfe",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84176240-eb8d-437a-86ae-7055446d1bfe",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6614526706,
      "longitude": 23.8588815965
    }
  },
  "84512164-4272-4b2b-9371-e7f5d7be16ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "84512164-4272-4b2b-9371-e7f5d7be16ac",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84512164-4272-4b2b-9371-e7f5d7be16ac",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8685535709,
      "longitude": 23.7575906931
    }
  },
  "8475c42e-9583-4f01-9378-346136009f3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8475c42e-9583-4f01-9378-346136009f3e",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8475c42e-9583-4f01-9378-346136009f3e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6695462461,
      "longitude": 23.8338120455
    }
  },
  "84a1ee42-7cc2-46ab-b1a6-d68d4dcf0bef": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "84a1ee42-7cc2-46ab-b1a6-d68d4dcf0bef",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84a1ee42-7cc2-46ab-b1a6-d68d4dcf0bef",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7495812139,
      "longitude": 23.8033503111
    }
  },
  "84d276cb-8ac5-4077-b443-97957ed3c205": {
    "data": {
      "color": false,
      "comment": "высота 10,5",
      "description": "Соблюдать надводный габарит  ",
      "id": "84d276cb-8ac5-4077-b443-97957ed3c205",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84d276cb-8ac5-4077-b443-97957ed3c205",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6804581511,
      "longitude": 23.8043289311
    }
  },
  "852ea95d-c328-4c35-b08b-033167f2eb39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "852ea95d-c328-4c35-b08b-033167f2eb39",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "852ea95d-c328-4c35-b08b-033167f2eb39",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8630005411,
      "longitude": 23.737912939
    }
  },
  "865e7a07-5a16-40f6-a7ab-82339ef5d745": {
    "data": {
      "color": false,
      "comment": "факт 5,0 нет кромочных знаков и световой сигнализации",
      "description": "Соблюдать надводный габарит  ",
      "id": "865e7a07-5a16-40f6-a7ab-82339ef5d745",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "865e7a07-5a16-40f6-a7ab-82339ef5d745",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8631057244,
      "longitude": 23.7363597174
    }
  },
  "87281c3b-ba49-4361-b932-0d4079ca593c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "87281c3b-ba49-4361-b932-0d4079ca593c",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87281c3b-ba49-4361-b932-0d4079ca593c",
    "image": "axis_romb",
    "point": {
      "latitude": 53.45846045,
      "longitude": 24.2788644344
    }
  },
  "873ae8c4-0c91-49b1-bc83-f69f0cb3de08": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 56",
      "id": "873ae8c4-0c91-49b1-bc83-f69f0cb3de08",
      "kilometrage": 526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "873ae8c4-0c91-49b1-bc83-f69f0cb3de08",
    "image": "perev_right",
    "point": {
      "latitude": 53.6448889637,
      "longitude": 23.9461054676
    }
  },
  "874e7f41-d844-4942-b01a-6c76b1fb2416": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 35",
      "id": "874e7f41-d844-4942-b01a-6c76b1fb2416",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "874e7f41-d844-4942-b01a-6c76b1fb2416",
    "image": "perev_right",
    "point": {
      "latitude": 53.7185189174,
      "longitude": 23.7724491201
    }
  },
  "87904139-513c-47e6-bd69-46fc0519695d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "87904139-513c-47e6-bd69-46fc0519695d",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87904139-513c-47e6-bd69-46fc0519695d",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8136894066,
      "longitude": 23.8349537028
    }
  },
  "884b4695-3f6d-4acb-91f2-76ec0fec0286": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "884b4695-3f6d-4acb-91f2-76ec0fec0286",
      "kilometrage": 532,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "884b4695-3f6d-4acb-91f2-76ec0fec0286",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6164339586,
      "longitude": 24.0006729215
    }
  },
  "89e1d572-d8bd-466a-bca8-c91d5a2d19a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "89e1d572-d8bd-466a-bca8-c91d5a2d19a1",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89e1d572-d8bd-466a-bca8-c91d5a2d19a1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6728982879,
      "longitude": 23.8264826478
    }
  },
  "8a3c190a-5eec-47e4-94c3-dd1386551fad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8a3c190a-5eec-47e4-94c3-dd1386551fad",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a3c190a-5eec-47e4-94c3-dd1386551fad",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8161274206,
      "longitude": 23.8350185335
    }
  },
  "8bfcf911-5c03-4ef2-adfe-fef83cef4355": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8bfcf911-5c03-4ef2-adfe-fef83cef4355",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8bfcf911-5c03-4ef2-adfe-fef83cef4355",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6794139451,
      "longitude": 23.8041420529
    }
  },
  "8c03fd67-1b06-462d-83e3-285fd07769c0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8c03fd67-1b06-462d-83e3-285fd07769c0",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c03fd67-1b06-462d-83e3-285fd07769c0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6533295883,
      "longitude": 23.8857676273
    }
  },
  "8c911823-8389-4811-8d03-32bd4a2cbe29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 34",
      "id": "8c911823-8389-4811-8d03-32bd4a2cbe29",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c911823-8389-4811-8d03-32bd4a2cbe29",
    "image": "perev_right",
    "point": {
      "latitude": 53.7249223215,
      "longitude": 23.7815709157
    }
  },
  "8cb6f9f0-3dc9-4ea9-81f7-0be93cc59893": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "8cb6f9f0-3dc9-4ea9-81f7-0be93cc59893",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cb6f9f0-3dc9-4ea9-81f7-0be93cc59893",
    "image": "attention",
    "point": {
      "latitude": 53.8607373793,
      "longitude": 23.5619034699
    }
  },
  "8cbe20a0-be6b-4c8c-964c-10505d9839f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "8cbe20a0-be6b-4c8c-964c-10505d9839f4",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cbe20a0-be6b-4c8c-964c-10505d9839f4",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8693627733,
      "longitude": 23.5262194098
    }
  },
  "8cedc3c4-cdc2-4c7b-b1dc-e18ec47248e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8cedc3c4-cdc2-4c7b-b1dc-e18ec47248e9",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cedc3c4-cdc2-4c7b-b1dc-e18ec47248e9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8702621334,
      "longitude": 23.6739852694
    }
  },
  "8d98d38d-8768-4838-922c-6e6d034281be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 11",
      "id": "8d98d38d-8768-4838-922c-6e6d034281be",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d98d38d-8768-4838-922c-6e6d034281be",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8672686264,
      "longitude": 23.650470973
    }
  },
  "8da667c9-9635-49ac-b82a-f3c576e0f2a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "8da667c9-9635-49ac-b82a-f3c576e0f2a3",
      "kilometrage": 566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8da667c9-9635-49ac-b82a-f3c576e0f2a3",
    "image": "name_of",
    "point": {
      "latitude": 53.4731174375,
      "longitude": 24.2372492521
    }
  },
  "8db5144a-1c27-4f82-8159-c42c87aa9f2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8db5144a-1c27-4f82-8159-c42c87aa9f2d",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8db5144a-1c27-4f82-8159-c42c87aa9f2d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6634545219,
      "longitude": 23.849270563
    }
  },
  "8e0ffcc6-be9c-4e86-973a-00cb02e9911d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8e0ffcc6-be9c-4e86-973a-00cb02e9911d",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e0ffcc6-be9c-4e86-973a-00cb02e9911d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6659688501,
      "longitude": 23.8456894143
    }
  },
  "8ea37a53-9d89-4dcd-a9a1-3e7bdc9c8d54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "8ea37a53-9d89-4dcd-a9a1-3e7bdc9c8d54",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ea37a53-9d89-4dcd-a9a1-3e7bdc9c8d54",
    "image": "name_of",
    "point": {
      "latitude": 53.7440945943,
      "longitude": 23.7949971906
    }
  },
  "8fb7a422-a156-420a-a333-cb495ea63eef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "8fb7a422-a156-420a-a333-cb495ea63eef",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8fb7a422-a156-420a-a333-cb495ea63eef",
    "image": "bridge_low",
    "point": {
      "latitude": 53.6282428838,
      "longitude": 23.986425478
    }
  },
  "8fe309e8-58fe-45d3-b79d-49bdcc46cfa7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8fe309e8-58fe-45d3-b79d-49bdcc46cfa7",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8fe309e8-58fe-45d3-b79d-49bdcc46cfa7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8615447387,
      "longitude": 23.5697284532
    }
  },
  "90e9e556-3ee0-4a6c-b04a-ef9d0883b51b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 19",
      "id": "90e9e556-3ee0-4a6c-b04a-ef9d0883b51b",
      "kilometrage": 547,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90e9e556-3ee0-4a6c-b04a-ef9d0883b51b",
    "image": "buyo_right",
    "point": {
      "latitude": 53.5278190952,
      "longitude": 24.0936981908
    }
  },
  "9145e141-daf0-4289-a824-987546864d4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44",
      "id": "9145e141-daf0-4289-a824-987546864d4a",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9145e141-daf0-4289-a824-987546864d4a",
    "image": "perev_left",
    "point": {
      "latitude": 53.6763823065,
      "longitude": 23.7836426711
    }
  },
  "92b778b9-a6d5-4b9d-824f-94586d5af4b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 12",
      "id": "92b778b9-a6d5-4b9d-824f-94586d5af4b4",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92b778b9-a6d5-4b9d-824f-94586d5af4b4",
    "image": "buyo_right",
    "point": {
      "latitude": 53.733126862,
      "longitude": 23.782401563
    }
  },
  "92ddf210-7c27-43bf-8703-b657c53a5aec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 38",
      "id": "92ddf210-7c27-43bf-8703-b657c53a5aec",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92ddf210-7c27-43bf-8703-b657c53a5aec",
    "image": "perev_right",
    "point": {
      "latitude": 53.7076077942,
      "longitude": 23.7760180126
    }
  },
  "92e78296-14d0-49c5-a3d1-9e15663dfb2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "92e78296-14d0-49c5-a3d1-9e15663dfb2d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92e78296-14d0-49c5-a3d1-9e15663dfb2d",
    "image": "stop",
    "point": {
      "latitude": 53.8631489305,
      "longitude": 23.6249219547
    }
  },
  "9310f1d4-2bbf-4447-a969-37ddba1404ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 38",
      "id": "9310f1d4-2bbf-4447-a969-37ddba1404ca",
      "kilometrage": 565,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9310f1d4-2bbf-4447-a969-37ddba1404ca",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4828753686,
      "longitude": 24.2492108695
    }
  },
  "93260553-4122-4be0-b7fc-6435f9f6dabe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 505",
      "id": "93260553-4122-4be0-b7fc-6435f9f6dabe",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "93260553-4122-4be0-b7fc-6435f9f6dabe",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7400587557,
      "longitude": 23.7946383206
    }
  },
  "9366432c-afbd-4b86-bb18-84830dd10f0f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9366432c-afbd-4b86-bb18-84830dd10f0f",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9366432c-afbd-4b86-bb18-84830dd10f0f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.4550506578,
      "longitude": 24.3022323896
    }
  },
  "944f9187-dc9d-472d-a906-8c6a4a9a5a9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20",
      "id": "944f9187-dc9d-472d-a906-8c6a4a9a5a9b",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "944f9187-dc9d-472d-a906-8c6a4a9a5a9b",
    "image": "buyo_right",
    "point": {
      "latitude": 53.6771753,
      "longitude": 23.8203225891
    }
  },
  "94501662-c5f3-4469-9c99-f9e775461330": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "94501662-c5f3-4469-9c99-f9e775461330",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94501662-c5f3-4469-9c99-f9e775461330",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6784985651,
      "longitude": 23.8068169958
    }
  },
  "969cf42a-492f-4ea9-b021-54744cf1ebe0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "969cf42a-492f-4ea9-b021-54744cf1ebe0",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "969cf42a-492f-4ea9-b021-54744cf1ebe0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6522184372,
      "longitude": 23.8912218919
    }
  },
  "979bf508-1608-478f-abef-3387d9cb5784": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "979bf508-1608-478f-abef-3387d9cb5784",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "979bf508-1608-478f-abef-3387d9cb5784",
    "image": "perev_left",
    "point": {
      "latitude": 53.8648809102,
      "longitude": 23.6387514555
    }
  },
  "97df4a95-f19e-4e3e-8fbc-5e4b635fe12b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "97df4a95-f19e-4e3e-8fbc-5e4b635fe12b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97df4a95-f19e-4e3e-8fbc-5e4b635fe12b",
    "image": "stop",
    "point": {
      "latitude": 53.8714704253,
      "longitude": 23.7560525034
    }
  },
  "983db282-601e-4c47-aefb-f1f10ad127c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода  ",
      "id": "983db282-601e-4c47-aefb-f1f10ad127c8",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "983db282-601e-4c47-aefb-f1f10ad127c8",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.7791008302,
      "longitude": 23.9096325855
    }
  },
  "98d48b91-f584-4df0-8730-cde1b518f04c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 11",
      "id": "98d48b91-f584-4df0-8730-cde1b518f04c",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98d48b91-f584-4df0-8730-cde1b518f04c",
    "image": "perev_right",
    "point": {
      "latitude": 53.8409459259,
      "longitude": 23.8088273443
    }
  },
  "99139a95-683f-4ba4-ae5f-d0cf293ba1d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 22",
      "id": "99139a95-683f-4ba4-ae5f-d0cf293ba1d5",
      "kilometrage": 552,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99139a95-683f-4ba4-ae5f-d0cf293ba1d5",
    "image": "buyo_left",
    "point": {
      "latitude": 53.5394370661,
      "longitude": 24.1347718194
    }
  },
  "99463520-d578-4de9-ae4a-ad2dd53a131d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "99463520-d578-4de9-ae4a-ad2dd53a131d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99463520-d578-4de9-ae4a-ad2dd53a131d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8609886726,
      "longitude": 23.5848332387
    }
  },
  "99533532-d50c-40db-ac5a-e7d8d5feb947": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "99533532-d50c-40db-ac5a-e7d8d5feb947",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99533532-d50c-40db-ac5a-e7d8d5feb947",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.6852066725,
      "longitude": 23.7739828606
    }
  },
  "99726b46-f7dc-4492-8cc8-e01600207a31": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "99726b46-f7dc-4492-8cc8-e01600207a31",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99726b46-f7dc-4492-8cc8-e01600207a31",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7218057537,
      "longitude": 23.7778181266
    }
  },
  "99f357dd-2cce-4249-a328-7f11e192baa9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "99f357dd-2cce-4249-a328-7f11e192baa9",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99f357dd-2cce-4249-a328-7f11e192baa9",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8629992381,
      "longitude": 23.6255092273
    }
  },
  "9af6b9ab-786c-448e-b9f1-193fb8861989": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 18",
      "id": "9af6b9ab-786c-448e-b9f1-193fb8861989",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9af6b9ab-786c-448e-b9f1-193fb8861989",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8593821336,
      "longitude": 23.5507329245
    }
  },
  "9c134884-05a6-4d3f-9a6d-530cdea87767": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "9c134884-05a6-4d3f-9a6d-530cdea87767",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c134884-05a6-4d3f-9a6d-530cdea87767",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6477074638,
      "longitude": 23.9114438515
    }
  },
  "9d2d9721-f9de-42eb-b1e0-ab996a700cc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 16",
      "id": "9d2d9721-f9de-42eb-b1e0-ab996a700cc7",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d2d9721-f9de-42eb-b1e0-ab996a700cc7",
    "image": "buyo_left",
    "point": {
      "latitude": 53.859743428,
      "longitude": 23.6036375512
    }
  },
  "a01d2d34-e032-4e66-90c6-ad31a0b95547": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "a01d2d34-e032-4e66-90c6-ad31a0b95547",
      "kilometrage": 498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a01d2d34-e032-4e66-90c6-ad31a0b95547",
    "image": "perev_left",
    "point": {
      "latitude": 53.7922886236,
      "longitude": 23.8452139068
    }
  },
  "a09bd3a3-0f52-4b48-a3ae-d76c640e062f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 10",
      "id": "a09bd3a3-0f52-4b48-a3ae-d76c640e062f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a09bd3a3-0f52-4b48-a3ae-d76c640e062f",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8684799504,
      "longitude": 23.6534766729
    }
  },
  "a11ba898-bc00-4663-a491-689f6d14bb44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a11ba898-bc00-4663-a491-689f6d14bb44",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a11ba898-bc00-4663-a491-689f6d14bb44",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6532480592,
      "longitude": 23.8872027862
    }
  },
  "a2333d05-597f-46e9-bd40-08d4893f5e42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "a2333d05-597f-46e9-bd40-08d4893f5e42",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2333d05-597f-46e9-bd40-08d4893f5e42",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 53.6775389295,
      "longitude": 23.8128328935
    }
  },
  "a33ac739-f9d0-43f4-acae-03dd04cd9e59": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 23",
      "id": "a33ac739-f9d0-43f4-acae-03dd04cd9e59",
      "kilometrage": 552,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a33ac739-f9d0-43f4-acae-03dd04cd9e59",
    "image": "buyo_left",
    "point": {
      "latitude": 53.53599289,
      "longitude": 24.137308231
    }
  },
  "a355475a-b0ac-4efc-b0e8-5bf893fca678": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "a355475a-b0ac-4efc-b0e8-5bf893fca678",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a355475a-b0ac-4efc-b0e8-5bf893fca678",
    "image": "stop",
    "point": {
      "latitude": 53.8625677617,
      "longitude": 23.6242041463
    }
  },
  "a3830f01-f837-4df5-b375-171e4a1962e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 2",
      "id": "a3830f01-f837-4df5-b375-171e4a1962e0",
      "kilometrage": 487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3830f01-f837-4df5-b375-171e4a1962e0",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8634011941,
      "longitude": 23.7868876666
    }
  },
  "a3a1142e-c78f-49b4-ab46-4b4955c7afa6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "a3a1142e-c78f-49b4-ab46-4b4955c7afa6",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3a1142e-c78f-49b4-ab46-4b4955c7afa6",
    "image": "way_far",
    "point": {
      "latitude": 53.7175442365,
      "longitude": 23.7668258881
    }
  },
  "a471c254-4a04-4fe4-823b-d48d9f99accb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a471c254-4a04-4fe4-823b-d48d9f99accb",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a471c254-4a04-4fe4-823b-d48d9f99accb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6482861011,
      "longitude": 23.9124435317
    }
  },
  "a7059e4c-9643-4a72-bdde-75c169248d10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 7",
      "id": "a7059e4c-9643-4a72-bdde-75c169248d10",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7059e4c-9643-4a72-bdde-75c169248d10",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8254406211,
      "longitude": 23.8313756732
    }
  },
  "a83c7e70-9756-4a70-9316-8f39b493f662": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 18",
      "id": "a83c7e70-9756-4a70-9316-8f39b493f662",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a83c7e70-9756-4a70-9316-8f39b493f662",
    "image": "buyo_right",
    "point": {
      "latitude": 53.6780643235,
      "longitude": 23.8114891437
    }
  },
  "aa1ff43f-ff95-4688-a17c-fe0effc961f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 1",
      "id": "aa1ff43f-ff95-4688-a17c-fe0effc961f2",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa1ff43f-ff95-4688-a17c-fe0effc961f2",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.6398074569,
      "longitude": 23.9817715301
    }
  },
  "aa342c25-b44c-4475-b90d-e135bf648e41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 46",
      "id": "aa342c25-b44c-4475-b90d-e135bf648e41",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa342c25-b44c-4475-b90d-e135bf648e41",
    "image": "perev_right",
    "point": {
      "latitude": 53.6810376916,
      "longitude": 23.799566404
    }
  },
  "ab35ab63-a2ac-429b-9f85-2ef6713a1118": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "ab35ab63-a2ac-429b-9f85-2ef6713a1118",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab35ab63-a2ac-429b-9f85-2ef6713a1118",
    "image": "buyo_right",
    "point": {
      "latitude": 53.869694137,
      "longitude": 23.664733316
    }
  },
  "ab6db901-3916-4979-99c7-06a8940985b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 545",
      "id": "ab6db901-3916-4979-99c7-06a8940985b1",
      "kilometrage": 545,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab6db901-3916-4979-99c7-06a8940985b1",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5188581961,
      "longitude": 24.0668369481
    }
  },
  "ab8d6fc8-e80a-4031-a1bb-2de840f4a792": {
    "data": {
      "color": false,
      "comment": "щит не обновлен",
      "description": "Якорь не бросать  ",
      "id": "ab8d6fc8-e80a-4031-a1bb-2de840f4a792",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab8d6fc8-e80a-4031-a1bb-2de840f4a792",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7460188815,
      "longitude": 23.8003349741
    }
  },
  "abf57e88-93af-4bd8-854f-eb6c8670a8bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "abf57e88-93af-4bd8-854f-eb6c8670a8bc",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abf57e88-93af-4bd8-854f-eb6c8670a8bc",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6489895136,
      "longitude": 23.9093326452
    }
  },
  "ac045f07-a792-4634-b436-fc8d4170cf80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "ac045f07-a792-4634-b436-fc8d4170cf80",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac045f07-a792-4634-b436-fc8d4170cf80",
    "image": "perev_left",
    "point": {
      "latitude": 53.8438988334,
      "longitude": 23.7998242538
    }
  },
  "acfd9965-d461-4ad9-9091-6ff6856025a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 17",
      "id": "acfd9965-d461-4ad9-9091-6ff6856025a4",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acfd9965-d461-4ad9-9091-6ff6856025a4",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8598450273,
      "longitude": 23.5868638449
    }
  },
  "ad4ba619-5e69-4c1c-876a-181dbfee49ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 19",
      "id": "ad4ba619-5e69-4c1c-876a-181dbfee49ea",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad4ba619-5e69-4c1c-876a-181dbfee49ea",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8575534441,
      "longitude": 23.5364246483
    }
  },
  "adb2519c-7301-49be-9a6b-409cf1efda3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "adb2519c-7301-49be-9a6b-409cf1efda3c",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "adb2519c-7301-49be-9a6b-409cf1efda3c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6654017902,
      "longitude": 23.8467329256
    }
  },
  "ae75c734-734e-4b62-ae93-13c34cb703a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ae75c734-734e-4b62-ae93-13c34cb703a2",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae75c734-734e-4b62-ae93-13c34cb703a2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4572745706,
      "longitude": 24.2785318712
    }
  },
  "b00f4964-fe2d-469c-b543-6cabb0dc3bd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 49",
      "id": "b00f4964-fe2d-469c-b543-6cabb0dc3bd0",
      "kilometrage": 572,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b00f4964-fe2d-469c-b543-6cabb0dc3bd0",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4528911301,
      "longitude": 24.3100652808
    }
  },
  "b02414fe-4753-4566-a351-ed1912546d19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b02414fe-4753-4566-a351-ed1912546d19",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b02414fe-4753-4566-a351-ed1912546d19",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6277636986,
      "longitude": 23.983827406
    }
  },
  "b1d09fa3-a8e6-4a93-ac5d-e83ebc3b576a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "b1d09fa3-a8e6-4a93-ac5d-e83ebc3b576a",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1d09fa3-a8e6-4a93-ac5d-e83ebc3b576a",
    "image": "attention",
    "point": {
      "latitude": 53.8633515442,
      "longitude": 23.746093312
    }
  },
  "b1e65206-b5b7-446e-a749-b56f96a5e04e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 25",
      "id": "b1e65206-b5b7-446e-a749-b56f96a5e04e",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1e65206-b5b7-446e-a749-b56f96a5e04e",
    "image": "perev_right",
    "point": {
      "latitude": 53.7786700596,
      "longitude": 23.8390698502
    }
  },
  "b228cf43-4c46-4901-b11b-f53062ec403a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b228cf43-4c46-4901-b11b-f53062ec403a",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b228cf43-4c46-4901-b11b-f53062ec403a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.678272195,
      "longitude": 23.8076094192
    }
  },
  "b22da0e9-31f6-4569-a132-26ada3969973": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 24",
      "id": "b22da0e9-31f6-4569-a132-26ada3969973",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b22da0e9-31f6-4569-a132-26ada3969973",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5320945919,
      "longitude": 24.1419468917
    }
  },
  "b2a733c4-8fe1-48eb-91e5-ae26091b8297": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b2a733c4-8fe1-48eb-91e5-ae26091b8297",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2a733c4-8fe1-48eb-91e5-ae26091b8297",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8607366085,
      "longitude": 23.5633530021
    }
  },
  "b389dacf-41d0-4dc0-b175-00e4d024c09f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b389dacf-41d0-4dc0-b175-00e4d024c09f",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b389dacf-41d0-4dc0-b175-00e4d024c09f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6443076548,
      "longitude": 23.9233638644
    }
  },
  "b3d4d265-8320-465b-8d44-ff1d787c4baf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 550",
      "id": "b3d4d265-8320-465b-8d44-ff1d787c4baf",
      "kilometrage": 550,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3d4d265-8320-465b-8d44-ff1d787c4baf",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5471940051,
      "longitude": 24.1168659919
    }
  },
  "b4c1f096-8feb-47ed-90a7-5e63559a0084": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b4c1f096-8feb-47ed-90a7-5e63559a0084",
      "kilometrage": 559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4c1f096-8feb-47ed-90a7-5e63559a0084",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5174664971,
      "longitude": 24.2022752283
    }
  },
  "b552b33a-3df3-470b-bbfa-193d8f6b75be": {
    "data": {
      "color": false,
      "comment": "факт 4,9",
      "description": "Соблюдать надводный габарит  ",
      "id": "b552b33a-3df3-470b-bbfa-193d8f6b75be",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b552b33a-3df3-470b-bbfa-193d8f6b75be",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.869960872,
      "longitude": 23.6735747177
    }
  },
  "b5a69db5-7f17-47f8-8bc8-a0518bea616a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b5a69db5-7f17-47f8-8bc8-a0518bea616a",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5a69db5-7f17-47f8-8bc8-a0518bea616a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6691694197,
      "longitude": 23.8351198981
    }
  },
  "b5d9acf6-3e09-4827-901b-069dd6393efe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 7",
      "id": "b5d9acf6-3e09-4827-901b-069dd6393efe",
      "kilometrage": 572,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5d9acf6-3e09-4827-901b-069dd6393efe",
    "image": "perev_right",
    "point": {
      "latitude": 53.4531736922,
      "longitude": 24.3122883982
    }
  },
  "b7452840-01fb-4fac-a8e6-c0e12d5487df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 25",
      "id": "b7452840-01fb-4fac-a8e6-c0e12d5487df",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7452840-01fb-4fac-a8e6-c0e12d5487df",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5287547656,
      "longitude": 24.1414236599
    }
  },
  "b836260a-9b12-4a8b-9bf8-808098a45184": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1",
      "id": "b836260a-9b12-4a8b-9bf8-808098a45184",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b836260a-9b12-4a8b-9bf8-808098a45184",
    "image": "buyo_right",
    "point": {
      "latitude": 53.862579172,
      "longitude": 23.7448899727
    }
  },
  "b8c4de7c-af9d-4cb2-a787-ffad4b7d231e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "b8c4de7c-af9d-4cb2-a787-ffad4b7d231e",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8c4de7c-af9d-4cb2-a787-ffad4b7d231e",
    "image": "name_of",
    "point": {
      "latitude": 53.6774974071,
      "longitude": 23.8115200237
    }
  },
  "b972fc03-01c1-4b92-90e6-89c404455802": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b972fc03-01c1-4b92-90e6-89c404455802",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b972fc03-01c1-4b92-90e6-89c404455802",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.812272648,
      "longitude": 23.8347811823
    }
  },
  "b9e823ca-8926-4245-81b1-b03e7834fbfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "b9e823ca-8926-4245-81b1-b03e7834fbfa",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9e823ca-8926-4245-81b1-b03e7834fbfa",
    "image": "name_of",
    "point": {
      "latitude": 53.8060367249,
      "longitude": 23.8556361534
    }
  },
  "ba3edc2e-ebdc-47da-8b31-03bf94e9e1a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ba3edc2e-ebdc-47da-8b31-03bf94e9e1a7",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba3edc2e-ebdc-47da-8b31-03bf94e9e1a7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8635104895,
      "longitude": 23.7365614474
    }
  },
  "bab26e57-4708-4172-8ea8-cae3e18e45a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 560",
      "id": "bab26e57-4708-4172-8ea8-cae3e18e45a1",
      "kilometrage": 560,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bab26e57-4708-4172-8ea8-cae3e18e45a1",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5129258666,
      "longitude": 24.2098946686
    }
  },
  "bb4ffc0b-ff06-4107-8349-5b158c7bdab4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "bb4ffc0b-ff06-4107-8349-5b158c7bdab4",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb4ffc0b-ff06-4107-8349-5b158c7bdab4",
    "image": "attention",
    "point": {
      "latitude": 53.8597695283,
      "longitude": 23.5573397896
    }
  },
  "bb78eb15-10e5-46fb-8a7d-d48e0463114d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 39",
      "id": "bb78eb15-10e5-46fb-8a7d-d48e0463114d",
      "kilometrage": 566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb78eb15-10e5-46fb-8a7d-d48e0463114d",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.4759185368,
      "longitude": 24.237872006
    }
  },
  "bca3c168-8cf6-4b7e-a182-db47af89b290": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 46",
      "id": "bca3c168-8cf6-4b7e-a182-db47af89b290",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bca3c168-8cf6-4b7e-a182-db47af89b290",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4584021047,
      "longitude": 24.2777029092
    }
  },
  "bca7bb3c-72d1-4cb1-8b93-4c76b2f9cba9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "bca7bb3c-72d1-4cb1-8b93-4c76b2f9cba9",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bca7bb3c-72d1-4cb1-8b93-4c76b2f9cba9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6724786684,
      "longitude": 23.8275195157
    }
  },
  "bcaf49a9-8248-455e-bd07-6a8e23d1298e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "bcaf49a9-8248-455e-bd07-6a8e23d1298e",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcaf49a9-8248-455e-bd07-6a8e23d1298e",
    "image": "name_of",
    "point": {
      "latitude": 53.679804423,
      "longitude": 23.7742323684
    }
  },
  "bee87779-258b-493f-af7d-613d4abb165e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "bee87779-258b-493f-af7d-613d4abb165e",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bee87779-258b-493f-af7d-613d4abb165e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.671697054,
      "longitude": 23.8266177324
    }
  },
  "bf782ec8-6a07-4fa7-bc61-2f9028074182": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 20",
      "id": "bf782ec8-6a07-4fa7-bc61-2f9028074182",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf782ec8-6a07-4fa7-bc61-2f9028074182",
    "image": "perev_right",
    "point": {
      "latitude": 53.8099147308,
      "longitude": 23.8465844678
    }
  },
  "bf80935e-fdcf-476c-b436-79fcfc83b672": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 33",
      "id": "bf80935e-fdcf-476c-b436-79fcfc83b672",
      "kilometrage": 561,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf80935e-fdcf-476c-b436-79fcfc83b672",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5056192588,
      "longitude": 24.2247810299
    }
  },
  "bfbfc41a-abee-4062-9456-532430641f45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "bfbfc41a-abee-4062-9456-532430641f45",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfbfc41a-abee-4062-9456-532430641f45",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6448505141,
      "longitude": 23.9222783196
    }
  },
  "c1456552-9da0-4366-8daf-4c369c6593d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ширина судового хода ограничена  ",
      "id": "c1456552-9da0-4366-8daf-4c369c6593d7",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1456552-9da0-4366-8daf-4c369c6593d7",
    "image": "width_limit",
    "point": {
      "latitude": 53.8629121909,
      "longitude": 23.624285177
    }
  },
  "c1d04be3-8869-4245-9d2d-1eb195e6f1b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c1d04be3-8869-4245-9d2d-1eb195e6f1b1",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1d04be3-8869-4245-9d2d-1eb195e6f1b1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6623043239,
      "longitude": 23.8588538661
    }
  },
  "c1ffc28f-127c-494c-aa77-10fb6408697c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "c1ffc28f-127c-494c-aa77-10fb6408697c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1ffc28f-127c-494c-aa77-10fb6408697c",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8642844311,
      "longitude": 23.7262659164
    }
  },
  "c2ea8787-71bb-48c7-a351-f4d4a004f417": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 16",
      "id": "c2ea8787-71bb-48c7-a351-f4d4a004f417",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2ea8787-71bb-48c7-a351-f4d4a004f417",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8640864857,
      "longitude": 23.5761527053
    }
  },
  "c3104527-118a-4e0b-a3ef-a10246d7eba9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c3104527-118a-4e0b-a3ef-a10246d7eba9",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3104527-118a-4e0b-a3ef-a10246d7eba9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8694244925,
      "longitude": 23.6800682255
    }
  },
  "c477ac88-bbcc-4cfc-8ecf-35fd7a7dc3b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c477ac88-bbcc-4cfc-8ecf-35fd7a7dc3b4",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c477ac88-bbcc-4cfc-8ecf-35fd7a7dc3b4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6496417174,
      "longitude": 23.9105110385
    }
  },
  "c4e35da7-9582-4853-acd3-b5fd66d6838d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "c4e35da7-9582-4853-acd3-b5fd66d6838d",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4e35da7-9582-4853-acd3-b5fd66d6838d",
    "image": "way_far",
    "point": {
      "latitude": 53.7722180518,
      "longitude": 23.8326624499
    }
  },
  "c5148d6c-8d91-4a0d-8e26-3050c47799af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 11",
      "id": "c5148d6c-8d91-4a0d-8e26-3050c47799af",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5148d6c-8d91-4a0d-8e26-3050c47799af",
    "image": "buyo_left",
    "point": {
      "latitude": 53.7545709891,
      "longitude": 23.8047445915
    }
  },
  "c5e361ee-1298-4e0a-adb7-9b31e8c8760d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c5e361ee-1298-4e0a-adb7-9b31e8c8760d",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5e361ee-1298-4e0a-adb7-9b31e8c8760d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8598920223,
      "longitude": 23.5645890858
    }
  },
  "c6099296-43e0-4a0a-9a44-44f6c12375a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 6",
      "id": "c6099296-43e0-4a0a-9a44-44f6c12375a9",
      "kilometrage": 492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6099296-43e0-4a0a-9a44-44f6c12375a9",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8300326391,
      "longitude": 23.8234294794
    }
  },
  "c680e49e-d719-4a58-bfb9-0d69a746e4f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 58",
      "id": "c680e49e-d719-4a58-bfb9-0d69a746e4f2",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c680e49e-d719-4a58-bfb9-0d69a746e4f2",
    "image": "perev_right",
    "point": {
      "latitude": 53.645092536,
      "longitude": 23.9652111943
    }
  },
  "c960b149-0b8a-466a-aa91-c48c132f3ec8": {
    "data": {
      "color": false,
      "comment": "знаков нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "c960b149-0b8a-466a-aa91-c48c132f3ec8",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c960b149-0b8a-466a-aa91-c48c132f3ec8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7208139747,
      "longitude": 23.7779583502
    }
  },
  "c9696f41-dfc9-474f-bf77-b05b3428f24e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 30",
      "id": "c9696f41-dfc9-474f-bf77-b05b3428f24e",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9696f41-dfc9-474f-bf77-b05b3428f24e",
    "image": "perev_right",
    "point": {
      "latitude": 53.7582052153,
      "longitude": 23.8086534923
    }
  },
  "c9eabb35-9b61-489e-84fb-7cb2caf50d3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 50",
      "id": "c9eabb35-9b61-489e-84fb-7cb2caf50d3c",
      "kilometrage": 572,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9eabb35-9b61-489e-84fb-7cb2caf50d3c",
    "image": "buyo_right",
    "point": {
      "latitude": 53.4484223089,
      "longitude": 24.3189413076
    }
  },
  "ca1ac821-3884-44fa-bfe3-428cfb20cea3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "ca1ac821-3884-44fa-bfe3-428cfb20cea3",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca1ac821-3884-44fa-bfe3-428cfb20cea3",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6528366088,
      "longitude": 23.886648688
    }
  },
  "cb3e4331-6e84-4626-aad2-2a4359e3cda3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "cb3e4331-6e84-4626-aad2-2a4359e3cda3",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb3e4331-6e84-4626-aad2-2a4359e3cda3",
    "image": "name_of",
    "point": {
      "latitude": 53.8069289513,
      "longitude": 23.8542215875
    }
  },
  "cbc80e95-ac9a-45ca-8f13-67c19b96fa2e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 490",
      "id": "cbc80e95-ac9a-45ca-8f13-67c19b96fa2e",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbc80e95-ac9a-45ca-8f13-67c19b96fa2e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8425488929,
      "longitude": 23.8017921347
    }
  },
  "cce2138b-4051-406e-8eb9-242727a079f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 42",
      "id": "cce2138b-4051-406e-8eb9-242727a079f2",
      "kilometrage": 567,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cce2138b-4051-406e-8eb9-242727a079f2",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4720864362,
      "longitude": 24.2478402171
    }
  },
  "cd745ef8-ec11-4b9e-b6be-77bd11d36889": {
    "data": {
      "color": false,
      "comment": "видимость плохая",
      "description": "Якорь не бросать  ",
      "id": "cd745ef8-ec11-4b9e-b6be-77bd11d36889",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd745ef8-ec11-4b9e-b6be-77bd11d36889",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5276704626,
      "longitude": 24.1427887476
    }
  },
  "ce12cb8e-23f2-4c7a-aa22-e84e91d90715": {
    "data": {
      "color": false,
      "comment": "всплыл",
      "description": "Левый буй 10",
      "id": "ce12cb8e-23f2-4c7a-aa22-e84e91d90715",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce12cb8e-23f2-4c7a-aa22-e84e91d90715",
    "image": "buyo_left",
    "point": {
      "latitude": 53.7719416981,
      "longitude": 23.8289170028
    }
  },
  "cfbf7c50-dc12-4cbd-9de3-bd8607de7461": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "cfbf7c50-dc12-4cbd-9de3-bd8607de7461",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cfbf7c50-dc12-4cbd-9de3-bd8607de7461",
    "image": "raid_start_left",
    "point": {
      "latitude": 53.6787380658,
      "longitude": 23.7795590438
    }
  },
  "d166cf5a-3665-46af-98ec-1dd01400ad33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 11",
      "id": "d166cf5a-3665-46af-98ec-1dd01400ad33",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d166cf5a-3665-46af-98ec-1dd01400ad33",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8652100628,
      "longitude": 23.6406875377
    }
  },
  "d1c6d486-7935-4bb5-b343-a78befec932f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 2",
      "id": "d1c6d486-7935-4bb5-b343-a78befec932f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1c6d486-7935-4bb5-b343-a78befec932f",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8671973758,
      "longitude": 23.6922227548
    }
  },
  "d37c6938-28d2-4f21-834d-738e498858e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "d37c6938-28d2-4f21-834d-738e498858e0",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d37c6938-28d2-4f21-834d-738e498858e0",
    "image": "bridge_low",
    "point": {
      "latitude": 53.6699367973,
      "longitude": 23.834447041
    }
  },
  "d4a00d36-ea18-44fc-96d9-3baa5704a502": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 7",
      "id": "d4a00d36-ea18-44fc-96d9-3baa5704a502",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4a00d36-ea18-44fc-96d9-3baa5704a502",
    "image": "perev_right",
    "point": {
      "latitude": 53.8646776006,
      "longitude": 23.6448997607
    }
  },
  "d4af383f-ad1a-4bf2-bddd-dfa65d29ebe5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 21",
      "id": "d4af383f-ad1a-4bf2-bddd-dfa65d29ebe5",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4af383f-ad1a-4bf2-bddd-dfa65d29ebe5",
    "image": "perev_right",
    "point": {
      "latitude": 53.8602672,
      "longitude": 23.5689049238
    }
  },
  "d4b2039d-8ad0-4b69-9691-fc046fee95b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d4b2039d-8ad0-4b69-9691-fc046fee95b4",
      "kilometrage": 553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4b2039d-8ad0-4b69-9691-fc046fee95b4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5343246856,
      "longitude": 24.1423432979
    }
  },
  "d5f3e115-0853-4258-af45-aea0822e0628": {
    "data": {
      "color": false,
      "comment": "поправить щит (наклонен)",
      "description": "Перевальный знак левый 15",
      "id": "d5f3e115-0853-4258-af45-aea0822e0628",
      "kilometrage": 492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5f3e115-0853-4258-af45-aea0822e0628",
    "image": "perev_left",
    "point": {
      "latitude": 53.8281993162,
      "longitude": 23.8250845995
    }
  },
  "d63dfcd0-598c-4626-9122-8a21710239af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 14",
      "id": "d63dfcd0-598c-4626-9122-8a21710239af",
      "kilometrage": 543,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d63dfcd0-598c-4626-9122-8a21710239af",
    "image": "buyo_right",
    "point": {
      "latitude": 53.5205678576,
      "longitude": 24.051269945
    }
  },
  "d64b3456-aa40-4d0c-9aee-2e0afe316e5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 47",
      "id": "d64b3456-aa40-4d0c-9aee-2e0afe316e5c",
      "kilometrage": 571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d64b3456-aa40-4d0c-9aee-2e0afe316e5c",
    "image": "buyo_right",
    "point": {
      "latitude": 53.454731276,
      "longitude": 24.2940817288
    }
  },
  "d9075dfa-2ced-417d-8db8-2071cf7d5065": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "d9075dfa-2ced-417d-8db8-2071cf7d5065",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9075dfa-2ced-417d-8db8-2071cf7d5065",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.741968945,
      "longitude": 23.7963993164
    }
  },
  "d977afce-4265-4e6b-823a-55bb466fc663": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ширина судового хода ограничена  ",
      "id": "d977afce-4265-4e6b-823a-55bb466fc663",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d977afce-4265-4e6b-823a-55bb466fc663",
    "image": "width_limit",
    "point": {
      "latitude": 53.8685655656,
      "longitude": 23.7586861145
    }
  },
  "da186578-826e-4264-96e7-2d8e700227e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "da186578-826e-4264-96e7-2d8e700227e8",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da186578-826e-4264-96e7-2d8e700227e8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6793640126,
      "longitude": 23.8071758526
    }
  },
  "da962a57-3bfb-4f13-a5ff-300b9b9fc0ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "da962a57-3bfb-4f13-a5ff-300b9b9fc0ee",
      "kilometrage": 486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da962a57-3bfb-4f13-a5ff-300b9b9fc0ee",
    "image": "perev_left",
    "point": {
      "latitude": 53.8670867513,
      "longitude": 23.7746337563
    }
  },
  "dbda8f95-ea9b-4547-b27b-6e361700cb2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 28",
      "id": "dbda8f95-ea9b-4547-b27b-6e361700cb2f",
      "kilometrage": 557,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbda8f95-ea9b-4547-b27b-6e361700cb2f",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5139927597,
      "longitude": 24.174234698
    }
  },
  "dc065995-e231-44b5-929e-7aa3539083d9": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "dc065995-e231-44b5-929e-7aa3539083d9",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc065995-e231-44b5-929e-7aa3539083d9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8127996824,
      "longitude": 23.8366402601
    }
  },
  "dc7cf4df-ab26-4126-9fb5-f6aaaa0ae829": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 535",
      "id": "dc7cf4df-ab26-4126-9fb5-f6aaaa0ae829",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc7cf4df-ab26-4126-9fb5-f6aaaa0ae829",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5895999421,
      "longitude": 24.0163822319
    }
  },
  "dc96ff34-c845-429c-8df5-0a6e2adf6166": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "dc96ff34-c845-429c-8df5-0a6e2adf6166",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc96ff34-c845-429c-8df5-0a6e2adf6166",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8591642928,
      "longitude": 23.5543519781
    }
  },
  "dcb6b00b-5fc3-42fa-a597-c9d8f8f01eab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "dcb6b00b-5fc3-42fa-a597-c9d8f8f01eab",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcb6b00b-5fc3-42fa-a597-c9d8f8f01eab",
    "image": "speed_limit",
    "point": {
      "latitude": 53.8615928103,
      "longitude": 23.6207501826
    }
  },
  "dceb9705-91fb-44dc-9fca-72a235e8d56d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "dceb9705-91fb-44dc-9fca-72a235e8d56d",
      "kilometrage": 566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dceb9705-91fb-44dc-9fca-72a235e8d56d",
    "image": "perev_left",
    "point": {
      "latitude": 53.4721065074,
      "longitude": 24.2385105815
    }
  },
  "dd035838-c8db-4de1-8b64-e56bb29cdb4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 17",
      "id": "dd035838-c8db-4de1-8b64-e56bb29cdb4d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd035838-c8db-4de1-8b64-e56bb29cdb4d",
    "image": "perev_right",
    "point": {
      "latitude": 53.8578491223,
      "longitude": 23.5931136111
    }
  },
  "dd0a3348-17fa-4de7-9952-3f4732e6b5d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "dd0a3348-17fa-4de7-9952-3f4732e6b5d0",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd0a3348-17fa-4de7-9952-3f4732e6b5d0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6722204126,
      "longitude": 23.825547035
    }
  },
  "dd16c210-f75b-4e52-94de-edbae770a614": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "dd16c210-f75b-4e52-94de-edbae770a614",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd16c210-f75b-4e52-94de-edbae770a614",
    "image": "way_far",
    "point": {
      "latitude": 53.7066216432,
      "longitude": 23.7766313816
    }
  },
  "de75fa14-ce5d-4568-bd6a-07b5d738ed7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 41",
      "id": "de75fa14-ce5d-4568-bd6a-07b5d738ed7a",
      "kilometrage": 511,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de75fa14-ce5d-4568-bd6a-07b5d738ed7a",
    "image": "perev_right",
    "point": {
      "latitude": 53.6942143015,
      "longitude": 23.7770967645
    }
  },
  "df739bd1-164b-400e-8470-400599de1521": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "df739bd1-164b-400e-8470-400599de1521",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df739bd1-164b-400e-8470-400599de1521",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.7170043103,
      "longitude": 23.7666001924
    }
  },
  "df9efe44-ee65-44d1-a0a0-e5ee386f1d8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "df9efe44-ee65-44d1-a0a0-e5ee386f1d8c",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df9efe44-ee65-44d1-a0a0-e5ee386f1d8c",
    "image": "bridge_low",
    "point": {
      "latitude": 53.6791861013,
      "longitude": 23.8057280956
    }
  },
  "e06d4654-484e-424b-a607-4c67dec613a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 13",
      "id": "e06d4654-484e-424b-a607-4c67dec613a1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e06d4654-484e-424b-a607-4c67dec613a1",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8607892525,
      "longitude": 23.612849885
    }
  },
  "e0c33295-e92e-4c18-839f-913b741127e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "e0c33295-e92e-4c18-839f-913b741127e5",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0c33295-e92e-4c18-839f-913b741127e5",
    "image": "bridge_low",
    "point": {
      "latitude": 53.6616825147,
      "longitude": 23.8594890932
    }
  },
  "e0fa655c-aeb2-47f3-b502-8f589de15cf5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 9",
      "id": "e0fa655c-aeb2-47f3-b502-8f589de15cf5",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0fa655c-aeb2-47f3-b502-8f589de15cf5",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8702758849,
      "longitude": 23.6661722097
    }
  },
  "e10dedab-14d2-40cd-8ec2-2461930624c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "e10dedab-14d2-40cd-8ec2-2461930624c1",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e10dedab-14d2-40cd-8ec2-2461930624c1",
    "image": "perev_left",
    "point": {
      "latitude": 53.7008608438,
      "longitude": 23.7730714192
    }
  },
  "e1199b7c-3655-447d-bc71-0cf70b895bc9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "e1199b7c-3655-447d-bc71-0cf70b895bc9",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1199b7c-3655-447d-bc71-0cf70b895bc9",
    "image": "axis_romb",
    "point": {
      "latitude": 53.6273551849,
      "longitude": 23.9857366531
    }
  },
  "e1c66f8e-e616-40ff-a467-d2b62daa22b7": {
    "data": {
      "color": false,
      "comment": "5,79 факт",
      "description": "Ширина судового хода ограничена  ",
      "id": "e1c66f8e-e616-40ff-a467-d2b62daa22b7",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1c66f8e-e616-40ff-a467-d2b62daa22b7",
    "image": "width_limit",
    "point": {
      "latitude": 53.8719051355,
      "longitude": 23.7557152597
    }
  },
  "e253dc2f-9685-4ded-be5a-39f3cd727d01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 15",
      "id": "e253dc2f-9685-4ded-be5a-39f3cd727d01",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e253dc2f-9685-4ded-be5a-39f3cd727d01",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8628478467,
      "longitude": 23.6224297683
    }
  },
  "e3046b06-a578-4501-afda-a0999b52d44b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "e3046b06-a578-4501-afda-a0999b52d44b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3046b06-a578-4501-afda-a0999b52d44b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8680914255,
      "longitude": 23.6517452029
    }
  },
  "e38ca3d6-0439-42e4-96c3-05950bd0335c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e38ca3d6-0439-42e4-96c3-05950bd0335c",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e38ca3d6-0439-42e4-96c3-05950bd0335c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8695130753,
      "longitude": 23.6792238767
    }
  },
  "e4334b07-8736-47b1-91fc-5b9faceaa9bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 22",
      "id": "e4334b07-8736-47b1-91fc-5b9faceaa9bb",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4334b07-8736-47b1-91fc-5b9faceaa9bb",
    "image": "perev_right",
    "point": {
      "latitude": 53.7968237933,
      "longitude": 23.8524309861
    }
  },
  "e49f0053-f60b-4540-ae53-fad1a2faea61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "e49f0053-f60b-4540-ae53-fad1a2faea61",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e49f0053-f60b-4540-ae53-fad1a2faea61",
    "image": "way_far",
    "point": {
      "latitude": 53.7661293803,
      "longitude": 23.8110424336
    }
  },
  "e61f4f5f-1467-468c-ac4f-7f254f0dcbb4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e61f4f5f-1467-468c-ac4f-7f254f0dcbb4",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e61f4f5f-1467-468c-ac4f-7f254f0dcbb4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4578835344,
      "longitude": 24.2772896312
    }
  },
  "e65837c5-4ca7-4b85-bf1f-bc787fc57cf1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 9",
      "id": "e65837c5-4ca7-4b85-bf1f-bc787fc57cf1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e65837c5-4ca7-4b85-bf1f-bc787fc57cf1",
    "image": "perev_left",
    "point": {
      "latitude": 53.8634298245,
      "longitude": 23.6327237902
    }
  },
  "e67d602b-3df1-4094-a6ef-7e3e5596cacb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 41",
      "id": "e67d602b-3df1-4094-a6ef-7e3e5596cacb",
      "kilometrage": 566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e67d602b-3df1-4094-a6ef-7e3e5596cacb",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4719641877,
      "longitude": 24.2405820834
    }
  },
  "e68e8342-3e0b-41a2-98a1-00ca1e325006": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e68e8342-3e0b-41a2-98a1-00ca1e325006",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e68e8342-3e0b-41a2-98a1-00ca1e325006",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4608900827,
      "longitude": 24.2709091222
    }
  },
  "e7037d22-1a76-4995-ac86-75bc758b125e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый белый 47",
      "id": "e7037d22-1a76-4995-ac86-75bc758b125e",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7037d22-1a76-4995-ac86-75bc758b125e",
    "image": "perev_right",
    "point": {
      "latitude": 53.6811659083,
      "longitude": 23.8011690115
    }
  },
  "e70b316e-004e-4eb2-952a-e97f9a0374c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 55",
      "id": "e70b316e-004e-4eb2-952a-e97f9a0374c7",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e70b316e-004e-4eb2-952a-e97f9a0374c7",
    "image": "perev_left",
    "point": {
      "latitude": 53.6431788531,
      "longitude": 23.9245046068
    }
  },
  "e715dba4-da48-4e2e-a34f-f98de0c4ff76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 8",
      "id": "e715dba4-da48-4e2e-a34f-f98de0c4ff76",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e715dba4-da48-4e2e-a34f-f98de0c4ff76",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8693121169,
      "longitude": 23.6808306041
    }
  },
  "e7712528-7ff0-4f04-a331-b3b0031bb89f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 6",
      "id": "e7712528-7ff0-4f04-a331-b3b0031bb89f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7712528-7ff0-4f04-a331-b3b0031bb89f",
    "image": "perev_left",
    "point": {
      "latitude": 53.870288619,
      "longitude": 23.6652412918
    }
  },
  "e7a1d0df-042c-4923-b97c-d7886c6ce3cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "e7a1d0df-042c-4923-b97c-d7886c6ce3cb",
      "kilometrage": 541,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7a1d0df-042c-4923-b97c-d7886c6ce3cb",
    "image": "perev_left",
    "point": {
      "latitude": 53.5437105178,
      "longitude": 24.0485553217
    }
  },
  "e7ca7ad3-bfe9-41f4-9991-89135fa6bd7b": {
    "data": {
      "color": false,
      "comment": "факт 5,0 кромочные отсутствуют и нет световой сигнализации",
      "description": "Соблюдать надводный габарит  ",
      "id": "e7ca7ad3-bfe9-41f4-9991-89135fa6bd7b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7ca7ad3-bfe9-41f4-9991-89135fa6bd7b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8634779712,
      "longitude": 23.7379883187
    }
  },
  "e7f202fe-cdff-4ba6-a15b-0a824ce16a49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e7f202fe-cdff-4ba6-a15b-0a824ce16a49",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7f202fe-cdff-4ba6-a15b-0a824ce16a49",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6636860098,
      "longitude": 23.8509816518
    }
  },
  "e82e4e60-dd92-4dc2-b879-03866ad24fd9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "e82e4e60-dd92-4dc2-b879-03866ad24fd9",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e82e4e60-dd92-4dc2-b879-03866ad24fd9",
    "image": "raid_end_left",
    "point": {
      "latitude": 53.6815240495,
      "longitude": 23.7736776553
    }
  },
  "e86a5479-0de4-4a0d-b923-da07e43fe3be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 4",
      "id": "e86a5479-0de4-4a0d-b923-da07e43fe3be",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e86a5479-0de4-4a0d-b923-da07e43fe3be",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8632287126,
      "longitude": 23.7402713223
    }
  },
  "e8742505-28af-40a7-b87b-c588bcb13ab4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение всякого обгона  ",
      "id": "e8742505-28af-40a7-b87b-c588bcb13ab4",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8742505-28af-40a7-b87b-c588bcb13ab4",
    "image": "every_overtaking",
    "point": {
      "latitude": 53.67739068,
      "longitude": 23.7926985865
    }
  },
  "e8b40822-37fd-4dfc-8c3d-26478d68b621": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "e8b40822-37fd-4dfc-8c3d-26478d68b621",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8b40822-37fd-4dfc-8c3d-26478d68b621",
    "image": "perev_right",
    "point": {
      "latitude": 53.8637963931,
      "longitude": 23.576377855
    }
  },
  "e9349fa9-da84-4d41-bee8-f8bfb037ec43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 45",
      "id": "e9349fa9-da84-4d41-bee8-f8bfb037ec43",
      "kilometrage": 569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9349fa9-da84-4d41-bee8-f8bfb037ec43",
    "image": "buyo_left",
    "point": {
      "latitude": 53.4627994406,
      "longitude": 24.2695827001
    }
  },
  "e949522b-61e3-4262-bad8-c0ec1ab576ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 18",
      "id": "e949522b-61e3-4262-bad8-c0ec1ab576ee",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e949522b-61e3-4262-bad8-c0ec1ab576ee",
    "image": "perev_left",
    "point": {
      "latitude": 53.864675001,
      "longitude": 23.5819232623
    }
  },
  "e993fa3c-0887-40db-9ec6-95c11c2a2e38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "e993fa3c-0887-40db-9ec6-95c11c2a2e38",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e993fa3c-0887-40db-9ec6-95c11c2a2e38",
    "image": "perev_left",
    "point": {
      "latitude": 53.7022863688,
      "longitude": 23.7732228718
    }
  },
  "e9ac9b79-5bf6-40c8-ae88-294f1381d619": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 14",
      "id": "e9ac9b79-5bf6-40c8-ae88-294f1381d619",
      "kilometrage": 509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9ac9b79-5bf6-40c8-ae88-294f1381d619",
    "image": "buyo_left",
    "point": {
      "latitude": 53.709276903,
      "longitude": 23.7722739432
    }
  },
  "e9c7b224-90d2-4ffb-a922-1549d5a4b8c0": {
    "data": {
      "color": false,
      "comment": "знака нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "e9c7b224-90d2-4ffb-a922-1549d5a4b8c0",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9c7b224-90d2-4ffb-a922-1549d5a4b8c0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7589431744,
      "longitude": 23.8097392916
    }
  },
  "e9e6831b-e4ee-453c-9ba6-d4ada33d490c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48",
      "id": "e9e6831b-e4ee-453c-9ba6-d4ada33d490c",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9e6831b-e4ee-453c-9ba6-d4ada33d490c",
    "image": "perev_left",
    "point": {
      "latitude": 53.6777039401,
      "longitude": 23.8095802285
    }
  },
  "eaf4d32a-0f13-4be4-b6c4-ad987f116757": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 565",
      "id": "eaf4d32a-0f13-4be4-b6c4-ad987f116757",
      "kilometrage": 565,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eaf4d32a-0f13-4be4-b6c4-ad987f116757",
    "image": "kilometrage",
    "point": {
      "latitude": 53.481153945,
      "longitude": 24.2494411878
    }
  },
  "ebadf8de-5d1d-43d8-a2ea-b0c843d51153": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 9",
      "id": "ebadf8de-5d1d-43d8-a2ea-b0c843d51153",
      "kilometrage": 498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebadf8de-5d1d-43d8-a2ea-b0c843d51153",
    "image": "buyo_right",
    "point": {
      "latitude": 53.7907704054,
      "longitude": 23.8458064954
    }
  },
  "ed22c4b8-7ac8-402f-ab91-c33a5f815196": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "ed22c4b8-7ac8-402f-ab91-c33a5f815196",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed22c4b8-7ac8-402f-ab91-c33a5f815196",
    "image": "perev_right",
    "point": {
      "latitude": 53.8640671884,
      "longitude": 23.7183421809
    }
  },
  "ed93cbaf-dfbe-40e8-8570-6df235e883ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ed93cbaf-dfbe-40e8-8570-6df235e883ad",
      "kilometrage": 552,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed93cbaf-dfbe-40e8-8570-6df235e883ad",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5351336444,
      "longitude": 24.1414432113
    }
  },
  "ef964273-7c21-4b73-bfc3-242dcceb25e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 31",
      "id": "ef964273-7c21-4b73-bfc3-242dcceb25e5",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef964273-7c21-4b73-bfc3-242dcceb25e5",
    "image": "perev_left",
    "point": {
      "latitude": 53.7444948282,
      "longitude": 23.7965579253
    }
  },
  "efb163c1-cd9f-4484-8a66-88ac0eb06fc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 4",
      "id": "efb163c1-cd9f-4484-8a66-88ac0eb06fc6",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "efb163c1-cd9f-4484-8a66-88ac0eb06fc6",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8696078963,
      "longitude": 23.667106392
    }
  },
  "f068f3f1-aaa2-4744-947c-cb56c8d9dcf0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 12",
      "id": "f068f3f1-aaa2-4744-947c-cb56c8d9dcf0",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f068f3f1-aaa2-4744-947c-cb56c8d9dcf0",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8633262044,
      "longitude": 23.6262320194
    }
  },
  "f072b657-3a4b-43c9-866d-9bcc0a0bfbc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Судовой ход удален от берега  ",
      "id": "f072b657-3a4b-43c9-866d-9bcc0a0bfbc4",
      "kilometrage": 501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f072b657-3a4b-43c9-866d-9bcc0a0bfbc4",
    "image": "way_far",
    "point": {
      "latitude": 53.7708682406,
      "longitude": 23.8189266527
    }
  },
  "f0f16338-b54d-4752-9c49-f13fa84402ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 43",
      "id": "f0f16338-b54d-4752-9c49-f13fa84402ae",
      "kilometrage": 567,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0f16338-b54d-4752-9c49-f13fa84402ae",
    "image": "buyo_right",
    "point": {
      "latitude": 53.4723282267,
      "longitude": 24.2502918903
    }
  },
  "f12204b1-871b-45c7-8c27-d4228314da6a": {
    "data": {
      "color": false,
      "comment": "снизу щита не видно",
      "description": "Перевальный знак левый 33",
      "id": "f12204b1-871b-45c7-8c27-d4228314da6a",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": true
    },
    "id": "f12204b1-871b-45c7-8c27-d4228314da6a",
    "image": "perev_left",
    "point": {
      "latitude": 53.7313433191,
      "longitude": 23.7780208013
    }
  },
  "f13f4060-7ce2-4575-a1b1-630967c32199": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f13f4060-7ce2-4575-a1b1-630967c32199",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f13f4060-7ce2-4575-a1b1-630967c32199",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.7596232997,
      "longitude": 23.8086687742
    }
  },
  "f1933083-3dbd-4f14-84d2-8c1fa613b00a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 17",
      "id": "f1933083-3dbd-4f14-84d2-8c1fa613b00a",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1933083-3dbd-4f14-84d2-8c1fa613b00a",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8605456634,
      "longitude": 23.5652200947
    }
  },
  "f3384342-865e-404b-875f-1acbba143b36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 540",
      "id": "f3384342-865e-404b-875f-1acbba143b36",
      "kilometrage": 540,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3384342-865e-404b-875f-1acbba143b36",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5519723486,
      "longitude": 24.0466209255
    }
  },
  "f35f8860-efd4-43e0-82c7-e160f3029bbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 28",
      "id": "f35f8860-efd4-43e0-82c7-e160f3029bbd",
      "kilometrage": 501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f35f8860-efd4-43e0-82c7-e160f3029bbd",
    "image": "perev_left",
    "point": {
      "latitude": 53.7711787688,
      "longitude": 23.819328121
    }
  },
  "f40db10d-a77f-4731-8dca-dd11ad9f7c18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Створный знак левый 1",
      "id": "f40db10d-a77f-4731-8dca-dd11ad9f7c18",
      "kilometrage": 547,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f40db10d-a77f-4731-8dca-dd11ad9f7c18",
    "image": "stvor_left",
    "point": {
      "latitude": 53.5218231836,
      "longitude": 24.09090246
    }
  },
  "f4f7cec8-1050-4bab-b7bd-5f74bcdf583e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение прохода  ",
      "id": "f4f7cec8-1050-4bab-b7bd-5f74bcdf583e",
      "kilometrage": 528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4f7cec8-1050-4bab-b7bd-5f74bcdf583e",
    "image": "passage_forbidden",
    "point": {
      "latitude": 53.6437641597,
      "longitude": 23.9793812242
    }
  },
  "f6032d71-ff74-4afb-b5c9-d42ebd1f3190": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 27",
      "id": "f6032d71-ff74-4afb-b5c9-d42ebd1f3190",
      "kilometrage": 555,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6032d71-ff74-4afb-b5c9-d42ebd1f3190",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5129281094,
      "longitude": 24.1533413885
    }
  },
  "f8621847-696a-4bd6-8cfb-92d6f7d0e1b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f8621847-696a-4bd6-8cfb-92d6f7d0e1b6",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8621847-696a-4bd6-8cfb-92d6f7d0e1b6",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6613733264,
      "longitude": 23.8624344196
    }
  },
  "f883a7dd-30a3-4ba4-a4d5-90d371a4a93d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 20",
      "id": "f883a7dd-30a3-4ba4-a4d5-90d371a4a93d",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f883a7dd-30a3-4ba4-a4d5-90d371a4a93d",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8595838211,
      "longitude": 23.531157231
    }
  },
  "f94a3fb1-7a2f-4795-9071-2af39ea0d790": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 29",
      "id": "f94a3fb1-7a2f-4795-9071-2af39ea0d790",
      "kilometrage": 557,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f94a3fb1-7a2f-4795-9071-2af39ea0d790",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5204165554,
      "longitude": 24.1815355487
    }
  },
  "f96327dc-0ca5-40e0-bd7a-21949f74625f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "f96327dc-0ca5-40e0-bd7a-21949f74625f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f96327dc-0ca5-40e0-bd7a-21949f74625f",
    "image": "perev_left",
    "point": {
      "latitude": 53.8703609791,
      "longitude": 23.6723022202
    }
  },
  "f96bb019-a77f-4f53-af56-155f51e8225d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 10",
      "id": "f96bb019-a77f-4f53-af56-155f51e8225d",
      "kilometrage": 539,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f96bb019-a77f-4f53-af56-155f51e8225d",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5562238774,
      "longitude": 24.0456723153
    }
  },
  "f9decdd3-76ae-4f5d-89da-c38c049191ab": {
    "data": {
      "color": false,
      "comment": "наклонен",
      "description": "Перевальный знак левый 3",
      "id": "f9decdd3-76ae-4f5d-89da-c38c049191ab",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9decdd3-76ae-4f5d-89da-c38c049191ab",
    "image": "perev_left",
    "point": {
      "latitude": 53.8649452101,
      "longitude": 23.7215846977
    }
  },
  "f9ffa7e5-0dc8-4cb2-8dc0-5003f5acf101": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f9ffa7e5-0dc8-4cb2-8dc0-5003f5acf101",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9ffa7e5-0dc8-4cb2-8dc0-5003f5acf101",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.6455864582,
      "longitude": 23.9210711672
    }
  },
  "fb058cd1-3dc5-463e-9f3f-3514f099c565": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "fb058cd1-3dc5-463e-9f3f-3514f099c565",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb058cd1-3dc5-463e-9f3f-3514f099c565",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8624620236,
      "longitude": 23.5259132407
    }
  },
  "fb6afc1a-8126-4c87-b6da-b88e20637564": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 7",
      "id": "fb6afc1a-8126-4c87-b6da-b88e20637564",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb6afc1a-8126-4c87-b6da-b88e20637564",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8671931714,
      "longitude": 23.6953458235
    }
  },
  "fb96c93e-773a-4b65-a4ee-8a7529ab7e6c": {
    "data": {
      "color": false,
      "comment": "только один щит",
      "description": "Перевальный знак левый 29",
      "id": "fb96c93e-773a-4b65-a4ee-8a7529ab7e6c",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb96c93e-773a-4b65-a4ee-8a7529ab7e6c",
    "image": "perev_left",
    "point": {
      "latitude": 53.7656559163,
      "longitude": 23.8106721607
    }
  },
  "fc0da79e-726b-49a8-8e14-a424bb330cae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "fc0da79e-726b-49a8-8e14-a424bb330cae",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc0da79e-726b-49a8-8e14-a424bb330cae",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8386718952,
      "longitude": 23.8143975084
    }
  },
  "fe850f1d-1ddb-46c2-9edc-f10aad52b99d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй оси судового хода 9",
      "id": "fe850f1d-1ddb-46c2-9edc-f10aad52b99d",
      "kilometrage": 539,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe850f1d-1ddb-46c2-9edc-f10aad52b99d",
    "image": "buyo_axis",
    "point": {
      "latitude": 53.5622052292,
      "longitude": 24.0444565966
    }
  },
  "ff0dbe15-6eb3-4a82-8c99-25935c040860": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "ff0dbe15-6eb3-4a82-8c99-25935c040860",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff0dbe15-6eb3-4a82-8c99-25935c040860",
    "image": "name_of",
    "point": {
      "latitude": 53.6777375696,
      "longitude": 23.7785138697
    }
  },
  "ffee00a6-b713-475c-8273-dca355bc6e42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 18",
      "id": "ffee00a6-b713-475c-8273-dca355bc6e42",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffee00a6-b713-475c-8273-dca355bc6e42",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8628956239,
      "longitude": 23.5847443035
    }
  },
  "fjsdahf17837218": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Место оборота судов",
      "id": "fjsdahf17837218",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fjsdahf17837218",
    "image": "turnaround",
    "point": {
      "latitude": 53.674489980388756,
      "longitude": 23.82284682697218
    }
  }
  }

let transformedArray = [];

// for (const key in data) {
//     transformedArray.push({
//       id: data[key].data.id,
//       image: data[key].image,
//       latitude: data[key].point.latitude,
//       longitude: data[key].point.longitude,
//       currentWaterLevel: data[key].data.currentWaterLevel,
//       waterLevel: data[key].data.waterLevel,
//       description: data[key].data.description,
//     });
//   }

// let arrayForChange = [
  
// ]

// arrayForChange.forEach((item) => { 
//   let changeItem = transformedArray.find((obj) => obj.id === item.id);
//   item.latitude = changeItem.latitude;
//   item.longitude = changeItem.longitude;
//  })
for (const key in data) {
  transformedArray.push({
    id: data[key].data.id,
    image: data[key].image,
    latitude: data[key].point.latitude,
    longitude: data[key].point.longitude,
    color: data[key].data.color,
    place: data[key].data.place,
    size: data[key].data.size,
    visibility: data[key].data.visibility,
    kilometrage: data[key].data.kilometrage ? data[key].data.kilometrage : null,
    description: data[key].data.description
  });
}


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

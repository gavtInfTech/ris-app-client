const fs = require("fs");

let data = {
  "0241e474-871a-4c03-bcf4-bb669efabfef": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кривичи 3",
      "id": "0241e474-871a-4c03-bcf4-bb669efabfef",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.097854,
      "longitude": 26.342521
    }
  },
  "03048a7b-eda8-4395-b880-69a6d7478f2d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Мнево",
      "id": "03048a7b-eda8-4395-b880-69a6d7478f2d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.150683,
      "longitude": 27.069865
    }
  },
  "058284b5-2de1-449a-b844-c60a84699960": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Гайдомашка",
      "id": "058284b5-2de1-449a-b844-c60a84699960",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.156513,
      "longitude": 26.988016
    }
  },
  "070ae0f4-969e-47b0-ab39-4f5f2056e033": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Полянка 1",
      "id": "070ae0f4-969e-47b0-ab39-4f5f2056e033",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.154594,
      "longitude": 27.254086
    }
  },
  "077e17dd-3f41-4ed0-a3be-1ed2d4e65810": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бобрик спрямление",
      "id": "077e17dd-3f41-4ed0-a3be-1ed2d4e65810",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.137094,
      "longitude": 26.776064
    }
  },
  "0783bdc2-73c2-4abb-80d0-9770c159ccc7": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жабка Болшая 2",
      "id": "0783bdc2-73c2-4abb-80d0-9770c159ccc7",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.139592,
      "longitude": 27.072658
    }
  },
  "0cbd3aa2-2dfc-4c70-ba69-07526dd7862f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Корень-Крупа 1",
      "id": "0cbd3aa2-2dfc-4c70-ba69-07526dd7862f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.163589,
      "longitude": 27.200682
    }
  },
  "1573ea7d-365f-44f6-8223-093e4c729d2e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Курадово 4",
      "id": "1573ea7d-365f-44f6-8223-093e4c729d2e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.102586,
      "longitude": 26.396057
    }
  },
  "1767c842-86ad-4228-afa6-5ea87a76543e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Плаканица 2",
      "id": "1767c842-86ad-4228-afa6-5ea87a76543e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.118357,
      "longitude": 26.742558
    }
  },
  "1d55768c-a5ad-47ca-9287-328dcbef98a4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 7",
      "id": "1d55768c-a5ad-47ca-9287-328dcbef98a4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.149513,
      "longitude": 26.936534
    }
  },
  "203ec749-517c-472d-b7d2-e1826d8e5b4c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копанец 1",
      "id": "203ec749-517c-472d-b7d2-e1826d8e5b4c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.116706,
      "longitude": 26.128955
    }
  },
  "2041bd3c-d01f-48ee-a0a4-8dd2981b6570": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жабка Болшая 4",
      "id": "2041bd3c-d01f-48ee-a0a4-8dd2981b6570",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.140232,
      "longitude": 27.097781
    }
  },
  "219aa484-f233-4297-ac92-5a1123ecec03": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копанец 5",
      "id": "219aa484-f233-4297-ac92-5a1123ecec03",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.115873,
      "longitude": 26.189567
    }
  },
  "2450d5b3-31a2-463e-884c-c737aedcafd5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Перекоп 2",
      "id": "2450d5b3-31a2-463e-884c-c737aedcafd5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.115104,
      "longitude": 26.532707
    }
  },
  "2527419d-fa66-48c0-a133-50e21cc8f60d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Подыход 5",
      "id": "2527419d-fa66-48c0-a133-50e21cc8f60d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.124928,
      "longitude": 26.649086
    }
  },
  "25cb2a6a-9c8a-49f7-913a-e3fe0b6053e9": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лопаты",
      "id": "25cb2a6a-9c8a-49f7-913a-e3fe0b6053e9",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.111245,
      "longitude": 26.700659
    }
  },
  "290ed797-c6ca-403e-b974-0b5159121e53": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копанец 2",
      "id": "290ed797-c6ca-403e-b974-0b5159121e53",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.118671,
      "longitude": 26.143887
    }
  },
  "2a280f39-5a5d-46e7-832c-f312ff63f3f0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Корень-Крупа 4",
      "id": "2a280f39-5a5d-46e7-832c-f312ff63f3f0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.151948,
      "longitude": 27.229605
    }
  },
  "2abb19b0-d1af-4b37-9f6e-0eebf0b64eff": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Осотное",
      "id": "2abb19b0-d1af-4b37-9f6e-0eebf0b64eff",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.144584,
      "longitude": 27.330952
    }
  },
  "2b9cf4cb-64aa-49c8-a109-26641c925b35": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лаховское спрямление",
      "id": "2b9cf4cb-64aa-49c8-a109-26641c925b35",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.147129,
      "longitude": 27.187308
    }
  },
  "2bef6cd5-eb39-41bd-931a-cf977f236886": {
    "data": {
      "currentWaterLevel": 220,
      "description": "устье реки Бобрик",
      "id": "2bef6cd5-eb39-41bd-931a-cf977f236886",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.135027,
      "longitude": 26.769135
    }
  },
  "2edc0e56-79f8-44db-8636-a02d48c06909": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 7",
      "id": "2edc0e56-79f8-44db-8636-a02d48c06909",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.11697,
      "longitude": 26.477321
    }
  },
  "2f943642-b4d3-4803-b8f8-08ec34610c19": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кричиво 1",
      "id": "2f943642-b4d3-4803-b8f8-08ec34610c19",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.145086,
      "longitude": 26.867004
    }
  },
  "3893edfd-d849-4b3e-86cd-208fed0b37ed": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Полыно",
      "id": "3893edfd-d849-4b3e-86cd-208fed0b37ed",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.137364,
      "longitude": 26.849793
    }
  },
  "3b552286-d9c3-4645-8a7a-6652abbe4752": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жабка Малая",
      "id": "3b552286-d9c3-4645-8a7a-6652abbe4752",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.159174,
      "longitude": 27.05494
    }
  },
  "3d4b0f62-44ed-4980-bb81-52322b3212b5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Курадово 1",
      "id": "3d4b0f62-44ed-4980-bb81-52322b3212b5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.092535,
      "longitude": 26.368555
    }
  },
  "42b0ef16-314e-4aeb-8695-fe8594b77c66": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Подыход 4",
      "id": "42b0ef16-314e-4aeb-8695-fe8594b77c66",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.127418,
      "longitude": 26.644894
    }
  },
  "43b3cb14-0a1a-4087-bdbd-071f88d99c48": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 1",
      "id": "43b3cb14-0a1a-4087-bdbd-071f88d99c48",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.128181,
      "longitude": 26.890225
    }
  },
  "44bb495a-b0d8-4b93-8f70-a7f453aecd1c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Теребень 2",
      "id": "44bb495a-b0d8-4b93-8f70-a7f453aecd1c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.110192,
      "longitude": 26.28319
    }
  },
  "488717e2-fa0a-46e9-89e0-e490a0fbe419": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бережцы 1",
      "id": "488717e2-fa0a-46e9-89e0-e490a0fbe419",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.116285,
      "longitude": 26.604056
    }
  },
  "4957b461-9476-4f8b-a590-5afb0537503d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Лаховский перевоз",
      "id": "4957b461-9476-4f8b-a590-5afb0537503d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.145454,
      "longitude": 27.142372
    }
  },
  "4b40ca2e-b29e-483f-8e39-08c12761a2d6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Верхнее Осотное",
      "id": "4b40ca2e-b29e-483f-8e39-08c12761a2d6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.135265,
      "longitude": 27.325001
    }
  },
  "54aeee2e-ffcf-4566-9e09-a5e3737c2fdb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Межа 5",
      "id": "54aeee2e-ffcf-4566-9e09-a5e3737c2fdb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.11657,
      "longitude": 26.694038
    }
  },
  "59e42090-faad-4f6b-876b-c88b2ce8eff6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 5",
      "id": "59e42090-faad-4f6b-876b-c88b2ce8eff6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.145756,
      "longitude": 26.914298
    }
  },
  "5ef5c6a0-7b31-44f7-8c0a-ab01e18d2133": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 5",
      "id": "5ef5c6a0-7b31-44f7-8c0a-ab01e18d2133",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.115121,
      "longitude": 26.449587
    }
  },
  "63e89844-be02-430c-b11b-7c95936688ae": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Курадово 3",
      "id": "63e89844-be02-430c-b11b-7c95936688ae",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.099609,
      "longitude": 26.383346
    }
  },
  "6ea85d46-6607-45ef-8321-c7a5f32ea1cc": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ланский 1,2",
      "id": "6ea85d46-6607-45ef-8321-c7a5f32ea1cc",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.154546,
      "longitude": 27.296809
    }
  },
  "7048a2af-f7b4-4079-9483-7a7968d4267e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кожан-Городок 2",
      "id": "7048a2af-f7b4-4079-9483-7a7968d4267e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.152439,
      "longitude": 27.036642
    }
  },
  "72222d8e-93f6-401e-a9af-bb153cf1f4c4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Попово плесо 1",
      "id": "72222d8e-93f6-401e-a9af-bb153cf1f4c4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.111237,
      "longitude": 26.714307
    }
  },
  "725b4120-3837-4275-a1bc-3598a514d266": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Полянка 2",
      "id": "725b4120-3837-4275-a1bc-3598a514d266",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.143026,
      "longitude": 27.250337
    }
  },
  "732ff19e-6f3e-4564-8a6f-eac9962c6822": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Стаховское спрямление",
      "id": "732ff19e-6f3e-4564-8a6f-eac9962c6822",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.108625,
      "longitude": 26.726422
    }
  },
  "79057770-0c71-4db9-87ed-be1670866891": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копанец 4",
      "id": "79057770-0c71-4db9-87ed-be1670866891",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.117599,
      "longitude": 26.178091
    }
  },
  "7a7c9ad6-a03e-48e0-bc7f-ae4c368a99b6": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кривичи 2",
      "id": "7a7c9ad6-a03e-48e0-bc7f-ae4c368a99b6",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.104681,
      "longitude": 26.34066
    }
  },
  "7d6337b8-4009-40a9-84df-6e12314301ac": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Копанец 3",
      "id": "7d6337b8-4009-40a9-84df-6e12314301ac",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.116374,
      "longitude": 26.171219
    }
  },
  "7fd07b33-f551-4f49-bb7d-2ffcaeaed9de": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Курадово 2",
      "id": "7fd07b33-f551-4f49-bb7d-2ffcaeaed9de",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.097121,
      "longitude": 26.365508
    }
  },
  "85104894-80a6-4fe3-9618-c7d51d73040c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Волчье",
      "id": "85104894-80a6-4fe3-9618-c7d51d73040c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.146673,
      "longitude": 27.309067
    }
  },
  "86484154-84ba-418b-a8c4-2dbca6fa425a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Волянские мосты",
      "id": "86484154-84ba-418b-a8c4-2dbca6fa425a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.143979,
      "longitude": 26.797006
    }
  },
  "8fab8eb2-5d0b-4114-ad45-155c1fdface1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Железница",
      "id": "8fab8eb2-5d0b-4114-ad45-155c1fdface1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.149477,
      "longitude": 27.321097
    }
  },
  "9af89ded-ae9a-4d85-a658-844567ff3e2b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Усть-Горынский",
      "id": "9af89ded-ae9a-4d85-a658-844567ff3e2b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.145225,
      "longitude": 27.273092
    }
  },
  "a0180ddf-4e78-4548-b611-cc21371c04e5": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Перекоп 1",
      "id": "a0180ddf-4e78-4548-b611-cc21371c04e5",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.111062,
      "longitude": 26.516295
    }
  },
  "a12cfa4e-20f8-43e0-b898-22943ff500ad": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 3",
      "id": "a12cfa4e-20f8-43e0-b898-22943ff500ad",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.135985,
      "longitude": 26.900325
    }
  },
  "a71505ff-8742-4dd4-9ac3-a9285dad4e06": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Вертяче 2",
      "id": "a71505ff-8742-4dd4-9ac3-a9285dad4e06",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.151446,
      "longitude": 27.021132
    }
  },
  "a789c75a-3501-4178-9abb-290f0ebb1115": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Еврейская яма 1",
      "id": "a789c75a-3501-4178-9abb-290f0ebb1115",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.156494,
      "longitude": 27.202003
    }
  },
  "a81abc25-61a9-45eb-96fd-c914e8407b64": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Коробье-Осокорь",
      "id": "a81abc25-61a9-45eb-96fd-c914e8407b64",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.147156,
      "longitude": 26.825282
    }
  },
  "a824cb1a-7da9-4096-a35f-0c2597021ace": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Половинник 2",
      "id": "a824cb1a-7da9-4096-a35f-0c2597021ace",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.1127,
      "longitude": 26.226812
    }
  },
  "ab940bd6-8a54-49df-b326-604d29d9f05f": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Быстросочево",
      "id": "ab940bd6-8a54-49df-b326-604d29d9f05f",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.14971,
      "longitude": 26.958407
    }
  },
  "abe96c90-1106-4021-b073-8881117624cf": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Спрямление-Лучица",
      "id": "abe96c90-1106-4021-b073-8881117624cf",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.153755,
      "longitude": 27.186176
    }
  },
  "ae2dd47f-2f90-41b2-8723-52773168a7d4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Еврейская яма 2",
      "id": "ae2dd47f-2f90-41b2-8723-52773168a7d4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.158788,
      "longitude": 27.187221
    }
  },
  "b001e5ed-dad6-4cf4-97de-0569f22fdd43": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Половинник",
      "id": "b001e5ed-dad6-4cf4-97de-0569f22fdd43",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.11489,
      "longitude": 26.208725
    }
  },
  "b08f111e-0b71-4b36-b2e4-51cac1ebeab9": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ветлица",
      "id": "b08f111e-0b71-4b36-b2e4-51cac1ebeab9",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.14671,
      "longitude": 27.108778
    }
  },
  "b37e8929-b0b4-49b4-a181-ec2c2086844e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Добрый дуб",
      "id": "b37e8929-b0b4-49b4-a181-ec2c2086844e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.1109,
      "longitude": 26.58997
    }
  },
  "b59e80f4-781d-4e32-8070-5727d457d5a0": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жабка Болшая 1",
      "id": "b59e80f4-781d-4e32-8070-5727d457d5a0",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.146303,
      "longitude": 27.067931
    }
  },
  "b6f24190-2ada-4e95-be7b-a60f8807d6b4": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кожан-Городок 1",
      "id": "b6f24190-2ada-4e95-be7b-a60f8807d6b4",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.162018,
      "longitude": 27.038198
    }
  },
  "b849f7ca-62bc-4e99-b8b4-9d9336b62b1a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кривичи",
      "id": "b849f7ca-62bc-4e99-b8b4-9d9336b62b1a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.116391,
      "longitude": 26.301913
    }
  },
  "b966c31c-0810-49fa-aee3-8b5511b9d4ee": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Подыход 1",
      "id": "b966c31c-0810-49fa-aee3-8b5511b9d4ee",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.124177,
      "longitude": 26.626784
    }
  },
  "bc7eb587-12ec-4381-b9f8-42ebb12581f1": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 8",
      "id": "bc7eb587-12ec-4381-b9f8-42ebb12581f1",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.10959,
      "longitude": 26.4835
    }
  },
  "be6ddf1b-3b97-4928-a0f3-0fa21c89f67c": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 4",
      "id": "be6ddf1b-3b97-4928-a0f3-0fa21c89f67c",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.141517,
      "longitude": 26.899903
    }
  },
  "c0fee8d9-639a-411f-a22f-a39a47366c23": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бережцы 2",
      "id": "c0fee8d9-639a-411f-a22f-a39a47366c23",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.122152,
      "longitude": 26.615081
    }
  },
  "c2877a7f-b399-4515-bf39-3be87a26b58a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "прк.Сулимно",
      "id": "c2877a7f-b399-4515-bf39-3be87a26b58a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.152148,
      "longitude": 26.991022
    }
  },
  "c43ea6a5-7d6f-4d78-97bb-ebf991cf9d64": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Особовичи 2",
      "id": "c43ea6a5-7d6f-4d78-97bb-ebf991cf9d64",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.116939,
      "longitude": 26.506358
    }
  },
  "c4695c4e-38d6-42d6-af2d-181a117f0648": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 2",
      "id": "c4695c4e-38d6-42d6-af2d-181a117f0648",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.1079,
      "longitude": 26.424455
    }
  },
  "c5182b67-e9fd-4830-a03c-2e41224607ec": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Демьянова Грива",
      "id": "c5182b67-e9fd-4830-a03c-2e41224607ec",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.156941,
      "longitude": 27.139347
    }
  },
  "c543f04e-bf95-418c-ae48-aeefb6caa1fa": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Бережцы 3",
      "id": "c543f04e-bf95-418c-ae48-aeefb6caa1fa",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.127272,
      "longitude": 26.623756
    }
  },
  "c54b1aea-a1b2-480c-9203-9228e131374e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Подлучица",
      "id": "c54b1aea-a1b2-480c-9203-9228e131374e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.153016,
      "longitude": 27.141157
    }
  },
  "c5690992-0cca-47e7-a72a-640a135e070e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 4",
      "id": "c5690992-0cca-47e7-a72a-640a135e070e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.12236,
      "longitude": 26.433844
    }
  },
  "cd5fe8fd-ffe0-4638-bbf6-85d5f665d188": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Муравче плесо",
      "id": "cd5fe8fd-ffe0-4638-bbf6-85d5f665d188",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.111613,
      "longitude": 26.564139
    }
  },
  "d0b91285-fa90-4fa0-a986-f4827b924a57": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Качановичи 6",
      "id": "d0b91285-fa90-4fa0-a986-f4827b924a57",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.1187,
      "longitude": 26.465192
    }
  },
  "d16ecf03-9148-455e-8d60-057702311dcb": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 2",
      "id": "d16ecf03-9148-455e-8d60-057702311dcb",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.132958,
      "longitude": 26.903403
    }
  },
  "d36c94ca-50d1-41ca-bcdc-0b5fd7a24a4a": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Особовичи 1",
      "id": "d36c94ca-50d1-41ca-bcdc-0b5fd7a24a4a",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.115389,
      "longitude": 26.488167
    }
  },
  "d629e3cc-fc3c-4124-83f6-d6eb6bcac55e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Сеймы",
      "id": "d629e3cc-fc3c-4124-83f6-d6eb6bcac55e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.150496,
      "longitude": 26.977096
    }
  },
  "d7286e7c-e76e-494d-823d-f1e92c1f6d3b": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кричиво 2",
      "id": "d7286e7c-e76e-494d-823d-f1e92c1f6d3b",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.145086,
      "longitude": 26.867004
    }
  },
  "d745cebb-7226-4674-bd64-183c2567428e": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Ст.Стырь",
      "id": "d745cebb-7226-4674-bd64-183c2567428e",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.109884,
      "longitude": 26.577539
    }
  },
  "d7793261-4a2b-4fac-af8c-892c77584a21": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Корень-Крупа 3",
      "id": "d7793261-4a2b-4fac-af8c-892c77584a21",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.151948,
      "longitude": 27.229605
    }
  },
  "d95ca6c6-0bb9-4056-b269-6cf0b9129f5d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Жабка Болшая 3",
      "id": "d95ca6c6-0bb9-4056-b269-6cf0b9129f5d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.148998,
      "longitude": 27.074695
    }
  },
  "da6678b2-6c47-420d-a4cc-8c4c439b51a3": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Плюхово",
      "id": "da6678b2-6c47-420d-a4cc-8c4c439b51a3",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.125928,
      "longitude": 26.759978
    }
  },
  "dd42a6b8-5810-4bd0-acc0-5d720eaeae0d": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Кривичи 1",
      "id": "dd42a6b8-5810-4bd0-acc0-5d720eaeae0d",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.114554,
      "longitude": 26.320451
    }
  },
  "e428d994-08ba-4498-b2b9-913f8a952db2": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Попово плесо 2",
      "id": "e428d994-08ba-4498-b2b9-913f8a952db2",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.107604,
      "longitude": 26.711673
    }
  },
  "e53e4ad3-60b8-45cf-a672-0ab739f05b86": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Корень-Крупа 2",
      "id": "e53e4ad3-60b8-45cf-a672-0ab739f05b86",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.165621,
      "longitude": 27.227235
    }
  },
  "e56d3b56-87f2-4a16-9fc5-3cb6147a6877": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Межа 1",
      "id": "e56d3b56-87f2-4a16-9fc5-3cb6147a6877",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.12141,
      "longitude": 26.675913
    }
  },
  "f0a77d1a-d124-45f3-af71-7cf87b747433": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Теребень 1",
      "id": "f0a77d1a-d124-45f3-af71-7cf87b747433",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.112379,
      "longitude": 26.265975
    }
  },
  "f2739999-7c61-4723-bd39-f68f644547df": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Перекоп 3",
      "id": "f2739999-7c61-4723-bd39-f68f644547df",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.120307,
      "longitude": 26.540082
    }
  },
  "f4da1ea6-64e1-4c0d-b4cb-5bed4c836563": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Требухово 6",
      "id": "f4da1ea6-64e1-4c0d-b4cb-5bed4c836563",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.147367,
      "longitude": 26.941278
    }
  },
  "fc070c3d-5610-47b6-83d5-6d63cb39a978": {
    "data": {
      "currentWaterLevel": 220,
      "description": "Перекоп 4",
      "id": "fc070c3d-5610-47b6-83d5-6d63cb39a978",
      "waterLevel": 220
    },
    "image": "riftnormal",
    "point": {
      "latitude": 52.114539,
      "longitude": 26.5577
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
  `module.exports = ${JSON.stringify(transformedArray, null, 2)}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Array has been written");
    }
  }
);

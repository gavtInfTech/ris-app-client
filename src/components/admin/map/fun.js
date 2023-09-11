const fs = require("fs");

let data = {
  "000a1e32-6ced-44a0-aa2e-5bbf3264e207": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 260",
      "id": "000a1e32-6ced-44a0-aa2e-5bbf3264e207",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "000a1e32-6ced-44a0-aa2e-5bbf3264e207",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2198577178,
      "longitude": 30.9295596793
    }
  },
  "0066bad7-1ab9-4ca5-8863-319e40c0893f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "0066bad7-1ab9-4ca5-8863-319e40c0893f",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0066bad7-1ab9-4ca5-8863-319e40c0893f",
    "image": "perev_right",
    "point": {
      "latitude": 53.1055142828,
      "longitude": 30.8711898993
    }
  },
  "00d89c22-c393-4636-b646-b5462019a072": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 246",
      "id": "00d89c22-c393-4636-b646-b5462019a072",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00d89c22-c393-4636-b646-b5462019a072",
    "image": "perev_left",
    "point": {
      "latitude": 52.6393226944,
      "longitude": 31.141527945
    }
  },
  "00fd4594-046b-467c-8c76-720be66e740d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 13м",
      "id": "00fd4594-046b-467c-8c76-720be66e740d",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00fd4594-046b-467c-8c76-720be66e740d",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0615837639,
      "longitude": 30.9412290907
    }
  },
  "01912cf1-5233-4039-b878-fae5986f571b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 153",
      "id": "01912cf1-5233-4039-b878-fae5986f571b",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01912cf1-5233-4039-b878-fae5986f571b",
    "image": "perev_left",
    "point": {
      "latitude": 52.4718141347,
      "longitude": 31.0982448289
    }
  },
  "01bf5922-c2ce-4e9c-9299-9c7381abf815": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "01bf5922-c2ce-4e9c-9299-9c7381abf815",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01bf5922-c2ce-4e9c-9299-9c7381abf815",
    "image": "axis_romb",
    "point": {
      "latitude": 53.1251277739,
      "longitude": 30.867764094
    }
  },
  "01cffc13-196f-4371-939a-1e7946a0b297": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "01cffc13-196f-4371-939a-1e7946a0b297",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01cffc13-196f-4371-939a-1e7946a0b297",
    "image": "perev_left",
    "point": {
      "latitude": 52.7266639596,
      "longitude": 30.9581964202
    }
  },
  "01d38760-1815-4d45-b2f5-0f14d52a8a8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "01d38760-1815-4d45-b2f5-0f14d52a8a8f",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01d38760-1815-4d45-b2f5-0f14d52a8a8f",
    "image": "perev_left",
    "point": {
      "latitude": 52.3019257235,
      "longitude": 30.9448717456
    }
  },
  "021ac25c-7339-497b-b3ab-de21e4a7d56a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "021ac25c-7339-497b-b3ab-de21e4a7d56a",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "021ac25c-7339-497b-b3ab-de21e4a7d56a",
    "image": "perev_left",
    "point": {
      "latitude": 52.740215678,
      "longitude": 30.9442675514
    }
  },
  "024d2af2-6b30-4d20-8964-8af19843704a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 85",
      "id": "024d2af2-6b30-4d20-8964-8af19843704a",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "024d2af2-6b30-4d20-8964-8af19843704a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3203085287,
      "longitude": 30.9194955768
    }
  },
  "02c4d9a7-0f6b-4cc6-98da-1c9605b7e0ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "02c4d9a7-0f6b-4cc6-98da-1c9605b7e0ac",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02c4d9a7-0f6b-4cc6-98da-1c9605b7e0ac",
    "image": "perev_left",
    "point": {
      "latitude": 52.7092733479,
      "longitude": 30.9998765909
    }
  },
  "036561d9-739c-46ea-81e7-8ada1e2ae3d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "036561d9-739c-46ea-81e7-8ada1e2ae3d4",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "036561d9-739c-46ea-81e7-8ada1e2ae3d4",
    "image": "perev_right",
    "point": {
      "latitude": 52.790381488,
      "longitude": 30.943504677
    }
  },
  "037218e3-6c8b-498d-8cc7-51281ad64116": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 100",
      "id": "037218e3-6c8b-498d-8cc7-51281ad64116",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "037218e3-6c8b-498d-8cc7-51281ad64116",
    "image": "perev_left",
    "point": {
      "latitude": 52.2350846939,
      "longitude": 30.9451694823
    }
  },
  "03a4aef2-17f1-4518-81b4-41550ba4ef30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "03a4aef2-17f1-4518-81b4-41550ba4ef30",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03a4aef2-17f1-4518-81b4-41550ba4ef30",
    "image": "perev_right",
    "point": {
      "latitude": 52.8603721038,
      "longitude": 30.9874943419
    }
  },
  "03b11962-3050-4cff-a823-ce9d93e9bb1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 12",
      "id": "03b11962-3050-4cff-a823-ce9d93e9bb1d",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03b11962-3050-4cff-a823-ce9d93e9bb1d",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0579098185,
      "longitude": 30.9468659561
    }
  },
  "03d68ccf-4a19-4b98-a379-951996df1f86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "03d68ccf-4a19-4b98-a379-951996df1f86",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03d68ccf-4a19-4b98-a379-951996df1f86",
    "image": "buyo_right",
    "point": {
      "latitude": 51.99249474,
      "longitude": 30.9082744339
    }
  },
  "03f2092f-4725-4c94-afc6-8a33b6255bdb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "03f2092f-4725-4c94-afc6-8a33b6255bdb",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03f2092f-4725-4c94-afc6-8a33b6255bdb",
    "image": "perev_left",
    "point": {
      "latitude": 52.8623775906,
      "longitude": 30.9934867069
    }
  },
  "041f6009-9e4f-42c0-b3c7-03dfdd1b4c3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "041f6009-9e4f-42c0-b3c7-03dfdd1b4c3e",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "041f6009-9e4f-42c0-b3c7-03dfdd1b4c3e",
    "image": "perev_right",
    "point": {
      "latitude": 52.723327336,
      "longitude": 30.9637477531
    }
  },
  "0450ad5b-c7a4-46af-a9a3-6ada6df43d4c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0450ad5b-c7a4-46af-a9a3-6ada6df43d4c",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0450ad5b-c7a4-46af-a9a3-6ada6df43d4c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4484430308,
      "longitude": 31.06048722
    }
  },
  "045fa0f0-05e5-43f3-bdce-90d848e6a9f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 84",
      "id": "045fa0f0-05e5-43f3-bdce-90d848e6a9f1",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "045fa0f0-05e5-43f3-bdce-90d848e6a9f1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1890291307,
      "longitude": 30.9326392404
    }
  },
  "0477e156-848f-412e-a266-aff1b75f22c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 24",
      "id": "0477e156-848f-412e-a266-aff1b75f22c3",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0477e156-848f-412e-a266-aff1b75f22c3",
    "image": "perev_right",
    "point": {
      "latitude": 51.9934665936,
      "longitude": 30.895261153
    }
  },
  "04e0c537-305f-4acb-928f-b991bf5c6393": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 190",
      "id": "04e0c537-305f-4acb-928f-b991bf5c6393",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04e0c537-305f-4acb-928f-b991bf5c6393",
    "image": "perev_right",
    "point": {
      "latitude": 52.5784392591,
      "longitude": 31.117601459
    }
  },
  "0569ff46-0a93-41d3-8a85-e9187ed4499a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 48",
      "id": "0569ff46-0a93-41d3-8a85-e9187ed4499a",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0569ff46-0a93-41d3-8a85-e9187ed4499a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2760679336,
      "longitude": 30.9033210173
    }
  },
  "057f0919-48a5-4f94-ade0-f9e79afe8e6e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 96м",
      "id": "057f0919-48a5-4f94-ade0-f9e79afe8e6e",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "057f0919-48a5-4f94-ade0-f9e79afe8e6e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4199250404,
      "longitude": 31.0189393187
    }
  },
  "05a73f00-a05b-40fe-81b2-f25d49c45918": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "05a73f00-a05b-40fe-81b2-f25d49c45918",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05a73f00-a05b-40fe-81b2-f25d49c45918",
    "image": "perev_left",
    "point": {
      "latitude": 52.7153190416,
      "longitude": 30.9684597939
    }
  },
  "06273912-6e2f-4ac4-8ff3-076cc10cca6b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "06273912-6e2f-4ac4-8ff3-076cc10cca6b",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06273912-6e2f-4ac4-8ff3-076cc10cca6b",
    "image": "perev_left",
    "point": {
      "latitude": 52.6701507453,
      "longitude": 31.077486053
    }
  },
  "0637a969-c439-4958-b760-aedc7db2a976": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 55",
      "id": "0637a969-c439-4958-b760-aedc7db2a976",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0637a969-c439-4958-b760-aedc7db2a976",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1984882856,
      "longitude": 30.9323297411
    }
  },
  "06c918a9-a945-473e-a905-2ae9a60eeecc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "06c918a9-a945-473e-a905-2ae9a60eeecc",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06c918a9-a945-473e-a905-2ae9a60eeecc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0158861183,
      "longitude": 30.9384900798
    }
  },
  "0788b2b4-bc39-477f-a030-e5ab933144a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "0788b2b4-bc39-477f-a030-e5ab933144a5",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0788b2b4-bc39-477f-a030-e5ab933144a5",
    "image": "perev_right",
    "point": {
      "latitude": 52.9054088746,
      "longitude": 30.9401724676
    }
  },
  "07dbf156-05a4-4f51-a15d-d46c511937ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "07dbf156-05a4-4f51-a15d-d46c511937ca",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07dbf156-05a4-4f51-a15d-d46c511937ca",
    "image": "perev_right",
    "point": {
      "latitude": 53.1376241232,
      "longitude": 30.8754213864
    }
  },
  "07f27c84-4c2c-4c96-bb12-e3a788b60573": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 236",
      "id": "07f27c84-4c2c-4c96-bb12-e3a788b60573",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07f27c84-4c2c-4c96-bb12-e3a788b60573",
    "image": "perev_left",
    "point": {
      "latitude": 52.6168365339,
      "longitude": 31.1378285989
    }
  },
  "08861755-4c40-4671-856e-84a9e5449e1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "08861755-4c40-4671-856e-84a9e5449e1f",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08861755-4c40-4671-856e-84a9e5449e1f",
    "image": "perev_right",
    "point": {
      "latitude": 53.0331667646,
      "longitude": 30.900284224
    }
  },
  "08944df9-c032-4b86-9cc6-9a8c74a1c8d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "08944df9-c032-4b86-9cc6-9a8c74a1c8d6",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08944df9-c032-4b86-9cc6-9a8c74a1c8d6",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3771190483,
      "longitude": 30.9591605768
    }
  },
  "0921652b-e791-44f3-b0da-269c585e443c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87А",
      "id": "0921652b-e791-44f3-b0da-269c585e443c",
      "kilometrage": 56,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0921652b-e791-44f3-b0da-269c585e443c",
    "image": "perev_left",
    "point": {
      "latitude": 52.2065548305,
      "longitude": 30.9337739784
    }
  },
  "09733fba-3a89-4b5b-bfe1-d5cdf2887203": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "09733fba-3a89-4b5b-bfe1-d5cdf2887203",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09733fba-3a89-4b5b-bfe1-d5cdf2887203",
    "image": "perev_right",
    "point": {
      "latitude": 53.0809872067,
      "longitude": 30.8740003197
    }
  },
  "098e27de-70ae-4be3-a09c-6fcc04670685": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "098e27de-70ae-4be3-a09c-6fcc04670685",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "098e27de-70ae-4be3-a09c-6fcc04670685",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.5589277488,
      "longitude": 31.1630092404
    }
  },
  "0a716749-847f-41b5-ac19-fde3247fc307": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 158",
      "id": "0a716749-847f-41b5-ac19-fde3247fc307",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a716749-847f-41b5-ac19-fde3247fc307",
    "image": "perev_left",
    "point": {
      "latitude": 52.4853657231,
      "longitude": 31.1218311315
    }
  },
  "0b7d7f37-3b3c-43bb-8b3d-2ee263e9d174": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "0b7d7f37-3b3c-43bb-8b3d-2ee263e9d174",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b7d7f37-3b3c-43bb-8b3d-2ee263e9d174",
    "image": "perev_right",
    "point": {
      "latitude": 53.1393215668,
      "longitude": 30.8740372495
    }
  },
  "0c13da31-8226-46c7-bfca-ee40cf2e19fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 92",
      "id": "0c13da31-8226-46c7-bfca-ee40cf2e19fe",
      "kilometrage": 59,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c13da31-8226-46c7-bfca-ee40cf2e19fe",
    "image": "perev_left",
    "point": {
      "latitude": 52.2221434341,
      "longitude": 30.9450267486
    }
  },
  "0c41603c-9b17-4289-92a3-99a74b18d052": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "0c41603c-9b17-4289-92a3-99a74b18d052",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c41603c-9b17-4289-92a3-99a74b18d052",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4001956583,
      "longitude": 31.0018350139
    }
  },
  "0c48bde4-8f3a-41fd-98bb-80740dfd6fa3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 97",
      "id": "0c48bde4-8f3a-41fd-98bb-80740dfd6fa3",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c48bde4-8f3a-41fd-98bb-80740dfd6fa3",
    "image": "perev_right",
    "point": {
      "latitude": 52.2311763239,
      "longitude": 30.9165237208
    }
  },
  "0d694620-3ca7-4d5f-9a93-a4c66708aea1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 120м",
      "id": "0d694620-3ca7-4d5f-9a93-a4c66708aea1",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d694620-3ca7-4d5f-9a93-a4c66708aea1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4816785249,
      "longitude": 31.1125240738
    }
  },
  "0df5e8de-a7de-4399-b145-53148afeb10d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "0df5e8de-a7de-4399-b145-53148afeb10d",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0df5e8de-a7de-4399-b145-53148afeb10d",
    "image": "perev_right",
    "point": {
      "latitude": 53.2538795028,
      "longitude": 30.9566965953
    }
  },
  "0e1d1ee7-7f40-460d-91bd-14af2a56f5cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 18",
      "id": "0e1d1ee7-7f40-460d-91bd-14af2a56f5cf",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e1d1ee7-7f40-460d-91bd-14af2a56f5cf",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.9845011179,
      "longitude": 30.8839303043
    }
  },
  "0ece210e-b2c9-4d85-9e5e-d536c511f218": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "0ece210e-b2c9-4d85-9e5e-d536c511f218",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ece210e-b2c9-4d85-9e5e-d536c511f218",
    "image": "perev_right",
    "point": {
      "latitude": 52.706664878,
      "longitude": 30.9984146487
    }
  },
  "0ffbeea8-b268-4d72-ae1a-55b1d3097d13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 135",
      "id": "0ffbeea8-b268-4d72-ae1a-55b1d3097d13",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ffbeea8-b268-4d72-ae1a-55b1d3097d13",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5736075509,
      "longitude": 31.1279710393
    }
  },
  "1064bc22-89cf-460c-8a73-354edea5cb28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 154",
      "id": "1064bc22-89cf-460c-8a73-354edea5cb28",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1064bc22-89cf-460c-8a73-354edea5cb28",
    "image": "perev_right",
    "point": {
      "latitude": 52.4740625814,
      "longitude": 31.0941816117
    }
  },
  "10e5d812-c9be-44ba-aead-abf9b335318f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "10e5d812-c9be-44ba-aead-abf9b335318f",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10e5d812-c9be-44ba-aead-abf9b335318f",
    "image": "perev_left",
    "point": {
      "latitude": 52.9118647129,
      "longitude": 30.9456027677
    }
  },
  "1103834a-a495-4393-8eff-fbc67fedfeb5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "1103834a-a495-4393-8eff-fbc67fedfeb5",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1103834a-a495-4393-8eff-fbc67fedfeb5",
    "image": "perev_left",
    "point": {
      "latitude": 53.4371428563,
      "longitude": 31.0087328798
    }
  },
  "1134c703-32fa-42f9-a098-8a001da1f8ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 91м",
      "id": "1134c703-32fa-42f9-a098-8a001da1f8ee",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1134c703-32fa-42f9-a098-8a001da1f8ee",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4060232478,
      "longitude": 31.0050451204
    }
  },
  "1137be27-0fc4-4625-8e4b-9669d81d902b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1137be27-0fc4-4625-8e4b-9669d81d902b",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1137be27-0fc4-4625-8e4b-9669d81d902b",
    "image": "perev_right",
    "point": {
      "latitude": 52.743888636,
      "longitude": 30.9373825635
    }
  },
  "11a7c2ad-7155-495f-8538-8b72782716ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "11a7c2ad-7155-495f-8538-8b72782716ff",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11a7c2ad-7155-495f-8538-8b72782716ff",
    "image": "name_of",
    "point": {
      "latitude": 52.6531589878,
      "longitude": 31.1211200238
    }
  },
  "1203337f-7e70-49d1-9884-704d7fe30b2e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1203337f-7e70-49d1-9884-704d7fe30b2e",
      "kilometrage": 216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1203337f-7e70-49d1-9884-704d7fe30b2e",
    "image": "perev_right",
    "point": {
      "latitude": 52.954986136,
      "longitude": 30.9329324148
    }
  },
  "12d34da8-a180-4ae2-b69b-e93c409b2484": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 265",
      "id": "12d34da8-a180-4ae2-b69b-e93c409b2484",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12d34da8-a180-4ae2-b69b-e93c409b2484",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2279969069,
      "longitude": 30.9566060572
    }
  },
  "13ccf45c-1e1c-46a3-afe4-a6cd35c991d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "13ccf45c-1e1c-46a3-afe4-a6cd35c991d2",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13ccf45c-1e1c-46a3-afe4-a6cd35c991d2",
    "image": "perev_left",
    "point": {
      "latitude": 53.39166841,
      "longitude": 31.0016670915
    }
  },
  "1471d152-92e3-402c-bbdf-9af23270f59c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "1471d152-92e3-402c-bbdf-9af23270f59c",
      "kilometrage": 211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1471d152-92e3-402c-bbdf-9af23270f59c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9237081871,
      "longitude": 30.9522029746
    }
  },
  "156397a1-f31f-4fd9-a0c1-004722136701": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 131",
      "id": "156397a1-f31f-4fd9-a0c1-004722136701",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "156397a1-f31f-4fd9-a0c1-004722136701",
    "image": "perev_left",
    "point": {
      "latitude": 52.3440308722,
      "longitude": 30.9633216703
    }
  },
  "15905c3e-b838-4b37-a849-f662453f432d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 49",
      "id": "15905c3e-b838-4b37-a849-f662453f432d",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15905c3e-b838-4b37-a849-f662453f432d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2814164741,
      "longitude": 30.9063772219
    }
  },
  "1592be88-69a9-4ea9-9fb6-42b6c7e930bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "1592be88-69a9-4ea9-9fb6-42b6c7e930bd",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1592be88-69a9-4ea9-9fb6-42b6c7e930bd",
    "image": "crossing_way",
    "point": {
      "latitude": 52.3753285906,
      "longitude": 30.9504780627
    }
  },
  "161f7ac9-4842-4bfb-b155-bafa2609471d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "161f7ac9-4842-4bfb-b155-bafa2609471d",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "161f7ac9-4842-4bfb-b155-bafa2609471d",
    "image": "perev_right",
    "point": {
      "latitude": 53.1327143189,
      "longitude": 30.8825699123
    }
  },
  "1637f140-b299-4230-aecf-382fdb3d9004": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "1637f140-b299-4230-aecf-382fdb3d9004",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1637f140-b299-4230-aecf-382fdb3d9004",
    "image": "bridge_low",
    "point": {
      "latitude": 52.5621932915,
      "longitude": 31.1533328961
    }
  },
  "1659938a-9467-445a-9b39-3883c10e65bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "1659938a-9467-445a-9b39-3883c10e65bc",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1659938a-9467-445a-9b39-3883c10e65bc",
    "image": "perev_left",
    "point": {
      "latitude": 53.0827090565,
      "longitude": 30.8874187235
    }
  },
  "16e34c97-3616-4349-855d-8b4cad717a9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "16e34c97-3616-4349-855d-8b4cad717a9a",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16e34c97-3616-4349-855d-8b4cad717a9a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8850355229,
      "longitude": 30.9603984568
    }
  },
  "17035654-f7b3-4d67-8c42-f3254f55d7e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 43",
      "id": "17035654-f7b3-4d67-8c42-f3254f55d7e6",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17035654-f7b3-4d67-8c42-f3254f55d7e6",
    "image": "perev_left",
    "point": {
      "latitude": 52.0606803345,
      "longitude": 30.9456570289
    }
  },
  "1706bfea-74b2-4de2-9c80-c99c435c8a15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "1706bfea-74b2-4de2-9c80-c99c435c8a15",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1706bfea-74b2-4de2-9c80-c99c435c8a15",
    "image": "perev_left",
    "point": {
      "latitude": 52.7098033823,
      "longitude": 30.9882618728
    }
  },
  "174c0b53-4719-4058-b711-8efb2d819f73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "174c0b53-4719-4058-b711-8efb2d819f73",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "174c0b53-4719-4058-b711-8efb2d819f73",
    "image": "perev_right",
    "point": {
      "latitude": 52.6962890156,
      "longitude": 31.0235361582
    }
  },
  "17fe1412-d6f5-4760-99e2-774b7b47e1fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "17fe1412-d6f5-4760-99e2-774b7b47e1fd",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17fe1412-d6f5-4760-99e2-774b7b47e1fd",
    "image": "perev_right",
    "point": {
      "latitude": 52.8736766869,
      "longitude": 30.9698877092
    }
  },
  "18767f85-771b-4ff0-ab24-e9b6dd55cb94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "18767f85-771b-4ff0-ab24-e9b6dd55cb94",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18767f85-771b-4ff0-ab24-e9b6dd55cb94",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3963184056,
      "longitude": 31.0030006378
    }
  },
  "1880ecb4-8e36-4ef4-a4b5-ab44a68be764": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 101",
      "id": "1880ecb4-8e36-4ef4-a4b5-ab44a68be764",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1880ecb4-8e36-4ef4-a4b5-ab44a68be764",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.2383257484,
      "longitude": 30.949108947
    }
  },
  "1883922d-2519-4f34-ab76-26872dbc1b96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1883922d-2519-4f34-ab76-26872dbc1b96",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1883922d-2519-4f34-ab76-26872dbc1b96",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8557846551,
      "longitude": 30.9915840992
    }
  },
  "18cc034f-d35e-4a60-9a99-9ae5c89c39fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "18cc034f-d35e-4a60-9a99-9ae5c89c39fd",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18cc034f-d35e-4a60-9a99-9ae5c89c39fd",
    "image": "perev_right",
    "point": {
      "latitude": 53.0539176439,
      "longitude": 30.8932126761
    }
  },
  "19166804-01b5-42e9-bd76-0a04381a6219": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 167",
      "id": "19166804-01b5-42e9-bd76-0a04381a6219",
      "kilometrage": 124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19166804-01b5-42e9-bd76-0a04381a6219",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.4986379802,
      "longitude": 31.1603967113
    }
  },
  "1955785d-f0f9-4417-aa56-d9619696e2f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 124А",
      "id": "1955785d-f0f9-4417-aa56-d9619696e2f4",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1955785d-f0f9-4417-aa56-d9619696e2f4",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.3172919178,
      "longitude": 30.9205689388
    }
  },
  "19794a21-c19a-47a1-a9ac-2a994980084d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "19794a21-c19a-47a1-a9ac-2a994980084d",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19794a21-c19a-47a1-a9ac-2a994980084d",
    "image": "perev_left",
    "point": {
      "latitude": 52.8779891607,
      "longitude": 30.9706033561
    }
  },
  "19d2400d-bc6a-488d-b228-1c01af77edc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "19d2400d-bc6a-488d-b228-1c01af77edc6",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19d2400d-bc6a-488d-b228-1c01af77edc6",
    "image": "perev_left",
    "point": {
      "latitude": 53.0421668539,
      "longitude": 30.8989294001
    }
  },
  "1b088bef-8e84-469b-89e1-4871c543920a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 49",
      "id": "1b088bef-8e84-469b-89e1-4871c543920a",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b088bef-8e84-469b-89e1-4871c543920a",
    "image": "perev_left",
    "point": {
      "latitude": 52.0735570023,
      "longitude": 30.9501770276
    }
  },
  "1b0f7fea-3b5e-49ac-82bf-f449dafa9bef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "1b0f7fea-3b5e-49ac-82bf-f449dafa9bef",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b0f7fea-3b5e-49ac-82bf-f449dafa9bef",
    "image": "perev_left",
    "point": {
      "latitude": 52.9481272439,
      "longitude": 30.928171626
    }
  },
  "1b81e853-a0ee-4117-9fce-a305b60db675": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 65",
      "id": "1b81e853-a0ee-4117-9fce-a305b60db675",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b81e853-a0ee-4117-9fce-a305b60db675",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3362849487,
      "longitude": 30.9340872771
    }
  },
  "1c16f289-b764-446e-9227-afdd3258f13b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "1c16f289-b764-446e-9227-afdd3258f13b",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c16f289-b764-446e-9227-afdd3258f13b",
    "image": "perev_left",
    "point": {
      "latitude": 53.3283845074,
      "longitude": 31.0068014915
    }
  },
  "1c472c2f-c8dc-4a92-9ac6-018db20278c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 215",
      "id": "1c472c2f-c8dc-4a92-9ac6-018db20278c4",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c472c2f-c8dc-4a92-9ac6-018db20278c4",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9430516103,
      "longitude": 30.9286198699
    }
  },
  "1cbfb31c-b487-442c-a008-cec4744b6e8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1cbfb31c-b487-442c-a008-cec4744b6e8f",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cbfb31c-b487-442c-a008-cec4744b6e8f",
    "image": "name_of",
    "point": {
      "latitude": 52.8906254697,
      "longitude": 30.9612784763
    }
  },
  "1cc0a6db-2fb2-4bd8-b8fa-8622805828b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разрешение стоянки  ",
      "id": "1cc0a6db-2fb2-4bd8-b8fa-8622805828b5",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cc0a6db-2fb2-4bd8-b8fa-8622805828b5",
    "image": "parking",
    "point": {
      "latitude": 52.4370956352,
      "longitude": 31.0178301927
    }
  },
  "1cc87ad1-f7a8-442d-b6b2-bfb03bda3bd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 167А",
      "id": "1cc87ad1-f7a8-442d-b6b2-bfb03bda3bd8",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cc87ad1-f7a8-442d-b6b2-bfb03bda3bd8",
    "image": "perev_left",
    "point": {
      "latitude": 52.5045306317,
      "longitude": 31.1586625563
    }
  },
  "1ce616a2-e54b-4a46-ad0b-3370b7f1b717": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1ce616a2-e54b-4a46-ad0b-3370b7f1b717",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ce616a2-e54b-4a46-ad0b-3370b7f1b717",
    "image": "perev_right",
    "point": {
      "latitude": 53.1213193123,
      "longitude": 30.8685842395
    }
  },
  "1d39de02-142c-42cb-9369-eb2a86ef0b11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "1d39de02-142c-42cb-9369-eb2a86ef0b11",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d39de02-142c-42cb-9369-eb2a86ef0b11",
    "image": "perev_right",
    "point": {
      "latitude": 52.0861207722,
      "longitude": 30.9116674946
    }
  },
  "1d489e0a-8fb9-41f9-9c55-5e8fb1f4baa8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "1d489e0a-8fb9-41f9-9c55-5e8fb1f4baa8",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d489e0a-8fb9-41f9-9c55-5e8fb1f4baa8",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.7701523925,
      "longitude": 30.9602861774
    }
  },
  "1d6c5ec7-b06a-41e8-9c3d-bf9d7a9f52d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1d6c5ec7-b06a-41e8-9c3d-bf9d7a9f52d3",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d6c5ec7-b06a-41e8-9c3d-bf9d7a9f52d3",
    "image": "name_of",
    "point": {
      "latitude": 52.3369751335,
      "longitude": 30.932700786
    }
  },
  "1d6e8edb-bfed-402f-8263-e83715cb3e02": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 230",
      "id": "1d6e8edb-bfed-402f-8263-e83715cb3e02",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d6e8edb-bfed-402f-8263-e83715cb3e02",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0483644294,
      "longitude": 30.8952271846
    }
  },
  "1dda385b-6f8b-40f5-8a0a-e3f438140138": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1dda385b-6f8b-40f5-8a0a-e3f438140138",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1dda385b-6f8b-40f5-8a0a-e3f438140138",
    "image": "perev_right",
    "point": {
      "latitude": 53.3997952773,
      "longitude": 31.0083921811
    }
  },
  "1ddb219e-3de0-4b04-82c9-dace241dec16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1ddb219e-3de0-4b04-82c9-dace241dec16",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ddb219e-3de0-4b04-82c9-dace241dec16",
    "image": "perev_right",
    "point": {
      "latitude": 53.203629368,
      "longitude": 30.8969647258
    }
  },
  "1e03c1fa-5dc0-465f-94d0-22fd99a1d1d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 200",
      "id": "1e03c1fa-5dc0-465f-94d0-22fd99a1d1d3",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e03c1fa-5dc0-465f-94d0-22fd99a1d1d3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8549188696,
      "longitude": 30.9903069998
    }
  },
  "1e237b99-c029-4c19-b476-bd3e59cc1d19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 253",
      "id": "1e237b99-c029-4c19-b476-bd3e59cc1d19",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e237b99-c029-4c19-b476-bd3e59cc1d19",
    "image": "perev_left",
    "point": {
      "latitude": 52.6547534813,
      "longitude": 31.1157582731
    }
  },
  "1e387c65-d1b7-4ec2-a03b-87520260b69c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1e387c65-d1b7-4ec2-a03b-87520260b69c",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e387c65-d1b7-4ec2-a03b-87520260b69c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2173752823,
      "longitude": 30.9045071045
    }
  },
  "1e472351-e4e4-47cc-bda1-7e1358a66159": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1e472351-e4e4-47cc-bda1-7e1358a66159",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e472351-e4e4-47cc-bda1-7e1358a66159",
    "image": "name_of",
    "point": {
      "latitude": 53.1226464831,
      "longitude": 30.8676213783
    }
  },
  "1ef31207-bde4-4b80-96f2-df0ac3966bd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1ef31207-bde4-4b80-96f2-df0ac3966bd5",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ef31207-bde4-4b80-96f2-df0ac3966bd5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3428429838,
      "longitude": 30.9441712469
    }
  },
  "1efb8b16-6e5b-424e-b048-e133fac4db5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 243",
      "id": "1efb8b16-6e5b-424e-b048-e133fac4db5f",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1efb8b16-6e5b-424e-b048-e133fac4db5f",
    "image": "perev_left",
    "point": {
      "latitude": 52.6303460035,
      "longitude": 31.1393380232
    }
  },
  "1f763fff-3d4e-4041-ac3c-275796ef7914": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1f763fff-3d4e-4041-ac3c-275796ef7914",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f763fff-3d4e-4041-ac3c-275796ef7914",
    "image": "perev_right",
    "point": {
      "latitude": 53.058807238,
      "longitude": 30.8929132269
    }
  },
  "1fa96313-b66e-4236-a25d-fbf614852956": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1fa96313-b66e-4236-a25d-fbf614852956",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fa96313-b66e-4236-a25d-fbf614852956",
    "image": "perev_right",
    "point": {
      "latitude": 52.710850929,
      "longitude": 30.9706758526
    }
  },
  "1fd93419-eee2-42af-85d4-ff533d4cd813": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 157",
      "id": "1fd93419-eee2-42af-85d4-ff533d4cd813",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fd93419-eee2-42af-85d4-ff533d4cd813",
    "image": "perev_right",
    "point": {
      "latitude": 52.4844495082,
      "longitude": 31.1133927993
    }
  },
  "1ff51192-4432-4e8c-9b38-5a1d2e32237d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "1ff51192-4432-4e8c-9b38-5a1d2e32237d",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ff51192-4432-4e8c-9b38-5a1d2e32237d",
    "image": "perev_right",
    "point": {
      "latitude": 52.9476087976,
      "longitude": 30.9235240419
    }
  },
  "1ff67c62-0ae6-4714-b7a9-281c38097ed2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "1ff67c62-0ae6-4714-b7a9-281c38097ed2",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ff67c62-0ae6-4714-b7a9-281c38097ed2",
    "image": "perev_right",
    "point": {
      "latitude": 51.9869839428,
      "longitude": 30.8879214686
    }
  },
  "2001fbf7-0902-4108-b73b-f1af3cf08ece": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 137",
      "id": "2001fbf7-0902-4108-b73b-f1af3cf08ece",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2001fbf7-0902-4108-b73b-f1af3cf08ece",
    "image": "perev_right",
    "point": {
      "latitude": 52.3686473852,
      "longitude": 30.9539967189
    }
  },
  "20917ef5-6c7f-48b3-b7cd-2816c90c5d7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "20917ef5-6c7f-48b3-b7cd-2816c90c5d7d",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20917ef5-6c7f-48b3-b7cd-2816c90c5d7d",
    "image": "perev_left",
    "point": {
      "latitude": 53.1047804279,
      "longitude": 30.876177896
    }
  },
  "20a236b9-fdaf-48f7-bc70-66abe2df2a10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 123",
      "id": "20a236b9-fdaf-48f7-bc70-66abe2df2a10",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20a236b9-fdaf-48f7-bc70-66abe2df2a10",
    "image": "perev_left",
    "point": {
      "latitude": 52.3190141541,
      "longitude": 30.9391028824
    }
  },
  "20b16836-c998-4206-9b7b-4d2c33297579": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "20b16836-c998-4206-9b7b-4d2c33297579",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20b16836-c998-4206-9b7b-4d2c33297579",
    "image": "axis_romb",
    "point": {
      "latitude": 52.3838167903,
      "longitude": 31.0025134617
    }
  },
  "210e6135-19a4-41e8-9875-ea9f2936fd5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 60А",
      "id": "210e6135-19a4-41e8-9875-ea9f2936fd5f",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "210e6135-19a4-41e8-9875-ea9f2936fd5f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0890370683,
      "longitude": 30.9106085426
    }
  },
  "21142fb0-7efd-4c50-893a-d26c72565780": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 235",
      "id": "21142fb0-7efd-4c50-893a-d26c72565780",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21142fb0-7efd-4c50-893a-d26c72565780",
    "image": "perev_right",
    "point": {
      "latitude": 52.6158909709,
      "longitude": 31.1271470209
    }
  },
  "218b786d-6ad4-444e-a420-14782a7fb5fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "218b786d-6ad4-444e-a420-14782a7fb5fb",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "218b786d-6ad4-444e-a420-14782a7fb5fb",
    "image": "perev_right",
    "point": {
      "latitude": 53.2239445702,
      "longitude": 30.9363095426
    }
  },
  "21c0e3b2-0d33-43b7-9e59-a4a3d8ce1229": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "21c0e3b2-0d33-43b7-9e59-a4a3d8ce1229",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21c0e3b2-0d33-43b7-9e59-a4a3d8ce1229",
    "image": "bridge_low",
    "point": {
      "latitude": 52.4100757005,
      "longitude": 31.0084808741
    }
  },
  "21f139c1-74f2-45f1-8a98-5c93c4afcd45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 65",
      "id": "21f139c1-74f2-45f1-8a98-5c93c4afcd45",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21f139c1-74f2-45f1-8a98-5c93c4afcd45",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2391030189,
      "longitude": 30.949521715
    }
  },
  "222b4686-31ee-47b3-8104-59f6b34e36c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "222b4686-31ee-47b3-8104-59f6b34e36c4",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "222b4686-31ee-47b3-8104-59f6b34e36c4",
    "image": "perev_left",
    "point": {
      "latitude": 53.2360004323,
      "longitude": 30.970374867
    }
  },
  "23491be6-015a-4cb6-946d-aada515596c0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 195",
      "id": "23491be6-015a-4cb6-946d-aada515596c0",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23491be6-015a-4cb6-946d-aada515596c0",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8223318626,
      "longitude": 30.9728324479
    }
  },
  "23640063-08a1-4743-9cce-1f638f4403da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 3",
      "id": "23640063-08a1-4743-9cce-1f638f4403da",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23640063-08a1-4743-9cce-1f638f4403da",
    "image": "perev_right",
    "point": {
      "latitude": 51.9568600996,
      "longitude": 30.8213444588
    }
  },
  "237461a3-d348-4782-8d18-9168fe52e894": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 58",
      "id": "237461a3-d348-4782-8d18-9168fe52e894",
      "kilometrage": 34,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "237461a3-d348-4782-8d18-9168fe52e894",
    "image": "perev_left",
    "point": {
      "latitude": 52.080203289,
      "longitude": 30.9212443658
    }
  },
  "237a25e7-d760-4d2c-8158-bd923f16e1b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 71м",
      "id": "237a25e7-d760-4d2c-8158-bd923f16e1b5",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "237a25e7-d760-4d2c-8158-bd923f16e1b5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3599823873,
      "longitude": 30.9673578758
    }
  },
  "23e35935-4649-4ad8-b06d-a0185cfa39c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 88",
      "id": "23e35935-4649-4ad8-b06d-a0185cfa39c9",
      "kilometrage": 56,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23e35935-4649-4ad8-b06d-a0185cfa39c9",
    "image": "perev_right",
    "point": {
      "latitude": 52.2102540168,
      "longitude": 30.9294552527
    }
  },
  "241f39ee-0898-4eab-984d-745c21930513": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "241f39ee-0898-4eab-984d-745c21930513",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "241f39ee-0898-4eab-984d-745c21930513",
    "image": "perev_right",
    "point": {
      "latitude": 52.967688547,
      "longitude": 30.9263647652
    }
  },
  "24e556d7-f9db-42bf-9c5f-0632ade17298": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "24e556d7-f9db-42bf-9c5f-0632ade17298",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24e556d7-f9db-42bf-9c5f-0632ade17298",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.2492528292,
      "longitude": 30.9547082979
    }
  },
  "2525b271-433f-44a1-bd69-c184758c32fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 225",
      "id": "2525b271-433f-44a1-bd69-c184758c32fc",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2525b271-433f-44a1-bd69-c184758c32fc",
    "image": "perev_right",
    "point": {
      "latitude": 52.6025601332,
      "longitude": 31.0990442029
    }
  },
  "2546fb39-bbbb-488f-92b5-ecc2a25b7133": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2546fb39-bbbb-488f-92b5-ecc2a25b7133",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2546fb39-bbbb-488f-92b5-ecc2a25b7133",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4122761435,
      "longitude": 31.0123068449
    }
  },
  "25480b79-dabd-46a9-9042-abff99a1da3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "25480b79-dabd-46a9-9042-abff99a1da3d",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25480b79-dabd-46a9-9042-abff99a1da3d",
    "image": "perev_left",
    "point": {
      "latitude": 53.3828749625,
      "longitude": 31.0171302934
    }
  },
  "256eca57-0467-4a0c-b116-4c240a7b8f15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 105",
      "id": "256eca57-0467-4a0c-b116-4c240a7b8f15",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "256eca57-0467-4a0c-b116-4c240a7b8f15",
    "image": "perev_right",
    "point": {
      "latitude": 52.2376758871,
      "longitude": 30.930655154
    }
  },
  "25b6b4f8-73e4-4bed-9736-7f022315355e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "25b6b4f8-73e4-4bed-9736-7f022315355e",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25b6b4f8-73e4-4bed-9736-7f022315355e",
    "image": "perev_right",
    "point": {
      "latitude": 52.7265974264,
      "longitude": 30.9523943619
    }
  },
  "26d05200-6c7d-490b-bd26-72567048f95d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 190",
      "id": "26d05200-6c7d-490b-bd26-72567048f95d",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26d05200-6c7d-490b-bd26-72567048f95d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7877678293,
      "longitude": 30.9420834768
    }
  },
  "26eebb5c-9ce4-4202-82b5-a881c4facf63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 21",
      "id": "26eebb5c-9ce4-4202-82b5-a881c4facf63",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26eebb5c-9ce4-4202-82b5-a881c4facf63",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.9860007034,
      "longitude": 30.9106064129
    }
  },
  "271ee2d5-e001-45e1-9521-d9fa59c33103": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "271ee2d5-e001-45e1-9521-d9fa59c33103",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "271ee2d5-e001-45e1-9521-d9fa59c33103",
    "image": "perev_left",
    "point": {
      "latitude": 52.8453008816,
      "longitude": 30.9991460191
    }
  },
  "279369bc-715a-403a-b1c3-43e9eef82cfc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "279369bc-715a-403a-b1c3-43e9eef82cfc",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "279369bc-715a-403a-b1c3-43e9eef82cfc",
    "image": "perev_left",
    "point": {
      "latitude": 53.0545525589,
      "longitude": 30.8957029204
    }
  },
  "27a70597-8514-44af-9489-c02ff91cb847": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "27a70597-8514-44af-9489-c02ff91cb847",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27a70597-8514-44af-9489-c02ff91cb847",
    "image": "axis_romb",
    "point": {
      "latitude": 52.4536180298,
      "longitude": 31.076972173
    }
  },
  "27a82531-ed6d-49aa-bf1c-387ac12212a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "27a82531-ed6d-49aa-bf1c-387ac12212a9",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27a82531-ed6d-49aa-bf1c-387ac12212a9",
    "image": "perev_left",
    "point": {
      "latitude": 53.3618188355,
      "longitude": 30.9914336267
    }
  },
  "27d64ff0-ae67-4395-ada9-fa62e61cef28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "27d64ff0-ae67-4395-ada9-fa62e61cef28",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27d64ff0-ae67-4395-ada9-fa62e61cef28",
    "image": "perev_right",
    "point": {
      "latitude": 53.224005192,
      "longitude": 30.9572528515
    }
  },
  "27e8ba63-44c7-4e48-88ac-465cf1e987a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 29м",
      "id": "27e8ba63-44c7-4e48-88ac-465cf1e987a3",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27e8ba63-44c7-4e48-88ac-465cf1e987a3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1429752298,
      "longitude": 30.951928812
    }
  },
  "27fb5b19-d13d-4387-8701-7911f27bec91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "27fb5b19-d13d-4387-8701-7911f27bec91",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27fb5b19-d13d-4387-8701-7911f27bec91",
    "image": "perev_left",
    "point": {
      "latitude": 52.9279111586,
      "longitude": 30.9505840875
    }
  },
  "28c7c5e3-6359-4e89-bdd4-707d75c39b84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "28c7c5e3-6359-4e89-bdd4-707d75c39b84",
      "kilometrage": 218,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28c7c5e3-6359-4e89-bdd4-707d75c39b84",
    "image": "perev_right",
    "point": {
      "latitude": 52.9577850309,
      "longitude": 30.9291378887
    }
  },
  "28f39dd3-2606-40aa-adb0-8e5adf09e7ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 245",
      "id": "28f39dd3-2606-40aa-adb0-8e5adf09e7ac",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28f39dd3-2606-40aa-adb0-8e5adf09e7ac",
    "image": "perev_right",
    "point": {
      "latitude": 52.6359720712,
      "longitude": 31.1389840302
    }
  },
  "29148450-881a-4e22-b8c2-31709325f9cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 17",
      "id": "29148450-881a-4e22-b8c2-31709325f9cd",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29148450-881a-4e22-b8c2-31709325f9cd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1009417074,
      "longitude": 30.925769622
    }
  },
  "2923387d-d401-4338-8110-6b28afd9a7cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 181",
      "id": "2923387d-d401-4338-8110-6b28afd9a7cc",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2923387d-d401-4338-8110-6b28afd9a7cc",
    "image": "perev_right",
    "point": {
      "latitude": 52.5701154089,
      "longitude": 31.1372846733
    }
  },
  "293073ee-366b-4651-8fb1-30d6e347e5f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 110",
      "id": "293073ee-366b-4651-8fb1-30d6e347e5f5",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "293073ee-366b-4651-8fb1-30d6e347e5f5",
    "image": "kilometrage",
    "point": {
      "latitude": 52.438350049,
      "longitude": 31.0519754477
    }
  },
  "29ad7e12-0f07-4951-ad52-d110ab12a18f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "29ad7e12-0f07-4951-ad52-d110ab12a18f",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29ad7e12-0f07-4951-ad52-d110ab12a18f",
    "image": "perev_right",
    "point": {
      "latitude": 53.4154971137,
      "longitude": 31.0086025313
    }
  },
  "29cd1990-c83a-41e9-9f32-5ad55b6d40dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 126",
      "id": "29cd1990-c83a-41e9-9f32-5ad55b6d40dc",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29cd1990-c83a-41e9-9f32-5ad55b6d40dc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.5207481243,
      "longitude": 31.1705718419
    }
  },
  "2a6c199d-11c9-4bbf-9cec-27112f2b5713": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "2a6c199d-11c9-4bbf-9cec-27112f2b5713",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a6c199d-11c9-4bbf-9cec-27112f2b5713",
    "image": "perev_left",
    "point": {
      "latitude": 53.3436499325,
      "longitude": 31.0052726675
    }
  },
  "2aa705f9-e6ca-4149-9c8d-b11c93dfecbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2aa705f9-e6ca-4149-9c8d-b11c93dfecbd",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2aa705f9-e6ca-4149-9c8d-b11c93dfecbd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8839549876,
      "longitude": 30.96140892
    }
  },
  "2afa045f-2c9f-4ddb-ae7f-c762c556d654": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 90",
      "id": "2afa045f-2c9f-4ddb-ae7f-c762c556d654",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2afa045f-2c9f-4ddb-ae7f-c762c556d654",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3435740879,
      "longitude": 30.9623050923
    }
  },
  "2bdf56ef-0ecc-4fd0-84ac-033316d9baf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 41",
      "id": "2bdf56ef-0ecc-4fd0-84ac-033316d9baf3",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bdf56ef-0ecc-4fd0-84ac-033316d9baf3",
    "image": "perev_left",
    "point": {
      "latitude": 52.0451911758,
      "longitude": 30.9443306014
    }
  },
  "2bfc18b3-231d-4ccd-89d6-f7dc48673f8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 27",
      "id": "2bfc18b3-231d-4ccd-89d6-f7dc48673f8a",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bfc18b3-231d-4ccd-89d6-f7dc48673f8a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1292319673,
      "longitude": 30.9455091292
    }
  },
  "2c12140c-c332-44b9-a8e4-24a5cddce372": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "2c12140c-c332-44b9-a8e4-24a5cddce372",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c12140c-c332-44b9-a8e4-24a5cddce372",
    "image": "perev_left",
    "point": {
      "latitude": 53.2405770332,
      "longitude": 30.9653701173
    }
  },
  "2c28ac0e-5107-44ea-a4ca-0eafc19c63d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2c28ac0e-5107-44ea-a4ca-0eafc19c63d8",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c28ac0e-5107-44ea-a4ca-0eafc19c63d8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3427564244,
      "longitude": 30.9369824743
    }
  },
  "2cfabc72-26ba-479a-b336-4e49270db5a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "2cfabc72-26ba-479a-b336-4e49270db5a4",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cfabc72-26ba-479a-b336-4e49270db5a4",
    "image": "perev_left",
    "point": {
      "latitude": 53.161757598,
      "longitude": 30.8794139653
    }
  },
  "2d10a07a-df34-48ef-ae85-e69fd9e97690": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "2d10a07a-df34-48ef-ae85-e69fd9e97690",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d10a07a-df34-48ef-ae85-e69fd9e97690",
    "image": "perev_left",
    "point": {
      "latitude": 52.7317401584,
      "longitude": 30.961803695
    }
  },
  "2d94f78d-9a6c-4ec0-8a77-69852682b024": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "2d94f78d-9a6c-4ec0-8a77-69852682b024",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d94f78d-9a6c-4ec0-8a77-69852682b024",
    "image": "perev_left",
    "point": {
      "latitude": 53.049900218,
      "longitude": 30.8959855795
    }
  },
  "2dd7dfbd-0acd-4c23-8931-aa096651265a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "2dd7dfbd-0acd-4c23-8931-aa096651265a",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2dd7dfbd-0acd-4c23-8931-aa096651265a",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9959486224,
      "longitude": 30.891661703
    }
  },
  "2eb13c8c-76b3-4467-b9a6-101ba149ae8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "2eb13c8c-76b3-4467-b9a6-101ba149ae8c",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2eb13c8c-76b3-4467-b9a6-101ba149ae8c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2650111156,
      "longitude": 30.9688830074
    }
  },
  "2edcb632-21ac-49f9-8cdf-539fe07873ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 124",
      "id": "2edcb632-21ac-49f9-8cdf-539fe07873ff",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2edcb632-21ac-49f9-8cdf-539fe07873ff",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4805220567,
      "longitude": 31.1466338764
    }
  },
  "2ede3f36-e039-402d-a053-e822dfa51f09": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2ede3f36-e039-402d-a053-e822dfa51f09",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ede3f36-e039-402d-a053-e822dfa51f09",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.5299457514,
      "longitude": 31.1718066314
    }
  },
  "2eebb6ef-2999-4d53-bd9f-ec53a245be58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 104",
      "id": "2eebb6ef-2999-4d53-bd9f-ec53a245be58",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2eebb6ef-2999-4d53-bd9f-ec53a245be58",
    "image": "perev_right",
    "point": {
      "latitude": 52.2400802551,
      "longitude": 30.9364287216
    }
  },
  "2f16df59-28ff-47d1-86c9-880ac75e94bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 185",
      "id": "2f16df59-28ff-47d1-86c9-880ac75e94bb",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f16df59-28ff-47d1-86c9-880ac75e94bb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7611866567,
      "longitude": 30.9481501703
    }
  },
  "2f2ea928-6dfd-4131-8386-2d4168439a83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 242",
      "id": "2f2ea928-6dfd-4131-8386-2d4168439a83",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f2ea928-6dfd-4131-8386-2d4168439a83",
    "image": "perev_right",
    "point": {
      "latitude": 52.6212734855,
      "longitude": 31.1327029566
    }
  },
  "2f2ef72c-8877-4afb-963b-a4931ed23d70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "2f2ef72c-8877-4afb-963b-a4931ed23d70",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f2ef72c-8877-4afb-963b-a4931ed23d70",
    "image": "perev_right",
    "point": {
      "latitude": 53.2702678806,
      "longitude": 30.9725691472
    }
  },
  "2f5318dc-53ac-4b69-a437-5144e7d6f14e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2f5318dc-53ac-4b69-a437-5144e7d6f14e",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f5318dc-53ac-4b69-a437-5144e7d6f14e",
    "image": "name_of",
    "point": {
      "latitude": 52.6315270279,
      "longitude": 31.1398889755
    }
  },
  "2f5d66b5-efaf-401c-97e6-435f8edc5a85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 187",
      "id": "2f5d66b5-efaf-401c-97e6-435f8edc5a85",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f5d66b5-efaf-401c-97e6-435f8edc5a85",
    "image": "perev_right",
    "point": {
      "latitude": 52.5769049173,
      "longitude": 31.1232628286
    }
  },
  "2f8c6e7d-2b00-4a95-99f5-53fdaacb45df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 117",
      "id": "2f8c6e7d-2b00-4a95-99f5-53fdaacb45df",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f8c6e7d-2b00-4a95-99f5-53fdaacb45df",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4671470517,
      "longitude": 31.086531118
    }
  },
  "30175524-f084-4fe9-a441-dd245077eeb3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "30175524-f084-4fe9-a441-dd245077eeb3",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30175524-f084-4fe9-a441-dd245077eeb3",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.7029253875,
      "longitude": 30.9914200104
    }
  },
  "3039c9f5-b0ec-47fc-9f1c-318ee70db85e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 169",
      "id": "3039c9f5-b0ec-47fc-9f1c-318ee70db85e",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3039c9f5-b0ec-47fc-9f1c-318ee70db85e",
    "image": "perev_left",
    "point": {
      "latitude": 52.5113069776,
      "longitude": 31.1641094963
    }
  },
  "3084398e-e41a-4eee-a018-5941893187de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3084398e-e41a-4eee-a018-5941893187de",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3084398e-e41a-4eee-a018-5941893187de",
    "image": "perev_right",
    "point": {
      "latitude": 53.0388679145,
      "longitude": 30.8987654436
    }
  },
  "30993d22-c067-4e18-87fe-dd1ac73755c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "30993d22-c067-4e18-87fe-dd1ac73755c4",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30993d22-c067-4e18-87fe-dd1ac73755c4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9380028556,
      "longitude": 30.9436439144
    }
  },
  "309c5de2-c3bb-42c5-aad0-454d6e1b1c16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "309c5de2-c3bb-42c5-aad0-454d6e1b1c16",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "309c5de2-c3bb-42c5-aad0-454d6e1b1c16",
    "image": "perev_left",
    "point": {
      "latitude": 52.9315354269,
      "longitude": 30.9458493844
    }
  },
  "30c581e0-3cf8-4cad-8da9-b6fb9b700bdf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 285",
      "id": "30c581e0-3cf8-4cad-8da9-b6fb9b700bdf",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30c581e0-3cf8-4cad-8da9-b6fb9b700bdf",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3720599808,
      "longitude": 30.9883723997
    }
  },
  "30cdee4e-f872-4942-a051-b42858ee0852": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 107",
      "id": "30cdee4e-f872-4942-a051-b42858ee0852",
      "kilometrage": 68,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30cdee4e-f872-4942-a051-b42858ee0852",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.2427153755,
      "longitude": 30.9083065577
    }
  },
  "31578dde-f47a-4983-a386-cb93e4fbbd90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "31578dde-f47a-4983-a386-cb93e4fbbd90",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31578dde-f47a-4983-a386-cb93e4fbbd90",
    "image": "perev_right",
    "point": {
      "latitude": 53.3391720827,
      "longitude": 30.9989179208
    }
  },
  "31ff4195-a9b1-4e80-af50-0993179339da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 88",
      "id": "31ff4195-a9b1-4e80-af50-0993179339da",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31ff4195-a9b1-4e80-af50-0993179339da",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3937263664,
      "longitude": 31.0066864521
    }
  },
  "32213f26-9464-4af2-a9bc-1b62233d6ddd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "32213f26-9464-4af2-a9bc-1b62233d6ddd",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32213f26-9464-4af2-a9bc-1b62233d6ddd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3945690593,
      "longitude": 30.9956976752
    }
  },
  "324271b0-b90e-4cf6-8bc0-ef311a85e414": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 174",
      "id": "324271b0-b90e-4cf6-8bc0-ef311a85e414",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "324271b0-b90e-4cf6-8bc0-ef311a85e414",
    "image": "perev_right",
    "point": {
      "latitude": 52.5490423933,
      "longitude": 31.1696869857
    }
  },
  "32d1568f-3bbc-4557-88d8-ddf7ff91ded1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "32d1568f-3bbc-4557-88d8-ddf7ff91ded1",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32d1568f-3bbc-4557-88d8-ddf7ff91ded1",
    "image": "perev_right",
    "point": {
      "latitude": 53.3469123985,
      "longitude": 31.0023177368
    }
  },
  "3327339e-e26b-43ac-89f4-62023c704b5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "3327339e-e26b-43ac-89f4-62023c704b5b",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3327339e-e26b-43ac-89f4-62023c704b5b",
    "image": "perev_left",
    "point": {
      "latitude": 53.2017800122,
      "longitude": 30.9002905755
    }
  },
  "3356206b-588e-402a-b580-1d884e392e37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3356206b-588e-402a-b580-1d884e392e37",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3356206b-588e-402a-b580-1d884e392e37",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4106518196,
      "longitude": 31.0106068665
    }
  },
  "3366d57b-fd5e-4341-9662-cf86fdcf8d3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3366d57b-fd5e-4341-9662-cf86fdcf8d3c",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3366d57b-fd5e-4341-9662-cf86fdcf8d3c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2558488503,
      "longitude": 30.9585046373
    }
  },
  "33946e03-5d98-4ac0-a20b-aa5967fa5488": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "33946e03-5d98-4ac0-a20b-aa5967fa5488",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33946e03-5d98-4ac0-a20b-aa5967fa5488",
    "image": "perev_right",
    "point": {
      "latitude": 53.3941107275,
      "longitude": 30.9965163784
    }
  },
  "340cac8b-4090-4adc-a0e6-a9fda03de134": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 180",
      "id": "340cac8b-4090-4adc-a0e6-a9fda03de134",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "340cac8b-4090-4adc-a0e6-a9fda03de134",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7415172694,
      "longitude": 30.9381219499
    }
  },
  "3454ddf8-0ae2-445b-b55d-c097a53af492": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "3454ddf8-0ae2-445b-b55d-c097a53af492",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3454ddf8-0ae2-445b-b55d-c097a53af492",
    "image": "bridge_low",
    "point": {
      "latitude": 53.4088796916,
      "longitude": 31.0093716285
    }
  },
  "3472abad-bff6-455b-8d2b-ab361d600fc9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 170",
      "id": "3472abad-bff6-455b-8d2b-ab361d600fc9",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3472abad-bff6-455b-8d2b-ab361d600fc9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7118067077,
      "longitude": 30.9701606691
    }
  },
  "348d03a1-7bf9-4b31-bcd7-2bd8190f4313": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 105",
      "id": "348d03a1-7bf9-4b31-bcd7-2bd8190f4313",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "348d03a1-7bf9-4b31-bcd7-2bd8190f4313",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4376059523,
      "longitude": 31.0444883923
    }
  },
  "34963f28-5594-46ac-9ea2-c5ed543f6f2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "34963f28-5594-46ac-9ea2-c5ed543f6f2b",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34963f28-5594-46ac-9ea2-c5ed543f6f2b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.5625800113,
      "longitude": 31.1545424433
    }
  },
  "35208455-34b8-4299-aff6-b223959cc811": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 60",
      "id": "35208455-34b8-4299-aff6-b223959cc811",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35208455-34b8-4299-aff6-b223959cc811",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2188171938,
      "longitude": 30.9285852977
    }
  },
  "35725bcb-cde4-4861-a9cd-9f979f800726": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 168",
      "id": "35725bcb-cde4-4861-a9cd-9f979f800726",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35725bcb-cde4-4861-a9cd-9f979f800726",
    "image": "perev_right",
    "point": {
      "latitude": 52.5060928924,
      "longitude": 31.1556045651
    }
  },
  "3577c043-6938-44cf-ac4a-863eaaf411b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 46",
      "id": "3577c043-6938-44cf-ac4a-863eaaf411b3",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3577c043-6938-44cf-ac4a-863eaaf411b3",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0752345741,
      "longitude": 30.9338257596
    }
  },
  "3586100a-fc8d-4352-80d3-80f3f8b58df1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 119м",
      "id": "3586100a-fc8d-4352-80d3-80f3f8b58df1",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3586100a-fc8d-4352-80d3-80f3f8b58df1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4763576412,
      "longitude": 31.0946790065
    }
  },
  "35b0f276-b857-41e5-96c0-49cce1e298ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 21",
      "id": "35b0f276-b857-41e5-96c0-49cce1e298ff",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35b0f276-b857-41e5-96c0-49cce1e298ff",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1043256577,
      "longitude": 30.9524253794
    }
  },
  "35cc89db-8e01-4d07-aa3d-3f949d87eaed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "35cc89db-8e01-4d07-aa3d-3f949d87eaed",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35cc89db-8e01-4d07-aa3d-3f949d87eaed",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8549500999,
      "longitude": 30.9917241437
    }
  },
  "36645f11-c8a8-4eda-b161-c588b71e5838": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 5",
      "id": "36645f11-c8a8-4eda-b161-c588b71e5838",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36645f11-c8a8-4eda-b161-c588b71e5838",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9677492886,
      "longitude": 30.8688680374
    }
  },
  "37128e2c-9f5f-4624-b8cb-59be6d877085": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "37128e2c-9f5f-4624-b8cb-59be6d877085",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37128e2c-9f5f-4624-b8cb-59be6d877085",
    "image": "perev_left",
    "point": {
      "latitude": 53.153993085,
      "longitude": 30.8775782383
    }
  },
  "37a41100-7d29-4816-9d07-f8dc39599b43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1м",
      "id": "37a41100-7d29-4816-9d07-f8dc39599b43",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37a41100-7d29-4816-9d07-f8dc39599b43",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9503344558,
      "longitude": 30.8129669371
    }
  },
  "37be9074-e833-4fe3-93b0-35055f4c32e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "37be9074-e833-4fe3-93b0-35055f4c32e2",
      "kilometrage": 254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37be9074-e833-4fe3-93b0-35055f4c32e2",
    "image": "perev_right",
    "point": {
      "latitude": 53.1961693146,
      "longitude": 30.8962305116
    }
  },
  "380e656d-a4eb-486f-b4ca-12d3fb57510b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "380e656d-a4eb-486f-b4ca-12d3fb57510b",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "380e656d-a4eb-486f-b4ca-12d3fb57510b",
    "image": "name_of",
    "point": {
      "latitude": 52.5173733383,
      "longitude": 31.1699005119
    }
  },
  "38110bdc-d694-4c53-8e59-3e5af3e336c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "38110bdc-d694-4c53-8e59-3e5af3e336c4",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38110bdc-d694-4c53-8e59-3e5af3e336c4",
    "image": "perev_right",
    "point": {
      "latitude": 53.4299309799,
      "longitude": 31.0038119342
    }
  },
  "38997480-efea-448c-a45c-b789b292f5bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "38997480-efea-448c-a45c-b789b292f5bd",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38997480-efea-448c-a45c-b789b292f5bd",
    "image": "perev_right",
    "point": {
      "latitude": 53.2796909422,
      "longitude": 30.9868381469
    }
  },
  "38b1f91f-2d43-43c9-8ca8-5e9d2068fcdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "38b1f91f-2d43-43c9-8ca8-5e9d2068fcdd",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38b1f91f-2d43-43c9-8ca8-5e9d2068fcdd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.325304112,
      "longitude": 30.9363687291
    }
  },
  "395149ae-baf2-4de4-8083-81aef766b619": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 80",
      "id": "395149ae-baf2-4de4-8083-81aef766b619",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "395149ae-baf2-4de4-8083-81aef766b619",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2996459618,
      "longitude": 30.9342214122
    }
  },
  "39601ed4-ce88-4c95-99f7-98ca759ed2c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "39601ed4-ce88-4c95-99f7-98ca759ed2c4",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39601ed4-ce88-4c95-99f7-98ca759ed2c4",
    "image": "perev_right",
    "point": {
      "latitude": 53.384191158,
      "longitude": 31.0079966803
    }
  },
  "3985223e-34ef-456d-8093-52fad5aad011": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 95",
      "id": "3985223e-34ef-456d-8093-52fad5aad011",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3985223e-34ef-456d-8093-52fad5aad011",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4176377461,
      "longitude": 31.0163614455
    }
  },
  "398af44c-1765-4ba7-88f1-c0cf7e7bfba3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 122",
      "id": "398af44c-1765-4ba7-88f1-c0cf7e7bfba3",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "398af44c-1765-4ba7-88f1-c0cf7e7bfba3",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.3149985788,
      "longitude": 30.9531947223
    }
  },
  "399feeeb-8a3f-4036-a1a7-90eb33b43cc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 11",
      "id": "399feeeb-8a3f-4036-a1a7-90eb33b43cc5",
      "kilometrage": 6,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "399feeeb-8a3f-4036-a1a7-90eb33b43cc5",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.9701899674,
      "longitude": 30.8544167861
    }
  },
  "39c985a4-f348-4c91-901b-b1eabb878232": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "39c985a4-f348-4c91-901b-b1eabb878232",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39c985a4-f348-4c91-901b-b1eabb878232",
    "image": "axis_romb",
    "point": {
      "latitude": 52.8894289931,
      "longitude": 30.9610590981
    }
  },
  "39d736a2-75a2-41f1-969a-9e7ed906a3cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 50",
      "id": "39d736a2-75a2-41f1-969a-9e7ed906a3cc",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39d736a2-75a2-41f1-969a-9e7ed906a3cc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1649417272,
      "longitude": 30.9439998237
    }
  },
  "3a18f4b0-9ece-4a9d-bfab-2570331c69d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 62",
      "id": "3a18f4b0-9ece-4a9d-bfab-2570331c69d5",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a18f4b0-9ece-4a9d-bfab-2570331c69d5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3175660297,
      "longitude": 30.9334796651
    }
  },
  "3a3eb049-b0d5-423b-a893-816a44dee683": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3a3eb049-b0d5-423b-a893-816a44dee683",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a3eb049-b0d5-423b-a893-816a44dee683",
    "image": "perev_right",
    "point": {
      "latitude": 52.702421474,
      "longitude": 31.0106591901
    }
  },
  "3b185ad3-80df-4bdd-89a2-cab44f103991": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 10",
      "id": "3b185ad3-80df-4bdd-89a2-cab44f103991",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b185ad3-80df-4bdd-89a2-cab44f103991",
    "image": "perev_right",
    "point": {
      "latitude": 51.9659051939,
      "longitude": 30.8513706744
    }
  },
  "3b268d94-3c18-462e-bc63-86dcc7e90233": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3b268d94-3c18-462e-bc63-86dcc7e90233",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b268d94-3c18-462e-bc63-86dcc7e90233",
    "image": "perev_right",
    "point": {
      "latitude": 52.7010801255,
      "longitude": 31.0218441123
    }
  },
  "3b652217-95bf-48b5-8aff-cab185fd83cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 129",
      "id": "3b652217-95bf-48b5-8aff-cab185fd83cf",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b652217-95bf-48b5-8aff-cab185fd83cf",
    "image": "buyo_left",
    "point": {
      "latitude": 52.5390726204,
      "longitude": 31.1711337095
    }
  },
  "3b684b5d-bb1b-42c0-9af0-37032c472678": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3b684b5d-bb1b-42c0-9af0-37032c472678",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b684b5d-bb1b-42c0-9af0-37032c472678",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.447736743,
      "longitude": 31.0601098635
    }
  },
  "3b6a82f6-1f51-477d-b6d1-eee7735abc36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 46м",
      "id": "3b6a82f6-1f51-477d-b6d1-eee7735abc36",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b6a82f6-1f51-477d-b6d1-eee7735abc36",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2636309091,
      "longitude": 30.8996893618
    }
  },
  "3b8e3fa8-04d2-4a38-ad17-57718eb38ef6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "3b8e3fa8-04d2-4a38-ad17-57718eb38ef6",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b8e3fa8-04d2-4a38-ad17-57718eb38ef6",
    "image": "perev_left",
    "point": {
      "latitude": 53.2961358362,
      "longitude": 31.0151105954
    }
  },
  "3c6b0625-acd2-43dc-9bf1-410a6915c75f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 220",
      "id": "3c6b0625-acd2-43dc-9bf1-410a6915c75f",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c6b0625-acd2-43dc-9bf1-410a6915c75f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9702299036,
      "longitude": 30.9235017449
    }
  },
  "3c9ccdf4-c61a-4e9e-a07e-fe46a646da78": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 85",
      "id": "3c9ccdf4-c61a-4e9e-a07e-fe46a646da78",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c9ccdf4-c61a-4e9e-a07e-fe46a646da78",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.192243567,
      "longitude": 30.927717217
    }
  },
  "3ca68098-866e-4588-9ff4-7db3930db08c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "3ca68098-866e-4588-9ff4-7db3930db08c",
      "kilometrage": 207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ca68098-866e-4588-9ff4-7db3930db08c",
    "image": "perev_left",
    "point": {
      "latitude": 52.9001685367,
      "longitude": 30.9487326959
    }
  },
  "3ccc8bee-a5fa-4dfd-9870-74942a1d1057": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 76",
      "id": "3ccc8bee-a5fa-4dfd-9870-74942a1d1057",
      "kilometrage": 48,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ccc8bee-a5fa-4dfd-9870-74942a1d1057",
    "image": "perev_left",
    "point": {
      "latitude": 52.1590857565,
      "longitude": 30.9644917175
    }
  },
  "3d684dd2-30d3-4608-9ab4-1653e4a1fb84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 23м",
      "id": "3d684dd2-30d3-4608-9ab4-1653e4a1fb84",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d684dd2-30d3-4608-9ab4-1653e4a1fb84",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1088833863,
      "longitude": 30.9445666277
    }
  },
  "3d83e69a-3c46-4adf-8244-c986da2705cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3d83e69a-3c46-4adf-8244-c986da2705cf",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d83e69a-3c46-4adf-8244-c986da2705cf",
    "image": "perev_right",
    "point": {
      "latitude": 52.9270417956,
      "longitude": 30.9462399847
    }
  },
  "3d9bfe67-da77-43e0-9a7a-fc85f2524f3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "3d9bfe67-da77-43e0-9a7a-fc85f2524f3f",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d9bfe67-da77-43e0-9a7a-fc85f2524f3f",
    "image": "bridge_low",
    "point": {
      "latitude": 52.4534422349,
      "longitude": 31.076550889
    }
  },
  "3d9e0eb7-a749-46a2-acf5-0cb4d44a985c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "3d9e0eb7-a749-46a2-acf5-0cb4d44a985c",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d9e0eb7-a749-46a2-acf5-0cb4d44a985c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.8413998303,
      "longitude": 30.9950143753
    }
  },
  "3dd410ce-3e65-4989-87f2-6df2b908b544": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 109",
      "id": "3dd410ce-3e65-4989-87f2-6df2b908b544",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dd410ce-3e65-4989-87f2-6df2b908b544",
    "image": "perev_right",
    "point": {
      "latitude": 52.2330690923,
      "longitude": 30.9064149652
    }
  },
  "3e625113-54c3-4ad4-b34a-e3f024aacc97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3e625113-54c3-4ad4-b34a-e3f024aacc97",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e625113-54c3-4ad4-b34a-e3f024aacc97",
    "image": "perev_right",
    "point": {
      "latitude": 53.3870723585,
      "longitude": 30.9991942198
    }
  },
  "3f334848-c7d6-4958-ada2-fb7072c31a67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "3f334848-c7d6-4958-ada2-fb7072c31a67",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f334848-c7d6-4958-ada2-fb7072c31a67",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9766793253,
      "longitude": 30.8872671584
    }
  },
  "3f3864c3-42a9-4f34-a2b2-2a3d4dcfa3e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 189",
      "id": "3f3864c3-42a9-4f34-a2b2-2a3d4dcfa3e0",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f3864c3-42a9-4f34-a2b2-2a3d4dcfa3e0",
    "image": "perev_left",
    "point": {
      "latitude": 52.5816755324,
      "longitude": 31.1212376146
    }
  },
  "3f4b072c-eb6a-4d13-ade7-7958f7643d4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3f4b072c-eb6a-4d13-ade7-7958f7643d4d",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f4b072c-eb6a-4d13-ade7-7958f7643d4d",
    "image": "perev_right",
    "point": {
      "latitude": 53.085020801,
      "longitude": 30.8691298828
    }
  },
  "3f5fc4e9-133b-451a-ad1b-3418d0c7ac13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 290",
      "id": "3f5fc4e9-133b-451a-ad1b-3418d0c7ac13",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f5fc4e9-133b-451a-ad1b-3418d0c7ac13",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3886157509,
      "longitude": 31.0099866917
    }
  },
  "3f8fde7c-d4fc-4f3e-a22b-5f41a8c0e8f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "3f8fde7c-d4fc-4f3e-a22b-5f41a8c0e8f3",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f8fde7c-d4fc-4f3e-a22b-5f41a8c0e8f3",
    "image": "axis_romb",
    "point": {
      "latitude": 52.2966212765,
      "longitude": 30.9321757243
    }
  },
  "3f9b1ff6-5fd6-441a-b202-57d2fff37cdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3f9b1ff6-5fd6-441a-b202-57d2fff37cdd",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f9b1ff6-5fd6-441a-b202-57d2fff37cdd",
    "image": "perev_right",
    "point": {
      "latitude": 52.7452517442,
      "longitude": 30.9353550962
    }
  },
  "3f9c6aab-d79f-4d51-8dd6-e3f57ceb3389": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 86",
      "id": "3f9c6aab-d79f-4d51-8dd6-e3f57ceb3389",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f9c6aab-d79f-4d51-8dd6-e3f57ceb3389",
    "image": "buyo_left",
    "point": {
      "latitude": 52.387181428,
      "longitude": 31.0112905772
    }
  },
  "3ff088c8-9f92-47b1-bf93-6b25cb523773": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "3ff088c8-9f92-47b1-bf93-6b25cb523773",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ff088c8-9f92-47b1-bf93-6b25cb523773",
    "image": "perev_right",
    "point": {
      "latitude": 53.3961001125,
      "longitude": 30.9957987086
    }
  },
  "40448d74-a716-4664-9c09-0823c2379137": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 109",
      "id": "40448d74-a716-4664-9c09-0823c2379137",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40448d74-a716-4664-9c09-0823c2379137",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4511488388,
      "longitude": 31.0707958461
    }
  },
  "40b01e30-16f2-4fe1-934b-48ec29256b35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 125",
      "id": "40b01e30-16f2-4fe1-934b-48ec29256b35",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40b01e30-16f2-4fe1-934b-48ec29256b35",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5019958967,
      "longitude": 31.1600485513
    }
  },
  "40bba60f-22ec-414c-90fb-fb9d290701df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "40bba60f-22ec-414c-90fb-fb9d290701df",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40bba60f-22ec-414c-90fb-fb9d290701df",
    "image": "perev_right",
    "point": {
      "latitude": 52.6639623486,
      "longitude": 31.0821613179
    }
  },
  "40c1dc5f-b9a0-4ac8-a90f-0e07869a2452": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "40c1dc5f-b9a0-4ac8-a90f-0e07869a2452",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40c1dc5f-b9a0-4ac8-a90f-0e07869a2452",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8579858619,
      "longitude": 30.9891486881
    }
  },
  "40f9ea32-01d2-4d6c-bc2c-eb78fd5c1ba9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "40f9ea32-01d2-4d6c-bc2c-eb78fd5c1ba9",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40f9ea32-01d2-4d6c-bc2c-eb78fd5c1ba9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.5305990179,
      "longitude": 31.1719433852
    }
  },
  "42073aac-3d57-4192-81aa-d4079b3f8433": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "42073aac-3d57-4192-81aa-d4079b3f8433",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42073aac-3d57-4192-81aa-d4079b3f8433",
    "image": "perev_right",
    "point": {
      "latitude": 52.8065308596,
      "longitude": 30.9591668708
    }
  },
  "422353bb-ca9f-4087-86ce-df9b5b897572": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 34м",
      "id": "422353bb-ca9f-4087-86ce-df9b5b897572",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "422353bb-ca9f-4087-86ce-df9b5b897572",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1818263727,
      "longitude": 30.946697157
    }
  },
  "425d96dc-3b83-449b-99de-ba0ad6bf4c8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "425d96dc-3b83-449b-99de-ba0ad6bf4c8a",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "425d96dc-3b83-449b-99de-ba0ad6bf4c8a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.385835192,
      "longitude": 30.9929724298
    }
  },
  "42ce6392-2352-4415-ad4d-bde6673e4e01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "42ce6392-2352-4415-ad4d-bde6673e4e01",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42ce6392-2352-4415-ad4d-bde6673e4e01",
    "image": "perev_right",
    "point": {
      "latitude": 52.7654016114,
      "longitude": 30.9357366016
    }
  },
  "430c5427-d52b-40a3-ac49-cfbc730d1d10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "430c5427-d52b-40a3-ac49-cfbc730d1d10",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "430c5427-d52b-40a3-ac49-cfbc730d1d10",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9390764207,
      "longitude": 30.9431453432
    }
  },
  "43491305-bf05-4997-9a9c-7790ca741fce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "43491305-bf05-4997-9a9c-7790ca741fce",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43491305-bf05-4997-9a9c-7790ca741fce",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4567360161,
      "longitude": 31.0800330525
    }
  },
  "435d4f37-0721-45c3-8bdf-5b33b6be59d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "435d4f37-0721-45c3-8bdf-5b33b6be59d2",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "435d4f37-0721-45c3-8bdf-5b33b6be59d2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8923873861,
      "longitude": 30.9622221477
    }
  },
  "43fe028e-25d7-4ffe-8541-5b543a88f6fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 183",
      "id": "43fe028e-25d7-4ffe-8541-5b543a88f6fc",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43fe028e-25d7-4ffe-8541-5b543a88f6fc",
    "image": "perev_left",
    "point": {
      "latitude": 52.5745365953,
      "longitude": 31.1312057918
    }
  },
  "4439a552-969a-4ccb-ba65-a73605cc6455": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 97м",
      "id": "4439a552-969a-4ccb-ba65-a73605cc6455",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4439a552-969a-4ccb-ba65-a73605cc6455",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4221048071,
      "longitude": 31.0194054184
    }
  },
  "451fc521-d0d3-4dcb-b1e1-034063fa9419": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 111",
      "id": "451fc521-d0d3-4dcb-b1e1-034063fa9419",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "451fc521-d0d3-4dcb-b1e1-034063fa9419",
    "image": "perev_right",
    "point": {
      "latitude": 52.2298386367,
      "longitude": 30.894381352
    }
  },
  "456a29a6-d606-4abe-88d9-45b03acb85f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "456a29a6-d606-4abe-88d9-45b03acb85f5",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "456a29a6-d606-4abe-88d9-45b03acb85f5",
    "image": "perev_right",
    "point": {
      "latitude": 53.3749352103,
      "longitude": 30.9838739195
    }
  },
  "45f4a19a-683a-4172-9ceb-e228c49b33fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 72",
      "id": "45f4a19a-683a-4172-9ceb-e228c49b33fd",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45f4a19a-683a-4172-9ceb-e228c49b33fd",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1392206318,
      "longitude": 30.9392491776
    }
  },
  "464d1172-10da-4567-bebd-2fcb7215b01a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "464d1172-10da-4567-bebd-2fcb7215b01a",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "464d1172-10da-4567-bebd-2fcb7215b01a",
    "image": "perev_right",
    "point": {
      "latitude": 52.9203549722,
      "longitude": 30.9426250604
    }
  },
  "46c88790-1f0e-47b5-bfc8-062da120cf0f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "46c88790-1f0e-47b5-bfc8-062da120cf0f",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46c88790-1f0e-47b5-bfc8-062da120cf0f",
    "image": "axis_romb",
    "point": {
      "latitude": 52.4252241945,
      "longitude": 31.0219775825
    }
  },
  "46f6d34f-d957-48da-bc81-08d922465255": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "46f6d34f-d957-48da-bc81-08d922465255",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46f6d34f-d957-48da-bc81-08d922465255",
    "image": "speed_limit",
    "point": {
      "latitude": 52.4125146352,
      "longitude": 31.0129899501
    }
  },
  "4717ba67-cd93-4d76-a025-298c04cdf7dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4717ba67-cd93-4d76-a025-298c04cdf7dc",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4717ba67-cd93-4d76-a025-298c04cdf7dc",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8566286425,
      "longitude": 30.9895820665
    }
  },
  "47e5ff53-3d4c-41b8-ace5-8d34cae56108": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "47e5ff53-3d4c-41b8-ace5-8d34cae56108",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47e5ff53-3d4c-41b8-ace5-8d34cae56108",
    "image": "name_of",
    "point": {
      "latitude": 52.0242767182,
      "longitude": 30.9454761577
    }
  },
  "4878a5d3-b3db-4a0a-b839-a0996d8fe7df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "4878a5d3-b3db-4a0a-b839-a0996d8fe7df",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4878a5d3-b3db-4a0a-b839-a0996d8fe7df",
    "image": "perev_right",
    "point": {
      "latitude": 53.0628401834,
      "longitude": 30.8891526931
    }
  },
  "48a2ada4-8377-4bf6-a0cc-b47a3ddb978f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 60",
      "id": "48a2ada4-8377-4bf6-a0cc-b47a3ddb978f",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48a2ada4-8377-4bf6-a0cc-b47a3ddb978f",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.308623139,
      "longitude": 30.9501209655
    }
  },
  "48d3d030-05da-4a99-9577-be233baac269": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "48d3d030-05da-4a99-9577-be233baac269",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48d3d030-05da-4a99-9577-be233baac269",
    "image": "perev_right",
    "point": {
      "latitude": 52.0145361582,
      "longitude": 30.9211258388
    }
  },
  "48fd4380-6a42-48eb-8b6d-02891e03ae82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 116",
      "id": "48fd4380-6a42-48eb-8b6d-02891e03ae82",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48fd4380-6a42-48eb-8b6d-02891e03ae82",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4660833423,
      "longitude": 31.0848032323
    }
  },
  "497598d6-1a27-4a5b-9410-a1c354a195f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "497598d6-1a27-4a5b-9410-a1c354a195f8",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "497598d6-1a27-4a5b-9410-a1c354a195f8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3234047489,
      "longitude": 30.9331595659
    }
  },
  "49d3cd9e-cc0c-4476-a4ef-785e1aab756c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 67",
      "id": "49d3cd9e-cc0c-4476-a4ef-785e1aab756c",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49d3cd9e-cc0c-4476-a4ef-785e1aab756c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0994408625,
      "longitude": 30.9505177848
    }
  },
  "49df1dc2-f90a-44e2-a63f-265cd0517959": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "49df1dc2-f90a-44e2-a63f-265cd0517959",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49df1dc2-f90a-44e2-a63f-265cd0517959",
    "image": "perev_right",
    "point": {
      "latitude": 52.775775556,
      "longitude": 30.9517440959
    }
  },
  "4a0df967-36b1-4c68-9f21-696adba46652": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48",
      "id": "4a0df967-36b1-4c68-9f21-696adba46652",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a0df967-36b1-4c68-9f21-696adba46652",
    "image": "perev_left",
    "point": {
      "latitude": 52.0733316314,
      "longitude": 30.9443083462
    }
  },
  "4a43dca6-47c3-47a5-a189-112b60e0a0f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "4a43dca6-47c3-47a5-a189-112b60e0a0f4",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a43dca6-47c3-47a5-a189-112b60e0a0f4",
    "image": "perev_left",
    "point": {
      "latitude": 52.9069413311,
      "longitude": 30.9448181651
    }
  },
  "4a6c5b84-b6e8-4a10-84ef-6d7243bb9388": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4a6c5b84-b6e8-4a10-84ef-6d7243bb9388",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a6c5b84-b6e8-4a10-84ef-6d7243bb9388",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3744675219,
      "longitude": 30.9492397834
    }
  },
  "4a7575bd-b755-46b2-8a65-36a98b41b573": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "4a7575bd-b755-46b2-8a65-36a98b41b573",
      "kilometrage": 224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a7575bd-b755-46b2-8a65-36a98b41b573",
    "image": "perev_right",
    "point": {
      "latitude": 53.0072379951,
      "longitude": 30.9126002005
    }
  },
  "4abb7cf7-c83c-469a-8fc3-7ea4b8e1b341": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 69",
      "id": "4abb7cf7-c83c-469a-8fc3-7ea4b8e1b341",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4abb7cf7-c83c-469a-8fc3-7ea4b8e1b341",
    "image": "buyo_right",
    "point": {
      "latitude": 52.351343496,
      "longitude": 30.9686138807
    }
  },
  "4bbc0a9d-09e2-43a8-bd8e-ab3538d80d2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "4bbc0a9d-09e2-43a8-bd8e-ab3538d80d2a",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bbc0a9d-09e2-43a8-bd8e-ab3538d80d2a",
    "image": "perev_right",
    "point": {
      "latitude": 52.987773448,
      "longitude": 30.915251305
    }
  },
  "4bdc9b68-9ed9-411a-b558-1ad3194586f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 33",
      "id": "4bdc9b68-9ed9-411a-b558-1ad3194586f7",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bdc9b68-9ed9-411a-b558-1ad3194586f7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.167229064,
      "longitude": 30.9390844311
    }
  },
  "4bf3dc52-c117-48d7-9bbc-38707cff0169": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "4bf3dc52-c117-48d7-9bbc-38707cff0169",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bf3dc52-c117-48d7-9bbc-38707cff0169",
    "image": "perev_right",
    "point": {
      "latitude": 52.0162909754,
      "longitude": 30.9251816484
    }
  },
  "4c21ebdb-99d8-4db5-a5b9-87b16f6589e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "4c21ebdb-99d8-4db5-a5b9-87b16f6589e9",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c21ebdb-99d8-4db5-a5b9-87b16f6589e9",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4392213437,
      "longitude": 31.0380355627
    }
  },
  "4c97e904-1c41-4441-a4bb-77ed2a8815e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80",
      "id": "4c97e904-1c41-4441-a4bb-77ed2a8815e2",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c97e904-1c41-4441-a4bb-77ed2a8815e2",
    "image": "perev_right",
    "point": {
      "latitude": 52.1733380301,
      "longitude": 30.9386243287
    }
  },
  "4c9d0c18-ffe3-403c-b679-10baaf9d87ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 165",
      "id": "4c9d0c18-ffe3-403c-b679-10baaf9d87ac",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c9d0c18-ffe3-403c-b679-10baaf9d87ac",
    "image": "perev_right",
    "point": {
      "latitude": 52.4993503476,
      "longitude": 31.1435967564
    }
  },
  "4d7c540f-b275-44f3-a20a-f22245674f82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "4d7c540f-b275-44f3-a20a-f22245674f82",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d7c540f-b275-44f3-a20a-f22245674f82",
    "image": "perev_right",
    "point": {
      "latitude": 53.149728065,
      "longitude": 30.875935448
    }
  },
  "4dfc29d3-635d-4c92-8dad-31f2680df8d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 124",
      "id": "4dfc29d3-635d-4c92-8dad-31f2680df8d6",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4dfc29d3-635d-4c92-8dad-31f2680df8d6",
    "image": "perev_right",
    "point": {
      "latitude": 52.3159426174,
      "longitude": 30.9282381863
    }
  },
  "4dfd4a42-5b89-491b-a9db-1f80ab105556": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 36",
      "id": "4dfd4a42-5b89-491b-a9db-1f80ab105556",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4dfd4a42-5b89-491b-a9db-1f80ab105556",
    "image": "perev_left",
    "point": {
      "latitude": 52.0232040277,
      "longitude": 30.9445559439
    }
  },
  "4e65984d-dd7e-4a2a-a75c-86ff1033574a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 38",
      "id": "4e65984d-dd7e-4a2a-a75c-86ff1033574a",
      "kilometrage": 56,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e65984d-dd7e-4a2a-a75c-86ff1033574a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2055903558,
      "longitude": 30.9325104554
    }
  },
  "4fbf2cce-7410-41da-9fb3-430e69e61abc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "4fbf2cce-7410-41da-9fb3-430e69e61abc",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fbf2cce-7410-41da-9fb3-430e69e61abc",
    "image": "perev_left",
    "point": {
      "latitude": 53.0970535442,
      "longitude": 30.8705852365
    }
  },
  "5023bab5-6840-49b0-ba7c-23b0dec49b6a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "5023bab5-6840-49b0-ba7c-23b0dec49b6a",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5023bab5-6840-49b0-ba7c-23b0dec49b6a",
    "image": "perev_left",
    "point": {
      "latitude": 52.997282352,
      "longitude": 30.9189258242
    }
  },
  "503146d1-ced2-4e46-8426-2b40f6e8c544": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 252",
      "id": "503146d1-ced2-4e46-8426-2b40f6e8c544",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "503146d1-ced2-4e46-8426-2b40f6e8c544",
    "image": "perev_right",
    "point": {
      "latitude": 52.6527322185,
      "longitude": 31.1193194075
    }
  },
  "50a02c3b-715e-4de9-b85e-9ab228d1dbe8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "50a02c3b-715e-4de9-b85e-9ab228d1dbe8",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50a02c3b-715e-4de9-b85e-9ab228d1dbe8",
    "image": "perev_left",
    "point": {
      "latitude": 52.4859074966,
      "longitude": 31.1549804421
    }
  },
  "5118f647-eadf-43c6-a2a9-b6ead46cb57f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 195",
      "id": "5118f647-eadf-43c6-a2a9-b6ead46cb57f",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5118f647-eadf-43c6-a2a9-b6ead46cb57f",
    "image": "perev_right",
    "point": {
      "latitude": 52.5957171771,
      "longitude": 31.10643317
    }
  },
  "51229b75-2898-43e0-b866-b46a358c92a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "51229b75-2898-43e0-b866-b46a358c92a3",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51229b75-2898-43e0-b866-b46a358c92a3",
    "image": "perev_left",
    "point": {
      "latitude": 52.7627291851,
      "longitude": 30.9518502172
    }
  },
  "517ea13b-5414-4cec-9efd-fe6d671a35be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "517ea13b-5414-4cec-9efd-fe6d671a35be",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "517ea13b-5414-4cec-9efd-fe6d671a35be",
    "image": "perev_right",
    "point": {
      "latitude": 52.7065092267,
      "longitude": 30.9879025274
    }
  },
  "51faafc6-15e0-4256-9ec1-8c8c6dbffdef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 27",
      "id": "51faafc6-15e0-4256-9ec1-8c8c6dbffdef",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51faafc6-15e0-4256-9ec1-8c8c6dbffdef",
    "image": "perev_left",
    "point": {
      "latitude": 52.0036639974,
      "longitude": 30.9034759017
    }
  },
  "522155e8-e07f-4dfb-9d0a-e46e113d2933": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 68",
      "id": "522155e8-e07f-4dfb-9d0a-e46e113d2933",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "522155e8-e07f-4dfb-9d0a-e46e113d2933",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3490043263,
      "longitude": 30.9694788019
    }
  },
  "525ff9b2-98a5-4513-b508-9eca06802ca3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 72",
      "id": "525ff9b2-98a5-4513-b508-9eca06802ca3",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "525ff9b2-98a5-4513-b508-9eca06802ca3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3620081609,
      "longitude": 30.9724487002
    }
  },
  "5306ce3f-6398-4f38-bc1f-e268a43ab1f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "5306ce3f-6398-4f38-bc1f-e268a43ab1f7",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5306ce3f-6398-4f38-bc1f-e268a43ab1f7",
    "image": "perev_left",
    "point": {
      "latitude": 53.2217969322,
      "longitude": 30.943015899
    }
  },
  "5367a713-723e-4652-8e4a-7d72dc7f1b4c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "5367a713-723e-4652-8e4a-7d72dc7f1b4c",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5367a713-723e-4652-8e4a-7d72dc7f1b4c",
    "image": "perev_right",
    "point": {
      "latitude": 52.79466424,
      "longitude": 30.9522490586
    }
  },
  "537e175e-6956-4b25-b76e-caef6f991ca0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 22",
      "id": "537e175e-6956-4b25-b76e-caef6f991ca0",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "537e175e-6956-4b25-b76e-caef6f991ca0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.107170987,
      "longitude": 30.9466361245
    }
  },
  "53924e99-6136-4967-8f21-f5c8bb89c817": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "53924e99-6136-4967-8f21-f5c8bb89c817",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53924e99-6136-4967-8f21-f5c8bb89c817",
    "image": "name_of",
    "point": {
      "latitude": 52.8162425019,
      "longitude": 30.9756376294
    }
  },
  "541d0149-b469-43a4-ae32-cdaebbeba2a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "541d0149-b469-43a4-ae32-cdaebbeba2a3",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "541d0149-b469-43a4-ae32-cdaebbeba2a3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1236750667,
      "longitude": 30.867092055
    }
  },
  "5422771f-85fb-425d-908e-7ed4053eb1d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "5422771f-85fb-425d-908e-7ed4053eb1d6",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5422771f-85fb-425d-908e-7ed4053eb1d6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3546843099,
      "longitude": 30.9982761755
    }
  },
  "542bc58e-1a0a-45fc-ad71-dc37de559c21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "542bc58e-1a0a-45fc-ad71-dc37de559c21",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "542bc58e-1a0a-45fc-ad71-dc37de559c21",
    "image": "perev_left",
    "point": {
      "latitude": 51.9662232717,
      "longitude": 30.8757285351
    }
  },
  "5482f64e-eee4-4a1e-8791-5c37ca7f69e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 71",
      "id": "5482f64e-eee4-4a1e-8791-5c37ca7f69e7",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5482f64e-eee4-4a1e-8791-5c37ca7f69e7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1339171422,
      "longitude": 30.9409048926
    }
  },
  "54905967-3dfd-47b4-8bfd-e4d5fe7ca20b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "54905967-3dfd-47b4-8bfd-e4d5fe7ca20b",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54905967-3dfd-47b4-8bfd-e4d5fe7ca20b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1255224025,
      "longitude": 30.9479880597
    }
  },
  "54e3ead0-eda0-4285-956a-b19e38bd5bb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "54e3ead0-eda0-4285-956a-b19e38bd5bb1",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54e3ead0-eda0-4285-956a-b19e38bd5bb1",
    "image": "perev_left",
    "point": {
      "latitude": 52.963144965,
      "longitude": 30.9331908329
    }
  },
  "569c2b7a-445e-44de-890d-2b6ce525a238": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "569c2b7a-445e-44de-890d-2b6ce525a238",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "569c2b7a-445e-44de-890d-2b6ce525a238",
    "image": "perev_left",
    "point": {
      "latitude": 52.6658730589,
      "longitude": 31.0827557797
    }
  },
  "56e863ce-f559-4c1d-87bf-bf795c62529e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 255",
      "id": "56e863ce-f559-4c1d-87bf-bf795c62529e",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56e863ce-f559-4c1d-87bf-bf795c62529e",
    "image": "perev_left",
    "point": {
      "latitude": 52.6564552352,
      "longitude": 31.0983854568
    }
  },
  "56fd24c4-6646-4178-b03f-621e65800a20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "56fd24c4-6646-4178-b03f-621e65800a20",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56fd24c4-6646-4178-b03f-621e65800a20",
    "image": "perev_right",
    "point": {
      "latitude": 53.3777709675,
      "longitude": 30.9851701171
    }
  },
  "57739f14-adbd-4875-b7b0-4cfe7e4638e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 75",
      "id": "57739f14-adbd-4875-b7b0-4cfe7e4638e2",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57739f14-adbd-4875-b7b0-4cfe7e4638e2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2624377748,
      "longitude": 30.9000173928
    }
  },
  "57e0a9bf-0bfc-474e-bd3b-f57acab49098": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 90",
      "id": "57e0a9bf-0bfc-474e-bd3b-f57acab49098",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57e0a9bf-0bfc-474e-bd3b-f57acab49098",
    "image": "perev_left",
    "point": {
      "latitude": 52.2143730233,
      "longitude": 30.9430251359
    }
  },
  "5828a5f0-569a-4167-a777-fb923172e813": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "5828a5f0-569a-4167-a777-fb923172e813",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5828a5f0-569a-4167-a777-fb923172e813",
    "image": "perev_left",
    "point": {
      "latitude": 52.0122564822,
      "longitude": 30.9348408687
    }
  },
  "582dd8c5-175a-4ab7-8b23-a307c2377ab1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "582dd8c5-175a-4ab7-8b23-a307c2377ab1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "582dd8c5-175a-4ab7-8b23-a307c2377ab1",
    "image": "perev_left",
    "point": {
      "latitude": 51.9524951854,
      "longitude": 30.8270488344
    }
  },
  "58551afb-68b0-44a9-b4b2-3ea2c1047c63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "58551afb-68b0-44a9-b4b2-3ea2c1047c63",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58551afb-68b0-44a9-b4b2-3ea2c1047c63",
    "image": "perev_left",
    "point": {
      "latitude": 53.07449187,
      "longitude": 30.8888374198
    }
  },
  "586a3101-20ac-4d49-9179-6128aafad178": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "586a3101-20ac-4d49-9179-6128aafad178",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "586a3101-20ac-4d49-9179-6128aafad178",
    "image": "perev_left",
    "point": {
      "latitude": 53.2196517377,
      "longitude": 30.937132196
    }
  },
  "596b5172-9c24-4bf3-8b79-e1ba6dfc7aba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "596b5172-9c24-4bf3-8b79-e1ba6dfc7aba",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "596b5172-9c24-4bf3-8b79-e1ba6dfc7aba",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1036641262,
      "longitude": 30.9541682677
    }
  },
  "59c44fb2-ba65-406c-be24-3e53b9d8f2c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 66",
      "id": "59c44fb2-ba65-406c-be24-3e53b9d8f2c1",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59c44fb2-ba65-406c-be24-3e53b9d8f2c1",
    "image": "perev_left",
    "point": {
      "latitude": 52.0972060384,
      "longitude": 30.9364540153
    }
  },
  "5a6cf6f2-c04e-4fbe-b4dc-287e1f17dc35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "5a6cf6f2-c04e-4fbe-b4dc-287e1f17dc35",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a6cf6f2-c04e-4fbe-b4dc-287e1f17dc35",
    "image": "perev_right",
    "point": {
      "latitude": 53.1027465221,
      "longitude": 30.8679498077
    }
  },
  "5a76cdd0-faa5-4a24-89aa-82d0da0d3dca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "5a76cdd0-faa5-4a24-89aa-82d0da0d3dca",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a76cdd0-faa5-4a24-89aa-82d0da0d3dca",
    "image": "perev_left",
    "point": {
      "latitude": 53.0289406959,
      "longitude": 30.9072427374
    }
  },
  "5b3cd114-c131-43d4-a3f8-10c81ba70e3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "5b3cd114-c131-43d4-a3f8-10c81ba70e3e",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b3cd114-c131-43d4-a3f8-10c81ba70e3e",
    "image": "perev_left",
    "point": {
      "latitude": 52.7085571739,
      "longitude": 31.0097676882
    }
  },
  "5b3ed562-d25d-49e9-9190-8513f52f3ffe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "5b3ed562-d25d-49e9-9190-8513f52f3ffe",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b3ed562-d25d-49e9-9190-8513f52f3ffe",
    "image": "axis_romb",
    "point": {
      "latitude": 52.5624558896,
      "longitude": 31.1528677608
    }
  },
  "5b60452c-400d-448d-a192-443e34f44141": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5b60452c-400d-448d-a192-443e34f44141",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b60452c-400d-448d-a192-443e34f44141",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3846838274,
      "longitude": 30.9981780916
    }
  },
  "5b7e3448-3df4-4abf-9678-ee85464b2eb6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 113",
      "id": "5b7e3448-3df4-4abf-9678-ee85464b2eb6",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b7e3448-3df4-4abf-9678-ee85464b2eb6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.456426852,
      "longitude": 31.0813290734
    }
  },
  "5b911df0-27d2-49bc-b6af-1f6a78e8bc7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "5b911df0-27d2-49bc-b6af-1f6a78e8bc7b",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b911df0-27d2-49bc-b6af-1f6a78e8bc7b",
    "image": "perev_right",
    "point": {
      "latitude": 53.3073364533,
      "longitude": 31.0124088378
    }
  },
  "5b9f399d-41f2-4dd3-abc2-287b88d8453e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 63",
      "id": "5b9f399d-41f2-4dd3-abc2-287b88d8453e",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b9f399d-41f2-4dd3-abc2-287b88d8453e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3193985999,
      "longitude": 30.920240095
    }
  },
  "5c2aee4a-aafd-40cb-96af-6bfa8198e740": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 196",
      "id": "5c2aee4a-aafd-40cb-96af-6bfa8198e740",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c2aee4a-aafd-40cb-96af-6bfa8198e740",
    "image": "perev_left",
    "point": {
      "latitude": 52.6041494922,
      "longitude": 31.1081146125
    }
  },
  "5d3d0ee0-3495-40e2-a012-c3904ee48c48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 118",
      "id": "5d3d0ee0-3495-40e2-a012-c3904ee48c48",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d3d0ee0-3495-40e2-a012-c3904ee48c48",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4676393285,
      "longitude": 31.0911272202
    }
  },
  "5dbc1391-2004-4b24-b22a-5bbb9033ce6e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "5dbc1391-2004-4b24-b22a-5bbb9033ce6e",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5dbc1391-2004-4b24-b22a-5bbb9033ce6e",
    "image": "perev_left",
    "point": {
      "latitude": 52.0093214065,
      "longitude": 30.9174865108
    }
  },
  "5de43237-ffd6-4364-bee8-8d586c4f508d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5de43237-ffd6-4364-bee8-8d586c4f508d",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5de43237-ffd6-4364-bee8-8d586c4f508d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3422825814,
      "longitude": 30.9376051979
    }
  },
  "5e036bde-0dd4-41b8-8a36-45e1abdb2db3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 132",
      "id": "5e036bde-0dd4-41b8-8a36-45e1abdb2db3",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5e036bde-0dd4-41b8-8a36-45e1abdb2db3",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.3564560449,
      "longitude": 30.9544249071
    }
  },
  "5eb8b9db-7f5c-4c6e-99c7-5e4eddd471bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "5eb8b9db-7f5c-4c6e-99c7-5e4eddd471bc",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5eb8b9db-7f5c-4c6e-99c7-5e4eddd471bc",
    "image": "perev_right",
    "point": {
      "latitude": 52.7675127831,
      "longitude": 30.9446640796
    }
  },
  "5efaa5bd-7faa-4a28-aca6-9f52d4156063": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 280",
      "id": "5efaa5bd-7faa-4a28-aca6-9f52d4156063",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5efaa5bd-7faa-4a28-aca6-9f52d4156063",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3314174894,
      "longitude": 31.0036899761
    }
  },
  "6041cdcc-b5a3-4653-ae73-0bd459e4f36a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "6041cdcc-b5a3-4653-ae73-0bd459e4f36a",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6041cdcc-b5a3-4653-ae73-0bd459e4f36a",
    "image": "perev_left",
    "point": {
      "latitude": 53.3773156143,
      "longitude": 30.9925820742
    }
  },
  "60557471-e4af-494c-9a00-25aa565e0115": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 45",
      "id": "60557471-e4af-494c-9a00-25aa565e0115",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60557471-e4af-494c-9a00-25aa565e0115",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1377073496,
      "longitude": 30.9393617912
    }
  },
  "6061bd50-364c-400a-938e-4bb9430ad6a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "6061bd50-364c-400a-938e-4bb9430ad6a0",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6061bd50-364c-400a-938e-4bb9430ad6a0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1848659161,
      "longitude": 30.9456727328
    }
  },
  "6095e9a5-008e-468b-bc4b-84b3f9c43578": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6095e9a5-008e-468b-bc4b-84b3f9c43578",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6095e9a5-008e-468b-bc4b-84b3f9c43578",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4478039568,
      "longitude": 31.0592835408
    }
  },
  "60a777b5-6191-4548-95ab-e6ef7f38a312": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 225",
      "id": "60a777b5-6191-4548-95ab-e6ef7f38a312",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60a777b5-6191-4548-95ab-e6ef7f38a312",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0104789994,
      "longitude": 30.9148164625
    }
  },
  "611119a1-f9fe-409e-a9c5-05969d93b0db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "611119a1-f9fe-409e-a9c5-05969d93b0db",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "611119a1-f9fe-409e-a9c5-05969d93b0db",
    "image": "perev_right",
    "point": {
      "latitude": 52.6589303647,
      "longitude": 31.0803774653
    }
  },
  "612aa6b0-80ce-4b11-ab33-c9a839f54cf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 73",
      "id": "612aa6b0-80ce-4b11-ab33-c9a839f54cf7",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "612aa6b0-80ce-4b11-ab33-c9a839f54cf7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1426409419,
      "longitude": 30.9422032964
    }
  },
  "616b5a47-c5bc-4fb3-ab6b-0f3303621ca8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "616b5a47-c5bc-4fb3-ab6b-0f3303621ca8",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "616b5a47-c5bc-4fb3-ab6b-0f3303621ca8",
    "image": "perev_left",
    "point": {
      "latitude": 53.2294976029,
      "longitude": 30.9638080717
    }
  },
  "6183e6fb-bbc5-421b-bb5d-2511a6c20585": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 17",
      "id": "6183e6fb-bbc5-421b-bb5d-2511a6c20585",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6183e6fb-bbc5-421b-bb5d-2511a6c20585",
    "image": "perev_right",
    "point": {
      "latitude": 51.9790426554,
      "longitude": 30.884611473
    }
  },
  "61d6c4af-3e6a-4f6c-8383-6f4cfa23eb2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "61d6c4af-3e6a-4f6c-8383-6f4cfa23eb2f",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61d6c4af-3e6a-4f6c-8383-6f4cfa23eb2f",
    "image": "perev_right",
    "point": {
      "latitude": 52.9279976454,
      "longitude": 30.944356911
    }
  },
  "6363b50f-d1b2-4d48-9ceb-d0984dff878d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 37",
      "id": "6363b50f-d1b2-4d48-9ceb-d0984dff878d",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6363b50f-d1b2-4d48-9ceb-d0984dff878d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0277184219,
      "longitude": 30.9457469816
    }
  },
  "638c701a-d282-4f37-bd44-80a4754d82e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "638c701a-d282-4f37-bd44-80a4754d82e4",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "638c701a-d282-4f37-bd44-80a4754d82e4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1044323811,
      "longitude": 30.9539858142
    }
  },
  "63a8c279-3ae9-4097-964c-9be4e2214391": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 136",
      "id": "63a8c279-3ae9-4097-964c-9be4e2214391",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63a8c279-3ae9-4097-964c-9be4e2214391",
    "image": "perev_left",
    "point": {
      "latitude": 52.3685227176,
      "longitude": 30.9621614108
    }
  },
  "63ad14b0-b47e-4cd5-8725-80273852a4da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "63ad14b0-b47e-4cd5-8725-80273852a4da",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63ad14b0-b47e-4cd5-8725-80273852a4da",
    "image": "perev_left",
    "point": {
      "latitude": 53.1176101629,
      "longitude": 30.8765360343
    }
  },
  "63bccb76-67ba-4623-b202-8480b25b31fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "63bccb76-67ba-4623-b202-8480b25b31fb",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63bccb76-67ba-4623-b202-8480b25b31fb",
    "image": "bridge_low",
    "point": {
      "latitude": 52.4118291928,
      "longitude": 31.0102664069
    }
  },
  "63fa74b4-fbac-458c-b28d-dce91fb48068": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "63fa74b4-fbac-458c-b28d-dce91fb48068",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63fa74b4-fbac-458c-b28d-dce91fb48068",
    "image": "perev_left",
    "point": {
      "latitude": 53.3970083053,
      "longitude": 31.0057677581
    }
  },
  "64059968-0b6d-420d-9ea1-6cf086c03373": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "64059968-0b6d-420d-9ea1-6cf086c03373",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64059968-0b6d-420d-9ea1-6cf086c03373",
    "image": "perev_right",
    "point": {
      "latitude": 52.5645586761,
      "longitude": 31.1485453936
    }
  },
  "641f48c8-57d9-46b1-bdc0-5f3e8e59b2e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "641f48c8-57d9-46b1-bdc0-5f3e8e59b2e4",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "641f48c8-57d9-46b1-bdc0-5f3e8e59b2e4",
    "image": "perev_left",
    "point": {
      "latitude": 53.0846166734,
      "longitude": 30.8795173275
    }
  },
  "6446786d-b231-4c93-a444-87b22256d7c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6446786d-b231-4c93-a444-87b22256d7c3",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6446786d-b231-4c93-a444-87b22256d7c3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1213474583,
      "longitude": 30.9497444265
    }
  },
  "64a0231e-75b2-4eca-b60b-b350dff3f894": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "64a0231e-75b2-4eca-b60b-b350dff3f894",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64a0231e-75b2-4eca-b60b-b350dff3f894",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3246305092,
      "longitude": 30.9311773272
    }
  },
  "6543806c-72b6-4229-bdae-0d1e1b54ffef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "6543806c-72b6-4229-bdae-0d1e1b54ffef",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6543806c-72b6-4229-bdae-0d1e1b54ffef",
    "image": "perev_left",
    "point": {
      "latitude": 51.9608660299,
      "longitude": 30.8448044046
    }
  },
  "67c1d1fc-1717-4624-8ec5-96b374db37b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "67c1d1fc-1717-4624-8ec5-96b374db37b9",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67c1d1fc-1717-4624-8ec5-96b374db37b9",
    "image": "perev_left",
    "point": {
      "latitude": 52.7856643785,
      "longitude": 30.942523987
    }
  },
  "67e27e82-975e-4b2f-affe-e6cd006be5e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 138",
      "id": "67e27e82-975e-4b2f-affe-e6cd006be5e7",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67e27e82-975e-4b2f-affe-e6cd006be5e7",
    "image": "perev_right",
    "point": {
      "latitude": 52.3735620966,
      "longitude": 30.9492671371
    }
  },
  "67f9d596-6329-4f48-8bbf-9dec3c074b1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 140",
      "id": "67f9d596-6329-4f48-8bbf-9dec3c074b1d",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67f9d596-6329-4f48-8bbf-9dec3c074b1d",
    "image": "perev_left",
    "point": {
      "latitude": 52.3857312847,
      "longitude": 30.9615511678
    }
  },
  "6814f9f1-8519-4816-8ca3-b1fa20bd0895": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 25",
      "id": "6814f9f1-8519-4816-8ca3-b1fa20bd0895",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6814f9f1-8519-4816-8ca3-b1fa20bd0895",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1193277362,
      "longitude": 30.9463417475
    }
  },
  "6826ecbd-de43-4d4b-bc80-4cbfe5d321a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6826ecbd-de43-4d4b-bc80-4cbfe5d321a2",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6826ecbd-de43-4d4b-bc80-4cbfe5d321a2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3607047121,
      "longitude": 30.971271124
    }
  },
  "6846c6d8-1ba4-4bf5-a55e-839e9c10e42e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 83",
      "id": "6846c6d8-1ba4-4bf5-a55e-839e9c10e42e",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6846c6d8-1ba4-4bf5-a55e-839e9c10e42e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3836124543,
      "longitude": 30.9978986028
    }
  },
  "689c0a51-979b-4d45-a907-b767116ccb5e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "689c0a51-979b-4d45-a907-b767116ccb5e",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "689c0a51-979b-4d45-a907-b767116ccb5e",
    "image": "perev_right",
    "point": {
      "latitude": 52.9778058885,
      "longitude": 30.9199938845
    }
  },
  "6913d500-ccab-47ad-8292-79e3972fddac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "6913d500-ccab-47ad-8292-79e3972fddac",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6913d500-ccab-47ad-8292-79e3972fddac",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9610004137,
      "longitude": 30.8496178683
    }
  },
  "693d3985-dcec-4e89-bae8-7bb4a0870910": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 40м",
      "id": "693d3985-dcec-4e89-bae8-7bb4a0870910",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "693d3985-dcec-4e89-bae8-7bb4a0870910",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2241391219,
      "longitude": 30.9147612596
    }
  },
  "69b8e9a0-9a5d-49f5-bdbe-fef7c3c8e441": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 94",
      "id": "69b8e9a0-9a5d-49f5-bdbe-fef7c3c8e441",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69b8e9a0-9a5d-49f5-bdbe-fef7c3c8e441",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2183080141,
      "longitude": 30.9247568764
    }
  },
  "69de72e0-1607-4130-98fc-0ca750904997": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "69de72e0-1607-4130-98fc-0ca750904997",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69de72e0-1607-4130-98fc-0ca750904997",
    "image": "perev_left",
    "point": {
      "latitude": 52.6926455431,
      "longitude": 31.0381313856
    }
  },
  "6a30681a-d446-4f33-a03e-361d583da9f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 166",
      "id": "6a30681a-d446-4f33-a03e-361d583da9f5",
      "kilometrage": 124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a30681a-d446-4f33-a03e-361d583da9f5",
    "image": "perev_left",
    "point": {
      "latitude": 52.4970602618,
      "longitude": 31.1496365983
    }
  },
  "6a5e6ff6-d522-461e-8570-d8d1a4de0e9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6a5e6ff6-d522-461e-8570-d8d1a4de0e9c",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a5e6ff6-d522-461e-8570-d8d1a4de0e9c",
    "image": "perev_right",
    "point": {
      "latitude": 53.0428213506,
      "longitude": 30.8930297709
    }
  },
  "6b24309b-d81b-4177-9021-e563e2c74df0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "6b24309b-d81b-4177-9021-e563e2c74df0",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b24309b-d81b-4177-9021-e563e2c74df0",
    "image": "perev_left",
    "point": {
      "latitude": 52.7840086041,
      "longitude": 30.9474957117
    }
  },
  "6b6777a8-8957-4f57-843e-49a3a2802029": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 100",
      "id": "6b6777a8-8957-4f57-843e-49a3a2802029",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b6777a8-8957-4f57-843e-49a3a2802029",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3879073231,
      "longitude": 30.9801306216
    }
  },
  "6b9f3462-b392-4b85-b808-79420e9ffa37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 59",
      "id": "6b9f3462-b392-4b85-b808-79420e9ffa37",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b9f3462-b392-4b85-b808-79420e9ffa37",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3023599175,
      "longitude": 30.9436409291
    }
  },
  "6bf8d35a-4fb3-4e33-a62e-eee7c4c47c65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 210",
      "id": "6bf8d35a-4fb3-4e33-a62e-eee7c4c47c65",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bf8d35a-4fb3-4e33-a62e-eee7c4c47c65",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9186818747,
      "longitude": 30.9373447982
    }
  },
  "6c64902f-d108-44fa-9277-4783d8c4d9e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6c64902f-d108-44fa-9277-4783d8c4d9e3",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c64902f-d108-44fa-9277-4783d8c4d9e3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2920121961,
      "longitude": 30.9272296787
    }
  },
  "6c687617-5401-4e79-9812-3e755ddcab4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6c687617-5401-4e79-9812-3e755ddcab4a",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c687617-5401-4e79-9812-3e755ddcab4a",
    "image": "perev_right",
    "point": {
      "latitude": 53.3254871645,
      "longitude": 31.0062342202
    }
  },
  "6c6b270a-0c3d-4e87-b285-07c835cad55f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "6c6b270a-0c3d-4e87-b285-07c835cad55f",
      "kilometrage": 247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c6b270a-0c3d-4e87-b285-07c835cad55f",
    "image": "perev_left",
    "point": {
      "latitude": 53.1468917823,
      "longitude": 30.881189991
    }
  },
  "6c8e69a1-a5b5-498f-8bde-ad087c5cda7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "6c8e69a1-a5b5-498f-8bde-ad087c5cda7c",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c8e69a1-a5b5-498f-8bde-ad087c5cda7c",
    "image": "perev_left",
    "point": {
      "latitude": 51.983606391,
      "longitude": 30.9025175757
    }
  },
  "6c9f237a-f896-4443-9779-79c20ac96dce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6c9f237a-f896-4443-9779-79c20ac96dce",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c9f237a-f896-4443-9779-79c20ac96dce",
    "image": "perev_right",
    "point": {
      "latitude": 52.8523736226,
      "longitude": 30.9914044006
    }
  },
  "6cafa4ab-2858-41af-8f3b-dae75fea63c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 115",
      "id": "6cafa4ab-2858-41af-8f3b-dae75fea63c6",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6cafa4ab-2858-41af-8f3b-dae75fea63c6",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4602887072,
      "longitude": 31.0814437466
    }
  },
  "6ce40fec-29ca-4a51-b65c-bd7bc0b1191a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "6ce40fec-29ca-4a51-b65c-bd7bc0b1191a",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ce40fec-29ca-4a51-b65c-bd7bc0b1191a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6811799871,
      "longitude": 31.0643972131
    }
  },
  "6d0dd9a5-4227-4970-890e-8608cc7402e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6d0dd9a5-4227-4970-890e-8608cc7402e6",
      "kilometrage": 263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d0dd9a5-4227-4970-890e-8608cc7402e6",
    "image": "perev_right",
    "point": {
      "latitude": 53.2198600579,
      "longitude": 30.9554402093
    }
  },
  "6e06ffea-be4e-4591-923b-426644cd908b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6e06ffea-be4e-4591-923b-426644cd908b",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e06ffea-be4e-4591-923b-426644cd908b",
    "image": "perev_right",
    "point": {
      "latitude": 52.8245340291,
      "longitude": 30.9718188292
    }
  },
  "6e0a1250-9db4-4321-9fda-ea6916437f3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "6e0a1250-9db4-4321-9fda-ea6916437f3c",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e0a1250-9db4-4321-9fda-ea6916437f3c",
    "image": "name_of",
    "point": {
      "latitude": 52.2444507415,
      "longitude": 30.9429334232
    }
  },
  "6e192ef6-b513-441f-b952-d1b82ca5a2cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "6e192ef6-b513-441f-b952-d1b82ca5a2cb",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e192ef6-b513-441f-b952-d1b82ca5a2cb",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4129716986,
      "longitude": 31.0142317918
    }
  },
  "6e70d70e-6248-42fd-b1ca-cb4a3fd3f9ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6e70d70e-6248-42fd-b1ca-cb4a3fd3f9ea",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e70d70e-6248-42fd-b1ca-cb4a3fd3f9ea",
    "image": "perev_right",
    "point": {
      "latitude": 52.692737363,
      "longitude": 31.0281586471
    }
  },
  "6ed5942d-d52c-49c2-9ec9-ac0dd8d70f5a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6ed5942d-d52c-49c2-9ec9-ac0dd8d70f5a",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ed5942d-d52c-49c2-9ec9-ac0dd8d70f5a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4131673203,
      "longitude": 31.0149689308
    }
  },
  "6f2afbc7-b9fe-4a8c-a1c5-deada41d3881": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "6f2afbc7-b9fe-4a8c-a1c5-deada41d3881",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f2afbc7-b9fe-4a8c-a1c5-deada41d3881",
    "image": "name_of",
    "point": {
      "latitude": 53.3886031452,
      "longitude": 31.0189791675
    }
  },
  "6f7bbd94-b294-4b43-8c14-1b590fc80b8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "6f7bbd94-b294-4b43-8c14-1b590fc80b8c",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f7bbd94-b294-4b43-8c14-1b590fc80b8c",
    "image": "perev_right",
    "point": {
      "latitude": 53.023428403,
      "longitude": 30.9080364403
    }
  },
  "6f8efa29-e179-40df-bc3f-4b45bcff0a53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "6f8efa29-e179-40df-bc3f-4b45bcff0a53",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f8efa29-e179-40df-bc3f-4b45bcff0a53",
    "image": "perev_left",
    "point": {
      "latitude": 52.6795458376,
      "longitude": 31.0781463896
    }
  },
  "6f93f700-b0fa-41c3-a4ac-aa19146404a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "6f93f700-b0fa-41c3-a4ac-aa19146404a3",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f93f700-b0fa-41c3-a4ac-aa19146404a3",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1442192768,
      "longitude": 30.9576069434
    }
  },
  "701650d5-b1b3-4228-b779-5fea581d7bee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "701650d5-b1b3-4228-b779-5fea581d7bee",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "701650d5-b1b3-4228-b779-5fea581d7bee",
    "image": "perev_right",
    "point": {
      "latitude": 52.9936805624,
      "longitude": 30.9128339407
    }
  },
  "70c2c433-91e2-49c0-b0c4-70067f7c6a0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 76м",
      "id": "70c2c433-91e2-49c0-b0c4-70067f7c6a0b",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70c2c433-91e2-49c0-b0c4-70067f7c6a0b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3906764198,
      "longitude": 30.9620944304
    }
  },
  "7223762e-5a57-4aeb-80c9-f8a3c4b882a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 98",
      "id": "7223762e-5a57-4aeb-80c9-f8a3c4b882a0",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7223762e-5a57-4aeb-80c9-f8a3c4b882a0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4230425608,
      "longitude": 31.0207959085
    }
  },
  "728c429b-dd33-4912-b11a-66bc5acfe61a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "728c429b-dd33-4912-b11a-66bc5acfe61a",
      "kilometrage": 203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "728c429b-dd33-4912-b11a-66bc5acfe61a",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.8683274055,
      "longitude": 30.9755287779
    }
  },
  "72e86244-f8d2-4090-8585-3fa931f2c093": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "72e86244-f8d2-4090-8585-3fa931f2c093",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72e86244-f8d2-4090-8585-3fa931f2c093",
    "image": "perev_right",
    "point": {
      "latitude": 53.2198210028,
      "longitude": 30.9071559591
    }
  },
  "7374dc76-4a88-4e36-b6b1-0fafde06cdd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7374dc76-4a88-4e36-b6b1-0fafde06cdd6",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7374dc76-4a88-4e36-b6b1-0fafde06cdd6",
    "image": "perev_left",
    "point": {
      "latitude": 52.8570596627,
      "longitude": 30.9912046784
    }
  },
  "73951f21-ef15-4caa-bfaf-63381682001e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "73951f21-ef15-4caa-bfaf-63381682001e",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73951f21-ef15-4caa-bfaf-63381682001e",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.7827891938,
      "longitude": 30.9527940397
    }
  },
  "739b77fe-2b5e-4a4b-8755-06e07e45ce65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 70",
      "id": "739b77fe-2b5e-4a4b-8755-06e07e45ce65",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "739b77fe-2b5e-4a4b-8755-06e07e45ce65",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3527720485,
      "longitude": 30.9649808653
    }
  },
  "73e3ddd2-4a89-41ef-998b-9cb470d766ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "73e3ddd2-4a89-41ef-998b-9cb470d766ba",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73e3ddd2-4a89-41ef-998b-9cb470d766ba",
    "image": "perev_right",
    "point": {
      "latitude": 53.4198549268,
      "longitude": 31.0037711606
    }
  },
  "744ec5e9-0be2-44da-ae6a-3ae7b39f8459": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 149",
      "id": "744ec5e9-0be2-44da-ae6a-3ae7b39f8459",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "744ec5e9-0be2-44da-ae6a-3ae7b39f8459",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.4418553338,
      "longitude": 31.0541703222
    }
  },
  "748831b6-fc8b-4e35-969d-ac50c393d168": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "748831b6-fc8b-4e35-969d-ac50c393d168",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "748831b6-fc8b-4e35-969d-ac50c393d168",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.454414273,
      "longitude": 31.0799221676
    }
  },
  "751e8f41-c082-4b36-baa7-e9ca2793eea4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 139",
      "id": "751e8f41-c082-4b36-baa7-e9ca2793eea4",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "751e8f41-c082-4b36-baa7-e9ca2793eea4",
    "image": "perev_left",
    "point": {
      "latitude": 52.3763781745,
      "longitude": 30.9579921355
    }
  },
  "7622b094-d639-4d0c-bc63-3f3b2812a4e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7622b094-d639-4d0c-bc63-3f3b2812a4e7",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7622b094-d639-4d0c-bc63-3f3b2812a4e7",
    "image": "perev_left",
    "point": {
      "latitude": 53.4031516236,
      "longitude": 31.0126886402
    }
  },
  "76513444-9dc2-4811-970e-862e2b42edbe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 108",
      "id": "76513444-9dc2-4811-970e-862e2b42edbe",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76513444-9dc2-4811-970e-862e2b42edbe",
    "image": "perev_left",
    "point": {
      "latitude": 52.2395796395,
      "longitude": 30.9029447988
    }
  },
  "76762559-70de-494f-9308-9b2cb48aa6eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 32",
      "id": "76762559-70de-494f-9308-9b2cb48aa6eb",
      "kilometrage": 48,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76762559-70de-494f-9308-9b2cb48aa6eb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1546608554,
      "longitude": 30.9613901914
    }
  },
  "77474f67-7523-488d-bc57-618b02e5ff24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "77474f67-7523-488d-bc57-618b02e5ff24",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77474f67-7523-488d-bc57-618b02e5ff24",
    "image": "perev_right",
    "point": {
      "latitude": 53.0768936476,
      "longitude": 30.8864769515
    }
  },
  "77e47e1b-6211-4e2a-9a04-5f7915dce742": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "77e47e1b-6211-4e2a-9a04-5f7915dce742",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77e47e1b-6211-4e2a-9a04-5f7915dce742",
    "image": "perev_right",
    "point": {
      "latitude": 52.7326281539,
      "longitude": 30.9569020664
    }
  },
  "78554acf-b10e-479d-8ca2-beb134bce4af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 122",
      "id": "78554acf-b10e-479d-8ca2-beb134bce4af",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78554acf-b10e-479d-8ca2-beb134bce4af",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4858309498,
      "longitude": 31.1194242496
    }
  },
  "785cce2c-5aeb-4b44-822a-b5594b8c5ac5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 228",
      "id": "785cce2c-5aeb-4b44-822a-b5594b8c5ac5",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "785cce2c-5aeb-4b44-822a-b5594b8c5ac5",
    "image": "perev_right",
    "point": {
      "latitude": 52.6052274211,
      "longitude": 31.0930375918
    }
  },
  "788e3bd5-4a88-49d2-9f9f-bcbc95814f8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 151",
      "id": "788e3bd5-4a88-49d2-9f9f-bcbc95814f8f",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "788e3bd5-4a88-49d2-9f9f-bcbc95814f8f",
    "image": "perev_right",
    "point": {
      "latitude": 52.4652214243,
      "longitude": 31.0820396264
    }
  },
  "798aa4c7-5833-430e-88bf-3a4b25b6b343": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 78",
      "id": "798aa4c7-5833-430e-88bf-3a4b25b6b343",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "798aa4c7-5833-430e-88bf-3a4b25b6b343",
    "image": "perev_right",
    "point": {
      "latitude": 52.1637689281,
      "longitude": 30.9465075806
    }
  },
  "79aa0da3-0dd3-4ff3-84ca-8a395ab2459b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "79aa0da3-0dd3-4ff3-84ca-8a395ab2459b",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79aa0da3-0dd3-4ff3-84ca-8a395ab2459b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4111544724,
      "longitude": 31.0073648917
    }
  },
  "7a72b07c-897c-45c3-b4e6-0872d9ae0e39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "7a72b07c-897c-45c3-b4e6-0872d9ae0e39",
      "kilometrage": 254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a72b07c-897c-45c3-b4e6-0872d9ae0e39",
    "image": "perev_right",
    "point": {
      "latitude": 53.1922999562,
      "longitude": 30.894870887
    }
  },
  "7b4627cd-2270-46b0-8f98-de8cea8999d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7b4627cd-2270-46b0-8f98-de8cea8999d4",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b4627cd-2270-46b0-8f98-de8cea8999d4",
    "image": "perev_left",
    "point": {
      "latitude": 52.7045132486,
      "longitude": 31.0286693837
    }
  },
  "7bd42875-286d-4ec4-a96b-c2ccf5e509d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 90",
      "id": "7bd42875-286d-4ec4-a96b-c2ccf5e509d7",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7bd42875-286d-4ec4-a96b-c2ccf5e509d7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4021709152,
      "longitude": 31.0031169394
    }
  },
  "7c07ed81-c52c-48e6-9d42-70a30741ceda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 81",
      "id": "7c07ed81-c52c-48e6-9d42-70a30741ceda",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c07ed81-c52c-48e6-9d42-70a30741ceda",
    "image": "perev_left",
    "point": {
      "latitude": 52.1745030123,
      "longitude": 30.9427806636
    }
  },
  "7c90be81-764e-4f8c-b914-064fc6d21f72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 25",
      "id": "7c90be81-764e-4f8c-b914-064fc6d21f72",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c90be81-764e-4f8c-b914-064fc6d21f72",
    "image": "perev_right",
    "point": {
      "latitude": 51.9950176006,
      "longitude": 30.8923053889
    }
  },
  "7cc609ce-48bf-4f7a-b864-3103bdbd07eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "7cc609ce-48bf-4f7a-b864-3103bdbd07eb",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cc609ce-48bf-4f7a-b864-3103bdbd07eb",
    "image": "name_of",
    "point": {
      "latitude": 52.4394583856,
      "longitude": 31.0419863304
    }
  },
  "7cf1ce75-90bf-4ecd-a40c-bf653a66b6dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 74",
      "id": "7cf1ce75-90bf-4ecd-a40c-bf653a66b6dc",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cf1ce75-90bf-4ecd-a40c-bf653a66b6dc",
    "image": "perev_left",
    "point": {
      "latitude": 52.1438746349,
      "longitude": 30.9569640139
    }
  },
  "7d0dcafb-9ae0-4f09-89b8-08d8af7c40d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 120",
      "id": "7d0dcafb-9ae0-4f09-89b8-08d8af7c40d4",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d0dcafb-9ae0-4f09-89b8-08d8af7c40d4",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4823199331,
      "longitude": 31.1391217797
    }
  },
  "7d1437d7-e08a-4191-a3fd-3d3f379d96e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 103",
      "id": "7d1437d7-e08a-4191-a3fd-3d3f379d96e0",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d1437d7-e08a-4191-a3fd-3d3f379d96e0",
    "image": "perev_left",
    "point": {
      "latitude": 52.2440292804,
      "longitude": 30.9388561437
    }
  },
  "7d8437a9-5973-4902-8f05-1a5be560d8db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 188",
      "id": "7d8437a9-5973-4902-8f05-1a5be560d8db",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d8437a9-5973-4902-8f05-1a5be560d8db",
    "image": "perev_left",
    "point": {
      "latitude": 52.5794100648,
      "longitude": 31.1257597871
    }
  },
  "7dbf270d-1a3b-4f8d-8bd6-83eee6e86dc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 99",
      "id": "7dbf270d-1a3b-4f8d-8bd6-83eee6e86dc8",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7dbf270d-1a3b-4f8d-8bd6-83eee6e86dc8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4263029807,
      "longitude": 31.0222956821
    }
  },
  "7e5ccf62-3f8a-4068-bb29-ef6e9fb963ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7e5ccf62-3f8a-4068-bb29-ef6e9fb963ce",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e5ccf62-3f8a-4068-bb29-ef6e9fb963ce",
    "image": "perev_left",
    "point": {
      "latitude": 53.1398938525,
      "longitude": 30.8805678979
    }
  },
  "7f01e055-1dc3-47f6-8d45-d73af40b5985": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7f01e055-1dc3-47f6-8d45-d73af40b5985",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f01e055-1dc3-47f6-8d45-d73af40b5985",
    "image": "perev_left",
    "point": {
      "latitude": 53.2198945569,
      "longitude": 30.9116566786
    }
  },
  "7f068a0b-bccc-4d11-a16f-1d18be0bd3d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "7f068a0b-bccc-4d11-a16f-1d18be0bd3d4",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f068a0b-bccc-4d11-a16f-1d18be0bd3d4",
    "image": "perev_left",
    "point": {
      "latitude": 53.1757553046,
      "longitude": 30.8875143557
    }
  },
  "7f511ebc-ed3f-4b7c-aad8-f7dc207d6bea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "7f511ebc-ed3f-4b7c-aad8-f7dc207d6bea",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f511ebc-ed3f-4b7c-aad8-f7dc207d6bea",
    "image": "perev_right",
    "point": {
      "latitude": 52.6850693927,
      "longitude": 31.0429677452
    }
  },
  "8060b6f4-0b20-490a-8226-840bdd916a60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 104м",
      "id": "8060b6f4-0b20-490a-8226-840bdd916a60",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8060b6f4-0b20-490a-8226-840bdd916a60",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4367068568,
      "longitude": 31.0345298179
    }
  },
  "81009d42-e9b9-4182-864b-2c7785e053a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 185",
      "id": "81009d42-e9b9-4182-864b-2c7785e053a0",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81009d42-e9b9-4182-864b-2c7785e053a0",
    "image": "perev_left",
    "point": {
      "latitude": 52.5782458133,
      "longitude": 31.129934733
    }
  },
  "81094053-a746-4866-9fb8-7ac560ecbf1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "81094053-a746-4866-9fb8-7ac560ecbf1d",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81094053-a746-4866-9fb8-7ac560ecbf1d",
    "image": "perev_left",
    "point": {
      "latitude": 52.2321408958,
      "longitude": 30.9298190687
    }
  },
  "81ce2e72-c799-4108-ae13-02f5ab4ef9af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 115",
      "id": "81ce2e72-c799-4108-ae13-02f5ab4ef9af",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81ce2e72-c799-4108-ae13-02f5ab4ef9af",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4682559072,
      "longitude": 31.0948293013
    }
  },
  "81e9c205-077f-42b0-9956-f907effb9512": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "81e9c205-077f-42b0-9956-f907effb9512",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81e9c205-077f-42b0-9956-f907effb9512",
    "image": "name_of",
    "point": {
      "latitude": 52.2023502143,
      "longitude": 30.9355210851
    }
  },
  "823a0399-e939-438a-b3ea-6f078d5abdf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "823a0399-e939-438a-b3ea-6f078d5abdf7",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "823a0399-e939-438a-b3ea-6f078d5abdf7",
    "image": "perev_left",
    "point": {
      "latitude": 53.1595854474,
      "longitude": 30.875788997
    }
  },
  "827a16fa-7fc2-4795-942a-5fb57e1d60f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "827a16fa-7fc2-4795-942a-5fb57e1d60f0",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "827a16fa-7fc2-4795-942a-5fb57e1d60f0",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4017436743,
      "longitude": 31.0016817193
    }
  },
  "830cbf47-6a6c-4fe4-8286-a0e8b87525e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "830cbf47-6a6c-4fe4-8286-a0e8b87525e4",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "830cbf47-6a6c-4fe4-8286-a0e8b87525e4",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.5588825704,
      "longitude": 31.1637183557
    }
  },
  "836f9825-9c64-40e4-a4c5-a49c239fe0ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 95",
      "id": "836f9825-9c64-40e4-a4c5-a49c239fe0ef",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "836f9825-9c64-40e4-a4c5-a49c239fe0ef",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3689273277,
      "longitude": 30.9605811297
    }
  },
  "843bb24c-6364-4710-8ac1-6e6a174b1746": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "843bb24c-6364-4710-8ac1-6e6a174b1746",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "843bb24c-6364-4710-8ac1-6e6a174b1746",
    "image": "perev_left",
    "point": {
      "latitude": 53.2595495317,
      "longitude": 30.9706925936
    }
  },
  "84478e80-3016-460b-9e90-0d1b4adef77f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "84478e80-3016-460b-9e90-0d1b4adef77f",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84478e80-3016-460b-9e90-0d1b4adef77f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3736544192,
      "longitude": 30.9519386029
    }
  },
  "8472368f-73c8-45cc-b806-96896ea60292": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8472368f-73c8-45cc-b806-96896ea60292",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8472368f-73c8-45cc-b806-96896ea60292",
    "image": "perev_left",
    "point": {
      "latitude": 53.2115821745,
      "longitude": 30.9009777963
    }
  },
  "84a844f4-ec7d-4dbb-b943-b3596a7e115a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 30",
      "id": "84a844f4-ec7d-4dbb-b943-b3596a7e115a",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84a844f4-ec7d-4dbb-b943-b3596a7e115a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0800157347,
      "longitude": 30.9516901505
    }
  },
  "84b37d4b-9340-4218-a586-cc7153a079a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "84b37d4b-9340-4218-a586-cc7153a079a9",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84b37d4b-9340-4218-a586-cc7153a079a9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4610400873,
      "longitude": 31.0826092016
    }
  },
  "8512658e-45e4-4968-ada4-2fdc8eb7c931": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8512658e-45e4-4968-ada4-2fdc8eb7c931",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8512658e-45e4-4968-ada4-2fdc8eb7c931",
    "image": "perev_left",
    "point": {
      "latitude": 52.8701126184,
      "longitude": 30.9901673965
    }
  },
  "853d539b-b61c-41b5-b271-5fc99fab8395": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "853d539b-b61c-41b5-b271-5fc99fab8395",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "853d539b-b61c-41b5-b271-5fc99fab8395",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9412375419,
      "longitude": 30.941402648
    }
  },
  "8584a41b-31cb-4aa7-ad4b-2ec7e9694e0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 150",
      "id": "8584a41b-31cb-4aa7-ad4b-2ec7e9694e0a",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8584a41b-31cb-4aa7-ad4b-2ec7e9694e0a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6433924252,
      "longitude": 31.1334914267
    }
  },
  "85af80ac-a4fc-4d2e-9678-4850da517096": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 128",
      "id": "85af80ac-a4fc-4d2e-9678-4850da517096",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85af80ac-a4fc-4d2e-9678-4850da517096",
    "image": "buyo_left",
    "point": {
      "latitude": 52.532640826,
      "longitude": 31.1717560901
    }
  },
  "85e4dabf-21ed-4424-a77e-7938c970be5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 224",
      "id": "85e4dabf-21ed-4424-a77e-7938c970be5c",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85e4dabf-21ed-4424-a77e-7938c970be5c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6059830522,
      "longitude": 31.1030061425
    }
  },
  "860939b0-75cd-4199-b0aa-b280befbf5f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "860939b0-75cd-4199-b0aa-b280befbf5f4",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "860939b0-75cd-4199-b0aa-b280befbf5f4",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4023709269,
      "longitude": 31.0051091093
    }
  },
  "8623119b-3ac2-4308-a1cc-62f790e3de5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8623119b-3ac2-4308-a1cc-62f790e3de5f",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8623119b-3ac2-4308-a1cc-62f790e3de5f",
    "image": "perev_left",
    "point": {
      "latitude": 52.7516947763,
      "longitude": 30.9378965578
    }
  },
  "86353bdc-b31f-4464-a0a5-7abdc05bee30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "86353bdc-b31f-4464-a0a5-7abdc05bee30",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86353bdc-b31f-4464-a0a5-7abdc05bee30",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.559688698,
      "longitude": 31.1620360791
    }
  },
  "864ed9e2-3395-478a-ba2c-dfe67fcd5917": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 18м",
      "id": "864ed9e2-3395-478a-ba2c-dfe67fcd5917",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "864ed9e2-3395-478a-ba2c-dfe67fcd5917",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0985971614,
      "longitude": 30.9322288473
    }
  },
  "86a1fa11-31b9-48b3-bc33-0cc910ad747e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 54",
      "id": "86a1fa11-31b9-48b3-bc33-0cc910ad747e",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86a1fa11-31b9-48b3-bc33-0cc910ad747e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2939256449,
      "longitude": 30.927424
    }
  },
  "87a301d5-5935-42b0-91fe-f9c01cf54bf1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131А",
      "id": "87a301d5-5935-42b0-91fe-f9c01cf54bf1",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87a301d5-5935-42b0-91fe-f9c01cf54bf1",
    "image": "perev_right",
    "point": {
      "latitude": 52.3528473394,
      "longitude": 30.9592022705
    }
  },
  "882f27a4-7d5b-49b7-9ced-c77feb5127b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "882f27a4-7d5b-49b7-9ced-c77feb5127b5",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "882f27a4-7d5b-49b7-9ced-c77feb5127b5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.562039031,
      "longitude": 31.1556889004
    }
  },
  "8845d8f7-95e9-4a22-8c82-81bb59342ee9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "8845d8f7-95e9-4a22-8c82-81bb59342ee9",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8845d8f7-95e9-4a22-8c82-81bb59342ee9",
    "image": "perev_right",
    "point": {
      "latitude": 51.9731347581,
      "longitude": 30.8615960901
    }
  },
  "8889b2f5-83af-4470-aa0e-285281667b69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "8889b2f5-83af-4470-aa0e-285281667b69",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8889b2f5-83af-4470-aa0e-285281667b69",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.2056948739,
      "longitude": 30.8956745481
    }
  },
  "88902831-c9e1-44f4-a348-4ab3c8313357": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 82",
      "id": "88902831-c9e1-44f4-a348-4ab3c8313357",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88902831-c9e1-44f4-a348-4ab3c8313357",
    "image": "buyo_right",
    "point": {
      "latitude": 52.385210418,
      "longitude": 30.991666909
    }
  },
  "88b06c33-2f58-4f44-876e-f1482c6deaae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 73",
      "id": "88b06c33-2f58-4f44-876e-f1482c6deaae",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88b06c33-2f58-4f44-876e-f1482c6deaae",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3655823457,
      "longitude": 30.9685348016
    }
  },
  "890ad6d1-bfc2-446a-9fb6-3c5f2309ffb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 78м",
      "id": "890ad6d1-bfc2-446a-9fb6-3c5f2309ffb1",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "890ad6d1-bfc2-446a-9fb6-3c5f2309ffb1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3944771713,
      "longitude": 30.9697127642
    }
  },
  "89d5efd2-6711-46ea-b1e5-b8d9751163fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "89d5efd2-6711-46ea-b1e5-b8d9751163fc",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89d5efd2-6711-46ea-b1e5-b8d9751163fc",
    "image": "perev_left",
    "point": {
      "latitude": 52.9751884679,
      "longitude": 30.92167914
    }
  },
  "89f47849-523e-4417-a3cb-d6fb67b9abbc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "89f47849-523e-4417-a3cb-d6fb67b9abbc",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89f47849-523e-4417-a3cb-d6fb67b9abbc",
    "image": "perev_right",
    "point": {
      "latitude": 52.680589687,
      "longitude": 31.0702493385
    }
  },
  "8a827bf0-35a4-4c06-962a-b610d98d9297": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 26",
      "id": "8a827bf0-35a4-4c06-962a-b610d98d9297",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a827bf0-35a4-4c06-962a-b610d98d9297",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1243368264,
      "longitude": 30.9500526314
    }
  },
  "8a95cde2-06e4-4bf0-8dc5-fc3a1d3270a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 250",
      "id": "8a95cde2-06e4-4bf0-8dc5-fc3a1d3270a3",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a95cde2-06e4-4bf0-8dc5-fc3a1d3270a3",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1596742023,
      "longitude": 30.876736082
    }
  },
  "8ad53384-fb3f-418f-8bc8-e6190a4a67e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 256А",
      "id": "8ad53384-fb3f-418f-8bc8-e6190a4a67e2",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ad53384-fb3f-418f-8bc8-e6190a4a67e2",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6563689786,
      "longitude": 31.0814739148
    }
  },
  "8ae5d71d-5c24-41f6-966b-b0ced233e6ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 9",
      "id": "8ae5d71d-5c24-41f6-966b-b0ced233e6ea",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ae5d71d-5c24-41f6-966b-b0ced233e6ea",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0092002645,
      "longitude": 30.9105389731
    }
  },
  "8b788f68-41b0-4af4-a216-29c28dfc4f1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 51",
      "id": "8b788f68-41b0-4af4-a216-29c28dfc4f1e",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b788f68-41b0-4af4-a216-29c28dfc4f1e",
    "image": "perev_left",
    "point": {
      "latitude": 52.0827296716,
      "longitude": 30.9529406233
    }
  },
  "8c6655af-2c4d-42b4-9dfe-4165264ee71f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 152",
      "id": "8c6655af-2c4d-42b4-9dfe-4165264ee71f",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c6655af-2c4d-42b4-9dfe-4165264ee71f",
    "image": "perev_left",
    "point": {
      "latitude": 52.4695411768,
      "longitude": 31.0976408304
    }
  },
  "8ca7052c-cce2-4979-a756-f919dfa8ad45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 95",
      "id": "8ca7052c-cce2-4979-a756-f919dfa8ad45",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ca7052c-cce2-4979-a756-f919dfa8ad45",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2182214373,
      "longitude": 30.9176409436
    }
  },
  "8d3d64f0-1cc1-4fb3-b413-775d0faa48e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 15",
      "id": "8d3d64f0-1cc1-4fb3-b413-775d0faa48e2",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d3d64f0-1cc1-4fb3-b413-775d0faa48e2",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0835135962,
      "longitude": 30.9387033436
    }
  },
  "8e62c40e-6a59-49c0-9015-26c6b13eee51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 33",
      "id": "8e62c40e-6a59-49c0-9015-26c6b13eee51",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e62c40e-6a59-49c0-9015-26c6b13eee51",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0122475473,
      "longitude": 30.9385284227
    }
  },
  "8e782d45-e418-4e1c-8a50-27a3ca52eb79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8e782d45-e418-4e1c-8a50-27a3ca52eb79",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e782d45-e418-4e1c-8a50-27a3ca52eb79",
    "image": "perev_left",
    "point": {
      "latitude": 53.2438594316,
      "longitude": 30.9559273662
    }
  },
  "8e8994ac-822b-4ddc-af3e-48c19445ac3a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 16",
      "id": "8e8994ac-822b-4ddc-af3e-48c19445ac3a",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e8994ac-822b-4ddc-af3e-48c19445ac3a",
    "image": "perev_left",
    "point": {
      "latitude": 51.9725379185,
      "longitude": 30.892846987
    }
  },
  "8e998c72-27ba-44d2-88f2-3936882a4aad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8e998c72-27ba-44d2-88f2-3936882a4aad",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e998c72-27ba-44d2-88f2-3936882a4aad",
    "image": "perev_left",
    "point": {
      "latitude": 53.1343149604,
      "longitude": 30.8879235638
    }
  },
  "8eaa5889-2556-4ff1-96b4-dec9c0688943": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 35",
      "id": "8eaa5889-2556-4ff1-96b4-dec9c0688943",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8eaa5889-2556-4ff1-96b4-dec9c0688943",
    "image": "perev_right",
    "point": {
      "latitude": 52.0188763801,
      "longitude": 30.9380167839
    }
  },
  "8f060cf5-22d1-4e44-9c68-6b45dfeed19b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8f060cf5-22d1-4e44-9c68-6b45dfeed19b",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f060cf5-22d1-4e44-9c68-6b45dfeed19b",
    "image": "perev_left",
    "point": {
      "latitude": 52.9851799558,
      "longitude": 30.9185026691
    }
  },
  "8f1f7fbd-4979-4414-8a59-a031de64f4e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8f1f7fbd-4979-4414-8a59-a031de64f4e0",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f1f7fbd-4979-4414-8a59-a031de64f4e0",
    "image": "perev_left",
    "point": {
      "latitude": 53.2827529077,
      "longitude": 30.999650191
    }
  },
  "8f27b288-3e4b-4c3c-9e1f-4c04cf6bd279": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 245",
      "id": "8f27b288-3e4b-4c3c-9e1f-4c04cf6bd279",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f27b288-3e4b-4c3c-9e1f-4c04cf6bd279",
    "image": "kilometrage",
    "point": {
      "latitude": 53.134192791,
      "longitude": 30.8860465428
    }
  },
  "8f701db1-428d-42a6-a9cc-f900de3c7aef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8f701db1-428d-42a6-a9cc-f900de3c7aef",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f701db1-428d-42a6-a9cc-f900de3c7aef",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1170530807,
      "longitude": 30.876511584
    }
  },
  "8f98ecc8-4603-4d71-84be-46d1890ee37c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "8f98ecc8-4603-4d71-84be-46d1890ee37c",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f98ecc8-4603-4d71-84be-46d1890ee37c",
    "image": "perev_left",
    "point": {
      "latitude": 52.7903562847,
      "longitude": 30.9511082595
    }
  },
  "9081f002-8dc5-4433-8ced-b13493c1ea92": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 135",
      "id": "9081f002-8dc5-4433-8ced-b13493c1ea92",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9081f002-8dc5-4433-8ced-b13493c1ea92",
    "image": "perev_left",
    "point": {
      "latitude": 52.3638528189,
      "longitude": 30.9737664647
    }
  },
  "917fac0e-7fab-43fc-94de-6c4f855796a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 10",
      "id": "917fac0e-7fab-43fc-94de-6c4f855796a1",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "917fac0e-7fab-43fc-94de-6c4f855796a1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0443611738,
      "longitude": 30.9377532069
    }
  },
  "91eaa65e-ebdf-42bd-a131-addebfee8f23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "91eaa65e-ebdf-42bd-a131-addebfee8f23",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91eaa65e-ebdf-42bd-a131-addebfee8f23",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8933431128,
      "longitude": 30.9611718783
    }
  },
  "92144e54-8b4b-41f6-8fee-341b3f139bec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "92144e54-8b4b-41f6-8fee-341b3f139bec",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92144e54-8b4b-41f6-8fee-341b3f139bec",
    "image": "perev_right",
    "point": {
      "latitude": 53.4084271105,
      "longitude": 31.0065513494
    }
  },
  "92e59193-d370-4187-83d2-531ad0248386": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 24",
      "id": "92e59193-d370-4187-83d2-531ad0248386",
      "kilometrage": 42,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92e59193-d370-4187-83d2-531ad0248386",
    "image": "buyo_right",
    "point": {
      "latitude": 52.113974382,
      "longitude": 30.9426739974
    }
  },
  "936702c7-a5a4-44b4-a968-661bcf2f4b79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "936702c7-a5a4-44b4-a968-661bcf2f4b79",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "936702c7-a5a4-44b4-a968-661bcf2f4b79",
    "image": "perev_right",
    "point": {
      "latitude": 52.7825210282,
      "longitude": 30.9405733263
    }
  },
  "94127587-76f4-4f7a-bb35-232b78380190": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 121м",
      "id": "94127587-76f4-4f7a-bb35-232b78380190",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94127587-76f4-4f7a-bb35-232b78380190",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4851528459,
      "longitude": 31.117684811
    }
  },
  "94536459-31b3-4168-9338-d57cce300d1b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "94536459-31b3-4168-9338-d57cce300d1b",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94536459-31b3-4168-9338-d57cce300d1b",
    "image": "perev_left",
    "point": {
      "latitude": 52.6837298753,
      "longitude": 31.0728391977
    }
  },
  "94acad7a-2109-4317-8d13-0aeab177ce39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 30",
      "id": "94acad7a-2109-4317-8d13-0aeab177ce39",
      "kilometrage": 47,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94acad7a-2109-4317-8d13-0aeab177ce39",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1488671351,
      "longitude": 30.958568956
    }
  },
  "94e0475e-e5d4-472f-966e-776813464531": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "94e0475e-e5d4-472f-966e-776813464531",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94e0475e-e5d4-472f-966e-776813464531",
    "image": "perev_left",
    "point": {
      "latitude": 53.4106808084,
      "longitude": 31.0152224584
    }
  },
  "9524d032-fea7-445d-a4e2-1756f84177e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "9524d032-fea7-445d-a4e2-1756f84177e2",
      "kilometrage": 274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9524d032-fea7-445d-a4e2-1756f84177e2",
    "image": "perev_left",
    "point": {
      "latitude": 53.2860681071,
      "longitude": 31.0036147083
    }
  },
  "9572892e-61a5-4ef9-b88f-c8e6385b3bef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 255",
      "id": "9572892e-61a5-4ef9-b88f-c8e6385b3bef",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9572892e-61a5-4ef9-b88f-c8e6385b3bef",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1965453967,
      "longitude": 30.8982003049
    }
  },
  "958acff9-aedb-4d44-a513-c580aedaa27a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 39",
      "id": "958acff9-aedb-4d44-a513-c580aedaa27a",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "958acff9-aedb-4d44-a513-c580aedaa27a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2149502035,
      "longitude": 30.942230545
    }
  },
  "95950f7d-2714-476d-85eb-f8c7ac42e375": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 110м",
      "id": "95950f7d-2714-476d-85eb-f8c7ac42e375",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95950f7d-2714-476d-85eb-f8c7ac42e375",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4531252454,
      "longitude": 31.0757786786
    }
  },
  "95ca0bd1-6130-4502-b9a4-a64fc1a8c763": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "95ca0bd1-6130-4502-b9a4-a64fc1a8c763",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95ca0bd1-6130-4502-b9a4-a64fc1a8c763",
    "image": "perev_left",
    "point": {
      "latitude": 53.1838333326,
      "longitude": 30.8932124948
    }
  },
  "96229a92-6434-452e-9ca1-c93c21642bac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "96229a92-6434-452e-9ca1-c93c21642bac",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96229a92-6434-452e-9ca1-c93c21642bac",
    "image": "name_of",
    "point": {
      "latitude": 53.3774769036,
      "longitude": 30.9840335911
    }
  },
  "969fb73b-d928-4f0a-be38-a86d6540ff4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "969fb73b-d928-4f0a-be38-a86d6540ff4b",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "969fb73b-d928-4f0a-be38-a86d6540ff4b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3968158598,
      "longitude": 31.0032401908
    }
  },
  "96bb0b91-d15b-48d8-952c-189147d40f85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "96bb0b91-d15b-48d8-952c-189147d40f85",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96bb0b91-d15b-48d8-952c-189147d40f85",
    "image": "perev_right",
    "point": {
      "latitude": 52.6667399066,
      "longitude": 31.0775349436
    }
  },
  "9776a6bc-431d-4d89-b8f8-5bc5fdec927f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "9776a6bc-431d-4d89-b8f8-5bc5fdec927f",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9776a6bc-431d-4d89-b8f8-5bc5fdec927f",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4222748507,
      "longitude": 31.0213442098
    }
  },
  "97786a22-cc3c-4a1a-8f07-c77c9f17c949": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 50",
      "id": "97786a22-cc3c-4a1a-8f07-c77c9f17c949",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97786a22-cc3c-4a1a-8f07-c77c9f17c949",
    "image": "buyo_left",
    "point": {
      "latitude": 52.285280895,
      "longitude": 30.9101590173
    }
  },
  "9808307f-f54c-4fcd-b411-339c5d39714f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 194",
      "id": "9808307f-f54c-4fcd-b411-339c5d39714f",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9808307f-f54c-4fcd-b411-339c5d39714f",
    "image": "perev_left",
    "point": {
      "latitude": 52.5916754911,
      "longitude": 31.1088221116
    }
  },
  "9835c507-bc66-48fe-8b92-4b3cb8ecb180": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "9835c507-bc66-48fe-8b92-4b3cb8ecb180",
      "kilometrage": 207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9835c507-bc66-48fe-8b92-4b3cb8ecb180",
    "image": "perev_right",
    "point": {
      "latitude": 52.897113241,
      "longitude": 30.9536385132
    }
  },
  "989a8c7e-ab33-41c4-8cfe-307a5000f0d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 15",
      "id": "989a8c7e-ab33-41c4-8cfe-307a5000f0d3",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "989a8c7e-ab33-41c4-8cfe-307a5000f0d3",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.9687719801,
      "longitude": 30.8902867936
    }
  },
  "98af767e-fe06-4e32-a3ae-91f06b001f98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 112",
      "id": "98af767e-fe06-4e32-a3ae-91f06b001f98",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98af767e-fe06-4e32-a3ae-91f06b001f98",
    "image": "perev_left",
    "point": {
      "latitude": 52.2378884966,
      "longitude": 30.8932216592
    }
  },
  "98f2fc0c-0f68-4d2a-ab66-ee64a75101d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 74",
      "id": "98f2fc0c-0f68-4d2a-ab66-ee64a75101d5",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98f2fc0c-0f68-4d2a-ab66-ee64a75101d5",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3775784557,
      "longitude": 30.9578028981
    }
  },
  "99359110-87d5-49cb-bd8e-b961a86a8926": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 31",
      "id": "99359110-87d5-49cb-bd8e-b961a86a8926",
      "kilometrage": 47,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99359110-87d5-49cb-bd8e-b961a86a8926",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1533248524,
      "longitude": 30.9594264996
    }
  },
  "9a07fa18-a3d4-4f5b-a8c5-c4168c7fbafa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "9a07fa18-a3d4-4f5b-a8c5-c4168c7fbafa",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a07fa18-a3d4-4f5b-a8c5-c4168c7fbafa",
    "image": "bridge_low",
    "point": {
      "latitude": 53.1248538664,
      "longitude": 30.8677150403
    }
  },
  "9b14c0ee-79df-432b-bacc-7fb6b3cfa20a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "9b14c0ee-79df-432b-bacc-7fb6b3cfa20a",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b14c0ee-79df-432b-bacc-7fb6b3cfa20a",
    "image": "perev_left",
    "point": {
      "latitude": 53.1286525621,
      "longitude": 30.8806640614
    }
  },
  "9b507640-7482-4d4b-af4e-c37fcd5786e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 123",
      "id": "9b507640-7482-4d4b-af4e-c37fcd5786e6",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b507640-7482-4d4b-af4e-c37fcd5786e6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.486163188,
      "longitude": 31.1295934126
    }
  },
  "9b92b1e1-9f0d-41f1-b510-9d5222d6f7e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "9b92b1e1-9f0d-41f1-b510-9d5222d6f7e3",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b92b1e1-9f0d-41f1-b510-9d5222d6f7e3",
    "image": "perev_right",
    "point": {
      "latitude": 53.2933073855,
      "longitude": 31.0063172085
    }
  },
  "9b939a84-493b-4feb-807f-a9a9dfe8e191": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 87",
      "id": "9b939a84-493b-4feb-807f-a9a9dfe8e191",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b939a84-493b-4feb-807f-a9a9dfe8e191",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3905028567,
      "longitude": 31.0099093187
    }
  },
  "9bb36edf-fd7e-4b15-93e6-3a17655f11ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "9bb36edf-fd7e-4b15-93e6-3a17655f11ce",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bb36edf-fd7e-4b15-93e6-3a17655f11ce",
    "image": "name_of",
    "point": {
      "latitude": 52.9138078067,
      "longitude": 30.9422702129
    }
  },
  "9bbe588b-ff6a-4ff2-94c8-5ad2941b871d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 165",
      "id": "9bbe588b-ff6a-4ff2-94c8-5ad2941b871d",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bbe588b-ff6a-4ff2-94c8-5ad2941b871d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.701060284,
      "longitude": 31.0167058306
    }
  },
  "9bf489ab-c413-44d4-b94e-73e37924c9d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9bf489ab-c413-44d4-b94e-73e37924c9d9",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bf489ab-c413-44d4-b94e-73e37924c9d9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.5598551132,
      "longitude": 31.1627155376
    }
  },
  "9ce3d36e-32b3-4139-95c0-d29278d78d71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 51",
      "id": "9ce3d36e-32b3-4139-95c0-d29278d78d71",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ce3d36e-32b3-4139-95c0-d29278d78d71",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.2899280857,
      "longitude": 30.9174716941
    }
  },
  "9da87b45-cd80-423b-923e-95f8c2009b2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9da87b45-cd80-423b-923e-95f8c2009b2d",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9da87b45-cd80-423b-923e-95f8c2009b2d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4645531864,
      "longitude": 31.0835778849
    }
  },
  "9e1d0ace-94b2-4f12-90f6-47106bbec06f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9e1d0ace-94b2-4f12-90f6-47106bbec06f",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e1d0ace-94b2-4f12-90f6-47106bbec06f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3609108198,
      "longitude": 30.9725150095
    }
  },
  "9e34b4f3-161e-448a-b70a-2efc3850a93a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "9e34b4f3-161e-448a-b70a-2efc3850a93a",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e34b4f3-161e-448a-b70a-2efc3850a93a",
    "image": "perev_left",
    "point": {
      "latitude": 53.1778509841,
      "longitude": 30.8883392058
    }
  },
  "9eafb1be-9a36-4834-bb25-e9f64beec5cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 133",
      "id": "9eafb1be-9a36-4834-bb25-e9f64beec5cb",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9eafb1be-9a36-4834-bb25-e9f64beec5cb",
    "image": "perev_right",
    "point": {
      "latitude": 52.359171359,
      "longitude": 30.9562773042
    }
  },
  "9efbff76-48e2-4f72-98be-63fe6b43c6e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9efbff76-48e2-4f72-98be-63fe6b43c6e5",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9efbff76-48e2-4f72-98be-63fe6b43c6e5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4648004605,
      "longitude": 31.0817933111
    }
  },
  "9f154b07-a3ee-467d-bfa1-2d6fba372297": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "9f154b07-a3ee-467d-bfa1-2d6fba372297",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f154b07-a3ee-467d-bfa1-2d6fba372297",
    "image": "perev_left",
    "point": {
      "latitude": 53.3125998482,
      "longitude": 31.0129541862
    }
  },
  "9f1f07cb-997e-4aa9-92cb-8378ff24ba5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 115",
      "id": "9f1f07cb-997e-4aa9-92cb-8378ff24ba5d",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f1f07cb-997e-4aa9-92cb-8378ff24ba5d",
    "image": "perev_right",
    "point": {
      "latitude": 52.2547174166,
      "longitude": 30.8844693918
    }
  },
  "9ff43731-761b-4b3d-8411-dd35abd520a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9ff43731-761b-4b3d-8411-dd35abd520a7",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ff43731-761b-4b3d-8411-dd35abd520a7",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3613425109,
      "longitude": 30.9728206918
    }
  },
  "a0162c14-9f14-49d6-ad6c-0b1c71f00efa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 40",
      "id": "a0162c14-9f14-49d6-ad6c-0b1c71f00efa",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0162c14-9f14-49d6-ad6c-0b1c71f00efa",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0988366739,
      "longitude": 30.9494911655
    }
  },
  "a06b73e1-5fa3-46c4-b6a9-507f795c1192": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "a06b73e1-5fa3-46c4-b6a9-507f795c1192",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a06b73e1-5fa3-46c4-b6a9-507f795c1192",
    "image": "speed_limit",
    "point": {
      "latitude": 52.4369392897,
      "longitude": 31.0296560567
    }
  },
  "a0820ba6-135b-4fc8-9a41-ecb75e2d3e2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 47",
      "id": "a0820ba6-135b-4fc8-9a41-ecb75e2d3e2b",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0820ba6-135b-4fc8-9a41-ecb75e2d3e2b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2679590036,
      "longitude": 30.900079509
    }
  },
  "a0d7929d-ba0a-4f6a-8f1d-5fd2296413b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Расхождение и обгон запрещены  ",
      "id": "a0d7929d-ba0a-4f6a-8f1d-5fd2296413b5",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0d7929d-ba0a-4f6a-8f1d-5fd2296413b5",
    "image": "overtaking_forbidden",
    "point": {
      "latitude": 52.4336243385,
      "longitude": 31.0236076721
    }
  },
  "a12f9135-d233-409e-87b5-f3b4f7245d3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 42",
      "id": "a12f9135-d233-409e-87b5-f3b4f7245d3b",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a12f9135-d233-409e-87b5-f3b4f7245d3b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2339578717,
      "longitude": 30.9197731487
    }
  },
  "a1a6ec0c-9daf-46f6-ab31-6f4f543a01d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 108",
      "id": "a1a6ec0c-9daf-46f6-ab31-6f4f543a01d3",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1a6ec0c-9daf-46f6-ab31-6f4f543a01d3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4495515107,
      "longitude": 31.0668993796
    }
  },
  "a1fbc2e9-d262-4451-b047-968370707c2c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a1fbc2e9-d262-4451-b047-968370707c2c",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1fbc2e9-d262-4451-b047-968370707c2c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4483758084,
      "longitude": 31.0613135523
    }
  },
  "a2bb1776-e7df-4dec-aa05-6727379873bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 106",
      "id": "a2bb1776-e7df-4dec-aa05-6727379873bc",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2bb1776-e7df-4dec-aa05-6727379873bc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4371338235,
      "longitude": 31.0499161853
    }
  },
  "a2f4ee09-808e-4c4c-ab2e-f24850c4ee60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a2f4ee09-808e-4c4c-ab2e-f24850c4ee60",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2f4ee09-808e-4c4c-ab2e-f24850c4ee60",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4025348877,
      "longitude": 31.0017242365
    }
  },
  "a3169ae2-2603-4dc3-9135-f692daf55e29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "a3169ae2-2603-4dc3-9135-f692daf55e29",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3169ae2-2603-4dc3-9135-f692daf55e29",
    "image": "perev_right",
    "point": {
      "latitude": 53.18161421,
      "longitude": 30.8844533555
    }
  },
  "a34eccd1-43ee-4c0f-bbf8-cc2769b90395": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a34eccd1-43ee-4c0f-bbf8-cc2769b90395",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a34eccd1-43ee-4c0f-bbf8-cc2769b90395",
    "image": "perev_left",
    "point": {
      "latitude": 53.1868980582,
      "longitude": 30.8959016141
    }
  },
  "a43a8780-99dc-4865-a619-42d70184eb55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 275",
      "id": "a43a8780-99dc-4865-a619-42d70184eb55",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a43a8780-99dc-4865-a619-42d70184eb55",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2920524615,
      "longitude": 31.0070739589
    }
  },
  "a43d100a-5061-43e8-a563-da6cc27edee3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 159",
      "id": "a43d100a-5061-43e8-a563-da6cc27edee3",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a43d100a-5061-43e8-a563-da6cc27edee3",
    "image": "perev_right",
    "point": {
      "latitude": 52.4878128719,
      "longitude": 31.1363598693
    }
  },
  "a43f97bc-11a8-44d5-92bb-c22f66fbd3e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a43f97bc-11a8-44d5-92bb-c22f66fbd3e3",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a43f97bc-11a8-44d5-92bb-c22f66fbd3e3",
    "image": "perev_left",
    "point": {
      "latitude": 52.6146416493,
      "longitude": 31.1346895792
    }
  },
  "a47bf0bd-1e5c-47b9-9b92-d7b82d821288": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a47bf0bd-1e5c-47b9-9b92-d7b82d821288",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a47bf0bd-1e5c-47b9-9b92-d7b82d821288",
    "image": "perev_left",
    "point": {
      "latitude": 52.7753917275,
      "longitude": 30.9572136255
    }
  },
  "a48df1ef-9c17-4b6a-83b0-a625db1616b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a48df1ef-9c17-4b6a-83b0-a625db1616b5",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a48df1ef-9c17-4b6a-83b0-a625db1616b5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3850373779,
      "longitude": 30.9988620859
    }
  },
  "a49e9b8a-8aae-40fc-a2c0-36e4450bdceb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "a49e9b8a-8aae-40fc-a2c0-36e4450bdceb",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a49e9b8a-8aae-40fc-a2c0-36e4450bdceb",
    "image": "perev_left",
    "point": {
      "latitude": 51.9534935163,
      "longitude": 30.8372841876
    }
  },
  "a4c25d48-f895-46fa-a573-b928fc9b6040": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "a4c25d48-f895-46fa-a573-b928fc9b6040",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4c25d48-f895-46fa-a573-b928fc9b6040",
    "image": "perev_right",
    "point": {
      "latitude": 52.3395026028,
      "longitude": 30.9329147021
    }
  },
  "a654450a-af15-403e-b2da-e25b88fde07d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 155",
      "id": "a654450a-af15-403e-b2da-e25b88fde07d",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a654450a-af15-403e-b2da-e25b88fde07d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6623781385,
      "longitude": 31.0835952497
    }
  },
  "a6976bf2-cf65-4b0e-9543-d02a3dc83927": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 233",
      "id": "a6976bf2-cf65-4b0e-9543-d02a3dc83927",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6976bf2-cf65-4b0e-9543-d02a3dc83927",
    "image": "perev_right",
    "point": {
      "latitude": 52.6189931096,
      "longitude": 31.1126835019
    }
  },
  "a6b8cbe2-49e0-4126-b889-e9061f5b2ac1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "a6b8cbe2-49e0-4126-b889-e9061f5b2ac1",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6b8cbe2-49e0-4126-b889-e9061f5b2ac1",
    "image": "perev_right",
    "point": {
      "latitude": 53.4061396283,
      "longitude": 31.0062909303
    }
  },
  "a724ecac-3a92-4e3a-8f7d-d6a6b16a05b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a724ecac-3a92-4e3a-8f7d-d6a6b16a05b2",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a724ecac-3a92-4e3a-8f7d-d6a6b16a05b2",
    "image": "perev_left",
    "point": {
      "latitude": 53.2669387642,
      "longitude": 30.9707370626
    }
  },
  "a7d008e7-24c8-48d1-a870-9b169a50ae53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 186",
      "id": "a7d008e7-24c8-48d1-a870-9b169a50ae53",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7d008e7-24c8-48d1-a870-9b169a50ae53",
    "image": "perev_right",
    "point": {
      "latitude": 52.5758001113,
      "longitude": 31.1260337775
    }
  },
  "a7dd7721-676c-48b3-b6e9-ee7224e9e465": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a7dd7721-676c-48b3-b6e9-ee7224e9e465",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7dd7721-676c-48b3-b6e9-ee7224e9e465",
    "image": "perev_left",
    "point": {
      "latitude": 53.3166213698,
      "longitude": 31.0126504013
    }
  },
  "a7e8dda7-76d3-4f51-813f-8e83a0e6b012": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 250",
      "id": "a7e8dda7-76d3-4f51-813f-8e83a0e6b012",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7e8dda7-76d3-4f51-813f-8e83a0e6b012",
    "image": "perev_left",
    "point": {
      "latitude": 52.6472669923,
      "longitude": 31.125069652
    }
  },
  "a81aff85-28d6-45df-bf5a-33942907fb84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 80",
      "id": "a81aff85-28d6-45df-bf5a-33942907fb84",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a81aff85-28d6-45df-bf5a-33942907fb84",
    "image": "buyo_right",
    "point": {
      "latitude": 52.388742488,
      "longitude": 30.9809837846
    }
  },
  "a85ba58b-1280-4472-96bd-3f63cbf0b810": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a85ba58b-1280-4472-96bd-3f63cbf0b810",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a85ba58b-1280-4472-96bd-3f63cbf0b810",
    "image": "perev_left",
    "point": {
      "latitude": 53.0898525912,
      "longitude": 30.8730027421
    }
  },
  "a8cd5f43-1e57-473a-bbb7-2f2ae214e5de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 47",
      "id": "a8cd5f43-1e57-473a-bbb7-2f2ae214e5de",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8cd5f43-1e57-473a-bbb7-2f2ae214e5de",
    "image": "perev_right",
    "point": {
      "latitude": 52.0764168471,
      "longitude": 30.9382787897
    }
  },
  "a8dc1d6e-2c29-4af0-a7d8-4ed8095c9144": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "a8dc1d6e-2c29-4af0-a7d8-4ed8095c9144",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8dc1d6e-2c29-4af0-a7d8-4ed8095c9144",
    "image": "perev_left",
    "point": {
      "latitude": 52.6908398866,
      "longitude": 31.039286046
    }
  },
  "a90306cf-ca8f-498e-a19d-32b3c1d2bcda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 40",
      "id": "a90306cf-ca8f-498e-a19d-32b3c1d2bcda",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a90306cf-ca8f-498e-a19d-32b3c1d2bcda",
    "image": "perev_right",
    "point": {
      "latitude": 52.0426262884,
      "longitude": 30.93394708
    }
  },
  "a92578ab-7034-4f5f-8208-df3e5eb3265d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "a92578ab-7034-4f5f-8208-df3e5eb3265d",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a92578ab-7034-4f5f-8208-df3e5eb3265d",
    "image": "perev_right",
    "point": {
      "latitude": 53.1841004644,
      "longitude": 30.8867788692
    }
  },
  "aa05417d-9a2f-4dfc-87cc-9bc76a0d549f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "aa05417d-9a2f-4dfc-87cc-9bc76a0d549f",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa05417d-9a2f-4dfc-87cc-9bc76a0d549f",
    "image": "perev_left",
    "point": {
      "latitude": 52.9426970072,
      "longitude": 30.9389350139
    }
  },
  "aa6dd63a-9373-490d-b774-ff9eb0ef84bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "aa6dd63a-9373-490d-b774-ff9eb0ef84bc",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa6dd63a-9373-490d-b774-ff9eb0ef84bc",
    "image": "perev_left",
    "point": {
      "latitude": 52.7252749131,
      "longitude": 30.9676989295
    }
  },
  "aacf6766-7d29-429e-aac1-e2415f30f052": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 57",
      "id": "aacf6766-7d29-429e-aac1-e2415f30f052",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aacf6766-7d29-429e-aac1-e2415f30f052",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2996872383,
      "longitude": 30.9355005646
    }
  },
  "ab6c19ae-de15-4018-85d4-91e2f360c59f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ab6c19ae-de15-4018-85d4-91e2f360c59f",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab6c19ae-de15-4018-85d4-91e2f360c59f",
    "image": "perev_left",
    "point": {
      "latitude": 53.4019473961,
      "longitude": 31.0122234957
    }
  },
  "aba63d18-a749-49cf-b51c-c1654916604b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 86",
      "id": "aba63d18-a749-49cf-b51c-c1654916604b",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aba63d18-a749-49cf-b51c-c1654916604b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1966695435,
      "longitude": 30.9269717789
    }
  },
  "abacd1be-ef86-432d-8880-6fb6530439b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "abacd1be-ef86-432d-8880-6fb6530439b8",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abacd1be-ef86-432d-8880-6fb6530439b8",
    "image": "perev_right",
    "point": {
      "latitude": 52.7201919705,
      "longitude": 30.966149512
    }
  },
  "ac1cd16e-27d3-42c3-bc2d-9f973cc06442": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ac1cd16e-27d3-42c3-bc2d-9f973cc06442",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac1cd16e-27d3-42c3-bc2d-9f973cc06442",
    "image": "perev_right",
    "point": {
      "latitude": 53.2291105221,
      "longitude": 30.9577784571
    }
  },
  "ac2d0512-29f8-45e6-ad1c-1e3451bfc563": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 160",
      "id": "ac2d0512-29f8-45e6-ad1c-1e3451bfc563",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac2d0512-29f8-45e6-ad1c-1e3451bfc563",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6869877516,
      "longitude": 31.0504907107
    }
  },
  "ac43b586-72bf-4c7d-8c8a-3a2c023cb647": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 16",
      "id": "ac43b586-72bf-4c7d-8c8a-3a2c023cb647",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac43b586-72bf-4c7d-8c8a-3a2c023cb647",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0758888499,
      "longitude": 30.9190750972
    }
  },
  "ac479ffb-c8eb-4abe-8195-4a72d588393f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "ac479ffb-c8eb-4abe-8195-4a72d588393f",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac479ffb-c8eb-4abe-8195-4a72d588393f",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9383778804,
      "longitude": 30.9435324235
    }
  },
  "ac529b32-9496-41c8-b780-d81fb3ba5177": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ac529b32-9496-41c8-b780-d81fb3ba5177",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac529b32-9496-41c8-b780-d81fb3ba5177",
    "image": "perev_right",
    "point": {
      "latitude": 53.1659071829,
      "longitude": 30.8796819964
    }
  },
  "ad271126-1b9f-4d8f-b416-671e88e79018": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ad271126-1b9f-4d8f-b416-671e88e79018",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad271126-1b9f-4d8f-b416-671e88e79018",
    "image": "perev_left",
    "point": {
      "latitude": 52.894211881,
      "longitude": 30.9607538603
    }
  },
  "adafa6ac-1140-4922-a7a7-6083d5031d4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "adafa6ac-1140-4922-a7a7-6083d5031d4d",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "adafa6ac-1140-4922-a7a7-6083d5031d4d",
    "image": "perev_left",
    "point": {
      "latitude": 53.3040122369,
      "longitude": 31.0180288574
    }
  },
  "adbf0c45-b555-4592-8d6e-62ec0d6d7ed4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 103",
      "id": "adbf0c45-b555-4592-8d6e-62ec0d6d7ed4",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "adbf0c45-b555-4592-8d6e-62ec0d6d7ed4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4372323611,
      "longitude": 31.0342537655
    }
  },
  "ae131d69-9402-4ee0-b864-fcb646975071": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 66",
      "id": "ae131d69-9402-4ee0-b864-fcb646975071",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae131d69-9402-4ee0-b864-fcb646975071",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3437244347,
      "longitude": 30.9438871329
    }
  },
  "ae2b799e-6e6c-4162-91a7-0900f590552c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ae2b799e-6e6c-4162-91a7-0900f590552c",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae2b799e-6e6c-4162-91a7-0900f590552c",
    "image": "perev_left",
    "point": {
      "latitude": 53.0653198909,
      "longitude": 30.8946911761
    }
  },
  "ae5c3dde-3056-40ea-a470-8da922086151": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ae5c3dde-3056-40ea-a470-8da922086151",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae5c3dde-3056-40ea-a470-8da922086151",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1251499927,
      "longitude": 30.9484810585
    }
  },
  "ae666663-7a12-4dd5-a4b1-83dd60f51bdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ae666663-7a12-4dd5-a4b1-83dd60f51bdd",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae666663-7a12-4dd5-a4b1-83dd60f51bdd",
    "image": "perev_left",
    "point": {
      "latitude": 53.2566883812,
      "longitude": 30.9658077735
    }
  },
  "aed29b9c-b3c4-4d1d-89d5-a224fb102e7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "aed29b9c-b3c4-4d1d-89d5-a224fb102e7f",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aed29b9c-b3c4-4d1d-89d5-a224fb102e7f",
    "image": "perev_left",
    "point": {
      "latitude": 53.382267438,
      "longitude": 31.0060632437
    }
  },
  "aefa0664-daa5-4384-8f23-de28195a1dc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 44",
      "id": "aefa0664-daa5-4384-8f23-de28195a1dc7",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aefa0664-daa5-4384-8f23-de28195a1dc7",
    "image": "perev_right",
    "point": {
      "latitude": 52.0636209138,
      "longitude": 30.9356272238
    }
  },
  "af22b72e-7812-496c-aafc-91220024f1f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "af22b72e-7812-496c-aafc-91220024f1f5",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af22b72e-7812-496c-aafc-91220024f1f5",
    "image": "perev_right",
    "point": {
      "latitude": 52.0291350635,
      "longitude": 30.9402427927
    }
  },
  "af66054b-4bf3-4fe4-b4d4-a48837404c0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "af66054b-4bf3-4fe4-b4d4-a48837404c0d",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af66054b-4bf3-4fe4-b4d4-a48837404c0d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4036703977,
      "longitude": 31.0020342665
    }
  },
  "b01c8d47-a5c2-439a-982f-8c8f7c214e47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b01c8d47-a5c2-439a-982f-8c8f7c214e47",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b01c8d47-a5c2-439a-982f-8c8f7c214e47",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.294150675,
      "longitude": 30.9266135142
    }
  },
  "b06f166f-d7d8-476a-baf5-9cdce287d22d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 193",
      "id": "b06f166f-d7d8-476a-baf5-9cdce287d22d",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b06f166f-d7d8-476a-baf5-9cdce287d22d",
    "image": "perev_right",
    "point": {
      "latitude": 52.5878805587,
      "longitude": 31.1037864585
    }
  },
  "b16857f2-7f54-4f4a-a1b1-15c04f7532de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b16857f2-7f54-4f4a-a1b1-15c04f7532de",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b16857f2-7f54-4f4a-a1b1-15c04f7532de",
    "image": "perev_left",
    "point": {
      "latitude": 53.1388444754,
      "longitude": 30.8845863413
    }
  },
  "b1c3756a-2b36-49b6-b6a2-aaa25f508f18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b1c3756a-2b36-49b6-b6a2-aaa25f508f18",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1c3756a-2b36-49b6-b6a2-aaa25f508f18",
    "image": "perev_right",
    "point": {
      "latitude": 53.2402158787,
      "longitude": 30.9625685621
    }
  },
  "b1c664f3-41de-4d15-92f0-8c6e64efcd91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 52",
      "id": "b1c664f3-41de-4d15-92f0-8c6e64efcd91",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1c664f3-41de-4d15-92f0-8c6e64efcd91",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.2930452115,
      "longitude": 30.9277481395
    }
  },
  "b1f452a7-3813-49ea-a320-ea3f09886e1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b1f452a7-3813-49ea-a320-ea3f09886e1f",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1f452a7-3813-49ea-a320-ea3f09886e1f",
    "image": "perev_right",
    "point": {
      "latitude": 52.7676776665,
      "longitude": 30.9484053455
    }
  },
  "b21b444a-4445-4514-adfd-82211781aa56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b21b444a-4445-4514-adfd-82211781aa56",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b21b444a-4445-4514-adfd-82211781aa56",
    "image": "perev_left",
    "point": {
      "latitude": 52.7281281347,
      "longitude": 30.963222773
    }
  },
  "b2bc49d2-731f-496e-84a3-4e5bccb7ba28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 247",
      "id": "b2bc49d2-731f-496e-84a3-4e5bccb7ba28",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2bc49d2-731f-496e-84a3-4e5bccb7ba28",
    "image": "perev_left",
    "point": {
      "latitude": 52.6430337538,
      "longitude": 31.136874004
    }
  },
  "b2ea2da0-4f86-4203-a902-5b2a425dcf0c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 64",
      "id": "b2ea2da0-4f86-4203-a902-5b2a425dcf0c",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2ea2da0-4f86-4203-a902-5b2a425dcf0c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3327020143,
      "longitude": 30.9360896778
    }
  },
  "b329cafa-792a-432c-81ac-e27f3c113d89": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b329cafa-792a-432c-81ac-e27f3c113d89",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b329cafa-792a-432c-81ac-e27f3c113d89",
    "image": "perev_left",
    "point": {
      "latitude": 53.0124565329,
      "longitude": 30.9151507438
    }
  },
  "b332ce47-1c02-4370-838a-afbc2eeaf4b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "b332ce47-1c02-4370-838a-afbc2eeaf4b4",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b332ce47-1c02-4370-838a-afbc2eeaf4b4",
    "image": "bridge_low",
    "point": {
      "latitude": 52.8889755815,
      "longitude": 30.9603883656
    }
  },
  "b3593eda-25ef-43b0-b704-b346308a8aab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3м",
      "id": "b3593eda-25ef-43b0-b704-b346308a8aab",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3593eda-25ef-43b0-b704-b346308a8aab",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9534860339,
      "longitude": 30.8166548111
    }
  },
  "b37e0800-de77-410d-a9fd-a904e3411f4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 105",
      "id": "b37e0800-de77-410d-a9fd-a904e3411f4d",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b37e0800-de77-410d-a9fd-a904e3411f4d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4091088415,
      "longitude": 31.0092781609
    }
  },
  "b3b31faa-5612-471a-88a5-eb06bccfa395": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 171",
      "id": "b3b31faa-5612-471a-88a5-eb06bccfa395",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3b31faa-5612-471a-88a5-eb06bccfa395",
    "image": "perev_right",
    "point": {
      "latitude": 52.523382781,
      "longitude": 31.1690020765
    }
  },
  "b41c1b27-1476-40e1-9f02-c0f781b9a388": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "b41c1b27-1476-40e1-9f02-c0f781b9a388",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b41c1b27-1476-40e1-9f02-c0f781b9a388",
    "image": "perev_left",
    "point": {
      "latitude": 52.5699657259,
      "longitude": 31.1447201688
    }
  },
  "b422efa0-199e-4132-9dcd-50c48ed2ddae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b422efa0-199e-4132-9dcd-50c48ed2ddae",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b422efa0-199e-4132-9dcd-50c48ed2ddae",
    "image": "perev_right",
    "point": {
      "latitude": 52.7368730592,
      "longitude": 30.9506631939
    }
  },
  "b478068c-9b29-44b1-a236-550f57da23c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b478068c-9b29-44b1-a236-550f57da23c6",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b478068c-9b29-44b1-a236-550f57da23c6",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9417958565,
      "longitude": 30.9407081166
    }
  },
  "b4f28dfc-62bc-4767-8f67-ec57c7ebd810": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "b4f28dfc-62bc-4767-8f67-ec57c7ebd810",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4f28dfc-62bc-4767-8f67-ec57c7ebd810",
    "image": "perev_left",
    "point": {
      "latitude": 52.5601487945,
      "longitude": 31.1608983883
    }
  },
  "b5584511-6a19-4553-b873-a8c14d42f2e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "b5584511-6a19-4553-b873-a8c14d42f2e3",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5584511-6a19-4553-b873-a8c14d42f2e3",
    "image": "perev_left",
    "point": {
      "latitude": 51.9934991804,
      "longitude": 30.9085078276
    }
  },
  "b58af93e-8571-4493-9096-e64f9e50a6a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b58af93e-8571-4493-9096-e64f9e50a6a1",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b58af93e-8571-4493-9096-e64f9e50a6a1",
    "image": "perev_left",
    "point": {
      "latitude": 52.6611449547,
      "longitude": 31.0835909051
    }
  },
  "b60ec0e5-42a8-43c8-8969-7c3cd6bfe7ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 55",
      "id": "b60ec0e5-42a8-43c8-8969-7c3cd6bfe7ea",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b60ec0e5-42a8-43c8-8969-7c3cd6bfe7ea",
    "image": "perev_left",
    "point": {
      "latitude": 52.0802164324,
      "longitude": 30.9275471706
    }
  },
  "b65492c1-852f-40f6-8f5a-dd5cfbd7abf1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 54",
      "id": "b65492c1-852f-40f6-8f5a-dd5cfbd7abf1",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b65492c1-852f-40f6-8f5a-dd5cfbd7abf1",
    "image": "perev_right",
    "point": {
      "latitude": 52.0803160441,
      "longitude": 30.9355874473
    }
  },
  "b6b63d3c-1e42-4e48-a069-34759bed996c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b6b63d3c-1e42-4e48-a069-34759bed996c",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6b63d3c-1e42-4e48-a069-34759bed996c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6988688775,
      "longitude": 31.0308674506
    }
  },
  "b6c666f4-ca5a-4655-8c76-283d3430af32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b6c666f4-ca5a-4655-8c76-283d3430af32",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6c666f4-ca5a-4655-8c76-283d3430af32",
    "image": "perev_right",
    "point": {
      "latitude": 52.6743897807,
      "longitude": 31.0775333493
    }
  },
  "b6d13e9b-44e4-464f-8710-9d9a88150165": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b6d13e9b-44e4-464f-8710-9d9a88150165",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6d13e9b-44e4-464f-8710-9d9a88150165",
    "image": "perev_right",
    "point": {
      "latitude": 52.8365417606,
      "longitude": 30.9744379348
    }
  },
  "b6eb9884-9903-4344-bdb9-7a639bca4f66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b6eb9884-9903-4344-bdb9-7a639bca4f66",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6eb9884-9903-4344-bdb9-7a639bca4f66",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3422350432,
      "longitude": 30.9440446697
    }
  },
  "b6fa318d-ec01-4d02-bac5-aa27f194d635": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "b6fa318d-ec01-4d02-bac5-aa27f194d635",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6fa318d-ec01-4d02-bac5-aa27f194d635",
    "image": "perev_left",
    "point": {
      "latitude": 52.1995850641,
      "longitude": 30.9336705287
    }
  },
  "b76fdf0b-dc08-4bdf-90ff-aefa4c5f794a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 53",
      "id": "b76fdf0b-dc08-4bdf-90ff-aefa4c5f794a",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b76fdf0b-dc08-4bdf-90ff-aefa4c5f794a",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.2936594861,
      "longitude": 30.9287458599
    }
  },
  "b7882524-18f3-4802-97ba-707cea88c877": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b7882524-18f3-4802-97ba-707cea88c877",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7882524-18f3-4802-97ba-707cea88c877",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4373820847,
      "longitude": 31.0312207232
    }
  },
  "b7e2e4fe-e0d3-478e-8c19-560f91656efa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "b7e2e4fe-e0d3-478e-8c19-560f91656efa",
      "kilometrage": 249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7e2e4fe-e0d3-478e-8c19-560f91656efa",
    "image": "perev_right",
    "point": {
      "latitude": 53.1566159331,
      "longitude": 30.8699061739
    }
  },
  "b88d4139-4edb-4747-b326-0dee8514932a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "b88d4139-4edb-4747-b326-0dee8514932a",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b88d4139-4edb-4747-b326-0dee8514932a",
    "image": "perev_left",
    "point": {
      "latitude": 53.4126426432,
      "longitude": 31.0161698608
    }
  },
  "ba29e415-5521-4ba3-8a91-755338143b27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ba29e415-5521-4ba3-8a91-755338143b27",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba29e415-5521-4ba3-8a91-755338143b27",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4013845729,
      "longitude": 31.0014082881
    }
  },
  "ba4ade33-be5c-49ed-aaea-dfbcd3de3e17": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 64",
      "id": "ba4ade33-be5c-49ed-aaea-dfbcd3de3e17",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba4ade33-be5c-49ed-aaea-dfbcd3de3e17",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1020333387,
      "longitude": 30.9097212435
    }
  },
  "ba510819-948f-49e8-a51d-c7b60fcb20d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ba510819-948f-49e8-a51d-c7b60fcb20d1",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba510819-948f-49e8-a51d-c7b60fcb20d1",
    "image": "perev_right",
    "point": {
      "latitude": 52.7092195799,
      "longitude": 30.982924325
    }
  },
  "bb0bc512-0ad5-4c2b-a494-863d7fbd9205": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "bb0bc512-0ad5-4c2b-a494-863d7fbd9205",
      "kilometrage": 218,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb0bc512-0ad5-4c2b-a494-863d7fbd9205",
    "image": "perev_right",
    "point": {
      "latitude": 52.9588752631,
      "longitude": 30.9276013885
    }
  },
  "bbd7c6df-9090-4ae4-9dfb-0cd04ef1f666": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "bbd7c6df-9090-4ae4-9dfb-0cd04ef1f666",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbd7c6df-9090-4ae4-9dfb-0cd04ef1f666",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1231807751,
      "longitude": 30.9480682451
    }
  },
  "bbf4e5b6-b371-466d-8e26-ddd8363ca4c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 248",
      "id": "bbf4e5b6-b371-466d-8e26-ddd8363ca4c3",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbf4e5b6-b371-466d-8e26-ddd8363ca4c3",
    "image": "perev_right",
    "point": {
      "latitude": 52.6426821887,
      "longitude": 31.1321002855
    }
  },
  "bc19c627-4c69-411e-b4b7-347dfff98f9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "bc19c627-4c69-411e-b4b7-347dfff98f9b",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc19c627-4c69-411e-b4b7-347dfff98f9b",
    "image": "perev_right",
    "point": {
      "latitude": 53.0299622613,
      "longitude": 30.9036926023
    }
  },
  "bc608be4-65db-4203-85e6-899438dadcf6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "bc608be4-65db-4203-85e6-899438dadcf6",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc608be4-65db-4203-85e6-899438dadcf6",
    "image": "perev_right",
    "point": {
      "latitude": 53.3302860873,
      "longitude": 31.0041923521
    }
  },
  "bcafb8ac-e8fc-46f5-901f-0532e4ea0086": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 6",
      "id": "bcafb8ac-e8fc-46f5-901f-0532e4ea0086",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcafb8ac-e8fc-46f5-901f-0532e4ea0086",
    "image": "perev_right",
    "point": {
      "latitude": 51.9610623449,
      "longitude": 30.8350127119
    }
  },
  "bccef644-9e8e-4d6f-a8c6-712f0cb2990d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 14м",
      "id": "bccef644-9e8e-4d6f-a8c6-712f0cb2990d",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bccef644-9e8e-4d6f-a8c6-712f0cb2990d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0765235318,
      "longitude": 30.9524635424
    }
  },
  "bd7a9219-e224-4d20-8b55-23bfb82321e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 94",
      "id": "bd7a9219-e224-4d20-8b55-23bfb82321e4",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd7a9219-e224-4d20-8b55-23bfb82321e4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4143809619,
      "longitude": 31.013547565
    }
  },
  "be1e1323-0265-443e-a9cc-9279b5659727": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "be1e1323-0265-443e-a9cc-9279b5659727",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be1e1323-0265-443e-a9cc-9279b5659727",
    "image": "bridge_low",
    "point": {
      "latitude": 52.4249427462,
      "longitude": 31.021858522
    }
  },
  "be4867ef-85bc-4009-aecb-69b21186858a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "be4867ef-85bc-4009-aecb-69b21186858a",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be4867ef-85bc-4009-aecb-69b21186858a",
    "image": "perev_left",
    "point": {
      "latitude": 51.9502289645,
      "longitude": 30.814313114
    }
  },
  "beaccfe0-be5b-4a97-89f1-23f1b7547538": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 130",
      "id": "beaccfe0-be5b-4a97-89f1-23f1b7547538",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "beaccfe0-be5b-4a97-89f1-23f1b7547538",
    "image": "buyo_left",
    "point": {
      "latitude": 52.5509110371,
      "longitude": 31.1698458604
    }
  },
  "bec037de-a58b-415d-9dfd-706837c20579": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "bec037de-a58b-415d-9dfd-706837c20579",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bec037de-a58b-415d-9dfd-706837c20579",
    "image": "perev_left",
    "point": {
      "latitude": 53.2206361768,
      "longitude": 30.9287793382
    }
  },
  "bee6c470-3266-4bd2-8d0a-178649722dde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 28",
      "id": "bee6c470-3266-4bd2-8d0a-178649722dde",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bee6c470-3266-4bd2-8d0a-178649722dde",
    "image": "perev_right",
    "point": {
      "latitude": 52.0084759294,
      "longitude": 30.9079825638
    }
  },
  "beea4a3a-f114-4a22-97fa-0d92a42d4dc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "beea4a3a-f114-4a22-97fa-0d92a42d4dc1",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "beea4a3a-f114-4a22-97fa-0d92a42d4dc1",
    "image": "perev_right",
    "point": {
      "latitude": 53.0696471876,
      "longitude": 30.8834481415
    }
  },
  "bf03eaab-2f64-4e16-987a-745709c3eca3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 43",
      "id": "bf03eaab-2f64-4e16-987a-745709c3eca3",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf03eaab-2f64-4e16-987a-745709c3eca3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2338882215,
      "longitude": 30.923008004
    }
  },
  "bf1088bb-24ce-406a-859b-8bfb8f469254": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "bf1088bb-24ce-406a-859b-8bfb8f469254",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf1088bb-24ce-406a-859b-8bfb8f469254",
    "image": "perev_right",
    "point": {
      "latitude": 53.2230872383,
      "longitude": 30.9171090284
    }
  },
  "bf12684e-2a47-4c20-8d6a-f4269e179848": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "bf12684e-2a47-4c20-8d6a-f4269e179848",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf12684e-2a47-4c20-8d6a-f4269e179848",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8844439027,
      "longitude": 30.9617288591
    }
  },
  "bf1ceb09-198e-4eff-8e13-eaa764cebcc2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "bf1ceb09-198e-4eff-8e13-eaa764cebcc2",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf1ceb09-198e-4eff-8e13-eaa764cebcc2",
    "image": "perev_left",
    "point": {
      "latitude": 52.7990566422,
      "longitude": 30.9599827916
    }
  },
  "bfa2b76e-5e29-4e32-b7f6-ec735cec56b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 89",
      "id": "bfa2b76e-5e29-4e32-b7f6-ec735cec56b7",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfa2b76e-5e29-4e32-b7f6-ec735cec56b7",
    "image": "perev_right",
    "point": {
      "latitude": 52.2164293647,
      "longitude": 30.9342547686
    }
  },
  "bfd4920c-be89-4662-88e7-c8fb8c2540e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "bfd4920c-be89-4662-88e7-c8fb8c2540e3",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfd4920c-be89-4662-88e7-c8fb8c2540e3",
    "image": "perev_left",
    "point": {
      "latitude": 52.6864575484,
      "longitude": 31.0535405629
    }
  },
  "c0190f0a-16b9-45bd-996b-6d3dc1feb090": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c0190f0a-16b9-45bd-996b-6d3dc1feb090",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0190f0a-16b9-45bd-996b-6d3dc1feb090",
    "image": "perev_left",
    "point": {
      "latitude": 53.1066060492,
      "longitude": 30.8791979098
    }
  },
  "c04ecff5-b11a-4c52-91a9-512aaced4528": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "c04ecff5-b11a-4c52-91a9-512aaced4528",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c04ecff5-b11a-4c52-91a9-512aaced4528",
    "image": "perev_right",
    "point": {
      "latitude": 52.885835616,
      "longitude": 30.9603953886
    }
  },
  "c05acdf4-b76f-45b2-9031-dde3adcc5aba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c05acdf4-b76f-45b2-9031-dde3adcc5aba",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c05acdf4-b76f-45b2-9031-dde3adcc5aba",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8926545541,
      "longitude": 30.9614158328
    }
  },
  "c09e381f-9b71-4d98-8f42-74637dd28f1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c09e381f-9b71-4d98-8f42-74637dd28f1a",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c09e381f-9b71-4d98-8f42-74637dd28f1a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4019937592,
      "longitude": 31.0057069953
    }
  },
  "c0a85b20-ed61-4193-9eb7-f8aed7865741": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c0a85b20-ed61-4193-9eb7-f8aed7865741",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0a85b20-ed61-4193-9eb7-f8aed7865741",
    "image": "perev_left",
    "point": {
      "latitude": 53.2517881703,
      "longitude": 30.9572043352
    }
  },
  "c1b8c3fa-087e-4060-94a9-b15274d2d34b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c1b8c3fa-087e-4060-94a9-b15274d2d34b",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1b8c3fa-087e-4060-94a9-b15274d2d34b",
    "image": "perev_left",
    "point": {
      "latitude": 53.1196455042,
      "longitude": 30.8746553645
    }
  },
  "c1ce2b69-cf08-4e73-8460-215be8f07772": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c1ce2b69-cf08-4e73-8460-215be8f07772",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1ce2b69-cf08-4e73-8460-215be8f07772",
    "image": "perev_left",
    "point": {
      "latitude": 52.7405226335,
      "longitude": 30.9494438546
    }
  },
  "c234c8b6-086e-49c8-8c03-7e51beaaa4d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 127",
      "id": "c234c8b6-086e-49c8-8c03-7e51beaaa4d8",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c234c8b6-086e-49c8-8c03-7e51beaaa4d8",
    "image": "perev_left",
    "point": {
      "latitude": 52.3286034324,
      "longitude": 30.9386687649
    }
  },
  "c2aec060-74e9-40a6-8f89-4755347e1faa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "c2aec060-74e9-40a6-8f89-4755347e1faa",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2aec060-74e9-40a6-8f89-4755347e1faa",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4330613611,
      "longitude": 31.0230331053
    }
  },
  "c3387016-0f55-431e-b212-b486462c670f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 160",
      "id": "c3387016-0f55-431e-b212-b486462c670f",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3387016-0f55-431e-b212-b486462c670f",
    "image": "perev_left",
    "point": {
      "latitude": 52.480191568,
      "longitude": 31.1414349328
    }
  },
  "c372a203-2442-4563-9670-339b830d3943": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "c372a203-2442-4563-9670-339b830d3943",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c372a203-2442-4563-9670-339b830d3943",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9852279203,
      "longitude": 30.8962467695
    }
  },
  "c3a3e0b6-bd28-4041-96bd-d3fe5b92f68b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 192",
      "id": "c3a3e0b6-bd28-4041-96bd-d3fe5b92f68b",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3a3e0b6-bd28-4041-96bd-d3fe5b92f68b",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.5827275733,
      "longitude": 31.105011079
    }
  },
  "c3a42857-7288-4a32-885d-c9cf56f047d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 114",
      "id": "c3a42857-7288-4a32-885d-c9cf56f047d0",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3a42857-7288-4a32-885d-c9cf56f047d0",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2471774453,
      "longitude": 30.8828566203
    }
  },
  "c3c7d848-f139-42d8-9b3e-f4e709ecdb1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 84",
      "id": "c3c7d848-f139-42d8-9b3e-f4e709ecdb1a",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3c7d848-f139-42d8-9b3e-f4e709ecdb1a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.384375737,
      "longitude": 31.0048432112
    }
  },
  "c3e2b44c-9c43-416e-9359-488ae88dd5dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "c3e2b44c-9c43-416e-9359-488ae88dd5dd",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3e2b44c-9c43-416e-9359-488ae88dd5dd",
    "image": "perev_right",
    "point": {
      "latitude": 52.9715885907,
      "longitude": 30.9206857072
    }
  },
  "c3ea2590-4817-45ac-ac29-8587167c3401": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 92м",
      "id": "c3ea2590-4817-45ac-ac29-8587167c3401",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3ea2590-4817-45ac-ac29-8587167c3401",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4078914224,
      "longitude": 31.0055885544
    }
  },
  "c3ed4aec-f23c-4acc-bfc2-a89e57cc03f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c3ed4aec-f23c-4acc-bfc2-a89e57cc03f5",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3ed4aec-f23c-4acc-bfc2-a89e57cc03f5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1218220217,
      "longitude": 30.8700037169
    }
  },
  "c3fbc0d9-4e84-4e65-b042-511c168efa60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c3fbc0d9-4e84-4e65-b042-511c168efa60",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3fbc0d9-4e84-4e65-b042-511c168efa60",
    "image": "perev_left",
    "point": {
      "latitude": 52.7421833859,
      "longitude": 30.9564748693
    }
  },
  "c424b2ea-1494-44ae-8705-283943053a30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 56",
      "id": "c424b2ea-1494-44ae-8705-283943053a30",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c424b2ea-1494-44ae-8705-283943053a30",
    "image": "perev_right",
    "point": {
      "latitude": 52.0752325815,
      "longitude": 30.9234312564
    }
  },
  "c42aec2d-a27e-49b1-af00-1dd9d220b880": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 41",
      "id": "c42aec2d-a27e-49b1-af00-1dd9d220b880",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c42aec2d-a27e-49b1-af00-1dd9d220b880",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2281803101,
      "longitude": 30.9169885886
    }
  },
  "c59e1fe8-1107-44ce-a29d-9079fd90d069": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 101",
      "id": "c59e1fe8-1107-44ce-a29d-9079fd90d069",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c59e1fe8-1107-44ce-a29d-9079fd90d069",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.432558926,
      "longitude": 31.0227151277
    }
  },
  "c5dda148-cd0b-444a-809e-06fa4788bf90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "c5dda148-cd0b-444a-809e-06fa4788bf90",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5dda148-cd0b-444a-809e-06fa4788bf90",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0095330686,
      "longitude": 30.9093150733
    }
  },
  "c604b687-2e68-4996-8d2e-2ed354abdbd9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c604b687-2e68-4996-8d2e-2ed354abdbd9",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c604b687-2e68-4996-8d2e-2ed354abdbd9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3933243169,
      "longitude": 30.9988809104
    }
  },
  "c67d7f96-863d-49d8-98a0-67a387c64a9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 112",
      "id": "c67d7f96-863d-49d8-98a0-67a387c64a9e",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c67d7f96-863d-49d8-98a0-67a387c64a9e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4547715421,
      "longitude": 31.0781761566
    }
  },
  "c69a727e-7886-43a0-8620-c4c2e63c4254": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 77",
      "id": "c69a727e-7886-43a0-8620-c4c2e63c4254",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c69a727e-7886-43a0-8620-c4c2e63c4254",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3937890431,
      "longitude": 30.9674672852
    }
  },
  "c69f59a6-0081-4d80-8e1b-fc269e226875": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 85",
      "id": "c69f59a6-0081-4d80-8e1b-fc269e226875",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c69f59a6-0081-4d80-8e1b-fc269e226875",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3852108853,
      "longitude": 31.0061816277
    }
  },
  "c6c3fed0-bda9-4074-bca4-ec578fdf8e44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c6c3fed0-bda9-4074-bca4-ec578fdf8e44",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6c3fed0-bda9-4074-bca4-ec578fdf8e44",
    "image": "perev_left",
    "point": {
      "latitude": 52.7789652935,
      "longitude": 30.9551056035
    }
  },
  "c6f3f236-88e0-4f7e-99e6-abd19cb2a35a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 147",
      "id": "c6f3f236-88e0-4f7e-99e6-abd19cb2a35a",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6f3f236-88e0-4f7e-99e6-abd19cb2a35a",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.4391222302,
      "longitude": 31.0434757728
    }
  },
  "c7714dd6-5379-4f78-80ad-07e43595964e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 234",
      "id": "c7714dd6-5379-4f78-80ad-07e43595964e",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7714dd6-5379-4f78-80ad-07e43595964e",
    "image": "perev_left",
    "point": {
      "latitude": 52.6147731621,
      "longitude": 31.1223653953
    }
  },
  "c780f499-c987-436b-a143-c03fea686439": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 229",
      "id": "c780f499-c987-436b-a143-c03fea686439",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c780f499-c987-436b-a143-c03fea686439",
    "image": "perev_left",
    "point": {
      "latitude": 52.6076709068,
      "longitude": 31.1037512381
    }
  },
  "c7adac9d-ee4b-4250-a1eb-102b2aa9421f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c7adac9d-ee4b-4250-a1eb-102b2aa9421f",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7adac9d-ee4b-4250-a1eb-102b2aa9421f",
    "image": "perev_left",
    "point": {
      "latitude": 53.036510019,
      "longitude": 30.9021123168
    }
  },
  "c7be9738-caf8-42b8-a8d8-f7a2f46bce3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c7be9738-caf8-42b8-a8d8-f7a2f46bce3f",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7be9738-caf8-42b8-a8d8-f7a2f46bce3f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3856590845,
      "longitude": 30.9941985434
    }
  },
  "c7f85c44-eef7-4a98-9942-c7d80ad36ffd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c7f85c44-eef7-4a98-9942-c7d80ad36ffd",
      "kilometrage": 224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7f85c44-eef7-4a98-9942-c7d80ad36ffd",
    "image": "perev_left",
    "point": {
      "latitude": 53.0047261577,
      "longitude": 30.9172135225
    }
  },
  "c859a385-1f38-4f3b-bda7-7e826892a4fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 256",
      "id": "c859a385-1f38-4f3b-bda7-7e826892a4fc",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c859a385-1f38-4f3b-bda7-7e826892a4fc",
    "image": "perev_right",
    "point": {
      "latitude": 52.6551713368,
      "longitude": 31.0847593384
    }
  },
  "c8627eba-4d91-4378-8381-61dce15abe65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 106",
      "id": "c8627eba-4d91-4378-8381-61dce15abe65",
      "kilometrage": 68,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8627eba-4d91-4378-8381-61dce15abe65",
    "image": "perev_left",
    "point": {
      "latitude": 52.24190139,
      "longitude": 30.9170141304
    }
  },
  "c872aaf4-cd95-4af6-a058-a75d905b91e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "c872aaf4-cd95-4af6-a058-a75d905b91e3",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c872aaf4-cd95-4af6-a058-a75d905b91e3",
    "image": "perev_right",
    "point": {
      "latitude": 53.1295646203,
      "longitude": 30.8692044976
    }
  },
  "c8b2945d-d2a0-40d6-bf42-7a48141fdcc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "c8b2945d-d2a0-40d6-bf42-7a48141fdcc5",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8b2945d-d2a0-40d6-bf42-7a48141fdcc5",
    "image": "axis_romb",
    "point": {
      "latitude": 52.4103003735,
      "longitude": 31.0086958022
    }
  },
  "c8efcb61-69bf-4554-b756-c3296f8a059c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 28",
      "id": "c8efcb61-69bf-4554-b756-c3296f8a059c",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8efcb61-69bf-4554-b756-c3296f8a059c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1305369407,
      "longitude": 30.9449941238
    }
  },
  "c90f3f49-2ddc-40b2-95e0-aa68b5878056": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "c90f3f49-2ddc-40b2-95e0-aa68b5878056",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c90f3f49-2ddc-40b2-95e0-aa68b5878056",
    "image": "bridge_low",
    "point": {
      "latitude": 52.383763708,
      "longitude": 31.0019740262
    }
  },
  "c91e8e99-995a-475f-bf9d-1446b61f8b08": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 270",
      "id": "c91e8e99-995a-475f-bf9d-1446b61f8b08",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c91e8e99-995a-475f-bf9d-1446b61f8b08",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2571967188,
      "longitude": 30.9673934355
    }
  },
  "c92af77a-4544-4029-b4f8-a8a1fbcf05aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "c92af77a-4544-4029-b4f8-a8a1fbcf05aa",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c92af77a-4544-4029-b4f8-a8a1fbcf05aa",
    "image": "perev_left",
    "point": {
      "latitude": 53.3768461217,
      "longitude": 30.9901011046
    }
  },
  "c96201e8-4f83-4304-bd2b-40e71c4f9a3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "c96201e8-4f83-4304-bd2b-40e71c4f9a3b",
      "kilometrage": 249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c96201e8-4f83-4304-bd2b-40e71c4f9a3b",
    "image": "perev_right",
    "point": {
      "latitude": 53.1584880817,
      "longitude": 30.8690517571
    }
  },
  "c99f23e5-f03a-438d-9b9e-01db5a7d8290": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 55",
      "id": "c99f23e5-f03a-438d-9b9e-01db5a7d8290",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c99f23e5-f03a-438d-9b9e-01db5a7d8290",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2975375739,
      "longitude": 30.9323066457
    }
  },
  "c9c58807-aecd-405e-9200-57fb198deac5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 88А",
      "id": "c9c58807-aecd-405e-9200-57fb198deac5",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9c58807-aecd-405e-9200-57fb198deac5",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2151072749,
      "longitude": 30.9300306041
    }
  },
  "c9f49204-f810-40e9-90b6-afb572cc562e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c9f49204-f810-40e9-90b6-afb572cc562e",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9f49204-f810-40e9-90b6-afb572cc562e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1230484188,
      "longitude": 30.9472666105
    }
  },
  "ca059f9a-f3cc-4673-86d7-a945fdba01b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 116",
      "id": "ca059f9a-f3cc-4673-86d7-a945fdba01b8",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca059f9a-f3cc-4673-86d7-a945fdba01b8",
    "image": "perev_left",
    "point": {
      "latitude": 52.2587728239,
      "longitude": 30.8960092027
    }
  },
  "ca0aa370-55eb-4c62-b67e-75fa6d0063cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 145",
      "id": "ca0aa370-55eb-4c62-b67e-75fa6d0063cb",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca0aa370-55eb-4c62-b67e-75fa6d0063cb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6170578404,
      "longitude": 31.1175279215
    }
  },
  "ca10b662-48e7-4ad0-bc62-cdea3f3781cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ca10b662-48e7-4ad0-bc62-cdea3f3781cd",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca10b662-48e7-4ad0-bc62-cdea3f3781cd",
    "image": "perev_left",
    "point": {
      "latitude": 53.0210120396,
      "longitude": 30.9126921138
    }
  },
  "ca634a2a-b80d-4d5f-b435-07719da42e58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй  67",
      "id": "ca634a2a-b80d-4d5f-b435-07719da42e58",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca634a2a-b80d-4d5f-b435-07719da42e58",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3434471148,
      "longitude": 30.9495272497
    }
  },
  "cab2478a-a858-4e2f-bd80-ccd9a420fcf0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "cab2478a-a858-4e2f-bd80-ccd9a420fcf0",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cab2478a-a858-4e2f-bd80-ccd9a420fcf0",
    "image": "perev_left",
    "point": {
      "latitude": 53.0590053931,
      "longitude": 30.8993778751
    }
  },
  "cb1c7d30-addc-46a4-a058-aba1c38d56e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "cb1c7d30-addc-46a4-a058-aba1c38d56e5",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb1c7d30-addc-46a4-a058-aba1c38d56e5",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0052817954,
      "longitude": 30.9046484108
    }
  },
  "cb652bac-4d09-4917-80ba-bd959533410f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "cb652bac-4d09-4917-80ba-bd959533410f",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb652bac-4d09-4917-80ba-bd959533410f",
    "image": "perev_left",
    "point": {
      "latitude": 52.7624889589,
      "longitude": 30.9465765287
    }
  },
  "cb700276-2200-41b0-a829-f7b25cb745d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "cb700276-2200-41b0-a829-f7b25cb745d6",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb700276-2200-41b0-a829-f7b25cb745d6",
    "image": "perev_right",
    "point": {
      "latitude": 53.385268659,
      "longitude": 31.0117801683
    }
  },
  "cb84312a-dc8b-48ae-bb17-600085af2cf2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "cb84312a-dc8b-48ae-bb17-600085af2cf2",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb84312a-dc8b-48ae-bb17-600085af2cf2",
    "image": "perev_left",
    "point": {
      "latitude": 52.9661556975,
      "longitude": 30.932703683
    }
  },
  "cbbd7428-cfa9-47c4-a716-2da162e027b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Имеются ограничения судоходства  ",
      "id": "cbbd7428-cfa9-47c4-a716-2da162e027b5",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbbd7428-cfa9-47c4-a716-2da162e027b5",
    "image": "limitations",
    "point": {
      "latitude": 53.4437285764,
      "longitude": 31.0131331131
    }
  },
  "ccb80cfa-7db7-4216-bec1-ac3419c5adc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ccb80cfa-7db7-4216-bec1-ac3419c5adc6",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ccb80cfa-7db7-4216-bec1-ac3419c5adc6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3899227031,
      "longitude": 31.013304103
    }
  },
  "cd497a0c-0393-462b-8529-273f1816d408": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "cd497a0c-0393-462b-8529-273f1816d408",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd497a0c-0393-462b-8529-273f1816d408",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8570885261,
      "longitude": 30.9899388482
    }
  },
  "cd5eda86-7dd5-463d-8990-a6d9276be4a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 61",
      "id": "cd5eda86-7dd5-463d-8990-a6d9276be4a4",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd5eda86-7dd5-463d-8990-a6d9276be4a4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3177086342,
      "longitude": 30.9365843671
    }
  },
  "cdcf7ca3-f15f-40a1-b317-0aeca39ee6c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 59",
      "id": "cdcf7ca3-f15f-40a1-b317-0aeca39ee6c7",
      "kilometrage": 34,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdcf7ca3-f15f-40a1-b317-0aeca39ee6c7",
    "image": "perev_left",
    "point": {
      "latitude": 52.0842703745,
      "longitude": 30.9197579133
    }
  },
  "cdef1d71-9c68-49df-a7a0-fe111a4e8006": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 182",
      "id": "cdef1d71-9c68-49df-a7a0-fe111a4e8006",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdef1d71-9c68-49df-a7a0-fe111a4e8006",
    "image": "perev_right",
    "point": {
      "latitude": 52.573591887,
      "longitude": 31.1261614698
    }
  },
  "ce32b362-2ad1-45eb-9ee6-7ec7330108fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ce32b362-2ad1-45eb-9ee6-7ec7330108fd",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce32b362-2ad1-45eb-9ee6-7ec7330108fd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8936530441,
      "longitude": 30.9617948884
    }
  },
  "ce78b1fe-1cec-4f69-acb1-7e34b0f92a07": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 53",
      "id": "ce78b1fe-1cec-4f69-acb1-7e34b0f92a07",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce78b1fe-1cec-4f69-acb1-7e34b0f92a07",
    "image": "perev_left",
    "point": {
      "latitude": 52.0874970494,
      "longitude": 30.9414725382
    }
  },
  "cef29a98-a5dc-4f12-8591-991455f270bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 150",
      "id": "cef29a98-a5dc-4f12-8591-991455f270bb",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cef29a98-a5dc-4f12-8591-991455f270bb",
    "image": "perev_right",
    "point": {
      "latitude": 52.4444342839,
      "longitude": 31.0548006759
    }
  },
  "cf4077a2-13b0-4b68-8d2a-1c9ecdde591a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 61",
      "id": "cf4077a2-13b0-4b68-8d2a-1c9ecdde591a",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf4077a2-13b0-4b68-8d2a-1c9ecdde591a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0936023537,
      "longitude": 30.9049363336
    }
  },
  "d0035660-e2cd-46fb-8dcb-9ffe1e90e781": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d0035660-e2cd-46fb-8dcb-9ffe1e90e781",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0035660-e2cd-46fb-8dcb-9ffe1e90e781",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3240047258,
      "longitude": 30.933162576
    }
  },
  "d010c0ae-e4e6-4f3c-bd84-7f07ef3cce57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Расхождение и обгон запрещены  ",
      "id": "d010c0ae-e4e6-4f3c-bd84-7f07ef3cce57",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d010c0ae-e4e6-4f3c-bd84-7f07ef3cce57",
    "image": "overtaking_forbidden",
    "point": {
      "latitude": 52.4127201825,
      "longitude": 31.0135922519
    }
  },
  "d0231ae4-e42a-4962-8abf-5251ded97cac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 34",
      "id": "d0231ae4-e42a-4962-8abf-5251ded97cac",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0231ae4-e42a-4962-8abf-5251ded97cac",
    "image": "perev_left",
    "point": {
      "latitude": 52.0138904425,
      "longitude": 30.9410201903
    }
  },
  "d1098d75-0a2c-4c76-9e91-54a9783f27dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 114",
      "id": "d1098d75-0a2c-4c76-9e91-54a9783f27dd",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1098d75-0a2c-4c76-9e91-54a9783f27dd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4576134833,
      "longitude": 31.0809053433
    }
  },
  "d120f8f0-0bd6-4d7e-a122-776e55196ef9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "d120f8f0-0bd6-4d7e-a122-776e55196ef9",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d120f8f0-0bd6-4d7e-a122-776e55196ef9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0029028369,
      "longitude": 30.8944295785
    }
  },
  "d199dade-41a3-4abd-9ca8-a732db28e9a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "d199dade-41a3-4abd-9ca8-a732db28e9a3",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d199dade-41a3-4abd-9ca8-a732db28e9a3",
    "image": "name_of",
    "point": {
      "latitude": 52.7136961543,
      "longitude": 30.9645744335
    }
  },
  "d1b97c17-71d7-43cb-9b06-38636776ef99": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d1b97c17-71d7-43cb-9b06-38636776ef99",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1b97c17-71d7-43cb-9b06-38636776ef99",
    "image": "perev_right",
    "point": {
      "latitude": 53.0679100807,
      "longitude": 30.885190732
    }
  },
  "d1ef9083-484f-45f7-95bb-14a58f2b7543": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d1ef9083-484f-45f7-95bb-14a58f2b7543",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1ef9083-484f-45f7-95bb-14a58f2b7543",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3795242865,
      "longitude": 30.9573798942
    }
  },
  "d2d1f451-1f99-40a5-befb-2c24395b1a45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d2d1f451-1f99-40a5-befb-2c24395b1a45",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2d1f451-1f99-40a5-befb-2c24395b1a45",
    "image": "perev_right",
    "point": {
      "latitude": 53.1110372664,
      "longitude": 30.8726320114
    }
  },
  "d3026495-9cf2-4815-a5c7-e1d52aa111e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 102",
      "id": "d3026495-9cf2-4815-a5c7-e1d52aa111e5",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3026495-9cf2-4815-a5c7-e1d52aa111e5",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.2437425466,
      "longitude": 30.9455807985
    }
  },
  "d3ab0977-29d0-4f80-8201-d01e3c3d7335": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d3ab0977-29d0-4f80-8201-d01e3c3d7335",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3ab0977-29d0-4f80-8201-d01e3c3d7335",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3985973443,
      "longitude": 31.0072852054
    }
  },
  "d3bbe0b5-9d9a-4e22-9a63-3afd296c1f1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 65",
      "id": "d3bbe0b5-9d9a-4e22-9a63-3afd296c1f1f",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3bbe0b5-9d9a-4e22-9a63-3afd296c1f1f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1030536935,
      "longitude": 30.9194289242
    }
  },
  "d3bcb2ff-0305-4b83-81f2-a3d3342c3904": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "d3bcb2ff-0305-4b83-81f2-a3d3342c3904",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3bcb2ff-0305-4b83-81f2-a3d3342c3904",
    "image": "axis_romb",
    "point": {
      "latitude": 52.4123239918,
      "longitude": 31.0107587926
    }
  },
  "d409dfe6-a587-46a7-83d6-2590408e7594": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 110",
      "id": "d409dfe6-a587-46a7-83d6-2590408e7594",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d409dfe6-a587-46a7-83d6-2590408e7594",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2287294508,
      "longitude": 30.8998670313
    }
  },
  "d42dd800-635a-4553-bcf5-7d92c8cf6c03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d42dd800-635a-4553-bcf5-7d92c8cf6c03",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d42dd800-635a-4553-bcf5-7d92c8cf6c03",
    "image": "perev_right",
    "point": {
      "latitude": 53.0935747064,
      "longitude": 30.8690702198
    }
  },
  "d4a03fac-3938-4fbb-80bf-e71efe66459a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 7",
      "id": "d4a03fac-3938-4fbb-80bf-e71efe66459a",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4a03fac-3938-4fbb-80bf-e71efe66459a",
    "image": "perev_right",
    "point": {
      "latitude": 51.962871534,
      "longitude": 30.8386521949
    }
  },
  "d4b1d658-0dee-4603-b01d-cd78cc0d865f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 79",
      "id": "d4b1d658-0dee-4603-b01d-cd78cc0d865f",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4b1d658-0dee-4603-b01d-cd78cc0d865f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3927849154,
      "longitude": 30.9730470093
    }
  },
  "d4b2b53f-7fb9-450c-b83b-d92ede083429": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "d4b2b53f-7fb9-450c-b83b-d92ede083429",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4b2b53f-7fb9-450c-b83b-d92ede083429",
    "image": "crossing_way",
    "point": {
      "latitude": 52.4858602654,
      "longitude": 31.1177582511
    }
  },
  "d4d76442-3357-4352-8fc5-abd8d9ba4eb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 240",
      "id": "d4d76442-3357-4352-8fc5-abd8d9ba4eb2",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4d76442-3357-4352-8fc5-abd8d9ba4eb2",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1049381574,
      "longitude": 30.8741081873
    }
  },
  "d598e2bf-98c4-4326-821a-95e384955716": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d598e2bf-98c4-4326-821a-95e384955716",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d598e2bf-98c4-4326-821a-95e384955716",
    "image": "perev_right",
    "point": {
      "latitude": 53.3666893591,
      "longitude": 30.9874360676
    }
  },
  "d5b5cf24-fdbc-4a34-81f1-2938a93e5f65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 146",
      "id": "d5b5cf24-fdbc-4a34-81f1-2938a93e5f65",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5b5cf24-fdbc-4a34-81f1-2938a93e5f65",
    "image": "perev_right",
    "point": {
      "latitude": 52.4339807558,
      "longitude": 31.0241641179
    }
  },
  "d69418ff-54a5-4a40-8849-b8644908dd31": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 11",
      "id": "d69418ff-54a5-4a40-8849-b8644908dd31",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d69418ff-54a5-4a40-8849-b8644908dd31",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0541183656,
      "longitude": 30.949458877
    }
  },
  "d71744c0-8b79-495c-86d1-a2ee0ecf41ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "d71744c0-8b79-495c-86d1-a2ee0ecf41ad",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d71744c0-8b79-495c-86d1-a2ee0ecf41ad",
    "image": "perev_left",
    "point": {
      "latitude": 53.3349266852,
      "longitude": 31.0038303967
    }
  },
  "d7916a1b-b660-4b99-a2ca-f87f543b92b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d7916a1b-b660-4b99-a2ca-f87f543b92b9",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7916a1b-b660-4b99-a2ca-f87f543b92b9",
    "image": "perev_right",
    "point": {
      "latitude": 53.2372772537,
      "longitude": 30.9663410702
    }
  },
  "d7fcc4de-4b1e-4fb6-acb5-dc96d411cd70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "d7fcc4de-4b1e-4fb6-acb5-dc96d411cd70",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7fcc4de-4b1e-4fb6-acb5-dc96d411cd70",
    "image": "perev_right",
    "point": {
      "latitude": 52.941805459,
      "longitude": 30.930567218
    }
  },
  "d86d81f8-675a-45a1-884e-88826118ddf1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 155",
      "id": "d86d81f8-675a-45a1-884e-88826118ddf1",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d86d81f8-675a-45a1-884e-88826118ddf1",
    "image": "perev_right",
    "point": {
      "latitude": 52.476032969,
      "longitude": 31.0935336682
    }
  },
  "d96e234c-ae95-4811-a5c6-f48520d1d941": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "d96e234c-ae95-4811-a5c6-f48520d1d941",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d96e234c-ae95-4811-a5c6-f48520d1d941",
    "image": "crossing_way",
    "point": {
      "latitude": 52.3276063876,
      "longitude": 30.9381990337
    }
  },
  "d97cc768-d1dc-4de7-b34c-500963e872c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "d97cc768-d1dc-4de7-b34c-500963e872c6",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d97cc768-d1dc-4de7-b34c-500963e872c6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3508890718,
      "longitude": 31.0016489023
    }
  },
  "d99f4bf0-d19d-4525-849c-00998c0ead5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "d99f4bf0-d19d-4525-849c-00998c0ead5d",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d99f4bf0-d19d-4525-849c-00998c0ead5d",
    "image": "perev_left",
    "point": {
      "latitude": 52.7464160203,
      "longitude": 30.9406481568
    }
  },
  "da38b732-b9d0-45cb-89fd-1ae807b5d813": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "da38b732-b9d0-45cb-89fd-1ae807b5d813",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da38b732-b9d0-45cb-89fd-1ae807b5d813",
    "image": "perev_left",
    "point": {
      "latitude": 52.7127287312,
      "longitude": 30.9787902277
    }
  },
  "db47834e-8158-4be5-82d0-4d376471704f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 45",
      "id": "db47834e-8158-4be5-82d0-4d376471704f",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db47834e-8158-4be5-82d0-4d376471704f",
    "image": "perev_right",
    "point": {
      "latitude": 52.0730353618,
      "longitude": 30.9316885634
    }
  },
  "db6011de-e9bc-417f-806a-0274092ffa1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 2м",
      "id": "db6011de-e9bc-417f-806a-0274092ffa1e",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db6011de-e9bc-417f-806a-0274092ffa1e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9538514782,
      "longitude": 30.8159976625
    }
  },
  "db674656-9868-4fac-ae2b-44e2250b050c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 184",
      "id": "db674656-9868-4fac-ae2b-44e2250b050c",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db674656-9868-4fac-ae2b-44e2250b050c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.5772700295,
      "longitude": 31.132443852
    }
  },
  "dbffa84c-0d6c-459a-a07b-9d61c8b64eb8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 25",
      "id": "dbffa84c-0d6c-459a-a07b-9d61c8b64eb8",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbffa84c-0d6c-459a-a07b-9d61c8b64eb8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.052485809,
      "longitude": 30.9473275375
    }
  },
  "dc27b392-155d-4c2c-802e-903b7a4c6d99": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 102м",
      "id": "dc27b392-155d-4c2c-802e-903b7a4c6d99",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc27b392-155d-4c2c-802e-903b7a4c6d99",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4325114568,
      "longitude": 31.0240966511
    }
  },
  "dcaba510-ac2f-4c45-8737-1054d3a85429": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "dcaba510-ac2f-4c45-8737-1054d3a85429",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcaba510-ac2f-4c45-8737-1054d3a85429",
    "image": "perev_right",
    "point": {
      "latitude": 53.2408115978,
      "longitude": 30.9569443745
    }
  },
  "dcb1e468-b758-46f8-8016-6642443a4b85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "dcb1e468-b758-46f8-8016-6642443a4b85",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcb1e468-b758-46f8-8016-6642443a4b85",
    "image": "perev_right",
    "point": {
      "latitude": 52.6804976628,
      "longitude": 31.0557622193
    }
  },
  "dcf24e97-acac-4878-81a3-e9393d185cab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 75",
      "id": "dcf24e97-acac-4878-81a3-e9393d185cab",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcf24e97-acac-4878-81a3-e9393d185cab",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3825637869,
      "longitude": 30.9582605556
    }
  },
  "dd55821e-32f6-46b6-b050-955debc6fd34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "dd55821e-32f6-46b6-b050-955debc6fd34",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd55821e-32f6-46b6-b050-955debc6fd34",
    "image": "perev_left",
    "point": {
      "latitude": 52.8314087216,
      "longitude": 30.9775653251
    }
  },
  "ddc20f7d-71fc-4987-a233-a8d49e024239": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ddc20f7d-71fc-4987-a233-a8d49e024239",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddc20f7d-71fc-4987-a233-a8d49e024239",
    "image": "perev_right",
    "point": {
      "latitude": 53.4437970762,
      "longitude": 31.0113223093
    }
  },
  "de15a4ce-4bc0-4eda-84af-a2e47a312d73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "de15a4ce-4bc0-4eda-84af-a2e47a312d73",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de15a4ce-4bc0-4eda-84af-a2e47a312d73",
    "image": "perev_right",
    "point": {
      "latitude": 52.7469990062,
      "longitude": 30.9328336821
    }
  },
  "de1e4bac-802b-46ae-89d8-bab391691907": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 125",
      "id": "de1e4bac-802b-46ae-89d8-bab391691907",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de1e4bac-802b-46ae-89d8-bab391691907",
    "image": "perev_left",
    "point": {
      "latitude": 52.3231328705,
      "longitude": 30.9311384349
    }
  },
  "de79b8e7-a935-4cde-b600-555b8531455d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 141",
      "id": "de79b8e7-a935-4cde-b600-555b8531455d",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de79b8e7-a935-4cde-b600-555b8531455d",
    "image": "perev_right",
    "point": {
      "latitude": 52.3918931206,
      "longitude": 30.962212668
    }
  },
  "de7a37f5-6245-41ee-9958-930136d0ea58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "de7a37f5-6245-41ee-9958-930136d0ea58",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de7a37f5-6245-41ee-9958-930136d0ea58",
    "image": "perev_left",
    "point": {
      "latitude": 53.222252331,
      "longitude": 30.9216626675
    }
  },
  "de7c7538-fe38-4255-8fa3-02cfd782d0dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "de7c7538-fe38-4255-8fa3-02cfd782d0dd",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de7c7538-fe38-4255-8fa3-02cfd782d0dd",
    "image": "perev_right",
    "point": {
      "latitude": 52.7395301461,
      "longitude": 30.938741052
    }
  },
  "df2acf9d-3ac7-4cea-b805-cec388bc61eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 96",
      "id": "df2acf9d-3ac7-4cea-b805-cec388bc61eb",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df2acf9d-3ac7-4cea-b805-cec388bc61eb",
    "image": "perev_right",
    "point": {
      "latitude": 52.2221499712,
      "longitude": 30.9142271368
    }
  },
  "df380376-ed9b-4732-a739-37c8faf27ac0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 52",
      "id": "df380376-ed9b-4732-a739-37c8faf27ac0",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df380376-ed9b-4732-a739-37c8faf27ac0",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0867789525,
      "longitude": 30.9498289567
    }
  },
  "df54f099-1f9b-4ad3-8abf-bebc75da8d46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "df54f099-1f9b-4ad3-8abf-bebc75da8d46",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df54f099-1f9b-4ad3-8abf-bebc75da8d46",
    "image": "perev_right",
    "point": {
      "latitude": 53.3852294764,
      "longitude": 31.0089457839
    }
  },
  "e024b4c1-a797-4912-845b-729d182dc00e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 129",
      "id": "e024b4c1-a797-4912-845b-729d182dc00e",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e024b4c1-a797-4912-845b-729d182dc00e",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.3416181555,
      "longitude": 30.9353180057
    }
  },
  "e0c3b39a-d94c-4688-ac66-1284f40b6e81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e0c3b39a-d94c-4688-ac66-1284f40b6e81",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0c3b39a-d94c-4688-ac66-1284f40b6e81",
    "image": "perev_right",
    "point": {
      "latitude": 52.6881399453,
      "longitude": 31.0367532772
    }
  },
  "e0d79f9b-76d1-4e38-bee7-57602dbef61e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 91",
      "id": "e0d79f9b-76d1-4e38-bee7-57602dbef61e",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0d79f9b-76d1-4e38-bee7-57602dbef61e",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.216670107,
      "longitude": 30.9474497296
    }
  },
  "e1a75752-7784-4177-adaa-e53d337dda81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e1a75752-7784-4177-adaa-e53d337dda81",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1a75752-7784-4177-adaa-e53d337dda81",
    "image": "perev_right",
    "point": {
      "latitude": 52.8127534025,
      "longitude": 30.9662159146
    }
  },
  "e1f2cfc2-6abc-48a1-873f-47ce22c6967f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e1f2cfc2-6abc-48a1-873f-47ce22c6967f",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1f2cfc2-6abc-48a1-873f-47ce22c6967f",
    "image": "name_of",
    "point": {
      "latitude": 52.8265946087,
      "longitude": 30.9717136432
    }
  },
  "e2c74558-2197-48e4-9b38-a8cebf1bfa4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e2c74558-2197-48e4-9b38-a8cebf1bfa4e",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2c74558-2197-48e4-9b38-a8cebf1bfa4e",
    "image": "perev_right",
    "point": {
      "latitude": 53.2095706889,
      "longitude": 30.8971880965
    }
  },
  "e2d82961-8c96-40d2-bcec-c75d81ef81a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e2d82961-8c96-40d2-bcec-c75d81ef81a8",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2d82961-8c96-40d2-bcec-c75d81ef81a8",
    "image": "perev_right",
    "point": {
      "latitude": 52.9193877835,
      "longitude": 30.9374292127
    }
  },
  "e392a4fd-c967-44f0-bc83-1aedc7d0be4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "e392a4fd-c967-44f0-bc83-1aedc7d0be4a",
      "kilometrage": 211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e392a4fd-c967-44f0-bc83-1aedc7d0be4a",
    "image": "perev_left",
    "point": {
      "latitude": 52.9186787851,
      "longitude": 30.9501302791
    }
  },
  "e401339c-144b-4d66-8a52-1a841c904451": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e401339c-144b-4d66-8a52-1a841c904451",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e401339c-144b-4d66-8a52-1a841c904451",
    "image": "perev_right",
    "point": {
      "latitude": 53.3102596544,
      "longitude": 31.0116222782
    }
  },
  "e402d0d8-9698-4287-8b4e-8d0bee0ce88b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 148",
      "id": "e402d0d8-9698-4287-8b4e-8d0bee0ce88b",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e402d0d8-9698-4287-8b4e-8d0bee0ce88b",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.4380617696,
      "longitude": 31.0510865766
    }
  },
  "e5001cde-295b-4ee0-9e28-6fe0fc878686": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 81",
      "id": "e5001cde-295b-4ee0-9e28-6fe0fc878686",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5001cde-295b-4ee0-9e28-6fe0fc878686",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3860145799,
      "longitude": 30.9851587733
    }
  },
  "e5060357-2c7a-4d8a-a264-13e77d6308db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "e5060357-2c7a-4d8a-a264-13e77d6308db",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5060357-2c7a-4d8a-a264-13e77d6308db",
    "image": "bridge_low",
    "point": {
      "latitude": 52.296333222,
      "longitude": 30.9318242178
    }
  },
  "e52bc70b-8775-4834-8b27-14d6c0382717": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 56",
      "id": "e52bc70b-8775-4834-8b27-14d6c0382717",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e52bc70b-8775-4834-8b27-14d6c0382717",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2970551263,
      "longitude": 30.9329816974
    }
  },
  "e6215b37-32fe-4f79-8540-32bdcd0823c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "e6215b37-32fe-4f79-8540-32bdcd0823c7",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6215b37-32fe-4f79-8540-32bdcd0823c7",
    "image": "perev_left",
    "point": {
      "latitude": 52.7681332898,
      "longitude": 30.9576622772
    }
  },
  "e627202a-45e1-43c0-b317-caf504805451": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "e627202a-45e1-43c0-b317-caf504805451",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e627202a-45e1-43c0-b317-caf504805451",
    "image": "perev_left",
    "point": {
      "latitude": 53.4249065232,
      "longitude": 31.0049450126
    }
  },
  "e63a4d6e-d839-41f4-85f0-6bd856ed90ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 113",
      "id": "e63a4d6e-d839-41f4-85f0-6bd856ed90ed",
      "kilometrage": 72,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e63a4d6e-d839-41f4-85f0-6bd856ed90ed",
    "image": "perev_right",
    "point": {
      "latitude": 52.2435333989,
      "longitude": 30.8853215768
    }
  },
  "e658cfa4-6ddb-49e8-a050-b2dcb999a38e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e658cfa4-6ddb-49e8-a050-b2dcb999a38e",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e658cfa4-6ddb-49e8-a050-b2dcb999a38e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3602730166,
      "longitude": 30.9709654615
    }
  },
  "e6e8d3ab-1530-4088-993c-7288bfac989c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 22",
      "id": "e6e8d3ab-1530-4088-993c-7288bfac989c",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6e8d3ab-1530-4088-993c-7288bfac989c",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.9900315288,
      "longitude": 30.9119403705
    }
  },
  "e6f34dbe-8401-44a4-b47a-34f187b06d9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "e6f34dbe-8401-44a4-b47a-34f187b06d9a",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6f34dbe-8401-44a4-b47a-34f187b06d9a",
    "image": "perev_left",
    "point": {
      "latitude": 53.1986317015,
      "longitude": 30.8997842626
    }
  },
  "e6f942f0-b2c9-433d-811b-51ac520dbc52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 232",
      "id": "e6f942f0-b2c9-433d-811b-51ac520dbc52",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6f942f0-b2c9-433d-811b-51ac520dbc52",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6162299563,
      "longitude": 31.1053177088
    }
  },
  "e720015e-2b4e-43ee-8ba7-7efa24d652bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e720015e-2b4e-43ee-8ba7-7efa24d652bc",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e720015e-2b4e-43ee-8ba7-7efa24d652bc",
    "image": "name_of",
    "point": {
      "latitude": 53.1747361691,
      "longitude": 30.8827243476
    }
  },
  "e722db93-667d-4129-9b9c-ce66eebe378b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "e722db93-667d-4129-9b9c-ce66eebe378b",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e722db93-667d-4129-9b9c-ce66eebe378b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1685912766,
      "longitude": 30.9360215608
    }
  },
  "e73c1b75-b105-441e-8c5d-b4eef2742198": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "e73c1b75-b105-441e-8c5d-b4eef2742198",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e73c1b75-b105-441e-8c5d-b4eef2742198",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.2267264795,
      "longitude": 30.9375750253
    }
  },
  "e7578782-0fd5-4a25-ae08-86a9d311d751": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e7578782-0fd5-4a25-ae08-86a9d311d751",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7578782-0fd5-4a25-ae08-86a9d311d751",
    "image": "perev_right",
    "point": {
      "latitude": 53.3817571353,
      "longitude": 30.9972757783
    }
  },
  "e7d8c8a7-5f36-405f-b6e0-e4de1cc4c880": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 235",
      "id": "e7d8c8a7-5f36-405f-b6e0-e4de1cc4c880",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7d8c8a7-5f36-405f-b6e0-e4de1cc4c880",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0775171702,
      "longitude": 30.8878039381
    }
  },
  "e86a9770-ba9e-413b-8824-3b07fbf5ac83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "e86a9770-ba9e-413b-8824-3b07fbf5ac83",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e86a9770-ba9e-413b-8824-3b07fbf5ac83",
    "image": "perev_left",
    "point": {
      "latitude": 53.1679997253,
      "longitude": 30.8815002095
    }
  },
  "e908d491-6e0c-42a1-82cb-7018f110a255": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 45",
      "id": "e908d491-6e0c-42a1-82cb-7018f110a255",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e908d491-6e0c-42a1-82cb-7018f110a255",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2622037345,
      "longitude": 30.8979395468
    }
  },
  "e90e7b6f-a19a-48b4-95eb-6f732774724e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 163А",
      "id": "e90e7b6f-a19a-48b4-95eb-6f732774724e",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e90e7b6f-a19a-48b4-95eb-6f732774724e",
    "image": "perev_left",
    "point": {
      "latitude": 52.494168039,
      "longitude": 31.1487941552
    }
  },
  "e932d1c3-2a82-4847-b6cf-d16e2a5de71a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e932d1c3-2a82-4847-b6cf-d16e2a5de71a",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e932d1c3-2a82-4847-b6cf-d16e2a5de71a",
    "image": "perev_right",
    "point": {
      "latitude": 53.0464699177,
      "longitude": 30.8914304021
    }
  },
  "e94fdce9-1031-40bd-a38f-f83faa643ac2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e94fdce9-1031-40bd-a38f-f83faa643ac2",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e94fdce9-1031-40bd-a38f-f83faa643ac2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3990878137,
      "longitude": 31.0077324198
    }
  },
  "e98f8a28-5e70-419d-b1a7-0d2db060e575": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44А",
      "id": "e98f8a28-5e70-419d-b1a7-0d2db060e575",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e98f8a28-5e70-419d-b1a7-0d2db060e575",
    "image": "perev_left",
    "point": {
      "latitude": 52.0674969194,
      "longitude": 30.9351456354
    }
  },
  "ea15fe8a-3a50-49b9-900c-ac5199abc5d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 111",
      "id": "ea15fe8a-3a50-49b9-900c-ac5199abc5d8",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea15fe8a-3a50-49b9-900c-ac5199abc5d8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4543144612,
      "longitude": 31.0786217381
    }
  },
  "ea6ed322-7b5d-4eb9-8d41-bdd93d917b10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 42",
      "id": "ea6ed322-7b5d-4eb9-8d41-bdd93d917b10",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea6ed322-7b5d-4eb9-8d41-bdd93d917b10",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0486140326,
      "longitude": 30.9472109619
    }
  },
  "ea7b8d05-a678-4124-ba7c-f2f1e88dd109": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 164",
      "id": "ea7b8d05-a678-4124-ba7c-f2f1e88dd109",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea7b8d05-a678-4124-ba7c-f2f1e88dd109",
    "image": "perev_right",
    "point": {
      "latitude": 52.4941059538,
      "longitude": 31.1434502601
    }
  },
  "ea95ec1c-b3af-4beb-98a8-74f47c228f93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 223",
      "id": "ea95ec1c-b3af-4beb-98a8-74f47c228f93",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea95ec1c-b3af-4beb-98a8-74f47c228f93",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.605408504,
      "longitude": 31.105982736
    }
  },
  "ead16db8-892f-411b-8e0e-f18f6d75b88a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "ead16db8-892f-411b-8e0e-f18f6d75b88a",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ead16db8-892f-411b-8e0e-f18f6d75b88a",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1193142321,
      "longitude": 30.9479411223
    }
  },
  "eadb68f0-806a-49cc-9b79-2b7b2a21b3c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "eadb68f0-806a-49cc-9b79-2b7b2a21b3c8",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eadb68f0-806a-49cc-9b79-2b7b2a21b3c8",
    "image": "perev_right",
    "point": {
      "latitude": 52.0752052497,
      "longitude": 30.9178912068
    }
  },
  "eb06cf33-f55f-4a11-aa25-23ca7d47db32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 89м",
      "id": "eb06cf33-f55f-4a11-aa25-23ca7d47db32",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb06cf33-f55f-4a11-aa25-23ca7d47db32",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3974031391,
      "longitude": 31.0049153017
    }
  },
  "eb280d7b-6371-425d-9150-b5aa785da848": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "eb280d7b-6371-425d-9150-b5aa785da848",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb280d7b-6371-425d-9150-b5aa785da848",
    "image": "perev_right",
    "point": {
      "latitude": 52.8661868421,
      "longitude": 30.9837164598
    }
  },
  "eb37e256-3a0a-46d1-8cd8-2efe4371c9f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 4",
      "id": "eb37e256-3a0a-46d1-8cd8-2efe4371c9f8",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb37e256-3a0a-46d1-8cd8-2efe4371c9f8",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9621179997,
      "longitude": 30.8505961205
    }
  },
  "eb5bb8d0-3d3d-4a75-a0d2-b615bf1be497": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 205",
      "id": "eb5bb8d0-3d3d-4a75-a0d2-b615bf1be497",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb5bb8d0-3d3d-4a75-a0d2-b615bf1be497",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8831792897,
      "longitude": 30.9649720495
    }
  },
  "ebe7ce55-03f9-4e04-ac45-0c240f6fca64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "ebe7ce55-03f9-4e04-ac45-0c240f6fca64",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebe7ce55-03f9-4e04-ac45-0c240f6fca64",
    "image": "perev_left",
    "point": {
      "latitude": 52.9595793763,
      "longitude": 30.9378998146
    }
  },
  "ec14c391-eedb-4b8c-8796-0e26300cd8cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ec14c391-eedb-4b8c-8796-0e26300cd8cc",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ec14c391-eedb-4b8c-8796-0e26300cd8cc",
    "image": "perev_right",
    "point": {
      "latitude": 53.1730068833,
      "longitude": 30.8813349075
    }
  },
  "ec31b03b-64ef-4623-8b28-f8fdbfcdce37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 93",
      "id": "ec31b03b-64ef-4623-8b28-f8fdbfcdce37",
      "kilometrage": 59,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ec31b03b-64ef-4623-8b28-f8fdbfcdce37",
    "image": "perev_right",
    "point": {
      "latitude": 52.2198614838,
      "longitude": 30.9367292895
    }
  },
  "eccc2b87-a4e0-45a1-99c8-82f1ea177501": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "eccc2b87-a4e0-45a1-99c8-82f1ea177501",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eccc2b87-a4e0-45a1-99c8-82f1ea177501",
    "image": "perev_left",
    "point": {
      "latitude": 53.0689382513,
      "longitude": 30.8922080639
    }
  },
  "ecd0f95a-2267-44ad-80b3-a878148886e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ecd0f95a-2267-44ad-80b3-a878148886e5",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ecd0f95a-2267-44ad-80b3-a878148886e5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3257677901,
      "longitude": 30.9335503454
    }
  },
  "ed7d6812-5679-462a-935f-409f42e8693a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ed7d6812-5679-462a-935f-409f42e8693a",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed7d6812-5679-462a-935f-409f42e8693a",
    "image": "perev_right",
    "point": {
      "latitude": 53.2276735619,
      "longitude": 30.9449541197
    }
  },
  "edea6b11-25b9-40b2-b932-7cc159f12de9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "edea6b11-25b9-40b2-b932-7cc159f12de9",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edea6b11-25b9-40b2-b932-7cc159f12de9",
    "image": "perev_right",
    "point": {
      "latitude": 51.9564955155,
      "longitude": 30.818247935
    }
  },
  "ee99d532-f631-46b4-ac5d-c8281b5d67b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "ee99d532-f631-46b4-ac5d-c8281b5d67b5",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee99d532-f631-46b4-ac5d-c8281b5d67b5",
    "image": "perev_right",
    "point": {
      "latitude": 52.6834700117,
      "longitude": 31.0527698097
    }
  },
  "eec2d594-4d80-46b4-a3e1-efce4f8509f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "eec2d594-4d80-46b4-a3e1-efce4f8509f8",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eec2d594-4d80-46b4-a3e1-efce4f8509f8",
    "image": "perev_right",
    "point": {
      "latitude": 53.4333143976,
      "longitude": 31.0049514632
    }
  },
  "eece9082-9b8b-4b00-ab5c-650ec5dc276f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "eece9082-9b8b-4b00-ab5c-650ec5dc276f",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eece9082-9b8b-4b00-ab5c-650ec5dc276f",
    "image": "perev_right",
    "point": {
      "latitude": 52.6446902507,
      "longitude": 31.1251584747
    }
  },
  "ef8d2f11-2d6f-4a24-bf05-0a002d228c3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 124Б",
      "id": "ef8d2f11-2d6f-4a24-bf05-0a002d228c3b",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef8d2f11-2d6f-4a24-bf05-0a002d228c3b",
    "image": "perev_right",
    "point": {
      "latitude": 52.322711525,
      "longitude": 30.921660931
    }
  },
  "f0a1948a-a8c0-4330-b512-a55f02e60780": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 107",
      "id": "f0a1948a-a8c0-4330-b512-a55f02e60780",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0a1948a-a8c0-4330-b512-a55f02e60780",
    "image": "buyo_left",
    "point": {
      "latitude": 52.439444001,
      "longitude": 31.055781977
    }
  },
  "f14b11f0-7ce1-498c-935c-b1a1b82f3105": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f14b11f0-7ce1-498c-935c-b1a1b82f3105",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f14b11f0-7ce1-498c-935c-b1a1b82f3105",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4611765302,
      "longitude": 31.0807545944
    }
  },
  "f17461a2-2085-49f4-b01b-6ac1189c5e1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "f17461a2-2085-49f4-b01b-6ac1189c5e1a",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f17461a2-2085-49f4-b01b-6ac1189c5e1a",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1221495763,
      "longitude": 30.9471097725
    }
  },
  "f175f204-8986-4bde-bc9b-622fc4312b67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "f175f204-8986-4bde-bc9b-622fc4312b67",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f175f204-8986-4bde-bc9b-622fc4312b67",
    "image": "waves_forbidden",
    "point": {
      "latitude": 52.4328115808,
      "longitude": 31.0215582272
    }
  },
  "f20ea0ea-57cc-401e-a828-98e91e7a77ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "f20ea0ea-57cc-401e-a828-98e91e7a77ae",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f20ea0ea-57cc-401e-a828-98e91e7a77ae",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.2760490058,
      "longitude": 30.9800701092
    }
  },
  "f2364c54-73f2-40f2-808f-9d5a2fddaa1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "f2364c54-73f2-40f2-808f-9d5a2fddaa1d",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2364c54-73f2-40f2-808f-9d5a2fddaa1d",
    "image": "axis_romb",
    "point": {
      "latitude": 53.4090342624,
      "longitude": 31.0098090635
    }
  },
  "f2c3e443-83dd-4309-8785-c782b685177f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 39",
      "id": "f2c3e443-83dd-4309-8785-c782b685177f",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2c3e443-83dd-4309-8785-c782b685177f",
    "image": "perev_right",
    "point": {
      "latitude": 52.0359825648,
      "longitude": 30.9338387245
    }
  },
  "f2fb0948-8e5c-47e1-b5d1-3e8f97d05cf0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 19м",
      "id": "f2fb0948-8e5c-47e1-b5d1-3e8f97d05cf0",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2fb0948-8e5c-47e1-b5d1-3e8f97d05cf0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0984036703,
      "longitude": 30.9474187171
    }
  },
  "f3127b68-4eaa-4c23-b383-dc5f1e3d2baf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 295",
      "id": "f3127b68-4eaa-4c23-b383-dc5f1e3d2baf",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3127b68-4eaa-4c23-b383-dc5f1e3d2baf",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4100711767,
      "longitude": 31.0141436288
    }
  },
  "f3363983-6cfb-4d8a-b5fa-de5c133cca3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "f3363983-6cfb-4d8a-b5fa-de5c133cca3b",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3363983-6cfb-4d8a-b5fa-de5c133cca3b",
    "image": "perev_left",
    "point": {
      "latitude": 53.2220324454,
      "longitude": 30.9610846305
    }
  },
  "f45b8550-b18b-48a0-b217-2c28a165489b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 82",
      "id": "f45b8550-b18b-48a0-b217-2c28a165489b",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f45b8550-b18b-48a0-b217-2c28a165489b",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1795009623,
      "longitude": 30.9473705348
    }
  },
  "f46b177e-9b32-440e-b045-f7aba412ae1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 62",
      "id": "f46b177e-9b32-440e-b045-f7aba412ae1f",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f46b177e-9b32-440e-b045-f7aba412ae1f",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0990878691,
      "longitude": 30.905507624
    }
  },
  "f473a5d5-c85a-46e5-8bbe-0622f0660510": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 156",
      "id": "f473a5d5-c85a-46e5-8bbe-0622f0660510",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f473a5d5-c85a-46e5-8bbe-0622f0660510",
    "image": "perev_left",
    "point": {
      "latitude": 52.479576721,
      "longitude": 31.1109300144
    }
  },
  "f507c535-41f3-45e2-8cb2-7a0faf985bfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 35",
      "id": "f507c535-41f3-45e2-8cb2-7a0faf985bfa",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f507c535-41f3-45e2-8cb2-7a0faf985bfa",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0853528258,
      "longitude": 30.914160023
    }
  },
  "f5acfa65-6415-4cad-9972-f570f0f9a8fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "f5acfa65-6415-4cad-9972-f570f0f9a8fe",
      "kilometrage": 49,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5acfa65-6415-4cad-9972-f570f0f9a8fe",
    "image": "perev_left",
    "point": {
      "latitude": 52.1638740738,
      "longitude": 30.9600491148
    }
  },
  "f5c338f6-a7b8-4ae5-8136-edd135f1b988": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20м",
      "id": "f5c338f6-a7b8-4ae5-8136-edd135f1b988",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5c338f6-a7b8-4ae5-8136-edd135f1b988",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1011723731,
      "longitude": 30.9520761226
    }
  },
  "f5d0b129-33d0-4240-b4e5-fddb2916b684": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 93",
      "id": "f5d0b129-33d0-4240-b4e5-fddb2916b684",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5d0b129-33d0-4240-b4e5-fddb2916b684",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4139809121,
      "longitude": 31.0118850412
    }
  },
  "f61449f2-1a58-4b6f-84d2-cdd071a4ea7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 44",
      "id": "f61449f2-1a58-4b6f-84d2-cdd071a4ea7f",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f61449f2-1a58-4b6f-84d2-cdd071a4ea7f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2339006312,
      "longitude": 30.941790454
    }
  },
  "f6a17a4c-9229-4594-9095-69fbd4c9c0f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f6a17a4c-9229-4594-9095-69fbd4c9c0f3",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6a17a4c-9229-4594-9095-69fbd4c9c0f3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1218201464,
      "longitude": 30.94912919
    }
  },
  "f76d6e6a-a442-45e6-950c-08a70dd253ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 70",
      "id": "f76d6e6a-a442-45e6-950c-08a70dd253ad",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f76d6e6a-a442-45e6-950c-08a70dd253ad",
    "image": "kilometrage",
    "point": {
      "latitude": 52.23010509,
      "longitude": 30.9050355512
    }
  },
  "f77b2044-6329-4a70-8f32-2cb755e763ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f77b2044-6329-4a70-8f32-2cb755e763ba",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f77b2044-6329-4a70-8f32-2cb755e763ba",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3258942477,
      "longitude": 30.9361920835
    }
  },
  "f7c3cce7-5bb5-49de-82d9-21acbbb80d9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "f7c3cce7-5bb5-49de-82d9-21acbbb80d9c",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7c3cce7-5bb5-49de-82d9-21acbbb80d9c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2248725846,
      "longitude": 30.9271872149
    }
  },
  "f7cf6a0c-75cd-4da9-9ff5-5e5f4773ff37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 130",
      "id": "f7cf6a0c-75cd-4da9-9ff5-5e5f4773ff37",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7cf6a0c-75cd-4da9-9ff5-5e5f4773ff37",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5427548045,
      "longitude": 31.1700823409
    }
  },
  "f7d118ff-23e1-47df-ae0d-d11ee63503cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f7d118ff-23e1-47df-ae0d-d11ee63503cd",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7d118ff-23e1-47df-ae0d-d11ee63503cd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3850251446,
      "longitude": 31.0028003511
    }
  },
  "f8326eb7-f01b-48ac-97d7-156ff4eac6c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f8326eb7-f01b-48ac-97d7-156ff4eac6c9",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8326eb7-f01b-48ac-97d7-156ff4eac6c9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1184275499,
      "longitude": 30.8762004459
    }
  },
  "f8512d29-3b9f-4529-8216-db57ef199642": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f8512d29-3b9f-4529-8216-db57ef199642",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8512d29-3b9f-4529-8216-db57ef199642",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4354006746,
      "longitude": 31.0317116011
    }
  },
  "f87c03b3-ec9a-4836-a5e5-b60481620b3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "f87c03b3-ec9a-4836-a5e5-b60481620b3d",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f87c03b3-ec9a-4836-a5e5-b60481620b3d",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.4333538349,
      "longitude": 31.0213546478
    }
  },
  "f9373b9a-6b8a-4a83-a51e-f299d56598b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 140",
      "id": "f9373b9a-6b8a-4a83-a51e-f299d56598b3",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9373b9a-6b8a-4a83-a51e-f299d56598b3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5958542693,
      "longitude": 31.1081050068
    }
  },
  "f951bc3d-e8fa-4453-8a1c-1bdff29f0af0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 37",
      "id": "f951bc3d-e8fa-4453-8a1c-1bdff29f0af0",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f951bc3d-e8fa-4453-8a1c-1bdff29f0af0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2031165019,
      "longitude": 30.9347921535
    }
  },
  "f98d2478-989c-4645-ae29-6e12f3e3a740": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f98d2478-989c-4645-ae29-6e12f3e3a740",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f98d2478-989c-4645-ae29-6e12f3e3a740",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8575259759,
      "longitude": 30.9887919068
    }
  },
  "f9b53650-13d4-4c30-9667-c7a31ebcee45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 38А",
      "id": "f9b53650-13d4-4c30-9667-c7a31ebcee45",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9b53650-13d4-4c30-9667-c7a31ebcee45",
    "image": "perev_left",
    "point": {
      "latitude": 52.0342294657,
      "longitude": 30.937030536
    }
  },
  "f9d06916-9d52-4150-a564-66c05a474f3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 134",
      "id": "f9d06916-9d52-4150-a564-66c05a474f3f",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9d06916-9d52-4150-a564-66c05a474f3f",
    "image": "perev_left",
    "point": {
      "latitude": 52.3587538688,
      "longitude": 30.9613768631
    }
  },
  "f9ef1fb2-9bc2-43ba-8abc-7c648f89e8b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 175",
      "id": "f9ef1fb2-9bc2-43ba-8abc-7c648f89e8b7",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9ef1fb2-9bc2-43ba-8abc-7c648f89e8b7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.729938744,
      "longitude": 30.9636358348
    }
  },
  "fa0c9713-200e-4855-be50-20cad209a311": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 58",
      "id": "fa0c9713-200e-4855-be50-20cad209a311",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa0c9713-200e-4855-be50-20cad209a311",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3004003156,
      "longitude": 30.938743019
    }
  },
  "fa308ff0-86ff-49f4-b8b0-aa92aceaf449": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "fa308ff0-86ff-49f4-b8b0-aa92aceaf449",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa308ff0-86ff-49f4-b8b0-aa92aceaf449",
    "image": "perev_right",
    "point": {
      "latitude": 53.2245066569,
      "longitude": 30.929432461
    }
  },
  "fabafcb8-ff01-4986-8cae-f692a24df15f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 100м",
      "id": "fabafcb8-ff01-4986-8cae-f692a24df15f",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fabafcb8-ff01-4986-8cae-f692a24df15f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4289107305,
      "longitude": 31.0219883276
    }
  },
  "fad8778d-b941-4900-84f6-ae4ce9a5a2c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25а",
      "id": "fad8778d-b941-4900-84f6-ae4ce9a5a2c6",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fad8778d-b941-4900-84f6-ae4ce9a5a2c6",
    "image": "perev_left",
    "point": {
      "latitude": 51.9991342225,
      "longitude": 30.8940253366
    }
  },
  "fae97349-1a7e-4aee-bdf8-e83e2dfb849f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 230",
      "id": "fae97349-1a7e-4aee-bdf8-e83e2dfb849f",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fae97349-1a7e-4aee-bdf8-e83e2dfb849f",
    "image": "perev_right",
    "point": {
      "latitude": 52.6113053108,
      "longitude": 31.1033544589
    }
  },
  "faecc160-6cfb-4e69-9f92-b681a1f05899": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "faecc160-6cfb-4e69-9f92-b681a1f05899",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "faecc160-6cfb-4e69-9f92-b681a1f05899",
    "image": "perev_left",
    "point": {
      "latitude": 52.8364754377,
      "longitude": 30.9832704762
    }
  },
  "fb18e138-3e03-4623-a3a5-f20e2ed2235f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 163",
      "id": "fb18e138-3e03-4623-a3a5-f20e2ed2235f",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb18e138-3e03-4623-a3a5-f20e2ed2235f",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.4905732521,
      "longitude": 31.1549963411
    }
  },
  "fb25a0f3-a951-4e35-8b3c-10a4eaf89478": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "fb25a0f3-a951-4e35-8b3c-10a4eaf89478",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb25a0f3-a951-4e35-8b3c-10a4eaf89478",
    "image": "perev_left",
    "point": {
      "latitude": 52.9576574418,
      "longitude": 30.9407521045
    }
  },
  "fc28132d-7ec5-40ae-aa8a-083446501cd2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "fc28132d-7ec5-40ae-aa8a-083446501cd2",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc28132d-7ec5-40ae-aa8a-083446501cd2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3852118386,
      "longitude": 31.0020696733
    }
  },
  "fc2e707a-b781-42c4-974a-258b9a45fe2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "fc2e707a-b781-42c4-974a-258b9a45fe2f",
      "kilometrage": 263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc2e707a-b781-42c4-974a-258b9a45fe2f",
    "image": "perev_left",
    "point": {
      "latitude": 53.2167997812,
      "longitude": 30.9506092762
    }
  },
  "fd016c1f-5fe3-4993-8b37-6378b34a97ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "fd016c1f-5fe3-4993-8b37-6378b34a97ec",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd016c1f-5fe3-4993-8b37-6378b34a97ec",
    "image": "perev_right",
    "point": {
      "latitude": 53.3585172444,
      "longitude": 30.9924711144
    }
  },
  "fd4cecff-8600-4b35-8f18-5817576c7b74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "fd4cecff-8600-4b35-8f18-5817576c7b74",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd4cecff-8600-4b35-8f18-5817576c7b74",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.8849368671,
      "longitude": 30.961215381
    }
  },
  "fd995a77-dac6-46e3-9adb-d1f71838c8cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "fd995a77-dac6-46e3-9adb-d1f71838c8cf",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd995a77-dac6-46e3-9adb-d1f71838c8cf",
    "image": "perev_left",
    "point": {
      "latitude": 53.3701145019,
      "longitude": 30.9901784246
    }
  },
  "fe1aa60f-1e73-406e-b437-1a762bb3c686": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 125",
      "id": "fe1aa60f-1e73-406e-b437-1a762bb3c686",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe1aa60f-1e73-406e-b437-1a762bb3c686",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4843136368,
      "longitude": 31.1526251158
    }
  },
  "fe6ee247-7ed0-4cc6-9a48-022c3e778246": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "fe6ee247-7ed0-4cc6-9a48-022c3e778246",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe6ee247-7ed0-4cc6-9a48-022c3e778246",
    "image": "perev_left",
    "point": {
      "latitude": 52.8156864777,
      "longitude": 30.975295789
    }
  },
  "fe70fa07-51e7-48d4-a474-8c1ad2c852e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый  ",
      "id": "fe70fa07-51e7-48d4-a474-8c1ad2c852e4",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe70fa07-51e7-48d4-a474-8c1ad2c852e4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9995288103,
      "longitude": 30.9205136775
    }
  },
  "ff144783-4bcc-42af-9d59-fc581451cba5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 35м",
      "id": "ff144783-4bcc-42af-9d59-fc581451cba5",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff144783-4bcc-42af-9d59-fc581451cba5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1875220607,
      "longitude": 30.9388804704
    }
  },
  "ffb6a89a-e7be-4406-9ec5-5dbfc85abad2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 51А",
      "id": "ffb6a89a-e7be-4406-9ec5-5dbfc85abad2",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffb6a89a-e7be-4406-9ec5-5dbfc85abad2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2908632867,
      "longitude": 30.9229298538
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

let arrayForChange = [
  
]


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

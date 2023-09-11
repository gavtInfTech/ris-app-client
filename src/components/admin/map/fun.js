const fs = require("fs");

let data = {
  "0026b0db-8065-4eab-939c-7e4d8ad3e7ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "0026b0db-8065-4eab-939c-7e4d8ad3e7ac",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0026b0db-8065-4eab-939c-7e4d8ad3e7ac",
    "image": "buyo_right",
    "point": {
      "latitude": 52.136046972,
      "longitude": 28.9976146191
    }
  },
  "002ae04c-228f-435b-93fe-edc4266fa67f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "002ae04c-228f-435b-93fe-edc4266fa67f",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "002ae04c-228f-435b-93fe-edc4266fa67f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0939923411,
      "longitude": 28.4308047551
    }
  },
  "008bd987-8de3-4263-b9f7-0e7e916d1625": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 196",
      "id": "008bd987-8de3-4263-b9f7-0e7e916d1625",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "008bd987-8de3-4263-b9f7-0e7e916d1625",
    "image": "buyo_left",
    "point": {
      "latitude": 52.126846889,
      "longitude": 28.93710875
    }
  },
  "00a24105-7710-4046-89a3-99ce57793cd1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 233",
      "id": "00a24105-7710-4046-89a3-99ce57793cd1",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00a24105-7710-4046-89a3-99ce57793cd1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.103619972,
      "longitude": 28.513069028
    }
  },
  "00ad2a9f-102a-4e83-a4d2-83e18893ef24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 151",
      "id": "00ad2a9f-102a-4e83-a4d2-83e18893ef24",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00ad2a9f-102a-4e83-a4d2-83e18893ef24",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0487598469,
      "longitude": 29.2758880481
    }
  },
  "00de2272-4410-4808-9756-db391800cbcd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 262а",
      "id": "00de2272-4410-4808-9756-db391800cbcd",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00de2272-4410-4808-9756-db391800cbcd",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1085547273,
      "longitude": 28.2433662824
    }
  },
  "00f5c225-b106-4b04-a84f-56a9321b5c91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 272",
      "id": "00f5c225-b106-4b04-a84f-56a9321b5c91",
      "kilometrage": 314,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00f5c225-b106-4b04-a84f-56a9321b5c91",
    "image": "perev_left",
    "point": {
      "latitude": 52.0894755893,
      "longitude": 28.1440792818
    }
  },
  "011cd421-cb60-49b8-90b8-a8d2f260173a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 70",
      "id": "011cd421-cb60-49b8-90b8-a8d2f260173a",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "011cd421-cb60-49b8-90b8-a8d2f260173a",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7488411143,
      "longitude": 29.6848055617
    }
  },
  "0124acc5-21fc-4147-b241-d4afd463ab92": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 111",
      "id": "0124acc5-21fc-4147-b241-d4afd463ab92",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0124acc5-21fc-4147-b241-d4afd463ab92",
    "image": "buyo_left",
    "point": {
      "latitude": 51.902873149,
      "longitude": 29.4862859006
    }
  },
  "014ea5c2-dd7c-474c-bc3e-1cc426ff6b08": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 304",
      "id": "014ea5c2-dd7c-474c-bc3e-1cc426ff6b08",
      "kilometrage": 360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "014ea5c2-dd7c-474c-bc3e-1cc426ff6b08",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0924405758,
      "longitude": 27.7028761099
    }
  },
  "0170cb2c-1cda-41ad-833b-2350362dcaeb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 161",
      "id": "0170cb2c-1cda-41ad-833b-2350362dcaeb",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0170cb2c-1cda-41ad-833b-2350362dcaeb",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0721741521,
      "longitude": 29.2239063903
    }
  },
  "020585a5-7781-447e-9257-3ae942736504": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 251",
      "id": "020585a5-7781-447e-9257-3ae942736504",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "020585a5-7781-447e-9257-3ae942736504",
    "image": "perev_right",
    "point": {
      "latitude": 52.0989937968,
      "longitude": 28.27139285
    }
  },
  "0224aefb-7ee0-4c9f-a112-a884647ff5ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "0224aefb-7ee0-4c9f-a112-a884647ff5ff",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0224aefb-7ee0-4c9f-a112-a884647ff5ff",
    "image": "buyo_left",
    "point": {
      "latitude": 52.099121851,
      "longitude": 28.4417917953
    }
  },
  "027dba3f-94b1-4c11-b7e2-68231109cdcf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "027dba3f-94b1-4c11-b7e2-68231109cdcf",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "027dba3f-94b1-4c11-b7e2-68231109cdcf",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.9535820473,
      "longitude": 29.4453702445
    }
  },
  "030fea8e-0ca1-4c96-aaaf-cf666e307f20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "030fea8e-0ca1-4c96-aaaf-cf666e307f20",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "030fea8e-0ca1-4c96-aaaf-cf666e307f20",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.071137913,
      "longitude": 28.3421636373
    }
  },
  "033e1cb6-aaa1-4e33-a180-424727244b5e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "033e1cb6-aaa1-4e33-a180-424727244b5e",
      "kilometrage": 312,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "033e1cb6-aaa1-4e33-a180-424727244b5e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0943118777,
      "longitude": 28.1720190507
    }
  },
  "034f4965-075a-4e78-8bc1-f179199c4de7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 20",
      "id": "034f4965-075a-4e78-8bc1-f179199c4de7",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "034f4965-075a-4e78-8bc1-f179199c4de7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.533946164,
      "longitude": 29.8645531517
    }
  },
  "03b53cc0-e39c-440d-94ce-82bc5085c8f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 247",
      "id": "03b53cc0-e39c-440d-94ce-82bc5085c8f2",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03b53cc0-e39c-440d-94ce-82bc5085c8f2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1024672925,
      "longitude": 28.3055354449
    }
  },
  "03c41e91-67cd-4e00-b0b0-22cfb8940784": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "03c41e91-67cd-4e00-b0b0-22cfb8940784",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03c41e91-67cd-4e00-b0b0-22cfb8940784",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1158083476,
      "longitude": 29.0357572356
    }
  },
  "04200564-05fd-4863-9e92-94f6064e984f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 280",
      "id": "04200564-05fd-4863-9e92-94f6064e984f",
      "kilometrage": 328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04200564-05fd-4863-9e92-94f6064e984f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.071049722,
      "longitude": 28.029684917
    }
  },
  "043e5851-ce04-43fb-8d7f-1a30e1d1a16f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 181",
      "id": "043e5851-ce04-43fb-8d7f-1a30e1d1a16f",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "043e5851-ce04-43fb-8d7f-1a30e1d1a16f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1157376087,
      "longitude": 28.7827227046
    }
  },
  "04cdfd7c-896b-4698-bf66-00481a5c21fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 73",
      "id": "04cdfd7c-896b-4698-bf66-00481a5c21fd",
      "kilometrage": 124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04cdfd7c-896b-4698-bf66-00481a5c21fd",
    "image": "perev_right",
    "point": {
      "latitude": 51.7560098261,
      "longitude": 29.6732260578
    }
  },
  "04f452c3-6672-43c1-beb5-6d13af4b4a7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 390",
      "id": "04f452c3-6672-43c1-beb5-6d13af4b4a7c",
      "kilometrage": 390,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04f452c3-6672-43c1-beb5-6d13af4b4a7c",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1294705646,
      "longitude": 27.498059608
    }
  },
  "051b2bc7-4568-441a-85a9-55d7f74ee947": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 11",
      "id": "051b2bc7-4568-441a-85a9-55d7f74ee947",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "051b2bc7-4568-441a-85a9-55d7f74ee947",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5020519997,
      "longitude": 29.9386038859
    }
  },
  "0537aa11-8681-4466-8708-224c5d36a178": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 65",
      "id": "0537aa11-8681-4466-8708-224c5d36a178",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0537aa11-8681-4466-8708-224c5d36a178",
    "image": "buyo_right",
    "point": {
      "latitude": 51.727719046,
      "longitude": 29.6794173732
    }
  },
  "0551a908-a222-4024-b0c2-91eb31ea0bc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 67",
      "id": "0551a908-a222-4024-b0c2-91eb31ea0bc8",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0551a908-a222-4024-b0c2-91eb31ea0bc8",
    "image": "perev_right",
    "point": {
      "latitude": 51.7356220739,
      "longitude": 29.6865316651
    }
  },
  "05764d5b-a925-422c-b734-dfea895d6a41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "05764d5b-a925-422c-b734-dfea895d6a41",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05764d5b-a925-422c-b734-dfea895d6a41",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0713221418,
      "longitude": 29.2229862118
    }
  },
  "058afde4-e79e-41bc-a586-41697228dd13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "058afde4-e79e-41bc-a586-41697228dd13",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "058afde4-e79e-41bc-a586-41697228dd13",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0970486842,
      "longitude": 28.3090968103
    }
  },
  "05a68160-5497-40b0-abad-537a664df47e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "05a68160-5497-40b0-abad-537a664df47e",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05a68160-5497-40b0-abad-537a664df47e",
    "image": "waves_forbidden",
    "point": {
      "latitude": 52.0733735185,
      "longitude": 29.245790852
    }
  },
  "0607b9f0-2048-4ba2-a940-fba15c45a7ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 89",
      "id": "0607b9f0-2048-4ba2-a940-fba15c45a7ea",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0607b9f0-2048-4ba2-a940-fba15c45a7ea",
    "image": "perev_right",
    "point": {
      "latitude": 51.7831606793,
      "longitude": 29.5680513973
    }
  },
  "0627e028-ba82-46fe-ac8d-1964769cd717": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 100",
      "id": "0627e028-ba82-46fe-ac8d-1964769cd717",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0627e028-ba82-46fe-ac8d-1964769cd717",
    "image": "perev_left",
    "point": {
      "latitude": 51.8585252724,
      "longitude": 29.5116560809
    }
  },
  "06333370-a6e0-43a5-8650-2ac0a79d81f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 67",
      "id": "06333370-a6e0-43a5-8650-2ac0a79d81f6",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06333370-a6e0-43a5-8650-2ac0a79d81f6",
    "image": "buyo_right",
    "point": {
      "latitude": 51.739485332,
      "longitude": 29.704732556
    }
  },
  "0637c1d0-bba1-4a4b-b462-1ada7ef377a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 71",
      "id": "0637c1d0-bba1-4a4b-b462-1ada7ef377a3",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0637c1d0-bba1-4a4b-b462-1ada7ef377a3",
    "image": "perev_left",
    "point": {
      "latitude": 51.7493599353,
      "longitude": 29.686142501
    }
  },
  "0657919b-0baa-48b1-bfc0-37c1fcc09a5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 184",
      "id": "0657919b-0baa-48b1-bfc0-37c1fcc09a5b",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0657919b-0baa-48b1-bfc0-37c1fcc09a5b",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1007945733,
      "longitude": 28.76810042
    }
  },
  "068e8faa-8787-4cb2-a915-87f69777a260": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 390",
      "id": "068e8faa-8787-4cb2-a915-87f69777a260",
      "kilometrage": 394,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "068e8faa-8787-4cb2-a915-87f69777a260",
    "image": "perev_right",
    "point": {
      "latitude": 52.1267788273,
      "longitude": 27.4618262834
    }
  },
  "06ca6326-4092-4dc5-92ec-ef741ee292cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 326",
      "id": "06ca6326-4092-4dc5-92ec-ef741ee292cb",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06ca6326-4092-4dc5-92ec-ef741ee292cb",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1521300914,
      "longitude": 27.3573673998
    }
  },
  "06ede3ef-f3c5-4d01-98fc-4e6938a02c62": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "06ede3ef-f3c5-4d01-98fc-4e6938a02c62",
      "kilometrage": 320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06ede3ef-f3c5-4d01-98fc-4e6938a02c62",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0746328589,
      "longitude": 28.0838175792
    }
  },
  "06eea04d-96b2-4952-b77c-36bc1849e8e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 70",
      "id": "06eea04d-96b2-4952-b77c-36bc1849e8e1",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06eea04d-96b2-4952-b77c-36bc1849e8e1",
    "image": "kilometrage",
    "point": {
      "latitude": 51.4900656311,
      "longitude": 29.9586158074
    }
  },
  "06fa5a39-817a-48b3-82b9-d016bf7262f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 272",
      "id": "06fa5a39-817a-48b3-82b9-d016bf7262f0",
      "kilometrage": 314,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06fa5a39-817a-48b3-82b9-d016bf7262f0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0884710946,
      "longitude": 28.1440894646
    }
  },
  "071350d4-5a94-4ca3-b1b6-ffb8ced4c336": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 214",
      "id": "071350d4-5a94-4ca3-b1b6-ffb8ced4c336",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "071350d4-5a94-4ca3-b1b6-ffb8ced4c336",
    "image": "perev_right",
    "point": {
      "latitude": 52.1092768843,
      "longitude": 28.5465647134
    }
  },
  "071f607f-21b7-46ec-9ad1-5c315938fc6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "071f607f-21b7-46ec-9ad1-5c315938fc6c",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "071f607f-21b7-46ec-9ad1-5c315938fc6c",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0255572565,
      "longitude": 29.3213276046
    }
  },
  "0758ff6a-6e1d-4a2c-b27b-09fd2194107d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 141",
      "id": "0758ff6a-6e1d-4a2c-b27b-09fd2194107d",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0758ff6a-6e1d-4a2c-b27b-09fd2194107d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1161615751,
      "longitude": 29.0786878569
    }
  },
  "0832f37e-727f-4f03-83a8-48d3361212f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 268",
      "id": "0832f37e-727f-4f03-83a8-48d3361212f4",
      "kilometrage": 312,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0832f37e-727f-4f03-83a8-48d3361212f4",
    "image": "perev_right",
    "point": {
      "latitude": 52.0908746549,
      "longitude": 28.1730126623
    }
  },
  "085cb770-f2d1-4303-8214-3f74982fc1b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 290",
      "id": "085cb770-f2d1-4303-8214-3f74982fc1b8",
      "kilometrage": 327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "085cb770-f2d1-4303-8214-3f74982fc1b8",
    "image": "perev_left",
    "point": {
      "latitude": 52.0756076429,
      "longitude": 28.0414999904
    }
  },
  "0888dc15-bd09-439e-853e-03ea980d8751": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 242",
      "id": "0888dc15-bd09-439e-853e-03ea980d8751",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0888dc15-bd09-439e-853e-03ea980d8751",
    "image": "perev_right",
    "point": {
      "latitude": 52.0699141124,
      "longitude": 28.3511094667
    }
  },
  "08f69305-b181-4700-969b-d6550af7666c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 45",
      "id": "08f69305-b181-4700-969b-d6550af7666c",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08f69305-b181-4700-969b-d6550af7666c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6400417299,
      "longitude": 29.7637100182
    }
  },
  "09013d2b-7512-403e-86d4-262109939037": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 237а",
      "id": "09013d2b-7512-403e-86d4-262109939037",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09013d2b-7512-403e-86d4-262109939037",
    "image": "perev_left",
    "point": {
      "latitude": 52.0794934356,
      "longitude": 28.3773605192
    }
  },
  "090241e8-381b-4200-8c3d-aa83c349e0a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 315",
      "id": "090241e8-381b-4200-8c3d-aa83c349e0a7",
      "kilometrage": 315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "090241e8-381b-4200-8c3d-aa83c349e0a7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0859156034,
      "longitude": 28.1400419951
    }
  },
  "0939bc34-88e8-4ed9-bf14-89f6160fdf80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0939bc34-88e8-4ed9-bf14-89f6160fdf80",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0939bc34-88e8-4ed9-bf14-89f6160fdf80",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0961962951,
      "longitude": 29.17134957
    }
  },
  "093a5595-b31b-4645-a14b-18480bfdc03c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 335",
      "id": "093a5595-b31b-4645-a14b-18480bfdc03c",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "093a5595-b31b-4645-a14b-18480bfdc03c",
    "image": "perev_right",
    "point": {
      "latitude": 52.0858437566,
      "longitude": 27.724177013
    }
  },
  "09536755-90e0-4f07-8aab-fdb6a06cafbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "09536755-90e0-4f07-8aab-fdb6a06cafbf",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09536755-90e0-4f07-8aab-fdb6a06cafbf",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5526692035,
      "longitude": 29.8465825894
    }
  },
  "096b21f8-696c-4f03-a5f0-0033002c037e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 170",
      "id": "096b21f8-696c-4f03-a5f0-0033002c037e",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "096b21f8-696c-4f03-a5f0-0033002c037e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1351180909,
      "longitude": 28.8497516126
    }
  },
  "0986cac5-5af1-4a1c-a9ad-52d96abe4ce8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0986cac5-5af1-4a1c-a9ad-52d96abe4ce8",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0986cac5-5af1-4a1c-a9ad-52d96abe4ce8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1132377334,
      "longitude": 29.1617679922
    }
  },
  "0a327e6c-3247-4401-8be6-965cb55eae2c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 258",
      "id": "0a327e6c-3247-4401-8be6-965cb55eae2c",
      "kilometrage": 305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a327e6c-3247-4401-8be6-965cb55eae2c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1053305778,
      "longitude": 28.2289152153
    }
  },
  "0a83702f-34be-4323-acd1-404b2d7a3fff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "0a83702f-34be-4323-acd1-404b2d7a3fff",
      "kilometrage": 379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a83702f-34be-4323-acd1-404b2d7a3fff",
    "image": "buyo_left",
    "point": {
      "latitude": 52.112480124,
      "longitude": 27.5598067682
    }
  },
  "0a94011c-17e3-45f3-89be-21c97b0890de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 245",
      "id": "0a94011c-17e3-45f3-89be-21c97b0890de",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a94011c-17e3-45f3-89be-21c97b0890de",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1187921552,
      "longitude": 28.7551880647
    }
  },
  "0ad59db3-95ce-43b2-9214-a4438f1a07f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "0ad59db3-95ce-43b2-9214-a4438f1a07f3",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ad59db3-95ce-43b2-9214-a4438f1a07f3",
    "image": "perev_left",
    "point": {
      "latitude": 51.5804740354,
      "longitude": 29.8475701045
    }
  },
  "0b8538a1-4d11-4467-8075-54680c66ee11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0b8538a1-4d11-4467-8075-54680c66ee11",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b8538a1-4d11-4467-8075-54680c66ee11",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1096314097,
      "longitude": 28.5215947576
    }
  },
  "0bc776a4-d187-425d-bb4c-ce986aa96413": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 121",
      "id": "0bc776a4-d187-425d-bb4c-ce986aa96413",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bc776a4-d187-425d-bb4c-ce986aa96413",
    "image": "buyo_right",
    "point": {
      "latitude": 51.94513679,
      "longitude": 29.4712426176
    }
  },
  "0bd14716-5dd3-47cd-a20e-d7b63f8224c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 148",
      "id": "0bd14716-5dd3-47cd-a20e-d7b63f8224c9",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bd14716-5dd3-47cd-a20e-d7b63f8224c9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0395749469,
      "longitude": 29.2939306494
    }
  },
  "0bd3f965-8c0b-4fe2-aa50-069e9e918f4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "0bd3f965-8c0b-4fe2-aa50-069e9e918f4e",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bd3f965-8c0b-4fe2-aa50-069e9e918f4e",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9560087418,
      "longitude": 29.4382027085
    }
  },
  "0bd60336-7c07-45f3-be70-a3779ecdb603": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 66",
      "id": "0bd60336-7c07-45f3-be70-a3779ecdb603",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bd60336-7c07-45f3-be70-a3779ecdb603",
    "image": "perev_left",
    "point": {
      "latitude": 51.7304122284,
      "longitude": 29.68352081
    }
  },
  "0c8c4fae-9ca1-4366-8799-6151a3ff4f98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "0c8c4fae-9ca1-4366-8799-6151a3ff4f98",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c8c4fae-9ca1-4366-8799-6151a3ff4f98",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7349515893,
      "longitude": 29.6899609818
    }
  },
  "0ca1a8a2-d37b-4344-a066-f33a684aa4b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 327",
      "id": "0ca1a8a2-d37b-4344-a066-f33a684aa4b6",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ca1a8a2-d37b-4344-a066-f33a684aa4b6",
    "image": "perev_left",
    "point": {
      "latitude": 52.0877552417,
      "longitude": 27.76771222
    }
  },
  "0cf90ead-615b-4aa8-b64c-dbf624b88af3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 105а",
      "id": "0cf90ead-615b-4aa8-b64c-dbf624b88af3",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0cf90ead-615b-4aa8-b64c-dbf624b88af3",
    "image": "perev_right",
    "point": {
      "latitude": 51.8833703304,
      "longitude": 29.480325853
    }
  },
  "0d2bc0fb-acd5-40a8-8fee-5e26f02f8840": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "0d2bc0fb-acd5-40a8-8fee-5e26f02f8840",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d2bc0fb-acd5-40a8-8fee-5e26f02f8840",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.088711372,
      "longitude": 28.3132156055
    }
  },
  "0d39dd4c-41c1-4839-8411-41869adee40f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 153",
      "id": "0d39dd4c-41c1-4839-8411-41869adee40f",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d39dd4c-41c1-4839-8411-41869adee40f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1265627515,
      "longitude": 28.9598801173
    }
  },
  "0d72c8a1-5fae-43a4-a07e-af01280eb8d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3",
      "id": "0d72c8a1-5fae-43a4-a07e-af01280eb8d7",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d72c8a1-5fae-43a4-a07e-af01280eb8d7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.4730059128,
      "longitude": 29.9705387815
    }
  },
  "0edb71ce-f87a-4b2a-b335-7b17e643d132": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "0edb71ce-f87a-4b2a-b335-7b17e643d132",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0edb71ce-f87a-4b2a-b335-7b17e643d132",
    "image": "perev_right",
    "point": {
      "latitude": 51.6831960832,
      "longitude": 29.687933886
    }
  },
  "0f45b6f6-39fc-4b38-b14e-ad7b5261f47a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 6",
      "id": "0f45b6f6-39fc-4b38-b14e-ad7b5261f47a",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f45b6f6-39fc-4b38-b14e-ad7b5261f47a",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.4809380076,
      "longitude": 29.9455365468
    }
  },
  "0f680073-84d6-435c-acf8-02bf388d9b0e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "0f680073-84d6-435c-acf8-02bf388d9b0e",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f680073-84d6-435c-acf8-02bf388d9b0e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1297258253,
      "longitude": 28.8353358771
    }
  },
  "0f6bfe25-e849-40e2-849e-a0310351d21b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "0f6bfe25-e849-40e2-849e-a0310351d21b",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f6bfe25-e849-40e2-849e-a0310351d21b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0866042692,
      "longitude": 29.2021662782
    }
  },
  "0fa1f2dc-9ded-4d38-8613-b717aafcc88b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 135",
      "id": "0fa1f2dc-9ded-4d38-8613-b717aafcc88b",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fa1f2dc-9ded-4d38-8613-b717aafcc88b",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7768446463,
      "longitude": 29.5751760095
    }
  },
  "0fa20af1-a541-4ccc-bb0a-f3b57c688914": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "0fa20af1-a541-4ccc-bb0a-f3b57c688914",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fa20af1-a541-4ccc-bb0a-f3b57c688914",
    "image": "perev_right",
    "point": {
      "latitude": 51.7012262695,
      "longitude": 29.6869988983
    }
  },
  "0fa617b5-dad4-4828-b89b-7baae556d749": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 315",
      "id": "0fa617b5-dad4-4828-b89b-7baae556d749",
      "kilometrage": 344,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fa617b5-dad4-4828-b89b-7baae556d749",
    "image": "perev_left",
    "point": {
      "latitude": 52.0685431239,
      "longitude": 27.8826380974
    }
  },
  "0fac0d9d-d941-47dd-b582-637da70f256d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "0fac0d9d-d941-47dd-b582-637da70f256d",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fac0d9d-d941-47dd-b582-637da70f256d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0877462372,
      "longitude": 28.3848359422
    }
  },
  "0ff1ad7f-87ed-4a55-bc22-b8d7d99b7bdf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 257",
      "id": "0ff1ad7f-87ed-4a55-bc22-b8d7d99b7bdf",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ff1ad7f-87ed-4a55-bc22-b8d7d99b7bdf",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0860676573,
      "longitude": 28.314864442
    }
  },
  "1074bcc7-7b9b-4f3a-b655-0ec71ea193ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 208",
      "id": "1074bcc7-7b9b-4f3a-b655-0ec71ea193ef",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1074bcc7-7b9b-4f3a-b655-0ec71ea193ef",
    "image": "perev_right",
    "point": {
      "latitude": 52.1347633512,
      "longitude": 28.6094058281
    }
  },
  "10d49634-70a3-40b5-a171-859cfd75e6d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "10d49634-70a3-40b5-a171-859cfd75e6d1",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10d49634-70a3-40b5-a171-859cfd75e6d1",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0476832486,
      "longitude": 29.2774701335
    }
  },
  "11106907-a1a5-4e34-b3a7-efbb2bac7f2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "11106907-a1a5-4e34-b3a7-efbb2bac7f2b",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11106907-a1a5-4e34-b3a7-efbb2bac7f2b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1165975274,
      "longitude": 28.7889960177
    }
  },
  "11295445-cb11-4fbc-8dfc-b8b8e4efd0a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 160",
      "id": "11295445-cb11-4fbc-8dfc-b8b8e4efd0a9",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11295445-cb11-4fbc-8dfc-b8b8e4efd0a9",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8998405287,
      "longitude": 29.4869421248
    }
  },
  "1129cbf3-f61f-4a7a-a528-8ee34136aa66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "1129cbf3-f61f-4a7a-a528-8ee34136aa66",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1129cbf3-f61f-4a7a-a528-8ee34136aa66",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7459403834,
      "longitude": 29.6955408347
    }
  },
  "11535395-e598-4e10-a822-95ba3639e9bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 254",
      "id": "11535395-e598-4e10-a822-95ba3639e9bd",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11535395-e598-4e10-a822-95ba3639e9bd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0711741194,
      "longitude": 28.3399092843
    }
  },
  "116463f9-fa46-46e2-8953-7a2e4434fd15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "116463f9-fa46-46e2-8953-7a2e4434fd15",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "116463f9-fa46-46e2-8953-7a2e4434fd15",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1320785155,
      "longitude": 28.5761663462
    }
  },
  "118899a8-633b-43b3-bfa8-7bc722e9aee2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "118899a8-633b-43b3-bfa8-7bc722e9aee2",
      "kilometrage": 388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "118899a8-633b-43b3-bfa8-7bc722e9aee2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1284934769,
      "longitude": 27.516760975
    }
  },
  "12628411-b4b6-4b5a-81de-1540c2198333": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "12628411-b4b6-4b5a-81de-1540c2198333",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12628411-b4b6-4b5a-81de-1540c2198333",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0689293188,
      "longitude": 28.343538699
    }
  },
  "1291177e-7d5c-4c0a-8ddd-7b21e747cd42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "1291177e-7d5c-4c0a-8ddd-7b21e747cd42",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1291177e-7d5c-4c0a-8ddd-7b21e747cd42",
    "image": "main_way",
    "point": {
      "latitude": 52.0828818565,
      "longitude": 27.7302718774
    }
  },
  "133a2d49-4c51-4c0a-921b-7e99e2b87ff0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "133a2d49-4c51-4c0a-921b-7e99e2b87ff0",
      "kilometrage": 349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "133a2d49-4c51-4c0a-921b-7e99e2b87ff0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0809627309,
      "longitude": 27.8216859746
    }
  },
  "1394faf4-cc34-4f91-89d3-c8a1bd74d5b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 198",
      "id": "1394faf4-cc34-4f91-89d3-c8a1bd74d5b4",
      "kilometrage": 224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1394faf4-cc34-4f91-89d3-c8a1bd74d5b4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1384039083,
      "longitude": 28.9120715342
    }
  },
  "13a5b232-59ae-444c-95ce-1f24f8d88153": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "13a5b232-59ae-444c-95ce-1f24f8d88153",
      "kilometrage": 350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13a5b232-59ae-444c-95ce-1f24f8d88153",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0833022152,
      "longitude": 27.8053467415
    }
  },
  "13ce1760-f525-4e08-bff7-198cca405949": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "13ce1760-f525-4e08-bff7-198cca405949",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13ce1760-f525-4e08-bff7-198cca405949",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0446699736,
      "longitude": 29.2902232335
    }
  },
  "1445d45f-6782-4618-933b-230fa6cb6f14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "1445d45f-6782-4618-933b-230fa6cb6f14",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1445d45f-6782-4618-933b-230fa6cb6f14",
    "image": "buyo_right",
    "point": {
      "latitude": 52.128399737,
      "longitude": 28.9818084448
    }
  },
  "14648ac6-7f06-48b1-a99e-fbee5d4181ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 81",
      "id": "14648ac6-7f06-48b1-a99e-fbee5d4181ce",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14648ac6-7f06-48b1-a99e-fbee5d4181ce",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7615701339,
      "longitude": 29.5825528109
    }
  },
  "1469e6af-047a-40ad-8d3c-bcfd82d8ecee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 352",
      "id": "1469e6af-047a-40ad-8d3c-bcfd82d8ecee",
      "kilometrage": 370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1469e6af-047a-40ad-8d3c-bcfd82d8ecee",
    "image": "perev_right",
    "point": {
      "latitude": 52.0961460725,
      "longitude": 27.6325569785
    }
  },
  "146b6209-2e2e-43b0-a122-199fee62016a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "146b6209-2e2e-43b0-a122-199fee62016a",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "146b6209-2e2e-43b0-a122-199fee62016a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9801018308,
      "longitude": 29.3747482299
    }
  },
  "14d43e46-dff7-44db-a815-75fa691b75de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "14d43e46-dff7-44db-a815-75fa691b75de",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14d43e46-dff7-44db-a815-75fa691b75de",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1412766753,
      "longitude": 28.8814685162
    }
  },
  "14da8258-f2ca-444a-9f8b-52f26ba74d0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 307",
      "id": "14da8258-f2ca-444a-9f8b-52f26ba74d0b",
      "kilometrage": 338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14da8258-f2ca-444a-9f8b-52f26ba74d0b",
    "image": "perev_right",
    "point": {
      "latitude": 52.0657586805,
      "longitude": 27.9394022224
    }
  },
  "1533b1d1-1fc5-4965-9a30-fe933c470e4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1533b1d1-1fc5-4965-9a30-fe933c470e4d",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1533b1d1-1fc5-4965-9a30-fe933c470e4d",
    "image": "name_of",
    "point": {
      "latitude": 52.1575001131,
      "longitude": 27.3501889107
    }
  },
  "15447e5b-4232-4a66-8e1c-a482d134251c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "15447e5b-4232-4a66-8e1c-a482d134251c",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15447e5b-4232-4a66-8e1c-a482d134251c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1121041741,
      "longitude": 29.1593858105
    }
  },
  "15a6c045-4071-42f2-a294-1b8ce5a0c7b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 210",
      "id": "15a6c045-4071-42f2-a294-1b8ce5a0c7b4",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15a6c045-4071-42f2-a294-1b8ce5a0c7b4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.104539472,
      "longitude": 28.760652889
    }
  },
  "15b3182b-c31e-4499-a2ca-ff13e9f61044": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 46",
      "id": "15b3182b-c31e-4499-a2ca-ff13e9f61044",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15b3182b-c31e-4499-a2ca-ff13e9f61044",
    "image": "perev_left",
    "point": {
      "latitude": 51.6360148788,
      "longitude": 29.7773168063
    }
  },
  "15b8b9dc-0a41-4fc5-855c-5cbf38900b7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 266",
      "id": "15b8b9dc-0a41-4fc5-855c-5cbf38900b7d",
      "kilometrage": 311,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15b8b9dc-0a41-4fc5-855c-5cbf38900b7d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1018640191,
      "longitude": 28.1743239296
    }
  },
  "15e2c5c8-42cd-414c-b2b2-ac5e82d3228a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 186",
      "id": "15e2c5c8-42cd-414c-b2b2-ac5e82d3228a",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15e2c5c8-42cd-414c-b2b2-ac5e82d3228a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1125614995,
      "longitude": 28.7615355431
    }
  },
  "161f1548-ffd5-42fc-802d-d1bc09f29ab2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 330",
      "id": "161f1548-ffd5-42fc-802d-d1bc09f29ab2",
      "kilometrage": 330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "161f1548-ffd5-42fc-802d-d1bc09f29ab2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0621172285,
      "longitude": 28.0031858808
    }
  },
  "16d7fd1c-c66e-4263-b6aa-613bd8fa597a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 165",
      "id": "16d7fd1c-c66e-4263-b6aa-613bd8fa597a",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16d7fd1c-c66e-4263-b6aa-613bd8fa597a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.076794833,
      "longitude": 29.211156028
    }
  },
  "16da8a65-ed11-4585-ab99-f82ac169126b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 54а",
      "id": "16da8a65-ed11-4585-ab99-f82ac169126b",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16da8a65-ed11-4585-ab99-f82ac169126b",
    "image": "buyo_left",
    "point": {
      "latitude": 51.673032294,
      "longitude": 29.6962902024
    }
  },
  "16e66837-4e7c-480d-a4a0-f0b012138975": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "16e66837-4e7c-480d-a4a0-f0b012138975",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16e66837-4e7c-480d-a4a0-f0b012138975",
    "image": "perev_right",
    "point": {
      "latitude": 51.532426296,
      "longitude": 29.8633259115
    }
  },
  "170f0303-ea0e-4f96-a352-9ef7f3d7c3a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 230",
      "id": "170f0303-ea0e-4f96-a352-9ef7f3d7c3a9",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "170f0303-ea0e-4f96-a352-9ef7f3d7c3a9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1459724001,
      "longitude": 28.8694605949
    }
  },
  "172ca187-86a7-4207-9e3b-dd515a22a546": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 207",
      "id": "172ca187-86a7-4207-9e3b-dd515a22a546",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "172ca187-86a7-4207-9e3b-dd515a22a546",
    "image": "buyo_left",
    "point": {
      "latitude": 52.12623025,
      "longitude": 28.817622861
    }
  },
  "172d3792-30a7-4462-af54-2775262bc604": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 368",
      "id": "172d3792-30a7-4462-af54-2775262bc604",
      "kilometrage": 379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "172d3792-30a7-4462-af54-2775262bc604",
    "image": "perev_left",
    "point": {
      "latitude": 52.1176975452,
      "longitude": 27.5581727381
    }
  },
  "174fd179-6a0a-45a1-bd58-88c26c35a1db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 321",
      "id": "174fd179-6a0a-45a1-bd58-88c26c35a1db",
      "kilometrage": 347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "174fd179-6a0a-45a1-bd58-88c26c35a1db",
    "image": "perev_right",
    "point": {
      "latitude": 52.0789072414,
      "longitude": 27.8480906868
    }
  },
  "17631c34-821f-432d-9a67-a4eb57a921ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 27",
      "id": "17631c34-821f-432d-9a67-a4eb57a921ba",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17631c34-821f-432d-9a67-a4eb57a921ba",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5750811975,
      "longitude": 29.8276491144
    }
  },
  "1811878b-6de1-479e-bb78-fa53a2bb1990": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 212",
      "id": "1811878b-6de1-479e-bb78-fa53a2bb1990",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1811878b-6de1-479e-bb78-fa53a2bb1990",
    "image": "perev_left",
    "point": {
      "latitude": 52.1311063959,
      "longitude": 28.566933722
    }
  },
  "1854a70c-e310-4e66-9613-2a8b4ea88055": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 152",
      "id": "1854a70c-e310-4e66-9613-2a8b4ea88055",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1854a70c-e310-4e66-9613-2a8b4ea88055",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0539738579,
      "longitude": 29.2615474618
    }
  },
  "19203786-b6c1-45e8-ae28-ad0c4db8e590": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 375",
      "id": "19203786-b6c1-45e8-ae28-ad0c4db8e590",
      "kilometrage": 375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19203786-b6c1-45e8-ae28-ad0c4db8e590",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1138171297,
      "longitude": 27.5945664454
    }
  },
  "1925a45c-7ad9-4c1f-baf1-48ce9980313e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1925a45c-7ad9-4c1f-baf1-48ce9980313e",
      "kilometrage": 386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1925a45c-7ad9-4c1f-baf1-48ce9980313e",
    "image": "name_of",
    "point": {
      "latitude": 52.1379727929,
      "longitude": 27.5255889233
    }
  },
  "1993b81a-8ce5-4b99-ad91-ee8c8dfead1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 235",
      "id": "1993b81a-8ce5-4b99-ad91-ee8c8dfead1e",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1993b81a-8ce5-4b99-ad91-ee8c8dfead1e",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1222769675,
      "longitude": 28.8367687091
    }
  },
  "19b498de-6274-431d-b869-afab50c3a533": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "19b498de-6274-431d-b869-afab50c3a533",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19b498de-6274-431d-b869-afab50c3a533",
    "image": "buyo_left",
    "point": {
      "latitude": 52.083943412,
      "longitude": 27.7678932265
    }
  },
  "19d98be8-6de3-4d18-9075-778d093cb8c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 275",
      "id": "19d98be8-6de3-4d18-9075-778d093cb8c3",
      "kilometrage": 319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19d98be8-6de3-4d18-9075-778d093cb8c3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0753143064,
      "longitude": 28.0998654337
    }
  },
  "19e8314f-01eb-48ee-b66e-776b10a7a44d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 212а",
      "id": "19e8314f-01eb-48ee-b66e-776b10a7a44d",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19e8314f-01eb-48ee-b66e-776b10a7a44d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1280822021,
      "longitude": 28.5659622632
    }
  },
  "1ae46bf9-d95d-407d-b6c7-ca3179e4198e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 59",
      "id": "1ae46bf9-d95d-407d-b6c7-ca3179e4198e",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ae46bf9-d95d-407d-b6c7-ca3179e4198e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7028602973,
      "longitude": 29.6846706183
    }
  },
  "1aff0a2d-6207-4b20-93dd-d5daf78d5c1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "1aff0a2d-6207-4b20-93dd-d5daf78d5c1e",
      "kilometrage": 362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1aff0a2d-6207-4b20-93dd-d5daf78d5c1e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1062550102,
      "longitude": 27.6906701585
    }
  },
  "1b3eabb1-4784-40eb-8c88-0c81ddcecda1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 262",
      "id": "1b3eabb1-4784-40eb-8c88-0c81ddcecda1",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b3eabb1-4784-40eb-8c88-0c81ddcecda1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1033656941,
      "longitude": 28.2455170709
    }
  },
  "1b456b52-a653-410f-9362-aff7a69bb92b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "1b456b52-a653-410f-9362-aff7a69bb92b",
      "kilometrage": 357,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b456b52-a653-410f-9362-aff7a69bb92b",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0845841452,
      "longitude": 27.7452040626
    }
  },
  "1b4f7f61-ef0a-48d9-aaa4-83b1a4d485a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение стоянки судов на якоре или на швартовых у берега  ",
      "id": "1b4f7f61-ef0a-48d9-aaa4-83b1a4d485a7",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b4f7f61-ef0a-48d9-aaa4-83b1a4d485a7",
    "image": "parking_forbidden",
    "point": {
      "latitude": 52.080230391,
      "longitude": 29.2040754918
    }
  },
  "1b8e54f6-ef8e-4ced-9ad4-65600af8fe0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 333",
      "id": "1b8e54f6-ef8e-4ced-9ad4-65600af8fe0b",
      "kilometrage": 357,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b8e54f6-ef8e-4ced-9ad4-65600af8fe0b",
    "image": "perev_left",
    "point": {
      "latitude": 52.0859107913,
      "longitude": 27.7447161601
    }
  },
  "1b8e700c-2c84-40fa-89fd-e850a0dfe028": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1b8e700c-2c84-40fa-89fd-e850a0dfe028",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b8e700c-2c84-40fa-89fd-e850a0dfe028",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0529541486,
      "longitude": 29.2587688186
    }
  },
  "1c0b203c-56a9-4dc5-9a2d-2677fee8ceaf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 190",
      "id": "1c0b203c-56a9-4dc5-9a2d-2677fee8ceaf",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c0b203c-56a9-4dc5-9a2d-2677fee8ceaf",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0688383227,
      "longitude": 29.2386079219
    }
  },
  "1c41c7c3-23e4-44b4-a839-a17ce1477519": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "1c41c7c3-23e4-44b4-a839-a17ce1477519",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c41c7c3-23e4-44b4-a839-a17ce1477519",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9502079755,
      "longitude": 29.465405166
    }
  },
  "1c4a89fe-b350-4015-a53b-88a90a2b4d62": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 179",
      "id": "1c4a89fe-b350-4015-a53b-88a90a2b4d62",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c4a89fe-b350-4015-a53b-88a90a2b4d62",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1181442683,
      "longitude": 29.1275279509
    }
  },
  "1c5642a0-e4ee-4dca-9b51-13284c403302": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 126",
      "id": "1c5642a0-e4ee-4dca-9b51-13284c403302",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c5642a0-e4ee-4dca-9b51-13284c403302",
    "image": "buyo_right",
    "point": {
      "latitude": 51.962753459,
      "longitude": 29.4109354066
    }
  },
  "1ca6fbf7-a013-4150-82c7-713c537c8ca8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 5",
      "id": "1ca6fbf7-a013-4150-82c7-713c537c8ca8",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ca6fbf7-a013-4150-82c7-713c537c8ca8",
    "image": "buyo_left",
    "point": {
      "latitude": 51.4899015959,
      "longitude": 29.9553187835
    }
  },
  "1caa7e6e-ff41-460b-a2af-e9756daf8fb7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 242",
      "id": "1caa7e6e-ff41-460b-a2af-e9756daf8fb7",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1caa7e6e-ff41-460b-a2af-e9756daf8fb7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1011107121,
      "longitude": 28.4159080867
    }
  },
  "1cb40c95-6a1d-4326-b249-7dfc27bc0571": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "1cb40c95-6a1d-4326-b249-7dfc27bc0571",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cb40c95-6a1d-4326-b249-7dfc27bc0571",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1353571636,
      "longitude": 28.6521930357
    }
  },
  "1cf8a6e6-1a65-4e1e-835c-a3cf240056b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1cf8a6e6-1a65-4e1e-835c-a3cf240056b6",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cf8a6e6-1a65-4e1e-835c-a3cf240056b6",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0455904612,
      "longitude": 29.282980665
    }
  },
  "1d0b0b57-e982-45bb-bd2c-ef376fbb5aec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 407",
      "id": "1d0b0b57-e982-45bb-bd2c-ef376fbb5aec",
      "kilometrage": 403,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d0b0b57-e982-45bb-bd2c-ef376fbb5aec",
    "image": "perev_left",
    "point": {
      "latitude": 52.1455640793,
      "longitude": 27.3949810729
    }
  },
  "1d8251d8-1190-489d-b37f-67438561f095": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 51а",
      "id": "1d8251d8-1190-489d-b37f-67438561f095",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d8251d8-1190-489d-b37f-67438561f095",
    "image": "perev_right",
    "point": {
      "latitude": 51.6554601693,
      "longitude": 29.7193225971
    }
  },
  "1da6091c-f6e8-4af7-8a05-cac9f417b475": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 213",
      "id": "1da6091c-f6e8-4af7-8a05-cac9f417b475",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1da6091c-f6e8-4af7-8a05-cac9f417b475",
    "image": "perev_left",
    "point": {
      "latitude": 52.1210429974,
      "longitude": 28.5581716458
    }
  },
  "1da88b05-e1a3-4577-bfb9-d0d738264871": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 95",
      "id": "1da88b05-e1a3-4577-bfb9-d0d738264871",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1da88b05-e1a3-4577-bfb9-d0d738264871",
    "image": "kilometrage",
    "point": {
      "latitude": 51.60975506,
      "longitude": 29.8126492935
    }
  },
  "1e067b93-d210-40aa-b297-e99499bd5fec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "1e067b93-d210-40aa-b297-e99499bd5fec",
      "kilometrage": 311,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e067b93-d210-40aa-b297-e99499bd5fec",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0981648364,
      "longitude": 28.1722254045
    }
  },
  "1e12c6c1-48f9-4737-866d-a23a4ffaf942": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "1e12c6c1-48f9-4737-866d-a23a4ffaf942",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e12c6c1-48f9-4737-866d-a23a4ffaf942",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1184242868,
      "longitude": 28.844714086
    }
  },
  "1f4520d7-1abe-484f-b794-8c2307fed976": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 185",
      "id": "1f4520d7-1abe-484f-b794-8c2307fed976",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f4520d7-1abe-484f-b794-8c2307fed976",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1161301815,
      "longitude": 29.0382137491
    }
  },
  "1f59347d-cf26-4443-984e-e41f19dee3ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 83",
      "id": "1f59347d-cf26-4443-984e-e41f19dee3ec",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f59347d-cf26-4443-984e-e41f19dee3ec",
    "image": "perev_right",
    "point": {
      "latitude": 51.7764291262,
      "longitude": 29.5709813869
    }
  },
  "1f9d66e2-0dfe-4210-9c38-866778ccd5b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 245",
      "id": "1f9d66e2-0dfe-4210-9c38-866778ccd5b0",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f9d66e2-0dfe-4210-9c38-866778ccd5b0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0886991829,
      "longitude": 28.3949297891
    }
  },
  "1fc2f6ed-7ae1-466f-9b88-356168c961fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 170",
      "id": "1fc2f6ed-7ae1-466f-9b88-356168c961fc",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fc2f6ed-7ae1-466f-9b88-356168c961fc",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9575593846,
      "longitude": 29.4339215453
    }
  },
  "1ffbb205-64e4-4500-97fb-7d4aec18bd06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 296",
      "id": "1ffbb205-64e4-4500-97fb-7d4aec18bd06",
      "kilometrage": 332,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ffbb205-64e4-4500-97fb-7d4aec18bd06",
    "image": "perev_left",
    "point": {
      "latitude": 52.075103974,
      "longitude": 27.996317985
    }
  },
  "20680851-5d65-41eb-a331-758c757715d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "20680851-5d65-41eb-a331-758c757715d5",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20680851-5d65-41eb-a331-758c757715d5",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0878448348,
      "longitude": 27.7797709211
    }
  },
  "2075eb92-645f-4dee-98bc-dd57cb31fba5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 196",
      "id": "2075eb92-645f-4dee-98bc-dd57cb31fba5",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2075eb92-645f-4dee-98bc-dd57cb31fba5",
    "image": "perev_right",
    "point": {
      "latitude": 52.1313753937,
      "longitude": 28.6875944146
    }
  },
  "209f3379-fef2-466a-9c60-3699e51e313e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "209f3379-fef2-466a-9c60-3699e51e313e",
      "kilometrage": 342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "209f3379-fef2-466a-9c60-3699e51e313e",
    "image": "name_of",
    "point": {
      "latitude": 52.0596037442,
      "longitude": 27.9036166883
    }
  },
  "20c4948a-9c89-484c-81ba-c3689aa633a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "20c4948a-9c89-484c-81ba-c3689aa633a1",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20c4948a-9c89-484c-81ba-c3689aa633a1",
    "image": "attention",
    "point": {
      "latitude": 52.1182099768,
      "longitude": 28.4978676274
    }
  },
  "20cf610c-7877-4dcb-a3c9-d80fd01065a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 406",
      "id": "20cf610c-7877-4dcb-a3c9-d80fd01065a4",
      "kilometrage": 402,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20cf610c-7877-4dcb-a3c9-d80fd01065a4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1470609896,
      "longitude": 27.4035282633
    }
  },
  "20d67350-6aff-40af-bee3-6818a37d425d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 26",
      "id": "20d67350-6aff-40af-bee3-6818a37d425d",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20d67350-6aff-40af-bee3-6818a37d425d",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5667596707,
      "longitude": 29.8239052151
    }
  },
  "21045822-3977-4fce-a66e-fd6668cce919": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "21045822-3977-4fce-a66e-fd6668cce919",
      "kilometrage": 347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21045822-3977-4fce-a66e-fd6668cce919",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0796564961,
      "longitude": 27.8495836294
    }
  },
  "2186fb46-a065-4d25-843e-66b06aaa48f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 337",
      "id": "2186fb46-a065-4d25-843e-66b06aaa48f1",
      "kilometrage": 360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2186fb46-a065-4d25-843e-66b06aaa48f1",
    "image": "perev_right",
    "point": {
      "latitude": 52.0916957626,
      "longitude": 27.7019567891
    }
  },
  "21cf5157-41f1-4355-b3b4-b84859edc4df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "21cf5157-41f1-4355-b3b4-b84859edc4df",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21cf5157-41f1-4355-b3b4-b84859edc4df",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0735785173,
      "longitude": 29.2220099503
    }
  },
  "22038786-8ffc-4c57-b349-6f5898bb13d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "22038786-8ffc-4c57-b349-6f5898bb13d5",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22038786-8ffc-4c57-b349-6f5898bb13d5",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.952982499,
      "longitude": 29.4488034242
    }
  },
  "221a3af2-57e6-4711-b9fd-5f3a5d2214af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 150",
      "id": "221a3af2-57e6-4711-b9fd-5f3a5d2214af",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "221a3af2-57e6-4711-b9fd-5f3a5d2214af",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8343930717,
      "longitude": 29.5192005748
    }
  },
  "223247f0-9c1d-441e-bc68-c52d971e9a51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 168",
      "id": "223247f0-9c1d-441e-bc68-c52d971e9a51",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "223247f0-9c1d-441e-bc68-c52d971e9a51",
    "image": "perev_left",
    "point": {
      "latitude": 52.1480923897,
      "longitude": 28.8700405779
    }
  },
  "225ec0c0-f78e-4053-826c-4d16695471fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "225ec0c0-f78e-4053-826c-4d16695471fd",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "225ec0c0-f78e-4053-826c-4d16695471fd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0811325969,
      "longitude": 27.7304770423
    }
  },
  "228a1192-0afd-4de6-a129-0ecc531c471e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 106",
      "id": "228a1192-0afd-4de6-a129-0ecc531c471e",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "228a1192-0afd-4de6-a129-0ecc531c471e",
    "image": "perev_right",
    "point": {
      "latitude": 51.8900042293,
      "longitude": 29.4768699749
    }
  },
  "22a24a7a-e6be-4796-8691-c25a33334a8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 164",
      "id": "22a24a7a-e6be-4796-8691-c25a33334a8a",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22a24a7a-e6be-4796-8691-c25a33334a8a",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1293487607,
      "longitude": 28.8765684744
    }
  },
  "2321e5e5-5d6f-4559-b7c3-25941ce1f32c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "2321e5e5-5d6f-4559-b7c3-25941ce1f32c",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2321e5e5-5d6f-4559-b7c3-25941ce1f32c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6505508436,
      "longitude": 29.7273874257
    }
  },
  "234df695-fa75-4ffe-8bd0-0c62a9cf68d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 75",
      "id": "234df695-fa75-4ffe-8bd0-0c62a9cf68d3",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "234df695-fa75-4ffe-8bd0-0c62a9cf68d3",
    "image": "perev_left",
    "point": {
      "latitude": 51.7677365152,
      "longitude": 29.6730901272
    }
  },
  "23661c93-a73c-417e-a79d-fd5caab2a259": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 267",
      "id": "23661c93-a73c-417e-a79d-fd5caab2a259",
      "kilometrage": 311,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23661c93-a73c-417e-a79d-fd5caab2a259",
    "image": "perev_left",
    "point": {
      "latitude": 52.097287234,
      "longitude": 28.1709424173
    }
  },
  "23702049-9182-4ca6-8d6c-050672017e79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "23702049-9182-4ca6-8d6c-050672017e79",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23702049-9182-4ca6-8d6c-050672017e79",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1049467873,
      "longitude": 28.5043847132
    }
  },
  "2377e1b3-acb1-445b-931f-82f0d4f78fe4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 148",
      "id": "2377e1b3-acb1-445b-931f-82f0d4f78fe4",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2377e1b3-acb1-445b-931f-82f0d4f78fe4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1370624559,
      "longitude": 29.0004587575
    }
  },
  "23893ec1-9109-49bb-94e6-c223c9686cbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 134",
      "id": "23893ec1-9109-49bb-94e6-c223c9686cbd",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23893ec1-9109-49bb-94e6-c223c9686cbd",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9850816943,
      "longitude": 29.3694597726
    }
  },
  "23977d2d-d2f3-4a95-9c2b-af3796f8edcd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 209",
      "id": "23977d2d-d2f3-4a95-9c2b-af3796f8edcd",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23977d2d-d2f3-4a95-9c2b-af3796f8edcd",
    "image": "perev_left",
    "point": {
      "latitude": 52.1369036919,
      "longitude": 28.5999606485
    }
  },
  "23c39ff3-9216-4b04-b902-65a0fdfe6856": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 193а",
      "id": "23c39ff3-9216-4b04-b902-65a0fdfe6856",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23c39ff3-9216-4b04-b902-65a0fdfe6856",
    "image": "perev_left",
    "point": {
      "latitude": 52.1199992974,
      "longitude": 28.7153634111
    }
  },
  "240c7ede-051b-4563-afa3-884f3721822b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "240c7ede-051b-4563-afa3-884f3721822b",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "240c7ede-051b-4563-afa3-884f3721822b",
    "image": "bridge_low",
    "point": {
      "latitude": 52.025236999,
      "longitude": 29.3218893247
    }
  },
  "249ee9cb-1acb-437c-9154-d5236107c3ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 395",
      "id": "249ee9cb-1acb-437c-9154-d5236107c3ce",
      "kilometrage": 396,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "249ee9cb-1acb-437c-9154-d5236107c3ce",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1249821895,
      "longitude": 27.4494460738
    }
  },
  "24c989d3-4044-4d19-b03f-268b39caf60e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "24c989d3-4044-4d19-b03f-268b39caf60e",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24c989d3-4044-4d19-b03f-268b39caf60e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.108451626,
      "longitude": 28.5236624185
    }
  },
  "251d69cc-1646-4a3a-914c-ca8e6d4632d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 280",
      "id": "251d69cc-1646-4a3a-914c-ca8e6d4632d7",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "251d69cc-1646-4a3a-914c-ca8e6d4632d7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1022712531,
      "longitude": 28.4453382
    }
  },
  "25b3848c-acca-4de2-bb55-1113db5d0bc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 281",
      "id": "25b3848c-acca-4de2-bb55-1113db5d0bc4",
      "kilometrage": 321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25b3848c-acca-4de2-bb55-1113db5d0bc4",
    "image": "perev_right",
    "point": {
      "latitude": 52.0745377739,
      "longitude": 28.0800925971
    }
  },
  "25c06973-1db2-4609-a457-a5aa02c45bcb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 47",
      "id": "25c06973-1db2-4609-a457-a5aa02c45bcb",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25c06973-1db2-4609-a457-a5aa02c45bcb",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6389816493,
      "longitude": 29.745956751
    }
  },
  "267a094b-6863-4b6a-a259-7b2824e8a305": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 263",
      "id": "267a094b-6863-4b6a-a259-7b2824e8a305",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "267a094b-6863-4b6a-a259-7b2824e8a305",
    "image": "perev_left",
    "point": {
      "latitude": 52.1143205849,
      "longitude": 28.1870354927
    }
  },
  "26a10087-dee8-4da5-83df-de96501b8ff9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "26a10087-dee8-4da5-83df-de96501b8ff9",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26a10087-dee8-4da5-83df-de96501b8ff9",
    "image": "buyo_left",
    "point": {
      "latitude": 51.4874618943,
      "longitude": 29.9509998606
    }
  },
  "26c397d0-84d3-4133-9f7c-39120251b292": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 278",
      "id": "26c397d0-84d3-4133-9f7c-39120251b292",
      "kilometrage": 319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26c397d0-84d3-4133-9f7c-39120251b292",
    "image": "perev_left",
    "point": {
      "latitude": 52.077154574,
      "longitude": 28.1064697277
    }
  },
  "26fef343-c77a-415d-9b54-a36a93984d22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 317",
      "id": "26fef343-c77a-415d-9b54-a36a93984d22",
      "kilometrage": 385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26fef343-c77a-415d-9b54-a36a93984d22",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1325181709,
      "longitude": 27.5311657236
    }
  },
  "273e1a33-d35e-4d68-8061-1f161741f119": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 155",
      "id": "273e1a33-d35e-4d68-8061-1f161741f119",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "273e1a33-d35e-4d68-8061-1f161741f119",
    "image": "perev_left",
    "point": {
      "latitude": 52.1283404255,
      "longitude": 28.9385300432
    }
  },
  "2749df37-faf2-448d-9b8c-7a50f205ac81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "2749df37-faf2-448d-9b8c-7a50f205ac81",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2749df37-faf2-448d-9b8c-7a50f205ac81",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1384935789,
      "longitude": 28.8586687693
    }
  },
  "27746125-67db-4f16-a9b3-6c10bfbe5baf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "27746125-67db-4f16-a9b3-6c10bfbe5baf",
      "kilometrage": 343,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27746125-67db-4f16-a9b3-6c10bfbe5baf",
    "image": "buyo_left",
    "point": {
      "latitude": 52.062065203,
      "longitude": 27.9010256288
    }
  },
  "27be68c2-77b6-4842-a047-d101bc29933b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 254",
      "id": "27be68c2-77b6-4842-a047-d101bc29933b",
      "kilometrage": 302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27be68c2-77b6-4842-a047-d101bc29933b",
    "image": "perev_right",
    "point": {
      "latitude": 52.0994221998,
      "longitude": 28.2477455158
    }
  },
  "27e71932-80c6-4087-9813-b9988d4afeaf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 92",
      "id": "27e71932-80c6-4087-9813-b9988d4afeaf",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27e71932-80c6-4087-9813-b9988d4afeaf",
    "image": "perev_right",
    "point": {
      "latitude": 51.8094888591,
      "longitude": 29.4983909142
    }
  },
  "28204418-ba2c-4a79-88ac-4251ed37cf60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "28204418-ba2c-4a79-88ac-4251ed37cf60",
      "kilometrage": 364,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28204418-ba2c-4a79-88ac-4251ed37cf60",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1047009405,
      "longitude": 27.6742942392
    }
  },
  "28235291-4504-40f3-9865-b87eba343eec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "28235291-4504-40f3-9865-b87eba343eec",
      "kilometrage": 318,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28235291-4504-40f3-9865-b87eba343eec",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0717979677,
      "longitude": 28.1186783517
    }
  },
  "2892b7a1-64a7-48e1-91cb-48d67a60ab85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 139",
      "id": "2892b7a1-64a7-48e1-91cb-48d67a60ab85",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2892b7a1-64a7-48e1-91cb-48d67a60ab85",
    "image": "perev_left",
    "point": {
      "latitude": 52.120122022,
      "longitude": 29.0925176725
    }
  },
  "289722f0-924a-4ec9-81a1-3ae9979e754b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "289722f0-924a-4ec9-81a1-3ae9979e754b",
      "kilometrage": 349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "289722f0-924a-4ec9-81a1-3ae9979e754b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0808240018,
      "longitude": 27.8231654802
    }
  },
  "289ce808-d55d-4efa-b147-5d6d46895d7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 125",
      "id": "289ce808-d55d-4efa-b147-5d6d46895d7e",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "289ce808-d55d-4efa-b147-5d6d46895d7e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9603991666,
      "longitude": 29.4179706774
    }
  },
  "28bf58eb-8ef7-4392-9ec4-45cff28a0955": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 99",
      "id": "28bf58eb-8ef7-4392-9ec4-45cff28a0955",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28bf58eb-8ef7-4392-9ec4-45cff28a0955",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8169869621,
      "longitude": 29.5048268976
    }
  },
  "28d675bf-d1aa-48ce-8279-1b3b95e7ffa3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 260а",
      "id": "28d675bf-d1aa-48ce-8279-1b3b95e7ffa3",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28d675bf-d1aa-48ce-8279-1b3b95e7ffa3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1147003559,
      "longitude": 28.2092030393
    }
  },
  "28e2ba3b-af75-4455-bb62-b5021924fe85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 77",
      "id": "28e2ba3b-af75-4455-bb62-b5021924fe85",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28e2ba3b-af75-4455-bb62-b5021924fe85",
    "image": "buyo_left",
    "point": {
      "latitude": 51.768392264,
      "longitude": 29.6276253007
    }
  },
  "28f27e84-5a3e-452c-8d1e-14d873b4f833": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "28f27e84-5a3e-452c-8d1e-14d873b4f833",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28f27e84-5a3e-452c-8d1e-14d873b4f833",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1380452737,
      "longitude": 28.6480160522
    }
  },
  "28f43a39-b900-4b3f-b27f-1d5aecde762f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "28f43a39-b900-4b3f-b27f-1d5aecde762f",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28f43a39-b900-4b3f-b27f-1d5aecde762f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.082286333,
      "longitude": 29.2044306004
    }
  },
  "290413ed-44ed-4e1b-b751-5391178dbe68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 249",
      "id": "290413ed-44ed-4e1b-b751-5391178dbe68",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "290413ed-44ed-4e1b-b751-5391178dbe68",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0768869502,
      "longitude": 28.378501536
    }
  },
  "291b47aa-48ca-46fe-a41f-8fd06c1944f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 30а",
      "id": "291b47aa-48ca-46fe-a41f-8fd06c1944f4",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "291b47aa-48ca-46fe-a41f-8fd06c1944f4",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.5723390158,
      "longitude": 29.8222511727
    }
  },
  "2952e21b-af6b-4fde-9406-c7b368fa44f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "2952e21b-af6b-4fde-9406-c7b368fa44f0",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2952e21b-af6b-4fde-9406-c7b368fa44f0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1337172128,
      "longitude": 28.9045623231
    }
  },
  "29d0ee76-77ef-4474-8cb9-2413b912fb6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 409",
      "id": "29d0ee76-77ef-4474-8cb9-2413b912fb6f",
      "kilometrage": 404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29d0ee76-77ef-4474-8cb9-2413b912fb6f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1406130433,
      "longitude": 27.3873202389
    }
  },
  "29d2b2eb-2bed-4344-92ea-4c3fbf728806": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 157",
      "id": "29d2b2eb-2bed-4344-92ea-4c3fbf728806",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29d2b2eb-2bed-4344-92ea-4c3fbf728806",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1165859084,
      "longitude": 28.9181263062
    }
  },
  "29f0f5c1-d414-42b6-adae-ed40f6ec8cde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "29f0f5c1-d414-42b6-adae-ed40f6ec8cde",
      "kilometrage": 356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29f0f5c1-d414-42b6-adae-ed40f6ec8cde",
    "image": "name_of",
    "point": {
      "latitude": 52.0756810344,
      "longitude": 27.7511765561
    }
  },
  "29f84f9f-1d15-41b0-b1e3-8aaf3ef1d98e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 338",
      "id": "29f84f9f-1d15-41b0-b1e3-8aaf3ef1d98e",
      "kilometrage": 361,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29f84f9f-1d15-41b0-b1e3-8aaf3ef1d98e",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0946735202,
      "longitude": 27.6938147955
    }
  },
  "2a4b7136-19a9-4d94-a227-4356ba414f19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "2a4b7136-19a9-4d94-a227-4356ba414f19",
      "kilometrage": 397,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a4b7136-19a9-4d94-a227-4356ba414f19",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1242161734,
      "longitude": 27.4458316182
    }
  },
  "2a503c00-8213-4bae-83a9-f2aea23d61eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Общее запрещение плавания спортивных либо прогулочных судов  ",
      "id": "2a503c00-8213-4bae-83a9-f2aea23d61eb",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a503c00-8213-4bae-83a9-f2aea23d61eb",
    "image": "sport_forbidden",
    "point": {
      "latitude": 52.0302539588,
      "longitude": 29.3147075589
    }
  },
  "2a541363-a988-461b-a11b-8840455ec312": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "2a541363-a988-461b-a11b-8840455ec312",
      "kilometrage": 349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a541363-a988-461b-a11b-8840455ec312",
    "image": "buyo_left",
    "point": {
      "latitude": 52.080568812,
      "longitude": 27.8165311176
    }
  },
  "2a9e9446-8122-4546-b241-98def938e7ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 86",
      "id": "2a9e9446-8122-4546-b241-98def938e7ee",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a9e9446-8122-4546-b241-98def938e7ee",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.8000719422,
      "longitude": 29.5874501978
    }
  },
  "2aab780c-bd6f-46c5-8eeb-3c170b8f116f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 321а",
      "id": "2aab780c-bd6f-46c5-8eeb-3c170b8f116f",
      "kilometrage": 350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2aab780c-bd6f-46c5-8eeb-3c170b8f116f",
    "image": "perev_right",
    "point": {
      "latitude": 52.0807085638,
      "longitude": 27.8065955271
    }
  },
  "2acb4494-57fd-4dd5-9616-c1982566d404": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "2acb4494-57fd-4dd5-9616-c1982566d404",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2acb4494-57fd-4dd5-9616-c1982566d404",
    "image": "perev_right",
    "point": {
      "latitude": 51.8279716712,
      "longitude": 29.5056543251
    }
  },
  "2ad385cc-76b2-4759-9541-63bfb5ad243d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "2ad385cc-76b2-4759-9541-63bfb5ad243d",
      "kilometrage": 394,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ad385cc-76b2-4759-9541-63bfb5ad243d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1291068907,
      "longitude": 27.4627137368
    }
  },
  "2ae8f181-fc73-4e42-8a85-4ac37d7291e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 159",
      "id": "2ae8f181-fc73-4e42-8a85-4ac37d7291e3",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ae8f181-fc73-4e42-8a85-4ac37d7291e3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1326010627,
      "longitude": 28.9215885051
    }
  },
  "2aea714f-dcac-4d26-af42-77a663c428d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "2aea714f-dcac-4d26-af42-77a663c428d1",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2aea714f-dcac-4d26-af42-77a663c428d1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1065545581,
      "longitude": 28.1872408526
    }
  },
  "2af5b4ae-99cc-40ba-830f-329fa273d9f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 315",
      "id": "2af5b4ae-99cc-40ba-830f-329fa273d9f3",
      "kilometrage": 382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2af5b4ae-99cc-40ba-830f-329fa273d9f3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1287708049,
      "longitude": 27.5505474286
    }
  },
  "2affa2df-57b3-47c2-b323-2ee7fca2fc76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 377",
      "id": "2affa2df-57b3-47c2-b323-2ee7fca2fc76",
      "kilometrage": 387,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2affa2df-57b3-47c2-b323-2ee7fca2fc76",
    "image": "perev_left",
    "point": {
      "latitude": 52.1305438459,
      "longitude": 27.5121393442
    }
  },
  "2b0219b0-9ca1-403e-81af-cb186dcbeee4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "2b0219b0-9ca1-403e-81af-cb186dcbeee4",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b0219b0-9ca1-403e-81af-cb186dcbeee4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1167161116,
      "longitude": 28.7394535295
    }
  },
  "2bcc6310-6525-4d37-915b-dd09f329f1f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 155",
      "id": "2bcc6310-6525-4d37-915b-dd09f329f1f5",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bcc6310-6525-4d37-915b-dd09f329f1f5",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8625798617,
      "longitude": 29.4958034664
    }
  },
  "2c61bcc3-d7af-4572-a85d-15654a68eb4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "2c61bcc3-d7af-4572-a85d-15654a68eb4a",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c61bcc3-d7af-4572-a85d-15654a68eb4a",
    "image": "perev_left",
    "point": {
      "latitude": 51.4868562095,
      "longitude": 29.9742410438
    }
  },
  "2c7e0d08-3730-4eea-8a70-5b5f382e1a7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "2c7e0d08-3730-4eea-8a70-5b5f382e1a7d",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c7e0d08-3730-4eea-8a70-5b5f382e1a7d",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0779016644,
      "longitude": 28.3357667037
    }
  },
  "2c8acb36-b1f0-4fdb-8bc1-afca3fc7f417": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "2c8acb36-b1f0-4fdb-8bc1-afca3fc7f417",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c8acb36-b1f0-4fdb-8bc1-afca3fc7f417",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1173313324,
      "longitude": 28.7574677946
    }
  },
  "2c8c3b72-c54e-4cbb-b980-6e8fc7424386": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "2c8c3b72-c54e-4cbb-b980-6e8fc7424386",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c8c3b72-c54e-4cbb-b980-6e8fc7424386",
    "image": "perev_left",
    "point": {
      "latitude": 51.5353231073,
      "longitude": 29.8641925405
    }
  },
  "2cab7be2-96eb-471a-bcc0-516ccb012a94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "2cab7be2-96eb-471a-bcc0-516ccb012a94",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cab7be2-96eb-471a-bcc0-516ccb012a94",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9537977335,
      "longitude": 29.4506409688
    }
  },
  "2cc2acbd-52dd-46d2-bdff-f07152fa982f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2cc2acbd-52dd-46d2-bdff-f07152fa982f",
      "kilometrage": 374,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cc2acbd-52dd-46d2-bdff-f07152fa982f",
    "image": "name_of",
    "point": {
      "latitude": 52.1144433844,
      "longitude": 27.598622541
    }
  },
  "2cd5e9f7-d1b0-40c5-a204-21c418aa7db7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "2cd5e9f7-d1b0-40c5-a204-21c418aa7db7",
      "kilometrage": 313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cd5e9f7-d1b0-40c5-a204-21c418aa7db7",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0857417031,
      "longitude": 28.1663243787
    }
  },
  "2cfcb4de-e379-4d2f-bef0-c2a0b853b1c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2cfcb4de-e379-4d2f-bef0-c2a0b853b1c9",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cfcb4de-e379-4d2f-bef0-c2a0b853b1c9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0688936884,
      "longitude": 29.2345752829
    }
  },
  "2d048ae9-d0f7-4353-bb41-005e26a1e24b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 385",
      "id": "2d048ae9-d0f7-4353-bb41-005e26a1e24b",
      "kilometrage": 392,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d048ae9-d0f7-4353-bb41-005e26a1e24b",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.119166777,
      "longitude": 27.4765452783
    }
  },
  "2d1f0723-bbf0-42ca-af6e-2b2de800295a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "2d1f0723-bbf0-42ca-af6e-2b2de800295a",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d1f0723-bbf0-42ca-af6e-2b2de800295a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.117269765,
      "longitude": 29.0756568494
    }
  },
  "2db324da-4447-4637-ab47-48780d2300c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 31",
      "id": "2db324da-4447-4637-ab47-48780d2300c3",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2db324da-4447-4637-ab47-48780d2300c3",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5921149462,
      "longitude": 29.8303813295
    }
  },
  "2dd535d4-d096-4d4f-98be-acf336dfa8c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 90",
      "id": "2dd535d4-d096-4d4f-98be-acf336dfa8c9",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2dd535d4-d096-4d4f-98be-acf336dfa8c9",
    "image": "kilometrage",
    "point": {
      "latitude": 51.5869315764,
      "longitude": 29.852297727
    }
  },
  "2de543fd-4ed2-441e-b8f3-edf5777c1d37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 84",
      "id": "2de543fd-4ed2-441e-b8f3-edf5777c1d37",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2de543fd-4ed2-441e-b8f3-edf5777c1d37",
    "image": "perev_left",
    "point": {
      "latitude": 51.7867733819,
      "longitude": 29.5927740669
    }
  },
  "2e4db2dd-7256-4673-90a9-7c50707fb663": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 44",
      "id": "2e4db2dd-7256-4673-90a9-7c50707fb663",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e4db2dd-7256-4673-90a9-7c50707fb663",
    "image": "perev_right",
    "point": {
      "latitude": 51.6231358275,
      "longitude": 29.7722977166
    }
  },
  "2e562631-6f44-4936-aa94-ec8273aa522c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 160",
      "id": "2e562631-6f44-4936-aa94-ec8273aa522c",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e562631-6f44-4936-aa94-ec8273aa522c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.07270429,
      "longitude": 29.2241702525
    }
  },
  "2e97b405-a4a1-450d-9f2f-e06a31292831": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "2e97b405-a4a1-450d-9f2f-e06a31292831",
      "kilometrage": 313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e97b405-a4a1-450d-9f2f-e06a31292831",
    "image": "buyo_left",
    "point": {
      "latitude": 52.085695817,
      "longitude": 28.164952871
    }
  },
  "2ec8d56a-c725-4e6b-8e7a-41bfb3c76213": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 59",
      "id": "2ec8d56a-c725-4e6b-8e7a-41bfb3c76213",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ec8d56a-c725-4e6b-8e7a-41bfb3c76213",
    "image": "perev_left",
    "point": {
      "latitude": 51.7002171347,
      "longitude": 29.6946611238
    }
  },
  "2ee1a2a1-92ed-4249-a8b2-f32ffa592734": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 143",
      "id": "2ee1a2a1-92ed-4249-a8b2-f32ffa592734",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ee1a2a1-92ed-4249-a8b2-f32ffa592734",
    "image": "buyo_left",
    "point": {
      "latitude": 52.025832,
      "longitude": 29.321450944
    }
  },
  "2efcc1de-eb02-413b-b63f-d354879d397f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 243",
      "id": "2efcc1de-eb02-413b-b63f-d354879d397f",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2efcc1de-eb02-413b-b63f-d354879d397f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0990421154,
      "longitude": 28.4068791901
    }
  },
  "2f12f1e7-8d47-4149-90bf-ecdb207ee378": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 297",
      "id": "2f12f1e7-8d47-4149-90bf-ecdb207ee378",
      "kilometrage": 332,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f12f1e7-8d47-4149-90bf-ecdb207ee378",
    "image": "perev_right",
    "point": {
      "latitude": 52.0724254157,
      "longitude": 27.9915466532
    }
  },
  "2f43c14b-719a-4a30-b5da-f1216811e328": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 292",
      "id": "2f43c14b-719a-4a30-b5da-f1216811e328",
      "kilometrage": 328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f43c14b-719a-4a30-b5da-f1216811e328",
    "image": "perev_left",
    "point": {
      "latitude": 52.0698027188,
      "longitude": 28.0216419206
    }
  },
  "2f8d9016-8b50-48d1-890d-4b31efe2af6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "2f8d9016-8b50-48d1-890d-4b31efe2af6c",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f8d9016-8b50-48d1-890d-4b31efe2af6c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8010672464,
      "longitude": 29.5112084785
    }
  },
  "2fde2549-7204-4943-8c4e-44c0a4e79ec1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "2fde2549-7204-4943-8c4e-44c0a4e79ec1",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2fde2549-7204-4943-8c4e-44c0a4e79ec1",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0881684568,
      "longitude": 27.7775762841
    }
  },
  "303bbf33-bed3-4224-b0eb-d68aadc97200": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 288",
      "id": "303bbf33-bed3-4224-b0eb-d68aadc97200",
      "kilometrage": 344,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "303bbf33-bed3-4224-b0eb-d68aadc97200",
    "image": "buyo_right",
    "point": {
      "latitude": 52.068762048,
      "longitude": 27.8781902302
    }
  },
  "304db518-2d76-49ea-8e14-de3668422ce5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 176",
      "id": "304db518-2d76-49ea-8e14-de3668422ce5",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "304db518-2d76-49ea-8e14-de3668422ce5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.106017727,
      "longitude": 29.1609276696
    }
  },
  "308059e9-e12b-4a97-919c-49380ca21793": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "308059e9-e12b-4a97-919c-49380ca21793",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "308059e9-e12b-4a97-919c-49380ca21793",
    "image": "main_way",
    "point": {
      "latitude": 52.1126498083,
      "longitude": 28.2112119824
    }
  },
  "30b16383-93e8-4948-9ce4-28d4a540de45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "30b16383-93e8-4948-9ce4-28d4a540de45",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30b16383-93e8-4948-9ce4-28d4a540de45",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1035457238,
      "longitude": 29.1598852104
    }
  },
  "30b36c55-1d85-4b10-ae3d-c18743b6d1e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "30b36c55-1d85-4b10-ae3d-c18743b6d1e5",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30b36c55-1d85-4b10-ae3d-c18743b6d1e5",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9508635337,
      "longitude": 29.4638613118
    }
  },
  "30b6b904-f524-4338-87d0-e547b90d8f4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 130",
      "id": "30b6b904-f524-4338-87d0-e547b90d8f4d",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30b6b904-f524-4338-87d0-e547b90d8f4d",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7595132927,
      "longitude": 29.6210539651
    }
  },
  "30ca96db-2e20-4e02-a7e8-94d73b7c84b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 116",
      "id": "30ca96db-2e20-4e02-a7e8-94d73b7c84b8",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30ca96db-2e20-4e02-a7e8-94d73b7c84b8",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9297883939,
      "longitude": 29.4970534001
    }
  },
  "30f2cc4d-d0d0-4165-9c34-26fc1e45fad2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 56",
      "id": "30f2cc4d-d0d0-4165-9c34-26fc1e45fad2",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30f2cc4d-d0d0-4165-9c34-26fc1e45fad2",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6998942152,
      "longitude": 29.6925684959
    }
  },
  "310dea9f-f8c8-4d49-b1c7-6efdd7a00f2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 319",
      "id": "310dea9f-f8c8-4d49-b1c7-6efdd7a00f2f",
      "kilometrage": 396,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "310dea9f-f8c8-4d49-b1c7-6efdd7a00f2f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1317822554,
      "longitude": 27.4538612654
    }
  },
  "319f9e6d-f781-4e36-bcd8-f98bab209552": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48а",
      "id": "319f9e6d-f781-4e36-bcd8-f98bab209552",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "319f9e6d-f781-4e36-bcd8-f98bab209552",
    "image": "perev_left",
    "point": {
      "latitude": 51.6404891744,
      "longitude": 29.7598817025
    }
  },
  "31ead899-be7a-4aab-bb34-bf3f4e0d154b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 300",
      "id": "31ead899-be7a-4aab-bb34-bf3f4e0d154b",
      "kilometrage": 334,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31ead899-be7a-4aab-bb34-bf3f4e0d154b",
    "image": "perev_left",
    "point": {
      "latitude": 52.0745424825,
      "longitude": 27.9721016331
    }
  },
  "320e69fd-769d-4a11-aff1-423868639501": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "320e69fd-769d-4a11-aff1-423868639501",
      "kilometrage": 401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "320e69fd-769d-4a11-aff1-423868639501",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1334671377,
      "longitude": 27.4074239498
    }
  },
  "3229367f-6f7f-44a7-814e-e501079ee180": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "3229367f-6f7f-44a7-814e-e501079ee180",
      "kilometrage": 329,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3229367f-6f7f-44a7-814e-e501079ee180",
    "image": "buyo_right",
    "point": {
      "latitude": 52.062545512,
      "longitude": 28.0112367131
    }
  },
  "322eb688-91e0-4451-8776-4756c0d4970a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 382",
      "id": "322eb688-91e0-4451-8776-4756c0d4970a",
      "kilometrage": 390,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "322eb688-91e0-4451-8776-4756c0d4970a",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1294979611,
      "longitude": 27.4968812069
    }
  },
  "32e0feee-fd6d-46b1-82b3-9714837f9276": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 295",
      "id": "32e0feee-fd6d-46b1-82b3-9714837f9276",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32e0feee-fd6d-46b1-82b3-9714837f9276",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0928376862,
      "longitude": 28.3101433781
    }
  },
  "332d0cee-9ebf-41b2-8665-58d62a6a14e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 94",
      "id": "332d0cee-9ebf-41b2-8665-58d62a6a14e2",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "332d0cee-9ebf-41b2-8665-58d62a6a14e2",
    "image": "perev_right",
    "point": {
      "latitude": 51.8213488855,
      "longitude": 29.5035041732
    }
  },
  "3339df07-fbfe-4693-8240-669447af1b53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 75",
      "id": "3339df07-fbfe-4693-8240-669447af1b53",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3339df07-fbfe-4693-8240-669447af1b53",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7667325584,
      "longitude": 29.6471250794
    }
  },
  "333d7c35-9693-44a3-a8be-3a3256a01d42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "333d7c35-9693-44a3-a8be-3a3256a01d42",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "333d7c35-9693-44a3-a8be-3a3256a01d42",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1320572272,
      "longitude": 28.8216681566
    }
  },
  "335153d7-9452-4936-97c4-6561b3233b74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "335153d7-9452-4936-97c4-6561b3233b74",
      "kilometrage": 314,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "335153d7-9452-4936-97c4-6561b3233b74",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0866600229,
      "longitude": 28.1547017341
    }
  },
  "33d48a3b-4945-428d-a9b1-c5e4d1349bb4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 72",
      "id": "33d48a3b-4945-428d-a9b1-c5e4d1349bb4",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33d48a3b-4945-428d-a9b1-c5e4d1349bb4",
    "image": "perev_right",
    "point": {
      "latitude": 51.7515185584,
      "longitude": 29.6786107942
    }
  },
  "33d4bb71-e682-4be6-8085-1ab292bbcb26": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 33",
      "id": "33d4bb71-e682-4be6-8085-1ab292bbcb26",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33d4bb71-e682-4be6-8085-1ab292bbcb26",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.5855389965,
      "longitude": 29.8521157872
    }
  },
  "33ff4d00-e109-4f06-a9c6-69a9d2149568": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 113",
      "id": "33ff4d00-e109-4f06-a9c6-69a9d2149568",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33ff4d00-e109-4f06-a9c6-69a9d2149568",
    "image": "perev_left",
    "point": {
      "latitude": 51.9784290904,
      "longitude": 29.3854135986
    }
  },
  "3427bb2d-915b-46fe-98f2-46b134569f39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "3427bb2d-915b-46fe-98f2-46b134569f39",
      "kilometrage": 335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3427bb2d-915b-46fe-98f2-46b134569f39",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0656945457,
      "longitude": 27.9738355357
    }
  },
  "344810ff-b38d-428a-a1ca-eaa9cddddaf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 302",
      "id": "344810ff-b38d-428a-a1ca-eaa9cddddaf3",
      "kilometrage": 359,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "344810ff-b38d-428a-a1ca-eaa9cddddaf3",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0874116429,
      "longitude": 27.722847111
    }
  },
  "345068cf-4758-4841-ab43-b620ecf15e98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 88",
      "id": "345068cf-4758-4841-ab43-b620ecf15e98",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "345068cf-4758-4841-ab43-b620ecf15e98",
    "image": "perev_right",
    "point": {
      "latitude": 51.7929318732,
      "longitude": 29.5759718465
    }
  },
  "34562e7e-8b2f-40fa-9985-1ac7d3fcbf27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 48",
      "id": "34562e7e-8b2f-40fa-9985-1ac7d3fcbf27",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34562e7e-8b2f-40fa-9985-1ac7d3fcbf27",
    "image": "perev_right",
    "point": {
      "latitude": 51.6413637438,
      "longitude": 29.7671075554
    }
  },
  "345d1143-79f2-417a-b3ba-47c38a32d08e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "345d1143-79f2-417a-b3ba-47c38a32d08e",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "345d1143-79f2-417a-b3ba-47c38a32d08e",
    "image": "perev_left",
    "point": {
      "latitude": 51.6123023905,
      "longitude": 29.8043337588
    }
  },
  "346ee5ca-1743-4950-85dd-228d718140d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 183",
      "id": "346ee5ca-1743-4950-85dd-228d718140d7",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "346ee5ca-1743-4950-85dd-228d718140d7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1042772552,
      "longitude": 28.7729643897
    }
  },
  "349b0068-7d72-4218-a50c-5cd25e2bdac2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 335",
      "id": "349b0068-7d72-4218-a50c-5cd25e2bdac2",
      "kilometrage": 335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "349b0068-7d72-4218-a50c-5cd25e2bdac2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0658043515,
      "longitude": 27.9761256303
    }
  },
  "34a12ff0-5142-42c8-860d-1f830da0ec71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 213А",
      "id": "34a12ff0-5142-42c8-860d-1f830da0ec71",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34a12ff0-5142-42c8-860d-1f830da0ec71",
    "image": "perev_right",
    "point": {
      "latitude": 52.1175695447,
      "longitude": 28.5587361747
    }
  },
  "34b2f451-2cd1-4c76-a08b-7e7c1f235f5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 100",
      "id": "34b2f451-2cd1-4c76-a08b-7e7c1f235f5c",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34b2f451-2cd1-4c76-a08b-7e7c1f235f5c",
    "image": "kilometrage",
    "point": {
      "latitude": 51.6285011031,
      "longitude": 29.771132238
    }
  },
  "34d0caa8-718b-4d41-a0a1-59ec29f1acae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 228",
      "id": "34d0caa8-718b-4d41-a0a1-59ec29f1acae",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34d0caa8-718b-4d41-a0a1-59ec29f1acae",
    "image": "perev_right",
    "point": {
      "latitude": 52.099410086,
      "longitude": 28.4573981355
    }
  },
  "34f405a2-5a3b-431c-8d6e-e3c953bcc3fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 310",
      "id": "34f405a2-5a3b-431c-8d6e-e3c953bcc3fb",
      "kilometrage": 374,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34f405a2-5a3b-431c-8d6e-e3c953bcc3fb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.109486027,
      "longitude": 27.602871695
    }
  },
  "34f5b196-268b-4776-b8ce-1926ad2286c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 54",
      "id": "34f5b196-268b-4776-b8ce-1926ad2286c7",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34f5b196-268b-4776-b8ce-1926ad2286c7",
    "image": "perev_right",
    "point": {
      "latitude": 51.6707921842,
      "longitude": 29.6969384405
    }
  },
  "35039344-b5c8-4d6d-851d-575a9d879863": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "35039344-b5c8-4d6d-851d-575a9d879863",
      "kilometrage": 379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35039344-b5c8-4d6d-851d-575a9d879863",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1156217616,
      "longitude": 27.5564459789
    }
  },
  "354b0524-6c30-44ca-83d8-7b7ea7330fd1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 279",
      "id": "354b0524-6c30-44ca-83d8-7b7ea7330fd1",
      "kilometrage": 320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "354b0524-6c30-44ca-83d8-7b7ea7330fd1",
    "image": "perev_right",
    "point": {
      "latitude": 52.0738291545,
      "longitude": 28.0901925438
    }
  },
  "35517893-e588-4981-80d9-10b2a8f7aac7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 270",
      "id": "35517893-e588-4981-80d9-10b2a8f7aac7",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35517893-e588-4981-80d9-10b2a8f7aac7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1108383351,
      "longitude": 28.5452921258
    }
  },
  "355320b0-a8f9-4597-ab52-8044df122eb4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 270",
      "id": "355320b0-a8f9-4597-ab52-8044df122eb4",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "355320b0-a8f9-4597-ab52-8044df122eb4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1033627471,
      "longitude": 28.1810864793
    }
  },
  "3568ad83-8edf-48fc-b491-9f608c868885": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 91",
      "id": "3568ad83-8edf-48fc-b491-9f608c868885",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3568ad83-8edf-48fc-b491-9f608c868885",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7929161996,
      "longitude": 29.5269976207
    }
  },
  "35f5f6e0-a65b-4f67-9994-ac626bc37323": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 264",
      "id": "35f5f6e0-a65b-4f67-9994-ac626bc37323",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35f5f6e0-a65b-4f67-9994-ac626bc37323",
    "image": "perev_right",
    "point": {
      "latitude": 52.1076201498,
      "longitude": 28.1886413165
    }
  },
  "36118d35-b227-4fd0-a94e-3059af13617b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 163",
      "id": "36118d35-b227-4fd0-a94e-3059af13617b",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36118d35-b227-4fd0-a94e-3059af13617b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1271137007,
      "longitude": 28.8851066062
    }
  },
  "364bba88-3d25-4efb-a0a7-ebd65b3165fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "364bba88-3d25-4efb-a0a7-ebd65b3165fb",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "364bba88-3d25-4efb-a0a7-ebd65b3165fb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0869788474,
      "longitude": 27.7838269983
    }
  },
  "36c795ad-9341-45d7-94fe-21988a776661": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "36c795ad-9341-45d7-94fe-21988a776661",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36c795ad-9341-45d7-94fe-21988a776661",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0248397568,
      "longitude": 29.3193579383
    }
  },
  "37223665-812e-492c-b724-466c5ae9f275": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 211",
      "id": "37223665-812e-492c-b724-466c5ae9f275",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37223665-812e-492c-b724-466c5ae9f275",
    "image": "perev_left",
    "point": {
      "latitude": 52.1323792998,
      "longitude": 28.5716104215
    }
  },
  "3731e1e8-7465-4b00-8dff-686ffd2ef27e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 259",
      "id": "3731e1e8-7465-4b00-8dff-686ffd2ef27e",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3731e1e8-7465-4b00-8dff-686ffd2ef27e",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1031751106,
      "longitude": 28.220012878
    }
  },
  "3763433e-5417-4e2a-b0ff-97155f535d02": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 49",
      "id": "3763433e-5417-4e2a-b0ff-97155f535d02",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3763433e-5417-4e2a-b0ff-97155f535d02",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6478030017,
      "longitude": 29.7337323747
    }
  },
  "376cc6d4-f19d-4e52-82f5-8501c2647fa0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 133",
      "id": "376cc6d4-f19d-4e52-82f5-8501c2647fa0",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "376cc6d4-f19d-4e52-82f5-8501c2647fa0",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.9809905243,
      "longitude": 29.3744511932
    }
  },
  "37ad8aef-3e5b-447a-a17d-43addb188d69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "37ad8aef-3e5b-447a-a17d-43addb188d69",
      "kilometrage": 366,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37ad8aef-3e5b-447a-a17d-43addb188d69",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1134533642,
      "longitude": 27.6463213776
    }
  },
  "37c0be82-e2a7-4a2b-8de9-dbcad955fbe4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 218а",
      "id": "37c0be82-e2a7-4a2b-8de9-dbcad955fbe4",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37c0be82-e2a7-4a2b-8de9-dbcad955fbe4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1432128242,
      "longitude": 28.6984006566
    }
  },
  "3818810b-27ec-4dac-9c99-992784f22d61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3818810b-27ec-4dac-9c99-992784f22d61",
      "kilometrage": 356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3818810b-27ec-4dac-9c99-992784f22d61",
    "image": "buyo_right",
    "point": {
      "latitude": 52.077491187,
      "longitude": 27.752801553
    }
  },
  "3831529e-813f-4d0a-9fca-09291cc47959": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "3831529e-813f-4d0a-9fca-09291cc47959",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3831529e-813f-4d0a-9fca-09291cc47959",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7778761534,
      "longitude": 29.5751207791
    }
  },
  "38affdbf-f49e-405f-9b41-edc4daaa4f91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 171",
      "id": "38affdbf-f49e-405f-9b41-edc4daaa4f91",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38affdbf-f49e-405f-9b41-edc4daaa4f91",
    "image": "perev_left",
    "point": {
      "latitude": 52.1314388608,
      "longitude": 28.8456205142
    }
  },
  "392e8ce9-7836-43f7-8d43-1c9b72f7058b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 320",
      "id": "392e8ce9-7836-43f7-8d43-1c9b72f7058b",
      "kilometrage": 397,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "392e8ce9-7836-43f7-8d43-1c9b72f7058b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1264080812,
      "longitude": 27.441620444
    }
  },
  "3938423c-b75f-4d8f-9662-289ecb738cf5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 318",
      "id": "3938423c-b75f-4d8f-9662-289ecb738cf5",
      "kilometrage": 386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3938423c-b75f-4d8f-9662-289ecb738cf5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1365295519,
      "longitude": 27.5269290603
    }
  },
  "3966940f-ad98-44db-a3d8-a7c1f8bd6dd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 124",
      "id": "3966940f-ad98-44db-a3d8-a7c1f8bd6dd0",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3966940f-ad98-44db-a3d8-a7c1f8bd6dd0",
    "image": "perev_left",
    "point": {
      "latitude": 52.0848926001,
      "longitude": 29.2053814004
    }
  },
  "39882f00-5d05-4011-8855-8f577d442ffe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 36",
      "id": "39882f00-5d05-4011-8855-8f577d442ffe",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39882f00-5d05-4011-8855-8f577d442ffe",
    "image": "perev_right",
    "point": {
      "latitude": 51.5908143927,
      "longitude": 29.8198194855
    }
  },
  "39c6e857-865a-46dc-baf5-b146eef22182": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 313",
      "id": "39c6e857-865a-46dc-baf5-b146eef22182",
      "kilometrage": 342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39c6e857-865a-46dc-baf5-b146eef22182",
    "image": "perev_right",
    "point": {
      "latitude": 52.0597170614,
      "longitude": 27.9056811169
    }
  },
  "39c7570a-33e8-4e78-b3be-7455d66effdc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "39c7570a-33e8-4e78-b3be-7455d66effdc",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39c7570a-33e8-4e78-b3be-7455d66effdc",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1027286524,
      "longitude": 28.4716754779
    }
  },
  "39e1849d-d71a-4091-ba42-d1d35e19dcac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 217",
      "id": "39e1849d-d71a-4091-ba42-d1d35e19dcac",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39e1849d-d71a-4091-ba42-d1d35e19dcac",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1259311872,
      "longitude": 28.6837437941
    }
  },
  "3a2e5ebd-9bb9-4ec7-bb2a-2378cb55b513": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "3a2e5ebd-9bb9-4ec7-bb2a-2378cb55b513",
      "kilometrage": 317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a2e5ebd-9bb9-4ec7-bb2a-2378cb55b513",
    "image": "buyo_left",
    "point": {
      "latitude": 52.073784652,
      "longitude": 28.122269392
    }
  },
  "3a43d613-7839-4b36-bf6d-901113626d91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 252",
      "id": "3a43d613-7839-4b36-bf6d-901113626d91",
      "kilometrage": 301,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a43d613-7839-4b36-bf6d-901113626d91",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0955119725,
      "longitude": 28.2681534502
    }
  },
  "3a5051f2-2d8d-4788-8881-dd9fa7fc1fdc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "3a5051f2-2d8d-4788-8881-dd9fa7fc1fdc",
      "kilometrage": 317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a5051f2-2d8d-4788-8881-dd9fa7fc1fdc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.076373318,
      "longitude": 28.1209900705
    }
  },
  "3a5c844c-fd2a-41d5-bc1c-48b10a0db9b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "3a5c844c-fd2a-41d5-bc1c-48b10a0db9b2",
      "kilometrage": 387,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a5c844c-fd2a-41d5-bc1c-48b10a0db9b2",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1314817874,
      "longitude": 27.5133665655
    }
  },
  "3a728692-3b6a-4c10-940d-1864c915997f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "3a728692-3b6a-4c10-940d-1864c915997f",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a728692-3b6a-4c10-940d-1864c915997f",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7350730331,
      "longitude": 29.6978160636
    }
  },
  "3aba553c-4fa9-4787-be56-2bb0cfac27fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3aba553c-4fa9-4787-be56-2bb0cfac27fd",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3aba553c-4fa9-4787-be56-2bb0cfac27fd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1524618725,
      "longitude": 28.6911578444
    }
  },
  "3ac51812-073f-4a58-a5e6-617ed80f6d89": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 221",
      "id": "3ac51812-073f-4a58-a5e6-617ed80f6d89",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ac51812-073f-4a58-a5e6-617ed80f6d89",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1178642452,
      "longitude": 28.4988267821
    }
  },
  "3ae8cdb8-148c-4dd6-a60c-f109da2d3847": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 179",
      "id": "3ae8cdb8-148c-4dd6-a60c-f109da2d3847",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ae8cdb8-148c-4dd6-a60c-f109da2d3847",
    "image": "perev_left",
    "point": {
      "latitude": 52.1237627432,
      "longitude": 28.8075934623
    }
  },
  "3b201523-61a9-450e-a747-ee7dd4abbefb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "3b201523-61a9-450e-a747-ee7dd4abbefb",
      "kilometrage": 328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b201523-61a9-450e-a747-ee7dd4abbefb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0682485448,
      "longitude": 28.0193237629
    }
  },
  "3b7bfffb-6f16-4468-880d-ccb72956eae6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3b7bfffb-6f16-4468-880d-ccb72956eae6",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b7bfffb-6f16-4468-880d-ccb72956eae6",
    "image": "buyo_right",
    "point": {
      "latitude": 52.117946017,
      "longitude": 28.1994575222
    }
  },
  "3bc00077-93f6-49a8-949e-3e352e61fb94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 87",
      "id": "3bc00077-93f6-49a8-949e-3e352e61fb94",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3bc00077-93f6-49a8-949e-3e352e61fb94",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7980735839,
      "longitude": 29.5743802289
    }
  },
  "3bc16ccf-a70d-40a5-9162-762fc568d15c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "3bc16ccf-a70d-40a5-9162-762fc568d15c",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3bc16ccf-a70d-40a5-9162-762fc568d15c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6215632923,
      "longitude": 29.7754783501
    }
  },
  "3c1040f2-f94e-443b-99fa-21d06df44f1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 54",
      "id": "3c1040f2-f94e-443b-99fa-21d06df44f1d",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c1040f2-f94e-443b-99fa-21d06df44f1d",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6699725287,
      "longitude": 29.7042661997
    }
  },
  "3ca00c10-e1fa-421a-b797-7c53bf416b3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "3ca00c10-e1fa-421a-b797-7c53bf416b3b",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ca00c10-e1fa-421a-b797-7c53bf416b3b",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8427093274,
      "longitude": 29.5046830036
    }
  },
  "3ca44d13-f17f-493c-a60a-33577676740f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 265",
      "id": "3ca44d13-f17f-493c-a60a-33577676740f",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ca44d13-f17f-493c-a60a-33577676740f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1367179472,
      "longitude": 28.5969975616
    }
  },
  "3dbad78f-9890-4ca8-ad0d-6ddc5b54c9e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "3dbad78f-9890-4ca8-ad0d-6ddc5b54c9e0",
      "kilometrage": 357,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dbad78f-9890-4ca8-ad0d-6ddc5b54c9e0",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0849330186,
      "longitude": 27.7401599387
    }
  },
  "3de4616e-419b-404d-b5a4-2d152d9bbeb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 95",
      "id": "3de4616e-419b-404d-b5a4-2d152d9bbeb1",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3de4616e-419b-404d-b5a4-2d152d9bbeb1",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8063552554,
      "longitude": 29.5022068424
    }
  },
  "3e13671a-daee-4b57-8622-f783caca36c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "3e13671a-daee-4b57-8622-f783caca36c9",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e13671a-daee-4b57-8622-f783caca36c9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1160251184,
      "longitude": 28.4874680918
    }
  },
  "3e9d6e8e-52de-46a8-a22c-b1ed1e95ea29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 237а",
      "id": "3e9d6e8e-52de-46a8-a22c-b1ed1e95ea29",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e9d6e8e-52de-46a8-a22c-b1ed1e95ea29",
    "image": "perev_right",
    "point": {
      "latitude": 52.0876411475,
      "longitude": 28.396189883
    }
  },
  "3eccf9f2-1691-4ef0-942e-ea7da7c7d2e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 173",
      "id": "3eccf9f2-1691-4ef0-942e-ea7da7c7d2e1",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3eccf9f2-1691-4ef0-942e-ea7da7c7d2e1",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1169202883,
      "longitude": 28.8396561699
    }
  },
  "3ee1b7b4-9fdf-4ddf-a797-823f9d7629f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3ee1b7b4-9fdf-4ddf-a797-823f9d7629f6",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ee1b7b4-9fdf-4ddf-a797-823f9d7629f6",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0737808074,
      "longitude": 29.24509445
    }
  },
  "3f00f7b4-c3fc-43a7-b5b5-79ff0cc670f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "3f00f7b4-c3fc-43a7-b5b5-79ff0cc670f0",
      "kilometrage": 322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f00f7b4-c3fc-43a7-b5b5-79ff0cc670f0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0785299127,
      "longitude": 28.0685339502
    }
  },
  "3f18e42e-11ce-4545-a963-94d0cd839c0f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3f18e42e-11ce-4545-a963-94d0cd839c0f",
      "kilometrage": 351,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f18e42e-11ce-4545-a963-94d0cd839c0f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0890956768,
      "longitude": 27.7975361216
    }
  },
  "3f57f9af-d71b-4345-b6d6-cd48644f4335": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 287",
      "id": "3f57f9af-d71b-4345-b6d6-cd48644f4335",
      "kilometrage": 325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f57f9af-d71b-4345-b6d6-cd48644f4335",
    "image": "perev_right",
    "point": {
      "latitude": 52.0639622243,
      "longitude": 28.0544509707
    }
  },
  "3f62f849-2925-4f01-811e-ffc7f304647f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 381",
      "id": "3f62f849-2925-4f01-811e-ffc7f304647f",
      "kilometrage": 389,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f62f849-2925-4f01-811e-ffc7f304647f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1269428671,
      "longitude": 27.5074420004
    }
  },
  "3f969108-93e2-4ca0-bdc0-43e9d047fbd4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "3f969108-93e2-4ca0-bdc0-43e9d047fbd4",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f969108-93e2-4ca0-bdc0-43e9d047fbd4",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.9555317578,
      "longitude": 29.4350613564
    }
  },
  "3fa070ee-4b6c-4a3a-ad0b-b605882be670": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "3fa070ee-4b6c-4a3a-ad0b-b605882be670",
      "kilometrage": 365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fa070ee-4b6c-4a3a-ad0b-b605882be670",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1049359442,
      "longitude": 27.6628519215
    }
  },
  "3fdfe36f-841f-4fbb-afc6-a0d2c0c60b11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "3fdfe36f-841f-4fbb-afc6-a0d2c0c60b11",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fdfe36f-841f-4fbb-afc6-a0d2c0c60b11",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0414386,
      "longitude": 29.2904555249
    }
  },
  "3fead73f-03aa-40dd-a949-294defc7f66a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3fead73f-03aa-40dd-a949-294defc7f66a",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fead73f-03aa-40dd-a949-294defc7f66a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0707449382,
      "longitude": 29.2357335805
    }
  },
  "3febd869-aa3e-4fbe-9642-694bb38872b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 107",
      "id": "3febd869-aa3e-4fbe-9642-694bb38872b6",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3febd869-aa3e-4fbe-9642-694bb38872b6",
    "image": "perev_left",
    "point": {
      "latitude": 51.8989224845,
      "longitude": 29.4863059488
    }
  },
  "4002e2d3-1e96-4e37-a3e4-19e699b09603": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4002e2d3-1e96-4e37-a3e4-19e699b09603",
      "kilometrage": 324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4002e2d3-1e96-4e37-a3e4-19e699b09603",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.060973321,
      "longitude": 28.06446162
    }
  },
  "4077b934-a05d-4e38-9a59-4660a240436d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "4077b934-a05d-4e38-9a59-4660a240436d",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4077b934-a05d-4e38-9a59-4660a240436d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1327501152,
      "longitude": 28.8236610588
    }
  },
  "40ca89d4-cb16-4bb3-8d08-894a506a4ff1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 291",
      "id": "40ca89d4-cb16-4bb3-8d08-894a506a4ff1",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40ca89d4-cb16-4bb3-8d08-894a506a4ff1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0790486212,
      "longitude": 27.8281410098
    }
  },
  "40dc95b7-2bf6-481c-90c0-a6cfd0b098ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "40dc95b7-2bf6-481c-90c0-a6cfd0b098ab",
      "kilometrage": 386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40dc95b7-2bf6-481c-90c0-a6cfd0b098ab",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1371474951,
      "longitude": 27.5253098814
    }
  },
  "410142d5-e110-4508-9faf-8d76d2258f48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 74",
      "id": "410142d5-e110-4508-9faf-8d76d2258f48",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "410142d5-e110-4508-9faf-8d76d2258f48",
    "image": "perev_left",
    "point": {
      "latitude": 51.7642151514,
      "longitude": 29.6754607961
    }
  },
  "414b6507-d4b2-4ccf-9085-40813a767ee6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 231а",
      "id": "414b6507-d4b2-4ccf-9085-40813a767ee6",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "414b6507-d4b2-4ccf-9085-40813a767ee6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1100046856,
      "longitude": 28.5445736606
    }
  },
  "41637187-817e-46e3-b957-b994af6dc7f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "41637187-817e-46e3-b957-b994af6dc7f5",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "41637187-817e-46e3-b957-b994af6dc7f5",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0880570099,
      "longitude": 27.7701927573
    }
  },
  "417a7b4a-8672-4f69-ba82-4c741493a425": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 257",
      "id": "417a7b4a-8672-4f69-ba82-4c741493a425",
      "kilometrage": 304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "417a7b4a-8672-4f69-ba82-4c741493a425",
    "image": "perev_left",
    "point": {
      "latitude": 52.1130024038,
      "longitude": 28.2316471038
    }
  },
  "41b186e5-8672-4789-9062-7f702bd06ba7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "41b186e5-8672-4789-9062-7f702bd06ba7",
      "kilometrage": 341,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "41b186e5-8672-4789-9062-7f702bd06ba7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0699799874,
      "longitude": 27.9178225219
    }
  },
  "41b5fd81-d8f9-492e-ab75-a468ff701f6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 194",
      "id": "41b5fd81-d8f9-492e-ab75-a468ff701f6f",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "41b5fd81-d8f9-492e-ab75-a468ff701f6f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1253780856,
      "longitude": 28.959600629
    }
  },
  "42323733-7177-4ea8-8b70-bf6e2604d1d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "42323733-7177-4ea8-8b70-bf6e2604d1d7",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42323733-7177-4ea8-8b70-bf6e2604d1d7",
    "image": "raid_end_left",
    "point": {
      "latitude": 52.0767654841,
      "longitude": 29.2357179568
    }
  },
  "42524a85-115e-4a1e-b676-5f03800946c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 319",
      "id": "42524a85-115e-4a1e-b676-5f03800946c1",
      "kilometrage": 346,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42524a85-115e-4a1e-b676-5f03800946c1",
    "image": "perev_right",
    "point": {
      "latitude": 52.0750532034,
      "longitude": 27.8650528605
    }
  },
  "42791c43-2ec9-4b73-8731-897ac6d0df16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 360",
      "id": "42791c43-2ec9-4b73-8731-897ac6d0df16",
      "kilometrage": 360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42791c43-2ec9-4b73-8731-897ac6d0df16",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0905031223,
      "longitude": 27.7072362726
    }
  },
  "427e354b-9a0a-4e85-a76c-f1b9d35a76db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "427e354b-9a0a-4e85-a76c-f1b9d35a76db",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "427e354b-9a0a-4e85-a76c-f1b9d35a76db",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9547523232,
      "longitude": 29.4448809335
    }
  },
  "42ad229d-2d11-40c9-803f-85dfc35e080c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 231",
      "id": "42ad229d-2d11-40c9-803f-85dfc35e080c",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42ad229d-2d11-40c9-803f-85dfc35e080c",
    "image": "perev_right",
    "point": {
      "latitude": 52.094897719,
      "longitude": 28.4424624817
    }
  },
  "42b6d637-44b7-4556-851d-4edae5504c7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "42b6d637-44b7-4556-851d-4edae5504c7e",
      "kilometrage": 381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42b6d637-44b7-4556-851d-4edae5504c7e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1309846413,
      "longitude": 27.554728193
    }
  },
  "42c3ff37-b713-4429-acf5-55028872accf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "42c3ff37-b713-4429-acf5-55028872accf",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42c3ff37-b713-4429-acf5-55028872accf",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1072599443,
      "longitude": 28.243335502
    }
  },
  "42d9b85a-83e8-4f22-b93b-b9fd6286a0fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 61",
      "id": "42d9b85a-83e8-4f22-b93b-b9fd6286a0fd",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42d9b85a-83e8-4f22-b93b-b9fd6286a0fd",
    "image": "perev_left",
    "point": {
      "latitude": 51.706625546,
      "longitude": 29.6817332308
    }
  },
  "4316cf82-19d6-4438-a5c5-737c59212c42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 156",
      "id": "4316cf82-19d6-4438-a5c5-737c59212c42",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4316cf82-19d6-4438-a5c5-737c59212c42",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0562881206,
      "longitude": 29.2495882276
    }
  },
  "431b33a3-4238-4cf3-9f82-8e8cdf38521c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 192",
      "id": "431b33a3-4238-4cf3-9f82-8e8cdf38521c",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "431b33a3-4238-4cf3-9f82-8e8cdf38521c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1255799636,
      "longitude": 28.978773129
    }
  },
  "4332f170-e9c7-4f8b-910a-f796df6bd74a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 53",
      "id": "4332f170-e9c7-4f8b-910a-f796df6bd74a",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4332f170-e9c7-4f8b-910a-f796df6bd74a",
    "image": "buyo_right",
    "point": {
      "latitude": 51.667975753,
      "longitude": 29.7149079224
    }
  },
  "43492d35-4a9b-4e36-ab29-6c1dc3f8276a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 194",
      "id": "43492d35-4a9b-4e36-ab29-6c1dc3f8276a",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43492d35-4a9b-4e36-ab29-6c1dc3f8276a",
    "image": "perev_right",
    "point": {
      "latitude": 52.1182821752,
      "longitude": 28.6939881177
    }
  },
  "436d9818-fa25-4121-80bb-31d684168d5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "436d9818-fa25-4121-80bb-31d684168d5f",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "436d9818-fa25-4121-80bb-31d684168d5f",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8493081453,
      "longitude": 29.5047396451
    }
  },
  "4383c531-ad11-4bb4-a60a-2a4b4164ecd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "4383c531-ad11-4bb4-a60a-2a4b4164ecd8",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4383c531-ad11-4bb4-a60a-2a4b4164ecd8",
    "image": "attention",
    "point": {
      "latitude": 51.9118712855,
      "longitude": 29.5001408466
    }
  },
  "43a09551-9a71-4344-9173-b76b03100f3a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "43a09551-9a71-4344-9173-b76b03100f3a",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43a09551-9a71-4344-9173-b76b03100f3a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1113441209,
      "longitude": 28.5246334376
    }
  },
  "43a2eff7-f312-452c-a6a3-6f06a7ff5c61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 392",
      "id": "43a2eff7-f312-452c-a6a3-6f06a7ff5c61",
      "kilometrage": 395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43a2eff7-f312-452c-a6a3-6f06a7ff5c61",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1343227528,
      "longitude": 27.4604361172
    }
  },
  "43ad425a-f19c-4aa2-83c2-3ea99b172047": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "43ad425a-f19c-4aa2-83c2-3ea99b172047",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43ad425a-f19c-4aa2-83c2-3ea99b172047",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9935413377,
      "longitude": 29.3596715509
    }
  },
  "4435f5ad-c666-477a-9b49-fbed5c6ab7d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "4435f5ad-c666-477a-9b49-fbed5c6ab7d0",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4435f5ad-c666-477a-9b49-fbed5c6ab7d0",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1108826896,
      "longitude": 28.5382641754
    }
  },
  "44b27d61-843a-4b88-8eb5-850699832d48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 158",
      "id": "44b27d61-843a-4b88-8eb5-850699832d48",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44b27d61-843a-4b88-8eb5-850699832d48",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0683493145,
      "longitude": 29.2514674608
    }
  },
  "44f700df-0a25-48ba-9a7b-0c9e9007e70b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "44f700df-0a25-48ba-9a7b-0c9e9007e70b",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44f700df-0a25-48ba-9a7b-0c9e9007e70b",
    "image": "perev_left",
    "point": {
      "latitude": 51.7459455182,
      "longitude": 29.7037103504
    }
  },
  "455e2cef-bfa9-4bfa-98ee-ed31df6bd207": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "455e2cef-bfa9-4bfa-98ee-ed31df6bd207",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "455e2cef-bfa9-4bfa-98ee-ed31df6bd207",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1044264526,
      "longitude": 28.5051051585
    }
  },
  "4562285a-ceab-4a98-a035-b72bc0b1d765": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 191",
      "id": "4562285a-ceab-4a98-a035-b72bc0b1d765",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4562285a-ceab-4a98-a035-b72bc0b1d765",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1313929714,
      "longitude": 28.9869399844
    }
  },
  "4574c84e-a514-4d67-ae1d-6334ee7a46ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 300",
      "id": "4574c84e-a514-4d67-ae1d-6334ee7a46ad",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4574c84e-a514-4d67-ae1d-6334ee7a46ad",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0851007154,
      "longitude": 27.735902761
    }
  },
  "457a27bf-6691-44ee-89e2-b1099f95093b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "457a27bf-6691-44ee-89e2-b1099f95093b",
      "kilometrage": 362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "457a27bf-6691-44ee-89e2-b1099f95093b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1037176588,
      "longitude": 27.6954544096
    }
  },
  "45e8f1f8-ed2e-4ad5-bec9-141303b7ebfe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 220",
      "id": "45e8f1f8-ed2e-4ad5-bec9-141303b7ebfe",
      "kilometrage": 274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45e8f1f8-ed2e-4ad5-bec9-141303b7ebfe",
    "image": "perev_left",
    "point": {
      "latitude": 52.1144077718,
      "longitude": 28.5058353891
    }
  },
  "466ee116-90ad-4877-b90b-4d8fe53ffe77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 134",
      "id": "466ee116-90ad-4877-b90b-4d8fe53ffe77",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "466ee116-90ad-4877-b90b-4d8fe53ffe77",
    "image": "perev_right",
    "point": {
      "latitude": 52.1187426662,
      "longitude": 29.1431884231
    }
  },
  "4797ede5-1845-431a-9b47-7cb9ba5b1fda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4797ede5-1845-431a-9b47-7cb9ba5b1fda",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4797ede5-1845-431a-9b47-7cb9ba5b1fda",
    "image": "buyo_left",
    "point": {
      "latitude": 52.157406139,
      "longitude": 27.3498154083
    }
  },
  "486af6e7-1c35-406f-9be6-8131474c1d20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20а",
      "id": "486af6e7-1c35-406f-9be6-8131474c1d20",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "486af6e7-1c35-406f-9be6-8131474c1d20",
    "image": "perev_left",
    "point": {
      "latitude": 51.5300572043,
      "longitude": 29.883024266
    }
  },
  "489af981-8392-4763-804c-f7662f6f0b38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "489af981-8392-4763-804c-f7662f6f0b38",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "489af981-8392-4763-804c-f7662f6f0b38",
    "image": "perev_right",
    "point": {
      "latitude": 51.4744793079,
      "longitude": 29.9732383761
    }
  },
  "489e7d5c-cad4-4b77-8180-14f8db1e07fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 107",
      "id": "489e7d5c-cad4-4b77-8180-14f8db1e07fc",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "489e7d5c-cad4-4b77-8180-14f8db1e07fc",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8759565365,
      "longitude": 29.4853927294
    }
  },
  "48c5b20d-9a9a-4fc6-af36-5eed37343a7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 81",
      "id": "48c5b20d-9a9a-4fc6-af36-5eed37343a7a",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48c5b20d-9a9a-4fc6-af36-5eed37343a7a",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.7579685374,
      "longitude": 29.5903729029
    }
  },
  "49283b0a-e241-44f6-a974-e0355ddb77f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "49283b0a-e241-44f6-a974-e0355ddb77f9",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49283b0a-e241-44f6-a974-e0355ddb77f9",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1092686589,
      "longitude": 28.5429896175
    }
  },
  "495621c2-0343-42c8-b2c6-731c8e0e6f36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 242",
      "id": "495621c2-0343-42c8-b2c6-731c8e0e6f36",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "495621c2-0343-42c8-b2c6-731c8e0e6f36",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0952447268,
      "longitude": 28.4293720072
    }
  },
  "4971e1e6-a20d-4195-9487-caf22d9fceab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "4971e1e6-a20d-4195-9487-caf22d9fceab",
      "kilometrage": 378,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4971e1e6-a20d-4195-9487-caf22d9fceab",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1173372257,
      "longitude": 27.5697939453
    }
  },
  "49f82c53-2a31-4bfb-ad6a-2d3cc832b8c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 175",
      "id": "49f82c53-2a31-4bfb-ad6a-2d3cc832b8c2",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49f82c53-2a31-4bfb-ad6a-2d3cc832b8c2",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9805408607,
      "longitude": 29.3738769268
    }
  },
  "4a21f04a-215f-4a24-ad5a-dc97b05d6a19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "4a21f04a-215f-4a24-ad5a-dc97b05d6a19",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a21f04a-215f-4a24-ad5a-dc97b05d6a19",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0077957355,
      "longitude": 29.3349561984
    }
  },
  "4a3275aa-86d0-4e16-aed9-bf6d9400f2c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4a3275aa-86d0-4e16-aed9-bf6d9400f2c6",
      "kilometrage": 365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a3275aa-86d0-4e16-aed9-bf6d9400f2c6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1063218696,
      "longitude": 27.657588704
    }
  },
  "4a5800eb-9506-4ddf-a637-ce083d779472": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4a5800eb-9506-4ddf-a637-ce083d779472",
      "kilometrage": 391,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a5800eb-9506-4ddf-a637-ce083d779472",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1202140727,
      "longitude": 27.4838558717
    }
  },
  "4a890d6b-cd05-44a6-9224-b4b8c9860f92": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "4a890d6b-cd05-44a6-9224-b4b8c9860f92",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a890d6b-cd05-44a6-9224-b4b8c9860f92",
    "image": "attention",
    "point": {
      "latitude": 52.1123225939,
      "longitude": 28.5293759197
    }
  },
  "4ab2f091-aebc-452f-8d5f-679c8900f478": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "4ab2f091-aebc-452f-8d5f-679c8900f478",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ab2f091-aebc-452f-8d5f-679c8900f478",
    "image": "perev_right",
    "point": {
      "latitude": 51.5669576234,
      "longitude": 29.8221133635
    }
  },
  "4ac6b2a5-17dd-47cc-8ce8-c0d1ca7796a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 259б",
      "id": "4ac6b2a5-17dd-47cc-8ce8-c0d1ca7796a5",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ac6b2a5-17dd-47cc-8ce8-c0d1ca7796a5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1021169823,
      "longitude": 28.2901569374
    }
  },
  "4b1f9df4-bce2-4efb-9a3a-9671cc373e9f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 109",
      "id": "4b1f9df4-bce2-4efb-9a3a-9671cc373e9f",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b1f9df4-bce2-4efb-9a3a-9671cc373e9f",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8907440341,
      "longitude": 29.4786002208
    }
  },
  "4b462871-1152-4299-af54-94c5ebb3949e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "4b462871-1152-4299-af54-94c5ebb3949e",
      "kilometrage": 336,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b462871-1152-4299-af54-94c5ebb3949e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0687999781,
      "longitude": 27.9653329294
    }
  },
  "4b47ffe4-65e6-4bb1-afa2-ee694c513e11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4b47ffe4-65e6-4bb1-afa2-ee694c513e11",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b47ffe4-65e6-4bb1-afa2-ee694c513e11",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1197407618,
      "longitude": 29.0970095088
    }
  },
  "4b966f26-cfa3-42ff-b96a-ad6b1201ec5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 39",
      "id": "4b966f26-cfa3-42ff-b96a-ad6b1201ec5c",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b966f26-cfa3-42ff-b96a-ad6b1201ec5c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6328173212,
      "longitude": 29.7736592231
    }
  },
  "4bcd2dd0-457a-4bc9-8137-61d3bf017096": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 137",
      "id": "4bcd2dd0-457a-4bc9-8137-61d3bf017096",
      "kilometrage": 203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bcd2dd0-457a-4bc9-8137-61d3bf017096",
    "image": "perev_right",
    "point": {
      "latitude": 52.1130995423,
      "longitude": 29.1037566125
    }
  },
  "4bcf4648-db48-4de9-a72b-994dcc111cee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 120",
      "id": "4bcf4648-db48-4de9-a72b-994dcc111cee",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bcf4648-db48-4de9-a72b-994dcc111cee",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9416160127,
      "longitude": 29.4767186457
    }
  },
  "4be5531f-57b0-40bb-b016-048e97a06011": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 241",
      "id": "4be5531f-57b0-40bb-b016-048e97a06011",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4be5531f-57b0-40bb-b016-048e97a06011",
    "image": "perev_left",
    "point": {
      "latitude": 52.0759840507,
      "longitude": 28.3536085553
    }
  },
  "4c02f72a-6dad-4b00-9f0a-67fd6d069ab5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "4c02f72a-6dad-4b00-9f0a-67fd6d069ab5",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c02f72a-6dad-4b00-9f0a-67fd6d069ab5",
    "image": "attention",
    "point": {
      "latitude": 51.9466802096,
      "longitude": 29.4721554378
    }
  },
  "4ce4544b-48de-44c0-ac97-e1b783da9281": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 331",
      "id": "4ce4544b-48de-44c0-ac97-e1b783da9281",
      "kilometrage": 356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ce4544b-48de-44c0-ac97-e1b783da9281",
    "image": "perev_left",
    "point": {
      "latitude": 52.0821496293,
      "longitude": 27.7519205607
    }
  },
  "4cfa895e-a909-40fa-8e57-44ca14b30112": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 380",
      "id": "4cfa895e-a909-40fa-8e57-44ca14b30112",
      "kilometrage": 380,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4cfa895e-a909-40fa-8e57-44ca14b30112",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1208655627,
      "longitude": 27.5592314411
    }
  },
  "4d49ad37-9df8-4fbc-83cc-72c637ab6014": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 227",
      "id": "4d49ad37-9df8-4fbc-83cc-72c637ab6014",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d49ad37-9df8-4fbc-83cc-72c637ab6014",
    "image": "perev_right",
    "point": {
      "latitude": 52.0993423721,
      "longitude": 28.4643752565
    }
  },
  "4d668d17-b509-4bb2-ba8d-80bc8f1d9766": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 356",
      "id": "4d668d17-b509-4bb2-ba8d-80bc8f1d9766",
      "kilometrage": 373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d668d17-b509-4bb2-ba8d-80bc8f1d9766",
    "image": "perev_right",
    "point": {
      "latitude": 52.099962939,
      "longitude": 27.5956543605
    }
  },
  "4e04815e-4f69-4b21-94cd-39c1bb6832f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 75",
      "id": "4e04815e-4f69-4b21-94cd-39c1bb6832f7",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e04815e-4f69-4b21-94cd-39c1bb6832f7",
    "image": "kilometrage",
    "point": {
      "latitude": 51.5012840342,
      "longitude": 29.9126982372
    }
  },
  "4e36fc13-13e0-47b6-a7e3-0b13d42484fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4e36fc13-13e0-47b6-a7e3-0b13d42484fc",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e36fc13-13e0-47b6-a7e3-0b13d42484fc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1349945537,
      "longitude": 28.6054258986
    }
  },
  "4e4501a5-5b5a-4991-92b3-015566a9db10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "4e4501a5-5b5a-4991-92b3-015566a9db10",
      "kilometrage": 324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e4501a5-5b5a-4991-92b3-015566a9db10",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0625479471,
      "longitude": 28.0665789639
    }
  },
  "4e4ab4af-ff97-4b28-b96a-3d53b690e196": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 47",
      "id": "4e4ab4af-ff97-4b28-b96a-3d53b690e196",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e4ab4af-ff97-4b28-b96a-3d53b690e196",
    "image": "perev_left",
    "point": {
      "latitude": 51.6495183228,
      "longitude": 29.7707828024
    }
  },
  "4e57f5cc-2d47-4483-b1c4-b1aeda11a1ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 146",
      "id": "4e57f5cc-2d47-4483-b1c4-b1aeda11a1ef",
      "kilometrage": 211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e57f5cc-2d47-4483-b1c4-b1aeda11a1ef",
    "image": "perev_right",
    "point": {
      "latitude": 52.1288896511,
      "longitude": 29.0103220386
    }
  },
  "4ebbc3ec-2c1e-418a-9305-bb0dce05153c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 240",
      "id": "4ebbc3ec-2c1e-418a-9305-bb0dce05153c",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ebbc3ec-2c1e-418a-9305-bb0dce05153c",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1158854626,
      "longitude": 28.7908076002
    }
  },
  "4ebdbc6e-2a26-48c3-8eac-3927b408db0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4ebdbc6e-2a26-48c3-8eac-3927b408db0b",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ebdbc6e-2a26-48c3-8eac-3927b408db0b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.8027351675,
      "longitude": 29.5063855741
    }
  },
  "4ec87d66-6256-4e4f-a286-ba56c81d3474": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 45",
      "id": "4ec87d66-6256-4e4f-a286-ba56c81d3474",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ec87d66-6256-4e4f-a286-ba56c81d3474",
    "image": "perev_right",
    "point": {
      "latitude": 51.6322949096,
      "longitude": 29.7710939727
    }
  },
  "4ee255d5-227a-4762-89d6-7b06bd8576b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 291",
      "id": "4ee255d5-227a-4762-89d6-7b06bd8576b9",
      "kilometrage": 327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ee255d5-227a-4762-89d6-7b06bd8576b9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0714702676,
      "longitude": 28.0365465707
    }
  },
  "4f03b29c-03a2-4b4f-8b04-eb67f65cb2c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "4f03b29c-03a2-4b4f-8b04-eb67f65cb2c6",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f03b29c-03a2-4b4f-8b04-eb67f65cb2c6",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0879822373,
      "longitude": 27.7787696847
    }
  },
  "4f522c67-785c-48d8-bc30-14abfffa510e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 242а",
      "id": "4f522c67-785c-48d8-bc30-14abfffa510e",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f522c67-785c-48d8-bc30-14abfffa510e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1009568419,
      "longitude": 28.4109365453
    }
  },
  "4f881f00-1c3b-4421-af56-3da91444cb6e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 294",
      "id": "4f881f00-1c3b-4421-af56-3da91444cb6e",
      "kilometrage": 331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f881f00-1c3b-4421-af56-3da91444cb6e",
    "image": "perev_right",
    "point": {
      "latitude": 52.0673455606,
      "longitude": 27.9959953041
    }
  },
  "4fb26097-6a83-4366-9cae-734b6dc10c4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4fb26097-6a83-4366-9cae-734b6dc10c4a",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fb26097-6a83-4366-9cae-734b6dc10c4a",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6406234862,
      "longitude": 29.7632832554
    }
  },
  "4fdad4b9-4fe3-4fd6-b5ed-9a4fb2b45928": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4fdad4b9-4fe3-4fd6-b5ed-9a4fb2b45928",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fdad4b9-4fe3-4fd6-b5ed-9a4fb2b45928",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0691801322,
      "longitude": 29.2316926894
    }
  },
  "50380e54-a5f4-4112-8574-e7ce3583b755": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 152",
      "id": "50380e54-a5f4-4112-8574-e7ce3583b755",
      "kilometrage": 216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50380e54-a5f4-4112-8574-e7ce3583b755",
    "image": "perev_right",
    "point": {
      "latitude": 52.1169596553,
      "longitude": 28.962378918
    }
  },
  "503d26e7-0e0d-461c-bc93-5d5d856b5131": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 289",
      "id": "503d26e7-0e0d-461c-bc93-5d5d856b5131",
      "kilometrage": 347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "503d26e7-0e0d-461c-bc93-5d5d856b5131",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0787810153,
      "longitude": 27.8401869792
    }
  },
  "50491d2d-eeb1-4c8b-8d04-e8fda7e8970e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 48б",
      "id": "50491d2d-eeb1-4c8b-8d04-e8fda7e8970e",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50491d2d-eeb1-4c8b-8d04-e8fda7e8970e",
    "image": "perev_right",
    "point": {
      "latitude": 51.6378653234,
      "longitude": 29.7501551335
    }
  },
  "509bab25-710d-47f5-870b-c9746b3a0ddc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "509bab25-710d-47f5-870b-c9746b3a0ddc",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "509bab25-710d-47f5-870b-c9746b3a0ddc",
    "image": "perev_left",
    "point": {
      "latitude": 51.8125026109,
      "longitude": 29.5039913783
    }
  },
  "50b2820d-5381-4688-9e94-fe13c5222521": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "50b2820d-5381-4688-9e94-fe13c5222521",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50b2820d-5381-4688-9e94-fe13c5222521",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1107984358,
      "longitude": 29.1614936959
    }
  },
  "50b684d5-f0e3-47a6-a3b0-3e789f1bbf26": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 135",
      "id": "50b684d5-f0e3-47a6-a3b0-3e789f1bbf26",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50b684d5-f0e3-47a6-a3b0-3e789f1bbf26",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9886487419,
      "longitude": 29.3646538223
    }
  },
  "50c9ff47-d082-44f7-a955-9c304960f541": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "50c9ff47-d082-44f7-a955-9c304960f541",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50c9ff47-d082-44f7-a955-9c304960f541",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0644812553,
      "longitude": 29.2527778252
    }
  },
  "516f3262-4da5-4d46-933d-102b13526705": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "516f3262-4da5-4d46-933d-102b13526705",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "516f3262-4da5-4d46-933d-102b13526705",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1547882138,
      "longitude": 27.354248071
    }
  },
  "5188d559-d4fd-4d1c-b33f-bdbd60ee5954": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "5188d559-d4fd-4d1c-b33f-bdbd60ee5954",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5188d559-d4fd-4d1c-b33f-bdbd60ee5954",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.8508668402,
      "longitude": 29.5048902387
    }
  },
  "51b68b41-bf3e-4504-8f63-e28094cfc779": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 172",
      "id": "51b68b41-bf3e-4504-8f63-e28094cfc779",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51b68b41-bf3e-4504-8f63-e28094cfc779",
    "image": "perev_right",
    "point": {
      "latitude": 52.1187806426,
      "longitude": 28.8463793596
    }
  },
  "51be1698-d10a-465c-b625-1a00cdaa4601": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 207А",
      "id": "51be1698-d10a-465c-b625-1a00cdaa4601",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51be1698-d10a-465c-b625-1a00cdaa4601",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1229367231,
      "longitude": 28.8072180433
    }
  },
  "528b2eea-d3c9-40ca-8b37-7f0d63ca5c19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "528b2eea-d3c9-40ca-8b37-7f0d63ca5c19",
      "kilometrage": 404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "528b2eea-d3c9-40ca-8b37-7f0d63ca5c19",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1441535226,
      "longitude": 27.3863704834
    }
  },
  "52d11666-3898-4302-a8cf-ff59be37ffd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "52d11666-3898-4302-a8cf-ff59be37ffd0",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52d11666-3898-4302-a8cf-ff59be37ffd0",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9800956035,
      "longitude": 29.374155456
    }
  },
  "5388e1ae-c589-4a6b-8103-e777c2a9454a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "5388e1ae-c589-4a6b-8103-e777c2a9454a",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5388e1ae-c589-4a6b-8103-e777c2a9454a",
    "image": "perev_right",
    "point": {
      "latitude": 51.5770999081,
      "longitude": 29.8332761276
    }
  },
  "53c0f79d-ac72-49bd-b3c0-df6a91916a4c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "53c0f79d-ac72-49bd-b3c0-df6a91916a4c",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53c0f79d-ac72-49bd-b3c0-df6a91916a4c",
    "image": "perev_left",
    "point": {
      "latitude": 51.7352700925,
      "longitude": 29.7019868057
    }
  },
  "53d42324-0054-4245-9fda-c1ffd80f48b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 290",
      "id": "53d42324-0054-4245-9fda-c1ffd80f48b9",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53d42324-0054-4245-9fda-c1ffd80f48b9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.079877417,
      "longitude": 27.828416889
    }
  },
  "53ebed6f-89d0-4be2-979b-5cabc43f2dff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 204",
      "id": "53ebed6f-89d0-4be2-979b-5cabc43f2dff",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53ebed6f-89d0-4be2-979b-5cabc43f2dff",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1301088849,
      "longitude": 28.8465997052
    }
  },
  "53f0d672-7905-42df-be76-f7622d30201b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 374",
      "id": "53f0d672-7905-42df-be76-f7622d30201b",
      "kilometrage": 385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53f0d672-7905-42df-be76-f7622d30201b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1285261353,
      "longitude": 27.5327110883
    }
  },
  "54ad6ecf-c855-414d-a1e3-7cb56199cebc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 336",
      "id": "54ad6ecf-c855-414d-a1e3-7cb56199cebc",
      "kilometrage": 359,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54ad6ecf-c855-414d-a1e3-7cb56199cebc",
    "image": "perev_left",
    "point": {
      "latitude": 52.0916518608,
      "longitude": 27.7163716292
    }
  },
  "54e32b14-0ea6-4458-aa5c-f8cff053877a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 223",
      "id": "54e32b14-0ea6-4458-aa5c-f8cff053877a",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54e32b14-0ea6-4458-aa5c-f8cff053877a",
    "image": "perev_right",
    "point": {
      "latitude": 52.1079940464,
      "longitude": 28.4861425263
    }
  },
  "562fd003-3286-43e3-adc1-4321c2d59b45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 348",
      "id": "562fd003-3286-43e3-adc1-4321c2d59b45",
      "kilometrage": 367,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "562fd003-3286-43e3-adc1-4321c2d59b45",
    "image": "perev_left",
    "point": {
      "latitude": 52.1079144496,
      "longitude": 27.6397595227
    }
  },
  "563d1dce-1cd3-4495-ace3-9967ce138e51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 23",
      "id": "563d1dce-1cd3-4495-ace3-9967ce138e51",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "563d1dce-1cd3-4495-ace3-9967ce138e51",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5542355148,
      "longitude": 29.8448025741
    }
  },
  "564b6a5c-8789-4a9f-96d3-c4919533030d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 201",
      "id": "564b6a5c-8789-4a9f-96d3-c4919533030d",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "564b6a5c-8789-4a9f-96d3-c4919533030d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1334588873,
      "longitude": 28.8753359988
    }
  },
  "56603ea4-cbaa-4a73-814d-81929a91cba5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 122",
      "id": "56603ea4-cbaa-4a73-814d-81929a91cba5",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56603ea4-cbaa-4a73-814d-81929a91cba5",
    "image": "perev_left",
    "point": {
      "latitude": 52.0695598564,
      "longitude": 29.2525107905
    }
  },
  "5679a225-f1c9-4bc6-af05-e3b2b0bf91af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 132",
      "id": "5679a225-f1c9-4bc6-af05-e3b2b0bf91af",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5679a225-f1c9-4bc6-af05-e3b2b0bf91af",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.9800059334,
      "longitude": 29.3772079424
    }
  },
  "57051a41-dce7-4417-96d6-77ae3f4dfb2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "57051a41-dce7-4417-96d6-77ae3f4dfb2f",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57051a41-dce7-4417-96d6-77ae3f4dfb2f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0696152154,
      "longitude": 28.3488868005
    }
  },
  "57151848-1dd2-4683-baaf-be6f52f1467d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "57151848-1dd2-4683-baaf-be6f52f1467d",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57151848-1dd2-4683-baaf-be6f52f1467d",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1046988759,
      "longitude": 28.2141245094
    }
  },
  "57329a04-8adf-449b-8f48-2b500fa53e9f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "57329a04-8adf-449b-8f48-2b500fa53e9f",
      "kilometrage": 254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57329a04-8adf-449b-8f48-2b500fa53e9f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.142714183,
      "longitude": 28.6972230315
    }
  },
  "574db4f0-b3f2-4ecf-a13b-a4fee7053861": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "574db4f0-b3f2-4ecf-a13b-a4fee7053861",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "574db4f0-b3f2-4ecf-a13b-a4fee7053861",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.1588121324,
      "longitude": 27.3516804829
    }
  },
  "5757b3dd-8bb6-4728-9f62-fc957088651e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "5757b3dd-8bb6-4728-9f62-fc957088651e",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5757b3dd-8bb6-4728-9f62-fc957088651e",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0874931302,
      "longitude": 28.3151196456
    }
  },
  "578bb45a-99bb-448d-b40b-6e410474c6b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 236",
      "id": "578bb45a-99bb-448d-b40b-6e410474c6b8",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "578bb45a-99bb-448d-b40b-6e410474c6b8",
    "image": "perev_right",
    "point": {
      "latitude": 52.0911274757,
      "longitude": 28.4025504782
    }
  },
  "57c96cd6-fb13-4920-b9dd-be826ae197fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "57c96cd6-fb13-4920-b9dd-be826ae197fb",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57c96cd6-fb13-4920-b9dd-be826ae197fb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1324637834,
      "longitude": 28.8994027177
    }
  },
  "57cc0da3-4797-4343-b077-ad079e0070a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 375",
      "id": "57cc0da3-4797-4343-b077-ad079e0070a7",
      "kilometrage": 386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57cc0da3-4797-4343-b077-ad079e0070a7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1371450872,
      "longitude": 27.5264908502
    }
  },
  "57d01d0b-7ac4-4ac6-b1ae-8177e627b761": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "57d01d0b-7ac4-4ac6-b1ae-8177e627b761",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57d01d0b-7ac4-4ac6-b1ae-8177e627b761",
    "image": "name_of",
    "point": {
      "latitude": 51.6749013232,
      "longitude": 29.6908249056
    }
  },
  "57f5859e-656d-4266-92d1-88547699a468": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "57f5859e-656d-4266-92d1-88547699a468",
      "kilometrage": 380,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57f5859e-656d-4266-92d1-88547699a468",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1191694477,
      "longitude": 27.5580447046
    }
  },
  "58462366-3b32-4522-bc57-88dfd515041d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 21",
      "id": "58462366-3b32-4522-bc57-88dfd515041d",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58462366-3b32-4522-bc57-88dfd515041d",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5357290575,
      "longitude": 29.8620247426
    }
  },
  "589fa35e-00bc-4a5b-9f74-4d0c486a9dc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "589fa35e-00bc-4a5b-9f74-4d0c486a9dc8",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "589fa35e-00bc-4a5b-9f74-4d0c486a9dc8",
    "image": "perev_left",
    "point": {
      "latitude": 51.6106706943,
      "longitude": 29.8116713582
    }
  },
  "591a905f-4505-4664-8f1d-03b7c5c0a129": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 84",
      "id": "591a905f-4505-4664-8f1d-03b7c5c0a129",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "591a905f-4505-4664-8f1d-03b7c5c0a129",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7853450714,
      "longitude": 29.5882300725
    }
  },
  "59215db5-e045-4fe5-bd3e-be9d90866cd7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 268",
      "id": "59215db5-e045-4fe5-bd3e-be9d90866cd7",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59215db5-e045-4fe5-bd3e-be9d90866cd7",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1158857522,
      "longitude": 28.1893590649
    }
  },
  "592184ca-9193-466c-a23c-db7256de9562": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "592184ca-9193-466c-a23c-db7256de9562",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "592184ca-9193-466c-a23c-db7256de9562",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0733618611,
      "longitude": 29.2224005755
    }
  },
  "598b2758-779b-41c6-8cb7-496799d28c9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "598b2758-779b-41c6-8cb7-496799d28c9a",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "598b2758-779b-41c6-8cb7-496799d28c9a",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9554864286,
      "longitude": 29.4406813022
    }
  },
  "5a535eeb-643c-45fd-af9c-7706b8eefa65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "5a535eeb-643c-45fd-af9c-7706b8eefa65",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a535eeb-643c-45fd-af9c-7706b8eefa65",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7785826928,
      "longitude": 29.5752149972
    }
  },
  "5a82e161-dd07-45d2-a7c6-eeefcac3d9df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 297",
      "id": "5a82e161-dd07-45d2-a7c6-eeefcac3d9df",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a82e161-dd07-45d2-a7c6-eeefcac3d9df",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0863988955,
      "longitude": 27.7683088109
    }
  },
  "5af10551-a297-4571-9b7e-1904f8c589b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "5af10551-a297-4571-9b7e-1904f8c589b8",
      "kilometrage": 330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5af10551-a297-4571-9b7e-1904f8c589b8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0628482368,
      "longitude": 28.0005788036
    }
  },
  "5b0107e1-c3f9-4c88-a4b7-b533559b6da8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 393",
      "id": "5b0107e1-c3f9-4c88-a4b7-b533559b6da8",
      "kilometrage": 395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b0107e1-c3f9-4c88-a4b7-b533559b6da8",
    "image": "perev_left",
    "point": {
      "latitude": 52.1343774845,
      "longitude": 27.4582117785
    }
  },
  "5b0ef59e-8caf-4735-86dd-a298f7ac4cc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "5b0ef59e-8caf-4735-86dd-a298f7ac4cc1",
      "kilometrage": 368,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b0ef59e-8caf-4735-86dd-a298f7ac4cc1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1000303899,
      "longitude": 27.6490559875
    }
  },
  "5b40c864-1e65-4a19-bb76-52222870bfd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 13",
      "id": "5b40c864-1e65-4a19-bb76-52222870bfd8",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b40c864-1e65-4a19-bb76-52222870bfd8",
    "image": "perev_right",
    "point": {
      "latitude": 51.5013227872,
      "longitude": 29.9384304391
    }
  },
  "5ba8e0f9-28a8-4929-a21c-d4b11b722539": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5ba8e0f9-28a8-4929-a21c-d4b11b722539",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ba8e0f9-28a8-4929-a21c-d4b11b722539",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9773153709,
      "longitude": 29.380869893
    }
  },
  "5bab77d9-1291-4a90-b2ca-a8afde536d0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "5bab77d9-1291-4a90-b2ca-a8afde536d0a",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5bab77d9-1291-4a90-b2ca-a8afde536d0a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1448935355,
      "longitude": 28.6819643037
    }
  },
  "5be2a0bd-3fee-429c-95ae-318974d4c3ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "5be2a0bd-3fee-429c-95ae-318974d4c3ba",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5be2a0bd-3fee-429c-95ae-318974d4c3ba",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0882559171,
      "longitude": 28.3845967674
    }
  },
  "5c310540-de6e-4f8e-bd44-6bfc91ce509e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 270",
      "id": "5c310540-de6e-4f8e-bd44-6bfc91ce509e",
      "kilometrage": 313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c310540-de6e-4f8e-bd44-6bfc91ce509e",
    "image": "perev_right",
    "point": {
      "latitude": 52.0851131119,
      "longitude": 28.1555093953
    }
  },
  "5c4f7ee4-9db5-4aa1-ad2c-d2639c33a91b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "5c4f7ee4-9db5-4aa1-ad2c-d2639c33a91b",
      "kilometrage": 327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c4f7ee4-9db5-4aa1-ad2c-d2639c33a91b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0722391359,
      "longitude": 28.0368069912
    }
  },
  "5c82722e-a4cc-40ca-849f-2ae99f0de83e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "5c82722e-a4cc-40ca-849f-2ae99f0de83e",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c82722e-a4cc-40ca-849f-2ae99f0de83e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6508639297,
      "longitude": 29.7254293302
    }
  },
  "5c941816-5469-4b6b-b26a-7b5b231a6af8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 187",
      "id": "5c941816-5469-4b6b-b26a-7b5b231a6af8",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c941816-5469-4b6b-b26a-7b5b231a6af8",
    "image": "buyo_right",
    "point": {
      "latitude": 52.126783333,
      "longitude": 29.023084139
    }
  },
  "5c947fa1-cbde-4217-9486-8c99cfa29491": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 24",
      "id": "5c947fa1-cbde-4217-9486-8c99cfa29491",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c947fa1-cbde-4217-9486-8c99cfa29491",
    "image": "perev_right",
    "point": {
      "latitude": 51.5419879017,
      "longitude": 29.8521783942
    }
  },
  "5c95ffbb-0931-46ca-a8c2-b60c2e9b0a55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "5c95ffbb-0931-46ca-a8c2-b60c2e9b0a55",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c95ffbb-0931-46ca-a8c2-b60c2e9b0a55",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0469095149,
      "longitude": 29.2858976973
    }
  },
  "5ccb9970-8ca8-4c6a-b2e2-c236fa1e199e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "5ccb9970-8ca8-4c6a-b2e2-c236fa1e199e",
      "kilometrage": 327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ccb9970-8ca8-4c6a-b2e2-c236fa1e199e",
    "image": "attention",
    "point": {
      "latitude": 52.0758106904,
      "longitude": 28.0433839033
    }
  },
  "5cf0e6e3-1832-4075-9fb0-1c88304ed03b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "5cf0e6e3-1832-4075-9fb0-1c88304ed03b",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cf0e6e3-1832-4075-9fb0-1c88304ed03b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0855452691,
      "longitude": 27.7690326722
    }
  },
  "5d1f1450-3735-456d-ad53-4f64e5b02fce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 308",
      "id": "5d1f1450-3735-456d-ad53-4f64e5b02fce",
      "kilometrage": 339,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d1f1450-3735-456d-ad53-4f64e5b02fce",
    "image": "perev_left",
    "point": {
      "latitude": 52.0718092455,
      "longitude": 27.9367457568
    }
  },
  "5d27f7e9-3181-4b5f-ad47-89a4a34e2905": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 238",
      "id": "5d27f7e9-3181-4b5f-ad47-89a4a34e2905",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d27f7e9-3181-4b5f-ad47-89a4a34e2905",
    "image": "perev_right",
    "point": {
      "latitude": 52.0746623139,
      "longitude": 28.3791707724
    }
  },
  "5dc0514b-a992-4246-a2f4-1ce73307d409": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 108",
      "id": "5dc0514b-a992-4246-a2f4-1ce73307d409",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5dc0514b-a992-4246-a2f4-1ce73307d409",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8792388064,
      "longitude": 29.4871261497
    }
  },
  "5ef4faf5-df7c-4302-979e-6ed554757417": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "5ef4faf5-df7c-4302-979e-6ed554757417",
      "kilometrage": 398,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ef4faf5-df7c-4302-979e-6ed554757417",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1284088386,
      "longitude": 27.4342498033
    }
  },
  "5f8a733e-733c-4ebf-9891-d834d352ae32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "5f8a733e-733c-4ebf-9891-d834d352ae32",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f8a733e-733c-4ebf-9891-d834d352ae32",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1009233191,
      "longitude": 28.306885747
    }
  },
  "5f8f3cfc-3241-494e-88eb-da916ef5c298": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "5f8f3cfc-3241-494e-88eb-da916ef5c298",
      "kilometrage": 385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f8f3cfc-3241-494e-88eb-da916ef5c298",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1290778637,
      "longitude": 27.5318856172
    }
  },
  "5f93fbab-accb-435b-b0ef-3c358f0035ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 182",
      "id": "5f93fbab-accb-435b-b0ef-3c358f0035ac",
      "kilometrage": 203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f93fbab-accb-435b-b0ef-3c358f0035ac",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1172364424,
      "longitude": 29.0998295663
    }
  },
  "5fb91397-9815-49f4-ac38-3b3daa276d6d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "5fb91397-9815-49f4-ac38-3b3daa276d6d",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fb91397-9815-49f4-ac38-3b3daa276d6d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0630820531,
      "longitude": 29.2526400695
    }
  },
  "5fdf8e4a-5813-47f6-8984-015f45f18049": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 341",
      "id": "5fdf8e4a-5813-47f6-8984-015f45f18049",
      "kilometrage": 362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fdf8e4a-5813-47f6-8984-015f45f18049",
    "image": "perev_left",
    "point": {
      "latitude": 52.1068730188,
      "longitude": 27.6928593269
    }
  },
  "60042c97-a839-4788-869a-ff8b4832e9de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 176",
      "id": "60042c97-a839-4788-869a-ff8b4832e9de",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60042c97-a839-4788-869a-ff8b4832e9de",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1338563719,
      "longitude": 28.8301449251
    }
  },
  "601cfc60-3138-470b-bb55-0a4a69953894": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 18",
      "id": "601cfc60-3138-470b-bb55-0a4a69953894",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "601cfc60-3138-470b-bb55-0a4a69953894",
    "image": "perev_right",
    "point": {
      "latitude": 51.5162561512,
      "longitude": 29.8960170098
    }
  },
  "603d93d5-a5c5-4cfb-a7da-6a5fbc91621f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "603d93d5-a5c5-4cfb-a7da-6a5fbc91621f",
      "kilometrage": 316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "603d93d5-a5c5-4cfb-a7da-6a5fbc91621f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0808030219,
      "longitude": 28.119287762
    }
  },
  "6087241e-27c1-406b-aac9-6e475edb669d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 350",
      "id": "6087241e-27c1-406b-aac9-6e475edb669d",
      "kilometrage": 350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6087241e-27c1-406b-aac9-6e475edb669d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.082333304,
      "longitude": 27.8081406433
    }
  },
  "60b2b30f-5ca0-4074-b0e5-d5b4970a5a0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 417",
      "id": "60b2b30f-5ca0-4074-b0e5-d5b4970a5a0b",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60b2b30f-5ca0-4074-b0e5-d5b4970a5a0b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1564562051,
      "longitude": 27.348706027
    }
  },
  "60c62176-36fc-46a2-9523-3f7de9309487": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "60c62176-36fc-46a2-9523-3f7de9309487",
      "kilometrage": 340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60c62176-36fc-46a2-9523-3f7de9309487",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0730075572,
      "longitude": 27.9186054134
    }
  },
  "61128285-7d83-45da-9cbc-1f14d3962823": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 230",
      "id": "61128285-7d83-45da-9cbc-1f14d3962823",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61128285-7d83-45da-9cbc-1f14d3962823",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1298381326,
      "longitude": 28.5670855382
    }
  },
  "61155a95-ec58-496e-a841-73aafcfc85ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "61155a95-ec58-496e-a841-73aafcfc85ca",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61155a95-ec58-496e-a841-73aafcfc85ca",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.104211789,
      "longitude": 28.5112401876
    }
  },
  "618946cd-c643-441b-b78a-3be2862868f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "618946cd-c643-441b-b78a-3be2862868f8",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "618946cd-c643-441b-b78a-3be2862868f8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0289899331,
      "longitude": 29.3169281418
    }
  },
  "61c1dda1-16af-4f24-a600-8770c2d3d75e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 182",
      "id": "61c1dda1-16af-4f24-a600-8770c2d3d75e",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61c1dda1-16af-4f24-a600-8770c2d3d75e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1107447665,
      "longitude": 28.7742018916
    }
  },
  "61d5b581-b0b6-448f-9352-d46308eb4b85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 360",
      "id": "61d5b581-b0b6-448f-9352-d46308eb4b85",
      "kilometrage": 375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61d5b581-b0b6-448f-9352-d46308eb4b85",
    "image": "perev_right",
    "point": {
      "latitude": 52.1089583334,
      "longitude": 27.5902135734
    }
  },
  "61f4290f-d794-4047-8e3f-742665f6b988": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "61f4290f-d794-4047-8e3f-742665f6b988",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61f4290f-d794-4047-8e3f-742665f6b988",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.0725925931,
      "longitude": 29.2431727907
    }
  },
  "61fffa37-bd9a-430d-8f48-01325ac2a768": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 173",
      "id": "61fffa37-bd9a-430d-8f48-01325ac2a768",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61fffa37-bd9a-430d-8f48-01325ac2a768",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0996738677,
      "longitude": 29.1604376613
    }
  },
  "623f532f-c887-400f-b372-2c1f576df228": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 92",
      "id": "623f532f-c887-400f-b372-2c1f576df228",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "623f532f-c887-400f-b372-2c1f576df228",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7925351328,
      "longitude": 29.5281270005
    }
  },
  "628155b8-f67a-44f2-94ac-9afbd78a14e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 225",
      "id": "628155b8-f67a-44f2-94ac-9afbd78a14e6",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "628155b8-f67a-44f2-94ac-9afbd78a14e6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1034669184,
      "longitude": 28.4789358286
    }
  },
  "62910d2a-c6c5-40ca-986f-aa12d1f19ce1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 145",
      "id": "62910d2a-c6c5-40ca-986f-aa12d1f19ce1",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62910d2a-c6c5-40ca-986f-aa12d1f19ce1",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7990387144,
      "longitude": 29.5201133895
    }
  },
  "62bcfe0c-d588-4667-a082-d89bb7f91dae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 200",
      "id": "62bcfe0c-d588-4667-a082-d89bb7f91dae",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62bcfe0c-d588-4667-a082-d89bb7f91dae",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1329606304,
      "longitude": 28.9042906261
    }
  },
  "62df7405-de9e-46dc-981e-d1cebf03e221": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "62df7405-de9e-46dc-981e-d1cebf03e221",
      "kilometrage": 324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62df7405-de9e-46dc-981e-d1cebf03e221",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0611518033,
      "longitude": 28.0618705604
    }
  },
  "63ca272f-42b2-42f2-a73d-477f56e96f8b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "63ca272f-42b2-42f2-a73d-477f56e96f8b",
      "kilometrage": 224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63ca272f-42b2-42f2-a73d-477f56e96f8b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1379326511,
      "longitude": 28.9097161753
    }
  },
  "63ee286a-7482-4662-8da8-8694e98a7f3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 200",
      "id": "63ee286a-7482-4662-8da8-8694e98a7f3b",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63ee286a-7482-4662-8da8-8694e98a7f3b",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.153732879,
      "longitude": 28.6878338522
    }
  },
  "63f02b5b-f2a4-4027-9b77-9adca3a5afaf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "63f02b5b-f2a4-4027-9b77-9adca3a5afaf",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63f02b5b-f2a4-4027-9b77-9adca3a5afaf",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7137509035,
      "longitude": 29.6711622151
    }
  },
  "63fc2475-521b-4d7a-9afe-321a659a4522": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 370",
      "id": "63fc2475-521b-4d7a-9afe-321a659a4522",
      "kilometrage": 381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63fc2475-521b-4d7a-9afe-321a659a4522",
    "image": "perev_left",
    "point": {
      "latitude": 52.1311440107,
      "longitude": 27.5531782327
    }
  },
  "6422aac4-6f1b-4618-87c7-df1b97175db0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "6422aac4-6f1b-4618-87c7-df1b97175db0",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6422aac4-6f1b-4618-87c7-df1b97175db0",
    "image": "perev_left",
    "point": {
      "latitude": 51.798214216,
      "longitude": 29.5733679617
    }
  },
  "642d152f-5636-4d07-ad34-699d6ef6c357": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 147",
      "id": "642d152f-5636-4d07-ad34-699d6ef6c357",
      "kilometrage": 212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "642d152f-5636-4d07-ad34-699d6ef6c357",
    "image": "perev_left",
    "point": {
      "latitude": 52.1337597394,
      "longitude": 29.0073521586
    }
  },
  "64b31a3c-1943-43f1-b8e0-2dbb16539ce0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 145",
      "id": "64b31a3c-1943-43f1-b8e0-2dbb16539ce0",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64b31a3c-1943-43f1-b8e0-2dbb16539ce0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1271885196,
      "longitude": 29.0244100811
    }
  },
  "64bb7ab1-e4ed-48bb-a0c6-c6ede765796c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 383",
      "id": "64bb7ab1-e4ed-48bb-a0c6-c6ede765796c",
      "kilometrage": 391,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64bb7ab1-e4ed-48bb-a0c6-c6ede765796c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1264260188,
      "longitude": 27.4864230548
    }
  },
  "651729b3-8f44-4b88-9c41-d576877793cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 140",
      "id": "651729b3-8f44-4b88-9c41-d576877793cc",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "651729b3-8f44-4b88-9c41-d576877793cc",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7900091894,
      "longitude": 29.5763052126
    }
  },
  "655ab460-ffe0-4e40-bfb1-6597380aab74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 236",
      "id": "655ab460-ffe0-4e40-bfb1-6597380aab74",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "655ab460-ffe0-4e40-bfb1-6597380aab74",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1175376912,
      "longitude": 28.4917383544
    }
  },
  "656d34e0-5ee5-4400-aaeb-03014d2a3b2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 64",
      "id": "656d34e0-5ee5-4400-aaeb-03014d2a3b2b",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "656d34e0-5ee5-4400-aaeb-03014d2a3b2b",
    "image": "perev_right",
    "point": {
      "latitude": 51.7157570413,
      "longitude": 29.6713883511
    }
  },
  "657ae23c-f236-45e5-8f16-52e874672af1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 224",
      "id": "657ae23c-f236-45e5-8f16-52e874672af1",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "657ae23c-f236-45e5-8f16-52e874672af1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1432904449,
      "longitude": 28.6322648449
    }
  },
  "65d3b808-808c-4d0c-a285-c46227ade90b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 324",
      "id": "65d3b808-808c-4d0c-a285-c46227ade90b",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65d3b808-808c-4d0c-a285-c46227ade90b",
    "image": "perev_right",
    "point": {
      "latitude": 52.086363444,
      "longitude": 27.7891625423
    }
  },
  "661b5906-3b60-4c04-927e-d6659b81e88d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "661b5906-3b60-4c04-927e-d6659b81e88d",
      "kilometrage": 361,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "661b5906-3b60-4c04-927e-d6659b81e88d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0984308039,
      "longitude": 27.691859071
    }
  },
  "66bafdd8-f8b0-41b5-901a-6dc4b79db483": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 402",
      "id": "66bafdd8-f8b0-41b5-901a-6dc4b79db483",
      "kilometrage": 400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66bafdd8-f8b0-41b5-901a-6dc4b79db483",
    "image": "perev_right",
    "point": {
      "latitude": 52.1328262429,
      "longitude": 27.4145942011
    }
  },
  "66cd4323-9c5f-4818-bc1b-96ebff5c24ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "66cd4323-9c5f-4818-bc1b-96ebff5c24ca",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66cd4323-9c5f-4818-bc1b-96ebff5c24ca",
    "image": "perev_right",
    "point": {
      "latitude": 52.0947247396,
      "longitude": 29.167107537
    }
  },
  "66e1abca-68d2-42e8-bc50-da645619d036": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "66e1abca-68d2-42e8-bc50-da645619d036",
      "kilometrage": 334,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66e1abca-68d2-42e8-bc50-da645619d036",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0750096496,
      "longitude": 27.9734176664
    }
  },
  "671417d2-10eb-4d3c-ac0f-03ac14d1d7bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 195",
      "id": "671417d2-10eb-4d3c-ac0f-03ac14d1d7bc",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "671417d2-10eb-4d3c-ac0f-03ac14d1d7bc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0961205075,
      "longitude": 29.1856010142
    }
  },
  "671c0f55-1c40-4ce1-8b53-b6b77ded9e6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 339",
      "id": "671c0f55-1c40-4ce1-8b53-b6b77ded9e6c",
      "kilometrage": 361,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "671c0f55-1c40-4ce1-8b53-b6b77ded9e6c",
    "image": "perev_right",
    "point": {
      "latitude": 52.0993338165,
      "longitude": 27.6904228655
    }
  },
  "674750ad-7541-439a-a75c-ddcf58baed15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "674750ad-7541-439a-a75c-ddcf58baed15",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "674750ad-7541-439a-a75c-ddcf58baed15",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0585700418,
      "longitude": 29.2491043608
    }
  },
  "6770c6ff-4e42-499e-bca0-67c888a00a9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 130",
      "id": "6770c6ff-4e42-499e-bca0-67c888a00a9b",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6770c6ff-4e42-499e-bca0-67c888a00a9b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1021377986,
      "longitude": 29.1615359229
    }
  },
  "67d9fde3-40e7-4942-890e-b67c8ee13d7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "67d9fde3-40e7-4942-890e-b67c8ee13d7c",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67d9fde3-40e7-4942-890e-b67c8ee13d7c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6690577749,
      "longitude": 29.7061597676
    }
  },
  "67ecaa73-3ded-47ce-aeae-1d66464d2add": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 115",
      "id": "67ecaa73-3ded-47ce-aeae-1d66464d2add",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67ecaa73-3ded-47ce-aeae-1d66464d2add",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9259498711,
      "longitude": 29.5068437464
    }
  },
  "682c9a66-7f3f-4540-84d3-4d19b24d9ab5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 105",
      "id": "682c9a66-7f3f-4540-84d3-4d19b24d9ab5",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "682c9a66-7f3f-4540-84d3-4d19b24d9ab5",
    "image": "kilometrage",
    "point": {
      "latitude": 51.6377928992,
      "longitude": 29.7484452691
    }
  },
  "683e9dde-d161-4765-b452-1e8905b3eb03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 169",
      "id": "683e9dde-d161-4765-b452-1e8905b3eb03",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "683e9dde-d161-4765-b452-1e8905b3eb03",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0887642054,
      "longitude": 29.196931222
    }
  },
  "686cc608-3b59-4663-9087-4c2da23049f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 342",
      "id": "686cc608-3b59-4663-9087-4c2da23049f5",
      "kilometrage": 363,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "686cc608-3b59-4663-9087-4c2da23049f5",
    "image": "perev_right",
    "point": {
      "latitude": 52.103582895,
      "longitude": 27.6791098719
    }
  },
  "6881fbba-d570-4b13-833b-278125ae3427": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "6881fbba-d570-4b13-833b-278125ae3427",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6881fbba-d570-4b13-833b-278125ae3427",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0709756408,
      "longitude": 28.3737764678
    }
  },
  "68926c3d-5a04-468c-8d81-f4ef7ba8d9bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 41",
      "id": "68926c3d-5a04-468c-8d81-f4ef7ba8d9bc",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68926c3d-5a04-468c-8d81-f4ef7ba8d9bc",
    "image": "perev_right",
    "point": {
      "latitude": 51.6062660748,
      "longitude": 29.7956366146
    }
  },
  "68c53a9c-ec0e-4083-89fe-2cf42de419bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 216",
      "id": "68c53a9c-ec0e-4083-89fe-2cf42de419bf",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68c53a9c-ec0e-4083-89fe-2cf42de419bf",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1185321724,
      "longitude": 28.6976467788
    }
  },
  "69020f91-1512-4689-976a-587def9db254": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "69020f91-1512-4689-976a-587def9db254",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69020f91-1512-4689-976a-587def9db254",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1228511017,
      "longitude": 28.9348834296
    }
  },
  "69ecac44-0f11-4bcd-a85c-5e290bdd8c35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "69ecac44-0f11-4bcd-a85c-5e290bdd8c35",
      "kilometrage": 274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69ecac44-0f11-4bcd-a85c-5e290bdd8c35",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1161834626,
      "longitude": 28.5021706387
    }
  },
  "6a2271bf-18ca-4ef4-b278-6292ee12d703": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "6a2271bf-18ca-4ef4-b278-6292ee12d703",
      "kilometrage": 332,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a2271bf-18ca-4ef4-b278-6292ee12d703",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0745140712,
      "longitude": 27.9977194269
    }
  },
  "6a30b66f-105a-49f7-acf1-33f661675424": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "6a30b66f-105a-49f7-acf1-33f661675424",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a30b66f-105a-49f7-acf1-33f661675424",
    "image": "buyo_right",
    "point": {
      "latitude": 51.490428,
      "longitude": 29.955533806
    }
  },
  "6aa11dd9-353f-45ce-a82a-ccef82f6d73d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 149",
      "id": "6aa11dd9-353f-45ce-a82a-ccef82f6d73d",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6aa11dd9-353f-45ce-a82a-ccef82f6d73d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1327260677,
      "longitude": 28.9907719281
    }
  },
  "6abbcf56-958a-42da-81bd-e54c70731a68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "6abbcf56-958a-42da-81bd-e54c70731a68",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6abbcf56-958a-42da-81bd-e54c70731a68",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9519568434,
      "longitude": 29.4596351734
    }
  },
  "6ae2eaa7-ecdd-4bee-be5f-b8011322f74f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 36",
      "id": "6ae2eaa7-ecdd-4bee-be5f-b8011322f74f",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ae2eaa7-ecdd-4bee-be5f-b8011322f74f",
    "image": "buyo_left",
    "point": {
      "latitude": 51.608785082,
      "longitude": 29.7802208231
    }
  },
  "6aef3859-fc07-4efe-afd3-0906b2e99d07": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 161",
      "id": "6aef3859-fc07-4efe-afd3-0906b2e99d07",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6aef3859-fc07-4efe-afd3-0906b2e99d07",
    "image": "perev_right",
    "point": {
      "latitude": 52.1345859861,
      "longitude": 28.9074205277
    }
  },
  "6b2c0567-e50b-42ca-af3a-73b8f8e32f76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "6b2c0567-e50b-42ca-af3a-73b8f8e32f76",
      "kilometrage": 369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b2c0567-e50b-42ca-af3a-73b8f8e32f76",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0985210328,
      "longitude": 27.635837707
    }
  },
  "6b793a3a-1145-4d69-9c6b-c100c4f8216f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 367",
      "id": "6b793a3a-1145-4d69-9c6b-c100c4f8216f",
      "kilometrage": 379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b793a3a-1145-4d69-9c6b-c100c4f8216f",
    "image": "perev_right",
    "point": {
      "latitude": 52.113578064,
      "longitude": 27.5565579182
    }
  },
  "6b8fe4e5-59c8-4c49-b148-26ff0bf46bf5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 346",
      "id": "6b8fe4e5-59c8-4c49-b148-26ff0bf46bf5",
      "kilometrage": 366,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b8fe4e5-59c8-4c49-b148-26ff0bf46bf5",
    "image": "perev_left",
    "point": {
      "latitude": 52.1137062587,
      "longitude": 27.6525245153
    }
  },
  "6bd792f2-f82b-485f-954a-9f937a19dd4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 275",
      "id": "6bd792f2-f82b-485f-954a-9f937a19dd4d",
      "kilometrage": 317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bd792f2-f82b-485f-954a-9f937a19dd4d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0795240658,
      "longitude": 28.1168837335
    }
  },
  "6c2de47a-4e5b-45af-b026-3571e42e19c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 355",
      "id": "6c2de47a-4e5b-45af-b026-3571e42e19c3",
      "kilometrage": 372,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c2de47a-4e5b-45af-b026-3571e42e19c3",
    "image": "perev_right",
    "point": {
      "latitude": 52.0950207146,
      "longitude": 27.6031639567
    }
  },
  "6c63cfc7-cf62-4960-94ba-d9c8e6a2e5c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 125",
      "id": "6c63cfc7-cf62-4960-94ba-d9c8e6a2e5c4",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c63cfc7-cf62-4960-94ba-d9c8e6a2e5c4",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7662415957,
      "longitude": 29.6747534721
    }
  },
  "6c6e5d98-4282-426e-97c9-0eb6c37dfa0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "6c6e5d98-4282-426e-97c9-0eb6c37dfa0d",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c6e5d98-4282-426e-97c9-0eb6c37dfa0d",
    "image": "name_of",
    "point": {
      "latitude": 51.7658327595,
      "longitude": 29.5724485843
    }
  },
  "6ce4ab72-7597-4d0f-a37f-df1ebc63ef01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6ce4ab72-7597-4d0f-a37f-df1ebc63ef01",
      "kilometrage": 349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ce4ab72-7597-4d0f-a37f-df1ebc63ef01",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0794988215,
      "longitude": 27.8212191212
    }
  },
  "6cf2dd33-9349-4bb3-9397-43fb36d416e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "6cf2dd33-9349-4bb3-9397-43fb36d416e9",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6cf2dd33-9349-4bb3-9397-43fb36d416e9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1346637175,
      "longitude": 28.6705962948
    }
  },
  "6cf5b09c-3dd2-4997-903a-4a933235298f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 190",
      "id": "6cf5b09c-3dd2-4997-903a-4a933235298f",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6cf5b09c-3dd2-4997-903a-4a933235298f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.135662371,
      "longitude": 28.9948633183
    }
  },
  "6d159720-61ae-45ef-8468-ed0158d2c1d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 344",
      "id": "6d159720-61ae-45ef-8468-ed0158d2c1d7",
      "kilometrage": 364,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d159720-61ae-45ef-8468-ed0158d2c1d7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1039594976,
      "longitude": 27.6627634856
    }
  },
  "6d2d090e-c973-4810-a6aa-d9720f019b9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "6d2d090e-c973-4810-a6aa-d9720f019b9b",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d2d090e-c973-4810-a6aa-d9720f019b9b",
    "image": "name_of",
    "point": {
      "latitude": 52.077159526,
      "longitude": 29.2165764001
    }
  },
  "6d8763ef-65e0-438d-9b77-5893b8629acd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "6d8763ef-65e0-438d-9b77-5893b8629acd",
      "kilometrage": 388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d8763ef-65e0-438d-9b77-5893b8629acd",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1243048562,
      "longitude": 27.5139821248
    }
  },
  "6dd6985f-de43-4e05-9f97-04b15a0d795d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 416",
      "id": "6dd6985f-de43-4e05-9f97-04b15a0d795d",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6dd6985f-de43-4e05-9f97-04b15a0d795d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1550327033,
      "longitude": 27.35547937
    }
  },
  "6ddf7524-745b-4d55-b367-c319d04c3510": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 260",
      "id": "6ddf7524-745b-4d55-b367-c319d04c3510",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ddf7524-745b-4d55-b367-c319d04c3510",
    "image": "perev_right",
    "point": {
      "latitude": 52.1050120817,
      "longitude": 28.2130513436
    }
  },
  "6e510c8f-749b-4c80-a815-98c98667714d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 274",
      "id": "6e510c8f-749b-4c80-a815-98c98667714d",
      "kilometrage": 316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e510c8f-749b-4c80-a815-98c98667714d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0842032936,
      "longitude": 28.1300940279
    }
  },
  "6ed06f5d-35a9-4869-b467-e25e221b404b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 241",
      "id": "6ed06f5d-35a9-4869-b467-e25e221b404b",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ed06f5d-35a9-4869-b467-e25e221b404b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0937089177,
      "longitude": 28.4332437187
    }
  },
  "6ed3ef3e-20d4-4b9e-8aa9-9691aae7d22c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 136",
      "id": "6ed3ef3e-20d4-4b9e-8aa9-9691aae7d22c",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ed3ef3e-20d4-4b9e-8aa9-9691aae7d22c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9987609754,
      "longitude": 29.348059434
    }
  },
  "6ee71129-6362-4abb-b031-845af82a0d37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "6ee71129-6362-4abb-b031-845af82a0d37",
      "kilometrage": 377,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ee71129-6362-4abb-b031-845af82a0d37",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1135950602,
      "longitude": 27.5821749777
    }
  },
  "6f80e4cb-9675-4886-a5c9-c36a4c626944": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "6f80e4cb-9675-4886-a5c9-c36a4c626944",
      "kilometrage": 336,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f80e4cb-9675-4886-a5c9-c36a4c626944",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0714862285,
      "longitude": 27.9588676517
    }
  },
  "6f8fb27d-6ba0-4643-98e3-760c0b82a579": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 347",
      "id": "6f8fb27d-6ba0-4643-98e3-760c0b82a579",
      "kilometrage": 366,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f8fb27d-6ba0-4643-98e3-760c0b82a579",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1132730467,
      "longitude": 27.6438065307
    }
  },
  "6f932780-7ed1-41e6-925e-1a873d1e2fa3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "6f932780-7ed1-41e6-925e-1a873d1e2fa3",
      "kilometrage": 375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f932780-7ed1-41e6-925e-1a873d1e2fa3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1125897981,
      "longitude": 27.5943517072
    }
  },
  "6f9db26b-ea75-4242-8526-3cf54469e0f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "6f9db26b-ea75-4242-8526-3cf54469e0f2",
      "kilometrage": 324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f9db26b-ea75-4242-8526-3cf54469e0f2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0615875964,
      "longitude": 28.0592563559
    }
  },
  "6fadca0f-d161-4024-9e44-ef6ade2270c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "6fadca0f-d161-4024-9e44-ef6ade2270c1",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fadca0f-d161-4024-9e44-ef6ade2270c1",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1014331808,
      "longitude": 28.4175141676
    }
  },
  "6fca1f66-f294-425e-af55-6e95a82bfd1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "6fca1f66-f294-425e-af55-6e95a82bfd1a",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fca1f66-f294-425e-af55-6e95a82bfd1a",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0458958008,
      "longitude": 29.2880355402
    }
  },
  "6fd4fdfa-d1df-453f-9aca-7c6067f000d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 131",
      "id": "6fd4fdfa-d1df-453f-9aca-7c6067f000d7",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fd4fdfa-d1df-453f-9aca-7c6067f000d7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9817121224,
      "longitude": 29.3744602579
    }
  },
  "6ff94019-edd1-4eff-9b86-7a358e6c715f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "6ff94019-edd1-4eff-9b86-7a358e6c715f",
      "kilometrage": 403,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ff94019-edd1-4eff-9b86-7a358e6c715f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1462796331,
      "longitude": 27.3975863092
    }
  },
  "6fff98ad-7e00-4b94-84ff-d705a6f4173b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 37",
      "id": "6fff98ad-7e00-4b94-84ff-d705a6f4173b",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fff98ad-7e00-4b94-84ff-d705a6f4173b",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.5926602599,
      "longitude": 29.8132318337
    }
  },
  "7018c2b9-e9d2-41fb-9c27-9c8e557fff74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7018c2b9-e9d2-41fb-9c27-9c8e557fff74",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7018c2b9-e9d2-41fb-9c27-9c8e557fff74",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1292374101,
      "longitude": 28.9177563315
    }
  },
  "702cd499-a987-499f-980d-23a0de9ee749": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 190",
      "id": "702cd499-a987-499f-980d-23a0de9ee749",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "702cd499-a987-499f-980d-23a0de9ee749",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1062445578,
      "longitude": 28.7259187706
    }
  },
  "7035346a-73be-4281-a65b-fbc82e53b87c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "7035346a-73be-4281-a65b-fbc82e53b87c",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7035346a-73be-4281-a65b-fbc82e53b87c",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1090783794,
      "longitude": 29.1601921972
    }
  },
  "709cf72a-352a-4565-b170-cab3b45539e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 56",
      "id": "709cf72a-352a-4565-b170-cab3b45539e8",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "709cf72a-352a-4565-b170-cab3b45539e8",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.6757014245,
      "longitude": 29.6901256266
    }
  },
  "709ffcd7-438d-463f-abd8-51c721a6dec8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "709ffcd7-438d-463f-abd8-51c721a6dec8",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "709ffcd7-438d-463f-abd8-51c721a6dec8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0770362374,
      "longitude": 27.7295901031
    }
  },
  "70a42b5f-89d0-4388-ad1a-de2b043b917d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 287",
      "id": "70a42b5f-89d0-4388-ad1a-de2b043b917d",
      "kilometrage": 343,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70a42b5f-89d0-4388-ad1a-de2b043b917d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0648909066,
      "longitude": 27.8917238003
    }
  },
  "7135417a-4553-436d-b897-73f5cfffcccf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7135417a-4553-436d-b897-73f5cfffcccf",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7135417a-4553-436d-b897-73f5cfffcccf",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1000852843,
      "longitude": 28.4091525955
    }
  },
  "714d4c13-c8cc-4e52-ab28-6b4512a7284a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "714d4c13-c8cc-4e52-ab28-6b4512a7284a",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "714d4c13-c8cc-4e52-ab28-6b4512a7284a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.074328092,
      "longitude": 28.3779357596
    }
  },
  "71f5f654-5b5c-4990-a205-d78144dca83e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 260а",
      "id": "71f5f654-5b5c-4990-a205-d78144dca83e",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "71f5f654-5b5c-4990-a205-d78144dca83e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1030321263,
      "longitude": 28.2871785427
    }
  },
  "72245e24-0ba7-4d17-9775-0d0c5805335e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 235",
      "id": "72245e24-0ba7-4d17-9775-0d0c5805335e",
      "kilometrage": 274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72245e24-0ba7-4d17-9775-0d0c5805335e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1113623382,
      "longitude": 28.505418503
    }
  },
  "723101f9-bd21-448d-adca-8d0a3020fa84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 372",
      "id": "723101f9-bd21-448d-adca-8d0a3020fa84",
      "kilometrage": 383,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "723101f9-bd21-448d-adca-8d0a3020fa84",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1197687046,
      "longitude": 27.5331218133
    }
  },
  "726c9f9f-885f-4d22-a0df-8dee7df61772": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 116",
      "id": "726c9f9f-885f-4d22-a0df-8dee7df61772",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "726c9f9f-885f-4d22-a0df-8dee7df61772",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0210925954,
      "longitude": 29.3285748448
    }
  },
  "72762ad2-b1c4-4a68-ae5a-5d8f6cf71ca6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 183",
      "id": "72762ad2-b1c4-4a68-ae5a-5d8f6cf71ca6",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72762ad2-b1c4-4a68-ae5a-5d8f6cf71ca6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1171983991,
      "longitude": 29.0781539494
    }
  },
  "7318edb5-cfd9-43a6-a358-5f0fcf774b47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "7318edb5-cfd9-43a6-a358-5f0fcf774b47",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7318edb5-cfd9-43a6-a358-5f0fcf774b47",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1356374892,
      "longitude": 28.5904048752
    }
  },
  "73591547-3569-4bca-ab55-19b2cc62ee32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 42",
      "id": "73591547-3569-4bca-ab55-19b2cc62ee32",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73591547-3569-4bca-ab55-19b2cc62ee32",
    "image": "perev_right",
    "point": {
      "latitude": 51.6077498801,
      "longitude": 29.7798228811
    }
  },
  "73a6a914-a4c0-4d2b-a331-67caf9035f3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "73a6a914-a4c0-4d2b-a331-67caf9035f3c",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73a6a914-a4c0-4d2b-a331-67caf9035f3c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0693126926,
      "longitude": 29.2428715149
    }
  },
  "73c28977-e3ff-454d-9df0-82643bab5d01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "73c28977-e3ff-454d-9df0-82643bab5d01",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73c28977-e3ff-454d-9df0-82643bab5d01",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1161903417,
      "longitude": 29.1233518466
    }
  },
  "74449339-c2d2-4ec0-9410-021ceb38f20d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "74449339-c2d2-4ec0-9410-021ceb38f20d",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74449339-c2d2-4ec0-9410-021ceb38f20d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1076478727,
      "longitude": 28.7600710671
    }
  },
  "746c9da8-035a-4797-a150-469e38bf3893": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 34",
      "id": "746c9da8-035a-4797-a150-469e38bf3893",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "746c9da8-035a-4797-a150-469e38bf3893",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.5929628634,
      "longitude": 29.8459217432
    }
  },
  "7486cc0b-6da3-4bed-9c09-36170a97141c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7486cc0b-6da3-4bed-9c09-36170a97141c",
      "kilometrage": 328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7486cc0b-6da3-4bed-9c09-36170a97141c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0699700865,
      "longitude": 28.0255428148
    }
  },
  "74930b5e-9f7a-42f2-92d6-8e6357d6f3be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "74930b5e-9f7a-42f2-92d6-8e6357d6f3be",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74930b5e-9f7a-42f2-92d6-8e6357d6f3be",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5193059234,
      "longitude": 29.8897708485
    }
  },
  "7507bbd5-aa60-467a-8988-eb96a68df793": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 245",
      "id": "7507bbd5-aa60-467a-8988-eb96a68df793",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7507bbd5-aa60-467a-8988-eb96a68df793",
    "image": "perev_left",
    "point": {
      "latitude": 52.0774891115,
      "longitude": 28.3363882295
    }
  },
  "757aa841-5ebf-47f3-9763-3ae434e3ccfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "757aa841-5ebf-47f3-9763-3ae434e3ccfa",
      "kilometrage": 355,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "757aa841-5ebf-47f3-9763-3ae434e3ccfa",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0744299513,
      "longitude": 27.7556207149
    }
  },
  "758b8332-f720-4590-b670-5f24b5ad5525": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "758b8332-f720-4590-b670-5f24b5ad5525",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "758b8332-f720-4590-b670-5f24b5ad5525",
    "image": "buyo_right",
    "point": {
      "latitude": 51.4751724242,
      "longitude": 29.9731212285
    }
  },
  "75bf4490-ffbf-4849-8f3e-194c6e125000": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 325",
      "id": "75bf4490-ffbf-4849-8f3e-194c6e125000",
      "kilometrage": 325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75bf4490-ffbf-4849-8f3e-194c6e125000",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0629361302,
      "longitude": 28.0550946799
    }
  },
  "7626845d-8576-471d-b850-af7a78ad3928": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "7626845d-8576-471d-b850-af7a78ad3928",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7626845d-8576-471d-b850-af7a78ad3928",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7129854374,
      "longitude": 29.6721732174
    }
  },
  "7680b8fa-486d-4c34-a661-6b334b3c6c32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй м 80а",
      "id": "7680b8fa-486d-4c34-a661-6b334b3c6c32",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7680b8fa-486d-4c34-a661-6b334b3c6c32",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7613490332,
      "longitude": 29.5845025203
    }
  },
  "770d6c81-2e6b-4185-bc63-061bc40d9a63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 79",
      "id": "770d6c81-2e6b-4185-bc63-061bc40d9a63",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "770d6c81-2e6b-4185-bc63-061bc40d9a63",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7599099708,
      "longitude": 29.5890677894
    }
  },
  "782c7452-b80c-41c4-ba98-f835a29632d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 16",
      "id": "782c7452-b80c-41c4-ba98-f835a29632d9",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "782c7452-b80c-41c4-ba98-f835a29632d9",
    "image": "perev_left",
    "point": {
      "latitude": 51.5112049935,
      "longitude": 29.9096573495
    }
  },
  "78d9f2b1-bcdd-43a6-b1b3-f88f30b3bcba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 105",
      "id": "78d9f2b1-bcdd-43a6-b1b3-f88f30b3bcba",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78d9f2b1-bcdd-43a6-b1b3-f88f30b3bcba",
    "image": "perev_left",
    "point": {
      "latitude": 51.8760160029,
      "longitude": 29.4872208598
    }
  },
  "7985fada-7e66-4a26-aa53-321add9a29d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "7985fada-7e66-4a26-aa53-321add9a29d3",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7985fada-7e66-4a26-aa53-321add9a29d3",
    "image": "perev_left",
    "point": {
      "latitude": 51.4853201253,
      "longitude": 29.9893704847
    }
  },
  "798bf5cf-d56e-4e98-a353-05803039cfc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "798bf5cf-d56e-4e98-a353-05803039cfc1",
      "kilometrage": 389,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "798bf5cf-d56e-4e98-a353-05803039cfc1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1259296188,
      "longitude": 27.5078000921
    }
  },
  "799817b7-e92c-4a29-ab45-c853a153c330": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 174",
      "id": "799817b7-e92c-4a29-ab45-c853a153c330",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "799817b7-e92c-4a29-ab45-c853a153c330",
    "image": "perev_right",
    "point": {
      "latitude": 52.1186894822,
      "longitude": 28.8353814243
    }
  },
  "79c4adfd-4dd2-4512-bd81-4ba1f5689d6b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 193",
      "id": "79c4adfd-4dd2-4512-bd81-4ba1f5689d6b",
      "kilometrage": 216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79c4adfd-4dd2-4512-bd81-4ba1f5689d6b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1175587434,
      "longitude": 28.9626408937
    }
  },
  "7a1b1218-fa84-4fc5-a81b-d3279096e34b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "7a1b1218-fa84-4fc5-a81b-d3279096e34b",
      "kilometrage": 330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a1b1218-fa84-4fc5-a81b-d3279096e34b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0662390208,
      "longitude": 27.9970630548
    }
  },
  "7a3a0b09-108d-4157-b622-52526bd820ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "7a3a0b09-108d-4157-b622-52526bd820ae",
      "kilometrage": 313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a3a0b09-108d-4157-b622-52526bd820ae",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0848102041,
      "longitude": 28.1631291385
    }
  },
  "7a4ea742-f4cc-41ed-baaf-45d6a05967ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "7a4ea742-f4cc-41ed-baaf-45d6a05967ba",
      "kilometrage": 318,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a4ea742-f4cc-41ed-baaf-45d6a05967ba",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0729002047,
      "longitude": 28.1139181211
    }
  },
  "7a685cd1-9f0a-425a-a4a4-f721a18b6707": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 226",
      "id": "7a685cd1-9f0a-425a-a4a4-f721a18b6707",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a685cd1-9f0a-425a-a4a4-f721a18b6707",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1342311115,
      "longitude": 28.6059653268
    }
  },
  "7af44e92-6d46-4be5-b567-da3a6c267f5a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "7af44e92-6d46-4be5-b567-da3a6c267f5a",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7af44e92-6d46-4be5-b567-da3a6c267f5a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1181677029,
      "longitude": 28.1975358271
    }
  },
  "7b1def91-bf26-4f3a-b593-571a904bd5a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 200",
      "id": "7b1def91-bf26-4f3a-b593-571a904bd5a8",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b1def91-bf26-4f3a-b593-571a904bd5a8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1208602278,
      "longitude": 29.1452783186
    }
  },
  "7b4520fa-3a57-42fd-8ef0-c2339bf09421": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "7b4520fa-3a57-42fd-8ef0-c2339bf09421",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b4520fa-3a57-42fd-8ef0-c2339bf09421",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8819035726,
      "longitude": 29.4828125866
    }
  },
  "7b7323fd-eafe-4eba-b08a-5c8bb3ea157b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 260",
      "id": "7b7323fd-eafe-4eba-b08a-5c8bb3ea157b",
      "kilometrage": 299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b7323fd-eafe-4eba-b08a-5c8bb3ea157b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1059218417,
      "longitude": 28.2639316253
    }
  },
  "7bc6f45f-9967-409e-9dc0-82af907dd73f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7bc6f45f-9967-409e-9dc0-82af907dd73f",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7bc6f45f-9967-409e-9dc0-82af907dd73f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0262020615,
      "longitude": 29.3219294374
    }
  },
  "7c03c688-4a43-4ec2-b27f-76d43073ec52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 126",
      "id": "7c03c688-4a43-4ec2-b27f-76d43073ec52",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c03c688-4a43-4ec2-b27f-76d43073ec52",
    "image": "perev_left",
    "point": {
      "latitude": 52.0934736365,
      "longitude": 29.1918974236
    }
  },
  "7c9aa53b-bfab-4e3c-8152-1becb5460dec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "7c9aa53b-bfab-4e3c-8152-1becb5460dec",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c9aa53b-bfab-4e3c-8152-1becb5460dec",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0479478336,
      "longitude": 29.2823604341
    }
  },
  "7c9f2251-d98c-493b-a4a1-f4e6529729ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "7c9f2251-d98c-493b-a4a1-f4e6529729ff",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c9f2251-d98c-493b-a4a1-f4e6529729ff",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0763481304,
      "longitude": 29.2104590899
    }
  },
  "7ca07a83-4467-4c44-9947-e105d7815154": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 273",
      "id": "7ca07a83-4467-4c44-9947-e105d7815154",
      "kilometrage": 315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ca07a83-4467-4c44-9947-e105d7815154",
    "image": "perev_right",
    "point": {
      "latitude": 52.0850383604,
      "longitude": 28.1387592987
    }
  },
  "7cad28bc-41e7-4727-99d7-6f7d3f0310d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "7cad28bc-41e7-4727-99d7-6f7d3f0310d7",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cad28bc-41e7-4727-99d7-6f7d3f0310d7",
    "image": "perev_right",
    "point": {
      "latitude": 51.7583853446,
      "longitude": 29.6189904583
    }
  },
  "7cdf3e71-2a1b-4f55-aa44-4ba392096140": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "7cdf3e71-2a1b-4f55-aa44-4ba392096140",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cdf3e71-2a1b-4f55-aa44-4ba392096140",
    "image": "perev_left",
    "point": {
      "latitude": 51.7718074407,
      "longitude": 29.6293188755
    }
  },
  "7cdfb32b-7d23-4c4f-b29d-07234b9d0a96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 43",
      "id": "7cdfb32b-7d23-4c4f-b29d-07234b9d0a96",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cdfb32b-7d23-4c4f-b29d-07234b9d0a96",
    "image": "perev_left",
    "point": {
      "latitude": 51.6149353417,
      "longitude": 29.7795889242
    }
  },
  "7d8240ea-1401-42c0-84a2-fb7b92cea154": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 136",
      "id": "7d8240ea-1401-42c0-84a2-fb7b92cea154",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d8240ea-1401-42c0-84a2-fb7b92cea154",
    "image": "perev_right",
    "point": {
      "latitude": 52.1127146905,
      "longitude": 29.1145729143
    }
  },
  "7d9c1f56-52c0-44cd-87e8-8730f7e5a03d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "7d9c1f56-52c0-44cd-87e8-8730f7e5a03d",
      "kilometrage": 359,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d9c1f56-52c0-44cd-87e8-8730f7e5a03d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0911046741,
      "longitude": 27.7137746125
    }
  },
  "7da46bb1-eccd-420b-a4af-88473cddb094": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7da46bb1-eccd-420b-a4af-88473cddb094",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7da46bb1-eccd-420b-a4af-88473cddb094",
    "image": "attention",
    "point": {
      "latitude": 51.8765178001,
      "longitude": 29.4873482299
    }
  },
  "7da97f72-0b23-4eec-964f-d8123fddc27f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 168",
      "id": "7da97f72-0b23-4eec-964f-d8123fddc27f",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7da97f72-0b23-4eec-964f-d8123fddc27f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0854794846,
      "longitude": 29.2029425795
    }
  },
  "7daed179-2885-47ee-b720-6f079b7fd851": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 120",
      "id": "7daed179-2885-47ee-b720-6f079b7fd851",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7daed179-2885-47ee-b720-6f079b7fd851",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7360418807,
      "longitude": 29.6985993801
    }
  },
  "7db05fd3-7e71-4d42-a345-4612f72d25bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 209",
      "id": "7db05fd3-7e71-4d42-a345-4612f72d25bd",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7db05fd3-7e71-4d42-a345-4612f72d25bd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.115984306,
      "longitude": 28.788645972
    }
  },
  "7df942ea-2f32-4001-83cf-761bbbf2642e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7df942ea-2f32-4001-83cf-761bbbf2642e",
      "kilometrage": 316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7df942ea-2f32-4001-83cf-761bbbf2642e",
    "image": "attention",
    "point": {
      "latitude": 52.0817356652,
      "longitude": 28.1203697966
    }
  },
  "7dfb8fb8-b78e-498a-aef2-357dbff6c2fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 114",
      "id": "7dfb8fb8-b78e-498a-aef2-357dbff6c2fc",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7dfb8fb8-b78e-498a-aef2-357dbff6c2fc",
    "image": "perev_left",
    "point": {
      "latitude": 51.9974989922,
      "longitude": 29.354673825
    }
  },
  "7e3ee957-84c3-45b6-8992-39b3192c6da5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 191",
      "id": "7e3ee957-84c3-45b6-8992-39b3192c6da5",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e3ee957-84c3-45b6-8992-39b3192c6da5",
    "image": "perev_right",
    "point": {
      "latitude": 52.1079956747,
      "longitude": 28.7208526669
    }
  },
  "7e44149e-4b09-4e9a-addc-fd8cb9442cfc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 231",
      "id": "7e44149e-4b09-4e9a-addc-fd8cb9442cfc",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e44149e-4b09-4e9a-addc-fd8cb9442cfc",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1197603697,
      "longitude": 28.5591791959
    }
  },
  "7ec4efb3-d2e2-4f47-b222-12283657b0ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 237",
      "id": "7ec4efb3-d2e2-4f47-b222-12283657b0ff",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ec4efb3-d2e2-4f47-b222-12283657b0ff",
    "image": "perev_left",
    "point": {
      "latitude": 52.0903471248,
      "longitude": 28.3895432429
    }
  },
  "7edfeca4-dedb-4004-bb89-239942cabb9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 311",
      "id": "7edfeca4-dedb-4004-bb89-239942cabb9c",
      "kilometrage": 341,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7edfeca4-dedb-4004-bb89-239942cabb9c",
    "image": "perev_right",
    "point": {
      "latitude": 52.065215343,
      "longitude": 27.9177122277
    }
  },
  "7f155ab4-1d9f-48af-b52a-f9a2da5ac2eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7f155ab4-1d9f-48af-b52a-f9a2da5ac2eb",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f155ab4-1d9f-48af-b52a-f9a2da5ac2eb",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1110249035,
      "longitude": 28.5332358582
    }
  },
  "7f274f71-c0d2-4973-9afe-2c237bbbea56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 310",
      "id": "7f274f71-c0d2-4973-9afe-2c237bbbea56",
      "kilometrage": 340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f274f71-c0d2-4973-9afe-2c237bbbea56",
    "image": "perev_left",
    "point": {
      "latitude": 52.0730690613,
      "longitude": 27.9173083213
    }
  },
  "7f852bba-0d2a-429c-930e-ed1bff7d1a4c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 93",
      "id": "7f852bba-0d2a-429c-930e-ed1bff7d1a4c",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f852bba-0d2a-429c-930e-ed1bff7d1a4c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7990967103,
      "longitude": 29.5176633478
    }
  },
  "7fa963d0-e57b-468e-9d7c-df799aa0017d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 177",
      "id": "7fa963d0-e57b-468e-9d7c-df799aa0017d",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fa963d0-e57b-468e-9d7c-df799aa0017d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1189938946,
      "longitude": 29.1484471158
    }
  },
  "7fd097ac-f322-4873-acbf-9235ce2ff920": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7fd097ac-f322-4873-acbf-9235ce2ff920",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fd097ac-f322-4873-acbf-9235ce2ff920",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9918767096,
      "longitude": 29.3572181033
    }
  },
  "801a6fea-b126-4909-a752-13d63497d87a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "801a6fea-b126-4909-a752-13d63497d87a",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "801a6fea-b126-4909-a752-13d63497d87a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1268491062,
      "longitude": 28.5640108913
    }
  },
  "8034bcf5-2199-4e87-91a5-13a92dcfdf30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8034bcf5-2199-4e87-91a5-13a92dcfdf30",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8034bcf5-2199-4e87-91a5-13a92dcfdf30",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.075014738,
      "longitude": 29.2212669071
    }
  },
  "805ddc2d-252f-4f09-8791-8571e97fc5a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 281",
      "id": "805ddc2d-252f-4f09-8791-8571e97fc5a1",
      "kilometrage": 329,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "805ddc2d-252f-4f09-8791-8571e97fc5a1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.063353083,
      "longitude": 28.012151222
    }
  },
  "80cc7de6-1bf6-400c-87e3-0336ead8c2d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "80cc7de6-1bf6-400c-87e3-0336ead8c2d3",
      "kilometrage": 304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80cc7de6-1bf6-400c-87e3-0336ead8c2d3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.112161071,
      "longitude": 28.2361104368
    }
  },
  "815594c5-0de5-42e5-88cf-7494036ac024": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 366",
      "id": "815594c5-0de5-42e5-88cf-7494036ac024",
      "kilometrage": 378,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "815594c5-0de5-42e5-88cf-7494036ac024",
    "image": "perev_right",
    "point": {
      "latitude": 52.112682865,
      "longitude": 27.5644201819
    }
  },
  "816fb35d-c0da-4e69-a78a-b4f0618fdbc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 97",
      "id": "816fb35d-c0da-4e69-a78a-b4f0618fdbc6",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "816fb35d-c0da-4e69-a78a-b4f0618fdbc6",
    "image": "perev_left",
    "point": {
      "latitude": 51.8397691545,
      "longitude": 29.5179174926
    }
  },
  "81b5014f-eca7-40e5-8d6c-96e8fde8549b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 309",
      "id": "81b5014f-eca7-40e5-8d6c-96e8fde8549b",
      "kilometrage": 340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81b5014f-eca7-40e5-8d6c-96e8fde8549b",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0764600306,
      "longitude": 27.9246884323
    }
  },
  "81ebbfa8-cc08-42e4-80dd-f36f8fef232b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 248",
      "id": "81ebbfa8-cc08-42e4-80dd-f36f8fef232b",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81ebbfa8-cc08-42e4-80dd-f36f8fef232b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0802774186,
      "longitude": 28.3791307729
    }
  },
  "81ec2eab-b011-4753-be97-df5a9112b06e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "81ec2eab-b011-4753-be97-df5a9112b06e",
      "kilometrage": 322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81ec2eab-b011-4753-be97-df5a9112b06e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0751172454,
      "longitude": 28.0686903736
    }
  },
  "82b34ba1-2105-4b2d-9de4-cd7b2b8a5a47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 329",
      "id": "82b34ba1-2105-4b2d-9de4-cd7b2b8a5a47",
      "kilometrage": 355,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82b34ba1-2105-4b2d-9de4-cd7b2b8a5a47",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0724348232,
      "longitude": 27.7597489221
    }
  },
  "82b6f33d-f2fb-4a94-ad2c-8c570c56a64e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 103",
      "id": "82b6f33d-f2fb-4a94-ad2c-8c570c56a64e",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82b6f33d-f2fb-4a94-ad2c-8c570c56a64e",
    "image": "perev_right",
    "point": {
      "latitude": 51.8636191996,
      "longitude": 29.4867782308
    }
  },
  "836a9b5a-448c-41f8-8dfb-03e20329685f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый передний  ",
      "id": "836a9b5a-448c-41f8-8dfb-03e20329685f",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "836a9b5a-448c-41f8-8dfb-03e20329685f",
    "image": "raid_start_right",
    "point": {
      "latitude": 52.1539828267,
      "longitude": 27.3542640538
    }
  },
  "839aee37-b200-46fd-8aaa-dcf4513fe1bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 370",
      "id": "839aee37-b200-46fd-8aaa-dcf4513fe1bd",
      "kilometrage": 370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "839aee37-b200-46fd-8aaa-dcf4513fe1bd",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0954654732,
      "longitude": 27.6297022029
    }
  },
  "83a72310-7318-47e8-91ab-4fdda815d01c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 322а",
      "id": "83a72310-7318-47e8-91ab-4fdda815d01c",
      "kilometrage": 351,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83a72310-7318-47e8-91ab-4fdda815d01c",
    "image": "perev_left",
    "point": {
      "latitude": 52.089882173,
      "longitude": 27.7984768511
    }
  },
  "83df84e2-bb38-41c5-a9a6-2e994ec5de56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 343",
      "id": "83df84e2-bb38-41c5-a9a6-2e994ec5de56",
      "kilometrage": 364,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83df84e2-bb38-41c5-a9a6-2e994ec5de56",
    "image": "perev_left",
    "point": {
      "latitude": 52.1059560368,
      "longitude": 27.6709790415
    }
  },
  "84213441-634e-434d-aba0-53776c6ea6a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "84213441-634e-434d-aba0-53776c6ea6a8",
      "kilometrage": 384,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84213441-634e-434d-aba0-53776c6ea6a8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1212026652,
      "longitude": 27.5295410132
    }
  },
  "844f2114-7b05-4dfc-b70a-ea7143f19718": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "844f2114-7b05-4dfc-b70a-ea7143f19718",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "844f2114-7b05-4dfc-b70a-ea7143f19718",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9531539701,
      "longitude": 29.4538948929
    }
  },
  "84807290-baca-4bcb-a241-f70ddd472523": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "84807290-baca-4bcb-a241-f70ddd472523",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84807290-baca-4bcb-a241-f70ddd472523",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0761613823,
      "longitude": 29.2137442921
    }
  },
  "84bddffe-819b-496c-9e2d-60c5c95e80c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "84bddffe-819b-496c-9e2d-60c5c95e80c3",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84bddffe-819b-496c-9e2d-60c5c95e80c3",
    "image": "perev_right",
    "point": {
      "latitude": 52.1258968211,
      "longitude": 28.818208334
    }
  },
  "84cbab65-f521-4eb2-9f5a-5877807d1d7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 132",
      "id": "84cbab65-f521-4eb2-9f5a-5877807d1d7b",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84cbab65-f521-4eb2-9f5a-5877807d1d7b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1153461539,
      "longitude": 29.1609983315
    }
  },
  "8501e1ca-3da8-46b6-9cd7-1bd447399cd7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 142",
      "id": "8501e1ca-3da8-46b6-9cd7-1bd447399cd7",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8501e1ca-3da8-46b6-9cd7-1bd447399cd7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1214895192,
      "longitude": 29.0622296196
    }
  },
  "85155bd9-4b2d-4fc3-8360-e6d06f60b7d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 255",
      "id": "85155bd9-4b2d-4fc3-8360-e6d06f60b7d2",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85155bd9-4b2d-4fc3-8360-e6d06f60b7d2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1461016786,
      "longitude": 28.6960836939
    }
  },
  "852bebf6-6982-4d13-a0ad-0ca8d2eb5448": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 143",
      "id": "852bebf6-6982-4d13-a0ad-0ca8d2eb5448",
      "kilometrage": 207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "852bebf6-6982-4d13-a0ad-0ca8d2eb5448",
    "image": "perev_right",
    "point": {
      "latitude": 52.1154104777,
      "longitude": 29.0512426251
    }
  },
  "85c6fba0-5a88-4e06-a321-e5bea54b3132": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "85c6fba0-5a88-4e06-a321-e5bea54b3132",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85c6fba0-5a88-4e06-a321-e5bea54b3132",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0891150348,
      "longitude": 28.3968932153
    }
  },
  "86448fed-4503-460c-86a4-4ba10614ffc0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 405",
      "id": "86448fed-4503-460c-86a4-4ba10614ffc0",
      "kilometrage": 402,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86448fed-4503-460c-86a4-4ba10614ffc0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1403911435,
      "longitude": 27.4068422557
    }
  },
  "8675b69e-eca9-443f-9455-5de874905e61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "8675b69e-eca9-443f-9455-5de874905e61",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8675b69e-eca9-443f-9455-5de874905e61",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1028355028,
      "longitude": 28.4449734253
    }
  },
  "86a9b045-f9ef-49e8-bd3d-a0ae7fbe906e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "86a9b045-f9ef-49e8-bd3d-a0ae7fbe906e",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86a9b045-f9ef-49e8-bd3d-a0ae7fbe906e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1222037288,
      "longitude": 28.8042998027
    }
  },
  "86cc4259-1d56-4e25-a9b1-6f8e05f73821": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 203",
      "id": "86cc4259-1d56-4e25-a9b1-6f8e05f73821",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86cc4259-1d56-4e25-a9b1-6f8e05f73821",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1455732783,
      "longitude": 28.8663900193
    }
  },
  "876d33a6-2b1e-4fa7-9c76-3de6aeb69800": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "876d33a6-2b1e-4fa7-9c76-3de6aeb69800",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "876d33a6-2b1e-4fa7-9c76-3de6aeb69800",
    "image": "buyo_left",
    "point": {
      "latitude": 52.147359234,
      "longitude": 28.6975059851
    }
  },
  "87808b44-682e-4333-9d17-aded8bc5a365": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 127",
      "id": "87808b44-682e-4333-9d17-aded8bc5a365",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87808b44-682e-4333-9d17-aded8bc5a365",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9662990534,
      "longitude": 29.3987958161
    }
  },
  "879bb0db-e98f-40f3-a741-6e89b387fd03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 303",
      "id": "879bb0db-e98f-40f3-a741-6e89b387fd03",
      "kilometrage": 359,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "879bb0db-e98f-40f3-a741-6e89b387fd03",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0903864764,
      "longitude": 27.7169418391
    }
  },
  "881d4472-6702-4a46-84a4-650461ab978f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 185",
      "id": "881d4472-6702-4a46-84a4-650461ab978f",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "881d4472-6702-4a46-84a4-650461ab978f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.048256833,
      "longitude": 29.2835698957
    }
  },
  "881f4f58-3aa3-4fb9-a9f1-1946c442b6fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "881f4f58-3aa3-4fb9-a9f1-1946c442b6fb",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "881f4f58-3aa3-4fb9-a9f1-1946c442b6fb",
    "image": "perev_right",
    "point": {
      "latitude": 51.5984323448,
      "longitude": 29.80918307
    }
  },
  "888120a5-4f94-4c1d-a92b-e7a55569e3ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "888120a5-4f94-4c1d-a92b-e7a55569e3ab",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "888120a5-4f94-4c1d-a92b-e7a55569e3ab",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8276346218,
      "longitude": 29.5068061289
    }
  },
  "88ca34bf-f771-4aea-8548-f34c06021371": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "88ca34bf-f771-4aea-8548-f34c06021371",
      "kilometrage": 315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88ca34bf-f771-4aea-8548-f34c06021371",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0841004973,
      "longitude": 28.1322754148
    }
  },
  "897a4085-6a99-4dec-92a9-c7d3c50c250d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "897a4085-6a99-4dec-92a9-c7d3c50c250d",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "897a4085-6a99-4dec-92a9-c7d3c50c250d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1143710115,
      "longitude": 28.1887156032
    }
  },
  "89b61456-b3f6-422a-9c3d-6b5f6d60d423": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "89b61456-b3f6-422a-9c3d-6b5f6d60d423",
      "kilometrage": 302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89b61456-b3f6-422a-9c3d-6b5f6d60d423",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1002557861,
      "longitude": 28.248908339
    }
  },
  "89e7edf4-003d-4bc5-9953-14efd18338a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "89e7edf4-003d-4bc5-9953-14efd18338a2",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89e7edf4-003d-4bc5-9953-14efd18338a2",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7714933963,
      "longitude": 29.6321292929
    }
  },
  "8a04b69d-e9aa-41a7-aec2-8af78ef028df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 410",
      "id": "8a04b69d-e9aa-41a7-aec2-8af78ef028df",
      "kilometrage": 405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a04b69d-e9aa-41a7-aec2-8af78ef028df",
    "image": "perev_left",
    "point": {
      "latitude": 52.146456147,
      "longitude": 27.3861475315
    }
  },
  "8a195ea4-f457-4af1-9650-e7448f300006": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "8a195ea4-f457-4af1-9650-e7448f300006",
      "kilometrage": 373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a195ea4-f457-4af1-9650-e7448f300006",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1040929382,
      "longitude": 27.6025564401
    }
  },
  "8a3abab9-94c6-4487-bd3e-df14ca74545c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 195",
      "id": "8a3abab9-94c6-4487-bd3e-df14ca74545c",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a3abab9-94c6-4487-bd3e-df14ca74545c",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1244804246,
      "longitude": 28.6828690956
    }
  },
  "8a48ec32-5c8a-429d-8c47-98028c495121": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "8a48ec32-5c8a-429d-8c47-98028c495121",
      "kilometrage": 321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a48ec32-5c8a-429d-8c47-98028c495121",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0751276081,
      "longitude": 28.0808967793
    }
  },
  "8aee73be-ea95-4716-a536-48bcd6ba3b54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "8aee73be-ea95-4716-a536-48bcd6ba3b54",
      "kilometrage": 346,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8aee73be-ea95-4716-a536-48bcd6ba3b54",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0779279871,
      "longitude": 27.8563042493
    }
  },
  "8b37c03d-6974-4a47-8d1b-a9441e067438": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 185",
      "id": "8b37c03d-6974-4a47-8d1b-a9441e067438",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b37c03d-6974-4a47-8d1b-a9441e067438",
    "image": "perev_right",
    "point": {
      "latitude": 52.1017050083,
      "longitude": 28.7619898088
    }
  },
  "8b640545-1a90-4e6d-8834-cc2c74879345": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 188",
      "id": "8b640545-1a90-4e6d-8834-cc2c74879345",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b640545-1a90-4e6d-8834-cc2c74879345",
    "image": "perev_left",
    "point": {
      "latitude": 52.1185469783,
      "longitude": 28.7409374222
    }
  },
  "8b80c9b1-8f7b-4766-a255-d3e02fdacf7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 282",
      "id": "8b80c9b1-8f7b-4766-a255-d3e02fdacf7f",
      "kilometrage": 321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b80c9b1-8f7b-4766-a255-d3e02fdacf7f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0795327604,
      "longitude": 28.0729164974
    }
  },
  "8b998149-638a-4c2e-aa3a-4388334b9c46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "8b998149-638a-4c2e-aa3a-4388334b9c46",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b998149-638a-4c2e-aa3a-4388334b9c46",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0964937933,
      "longitude": 28.2684500382
    }
  },
  "8c6e4dc9-f246-46db-b9e2-4a61f8fe3f12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 154",
      "id": "8c6e4dc9-f246-46db-b9e2-4a61f8fe3f12",
      "kilometrage": 218,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c6e4dc9-f246-46db-b9e2-4a61f8fe3f12",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1303016997,
      "longitude": 28.9476342294
    }
  },
  "8d239c16-adbd-46ef-b190-9b8c4e5a7ac2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 102",
      "id": "8d239c16-adbd-46ef-b190-9b8c4e5a7ac2",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d239c16-adbd-46ef-b190-9b8c4e5a7ac2",
    "image": "perev_left",
    "point": {
      "latitude": 51.8627890645,
      "longitude": 29.5061570706
    }
  },
  "8d309e8f-75b9-46ff-a17a-d6535e577187": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 325",
      "id": "8d309e8f-75b9-46ff-a17a-d6535e577187",
      "kilometrage": 352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d309e8f-75b9-46ff-a17a-d6535e577187",
    "image": "perev_right",
    "point": {
      "latitude": 52.0864336935,
      "longitude": 27.7813590599
    }
  },
  "8d8af77c-4cd9-47f7-b763-3912520fbeb8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 21",
      "id": "8d8af77c-4cd9-47f7-b763-3912520fbeb8",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d8af77c-4cd9-47f7-b763-3912520fbeb8",
    "image": "perev_left",
    "point": {
      "latitude": 51.5329740677,
      "longitude": 29.8776755016
    }
  },
  "8da94b63-f94b-4517-8d6b-1bba4fcf2e04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "8da94b63-f94b-4517-8d6b-1bba4fcf2e04",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8da94b63-f94b-4517-8d6b-1bba4fcf2e04",
    "image": "main_way",
    "point": {
      "latitude": 52.0713799616,
      "longitude": 29.2448544504
    }
  },
  "8dbeb6b4-8872-4003-bef5-79fc3e3bbdd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 123",
      "id": "8dbeb6b4-8872-4003-bef5-79fc3e3bbdd6",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8dbeb6b4-8872-4003-bef5-79fc3e3bbdd6",
    "image": "perev_right",
    "point": {
      "latitude": 52.068920482,
      "longitude": 29.2371721347
    }
  },
  "8dc5fa23-a1a5-4cf1-86bc-be7e62ea2e9d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "8dc5fa23-a1a5-4cf1-86bc-be7e62ea2e9d",
      "kilometrage": 338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8dc5fa23-a1a5-4cf1-86bc-be7e62ea2e9d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0658884381,
      "longitude": 27.9442371496
    }
  },
  "8e3cfd3e-9251-4dbf-a24e-c487ba9021a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 310",
      "id": "8e3cfd3e-9251-4dbf-a24e-c487ba9021a5",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e3cfd3e-9251-4dbf-a24e-c487ba9021a5",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1052036328,
      "longitude": 28.186739257
    }
  },
  "8e453c04-966d-4905-b9ff-bec92191ac4f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "8e453c04-966d-4905-b9ff-bec92191ac4f",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e453c04-966d-4905-b9ff-bec92191ac4f",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1151362618,
      "longitude": 28.2085176249
    }
  },
  "8e4aab74-5fe4-4a5d-9744-2d29bce5df0c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 365",
      "id": "8e4aab74-5fe4-4a5d-9744-2d29bce5df0c",
      "kilometrage": 378,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e4aab74-5fe4-4a5d-9744-2d29bce5df0c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1172342952,
      "longitude": 27.5671319635
    }
  },
  "8e85d7a6-f880-4c4b-97d7-492de3a80ee4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "8e85d7a6-f880-4c4b-97d7-492de3a80ee4",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e85d7a6-f880-4c4b-97d7-492de3a80ee4",
    "image": "perev_right",
    "point": {
      "latitude": 51.8384349468,
      "longitude": 29.5091729482
    }
  },
  "8e9c1291-5883-4c51-b780-8779581b1269": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "8e9c1291-5883-4c51-b780-8779581b1269",
      "kilometrage": 376,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e9c1291-5883-4c51-b780-8779581b1269",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1087406407,
      "longitude": 27.5820789191
    }
  },
  "8f59d8d9-8d5f-4a72-8adc-0f45015f688f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "8f59d8d9-8d5f-4a72-8adc-0f45015f688f",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f59d8d9-8d5f-4a72-8adc-0f45015f688f",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7445753422,
      "longitude": 29.7037905485
    }
  },
  "8fc5132b-98b7-4765-83ef-fc0f8e2952f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 207",
      "id": "8fc5132b-98b7-4765-83ef-fc0f8e2952f7",
      "kilometrage": 263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8fc5132b-98b7-4765-83ef-fc0f8e2952f7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1409792421,
      "longitude": 28.6182571198
    }
  },
  "907dd917-be45-4d33-b0ae-5b50c3ac43b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "907dd917-be45-4d33-b0ae-5b50c3ac43b2",
      "kilometrage": 379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "907dd917-be45-4d33-b0ae-5b50c3ac43b2",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1147533418,
      "longitude": 27.5565861183
    }
  },
  "90a68f8f-c492-408a-80e6-7d8388a5c564": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 25",
      "id": "90a68f8f-c492-408a-80e6-7d8388a5c564",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90a68f8f-c492-408a-80e6-7d8388a5c564",
    "image": "buyo_right",
    "point": {
      "latitude": 51.562399923,
      "longitude": 29.8317350609
    }
  },
  "910dde54-85be-496e-bd2a-3bf5420ea312": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "910dde54-85be-496e-bd2a-3bf5420ea312",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "910dde54-85be-496e-bd2a-3bf5420ea312",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1022886163,
      "longitude": 28.2676647996
    }
  },
  "91142683-61cc-4669-9bb5-601d525ef4a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "91142683-61cc-4669-9bb5-601d525ef4a7",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91142683-61cc-4669-9bb5-601d525ef4a7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1278947599,
      "longitude": 28.8458371531
    }
  },
  "911aa070-1451-438d-b872-71f00e657424": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 144",
      "id": "911aa070-1451-438d-b872-71f00e657424",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "911aa070-1451-438d-b872-71f00e657424",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0254537689,
      "longitude": 29.3205756572
    }
  },
  "9126620d-ea95-4430-81f9-056620538e68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 98",
      "id": "9126620d-ea95-4430-81f9-056620538e68",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9126620d-ea95-4430-81f9-056620538e68",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8144550465,
      "longitude": 29.503140841
    }
  },
  "917c77ed-d34c-4b11-8a66-b1fbff9ca397": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "917c77ed-d34c-4b11-8a66-b1fbff9ca397",
      "kilometrage": 372,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "917c77ed-d34c-4b11-8a66-b1fbff9ca397",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0982732936,
      "longitude": 27.5961085327
    }
  },
  "918c89bd-2dfc-41a8-b855-a0a01701ae04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 308",
      "id": "918c89bd-2dfc-41a8-b855-a0a01701ae04",
      "kilometrage": 370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "918c89bd-2dfc-41a8-b855-a0a01701ae04",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0956702482,
      "longitude": 27.621173917
    }
  },
  "91939209-619b-4612-8bfb-d858aea60e8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 80",
      "id": "91939209-619b-4612-8bfb-d858aea60e8d",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91939209-619b-4612-8bfb-d858aea60e8d",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7600635773,
      "longitude": 29.5865147748
    }
  },
  "91f45898-a918-4165-a0b1-8eb6fd602719": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "91f45898-a918-4165-a0b1-8eb6fd602719",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91f45898-a918-4165-a0b1-8eb6fd602719",
    "image": "raid_end_left",
    "point": {
      "latitude": 52.119807028,
      "longitude": 28.4939584799
    }
  },
  "9246690d-5359-485b-9f40-27ef05c9a262": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 62",
      "id": "9246690d-5359-485b-9f40-27ef05c9a262",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9246690d-5359-485b-9f40-27ef05c9a262",
    "image": "perev_right",
    "point": {
      "latitude": 51.7079793132,
      "longitude": 29.6732351987
    }
  },
  "92687894-bc50-410b-83b0-cb0d5a592f9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 156",
      "id": "92687894-bc50-410b-83b0-cb0d5a592f9c",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92687894-bc50-410b-83b0-cb0d5a592f9c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1187095921,
      "longitude": 28.9329480352
    }
  },
  "92955b73-47ff-4872-b75e-0206f9258074": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 58",
      "id": "92955b73-47ff-4872-b75e-0206f9258074",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92955b73-47ff-4872-b75e-0206f9258074",
    "image": "perev_left",
    "point": {
      "latitude": 51.691791985,
      "longitude": 29.6968154
    }
  },
  "92ec0b1a-d7ae-4b19-a8ce-b6fc99b6b52e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "92ec0b1a-d7ae-4b19-a8ce-b6fc99b6b52e",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92ec0b1a-d7ae-4b19-a8ce-b6fc99b6b52e",
    "image": "perev_left",
    "point": {
      "latitude": 51.6602183527,
      "longitude": 29.7227701601
    }
  },
  "93e77165-f10a-4f13-868e-3c2cae326ade": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 206",
      "id": "93e77165-f10a-4f13-868e-3c2cae326ade",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "93e77165-f10a-4f13-868e-3c2cae326ade",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1440515459,
      "longitude": 28.6372469138
    }
  },
  "94283021-2e76-4deb-bcee-d75bacea92c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "94283021-2e76-4deb-bcee-d75bacea92c9",
      "kilometrage": 331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94283021-2e76-4deb-bcee-d75bacea92c9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0680847482,
      "longitude": 27.9975276337
    }
  },
  "94b164b3-fe1c-41f2-a170-938761964b1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "94b164b3-fe1c-41f2-a170-938761964b1f",
      "kilometrage": 390,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94b164b3-fe1c-41f2-a170-938761964b1f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.126912793,
      "longitude": 27.4883801551
    }
  },
  "94ec6138-d1ed-4dc3-b791-e90f888178c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 219",
      "id": "94ec6138-d1ed-4dc3-b791-e90f888178c5",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94ec6138-d1ed-4dc3-b791-e90f888178c5",
    "image": "perev_right",
    "point": {
      "latitude": 52.1061574554,
      "longitude": 28.5026672091
    }
  },
  "94fdf955-c5d9-45f2-ac13-d093bb15391e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 229",
      "id": "94fdf955-c5d9-45f2-ac13-d093bb15391e",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94fdf955-c5d9-45f2-ac13-d093bb15391e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1043351452,
      "longitude": 28.4524947358
    }
  },
  "9523d879-8839-42b9-b5f9-292f03cfc4e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 363",
      "id": "9523d879-8839-42b9-b5f9-292f03cfc4e7",
      "kilometrage": 377,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9523d879-8839-42b9-b5f9-292f03cfc4e7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1149240138,
      "longitude": 27.5827468306
    }
  },
  "9531b978-1fc1-4719-b6c2-b630f08dd2fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9531b978-1fc1-4719-b6c2-b630f08dd2fa",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9531b978-1fc1-4719-b6c2-b630f08dd2fa",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0797537223,
      "longitude": 27.8358097944
    }
  },
  "95447c6c-4c9d-4073-a220-2b9887419a71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 232",
      "id": "95447c6c-4c9d-4073-a220-2b9887419a71",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95447c6c-4c9d-4073-a220-2b9887419a71",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1100419089,
      "longitude": 28.5248567035
    }
  },
  "957c9e93-0276-4921-a2d2-f0d1893fa0a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 130",
      "id": "957c9e93-0276-4921-a2d2-f0d1893fa0a8",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "957c9e93-0276-4921-a2d2-f0d1893fa0a8",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9777840667,
      "longitude": 29.3830310002
    }
  },
  "95982e36-1c28-46a0-a9bf-172fe96ca9b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 99",
      "id": "95982e36-1c28-46a0-a9bf-172fe96ca9b4",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95982e36-1c28-46a0-a9bf-172fe96ca9b4",
    "image": "perev_right",
    "point": {
      "latitude": 51.8396165038,
      "longitude": 29.5044062277
    }
  },
  "95d26d54-48fe-4c02-9540-aa970f392b10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "95d26d54-48fe-4c02-9540-aa970f392b10",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95d26d54-48fe-4c02-9540-aa970f392b10",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0957183082,
      "longitude": 28.3097689939
    }
  },
  "95d31946-0030-4a6f-96eb-c85a591fad2c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 201",
      "id": "95d31946-0030-4a6f-96eb-c85a591fad2c",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95d31946-0030-4a6f-96eb-c85a591fad2c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1502961308,
      "longitude": 28.6807891956
    }
  },
  "962a1b06-8549-4cfd-b191-c0a89a1bc855": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 60а",
      "id": "962a1b06-8549-4cfd-b191-c0a89a1bc855",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "962a1b06-8549-4cfd-b191-c0a89a1bc855",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7122261136,
      "longitude": 29.6716599161
    }
  },
  "96374132-6a7a-463e-877f-201b94d37d0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "96374132-6a7a-463e-877f-201b94d37d0a",
      "kilometrage": 315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96374132-6a7a-463e-877f-201b94d37d0a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0838376035,
      "longitude": 28.1339348481
    }
  },
  "964dd9b7-6902-4770-a036-68f57e798cb4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "964dd9b7-6902-4770-a036-68f57e798cb4",
      "kilometrage": 299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "964dd9b7-6902-4770-a036-68f57e798cb4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1054415286,
      "longitude": 28.2647979143
    }
  },
  "972f700f-aa9b-4815-9748-a3b163164555": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 222",
      "id": "972f700f-aa9b-4815-9748-a3b163164555",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "972f700f-aa9b-4815-9748-a3b163164555",
    "image": "buyo_right",
    "point": {
      "latitude": 52.134111463,
      "longitude": 28.6713896057
    }
  },
  "9749a7d4-d35e-4f68-aa20-888887b4f973": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "9749a7d4-d35e-4f68-aa20-888887b4f973",
      "kilometrage": 319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9749a7d4-d35e-4f68-aa20-888887b4f973",
    "image": "buyo_right",
    "point": {
      "latitude": 52.076351304,
      "longitude": 28.1069499855
    }
  },
  "97d5b97a-2166-43b9-a749-daf52ec9025e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 135",
      "id": "97d5b97a-2166-43b9-a749-daf52ec9025e",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97d5b97a-2166-43b9-a749-daf52ec9025e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1189071272,
      "longitude": 29.1265465903
    }
  },
  "981fdb30-2153-4f98-acf3-4ce24f026704": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 210",
      "id": "981fdb30-2153-4f98-acf3-4ce24f026704",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "981fdb30-2153-4f98-acf3-4ce24f026704",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1260258964,
      "longitude": 29.0260454386
    }
  },
  "98381b56-3f61-4a4f-8368-b51faf3ba461": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 359",
      "id": "98381b56-3f61-4a4f-8368-b51faf3ba461",
      "kilometrage": 375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98381b56-3f61-4a4f-8368-b51faf3ba461",
    "image": "perev_left",
    "point": {
      "latitude": 52.1144368074,
      "longitude": 27.5964540099
    }
  },
  "98763856-3b9f-4584-a5d1-d6167471c3ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 112а",
      "id": "98763856-3b9f-4584-a5d1-d6167471c3ca",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98763856-3b9f-4584-a5d1-d6167471c3ca",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9071118424,
      "longitude": 29.4902952728
    }
  },
  "98a591c2-f70e-405a-9cdd-9801d6e5a348": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "98a591c2-f70e-405a-9cdd-9801d6e5a348",
      "kilometrage": 337,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98a591c2-f70e-405a-9cdd-9801d6e5a348",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0673732598,
      "longitude": 27.9465626374
    }
  },
  "98c052ba-619a-467b-a486-3437817c7714": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 292",
      "id": "98c052ba-619a-467b-a486-3437817c7714",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98c052ba-619a-467b-a486-3437817c7714",
    "image": "buyo_left",
    "point": {
      "latitude": 52.080238417,
      "longitude": 27.824900583
    }
  },
  "98f75bf6-23a8-476e-b546-e6b10c40b064": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 15",
      "id": "98f75bf6-23a8-476e-b546-e6b10c40b064",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98f75bf6-23a8-476e-b546-e6b10c40b064",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5151641621,
      "longitude": 29.9071238775
    }
  },
  "99012c3a-24e3-4e4f-9b96-dc8418542265": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 415",
      "id": "99012c3a-24e3-4e4f-9b96-dc8418542265",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99012c3a-24e3-4e4f-9b96-dc8418542265",
    "image": "perev_left",
    "point": {
      "latitude": 52.1506942009,
      "longitude": 27.359106983
    }
  },
  "990a5806-1808-4512-a3ba-90e58b53b1cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "990a5806-1808-4512-a3ba-90e58b53b1cb",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "990a5806-1808-4512-a3ba-90e58b53b1cb",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.977251023,
      "longitude": 29.3815175335
    }
  },
  "992e97cd-4a3e-417f-aa3f-23f6ae03b296": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 85",
      "id": "992e97cd-4a3e-417f-aa3f-23f6ae03b296",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "992e97cd-4a3e-417f-aa3f-23f6ae03b296",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.7970192962,
      "longitude": 29.5910402607
    }
  },
  "99a3910d-3fdd-4a90-b9ae-e7f9a69cd44b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Возможность получить информацию о судоходных условиях по радиосвязи на указанном канале  ",
      "id": "99a3910d-3fdd-4a90-b9ae-e7f9a69cd44b",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99a3910d-3fdd-4a90-b9ae-e7f9a69cd44b",
    "image": "vhf",
    "point": {
      "latitude": 52.0683180434,
      "longitude": 29.2538423444
    }
  },
  "99dbc065-c421-4c3f-9e30-a39c3fc92a96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "99dbc065-c421-4c3f-9e30-a39c3fc92a96",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99dbc065-c421-4c3f-9e30-a39c3fc92a96",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0696568292,
      "longitude": 28.3392289913
    }
  },
  "99e6dbae-7a0d-4611-b4b4-820be68d10ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 400",
      "id": "99e6dbae-7a0d-4611-b4b4-820be68d10ff",
      "kilometrage": 399,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99e6dbae-7a0d-4611-b4b4-820be68d10ff",
    "image": "perev_left",
    "point": {
      "latitude": 52.1357318403,
      "longitude": 27.4242504515
    }
  },
  "99f13ea6-2e80-4f8d-9f58-4c05002c9cc0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "99f13ea6-2e80-4f8d-9f58-4c05002c9cc0",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99f13ea6-2e80-4f8d-9f58-4c05002c9cc0",
    "image": "raid_start_left",
    "point": {
      "latitude": 52.1192286418,
      "longitude": 28.4998295746
    }
  },
  "9a58bc1e-5636-40ff-bc2f-e697a404683d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9a58bc1e-5636-40ff-bc2f-e697a404683d",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a58bc1e-5636-40ff-bc2f-e697a404683d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.8029010107,
      "longitude": 29.5055795199
    }
  },
  "9affc390-43e6-4084-a31b-813cfa4c6cd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 50",
      "id": "9affc390-43e6-4084-a31b-813cfa4c6cd5",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9affc390-43e6-4084-a31b-813cfa4c6cd5",
    "image": "perev_left",
    "point": {
      "latitude": 51.6484559232,
      "longitude": 29.7348789966
    }
  },
  "9b1dc35b-13bb-40af-9666-5539e507d3f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 82",
      "id": "9b1dc35b-13bb-40af-9666-5539e507d3f6",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b1dc35b-13bb-40af-9666-5539e507d3f6",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.7678422161,
      "longitude": 29.5706988978
    }
  },
  "9b228ebe-a837-43a2-8402-f16bf9c3a161": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "9b228ebe-a837-43a2-8402-f16bf9c3a161",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b228ebe-a837-43a2-8402-f16bf9c3a161",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0727018834,
      "longitude": 29.2162776225
    }
  },
  "9b27b6fa-4a22-4286-b116-824914321e33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 330",
      "id": "9b27b6fa-4a22-4286-b116-824914321e33",
      "kilometrage": 356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b27b6fa-4a22-4286-b116-824914321e33",
    "image": "perev_right",
    "point": {
      "latitude": 52.0747640149,
      "longitude": 27.7537468627
    }
  },
  "9c8faa11-972f-47f6-99a9-072cd03668dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 189",
      "id": "9c8faa11-972f-47f6-99a9-072cd03668dd",
      "kilometrage": 247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c8faa11-972f-47f6-99a9-072cd03668dd",
    "image": "perev_right",
    "point": {
      "latitude": 52.1087417845,
      "longitude": 28.7331326528
    }
  },
  "9d2e7877-f623-44ca-981a-b601be30971d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 219",
      "id": "9d2e7877-f623-44ca-981a-b601be30971d",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d2e7877-f623-44ca-981a-b601be30971d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1467900745,
      "longitude": 28.6969474104
    }
  },
  "9d602733-9963-414d-bc52-dd960ef0542f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 171",
      "id": "9d602733-9963-414d-bc52-dd960ef0542f",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d602733-9963-414d-bc52-dd960ef0542f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0956142901,
      "longitude": 29.1766312934
    }
  },
  "9d80f662-784e-4673-9a5d-b8a1ab7eaecf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 76",
      "id": "9d80f662-784e-4673-9a5d-b8a1ab7eaecf",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d80f662-784e-4673-9a5d-b8a1ab7eaecf",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7705665034,
      "longitude": 29.6300411987
    }
  },
  "9d8dc06c-d88d-4500-a97d-0043a3a6333e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 146",
      "id": "9d8dc06c-d88d-4500-a97d-0043a3a6333e",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d8dc06c-d88d-4500-a97d-0043a3a6333e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0306709746,
      "longitude": 29.3085650223
    }
  },
  "9d929c52-d57e-435c-8941-794f7b96aadc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 298",
      "id": "9d929c52-d57e-435c-8941-794f7b96aadc",
      "kilometrage": 333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d929c52-d57e-435c-8941-794f7b96aadc",
    "image": "perev_right",
    "point": {
      "latitude": 52.0721172511,
      "longitude": 27.9841940683
    }
  },
  "9dc58f61-de10-463f-8898-a3f4f52434aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "9dc58f61-de10-463f-8898-a3f4f52434aa",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dc58f61-de10-463f-8898-a3f4f52434aa",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0722972775,
      "longitude": 29.2202142442
    }
  },
  "9df98996-fb06-4de0-90fc-544e09287593": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "9df98996-fb06-4de0-90fc-544e09287593",
      "kilometrage": 343,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9df98996-fb06-4de0-90fc-544e09287593",
    "image": "buyo_left",
    "point": {
      "latitude": 52.065335305,
      "longitude": 27.8922554611
    }
  },
  "9e3705f2-80d4-4a61-8f03-14ee4c044a36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 355",
      "id": "9e3705f2-80d4-4a61-8f03-14ee4c044a36",
      "kilometrage": 355,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e3705f2-80d4-4a61-8f03-14ee4c044a36",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0727954994,
      "longitude": 27.764302093
    }
  },
  "9e44a9e6-264a-48c7-9ed1-a9574d2fa928": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 112",
      "id": "9e44a9e6-264a-48c7-9ed1-a9574d2fa928",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e44a9e6-264a-48c7-9ed1-a9574d2fa928",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9048075552,
      "longitude": 29.4865067222
    }
  },
  "9e8f97cb-919e-4a13-b90a-a47ed989353a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "9e8f97cb-919e-4a13-b90a-a47ed989353a",
      "kilometrage": 315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e8f97cb-919e-4a13-b90a-a47ed989353a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0866665274,
      "longitude": 28.1393984889
    }
  },
  "9f1ad75a-d888-4379-89b9-acc61683f8e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 230а",
      "id": "9f1ad75a-d888-4379-89b9-acc61683f8e3",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f1ad75a-d888-4379-89b9-acc61683f8e3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.122720278,
      "longitude": 28.561477278
    }
  },
  "9f333344-3492-42ec-a510-600de8867e03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 14",
      "id": "9f333344-3492-42ec-a510-600de8867e03",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f333344-3492-42ec-a510-600de8867e03",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5004279217,
      "longitude": 29.9087684083
    }
  },
  "9f34257f-befc-429f-aa35-0942ad0cd095": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 285",
      "id": "9f34257f-befc-429f-aa35-0942ad0cd095",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f34257f-befc-429f-aa35-0942ad0cd095",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0901078009,
      "longitude": 28.4020162228
    }
  },
  "9f620c98-b7c8-47f5-a590-317638335ddc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 301",
      "id": "9f620c98-b7c8-47f5-a590-317638335ddc",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f620c98-b7c8-47f5-a590-317638335ddc",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.0851284327,
      "longitude": 27.7336328708
    }
  },
  "9fe24ed3-b2a5-4e17-8498-7bde5a691d21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 164",
      "id": "9fe24ed3-b2a5-4e17-8498-7bde5a691d21",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fe24ed3-b2a5-4e17-8498-7bde5a691d21",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0754007516,
      "longitude": 29.2132289384
    }
  },
  "a007fa70-7a84-4df0-a003-db0691db75a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 114",
      "id": "a007fa70-7a84-4df0-a003-db0691db75a9",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a007fa70-7a84-4df0-a003-db0691db75a9",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9178790102,
      "longitude": 29.5082798235
    }
  },
  "a05d3abd-03f3-4f98-8011-0c23188b5f47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a05d3abd-03f3-4f98-8011-0c23188b5f47",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a05d3abd-03f3-4f98-8011-0c23188b5f47",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.8010266182,
      "longitude": 29.5095413921
    }
  },
  "a090f6b4-ab8e-4700-aa26-644fd31605a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 71",
      "id": "a090f6b4-ab8e-4700-aa26-644fd31605a0",
      "kilometrage": 124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a090f6b4-ab8e-4700-aa26-644fd31605a0",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7586041834,
      "longitude": 29.6748988786
    }
  },
  "a093f68d-cc00-4a2f-9d03-c9abd6a8a01d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 300",
      "id": "a093f68d-cc00-4a2f-9d03-c9abd6a8a01d",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a093f68d-cc00-4a2f-9d03-c9abd6a8a01d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1017812511,
      "longitude": 28.2698624923
    }
  },
  "a0b83816-4ffb-412d-a0c1-1635928fd92f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "a0b83816-4ffb-412d-a0c1-1635928fd92f",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0b83816-4ffb-412d-a0c1-1635928fd92f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1036410033,
      "longitude": 28.5088764015
    }
  },
  "a1076e4d-5e92-4af9-ab1b-839fc1fd6d98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 192",
      "id": "a1076e4d-5e92-4af9-ab1b-839fc1fd6d98",
      "kilometrage": 249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1076e4d-5e92-4af9-ab1b-839fc1fd6d98",
    "image": "perev_left",
    "point": {
      "latitude": 52.1150032283,
      "longitude": 28.7240687022
    }
  },
  "a1650f68-3275-479a-8f8f-89ccebca9148": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 61",
      "id": "a1650f68-3275-479a-8f8f-89ccebca9148",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1650f68-3275-479a-8f8f-89ccebca9148",
    "image": "buyo_left",
    "point": {
      "latitude": 51.715412078,
      "longitude": 29.6731734806
    }
  },
  "a16c37e3-800b-40e3-a160-689d58e63923": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 404",
      "id": "a16c37e3-800b-40e3-a160-689d58e63923",
      "kilometrage": 401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a16c37e3-800b-40e3-a160-689d58e63923",
    "image": "perev_right",
    "point": {
      "latitude": 52.1356287856,
      "longitude": 27.4023028995
    }
  },
  "a1a4ad11-0d3c-4393-b9c9-dbee3a20a28f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 303",
      "id": "a1a4ad11-0d3c-4393-b9c9-dbee3a20a28f",
      "kilometrage": 336,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1a4ad11-0d3c-4393-b9c9-dbee3a20a28f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0718156702,
      "longitude": 27.9617392784
    }
  },
  "a1bb239d-b884-44e4-96a4-646bbc05791a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 40",
      "id": "a1bb239d-b884-44e4-96a4-646bbc05791a",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1bb239d-b884-44e4-96a4-646bbc05791a",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6189709345,
      "longitude": 29.7758426223
    }
  },
  "a1c00adb-c0ac-485c-a1ff-d95038873f81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 151",
      "id": "a1c00adb-c0ac-485c-a1ff-d95038873f81",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1c00adb-c0ac-485c-a1ff-d95038873f81",
    "image": "perev_right",
    "point": {
      "latitude": 52.118301081,
      "longitude": 28.9749880294
    }
  },
  "a2305a8a-7400-4ed4-b88e-8d48d4cb33ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "a2305a8a-7400-4ed4-b88e-8d48d4cb33ca",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2305a8a-7400-4ed4-b88e-8d48d4cb33ca",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8828474781,
      "longitude": 29.4832670873
    }
  },
  "a2a9d3d5-dd06-4fc1-9b4b-504a3b831c60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "a2a9d3d5-dd06-4fc1-9b4b-504a3b831c60",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2a9d3d5-dd06-4fc1-9b4b-504a3b831c60",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7960200484,
      "longitude": 29.589859327
    }
  },
  "a3cbfbba-b4ca-4bbe-b621-fdf916d5738b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 140а",
      "id": "a3cbfbba-b4ca-4bbe-b621-fdf916d5738b",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3cbfbba-b4ca-4bbe-b621-fdf916d5738b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.013182099,
      "longitude": 29.3318088177
    }
  },
  "a3d40f68-dcfa-4b35-8541-62239a869acf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 12",
      "id": "a3d40f68-dcfa-4b35-8541-62239a869acf",
      "kilometrage": 72,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3d40f68-dcfa-4b35-8541-62239a869acf",
    "image": "perev_left",
    "point": {
      "latitude": 51.5045802702,
      "longitude": 29.9526975114
    }
  },
  "a3dca6b2-6cea-44a7-a2eb-f6ff68ec7524": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 320",
      "id": "a3dca6b2-6cea-44a7-a2eb-f6ff68ec7524",
      "kilometrage": 346,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3dca6b2-6cea-44a7-a2eb-f6ff68ec7524",
    "image": "perev_left",
    "point": {
      "latitude": 52.0786623835,
      "longitude": 27.8569749437
    }
  },
  "a40319f8-1fdf-4158-bde8-e8120c2ca65a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "a40319f8-1fdf-4158-bde8-e8120c2ca65a",
      "kilometrage": 324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a40319f8-1fdf-4158-bde8-e8120c2ca65a",
    "image": "name_of",
    "point": {
      "latitude": 52.060415039,
      "longitude": 28.0621352652
    }
  },
  "a41b5f2b-0a02-49c4-9604-608e94244cf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 317",
      "id": "a41b5f2b-0a02-49c4-9604-608e94244cf7",
      "kilometrage": 345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a41b5f2b-0a02-49c4-9604-608e94244cf7",
    "image": "perev_right",
    "point": {
      "latitude": 52.0709839328,
      "longitude": 27.8716783513
    }
  },
  "a436af21-7a90-4ce6-9cc1-19cf7bbb4fe4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "a436af21-7a90-4ce6-9cc1-19cf7bbb4fe4",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a436af21-7a90-4ce6-9cc1-19cf7bbb4fe4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1070791792,
      "longitude": 28.211760198
    }
  },
  "a4488f42-2d71-4aa6-8dd2-c8d55cccce36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "a4488f42-2d71-4aa6-8dd2-c8d55cccce36",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4488f42-2d71-4aa6-8dd2-c8d55cccce36",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0979817555,
      "longitude": 28.4039118325
    }
  },
  "a4cb10e0-3989-43c1-bac5-f3d8db67c897": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "a4cb10e0-3989-43c1-bac5-f3d8db67c897",
      "kilometrage": 369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4cb10e0-3989-43c1-bac5-f3d8db67c897",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0967325224,
      "longitude": 27.6334436973
    }
  },
  "a51a8582-bc73-4054-86f9-c9ddb571f712": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 293",
      "id": "a51a8582-bc73-4054-86f9-c9ddb571f712",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a51a8582-bc73-4054-86f9-c9ddb571f712",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0794546038,
      "longitude": 27.8246316103
    }
  },
  "a5391e2a-0099-49d4-b39c-adb27ca81cec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 316",
      "id": "a5391e2a-0099-49d4-b39c-adb27ca81cec",
      "kilometrage": 382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5391e2a-0099-49d4-b39c-adb27ca81cec",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1231929806,
      "longitude": 27.5443346793
    }
  },
  "a54fa7d9-243c-4c82-a260-aff38dfb798c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 248",
      "id": "a54fa7d9-243c-4c82-a260-aff38dfb798c",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a54fa7d9-243c-4c82-a260-aff38dfb798c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1004039674,
      "longitude": 28.2931578487
    }
  },
  "a5788ab2-2eb5-496c-9a9b-6e262ddc0dc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "a5788ab2-2eb5-496c-9a9b-6e262ddc0dc5",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5788ab2-2eb5-496c-9a9b-6e262ddc0dc5",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.0297892838,
      "longitude": 29.3153583157
    }
  },
  "a5cec283-bd4f-407c-8efe-e4b9e56d34d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "a5cec283-bd4f-407c-8efe-e4b9e56d34d0",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5cec283-bd4f-407c-8efe-e4b9e56d34d0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1176654782,
      "longitude": 28.1955647745
    }
  },
  "a6267f6b-74d1-45be-81fe-958896f0da49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 58",
      "id": "a6267f6b-74d1-45be-81fe-958896f0da49",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6267f6b-74d1-45be-81fe-958896f0da49",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7015457725,
      "longitude": 29.6892468714
    }
  },
  "a666a777-57e3-43de-a676-f0d74d0733c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "a666a777-57e3-43de-a676-f0d74d0733c3",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a666a777-57e3-43de-a676-f0d74d0733c3",
    "image": "perev_left",
    "point": {
      "latitude": 51.5938202787,
      "longitude": 29.8341451374
    }
  },
  "a6d4bf2a-55dc-464e-ad5c-e0f8c77ac0fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a6d4bf2a-55dc-464e-ad5c-e0f8c77ac0fc",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6d4bf2a-55dc-464e-ad5c-e0f8c77ac0fc",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0804165211,
      "longitude": 27.827025182
    }
  },
  "a78baa51-0099-4080-b963-6f872cd7bfe7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 412",
      "id": "a78baa51-0099-4080-b963-6f872cd7bfe7",
      "kilometrage": 406,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a78baa51-0099-4080-b963-6f872cd7bfe7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1402904111,
      "longitude": 27.3803260693
    }
  },
  "a7cc900e-5340-4ef5-90c1-009de215759e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a7cc900e-5340-4ef5-90c1-009de215759e",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7cc900e-5340-4ef5-90c1-009de215759e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0786518188,
      "longitude": 27.8302221312
    }
  },
  "a8242f2b-17bc-4bf1-b840-b461582d448d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 398",
      "id": "a8242f2b-17bc-4bf1-b840-b461582d448d",
      "kilometrage": 398,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8242f2b-17bc-4bf1-b840-b461582d448d",
    "image": "perev_right",
    "point": {
      "latitude": 52.127847137,
      "longitude": 27.4349727915
    }
  },
  "a87a9a15-5168-4388-a5dd-9677ee9e29c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "a87a9a15-5168-4388-a5dd-9677ee9e29c1",
      "kilometrage": 325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a87a9a15-5168-4388-a5dd-9677ee9e29c1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.066031621,
      "longitude": 28.0540809495
    }
  },
  "a8fe2cf7-b569-4eb4-9918-a229716c282a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "a8fe2cf7-b569-4eb4-9918-a229716c282a",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8fe2cf7-b569-4eb4-9918-a229716c282a",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7984436038,
      "longitude": 29.5175703226
    }
  },
  "a95afe38-13ff-49d0-a502-c982bd12f4d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 110",
      "id": "a95afe38-13ff-49d0-a502-c982bd12f4d6",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a95afe38-13ff-49d0-a502-c982bd12f4d6",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8967622171,
      "longitude": 29.4828489082
    }
  },
  "a95da635-775a-4aea-9ccb-ac0065fb58a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 91",
      "id": "a95da635-775a-4aea-9ccb-ac0065fb58a9",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a95da635-775a-4aea-9ccb-ac0065fb58a9",
    "image": "perev_left",
    "point": {
      "latitude": 51.7949140482,
      "longitude": 29.5266100503
    }
  },
  "a9616ddd-3e94-4711-b825-c24736d1efc2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 223",
      "id": "a9616ddd-3e94-4711-b825-c24736d1efc2",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9616ddd-3e94-4711-b825-c24736d1efc2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1362135539,
      "longitude": 28.6524730431
    }
  },
  "a9aead30-11e5-4d63-9123-27452eb48697": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 3",
      "id": "a9aead30-11e5-4d63-9123-27452eb48697",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9aead30-11e5-4d63-9123-27452eb48697",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1802587933,
      "longitude": 27.3715081172
    }
  },
  "a9b99636-7b52-456f-b17b-612b60d69744": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "a9b99636-7b52-456f-b17b-612b60d69744",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9b99636-7b52-456f-b17b-612b60d69744",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1168933159,
      "longitude": 28.5557012522
    }
  },
  "a9d715fe-52ae-4f4f-8c9a-f2301339eed0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "a9d715fe-52ae-4f4f-8c9a-f2301339eed0",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9d715fe-52ae-4f4f-8c9a-f2301339eed0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1067147925,
      "longitude": 29.1596193144
    }
  },
  "a9fea393-f2d7-479f-ae47-cdf93cc8a51d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 401",
      "id": "a9fea393-f2d7-479f-ae47-cdf93cc8a51d",
      "kilometrage": 400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9fea393-f2d7-479f-ae47-cdf93cc8a51d",
    "image": "perev_left",
    "point": {
      "latitude": 52.137434164,
      "longitude": 27.4166219241
    }
  },
  "aa83a315-15d5-43ce-8d6f-08ae88235195": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "aa83a315-15d5-43ce-8d6f-08ae88235195",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa83a315-15d5-43ce-8d6f-08ae88235195",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0917569366,
      "longitude": 29.1929869289
    }
  },
  "aaa8f11d-f313-4e49-901c-5724e8963a5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 378",
      "id": "aaa8f11d-f313-4e49-901c-5724e8963a5f",
      "kilometrage": 388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aaa8f11d-f313-4e49-901c-5724e8963a5f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1279226094,
      "longitude": 27.5192917522
    }
  },
  "aaeff523-2aad-4e7b-964e-ae87ea3a03de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 289",
      "id": "aaeff523-2aad-4e7b-964e-ae87ea3a03de",
      "kilometrage": 326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aaeff523-2aad-4e7b-964e-ae87ea3a03de",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0729741471,
      "longitude": 28.0518631108
    }
  },
  "ab77e0cf-9441-4b9c-89c5-44a51ede481c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 111",
      "id": "ab77e0cf-9441-4b9c-89c5-44a51ede481c",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab77e0cf-9441-4b9c-89c5-44a51ede481c",
    "image": "perev_left",
    "point": {
      "latitude": 51.947770009,
      "longitude": 29.4708196728
    }
  },
  "ab852d63-787b-4e6d-aba0-455fb851b5f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "ab852d63-787b-4e6d-aba0-455fb851b5f6",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab852d63-787b-4e6d-aba0-455fb851b5f6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0860032967,
      "longitude": 27.7271035112
    }
  },
  "ab92844a-7a4a-46ee-960c-9a93c4e03eb5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76а",
      "id": "ab92844a-7a4a-46ee-960c-9a93c4e03eb5",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab92844a-7a4a-46ee-960c-9a93c4e03eb5",
    "image": "perev_right",
    "point": {
      "latitude": 51.7661902895,
      "longitude": 29.6465668323
    }
  },
  "ab96fcfd-33f1-4588-87e4-d46247e0020b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 153",
      "id": "ab96fcfd-33f1-4588-87e4-d46247e0020b",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab96fcfd-33f1-4588-87e4-d46247e0020b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0534233852,
      "longitude": 29.260893752
    }
  },
  "ab9b4028-d1d4-4cfa-8160-135b3a2a9ab4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "ab9b4028-d1d4-4cfa-8160-135b3a2a9ab4",
      "kilometrage": 369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab9b4028-d1d4-4cfa-8160-135b3a2a9ab4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0974197614,
      "longitude": 27.6358318562
    }
  },
  "ac067696-3bdc-4c02-8f6f-4eebe8d8ab98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 215",
      "id": "ac067696-3bdc-4c02-8f6f-4eebe8d8ab98",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac067696-3bdc-4c02-8f6f-4eebe8d8ab98",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1187205504,
      "longitude": 28.7119610877
    }
  },
  "ac9bb1f8-8dec-4f56-8b3f-a5f67bdb3fc2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 160",
      "id": "ac9bb1f8-8dec-4f56-8b3f-a5f67bdb3fc2",
      "kilometrage": 224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac9bb1f8-8dec-4f56-8b3f-a5f67bdb3fc2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1390130508,
      "longitude": 28.9112415589
    }
  },
  "ac9c02a5-c76e-4d1f-bc75-f981beeadf82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "ac9c02a5-c76e-4d1f-bc75-f981beeadf82",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac9c02a5-c76e-4d1f-bc75-f981beeadf82",
    "image": "perev_left",
    "point": {
      "latitude": 51.5615521638,
      "longitude": 29.8341587376
    }
  },
  "acb6b123-75fa-4896-81ce-fcd922d7c688": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 165",
      "id": "acb6b123-75fa-4896-81ce-fcd922d7c688",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acb6b123-75fa-4896-81ce-fcd922d7c688",
    "image": "perev_right",
    "point": {
      "latitude": 52.1328625339,
      "longitude": 28.8743248644
    }
  },
  "accb3faf-cb87-420b-9e3a-49f8873f2931": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "accb3faf-cb87-420b-9e3a-49f8873f2931",
      "kilometrage": 328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "accb3faf-cb87-420b-9e3a-49f8873f2931",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0685850829,
      "longitude": 28.0208353814
    }
  },
  "acd3b8a2-b249-44c9-88e0-d414ce7b3568": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "acd3b8a2-b249-44c9-88e0-d414ce7b3568",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acd3b8a2-b249-44c9-88e0-d414ce7b3568",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0328905003,
      "longitude": 29.304471746
    }
  },
  "ad096ea4-0c20-4008-9977-e26433fb021b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 226",
      "id": "ad096ea4-0c20-4008-9977-e26433fb021b",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad096ea4-0c20-4008-9977-e26433fb021b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1035036451,
      "longitude": 28.4685955358
    }
  },
  "ae597202-e81f-4afa-bbbc-266ee5c73959": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 364",
      "id": "ae597202-e81f-4afa-bbbc-266ee5c73959",
      "kilometrage": 377,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae597202-e81f-4afa-bbbc-266ee5c73959",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1179833412,
      "longitude": 27.5737206244
    }
  },
  "ae91ebf6-3cdf-4c84-bf4e-84f1c01679b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "ae91ebf6-3cdf-4c84-bf4e-84f1c01679b2",
      "kilometrage": 361,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae91ebf6-3cdf-4c84-bf4e-84f1c01679b2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0943783246,
      "longitude": 27.6963767567
    }
  },
  "aec12197-56dd-44b8-9224-75b0de81aaa4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 141",
      "id": "aec12197-56dd-44b8-9224-75b0de81aaa4",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aec12197-56dd-44b8-9224-75b0de81aaa4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0247981485,
      "longitude": 29.3231871822
    }
  },
  "aed0052f-34b1-4b0c-9a48-b00c41cc0a80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 286",
      "id": "aed0052f-34b1-4b0c-9a48-b00c41cc0a80",
      "kilometrage": 343,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aed0052f-34b1-4b0c-9a48-b00c41cc0a80",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0634552212,
      "longitude": 27.8982570016
    }
  },
  "af7599b2-dfd1-4cbb-b0c9-7544cbd2e04c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 325",
      "id": "af7599b2-dfd1-4cbb-b0c9-7544cbd2e04c",
      "kilometrage": 408,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af7599b2-dfd1-4cbb-b0c9-7544cbd2e04c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.146011667,
      "longitude": 27.360958194
    }
  },
  "afca9963-9857-4684-86ae-2eef7210b371": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 400",
      "id": "afca9963-9857-4684-86ae-2eef7210b371",
      "kilometrage": 400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afca9963-9857-4684-86ae-2eef7210b371",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1362321329,
      "longitude": 27.4167774418
    }
  },
  "afd37cbe-17c0-4c2b-a22f-ad01b9c07761": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 125",
      "id": "afd37cbe-17c0-4c2b-a22f-ad01b9c07761",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afd37cbe-17c0-4c2b-a22f-ad01b9c07761",
    "image": "perev_right",
    "point": {
      "latitude": 52.0881655048,
      "longitude": 29.1948863876
    }
  },
  "afed907f-741a-411e-af50-1ea40c58437e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 284",
      "id": "afed907f-741a-411e-af50-1ea40c58437e",
      "kilometrage": 323,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afed907f-741a-411e-af50-1ea40c58437e",
    "image": "perev_right",
    "point": {
      "latitude": 52.0696007505,
      "longitude": 28.076249099
    }
  },
  "affa2696-4cfc-4a5d-8aa0-def234a5fbd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 62",
      "id": "affa2696-4cfc-4a5d-8aa0-def234a5fbd8",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "affa2696-4cfc-4a5d-8aa0-def234a5fbd8",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7268246651,
      "longitude": 29.680149531
    }
  },
  "b0284e02-e182-48b3-b257-a24904e5a12e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "b0284e02-e182-48b3-b257-a24904e5a12e",
      "kilometrage": 333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0284e02-e182-48b3-b257-a24904e5a12e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0757252292,
      "longitude": 27.9770331956
    }
  },
  "b09643e0-c052-4d80-836a-fda6f99baf14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b09643e0-c052-4d80-836a-fda6f99baf14",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b09643e0-c052-4d80-836a-fda6f99baf14",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1134556309,
      "longitude": 28.2099048576
    }
  },
  "b0d7c12f-646e-4508-93c4-94cd942fc162": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 239",
      "id": "b0d7c12f-646e-4508-93c4-94cd942fc162",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0d7c12f-646e-4508-93c4-94cd942fc162",
    "image": "buyo_right",
    "point": {
      "latitude": 52.102133556,
      "longitude": 28.468915028
    }
  },
  "b11f5fac-bfb8-4aad-91ed-41609b534b72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 195",
      "id": "b11f5fac-bfb8-4aad-91ed-41609b534b72",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b11f5fac-bfb8-4aad-91ed-41609b534b72",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1279643946,
      "longitude": 28.9394614064
    }
  },
  "b1b8533b-c8a0-477c-9b34-c1b087344897": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b1b8533b-c8a0-477c-9b34-c1b087344897",
      "kilometrage": 394,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1b8533b-c8a0-477c-9b34-c1b087344897",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1273486068,
      "longitude": 27.4677430673
    }
  },
  "b1b85d53-e2dc-42e3-a050-653ea586671c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 128",
      "id": "b1b85d53-e2dc-42e3-a050-653ea586671c",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1b85d53-e2dc-42e3-a050-653ea586671c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9688873495,
      "longitude": 29.3969961612
    }
  },
  "b2a4b1b2-9402-430e-80bd-0bacbb0102ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "b2a4b1b2-9402-430e-80bd-0bacbb0102ca",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2a4b1b2-9402-430e-80bd-0bacbb0102ca",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.2006062424,
      "longitude": 27.3915868536
    }
  },
  "b3495bec-3b92-438d-b466-3dff46baa5a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 175",
      "id": "b3495bec-3b92-438d-b466-3dff46baa5a1",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3495bec-3b92-438d-b466-3dff46baa5a1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1292806938,
      "longitude": 28.8366510294
    }
  },
  "b36e6d45-1f9a-49bb-98b8-08e8b681f6b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "b36e6d45-1f9a-49bb-98b8-08e8b681f6b2",
      "kilometrage": 339,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b36e6d45-1f9a-49bb-98b8-08e8b681f6b2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0730209153,
      "longitude": 27.9345006094
    }
  },
  "b384758e-bc0b-4c35-9e13-09a6ed1e76a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b384758e-bc0b-4c35-9e13-09a6ed1e76a3",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b384758e-bc0b-4c35-9e13-09a6ed1e76a3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1215647457,
      "longitude": 28.8359429795
    }
  },
  "b3b37bc7-60f5-430c-979e-cb5a504d8fab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 357",
      "id": "b3b37bc7-60f5-430c-979e-cb5a504d8fab",
      "kilometrage": 373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3b37bc7-60f5-430c-979e-cb5a504d8fab",
    "image": "perev_left",
    "point": {
      "latitude": 52.1032243979,
      "longitude": 27.6022331461
    }
  },
  "b3b9663f-fde3-48ba-ba36-7ca5473295d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 361",
      "id": "b3b9663f-fde3-48ba-ba36-7ca5473295d4",
      "kilometrage": 376,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3b9663f-fde3-48ba-ba36-7ca5473295d4",
    "image": "perev_right",
    "point": {
      "latitude": 52.1084709667,
      "longitude": 27.581314712
    }
  },
  "b3c90474-40df-4adf-8828-c3edec171d4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "b3c90474-40df-4adf-8828-c3edec171d4d",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3c90474-40df-4adf-8828-c3edec171d4d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.9564052773,
      "longitude": 29.4357921274
    }
  },
  "b40393b4-e711-4a03-b9f8-ddba97738e64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "b40393b4-e711-4a03-b9f8-ddba97738e64",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b40393b4-e711-4a03-b9f8-ddba97738e64",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1050302602,
      "longitude": 28.2145075982
    }
  },
  "b416f6b7-86c9-47c9-81f8-a87d5e6c11cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 145",
      "id": "b416f6b7-86c9-47c9-81f8-a87d5e6c11cc",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b416f6b7-86c9-47c9-81f8-a87d5e6c11cc",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.0292330239,
      "longitude": 29.3138533055
    }
  },
  "b44206e6-0309-4039-8859-0bab3ca7a9da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b44206e6-0309-4039-8859-0bab3ca7a9da",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b44206e6-0309-4039-8859-0bab3ca7a9da",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0779899851,
      "longitude": 28.3347862302
    }
  },
  "b4454f46-1b5b-4478-aa9e-420b9e0b7848": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 391",
      "id": "b4454f46-1b5b-4478-aa9e-420b9e0b7848",
      "kilometrage": 395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4454f46-1b5b-4478-aa9e-420b9e0b7848",
    "image": "perev_left",
    "point": {
      "latitude": 52.1306662852,
      "longitude": 27.4643418708
    }
  },
  "b453f5f2-9082-49d7-8c52-e5590ad500b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 210а",
      "id": "b453f5f2-9082-49d7-8c52-e5590ad500b6",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b453f5f2-9082-49d7-8c52-e5590ad500b6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1320730687,
      "longitude": 28.5816141646
    }
  },
  "b465be20-bcc5-480b-9386-92c482f0c2c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "b465be20-bcc5-480b-9386-92c482f0c2c7",
      "kilometrage": 320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b465be20-bcc5-480b-9386-92c482f0c2c7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.074457022,
      "longitude": 28.0876564338
    }
  },
  "b4a65c63-1f8c-449b-9fb4-fbf141eee0cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 138",
      "id": "b4a65c63-1f8c-449b-9fb4-fbf141eee0cb",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4a65c63-1f8c-449b-9fb4-fbf141eee0cb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1185382386,
      "longitude": 29.0998467383
    }
  },
  "b4aac6c9-00d4-4b24-b504-3b4ed1056535": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 205",
      "id": "b4aac6c9-00d4-4b24-b504-3b4ed1056535",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4aac6c9-00d4-4b24-b504-3b4ed1056535",
    "image": "buyo_left",
    "point": {
      "latitude": 52.119909333,
      "longitude": 28.835512778
    }
  },
  "b57a22bd-1ecc-4f88-94db-6e497d52599d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 188",
      "id": "b57a22bd-1ecc-4f88-94db-6e497d52599d",
      "kilometrage": 211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b57a22bd-1ecc-4f88-94db-6e497d52599d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1293184395,
      "longitude": 29.0113043805
    }
  },
  "b5d72d6f-d8d4-4201-b49c-6815ec1fcb52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 399",
      "id": "b5d72d6f-d8d4-4201-b49c-6815ec1fcb52",
      "kilometrage": 398,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5d72d6f-d8d4-4201-b49c-6815ec1fcb52",
    "image": "perev_right",
    "point": {
      "latitude": 52.1289940815,
      "longitude": 27.4279487597
    }
  },
  "b79e5d00-9e42-4049-9319-dbc0f45f52bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 306",
      "id": "b79e5d00-9e42-4049-9319-dbc0f45f52bc",
      "kilometrage": 338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b79e5d00-9e42-4049-9319-dbc0f45f52bc",
    "image": "perev_right",
    "point": {
      "latitude": 52.0663223736,
      "longitude": 27.9465256743
    }
  },
  "b7d4294a-4e06-473d-a511-c61aa7972d54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "b7d4294a-4e06-473d-a511-c61aa7972d54",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7d4294a-4e06-473d-a511-c61aa7972d54",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1559329112,
      "longitude": 27.3529522751
    }
  },
  "b80a1e88-b395-496d-83ea-58d26906df27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 170",
      "id": "b80a1e88-b395-496d-83ea-58d26906df27",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b80a1e88-b395-496d-83ea-58d26906df27",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0905995979,
      "longitude": 29.1928481513
    }
  },
  "b835bfbe-0006-4b5f-b7eb-56f5c494c01c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b835bfbe-0006-4b5f-b7eb-56f5c494c01c",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b835bfbe-0006-4b5f-b7eb-56f5c494c01c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1116961619,
      "longitude": 28.1873960095
    }
  },
  "b8490a13-a0a4-4144-ae35-143c132b690c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "b8490a13-a0a4-4144-ae35-143c132b690c",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8490a13-a0a4-4144-ae35-143c132b690c",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0859217205,
      "longitude": 27.7315664054
    }
  },
  "b8c91cf2-ddd4-4d84-aaeb-4a2a46311e48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "b8c91cf2-ddd4-4d84-aaeb-4a2a46311e48",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8c91cf2-ddd4-4d84-aaeb-4a2a46311e48",
    "image": "buyo_right",
    "point": {
      "latitude": 52.150568789,
      "longitude": 28.6941288934
    }
  },
  "b8db81af-04cd-4253-9555-b715394d5ffe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 353",
      "id": "b8db81af-04cd-4253-9555-b715394d5ffe",
      "kilometrage": 370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8db81af-04cd-4253-9555-b715394d5ffe",
    "image": "perev_right",
    "point": {
      "latitude": 52.0947355362,
      "longitude": 27.6229391226
    }
  },
  "b937e97a-fbbe-4b97-bc38-2a7eeb156689": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 250",
      "id": "b937e97a-fbbe-4b97-bc38-2a7eeb156689",
      "kilometrage": 299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b937e97a-fbbe-4b97-bc38-2a7eeb156689",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1089689921,
      "longitude": 28.2704187555
    }
  },
  "b9b0712a-c2f7-4716-ad42-a0b6d1083cc2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 204",
      "id": "b9b0712a-c2f7-4716-ad42-a0b6d1083cc2",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9b0712a-c2f7-4716-ad42-a0b6d1083cc2",
    "image": "perev_right",
    "point": {
      "latitude": 52.1336526299,
      "longitude": 28.6556699807
    }
  },
  "ba0d15d6-d82a-4ac8-8f0b-87ccdcbaf15e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 265",
      "id": "ba0d15d6-d82a-4ac8-8f0b-87ccdcbaf15e",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba0d15d6-d82a-4ac8-8f0b-87ccdcbaf15e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1032381684,
      "longitude": 28.1832105826
    }
  },
  "ba78d757-6196-44a4-aa7d-c3140eda42cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 255",
      "id": "ba78d757-6196-44a4-aa7d-c3140eda42cd",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba78d757-6196-44a4-aa7d-c3140eda42cd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0772105679,
      "longitude": 28.3350287828
    }
  },
  "bab31742-98ce-453f-ae98-82f490018fe2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 220",
      "id": "bab31742-98ce-453f-ae98-82f490018fe2",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bab31742-98ce-453f-ae98-82f490018fe2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1178313828,
      "longitude": 28.9313658682
    }
  },
  "babd74a4-3e62-4b56-ad91-5b35e030ced3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "babd74a4-3e62-4b56-ad91-5b35e030ced3",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "babd74a4-3e62-4b56-ad91-5b35e030ced3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0664256052,
      "longitude": 29.2537053735
    }
  },
  "bb111372-545c-4984-b0eb-dfbcb3f9dcb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 216",
      "id": "bb111372-545c-4984-b0eb-dfbcb3f9dcb1",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb111372-545c-4984-b0eb-dfbcb3f9dcb1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1120041993,
      "longitude": 28.5271213268
    }
  },
  "bb2642e4-2bfc-4e43-8d37-8f65dc329819": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "bb2642e4-2bfc-4e43-8d37-8f65dc329819",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb2642e4-2bfc-4e43-8d37-8f65dc329819",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7355109642,
      "longitude": 29.6904756361
    }
  },
  "bb4ffd01-07dc-40bc-9cc7-8f6395245fa6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 414",
      "id": "bb4ffd01-07dc-40bc-9cc7-8f6395245fa6",
      "kilometrage": 407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb4ffd01-07dc-40bc-9cc7-8f6395245fa6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1384225829,
      "longitude": 27.3641133281
    }
  },
  "bbaa334d-67e1-4694-b3da-c95e044bfde1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "bbaa334d-67e1-4694-b3da-c95e044bfde1",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbaa334d-67e1-4694-b3da-c95e044bfde1",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7998920166,
      "longitude": 29.5772662185
    }
  },
  "bbf003e0-27ce-4213-8a57-bef1eeeea6e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "bbf003e0-27ce-4213-8a57-bef1eeeea6e1",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbf003e0-27ce-4213-8a57-bef1eeeea6e1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1222118761,
      "longitude": 28.5601440888
    }
  },
  "bbf29200-ebdd-4618-83ff-95f5262f7ed4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 4",
      "id": "bbf29200-ebdd-4618-83ff-95f5262f7ed4",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbf29200-ebdd-4618-83ff-95f5262f7ed4",
    "image": "buyo_left",
    "point": {
      "latitude": 51.483042361,
      "longitude": 29.947702278
    }
  },
  "bc0bd3f9-4f79-48a7-bfb2-86d899d91f51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 205",
      "id": "bc0bd3f9-4f79-48a7-bfb2-86d899d91f51",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc0bd3f9-4f79-48a7-bfb2-86d899d91f51",
    "image": "perev_left",
    "point": {
      "latitude": 52.1431031781,
      "longitude": 28.6427961788
    }
  },
  "bc0c285e-a9f5-41a3-a288-1f9e6568cbc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "bc0c285e-a9f5-41a3-a288-1f9e6568cbc1",
      "kilometrage": 333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc0c285e-a9f5-41a3-a288-1f9e6568cbc1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0736859014,
      "longitude": 27.9822516752
    }
  },
  "bc658992-26f2-4075-aeab-d9ca866e61df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 127",
      "id": "bc658992-26f2-4075-aeab-d9ca866e61df",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc658992-26f2-4075-aeab-d9ca866e61df",
    "image": "perev_left",
    "point": {
      "latitude": 52.0962692238,
      "longitude": 29.1832971391
    }
  },
  "bc75ca1d-91c8-4ba3-b573-290ba0be085b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 395",
      "id": "bc75ca1d-91c8-4ba3-b573-290ba0be085b",
      "kilometrage": 395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc75ca1d-91c8-4ba3-b573-290ba0be085b",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1324136686,
      "longitude": 27.463819578
    }
  },
  "bd090150-2f85-4005-88b0-f96fe1ff807b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 144",
      "id": "bd090150-2f85-4005-88b0-f96fe1ff807b",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd090150-2f85-4005-88b0-f96fe1ff807b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1181401408,
      "longitude": 29.0281139254
    }
  },
  "bd349276-e521-4fbb-ab61-03ee95b12352": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Возможность получить информацию о судоходных условиях по радиосвязи на указанном канале  ",
      "id": "bd349276-e521-4fbb-ab61-03ee95b12352",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd349276-e521-4fbb-ab61-03ee95b12352",
    "image": "vhf",
    "point": {
      "latitude": 52.0447634669,
      "longitude": 29.2907772443
    }
  },
  "bd8db41f-bac5-4ca2-8812-d510b9eda9d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "bd8db41f-bac5-4ca2-8812-d510b9eda9d7",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd8db41f-bac5-4ca2-8812-d510b9eda9d7",
    "image": "main_way",
    "point": {
      "latitude": 52.1582946702,
      "longitude": 27.3511815432
    }
  },
  "be00e7ba-c93d-4063-8664-d8aea4b95817": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "be00e7ba-c93d-4063-8664-d8aea4b95817",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be00e7ba-c93d-4063-8664-d8aea4b95817",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1196032173,
      "longitude": 29.1504723035
    }
  },
  "be2e7a1e-c80d-4409-94ee-0fe1babc6036": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "be2e7a1e-c80d-4409-94ee-0fe1babc6036",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be2e7a1e-c80d-4409-94ee-0fe1babc6036",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.048545696,
      "longitude": 29.2803028069
    }
  },
  "be4e2bbf-59df-4b5e-984b-338bbaf23148": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "be4e2bbf-59df-4b5e-984b-338bbaf23148",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be4e2bbf-59df-4b5e-984b-338bbaf23148",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0781940158,
      "longitude": 27.8352789547
    }
  },
  "be5abb8e-ef5d-4c62-ae36-cd7e8cb42e1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 288",
      "id": "be5abb8e-ef5d-4c62-ae36-cd7e8cb42e1f",
      "kilometrage": 326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be5abb8e-ef5d-4c62-ae36-cd7e8cb42e1f",
    "image": "perev_left",
    "point": {
      "latitude": 52.070675395,
      "longitude": 28.0533379939
    }
  },
  "be69dde1-2eb4-4ce0-b46e-174b8fff0538": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "be69dde1-2eb4-4ce0-b46e-174b8fff0538",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be69dde1-2eb4-4ce0-b46e-174b8fff0538",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0758163613,
      "longitude": 27.7278625816
    }
  },
  "bef3cd63-36c4-4038-afc3-1991bdd59ffb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 271",
      "id": "bef3cd63-36c4-4038-afc3-1991bdd59ffb",
      "kilometrage": 314,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bef3cd63-36c4-4038-afc3-1991bdd59ffb",
    "image": "perev_left",
    "point": {
      "latitude": 52.0886679852,
      "longitude": 28.1511619512
    }
  },
  "bf103d7b-4789-4334-bfed-f6d8e2237804": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 222",
      "id": "bf103d7b-4789-4334-bfed-f6d8e2237804",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf103d7b-4789-4334-bfed-f6d8e2237804",
    "image": "perev_left",
    "point": {
      "latitude": 52.1176066606,
      "longitude": 28.4893326855
    }
  },
  "bf52a391-876b-4fb6-bda0-1d02557cb999": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "bf52a391-876b-4fb6-bda0-1d02557cb999",
      "kilometrage": 263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf52a391-876b-4fb6-bda0-1d02557cb999",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1405955542,
      "longitude": 28.6197917632
    }
  },
  "bf66b825-d975-4184-915b-6dcfe099bae7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 275",
      "id": "bf66b825-d975-4184-915b-6dcfe099bae7",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf66b825-d975-4184-915b-6dcfe099bae7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1183634499,
      "longitude": 28.4965497017
    }
  },
  "bf8920f5-70f6-4118-84d9-2f46363cf171": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 16",
      "id": "bf8920f5-70f6-4118-84d9-2f46363cf171",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf8920f5-70f6-4118-84d9-2f46363cf171",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5163804242,
      "longitude": 29.9050231191
    }
  },
  "bfa612ab-5d45-4196-88ab-36f75ed7ffda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 65",
      "id": "bfa612ab-5d45-4196-88ab-36f75ed7ffda",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfa612ab-5d45-4196-88ab-36f75ed7ffda",
    "image": "kilometrage",
    "point": {
      "latitude": 51.4818199665,
      "longitude": 29.9705873822
    }
  },
  "bfc68245-88ce-4a6d-9a86-affa826a99f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "bfc68245-88ce-4a6d-9a86-affa826a99f9",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfc68245-88ce-4a6d-9a86-affa826a99f9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1090672973,
      "longitude": 28.721593858
    }
  },
  "c01d42f5-f2c3-4cab-94c4-48b92fb99d73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 380",
      "id": "c01d42f5-f2c3-4cab-94c4-48b92fb99d73",
      "kilometrage": 388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c01d42f5-f2c3-4cab-94c4-48b92fb99d73",
    "image": "perev_right",
    "point": {
      "latitude": 52.1237988355,
      "longitude": 27.5136728283
    }
  },
  "c0343e01-30b6-4b62-b7b6-fe78826b0225": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "c0343e01-30b6-4b62-b7b6-fe78826b0225",
      "kilometrage": 321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0343e01-30b6-4b62-b7b6-fe78826b0225",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0791984022,
      "longitude": 28.0715398471
    }
  },
  "c0548c10-e319-4fa1-a864-50b51895a95c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "c0548c10-e319-4fa1-a864-50b51895a95c",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0548c10-e319-4fa1-a864-50b51895a95c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8398530992,
      "longitude": 29.5059323645
    }
  },
  "c07fdb6b-dd25-41ee-9625-f2f4c955293e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "c07fdb6b-dd25-41ee-9625-f2f4c955293e",
      "kilometrage": 72,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c07fdb6b-dd25-41ee-9625-f2f4c955293e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5041819992,
      "longitude": 29.9505324279
    }
  },
  "c0c304fd-3d52-48a1-9679-8dda49b3f9e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 118",
      "id": "c0c304fd-3d52-48a1-9679-8dda49b3f9e4",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0c304fd-3d52-48a1-9679-8dda49b3f9e4",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9372711974,
      "longitude": 29.4825406432
    }
  },
  "c122f571-c78a-479f-839f-38f74de12839": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 110",
      "id": "c122f571-c78a-479f-839f-38f74de12839",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c122f571-c78a-479f-839f-38f74de12839",
    "image": "perev_right",
    "point": {
      "latitude": 51.9319761063,
      "longitude": 29.4895919039
    }
  },
  "c129810c-a92f-47c8-9068-51f819eec836": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 60",
      "id": "c129810c-a92f-47c8-9068-51f819eec836",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c129810c-a92f-47c8-9068-51f819eec836",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7087964233,
      "longitude": 29.6752847284
    }
  },
  "c142f9fb-7bf3-492b-ae0e-67a975bcc1f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "c142f9fb-7bf3-492b-ae0e-67a975bcc1f6",
      "kilometrage": 301,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c142f9fb-7bf3-492b-ae0e-67a975bcc1f6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0957535014,
      "longitude": 28.2564699509
    }
  },
  "c19e3c40-a9de-465e-9e0c-21b409d1167d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 340",
      "id": "c19e3c40-a9de-465e-9e0c-21b409d1167d",
      "kilometrage": 362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c19e3c40-a9de-465e-9e0c-21b409d1167d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1033457063,
      "longitude": 27.6964276106
    }
  },
  "c1b98755-77b7-48e8-8a9f-00cd1a9d3a92": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c1b98755-77b7-48e8-8a9f-00cd1a9d3a92",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1b98755-77b7-48e8-8a9f-00cd1a9d3a92",
    "image": "attention",
    "point": {
      "latitude": 51.926563883,
      "longitude": 29.508208923
    }
  },
  "c1ce06b8-332c-4fcf-b439-fbcadf6d5835": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 15",
      "id": "c1ce06b8-332c-4fcf-b439-fbcadf6d5835",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1ce06b8-332c-4fcf-b439-fbcadf6d5835",
    "image": "perev_right",
    "point": {
      "latitude": 51.5054739549,
      "longitude": 29.9011530782
    }
  },
  "c231336d-c591-47eb-87a4-66111c4f5c3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "c231336d-c591-47eb-87a4-66111c4f5c3f",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c231336d-c591-47eb-87a4-66111c4f5c3f",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8628872801,
      "longitude": 29.5021881061
    }
  },
  "c258f037-cb7b-44fc-a0ed-75ddf2384e7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 1",
      "id": "c258f037-cb7b-44fc-a0ed-75ddf2384e7b",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c258f037-cb7b-44fc-a0ed-75ddf2384e7b",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1596808975,
      "longitude": 27.3525224198
    }
  },
  "c2764027-5b67-4b50-aed3-c0332b104b1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 53",
      "id": "c2764027-5b67-4b50-aed3-c0332b104b1f",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2764027-5b67-4b50-aed3-c0332b104b1f",
    "image": "perev_left",
    "point": {
      "latitude": 51.6682977805,
      "longitude": 29.7189177515
    }
  },
  "c2794541-f59a-4b08-9d80-8036bb4651ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 340",
      "id": "c2794541-f59a-4b08-9d80-8036bb4651ae",
      "kilometrage": 340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2794541-f59a-4b08-9d80-8036bb4651ae",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0762421969,
      "longitude": 27.9231548949
    }
  },
  "c2a89df2-bfe7-4bea-a9a8-13815df3a9b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "c2a89df2-bfe7-4bea-a9a8-13815df3a9b1",
      "kilometrage": 326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2a89df2-bfe7-4bea-a9a8-13815df3a9b1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0692575152,
      "longitude": 28.0522383199
    }
  },
  "c37b0e8b-dd20-4344-82f1-2e8ba3108981": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 138",
      "id": "c37b0e8b-dd20-4344-82f1-2e8ba3108981",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c37b0e8b-dd20-4344-82f1-2e8ba3108981",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0055403724,
      "longitude": 29.3386150391
    }
  },
  "c3ff2586-33fe-4ba3-8553-be6b9efb692e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 244",
      "id": "c3ff2586-33fe-4ba3-8553-be6b9efb692e",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3ff2586-33fe-4ba3-8553-be6b9efb692e",
    "image": "perev_left",
    "point": {
      "latitude": 52.0732238645,
      "longitude": 28.3408021405
    }
  },
  "c448eb1d-d108-42a1-971d-1dad8c4ef4eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "c448eb1d-d108-42a1-971d-1dad8c4ef4eb",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c448eb1d-d108-42a1-971d-1dad8c4ef4eb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1159756273,
      "longitude": 28.9704834595
    }
  },
  "c44d5d3e-83c2-4124-9fcf-5ac3a44a8ea4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 38",
      "id": "c44d5d3e-83c2-4124-9fcf-5ac3a44a8ea4",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c44d5d3e-83c2-4124-9fcf-5ac3a44a8ea4",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6158633859,
      "longitude": 29.7776561296
    }
  },
  "c4de0a4c-d952-4e33-96ff-ba1ea8ff7e1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "c4de0a4c-d952-4e33-96ff-ba1ea8ff7e1d",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4de0a4c-d952-4e33-96ff-ba1ea8ff7e1d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0958574081,
      "longitude": 29.1730756646
    }
  },
  "c51f3417-7e59-4b40-b2df-9b01853d2b46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "c51f3417-7e59-4b40-b2df-9b01853d2b46",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c51f3417-7e59-4b40-b2df-9b01853d2b46",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1121699047,
      "longitude": 28.776502969
    }
  },
  "c53bb31a-6fec-4831-aa75-48c3aede66aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c53bb31a-6fec-4831-aa75-48c3aede66aa",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c53bb31a-6fec-4831-aa75-48c3aede66aa",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1142150478,
      "longitude": 28.2097383884
    }
  },
  "c56e4f9e-2a2b-4be0-b7ba-ded1bbd3148a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "c56e4f9e-2a2b-4be0-b7ba-ded1bbd3148a",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c56e4f9e-2a2b-4be0-b7ba-ded1bbd3148a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1088878758,
      "longitude": 28.5214109497
    }
  },
  "c5782805-71d1-48e9-8c5b-88e2abd57681": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 180",
      "id": "c5782805-71d1-48e9-8c5b-88e2abd57681",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5782805-71d1-48e9-8c5b-88e2abd57681",
    "image": "perev_right",
    "point": {
      "latitude": 52.1183981205,
      "longitude": 28.7987865689
    }
  },
  "c5a6ed45-7177-44bd-a72d-8b25a2ed4e54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "c5a6ed45-7177-44bd-a72d-8b25a2ed4e54",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5a6ed45-7177-44bd-a72d-8b25a2ed4e54",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1016252312,
      "longitude": 28.3002200357
    }
  },
  "c5a8f90a-69a7-4d49-a589-2c74368260e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 301",
      "id": "c5a8f90a-69a7-4d49-a589-2c74368260e8",
      "kilometrage": 335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5a8f90a-69a7-4d49-a589-2c74368260e8",
    "image": "perev_right",
    "point": {
      "latitude": 52.0681963697,
      "longitude": 27.977997399
    }
  },
  "c6143b31-bba1-4f9a-ae97-cb4089e97795": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "c6143b31-bba1-4f9a-ae97-cb4089e97795",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6143b31-bba1-4f9a-ae97-cb4089e97795",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0763147989,
      "longitude": 29.2179103205
    }
  },
  "c63c04c8-1dcd-4db9-9c5d-0ba32233f88c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 283",
      "id": "c63c04c8-1dcd-4db9-9c5d-0ba32233f88c",
      "kilometrage": 322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c63c04c8-1dcd-4db9-9c5d-0ba32233f88c",
    "image": "perev_left",
    "point": {
      "latitude": 52.077694179,
      "longitude": 28.0662727788
    }
  },
  "c67881ce-1f22-48b9-8623-034dfa5ee5df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 105",
      "id": "c67881ce-1f22-48b9-8623-034dfa5ee5df",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c67881ce-1f22-48b9-8623-034dfa5ee5df",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8622550683,
      "longitude": 29.5034159547
    }
  },
  "c6b6b1c1-b811-42e6-aaee-2119616d5bf8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 49",
      "id": "c6b6b1c1-b811-42e6-aaee-2119616d5bf8",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6b6b1c1-b811-42e6-aaee-2119616d5bf8",
    "image": "perev_right",
    "point": {
      "latitude": 51.6385082941,
      "longitude": 29.7426641282
    }
  },
  "c6cd5a52-da83-4185-aa01-b0e549ebb060": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "c6cd5a52-da83-4185-aa01-b0e549ebb060",
      "kilometrage": 254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6cd5a52-da83-4185-aa01-b0e549ebb060",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1381137519,
      "longitude": 28.6982636195
    }
  },
  "c6f469ee-93e9-43ce-8e7f-5290a9d5a9b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 408",
      "id": "c6f469ee-93e9-43ce-8e7f-5290a9d5a9b9",
      "kilometrage": 404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6f469ee-93e9-43ce-8e7f-5290a9d5a9b9",
    "image": "perev_right",
    "point": {
      "latitude": 52.1412583394,
      "longitude": 27.3936326126
    }
  },
  "c72672e8-25f9-44af-952b-d19e6b7d2f2c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "c72672e8-25f9-44af-952b-d19e6b7d2f2c",
      "kilometrage": 401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c72672e8-25f9-44af-952b-d19e6b7d2f2c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1367699947,
      "longitude": 27.4030195227
    }
  },
  "c77bf5d6-9c1f-4cbe-8dec-cab48a9355ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 55",
      "id": "c77bf5d6-9c1f-4cbe-8dec-cab48a9355ea",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c77bf5d6-9c1f-4cbe-8dec-cab48a9355ea",
    "image": "buyo_left",
    "point": {
      "latitude": 51.686644606,
      "longitude": 29.692299399
    }
  },
  "c78dc9e2-8737-4ea9-85be-c04a57985947": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 271",
      "id": "c78dc9e2-8737-4ea9-85be-c04a57985947",
      "kilometrage": 312,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c78dc9e2-8737-4ea9-85be-c04a57985947",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0881344185,
      "longitude": 28.1691856644
    }
  },
  "c7bccfe6-8497-4593-bd76-d610d973d220": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 18",
      "id": "c7bccfe6-8497-4593-bd76-d610d973d220",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7bccfe6-8497-4593-bd76-d610d973d220",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5248927104,
      "longitude": 29.8847969952
    }
  },
  "c7dbaba7-24a6-4caf-b2f3-b5930001c784": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c7dbaba7-24a6-4caf-b2f3-b5930001c784",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7dbaba7-24a6-4caf-b2f3-b5930001c784",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1114137989,
      "longitude": 29.1620177266
    }
  },
  "c7ee22a5-dcad-4b11-a18a-c1a0235e60e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "c7ee22a5-dcad-4b11-a18a-c1a0235e60e2",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7ee22a5-dcad-4b11-a18a-c1a0235e60e2",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6478815641,
      "longitude": 29.7708522577
    }
  },
  "c819d9c9-e4b9-4b93-8863-0ff7b2c9d0a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 229",
      "id": "c819d9c9-e4b9-4b93-8863-0ff7b2c9d0a2",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c819d9c9-e4b9-4b93-8863-0ff7b2c9d0a2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1360401456,
      "longitude": 28.5893926373
    }
  },
  "c8324ba4-4fd5-479f-b279-2d183b5e9ca0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 180",
      "id": "c8324ba4-4fd5-479f-b279-2d183b5e9ca0",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8324ba4-4fd5-479f-b279-2d183b5e9ca0",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0160480474,
      "longitude": 29.3321918008
    }
  },
  "c848ac3e-37f3-4ccc-9aad-85a7bc5c9a01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "c848ac3e-37f3-4ccc-9aad-85a7bc5c9a01",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c848ac3e-37f3-4ccc-9aad-85a7bc5c9a01",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1122563988,
      "longitude": 28.4865612683
    }
  },
  "c85646d4-dc00-4006-9ade-b574562ac28d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 215",
      "id": "c85646d4-dc00-4006-9ade-b574562ac28d",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c85646d4-dc00-4006-9ade-b574562ac28d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1111423691,
      "longitude": 28.5369016008
    }
  },
  "c86649e0-ad74-469a-a3c7-ad1b7261a6c0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 323",
      "id": "c86649e0-ad74-469a-a3c7-ad1b7261a6c0",
      "kilometrage": 404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c86649e0-ad74-469a-a3c7-ad1b7261a6c0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1407092114,
      "longitude": 27.3885260144
    }
  },
  "c86f0f8c-e595-426b-b544-9c614fc7ef0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 130а",
      "id": "c86f0f8c-e595-426b-b544-9c614fc7ef0b",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c86f0f8c-e595-426b-b544-9c614fc7ef0b",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.9791202112,
      "longitude": 29.3799444921
    }
  },
  "c894fcb2-4d2e-4786-91bb-8fbda307b21b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 388",
      "id": "c894fcb2-4d2e-4786-91bb-8fbda307b21b",
      "kilometrage": 393,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c894fcb2-4d2e-4786-91bb-8fbda307b21b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1293058145,
      "longitude": 27.4712354305
    }
  },
  "c8ba26df-bced-4e01-8d1f-2b96525f6001": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "c8ba26df-bced-4e01-8d1f-2b96525f6001",
      "kilometrage": 338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8ba26df-bced-4e01-8d1f-2b96525f6001",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0681559907,
      "longitude": 27.9373613166
    }
  },
  "c8f4a06a-2537-4dda-870c-2aa7b101ce7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c8f4a06a-2537-4dda-870c-2aa7b101ce7c",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8f4a06a-2537-4dda-870c-2aa7b101ce7c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1104024786,
      "longitude": 29.1591297457
    }
  },
  "c970608f-8efb-4a5e-8d27-53b14a5ecf3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 322",
      "id": "c970608f-8efb-4a5e-8d27-53b14a5ecf3c",
      "kilometrage": 350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c970608f-8efb-4a5e-8d27-53b14a5ecf3c",
    "image": "perev_left",
    "point": {
      "latitude": 52.0870610667,
      "longitude": 27.8034780225
    }
  },
  "c9724ff5-a4d9-4a89-bc2d-745a6a1d99ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 396",
      "id": "c9724ff5-a4d9-4a89-bc2d-745a6a1d99ff",
      "kilometrage": 397,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9724ff5-a4d9-4a89-bc2d-745a6a1d99ff",
    "image": "perev_right",
    "point": {
      "latitude": 52.1242924597,
      "longitude": 27.442835461
    }
  },
  "c977ea95-c26e-4b7d-9059-e0c320b4f2fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "c977ea95-c26e-4b7d-9059-e0c320b4f2fe",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c977ea95-c26e-4b7d-9059-e0c320b4f2fe",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0873637483,
      "longitude": 28.3140169726
    }
  },
  "ca004ffa-b34b-4713-9a81-e69c9ff87a70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 7",
      "id": "ca004ffa-b34b-4713-9a81-e69c9ff87a70",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca004ffa-b34b-4713-9a81-e69c9ff87a70",
    "image": "perev_right",
    "point": {
      "latitude": 51.4869527019,
      "longitude": 29.948970141
    }
  },
  "ca1f39f9-f3d2-47be-b327-0aa64744e2f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "ca1f39f9-f3d2-47be-b327-0aa64744e2f3",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca1f39f9-f3d2-47be-b327-0aa64744e2f3",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1392887122,
      "longitude": 28.646563451
    }
  },
  "ca4521e2-d849-4e34-a760-e0b41226e0f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 147",
      "id": "ca4521e2-d849-4e34-a760-e0b41226e0f2",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca4521e2-d849-4e34-a760-e0b41226e0f2",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0336187397,
      "longitude": 29.3011569525
    }
  },
  "cb155c0c-6453-42cf-b1be-a72003472aba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 150",
      "id": "cb155c0c-6453-42cf-b1be-a72003472aba",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb155c0c-6453-42cf-b1be-a72003472aba",
    "image": "buyo_left",
    "point": {
      "latitude": 52.049350972,
      "longitude": 29.2776567472
    }
  },
  "cb1702b6-cdc1-4109-a835-b53ac0cf30f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 88а",
      "id": "cb1702b6-cdc1-4109-a835-b53ac0cf30f7",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb1702b6-cdc1-4109-a835-b53ac0cf30f7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.788445611,
      "longitude": 29.553112028
    }
  },
  "cb62d855-480e-43b6-a92e-a1feeebf2b0c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 252",
      "id": "cb62d855-480e-43b6-a92e-a1feeebf2b0c",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb62d855-480e-43b6-a92e-a1feeebf2b0c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.075501349,
      "longitude": 28.3549919597
    }
  },
  "cb849579-e7fc-4059-9a97-26ec297ba1f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "cb849579-e7fc-4059-9a97-26ec297ba1f5",
      "kilometrage": 374,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb849579-e7fc-4059-9a97-26ec297ba1f5",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1133914625,
      "longitude": 27.5995069522
    }
  },
  "cb9d05cb-3e8a-4bce-a7d3-4c2e0cd3a3e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 14",
      "id": "cb9d05cb-3e8a-4bce-a7d3-4c2e0cd3a3e2",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb9d05cb-3e8a-4bce-a7d3-4c2e0cd3a3e2",
    "image": "perev_right",
    "point": {
      "latitude": 51.501744437,
      "longitude": 29.903357778
    }
  },
  "cbb90439-5051-484d-960c-8cda961c6b23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 142",
      "id": "cbb90439-5051-484d-960c-8cda961c6b23",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbb90439-5051-484d-960c-8cda961c6b23",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0243959028,
      "longitude": 29.3223158601
    }
  },
  "cbc1ee8c-faaa-42e7-9379-034ef7aaec6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 85",
      "id": "cbc1ee8c-faaa-42e7-9379-034ef7aaec6c",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbc1ee8c-faaa-42e7-9379-034ef7aaec6c",
    "image": "kilometrage",
    "point": {
      "latitude": 51.557430139,
      "longitude": 29.840005391
    }
  },
  "cbc4574b-05e1-4bb9-bb24-a516e8eaa655": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 20",
      "id": "cbc4574b-05e1-4bb9-bb24-a516e8eaa655",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbc4574b-05e1-4bb9-bb24-a516e8eaa655",
    "image": "perev_right",
    "point": {
      "latitude": 51.5210116519,
      "longitude": 29.8856971426
    }
  },
  "cbf695b3-6365-415e-9070-5601ce2c0029": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 89",
      "id": "cbf695b3-6365-415e-9070-5601ce2c0029",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbf695b3-6365-415e-9070-5601ce2c0029",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7887856792,
      "longitude": 29.5393765003
    }
  },
  "cbf8b82b-5748-4f8b-875d-588b94358534": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 117",
      "id": "cbf8b82b-5748-4f8b-875d-588b94358534",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbf8b82b-5748-4f8b-875d-588b94358534",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9316035407,
      "longitude": 29.4930783122
    }
  },
  "cc051b4f-145d-4080-856a-82a323ad2c2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 238",
      "id": "cc051b4f-145d-4080-856a-82a323ad2c2b",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc051b4f-145d-4080-856a-82a323ad2c2b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1042612136,
      "longitude": 28.4771079151
    }
  },
  "ccdb5fad-5ae6-4d2a-83b9-bf459d0613bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "ccdb5fad-5ae6-4d2a-83b9-bf459d0613bc",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ccdb5fad-5ae6-4d2a-83b9-bf459d0613bc",
    "image": "name_of",
    "point": {
      "latitude": 52.1370846031,
      "longitude": 28.995040747
    }
  },
  "cd04ccc2-0655-4e39-96be-48f67d60018e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "cd04ccc2-0655-4e39-96be-48f67d60018e",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd04ccc2-0655-4e39-96be-48f67d60018e",
    "image": "perev_right",
    "point": {
      "latitude": 51.5483117403,
      "longitude": 29.8444975107
    }
  },
  "cd328079-61db-481a-8a1e-ca14b5af7f0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "cd328079-61db-481a-8a1e-ca14b5af7f0b",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd328079-61db-481a-8a1e-ca14b5af7f0b",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0797350502,
      "longitude": 27.8265455968
    }
  },
  "cd5e5b07-0c61-4d3f-a2c7-6e8cfd8349e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "cd5e5b07-0c61-4d3f-a2c7-6e8cfd8349e6",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd5e5b07-0c61-4d3f-a2c7-6e8cfd8349e6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0934628146,
      "longitude": 28.4378202465
    }
  },
  "cdb648f1-1938-4c11-95f4-b1626ddcb8ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 267",
      "id": "cdb648f1-1938-4c11-95f4-b1626ddcb8ac",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdb648f1-1938-4c11-95f4-b1626ddcb8ac",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1150500743,
      "longitude": 28.1891041849
    }
  },
  "cdc6e80f-7c96-45d0-82a5-18eb42e39f57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 362",
      "id": "cdc6e80f-7c96-45d0-82a5-18eb42e39f57",
      "kilometrage": 376,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdc6e80f-7c96-45d0-82a5-18eb42e39f57",
    "image": "perev_right",
    "point": {
      "latitude": 52.1104794707,
      "longitude": 27.5797138832
    }
  },
  "cdcedc11-3a76-4e8a-bf19-48d65dc8fe91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 290",
      "id": "cdcedc11-3a76-4e8a-bf19-48d65dc8fe91",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdcedc11-3a76-4e8a-bf19-48d65dc8fe91",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0755470185,
      "longitude": 28.3566230416
    }
  },
  "cdf261f5-8c78-4535-8a4b-618e3913237f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "cdf261f5-8c78-4535-8a4b-618e3913237f",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdf261f5-8c78-4535-8a4b-618e3913237f",
    "image": "main_way",
    "point": {
      "latitude": 52.0306246828,
      "longitude": 29.312499862
    }
  },
  "ce4744a9-af88-4e46-a174-39dcef6a9c8b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 235",
      "id": "ce4744a9-af88-4e46-a174-39dcef6a9c8b",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce4744a9-af88-4e46-a174-39dcef6a9c8b",
    "image": "perev_left",
    "point": {
      "latitude": 52.0995344825,
      "longitude": 28.4061870574
    }
  },
  "ce58a1db-f168-4d37-9984-2ed004c23d28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 104",
      "id": "ce58a1db-f168-4d37-9984-2ed004c23d28",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce58a1db-f168-4d37-9984-2ed004c23d28",
    "image": "perev_right",
    "point": {
      "latitude": 51.8688739681,
      "longitude": 29.4817510845
    }
  },
  "ce722c6e-a406-4367-a1c8-3896fe917c7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "ce722c6e-a406-4367-a1c8-3896fe917c7d",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce722c6e-a406-4367-a1c8-3896fe917c7d",
    "image": "raid_start_left",
    "point": {
      "latitude": 52.0731872418,
      "longitude": 29.2425440832
    }
  },
  "ced636dc-cdc5-4264-857a-e0b861db42e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "ced636dc-cdc5-4264-857a-e0b861db42e8",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ced636dc-cdc5-4264-857a-e0b861db42e8",
    "image": "buyo_left",
    "point": {
      "latitude": 51.4754763875,
      "longitude": 29.97252887
    }
  },
  "cf0100b7-c57d-4abf-8278-3461507ace5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 149",
      "id": "cf0100b7-c57d-4abf-8278-3461507ace5f",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf0100b7-c57d-4abf-8278-3461507ace5f",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0449205818,
      "longitude": 29.2855334622
    }
  },
  "cf5dbef4-8456-4314-a2bd-ff3b22cbe912": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 29",
      "id": "cf5dbef4-8456-4314-a2bd-ff3b22cbe912",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf5dbef4-8456-4314-a2bd-ff3b22cbe912",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5790478004,
      "longitude": 29.84324317
    }
  },
  "cf863738-d360-4ecb-b774-90b61a4ae316": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "cf863738-d360-4ecb-b774-90b61a4ae316",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf863738-d360-4ecb-b774-90b61a4ae316",
    "image": "main_way",
    "point": {
      "latitude": 52.1157361345,
      "longitude": 28.1881004945
    }
  },
  "cf96b72a-d5e3-42d4-ba78-6d8f44837303": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "cf96b72a-d5e3-42d4-ba78-6d8f44837303",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf96b72a-d5e3-42d4-ba78-6d8f44837303",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7678525252,
      "longitude": 29.6703422529
    }
  },
  "cfce89be-f49e-450e-a615-2099c760b1db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 321",
      "id": "cfce89be-f49e-450e-a615-2099c760b1db",
      "kilometrage": 399,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cfce89be-f49e-450e-a615-2099c760b1db",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1357007496,
      "longitude": 27.422863767
    }
  },
  "d0405294-f19c-4fd3-af02-6d4c6f413b4f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 163",
      "id": "d0405294-f19c-4fd3-af02-6d4c6f413b4f",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0405294-f19c-4fd3-af02-6d4c6f413b4f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0739890065,
      "longitude": 29.2219076194
    }
  },
  "d05de23d-96fd-4707-8f1c-4b6471c7483c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "d05de23d-96fd-4707-8f1c-4b6471c7483c",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d05de23d-96fd-4707-8f1c-4b6471c7483c",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0956179848,
      "longitude": 28.3087534353
    }
  },
  "d07f27b6-b336-4515-b997-79e51ca99139": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 322",
      "id": "d07f27b6-b336-4515-b997-79e51ca99139",
      "kilometrage": 402,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d07f27b6-b336-4515-b997-79e51ca99139",
    "image": "buyo_right",
    "point": {
      "latitude": 52.140159788,
      "longitude": 27.4053508571
    }
  },
  "d0950dd2-f497-4997-ac35-82e6245ada63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 345",
      "id": "d0950dd2-f497-4997-ac35-82e6245ada63",
      "kilometrage": 365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0950dd2-f497-4997-ac35-82e6245ada63",
    "image": "perev_right",
    "point": {
      "latitude": 52.1060789927,
      "longitude": 27.6562330448
    }
  },
  "d0bbee13-275a-48bd-a16b-6059b40b2751": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 302",
      "id": "d0bbee13-275a-48bd-a16b-6059b40b2751",
      "kilometrage": 335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0bbee13-275a-48bd-a16b-6059b40b2751",
    "image": "perev_right",
    "point": {
      "latitude": 52.065262754,
      "longitude": 27.9706315803
    }
  },
  "d1a06e89-c8c4-42fe-be1d-83ee6dc588bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 250",
      "id": "d1a06e89-c8c4-42fe-be1d-83ee6dc588bc",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1a06e89-c8c4-42fe-be1d-83ee6dc588bc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1181749183,
      "longitude": 28.7102169385
    }
  },
  "d1a634ee-cace-4343-b17a-bc0335f1931b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "d1a634ee-cace-4343-b17a-bc0335f1931b",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1a634ee-cace-4343-b17a-bc0335f1931b",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6111730214,
      "longitude": 29.8040699502
    }
  },
  "d202629a-f579-40bd-b679-4ffc1c69e4c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 250",
      "id": "d202629a-f579-40bd-b679-4ffc1c69e4c1",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d202629a-f579-40bd-b679-4ffc1c69e4c1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0728462688,
      "longitude": 28.3687930547
    }
  },
  "d26b2e12-3639-4498-bfea-435fe20f5760": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25",
      "id": "d26b2e12-3639-4498-bfea-435fe20f5760",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d26b2e12-3639-4498-bfea-435fe20f5760",
    "image": "perev_left",
    "point": {
      "latitude": 51.5457599744,
      "longitude": 29.8525520819
    }
  },
  "d2e1600f-d158-4783-b95d-172954b86202": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 387",
      "id": "d2e1600f-d158-4783-b95d-172954b86202",
      "kilometrage": 393,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2e1600f-d158-4783-b95d-172954b86202",
    "image": "perev_left",
    "point": {
      "latitude": 52.1270242791,
      "longitude": 27.4772820677
    }
  },
  "d3c7399b-7bbe-4020-856b-5d3821a1ed60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 326",
      "id": "d3c7399b-7bbe-4020-856b-5d3821a1ed60",
      "kilometrage": 353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3c7399b-7bbe-4020-856b-5d3821a1ed60",
    "image": "perev_left",
    "point": {
      "latitude": 52.0890190877,
      "longitude": 27.7738699974
    }
  },
  "d45689b7-f66f-4b89-8bf8-9cd9c25319f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 299",
      "id": "d45689b7-f66f-4b89-8bf8-9cd9c25319f8",
      "kilometrage": 333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d45689b7-f66f-4b89-8bf8-9cd9c25319f8",
    "image": "perev_left",
    "point": {
      "latitude": 52.0762591228,
      "longitude": 27.9763787429
    }
  },
  "d4a72290-2378-4a7a-b319-e0db0aeb33b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "d4a72290-2378-4a7a-b319-e0db0aeb33b9",
      "kilometrage": 322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4a72290-2378-4a7a-b319-e0db0aeb33b9",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0769502095,
      "longitude": 28.0678525576
    }
  },
  "d4b54b17-106f-4ab3-ad6d-104b4529c3c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 411",
      "id": "d4b54b17-106f-4ab3-ad6d-104b4529c3c5",
      "kilometrage": 405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4b54b17-106f-4ab3-ad6d-104b4529c3c5",
    "image": "perev_left",
    "point": {
      "latitude": 52.1464099856,
      "longitude": 27.3782710789
    }
  },
  "d4beef0f-c754-4cbf-bf39-ffcb110ad278": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 227",
      "id": "d4beef0f-c754-4cbf-bf39-ffcb110ad278",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4beef0f-c754-4cbf-bf39-ffcb110ad278",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1352320511,
      "longitude": 28.6083941879
    }
  },
  "d4c05f01-6b81-463f-9506-d34b82677172": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 27",
      "id": "d4c05f01-6b81-463f-9506-d34b82677172",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4c05f01-6b81-463f-9506-d34b82677172",
    "image": "perev_left",
    "point": {
      "latitude": 51.5560414809,
      "longitude": 29.8460915897
    }
  },
  "d508aead-fa81-4113-bf29-e02d70c5718f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 155",
      "id": "d508aead-fa81-4113-bf29-e02d70c5718f",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d508aead-fa81-4113-bf29-e02d70c5718f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0538585997,
      "longitude": 29.2576233378
    }
  },
  "d51d1185-8065-41dc-864e-ec4f47e260f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "d51d1185-8065-41dc-864e-ec4f47e260f1",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d51d1185-8065-41dc-864e-ec4f47e260f1",
    "image": "buyo_left",
    "point": {
      "latitude": 51.955082909,
      "longitude": 29.4429672055
    }
  },
  "d51f7d1f-ca80-47ba-8002-792615501af4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 5",
      "id": "d51f7d1f-ca80-47ba-8002-792615501af4",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d51f7d1f-ca80-47ba-8002-792615501af4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1965065289,
      "longitude": 27.3864017425
    }
  },
  "d523e8a8-72e8-4906-a4a6-14f72d459852": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 5",
      "id": "d523e8a8-72e8-4906-a4a6-14f72d459852",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d523e8a8-72e8-4906-a4a6-14f72d459852",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.4702776036,
      "longitude": 29.9553960972
    }
  },
  "d54e18b5-1d89-4174-8a18-085b22283e2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 154",
      "id": "d54e18b5-1d89-4174-8a18-085b22283e2b",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d54e18b5-1d89-4174-8a18-085b22283e2b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0544269536,
      "longitude": 29.257741608
    }
  },
  "d5a75011-e909-4716-9d06-c3f81f3f4e17": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 174",
      "id": "d5a75011-e909-4716-9d06-c3f81f3f4e17",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5a75011-e909-4716-9d06-c3f81f3f4e17",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1000959939,
      "longitude": 29.1594155424
    }
  },
  "d6447021-fcd7-4621-bab7-6dbdf0a34a10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "d6447021-fcd7-4621-bab7-6dbdf0a34a10",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6447021-fcd7-4621-bab7-6dbdf0a34a10",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0976866081,
      "longitude": 28.3078203319
    }
  },
  "d64b7d81-083c-49a1-b0d3-de337ae6a35c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 371",
      "id": "d64b7d81-083c-49a1-b0d3-de337ae6a35c",
      "kilometrage": 382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d64b7d81-083c-49a1-b0d3-de337ae6a35c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1236592193,
      "longitude": 27.546709402
    }
  },
  "d6553b4a-2e91-47b1-8ad6-d487a88665ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 369",
      "id": "d6553b4a-2e91-47b1-8ad6-d487a88665ff",
      "kilometrage": 381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6553b4a-2e91-47b1-8ad6-d487a88665ff",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1305082119,
      "longitude": 27.5601977023
    }
  },
  "d689296c-3c80-4c20-b364-0b6ca8db9263": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 293",
      "id": "d689296c-3c80-4c20-b364-0b6ca8db9263",
      "kilometrage": 329,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d689296c-3c80-4c20-b364-0b6ca8db9263",
    "image": "perev_right",
    "point": {
      "latitude": 52.0620778755,
      "longitude": 28.0091359172
    }
  },
  "d6bceffa-2ff4-4190-ab0c-05352faf3111": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 90",
      "id": "d6bceffa-2ff4-4190-ab0c-05352faf3111",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6bceffa-2ff4-4190-ab0c-05352faf3111",
    "image": "perev_left",
    "point": {
      "latitude": 51.789260314,
      "longitude": 29.5592697527
    }
  },
  "d6c3e2a6-9b5a-45dd-83a3-756461f8354b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 389",
      "id": "d6c3e2a6-9b5a-45dd-83a3-756461f8354b",
      "kilometrage": 394,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6c3e2a6-9b5a-45dd-83a3-756461f8354b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1256875947,
      "longitude": 27.463515362
    }
  },
  "d71bb6f3-0ecb-44c8-8eb4-f5235ce71978": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 110",
      "id": "d71bb6f3-0ecb-44c8-8eb4-f5235ce71978",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d71bb6f3-0ecb-44c8-8eb4-f5235ce71978",
    "image": "kilometrage",
    "point": {
      "latitude": 51.6682553281,
      "longitude": 29.707079592
    }
  },
  "d729ed95-5bd0-4212-8ce1-2bffadb55f80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "d729ed95-5bd0-4212-8ce1-2bffadb55f80",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d729ed95-5bd0-4212-8ce1-2bffadb55f80",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0797877951,
      "longitude": 27.8258055614
    }
  },
  "d730cfbd-f892-4866-ad05-e90f419334df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "d730cfbd-f892-4866-ad05-e90f419334df",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d730cfbd-f892-4866-ad05-e90f419334df",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1189395094,
      "longitude": 29.0972111083
    }
  },
  "d74ea86b-12f4-4492-8fb8-d0ac1190df45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "d74ea86b-12f4-4492-8fb8-d0ac1190df45",
      "kilometrage": 309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d74ea86b-12f4-4492-8fb8-d0ac1190df45",
    "image": "buyo_right",
    "point": {
      "latitude": 52.115860387,
      "longitude": 28.1909172373
    }
  },
  "d767f144-477f-47e1-bf7a-ffa1af94ac44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 159",
      "id": "d767f144-477f-47e1-bf7a-ffa1af94ac44",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d767f144-477f-47e1-bf7a-ffa1af94ac44",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.0699847524,
      "longitude": 29.247457635
    }
  },
  "d8104e06-6b99-42dc-a820-4cdc174586b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "d8104e06-6b99-42dc-a820-4cdc174586b1",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8104e06-6b99-42dc-a820-4cdc174586b1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1081290904,
      "longitude": 28.2756053297
    }
  },
  "d85baafd-c3f3-40fb-8fb1-69815fa9e390": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "d85baafd-c3f3-40fb-8fb1-69815fa9e390",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d85baafd-c3f3-40fb-8fb1-69815fa9e390",
    "image": "perev_left",
    "point": {
      "latitude": 51.771206757,
      "longitude": 29.643103922
    }
  },
  "d86346cc-cd3a-4b97-b498-454a310f750e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 169",
      "id": "d86346cc-cd3a-4b97-b498-454a310f750e",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d86346cc-cd3a-4b97-b498-454a310f750e",
    "image": "perev_right",
    "point": {
      "latitude": 52.140168344,
      "longitude": 28.8618315335
    }
  },
  "d89cc6a0-dfa6-4c45-8fbc-3db858b54bc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 351",
      "id": "d89cc6a0-dfa6-4c45-8fbc-3db858b54bc4",
      "kilometrage": 369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d89cc6a0-dfa6-4c45-8fbc-3db858b54bc4",
    "image": "perev_left",
    "point": {
      "latitude": 52.099169372,
      "longitude": 27.6374925626
    }
  },
  "d90cebb4-acc6-483d-95f0-dfe451c6ef04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 299",
      "id": "d90cebb4-acc6-483d-95f0-dfe451c6ef04",
      "kilometrage": 356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d90cebb4-acc6-483d-95f0-dfe451c6ef04",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0762371615,
      "longitude": 27.7540035115
    }
  },
  "d914517c-5b2a-48e6-9eea-1748f7d59d37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "d914517c-5b2a-48e6-9eea-1748f7d59d37",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d914517c-5b2a-48e6-9eea-1748f7d59d37",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7327614664,
      "longitude": 29.6847837837
    }
  },
  "d91477af-38d5-4549-a527-1a5d36da5a12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 354",
      "id": "d91477af-38d5-4549-a527-1a5d36da5a12",
      "kilometrage": 371,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d91477af-38d5-4549-a527-1a5d36da5a12",
    "image": "perev_left",
    "point": {
      "latitude": 52.0982274903,
      "longitude": 27.61217484
    }
  },
  "d92c8792-3399-493a-8e61-037ca6b92608": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 305",
      "id": "d92c8792-3399-493a-8e61-037ca6b92608",
      "kilometrage": 337,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d92c8792-3399-493a-8e61-037ca6b92608",
    "image": "perev_left",
    "point": {
      "latitude": 52.0721015443,
      "longitude": 27.9499009614
    }
  },
  "d92cd1e9-43d5-45b5-91a5-5fc778e045ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "d92cd1e9-43d5-45b5-91a5-5fc778e045ca",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d92cd1e9-43d5-45b5-91a5-5fc778e045ca",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0694138004,
      "longitude": 28.3502342827
    }
  },
  "d92f73b6-01e9-45f7-95a3-a96cb580f3c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 104",
      "id": "d92f73b6-01e9-45f7-95a3-a96cb580f3c8",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d92f73b6-01e9-45f7-95a3-a96cb580f3c8",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8486285947,
      "longitude": 29.5035343371
    }
  },
  "d930096c-e9e4-4bac-b24d-a38727bc71df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 246",
      "id": "d930096c-e9e4-4bac-b24d-a38727bc71df",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d930096c-e9e4-4bac-b24d-a38727bc71df",
    "image": "perev_right",
    "point": {
      "latitude": 52.0804306076,
      "longitude": 28.3229545057
    }
  },
  "d93c45af-1f67-4b2c-bc7c-02d2de39e1ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "d93c45af-1f67-4b2c-bc7c-02d2de39e1ea",
      "kilometrage": 405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d93c45af-1f67-4b2c-bc7c-02d2de39e1ea",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1466358563,
      "longitude": 27.3797467094
    }
  },
  "d961dd5a-0b0f-46db-926d-01aef591c99c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "d961dd5a-0b0f-46db-926d-01aef591c99c",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d961dd5a-0b0f-46db-926d-01aef591c99c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1068756497,
      "longitude": 28.5055134687
    }
  },
  "d964d5a1-27a9-48cb-b088-6d30998e2dd4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 243",
      "id": "d964d5a1-27a9-48cb-b088-6d30998e2dd4",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d964d5a1-27a9-48cb-b088-6d30998e2dd4",
    "image": "perev_right",
    "point": {
      "latitude": 52.0694488068,
      "longitude": 28.3409322985
    }
  },
  "d98a4de4-565e-4435-b38a-3f943c37abe3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d98a4de4-565e-4435-b38a-3f943c37abe3",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d98a4de4-565e-4435-b38a-3f943c37abe3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1038389672,
      "longitude": 28.5160471768
    }
  },
  "d99e34c5-0138-437e-93bd-b94ed76c64ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 70",
      "id": "d99e34c5-0138-437e-93bd-b94ed76c64ed",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d99e34c5-0138-437e-93bd-b94ed76c64ed",
    "image": "perev_right",
    "point": {
      "latitude": 51.7450792389,
      "longitude": 29.6955212623
    }
  },
  "d99ff65d-d3a9-457c-b884-31f64f97b8bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 376",
      "id": "d99ff65d-d3a9-457c-b884-31f64f97b8bd",
      "kilometrage": 387,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d99ff65d-d3a9-457c-b884-31f64f97b8bd",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1358725541,
      "longitude": 27.5141403055
    }
  },
  "da264b50-0063-4cc4-b926-d8402345f1f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 349",
      "id": "da264b50-0063-4cc4-b926-d8402345f1f3",
      "kilometrage": 368,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da264b50-0063-4cc4-b926-d8402345f1f3",
    "image": "perev_right",
    "point": {
      "latitude": 52.1012553371,
      "longitude": 27.6516387682
    }
  },
  "da3d39c2-8c73-4259-98f5-fe7faf43e540": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 46а",
      "id": "da3d39c2-8c73-4259-98f5-fe7faf43e540",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da3d39c2-8c73-4259-98f5-fe7faf43e540",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.6454858065,
      "longitude": 29.7815813761
    }
  },
  "da42cbdd-efb8-4564-a049-c54909d07083": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "da42cbdd-efb8-4564-a049-c54909d07083",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da42cbdd-efb8-4564-a049-c54909d07083",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0540268727,
      "longitude": 29.2601268914
    }
  },
  "da49d0fe-532b-4b4f-b6c5-91533f06157a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "da49d0fe-532b-4b4f-b6c5-91533f06157a",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da49d0fe-532b-4b4f-b6c5-91533f06157a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0726575293,
      "longitude": 29.2259471306
    }
  },
  "db4bf2fd-5a50-4b46-84dc-a327ed10b3cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "db4bf2fd-5a50-4b46-84dc-a327ed10b3cf",
      "kilometrage": 371,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db4bf2fd-5a50-4b46-84dc-a327ed10b3cf",
    "image": "buyo_right",
    "point": {
      "latitude": 52.097212801,
      "longitude": 27.6085310138
    }
  },
  "dbe8a8af-cf44-442b-99a2-7f2035c7ecbc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 184 А",
      "id": "dbe8a8af-cf44-442b-99a2-7f2035c7ecbc",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbe8a8af-cf44-442b-99a2-7f2035c7ecbc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1153497509,
      "longitude": 29.0486654613
    }
  },
  "dc26a8e2-2dd3-4922-9deb-1f8a87cc6e44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 277",
      "id": "dc26a8e2-2dd3-4922-9deb-1f8a87cc6e44",
      "kilometrage": 318,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc26a8e2-2dd3-4922-9deb-1f8a87cc6e44",
    "image": "perev_right",
    "point": {
      "latitude": 52.0713580881,
      "longitude": 28.115673956
    }
  },
  "dc77fee7-708c-483f-bea1-1146eab1fb0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 51",
      "id": "dc77fee7-708c-483f-bea1-1146eab1fb0a",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc77fee7-708c-483f-bea1-1146eab1fb0a",
    "image": "perev_right",
    "point": {
      "latitude": 51.6516638781,
      "longitude": 29.7224826568
    }
  },
  "dccf8944-dff0-4f83-adf1-000f8066f637": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 214",
      "id": "dccf8944-dff0-4f83-adf1-000f8066f637",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dccf8944-dff0-4f83-adf1-000f8066f637",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1178617304,
      "longitude": 28.7420186764
    }
  },
  "ddbc6b4d-cffb-4062-9332-0fa66147087d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 295",
      "id": "ddbc6b4d-cffb-4062-9332-0fa66147087d",
      "kilometrage": 331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddbc6b4d-cffb-4062-9332-0fa66147087d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0712557469,
      "longitude": 28.0013791415
    }
  },
  "de6274a7-1355-41bc-8e80-e62641f86cab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 178",
      "id": "de6274a7-1355-41bc-8e80-e62641f86cab",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de6274a7-1355-41bc-8e80-e62641f86cab",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1195764979,
      "longitude": 29.1422883391
    }
  },
  "def75d47-60d3-4162-a03f-e5db914632b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "def75d47-60d3-4162-a03f-e5db914632b3",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "def75d47-60d3-4162-a03f-e5db914632b3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0791795381,
      "longitude": 27.8253968208
    }
  },
  "df77c21b-bf2b-46e9-9b97-0a9c1de7e35c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 273",
      "id": "df77c21b-bf2b-46e9-9b97-0a9c1de7e35c",
      "kilometrage": 316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df77c21b-bf2b-46e9-9b97-0a9c1de7e35c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0831942299,
      "longitude": 28.1290677253
    }
  },
  "dfb7a3c3-064b-4cd1-b816-26786a286cac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "dfb7a3c3-064b-4cd1-b816-26786a286cac",
      "kilometrage": 403,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfb7a3c3-064b-4cd1-b816-26786a286cac",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1423298094,
      "longitude": 27.3936658144
    }
  },
  "dfde502c-cd5c-4946-abf6-da4b14bf9e4f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "dfde502c-cd5c-4946-abf6-da4b14bf9e4f",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfde502c-cd5c-4946-abf6-da4b14bf9e4f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1334798759,
      "longitude": 28.8237575963
    }
  },
  "e0015ff1-f577-429d-9d26-e7356bf9c925": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e0015ff1-f577-429d-9d26-e7356bf9c925",
      "kilometrage": 348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0015ff1-f577-429d-9d26-e7356bf9c925",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0801816928,
      "longitude": 27.8307715435
    }
  },
  "e007c672-ee51-45d0-a485-a4746f5dab08": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "e007c672-ee51-45d0-a485-a4746f5dab08",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e007c672-ee51-45d0-a485-a4746f5dab08",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0924099781,
      "longitude": 29.1910986129
    }
  },
  "e01ea676-2008-474f-85ac-41801e40680e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 30",
      "id": "e01ea676-2008-474f-85ac-41801e40680e",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e01ea676-2008-474f-85ac-41801e40680e",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5881611648,
      "longitude": 29.8506662259
    }
  },
  "e04aa764-c243-404d-b35d-1f12d38c462e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "e04aa764-c243-404d-b35d-1f12d38c462e",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e04aa764-c243-404d-b35d-1f12d38c462e",
    "image": "main_way",
    "point": {
      "latitude": 52.1172201759,
      "longitude": 28.5013689823
    }
  },
  "e07414f6-0792-454f-913d-64205ba28e4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 230",
      "id": "e07414f6-0792-454f-913d-64205ba28e4b",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e07414f6-0792-454f-913d-64205ba28e4b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1033890273,
      "longitude": 28.4442348355
    }
  },
  "e139db27-1a26-42a1-9db1-c4f382218e81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 232",
      "id": "e139db27-1a26-42a1-9db1-c4f382218e81",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e139db27-1a26-42a1-9db1-c4f382218e81",
    "image": "perev_right",
    "point": {
      "latitude": 52.0927681394,
      "longitude": 28.431053052
    }
  },
  "e1506a62-2e37-4b10-8476-e25b9e25d00b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый задний  ",
      "id": "e1506a62-2e37-4b10-8476-e25b9e25d00b",
      "kilometrage": 407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1506a62-2e37-4b10-8476-e25b9e25d00b",
    "image": "raid_end_right",
    "point": {
      "latitude": 52.1399378887,
      "longitude": 27.3625889081
    }
  },
  "e158b208-1866-4649-96bc-8f5cefdc4528": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 345",
      "id": "e158b208-1866-4649-96bc-8f5cefdc4528",
      "kilometrage": 345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e158b208-1866-4649-96bc-8f5cefdc4528",
    "image": "kilometrage",
    "point": {
      "latitude": 52.070660273,
      "longitude": 27.8723949116
    }
  },
  "e161e045-7239-4b45-8ac5-9c231e84dafe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 113",
      "id": "e161e045-7239-4b45-8ac5-9c231e84dafe",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e161e045-7239-4b45-8ac5-9c231e84dafe",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9091353427,
      "longitude": 29.4916455157
    }
  },
  "e198c96f-8c66-40d9-8093-af844b136005": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e198c96f-8c66-40d9-8093-af844b136005",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e198c96f-8c66-40d9-8093-af844b136005",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0253045456,
      "longitude": 29.3232277579
    }
  },
  "e1a59ead-7e42-409e-a508-8c51ad2bfbe5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "e1a59ead-7e42-409e-a508-8c51ad2bfbe5",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1a59ead-7e42-409e-a508-8c51ad2bfbe5",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7659981153,
      "longitude": 29.6496459333
    }
  },
  "e1cb66d0-db8c-4526-982a-4220e7571167": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 80",
      "id": "e1cb66d0-db8c-4526-982a-4220e7571167",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1cb66d0-db8c-4526-982a-4220e7571167",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.7552672891,
      "longitude": 29.608985253
    }
  },
  "e23d2931-3785-4009-862e-e888fc8037ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141А",
      "id": "e23d2931-3785-4009-862e-e888fc8037ab",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e23d2931-3785-4009-862e-e888fc8037ab",
    "image": "perev_left",
    "point": {
      "latitude": 52.1215080162,
      "longitude": 29.0669639522
    }
  },
  "e34e2215-11ac-409d-8e5a-6bcd3008baf1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 197",
      "id": "e34e2215-11ac-409d-8e5a-6bcd3008baf1",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e34e2215-11ac-409d-8e5a-6bcd3008baf1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1340401261,
      "longitude": 28.6968844368
    }
  },
  "e3807c15-30da-4840-b4f0-cf351123cf36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "e3807c15-30da-4840-b4f0-cf351123cf36",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3807c15-30da-4840-b4f0-cf351123cf36",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6384724659,
      "longitude": 29.7577527604
    }
  },
  "e3cb1749-475e-42c2-a4b6-89050ac2a5fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 165",
      "id": "e3cb1749-475e-42c2-a4b6-89050ac2a5fb",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3cb1749-475e-42c2-a4b6-89050ac2a5fb",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9316784519,
      "longitude": 29.4903091161
    }
  },
  "e3f6e3d1-7fdb-4ee9-b5e9-89e9187015ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "e3f6e3d1-7fdb-4ee9-b5e9-89e9187015ba",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3f6e3d1-7fdb-4ee9-b5e9-89e9187015ba",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1384271313,
      "longitude": 28.6498476597
    }
  },
  "e416c7eb-97fe-4599-bc32-7bcf51b97173": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 137",
      "id": "e416c7eb-97fe-4599-bc32-7bcf51b97173",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e416c7eb-97fe-4599-bc32-7bcf51b97173",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0001845435,
      "longitude": 29.3474807037
    }
  },
  "e4b0ff9f-f444-42b7-a1ca-e9fd1bbcaab3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "e4b0ff9f-f444-42b7-a1ca-e9fd1bbcaab3",
      "kilometrage": 327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4b0ff9f-f444-42b7-a1ca-e9fd1bbcaab3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0749225465,
      "longitude": 28.0436028948
    }
  },
  "e4ea3ce0-4dea-4e4f-9af6-b1319f51c809": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 180",
      "id": "e4ea3ce0-4dea-4e4f-9af6-b1319f51c809",
      "kilometrage": 203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4ea3ce0-4dea-4e4f-9af6-b1319f51c809",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1130451906,
      "longitude": 29.1108516143
    }
  },
  "e51f294d-0933-4382-b51e-2dd3543b844d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 384",
      "id": "e51f294d-0933-4382-b51e-2dd3543b844d",
      "kilometrage": 391,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e51f294d-0933-4382-b51e-2dd3543b844d",
    "image": "perev_right",
    "point": {
      "latitude": 52.119563048,
      "longitude": 27.4840093333
    }
  },
  "e54f2720-1e5a-4588-ae4d-4282a53df4fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 80",
      "id": "e54f2720-1e5a-4588-ae4d-4282a53df4fb",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e54f2720-1e5a-4588-ae4d-4282a53df4fb",
    "image": "kilometrage",
    "point": {
      "latitude": 51.5281644758,
      "longitude": 29.8801874338
    }
  },
  "e55657a7-285f-44c1-90ab-06ac0119e190": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 150",
      "id": "e55657a7-285f-44c1-90ab-06ac0119e190",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e55657a7-285f-44c1-90ab-06ac0119e190",
    "image": "perev_left",
    "point": {
      "latitude": 52.1270236627,
      "longitude": 28.9789330884
    }
  },
  "e57b255f-7ae3-4497-9ee6-e7164d538b21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 403",
      "id": "e57b255f-7ae3-4497-9ee6-e7164d538b21",
      "kilometrage": 401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e57b255f-7ae3-4497-9ee6-e7164d538b21",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1326139592,
      "longitude": 27.4083823303
    }
  },
  "e60a6a57-f0ac-4f52-819e-249cc70e0532": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 405",
      "id": "e60a6a57-f0ac-4f52-819e-249cc70e0532",
      "kilometrage": 405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e60a6a57-f0ac-4f52-819e-249cc70e0532",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1469572462,
      "longitude": 27.3853321061
    }
  },
  "e60b0aa6-c9d6-4225-aceb-3345112e017d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "e60b0aa6-c9d6-4225-aceb-3345112e017d",
      "kilometrage": 393,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e60b0aa6-c9d6-4225-aceb-3345112e017d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1282032267,
      "longitude": 27.4738437135
    }
  },
  "e6af199f-c34a-4da0-9fd1-fc16eda00f9f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e6af199f-c34a-4da0-9fd1-fc16eda00f9f",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6af199f-c34a-4da0-9fd1-fc16eda00f9f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0695299511,
      "longitude": 29.230000278
    }
  },
  "e7216241-fdff-49db-8250-bae7b4dd816c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 276",
      "id": "e7216241-fdff-49db-8250-bae7b4dd816c",
      "kilometrage": 319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7216241-fdff-49db-8250-bae7b4dd816c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.075322833,
      "longitude": 28.097749667
    }
  },
  "e747e757-562e-4d98-9ffc-4c0607942b0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "e747e757-562e-4d98-9ffc-4c0607942b0b",
      "kilometrage": 386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e747e757-562e-4d98-9ffc-4c0607942b0b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1386938456,
      "longitude": 27.5199064549
    }
  },
  "e75cf1d8-67b9-41e5-8670-9717b603bcde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1",
      "id": "e75cf1d8-67b9-41e5-8670-9717b603bcde",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e75cf1d8-67b9-41e5-8670-9717b603bcde",
    "image": "buyo_right",
    "point": {
      "latitude": 51.4866852451,
      "longitude": 29.9756656945
    }
  },
  "e7a40026-02d8-4290-a545-dc4ae5f50af8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 178а",
      "id": "e7a40026-02d8-4290-a545-dc4ae5f50af8",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7a40026-02d8-4290-a545-dc4ae5f50af8",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1194016103,
      "longitude": 29.1355858728
    }
  },
  "e7ccd676-a87d-405e-b472-f00c376914a6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "e7ccd676-a87d-405e-b472-f00c376914a6",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7ccd676-a87d-405e-b472-f00c376914a6",
    "image": "perev_left",
    "point": {
      "latitude": 51.8329503345,
      "longitude": 29.5168567753
    }
  },
  "e848532f-1bf8-41bd-a358-1ce1dd305fe1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e848532f-1bf8-41bd-a358-1ce1dd305fe1",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e848532f-1bf8-41bd-a358-1ce1dd305fe1",
    "image": "name_of",
    "point": {
      "latitude": 52.1010296578,
      "longitude": 28.469347998
    }
  },
  "e851bbca-a924-4ab3-8c92-c5a0df8f78ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 385",
      "id": "e851bbca-a924-4ab3-8c92-c5a0df8f78ea",
      "kilometrage": 385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e851bbca-a924-4ab3-8c92-c5a0df8f78ea",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1307630356,
      "longitude": 27.5331145366
    }
  },
  "e8d6b283-f2eb-4b0e-b712-6b4235590191": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 187",
      "id": "e8d6b283-f2eb-4b0e-b712-6b4235590191",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8d6b283-f2eb-4b0e-b712-6b4235590191",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1193997503,
      "longitude": 28.7518443125
    }
  },
  "e9283d3a-598e-4c0f-b6b8-c37c13ec4a53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 220",
      "id": "e9283d3a-598e-4c0f-b6b8-c37c13ec4a53",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9283d3a-598e-4c0f-b6b8-c37c13ec4a53",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1484982244,
      "longitude": 28.6814637494
    }
  },
  "e9295602-d2a1-4459-bd88-e73f32867621": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 51",
      "id": "e9295602-d2a1-4459-bd88-e73f32867621",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9295602-d2a1-4459-bd88-e73f32867621",
    "image": "buyo_left",
    "point": {
      "latitude": 51.6562360981,
      "longitude": 29.7213409553
    }
  },
  "e995042e-45eb-4565-9ed4-1ae5d9b9fa58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "e995042e-45eb-4565-9ed4-1ae5d9b9fa58",
      "kilometrage": 313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e995042e-45eb-4565-9ed4-1ae5d9b9fa58",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0854226574,
      "longitude": 28.1572210754
    }
  },
  "e99c59bb-cc53-4c80-96b3-cd58bb24b8b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e99c59bb-cc53-4c80-96b3-cd58bb24b8b2",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e99c59bb-cc53-4c80-96b3-cd58bb24b8b2",
    "image": "name_of",
    "point": {
      "latitude": 52.1463613771,
      "longitude": 28.8641875786
    }
  },
  "ea0e7c01-1fe4-4f1b-869c-3774949a4535": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 225",
      "id": "ea0e7c01-1fe4-4f1b-869c-3774949a4535",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea0e7c01-1fe4-4f1b-869c-3774949a4535",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1334301867,
      "longitude": 28.9017557782
    }
  },
  "ea3f6643-5a02-4e89-906f-39efc58f4d52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 373",
      "id": "ea3f6643-5a02-4e89-906f-39efc58f4d52",
      "kilometrage": 384,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea3f6643-5a02-4e89-906f-39efc58f4d52",
    "image": "perev_right",
    "point": {
      "latitude": 52.1227365599,
      "longitude": 27.5273449167
    }
  },
  "ea6028c1-d7a3-476c-9756-6c14184f412e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 202",
      "id": "ea6028c1-d7a3-476c-9756-6c14184f412e",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea6028c1-d7a3-476c-9756-6c14184f412e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1469486108,
      "longitude": 28.8713981245
    }
  },
  "eb027959-564c-4f5d-b6c5-68559191e522": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 217",
      "id": "eb027959-564c-4f5d-b6c5-68559191e522",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb027959-564c-4f5d-b6c5-68559191e522",
    "image": "perev_right",
    "point": {
      "latitude": 52.1027396994,
      "longitude": 28.5135944397
    }
  },
  "eb0ffda1-c59a-44bb-b5f8-06b30cee08f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "eb0ffda1-c59a-44bb-b5f8-06b30cee08f2",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb0ffda1-c59a-44bb-b5f8-06b30cee08f2",
    "image": "buyo_right",
    "point": {
      "latitude": 51.4859484463,
      "longitude": 29.9746614697
    }
  },
  "eb703346-8d46-4ad0-a470-7042814c0419": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 350",
      "id": "eb703346-8d46-4ad0-a470-7042814c0419",
      "kilometrage": 369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb703346-8d46-4ad0-a470-7042814c0419",
    "image": "perev_right",
    "point": {
      "latitude": 52.0980027174,
      "longitude": 27.6457443209
    }
  },
  "ebe79201-411d-4250-bdf7-16e12b7be094": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 17",
      "id": "ebe79201-411d-4250-bdf7-16e12b7be094",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebe79201-411d-4250-bdf7-16e12b7be094",
    "image": "perev_left",
    "point": {
      "latitude": 51.515378694,
      "longitude": 29.9089974027
    }
  },
  "ece6c5ee-9cc1-461c-9fa9-6444e71e36ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 221а",
      "id": "ece6c5ee-9cc1-461c-9fa9-6444e71e36ee",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ece6c5ee-9cc1-461c-9fa9-6444e71e36ee",
    "image": "buyo_right",
    "point": {
      "latitude": 52.134635333,
      "longitude": 28.677776083
    }
  },
  "ed160411-c3ec-487c-9e9c-316365d4bf02": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 276",
      "id": "ed160411-c3ec-487c-9e9c-316365d4bf02",
      "kilometrage": 317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed160411-c3ec-487c-9e9c-316365d4bf02",
    "image": "perev_right",
    "point": {
      "latitude": 52.0739701403,
      "longitude": 28.1232277808
    }
  },
  "ed4fbe52-a09b-4145-9c7b-ecd4085b5be7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 253",
      "id": "ed4fbe52-a09b-4145-9c7b-ecd4085b5be7",
      "kilometrage": 302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed4fbe52-a09b-4145-9c7b-ecd4085b5be7",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0964041983,
      "longitude": 28.2531334181
    }
  },
  "ed679bb0-5801-4ca8-82bf-b999cbac481a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 197",
      "id": "ed679bb0-5801-4ca8-82bf-b999cbac481a",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed679bb0-5801-4ca8-82bf-b999cbac481a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.123588059,
      "longitude": 28.9137785716
    }
  },
  "ee56a60e-2fe5-4adf-9ad3-ae8341c2abeb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 133",
      "id": "ee56a60e-2fe5-4adf-9ad3-ae8341c2abeb",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee56a60e-2fe5-4adf-9ad3-ae8341c2abeb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1191114289,
      "longitude": 29.1551848769
    }
  },
  "ee653a50-1668-4896-8403-8086b027d230": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 304",
      "id": "ee653a50-1668-4896-8403-8086b027d230",
      "kilometrage": 336,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee653a50-1668-4896-8403-8086b027d230",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.072673113,
      "longitude": 27.9560211391
    }
  },
  "ee92d532-f471-436a-aaf5-566302925f42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 266",
      "id": "ee92d532-f471-436a-aaf5-566302925f42",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee92d532-f471-436a-aaf5-566302925f42",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1170759177,
      "longitude": 28.203815827
    }
  },
  "eeae0c6c-49f6-4cc6-9d84-c6139e32fb69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "eeae0c6c-49f6-4cc6-9d84-c6139e32fb69",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eeae0c6c-49f6-4cc6-9d84-c6139e32fb69",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0540847443,
      "longitude": 29.2595897152
    }
  },
  "eec1eb97-9822-4e34-823c-634e4886b823": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 334",
      "id": "eec1eb97-9822-4e34-823c-634e4886b823",
      "kilometrage": 358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eec1eb97-9822-4e34-823c-634e4886b823",
    "image": "perev_right",
    "point": {
      "latitude": 52.0852890383,
      "longitude": 27.7299409961
    }
  },
  "eedbaf94-df6f-482c-be5d-23f172e592d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "eedbaf94-df6f-482c-be5d-23f172e592d4",
      "kilometrage": 382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eedbaf94-df6f-482c-be5d-23f172e592d4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1247552268,
      "longitude": 27.5470709778
    }
  },
  "ef23b8ec-f11f-414a-9cb3-7e4c451bf78b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "ef23b8ec-f11f-414a-9cb3-7e4c451bf78b",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef23b8ec-f11f-414a-9cb3-7e4c451bf78b",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.008074134,
      "longitude": 29.3356406784
    }
  },
  "ef2bb331-a795-4025-a042-e02878eeb6e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 312",
      "id": "ef2bb331-a795-4025-a042-e02878eeb6e4",
      "kilometrage": 342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef2bb331-a795-4025-a042-e02878eeb6e4",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0608843754,
      "longitude": 27.9137073682
    }
  },
  "ef6b9c86-76f7-4df6-a583-e17b70a471df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ef6b9c86-76f7-4df6-a583-e17b70a471df",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef6b9c86-76f7-4df6-a583-e17b70a471df",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.8010149475,
      "longitude": 29.5086827272
    }
  },
  "efa33f40-88f8-4f2f-8ef4-2b39790e0c5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "efa33f40-88f8-4f2f-8ef4-2b39790e0c5b",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "efa33f40-88f8-4f2f-8ef4-2b39790e0c5b",
    "image": "perev_left",
    "point": {
      "latitude": 51.4965190046,
      "longitude": 29.964779928
    }
  },
  "efacc9e5-24fb-4fd8-8271-c09987776b61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 260",
      "id": "efacc9e5-24fb-4fd8-8271-c09987776b61",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "efacc9e5-24fb-4fd8-8271-c09987776b61",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1331814721,
      "longitude": 28.658130245
    }
  },
  "eff58543-0740-4a77-89b5-93def6e36cf4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 277",
      "id": "eff58543-0740-4a77-89b5-93def6e36cf4",
      "kilometrage": 321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eff58543-0740-4a77-89b5-93def6e36cf4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0774363295,
      "longitude": 28.0763538964
    }
  },
  "f01cd188-e39c-49cf-b102-0af91dd5b3db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 108",
      "id": "f01cd188-e39c-49cf-b102-0af91dd5b3db",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f01cd188-e39c-49cf-b102-0af91dd5b3db",
    "image": "perev_left",
    "point": {
      "latitude": 51.9125807575,
      "longitude": 29.5015720176
    }
  },
  "f037b240-76e9-4f67-8a9d-2822e3d62b66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 365",
      "id": "f037b240-76e9-4f67-8a9d-2822e3d62b66",
      "kilometrage": 365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f037b240-76e9-4f67-8a9d-2822e3d62b66",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1050007997,
      "longitude": 27.6584159278
    }
  },
  "f0ca15de-798a-42fc-8d99-6ddb77e57814": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "f0ca15de-798a-42fc-8d99-6ddb77e57814",
      "kilometrage": 373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0ca15de-798a-42fc-8d99-6ddb77e57814",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1032127074,
      "longitude": 27.6007930496
    }
  },
  "f0deb764-7aee-46ae-bd89-cc606cf2cadb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 358",
      "id": "f0deb764-7aee-46ae-bd89-cc606cf2cadb",
      "kilometrage": 374,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0deb764-7aee-46ae-bd89-cc606cf2cadb",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1117405755,
      "longitude": 27.6034081592
    }
  },
  "f153ceb5-fb43-4676-b3e8-0a9247520b7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 205",
      "id": "f153ceb5-fb43-4676-b3e8-0a9247520b7b",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f153ceb5-fb43-4676-b3e8-0a9247520b7b",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1159948948,
      "longitude": 29.0822577234
    }
  },
  "f163e133-fc0b-4191-8e25-5542dd54e189": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 240",
      "id": "f163e133-fc0b-4191-8e25-5542dd54e189",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f163e133-fc0b-4191-8e25-5542dd54e189",
    "image": "perev_left",
    "point": {
      "latitude": 52.0758214989,
      "longitude": 28.365409606
    }
  },
  "f1714e53-3441-436c-8e36-4270a30e877e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "f1714e53-3441-436c-8e36-4270a30e877e",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1714e53-3441-436c-8e36-4270a30e877e",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1188330946,
      "longitude": 29.1385906097
    }
  },
  "f183950a-8656-4de6-a92d-9f9c8cc0d143": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f183950a-8656-4de6-a92d-9f9c8cc0d143",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f183950a-8656-4de6-a92d-9f9c8cc0d143",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7452656792,
      "longitude": 29.6912555684
    }
  },
  "f21f3a42-eb5e-4b1a-bab9-cb59436e53b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76",
      "id": "f21f3a42-eb5e-4b1a-bab9-cb59436e53b6",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f21f3a42-eb5e-4b1a-bab9-cb59436e53b6",
    "image": "perev_right",
    "point": {
      "latitude": 51.7657600247,
      "longitude": 29.6590255028
    }
  },
  "f22b8087-2eac-4e5c-b427-33d2900b23d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f22b8087-2eac-4e5c-b427-33d2900b23d3",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f22b8087-2eac-4e5c-b427-33d2900b23d3",
    "image": "buyo_right",
    "point": {
      "latitude": 51.90348664,
      "longitude": 29.4856094168
    }
  },
  "f23bc235-227d-42cf-9b6e-f4af01d2760d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f23bc235-227d-42cf-9b6e-f4af01d2760d",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f23bc235-227d-42cf-9b6e-f4af01d2760d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0736167912,
      "longitude": 29.2231523203
    }
  },
  "f246b6c6-9d2c-43a3-ac61-e7dc16d724d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 318",
      "id": "f246b6c6-9d2c-43a3-ac61-e7dc16d724d2",
      "kilometrage": 345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f246b6c6-9d2c-43a3-ac61-e7dc16d724d2",
    "image": "perev_left",
    "point": {
      "latitude": 52.0733396567,
      "longitude": 27.8707529171
    }
  },
  "f2497681-dc1d-444b-874c-d4ab6558a3e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 215",
      "id": "f2497681-dc1d-444b-874c-d4ab6558a3e3",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2497681-dc1d-444b-874c-d4ab6558a3e3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1193972814,
      "longitude": 28.9759271793
    }
  },
  "f24d7942-041e-4f86-be2f-08d7ba39126f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 214",
      "id": "f24d7942-041e-4f86-be2f-08d7ba39126f",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f24d7942-041e-4f86-be2f-08d7ba39126f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1182757216,
      "longitude": 28.7140465772
    }
  },
  "f2589478-7bfe-4c9d-8c63-6a47c422704c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f2589478-7bfe-4c9d-8c63-6a47c422704c",
      "kilometrage": 310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2589478-7bfe-4c9d-8c63-6a47c422704c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1024783429,
      "longitude": 28.179430451
    }
  },
  "f275fe5c-17b5-4f2f-b5b3-5f6c10e0ec7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 28",
      "id": "f275fe5c-17b5-4f2f-b5b3-5f6c10e0ec7c",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f275fe5c-17b5-4f2f-b5b3-5f6c10e0ec7c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5771710344,
      "longitude": 29.8380098463
    }
  },
  "f2a199d3-1d7c-47f5-934f-b9e1c1d22277": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "f2a199d3-1d7c-47f5-934f-b9e1c1d22277",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2a199d3-1d7c-47f5-934f-b9e1c1d22277",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0945047898,
      "longitude": 28.3106426832
    }
  },
  "f31b18a0-ff3c-44b8-b393-7bbe5333d1a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "f31b18a0-ff3c-44b8-b393-7bbe5333d1a0",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f31b18a0-ff3c-44b8-b393-7bbe5333d1a0",
    "image": "buyo_left",
    "point": {
      "latitude": 51.795898774,
      "longitude": 29.573919197
    }
  },
  "f31eec82-73eb-416a-9985-8f305ee7bf7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 32",
      "id": "f31eec82-73eb-416a-9985-8f305ee7bf7b",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f31eec82-73eb-416a-9985-8f305ee7bf7b",
    "image": "buyo_left",
    "point": {
      "latitude": 51.5985827664,
      "longitude": 29.8100440329
    }
  },
  "f35f9f6d-ab1d-4a01-a710-a6e0ebd78891": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "f35f9f6d-ab1d-4a01-a710-a6e0ebd78891",
      "kilometrage": 409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f35f9f6d-ab1d-4a01-a710-a6e0ebd78891",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.155410011,
      "longitude": 27.3539291183
    }
  },
  "f3b0832b-24d3-4884-ac02-4bd59122df06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 83",
      "id": "f3b0832b-24d3-4884-ac02-4bd59122df06",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3b0832b-24d3-4884-ac02-4bd59122df06",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7663584792,
      "longitude": 29.5745334973
    }
  },
  "f46a52db-ec57-4b54-b8f4-7875bc15227f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 320",
      "id": "f46a52db-ec57-4b54-b8f4-7875bc15227f",
      "kilometrage": 320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f46a52db-ec57-4b54-b8f4-7875bc15227f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0738522086,
      "longitude": 28.0918252602
    }
  },
  "f4759047-c6d9-442f-b217-dbd96336cc09": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f4759047-c6d9-442f-b217-dbd96336cc09",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4759047-c6d9-442f-b217-dbd96336cc09",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1239626372,
      "longitude": 28.812032628
    }
  },
  "f4b6906f-11c6-42c9-a5a9-919f9786e3e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 157",
      "id": "f4b6906f-11c6-42c9-a5a9-919f9786e3e0",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4b6906f-11c6-42c9-a5a9-919f9786e3e0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0591045763,
      "longitude": 29.2484856033
    }
  },
  "f4ea3736-85e3-4177-ac81-1eec3df388ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "f4ea3736-85e3-4177-ac81-1eec3df388ab",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4ea3736-85e3-4177-ac81-1eec3df388ab",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1003865397,
      "longitude": 28.4580094302
    }
  },
  "f4fe6681-03f8-4c4e-bb39-f8b03eb58928": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 37",
      "id": "f4fe6681-03f8-4c4e-bb39-f8b03eb58928",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4fe6681-03f8-4c4e-bb39-f8b03eb58928",
    "image": "buyo_right",
    "point": {
      "latitude": 51.6099746495,
      "longitude": 29.7782529483
    }
  },
  "f536c8b1-8704-416d-ba79-353c564a26b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 394",
      "id": "f536c8b1-8704-416d-ba79-353c564a26b1",
      "kilometrage": 396,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f536c8b1-8704-416d-ba79-353c564a26b1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1278242963,
      "longitude": 27.4503436128
    }
  },
  "f53b3e6c-2f26-4f81-9c95-c6f66e39b39d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "f53b3e6c-2f26-4f81-9c95-c6f66e39b39d",
      "kilometrage": 364,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f53b3e6c-2f26-4f81-9c95-c6f66e39b39d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1046972007,
      "longitude": 27.6762261665
    }
  },
  "f54285e1-9e92-4d72-b2e6-d4c725ddf5c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 10",
      "id": "f54285e1-9e92-4d72-b2e6-d4c725ddf5c3",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f54285e1-9e92-4d72-b2e6-d4c725ddf5c3",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.4999324961,
      "longitude": 29.9639490855
    }
  },
  "f5750b8f-690a-4a57-aa11-4a3fbf6877e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f5750b8f-690a-4a57-aa11-4a3fbf6877e1",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5750b8f-690a-4a57-aa11-4a3fbf6877e1",
    "image": "buyo_right",
    "point": {
      "latitude": 51.4991869987,
      "longitude": 29.9629037703
    }
  },
  "f5c08ad0-7b91-44a5-890b-c072808d75d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f5c08ad0-7b91-44a5-890b-c072808d75d9",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5c08ad0-7b91-44a5-890b-c072808d75d9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0949625609,
      "longitude": 29.1686060313
    }
  },
  "f64d000b-515f-464d-93af-e6b3363bd005": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 13",
      "id": "f64d000b-515f-464d-93af-e6b3363bd005",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f64d000b-515f-464d-93af-e6b3363bd005",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5013832118,
      "longitude": 29.9205490651
    }
  },
  "f6707db0-a204-4da3-9186-27e9fd16b445": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "f6707db0-a204-4da3-9186-27e9fd16b445",
      "kilometrage": 347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6707db0-a204-4da3-9186-27e9fd16b445",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0794142889,
      "longitude": 27.8457795522
    }
  },
  "f6761b50-c6cd-4f5e-b3ca-74f8d819f811": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "f6761b50-c6cd-4f5e-b3ca-74f8d819f811",
      "kilometrage": 370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6761b50-c6cd-4f5e-b3ca-74f8d819f811",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0968961337,
      "longitude": 27.6325758872
    }
  },
  "f69d5e6c-1578-48c3-b4fd-75282de5291c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "f69d5e6c-1578-48c3-b4fd-75282de5291c",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f69d5e6c-1578-48c3-b4fd-75282de5291c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0469336949,
      "longitude": 29.2838409325
    }
  },
  "f6caa6a6-7f56-453c-8804-fd61e3b9ffe1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 397",
      "id": "f6caa6a6-7f56-453c-8804-fd61e3b9ffe1",
      "kilometrage": 397,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6caa6a6-7f56-453c-8804-fd61e3b9ffe1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1292110154,
      "longitude": 27.4385384088
    }
  },
  "f76ef92b-8ecc-4ca3-a49a-9dfd7e48c8fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13а",
      "id": "f76ef92b-8ecc-4ca3-a49a-9dfd7e48c8fe",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f76ef92b-8ecc-4ca3-a49a-9dfd7e48c8fe",
    "image": "perev_left",
    "point": {
      "latitude": 51.5027070623,
      "longitude": 29.9245026386
    }
  },
  "f77160b0-dfa3-45e0-8335-e7501b835508": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 238а",
      "id": "f77160b0-dfa3-45e0-8335-e7501b835508",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f77160b0-dfa3-45e0-8335-e7501b835508",
    "image": "perev_right",
    "point": {
      "latitude": 52.0704884308,
      "longitude": 28.3696216879
    }
  },
  "f79a8db9-7d83-41bb-88f3-0b656b4184c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 186",
      "id": "f79a8db9-7d83-41bb-88f3-0b656b4184c3",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f79a8db9-7d83-41bb-88f3-0b656b4184c3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1189603729,
      "longitude": 29.0286716121
    }
  },
  "f7d0f6f3-afa5-4b2e-b43e-1503e6f9e61d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 202",
      "id": "f7d0f6f3-afa5-4b2e-b43e-1503e6f9e61d",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7d0f6f3-afa5-4b2e-b43e-1503e6f9e61d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1402904302,
      "longitude": 28.684210697
    }
  },
  "f7ec4e93-09b6-4731-8943-1fb969afd0af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 208",
      "id": "f7ec4e93-09b6-4731-8943-1fb969afd0af",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7ec4e93-09b6-4731-8943-1fb969afd0af",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1182925025,
      "longitude": 28.796142465
    }
  },
  "f8a060ab-6105-436c-867b-efb67b389754": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 386",
      "id": "f8a060ab-6105-436c-867b-efb67b389754",
      "kilometrage": 392,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8a060ab-6105-436c-867b-efb67b389754",
    "image": "perev_right",
    "point": {
      "latitude": 52.1217615325,
      "longitude": 27.4743633916
    }
  },
  "f8b202b7-7ce6-4488-bf16-644adb0e72f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 379",
      "id": "f8b202b7-7ce6-4488-bf16-644adb0e72f0",
      "kilometrage": 388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8b202b7-7ce6-4488-bf16-644adb0e72f0",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1246629751,
      "longitude": 27.5183359996
    }
  },
  "f8d0177d-c25a-4703-94ab-110f5828c883": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "f8d0177d-c25a-4703-94ab-110f5828c883",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8d0177d-c25a-4703-94ab-110f5828c883",
    "image": "name_of",
    "point": {
      "latitude": 51.7634923445,
      "longitude": 29.6755509471
    }
  },
  "f91b3716-76fe-4376-91f1-1b4cd551e9b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 305",
      "id": "f91b3716-76fe-4376-91f1-1b4cd551e9b3",
      "kilometrage": 305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f91b3716-76fe-4376-91f1-1b4cd551e9b3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.105861841,
      "longitude": 28.2292557054
    }
  },
  "f9528a2e-a352-4b1f-a626-6198876eb78f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "f9528a2e-a352-4b1f-a626-6198876eb78f",
      "kilometrage": 323,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9528a2e-a352-4b1f-a626-6198876eb78f",
    "image": "attention",
    "point": {
      "latitude": 52.068917107,
      "longitude": 28.0761737731
    }
  },
  "f9553c81-7257-4864-8c18-87666619190c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "f9553c81-7257-4864-8c18-87666619190c",
      "kilometrage": 334,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9553c81-7257-4864-8c18-87666619190c",
    "image": "name_of",
    "point": {
      "latitude": 52.0754312392,
      "longitude": 27.9726200956
    }
  },
  "f959ca0e-a349-4470-92bc-1f01c7636850": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 103а",
      "id": "f959ca0e-a349-4470-92bc-1f01c7636850",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f959ca0e-a349-4470-92bc-1f01c7636850",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8424073288,
      "longitude": 29.5038982614
    }
  },
  "fa3027bb-1a0c-4efe-9940-599a59e12620": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 122",
      "id": "fa3027bb-1a0c-4efe-9940-599a59e12620",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa3027bb-1a0c-4efe-9940-599a59e12620",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9512685345,
      "longitude": 29.4591188407
    }
  },
  "fa78f80a-ffc8-4a4f-9d67-71d53e509488": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 206",
      "id": "fa78f80a-ffc8-4a4f-9d67-71d53e509488",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa78f80a-ffc8-4a4f-9d67-71d53e509488",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1238108082,
      "longitude": 28.8355688459
    }
  },
  "fa88c516-478d-4b5c-be51-1c6c6db8e3cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "fa88c516-478d-4b5c-be51-1c6c6db8e3cb",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa88c516-478d-4b5c-be51-1c6c6db8e3cb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.05466866,
      "longitude": 29.260764982
    }
  },
  "faaed750-4813-48ff-ad37-652537342b88": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "faaed750-4813-48ff-ad37-652537342b88",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "faaed750-4813-48ff-ad37-652537342b88",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1019152863,
      "longitude": 28.4559364707
    }
  },
  "fabae392-2873-419d-8ac4-a2c01df527cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "fabae392-2873-419d-8ac4-a2c01df527cc",
      "kilometrage": 349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fabae392-2873-419d-8ac4-a2c01df527cc",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0793198948,
      "longitude": 27.8226669657
    }
  },
  "fafaedca-4335-4ae9-8505-4396eb98c19e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 115",
      "id": "fafaedca-4335-4ae9-8505-4396eb98c19e",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fafaedca-4335-4ae9-8505-4396eb98c19e",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7047125731,
      "longitude": 29.6857314968
    }
  },
  "fb78ce39-9174-45b0-a50e-0c6677bf9c12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 221",
      "id": "fb78ce39-9174-45b0-a50e-0c6677bf9c12",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb78ce39-9174-45b0-a50e-0c6677bf9c12",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1354706073,
      "longitude": 28.6791510491
    }
  },
  "fbb0ca7d-256c-4044-b3a7-843ea5ff43c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "fbb0ca7d-256c-4044-b3a7-843ea5ff43c1",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbb0ca7d-256c-4044-b3a7-843ea5ff43c1",
    "image": "name_of",
    "point": {
      "latitude": 52.0962514986,
      "longitude": 29.1752132861
    }
  },
  "fbd61360-012d-4057-9037-cb68932627f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "fbd61360-012d-4057-9037-cb68932627f0",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbd61360-012d-4057-9037-cb68932627f0",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.0751090498,
      "longitude": 28.3646737103
    }
  },
  "fbe918f5-b8cd-4e6b-97ae-3146827a8a85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140",
      "id": "fbe918f5-b8cd-4e6b-97ae-3146827a8a85",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbe918f5-b8cd-4e6b-97ae-3146827a8a85",
    "image": "perev_right",
    "point": {
      "latitude": 52.1164782858,
      "longitude": 29.0865664436
    }
  },
  "fbef8d20-5baf-4979-a84c-8b4f52e15819": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "fbef8d20-5baf-4979-a84c-8b4f52e15819",
      "kilometrage": 247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbef8d20-5baf-4979-a84c-8b4f52e15819",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1103531516,
      "longitude": 28.7345659607
    }
  },
  "fc12f4d2-2026-4693-a85c-b92022eb0fd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 74",
      "id": "fc12f4d2-2026-4693-a85c-b92022eb0fd6",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc12f4d2-2026-4693-a85c-b92022eb0fd6",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7684235462,
      "longitude": 29.6645618045
    }
  },
  "fc87ec94-1c92-4dbd-9067-89b3b2d13968": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "fc87ec94-1c92-4dbd-9067-89b3b2d13968",
      "kilometrage": 337,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc87ec94-1c92-4dbd-9067-89b3b2d13968",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0719953673,
      "longitude": 27.9523772122
    }
  },
  "fcc33bb8-32ab-4d2c-ad23-8a1716d4a3e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 184",
      "id": "fcc33bb8-32ab-4d2c-ad23-8a1716d4a3e2",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fcc33bb8-32ab-4d2c-ad23-8a1716d4a3e2",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1208264208,
      "longitude": 29.0635078433
    }
  },
  "fd68b973-a9f0-44f2-93a3-e0ab59ae31ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "fd68b973-a9f0-44f2-93a3-e0ab59ae31ab",
      "kilometrage": 207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd68b973-a9f0-44f2-93a3-e0ab59ae31ab",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1194383618,
      "longitude": 29.0575344377
    }
  },
  "fd866126-448c-422b-ba12-9b460e6d1582": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый м",
      "id": "fd866126-448c-422b-ba12-9b460e6d1582",
      "kilometrage": 367,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd866126-448c-422b-ba12-9b460e6d1582",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1064984156,
      "longitude": 27.6416630524
    }
  },
  "fda44fe5-7d4a-475d-8e2a-f6eff72a287b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 328",
      "id": "fda44fe5-7d4a-475d-8e2a-f6eff72a287b",
      "kilometrage": 354,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fda44fe5-7d4a-475d-8e2a-f6eff72a287b",
    "image": "perev_right",
    "point": {
      "latitude": 52.0800015342,
      "longitude": 27.768420632
    }
  },
  "fe33842c-9433-4802-8f0c-3fb2aec99fef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 109",
      "id": "fe33842c-9433-4802-8f0c-3fb2aec99fef",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe33842c-9433-4802-8f0c-3fb2aec99fef",
    "image": "perev_left",
    "point": {
      "latitude": 51.9255217757,
      "longitude": 29.5092582088
    }
  },
  "fe5e8514-a658-487d-9344-990381aee04e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 249",
      "id": "fe5e8514-a658-487d-9344-990381aee04e",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe5e8514-a658-487d-9344-990381aee04e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1070306293,
      "longitude": 28.2810275013
    }
  },
  "fe7a2bac-ca36-4613-9322-33e30d38acdb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "fe7a2bac-ca36-4613-9322-33e30d38acdb",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe7a2bac-ca36-4613-9322-33e30d38acdb",
    "image": "buyo_right",
    "point": {
      "latitude": 51.5532102127,
      "longitude": 29.8454544389
    }
  },
  "feb5d048-c886-4c38-953b-a2562426280d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 218",
      "id": "feb5d048-c886-4c38-953b-a2562426280d",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "feb5d048-c886-4c38-953b-a2562426280d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.133063389,
      "longitude": 28.693954556
    }
  },
  "fed80970-a55c-44ff-bdfd-ead4639ff43f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 158",
      "id": "fed80970-a55c-44ff-bdfd-ead4639ff43f",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fed80970-a55c-44ff-bdfd-ead4639ff43f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1219368107,
      "longitude": 28.9129427523
    }
  },
  "fed9f7b3-241d-4d80-bddf-6565d7b3aa23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 413",
      "id": "fed9f7b3-241d-4d80-bddf-6565d7b3aa23",
      "kilometrage": 407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fed9f7b3-241d-4d80-bddf-6565d7b3aa23",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1358995722,
      "longitude": 27.3732389796
    }
  },
  "ff0c60ef-8f84-48ba-8bbc-d0608112c6b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый м",
      "id": "ff0c60ef-8f84-48ba-8bbc-d0608112c6b2",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff0c60ef-8f84-48ba-8bbc-d0608112c6b2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1433428949,
      "longitude": 28.6292343347
    }
  },
  "ff41f11a-1f6c-4454-9945-c5d1d11d17dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 162",
      "id": "ff41f11a-1f6c-4454-9945-c5d1d11d17dc",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff41f11a-1f6c-4454-9945-c5d1d11d17dc",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0736706933,
      "longitude": 29.2210746211
    }
  },
  "ffee30bf-6e4f-4f88-8ff5-dcba48a2ee77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 166",
      "id": "ffee30bf-6e4f-4f88-8ff5-dcba48a2ee77",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffee30bf-6e4f-4f88-8ff5-dcba48a2ee77",
    "image": "perev_left",
    "point": {
      "latitude": 52.1449085194,
      "longitude": 28.8830492619
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

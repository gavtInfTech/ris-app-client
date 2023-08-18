const fs = require("fs");
const shortid = require("shortid");

let data = {
    "01820e6d-fc1d-488c-81e9-746e6e74cfd4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 38",
        "id": "01820e6d-fc1d-488c-81e9-746e6e74cfd4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "01820e6d-fc1d-488c-81e9-746e6e74cfd4",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2459247762,
        "longitude": 30.1307105479
      }
    },
    "020792c3-701e-42ab-8e2d-92dd5bacfcd9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "020792c3-701e-42ab-8e2d-92dd5bacfcd9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "020792c3-701e-42ab-8e2d-92dd5bacfcd9",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4082527238,
        "longitude": 30.6861870467
      }
    },
    "02438c94-25ef-44a7-b839-f34bcc1613e0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "02438c94-25ef-44a7-b839-f34bcc1613e0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "02438c94-25ef-44a7-b839-f34bcc1613e0",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2044160453,
        "longitude": 30.1973818646
      }
    },
    "02b5daaa-ac96-4269-b1a3-758b16e0f048": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "02b5daaa-ac96-4269-b1a3-758b16e0f048",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "02b5daaa-ac96-4269-b1a3-758b16e0f048",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.163627096,
        "longitude": 30.0688956548
      }
    },
    "03154903-ea61-4ba1-9d3c-7a9624b64f7a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 11п",
        "id": "03154903-ea61-4ba1-9d3c-7a9624b64f7a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "03154903-ea61-4ba1-9d3c-7a9624b64f7a",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2076915512,
        "longitude": 30.1716738765
      }
    },
    "0349732f-9ec8-4856-a8b6-f876d5cdbf8a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 70",
        "id": "0349732f-9ec8-4856-a8b6-f876d5cdbf8a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0349732f-9ec8-4856-a8b6-f876d5cdbf8a",
      "image": "perev_left",
      "point": {
        "latitude": 55.2440958204,
        "longitude": 29.1501056922
      }
    },
    "0362d42b-2c5f-4080-9024-9e4479750305": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "0362d42b-2c5f-4080-9024-9e4479750305",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0362d42b-2c5f-4080-9024-9e4479750305",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.0611946441,
        "longitude": 29.4326230529
      }
    },
    "0415676a-ce49-41a1-8ed4-629682041f41": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 9",
        "id": "0415676a-ce49-41a1-8ed4-629682041f41",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0415676a-ce49-41a1-8ed4-629682041f41",
      "image": "perev_left",
      "point": {
        "latitude": 55.1642334607,
        "longitude": 29.9218485655
      }
    },
    "05eddc4d-c27d-4a9f-ab02-8363cbd7276e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 96",
        "id": "05eddc4d-c27d-4a9f-ab02-8363cbd7276e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "05eddc4d-c27d-4a9f-ab02-8363cbd7276e",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1183165448,
        "longitude": 29.5741573177
      }
    },
    "0642a74c-2f73-4b63-9575-888d984430fc": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0642a74c-2f73-4b63-9575-888d984430fc",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0642a74c-2f73-4b63-9575-888d984430fc",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.113524239,
        "longitude": 29.4470663396
      }
    },
    "06540245-4368-49e4-84a9-69a03aad93d1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 605",
        "id": "06540245-4368-49e4-84a9-69a03aad93d1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "06540245-4368-49e4-84a9-69a03aad93d1",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1665986208,
        "longitude": 30.0823744645
      }
    },
    "078500b8-b485-4be5-b858-2615c7cb8e82": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Не создавать волнения  ",
        "id": "078500b8-b485-4be5-b858-2615c7cb8e82",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "078500b8-b485-4be5-b858-2615c7cb8e82",
      "image": "waves_forbidden",
      "point": {
        "latitude": 55.1638957789,
        "longitude": 30.1008680569
      }
    },
    "08068fe3-028c-4a6d-8f88-15e6863edb09": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 49",
        "id": "08068fe3-028c-4a6d-8f88-15e6863edb09",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "08068fe3-028c-4a6d-8f88-15e6863edb09",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1857984095,
        "longitude": 29.8012240305
      }
    },
    "086df75f-05f4-4f9c-bfac-8242c24247a0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "086df75f-05f4-4f9c-bfac-8242c24247a0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "086df75f-05f4-4f9c-bfac-8242c24247a0",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.206571023,
        "longitude": 30.1948731657
      }
    },
    "0896a54b-1b87-4d26-a73c-b28961c60a52": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 13п",
        "id": "0896a54b-1b87-4d26-a73c-b28961c60a52",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0896a54b-1b87-4d26-a73c-b28961c60a52",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2125759135,
        "longitude": 30.1432170632
      }
    },
    "0904654d-5ab5-4ea4-b8af-482c04c50248": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 40",
        "id": "0904654d-5ab5-4ea4-b8af-482c04c50248",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0904654d-5ab5-4ea4-b8af-482c04c50248",
      "image": "perev_right",
      "point": {
        "latitude": 55.1284527862,
        "longitude": 29.6456913089
      }
    },
    "09078ce4-7938-421b-9797-c5ebf44e691c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "09078ce4-7938-421b-9797-c5ebf44e691c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "09078ce4-7938-421b-9797-c5ebf44e691c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1696227673,
        "longitude": 30.163874595
      }
    },
    "098a5e2f-af3e-46ab-bd32-15877da83ddc": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 40",
        "id": "098a5e2f-af3e-46ab-bd32-15877da83ddc",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "098a5e2f-af3e-46ab-bd32-15877da83ddc",
      "image": "perev_left",
      "point": {
        "latitude": 55.4187227926,
        "longitude": 30.5250404071
      }
    },
    "0a27d49b-e2a6-43ed-91b9-de6a243a103c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0a27d49b-e2a6-43ed-91b9-de6a243a103c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0a27d49b-e2a6-43ed-91b9-de6a243a103c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0647318572,
        "longitude": 29.4802909059
      }
    },
    "0a5d4a95-dd62-448f-ab82-1384c538cde2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 101",
        "id": "0a5d4a95-dd62-448f-ab82-1384c538cde2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0a5d4a95-dd62-448f-ab82-1384c538cde2",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1011563153,
        "longitude": 29.5569682032
      }
    },
    "0ac29623-1cd9-4399-8f32-5e9571b54ab9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 32",
        "id": "0ac29623-1cd9-4399-8f32-5e9571b54ab9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0ac29623-1cd9-4399-8f32-5e9571b54ab9",
      "image": "perev_left",
      "point": {
        "latitude": 55.132919894,
        "longitude": 29.7421267397
      }
    },
    "0ac8b972-f8ce-417d-9881-9d4597f6d0ba": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0ac8b972-f8ce-417d-9881-9d4597f6d0ba",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0ac8b972-f8ce-417d-9881-9d4597f6d0ba",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1644020635,
        "longitude": 30.0114289524
      }
    },
    "0b0778d3-3020-493c-8748-8e3da1bdd8a8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Знак рейда правый задний  ",
        "id": "0b0778d3-3020-493c-8748-8e3da1bdd8a8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0b0778d3-3020-493c-8748-8e3da1bdd8a8",
      "image": "raid_end_right",
      "point": {
        "latitude": 55.163123914,
        "longitude": 30.0321566576
      }
    },
    "0b11ad6c-5239-4d3a-a58d-d8576ff7d220": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0b11ad6c-5239-4d3a-a58d-d8576ff7d220",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0b11ad6c-5239-4d3a-a58d-d8576ff7d220",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2206654406,
        "longitude": 30.129713959
      }
    },
    "0b45df5d-8b07-4d6d-ad29-b14835a821d6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "0b45df5d-8b07-4d6d-ad29-b14835a821d6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0b45df5d-8b07-4d6d-ad29-b14835a821d6",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1659708767,
        "longitude": 30.1387983314
      }
    },
    "0c112f4f-817e-488a-82a2-aebd449f08f0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0c112f4f-817e-488a-82a2-aebd449f08f0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0c112f4f-817e-488a-82a2-aebd449f08f0",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2707874155,
        "longitude": 30.2160947606
      }
    },
    "0c335f86-1e28-4ce0-8326-2034e81a1810": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 46",
        "id": "0c335f86-1e28-4ce0-8326-2034e81a1810",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0c335f86-1e28-4ce0-8326-2034e81a1810",
      "image": "perev_left",
      "point": {
        "latitude": 55.1127703799,
        "longitude": 29.5668434837
      }
    },
    "0d06cec7-0b49-4380-add1-4bbfa6526c0f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Знак рейда правый передний  ",
        "id": "0d06cec7-0b49-4380-add1-4bbfa6526c0f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0d06cec7-0b49-4380-add1-4bbfa6526c0f",
      "image": "raid_start_right",
      "point": {
        "latitude": 55.1627827563,
        "longitude": 30.0353223334
      }
    },
    "0d3be4fc-72e5-4a96-b141-b1058e6a4f09": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0d3be4fc-72e5-4a96-b141-b1058e6a4f09",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0d3be4fc-72e5-4a96-b141-b1058e6a4f09",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3280172397,
        "longitude": 30.3534407885
      }
    },
    "0e59c81a-766f-4367-b813-b49389fa38e8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 35",
        "id": "0e59c81a-766f-4367-b813-b49389fa38e8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0e59c81a-766f-4367-b813-b49389fa38e8",
      "image": "perev_left",
      "point": {
        "latitude": 55.3802735816,
        "longitude": 30.4593827708
      }
    },
    "0e5b17b9-d4ea-4435-bb89-f482c53feeb1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 26",
        "id": "0e5b17b9-d4ea-4435-bb89-f482c53feeb1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0e5b17b9-d4ea-4435-bb89-f482c53feeb1",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2014635351,
        "longitude": 30.1974920352
      }
    },
    "0eb5c9c8-6e47-4dd4-947b-4b9e0e997f20": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0eb5c9c8-6e47-4dd4-947b-4b9e0e997f20",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0eb5c9c8-6e47-4dd4-947b-4b9e0e997f20",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2655022334,
        "longitude": 29.2113811613
      }
    },
    "0f4d6d4f-d310-479e-9ca1-e931f683db53": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "0f4d6d4f-d310-479e-9ca1-e931f683db53",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0f4d6d4f-d310-479e-9ca1-e931f683db53",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1836871054,
        "longitude": 30.1971058984
      }
    },
    "0f4ebec3-acdf-46c5-b933-f5addccf6cf0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 62",
        "id": "0f4ebec3-acdf-46c5-b933-f5addccf6cf0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0f4ebec3-acdf-46c5-b933-f5addccf6cf0",
      "image": "perev_right",
      "point": {
        "latitude": 55.0921468338,
        "longitude": 29.4427411133
      }
    },
    "0f737eb9-72c9-4c6a-b3d7-66c89dd75a8f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "0f737eb9-72c9-4c6a-b3d7-66c89dd75a8f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0f737eb9-72c9-4c6a-b3d7-66c89dd75a8f",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2217345177,
        "longitude": 30.1286252562
      }
    },
    "0fd57945-9fc3-480c-8ccb-c6ef3fb8752b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 5",
        "id": "0fd57945-9fc3-480c-8ccb-c6ef3fb8752b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "0fd57945-9fc3-480c-8ccb-c6ef3fb8752b",
      "image": "perev_left",
      "point": {
        "latitude": 55.1635492004,
        "longitude": 29.9946150736
      }
    },
    "10b95747-cc21-457d-88c3-35090b2a010b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "10b95747-cc21-457d-88c3-35090b2a010b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "10b95747-cc21-457d-88c3-35090b2a010b",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1938406362,
        "longitude": 30.1979645245
      }
    },
    "10c548ce-380a-4dc3-9597-20528219fd67": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 8",
        "id": "10c548ce-380a-4dc3-9597-20528219fd67",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "10c548ce-380a-4dc3-9597-20528219fd67",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1645152852,
        "longitude": 30.070364254
      }
    },
    "1107f24e-6c9d-4c51-85ac-9ba5dd3e2045": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 36",
        "id": "1107f24e-6c9d-4c51-85ac-9ba5dd3e2045",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1107f24e-6c9d-4c51-85ac-9ba5dd3e2045",
      "image": "perev_right",
      "point": {
        "latitude": 55.4025026102,
        "longitude": 30.4695440196
      }
    },
    "12f36dc6-59bf-4fc6-958a-ae088c2d9f2e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 33",
        "id": "12f36dc6-59bf-4fc6-958a-ae088c2d9f2e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "12f36dc6-59bf-4fc6-958a-ae088c2d9f2e",
      "image": "perev_left",
      "point": {
        "latitude": 55.1276788337,
        "longitude": 29.7414658375
      }
    },
    "1349c7c4-6015-4974-bb46-d06f9bd2c360": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "1349c7c4-6015-4974-bb46-d06f9bd2c360",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1349c7c4-6015-4974-bb46-d06f9bd2c360",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.407928497,
        "longitude": 30.698075083
      }
    },
    "137d1817-5872-44fb-bc4d-9eac0824b699": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "137d1817-5872-44fb-bc4d-9eac0824b699",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "137d1817-5872-44fb-bc4d-9eac0824b699",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1650729547,
        "longitude": 30.0674113957
      }
    },
    "1448a450-96a6-47eb-a622-41133c4b3075": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "1448a450-96a6-47eb-a622-41133c4b3075",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1448a450-96a6-47eb-a622-41133c4b3075",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2083889139,
        "longitude": 30.1913006541
      }
    },
    "15d074b7-b6ea-4eee-9ccc-7b26ca2e1b61": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 16п",
        "id": "15d074b7-b6ea-4eee-9ccc-7b26ca2e1b61",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "15d074b7-b6ea-4eee-9ccc-7b26ca2e1b61",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2240782885,
        "longitude": 30.1281100054
      }
    },
    "15eed62a-5c81-49d3-bfd2-7bba4fb7d16a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 655",
        "id": "15eed62a-5c81-49d3-bfd2-7bba4fb7d16a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "15eed62a-5c81-49d3-bfd2-7bba4fb7d16a",
      "image": "kilometrage",
      "point": {
        "latitude": 55.4065866058,
        "longitude": 30.4835694697
      }
    },
    "1686b478-bcdf-4ad0-887c-30e7d76b0a47": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 640",
        "id": "1686b478-bcdf-4ad0-887c-30e7d76b0a47",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1686b478-bcdf-4ad0-887c-30e7d76b0a47",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3160657895,
        "longitude": 30.330208635
      }
    },
    "16c5f736-ce93-4f9a-b285-5cb40830a21a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "16c5f736-ce93-4f9a-b285-5cb40830a21a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "16c5f736-ce93-4f9a-b285-5cb40830a21a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1756353926,
        "longitude": 29.8900840045
      }
    },
    "173a93cb-95ea-4ded-8fb5-6eafa2ed7210": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 37",
        "id": "173a93cb-95ea-4ded-8fb5-6eafa2ed7210",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "173a93cb-95ea-4ded-8fb5-6eafa2ed7210",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2436296262,
        "longitude": 30.1267507497
      }
    },
    "17545579-9362-4cca-99b5-c1eeb8e40654": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "17545579-9362-4cca-99b5-c1eeb8e40654",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "17545579-9362-4cca-99b5-c1eeb8e40654",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1660049423,
        "longitude": 30.0124057583
      }
    },
    "1781d226-553a-4889-a4e7-df6f8c4eb718": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "1781d226-553a-4889-a4e7-df6f8c4eb718",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1781d226-553a-4889-a4e7-df6f8c4eb718",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2077612295,
        "longitude": 30.1927955624
      }
    },
    "199f6ffe-f090-4970-a196-b5ac3963ed2e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 26",
        "id": "199f6ffe-f090-4970-a196-b5ac3963ed2e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "199f6ffe-f090-4970-a196-b5ac3963ed2e",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1681392059,
        "longitude": 29.9130763418
      }
    },
    "19f19009-1396-447d-af62-bd6eacb7666b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 13",
        "id": "19f19009-1396-447d-af62-bd6eacb7666b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "19f19009-1396-447d-af62-bd6eacb7666b",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1657027422,
        "longitude": 30.0035078861
      }
    },
    "1a642d52-ab61-4525-97a0-c482a0c88741": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 570",
        "id": "1a642d52-ab61-4525-97a0-c482a0c88741",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1a642d52-ab61-4525-97a0-c482a0c88741",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1142977826,
        "longitude": 29.7241556512
      }
    },
    "1b8e5a67-c413-4573-bdf9-495da84b62ef": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "1b8e5a67-c413-4573-bdf9-495da84b62ef",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1b8e5a67-c413-4573-bdf9-495da84b62ef",
      "image": "name_of",
      "point": {
        "latitude": 55.1942520268,
        "longitude": 30.2004056745
      }
    },
    "1bd3a2ff-a617-4869-8bb1-3c24d921221f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 60",
        "id": "1bd3a2ff-a617-4869-8bb1-3c24d921221f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1bd3a2ff-a617-4869-8bb1-3c24d921221f",
      "image": "perev_right",
      "point": {
        "latitude": 55.056434306,
        "longitude": 29.4361348135
      }
    },
    "1c806e7b-d157-4780-9b36-ea60818ae672": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 575",
        "id": "1c806e7b-d157-4780-9b36-ea60818ae672",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1c806e7b-d157-4780-9b36-ea60818ae672",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1544820349,
        "longitude": 29.7314294333
      }
    },
    "1cc3d507-4406-4c40-854f-b5d5eea872c4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 590",
        "id": "1cc3d507-4406-4c40-854f-b5d5eea872c4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1cc3d507-4406-4c40-854f-b5d5eea872c4",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1869406732,
        "longitude": 29.8790184586
      }
    },
    "1cd8ca79-d543-42bd-9577-4c6b7eaeffd6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 61",
        "id": "1cd8ca79-d543-42bd-9577-4c6b7eaeffd6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1cd8ca79-d543-42bd-9577-4c6b7eaeffd6",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1736081873,
        "longitude": 29.7377545424
      }
    },
    "1d2a53e6-e1e0-4fca-ad2b-8f3263fac9f7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 28",
        "id": "1d2a53e6-e1e0-4fca-ad2b-8f3263fac9f7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1d2a53e6-e1e0-4fca-ad2b-8f3263fac9f7",
      "image": "perev_left",
      "point": {
        "latitude": 55.3248665156,
        "longitude": 30.351121299
      }
    },
    "1d374e17-b264-4f74-954e-ab4f5c17e91d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Запрещение стоянки судов на якоре или на швартовых у берега  ",
        "id": "1d374e17-b264-4f74-954e-ab4f5c17e91d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1d374e17-b264-4f74-954e-ab4f5c17e91d",
      "image": "parking_forbidden",
      "point": {
        "latitude": 55.1630294685,
        "longitude": 30.1032775939
      }
    },
    "1ed49a4d-69aa-40a2-af12-8ab8f89e9fad": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "1ed49a4d-69aa-40a2-af12-8ab8f89e9fad",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1ed49a4d-69aa-40a2-af12-8ab8f89e9fad",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.249517488,
        "longitude": 30.1380512824
      }
    },
    "1fab2632-0125-44d3-ad1c-a704f818a9b5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 39",
        "id": "1fab2632-0125-44d3-ad1c-a704f818a9b5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1fab2632-0125-44d3-ad1c-a704f818a9b5",
      "image": "milestone_right",
      "point": {
        "latitude": 55.2126607352,
        "longitude": 29.8528621255
      }
    },
    "1fff8d75-d3a2-4066-aec4-87c8fdfd9eec": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Стоповый  ",
        "id": "1fff8d75-d3a2-4066-aec4-87c8fdfd9eec",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "1fff8d75-d3a2-4066-aec4-87c8fdfd9eec",
      "image": "stop",
      "point": {
        "latitude": 55.2491605495,
        "longitude": 30.1592818729
      }
    },
    "2024aefc-9e0e-40f6-a6f0-89527437cf30": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "2024aefc-9e0e-40f6-a6f0-89527437cf30",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2024aefc-9e0e-40f6-a6f0-89527437cf30",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1733209295,
        "longitude": 30.1827714847
      }
    },
    "20c56d10-23d4-4c07-aa58-563f86528c72": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 525",
        "id": "20c56d10-23d4-4c07-aa58-563f86528c72",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "20c56d10-23d4-4c07-aa58-563f86528c72",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1688850532,
        "longitude": 29.2851914426
      }
    },
    "20e9cf28-d014-4317-b0a7-1d00a64caf7c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 8п",
        "id": "20e9cf28-d014-4317-b0a7-1d00a64caf7c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "20e9cf28-d014-4317-b0a7-1d00a64caf7c",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1986231992,
        "longitude": 30.2004489814
      }
    },
    "21067102-9fdc-45e1-896f-a7bfb86304fb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 32",
        "id": "21067102-9fdc-45e1-896f-a7bfb86304fb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "21067102-9fdc-45e1-896f-a7bfb86304fb",
      "image": "perev_left",
      "point": {
        "latitude": 55.3534948185,
        "longitude": 30.415579971
      }
    },
    "216cc047-5139-4f7d-8adf-0ac248cc3d94": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 39",
        "id": "216cc047-5139-4f7d-8adf-0ac248cc3d94",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "216cc047-5139-4f7d-8adf-0ac248cc3d94",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2493143768,
        "longitude": 30.1573085654
      }
    },
    "21865b91-bfa6-496e-9a78-4a75af9cc0a5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 39",
        "id": "21865b91-bfa6-496e-9a78-4a75af9cc0a5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "21865b91-bfa6-496e-9a78-4a75af9cc0a5",
      "image": "perev_right",
      "point": {
        "latitude": 55.1256112417,
        "longitude": 29.6644549653
      }
    },
    "219188ad-b8ff-4755-b2aa-f01c1d7592a6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 18",
        "id": "219188ad-b8ff-4755-b2aa-f01c1d7592a6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "219188ad-b8ff-4755-b2aa-f01c1d7592a6",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1787368368,
        "longitude": 30.1948995594
      }
    },
    "2227ec9c-81bf-4eeb-a825-3da15ea09b0c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "2227ec9c-81bf-4eeb-a825-3da15ea09b0c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2227ec9c-81bf-4eeb-a825-3da15ea09b0c",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.0622528635,
        "longitude": 29.4321139028
      }
    },
    "2289d4ec-e759-4218-acda-49220e8ce6ae": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "2289d4ec-e759-4218-acda-49220e8ce6ae",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2289d4ec-e759-4218-acda-49220e8ce6ae",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.17347212,
        "longitude": 30.1790531973
      }
    },
    "239d034d-59ef-4a40-9d59-f48b3d47cf95": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "239d034d-59ef-4a40-9d59-f48b3d47cf95",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "239d034d-59ef-4a40-9d59-f48b3d47cf95",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1745352876,
        "longitude": 29.8884863059
      }
    },
    "240de6dc-cc50-4a97-a6d8-c7b6f95e46f9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 68",
        "id": "240de6dc-cc50-4a97-a6d8-c7b6f95e46f9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "240de6dc-cc50-4a97-a6d8-c7b6f95e46f9",
      "image": "perev_right",
      "point": {
        "latitude": 55.2615790653,
        "longitude": 29.2187456199
      }
    },
    "2457073b-e2c5-43f6-a633-7bcbbc423473": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Не создавать волнения  ",
        "id": "2457073b-e2c5-43f6-a633-7bcbbc423473",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2457073b-e2c5-43f6-a633-7bcbbc423473",
      "image": "waves_forbidden",
      "point": {
        "latitude": 55.1632193694,
        "longitude": 30.0312942348
      }
    },
    "255dd4c6-72ba-435c-9512-819d68910ec5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 54",
        "id": "255dd4c6-72ba-435c-9512-819d68910ec5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "255dd4c6-72ba-435c-9512-819d68910ec5",
      "image": "perev_left",
      "point": {
        "latitude": 55.0779498649,
        "longitude": 29.5119346114
      }
    },
    "25c2171a-19b0-459a-93d3-e3487872d7ae": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 42",
        "id": "25c2171a-19b0-459a-93d3-e3487872d7ae",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "25c2171a-19b0-459a-93d3-e3487872d7ae",
      "image": "milestone_left",
      "point": {
        "latitude": 55.2098594105,
        "longitude": 29.8419079829
      }
    },
    "25d1d7b6-4193-4955-a6c5-512f61d13f22": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "25d1d7b6-4193-4955-a6c5-512f61d13f22",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "25d1d7b6-4193-4955-a6c5-512f61d13f22",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4071436427,
        "longitude": 30.6843918289
      }
    },
    "277d05a0-5ac8-475c-a1fc-226468632613": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "277d05a0-5ac8-475c-a1fc-226468632613",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "277d05a0-5ac8-475c-a1fc-226468632613",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1683835172,
        "longitude": 30.1617582577
      }
    },
    "283f61a6-3709-4363-9423-977b4d32a95b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 34",
        "id": "283f61a6-3709-4363-9423-977b4d32a95b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "283f61a6-3709-4363-9423-977b4d32a95b",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2000831721,
        "longitude": 29.8733123826
      }
    },
    "284ebd86-ad48-41a6-9feb-b3e2db42914a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "284ebd86-ad48-41a6-9feb-b3e2db42914a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "284ebd86-ad48-41a6-9feb-b3e2db42914a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1735516466,
        "longitude": 29.8904083702
      }
    },
    "2850113d-39e6-4195-bf0a-8658c357be42": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 24",
        "id": "2850113d-39e6-4195-bf0a-8658c357be42",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2850113d-39e6-4195-bf0a-8658c357be42",
      "image": "perev_right",
      "point": {
        "latitude": 55.2861997689,
        "longitude": 30.2684094696
      }
    },
    "289c0786-82e3-4a53-a4cf-59145ec9885a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 57",
        "id": "289c0786-82e3-4a53-a4cf-59145ec9885a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "289c0786-82e3-4a53-a4cf-59145ec9885a",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1793990773,
        "longitude": 29.7469384542
      }
    },
    "28a67b73-299d-4d7a-8e0b-ffae52e4d2d6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "28a67b73-299d-4d7a-8e0b-ffae52e4d2d6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "28a67b73-299d-4d7a-8e0b-ffae52e4d2d6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1695784386,
        "longitude": 30.161461632
      }
    },
    "28c072e5-5ede-4b81-be4b-349036c1b20e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "28c072e5-5ede-4b81-be4b-349036c1b20e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "28c072e5-5ede-4b81-be4b-349036c1b20e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2388440426,
        "longitude": 29.2328349832
      }
    },
    "292dbd8c-44c7-4a7b-be02-b06897427cca": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 27",
        "id": "292dbd8c-44c7-4a7b-be02-b06897427cca",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "292dbd8c-44c7-4a7b-be02-b06897427cca",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2057922064,
        "longitude": 30.1936236949
      }
    },
    "29f8b9e7-e488-476c-8941-e73b6bd3463e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 600",
        "id": "29f8b9e7-e488-476c-8941-e73b6bd3463e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "29f8b9e7-e488-476c-8941-e73b6bd3463e",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1661772582,
        "longitude": 30.0115676145
      }
    },
    "2ad2866e-9d2f-4200-acce-57163a8c4192": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 35",
        "id": "2ad2866e-9d2f-4200-acce-57163a8c4192",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2ad2866e-9d2f-4200-acce-57163a8c4192",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2381877136,
        "longitude": 30.1255247336
      }
    },
    "2c03281e-4b5d-4ca4-b14e-8a224a106456": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 52",
        "id": "2c03281e-4b5d-4ca4-b14e-8a224a106456",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2c03281e-4b5d-4ca4-b14e-8a224a106456",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1804342422,
        "longitude": 29.7857149113
      }
    },
    "2ccc2b05-d58d-4690-9a3a-d7dafcea5f77": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 555",
        "id": "2ccc2b05-d58d-4690-9a3a-d7dafcea5f77",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2ccc2b05-d58d-4690-9a3a-d7dafcea5f77",
      "image": "kilometrage",
      "point": {
        "latitude": 55.0876669882,
        "longitude": 29.5367772391
      }
    },
    "2d289198-7e95-4f00-a2a8-b6b350f57943": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 650",
        "id": "2d289198-7e95-4f00-a2a8-b6b350f57943",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2d289198-7e95-4f00-a2a8-b6b350f57943",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3719088816,
        "longitude": 30.4427524724
      }
    },
    "2d4f7b8e-5e06-4940-b97a-f790ecc09721": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 22",
        "id": "2d4f7b8e-5e06-4940-b97a-f790ecc09721",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2d4f7b8e-5e06-4940-b97a-f790ecc09721",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1940669036,
        "longitude": 30.1993437127
      }
    },
    "2e260b34-af9a-4e3a-a406-c4211b587bef": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 28",
        "id": "2e260b34-af9a-4e3a-a406-c4211b587bef",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2e260b34-af9a-4e3a-a406-c4211b587bef",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2099677226,
        "longitude": 30.1578884057
      }
    },
    "2e64fea6-1932-40d2-8d88-d4279a769b6c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "2e64fea6-1932-40d2-8d88-d4279a769b6c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2e64fea6-1932-40d2-8d88-d4279a769b6c",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1695320086,
        "longitude": 30.1491141635
      }
    },
    "2e6d52d0-6b9d-468e-b8cb-75f7e15308d2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 30",
        "id": "2e6d52d0-6b9d-468e-b8cb-75f7e15308d2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2e6d52d0-6b9d-468e-b8cb-75f7e15308d2",
      "image": "perev_left",
      "point": {
        "latitude": 55.1436233223,
        "longitude": 29.7369392355
      }
    },
    "2edb63d0-2722-4cfe-8e3c-f42ae09d1dc8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 47",
        "id": "2edb63d0-2722-4cfe-8e3c-f42ae09d1dc8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2edb63d0-2722-4cfe-8e3c-f42ae09d1dc8",
      "image": "perev_right",
      "point": {
        "latitude": 55.1087731472,
        "longitude": 29.5625800285
      }
    },
    "2ef9ebda-c4bb-4d9b-9343-147caf168ed6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "2ef9ebda-c4bb-4d9b-9343-147caf168ed6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2ef9ebda-c4bb-4d9b-9343-147caf168ed6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2700974723,
        "longitude": 30.2142148511
      }
    },
    "2f561fca-2626-4a94-9136-8025b7da33fb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "2f561fca-2626-4a94-9136-8025b7da33fb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "2f561fca-2626-4a94-9136-8025b7da33fb",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1644633284,
        "longitude": 30.0677142867
      }
    },
    "312df654-ef26-4f35-bb16-c9f307be22a0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 510",
        "id": "312df654-ef26-4f35-bb16-c9f307be22a0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "312df654-ef26-4f35-bb16-c9f307be22a0",
      "image": "kilometrage",
      "point": {
        "latitude": 55.260774008,
        "longitude": 29.185378895
      }
    },
    "318102ea-0eb9-4204-b723-7a5977af4ab0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "318102ea-0eb9-4204-b723-7a5977af4ab0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "318102ea-0eb9-4204-b723-7a5977af4ab0",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1795061101,
        "longitude": 30.1955497541
      }
    },
    "31950da5-5ea4-4eac-98e5-db370bb7d672": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "31950da5-5ea4-4eac-98e5-db370bb7d672",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "31950da5-5ea4-4eac-98e5-db370bb7d672",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1666319115,
        "longitude": 30.0916313982
      }
    },
    "31bf6591-57bf-4a8d-a8a6-dd418655f633": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 51",
        "id": "31bf6591-57bf-4a8d-a8a6-dd418655f633",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "31bf6591-57bf-4a8d-a8a6-dd418655f633",
      "image": "perev_right",
      "point": {
        "latitude": 55.0948028686,
        "longitude": 29.5477550994
      }
    },
    "33342ef8-82a8-4403-bdcd-72d404ef249d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 30",
        "id": "33342ef8-82a8-4403-bdcd-72d404ef249d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "33342ef8-82a8-4403-bdcd-72d404ef249d",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1931281041,
        "longitude": 29.8760263095
      }
    },
    "346adc92-5962-48bc-8953-bc0a0f1503ec": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "346adc92-5962-48bc-8953-bc0a0f1503ec",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "346adc92-5962-48bc-8953-bc0a0f1503ec",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0661892919,
        "longitude": 29.4810518826
      }
    },
    "34867621-36ac-40b4-974f-3d224a957075": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "34867621-36ac-40b4-974f-3d224a957075",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "34867621-36ac-40b4-974f-3d224a957075",
      "image": "axis_romb",
      "point": {
        "latitude": 55.2293562174,
        "longitude": 29.2509968874
      }
    },
    "355f01a1-c8e3-4c7d-8684-cdf3749b2ff8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "355f01a1-c8e3-4c7d-8684-cdf3749b2ff8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "355f01a1-c8e3-4c7d-8684-cdf3749b2ff8",
      "image": "name_of",
      "point": {
        "latitude": 55.1721062887,
        "longitude": 30.1861844512
      }
    },
    "35c468e5-e907-4df0-a6ac-6d2560de2ece": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "35c468e5-e907-4df0-a6ac-6d2560de2ece",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "35c468e5-e907-4df0-a6ac-6d2560de2ece",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1687254652,
        "longitude": 30.1623964118
      }
    },
    "35c57d6f-d81a-4df7-829c-3a03c3dbb0f1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "35c57d6f-d81a-4df7-829c-3a03c3dbb0f1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "35c57d6f-d81a-4df7-829c-3a03c3dbb0f1",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1641132226,
        "longitude": 30.132403151
      }
    },
    "3640287a-99e9-4962-ae33-488e1102f3e4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Знак рейда правый передний  ",
        "id": "3640287a-99e9-4962-ae33-488e1102f3e4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3640287a-99e9-4962-ae33-488e1102f3e4",
      "image": "raid_start_right",
      "point": {
        "latitude": 55.1626492231,
        "longitude": 30.1049355523
      }
    },
    "36bb4886-e8e5-440f-846c-d7a444ec1706": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Выход на основной судовой путь  ",
        "id": "36bb4886-e8e5-440f-846c-d7a444ec1706",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "36bb4886-e8e5-440f-846c-d7a444ec1706",
      "image": "main_way",
      "point": {
        "latitude": 55.1632202267,
        "longitude": 30.1026353407
      }
    },
    "371c210d-7361-43a7-907c-f7b80d94f0f2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "371c210d-7361-43a7-907c-f7b80d94f0f2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "371c210d-7361-43a7-907c-f7b80d94f0f2",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1688870946,
        "longitude": 30.1681457952
      }
    },
    "376d7db3-7c22-4260-a895-187340444e5c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 47",
        "id": "376d7db3-7c22-4260-a895-187340444e5c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "376d7db3-7c22-4260-a895-187340444e5c",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1941502008,
        "longitude": 29.8123870147
      }
    },
    "37a5b5ec-ec69-4b1c-b6b1-33ca7d2a81d3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 595",
        "id": "37a5b5ec-ec69-4b1c-b6b1-33ca7d2a81d3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "37a5b5ec-ec69-4b1c-b6b1-33ca7d2a81d3",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1640607043,
        "longitude": 29.9350075134
      }
    },
    "38392b1c-8ef3-4284-b538-7ca241a2f508": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 45",
        "id": "38392b1c-8ef3-4284-b538-7ca241a2f508",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "38392b1c-8ef3-4284-b538-7ca241a2f508",
      "image": "milestone_right",
      "point": {
        "latitude": 55.2025961608,
        "longitude": 29.8244479813
      }
    },
    "39286ed1-1099-47c4-8272-87fc95c3e3ca": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 41",
        "id": "39286ed1-1099-47c4-8272-87fc95c3e3ca",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "39286ed1-1099-47c4-8272-87fc95c3e3ca",
      "image": "perev_left",
      "point": {
        "latitude": 55.126912751,
        "longitude": 29.6374657054
      }
    },
    "39d2342c-5c58-4915-9a98-8c7eba6e37c7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "39d2342c-5c58-4915-9a98-8c7eba6e37c7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "39d2342c-5c58-4915-9a98-8c7eba6e37c7",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.066384529,
        "longitude": 29.4787306771
      }
    },
    "3a01b0a9-f8db-4e11-a1bd-69325f372988": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 31",
        "id": "3a01b0a9-f8db-4e11-a1bd-69325f372988",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3a01b0a9-f8db-4e11-a1bd-69325f372988",
      "image": "perev_right",
      "point": {
        "latitude": 55.1387141175,
        "longitude": 29.7359513737
      }
    },
    "3a3f55f8-2267-4690-8266-3240ddb0011b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 26",
        "id": "3a3f55f8-2267-4690-8266-3240ddb0011b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3a3f55f8-2267-4690-8266-3240ddb0011b",
      "image": "perev_right",
      "point": {
        "latitude": 55.1807493965,
        "longitude": 29.7516945022
      }
    },
    "3a705320-ddfb-4ff4-bfaa-2d33b0a9b5e3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 33",
        "id": "3a705320-ddfb-4ff4-bfaa-2d33b0a9b5e3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3a705320-ddfb-4ff4-bfaa-2d33b0a9b5e3",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2180092373,
        "longitude": 30.1333575353
      }
    },
    "3a8014c9-7aaa-48b2-9ca9-aca995c2f82d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 23",
        "id": "3a8014c9-7aaa-48b2-9ca9-aca995c2f82d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3a8014c9-7aaa-48b2-9ca9-aca995c2f82d",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1637293862,
        "longitude": 29.9472570081
      }
    },
    "3b0beb52-9f59-4743-9169-3af709301d69": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "3b0beb52-9f59-4743-9169-3af709301d69",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3b0beb52-9f59-4743-9169-3af709301d69",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.4066423257,
        "longitude": 30.70031746
      }
    },
    "3b32abc2-d1fd-4092-b4b8-250a31b5f4b6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 63",
        "id": "3b32abc2-d1fd-4092-b4b8-250a31b5f4b6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3b32abc2-d1fd-4092-b4b8-250a31b5f4b6",
      "image": "perev_left",
      "point": {
        "latitude": 55.1113867982,
        "longitude": 29.4436387078
      }
    },
    "3b46c5eb-2930-406f-9cbf-6d137f4a9fef": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "3b46c5eb-2930-406f-9cbf-6d137f4a9fef",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3b46c5eb-2930-406f-9cbf-6d137f4a9fef",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1935164236,
        "longitude": 30.1985881368
      }
    },
    "3bc89d0e-7a4c-4f16-a7ca-a78db6e93b9d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 4п",
        "id": "3bc89d0e-7a4c-4f16-a7ca-a78db6e93b9d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3bc89d0e-7a4c-4f16-a7ca-a78db6e93b9d",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1741732988,
        "longitude": 30.1923470547
      }
    },
    "3c467dfa-e054-404a-b92d-7dca4594e11b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 55",
        "id": "3c467dfa-e054-404a-b92d-7dca4594e11b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3c467dfa-e054-404a-b92d-7dca4594e11b",
      "image": "milestone_left",
      "point": {
        "latitude": 55.180106233,
        "longitude": 29.7551790419
      }
    },
    "3c7e9a7d-4cad-43a3-b400-e0f704f56c54": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 56",
        "id": "3c7e9a7d-4cad-43a3-b400-e0f704f56c54",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3c7e9a7d-4cad-43a3-b400-e0f704f56c54",
      "image": "perev_left",
      "point": {
        "latitude": 55.0596329495,
        "longitude": 29.4765282191
      }
    },
    "3d54f9ba-373d-444a-9e0d-1bd7d70d65c0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 71",
        "id": "3d54f9ba-373d-444a-9e0d-1bd7d70d65c0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3d54f9ba-373d-444a-9e0d-1bd7d70d65c0",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1254899532,
        "longitude": 29.73892115
      }
    },
    "3e8a9537-e96f-46fc-81da-17382b64f1b8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "3e8a9537-e96f-46fc-81da-17382b64f1b8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3e8a9537-e96f-46fc-81da-17382b64f1b8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1121585489,
        "longitude": 29.4468832878
      }
    },
    "3ec27583-9f1d-4e93-beeb-1bf32c86e178": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 20",
        "id": "3ec27583-9f1d-4e93-beeb-1bf32c86e178",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3ec27583-9f1d-4e93-beeb-1bf32c86e178",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1872964612,
        "longitude": 30.1982149022
      }
    },
    "3eef63ff-7990-4eb4-ac5c-57ead26ad9a6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "3eef63ff-7990-4eb4-ac5c-57ead26ad9a6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3eef63ff-7990-4eb4-ac5c-57ead26ad9a6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.177560804,
        "longitude": 29.7462208987
      }
    },
    "3ef0e9a3-cd63-4895-9f13-d23297bbb92c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Знак рейда правый задний  ",
        "id": "3ef0e9a3-cd63-4895-9f13-d23297bbb92c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3ef0e9a3-cd63-4895-9f13-d23297bbb92c",
      "image": "raid_end_right",
      "point": {
        "latitude": 55.1633954017,
        "longitude": 30.1021340918
      }
    },
    "3f367754-df34-4587-8969-e2be1fee3f4a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 22",
        "id": "3f367754-df34-4587-8969-e2be1fee3f4a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "3f367754-df34-4587-8969-e2be1fee3f4a",
      "image": "perev_left",
      "point": {
        "latitude": 55.1829963684,
        "longitude": 29.7978054752
      }
    },
    "401d6e47-b2e1-47f7-b357-65a024f70c0d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 44",
        "id": "401d6e47-b2e1-47f7-b357-65a024f70c0d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "401d6e47-b2e1-47f7-b357-65a024f70c0d",
      "image": "milestone_right",
      "point": {
        "latitude": 55.2067311937,
        "longitude": 29.8320266731
      }
    },
    "402e0590-f747-4762-a742-40fd685bd056": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 41",
        "id": "402e0590-f747-4762-a742-40fd685bd056",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "402e0590-f747-4762-a742-40fd685bd056",
      "image": "perev_right",
      "point": {
        "latitude": 55.4292373379,
        "longitude": 30.5461614975
      }
    },
    "40c5f5b7-8b9f-4a60-b59a-3f17cdf4b7c3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 480",
        "id": "40c5f5b7-8b9f-4a60-b59a-3f17cdf4b7c3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "40c5f5b7-8b9f-4a60-b59a-3f17cdf4b7c3",
      "image": "kilometrage",
      "point": {
        "latitude": 55.4262716055,
        "longitude": 29.0029946963
      }
    },
    "412abcd2-f3fe-4d13-9d20-4f29bb9eeb0d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "412abcd2-f3fe-4d13-9d20-4f29bb9eeb0d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "412abcd2-f3fe-4d13-9d20-4f29bb9eeb0d",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2356635736,
        "longitude": 29.2424260776
      }
    },
    "41a437db-4f84-4290-84fa-e45a40e968d6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 44",
        "id": "41a437db-4f84-4290-84fa-e45a40e968d6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "41a437db-4f84-4290-84fa-e45a40e968d6",
      "image": "perev_right",
      "point": {
        "latitude": 55.4342568187,
        "longitude": 30.6319621958
      }
    },
    "41d902c6-c5ed-4a4e-9ae6-cea2e9f55ef4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "41d902c6-c5ed-4a4e-9ae6-cea2e9f55ef4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "41d902c6-c5ed-4a4e-9ae6-cea2e9f55ef4",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1748190766,
        "longitude": 29.8916201634
      }
    },
    "42738d87-5426-44ab-9d8e-c3890b9326e8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "42738d87-5426-44ab-9d8e-c3890b9326e8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "42738d87-5426-44ab-9d8e-c3890b9326e8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3329313185,
        "longitude": 30.3562569604
      }
    },
    "42bcf648-2485-4cee-9346-f9c2474b33aa": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 17",
        "id": "42bcf648-2485-4cee-9346-f9c2474b33aa",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "42bcf648-2485-4cee-9346-f9c2474b33aa",
      "image": "perev_left",
      "point": {
        "latitude": 55.2115425853,
        "longitude": 29.861416833
      }
    },
    "43a20447-0b4f-4c03-9a05-d1668c74f5d8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "43a20447-0b4f-4c03-9a05-d1668c74f5d8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "43a20447-0b4f-4c03-9a05-d1668c74f5d8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2688449478,
        "longitude": 30.2164522928
      }
    },
    "441c3353-ffa5-4885-997b-25bebffed712": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 45",
        "id": "441c3353-ffa5-4885-997b-25bebffed712",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "441c3353-ffa5-4885-997b-25bebffed712",
      "image": "perev_right",
      "point": {
        "latitude": 55.4266121224,
        "longitude": 30.6465632195
      }
    },
    "453f815d-80d5-49ce-a00e-fa663c7a192c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "453f815d-80d5-49ce-a00e-fa663c7a192c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "453f815d-80d5-49ce-a00e-fa663c7a192c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1929068482,
        "longitude": 30.197665223
      }
    },
    "461d904e-4478-410f-8219-af0b78d8cd90": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 5",
        "id": "461d904e-4478-410f-8219-af0b78d8cd90",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "461d904e-4478-410f-8219-af0b78d8cd90",
      "image": "milestone_left",
      "point": {
        "latitude": 55.158368347,
        "longitude": 30.1215359428
      }
    },
    "47bdaac8-cfca-4d3a-8e1b-18f54b3bcf4e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "47bdaac8-cfca-4d3a-8e1b-18f54b3bcf4e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "47bdaac8-cfca-4d3a-8e1b-18f54b3bcf4e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1934851078,
        "longitude": 30.2000615578
      }
    },
    "47d00d3b-1dc1-4e29-93e0-0dfb15a3457a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "47d00d3b-1dc1-4e29-93e0-0dfb15a3457a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "47d00d3b-1dc1-4e29-93e0-0dfb15a3457a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2131414134,
        "longitude": 29.8585932162
      }
    },
    "47e925b0-baa8-40cb-ab26-7663b385287f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 29",
        "id": "47e925b0-baa8-40cb-ab26-7663b385287f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "47e925b0-baa8-40cb-ab26-7663b385287f",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1856151089,
        "longitude": 29.8773183636
      }
    },
    "489909a5-0bc1-4a56-882f-6bb19d265e3b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 87",
        "id": "489909a5-0bc1-4a56-882f-6bb19d265e3b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "489909a5-0bc1-4a56-882f-6bb19d265e3b",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1275519661,
        "longitude": 29.6316654623
      }
    },
    "493792c8-1923-4f83-b81d-338104154e09": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "493792c8-1923-4f83-b81d-338104154e09",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "493792c8-1923-4f83-b81d-338104154e09",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2298210569,
        "longitude": 29.252196198
      }
    },
    "49bd0e28-9268-4d26-8e7f-7dcf2d774dbf": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "49bd0e28-9268-4d26-8e7f-7dcf2d774dbf",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "49bd0e28-9268-4d26-8e7f-7dcf2d774dbf",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.169656095,
        "longitude": 30.1513933504
      }
    },
    "49cc5e08-6951-408f-acf8-6836b4df84a6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 33",
        "id": "49cc5e08-6951-408f-acf8-6836b4df84a6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "49cc5e08-6951-408f-acf8-6836b4df84a6",
      "image": "perev_left",
      "point": {
        "latitude": 55.3610161237,
        "longitude": 30.4335891412
      }
    },
    "49ed2a20-62fe-4dea-87e6-fdaf0460a36e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "49ed2a20-62fe-4dea-87e6-fdaf0460a36e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "49ed2a20-62fe-4dea-87e6-fdaf0460a36e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3229185663,
        "longitude": 30.3481587203
      }
    },
    "4a3c928b-e7f9-49ae-8477-67c78a8c5fa2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 19",
        "id": "4a3c928b-e7f9-49ae-8477-67c78a8c5fa2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4a3c928b-e7f9-49ae-8477-67c78a8c5fa2",
      "image": "perev_left",
      "point": {
        "latitude": 55.2103904751,
        "longitude": 29.8448078037
      }
    },
    "4af7c461-62a6-42f8-b34a-bfaf6000fc5e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Разделительный буй 1",
        "id": "4af7c461-62a6-42f8-b34a-bfaf6000fc5e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4af7c461-62a6-42f8-b34a-bfaf6000fc5e",
      "image": "buyo_separator",
      "point": {
        "latitude": 55.1644882159,
        "longitude": 30.0995330898
      }
    },
    "4b059767-9e01-4cb6-b251-683c95849014": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4b059767-9e01-4cb6-b251-683c95849014",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4b059767-9e01-4cb6-b251-683c95849014",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1700009493,
        "longitude": 30.1676226268
      }
    },
    "4b09633f-b1b6-4b2d-a5ce-1e14938ee267": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4b09633f-b1b6-4b2d-a5ce-1e14938ee267",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4b09633f-b1b6-4b2d-a5ce-1e14938ee267",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3319785357,
        "longitude": 30.3544994213
      }
    },
    "4b571b37-493a-42ec-b6b7-dfa9d390b9a7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 6п",
        "id": "4b571b37-493a-42ec-b6b7-dfa9d390b9a7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4b571b37-493a-42ec-b6b7-dfa9d390b9a7",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1856333416,
        "longitude": 30.1976803799
      }
    },
    "4b6bd748-d4ba-4304-b6ef-f74db3873d3e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4b6bd748-d4ba-4304-b6ef-f74db3873d3e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4b6bd748-d4ba-4304-b6ef-f74db3873d3e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4201875441,
        "longitude": 29.0188483943
      }
    },
    "4c2d5e1d-0a32-48f0-9797-48ac2f063d3e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 48",
        "id": "4c2d5e1d-0a32-48f0-9797-48ac2f063d3e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4c2d5e1d-0a32-48f0-9797-48ac2f063d3e",
      "image": "milestone_left",
      "point": {
        "latitude": 55.191228307,
        "longitude": 29.809200669
      }
    },
    "4cd444ed-2c07-499e-8e33-89d0195fa7b8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4cd444ed-2c07-499e-8e33-89d0195fa7b8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4cd444ed-2c07-499e-8e33-89d0195fa7b8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2694097141,
        "longitude": 30.2180813314
      }
    },
    "4d166663-b048-48a4-b8ae-480992e3cf75": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4d166663-b048-48a4-b8ae-480992e3cf75",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4d166663-b048-48a4-b8ae-480992e3cf75",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4069287695,
        "longitude": 30.6978501622
      }
    },
    "4d7e8e8b-4a9e-47b7-ab49-80e4351902ec": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 63",
        "id": "4d7e8e8b-4a9e-47b7-ab49-80e4351902ec",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4d7e8e8b-4a9e-47b7-ab49-80e4351902ec",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1665581062,
        "longitude": 29.7331867276
      }
    },
    "4d91f279-ecb5-4663-956b-42b1c960e965": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 66",
        "id": "4d91f279-ecb5-4663-956b-42b1c960e965",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4d91f279-ecb5-4663-956b-42b1c960e965",
      "image": "perev_right",
      "point": {
        "latitude": 55.1912625249,
        "longitude": 29.2760409392
      }
    },
    "4e25444b-c665-47fb-9c92-3b9d3dade453": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 43",
        "id": "4e25444b-c665-47fb-9c92-3b9d3dade453",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4e25444b-c665-47fb-9c92-3b9d3dade453",
      "image": "perev_left",
      "point": {
        "latitude": 55.4375892522,
        "longitude": 30.6193610723
      }
    },
    "4e6435c5-1cb5-4fdd-8ce0-0d7c18391d75": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4e6435c5-1cb5-4fdd-8ce0-0d7c18391d75",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4e6435c5-1cb5-4fdd-8ce0-0d7c18391d75",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2118186783,
        "longitude": 29.8560216549
      }
    },
    "4ede5698-e837-4019-9748-cf1328bfa8ec": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "4ede5698-e837-4019-9748-cf1328bfa8ec",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4ede5698-e837-4019-9748-cf1328bfa8ec",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1639232648,
        "longitude": 30.0156875167
      }
    },
    "4f1989a2-5516-4985-ac77-04a297b5c1e1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "4f1989a2-5516-4985-ac77-04a297b5c1e1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4f1989a2-5516-4985-ac77-04a297b5c1e1",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2025246119,
        "longitude": 30.198547939
      }
    },
    "4f5b8871-e24f-4d82-9ca9-f4f8ec856c95": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "4f5b8871-e24f-4d82-9ca9-f4f8ec856c95",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4f5b8871-e24f-4d82-9ca9-f4f8ec856c95",
      "image": "axis_romb",
      "point": {
        "latitude": 55.3088532468,
        "longitude": 30.3106159496
      }
    },
    "4f74e7db-5fa5-49da-9b90-3eba60789c55": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 81",
        "id": "4f74e7db-5fa5-49da-9b90-3eba60789c55",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "4f74e7db-5fa5-49da-9b90-3eba60789c55",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1143675011,
        "longitude": 29.6893816991
      }
    },
    "5090372e-4afc-4d75-afbe-268a5fd44de6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 57",
        "id": "5090372e-4afc-4d75-afbe-268a5fd44de6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5090372e-4afc-4d75-afbe-268a5fd44de6",
      "image": "perev_right",
      "point": {
        "latitude": 55.0532953527,
        "longitude": 29.4654047585
      }
    },
    "5177019c-adb6-41d7-b75a-624b02dbc1ee": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 21",
        "id": "5177019c-adb6-41d7-b75a-624b02dbc1ee",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5177019c-adb6-41d7-b75a-624b02dbc1ee",
      "image": "perev_right",
      "point": {
        "latitude": 55.1927936946,
        "longitude": 29.8099109808
      }
    },
    "51c434c9-10c7-4d77-888f-67d1910a2582": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "51c434c9-10c7-4d77-888f-67d1910a2582",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "51c434c9-10c7-4d77-888f-67d1910a2582",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.19271541,
        "longitude": 30.199644949
      }
    },
    "522353de-0926-4347-8b30-8a776c90deba": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 3",
        "id": "522353de-0926-4347-8b30-8a776c90deba",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "522353de-0926-4347-8b30-8a776c90deba",
      "image": "perev_right",
      "point": {
        "latitude": 55.1664713643,
        "longitude": 30.0563079577
      }
    },
    "52fae067-138d-40a8-b8d8-3c9e7a2bf423": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "52fae067-138d-40a8-b8d8-3c9e7a2bf423",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "52fae067-138d-40a8-b8d8-3c9e7a2bf423",
      "image": "axis_romb",
      "point": {
        "latitude": 55.3090051859,
        "longitude": 30.3111495576
      }
    },
    "536f1b67-efcc-46bb-941e-d08497d0723c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "536f1b67-efcc-46bb-941e-d08497d0723c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "536f1b67-efcc-46bb-941e-d08497d0723c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.22837433,
        "longitude": 29.2506532152
      }
    },
    "53c2792d-14ff-4727-ba54-69d27892f4d8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "53c2792d-14ff-4727-ba54-69d27892f4d8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "53c2792d-14ff-4727-ba54-69d27892f4d8",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1995022313,
        "longitude": 30.2003500781
      }
    },
    "545632e3-7ba4-4a99-a62f-79b7d9a9e4b9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "545632e3-7ba4-4a99-a62f-79b7d9a9e4b9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "545632e3-7ba4-4a99-a62f-79b7d9a9e4b9",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2221746999,
        "longitude": 30.130384647
      }
    },
    "548ce4d4-6348-4215-8edb-937fad1e93e5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 67",
        "id": "548ce4d4-6348-4215-8edb-937fad1e93e5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "548ce4d4-6348-4215-8edb-937fad1e93e5",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1518076927,
        "longitude": 29.7340679608
      }
    },
    "55586a4a-a492-4fce-aa08-fe24791ac3ea": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 52",
        "id": "55586a4a-a492-4fce-aa08-fe24791ac3ea",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "55586a4a-a492-4fce-aa08-fe24791ac3ea",
      "image": "perev_left",
      "point": {
        "latitude": 55.087654454,
        "longitude": 29.5416993529
      }
    },
    "55d38155-829d-47a9-a2df-6b3c0eaf6535": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "55d38155-829d-47a9-a2df-6b3c0eaf6535",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "55d38155-829d-47a9-a2df-6b3c0eaf6535",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1735890133,
        "longitude": 30.1895456453
      }
    },
    "565954c0-c113-47d1-9ff2-621c0735c18c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 83",
        "id": "565954c0-c113-47d1-9ff2-621c0735c18c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "565954c0-c113-47d1-9ff2-621c0735c18c",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1183097213,
        "longitude": 29.6781880621
      }
    },
    "57a7d314-3dcb-4c73-b835-b18d66c123a7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 630",
        "id": "57a7d314-3dcb-4c73-b835-b18d66c123a7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "57a7d314-3dcb-4c73-b835-b18d66c123a7",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2665246561,
        "longitude": 30.204823242
      }
    },
    "587d379d-edad-4563-9101-3be0fba39056": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 22",
        "id": "587d379d-edad-4563-9101-3be0fba39056",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "587d379d-edad-4563-9101-3be0fba39056",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1647372243,
        "longitude": 29.9512879304
      }
    },
    "58ab6f7a-fc03-486e-856a-59d2cfaed235": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "58ab6f7a-fc03-486e-856a-59d2cfaed235",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "58ab6f7a-fc03-486e-856a-59d2cfaed235",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1879399679,
        "longitude": 30.1987026423
      }
    },
    "58b558c5-b00d-4aba-b414-0d0bd3153e73": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "58b558c5-b00d-4aba-b414-0d0bd3153e73",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "58b558c5-b00d-4aba-b414-0d0bd3153e73",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0673545165,
        "longitude": 29.4307923853
      }
    },
    "59572496-0955-4f88-9679-ffb6480ee873": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Стоповый  ",
        "id": "59572496-0955-4f88-9679-ffb6480ee873",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "59572496-0955-4f88-9679-ffb6480ee873",
      "image": "stop",
      "point": {
        "latitude": 55.2500610977,
        "longitude": 30.1630686569
      }
    },
    "5a1c6a16-d58e-4e13-b381-765e31b9dc18": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 65",
        "id": "5a1c6a16-d58e-4e13-b381-765e31b9dc18",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5a1c6a16-d58e-4e13-b381-765e31b9dc18",
      "image": "milestone_left",
      "point": {
        "latitude": 55.161326697,
        "longitude": 29.73190525
      }
    },
    "5ac695f1-923a-4039-8f4b-82a3e8e01447": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 545",
        "id": "5ac695f1-923a-4039-8f4b-82a3e8e01447",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5ac695f1-923a-4039-8f4b-82a3e8e01447",
      "image": "kilometrage",
      "point": {
        "latitude": 55.0664921045,
        "longitude": 29.4308436581
      }
    },
    "5b69d92c-9424-4c2c-915b-67b09b2b9b1f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "5b69d92c-9424-4c2c-915b-67b09b2b9b1f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5b69d92c-9424-4c2c-915b-67b09b2b9b1f",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1643290358,
        "longitude": 30.068530562
      }
    },
    "5d1ac9b6-f0b9-42cc-bc01-3d1df15b0eef": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 585",
        "id": "5d1ac9b6-f0b9-42cc-bc01-3d1df15b0eef",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5d1ac9b6-f0b9-42cc-bc01-3d1df15b0eef",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2081147018,
        "longitude": 29.8341180109
      }
    },
    "5da1cb17-8e4c-4322-bf3d-12eb6d90298a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 8",
        "id": "5da1cb17-8e4c-4322-bf3d-12eb6d90298a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5da1cb17-8e4c-4322-bf3d-12eb6d90298a",
      "image": "perev_right",
      "point": {
        "latitude": 55.1661995107,
        "longitude": 29.9628428997
      }
    },
    "5e3fbb7c-512c-4aed-a5cb-a419468b81ac": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "5e3fbb7c-512c-4aed-a5cb-a419468b81ac",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5e3fbb7c-512c-4aed-a5cb-a419468b81ac",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2009689,
        "longitude": 30.1997628293
      }
    },
    "5ec5fa97-6af1-4c77-a02e-aeffa536edbb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 46",
        "id": "5ec5fa97-6af1-4c77-a02e-aeffa536edbb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5ec5fa97-6af1-4c77-a02e-aeffa536edbb",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1964898687,
        "longitude": 29.8161840462
      }
    },
    "5eca8be7-5c62-487e-9149-fb13b5b13d98": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "5eca8be7-5c62-487e-9149-fb13b5b13d98",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5eca8be7-5c62-487e-9149-fb13b5b13d98",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1698457706,
        "longitude": 30.1437820589
      }
    },
    "5ff8f8b1-1186-4885-9cad-0ad5b53a0517": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 1",
        "id": "5ff8f8b1-1186-4885-9cad-0ad5b53a0517",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "5ff8f8b1-1186-4885-9cad-0ad5b53a0517",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1612791508,
        "longitude": 30.1056884994
      }
    },
    "60acc1de-5f74-4c7b-9cd1-3c094dc81563": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 485",
        "id": "60acc1de-5f74-4c7b-9cd1-3c094dc81563",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "60acc1de-5f74-4c7b-9cd1-3c094dc81563",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3945464108,
        "longitude": 29.012576279
      }
    },
    "60d32fcf-199e-4423-8a16-607c13659294": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 6",
        "id": "60d32fcf-199e-4423-8a16-607c13659294",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "60d32fcf-199e-4423-8a16-607c13659294",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1655499329,
        "longitude": 30.0818599957
      }
    },
    "61b3cda7-6424-49ec-9763-8189f772ac6e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "61b3cda7-6424-49ec-9763-8189f772ac6e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "61b3cda7-6424-49ec-9763-8189f772ac6e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2649013115,
        "longitude": 29.21359759
      }
    },
    "628e0b06-c1f4-4dc5-9c2a-fbb61878b34e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 53",
        "id": "628e0b06-c1f4-4dc5-9c2a-fbb61878b34e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "628e0b06-c1f4-4dc5-9c2a-fbb61878b34e",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1806996424,
        "longitude": 29.7807648226
      }
    },
    "62e34f1c-f4e9-4167-b2f1-384ab96faded": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 49",
        "id": "62e34f1c-f4e9-4167-b2f1-384ab96faded",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "62e34f1c-f4e9-4167-b2f1-384ab96faded",
      "image": "perev_right",
      "point": {
        "latitude": 55.1017233949,
        "longitude": 29.5563151251
      }
    },
    "6303f121-1c5d-4d25-87df-3b9008260474": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6303f121-1c5d-4d25-87df-3b9008260474",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6303f121-1c5d-4d25-87df-3b9008260474",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1640593508,
        "longitude": 30.0664688261
      }
    },
    "633e7c61-4b87-4684-8569-344fb7bcd81e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 50",
        "id": "633e7c61-4b87-4684-8569-344fb7bcd81e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "633e7c61-4b87-4684-8569-344fb7bcd81e",
      "image": "perev_left",
      "point": {
        "latitude": 55.0987204403,
        "longitude": 29.5561320666
      }
    },
    "6438b4a3-a269-4280-9941-e470b7571451": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 70",
        "id": "6438b4a3-a269-4280-9941-e470b7571451",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6438b4a3-a269-4280-9941-e470b7571451",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1297719106,
        "longitude": 29.7418119694
      }
    },
    "652ddc62-1e54-4b4c-bad3-73a1c7cfc8b8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 79",
        "id": "652ddc62-1e54-4b4c-bad3-73a1c7cfc8b8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "652ddc62-1e54-4b4c-bad3-73a1c7cfc8b8",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1143104123,
        "longitude": 29.694938814
      }
    },
    "661e5ecf-0781-4ab4-8392-ef83d6362bb3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "661e5ecf-0781-4ab4-8392-ef83d6362bb3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "661e5ecf-0781-4ab4-8392-ef83d6362bb3",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2337209673,
        "longitude": 29.2408736413
      }
    },
    "686ea923-ea9d-4dd5-b70c-757147d74527": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 24",
        "id": "686ea923-ea9d-4dd5-b70c-757147d74527",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "686ea923-ea9d-4dd5-b70c-757147d74527",
      "image": "perev_right",
      "point": {
        "latitude": 55.1805214762,
        "longitude": 29.7699514882
      }
    },
    "68b011d6-a1c4-49c3-8598-eb00ddfca3d9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Внимание  ",
        "id": "68b011d6-a1c4-49c3-8598-eb00ddfca3d9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "68b011d6-a1c4-49c3-8598-eb00ddfca3d9",
      "image": "attention",
      "point": {
        "latitude": 55.2517519123,
        "longitude": 30.1775796048
      }
    },
    "68d9387b-450d-475d-acbd-7ecddc98c646": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "68d9387b-450d-475d-acbd-7ecddc98c646",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "68d9387b-450d-475d-acbd-7ecddc98c646",
      "image": "name_of",
      "point": {
        "latitude": 55.1720757242,
        "longitude": 29.9093936305
      }
    },
    "68f70690-34c5-4a10-a8e8-0b7d2088c03b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 35",
        "id": "68f70690-34c5-4a10-a8e8-0b7d2088c03b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "68f70690-34c5-4a10-a8e8-0b7d2088c03b",
      "image": "perev_left",
      "point": {
        "latitude": 55.1113504616,
        "longitude": 29.7115362716
      }
    },
    "6a3a7afb-faf1-4ad8-9498-d98b16240643": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 88",
        "id": "6a3a7afb-faf1-4ad8-9498-d98b16240643",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6a3a7afb-faf1-4ad8-9498-d98b16240643",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1272657957,
        "longitude": 29.6295900569
      }
    },
    "6a8c081d-f2fd-48d9-b669-19246a16d0c0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 38",
        "id": "6a8c081d-f2fd-48d9-b669-19246a16d0c0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6a8c081d-f2fd-48d9-b669-19246a16d0c0",
      "image": "perev_right",
      "point": {
        "latitude": 55.4150244263,
        "longitude": 30.4932442971
      }
    },
    "6a92de08-b4b3-4a93-b5be-f81a18db04dd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Пересечение судового хода  ",
        "id": "6a92de08-b4b3-4a93-b5be-f81a18db04dd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6a92de08-b4b3-4a93-b5be-f81a18db04dd",
      "image": "crossing_way",
      "point": {
        "latitude": 55.4065548892,
        "longitude": 30.7014931376
      }
    },
    "6bc58f0f-eada-4313-b248-e47831e868a9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "6bc58f0f-eada-4313-b248-e47831e868a9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6bc58f0f-eada-4313-b248-e47831e868a9",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.0501316724,
        "longitude": 29.4628742015
      }
    },
    "6c74bc5d-82da-4b30-bea6-781f230b2f2b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 3",
        "id": "6c74bc5d-82da-4b30-bea6-781f230b2f2b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6c74bc5d-82da-4b30-bea6-781f230b2f2b",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1591861892,
        "longitude": 30.1107905155
      }
    },
    "6c893d59-b021-45b1-8f13-3a6a38509e33": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6c893d59-b021-45b1-8f13-3a6a38509e33",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6c893d59-b021-45b1-8f13-3a6a38509e33",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2378952325,
        "longitude": 29.2348055921
      }
    },
    "6cbc2649-54a3-4333-bac8-ec65abb43c0a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6cbc2649-54a3-4333-bac8-ec65abb43c0a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6cbc2649-54a3-4333-bac8-ec65abb43c0a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.112161429,
        "longitude": 29.4438973725
      }
    },
    "6cc530ad-eea3-4446-a920-441a2f852676": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 44",
        "id": "6cc530ad-eea3-4446-a920-441a2f852676",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6cc530ad-eea3-4446-a920-441a2f852676",
      "image": "perev_right",
      "point": {
        "latitude": 55.1238124104,
        "longitude": 29.5889654751
      }
    },
    "6cf711cd-bcae-4801-88af-c2e43b0909b7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 2",
        "id": "6cf711cd-bcae-4801-88af-c2e43b0909b7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6cf711cd-bcae-4801-88af-c2e43b0909b7",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1614188441,
        "longitude": 30.1071911277
      }
    },
    "6d02e137-cd59-4f59-936f-8c56c70a0856": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 1",
        "id": "6d02e137-cd59-4f59-936f-8c56c70a0856",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6d02e137-cd59-4f59-936f-8c56c70a0856",
      "image": "perev_right",
      "point": {
        "latitude": 55.1685599344,
        "longitude": 30.0873139645
      }
    },
    "6df6716d-fc05-46b2-8d5c-deb4656d8c71": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6df6716d-fc05-46b2-8d5c-deb4656d8c71",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6df6716d-fc05-46b2-8d5c-deb4656d8c71",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2291075837,
        "longitude": 29.2485967665
      }
    },
    "6e1fe246-e770-456f-98c4-1d8f8675ad8c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 645",
        "id": "6e1fe246-e770-456f-98c4-1d8f8675ad8c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6e1fe246-e770-456f-98c4-1d8f8675ad8c",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3433261847,
        "longitude": 30.3889871552
      }
    },
    "6e524228-c73b-4f3f-afc1-66318a9fddc0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6e524228-c73b-4f3f-afc1-66318a9fddc0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6e524228-c73b-4f3f-afc1-66318a9fddc0",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1686901843,
        "longitude": 30.1662130405
      }
    },
    "6e5f8196-9a62-4f2b-a4ba-3f54a6089547": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6e5f8196-9a62-4f2b-a4ba-3f54a6089547",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6e5f8196-9a62-4f2b-a4ba-3f54a6089547",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0550606718,
        "longitude": 29.4681762327
      }
    },
    "6e9a5178-c302-4996-92cd-bfb9b3ba4bfd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 28",
        "id": "6e9a5178-c302-4996-92cd-bfb9b3ba4bfd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6e9a5178-c302-4996-92cd-bfb9b3ba4bfd",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1719818379,
        "longitude": 29.8971201339
      }
    },
    "6efc5cbb-a8cc-423a-b932-60e2eacfada6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "6efc5cbb-a8cc-423a-b932-60e2eacfada6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6efc5cbb-a8cc-423a-b932-60e2eacfada6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1786011726,
        "longitude": 29.7444003867
      }
    },
    "6f54989d-d897-450a-8ab0-04a997128e77": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 4",
        "id": "6f54989d-d897-450a-8ab0-04a997128e77",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6f54989d-d897-450a-8ab0-04a997128e77",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1582395869,
        "longitude": 30.1164876086
      }
    },
    "6fb95f5d-18df-4d8a-bbf6-3175d844b0b9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 34",
        "id": "6fb95f5d-18df-4d8a-bbf6-3175d844b0b9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "6fb95f5d-18df-4d8a-bbf6-3175d844b0b9",
      "image": "perev_right",
      "point": {
        "latitude": 55.3724580596,
        "longitude": 30.4435910805
      }
    },
    "7039c3d8-7628-470f-a0e6-a046f7f45295": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "7039c3d8-7628-470f-a0e6-a046f7f45295",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7039c3d8-7628-470f-a0e6-a046f7f45295",
      "image": "axis_romb",
      "point": {
        "latitude": 55.193082425,
        "longitude": 30.1984535658
      }
    },
    "706c77c2-681e-465a-ba97-9daa9670cba1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 14п",
        "id": "706c77c2-681e-465a-ba97-9daa9670cba1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "706c77c2-681e-465a-ba97-9daa9670cba1",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2186673702,
        "longitude": 30.1341367556
      }
    },
    "70c4fafa-96c5-4232-8308-b684c82f5808": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "70c4fafa-96c5-4232-8308-b684c82f5808",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "70c4fafa-96c5-4232-8308-b684c82f5808",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2483696092,
        "longitude": 30.1377811808
      }
    },
    "723d3faa-cc21-43c2-908d-87b414a91d23": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 39",
        "id": "723d3faa-cc21-43c2-908d-87b414a91d23",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "723d3faa-cc21-43c2-908d-87b414a91d23",
      "image": "perev_left",
      "point": {
        "latitude": 55.4158763568,
        "longitude": 30.5079052372
      }
    },
    "726832c8-e810-4b08-bd24-ac336249ff9b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "726832c8-e810-4b08-bd24-ac336249ff9b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "726832c8-e810-4b08-bd24-ac336249ff9b",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1135143434,
        "longitude": 29.4440121546
      }
    },
    "72ea2f5a-51f9-436a-a87a-807d9a9efc62": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Запрещение стоянки судов на якоре или на швартовых у берега  ",
        "id": "72ea2f5a-51f9-436a-a87a-807d9a9efc62",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "72ea2f5a-51f9-436a-a87a-807d9a9efc62",
      "image": "parking_forbidden",
      "point": {
        "latitude": 55.1641115473,
        "longitude": 30.1045482398
      }
    },
    "72f224b8-2169-4781-a667-ac53760e608f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 10",
        "id": "72f224b8-2169-4781-a667-ac53760e608f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "72f224b8-2169-4781-a667-ac53760e608f",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1704523958,
        "longitude": 30.1507051706
      }
    },
    "7304cae5-d280-44d7-ad5c-e3eb68587673": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7304cae5-d280-44d7-ad5c-e3eb68587673",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7304cae5-d280-44d7-ad5c-e3eb68587673",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2062934268,
        "longitude": 30.1926266066
      }
    },
    "73d78757-6192-4df4-8a4b-4353eff306d0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Внимание  ",
        "id": "73d78757-6192-4df4-8a4b-4353eff306d0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "73d78757-6192-4df4-8a4b-4353eff306d0",
      "image": "attention",
      "point": {
        "latitude": 55.2487869991,
        "longitude": 30.1459450802
      }
    },
    "7425106e-686b-4033-95ce-46c61733fa5f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "7425106e-686b-4033-95ce-46c61733fa5f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7425106e-686b-4033-95ce-46c61733fa5f",
      "image": "name_of",
      "point": {
        "latitude": 55.3989274654,
        "longitude": 29.0275009094
      }
    },
    "749fd73c-227f-419c-b8c5-b89ca60ecbd4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "749fd73c-227f-419c-b8c5-b89ca60ecbd4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "749fd73c-227f-419c-b8c5-b89ca60ecbd4",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2679290889,
        "longitude": 30.216778245
      }
    },
    "74a745aa-36f9-417e-b167-3ae6b54c20f6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "74a745aa-36f9-417e-b167-3ae6b54c20f6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "74a745aa-36f9-417e-b167-3ae6b54c20f6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1793357793,
        "longitude": 29.7462076274
      }
    },
    "74d45a87-e161-444a-80eb-b29f0f8ec1a5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 51",
        "id": "74d45a87-e161-444a-80eb-b29f0f8ec1a5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "74d45a87-e161-444a-80eb-b29f0f8ec1a5",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1827672225,
        "longitude": 29.7941729449
      }
    },
    "76717728-69e3-429a-9bc4-13c0c68c88f4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "76717728-69e3-429a-9bc4-13c0c68c88f4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "76717728-69e3-429a-9bc4-13c0c68c88f4",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2225026093,
        "longitude": 30.1281611892
      }
    },
    "77fd5327-253c-440f-a6bf-d66ea51d83e3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "77fd5327-253c-440f-a6bf-d66ea51d83e3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "77fd5327-253c-440f-a6bf-d66ea51d83e3",
      "image": "axis_romb",
      "point": {
        "latitude": 55.2296274096,
        "longitude": 29.250213616
      }
    },
    "782aa1bf-ff6f-44cc-8a43-b5d15287e47c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 29",
        "id": "782aa1bf-ff6f-44cc-8a43-b5d15287e47c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "782aa1bf-ff6f-44cc-8a43-b5d15287e47c",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2101354117,
        "longitude": 30.1534218771
      }
    },
    "78c656b7-cce5-4d7b-81c7-102f3d758b04": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "78c656b7-cce5-4d7b-81c7-102f3d758b04",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "78c656b7-cce5-4d7b-81c7-102f3d758b04",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2348399098,
        "longitude": 29.2398908031
      }
    },
    "79f55ee3-756e-4d6a-8ff4-aca7c0984c3f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "79f55ee3-756e-4d6a-8ff4-aca7c0984c3f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "79f55ee3-756e-4d6a-8ff4-aca7c0984c3f",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1740149492,
        "longitude": 30.1881511559
      }
    },
    "79f665dc-2f90-472c-bebb-8cb989e23d0b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "79f665dc-2f90-472c-bebb-8cb989e23d0b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "79f665dc-2f90-472c-bebb-8cb989e23d0b",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1729639608,
        "longitude": 30.1890612383
      }
    },
    "7ad74da6-a2d7-4f88-8240-771d2d799d90": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 37",
        "id": "7ad74da6-a2d7-4f88-8240-771d2d799d90",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7ad74da6-a2d7-4f88-8240-771d2d799d90",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2104757418,
        "longitude": 29.8651227564
      }
    },
    "7bbe7453-bbc2-4015-a628-8a6696f07be8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7bbe7453-bbc2-4015-a628-8a6696f07be8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7bbe7453-bbc2-4015-a628-8a6696f07be8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3102275872,
        "longitude": 30.3115577667
      }
    },
    "7c494719-2e70-4e18-b4f0-b77c2996e2c7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Запрещение прохода  ",
        "id": "7c494719-2e70-4e18-b4f0-b77c2996e2c7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7c494719-2e70-4e18-b4f0-b77c2996e2c7",
      "image": "passage_forbidden",
      "point": {
        "latitude": 55.4308306079,
        "longitude": 28.9453497594
      }
    },
    "7c794e1c-c701-42cf-a704-3212efb45aaa": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 13",
        "id": "7c794e1c-c701-42cf-a704-3212efb45aaa",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7c794e1c-c701-42cf-a704-3212efb45aaa",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1722930401,
        "longitude": 30.1799932433
      }
    },
    "7c843706-6a62-480f-bd6e-cd9aaf4c138e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7c843706-6a62-480f-bd6e-cd9aaf4c138e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7c843706-6a62-480f-bd6e-cd9aaf4c138e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2485751451,
        "longitude": 30.1401078365
      }
    },
    "7dc3ad89-63d1-47c3-bf38-1c4f84e53d9d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 7",
        "id": "7dc3ad89-63d1-47c3-bf38-1c4f84e53d9d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7dc3ad89-63d1-47c3-bf38-1c4f84e53d9d",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1607053854,
        "longitude": 30.1277833068
      }
    },
    "7e425589-093d-43b3-9e70-9f4339a5ff7f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 40",
        "id": "7e425589-093d-43b3-9e70-9f4339a5ff7f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7e425589-093d-43b3-9e70-9f4339a5ff7f",
      "image": "milestone_left",
      "point": {
        "latitude": 55.2114086337,
        "longitude": 29.8477068823
      }
    },
    "7e4928c3-c922-4b90-96da-def79e2d57b8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 59",
        "id": "7e4928c3-c922-4b90-96da-def79e2d57b8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7e4928c3-c922-4b90-96da-def79e2d57b8",
      "image": "perev_left",
      "point": {
        "latitude": 55.0521980161,
        "longitude": 29.4392692617
      }
    },
    "7e8a13fb-c8cb-452e-aad2-d644810d007e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7e8a13fb-c8cb-452e-aad2-d644810d007e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7e8a13fb-c8cb-452e-aad2-d644810d007e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0544674734,
        "longitude": 29.4354686495
      }
    },
    "7eeb8969-d0e1-417e-a080-326275704d40": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "7eeb8969-d0e1-417e-a080-326275704d40",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7eeb8969-d0e1-417e-a080-326275704d40",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1904024061,
        "longitude": 30.1987013114
      }
    },
    "7f0b4362-623d-4ce3-987f-6945220e3fc5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7f0b4362-623d-4ce3-987f-6945220e3fc5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7f0b4362-623d-4ce3-987f-6945220e3fc5",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0685846252,
        "longitude": 29.4308907892
      }
    },
    "7f3dc1cd-30f0-48f9-8f4d-20f3286b7170": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 36",
        "id": "7f3dc1cd-30f0-48f9-8f4d-20f3286b7170",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7f3dc1cd-30f0-48f9-8f4d-20f3286b7170",
      "image": "buyo_left",
      "point": {
        "latitude": 55.241958405,
        "longitude": 30.1260095896
      }
    },
    "7fc10727-8b71-4a87-b5d9-55c582a4e254": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "7fc10727-8b71-4a87-b5d9-55c582a4e254",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "7fc10727-8b71-4a87-b5d9-55c582a4e254",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1721162921,
        "longitude": 30.1782332386
      }
    },
    "80d442c5-e06a-43d8-a486-8d171ab30b20": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "80d442c5-e06a-43d8-a486-8d171ab30b20",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "80d442c5-e06a-43d8-a486-8d171ab30b20",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1737012257,
        "longitude": 30.1907027927
      }
    },
    "813b2da5-602f-4f64-bbab-079f66b7aa75": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "813b2da5-602f-4f64-bbab-079f66b7aa75",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "813b2da5-602f-4f64-bbab-079f66b7aa75",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2629241502,
        "longitude": 29.2127753154
      }
    },
    "81de0472-11cc-4fd4-9dbc-88d116278aab": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 625",
        "id": "81de0472-11cc-4fd4-9dbc-88d116278aab",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "81de0472-11cc-4fd4-9dbc-88d116278aab",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2494870265,
        "longitude": 30.1373459051
      }
    },
    "81eba890-0749-468c-8a52-5dff4decf813": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Ходовой знак левый 12",
        "id": "81eba890-0749-468c-8a52-5dff4decf813",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "81eba890-0749-468c-8a52-5dff4decf813",
      "image": "running_sign_left",
      "point": {
        "latitude": 55.1766669099,
        "longitude": 29.8844356937
      }
    },
    "82dd9e06-4854-49f6-b1bd-d29213b52df5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "82dd9e06-4854-49f6-b1bd-d29213b52df5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "82dd9e06-4854-49f6-b1bd-d29213b52df5",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2117373791,
        "longitude": 29.8579195064
      }
    },
    "8308bb96-eb95-46c5-8b65-355adc95aca6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 98",
        "id": "8308bb96-eb95-46c5-8b65-355adc95aca6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8308bb96-eb95-46c5-8b65-355adc95aca6",
      "image": "milestone_left",
      "point": {
        "latitude": 55.113977252,
        "longitude": 29.5678825175
      }
    },
    "83c15ff3-288a-4383-942b-79d7d4733cd0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "83c15ff3-288a-4383-942b-79d7d4733cd0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "83c15ff3-288a-4383-942b-79d7d4733cd0",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.243254976,
        "longitude": 30.125621669
      }
    },
    "840c4ca2-4c22-4d03-967b-788c5b21c75a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "840c4ca2-4c22-4d03-967b-788c5b21c75a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "840c4ca2-4c22-4d03-967b-788c5b21c75a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4071801777,
        "longitude": 30.695738293
      }
    },
    "848fe644-93d2-4e8a-970b-d74d69c99361": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "848fe644-93d2-4e8a-970b-d74d69c99361",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "848fe644-93d2-4e8a-970b-d74d69c99361",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1674838265,
        "longitude": 30.0925386038
      }
    },
    "8589322d-0e95-41e5-beab-67d0662e5eed": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8589322d-0e95-41e5-beab-67d0662e5eed",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8589322d-0e95-41e5-beab-67d0662e5eed",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2211641393,
        "longitude": 30.1313999037
      }
    },
    "85c03a94-408a-40b3-8668-fa528a2f7720": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "85c03a94-408a-40b3-8668-fa528a2f7720",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "85c03a94-408a-40b3-8668-fa528a2f7720",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2162050744,
        "longitude": 30.1394944595
      }
    },
    "86d28259-feb4-4135-869f-5f3629696b7b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 60",
        "id": "86d28259-feb4-4135-869f-5f3629696b7b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "86d28259-feb4-4135-869f-5f3629696b7b",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1734429273,
        "longitude": 29.7389384396
      }
    },
    "8822a306-b8f4-419f-86b3-e7cf6d8f9b52": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "8822a306-b8f4-419f-86b3-e7cf6d8f9b52",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8822a306-b8f4-419f-86b3-e7cf6d8f9b52",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1690176302,
        "longitude": 30.166619284
      }
    },
    "8845a68a-34fd-4449-b8d0-5f30630b14f8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 56",
        "id": "8845a68a-34fd-4449-b8d0-5f30630b14f8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8845a68a-34fd-4449-b8d0-5f30630b14f8",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1797412393,
        "longitude": 29.7508757226
      }
    },
    "88af4234-69fd-4dd7-a273-7c08c99a8068": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "88af4234-69fd-4dd7-a273-7c08c99a8068",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "88af4234-69fd-4dd7-a273-7c08c99a8068",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1614603781,
        "longitude": 30.1280720683
      }
    },
    "88d5ce1a-1df5-4c0e-81c5-6365b50138e4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "88d5ce1a-1df5-4c0e-81c5-6365b50138e4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "88d5ce1a-1df5-4c0e-81c5-6365b50138e4",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1712580821,
        "longitude": 29.9031820203
      }
    },
    "88fe97d5-9834-46dd-bdab-4767aa67f7a0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "88fe97d5-9834-46dd-bdab-4767aa67f7a0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "88fe97d5-9834-46dd-bdab-4767aa67f7a0",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1781893126,
        "longitude": 29.7476600636
      }
    },
    "8a85d2f7-f995-48a1-805c-2150d7120330": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8a85d2f7-f995-48a1-805c-2150d7120330",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8a85d2f7-f995-48a1-805c-2150d7120330",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2217211468,
        "longitude": 30.1308198458
      }
    },
    "8aea845c-8c24-45ff-ba09-2383d87e219a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8aea845c-8c24-45ff-ba09-2383d87e219a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8aea845c-8c24-45ff-ba09-2383d87e219a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.168557393,
        "longitude": 30.1639651139
      }
    },
    "8bb3df91-f3ac-44db-adab-fd4cabc06093": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8bb3df91-f3ac-44db-adab-fd4cabc06093",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8bb3df91-f3ac-44db-adab-fd4cabc06093",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1832751744,
        "longitude": 30.1977874929
      }
    },
    "8bbb39f9-319a-489c-a9dd-b035404a6d24": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8bbb39f9-319a-489c-a9dd-b035404a6d24",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8bbb39f9-319a-489c-a9dd-b035404a6d24",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3075915888,
        "longitude": 30.3086430383
      }
    },
    "8bccda3c-51c1-4b70-bc54-cf6cd0fdc042": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 29",
        "id": "8bccda3c-51c1-4b70-bc54-cf6cd0fdc042",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8bccda3c-51c1-4b70-bc54-cf6cd0fdc042",
      "image": "perev_right",
      "point": {
        "latitude": 55.3335602445,
        "longitude": 30.3576462071
      }
    },
    "8c219750-5aaf-415a-a093-b409866e086d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8c219750-5aaf-415a-a093-b409866e086d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8c219750-5aaf-415a-a093-b409866e086d",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1686994078,
        "longitude": 30.1457550636
      }
    },
    "8c3306a7-744f-4d0f-92b3-6ce66aa4ca79": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 91",
        "id": "8c3306a7-744f-4d0f-92b3-6ce66aa4ca79",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8c3306a7-744f-4d0f-92b3-6ce66aa4ca79",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1278003334,
        "longitude": 29.600056409
      }
    },
    "8c86b005-d9c9-43e8-9717-ad31ea2302d4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 7п",
        "id": "8c86b005-d9c9-43e8-9717-ad31ea2302d4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8c86b005-d9c9-43e8-9717-ad31ea2302d4",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1965228948,
        "longitude": 30.1988898388
      }
    },
    "8d06be46-4526-41e4-b4d0-8efb8f843d68": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8d06be46-4526-41e4-b4d0-8efb8f843d68",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8d06be46-4526-41e4-b4d0-8efb8f843d68",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0560000013,
        "longitude": 29.4366670993
      }
    },
    "8d7e4cae-f2e1-4f3b-b40c-45b8022bff8a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8d7e4cae-f2e1-4f3b-b40c-45b8022bff8a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8d7e4cae-f2e1-4f3b-b40c-45b8022bff8a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4218102259,
        "longitude": 29.0205447107
      }
    },
    "8dca322e-10bb-4bab-9f2b-e7aaed11dfd8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 94",
        "id": "8dca322e-10bb-4bab-9f2b-e7aaed11dfd8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8dca322e-10bb-4bab-9f2b-e7aaed11dfd8",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1233637173,
        "longitude": 29.5881865955
      }
    },
    "8dea6c5c-c073-4c13-949f-4616a9a1fee6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "8dea6c5c-c073-4c13-949f-4616a9a1fee6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8dea6c5c-c073-4c13-949f-4616a9a1fee6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0649937004,
        "longitude": 29.4779155995
      }
    },
    "8e4dc1b2-fd41-46c4-bb30-f0a9daa508c5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 13",
        "id": "8e4dc1b2-fd41-46c4-bb30-f0a9daa508c5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8e4dc1b2-fd41-46c4-bb30-f0a9daa508c5",
      "image": "perev_left",
      "point": {
        "latitude": 55.1840535797,
        "longitude": 29.8775685872
      }
    },
    "8e740890-4467-4cbc-b9e2-90cb4dbde4af": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 46",
        "id": "8e740890-4467-4cbc-b9e2-90cb4dbde4af",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8e740890-4467-4cbc-b9e2-90cb4dbde4af",
      "image": "perev_left",
      "point": {
        "latitude": 55.4221150132,
        "longitude": 30.6445657991
      }
    },
    "8eef9e44-40be-4349-80d6-60158df0d283": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 74",
        "id": "8eef9e44-40be-4349-80d6-60158df0d283",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8eef9e44-40be-4349-80d6-60158df0d283",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1136636892,
        "longitude": 29.7233283503
      }
    },
    "8ef808b9-4de3-4b18-a7b3-92d72b5ff0d7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 10",
        "id": "8ef808b9-4de3-4b18-a7b3-92d72b5ff0d7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8ef808b9-4de3-4b18-a7b3-92d72b5ff0d7",
      "image": "perev_right",
      "point": {
        "latitude": 55.1724860866,
        "longitude": 29.9079590881
      }
    },
    "8fe663b0-6c52-4ece-980e-fc910e7cd957": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 34",
        "id": "8fe663b0-6c52-4ece-980e-fc910e7cd957",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "8fe663b0-6c52-4ece-980e-fc910e7cd957",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2201693215,
        "longitude": 30.1315533334
      }
    },
    "914dd344-2716-43a5-abdc-90325015fc1f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 42",
        "id": "914dd344-2716-43a5-abdc-90325015fc1f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "914dd344-2716-43a5-abdc-90325015fc1f",
      "image": "perev_right",
      "point": {
        "latitude": 55.1294717781,
        "longitude": 29.6077598198
      }
    },
    "91e81b80-32f9-4e38-ae13-281d21dff3bf": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 16",
        "id": "91e81b80-32f9-4e38-ae13-281d21dff3bf",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "91e81b80-32f9-4e38-ae13-281d21dff3bf",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1729280383,
        "longitude": 30.1872324583
      }
    },
    "928295bc-5637-47e5-8564-a31676b57639": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 45",
        "id": "928295bc-5637-47e5-8564-a31676b57639",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "928295bc-5637-47e5-8564-a31676b57639",
      "image": "perev_right",
      "point": {
        "latitude": 55.117844696,
        "longitude": 29.5728238938
      }
    },
    "92ab3e15-b989-44ed-88cf-fd142bd2e127": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 76",
        "id": "92ab3e15-b989-44ed-88cf-fd142bd2e127",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "92ab3e15-b989-44ed-88cf-fd142bd2e127",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1115625677,
        "longitude": 29.7130575709
      }
    },
    "93b9015d-2e9e-4f81-99b7-ef8ed3052bb1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 68",
        "id": "93b9015d-2e9e-4f81-99b7-ef8ed3052bb1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "93b9015d-2e9e-4f81-99b7-ef8ed3052bb1",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1419439998,
        "longitude": 29.7370428806
      }
    },
    "94957582-f3a9-431f-8637-3dc6eb328ba6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 15п",
        "id": "94957582-f3a9-431f-8637-3dc6eb328ba6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "94957582-f3a9-431f-8637-3dc6eb328ba6",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2199199701,
        "longitude": 30.1305183368
      }
    },
    "94a3551f-5bae-4447-ad5f-03a355f6be29": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 25",
        "id": "94a3551f-5bae-4447-ad5f-03a355f6be29",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "94a3551f-5bae-4447-ad5f-03a355f6be29",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2011000953,
        "longitude": 30.1993176356
      }
    },
    "9500cbd6-7ca3-4804-a3c9-5241441fba05": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9500cbd6-7ca3-4804-a3c9-5241441fba05",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9500cbd6-7ca3-4804-a3c9-5241441fba05",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1732176938,
        "longitude": 30.1774127105
      }
    },
    "95988796-9710-4d1f-a900-6e241cb16618": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "95988796-9710-4d1f-a900-6e241cb16618",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "95988796-9710-4d1f-a900-6e241cb16618",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2487358784,
        "longitude": 30.1568445498
      }
    },
    "968f949b-171d-4cfa-ae83-6ef66498d8fa": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 53",
        "id": "968f949b-171d-4cfa-ae83-6ef66498d8fa",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "968f949b-171d-4cfa-ae83-6ef66498d8fa",
      "image": "perev_right",
      "point": {
        "latitude": 55.0847341406,
        "longitude": 29.5256678059
      }
    },
    "9691c672-3125-4ef1-b71c-36e38696e8f8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 67",
        "id": "9691c672-3125-4ef1-b71c-36e38696e8f8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9691c672-3125-4ef1-b71c-36e38696e8f8",
      "image": "perev_left",
      "point": {
        "latitude": 55.1932605748,
        "longitude": 29.2643873047
      }
    },
    "969d3205-7e10-4ed0-a489-9ce1ded06d11": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "969d3205-7e10-4ed0-a489-9ce1ded06d11",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "969d3205-7e10-4ed0-a489-9ce1ded06d11",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0550227209,
        "longitude": 29.4378625313
      }
    },
    "96e9722b-035b-442b-be36-6a20417857b6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 20п",
        "id": "96e9722b-035b-442b-be36-6a20417857b6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "96e9722b-035b-442b-be36-6a20417857b6",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2496923429,
        "longitude": 30.1453890345
      }
    },
    "970b7b4e-ed27-41c6-b619-31a6b737e710": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 43",
        "id": "970b7b4e-ed27-41c6-b619-31a6b737e710",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "970b7b4e-ed27-41c6-b619-31a6b737e710",
      "image": "milestone_right",
      "point": {
        "latitude": 55.2093171076,
        "longitude": 29.8384706544
      }
    },
    "976e6a09-f444-4663-903e-d2b7887b0670": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "976e6a09-f444-4663-903e-d2b7887b0670",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "976e6a09-f444-4663-903e-d2b7887b0670",
      "image": "name_of",
      "point": {
        "latitude": 55.3471017511,
        "longitude": 28.9986346843
      }
    },
    "97772ba9-e832-4c31-8f7f-d73ee6871747": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "97772ba9-e832-4c31-8f7f-d73ee6871747",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "97772ba9-e832-4c31-8f7f-d73ee6871747",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2435181473,
        "longitude": 30.128064492
      }
    },
    "97ebecf0-e63f-404f-a25d-4f8577d51745": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 6",
        "id": "97ebecf0-e63f-404f-a25d-4f8577d51745",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "97ebecf0-e63f-404f-a25d-4f8577d51745",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1596342669,
        "longitude": 30.1244780377
      }
    },
    "991d4be4-ad59-4a2b-902d-5bdf51f279a2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 4",
        "id": "991d4be4-ad59-4a2b-902d-5bdf51f279a2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "991d4be4-ad59-4a2b-902d-5bdf51f279a2",
      "image": "perev_right",
      "point": {
        "latitude": 55.1663251692,
        "longitude": 30.0028542677
      }
    },
    "9a1691e9-56d8-4adf-834b-fe636515005a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Ходовой знак левый 48",
        "id": "9a1691e9-56d8-4adf-834b-fe636515005a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9a1691e9-56d8-4adf-834b-fe636515005a",
      "image": "running_sign_left",
      "point": {
        "latitude": 55.4085001973,
        "longitude": 30.665789468
      }
    },
    "9a5c068d-87f8-4a52-be21-5990fffe4a78": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 95",
        "id": "9a5c068d-87f8-4a52-be21-5990fffe4a78",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9a5c068d-87f8-4a52-be21-5990fffe4a78",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1201628867,
        "longitude": 29.5792371639
      }
    },
    "9a94746f-9475-4b83-a4cc-a4aac07996fd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9a94746f-9475-4b83-a4cc-a4aac07996fd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9a94746f-9475-4b83-a4cc-a4aac07996fd",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.308205304,
        "longitude": 30.3107494739
      }
    },
    "9a96f320-d236-4410-87b6-45f2dac2cc37": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9a96f320-d236-4410-87b6-45f2dac2cc37",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9a96f320-d236-4410-87b6-45f2dac2cc37",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1648668297,
        "longitude": 30.0693643376
      }
    },
    "9b4f81fe-8fe7-4930-8aba-89a91ce2dde3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9b4f81fe-8fe7-4930-8aba-89a91ce2dde3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9b4f81fe-8fe7-4930-8aba-89a91ce2dde3",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1722205857,
        "longitude": 30.1803015036
      }
    },
    "9b8e1517-542b-400f-9473-0ff724b599f7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 550",
        "id": "9b8e1517-542b-400f-9473-0ff724b599f7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9b8e1517-542b-400f-9473-0ff724b599f7",
      "image": "kilometrage",
      "point": {
        "latitude": 55.0632764751,
        "longitude": 29.4770134155
      }
    },
    "9bd1dcbb-be0e-4c30-aab1-b2fe50171610": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 30",
        "id": "9bd1dcbb-be0e-4c30-aab1-b2fe50171610",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9bd1dcbb-be0e-4c30-aab1-b2fe50171610",
      "image": "perev_left",
      "point": {
        "latitude": 55.3378142227,
        "longitude": 30.381532104
      }
    },
    "9c5aa13f-084b-4225-aa05-17252dfc58fb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "9c5aa13f-084b-4225-aa05-17252dfc58fb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9c5aa13f-084b-4225-aa05-17252dfc58fb",
      "image": "axis_romb",
      "point": {
        "latitude": 55.184077644,
        "longitude": 30.1976276602
      }
    },
    "9c6e3de8-fdc9-4495-b294-0fdd2c26160f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9c6e3de8-fdc9-4495-b294-0fdd2c26160f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9c6e3de8-fdc9-4495-b294-0fdd2c26160f",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1845073501,
        "longitude": 30.1969796973
      }
    },
    "9cc13824-5de9-4519-a0fc-e13814965536": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 15",
        "id": "9cc13824-5de9-4519-a0fc-e13814965536",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9cc13824-5de9-4519-a0fc-e13814965536",
      "image": "buyo_left",
      "point": {
        "latitude": 55.163732209,
        "longitude": 29.9958431623
      }
    },
    "9d28cf42-952b-4f96-9541-92cbffadab21": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 35",
        "id": "9d28cf42-952b-4f96-9541-92cbffadab21",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9d28cf42-952b-4f96-9541-92cbffadab21",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2007160746,
        "longitude": 29.8745429945
      }
    },
    "9d7b7be9-252c-439c-9aa6-37c053d9238c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 11",
        "id": "9d7b7be9-252c-439c-9aa6-37c053d9238c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9d7b7be9-252c-439c-9aa6-37c053d9238c",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1702503718,
        "longitude": 30.1701741212
      }
    },
    "9e006673-e3e7-4cdf-ba82-8195c874b99a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "9e006673-e3e7-4cdf-ba82-8195c874b99a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9e006673-e3e7-4cdf-ba82-8195c874b99a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1697123899,
        "longitude": 30.1659172647
      }
    },
    "9e0eb14f-3775-4c48-8960-287aee5e573d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 19п",
        "id": "9e0eb14f-3775-4c48-8960-287aee5e573d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9e0eb14f-3775-4c48-8960-287aee5e573d",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2469383567,
        "longitude": 30.1304371657
      }
    },
    "9f0e57b2-1b02-4282-9db6-e60867b26c87": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 62",
        "id": "9f0e57b2-1b02-4282-9db6-e60867b26c87",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9f0e57b2-1b02-4282-9db6-e60867b26c87",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1697289669,
        "longitude": 29.7349054766
      }
    },
    "9f20cf6b-f935-41f9-85a4-f1ffdae8082e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 27",
        "id": "9f20cf6b-f935-41f9-85a4-f1ffdae8082e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9f20cf6b-f935-41f9-85a4-f1ffdae8082e",
      "image": "perev_left",
      "point": {
        "latitude": 55.3188052683,
        "longitude": 30.3407224668
      }
    },
    "9f466b50-f2df-45c1-9107-5bb83e782ba0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 72",
        "id": "9f466b50-f2df-45c1-9107-5bb83e782ba0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9f466b50-f2df-45c1-9107-5bb83e782ba0",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1185844312,
        "longitude": 29.735321769
      }
    },
    "9fd9fc02-68a2-4d61-b133-cea88d51f508": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "9fd9fc02-68a2-4d61-b133-cea88d51f508",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "9fd9fc02-68a2-4d61-b133-cea88d51f508",
      "image": "name_of",
      "point": {
        "latitude": 55.3590454846,
        "longitude": 28.9917512104
      }
    },
    "a0970145-c9a7-4fc8-86a6-feb297691a00": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 15",
        "id": "a0970145-c9a7-4fc8-86a6-feb297691a00",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a0970145-c9a7-4fc8-86a6-feb297691a00",
      "image": "perev_left",
      "point": {
        "latitude": 55.2076344511,
        "longitude": 29.8675117068
      }
    },
    "a1661a8d-4dc2-4cfc-ab53-93fe79fca20e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 54",
        "id": "a1661a8d-4dc2-4cfc-ab53-93fe79fca20e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a1661a8d-4dc2-4cfc-ab53-93fe79fca20e",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1799205941,
        "longitude": 29.7776969996
      }
    },
    "a17081c8-54a9-40d0-ba6b-95eec466caf9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Пост судоходной инспекции  ",
        "id": "a17081c8-54a9-40d0-ba6b-95eec466caf9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a17081c8-54a9-40d0-ba6b-95eec466caf9",
      "image": "shipping_post",
      "point": {
        "latitude": 55.1628385886,
        "longitude": 30.1041910333
      }
    },
    "a19eb1ce-acbe-4ec8-91b7-98d9e8b7d9ec": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 580",
        "id": "a19eb1ce-acbe-4ec8-91b7-98d9e8b7d9ec",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a19eb1ce-acbe-4ec8-91b7-98d9e8b7d9ec",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1811197488,
        "longitude": 29.7767781843
      }
    },
    "a1c8711b-d26f-471f-b3bf-0f6ab034d371": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 27",
        "id": "a1c8711b-d26f-471f-b3bf-0f6ab034d371",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a1c8711b-d26f-471f-b3bf-0f6ab034d371",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1722647783,
        "longitude": 29.90481002
      }
    },
    "a1c8f707-d774-4904-abea-0133ed5acd11": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 21п",
        "id": "a1c8f707-d774-4904-abea-0133ed5acd11",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a1c8f707-d774-4904-abea-0133ed5acd11",
      "image": "buyo_left",
      "point": {
        "latitude": 55.248887552,
        "longitude": 30.1536868826
      }
    },
    "a1cb0a21-d456-440a-8a87-0d3c855ea314": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a1cb0a21-d456-440a-8a87-0d3c855ea314",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a1cb0a21-d456-440a-8a87-0d3c855ea314",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3289485255,
        "longitude": 30.3511398903
      }
    },
    "a270b05c-7d5f-44b8-90e3-4ee2f322e70c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a270b05c-7d5f-44b8-90e3-4ee2f322e70c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a270b05c-7d5f-44b8-90e3-4ee2f322e70c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.167230773,
        "longitude": 30.0899580972
      }
    },
    "a29ffe80-2c32-4455-a8c0-0553a4f631e8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a29ffe80-2c32-4455-a8c0-0553a4f631e8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a29ffe80-2c32-4455-a8c0-0553a4f631e8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0524217127,
        "longitude": 29.4671355784
      }
    },
    "a2fb941f-ace5-4d54-b0bc-5c88aa7b74f9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 93",
        "id": "a2fb941f-ace5-4d54-b0bc-5c88aa7b74f9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a2fb941f-ace5-4d54-b0bc-5c88aa7b74f9",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1241029616,
        "longitude": 29.5923873008
      }
    },
    "a398132f-fb06-4c21-a35e-102e055ad6bf": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a398132f-fb06-4c21-a35e-102e055ad6bf",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a398132f-fb06-4c21-a35e-102e055ad6bf",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2227800455,
        "longitude": 30.1298249205
      }
    },
    "a3e744e9-13ca-4d34-bc4e-33abcddd8c70": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 36",
        "id": "a3e744e9-13ca-4d34-bc4e-33abcddd8c70",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a3e744e9-13ca-4d34-bc4e-33abcddd8c70",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2034890715,
        "longitude": 29.8732993811
      }
    },
    "a4b6acbd-077f-4bb7-bcc8-bb251a5c07a2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "a4b6acbd-077f-4bb7-bcc8-bb251a5c07a2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a4b6acbd-077f-4bb7-bcc8-bb251a5c07a2",
      "image": "name_of",
      "point": {
        "latitude": 55.0581734956,
        "longitude": 29.4750395702
      }
    },
    "a4c10cee-a43c-4a95-9b45-38687ad8fc38": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a4c10cee-a43c-4a95-9b45-38687ad8fc38",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a4c10cee-a43c-4a95-9b45-38687ad8fc38",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3223138707,
        "longitude": 30.3463331176
      }
    },
    "a4c5ce85-2c4d-48a0-a099-9d02251f1d9d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 99",
        "id": "a4c5ce85-2c4d-48a0-a099-9d02251f1d9d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a4c5ce85-2c4d-48a0-a099-9d02251f1d9d",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1120343762,
        "longitude": 29.5648932866
      }
    },
    "a50e8375-b462-4a05-8832-27c30c0e6d53": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 38",
        "id": "a50e8375-b462-4a05-8832-27c30c0e6d53",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a50e8375-b462-4a05-8832-27c30c0e6d53",
      "image": "perev_left",
      "point": {
        "latitude": 55.1212314944,
        "longitude": 29.6687776923
      }
    },
    "a514fa95-8ec5-460a-97f4-f3c0966309e0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 23",
        "id": "a514fa95-8ec5-460a-97f4-f3c0966309e0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a514fa95-8ec5-460a-97f4-f3c0966309e0",
      "image": "perev_left",
      "point": {
        "latitude": 55.2785530411,
        "longitude": 30.2494669229
      }
    },
    "a578fa81-eaad-4fe7-88d9-35d706ab2b1d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 665",
        "id": "a578fa81-eaad-4fe7-88d9-35d706ab2b1d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a578fa81-eaad-4fe7-88d9-35d706ab2b1d",
      "image": "kilometrage",
      "point": {
        "latitude": 55.4376491453,
        "longitude": 30.6219011443
      }
    },
    "a5d3ab36-a6a2-4154-96ba-e49fca0852ba": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a5d3ab36-a6a2-4154-96ba-e49fca0852ba",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a5d3ab36-a6a2-4154-96ba-e49fca0852ba",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2391342142,
        "longitude": 29.2369496383
      }
    },
    "a675b851-b121-49d6-a207-a65475db3c54": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 36",
        "id": "a675b851-b121-49d6-a207-a65475db3c54",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a675b851-b121-49d6-a207-a65475db3c54",
      "image": "perev_right",
      "point": {
        "latitude": 55.1154186751,
        "longitude": 29.6882751201
      }
    },
    "a6821111-891d-406f-8ae1-7e8d8ebe6d18": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 82",
        "id": "a6821111-891d-406f-8ae1-7e8d8ebe6d18",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a6821111-891d-406f-8ae1-7e8d8ebe6d18",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1156429526,
        "longitude": 29.6822588596
      }
    },
    "a74106e2-939d-40aa-a192-77beeec07c10": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a74106e2-939d-40aa-a192-77beeec07c10",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a74106e2-939d-40aa-a192-77beeec07c10",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2487690796,
        "longitude": 30.1550470257
      }
    },
    "a7aa3b84-4fd6-43aa-9089-63af4d935a97": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a7aa3b84-4fd6-43aa-9089-63af4d935a97",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a7aa3b84-4fd6-43aa-9089-63af4d935a97",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3095903107,
        "longitude": 30.3087571866
      }
    },
    "a7bbb7c3-d81f-4439-b6d8-02541d9d7869": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 29",
        "id": "a7bbb7c3-d81f-4439-b6d8-02541d9d7869",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a7bbb7c3-d81f-4439-b6d8-02541d9d7869",
      "image": "perev_left",
      "point": {
        "latitude": 55.1512978054,
        "longitude": 29.7346221072
      }
    },
    "a7de765c-1847-41bf-997c-3fdc10adc46d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 89",
        "id": "a7de765c-1847-41bf-997c-3fdc10adc46d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a7de765c-1847-41bf-997c-3fdc10adc46d",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1276910803,
        "longitude": 29.6213923588
      }
    },
    "a8565309-52f0-4162-a644-1f7f8cc8fc1e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "a8565309-52f0-4162-a644-1f7f8cc8fc1e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a8565309-52f0-4162-a644-1f7f8cc8fc1e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2305090047,
        "longitude": 29.2503425456
      }
    },
    "a8add66a-c7c0-465a-abce-22d9ea788adf": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 7",
        "id": "a8add66a-c7c0-465a-abce-22d9ea788adf",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a8add66a-c7c0-465a-abce-22d9ea788adf",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1636970962,
        "longitude": 30.0758204915
      }
    },
    "a8c53fa0-0df8-4921-8b72-7ef7ebd52bbc": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 16",
        "id": "a8c53fa0-0df8-4921-8b72-7ef7ebd52bbc",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a8c53fa0-0df8-4921-8b72-7ef7ebd52bbc",
      "image": "perev_right",
      "point": {
        "latitude": 55.2116548031,
        "longitude": 29.8654353727
      }
    },
    "a8d3e2fd-8112-4732-ae06-c35597ba39d1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 9",
        "id": "a8d3e2fd-8112-4732-ae06-c35597ba39d1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a8d3e2fd-8112-4732-ae06-c35597ba39d1",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1651095998,
        "longitude": 30.0663868057
      }
    },
    "a8e432d9-ea21-4ec7-80e0-fa1218aad8e2": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "a8e432d9-ea21-4ec7-80e0-fa1218aad8e2",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a8e432d9-ea21-4ec7-80e0-fa1218aad8e2",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1783585165,
        "longitude": 30.1954636097
      }
    },
    "a97d74ba-9956-4d7e-95a1-36fb84c9aa5d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 18",
        "id": "a97d74ba-9956-4d7e-95a1-36fb84c9aa5d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a97d74ba-9956-4d7e-95a1-36fb84c9aa5d",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1648337255,
        "longitude": 29.9787858206
      }
    },
    "a9c0bc51-02bb-4d3d-9ba2-c1204c288dfb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 530",
        "id": "a9c0bc51-02bb-4d3d-9ba2-c1204c288dfb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "a9c0bc51-02bb-4d3d-9ba2-c1204c288dfb",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1333403769,
        "longitude": 29.3249375827
      }
    },
    "aa824102-4338-4f56-9185-e6dd98c6065f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 12",
        "id": "aa824102-4338-4f56-9185-e6dd98c6065f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "aa824102-4338-4f56-9185-e6dd98c6065f",
      "image": "milestone_left",
      "point": {
        "latitude": 55.164397554,
        "longitude": 30.0512583744
      }
    },
    "aafbd610-aae7-491e-8040-9b31f733432e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "aafbd610-aae7-491e-8040-9b31f733432e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "aafbd610-aae7-491e-8040-9b31f733432e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2069524933,
        "longitude": 30.1914319471
      }
    },
    "ab4c6605-5120-429c-9d6f-6a78b196e203": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "ab4c6605-5120-429c-9d6f-6a78b196e203",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ab4c6605-5120-429c-9d6f-6a78b196e203",
      "image": "name_of",
      "point": {
        "latitude": 55.2362285243,
        "longitude": 29.2377420642
      }
    },
    "ab7852ce-182f-44e9-88dc-9d55d2abcd8a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ab7852ce-182f-44e9-88dc-9d55d2abcd8a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ab7852ce-182f-44e9-88dc-9d55d2abcd8a",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3087362924,
        "longitude": 30.3127186169
      }
    },
    "abc441c9-35df-4b82-8708-c3324f63f61a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 43",
        "id": "abc441c9-35df-4b82-8708-c3324f63f61a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "abc441c9-35df-4b82-8708-c3324f63f61a",
      "image": "perev_left",
      "point": {
        "latitude": 55.1271680566,
        "longitude": 29.5990143023
      }
    },
    "abfae9a0-c904-4c28-94e3-8308ec7b4190": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 14",
        "id": "abfae9a0-c904-4c28-94e3-8308ec7b4190",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "abfae9a0-c904-4c28-94e3-8308ec7b4190",
      "image": "buyo_right",
      "point": {
        "latitude": 55.164629019,
        "longitude": 29.9988515142
      }
    },
    "ac405509-4a97-4aa7-9315-2f6969341a8e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 65",
        "id": "ac405509-4a97-4aa7-9315-2f6969341a8e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ac405509-4a97-4aa7-9315-2f6969341a8e",
      "image": "perev_right",
      "point": {
        "latitude": 55.1249459943,
        "longitude": 29.3770976026
      }
    },
    "ace9ab83-35cb-45f1-bb02-e53175c57000": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ace9ab83-35cb-45f1-bb02-e53175c57000",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ace9ab83-35cb-45f1-bb02-e53175c57000",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2212831395,
        "longitude": 30.1289889865
      }
    },
    "ad18bd12-7cdc-412e-a6d2-f1f69c7e7cfb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ad18bd12-7cdc-412e-a6d2-f1f69c7e7cfb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ad18bd12-7cdc-412e-a6d2-f1f69c7e7cfb",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3091021302,
        "longitude": 30.3068487848
      }
    },
    "ad298158-f140-497a-be29-174d950fe4ab": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 32",
        "id": "ad298158-f140-497a-be29-174d950fe4ab",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ad298158-f140-497a-be29-174d950fe4ab",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2179248336,
        "longitude": 30.1348124249
      }
    },
    "adb61d9b-eca8-41ae-bcec-f241f80cb74d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "adb61d9b-eca8-41ae-bcec-f241f80cb74d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "adb61d9b-eca8-41ae-bcec-f241f80cb74d",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.4067989831,
        "longitude": 30.6988099298
      }
    },
    "adf1eb9f-2013-474a-be42-93992589cda5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "adf1eb9f-2013-474a-be42-93992589cda5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "adf1eb9f-2013-474a-be42-93992589cda5",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2509228843,
        "longitude": 30.1572103055
      }
    },
    "ae47e989-d3eb-4a75-af68-2bfe720c0ca5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 20",
        "id": "ae47e989-d3eb-4a75-af68-2bfe720c0ca5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ae47e989-d3eb-4a75-af68-2bfe720c0ca5",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1648546351,
        "longitude": 29.9692339402
      }
    },
    "af5317e8-fc1b-4f4c-90bf-4287281a1dfd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 58",
        "id": "af5317e8-fc1b-4f4c-90bf-4287281a1dfd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "af5317e8-fc1b-4f4c-90bf-4287281a1dfd",
      "image": "perev_left",
      "point": {
        "latitude": 55.0491921268,
        "longitude": 29.4588939506
      }
    },
    "afd88c28-3582-4aba-ae5e-7cf23b76c27b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 535",
        "id": "afd88c28-3582-4aba-ae5e-7cf23b76c27b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "afd88c28-3582-4aba-ae5e-7cf23b76c27b",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1259014916,
        "longitude": 29.3877472708
      }
    },
    "b001d876-3c02-4863-83af-c4bd47402fa6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 1п",
        "id": "b001d876-3c02-4863-83af-c4bd47402fa6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b001d876-3c02-4863-83af-c4bd47402fa6",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1586491329,
        "longitude": 30.1232791405
      }
    },
    "b1eeb737-aeda-4641-b768-f2eeaab228e0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 85",
        "id": "b1eeb737-aeda-4641-b768-f2eeaab228e0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b1eeb737-aeda-4641-b768-f2eeaab228e0",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1285851765,
        "longitude": 29.6420211593
      }
    },
    "b2e6d0dc-d4ee-412c-bef9-3cc48d502106": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 505",
        "id": "b2e6d0dc-d4ee-412c-bef9-3cc48d502106",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b2e6d0dc-d4ee-412c-bef9-3cc48d502106",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2543439476,
        "longitude": 29.1235720141
      }
    },
    "b2f9ae4f-cd84-4e15-a218-8a2147301df1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 11",
        "id": "b2f9ae4f-cd84-4e15-a218-8a2147301df1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b2f9ae4f-cd84-4e15-a218-8a2147301df1",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1657451014,
        "longitude": 30.0575769545
      }
    },
    "b3135dab-3eed-4113-a9c9-0a6e7a139c4e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "b3135dab-3eed-4113-a9c9-0a6e7a139c4e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b3135dab-3eed-4113-a9c9-0a6e7a139c4e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0673788618,
        "longitude": 29.4287678111
      }
    },
    "b35cf757-89ff-4c03-88c7-313a9a69ab22": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "b35cf757-89ff-4c03-88c7-313a9a69ab22",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b35cf757-89ff-4c03-88c7-313a9a69ab22",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1667408089,
        "longitude": 30.1405750334
      }
    },
    "b38a2540-1bc9-4a30-a83f-b4db68793bac": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 10",
        "id": "b38a2540-1bc9-4a30-a83f-b4db68793bac",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b38a2540-1bc9-4a30-a83f-b4db68793bac",
      "image": "perev_left",
      "point": {
        "latitude": 55.2087947491,
        "longitude": 30.1839472197
      }
    },
    "b446469b-6447-4592-9441-bd9068aa15ad": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 495",
        "id": "b446469b-6447-4592-9441-bd9068aa15ad",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b446469b-6447-4592-9441-bd9068aa15ad",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3272620505,
        "longitude": 29.0509848311
      }
    },
    "b46bbe19-d046-4ccd-907b-1ce7c4b3f74e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 55",
        "id": "b46bbe19-d046-4ccd-907b-1ce7c4b3f74e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b46bbe19-d046-4ccd-907b-1ce7c4b3f74e",
      "image": "perev_right",
      "point": {
        "latitude": 55.0751523203,
        "longitude": 29.487831369
      }
    },
    "b47ffc22-aa75-410b-9580-e392676599d7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 34",
        "id": "b47ffc22-aa75-410b-9580-e392676599d7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b47ffc22-aa75-410b-9580-e392676599d7",
      "image": "perev_left",
      "point": {
        "latitude": 55.1133664476,
        "longitude": 29.7193967803
      }
    },
    "b4e7afd1-c9c3-41a7-8a28-23cdaad9d0bb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 69",
        "id": "b4e7afd1-c9c3-41a7-8a28-23cdaad9d0bb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b4e7afd1-c9c3-41a7-8a28-23cdaad9d0bb",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1333810399,
        "longitude": 29.7404752711
      }
    },
    "b5d3bfec-89c5-4242-ad14-03316b14206f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "b5d3bfec-89c5-4242-ad14-03316b14206f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b5d3bfec-89c5-4242-ad14-03316b14206f",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3318728182,
        "longitude": 30.3589266788
      }
    },
    "b61a8e64-ae45-4fd6-8b25-785bf6badf85": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "b61a8e64-ae45-4fd6-8b25-785bf6badf85",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b61a8e64-ae45-4fd6-8b25-785bf6badf85",
      "image": "name_of",
      "point": {
        "latitude": 55.4260686327,
        "longitude": 29.0069821402
      }
    },
    "b6bc0ec4-16c1-4832-8139-a3699fa00958": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 22",
        "id": "b6bc0ec4-16c1-4832-8139-a3699fa00958",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b6bc0ec4-16c1-4832-8139-a3699fa00958",
      "image": "perev_left",
      "point": {
        "latitude": 55.2552795008,
        "longitude": 30.182919097
      }
    },
    "b6cddc36-929e-46d6-bbb8-4b2aa9d3e3c1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 28",
        "id": "b6cddc36-929e-46d6-bbb8-4b2aa9d3e3c1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b6cddc36-929e-46d6-bbb8-4b2aa9d3e3c1",
      "image": "perev_right",
      "point": {
        "latitude": 55.1539765189,
        "longitude": 29.731551101
      }
    },
    "b7223df4-1b2f-4066-b0ec-ee1150c781ba": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 17п",
        "id": "b7223df4-1b2f-4066-b0ec-ee1150c781ba",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b7223df4-1b2f-4066-b0ec-ee1150c781ba",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2364304541,
        "longitude": 30.1260011844
      }
    },
    "b88e7cdf-18a4-4d2a-aab5-f7bded0ef1b1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "b88e7cdf-18a4-4d2a-aab5-f7bded0ef1b1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b88e7cdf-18a4-4d2a-aab5-f7bded0ef1b1",
      "image": "name_of",
      "point": {
        "latitude": 55.4089274908,
        "longitude": 30.7198139208
      }
    },
    "b9237865-a938-4694-bfcd-97fd1f4b9be6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 19",
        "id": "b9237865-a938-4694-bfcd-97fd1f4b9be6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b9237865-a938-4694-bfcd-97fd1f4b9be6",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1814952216,
        "longitude": 30.1958406109
      }
    },
    "b9a931f0-3c6e-44ae-bc48-f16485d2278b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 73",
        "id": "b9a931f0-3c6e-44ae-bc48-f16485d2278b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b9a931f0-3c6e-44ae-bc48-f16485d2278b",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1170828506,
        "longitude": 29.7308342754
      }
    },
    "b9fe8e22-a860-4fc7-8dc2-c49ec0703ea6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 38",
        "id": "b9fe8e22-a860-4fc7-8dc2-c49ec0703ea6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "b9fe8e22-a860-4fc7-8dc2-c49ec0703ea6",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2123076397,
        "longitude": 29.8614845035
      }
    },
    "ba1530d9-138e-40a7-ab0e-ed614b237212": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 27",
        "id": "ba1530d9-138e-40a7-ab0e-ed614b237212",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ba1530d9-138e-40a7-ab0e-ed614b237212",
      "image": "perev_right",
      "point": {
        "latitude": 55.1666677682,
        "longitude": 29.7313360608
      }
    },
    "ba1aa1c0-0446-405f-b00c-022b738b56fd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Пересечение судового хода  ",
        "id": "ba1aa1c0-0446-405f-b00c-022b738b56fd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ba1aa1c0-0446-405f-b00c-022b738b56fd",
      "image": "crossing_way",
      "point": {
        "latitude": 55.4097350388,
        "longitude": 30.7232232508
      }
    },
    "ba27d1c9-5b4e-4dfe-8752-f041cbfeebfa": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ba27d1c9-5b4e-4dfe-8752-f041cbfeebfa",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ba27d1c9-5b4e-4dfe-8752-f041cbfeebfa",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0541380658,
        "longitude": 29.466661735
      }
    },
    "ba958844-04a6-4c8e-b364-23d85d9dab17": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ba958844-04a6-4c8e-b364-23d85d9dab17",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ba958844-04a6-4c8e-b364-23d85d9dab17",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3093314787,
        "longitude": 30.3076823944
      }
    },
    "bb6af66c-4ea9-443f-a689-a0f6c6e63df7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 565",
        "id": "bb6af66c-4ea9-443f-a689-a0f6c6e63df7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "bb6af66c-4ea9-443f-a689-a0f6c6e63df7",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1268479649,
        "longitude": 29.6561724888
      }
    },
    "bd12dc21-89d1-4dbe-a0a9-52631912377e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 23",
        "id": "bd12dc21-89d1-4dbe-a0a9-52631912377e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "bd12dc21-89d1-4dbe-a0a9-52631912377e",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1966139451,
        "longitude": 30.2001843712
      }
    },
    "bebfbea8-ebc3-4939-af08-8ffd997c861a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 560",
        "id": "bebfbea8-ebc3-4939-af08-8ffd997c861a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "bebfbea8-ebc3-4939-af08-8ffd997c861a",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1216753046,
        "longitude": 29.5825170519
      }
    },
    "bf08d3f9-ca9a-454d-b6d9-fe8265293ea9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 2п",
        "id": "bf08d3f9-ca9a-454d-b6d9-fe8265293ea9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "bf08d3f9-ca9a-454d-b6d9-fe8265293ea9",
      "image": "buyo_right",
      "point": {
        "latitude": 55.167950048,
        "longitude": 30.1400412732
      }
    },
    "bf16e5b2-1849-4348-a8c7-1bf9c3e1b788": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "bf16e5b2-1849-4348-a8c7-1bf9c3e1b788",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "bf16e5b2-1849-4348-a8c7-1bf9c3e1b788",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1691580853,
        "longitude": 30.1671620859
      }
    },
    "c04d4235-732a-4799-b6fd-30bc21776b83": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 7",
        "id": "c04d4235-732a-4799-b6fd-30bc21776b83",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c04d4235-732a-4799-b6fd-30bc21776b83",
      "image": "perev_left",
      "point": {
        "latitude": 55.1643906926,
        "longitude": 29.9739234979
      }
    },
    "c0dd8c47-dcf6-4ba3-9335-788128b4ae0e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 48",
        "id": "c0dd8c47-dcf6-4ba3-9335-788128b4ae0e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c0dd8c47-dcf6-4ba3-9335-788128b4ae0e",
      "image": "perev_left",
      "point": {
        "latitude": 55.1046397663,
        "longitude": 29.5621591267
      }
    },
    "c155a587-6514-4370-841e-cb459ef06eac": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 31",
        "id": "c155a587-6514-4370-841e-cb459ef06eac",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c155a587-6514-4370-841e-cb459ef06eac",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1944582494,
        "longitude": 29.8763478389
      }
    },
    "c20569fc-76e6-4bc8-8186-d448a9881648": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 90",
        "id": "c20569fc-76e6-4bc8-8186-d448a9881648",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c20569fc-76e6-4bc8-8186-d448a9881648",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1292292192,
        "longitude": 29.6117429856
      }
    },
    "c287401f-f119-4e4e-907b-5bd629525d82": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 61",
        "id": "c287401f-f119-4e4e-907b-5bd629525d82",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c287401f-f119-4e4e-907b-5bd629525d82",
      "image": "perev_left",
      "point": {
        "latitude": 55.088691287,
        "longitude": 29.4339812116
      }
    },
    "c362f6d3-f665-4332-b101-59779233c937": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 24",
        "id": "c362f6d3-f665-4332-b101-59779233c937",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c362f6d3-f665-4332-b101-59779233c937",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1973980957,
        "longitude": 30.1992109039
      }
    },
    "c4269573-80e3-48c7-a460-3607a32f3c94": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 41",
        "id": "c4269573-80e3-48c7-a460-3607a32f3c94",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c4269573-80e3-48c7-a460-3607a32f3c94",
      "image": "milestone_right",
      "point": {
        "latitude": 55.2111789606,
        "longitude": 29.8439684818
      }
    },
    "c476f455-b0d0-48c6-8b2c-31022ca951fd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 520",
        "id": "c476f455-b0d0-48c6-8b2c-31022ca951fd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c476f455-b0d0-48c6-8b2c-31022ca951fd",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2055448221,
        "longitude": 29.2642233249
      }
    },
    "c4e66f9e-d176-4782-9291-f4c12ef87e80": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "c4e66f9e-d176-4782-9291-f4c12ef87e80",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c4e66f9e-d176-4782-9291-f4c12ef87e80",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2496683377,
        "longitude": 30.1398572214
      }
    },
    "c5956689-d6aa-412a-bdaa-a28501763bdf": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 540",
        "id": "c5956689-d6aa-412a-bdaa-a28501763bdf",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c5956689-d6aa-412a-bdaa-a28501763bdf",
      "image": "kilometrage",
      "point": {
        "latitude": 55.1091036492,
        "longitude": 29.4465398394
      }
    },
    "c5f95ca9-1371-4f1d-9789-c631eca5dfed": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 75",
        "id": "c5f95ca9-1371-4f1d-9789-c631eca5dfed",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c5f95ca9-1371-4f1d-9789-c631eca5dfed",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1122933949,
        "longitude": 29.7194860927
      }
    },
    "c61c1e69-2e30-4e62-8b69-cfedb2ab4b29": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "c61c1e69-2e30-4e62-8b69-cfedb2ab4b29",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c61c1e69-2e30-4e62-8b69-cfedb2ab4b29",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2426635837,
        "longitude": 30.1271045481
      }
    },
    "c6a36dc6-8fa2-426f-9cde-35bed3bc8b22": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 37",
        "id": "c6a36dc6-8fa2-426f-9cde-35bed3bc8b22",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c6a36dc6-8fa2-426f-9cde-35bed3bc8b22",
      "image": "perev_left",
      "point": {
        "latitude": 55.1146655719,
        "longitude": 29.684973605
      }
    },
    "c82f0e69-c604-4acb-8219-a294a255f0be": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Пересечение судового хода  ",
        "id": "c82f0e69-c604-4acb-8219-a294a255f0be",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c82f0e69-c604-4acb-8219-a294a255f0be",
      "image": "crossing_way",
      "point": {
        "latitude": 55.0518446399,
        "longitude": 29.4399630395
      }
    },
    "c86b1450-66e1-4a2e-ac37-ded234da015d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 37",
        "id": "c86b1450-66e1-4a2e-ac37-ded234da015d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c86b1450-66e1-4a2e-ac37-ded234da015d",
      "image": "perev_left",
      "point": {
        "latitude": 55.4038847498,
        "longitude": 30.483322168
      }
    },
    "c8e1057c-a6ed-454b-8027-cf5bf19ca4fe": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 25",
        "id": "c8e1057c-a6ed-454b-8027-cf5bf19ca4fe",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c8e1057c-a6ed-454b-8027-cf5bf19ca4fe",
      "image": "perev_left",
      "point": {
        "latitude": 55.2917452039,
        "longitude": 30.2806478632
      }
    },
    "c97cd31e-0ad1-466d-8234-177a33e3cdc5": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "c97cd31e-0ad1-466d-8234-177a33e3cdc5",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "c97cd31e-0ad1-466d-8234-177a33e3cdc5",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3079785237,
        "longitude": 30.3099125361
      }
    },
    "ca3f15e0-2ee7-47f7-bbdb-76812b681475": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 9",
        "id": "ca3f15e0-2ee7-47f7-bbdb-76812b681475",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ca3f15e0-2ee7-47f7-bbdb-76812b681475",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1670176235,
        "longitude": 30.1386972556
      }
    },
    "ca63a379-2d97-4782-a196-327655ecadb9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Ходовой знак левый 18",
        "id": "ca63a379-2d97-4782-a196-327655ecadb9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ca63a379-2d97-4782-a196-327655ecadb9",
      "image": "running_sign_left",
      "point": {
        "latitude": 55.2115811946,
        "longitude": 29.8504349871
      }
    },
    "cb23c502-2120-4fee-9873-db976c430e0e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 33",
        "id": "cb23c502-2120-4fee-9873-db976c430e0e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cb23c502-2120-4fee-9873-db976c430e0e",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1971920676,
        "longitude": 29.8746025206
      }
    },
    "cb54d1c8-ca05-426f-a210-e24483e8cb24": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 515",
        "id": "cb54d1c8-ca05-426f-a210-e24483e8cb24",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cb54d1c8-ca05-426f-a210-e24483e8cb24",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2407593551,
        "longitude": 29.2333569362
      }
    },
    "cbdb639c-05ef-4d5e-93ab-e73b91fa2eae": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 50",
        "id": "cbdb639c-05ef-4d5e-93ab-e73b91fa2eae",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cbdb639c-05ef-4d5e-93ab-e73b91fa2eae",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1839754581,
        "longitude": 29.7978278394
      }
    },
    "cc123648-1a5c-42a7-b51b-4f8311657b09": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 19",
        "id": "cc123648-1a5c-42a7-b51b-4f8311657b09",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cc123648-1a5c-42a7-b51b-4f8311657b09",
      "image": "buyo_right",
      "point": {
        "latitude": 55.164975529,
        "longitude": 29.9738584874
      }
    },
    "ccfd2d11-ed01-4551-91b7-bf9274e62c4d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ccfd2d11-ed01-4551-91b7-bf9274e62c4d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ccfd2d11-ed01-4551-91b7-bf9274e62c4d",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.308553108,
        "longitude": 30.3048186984
      }
    },
    "cd38710f-6aae-49d9-a19a-f44fce98987d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 660",
        "id": "cd38710f-6aae-49d9-a19a-f44fce98987d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cd38710f-6aae-49d9-a19a-f44fce98987d",
      "image": "kilometrage",
      "point": {
        "latitude": 55.4292404593,
        "longitude": 30.5470493359
      }
    },
    "ceab4c39-af44-4311-92d8-c4a2d870c897": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 64",
        "id": "ceab4c39-af44-4311-92d8-c4a2d870c897",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ceab4c39-af44-4311-92d8-c4a2d870c897",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1649062215,
        "longitude": 29.7305033604
      }
    },
    "cf7d783e-92d5-46cf-bcaf-cd19291dd9fa": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "cf7d783e-92d5-46cf-bcaf-cd19291dd9fa",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cf7d783e-92d5-46cf-bcaf-cd19291dd9fa",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4209981703,
        "longitude": 29.0222167189
      }
    },
    "cf8065f3-5fd1-49b3-8045-0982862f913b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 14",
        "id": "cf8065f3-5fd1-49b3-8045-0982862f913b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cf8065f3-5fd1-49b3-8045-0982862f913b",
      "image": "perev_right",
      "point": {
        "latitude": 55.1955623831,
        "longitude": 29.8760156946
      }
    },
    "cff75c89-d346-4a57-8074-345395e263e0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "cff75c89-d346-4a57-8074-345395e263e0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "cff75c89-d346-4a57-8074-345395e263e0",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1691066754,
        "longitude": 30.1416467683
      }
    },
    "d09c14e2-1d31-4205-acb1-6bf30a717574": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 25",
        "id": "d09c14e2-1d31-4205-acb1-6bf30a717574",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d09c14e2-1d31-4205-acb1-6bf30a717574",
      "image": "perev_left",
      "point": {
        "latitude": 55.1798722847,
        "longitude": 29.7585405889
      }
    },
    "d17561d5-230e-42f5-8e2e-e49a9e9ac3d1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "d17561d5-230e-42f5-8e2e-e49a9e9ac3d1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d17561d5-230e-42f5-8e2e-e49a9e9ac3d1",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.408162941,
        "longitude": 30.6843564814
      }
    },
    "d18420ff-d751-4a99-8ecd-00eaa260408c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 42",
        "id": "d18420ff-d751-4a99-8ecd-00eaa260408c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d18420ff-d751-4a99-8ecd-00eaa260408c",
      "image": "perev_left",
      "point": {
        "latitude": 55.4276203252,
        "longitude": 30.5610852303
      }
    },
    "d2ad89d5-c4f1-4984-9928-595414473fc6": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "d2ad89d5-c4f1-4984-9928-595414473fc6",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d2ad89d5-c4f1-4984-9928-595414473fc6",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1679886517,
        "longitude": 30.0911678736
      }
    },
    "d3832aeb-0626-4cad-81c0-cf2391b6cf6e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 2",
        "id": "d3832aeb-0626-4cad-81c0-cf2391b6cf6e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d3832aeb-0626-4cad-81c0-cf2391b6cf6e",
      "image": "perev_left",
      "point": {
        "latitude": 55.163169727,
        "longitude": 30.0772228847
      }
    },
    "d46e53b0-b118-4257-a26c-01c3b623d163": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "d46e53b0-b118-4257-a26c-01c3b623d163",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d46e53b0-b118-4257-a26c-01c3b623d163",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2344529768,
        "longitude": 29.2438804315
      }
    },
    "d4a8d342-3f18-439d-8b8b-18cccf79a5ce": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 92",
        "id": "d4a8d342-3f18-439d-8b8b-18cccf79a5ce",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d4a8d342-3f18-439d-8b8b-18cccf79a5ce",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1269881533,
        "longitude": 29.5960792493
      }
    },
    "d4a8e72b-cf2f-4248-b949-5f4f5de27f5a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 12п",
        "id": "d4a8e72b-cf2f-4248-b949-5f4f5de27f5a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d4a8e72b-cf2f-4248-b949-5f4f5de27f5a",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2118853253,
        "longitude": 30.1473257871
      }
    },
    "d53a7892-4d31-4865-99b6-eb80ff4cde00": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 49",
        "id": "d53a7892-4d31-4865-99b6-eb80ff4cde00",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d53a7892-4d31-4865-99b6-eb80ff4cde00",
      "image": "perev_left",
      "point": {
        "latitude": 55.4093245402,
        "longitude": 30.7216542407
      }
    },
    "d5ef7843-54ca-4871-b3c3-7d3cdcaa9566": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 3",
        "id": "d5ef7843-54ca-4871-b3c3-7d3cdcaa9566",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d5ef7843-54ca-4871-b3c3-7d3cdcaa9566",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1657715996,
        "longitude": 30.0957712203
      }
    },
    "d6105cec-5619-43a1-8a2c-1ef3c4679018": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 670",
        "id": "d6105cec-5619-43a1-8a2c-1ef3c4679018",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d6105cec-5619-43a1-8a2c-1ef3c4679018",
      "image": "kilometrage",
      "point": {
        "latitude": 55.4069322188,
        "longitude": 30.6727270955
      }
    },
    "d798e48e-2cd2-4b98-95b0-885de1b061d9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "d798e48e-2cd2-4b98-95b0-885de1b061d9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d798e48e-2cd2-4b98-95b0-885de1b061d9",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.307261234,
        "longitude": 30.3075864095
      }
    },
    "d7cdd8bb-cf47-4fa5-a681-2e7623bccdab": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 59",
        "id": "d7cdd8bb-cf47-4fa5-a681-2e7623bccdab",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d7cdd8bb-cf47-4fa5-a681-2e7623bccdab",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1773708975,
        "longitude": 29.742959676
      }
    },
    "d8a0ae71-1c80-4297-b372-b9fcc06c378f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 20",
        "id": "d8a0ae71-1c80-4297-b372-b9fcc06c378f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d8a0ae71-1c80-4297-b372-b9fcc06c378f",
      "image": "perev_left",
      "point": {
        "latitude": 55.1953135276,
        "longitude": 29.8165489864
      }
    },
    "d986ffdd-6756-42e1-b7e2-79b9dcbc94f7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 40",
        "id": "d986ffdd-6756-42e1-b7e2-79b9dcbc94f7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "d986ffdd-6756-42e1-b7e2-79b9dcbc94f7",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2527365362,
        "longitude": 30.1688473341
      }
    },
    "da3c6307-126a-4354-9e60-101cff55e898": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 14",
        "id": "da3c6307-126a-4354-9e60-101cff55e898",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "da3c6307-126a-4354-9e60-101cff55e898",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1728564362,
        "longitude": 30.1820835634
      }
    },
    "da4a333c-a119-4076-817a-d5ac448b94b8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 17",
        "id": "da4a333c-a119-4076-817a-d5ac448b94b8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "da4a333c-a119-4076-817a-d5ac448b94b8",
      "image": "milestone_right",
      "point": {
        "latitude": 55.164988503,
        "longitude": 29.9828082153
      }
    },
    "dab1765e-c3ea-4ef8-80d4-313da70887da": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Ходовой знак левый 6",
        "id": "dab1765e-c3ea-4ef8-80d4-313da70887da",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dab1765e-c3ea-4ef8-80d4-313da70887da",
      "image": "running_sign_left",
      "point": {
        "latitude": 55.1642204334,
        "longitude": 29.9835995364
      }
    },
    "dab66b51-348a-4681-805b-1e7d0f9544eb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Пересечение судового хода  ",
        "id": "dab66b51-348a-4681-805b-1e7d0f9544eb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dab66b51-348a-4681-805b-1e7d0f9544eb",
      "image": "crossing_way",
      "point": {
        "latitude": 55.0537196959,
        "longitude": 29.4658988451
      }
    },
    "dc1a5e53-223a-4fd1-a61c-4042790c8944": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 32",
        "id": "dc1a5e53-223a-4fd1-a61c-4042790c8944",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dc1a5e53-223a-4fd1-a61c-4042790c8944",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1964397908,
        "longitude": 29.8730587976
      }
    },
    "dca9432e-848f-41e6-a928-135bf1dadff1": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 4",
        "id": "dca9432e-848f-41e6-a928-135bf1dadff1",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dca9432e-848f-41e6-a928-135bf1dadff1",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1665841936,
        "longitude": 30.0927783068
      }
    },
    "dcee144e-6474-4627-bff5-86e927e0715a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 490",
        "id": "dcee144e-6474-4627-bff5-86e927e0715a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dcee144e-6474-4627-bff5-86e927e0715a",
      "image": "kilometrage",
      "point": {
        "latitude": 55.3559558735,
        "longitude": 28.9962916989
      }
    },
    "dd1280d7-0d62-403b-b712-e44fd9259a6c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 11",
        "id": "dd1280d7-0d62-403b-b712-e44fd9259a6c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dd1280d7-0d62-403b-b712-e44fd9259a6c",
      "image": "perev_left",
      "point": {
        "latitude": 55.1714690645,
        "longitude": 29.8960601701
      }
    },
    "dd146fd1-5e76-4e86-b927-a733d06628f7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 30",
        "id": "dd146fd1-5e76-4e86-b927-a733d06628f7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dd146fd1-5e76-4e86-b927-a733d06628f7",
      "image": "buyo_right",
      "point": {
        "latitude": 55.2133535728,
        "longitude": 30.1424311576
      }
    },
    "dfda4d0e-e5c3-40cc-9ca8-983668d946fd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "dfda4d0e-e5c3-40cc-9ca8-983668d946fd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dfda4d0e-e5c3-40cc-9ca8-983668d946fd",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2503932953,
        "longitude": 30.1551618828
      }
    },
    "dff8b3c4-49fd-4531-90da-5aabb3271e83": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 8",
        "id": "dff8b3c4-49fd-4531-90da-5aabb3271e83",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "dff8b3c4-49fd-4531-90da-5aabb3271e83",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1636438774,
        "longitude": 30.1340762289
      }
    },
    "e08060a7-281a-41d0-b862-42f8618e5ec8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "e08060a7-281a-41d0-b862-42f8618e5ec8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e08060a7-281a-41d0-b862-42f8618e5ec8",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2080586359,
        "longitude": 30.1921770495
      }
    },
    "e09f1bf8-a94e-4f72-999a-f7f389ab7d8e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "e09f1bf8-a94e-4f72-999a-f7f389ab7d8e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e09f1bf8-a94e-4f72-999a-f7f389ab7d8e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1835975875,
        "longitude": 30.1963083708
      }
    },
    "e0d3d1f2-dd23-4774-a6b3-f5f2a3ad1bee": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 84",
        "id": "e0d3d1f2-dd23-4774-a6b3-f5f2a3ad1bee",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e0d3d1f2-dd23-4774-a6b3-f5f2a3ad1bee",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1257609238,
        "longitude": 29.6632359829
      }
    },
    "e121acd8-9f34-43b8-a568-e33223c992a8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "e121acd8-9f34-43b8-a568-e33223c992a8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e121acd8-9f34-43b8-a568-e33223c992a8",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1655972492,
        "longitude": 30.0149502113
      }
    },
    "e1322030-e718-4cc5-8a0c-2263693fba92": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 77",
        "id": "e1322030-e718-4cc5-8a0c-2263693fba92",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e1322030-e718-4cc5-8a0c-2263693fba92",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1112059711,
        "longitude": 29.7054655617
      }
    },
    "e2158650-7c6e-4292-a0bf-c8d77f6fe012": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "e2158650-7c6e-4292-a0bf-c8d77f6fe012",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e2158650-7c6e-4292-a0bf-c8d77f6fe012",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.0495641725,
        "longitude": 29.4608567392
      }
    },
    "e267c36c-db7b-4ead-a3ce-4778c286d5b4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "e267c36c-db7b-4ead-a3ce-4778c286d5b4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e267c36c-db7b-4ead-a3ce-4778c286d5b4",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1710349605,
        "longitude": 29.9000710885
      }
    },
    "e2e645cd-4a71-4a93-8cb1-425557f5ed76": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель местности  ",
        "id": "e2e645cd-4a71-4a93-8cb1-425557f5ed76",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e2e645cd-4a71-4a93-8cb1-425557f5ed76",
      "image": "name_of",
      "point": {
        "latitude": 55.2499698439,
        "longitude": 30.1478966537
      }
    },
    "e2e68744-ce28-4f04-a427-94ddfa58554b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 21",
        "id": "e2e68744-ce28-4f04-a427-94ddfa58554b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e2e68744-ce28-4f04-a427-94ddfa58554b",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1652846558,
        "longitude": 29.9586770071
      }
    },
    "e2e72ff3-4651-403e-a45c-6e00c8abb33e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Движение маломерных судов запрещено  ",
        "id": "e2e72ff3-4651-403e-a45c-6e00c8abb33e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e2e72ff3-4651-403e-a45c-6e00c8abb33e",
      "image": "small_ships_forbidden",
      "point": {
        "latitude": 55.1636065518,
        "longitude": 30.1015553502
      }
    },
    "e3dbfba5-6958-450e-a10d-c70b679e705e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 100",
        "id": "e3dbfba5-6958-450e-a10d-c70b679e705e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e3dbfba5-6958-450e-a10d-c70b679e705e",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1053234197,
        "longitude": 29.5611141474
      }
    },
    "e3ef4a41-7d26-4150-bcf1-46490fe2d9e7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 64",
        "id": "e3ef4a41-7d26-4150-bcf1-46490fe2d9e7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e3ef4a41-7d26-4150-bcf1-46490fe2d9e7",
      "image": "perev_right",
      "point": {
        "latitude": 55.1176881394,
        "longitude": 29.4459339612
      }
    },
    "e4f6af02-ff3e-4861-b57d-3d43392fb916": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 635",
        "id": "e4f6af02-ff3e-4861-b57d-3d43392fb916",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e4f6af02-ff3e-4861-b57d-3d43392fb916",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2870087828,
        "longitude": 30.2749781946
      }
    },
    "e548c825-fce6-4c0c-9f72-34fa0725e524": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 86",
        "id": "e548c825-fce6-4c0c-9f72-34fa0725e524",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e548c825-fce6-4c0c-9f72-34fa0725e524",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1273296172,
        "longitude": 29.6386793973
      }
    },
    "e55c6bb7-a906-4448-afe0-84fea94e0473": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 58",
        "id": "e55c6bb7-a906-4448-afe0-84fea94e0473",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e55c6bb7-a906-4448-afe0-84fea94e0473",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1774865993,
        "longitude": 29.7445030145
      }
    },
    "e5d030bd-5e29-43f5-b969-1801daa1775a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 10",
        "id": "e5d030bd-5e29-43f5-b969-1801daa1775a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e5d030bd-5e29-43f5-b969-1801daa1775a",
      "image": "buyo_left",
      "point": {
        "latitude": 55.165129907,
        "longitude": 30.0628768579
      }
    },
    "e5f47fee-cdf9-4a6f-8792-14559d86ad77": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "e5f47fee-cdf9-4a6f-8792-14559d86ad77",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e5f47fee-cdf9-4a6f-8792-14559d86ad77",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3239044944,
        "longitude": 30.3454296467
      }
    },
    "e610e186-97e6-417b-bc0f-dc3839748f13": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 25",
        "id": "e610e186-97e6-417b-bc0f-dc3839748f13",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e610e186-97e6-417b-bc0f-dc3839748f13",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1640995957,
        "longitude": 29.9252235061
      }
    },
    "e6b73338-e483-497a-bb4e-0221a8f12663": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 97",
        "id": "e6b73338-e483-497a-bb4e-0221a8f12663",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e6b73338-e483-497a-bb4e-0221a8f12663",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1158018676,
        "longitude": 29.5692921556
      }
    },
    "e77ce59e-1c2a-44a4-8391-550ea2692a08": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 24",
        "id": "e77ce59e-1c2a-44a4-8391-550ea2692a08",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e77ce59e-1c2a-44a4-8391-550ea2692a08",
      "image": "buyo_right",
      "point": {
        "latitude": 55.163505768,
        "longitude": 29.9363027066
      }
    },
    "e83e156d-763e-4108-8e71-38b13003a52b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 80",
        "id": "e83e156d-763e-4108-8e71-38b13003a52b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e83e156d-763e-4108-8e71-38b13003a52b",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1146985567,
        "longitude": 29.6925383848
      }
    },
    "e850d25b-1895-4b49-b566-630c4aa4f579": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "e850d25b-1895-4b49-b566-630c4aa4f579",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e850d25b-1895-4b49-b566-630c4aa4f579",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3327551349,
        "longitude": 30.3607518506
      }
    },
    "e9a18434-f711-4a2c-ab5a-d892e8e4d166": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 3п",
        "id": "e9a18434-f711-4a2c-ab5a-d892e8e4d166",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e9a18434-f711-4a2c-ab5a-d892e8e4d166",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1701844042,
        "longitude": 30.1536485447
      }
    },
    "e9a3b1f6-6c93-4dc4-8f98-c59ba9e98ef9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 5п",
        "id": "e9a3b1f6-6c93-4dc4-8f98-c59ba9e98ef9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e9a3b1f6-6c93-4dc4-8f98-c59ba9e98ef9",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1797212974,
        "longitude": 30.1937888764
      }
    },
    "e9fea862-7c3c-4f74-b115-4bb103ec5f63": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "e9fea862-7c3c-4f74-b115-4bb103ec5f63",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "e9fea862-7c3c-4f74-b115-4bb103ec5f63",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2401010777,
        "longitude": 29.2350402249
      }
    },
    "ea076325-a8aa-4bf2-90ad-4ff5deacbb41": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 5",
        "id": "ea076325-a8aa-4bf2-90ad-4ff5deacbb41",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ea076325-a8aa-4bf2-90ad-4ff5deacbb41",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1682453062,
        "longitude": 30.0887773857
      }
    },
    "eb2fafb8-64c6-4374-a27c-233b09ae386e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "eb2fafb8-64c6-4374-a27c-233b09ae386e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "eb2fafb8-64c6-4374-a27c-233b09ae386e",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0537262089,
        "longitude": 29.4693351582
      }
    },
    "ec72b2f1-bd78-49b5-93f5-361e34941d59": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак правый 31",
        "id": "ec72b2f1-bd78-49b5-93f5-361e34941d59",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ec72b2f1-bd78-49b5-93f5-361e34941d59",
      "image": "perev_right",
      "point": {
        "latitude": 55.3443554311,
        "longitude": 30.3940612495
      }
    },
    "edd7f089-714d-4c8f-b9b4-4eb74b293cff": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "edd7f089-714d-4c8f-b9b4-4eb74b293cff",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "edd7f089-714d-4c8f-b9b4-4eb74b293cff",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2672191022,
        "longitude": 30.2164811851
      }
    },
    "edde72c8-2f9a-4419-acf2-211d8771dacd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "edde72c8-2f9a-4419-acf2-211d8771dacd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "edde72c8-2f9a-4419-acf2-211d8771dacd",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2638108562,
        "longitude": 29.2108097498
      }
    },
    "ee2ecd77-a593-42f1-9f95-5ccca4ec8a48": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ee2ecd77-a593-42f1-9f95-5ccca4ec8a48",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ee2ecd77-a593-42f1-9f95-5ccca4ec8a48",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2130850801,
        "longitude": 29.8561274656
      }
    },
    "eeae645a-f81e-4a88-a852-a16cfcd9365e": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 21",
        "id": "eeae645a-f81e-4a88-a852-a16cfcd9365e",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "eeae645a-f81e-4a88-a852-a16cfcd9365e",
      "image": "buyo_left",
      "point": {
        "latitude": 55.1899326976,
        "longitude": 30.1981125046
      }
    },
    "eeca7de6-53bf-48ce-a1c6-f29b5fbc647d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "eeca7de6-53bf-48ce-a1c6-f29b5fbc647d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "eeca7de6-53bf-48ce-a1c6-f29b5fbc647d",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0686136057,
        "longitude": 29.4288426314
      }
    },
    "ef21e305-65a1-48ca-9196-824df85c8e46": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ef21e305-65a1-48ca-9196-824df85c8e46",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ef21e305-65a1-48ca-9196-824df85c8e46",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4072720032,
        "longitude": 30.6864435904
      }
    },
    "ef4dcda9-5dd7-48a2-b010-ed66b27144d3": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "ef4dcda9-5dd7-48a2-b010-ed66b27144d3",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "ef4dcda9-5dd7-48a2-b010-ed66b27144d3",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3298897552,
        "longitude": 30.3521954666
      }
    },
    "efff0a3a-c6a1-433a-9290-52b96c921068": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "efff0a3a-c6a1-433a-9290-52b96c921068",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "efff0a3a-c6a1-433a-9290-52b96c921068",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.168145753,
        "longitude": 30.1440244566
      }
    },
    "f05fec85-a457-4688-878a-392f90b0a65f": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f05fec85-a457-4688-878a-392f90b0a65f",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f05fec85-a457-4688-878a-392f90b0a65f",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4081499093,
        "longitude": 30.6957884092
      }
    },
    "f080e04a-681f-4346-8103-6cf70c014b7b": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f080e04a-681f-4346-8103-6cf70c014b7b",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f080e04a-681f-4346-8103-6cf70c014b7b",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.0554436942,
        "longitude": 29.4341206943
      }
    },
    "f0ea45f4-17cb-40f0-88ba-604406e64edd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "f0ea45f4-17cb-40f0-88ba-604406e64edd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f0ea45f4-17cb-40f0-88ba-604406e64edd",
      "image": "axis_romb",
      "point": {
        "latitude": 55.1688437499,
        "longitude": 30.1632446837
      }
    },
    "f1adf4da-4d75-40b1-b0b2-a19461c0033a": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "f1adf4da-4d75-40b1-b0b2-a19461c0033a",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f1adf4da-4d75-40b1-b0b2-a19461c0033a",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.2153201171,
        "longitude": 30.1411714726
      }
    },
    "f201e844-0c01-455a-bc04-5d7007446028": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 23",
        "id": "f201e844-0c01-455a-bc04-5d7007446028",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f201e844-0c01-455a-bc04-5d7007446028",
      "image": "perev_left",
      "point": {
        "latitude": 55.1800612218,
        "longitude": 29.7850045578
      }
    },
    "f2909edd-e485-42d1-a5eb-2aa18f723cdb": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f2909edd-e485-42d1-a5eb-2aa18f723cdb",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f2909edd-e485-42d1-a5eb-2aa18f723cdb",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3068150328,
        "longitude": 30.3053476239
      }
    },
    "f3055d41-e75b-4f54-856b-d39cb7733430": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 26",
        "id": "f3055d41-e75b-4f54-856b-d39cb7733430",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f3055d41-e75b-4f54-856b-d39cb7733430",
      "image": "perev_left",
      "point": {
        "latitude": 55.3058860438,
        "longitude": 30.3022822906
      }
    },
    "f327af34-3793-47ae-855b-9eed69055188": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 15",
        "id": "f327af34-3793-47ae-855b-9eed69055188",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f327af34-3793-47ae-855b-9eed69055188",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1723169345,
        "longitude": 30.185907798
      }
    },
    "f3fea952-8328-48b2-9120-f81fce57e1e9": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 31",
        "id": "f3fea952-8328-48b2-9120-f81fce57e1e9",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f3fea952-8328-48b2-9120-f81fce57e1e9",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2138481932,
        "longitude": 30.1431520811
      }
    },
    "f4284d9b-7cee-4e5f-a4b6-6bd007c805ac": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 9",
        "id": "f4284d9b-7cee-4e5f-a4b6-6bd007c805ac",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f4284d9b-7cee-4e5f-a4b6-6bd007c805ac",
      "image": "perev_left",
      "point": {
        "latitude": 55.2071697406,
        "longitude": 30.1935813566
      }
    },
    "f54ffe57-737a-4335-b67a-8318fb9b9e75": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f54ffe57-737a-4335-b67a-8318fb9b9e75",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f54ffe57-737a-4335-b67a-8318fb9b9e75",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3289469242,
        "longitude": 30.3545559065
      }
    },
    "f597a597-0d4b-4c8e-a019-910e28ec9056": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Запрещение прохода  ",
        "id": "f597a597-0d4b-4c8e-a019-910e28ec9056",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f597a597-0d4b-4c8e-a019-910e28ec9056",
      "image": "passage_forbidden",
      "point": {
        "latitude": 55.4312064749,
        "longitude": 28.9491058522
      }
    },
    "f5e93bf2-37d2-4318-a38f-70a24867d295": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 17",
        "id": "f5e93bf2-37d2-4318-a38f-70a24867d295",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f5e93bf2-37d2-4318-a38f-70a24867d295",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1772452079,
        "longitude": 30.1936106612
      }
    },
    "f64fc11f-2df7-4849-9947-1597a0eaa2b4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f64fc11f-2df7-4849-9947-1597a0eaa2b4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f64fc11f-2df7-4849-9947-1597a0eaa2b4",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.324447743,
        "longitude": 30.3469518575
      }
    },
    "f688f5f6-4ef9-49a2-bdc1-d79fc103024c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Якорь не бросать  ",
        "id": "f688f5f6-4ef9-49a2-bdc1-d79fc103024c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f688f5f6-4ef9-49a2-bdc1-d79fc103024c",
      "image": "anchor_forbidden",
      "point": {
        "latitude": 55.1734180889,
        "longitude": 30.1852205409
      }
    },
    "f6a82938-2a84-4512-a070-fbdfe6aa5613": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 69",
        "id": "f6a82938-2a84-4512-a070-fbdfe6aa5613",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f6a82938-2a84-4512-a070-fbdfe6aa5613",
      "image": "perev_left",
      "point": {
        "latitude": 55.2531861269,
        "longitude": 29.1782261441
      }
    },
    "f724dd39-6f91-49ec-b2f5-299be20b1952": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 2",
        "id": "f724dd39-6f91-49ec-b2f5-299be20b1952",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f724dd39-6f91-49ec-b2f5-299be20b1952",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1645711819,
        "longitude": 30.0970493619
      }
    },
    "f8f2e9c9-540c-4d5e-886a-0519db7fb05d": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f8f2e9c9-540c-4d5e-886a-0519db7fb05d",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f8f2e9c9-540c-4d5e-886a-0519db7fb05d",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.4193474703,
        "longitude": 29.0206127269
      }
    },
    "f930d9bc-a6dd-44f2-a322-65a9cb7f0bd0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Левый буй 18п",
        "id": "f930d9bc-a6dd-44f2-a322-65a9cb7f0bd0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f930d9bc-a6dd-44f2-a322-65a9cb7f0bd0",
      "image": "buyo_left",
      "point": {
        "latitude": 55.2404618686,
        "longitude": 30.1245699077
      }
    },
    "f95a1af0-807a-4583-ae5a-6ba6fb79ee36": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "f95a1af0-807a-4583-ae5a-6ba6fb79ee36",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f95a1af0-807a-4583-ae5a-6ba6fb79ee36",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.3097654605,
        "longitude": 30.3096597902
      }
    },
    "f96d14f9-3168-4ff7-a823-90f4667ee7a0": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 16",
        "id": "f96d14f9-3168-4ff7-a823-90f4667ee7a0",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "f96d14f9-3168-4ff7-a823-90f4667ee7a0",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1644872973,
        "longitude": 29.990301755
      }
    },
    "fa35c4e4-92d6-4d09-a509-d46416e95ff4": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха левой кромки 78",
        "id": "fa35c4e4-92d6-4d09-a509-d46416e95ff4",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fa35c4e4-92d6-4d09-a509-d46416e95ff4",
      "image": "milestone_left",
      "point": {
        "latitude": 55.1131293417,
        "longitude": 29.6959337628
      }
    },
    "fa9e5924-95ac-46c9-8756-609ae0601257": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Не создавать волнения  ",
        "id": "fa9e5924-95ac-46c9-8756-609ae0601257",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fa9e5924-95ac-46c9-8756-609ae0601257",
      "image": "waves_forbidden",
      "point": {
        "latitude": 55.1627837022,
        "longitude": 30.0363288373
      }
    },
    "fb417c4c-4e9f-4c72-9bcd-cbaad70c7da7": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель расстояний 500",
        "id": "fb417c4c-4e9f-4c72-9bcd-cbaad70c7da7",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fb417c4c-4e9f-4c72-9bcd-cbaad70c7da7",
      "image": "kilometrage",
      "point": {
        "latitude": 55.2910487838,
        "longitude": 29.089576588
      }
    },
    "fc1ea021-85b2-4b6d-9086-021b1d163208": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
        "id": "fc1ea021-85b2-4b6d-9086-021b1d163208",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fc1ea021-85b2-4b6d-9086-021b1d163208",
      "image": "axis_romb",
      "point": {
        "latitude": 55.173779654,
        "longitude": 30.1898932533
      }
    },
    "fc52eba8-d222-4868-8df6-b15572e43070": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Веха правой кромки 66",
        "id": "fc52eba8-d222-4868-8df6-b15572e43070",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fc52eba8-d222-4868-8df6-b15572e43070",
      "image": "milestone_right",
      "point": {
        "latitude": 55.1532384864,
        "longitude": 29.7322279111
      }
    },
    "fd1ec2cc-dda0-4ad7-9356-2f56176bde85": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Правый буй 12",
        "id": "fd1ec2cc-dda0-4ad7-9356-2f56176bde85",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fd1ec2cc-dda0-4ad7-9356-2f56176bde85",
      "image": "buyo_right",
      "point": {
        "latitude": 55.1723363745,
        "longitude": 30.1757836041
      }
    },
    "fd7e1ba1-244d-4963-b1de-41a01bad3c34": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "fd7e1ba1-244d-4963-b1de-41a01bad3c34",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fd7e1ba1-244d-4963-b1de-41a01bad3c34",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.2441561824,
        "longitude": 30.1266413499
      }
    },
    "fd84dcf2-4a9b-4d45-93cb-a0ef8893a63c": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "fd84dcf2-4a9b-4d45-93cb-a0ef8893a63c",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fd84dcf2-4a9b-4d45-93cb-a0ef8893a63c",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1842893702,
        "longitude": 30.1983938946
      }
    },
    "fd9ca8ba-3ba2-4327-99ad-38afb5be28a8": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Перевальный знак левый 71",
        "id": "fd9ca8ba-3ba2-4327-99ad-38afb5be28a8",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fd9ca8ba-3ba2-4327-99ad-38afb5be28a8",
      "image": "perev_left",
      "point": {
        "latitude": 55.4253649234,
        "longitude": 28.9645750891
      }
    },
    "fe22826d-199e-4b90-8d5d-bdb4e31121fd": {
      "data": {
        "color": false,
        "comment": "",
        "description": "Соблюдать надводный габарит  ",
        "id": "fe22826d-199e-4b90-8d5d-bdb4e31121fd",
        "place": false,
        "size": false,
        "visibility": false
      },
      "id": "fe22826d-199e-4b90-8d5d-bdb4e31121fd",
      "image": "follow_surf_dimension",
      "point": {
        "latitude": 55.1744752923,
        "longitude": 30.1896815641
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
    color: data[key].data.color,
    place: data[key].data.place,
    size: data[key].data.size,
    visibility: data[key].data.visibility,
    kilometrage: data[key].data.kilometrage ? data[key].data.kilometrage : null,
    comment: data[key].data.comment,
    description: data[key].data.description
  });
}

fs.writeFile(
  "dvinaSigns.js",
  `module.exports = ${JSON.stringify(transformedArray, null, 2)}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Array has been written");
    }
  }
);

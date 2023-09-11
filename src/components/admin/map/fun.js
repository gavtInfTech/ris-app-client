const fs = require("fs");

let data = {
  "00299af6-fe31-49ac-bb21-fc17254a9d3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 91",
      "id": "00299af6-fe31-49ac-bb21-fc17254a9d3b",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00299af6-fe31-49ac-bb21-fc17254a9d3b",
    "image": "perev_right",
    "point": {
      "latitude": 52.6245244537,
      "longitude": 29.9017587463
    }
  },
  "0064eba9-3660-4949-afdb-0b3d1815d72a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 510",
      "id": "0064eba9-3660-4949-afdb-0b3d1815d72a",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0064eba9-3660-4949-afdb-0b3d1815d72a",
    "image": "perev_left",
    "point": {
      "latitude": 53.6890796083,
      "longitude": 28.9575175832
    }
  },
  "0067c66c-19e4-4624-b4d1-e60e0d264e14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 407",
      "id": "0067c66c-19e4-4624-b4d1-e60e0d264e14",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0067c66c-19e4-4624-b4d1-e60e0d264e14",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.4200463492,
      "longitude": 29.0017043263
    }
  },
  "006ad36b-527d-4338-912c-1b80bef09e8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 71",
      "id": "006ad36b-527d-4338-912c-1b80bef09e8f",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "006ad36b-527d-4338-912c-1b80bef09e8f",
    "image": "perev_right",
    "point": {
      "latitude": 52.5828762131,
      "longitude": 30.0046709753
    }
  },
  "009c08d3-fb45-4106-8a9f-e2c66f4fbbb9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 460",
      "id": "009c08d3-fb45-4106-8a9f-e2c66f4fbbb9",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "009c08d3-fb45-4106-8a9f-e2c66f4fbbb9",
    "image": "perev_right",
    "point": {
      "latitude": 53.539617096,
      "longitude": 28.9572405625
    }
  },
  "0115cf0b-fad7-4ee5-acfb-ad4e184d3071": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 165",
      "id": "0115cf0b-fad7-4ee5-acfb-ad4e184d3071",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0115cf0b-fad7-4ee5-acfb-ad4e184d3071",
    "image": "perev_left",
    "point": {
      "latitude": 52.7312679791,
      "longitude": 29.6002304806
    }
  },
  "01ea3400-f4cb-4b69-99d8-e17291a2739d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 330",
      "id": "01ea3400-f4cb-4b69-99d8-e17291a2739d",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01ea3400-f4cb-4b69-99d8-e17291a2739d",
    "image": "perev_left",
    "point": {
      "latitude": 53.2229375229,
      "longitude": 29.223429399
    }
  },
  "01eba987-3515-4540-ad7c-4e07e4898f68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 257",
      "id": "01eba987-3515-4540-ad7c-4e07e4898f68",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01eba987-3515-4540-ad7c-4e07e4898f68",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9734932043,
      "longitude": 29.3813010382
    }
  },
  "0289ae8b-fa45-4ae2-a015-17d53b66931c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 226",
      "id": "0289ae8b-fa45-4ae2-a015-17d53b66931c",
      "kilometrage": 118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0289ae8b-fa45-4ae2-a015-17d53b66931c",
    "image": "perev_right",
    "point": {
      "latitude": 52.8459565714,
      "longitude": 29.3824522665
    }
  },
  "028c920b-a7c4-4aa1-8b49-b2a5e9d8af0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 355",
      "id": "028c920b-a7c4-4aa1-8b49-b2a5e9d8af0a",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "028c920b-a7c4-4aa1-8b49-b2a5e9d8af0a",
    "image": "perev_right",
    "point": {
      "latitude": 53.2494029771,
      "longitude": 29.1282061998
    }
  },
  "02b6e8d9-c291-41f5-9949-06652b36ef47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 118",
      "id": "02b6e8d9-c291-41f5-9949-06652b36ef47",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02b6e8d9-c291-41f5-9949-06652b36ef47",
    "image": "perev_left",
    "point": {
      "latitude": 52.6514142229,
      "longitude": 29.804187795
    }
  },
  "02b78956-8e85-46c5-b9d9-ec579462eac4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 486",
      "id": "02b78956-8e85-46c5-b9d9-ec579462eac4",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02b78956-8e85-46c5-b9d9-ec579462eac4",
    "image": "perev_right",
    "point": {
      "latitude": 53.6058360624,
      "longitude": 28.935432946
    }
  },
  "02cfa1cc-3a96-4bc8-986f-d7f7e2f18143": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 175а",
      "id": "02cfa1cc-3a96-4bc8-986f-d7f7e2f18143",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02cfa1cc-3a96-4bc8-986f-d7f7e2f18143",
    "image": "perev_left",
    "point": {
      "latitude": 52.7563252713,
      "longitude": 29.5451788534
    }
  },
  "02d5fba3-3c12-435a-9dc1-f96a178a718b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 362",
      "id": "02d5fba3-3c12-435a-9dc1-f96a178a718b",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02d5fba3-3c12-435a-9dc1-f96a178a718b",
    "image": "perev_right",
    "point": {
      "latitude": 53.2614631211,
      "longitude": 29.0925885201
    }
  },
  "030d1451-fdad-4740-8c3f-fb8ca05e73ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "030d1451-fdad-4740-8c3f-fb8ca05e73ca",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "030d1451-fdad-4740-8c3f-fb8ca05e73ca",
    "image": "name_of",
    "point": {
      "latitude": 53.2495647788,
      "longitude": 29.1569180253
    }
  },
  "0421fb83-19d9-4767-abc2-e2422b7d5c4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 316",
      "id": "0421fb83-19d9-4767-abc2-e2422b7d5c4b",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0421fb83-19d9-4767-abc2-e2422b7d5c4b",
    "image": "perev_right",
    "point": {
      "latitude": 53.1666689437,
      "longitude": 29.2357357901
    }
  },
  "059a3b03-8cca-45f5-974b-c442c69d6179": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 133",
      "id": "059a3b03-8cca-45f5-974b-c442c69d6179",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "059a3b03-8cca-45f5-974b-c442c69d6179",
    "image": "perev_left",
    "point": {
      "latitude": 52.6532250719,
      "longitude": 29.716097631
    }
  },
  "05fdb66d-08c5-4f7f-b17a-513f92a4f614": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 253",
      "id": "05fdb66d-08c5-4f7f-b17a-513f92a4f614",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05fdb66d-08c5-4f7f-b17a-513f92a4f614",
    "image": "perev_right",
    "point": {
      "latitude": 52.9488865404,
      "longitude": 29.3761439683
    }
  },
  "064ee630-45ac-464c-9114-205675b6a360": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 92",
      "id": "064ee630-45ac-464c-9114-205675b6a360",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "064ee630-45ac-464c-9114-205675b6a360",
    "image": "perev_left",
    "point": {
      "latitude": 52.6250945216,
      "longitude": 29.8957473646
    }
  },
  "06a413fe-b0a0-4efc-a357-5a5f0c154cd2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 394",
      "id": "06a413fe-b0a0-4efc-a357-5a5f0c154cd2",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06a413fe-b0a0-4efc-a357-5a5f0c154cd2",
    "image": "perev_right",
    "point": {
      "latitude": 53.3829457401,
      "longitude": 29.0261252687
    }
  },
  "0701f546-c800-42b0-81f3-24f65cd1be34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 412",
      "id": "0701f546-c800-42b0-81f3-24f65cd1be34",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0701f546-c800-42b0-81f3-24f65cd1be34",
    "image": "perev_left",
    "point": {
      "latitude": 53.4355167175,
      "longitude": 28.9808114289
    }
  },
  "0717020f-4009-4903-aaf1-f3bc0a808fee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 329",
      "id": "0717020f-4009-4903-aaf1-f3bc0a808fee",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0717020f-4009-4903-aaf1-f3bc0a808fee",
    "image": "perev_left",
    "point": {
      "latitude": 53.2146078174,
      "longitude": 29.2308054739
    }
  },
  "0758bdfb-ed08-41c1-936b-48d8dd93bd1b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0758bdfb-ed08-41c1-936b-48d8dd93bd1b",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0758bdfb-ed08-41c1-936b-48d8dd93bd1b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.135321791,
      "longitude": 29.2561312939
    }
  },
  "089afa52-92b9-4f7d-8bfd-f28fea5bfe93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 18",
      "id": "089afa52-92b9-4f7d-8bfd-f28fea5bfe93",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "089afa52-92b9-4f7d-8bfd-f28fea5bfe93",
    "image": "perev_right",
    "point": {
      "latitude": 52.5690215838,
      "longitude": 30.1626484151
    }
  },
  "08cd2ca8-af3f-4de9-a7a6-e6b896f09ca3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 559",
      "id": "08cd2ca8-af3f-4de9-a7a6-e6b896f09ca3",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08cd2ca8-af3f-4de9-a7a6-e6b896f09ca3",
    "image": "perev_left",
    "point": {
      "latitude": 53.7890405343,
      "longitude": 28.954911737
    }
  },
  "08df4efd-5a3d-43ba-9c1e-7529f17cfb83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 208",
      "id": "08df4efd-5a3d-43ba-9c1e-7529f17cfb83",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08df4efd-5a3d-43ba-9c1e-7529f17cfb83",
    "image": "perev_left",
    "point": {
      "latitude": 52.826321638,
      "longitude": 29.447640012
    }
  },
  "08eac4a6-3492-40a3-a10a-2ba535946de0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 224",
      "id": "08eac4a6-3492-40a3-a10a-2ba535946de0",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08eac4a6-3492-40a3-a10a-2ba535946de0",
    "image": "perev_left",
    "point": {
      "latitude": 52.8387539537,
      "longitude": 29.3932008055
    }
  },
  "09201acb-47c8-4e51-b8fa-a11379aeba90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 294",
      "id": "09201acb-47c8-4e51-b8fa-a11379aeba90",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09201acb-47c8-4e51-b8fa-a11379aeba90",
    "image": "perev_left",
    "point": {
      "latitude": 53.0529157242,
      "longitude": 29.2610327606
    }
  },
  "0a3a2267-d887-4821-8e24-90362d6b5d6b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 280",
      "id": "0a3a2267-d887-4821-8e24-90362d6b5d6b",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a3a2267-d887-4821-8e24-90362d6b5d6b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7017554036,
      "longitude": 28.9741181725
    }
  },
  "0a59f36d-b64e-44f3-bab3-2b4202eca432": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 454",
      "id": "0a59f36d-b64e-44f3-bab3-2b4202eca432",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a59f36d-b64e-44f3-bab3-2b4202eca432",
    "image": "perev_left",
    "point": {
      "latitude": 53.5183295444,
      "longitude": 28.9697010478
    }
  },
  "0b2ed33d-4ebb-4810-9f70-1eb7b54385c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 120",
      "id": "0b2ed33d-4ebb-4810-9f70-1eb7b54385c5",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b2ed33d-4ebb-4810-9f70-1eb7b54385c5",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8571324354,
      "longitude": 29.3622486838
    }
  },
  "0b4fb954-608f-46a3-a0ce-cbb9fb8fb3d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44",
      "id": "0b4fb954-608f-46a3-a0ce-cbb9fb8fb3d4",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b4fb954-608f-46a3-a0ce-cbb9fb8fb3d4",
    "image": "perev_left",
    "point": {
      "latitude": 52.5568194595,
      "longitude": 30.0725223434
    }
  },
  "0b50dcad-4cba-4609-8363-a822cbcb111c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "0b50dcad-4cba-4609-8363-a822cbcb111c",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b50dcad-4cba-4609-8363-a822cbcb111c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6191778135,
      "longitude": 29.8943528499
    }
  },
  "0bb6964b-8881-4017-a033-5237859e9fa1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0bb6964b-8881-4017-a033-5237859e9fa1",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bb6964b-8881-4017-a033-5237859e9fa1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1422992898,
      "longitude": 29.2645754465
    }
  },
  "0c2f8a8e-da53-4ffd-81a0-1743ea2295f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 51",
      "id": "0c2f8a8e-da53-4ffd-81a0-1743ea2295f3",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c2f8a8e-da53-4ffd-81a0-1743ea2295f3",
    "image": "perev_right",
    "point": {
      "latitude": 52.5685859419,
      "longitude": 30.041598674
    }
  },
  "0c431c4a-ade1-4e6a-9cf4-07a8e5a700f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 531",
      "id": "0c431c4a-ade1-4e6a-9cf4-07a8e5a700f5",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c431c4a-ade1-4e6a-9cf4-07a8e5a700f5",
    "image": "perev_right",
    "point": {
      "latitude": 53.7100139266,
      "longitude": 28.9591231213
    }
  },
  "0c934ca9-2e18-4a18-9fa0-580c22e3e520": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 441",
      "id": "0c934ca9-2e18-4a18-9fa0-580c22e3e520",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c934ca9-2e18-4a18-9fa0-580c22e3e520",
    "image": "perev_right",
    "point": {
      "latitude": 53.4942669852,
      "longitude": 28.9511439986
    }
  },
  "0d4b446a-ce8e-4763-94a7-8bb7321c8828": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 149",
      "id": "0d4b446a-ce8e-4763-94a7-8bb7321c8828",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d4b446a-ce8e-4763-94a7-8bb7321c8828",
    "image": "perev_left",
    "point": {
      "latitude": 52.6816589677,
      "longitude": 29.664468779
    }
  },
  "0d4b489e-e5e1-46ba-842c-4c63fd77709d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 240А",
      "id": "0d4b489e-e5e1-46ba-842c-4c63fd77709d",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d4b489e-e5e1-46ba-842c-4c63fd77709d",
    "image": "perev_left",
    "point": {
      "latitude": 52.8970904657,
      "longitude": 29.3352156495
    }
  },
  "0e5430aa-7225-4576-99cd-ef51988eb8d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 566",
      "id": "0e5430aa-7225-4576-99cd-ef51988eb8d3",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e5430aa-7225-4576-99cd-ef51988eb8d3",
    "image": "perev_left",
    "point": {
      "latitude": 53.7943657169,
      "longitude": 28.9722614478
    }
  },
  "0ea3a529-6578-4c05-a783-8c6f1bd4d90a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 546",
      "id": "0ea3a529-6578-4c05-a783-8c6f1bd4d90a",
      "kilometrage": 291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ea3a529-6578-4c05-a783-8c6f1bd4d90a",
    "image": "perev_right",
    "point": {
      "latitude": 53.7534011951,
      "longitude": 28.9306456291
    }
  },
  "0eaa6780-10be-41f3-becc-dae0d08f58a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 166",
      "id": "0eaa6780-10be-41f3-becc-dae0d08f58a0",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0eaa6780-10be-41f3-becc-dae0d08f58a0",
    "image": "perev_right",
    "point": {
      "latitude": 52.7331021245,
      "longitude": 29.5916624525
    }
  },
  "0ebe927d-6715-47f9-80b9-816ea84dcf0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 49",
      "id": "0ebe927d-6715-47f9-80b9-816ea84dcf0a",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ebe927d-6715-47f9-80b9-816ea84dcf0a",
    "image": "perev_left",
    "point": {
      "latitude": 52.5638291424,
      "longitude": 30.0500355088
    }
  },
  "0f0843b0-7a9b-4be2-bc07-8f51ebf4d51c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 280",
      "id": "0f0843b0-7a9b-4be2-bc07-8f51ebf4d51c",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f0843b0-7a9b-4be2-bc07-8f51ebf4d51c",
    "image": "perev_right",
    "point": {
      "latitude": 53.0015272325,
      "longitude": 29.2745263374
    }
  },
  "0f3dbd3c-22c8-49db-9deb-25bc8dab8284": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 562",
      "id": "0f3dbd3c-22c8-49db-9deb-25bc8dab8284",
      "kilometrage": 299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f3dbd3c-22c8-49db-9deb-25bc8dab8284",
    "image": "perev_left",
    "point": {
      "latitude": 53.7878649694,
      "longitude": 28.9585880235
    }
  },
  "0f5939a0-f2ed-4c84-b001-4bc7815f5b77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 216",
      "id": "0f5939a0-f2ed-4c84-b001-4bc7815f5b77",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f5939a0-f2ed-4c84-b001-4bc7815f5b77",
    "image": "perev_right",
    "point": {
      "latitude": 52.8331566636,
      "longitude": 29.4179904659
    }
  },
  "0f8e0f72-eec2-487c-ba61-5db4f9e0d07e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3",
      "id": "0f8e0f72-eec2-487c-ba61-5db4f9e0d07e",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f8e0f72-eec2-487c-ba61-5db4f9e0d07e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.6466829305,
      "longitude": 29.7651636016
    }
  },
  "0fa81255-4586-40d8-9965-b876604995d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 159",
      "id": "0fa81255-4586-40d8-9965-b876604995d1",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fa81255-4586-40d8-9965-b876604995d1",
    "image": "perev_right",
    "point": {
      "latitude": 52.7004288081,
      "longitude": 29.6048710388
    }
  },
  "10ab64dd-124e-4792-8cab-1e47ced91fe2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "10ab64dd-124e-4792-8cab-1e47ced91fe2",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10ab64dd-124e-4792-8cab-1e47ced91fe2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.2080186349,
      "longitude": 29.2307340997
    }
  },
  "11d60bc8-bd13-4e5c-8d8c-8db359123c21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 113",
      "id": "11d60bc8-bd13-4e5c-8d8c-8db359123c21",
      "kilometrage": 56,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11d60bc8-bd13-4e5c-8d8c-8db359123c21",
    "image": "perev_right",
    "point": {
      "latitude": 52.6370943149,
      "longitude": 29.7937413153
    }
  },
  "11f16cc7-2738-47c4-9fa9-5923b9a43126": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 544",
      "id": "11f16cc7-2738-47c4-9fa9-5923b9a43126",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11f16cc7-2738-47c4-9fa9-5923b9a43126",
    "image": "perev_left",
    "point": {
      "latitude": 53.7521054842,
      "longitude": 28.9372421648
    }
  },
  "11f86644-5bc5-41b7-ad8c-61b7c7052295": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 340",
      "id": "11f86644-5bc5-41b7-ad8c-61b7c7052295",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11f86644-5bc5-41b7-ad8c-61b7c7052295",
    "image": "perev_left",
    "point": {
      "latitude": 53.2391498632,
      "longitude": 29.1899028188
    }
  },
  "125dc2eb-bb76-4c8d-a67c-53477095b48e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 136",
      "id": "125dc2eb-bb76-4c8d-a67c-53477095b48e",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "125dc2eb-bb76-4c8d-a67c-53477095b48e",
    "image": "perev_right",
    "point": {
      "latitude": 52.6626370472,
      "longitude": 29.7024062667
    }
  },
  "12c1a781-2109-4e7d-90d0-5767a10b8f32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "12c1a781-2109-4e7d-90d0-5767a10b8f32",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12c1a781-2109-4e7d-90d0-5767a10b8f32",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3428710922,
      "longitude": 29.030081859
    }
  },
  "12cb4eb9-09a3-4f7e-acca-cdfead45fa8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 360",
      "id": "12cb4eb9-09a3-4f7e-acca-cdfead45fa8c",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12cb4eb9-09a3-4f7e-acca-cdfead45fa8c",
    "image": "perev_left",
    "point": {
      "latitude": 53.2581770317,
      "longitude": 29.1046784365
    }
  },
  "12ecd5d9-869c-4426-b239-aaf2281c3679": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "12ecd5d9-869c-4426-b239-aaf2281c3679",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12ecd5d9-869c-4426-b239-aaf2281c3679",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.809443028430564,
      "longitude": 29.4245051127713
    }
  },
  "131e16a1-218d-4dbb-b284-5e22cb4f1039": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "131e16a1-218d-4dbb-b284-5e22cb4f1039",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "131e16a1-218d-4dbb-b284-5e22cb4f1039",
    "image": "perev_left",
    "point": {
      "latitude": 52.5547466319,
      "longitude": 30.0977481098
    }
  },
  "13930758-e825-4645-b86b-1f36f34d082f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 395",
      "id": "13930758-e825-4645-b86b-1f36f34d082f",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13930758-e825-4645-b86b-1f36f34d082f",
    "image": "perev_right",
    "point": {
      "latitude": 53.3884861067,
      "longitude": 29.0190928044
    }
  },
  "13c832d9-4381-4233-97a6-aa2d6be85aa7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 50",
      "id": "13c832d9-4381-4233-97a6-aa2d6be85aa7",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13c832d9-4381-4233-97a6-aa2d6be85aa7",
    "image": "perev_right",
    "point": {
      "latitude": 52.5650252757,
      "longitude": 30.0412562354
    }
  },
  "14206893-df73-41e0-8170-7f8b4a3a3485": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "14206893-df73-41e0-8170-7f8b4a3a3485",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14206893-df73-41e0-8170-7f8b4a3a3485",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9794255283,
      "longitude": 29.3165553774
    }
  },
  "1482e9f6-c08e-44eb-960a-7af1061c87a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80",
      "id": "1482e9f6-c08e-44eb-960a-7af1061c87a1",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1482e9f6-c08e-44eb-960a-7af1061c87a1",
    "image": "perev_right",
    "point": {
      "latitude": 52.6060898085,
      "longitude": 29.9464529038
    }
  },
  "14976d1c-70d7-48b9-8671-3b741e71fe35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 187",
      "id": "14976d1c-70d7-48b9-8671-3b741e71fe35",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14976d1c-70d7-48b9-8671-3b741e71fe35",
    "image": "perev_left",
    "point": {
      "latitude": 52.7912813483,
      "longitude": 29.4971362798
    }
  },
  "15120b02-05ea-448a-8dc6-cf1ff8cd033b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 313",
      "id": "15120b02-05ea-448a-8dc6-cf1ff8cd033b",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15120b02-05ea-448a-8dc6-cf1ff8cd033b",
    "image": "perev_right",
    "point": {
      "latitude": 53.1508727614,
      "longitude": 29.2520824234
    }
  },
  "15318542-7eb6-4725-b334-dd3b41ec84bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 21",
      "id": "15318542-7eb6-4725-b334-dd3b41ec84bc",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15318542-7eb6-4725-b334-dd3b41ec84bc",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.5575962782,
      "longitude": 30.1399293502
    }
  },
  "156ce102-83f1-4213-abb8-24f5f24e1a1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "156ce102-83f1-4213-abb8-24f5f24e1a1e",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "156ce102-83f1-4213-abb8-24f5f24e1a1e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1503422172,
      "longitude": 29.2526157365
    }
  },
  "162fe456-d1be-4546-bd19-2c40f93488a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 322",
      "id": "162fe456-d1be-4546-bd19-2c40f93488a0",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "162fe456-d1be-4546-bd19-2c40f93488a0",
    "image": "perev_left",
    "point": {
      "latitude": 53.1914139583,
      "longitude": 29.2515509274
    }
  },
  "163ca201-1ad3-4e28-ba85-8e4235fb2ed8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 220",
      "id": "163ca201-1ad3-4e28-ba85-8e4235fb2ed8",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "163ca201-1ad3-4e28-ba85-8e4235fb2ed8",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3856251893,
      "longitude": 29.0227538181
    }
  },
  "169c7f30-f6e6-4417-97b6-ca3f9ad7b1e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "169c7f30-f6e6-4417-97b6-ca3f9ad7b1e0",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "169c7f30-f6e6-4417-97b6-ca3f9ad7b1e0",
    "image": "perev_right",
    "point": {
      "latitude": 52.557655668,
      "longitude": 30.1034512029
    }
  },
  "170829e1-bec4-4a83-888e-c6564f63f22b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 512",
      "id": "170829e1-bec4-4a83-888e-c6564f63f22b",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "170829e1-bec4-4a83-888e-c6564f63f22b",
    "image": "perev_right",
    "point": {
      "latitude": 53.690128725,
      "longitude": 28.962158183
    }
  },
  "17b9072a-812a-45c3-b384-96decff9f115": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 132",
      "id": "17b9072a-812a-45c3-b384-96decff9f115",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17b9072a-812a-45c3-b384-96decff9f115",
    "image": "perev_right",
    "point": {
      "latitude": 52.6505652504,
      "longitude": 29.7126847384
    }
  },
  "18361662-b9c1-44bd-94a5-8073589411f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 497",
      "id": "18361662-b9c1-44bd-94a5-8073589411f9",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18361662-b9c1-44bd-94a5-8073589411f9",
    "image": "perev_left",
    "point": {
      "latitude": 53.6348138489,
      "longitude": 28.937285982
    }
  },
  "186f367c-f634-4916-813f-92c18ee54d48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 48",
      "id": "186f367c-f634-4916-813f-92c18ee54d48",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "186f367c-f634-4916-813f-92c18ee54d48",
    "image": "perev_right",
    "point": {
      "latitude": 52.5602369137,
      "longitude": 30.0523419235
    }
  },
  "187d7455-ac85-4953-9fa6-1d079712481a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 580",
      "id": "187d7455-ac85-4953-9fa6-1d079712481a",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "187d7455-ac85-4953-9fa6-1d079712481a",
    "image": "perev_left",
    "point": {
      "latitude": 53.8368806349,
      "longitude": 29.0019982677
    }
  },
  "188dd971-31a1-490b-b2e1-72957779ae89": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 453",
      "id": "188dd971-31a1-490b-b2e1-72957779ae89",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "188dd971-31a1-490b-b2e1-72957779ae89",
    "image": "perev_right",
    "point": {
      "latitude": 53.5163686696,
      "longitude": 28.9616835057
    }
  },
  "18d30065-da24-4d87-b57b-21c707553c87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 464",
      "id": "18d30065-da24-4d87-b57b-21c707553c87",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18d30065-da24-4d87-b57b-21c707553c87",
    "image": "perev_right",
    "point": {
      "latitude": 53.5465628036,
      "longitude": 28.9531087927
    }
  },
  "19372cf9-b9c8-4aba-a456-a58e3d3dc32c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "19372cf9-b9c8-4aba-a456-a58e3d3dc32c",
      "kilometrage": 47,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19372cf9-b9c8-4aba-a456-a58e3d3dc32c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.6237939229,
      "longitude": 29.8813952801
    }
  },
  "1968c859-aef4-4613-b673-e9c88dc9446b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1968c859-aef4-4613-b673-e9c88dc9446b",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1968c859-aef4-4613-b673-e9c88dc9446b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1390531039,
      "longitude": 29.2611136488
    }
  },
  "19d5b36f-023b-4ec9-9a34-00bc536ad711": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 311",
      "id": "19d5b36f-023b-4ec9-9a34-00bc536ad711",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19d5b36f-023b-4ec9-9a34-00bc536ad711",
    "image": "perev_left",
    "point": {
      "latitude": 53.1450056065,
      "longitude": 29.2660625715
    }
  },
  "19de326f-fbc1-469f-a337-6b5ce8d5a40c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 505",
      "id": "19de326f-fbc1-469f-a337-6b5ce8d5a40c",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19de326f-fbc1-469f-a337-6b5ce8d5a40c",
    "image": "perev_right",
    "point": {
      "latitude": 53.6628447208,
      "longitude": 28.9452469067
    }
  },
  "19f61776-db23-4a26-86bf-3c5be3e4e3a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 273",
      "id": "19f61776-db23-4a26-86bf-3c5be3e4e3a8",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19f61776-db23-4a26-86bf-3c5be3e4e3a8",
    "image": "perev_left",
    "point": {
      "latitude": 52.9826399282,
      "longitude": 29.283733553
    }
  },
  "1a089318-5dea-41ea-a54d-abb44cec6d39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 265",
      "id": "1a089318-5dea-41ea-a54d-abb44cec6d39",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a089318-5dea-41ea-a54d-abb44cec6d39",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6239753821,
      "longitude": 28.9373420592
    }
  },
  "1a11cdab-4108-4de4-9147-355bcb12c7ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "1a11cdab-4108-4de4-9147-355bcb12c7ad",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a11cdab-4108-4de4-9147-355bcb12c7ad",
    "image": "perev_left",
    "point": {
      "latitude": 52.5826202409,
      "longitude": 30.1837569951
    }
  },
  "1a4a4d9c-4841-476a-83e9-5986c5c0cc77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 433",
      "id": "1a4a4d9c-4841-476a-83e9-5986c5c0cc77",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a4a4d9c-4841-476a-83e9-5986c5c0cc77",
    "image": "perev_right",
    "point": {
      "latitude": 53.4791228128,
      "longitude": 28.9507839078
    }
  },
  "1a88a157-e6ac-4450-abff-8f8a251ee086": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 488",
      "id": "1a88a157-e6ac-4450-abff-8f8a251ee086",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a88a157-e6ac-4450-abff-8f8a251ee086",
    "image": "perev_right",
    "point": {
      "latitude": 53.6090407813,
      "longitude": 28.9275047271
    }
  },
  "1b5b4f94-6de8-48c7-a00a-711f897df171": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "1b5b4f94-6de8-48c7-a00a-711f897df171",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b5b4f94-6de8-48c7-a00a-711f897df171",
    "image": "perev_left",
    "point": {
      "latitude": 52.55921804,
      "longitude": 30.0916100591
    }
  },
  "1b7083c9-e188-4b5b-a3b5-f1162f6ef02d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 146",
      "id": "1b7083c9-e188-4b5b-a3b5-f1162f6ef02d",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b7083c9-e188-4b5b-a3b5-f1162f6ef02d",
    "image": "perev_left",
    "point": {
      "latitude": 52.6868856141,
      "longitude": 29.6764554148
    }
  },
  "1bb026a6-cbcc-46be-84f0-f254a4fe66f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 183",
      "id": "1bb026a6-cbcc-46be-84f0-f254a4fe66f0",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1bb026a6-cbcc-46be-84f0-f254a4fe66f0",
    "image": "perev_left",
    "point": {
      "latitude": 52.788582905,
      "longitude": 29.5002710383
    }
  },
  "1bc3bc31-302b-4417-b99b-34e3389806ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 575",
      "id": "1bc3bc31-302b-4417-b99b-34e3389806ec",
      "kilometrage": 305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1bc3bc31-302b-4417-b99b-34e3389806ec",
    "image": "perev_left",
    "point": {
      "latitude": 53.818377459,
      "longitude": 29.0051821163
    }
  },
  "1bc8d1af-5ba6-4823-bbc2-eade319c4f4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 446",
      "id": "1bc8d1af-5ba6-4823-bbc2-eade319c4f4b",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1bc8d1af-5ba6-4823-bbc2-eade319c4f4b",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.4988526633,
      "longitude": 28.9734177598
    }
  },
  "1be733e2-bf60-472c-b48f-0cc4643f9b4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 81",
      "id": "1be733e2-bf60-472c-b48f-0cc4643f9b4b",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1be733e2-bf60-472c-b48f-0cc4643f9b4b",
    "image": "perev_left",
    "point": {
      "latitude": 52.6128638276,
      "longitude": 29.9414315841
    }
  },
  "1c126fbf-a7f6-476f-834f-91a0a8cc0253": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 518",
      "id": "1c126fbf-a7f6-476f-834f-91a0a8cc0253",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c126fbf-a7f6-476f-834f-91a0a8cc0253",
    "image": "perev_right",
    "point": {
      "latitude": 53.6937440103,
      "longitude": 28.967415764
    }
  },
  "1c2aa02a-36cd-46d5-affe-f7aab4a26f00": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1c2aa02a-36cd-46d5-affe-f7aab4a26f00",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c2aa02a-36cd-46d5-affe-f7aab4a26f00",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8324692552,
      "longitude": 29.0007749399
    }
  },
  "1db25b6e-912c-4f86-bf04-271114357fe3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 78",
      "id": "1db25b6e-912c-4f86-bf04-271114357fe3",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1db25b6e-912c-4f86-bf04-271114357fe3",
    "image": "perev_right",
    "point": {
      "latitude": 52.5976536136,
      "longitude": 29.9625774586
    }
  },
  "1f74a1c4-110a-4440-9867-f6bd63988cbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 503",
      "id": "1f74a1c4-110a-4440-9867-f6bd63988cbf",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f74a1c4-110a-4440-9867-f6bd63988cbf",
    "image": "perev_left",
    "point": {
      "latitude": 53.6585500153,
      "longitude": 28.9465602029
    }
  },
  "1fa8be17-0864-402e-bae1-7287e290632a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 420",
      "id": "1fa8be17-0864-402e-bae1-7287e290632a",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fa8be17-0864-402e-bae1-7287e290632a",
    "image": "perev_left",
    "point": {
      "latitude": 53.4590725707,
      "longitude": 28.963968654
    }
  },
  "1fe2a490-efb3-4202-8bef-f8a84ae6ce64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "1fe2a490-efb3-4202-8bef-f8a84ae6ce64",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fe2a490-efb3-4202-8bef-f8a84ae6ce64",
    "image": "perev_left",
    "point": {
      "latitude": 52.572599718,
      "longitude": 30.2008186681
    }
  },
  "200ab54c-9cfc-4cc1-8d03-2bd187d05ba0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "200ab54c-9cfc-4cc1-8d03-2bd187d05ba0",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "200ab54c-9cfc-4cc1-8d03-2bd187d05ba0",
    "image": "perev_left",
    "point": {
      "latitude": 52.5594356829,
      "longitude": 30.1271512898
    }
  },
  "203bd55a-1cd9-4534-a472-242afa2deaef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 70",
      "id": "203bd55a-1cd9-4534-a472-242afa2deaef",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "203bd55a-1cd9-4534-a472-242afa2deaef",
    "image": "perev_left",
    "point": {
      "latitude": 52.5879019661,
      "longitude": 30.0130289863
    }
  },
  "204ed8c4-669a-4f3e-beff-959e382e3b2f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "204ed8c4-669a-4f3e-beff-959e382e3b2f",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "204ed8c4-669a-4f3e-beff-959e382e3b2f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1483143046,
      "longitude": 29.2541153948
    }
  },
  "206d1c8e-1caa-4fba-92e3-ac894133ad0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 283",
      "id": "206d1c8e-1caa-4fba-92e3-ac894133ad0b",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "206d1c8e-1caa-4fba-92e3-ac894133ad0b",
    "image": "perev_left",
    "point": {
      "latitude": 53.0172329939,
      "longitude": 29.2816350035
    }
  },
  "2115b877-16dd-4296-835d-bb9f55740b84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 579",
      "id": "2115b877-16dd-4296-835d-bb9f55740b84",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2115b877-16dd-4296-835d-bb9f55740b84",
    "image": "perev_right",
    "point": {
      "latitude": 53.8350016091,
      "longitude": 29.000332942
    }
  },
  "212b4138-9f6c-41e7-9d0a-1bd982ee8976": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 450",
      "id": "212b4138-9f6c-41e7-9d0a-1bd982ee8976",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "212b4138-9f6c-41e7-9d0a-1bd982ee8976",
    "image": "perev_left",
    "point": {
      "latitude": 53.5079609312,
      "longitude": 28.9629512781
    }
  },
  "212e8b51-8594-46c4-be53-2d67ac0cb2d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 389",
      "id": "212e8b51-8594-46c4-be53-2d67ac0cb2d6",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "212e8b51-8594-46c4-be53-2d67ac0cb2d6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3657092087,
      "longitude": 29.0224815488
    }
  },
  "2144f2b1-eec4-4c9b-a581-8bd206a5c102": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "2144f2b1-eec4-4c9b-a581-8bd206a5c102",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2144f2b1-eec4-4c9b-a581-8bd206a5c102",
    "image": "perev_right",
    "point": {
      "latitude": 52.6380559222,
      "longitude": 29.7505738004
    }
  },
  "227b960b-798f-40f3-8a2f-b4329063798c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 561",
      "id": "227b960b-798f-40f3-8a2f-b4329063798c",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "227b960b-798f-40f3-8a2f-b4329063798c",
    "image": "perev_right",
    "point": {
      "latitude": 53.7929247021,
      "longitude": 28.9596387624
    }
  },
  "22d8c18b-4780-46e8-bfce-af62ccdcd4bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 511",
      "id": "22d8c18b-4780-46e8-bfce-af62ccdcd4bd",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22d8c18b-4780-46e8-bfce-af62ccdcd4bd",
    "image": "perev_right",
    "point": {
      "latitude": 53.6912241637,
      "longitude": 28.9573235819
    }
  },
  "23372fb3-ece7-461b-bca3-e967e6061c0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 255",
      "id": "23372fb3-ece7-461b-bca3-e967e6061c0d",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23372fb3-ece7-461b-bca3-e967e6061c0d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5616108465,
      "longitude": 28.9696097592
    }
  },
  "238e1bdc-0a02-4745-959d-e62d6ec53955": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 471",
      "id": "238e1bdc-0a02-4745-959d-e62d6ec53955",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "238e1bdc-0a02-4745-959d-e62d6ec53955",
    "image": "perev_right",
    "point": {
      "latitude": 53.5630672535,
      "longitude": 28.9482756377
    }
  },
  "23b4d4db-524e-410b-a21d-f57666002c32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 230",
      "id": "23b4d4db-524e-410b-a21d-f57666002c32",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23b4d4db-524e-410b-a21d-f57666002c32",
    "image": "perev_left",
    "point": {
      "latitude": 52.8581191949,
      "longitude": 29.3687951643
    }
  },
  "23e4ebe9-1f64-430e-9aef-ed053c1033b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 301",
      "id": "23e4ebe9-1f64-430e-9aef-ed053c1033b6",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23e4ebe9-1f64-430e-9aef-ed053c1033b6",
    "image": "perev_left",
    "point": {
      "latitude": 53.0962259562,
      "longitude": 29.249490943
    }
  },
  "2455089f-5efd-4435-85f6-1cbd231fb27c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 477",
      "id": "2455089f-5efd-4435-85f6-1cbd231fb27c",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2455089f-5efd-4435-85f6-1cbd231fb27c",
    "image": "perev_right",
    "point": {
      "latitude": 53.5693255147,
      "longitude": 28.950162276
    }
  },
  "24ab1919-47ee-42bc-8ccf-86bb0ada02e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 126",
      "id": "24ab1919-47ee-42bc-8ccf-86bb0ada02e4",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24ab1919-47ee-42bc-8ccf-86bb0ada02e4",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6396620141,
      "longitude": 29.7676918071
    }
  },
  "24ae2eb0-6d28-4c00-99f2-a84272b44082": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 240",
      "id": "24ae2eb0-6d28-4c00-99f2-a84272b44082",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24ae2eb0-6d28-4c00-99f2-a84272b44082",
    "image": "perev_right",
    "point": {
      "latitude": 52.8926222626,
      "longitude": 29.3316643947
    }
  },
  "25491a77-ed9a-4ca9-bbe7-5ec33878d08e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "25491a77-ed9a-4ca9-bbe7-5ec33878d08e",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25491a77-ed9a-4ca9-bbe7-5ec33878d08e",
    "image": "perev_right",
    "point": {
      "latitude": 52.5560828678,
      "longitude": 30.1349215394
    }
  },
  "26315fcf-96dc-4e2c-a573-410874b193c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 318",
      "id": "26315fcf-96dc-4e2c-a573-410874b193c1",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26315fcf-96dc-4e2c-a573-410874b193c1",
    "image": "perev_right",
    "point": {
      "latitude": 53.1778818365,
      "longitude": 29.2370809175
    }
  },
  "2667e5b2-012a-4ece-b6e2-751626ef0e94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2667e5b2-012a-4ece-b6e2-751626ef0e94",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2667e5b2-012a-4ece-b6e2-751626ef0e94",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8298898139,
      "longitude": 29.0026132872
    }
  },
  "26927523-1175-413f-948a-982846414b47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "26927523-1175-413f-948a-982846414b47",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26927523-1175-413f-948a-982846414b47",
    "image": "perev_right",
    "point": {
      "latitude": 52.5749881711,
      "longitude": 30.0289409308
    }
  },
  "26c9d9ec-4c08-4b4e-8028-7c4891f391ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 210",
      "id": "26c9d9ec-4c08-4b4e-8028-7c4891f391ca",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26c9d9ec-4c08-4b4e-8028-7c4891f391ca",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3169519798,
      "longitude": 29.0620465876
    }
  },
  "27815bfd-32fc-4071-9216-9bca89e8c66b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 220",
      "id": "27815bfd-32fc-4071-9216-9bca89e8c66b",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27815bfd-32fc-4071-9216-9bca89e8c66b",
    "image": "perev_left",
    "point": {
      "latitude": 52.8361848712,
      "longitude": 29.40352087
    }
  },
  "278b8c5e-ef2e-49e6-8fea-e4044b9fa860": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 192",
      "id": "278b8c5e-ef2e-49e6-8fea-e4044b9fa860",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "278b8c5e-ef2e-49e6-8fea-e4044b9fa860",
    "image": "perev_left",
    "point": {
      "latitude": 52.8055341737,
      "longitude": 29.4793012649
    }
  },
  "27a5b9a4-bf51-48ba-bc6c-4ce33a77003d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "27a5b9a4-bf51-48ba-bc6c-4ce33a77003d",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27a5b9a4-bf51-48ba-bc6c-4ce33a77003d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8039720281,
      "longitude": 29.4642857586
    }
  },
  "27b4c725-02c1-4eb5-99a2-b8b45eb30f0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 556",
      "id": "27b4c725-02c1-4eb5-99a2-b8b45eb30f0b",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27b4c725-02c1-4eb5-99a2-b8b45eb30f0b",
    "image": "perev_left",
    "point": {
      "latitude": 53.7809841471,
      "longitude": 28.9573040471
    }
  },
  "27eda313-a413-4dbb-9f40-62f8ad114b46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 215",
      "id": "27eda313-a413-4dbb-9f40-62f8ad114b46",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27eda313-a413-4dbb-9f40-62f8ad114b46",
    "image": "perev_left",
    "point": {
      "latitude": 52.8348504343,
      "longitude": 29.4262318136
    }
  },
  "28066652-0067-4447-9b17-8cdbc26f5cf5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "28066652-0067-4447-9b17-8cdbc26f5cf5",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28066652-0067-4447-9b17-8cdbc26f5cf5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.344883893,
      "longitude": 29.0319654975
    }
  },
  "284fc5d2-12f4-45ac-b35c-b8c8e755530b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 150",
      "id": "284fc5d2-12f4-45ac-b35c-b8c8e755530b",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "284fc5d2-12f4-45ac-b35c-b8c8e755530b",
    "image": "perev_right",
    "point": {
      "latitude": 52.6818685025,
      "longitude": 29.6492680407
    }
  },
  "288b13f2-b260-448c-a88b-237b8cc11797": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "288b13f2-b260-448c-a88b-237b8cc11797",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "288b13f2-b260-448c-a88b-237b8cc11797",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7357758131,
      "longitude": 29.5898426536
    }
  },
  "288f0059-3a65-440d-b89f-6fa47ca88816": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 431",
      "id": "288f0059-3a65-440d-b89f-6fa47ca88816",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "288f0059-3a65-440d-b89f-6fa47ca88816",
    "image": "perev_left",
    "point": {
      "latitude": 53.4786417641,
      "longitude": 28.9584045649
    }
  },
  "28d83e29-7214-423d-9b17-0e27ddd522af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 158",
      "id": "28d83e29-7214-423d-9b17-0e27ddd522af",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28d83e29-7214-423d-9b17-0e27ddd522af",
    "image": "perev_right",
    "point": {
      "latitude": 52.6979030096,
      "longitude": 29.606256765
    }
  },
  "29459ecc-c7b5-4338-96c9-dffb826c28a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 218",
      "id": "29459ecc-c7b5-4338-96c9-dffb826c28a7",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29459ecc-c7b5-4338-96c9-dffb826c28a7",
    "image": "perev_left",
    "point": {
      "latitude": 52.8395632321,
      "longitude": 29.4116526687
    }
  },
  "29524fba-6c16-4a7e-859e-2a263f602b1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "29524fba-6c16-4a7e-859e-2a263f602b1d",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29524fba-6c16-4a7e-859e-2a263f602b1d",
    "image": "waves_forbidden",
    "point": {
      "latitude": 53.1383051008,
      "longitude": 29.2581409337
    }
  },
  "29b79f37-c3c7-4bd2-aa4a-c6658bc855db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 150",
      "id": "29b79f37-c3c7-4bd2-aa4a-c6658bc855db",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29b79f37-c3c7-4bd2-aa4a-c6658bc855db",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0010442358,
      "longitude": 29.2755083551
    }
  },
  "2a677d2f-94ba-4f36-b032-945f269a0c7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 402",
      "id": "2a677d2f-94ba-4f36-b032-945f269a0c7f",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a677d2f-94ba-4f36-b032-945f269a0c7f",
    "image": "perev_left",
    "point": {
      "latitude": 53.4175674648,
      "longitude": 28.99419263
    }
  },
  "2a91a243-f3ec-4d53-bcc8-9d6743179241": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 286",
      "id": "2a91a243-f3ec-4d53-bcc8-9d6743179241",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a91a243-f3ec-4d53-bcc8-9d6743179241",
    "image": "perev_right",
    "point": {
      "latitude": 53.0232350302,
      "longitude": 29.2646514351
    }
  },
  "2b5e415d-84e1-4780-9a8c-b8d8de348a95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 115",
      "id": "2b5e415d-84e1-4780-9a8c-b8d8de348a95",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b5e415d-84e1-4780-9a8c-b8d8de348a95",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8351799552,
      "longitude": 29.4088172632
    }
  },
  "2ba42723-f9ff-4f39-a8b9-66512a17ff27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2ba42723-f9ff-4f39-a8b9-66512a17ff27",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ba42723-f9ff-4f39-a8b9-66512a17ff27",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6538431067,
      "longitude": 28.9357899367
    }
  },
  "2c67f2a7-e42e-4122-9552-d02bf8e3d5c0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 53",
      "id": "2c67f2a7-e42e-4122-9552-d02bf8e3d5c0",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c67f2a7-e42e-4122-9552-d02bf8e3d5c0",
    "image": "perev_right",
    "point": {
      "latitude": 52.5694838509,
      "longitude": 30.0420060913
    }
  },
  "2d06b841-3ce2-4292-9c86-848bd06e3772": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 215",
      "id": "2d06b841-3ce2-4292-9c86-848bd06e3772",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d06b841-3ce2-4292-9c86-848bd06e3772",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3506049715,
      "longitude": 29.0255218482
    }
  },
  "2d0c5231-9e51-43bd-88af-57b6a117932c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 495",
      "id": "2d0c5231-9e51-43bd-88af-57b6a117932c",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d0c5231-9e51-43bd-88af-57b6a117932c",
    "image": "perev_right",
    "point": {
      "latitude": 53.6296855746,
      "longitude": 28.9331208897
    }
  },
  "2e53de81-dceb-4d72-a202-1415018afe04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 285",
      "id": "2e53de81-dceb-4d72-a202-1415018afe04",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e53de81-dceb-4d72-a202-1415018afe04",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0187977984,
      "longitude": 29.2663323649
    }
  },
  "2e89d1ac-c677-4d57-98b5-f8779f380bea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 15",
      "id": "2e89d1ac-c677-4d57-98b5-f8779f380bea",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e89d1ac-c677-4d57-98b5-f8779f380bea",
    "image": "buyo_separator",
    "point": {
      "latitude": 53.1366496055,
      "longitude": 29.2546641284
    }
  },
  "2e94abc3-b15c-45f1-baa5-eabb1d065288": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2e94abc3-b15c-45f1-baa5-eabb1d065288",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e94abc3-b15c-45f1-baa5-eabb1d065288",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5854031039,
      "longitude": 28.9427694739
    }
  },
  "2ec3c597-1d4c-4321-b957-11a8af5b3459": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2ec3c597-1d4c-4321-b957-11a8af5b3459",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ec3c597-1d4c-4321-b957-11a8af5b3459",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1612944894,
      "longitude": 29.2423090406
    }
  },
  "2ed22c48-a47f-4368-88c1-84621ca1e825": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 134",
      "id": "2ed22c48-a47f-4368-88c1-84621ca1e825",
      "kilometrage": 68,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ed22c48-a47f-4368-88c1-84621ca1e825",
    "image": "perev_left",
    "point": {
      "latitude": 52.6572869555,
      "longitude": 29.7141823395
    }
  },
  "2ef7cb14-7e63-4182-b6ce-6f6b8f13e5e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 449",
      "id": "2ef7cb14-7e63-4182-b6ce-6f6b8f13e5e8",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ef7cb14-7e63-4182-b6ce-6f6b8f13e5e8",
    "image": "perev_right",
    "point": {
      "latitude": 53.5069872709,
      "longitude": 28.9559808563
    }
  },
  "2f36a73d-026b-4bc7-8eca-cfb2801c95eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2f36a73d-026b-4bc7-8eca-cfb2801c95eb",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f36a73d-026b-4bc7-8eca-cfb2801c95eb",
    "image": "name_of",
    "point": {
      "latitude": 53.4117672095,
      "longitude": 29.0078752402
    }
  },
  "2f685276-2eaf-473b-8e14-3a5c5839cc65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 334",
      "id": "2f685276-2eaf-473b-8e14-3a5c5839cc65",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f685276-2eaf-473b-8e14-3a5c5839cc65",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.2352410034,
      "longitude": 29.2231713347
    }
  },
  "2fab2689-f903-4ab6-830a-1fac561971f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 342",
      "id": "2fab2689-f903-4ab6-830a-1fac561971f3",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2fab2689-f903-4ab6-830a-1fac561971f3",
    "image": "perev_right",
    "point": {
      "latitude": 53.2357340737,
      "longitude": 29.184657123
    }
  },
  "2fb190c1-6d24-4105-9b51-66ec847954b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 264",
      "id": "2fb190c1-6d24-4105-9b51-66ec847954b5",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2fb190c1-6d24-4105-9b51-66ec847954b5",
    "image": "perev_left",
    "point": {
      "latitude": 52.9686836767,
      "longitude": 29.3613956053
    }
  },
  "30690373-5a27-4d29-9aef-15f7d8fcc34c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 114",
      "id": "30690373-5a27-4d29-9aef-15f7d8fcc34c",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30690373-5a27-4d29-9aef-15f7d8fcc34c",
    "image": "perev_right",
    "point": {
      "latitude": 52.6417712252,
      "longitude": 29.7932236201
    }
  },
  "3127efae-0f8c-4d64-8509-36acc5132d0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 437",
      "id": "3127efae-0f8c-4d64-8509-36acc5132d0b",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3127efae-0f8c-4d64-8509-36acc5132d0b",
    "image": "perev_left",
    "point": {
      "latitude": 53.4862285951,
      "longitude": 28.9521127737
    }
  },
  "31688db2-7cdc-4836-98f2-748108c62522": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "31688db2-7cdc-4836-98f2-748108c62522",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31688db2-7cdc-4836-98f2-748108c62522",
    "image": "perev_left",
    "point": {
      "latitude": 52.5550464831,
      "longitude": 30.0922646333
    }
  },
  "32225297-9ab4-48c0-b6f1-ef186b08d720": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 250",
      "id": "32225297-9ab4-48c0-b6f1-ef186b08d720",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32225297-9ab4-48c0-b6f1-ef186b08d720",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5421461261,
      "longitude": 28.9603678387
    }
  },
  "327cedc0-a3b5-4db4-89fa-94a0b69cda96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "327cedc0-a3b5-4db4-89fa-94a0b69cda96",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "327cedc0-a3b5-4db4-89fa-94a0b69cda96",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1525461688,
      "longitude": 29.2502469719
    }
  },
  "32e10326-dfcc-43d0-a224-cf2a5ed91f5a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 248",
      "id": "32e10326-dfcc-43d0-a224-cf2a5ed91f5a",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32e10326-dfcc-43d0-a224-cf2a5ed91f5a",
    "image": "perev_left",
    "point": {
      "latitude": 52.9311109847,
      "longitude": 29.349638059
    }
  },
  "3367a9d8-7044-4340-b81f-7f504d01b06a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 461",
      "id": "3367a9d8-7044-4340-b81f-7f504d01b06a",
      "kilometrage": 249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3367a9d8-7044-4340-b81f-7f504d01b06a",
    "image": "perev_left",
    "point": {
      "latitude": 53.5388432734,
      "longitude": 28.9650521533
    }
  },
  "33c643a5-c15b-4419-828f-86113a1f84f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 345",
      "id": "33c643a5-c15b-4419-828f-86113a1f84f4",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33c643a5-c15b-4419-828f-86113a1f84f4",
    "image": "perev_right",
    "point": {
      "latitude": 53.2459718788,
      "longitude": 29.1620245305
    }
  },
  "3412d5b1-245d-46ac-a8e4-ad9864cb3de0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 22",
      "id": "3412d5b1-245d-46ac-a8e4-ad9864cb3de0",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3412d5b1-245d-46ac-a8e4-ad9864cb3de0",
    "image": "buyo_left",
    "point": {
      "latitude": 53.165219567,
      "longitude": 29.2376948563
    }
  },
  "34251208-76c9-4402-85ea-d1e562cf1de4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 27",
      "id": "34251208-76c9-4402-85ea-d1e562cf1de4",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34251208-76c9-4402-85ea-d1e562cf1de4",
    "image": "perev_right",
    "point": {
      "latitude": 52.5559474187,
      "longitude": 30.1128074646
    }
  },
  "3511e82b-9adb-45ab-95cb-875dbe077fbe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "3511e82b-9adb-45ab-95cb-875dbe077fbe",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3511e82b-9adb-45ab-95cb-875dbe077fbe",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 53.1300915192,
      "longitude": 29.2600493329
    }
  },
  "359fb6d6-bcca-4614-a156-7eaa548ef492": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 50",
      "id": "359fb6d6-bcca-4614-a156-7eaa548ef492",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "359fb6d6-bcca-4614-a156-7eaa548ef492",
    "image": "kilometrage",
    "point": {
      "latitude": 52.627545523,
      "longitude": 29.8543272926
    }
  },
  "35e96f94-23d5-4515-970d-6242eb1d4551": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "35e96f94-23d5-4515-970d-6242eb1d4551",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35e96f94-23d5-4515-970d-6242eb1d4551",
    "image": "bridge_low",
    "point": {
      "latitude": 52.6480178194,
      "longitude": 29.7250612622
    }
  },
  "366aa02b-715d-429b-a24b-357c160db51f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "366aa02b-715d-429b-a24b-357c160db51f",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "366aa02b-715d-429b-a24b-357c160db51f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8285830277,
      "longitude": 29.0011362589
    }
  },
  "368252d5-3c9b-45b5-9206-421c76c35ee1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 164",
      "id": "368252d5-3c9b-45b5-9206-421c76c35ee1",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "368252d5-3c9b-45b5-9206-421c76c35ee1",
    "image": "perev_left",
    "point": {
      "latitude": 52.7271617506,
      "longitude": 29.6017774778
    }
  },
  "3694597c-97ef-4c58-8fa6-c8a749dd52e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 377",
      "id": "3694597c-97ef-4c58-8fa6-c8a749dd52e8",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3694597c-97ef-4c58-8fa6-c8a749dd52e8",
    "image": "perev_left",
    "point": {
      "latitude": 53.314532441,
      "longitude": 29.0650623873
    }
  },
  "369d6a96-935b-4112-a177-6df7fd75a6d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "369d6a96-935b-4112-a177-6df7fd75a6d2",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "369d6a96-935b-4112-a177-6df7fd75a6d2",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8290067489,
      "longitude": 29.0019602629
    }
  },
  "3741753c-a892-425a-b367-5d5f19afb7cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 319",
      "id": "3741753c-a892-425a-b367-5d5f19afb7cc",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3741753c-a892-425a-b367-5d5f19afb7cc",
    "image": "perev_left",
    "point": {
      "latitude": 53.1770156355,
      "longitude": 29.2494205162
    }
  },
  "375cf010-812b-4425-bfdb-1d742e51ccf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 500",
      "id": "375cf010-812b-4425-bfdb-1d742e51ccf3",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "375cf010-812b-4425-bfdb-1d742e51ccf3",
    "image": "perev_left",
    "point": {
      "latitude": 53.6458167927,
      "longitude": 28.9444007832
    }
  },
  "3847b9b3-a081-48ab-a7b7-0deec7df5011": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 130",
      "id": "3847b9b3-a081-48ab-a7b7-0deec7df5011",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3847b9b3-a081-48ab-a7b7-0deec7df5011",
    "image": "perev_right",
    "point": {
      "latitude": 52.6450537759,
      "longitude": 29.7425171248
    }
  },
  "386649a8-9193-4c72-9fac-746a22435b7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 493",
      "id": "386649a8-9193-4c72-9fac-746a22435b7c",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "386649a8-9193-4c72-9fac-746a22435b7c",
    "image": "perev_left",
    "point": {
      "latitude": 53.6254501495,
      "longitude": 28.9430110929
    }
  },
  "38b827b4-a127-4172-a657-ddc97dafdd77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 100",
      "id": "38b827b4-a127-4172-a657-ddc97dafdd77",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38b827b4-a127-4172-a657-ddc97dafdd77",
    "image": "kilometrage",
    "point": {
      "latitude": 52.798835533,
      "longitude": 29.4935717475
    }
  },
  "393ac0de-0dcc-425e-97a0-6bd1aab62306": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 129",
      "id": "393ac0de-0dcc-425e-97a0-6bd1aab62306",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "393ac0de-0dcc-425e-97a0-6bd1aab62306",
    "image": "perev_left",
    "point": {
      "latitude": 52.6447108,
      "longitude": 29.7479226579
    }
  },
  "39becdaa-143a-45fc-9138-7273df7d9015": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 410",
      "id": "39becdaa-143a-45fc-9138-7273df7d9015",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39becdaa-143a-45fc-9138-7273df7d9015",
    "image": "perev_right",
    "point": {
      "latitude": 53.4294970715,
      "longitude": 28.987538908
    }
  },
  "39d485b3-4a3e-42d6-87b3-42e1ea312bf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "39d485b3-4a3e-42d6-87b3-42e1ea312bf3",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39d485b3-4a3e-42d6-87b3-42e1ea312bf3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4108299935,
      "longitude": 29.0104416066
    }
  },
  "3a134132-d7ee-4d09-bfcd-71decfa180a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 45",
      "id": "3a134132-d7ee-4d09-bfcd-71decfa180a5",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a134132-d7ee-4d09-bfcd-71decfa180a5",
    "image": "perev_right",
    "point": {
      "latitude": 52.5542002044,
      "longitude": 30.0663032975
    }
  },
  "3a3577fc-b6e3-4447-b288-d92e949be960": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 259",
      "id": "3a3577fc-b6e3-4447-b288-d92e949be960",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a3577fc-b6e3-4447-b288-d92e949be960",
    "image": "perev_right",
    "point": {
      "latitude": 52.9679647399,
      "longitude": 29.3764063621
    }
  },
  "3ab72ecd-9527-4cd7-b074-3d44e5845f76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 284",
      "id": "3ab72ecd-9527-4cd7-b074-3d44e5845f76",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ab72ecd-9527-4cd7-b074-3d44e5845f76",
    "image": "perev_right",
    "point": {
      "latitude": 53.0166911046,
      "longitude": 29.2717440955
    }
  },
  "3adb5acc-3237-4205-ab77-335db132d72e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 439",
      "id": "3adb5acc-3237-4205-ab77-335db132d72e",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3adb5acc-3237-4205-ab77-335db132d72e",
    "image": "perev_left",
    "point": {
      "latitude": 53.4898626066,
      "longitude": 28.9617420265
    }
  },
  "3afae5a1-db01-44cc-8c39-fa99e86dead7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 347",
      "id": "3afae5a1-db01-44cc-8c39-fa99e86dead7",
      "kilometrage": 193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3afae5a1-db01-44cc-8c39-fa99e86dead7",
    "image": "perev_left",
    "point": {
      "latitude": 53.2498004417,
      "longitude": 29.1492896874
    }
  },
  "3b1f1ab7-a7f6-4f2d-8652-c3c2e4620338": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3b1f1ab7-a7f6-4f2d-8652-c3c2e4620338",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b1f1ab7-a7f6-4f2d-8652-c3c2e4620338",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.4483652861,
      "longitude": 28.9691068871
    }
  },
  "3b583236-35ff-4a7f-b942-fd80e0dc9348": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 138",
      "id": "3b583236-35ff-4a7f-b942-fd80e0dc9348",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b583236-35ff-4a7f-b942-fd80e0dc9348",
    "image": "perev_left",
    "point": {
      "latitude": 52.6683060023,
      "longitude": 29.7075994858
    }
  },
  "3b61eb5e-722c-4173-991e-1381deff0706": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 527",
      "id": "3b61eb5e-722c-4173-991e-1381deff0706",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b61eb5e-722c-4173-991e-1381deff0706",
    "image": "perev_right",
    "point": {
      "latitude": 53.7071298353,
      "longitude": 28.9744877925
    }
  },
  "3bdd6182-0cb1-4a76-b538-2274458e655b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 145",
      "id": "3bdd6182-0cb1-4a76-b538-2274458e655b",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3bdd6182-0cb1-4a76-b538-2274458e655b",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9793715367,
      "longitude": 29.3040433765
    }
  },
  "3c0daf88-979d-4e6f-92ec-5ac421619a46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "3c0daf88-979d-4e6f-92ec-5ac421619a46",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c0daf88-979d-4e6f-92ec-5ac421619a46",
    "image": "axis_romb",
    "point": {
      "latitude": 53.2445828306,
      "longitude": 29.1672912076
    }
  },
  "3c1ac661-f490-4290-9d31-4429089aec26": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 288",
      "id": "3c1ac661-f490-4290-9d31-4429089aec26",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c1ac661-f490-4290-9d31-4429089aec26",
    "image": "perev_right",
    "point": {
      "latitude": 53.035008397,
      "longitude": 29.2618809392
    }
  },
  "3c739df4-4512-4a23-a6a5-430e37e04d5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3c739df4-4512-4a23-a6a5-430e37e04d5d",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c739df4-4512-4a23-a6a5-430e37e04d5d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8333781943,
      "longitude": 29.0024421244
    }
  },
  "3ce37a26-6808-43f6-bb41-5e7f2f80ed9d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 225",
      "id": "3ce37a26-6808-43f6-bb41-5e7f2f80ed9d",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ce37a26-6808-43f6-bb41-5e7f2f80ed9d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.419268675,
      "longitude": 28.9892828292
    }
  },
  "3d6a6bc5-78e2-440a-924e-94d422a0f6f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 455",
      "id": "3d6a6bc5-78e2-440a-924e-94d422a0f6f3",
      "kilometrage": 246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d6a6bc5-78e2-440a-924e-94d422a0f6f3",
    "image": "perev_left",
    "point": {
      "latitude": 53.523942138,
      "longitude": 28.97060822
    }
  },
  "3dafa2de-35f4-496b-afb8-8acda814dde3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 144",
      "id": "3dafa2de-35f4-496b-afb8-8acda814dde3",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dafa2de-35f4-496b-afb8-8acda814dde3",
    "image": "perev_left",
    "point": {
      "latitude": 52.6773072154,
      "longitude": 29.6865072663
    }
  },
  "3e5b1047-428f-4d39-9038-14f773e58449": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 165",
      "id": "3e5b1047-428f-4d39-9038-14f773e58449",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e5b1047-428f-4d39-9038-14f773e58449",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0931063257,
      "longitude": 29.2517254934
    }
  },
  "3ece6ec3-e55f-47b3-b233-ed10ab71a0d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 168",
      "id": "3ece6ec3-e55f-47b3-b233-ed10ab71a0d0",
      "kilometrage": 87,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ece6ec3-e55f-47b3-b233-ed10ab71a0d0",
    "image": "perev_left",
    "point": {
      "latitude": 52.7451205207,
      "longitude": 29.5807595605
    }
  },
  "3ed95f43-1fb9-4317-893f-097424ac385b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 567",
      "id": "3ed95f43-1fb9-4317-893f-097424ac385b",
      "kilometrage": 301,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ed95f43-1fb9-4317-893f-097424ac385b",
    "image": "perev_right",
    "point": {
      "latitude": 53.7952260275,
      "longitude": 28.9644926141
    }
  },
  "3f0db6fd-68ac-406a-b701-63d3acfcb2aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 223",
      "id": "3f0db6fd-68ac-406a-b701-63d3acfcb2aa",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f0db6fd-68ac-406a-b701-63d3acfcb2aa",
    "image": "perev_right",
    "point": {
      "latitude": 52.8348603606,
      "longitude": 29.389581346
    }
  },
  "3f2fddb5-c822-484e-8d67-31c71d2741d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3f2fddb5-c822-484e-8d67-31c71d2741d9",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f2fddb5-c822-484e-8d67-31c71d2741d9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1590826575,
      "longitude": 29.2496394451
    }
  },
  "3f90421e-d26e-43ee-8586-bb95f4827de0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3f90421e-d26e-43ee-8586-bb95f4827de0",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f90421e-d26e-43ee-8586-bb95f4827de0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8026674662,
      "longitude": 29.4371875367
    }
  },
  "3fa47552-8a54-48b0-aca3-19bf358adef6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 381",
      "id": "3fa47552-8a54-48b0-aca3-19bf358adef6",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fa47552-8a54-48b0-aca3-19bf358adef6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3212707383,
      "longitude": 29.0626134603
    }
  },
  "3fcc892a-a1db-4e66-9073-b7fbad3081d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "3fcc892a-a1db-4e66-9073-b7fbad3081d0",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fcc892a-a1db-4e66-9073-b7fbad3081d0",
    "image": "perev_right",
    "point": {
      "latitude": 52.549919482,
      "longitude": 30.2388473116
    }
  },
  "3fcff3f5-d166-4310-9ade-659017381baa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "3fcff3f5-d166-4310-9ade-659017381baa",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fcff3f5-d166-4310-9ade-659017381baa",
    "image": "perev_right",
    "point": {
      "latitude": 52.7455296581,
      "longitude": 29.5411346735
    }
  },
  "404c21c5-1e91-4b0d-b89b-d70e1fa63dd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 414",
      "id": "404c21c5-1e91-4b0d-b89b-d70e1fa63dd6",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "404c21c5-1e91-4b0d-b89b-d70e1fa63dd6",
    "image": "perev_right",
    "point": {
      "latitude": 53.4442772275,
      "longitude": 28.9698484366
    }
  },
  "40c80b86-41fe-410f-8d97-d6af0f1887c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 85",
      "id": "40c80b86-41fe-410f-8d97-d6af0f1887c8",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40c80b86-41fe-410f-8d97-d6af0f1887c8",
    "image": "perev_left",
    "point": {
      "latitude": 52.6167228448,
      "longitude": 29.9205455365
    }
  },
  "4174c407-5dc8-4dcb-8643-88fff849d2cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 154",
      "id": "4174c407-5dc8-4dcb-8643-88fff849d2cb",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4174c407-5dc8-4dcb-8643-88fff849d2cb",
    "image": "perev_right",
    "point": {
      "latitude": 52.6879666383,
      "longitude": 29.6307922473
    }
  },
  "419c7e72-406e-4e55-9536-2db14cddf00c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 238",
      "id": "419c7e72-406e-4e55-9536-2db14cddf00c",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "419c7e72-406e-4e55-9536-2db14cddf00c",
    "image": "perev_left",
    "point": {
      "latitude": 52.8831903516,
      "longitude": 29.3526964625
    }
  },
  "420d5fe0-8b7a-4748-83fa-616051f1dede": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "420d5fe0-8b7a-4748-83fa-616051f1dede",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "420d5fe0-8b7a-4748-83fa-616051f1dede",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1581223367,
      "longitude": 29.2465983313
    }
  },
  "4259c9f8-40f7-478d-bdea-455a84fcf216": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 376",
      "id": "4259c9f8-40f7-478d-bdea-455a84fcf216",
      "kilometrage": 208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4259c9f8-40f7-478d-bdea-455a84fcf216",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.3085154061,
      "longitude": 29.0767817189
    }
  },
  "42e3b1bc-6f9f-41e6-9c61-6ed6b10b1276": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 87",
      "id": "42e3b1bc-6f9f-41e6-9c61-6ed6b10b1276",
      "kilometrage": 42,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42e3b1bc-6f9f-41e6-9c61-6ed6b10b1276",
    "image": "perev_right",
    "point": {
      "latitude": 52.6178528671,
      "longitude": 29.9089159947
    }
  },
  "43ba4e7e-1641-484b-96f8-1c70378fa568": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Имеются ограничения судоходства  ",
      "id": "43ba4e7e-1641-484b-96f8-1c70378fa568",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43ba4e7e-1641-484b-96f8-1c70378fa568",
    "image": "limitations",
    "point": {
      "latitude": 53.8129153312,
      "longitude": 28.9850661387
    }
  },
  "43c5bd55-08e5-451b-a324-5f661cab0f1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 372",
      "id": "43c5bd55-08e5-451b-a324-5f661cab0f1a",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43c5bd55-08e5-451b-a324-5f661cab0f1a",
    "image": "perev_right",
    "point": {
      "latitude": 53.3091948289,
      "longitude": 29.0563035317
    }
  },
  "4402165d-4892-4634-b71e-2e68e1a662e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 392",
      "id": "4402165d-4892-4634-b71e-2e68e1a662e6",
      "kilometrage": 218,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4402165d-4892-4634-b71e-2e68e1a662e6",
    "image": "perev_left",
    "point": {
      "latitude": 53.3726576333,
      "longitude": 29.0286980024
    }
  },
  "44bc5989-08f1-48b4-8c32-6574bb02f8ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "44bc5989-08f1-48b4-8c32-6574bb02f8ee",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44bc5989-08f1-48b4-8c32-6574bb02f8ee",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0973811565,
      "longitude": 29.2486928285
    }
  },
  "44c140da-edf3-4565-ad55-d5d0d9d25669": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 109",
      "id": "44c140da-edf3-4565-ad55-d5d0d9d25669",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44c140da-edf3-4565-ad55-d5d0d9d25669",
    "image": "perev_right",
    "point": {
      "latitude": 52.6297664145,
      "longitude": 29.7984800868
    }
  },
  "450ab3d2-75b6-43f7-a789-d45d147b8091": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 469",
      "id": "450ab3d2-75b6-43f7-a789-d45d147b8091",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "450ab3d2-75b6-43f7-a789-d45d147b8091",
    "image": "perev_left",
    "point": {
      "latitude": 53.5581970949,
      "longitude": 28.9556456368
    }
  },
  "459a26a0-cfdd-4e49-a36d-82febb685d29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 569",
      "id": "459a26a0-cfdd-4e49-a36d-82febb685d29",
      "kilometrage": 302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "459a26a0-cfdd-4e49-a36d-82febb685d29",
    "image": "perev_left",
    "point": {
      "latitude": 53.8054885068,
      "longitude": 28.9741260505
    }
  },
  "45a6b4df-e15c-41b5-bd47-66042f094dc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "45a6b4df-e15c-41b5-bd47-66042f094dc8",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45a6b4df-e15c-41b5-bd47-66042f094dc8",
    "image": "name_of",
    "point": {
      "latitude": 53.8123616705,
      "longitude": 28.9826223658
    }
  },
  "45de4bb9-f739-43cf-8037-a46df64b38d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "45de4bb9-f739-43cf-8037-a46df64b38d4",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45de4bb9-f739-43cf-8037-a46df64b38d4",
    "image": "perev_left",
    "point": {
      "latitude": 52.7666225314,
      "longitude": 29.547096061
    }
  },
  "46215c05-aa7b-4e70-9f52-ae2648e8720d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "46215c05-aa7b-4e70-9f52-ae2648e8720d",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46215c05-aa7b-4e70-9f52-ae2648e8720d",
    "image": "name_of",
    "point": {
      "latitude": 53.8436010186,
      "longitude": 28.9993503192
    }
  },
  "4644b423-c8d2-4528-802f-30fbef8931b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 533",
      "id": "4644b423-c8d2-4528-802f-30fbef8931b1",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4644b423-c8d2-4528-802f-30fbef8931b1",
    "image": "perev_left",
    "point": {
      "latitude": 53.7126668843,
      "longitude": 28.9634825847
    }
  },
  "464559b7-a24b-4b0f-b033-4c7c01a0fb62": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 570",
      "id": "464559b7-a24b-4b0f-b033-4c7c01a0fb62",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "464559b7-a24b-4b0f-b033-4c7c01a0fb62",
    "image": "perev_right",
    "point": {
      "latitude": 53.8117505191,
      "longitude": 28.9818923844
    }
  },
  "465c363b-0a45-4d5b-b0a6-34732a61ae4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "465c363b-0a45-4d5b-b0a6-34732a61ae4b",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "465c363b-0a45-4d5b-b0a6-34732a61ae4b",
    "image": "waves_forbidden",
    "point": {
      "latitude": 53.1513138171,
      "longitude": 29.2518292484
    }
  },
  "468aff1f-0a19-4e79-8da9-9fe7c7d5be9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 102",
      "id": "468aff1f-0a19-4e79-8da9-9fe7c7d5be9a",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "468aff1f-0a19-4e79-8da9-9fe7c7d5be9a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6294959868,
      "longitude": 29.854316438
    }
  },
  "46d031fc-912e-4f19-a50f-233b3bdfbd81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "46d031fc-912e-4f19-a50f-233b3bdfbd81",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46d031fc-912e-4f19-a50f-233b3bdfbd81",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5521207028,
      "longitude": 30.0879840941
    }
  },
  "47508d77-8ba0-4b5d-be60-b055eea07d23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 292",
      "id": "47508d77-8ba0-4b5d-be60-b055eea07d23",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47508d77-8ba0-4b5d-be60-b055eea07d23",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0411262339,
      "longitude": 29.2719000336
    }
  },
  "47c4922b-aba4-4e69-985f-db17f3e9d598": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 142",
      "id": "47c4922b-aba4-4e69-985f-db17f3e9d598",
      "kilometrage": 72,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47c4922b-aba4-4e69-985f-db17f3e9d598",
    "image": "perev_right",
    "point": {
      "latitude": 52.6705015856,
      "longitude": 29.682861388
    }
  },
  "47f20678-ab6a-4ed3-b87b-ea9c3902473d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 9",
      "id": "47f20678-ab6a-4ed3-b87b-ea9c3902473d",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47f20678-ab6a-4ed3-b87b-ea9c3902473d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7421616824,
      "longitude": 29.5669652951
    }
  },
  "482cffa8-987d-4de9-8df7-b23cf391e904": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 160",
      "id": "482cffa8-987d-4de9-8df7-b23cf391e904",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "482cffa8-987d-4de9-8df7-b23cf391e904",
    "image": "kilometrage",
    "point": {
      "latitude": 53.054497154,
      "longitude": 29.258081771
    }
  },
  "48641344-ef12-4bc3-aa13-c3a169d19945": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "48641344-ef12-4bc3-aa13-c3a169d19945",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48641344-ef12-4bc3-aa13-c3a169d19945",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6287442847,
      "longitude": 29.8192712139
    }
  },
  "48b9013e-8ce8-4822-8523-aa8e65604e33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 205",
      "id": "48b9013e-8ce8-4822-8523-aa8e65604e33",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48b9013e-8ce8-4822-8523-aa8e65604e33",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3008778348,
      "longitude": 29.0585884506
    }
  },
  "48c14960-8df6-4621-8bdf-d2869ee8ec08": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 9",
      "id": "48c14960-8df6-4621-8bdf-d2869ee8ec08",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48c14960-8df6-4621-8bdf-d2869ee8ec08",
    "image": "perev_right",
    "point": {
      "latitude": 52.5669798848,
      "longitude": 30.1972594403
    }
  },
  "48f53e90-cde8-486d-943e-c95d7ef3b06f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 577",
      "id": "48f53e90-cde8-486d-943e-c95d7ef3b06f",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48f53e90-cde8-486d-943e-c95d7ef3b06f",
    "image": "perev_right",
    "point": {
      "latitude": 53.8230478953,
      "longitude": 29.0000044145
    }
  },
  "492281a7-8ef6-4a36-a6bf-5a87a5694b18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 507",
      "id": "492281a7-8ef6-4a36-a6bf-5a87a5694b18",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "492281a7-8ef6-4a36-a6bf-5a87a5694b18",
    "image": "perev_left",
    "point": {
      "latitude": 53.6700841102,
      "longitude": 28.9495514974
    }
  },
  "4a5473ef-a2f2-45d7-8414-eef3db665590": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 573",
      "id": "4a5473ef-a2f2-45d7-8414-eef3db665590",
      "kilometrage": 304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a5473ef-a2f2-45d7-8414-eef3db665590",
    "image": "perev_right",
    "point": {
      "latitude": 53.8133938842,
      "longitude": 29.0006373778
    }
  },
  "4a6407b8-f8d1-4cce-8e8f-a8a38d80c711": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 397",
      "id": "4a6407b8-f8d1-4cce-8e8f-a8a38d80c711",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a6407b8-f8d1-4cce-8e8f-a8a38d80c711",
    "image": "perev_left",
    "point": {
      "latitude": 53.3952764112,
      "longitude": 29.0142583189
    }
  },
  "4a955648-2459-4db1-a0ee-1a380d7899e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 393",
      "id": "4a955648-2459-4db1-a0ee-1a380d7899e4",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a955648-2459-4db1-a0ee-1a380d7899e4",
    "image": "perev_left",
    "point": {
      "latitude": 53.3802059296,
      "longitude": 29.0343232561
    }
  },
  "4b6c0bd5-8324-4a97-8b74-05e20d5047bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4b6c0bd5-8324-4a97-8b74-05e20d5047bb",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b6c0bd5-8324-4a97-8b74-05e20d5047bb",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1491794897,
      "longitude": 29.257068897
    }
  },
  "4b6d917a-9b77-493d-aba3-14c8ba72fe41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 13",
      "id": "4b6d917a-9b77-493d-aba3-14c8ba72fe41",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b6d917a-9b77-493d-aba3-14c8ba72fe41",
    "image": "buyo_left",
    "point": {
      "latitude": 52.9785510822,
      "longitude": 29.31614615
    }
  },
  "4baa1997-5967-4193-8bc5-0e71f0f8cc68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4baa1997-5967-4193-8bc5-0e71f0f8cc68",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4baa1997-5967-4193-8bc5-0e71f0f8cc68",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1294014286,
      "longitude": 29.2648285506
    }
  },
  "4bbbb493-5547-422f-ac7e-b5075de3bc05": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 108",
      "id": "4bbbb493-5547-422f-ac7e-b5075de3bc05",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bbbb493-5547-422f-ac7e-b5075de3bc05",
    "image": "perev_right",
    "point": {
      "latitude": 52.6290173339,
      "longitude": 29.8031665684
    }
  },
  "4bbda20f-2a3e-4ec2-bd62-a21102ac8101": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 325",
      "id": "4bbda20f-2a3e-4ec2-bd62-a21102ac8101",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bbda20f-2a3e-4ec2-bd62-a21102ac8101",
    "image": "perev_left",
    "point": {
      "latitude": 53.2015321223,
      "longitude": 29.2398159145
    }
  },
  "4bfa28b7-0405-4a1e-a875-cf62167eefa7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 185",
      "id": "4bfa28b7-0405-4a1e-a875-cf62167eefa7",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bfa28b7-0405-4a1e-a875-cf62167eefa7",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2259725584,
      "longitude": 29.2162139865
    }
  },
  "4c284f78-4850-417f-b744-79a96d5669da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 65",
      "id": "4c284f78-4850-417f-b744-79a96d5669da",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c284f78-4850-417f-b744-79a96d5669da",
    "image": "perev_left",
    "point": {
      "latitude": 52.5784258245,
      "longitude": 30.0206181202
    }
  },
  "4c39b7b6-71f9-4403-96ab-c9dc5376bcce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "4c39b7b6-71f9-4403-96ab-c9dc5376bcce",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c39b7b6-71f9-4403-96ab-c9dc5376bcce",
    "image": "bridge_low",
    "point": {
      "latitude": 53.1619068994,
      "longitude": 29.2431243675
    }
  },
  "4c50bceb-370f-4529-94e3-3f071667d14e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 359",
      "id": "4c50bceb-370f-4529-94e3-3f071667d14e",
      "kilometrage": 198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c50bceb-370f-4529-94e3-3f071667d14e",
    "image": "perev_right",
    "point": {
      "latitude": 53.2538105698,
      "longitude": 29.1040258222
    }
  },
  "4c691cd7-cc11-4310-a34d-3c24076c65e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 170",
      "id": "4c691cd7-cc11-4310-a34d-3c24076c65e6",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c691cd7-cc11-4310-a34d-3c24076c65e6",
    "image": "perev_right",
    "point": {
      "latitude": 52.7400866623,
      "longitude": 29.5613428678
    }
  },
  "4c7fc088-790a-4657-a811-47787cac2c93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 90",
      "id": "4c7fc088-790a-4657-a811-47787cac2c93",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c7fc088-790a-4657-a811-47787cac2c93",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7416883825,
      "longitude": 29.543212971
    }
  },
  "4c9956ec-38bc-4795-bd7e-5c65329c0237": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 436",
      "id": "4c9956ec-38bc-4795-bd7e-5c65329c0237",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c9956ec-38bc-4795-bd7e-5c65329c0237",
    "image": "perev_right",
    "point": {
      "latitude": 53.4893712257,
      "longitude": 28.9462805226
    }
  },
  "4d4aabad-4868-4f2c-9195-9480b27d6d2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 516",
      "id": "4d4aabad-4868-4f2c-9195-9480b27d6d2d",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d4aabad-4868-4f2c-9195-9480b27d6d2d",
    "image": "perev_left",
    "point": {
      "latitude": 53.6900844142,
      "longitude": 28.9765399596
    }
  },
  "4d7bfd4b-a813-4493-ac88-22de0b34c5cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "4d7bfd4b-a813-4493-ac88-22de0b34c5cf",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d7bfd4b-a813-4493-ac88-22de0b34c5cf",
    "image": "perev_right",
    "point": {
      "latitude": 52.5763086775,
      "longitude": 30.1791863163
    }
  },
  "4d7ccbe7-8a22-4ca7-9262-7e562310ede7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4d7ccbe7-8a22-4ca7-9262-7e562310ede7",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d7ccbe7-8a22-4ca7-9262-7e562310ede7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1288605225,
      "longitude": 29.2654785211
    }
  },
  "4dc08e9e-1e99-4e1a-947b-e4f1e11760dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 406",
      "id": "4dc08e9e-1e99-4e1a-947b-e4f1e11760dd",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4dc08e9e-1e99-4e1a-947b-e4f1e11760dd",
    "image": "perev_left",
    "point": {
      "latitude": 53.4212638681,
      "longitude": 28.9932615143
    }
  },
  "4ddfcf24-d12a-4638-b00a-2f862632e2b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 520",
      "id": "4ddfcf24-d12a-4638-b00a-2f862632e2b4",
      "kilometrage": 279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ddfcf24-d12a-4638-b00a-2f862632e2b4",
    "image": "perev_left",
    "point": {
      "latitude": 53.6958840171,
      "longitude": 28.9776974341
    }
  },
  "4e3852f2-3107-4317-8d0c-6cb25075e468": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 529",
      "id": "4e3852f2-3107-4317-8d0c-6cb25075e468",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e3852f2-3107-4317-8d0c-6cb25075e468",
    "image": "perev_left",
    "point": {
      "latitude": 53.7100406549,
      "longitude": 28.9714897784
    }
  },
  "4e613093-ea20-421b-92ca-085ade82f5eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 25",
      "id": "4e613093-ea20-421b-92ca-085ade82f5eb",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e613093-ea20-421b-92ca-085ade82f5eb",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1831967619,
      "longitude": 29.2516222039
    }
  },
  "4ed91f5c-885b-4974-9a7f-a8eaee53a42a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 401",
      "id": "4ed91f5c-885b-4974-9a7f-a8eaee53a42a",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ed91f5c-885b-4974-9a7f-a8eaee53a42a",
    "image": "perev_right",
    "point": {
      "latitude": 53.4113049247,
      "longitude": 29.0050168915
    }
  },
  "4eec90d3-0a7f-4a62-aa1b-b4ae83332500": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 332",
      "id": "4eec90d3-0a7f-4a62-aa1b-b4ae83332500",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4eec90d3-0a7f-4a62-aa1b-b4ae83332500",
    "image": "perev_right",
    "point": {
      "latitude": 53.2252504297,
      "longitude": 29.2157303547
    }
  },
  "4f574e46-8657-4e67-8ca0-99957164e4a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 560",
      "id": "4f574e46-8657-4e67-8ca0-99957164e4a9",
      "kilometrage": 298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f574e46-8657-4e67-8ca0-99957164e4a9",
    "image": "perev_right",
    "point": {
      "latitude": 53.7930357871,
      "longitude": 28.957441653
    }
  },
  "4fd803f6-c5d8-4d71-ae3f-4c8b0aba12ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 302",
      "id": "4fd803f6-c5d8-4d71-ae3f-4c8b0aba12ce",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fd803f6-c5d8-4d71-ae3f-4c8b0aba12ce",
    "image": "perev_right",
    "point": {
      "latitude": 53.101571362,
      "longitude": 29.2447364222
    }
  },
  "50599296-3c01-4b84-b0f1-991b89a57dc3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 379",
      "id": "50599296-3c01-4b84-b0f1-991b89a57dc3",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50599296-3c01-4b84-b0f1-991b89a57dc3",
    "image": "perev_right",
    "point": {
      "latitude": 53.3121254316,
      "longitude": 29.0546063711
    }
  },
  "50971a95-ac27-40c5-b87a-847f0629a110": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "50971a95-ac27-40c5-b87a-847f0629a110",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50971a95-ac27-40c5-b87a-847f0629a110",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2490472682,
      "longitude": 29.1598534196
    }
  },
  "50bf98f8-edc0-4cae-aacf-a8eaef0b5895": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 196",
      "id": "50bf98f8-edc0-4cae-aacf-a8eaef0b5895",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50bf98f8-edc0-4cae-aacf-a8eaef0b5895",
    "image": "perev_left",
    "point": {
      "latitude": 52.8071012105,
      "longitude": 29.4612002533
    }
  },
  "511f9097-d11c-42d1-aaae-3d2c9898dc1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "511f9097-d11c-42d1-aaae-3d2c9898dc1d",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "511f9097-d11c-42d1-aaae-3d2c9898dc1d",
    "image": "attention",
    "point": {
      "latitude": 52.8057338914,
      "longitude": 29.4426293549
    }
  },
  "51ea9063-3ca9-43cd-bb36-379d7b0fcf5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 236",
      "id": "51ea9063-3ca9-43cd-bb36-379d7b0fcf5b",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51ea9063-3ca9-43cd-bb36-379d7b0fcf5b",
    "image": "perev_right",
    "point": {
      "latitude": 52.8727852814,
      "longitude": 29.3449256385
    }
  },
  "52634b72-e78c-4043-923f-19dac3213ac7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 219",
      "id": "52634b72-e78c-4043-923f-19dac3213ac7",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52634b72-e78c-4043-923f-19dac3213ac7",
    "image": "perev_right",
    "point": {
      "latitude": 52.8349788181,
      "longitude": 29.4076400679
    }
  },
  "53705f13-5fc4-4fd7-8180-1ecf11d44289": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "53705f13-5fc4-4fd7-8180-1ecf11d44289",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53705f13-5fc4-4fd7-8180-1ecf11d44289",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3776818351,
      "longitude": 29.0342427476
    }
  },
  "5384c834-95f7-4662-8a12-372b72134f06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "5384c834-95f7-4662-8a12-372b72134f06",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5384c834-95f7-4662-8a12-372b72134f06",
    "image": "name_of",
    "point": {
      "latitude": 52.6505211818,
      "longitude": 29.716046778
    }
  },
  "53ee11e6-27a3-4d41-88cd-7195b5c526c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "53ee11e6-27a3-4d41-88cd-7195b5c526c9",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53ee11e6-27a3-4d41-88cd-7195b5c526c9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2030069858,
      "longitude": 29.2385626922
    }
  },
  "545c7931-2db3-4900-bed6-748cfa9e8b64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "545c7931-2db3-4900-bed6-748cfa9e8b64",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "545c7931-2db3-4900-bed6-748cfa9e8b64",
    "image": "perev_left",
    "point": {
      "latitude": 52.5596606923,
      "longitude": 30.1340262498
    }
  },
  "54830127-b31d-4fe0-941f-2c807eb9a695": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 558",
      "id": "54830127-b31d-4fe0-941f-2c807eb9a695",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54830127-b31d-4fe0-941f-2c807eb9a695",
    "image": "perev_right",
    "point": {
      "latitude": 53.7867893184,
      "longitude": 28.9501525581
    }
  },
  "556fe10b-bcf3-4ad8-ae3c-ef48f999d2c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 175",
      "id": "556fe10b-bcf3-4ad8-ae3c-ef48f999d2c9",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "556fe10b-bcf3-4ad8-ae3c-ef48f999d2c9",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1637300859,
      "longitude": 29.2417713165
    }
  },
  "560888f9-9659-4383-8100-d5c56871c478": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 72",
      "id": "560888f9-9659-4383-8100-d5c56871c478",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "560888f9-9659-4383-8100-d5c56871c478",
    "image": "perev_left",
    "point": {
      "latitude": 52.5867687357,
      "longitude": 30.0030611287
    }
  },
  "5640a7fe-7957-456c-8489-1406328cca8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 245",
      "id": "5640a7fe-7957-456c-8489-1406328cca8d",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5640a7fe-7957-456c-8489-1406328cca8d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5118856468,
      "longitude": 28.9642757509
    }
  },
  "56667966-9d53-42b3-a8f4-8b167e071345": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 506",
      "id": "56667966-9d53-42b3-a8f4-8b167e071345",
      "kilometrage": 272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56667966-9d53-42b3-a8f4-8b167e071345",
    "image": "perev_right",
    "point": {
      "latitude": 53.6656984248,
      "longitude": 28.9446782521
    }
  },
  "568b6877-aac5-4f93-bce1-b05797ba8be4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 199",
      "id": "568b6877-aac5-4f93-bce1-b05797ba8be4",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "568b6877-aac5-4f93-bce1-b05797ba8be4",
    "image": "perev_left",
    "point": {
      "latitude": 52.8106567576,
      "longitude": 29.4507403456
    }
  },
  "569e5f0d-36aa-4635-8ae3-e9f6846348bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 447",
      "id": "569e5f0d-36aa-4635-8ae3-e9f6846348bf",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "569e5f0d-36aa-4635-8ae3-e9f6846348bf",
    "image": "perev_left",
    "point": {
      "latitude": 53.5008500471,
      "longitude": 28.9714341444
    }
  },
  "56f7f4b3-1de5-4ea2-b873-5f050375a0af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 130",
      "id": "56f7f4b3-1de5-4ea2-b873-5f050375a0af",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56f7f4b3-1de5-4ea2-b873-5f050375a0af",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9308369524,
      "longitude": 29.3450197806
    }
  },
  "57d9957f-a1be-4b95-8731-29c4cd357d7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "57d9957f-a1be-4b95-8731-29c4cd357d7a",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57d9957f-a1be-4b95-8731-29c4cd357d7a",
    "image": "waves_forbidden",
    "point": {
      "latitude": 53.503435479,
      "longitude": 28.9574323025
    }
  },
  "58059de4-28be-487a-af21-a7402a6e4317": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 105",
      "id": "58059de4-28be-487a-af21-a7402a6e4317",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58059de4-28be-487a-af21-a7402a6e4317",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8060909199,
      "longitude": 29.4477855756
    }
  },
  "5823d78a-9d76-4812-a88a-b33eb1948187": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5823d78a-9d76-4812-a88a-b33eb1948187",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5823d78a-9d76-4812-a88a-b33eb1948187",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.244217127,
      "longitude": 29.16543339
    }
  },
  "58fc1320-4377-47be-9f43-f9f666363a18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 326",
      "id": "58fc1320-4377-47be-9f43-f9f666363a18",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58fc1320-4377-47be-9f43-f9f666363a18",
    "image": "perev_right",
    "point": {
      "latitude": 53.2034750292,
      "longitude": 29.2336241046
    }
  },
  "5922bd6a-e3fd-4461-a010-b1734849b553": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 66",
      "id": "5922bd6a-e3fd-4461-a010-b1734849b553",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5922bd6a-e3fd-4461-a010-b1734849b553",
    "image": "perev_right",
    "point": {
      "latitude": 52.5766315898,
      "longitude": 30.0158106826
    }
  },
  "59553098-68ba-4780-984e-beb3734cbe12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 190",
      "id": "59553098-68ba-4780-984e-beb3734cbe12",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59553098-68ba-4780-984e-beb3734cbe12",
    "image": "perev_left",
    "point": {
      "latitude": 52.8042333808,
      "longitude": 29.495573565
    }
  },
  "59e5ae37-a0c1-4ea8-bd02-553afebe4eca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 442",
      "id": "59e5ae37-a0c1-4ea8-bd02-553afebe4eca",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59e5ae37-a0c1-4ea8-bd02-553afebe4eca",
    "image": "perev_left",
    "point": {
      "latitude": 53.49325869,
      "longitude": 28.9567789307
    }
  },
  "5a0f11d3-e70f-44ab-994d-42f25829d60f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 387",
      "id": "5a0f11d3-e70f-44ab-994d-42f25829d60f",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a0f11d3-e70f-44ab-994d-42f25829d60f",
    "image": "perev_left",
    "point": {
      "latitude": 53.3543946445,
      "longitude": 29.0271614688
    }
  },
  "5a2fd1ec-6082-4a7f-b0dc-0b7bdfb84c22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 299",
      "id": "5a2fd1ec-6082-4a7f-b0dc-0b7bdfb84c22",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a2fd1ec-6082-4a7f-b0dc-0b7bdfb84c22",
    "image": "perev_left",
    "point": {
      "latitude": 53.0792631892,
      "longitude": 29.2567465721
    }
  },
  "5a642bc3-5fb0-4394-99bc-c60e6fb7cb16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 538",
      "id": "5a642bc3-5fb0-4394-99bc-c60e6fb7cb16",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a642bc3-5fb0-4394-99bc-c60e6fb7cb16",
    "image": "perev_right",
    "point": {
      "latitude": 53.7303817574,
      "longitude": 28.9481305908
    }
  },
  "5b201339-4753-41c3-8909-b75ac05b7846": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 480",
      "id": "5b201339-4753-41c3-8909-b75ac05b7846",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b201339-4753-41c3-8909-b75ac05b7846",
    "image": "perev_left",
    "point": {
      "latitude": 53.57919843,
      "longitude": 28.948513047
    }
  },
  "5b40ec0f-dce3-4639-96ad-fec44ba3948c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 157",
      "id": "5b40ec0f-dce3-4639-96ad-fec44ba3948c",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b40ec0f-dce3-4639-96ad-fec44ba3948c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6951518161,
      "longitude": 29.612054467
    }
  },
  "5bfa106a-bb23-402c-b8d4-9ca0256ad839": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 568",
      "id": "5bfa106a-bb23-402c-b8d4-9ca0256ad839",
      "kilometrage": 301,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5bfa106a-bb23-402c-b8d4-9ca0256ad839",
    "image": "perev_right",
    "point": {
      "latitude": 53.8017395206,
      "longitude": 28.9656651386
    }
  },
  "5c8fdb00-c5ef-4aaa-9055-112fbb971304": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 430",
      "id": "5c8fdb00-c5ef-4aaa-9055-112fbb971304",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c8fdb00-c5ef-4aaa-9055-112fbb971304",
    "image": "perev_right",
    "point": {
      "latitude": 53.4753510645,
      "longitude": 28.9561909646
    }
  },
  "5cdd73d4-af30-418b-bb18-0b38b00b37bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 270",
      "id": "5cdd73d4-af30-418b-bb18-0b38b00b37bd",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cdd73d4-af30-418b-bb18-0b38b00b37bd",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6508919297,
      "longitude": 28.9327352602
    }
  },
  "5cfd07a1-a15e-43a1-8a78-06daf791a75f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 21",
      "id": "5cfd07a1-a15e-43a1-8a78-06daf791a75f",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cfd07a1-a15e-43a1-8a78-06daf791a75f",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1610774581,
      "longitude": 29.2444671627
    }
  },
  "5eb57b69-8f45-4476-8398-ca7cd652304b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 255",
      "id": "5eb57b69-8f45-4476-8398-ca7cd652304b",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5eb57b69-8f45-4476-8398-ca7cd652304b",
    "image": "perev_right",
    "point": {
      "latitude": 52.9562889132,
      "longitude": 29.3778644308
    }
  },
  "5eb8a0bb-7f99-4f6d-96af-1a692e2180ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 365",
      "id": "5eb8a0bb-7f99-4f6d-96af-1a692e2180ad",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5eb8a0bb-7f99-4f6d-96af-1a692e2180ad",
    "image": "perev_left",
    "point": {
      "latitude": 53.2767689285,
      "longitude": 29.085720375
    }
  },
  "5eb8b653-a0d4-4ac1-9f48-db927f040724": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 418",
      "id": "5eb8b653-a0d4-4ac1-9f48-db927f040724",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5eb8b653-a0d4-4ac1-9f48-db927f040724",
    "image": "perev_left",
    "point": {
      "latitude": 53.4517937023,
      "longitude": 28.9618087825
    }
  },
  "5ecdd4ef-74ec-42b3-a090-ad57df38d7cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5ecdd4ef-74ec-42b3-a090-ad57df38d7cb",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ecdd4ef-74ec-42b3-a090-ad57df38d7cb",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.642934078,
      "longitude": 29.7761034456
    }
  },
  "5f457ea3-eedf-487c-8d87-cf2de3543517": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "5f457ea3-eedf-487c-8d87-cf2de3543517",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f457ea3-eedf-487c-8d87-cf2de3543517",
    "image": "perev_left",
    "point": {
      "latitude": 52.5529423595,
      "longitude": 30.0945712617
    }
  },
  "5ff2663b-6387-433d-a967-ad3a23700ab1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 190",
      "id": "5ff2663b-6387-433d-a967-ad3a23700ab1",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ff2663b-6387-433d-a967-ad3a23700ab1",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2361729166,
      "longitude": 29.1850975807
    }
  },
  "6084f758-346e-4b1a-bc73-a925ba335974": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 246",
      "id": "6084f758-346e-4b1a-bc73-a925ba335974",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6084f758-346e-4b1a-bc73-a925ba335974",
    "image": "perev_right",
    "point": {
      "latitude": 52.9250040415,
      "longitude": 29.3387434256
    }
  },
  "60ac7214-e2fd-4df8-b2b3-5347ea1a6cc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "60ac7214-e2fd-4df8-b2b3-5347ea1a6cc1",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60ac7214-e2fd-4df8-b2b3-5347ea1a6cc1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0968900649,
      "longitude": 29.2459887238
    }
  },
  "60dbf136-7724-4022-9247-b2fa9e192f8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 470",
      "id": "60dbf136-7724-4022-9247-b2fa9e192f8f",
      "kilometrage": 253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60dbf136-7724-4022-9247-b2fa9e192f8f",
    "image": "perev_right",
    "point": {
      "latitude": 53.5618837422,
      "longitude": 28.9485123086
    }
  },
  "61834b5c-0dd5-4a8c-8e0b-de7333b4ebd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 117",
      "id": "61834b5c-0dd5-4a8c-8e0b-de7333b4ebd5",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61834b5c-0dd5-4a8c-8e0b-de7333b4ebd5",
    "image": "perev_left",
    "point": {
      "latitude": 52.6493629649,
      "longitude": 29.8089873781
    }
  },
  "6188591c-03ff-45fa-96da-18eba4d3bbe6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 189",
      "id": "6188591c-03ff-45fa-96da-18eba4d3bbe6",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6188591c-03ff-45fa-96da-18eba4d3bbe6",
    "image": "perev_right",
    "point": {
      "latitude": 52.7975659593,
      "longitude": 29.4933141767
    }
  },
  "6219f8de-515a-4e91-9e81-566b652bcf66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 324",
      "id": "6219f8de-515a-4e91-9e81-566b652bcf66",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6219f8de-515a-4e91-9e81-566b652bcf66",
    "image": "perev_right",
    "point": {
      "latitude": 53.1903751503,
      "longitude": 29.2370432998
    }
  },
  "628fdc7c-532a-40bf-82cf-b23ffdb6dc38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 391",
      "id": "628fdc7c-532a-40bf-82cf-b23ffdb6dc38",
      "kilometrage": 218,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "628fdc7c-532a-40bf-82cf-b23ffdb6dc38",
    "image": "perev_right",
    "point": {
      "latitude": 53.3739341579,
      "longitude": 29.0187554139
    }
  },
  "62bc8583-b561-47fb-840b-4ac419eff1b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "62bc8583-b561-47fb-840b-4ac419eff1b7",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62bc8583-b561-47fb-840b-4ac419eff1b7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.2364954329,
      "longitude": 29.2180894196
    }
  },
  "62fd62cc-955e-4c58-abfc-d72179d97613": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 267",
      "id": "62fd62cc-955e-4c58-abfc-d72179d97613",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62fd62cc-955e-4c58-abfc-d72179d97613",
    "image": "perev_left",
    "point": {
      "latitude": 52.9784624626,
      "longitude": 29.3386564286
    }
  },
  "63ceb427-6cbb-4c46-abd0-89e6c1a1738b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 364",
      "id": "63ceb427-6cbb-4c46-abd0-89e6c1a1738b",
      "kilometrage": 201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63ceb427-6cbb-4c46-abd0-89e6c1a1738b",
    "image": "perev_left",
    "point": {
      "latitude": 53.2719576665,
      "longitude": 29.0919336156
    }
  },
  "642a8e84-9cbb-4927-829c-2cdcdd4887ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 519",
      "id": "642a8e84-9cbb-4927-829c-2cdcdd4887ba",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "642a8e84-9cbb-4927-829c-2cdcdd4887ba",
    "image": "perev_right",
    "point": {
      "latitude": 53.6961348913,
      "longitude": 28.9670194082
    }
  },
  "6443e218-1eba-461a-9a7b-213f4899436e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6443e218-1eba-461a-9a7b-213f4899436e",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6443e218-1eba-461a-9a7b-213f4899436e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.163008838,
      "longitude": 29.243704124
    }
  },
  "6501ad52-e16d-481c-b979-cfd12c5f2aec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 428",
      "id": "6501ad52-e16d-481c-b979-cfd12c5f2aec",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6501ad52-e16d-481c-b979-cfd12c5f2aec",
    "image": "perev_left",
    "point": {
      "latitude": 53.4700468974,
      "longitude": 28.9592133315
    }
  },
  "65581517-5ae0-40cd-937e-96cb91d61849": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 571",
      "id": "65581517-5ae0-40cd-937e-96cb91d61849",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65581517-5ae0-40cd-937e-96cb91d61849",
    "image": "perev_left",
    "point": {
      "latitude": 53.811519328,
      "longitude": 28.985250101
    }
  },
  "658bf6bd-c3a2-4202-83af-17956da22733": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 524",
      "id": "658bf6bd-c3a2-4202-83af-17956da22733",
      "kilometrage": 281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "658bf6bd-c3a2-4202-83af-17956da22733",
    "image": "perev_left",
    "point": {
      "latitude": 53.7042734173,
      "longitude": 28.9716303167
    }
  },
  "6598298d-34e3-4313-ab3c-0db7ae954d3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 69",
      "id": "6598298d-34e3-4313-ab3c-0db7ae954d3d",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6598298d-34e3-4313-ab3c-0db7ae954d3d",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.5851884212,
      "longitude": 30.0186138568
    }
  },
  "65d52629-a581-4ecf-88b1-2a99c93c56b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "65d52629-a581-4ecf-88b1-2a99c93c56b7",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65d52629-a581-4ecf-88b1-2a99c93c56b7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1412398814,
      "longitude": 29.2677625177
    }
  },
  "65d86e41-6f31-40e1-a208-f5f862e9326b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 583",
      "id": "65d86e41-6f31-40e1-a208-f5f862e9326b",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65d86e41-6f31-40e1-a208-f5f862e9326b",
    "image": "perev_right",
    "point": {
      "latitude": 53.8425662932,
      "longitude": 28.9992366786
    }
  },
  "65f36194-170a-4908-b504-fe1d64155a79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 125",
      "id": "65f36194-170a-4908-b504-fe1d64155a79",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65f36194-170a-4908-b504-fe1d64155a79",
    "image": "perev_right",
    "point": {
      "latitude": 52.6453394045,
      "longitude": 29.7669330554
    }
  },
  "66051ac7-2ad1-497e-a3b0-cc5f4df64c12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "66051ac7-2ad1-497e-a3b0-cc5f4df64c12",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66051ac7-2ad1-497e-a3b0-cc5f4df64c12",
    "image": "name_of",
    "point": {
      "latitude": 53.7759422402,
      "longitude": 28.9475092573
    }
  },
  "6633abf7-4cc2-40a2-a559-ed4f0775cc44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6633abf7-4cc2-40a2-a559-ed4f0775cc44",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6633abf7-4cc2-40a2-a559-ed4f0775cc44",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9473389864,
      "longitude": 29.3759125301
    }
  },
  "6667fc99-ec1f-4c93-a3be-3154d36a0163": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 522",
      "id": "6667fc99-ec1f-4c93-a3be-3154d36a0163",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6667fc99-ec1f-4c93-a3be-3154d36a0163",
    "image": "perev_right",
    "point": {
      "latitude": 53.7018339447,
      "longitude": 28.9668648847
    }
  },
  "669aa32b-3d30-4c26-a846-9df755bede64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "669aa32b-3d30-4c26-a846-9df755bede64",
      "kilometrage": 6,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "669aa32b-3d30-4c26-a846-9df755bede64",
    "image": "perev_right",
    "point": {
      "latitude": 52.5784515063,
      "longitude": 30.1896820142
    }
  },
  "66bcce58-c147-4d16-af85-3e4146f73cf4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "66bcce58-c147-4d16-af85-3e4146f73cf4",
      "kilometrage": 303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66bcce58-c147-4d16-af85-3e4146f73cf4",
    "image": "main_way",
    "point": {
      "latitude": 53.8127913517,
      "longitude": 28.9839646049
    }
  },
  "6704a7f3-1ee4-40c7-a9ad-a35a9e50c5df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 110",
      "id": "6704a7f3-1ee4-40c7-a9ad-a35a9e50c5df",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6704a7f3-1ee4-40c7-a9ad-a35a9e50c5df",
    "image": "perev_right",
    "point": {
      "latitude": 52.6334205783,
      "longitude": 29.7931016844
    }
  },
  "676bcb7c-4d77-4bb8-9244-c03364e59abc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 521",
      "id": "676bcb7c-4d77-4bb8-9244-c03364e59abc",
      "kilometrage": 280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "676bcb7c-4d77-4bb8-9244-c03364e59abc",
    "image": "perev_left",
    "point": {
      "latitude": 53.7017598165,
      "longitude": 28.9751454669
    }
  },
  "67ce82db-0500-4096-bda0-9fccc80268d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 526",
      "id": "67ce82db-0500-4096-bda0-9fccc80268d7",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67ce82db-0500-4096-bda0-9fccc80268d7",
    "image": "perev_left",
    "point": {
      "latitude": 53.7112320079,
      "longitude": 28.9757861877
    }
  },
  "684fee29-72b2-44f6-a10a-92449b7859d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 419",
      "id": "684fee29-72b2-44f6-a10a-92449b7859d7",
      "kilometrage": 232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "684fee29-72b2-44f6-a10a-92449b7859d7",
    "image": "perev_right",
    "point": {
      "latitude": 53.4529323471,
      "longitude": 28.9570757734
    }
  },
  "68f53562-bc21-430a-afa8-d56fda7d36fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 530",
      "id": "68f53562-bc21-430a-afa8-d56fda7d36fa",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68f53562-bc21-430a-afa8-d56fda7d36fa",
    "image": "perev_left",
    "point": {
      "latitude": 53.7107826568,
      "longitude": 28.9684031952
    }
  },
  "6a49ef6d-e672-458d-bc86-b8886d4ee768": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 140",
      "id": "6a49ef6d-e672-458d-bc86-b8886d4ee768",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a49ef6d-e672-458d-bc86-b8886d4ee768",
    "image": "perev_left",
    "point": {
      "latitude": 52.6732506059,
      "longitude": 29.6998926313
    }
  },
  "6a5afcbf-f6c1-4e09-b797-4714fd228ed5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "6a5afcbf-f6c1-4e09-b797-4714fd228ed5",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a5afcbf-f6c1-4e09-b797-4714fd228ed5",
    "image": "perev_left",
    "point": {
      "latitude": 52.56246578,
      "longitude": 30.1128423425
    }
  },
  "6a891aab-14db-4be9-b255-235c4d896284": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 5",
      "id": "6a891aab-14db-4be9-b255-235c4d896284",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a891aab-14db-4be9-b255-235c4d896284",
    "image": "perev_right",
    "point": {
      "latitude": 52.5568697431,
      "longitude": 30.2170209816
    }
  },
  "6ad3db17-321e-4e17-b15c-66b78d01f1c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 103",
      "id": "6ad3db17-321e-4e17-b15c-66b78d01f1c9",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ad3db17-321e-4e17-b15c-66b78d01f1c9",
    "image": "perev_left",
    "point": {
      "latitude": 52.6330841332,
      "longitude": 29.8468111187
    }
  },
  "6b6566d5-811a-4b27-a2b4-29809c38f2a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 484",
      "id": "6b6566d5-811a-4b27-a2b4-29809c38f2a5",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b6566d5-811a-4b27-a2b4-29809c38f2a5",
    "image": "perev_left",
    "point": {
      "latitude": 53.6003591519,
      "longitude": 28.9381561313
    }
  },
  "6bfb402b-344c-436b-91eb-23fbd670ef7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "6bfb402b-344c-436b-91eb-23fbd670ef7a",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bfb402b-344c-436b-91eb-23fbd670ef7a",
    "image": "perev_left",
    "point": {
      "latitude": 52.5628253153,
      "longitude": 30.2077770558
    }
  },
  "6ca11f90-cf25-45a3-acf7-e2fd2e64ddf8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 352",
      "id": "6ca11f90-cf25-45a3-acf7-e2fd2e64ddf8",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ca11f90-cf25-45a3-acf7-e2fd2e64ddf8",
    "image": "perev_left",
    "point": {
      "latitude": 53.2538550782,
      "longitude": 29.139890496
    }
  },
  "6d0b9833-8d43-4c71-ac3d-7332c7847e96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 423",
      "id": "6d0b9833-8d43-4c71-ac3d-7332c7847e96",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d0b9833-8d43-4c71-ac3d-7332c7847e96",
    "image": "perev_right",
    "point": {
      "latitude": 53.4614333858,
      "longitude": 28.9536524311
    }
  },
  "6d26e5b3-b084-4b2e-9b1a-c7210971fcaa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 155",
      "id": "6d26e5b3-b084-4b2e-9b1a-c7210971fcaa",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d26e5b3-b084-4b2e-9b1a-c7210971fcaa",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6849671537,
      "longitude": 29.6223727821
    }
  },
  "6d4c4581-0435-4ab8-b8b6-6d5d1091304d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 339",
      "id": "6d4c4581-0435-4ab8-b8b6-6d5d1091304d",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d4c4581-0435-4ab8-b8b6-6d5d1091304d",
    "image": "perev_right",
    "point": {
      "latitude": 53.2332751618,
      "longitude": 29.1908330896
    }
  },
  "6dda1210-1af5-46a6-ae90-b199c4177e33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 76",
      "id": "6dda1210-1af5-46a6-ae90-b199c4177e33",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6dda1210-1af5-46a6-ae90-b199c4177e33",
    "image": "perev_left",
    "point": {
      "latitude": 52.6007674717,
      "longitude": 29.974731019
    }
  },
  "6e5d3ad9-bff2-459e-ab60-7aa08cfe7b52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 24",
      "id": "6e5d3ad9-bff2-459e-ab60-7aa08cfe7b52",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e5d3ad9-bff2-459e-ab60-7aa08cfe7b52",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1751793362,
      "longitude": 29.2367795238
    }
  },
  "6e64fd7f-6904-470c-a2ab-6f052601779b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 203",
      "id": "6e64fd7f-6904-470c-a2ab-6f052601779b",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e64fd7f-6904-470c-a2ab-6f052601779b",
    "image": "perev_right",
    "point": {
      "latitude": 52.8125113546,
      "longitude": 29.4269747118
    }
  },
  "6f00f3bd-5acc-4666-920e-c71c98d158d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 110",
      "id": "6f00f3bd-5acc-4666-920e-c71c98d158d1",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f00f3bd-5acc-4666-920e-c71c98d158d1",
    "image": "kilometrage",
    "point": {
      "latitude": 52.822972509,
      "longitude": 29.4414353206
    }
  },
  "6f054bb7-5572-442f-9dce-2f9b47dfd292": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 300",
      "id": "6f054bb7-5572-442f-9dce-2f9b47dfd292",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f054bb7-5572-442f-9dce-2f9b47dfd292",
    "image": "perev_right",
    "point": {
      "latitude": 53.0829478126,
      "longitude": 29.2519243634
    }
  },
  "6f257c2f-50e6-4710-8502-f4f2df82f55b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 172",
      "id": "6f257c2f-50e6-4710-8502-f4f2df82f55b",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f257c2f-50e6-4710-8502-f4f2df82f55b",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.7425808508,
      "longitude": 29.5408841375
    }
  },
  "6f5757f0-7ae4-4d8a-8707-5aead55379cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 46",
      "id": "6f5757f0-7ae4-4d8a-8707-5aead55379cd",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f5757f0-7ae4-4d8a-8707-5aead55379cd",
    "image": "perev_right",
    "point": {
      "latitude": 52.5562219615,
      "longitude": 30.0577211809
    }
  },
  "6f5abf98-5520-477d-aff3-c29d801158ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 457",
      "id": "6f5abf98-5520-477d-aff3-c29d801158ec",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f5abf98-5520-477d-aff3-c29d801158ec",
    "image": "perev_right",
    "point": {
      "latitude": 53.5295642259,
      "longitude": 28.9582311517
    }
  },
  "6f8b343a-dcf5-49a5-b77e-1e7d84e98984": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 197",
      "id": "6f8b343a-dcf5-49a5-b77e-1e7d84e98984",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f8b343a-dcf5-49a5-b77e-1e7d84e98984",
    "image": "perev_right",
    "point": {
      "latitude": 52.8041247464,
      "longitude": 29.4541413859
    }
  },
  "6fe28bfb-61d3-4f28-ade3-224c6048bc4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 104",
      "id": "6fe28bfb-61d3-4f28-ade3-224c6048bc4d",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fe28bfb-61d3-4f28-ade3-224c6048bc4d",
    "image": "perev_right",
    "point": {
      "latitude": 52.6282531577,
      "longitude": 29.8289989028
    }
  },
  "70707613-5175-4987-a04b-208863e164dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 139",
      "id": "70707613-5175-4987-a04b-208863e164dc",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70707613-5175-4987-a04b-208863e164dc",
    "image": "perev_right",
    "point": {
      "latitude": 52.6700065214,
      "longitude": 29.6988114518
    }
  },
  "70800c48-84ca-4e47-b82d-d68e88248b13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "70800c48-84ca-4e47-b82d-d68e88248b13",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70800c48-84ca-4e47-b82d-d68e88248b13",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1283576931,
      "longitude": 29.2628303811
    }
  },
  "71ac4619-9bce-4d34-b621-ef879f4e3c35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 135",
      "id": "71ac4619-9bce-4d34-b621-ef879f4e3c35",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "71ac4619-9bce-4d34-b621-ef879f4e3c35",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9646960218,
      "longitude": 29.3819847356
    }
  },
  "725982a1-d0af-418b-bb24-e932aece08c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 565",
      "id": "725982a1-d0af-418b-bb24-e932aece08c5",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "725982a1-d0af-418b-bb24-e932aece08c5",
    "image": "perev_left",
    "point": {
      "latitude": 53.792209138,
      "longitude": 28.9727281615
    }
  },
  "727ae43a-b200-4911-b125-5be2ead4543f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 64",
      "id": "727ae43a-b200-4911-b125-5be2ead4543f",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "727ae43a-b200-4911-b125-5be2ead4543f",
    "image": "perev_left",
    "point": {
      "latitude": 52.5762875697,
      "longitude": 30.0216438283
    }
  },
  "72a4c27d-f968-4a4f-a41e-9f478f59ed77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "72a4c27d-f968-4a4f-a41e-9f478f59ed77",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72a4c27d-f968-4a4f-a41e-9f478f59ed77",
    "image": "perev_right",
    "point": {
      "latitude": 52.567978641,
      "longitude": 30.0078358255
    }
  },
  "73d97261-695b-4bf8-8a22-224f9026ad39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 425",
      "id": "73d97261-695b-4bf8-8a22-224f9026ad39",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73d97261-695b-4bf8-8a22-224f9026ad39",
    "image": "perev_right",
    "point": {
      "latitude": 53.4694560004,
      "longitude": 28.9515998177
    }
  },
  "73f4f7d7-5daf-4c67-87b3-ee976ded67ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "73f4f7d7-5daf-4c67-87b3-ee976ded67ee",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73f4f7d7-5daf-4c67-87b3-ee976ded67ee",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2363955021,
      "longitude": 29.1810280163
    }
  },
  "7448f90b-5cdc-4e4f-b634-91f3b4ec8038": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 115",
      "id": "7448f90b-5cdc-4e4f-b634-91f3b4ec8038",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7448f90b-5cdc-4e4f-b634-91f3b4ec8038",
    "image": "perev_left",
    "point": {
      "latitude": 52.6432114824,
      "longitude": 29.8058810379
    }
  },
  "746242bb-f7e5-4d4c-ae5d-88d31232a86e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 241",
      "id": "746242bb-f7e5-4d4c-ae5d-88d31232a86e",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "746242bb-f7e5-4d4c-ae5d-88d31232a86e",
    "image": "perev_right",
    "point": {
      "latitude": 52.8988579271,
      "longitude": 29.331818975
    }
  },
  "747657f5-a610-4c7f-ae97-3a90eaa4925d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 182",
      "id": "747657f5-a610-4c7f-ae97-3a90eaa4925d",
      "kilometrage": 97,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "747657f5-a610-4c7f-ae97-3a90eaa4925d",
    "image": "perev_left",
    "point": {
      "latitude": 52.7843717994,
      "longitude": 29.507958467
    }
  },
  "74a2ed6d-2a8a-4463-9065-3bb94f992787": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "74a2ed6d-2a8a-4463-9065-3bb94f992787",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74a2ed6d-2a8a-4463-9065-3bb94f992787",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5643748463,
      "longitude": 30.1479090575
    }
  },
  "74a606bc-ba99-43c3-a370-e49c4372b493": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 375",
      "id": "74a606bc-ba99-43c3-a370-e49c4372b493",
      "kilometrage": 207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74a606bc-ba99-43c3-a370-e49c4372b493",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.304560449,
      "longitude": 29.0732916511
    }
  },
  "74c7bace-a193-4f4f-b207-05ac0107cd67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 298",
      "id": "74c7bace-a193-4f4f-b207-05ac0107cd67",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74c7bace-a193-4f4f-b207-05ac0107cd67",
    "image": "perev_left",
    "point": {
      "latitude": 53.0729441046,
      "longitude": 29.2539463105
    }
  },
  "754ac10b-e212-48f5-9724-d165c0bf456f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "754ac10b-e212-48f5-9724-d165c0bf456f",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "754ac10b-e212-48f5-9724-d165c0bf456f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1726469879,
      "longitude": 29.2368540667
    }
  },
  "755934c2-c45b-414c-96d7-d944b8ce0be0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 222",
      "id": "755934c2-c45b-414c-96d7-d944b8ce0be0",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "755934c2-c45b-414c-96d7-d944b8ce0be0",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.8325647756,
      "longitude": 29.3928711612
    }
  },
  "75d4b803-7dc4-4c9a-9b56-51bacfddd856": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 261",
      "id": "75d4b803-7dc4-4c9a-9b56-51bacfddd856",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75d4b803-7dc4-4c9a-9b56-51bacfddd856",
    "image": "perev_right",
    "point": {
      "latitude": 52.957486306,
      "longitude": 29.3661881388
    }
  },
  "7731fbc8-b3e5-4ff2-8cfa-65ceefeec4b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 338",
      "id": "7731fbc8-b3e5-4ff2-8cfa-65ceefeec4b0",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7731fbc8-b3e5-4ff2-8cfa-65ceefeec4b0",
    "image": "perev_right",
    "point": {
      "latitude": 53.2292135267,
      "longitude": 29.1982121313
    }
  },
  "77824134-064b-4bfd-a078-87d416f93fbe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "77824134-064b-4bfd-a078-87d416f93fbe",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77824134-064b-4bfd-a078-87d416f93fbe",
    "image": "attention",
    "point": {
      "latitude": 53.5005653074,
      "longitude": 28.9721676436
    }
  },
  "783681a7-93d9-4412-b337-91d5a7396c69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 15",
      "id": "783681a7-93d9-4412-b337-91d5a7396c69",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "783681a7-93d9-4412-b337-91d5a7396c69",
    "image": "perev_right",
    "point": {
      "latitude": 52.5785655179,
      "longitude": 30.1822913411
    }
  },
  "789ab457-a09a-4a3d-8e2a-17cbadeee5f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 296",
      "id": "789ab457-a09a-4a3d-8e2a-17cbadeee5f6",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "789ab457-a09a-4a3d-8e2a-17cbadeee5f6",
    "image": "perev_left",
    "point": {
      "latitude": 53.0620544879,
      "longitude": 29.2501026028
    }
  },
  "7968348f-0a07-4c27-8683-5eeb2b0bc5d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "7968348f-0a07-4c27-8683-5eeb2b0bc5d7",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7968348f-0a07-4c27-8683-5eeb2b0bc5d7",
    "image": "perev_left",
    "point": {
      "latitude": 52.5569255312,
      "longitude": 30.227896284
    }
  },
  "7a9536ac-b1c2-42e4-b6f5-84465932592c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 188",
      "id": "7a9536ac-b1c2-42e4-b6f5-84465932592c",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a9536ac-b1c2-42e4-b6f5-84465932592c",
    "image": "perev_left",
    "point": {
      "latitude": 52.793747327,
      "longitude": 29.5002741102
    }
  },
  "7b2c8df8-9bbf-490b-aa66-c2e1478d94d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 349",
      "id": "7b2c8df8-9bbf-490b-aa66-c2e1478d94d0",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b2c8df8-9bbf-490b-aa66-c2e1478d94d0",
    "image": "perev_right",
    "point": {
      "latitude": 53.2462405617,
      "longitude": 29.1383439723
    }
  },
  "7c498c1c-61a8-447a-9fa6-a851d0c890d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "7c498c1c-61a8-447a-9fa6-a851d0c890d1",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c498c1c-61a8-447a-9fa6-a851d0c890d1",
    "image": "name_of",
    "point": {
      "latitude": 52.5514151596,
      "longitude": 30.0765405655
    }
  },
  "7c5ab3a1-6dfa-4934-8341-95f22e68d007": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7c5ab3a1-6dfa-4934-8341-95f22e68d007",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c5ab3a1-6dfa-4934-8341-95f22e68d007",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8456934069,
      "longitude": 29.0027630326
    }
  },
  "7c8e1104-742e-4924-8625-510a5bf56330": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "7c8e1104-742e-4924-8625-510a5bf56330",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c8e1104-742e-4924-8625-510a5bf56330",
    "image": "axis_romb",
    "point": {
      "latitude": 53.1621719509,
      "longitude": 29.2426871446
    }
  },
  "7cd80957-1bc1-4c5c-be47-951d038575d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7cd80957-1bc1-4c5c-be47-951d038575d5",
      "kilometrage": 307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cd80957-1bc1-4c5c-be47-951d038575d5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.838141633,
      "longitude": 28.9993795875
    }
  },
  "7d392d36-c05f-44b9-a4d5-e1b058b3ac24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 86",
      "id": "7d392d36-c05f-44b9-a4d5-e1b058b3ac24",
      "kilometrage": 42,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d392d36-c05f-44b9-a4d5-e1b058b3ac24",
    "image": "perev_right",
    "point": {
      "latitude": 52.615654532,
      "longitude": 29.9134581968
    }
  },
  "7d62d138-5eae-4b12-aa55-ba8fb1b7139c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 2",
      "id": "7d62d138-5eae-4b12-aa55-ba8fb1b7139c",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d62d138-5eae-4b12-aa55-ba8fb1b7139c",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.6273386223,
      "longitude": 29.8141186732
    }
  },
  "7d6b70e6-303b-41c6-8dbc-64626edae970": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 122",
      "id": "7d6b70e6-303b-41c6-8dbc-64626edae970",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d6b70e6-303b-41c6-8dbc-64626edae970",
    "image": "perev_right",
    "point": {
      "latitude": 52.6416786485,
      "longitude": 29.779249187
    }
  },
  "7d947e35-94f9-4c63-8488-ae20dc027e42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 127",
      "id": "7d947e35-94f9-4c63-8488-ae20dc027e42",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d947e35-94f9-4c63-8488-ae20dc027e42",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6355715324,
      "longitude": 29.7585140599
    }
  },
  "7db538b6-55f4-47c7-bc0e-c07dbcd3405e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 574",
      "id": "7db538b6-55f4-47c7-bc0e-c07dbcd3405e",
      "kilometrage": 305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7db538b6-55f4-47c7-bc0e-c07dbcd3405e",
    "image": "perev_left",
    "point": {
      "latitude": 53.8155729141,
      "longitude": 29.0056910268
    }
  },
  "7e75a5c6-4091-4f3f-bff4-5c57d06ecbb3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 490",
      "id": "7e75a5c6-4091-4f3f-bff4-5c57d06ecbb3",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e75a5c6-4091-4f3f-bff4-5c57d06ecbb3",
    "image": "perev_right",
    "point": {
      "latitude": 53.6191577828,
      "longitude": 28.9237188498
    }
  },
  "7e963487-ed42-4692-bfc3-177af36c1f8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 363",
      "id": "7e963487-ed42-4692-bfc3-177af36c1f8e",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e963487-ed42-4692-bfc3-177af36c1f8e",
    "image": "perev_right",
    "point": {
      "latitude": 53.2628020247,
      "longitude": 29.0886062393
    }
  },
  "7eca0b7c-a4f3-4418-8e26-70305561f107": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 198",
      "id": "7eca0b7c-a4f3-4418-8e26-70305561f107",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7eca0b7c-a4f3-4418-8e26-70305561f107",
    "image": "perev_right",
    "point": {
      "latitude": 52.8054264499,
      "longitude": 29.4483917429
    }
  },
  "7f282b03-b186-46fd-b44a-66cea6e1381b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 89",
      "id": "7f282b03-b186-46fd-b44a-66cea6e1381b",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f282b03-b186-46fd-b44a-66cea6e1381b",
    "image": "perev_left",
    "point": {
      "latitude": 52.6305202199,
      "longitude": 29.9006495432
    }
  },
  "7fb95164-e3a5-4eb8-b2ac-2fe3c37a8da7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 155",
      "id": "7fb95164-e3a5-4eb8-b2ac-2fe3c37a8da7",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fb95164-e3a5-4eb8-b2ac-2fe3c37a8da7",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0342647512,
      "longitude": 29.2619355146
    }
  },
  "7fca8a81-01f6-42f0-8fed-67ed6390bb9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 537",
      "id": "7fca8a81-01f6-42f0-8fed-67ed6390bb9a",
      "kilometrage": 287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fca8a81-01f6-42f0-8fed-67ed6390bb9a",
    "image": "perev_right",
    "point": {
      "latitude": 53.727171014,
      "longitude": 28.9509893471
    }
  },
  "7fec3305-3c71-4cb4-aad5-56f2a77d22bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 90",
      "id": "7fec3305-3c71-4cb4-aad5-56f2a77d22bd",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fec3305-3c71-4cb4-aad5-56f2a77d22bd",
    "image": "perev_right",
    "point": {
      "latitude": 52.626887657,
      "longitude": 29.9031839711
    }
  },
  "804e21e6-e8ae-48d4-bbad-106d409d5f22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 28",
      "id": "804e21e6-e8ae-48d4-bbad-106d409d5f22",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "804e21e6-e8ae-48d4-bbad-106d409d5f22",
    "image": "perev_left",
    "point": {
      "latitude": 52.5606922691,
      "longitude": 30.1186725205
    }
  },
  "804ffd8e-7066-4a57-94a8-231829582fdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 254",
      "id": "804ffd8e-7066-4a57-94a8-231829582fdd",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "804ffd8e-7066-4a57-94a8-231829582fdd",
    "image": "perev_left",
    "point": {
      "latitude": 52.9539090073,
      "longitude": 29.3814509498
    }
  },
  "8100eec8-702c-4568-b531-51d497ea4f32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8100eec8-702c-4568-b531-51d497ea4f32",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8100eec8-702c-4568-b531-51d497ea4f32",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8391662745,
      "longitude": 29.0018082447
    }
  },
  "814dfacc-09f6-47ac-a91b-0ec8196abe0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 58",
      "id": "814dfacc-09f6-47ac-a91b-0ec8196abe0b",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "814dfacc-09f6-47ac-a91b-0ec8196abe0b",
    "image": "perev_left",
    "point": {
      "latitude": 52.571947457,
      "longitude": 30.0216831251
    }
  },
  "8154b97a-27dc-4c1a-92b2-27b8dcc92ca9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 348",
      "id": "8154b97a-27dc-4c1a-92b2-27b8dcc92ca9",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8154b97a-27dc-4c1a-92b2-27b8dcc92ca9",
    "image": "perev_right",
    "point": {
      "latitude": 53.2457243218,
      "longitude": 29.1453185976
    }
  },
  "81a42ae8-5eb1-4087-822a-eaff31274120": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 135",
      "id": "81a42ae8-5eb1-4087-822a-eaff31274120",
      "kilometrage": 68,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81a42ae8-5eb1-4087-822a-eaff31274120",
    "image": "perev_right",
    "point": {
      "latitude": 52.6597419136,
      "longitude": 29.7031766225
    }
  },
  "81af6b57-e992-4ce8-bb5c-d4a763e4c90a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 482",
      "id": "81af6b57-e992-4ce8-bb5c-d4a763e4c90a",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81af6b57-e992-4ce8-bb5c-d4a763e4c90a",
    "image": "perev_left",
    "point": {
      "latitude": 53.5907617416,
      "longitude": 28.9390071258
    }
  },
  "821746f0-d102-47e8-8ce7-4af66127aa98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "821746f0-d102-47e8-8ce7-4af66127aa98",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "821746f0-d102-47e8-8ce7-4af66127aa98",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.2338864644,
      "longitude": 29.2141498644
    }
  },
  "823f102a-26bc-42d1-83ff-ac90c07d95dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 396",
      "id": "823f102a-26bc-42d1-83ff-ac90c07d95dc",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "823f102a-26bc-42d1-83ff-ac90c07d95dc",
    "image": "perev_right",
    "point": {
      "latitude": 53.3927772093,
      "longitude": 29.016904385
    }
  },
  "82428920-2ad1-4460-8882-ae2d95ddca0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 291",
      "id": "82428920-2ad1-4460-8882-ae2d95ddca0b",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82428920-2ad1-4460-8882-ae2d95ddca0b",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0348183845,
      "longitude": 29.279409816
    }
  },
  "828bbf60-f2d2-4c90-b2a6-d1a76d13334b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 200",
      "id": "828bbf60-f2d2-4c90-b2a6-d1a76d13334b",
      "kilometrage": 200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "828bbf60-f2d2-4c90-b2a6-d1a76d13334b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2654785933,
      "longitude": 29.0903841072
    }
  },
  "82cf5905-c4d8-49f8-988c-d36cc5933818": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 206",
      "id": "82cf5905-c4d8-49f8-988c-d36cc5933818",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82cf5905-c4d8-49f8-988c-d36cc5933818",
    "image": "perev_right",
    "point": {
      "latitude": 52.824196343,
      "longitude": 29.4377031914
    }
  },
  "836448a5-0642-46f9-967a-e134bb20ecd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 120",
      "id": "836448a5-0642-46f9-967a-e134bb20ecd5",
      "kilometrage": 59,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "836448a5-0642-46f9-967a-e134bb20ecd5",
    "image": "perev_left",
    "point": {
      "latitude": 52.6480542893,
      "longitude": 29.7931443249
    }
  },
  "8388648f-4494-4ce0-aefa-2ef0fbfa1943": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 517",
      "id": "8388648f-4494-4ce0-aefa-2ef0fbfa1943",
      "kilometrage": 278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8388648f-4494-4ce0-aefa-2ef0fbfa1943",
    "image": "perev_left",
    "point": {
      "latitude": 53.6928194411,
      "longitude": 28.9736546072
    }
  },
  "84110757-d516-4b8f-bce2-314ec65e8b8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "84110757-d516-4b8f-bce2-314ec65e8b8a",
      "kilometrage": 244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84110757-d516-4b8f-bce2-314ec65e8b8a",
    "image": "attention",
    "point": {
      "latitude": 53.5074268619,
      "longitude": 28.9559899475
    }
  },
  "843b5e61-a83e-40c4-8f30-74c6596c590c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 331",
      "id": "843b5e61-a83e-40c4-8f30-74c6596c590c",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "843b5e61-a83e-40c4-8f30-74c6596c590c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2224461741,
      "longitude": 29.2168993466
    }
  },
  "84562d07-5a10-44c1-928c-989d429deddb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 111",
      "id": "84562d07-5a10-44c1-928c-989d429deddb",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84562d07-5a10-44c1-928c-989d429deddb",
    "image": "perev_left",
    "point": {
      "latitude": 52.6321424288,
      "longitude": 29.7993737285
    }
  },
  "8458348a-e856-4930-ad35-11ee3e09dfc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 581",
      "id": "8458348a-e856-4930-ad35-11ee3e09dfc4",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8458348a-e856-4930-ad35-11ee3e09dfc4",
    "image": "perev_right",
    "point": {
      "latitude": 53.8404976398,
      "longitude": 28.9995320681
    }
  },
  "849115a0-37aa-4fa1-9639-3f0ab3edd8ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 77",
      "id": "849115a0-37aa-4fa1-9639-3f0ab3edd8ff",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "849115a0-37aa-4fa1-9639-3f0ab3edd8ff",
    "image": "perev_right",
    "point": {
      "latitude": 52.5977644058,
      "longitude": 29.9678246944
    }
  },
  "849ba689-ab26-4685-b83c-4a931ca9c629": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 572",
      "id": "849ba689-ab26-4685-b83c-4a931ca9c629",
      "kilometrage": 304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "849ba689-ab26-4685-b83c-4a931ca9c629",
    "image": "perev_left",
    "point": {
      "latitude": 53.8102689287,
      "longitude": 28.9964070331
    }
  },
  "85b4ac2f-3c24-447f-86bf-7f4a56907bae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 300",
      "id": "85b4ac2f-3c24-447f-86bf-7f4a56907bae",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85b4ac2f-3c24-447f-86bf-7f4a56907bae",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7917270764,
      "longitude": 28.9697631937
    }
  },
  "85e26afc-f3c9-4aa1-b30a-9f9c17f79af7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 225",
      "id": "85e26afc-f3c9-4aa1-b30a-9f9c17f79af7",
      "kilometrage": 117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85e26afc-f3c9-4aa1-b30a-9f9c17f79af7",
    "image": "perev_left",
    "point": {
      "latitude": 52.8423480046,
      "longitude": 29.391435139
    }
  },
  "85f75d5f-a220-4273-89e4-923a2985627d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 367",
      "id": "85f75d5f-a220-4273-89e4-923a2985627d",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85f75d5f-a220-4273-89e4-923a2985627d",
    "image": "perev_left",
    "point": {
      "latitude": 53.2833930165,
      "longitude": 29.0709375709
    }
  },
  "862dd104-77a5-4af4-a3a3-c40362998d47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "862dd104-77a5-4af4-a3a3-c40362998d47",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "862dd104-77a5-4af4-a3a3-c40362998d47",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.6273223724,
      "longitude": 29.8235475797
    }
  },
  "86520e1c-6912-46cb-af3e-192336452cde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 17",
      "id": "86520e1c-6912-46cb-af3e-192336452cde",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86520e1c-6912-46cb-af3e-192336452cde",
    "image": "buyo_left",
    "point": {
      "latitude": 53.1449277315,
      "longitude": 29.2647476772
    }
  },
  "8673e438-2dcf-466e-b485-c3d2c88ada54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 368",
      "id": "8673e438-2dcf-466e-b485-c3d2c88ada54",
      "kilometrage": 203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8673e438-2dcf-466e-b485-c3d2c88ada54",
    "image": "perev_right",
    "point": {
      "latitude": 53.2861385491,
      "longitude": 29.0608211567
    }
  },
  "86820725-5627-4fd2-8639-50c5855b720d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 492",
      "id": "86820725-5627-4fd2-8639-50c5855b720d",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86820725-5627-4fd2-8639-50c5855b720d",
    "image": "perev_right",
    "point": {
      "latitude": 53.6236219898,
      "longitude": 28.9366916356
    }
  },
  "86aa8a77-bda5-4e00-a34a-e95c33ec1a74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 309",
      "id": "86aa8a77-bda5-4e00-a34a-e95c33ec1a74",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86aa8a77-bda5-4e00-a34a-e95c33ec1a74",
    "image": "perev_right",
    "point": {
      "latitude": 53.137104939,
      "longitude": 29.2549456885
    }
  },
  "86f2d142-e0fe-4437-8742-4c242e088683": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "86f2d142-e0fe-4437-8742-4c242e088683",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86f2d142-e0fe-4437-8742-4c242e088683",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6822617211,
      "longitude": 29.660148042
    }
  },
  "871cc14d-8494-4c9f-a817-afb89f9af82e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "871cc14d-8494-4c9f-a817-afb89f9af82e",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "871cc14d-8494-4c9f-a817-afb89f9af82e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7215163855,
      "longitude": 29.6013996388
    }
  },
  "874a1e3e-7177-483c-8ac2-ddec3984800b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 329а",
      "id": "874a1e3e-7177-483c-8ac2-ddec3984800b",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "874a1e3e-7177-483c-8ac2-ddec3984800b",
    "image": "perev_right",
    "point": {
      "latitude": 53.2175827919,
      "longitude": 29.2265904008
    }
  },
  "879a88f3-8fad-49ce-b6a9-95b7a52f4e03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "879a88f3-8fad-49ce-b6a9-95b7a52f4e03",
      "kilometrage": 6,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "879a88f3-8fad-49ce-b6a9-95b7a52f4e03",
    "image": "perev_left",
    "point": {
      "latitude": 52.577381415,
      "longitude": 30.198390699
    }
  },
  "87e331de-c38d-4dc2-a734-e50384ff9af3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 277",
      "id": "87e331de-c38d-4dc2-a734-e50384ff9af3",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87e331de-c38d-4dc2-a734-e50384ff9af3",
    "image": "perev_right",
    "point": {
      "latitude": 52.9939964064,
      "longitude": 29.2673087575
    }
  },
  "884107f0-3a8c-4347-a23f-ab30b2cc34c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 415",
      "id": "884107f0-3a8c-4347-a23f-ab30b2cc34c1",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "884107f0-3a8c-4347-a23f-ab30b2cc34c1",
    "image": "perev_left",
    "point": {
      "latitude": 53.4461574487,
      "longitude": 28.9734310152
    }
  },
  "88f8492e-552c-4b90-8638-2a5e0a07beb0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 384",
      "id": "88f8492e-552c-4b90-8638-2a5e0a07beb0",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88f8492e-552c-4b90-8638-2a5e0a07beb0",
    "image": "perev_left",
    "point": {
      "latitude": 53.3476594779,
      "longitude": 29.0248177121
    }
  },
  "895aa548-8273-4c37-892e-8a4feefe3c86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 205",
      "id": "895aa548-8273-4c37-892e-8a4feefe3c86",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "895aa548-8273-4c37-892e-8a4feefe3c86",
    "image": "perev_left",
    "point": {
      "latitude": 52.8214524432,
      "longitude": 29.4424528421
    }
  },
  "89df49dd-e346-45ca-bbcf-dff7591d2ab4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "89df49dd-e346-45ca-bbcf-dff7591d2ab4",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89df49dd-e346-45ca-bbcf-dff7591d2ab4",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2028743452,
      "longitude": 29.2345459624
    }
  },
  "89f9471d-2609-4928-b563-aa02ebf94ec6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "89f9471d-2609-4928-b563-aa02ebf94ec6",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89f9471d-2609-4928-b563-aa02ebf94ec6",
    "image": "name_of",
    "point": {
      "latitude": 53.0799743229,
      "longitude": 29.256843762
    }
  },
  "8a7c886a-8689-495e-884b-ad7949429b57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 312",
      "id": "8a7c886a-8689-495e-884b-ad7949429b57",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a7c886a-8689-495e-884b-ad7949429b57",
    "image": "perev_right",
    "point": {
      "latitude": 53.1480714918,
      "longitude": 29.2547092145
    }
  },
  "8a864081-3209-4c8b-8e41-a281843291d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 540",
      "id": "8a864081-3209-4c8b-8e41-a281843291d2",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a864081-3209-4c8b-8e41-a281843291d2",
    "image": "perev_left",
    "point": {
      "latitude": 53.737157518,
      "longitude": 28.945700197
    }
  },
  "8b1cc8e2-f6f8-4e07-8f3c-85776c9c7667": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 496",
      "id": "8b1cc8e2-f6f8-4e07-8f3c-85776c9c7667",
      "kilometrage": 266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b1cc8e2-f6f8-4e07-8f3c-85776c9c7667",
    "image": "perev_right",
    "point": {
      "latitude": 53.6318089676,
      "longitude": 28.9321806788
    }
  },
  "8b5505cd-b363-486f-877e-12c73a6b3c56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 549",
      "id": "8b5505cd-b363-486f-877e-12c73a6b3c56",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b5505cd-b363-486f-877e-12c73a6b3c56",
    "image": "perev_right",
    "point": {
      "latitude": 53.7633082417,
      "longitude": 28.9415012653
    }
  },
  "8b7bdcd4-a0c5-4485-8af8-1ce0710c53d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 427",
      "id": "8b7bdcd4-a0c5-4485-8af8-1ce0710c53d6",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b7bdcd4-a0c5-4485-8af8-1ce0710c53d6",
    "image": "perev_left",
    "point": {
      "latitude": 53.4693172283,
      "longitude": 28.9566470309
    }
  },
  "8bb5d433-ff9d-4b0d-9bbf-17f62079778e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 563",
      "id": "8bb5d433-ff9d-4b0d-9bbf-17f62079778e",
      "kilometrage": 299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8bb5d433-ff9d-4b0d-9bbf-17f62079778e",
    "image": "perev_left",
    "point": {
      "latitude": 53.7881849783,
      "longitude": 28.9651048675
    }
  },
  "8c312dda-6cc7-4d92-acdd-1bdfd622921e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 403",
      "id": "8c312dda-6cc7-4d92-acdd-1bdfd622921e",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c312dda-6cc7-4d92-acdd-1bdfd622921e",
    "image": "perev_right",
    "point": {
      "latitude": 53.4174357903,
      "longitude": 28.9895294476
    }
  },
  "8cc9f846-7aff-4056-8de5-5e4c5dee98e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 474",
      "id": "8cc9f846-7aff-4056-8de5-5e4c5dee98e2",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cc9f846-7aff-4056-8de5-5e4c5dee98e2",
    "image": "perev_left",
    "point": {
      "latitude": 53.5673363506,
      "longitude": 28.9699309132
    }
  },
  "8d6b8296-27a6-4ef3-a9de-47f72710c153": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 515",
      "id": "8d6b8296-27a6-4ef3-a9de-47f72710c153",
      "kilometrage": 277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d6b8296-27a6-4ef3-a9de-47f72710c153",
    "image": "perev_right",
    "point": {
      "latitude": 53.6863288705,
      "longitude": 28.9708282607
    }
  },
  "8e2ce521-c30a-4f87-b313-51db48ed63f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 214",
      "id": "8e2ce521-c30a-4f87-b313-51db48ed63f4",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e2ce521-c30a-4f87-b313-51db48ed63f4",
    "image": "perev_right",
    "point": {
      "latitude": 52.8302589404,
      "longitude": 29.4260426524
    }
  },
  "8e54e555-db76-40fc-9f48-3830101cffba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 16",
      "id": "8e54e555-db76-40fc-9f48-3830101cffba",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e54e555-db76-40fc-9f48-3830101cffba",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1426393349,
      "longitude": 29.2656292363
    }
  },
  "8efec697-f25f-4eb3-91a5-1a1a82c208d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 125",
      "id": "8efec697-f25f-4eb3-91a5-1a1a82c208d3",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8efec697-f25f-4eb3-91a5-1a1a82c208d3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8911315684,
      "longitude": 29.3325442023
    }
  },
  "8f296b0e-41aa-45d0-8567-212539047a6d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 209",
      "id": "8f296b0e-41aa-45d0-8567-212539047a6d",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f296b0e-41aa-45d0-8567-212539047a6d",
    "image": "perev_left",
    "point": {
      "latitude": 52.8295735982,
      "longitude": 29.4476812199
    }
  },
  "8ff9141c-155a-4c0a-aac0-03399bc1bd82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "8ff9141c-155a-4c0a-aac0-03399bc1bd82",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ff9141c-155a-4c0a-aac0-03399bc1bd82",
    "image": "perev_right",
    "point": {
      "latitude": 52.5588184127,
      "longitude": 30.1099820379
    }
  },
  "90198547-238d-454e-a11d-485b8408e973": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 228",
      "id": "90198547-238d-454e-a11d-485b8408e973",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90198547-238d-454e-a11d-485b8408e973",
    "image": "perev_left",
    "point": {
      "latitude": 52.8538563501,
      "longitude": 29.3780540228
    }
  },
  "90840235-4717-471d-b4df-3bc50150fe6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 328",
      "id": "90840235-4717-471d-b4df-3bc50150fe6c",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90840235-4717-471d-b4df-3bc50150fe6c",
    "image": "perev_right",
    "point": {
      "latitude": 53.2105056509,
      "longitude": 29.2249652219
    }
  },
  "90a5a88e-ea26-4460-9583-fc85388226c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 274",
      "id": "90a5a88e-ea26-4460-9583-fc85388226c2",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90a5a88e-ea26-4460-9583-fc85388226c2",
    "image": "perev_right",
    "point": {
      "latitude": 52.9851548087,
      "longitude": 29.2774249899
    }
  },
  "90c789c8-b226-46dd-890d-6822dd00c16b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 555",
      "id": "90c789c8-b226-46dd-890d-6822dd00c16b",
      "kilometrage": 296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90c789c8-b226-46dd-890d-6822dd00c16b",
    "image": "perev_left",
    "point": {
      "latitude": 53.7780756695,
      "longitude": 28.951688593
    }
  },
  "90e565e7-a197-4e16-a351-a1a03cb180ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 434",
      "id": "90e565e7-a197-4e16-a351-a1a03cb180ac",
      "kilometrage": 237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90e565e7-a197-4e16-a351-a1a03cb180ac",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.4820131358,
      "longitude": 28.9427225183
    }
  },
  "9114e163-76d5-4399-b3a6-b3384b72a6af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 204",
      "id": "9114e163-76d5-4399-b3a6-b3384b72a6af",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9114e163-76d5-4399-b3a6-b3384b72a6af",
    "image": "perev_left",
    "point": {
      "latitude": 52.81517747,
      "longitude": 29.440077723
    }
  },
  "914678a2-6fb5-4249-a452-6ea957317182": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 509",
      "id": "914678a2-6fb5-4249-a452-6ea957317182",
      "kilometrage": 274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "914678a2-6fb5-4249-a452-6ea957317182",
    "image": "perev_left",
    "point": {
      "latitude": 53.6836009526,
      "longitude": 28.9564760642
    }
  },
  "914b4f3b-176a-4280-8872-d3505363a89d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 100",
      "id": "914b4f3b-176a-4280-8872-d3505363a89d",
      "kilometrage": 49,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "914b4f3b-176a-4280-8872-d3505363a89d",
    "image": "perev_right",
    "point": {
      "latitude": 52.6211808804,
      "longitude": 29.8573197335
    }
  },
  "91667d20-45d4-4623-8e15-200a7111418a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 74",
      "id": "91667d20-45d4-4623-8e15-200a7111418a",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91667d20-45d4-4623-8e15-200a7111418a",
    "image": "perev_left",
    "point": {
      "latitude": 52.5946368412,
      "longitude": 29.9943761421
    }
  },
  "91a757ef-e75e-4777-97db-bdc5a79da18d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "91a757ef-e75e-4777-97db-bdc5a79da18d",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91a757ef-e75e-4777-97db-bdc5a79da18d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6266738685,
      "longitude": 29.8175746578
    }
  },
  "92ada49b-984d-421a-ac7f-b9a6b898e67c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 62",
      "id": "92ada49b-984d-421a-ac7f-b9a6b898e67c",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92ada49b-984d-421a-ac7f-b9a6b898e67c",
    "image": "perev_left",
    "point": {
      "latitude": 52.5691105381,
      "longitude": 30.0173163043
    }
  },
  "93d86d24-1375-43ff-a273-575081300d8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "93d86d24-1375-43ff-a273-575081300d8f",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "93d86d24-1375-43ff-a273-575081300d8f",
    "image": "axis_romb",
    "point": {
      "latitude": 52.6816517543,
      "longitude": 29.6576553758
    }
  },
  "94085595-72d0-453c-9fff-c3f767432aab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 361",
      "id": "94085595-72d0-453c-9fff-c3f767432aab",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94085595-72d0-453c-9fff-c3f767432aab",
    "image": "perev_left",
    "point": {
      "latitude": 53.2613907869,
      "longitude": 29.0989355079
    }
  },
  "9427fe86-5aff-4a54-a046-e973788cc7b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 242",
      "id": "9427fe86-5aff-4a54-a046-e973788cc7b0",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9427fe86-5aff-4a54-a046-e973788cc7b0",
    "image": "perev_left",
    "point": {
      "latitude": 52.9081513026,
      "longitude": 29.3403062692
    }
  },
  "944ba8eb-b0e5-4a49-bb3c-f4048b92e704": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 448",
      "id": "944ba8eb-b0e5-4a49-bb3c-f4048b92e704",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "944ba8eb-b0e5-4a49-bb3c-f4048b92e704",
    "image": "perev_right",
    "point": {
      "latitude": 53.5014301091,
      "longitude": 28.965348831
    }
  },
  "9464f191-40ef-4616-bced-daef2945981a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 421",
      "id": "9464f191-40ef-4616-bced-daef2945981a",
      "kilometrage": 233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9464f191-40ef-4616-bced-daef2945981a",
    "image": "perev_left",
    "point": {
      "latitude": 53.4618317118,
      "longitude": 28.9609197846
    }
  },
  "9496675d-c394-497a-a112-03404d46dcda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 151",
      "id": "9496675d-c394-497a-a112-03404d46dcda",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9496675d-c394-497a-a112-03404d46dcda",
    "image": "perev_right",
    "point": {
      "latitude": 52.6863259325,
      "longitude": 29.6399975665
    }
  },
  "94f51748-fb0f-4d18-86d7-c888bd8d1e68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 491",
      "id": "94f51748-fb0f-4d18-86d7-c888bd8d1e68",
      "kilometrage": 264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94f51748-fb0f-4d18-86d7-c888bd8d1e68",
    "image": "perev_left",
    "point": {
      "latitude": 53.6193693413,
      "longitude": 28.9337883172
    }
  },
  "9515f489-1cc0-4dc4-8001-100fe35af3f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "9515f489-1cc0-4dc4-8001-100fe35af3f1",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9515f489-1cc0-4dc4-8001-100fe35af3f1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8039587948,
      "longitude": 29.4676675889
    }
  },
  "9521bf6e-900f-4e2e-aba4-857102a4da87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 409",
      "id": "9521bf6e-900f-4e2e-aba4-857102a4da87",
      "kilometrage": 228,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9521bf6e-900f-4e2e-aba4-857102a4da87",
    "image": "perev_right",
    "point": {
      "latitude": 53.4267411982,
      "longitude": 28.9924693156
    }
  },
  "957462c1-8c6d-4955-8689-71d88f833045": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 116",
      "id": "957462c1-8c6d-4955-8689-71d88f833045",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "957462c1-8c6d-4955-8689-71d88f833045",
    "image": "perev_right",
    "point": {
      "latitude": 52.6460005521,
      "longitude": 29.8040892115
    }
  },
  "95b2e48d-04b9-4b92-a161-aefe21918a96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 547",
      "id": "95b2e48d-04b9-4b92-a161-aefe21918a96",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95b2e48d-04b9-4b92-a161-aefe21918a96",
    "image": "perev_right",
    "point": {
      "latitude": 53.7587301263,
      "longitude": 28.9311922382
    }
  },
  "9619deaa-c8a9-4377-bae7-3d960e34c04a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 41",
      "id": "9619deaa-c8a9-4377-bae7-3d960e34c04a",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9619deaa-c8a9-4377-bae7-3d960e34c04a",
    "image": "perev_right",
    "point": {
      "latitude": 52.5502653818,
      "longitude": 30.0861394435
    }
  },
  "963c4ad1-04a3-40c7-ab52-824de8209906": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 234",
      "id": "963c4ad1-04a3-40c7-ab52-824de8209906",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "963c4ad1-04a3-40c7-ab52-824de8209906",
    "image": "perev_left",
    "point": {
      "latitude": 52.8662636917,
      "longitude": 29.3541521689
    }
  },
  "9642059a-70fd-48b3-8b1a-734a6fe47075": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 17",
      "id": "9642059a-70fd-48b3-8b1a-734a6fe47075",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9642059a-70fd-48b3-8b1a-734a6fe47075",
    "image": "perev_left",
    "point": {
      "latitude": 52.5740870128,
      "longitude": 30.1680229002
    }
  },
  "96440af9-01a4-4ef7-85e4-dedf16c41c19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 47",
      "id": "96440af9-01a4-4ef7-85e4-dedf16c41c19",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96440af9-01a4-4ef7-85e4-dedf16c41c19",
    "image": "perev_left",
    "point": {
      "latitude": 52.5607881928,
      "longitude": 30.058451383
    }
  },
  "965d5723-9d5f-470f-9d46-d552f6e19e84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 539",
      "id": "965d5723-9d5f-470f-9d46-d552f6e19e84",
      "kilometrage": 288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "965d5723-9d5f-470f-9d46-d552f6e19e84",
    "image": "perev_left",
    "point": {
      "latitude": 53.73476862,
      "longitude": 28.9483294623
    }
  },
  "96f91507-03c7-4192-b035-96f20ea14719": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 287",
      "id": "96f91507-03c7-4192-b035-96f20ea14719",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96f91507-03c7-4192-b035-96f20ea14719",
    "image": "perev_left",
    "point": {
      "latitude": 53.0300848154,
      "longitude": 29.2696342918
    }
  },
  "9712969a-33f0-4da5-8c32-1b1ef5815ec4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 42",
      "id": "9712969a-33f0-4da5-8c32-1b1ef5815ec4",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9712969a-33f0-4da5-8c32-1b1ef5815ec4",
    "image": "perev_right",
    "point": {
      "latitude": 52.5505615691,
      "longitude": 30.0791228583
    }
  },
  "973d4eac-f968-45a6-88d2-4d204f164ca1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пост судоходной инспекции  ",
      "id": "973d4eac-f968-45a6-88d2-4d204f164ca1",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "973d4eac-f968-45a6-88d2-4d204f164ca1",
    "image": "shipping_post",
    "point": {
      "latitude": 53.1360694577,
      "longitude": 29.2530629228
    }
  },
  "97e5f280-3183-46d5-b44b-86fe2eb59b53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 438",
      "id": "97e5f280-3183-46d5-b44b-86fe2eb59b53",
      "kilometrage": 239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97e5f280-3183-46d5-b44b-86fe2eb59b53",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.4871782664,
      "longitude": 28.9606864276
    }
  },
  "97efa188-d131-4d51-9858-27060a09683f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 327",
      "id": "97efa188-d131-4d51-9858-27060a09683f",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97efa188-d131-4d51-9858-27060a09683f",
    "image": "perev_right",
    "point": {
      "latitude": 53.2050605607,
      "longitude": 29.2304907335
    }
  },
  "987830b4-2789-4198-8c76-504838acb71a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "987830b4-2789-4198-8c76-504838acb71a",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "987830b4-2789-4198-8c76-504838acb71a",
    "image": "bridge_low",
    "point": {
      "latitude": 53.4101497729,
      "longitude": 29.0090406097
    }
  },
  "994b0036-2d9d-494c-937f-8d5cf1c7defd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 451",
      "id": "994b0036-2d9d-494c-937f-8d5cf1c7defd",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "994b0036-2d9d-494c-937f-8d5cf1c7defd",
    "image": "perev_left",
    "point": {
      "latitude": 53.5131473001,
      "longitude": 28.9642557691
    }
  },
  "9978ca01-6f13-487d-942d-6de71fe945fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 498",
      "id": "9978ca01-6f13-487d-942d-6de71fe945fc",
      "kilometrage": 267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9978ca01-6f13-487d-942d-6de71fe945fc",
    "image": "perev_right",
    "point": {
      "latitude": 53.63881481,
      "longitude": 28.9341659784
    }
  },
  "99bac6cf-dc57-4d60-980a-3517f89d1f12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 543",
      "id": "99bac6cf-dc57-4d60-980a-3517f89d1f12",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99bac6cf-dc57-4d60-980a-3517f89d1f12",
    "image": "perev_right",
    "point": {
      "latitude": 53.7472055968,
      "longitude": 28.9295531399
    }
  },
  "99bbdaf8-4ebf-4d5a-81a5-505a6e3a06c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 445",
      "id": "99bbdaf8-4ebf-4d5a-81a5-505a6e3a06c3",
      "kilometrage": 242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99bbdaf8-4ebf-4d5a-81a5-505a6e3a06c3",
    "image": "perev_left",
    "point": {
      "latitude": 53.495939541,
      "longitude": 28.9690390713
    }
  },
  "9a4f2f1d-a5e5-4d81-8343-84f967bf1f49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 176",
      "id": "9a4f2f1d-a5e5-4d81-8343-84f967bf1f49",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a4f2f1d-a5e5-4d81-8343-84f967bf1f49",
    "image": "perev_right",
    "point": {
      "latitude": 52.7595833466,
      "longitude": 29.542357658
    }
  },
  "9b1e1d6a-0a1e-4e4c-b82f-d1ffa7d81d65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "9b1e1d6a-0a1e-4e4c-b82f-d1ffa7d81d65",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b1e1d6a-0a1e-4e4c-b82f-d1ffa7d81d65",
    "image": "axis_romb",
    "point": {
      "latitude": 53.1419366366,
      "longitude": 29.2661382509
    }
  },
  "9b7840a9-e422-456a-b6b3-2ce64ac12abb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 382",
      "id": "9b7840a9-e422-456a-b6b3-2ce64ac12abb",
      "kilometrage": 211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b7840a9-e422-456a-b6b3-2ce64ac12abb",
    "image": "perev_right",
    "point": {
      "latitude": 53.324348263,
      "longitude": 29.0542103659
    }
  },
  "9ba23b2f-3341-4ca2-b0bb-12f7b4e294ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 576",
      "id": "9ba23b2f-3341-4ca2-b0bb-12f7b4e294ea",
      "kilometrage": 305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ba23b2f-3341-4ca2-b0bb-12f7b4e294ea",
    "image": "perev_right",
    "point": {
      "latitude": 53.8205905403,
      "longitude": 29.0013660482
    }
  },
  "9bbc4f73-5c09-4132-b496-d6b834a91742": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "9bbc4f73-5c09-4132-b496-d6b834a91742",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bbc4f73-5c09-4132-b496-d6b834a91742",
    "image": "perev_left",
    "point": {
      "latitude": 52.7185633802,
      "longitude": 29.6057191732
    }
  },
  "9be6ed94-f6a4-4dd9-8937-5f3741f0f0f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 508",
      "id": "9be6ed94-f6a4-4dd9-8937-5f3741f0f0f8",
      "kilometrage": 273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9be6ed94-f6a4-4dd9-8937-5f3741f0f0f8",
    "image": "perev_right",
    "point": {
      "latitude": 53.6754613213,
      "longitude": 28.951233367
    }
  },
  "9c20db02-44cd-403d-8915-c4cde4708d66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 262",
      "id": "9c20db02-44cd-403d-8915-c4cde4708d66",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c20db02-44cd-403d-8915-c4cde4708d66",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.9571687621,
      "longitude": 29.3582095596
    }
  },
  "9c44c227-ebaa-4a9d-aa50-db4253e8f24f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 191",
      "id": "9c44c227-ebaa-4a9d-aa50-db4253e8f24f",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c44c227-ebaa-4a9d-aa50-db4253e8f24f",
    "image": "perev_left",
    "point": {
      "latitude": 52.8074077888,
      "longitude": 29.4875222012
    }
  },
  "9c470292-8f22-4ebb-a797-5c5cabef526e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 370",
      "id": "9c470292-8f22-4ebb-a797-5c5cabef526e",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c470292-8f22-4ebb-a797-5c5cabef526e",
    "image": "perev_left",
    "point": {
      "latitude": 53.2968916983,
      "longitude": 29.0575507444
    }
  },
  "9cabaef6-453e-422c-9e84-73efbda6ae39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "9cabaef6-453e-422c-9e84-73efbda6ae39",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9cabaef6-453e-422c-9e84-73efbda6ae39",
    "image": "perev_left",
    "point": {
      "latitude": 52.5511129542,
      "longitude": 30.2496666346
    }
  },
  "9cb2928b-f0df-4262-b693-1d6234d7e2cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 358",
      "id": "9cb2928b-f0df-4262-b693-1d6234d7e2cc",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9cb2928b-f0df-4262-b693-1d6234d7e2cc",
    "image": "perev_right",
    "point": {
      "latitude": 53.2504141899,
      "longitude": 29.1141580641
    }
  },
  "9cc046c7-a898-4d3c-a05b-e38f7966751b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 200",
      "id": "9cc046c7-a898-4d3c-a05b-e38f7966751b",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9cc046c7-a898-4d3c-a05b-e38f7966751b",
    "image": "perev_left",
    "point": {
      "latitude": 52.8116544093,
      "longitude": 29.4430691854
    }
  },
  "9cda499e-f4cd-4746-9b3d-4112f4736100": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 390",
      "id": "9cda499e-f4cd-4746-9b3d-4112f4736100",
      "kilometrage": 217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9cda499e-f4cd-4746-9b3d-4112f4736100",
    "image": "perev_right",
    "point": {
      "latitude": 53.3683406024,
      "longitude": 29.0179907748
    }
  },
  "9d1cb35e-a30b-4804-82f2-c5d7633790c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 335",
      "id": "9d1cb35e-a30b-4804-82f2-c5d7633790c5",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d1cb35e-a30b-4804-82f2-c5d7633790c5",
    "image": "perev_left",
    "point": {
      "latitude": 53.2327743802,
      "longitude": 29.2063868506
    }
  },
  "9d3c2c07-1464-44bb-8376-2ddde1d3b796": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 239А",
      "id": "9d3c2c07-1464-44bb-8376-2ddde1d3b796",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d3c2c07-1464-44bb-8376-2ddde1d3b796",
    "image": "perev_left",
    "point": {
      "latitude": 52.8904698523,
      "longitude": 29.337472587
    }
  },
  "9dab1d8b-d494-4b92-908a-9f2ee6db605b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 20",
      "id": "9dab1d8b-d494-4b92-908a-9f2ee6db605b",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dab1d8b-d494-4b92-908a-9f2ee6db605b",
    "image": "perev_right",
    "point": {
      "latitude": 52.5610966773,
      "longitude": 30.147167042
    }
  },
  "9dcb2ca2-def1-4354-8753-edff6e50689a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 278",
      "id": "9dcb2ca2-def1-4354-8753-edff6e50689a",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dcb2ca2-def1-4354-8753-edff6e50689a",
    "image": "perev_left",
    "point": {
      "latitude": 52.9955939395,
      "longitude": 29.2797659324
    }
  },
  "9e058633-8797-41fb-86b1-6b9455e043e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "9e058633-8797-41fb-86b1-6b9455e043e7",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e058633-8797-41fb-86b1-6b9455e043e7",
    "image": "name_of",
    "point": {
      "latitude": 53.1171708964,
      "longitude": 29.25318815
    }
  },
  "9e951fd2-76e5-4867-b2e8-27f7b7e82a19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 293",
      "id": "9e951fd2-76e5-4867-b2e8-27f7b7e82a19",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e951fd2-76e5-4867-b2e8-27f7b7e82a19",
    "image": "perev_right",
    "point": {
      "latitude": 53.047623222,
      "longitude": 29.2652259798
    }
  },
  "9ebf87d2-e8d4-4128-9458-c35ff4678114": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9ebf87d2-e8d4-4128-9458-c35ff4678114",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ebf87d2-e8d4-4128-9458-c35ff4678114",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.6297201356,
      "longitude": 29.8264857229
    }
  },
  "9edc3e01-0773-4840-a632-6c48c5b1a190": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "9edc3e01-0773-4840-a632-6c48c5b1a190",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9edc3e01-0773-4840-a632-6c48c5b1a190",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8295172146,
      "longitude": 29.0021453741
    }
  },
  "9f3c1e01-9077-41b4-9d5b-984f83aa770c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 170",
      "id": "9f3c1e01-9077-41b4-9d5b-984f83aa770c",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f3c1e01-9077-41b4-9d5b-984f83aa770c",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1305841801,
      "longitude": 29.264155386
    }
  },
  "9f60d070-4b68-4696-a2a7-c70dd71f82e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 143",
      "id": "9f60d070-4b68-4696-a2a7-c70dd71f82e2",
      "kilometrage": 72,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f60d070-4b68-4696-a2a7-c70dd71f82e2",
    "image": "perev_right",
    "point": {
      "latitude": 52.6731839644,
      "longitude": 29.6776706644
    }
  },
  "9fb91337-e54c-484d-a6dc-5de179cedf22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "9fb91337-e54c-484d-a6dc-5de179cedf22",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fb91337-e54c-484d-a6dc-5de179cedf22",
    "image": "name_of",
    "point": {
      "latitude": 52.8025377989,
      "longitude": 29.4342373177
    }
  },
  "9fd92553-c41a-4bf2-b305-4a851c7fca65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 479",
      "id": "9fd92553-c41a-4bf2-b305-4a851c7fca65",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fd92553-c41a-4bf2-b305-4a851c7fca65",
    "image": "perev_left",
    "point": {
      "latitude": 53.5764826723,
      "longitude": 28.9500684067
    }
  },
  "a0030723-0b82-4b7c-921c-c7bbb18fff0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 97",
      "id": "a0030723-0b82-4b7c-921c-c7bbb18fff0d",
      "kilometrage": 48,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0030723-0b82-4b7c-921c-c7bbb18fff0d",
    "image": "perev_left",
    "point": {
      "latitude": 52.6261065202,
      "longitude": 29.8751057819
    }
  },
  "a020f8ee-b836-4ce6-9252-b1a55a071b41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 243",
      "id": "a020f8ee-b836-4ce6-9252-b1a55a071b41",
      "kilometrage": 127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a020f8ee-b836-4ce6-9252-b1a55a071b41",
    "image": "perev_left",
    "point": {
      "latitude": 52.9128537071,
      "longitude": 29.3415440206
    }
  },
  "a02683c2-d545-41c4-8d35-9dda6eb2e5e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 551",
      "id": "a02683c2-d545-41c4-8d35-9dda6eb2e5e0",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a02683c2-d545-41c4-8d35-9dda6eb2e5e0",
    "image": "perev_left",
    "point": {
      "latitude": 53.7716396579,
      "longitude": 28.9516249646
    }
  },
  "a028b641-0021-4331-80b7-e97046a625d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 315",
      "id": "a028b641-0021-4331-80b7-e97046a625d9",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a028b641-0021-4331-80b7-e97046a625d9",
    "image": "perev_left",
    "point": {
      "latitude": 53.1595316709,
      "longitude": 29.2490444626
    }
  },
  "a0b6c153-6d33-49da-8601-05ca2eeddb54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 121",
      "id": "a0b6c153-6d33-49da-8601-05ca2eeddb54",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0b6c153-6d33-49da-8601-05ca2eeddb54",
    "image": "perev_right",
    "point": {
      "latitude": 52.6437051656,
      "longitude": 29.7891936496
    }
  },
  "a1a605c1-cc35-4afa-8b3a-6db559828cac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 271",
      "id": "a1a605c1-cc35-4afa-8b3a-6db559828cac",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1a605c1-cc35-4afa-8b3a-6db559828cac",
    "image": "perev_right",
    "point": {
      "latitude": 52.9784273009,
      "longitude": 29.2897750745
    }
  },
  "a27acca9-4154-42cd-8a57-782ce6523283": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 532",
      "id": "a27acca9-4154-42cd-8a57-782ce6523283",
      "kilometrage": 284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a27acca9-4154-42cd-8a57-782ce6523283",
    "image": "perev_right",
    "point": {
      "latitude": 53.7115384244,
      "longitude": 28.9549176495
    }
  },
  "a2ae63f5-e529-4f9f-be89-a646aae4c857": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 380",
      "id": "a2ae63f5-e529-4f9f-be89-a646aae4c857",
      "kilometrage": 210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2ae63f5-e529-4f9f-be89-a646aae4c857",
    "image": "perev_left",
    "point": {
      "latitude": 53.3158807599,
      "longitude": 29.0608871063
    }
  },
  "a2c5f64a-2539-4e3a-b096-b964d1f37c8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 440",
      "id": "a2c5f64a-2539-4e3a-b096-b964d1f37c8f",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2c5f64a-2539-4e3a-b096-b964d1f37c8f",
    "image": "perev_right",
    "point": {
      "latitude": 53.4908317565,
      "longitude": 28.9539278496
    }
  },
  "a2c6a722-fe35-4b23-8d45-1ed8fe975cb6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 463",
      "id": "a2c6a722-fe35-4b23-8d45-1ed8fe975cb6",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2c6a722-fe35-4b23-8d45-1ed8fe975cb6",
    "image": "perev_right",
    "point": {
      "latitude": 53.5419993677,
      "longitude": 28.9560802572
    }
  },
  "a38445e9-7d75-4a20-8038-496585180a6a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 152",
      "id": "a38445e9-7d75-4a20-8038-496585180a6a",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a38445e9-7d75-4a20-8038-496585180a6a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6955184151,
      "longitude": 29.6373407452
    }
  },
  "a3d7e9c7-5320-4338-bb48-117c89aa5c3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 194",
      "id": "a3d7e9c7-5320-4338-bb48-117c89aa5c3d",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3d7e9c7-5320-4338-bb48-117c89aa5c3d",
    "image": "perev_right",
    "point": {
      "latitude": 52.7974091631,
      "longitude": 29.4696918852
    }
  },
  "a3ede2e7-6d55-407a-a55f-6c89c1f24716": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 193",
      "id": "a3ede2e7-6d55-407a-a55f-6c89c1f24716",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3ede2e7-6d55-407a-a55f-6c89c1f24716",
    "image": "perev_right",
    "point": {
      "latitude": 52.7984697898,
      "longitude": 29.4786949187
    }
  },
  "a3fd203b-0fc5-4eb5-8014-3d7714f0325a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 353",
      "id": "a3fd203b-0fc5-4eb5-8014-3d7714f0325a",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3fd203b-0fc5-4eb5-8014-3d7714f0325a",
    "image": "perev_left",
    "point": {
      "latitude": 53.2549121691,
      "longitude": 29.1319234901
    }
  },
  "a403bca4-2f22-4963-bf5f-b14df941370c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 386",
      "id": "a403bca4-2f22-4963-bf5f-b14df941370c",
      "kilometrage": 215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a403bca4-2f22-4963-bf5f-b14df941370c",
    "image": "perev_left",
    "point": {
      "latitude": 53.3494603717,
      "longitude": 29.0243027222
    }
  },
  "a40d0f5e-6aed-4d5d-add1-0ec116f1582d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 523",
      "id": "a40d0f5e-6aed-4d5d-add1-0ec116f1582d",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a40d0f5e-6aed-4d5d-add1-0ec116f1582d",
    "image": "perev_right",
    "point": {
      "latitude": 53.7050006217,
      "longitude": 28.9668925759
    }
  },
  "a47663a0-84db-4c9f-b46b-eb399fcb8e5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 260",
      "id": "a47663a0-84db-4c9f-b46b-eb399fcb8e5f",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a47663a0-84db-4c9f-b46b-eb399fcb8e5f",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5934650922,
      "longitude": 28.9356178897
    }
  },
  "a5244f4f-0a15-4e82-9d18-ace0b7f36392": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 163",
      "id": "a5244f4f-0a15-4e82-9d18-ace0b7f36392",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5244f4f-0a15-4e82-9d18-ace0b7f36392",
    "image": "perev_right",
    "point": {
      "latitude": 52.7256259256,
      "longitude": 29.5977536502
    }
  },
  "a55e8d99-221f-413d-a545-f3fa8645db95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 279",
      "id": "a55e8d99-221f-413d-a545-f3fa8645db95",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a55e8d99-221f-413d-a545-f3fa8645db95",
    "image": "perev_left",
    "point": {
      "latitude": 53.0007376638,
      "longitude": 29.2805643469
    }
  },
  "a5670638-7ff0-4323-8c6e-c6b5ffd1f940": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 174",
      "id": "a5670638-7ff0-4323-8c6e-c6b5ffd1f940",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5670638-7ff0-4323-8c6e-c6b5ffd1f940",
    "image": "perev_left",
    "point": {
      "latitude": 52.7463634562,
      "longitude": 29.5490305618
    }
  },
  "a5a7d1d4-f629-4153-8743-ea272c29373b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 541",
      "id": "a5a7d1d4-f629-4153-8743-ea272c29373b",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5a7d1d4-f629-4153-8743-ea272c29373b",
    "image": "perev_right",
    "point": {
      "latitude": 53.74020667,
      "longitude": 28.9370067795
    }
  },
  "a5f7176b-3f8c-4f9d-848d-bb400b09433e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 244",
      "id": "a5f7176b-3f8c-4f9d-848d-bb400b09433e",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5f7176b-3f8c-4f9d-848d-bb400b09433e",
    "image": "perev_right",
    "point": {
      "latitude": 52.9170730869,
      "longitude": 29.3383116058
    }
  },
  "a637e083-4ab0-4398-afdd-8272ba97c5bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "a637e083-4ab0-4398-afdd-8272ba97c5bc",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a637e083-4ab0-4398-afdd-8272ba97c5bc",
    "image": "perev_left",
    "point": {
      "latitude": 52.5815699878,
      "longitude": 30.0180726896
    }
  },
  "a640afa4-d127-4eda-a29e-c12f795a6135": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 378",
      "id": "a640afa4-d127-4eda-a29e-c12f795a6135",
      "kilometrage": 209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a640afa4-d127-4eda-a29e-c12f795a6135",
    "image": "perev_right",
    "point": {
      "latitude": 53.3123713571,
      "longitude": 29.0607463149
    }
  },
  "a659083d-418b-4361-916d-23dcef9132bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 229",
      "id": "a659083d-418b-4361-916d-23dcef9132bb",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a659083d-418b-4361-916d-23dcef9132bb",
    "image": "perev_right",
    "point": {
      "latitude": 52.8543911545,
      "longitude": 29.369681098
    }
  },
  "a67b6302-b10c-435c-9a43-b168fd951602": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 268",
      "id": "a67b6302-b10c-435c-9a43-b168fd951602",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a67b6302-b10c-435c-9a43-b168fd951602",
    "image": "perev_left",
    "point": {
      "latitude": 52.9797183724,
      "longitude": 29.3279312718
    }
  },
  "a69eeb8c-a76c-40bb-8274-7695a2f8dda9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 106",
      "id": "a69eeb8c-a76c-40bb-8274-7695a2f8dda9",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a69eeb8c-a76c-40bb-8274-7695a2f8dda9",
    "image": "perev_right",
    "point": {
      "latitude": 52.6260604558,
      "longitude": 29.8147515788
    }
  },
  "a80dfbed-e119-469c-b249-5dba06282139": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 481",
      "id": "a80dfbed-e119-469c-b249-5dba06282139",
      "kilometrage": 258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a80dfbed-e119-469c-b249-5dba06282139",
    "image": "perev_right",
    "point": {
      "latitude": 53.5811247318,
      "longitude": 28.9444537999
    }
  },
  "a962302c-2554-43c9-a368-b47661deb607": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 105",
      "id": "a962302c-2554-43c9-a368-b47661deb607",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a962302c-2554-43c9-a368-b47661deb607",
    "image": "perev_left",
    "point": {
      "latitude": 52.6290298752,
      "longitude": 29.8214082342
    }
  },
  "a9947ad3-6f89-4735-9420-51db8432bdc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 281",
      "id": "a9947ad3-6f89-4735-9420-51db8432bdc4",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9947ad3-6f89-4735-9420-51db8432bdc4",
    "image": "perev_right",
    "point": {
      "latitude": 53.0049944538,
      "longitude": 29.2740806048
    }
  },
  "a9d30e32-bff7-420b-8ddc-9a9a302edbd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 245",
      "id": "a9d30e32-bff7-420b-8ddc-9a9a302edbd5",
      "kilometrage": 128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9d30e32-bff7-420b-8ddc-9a9a302edbd5",
    "image": "perev_left",
    "point": {
      "latitude": 52.920770547,
      "longitude": 29.3429675658
    }
  },
  "a9f1d315-7a63-48cc-abdb-5c935e60045f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 275",
      "id": "a9f1d315-7a63-48cc-abdb-5c935e60045f",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9f1d315-7a63-48cc-abdb-5c935e60045f",
    "image": "perev_left",
    "point": {
      "latitude": 52.9892338226,
      "longitude": 29.278154781
    }
  },
  "aa7f682c-643b-492c-85b0-5e07b8d77788": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 310",
      "id": "aa7f682c-643b-492c-85b0-5e07b8d77788",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa7f682c-643b-492c-85b0-5e07b8d77788",
    "image": "perev_left",
    "point": {
      "latitude": 53.1398034477,
      "longitude": 29.2671852108
    }
  },
  "aaf16ef4-8ed6-4a44-90e1-d0b85b219d4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "aaf16ef4-8ed6-4a44-90e1-d0b85b219d4d",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aaf16ef4-8ed6-4a44-90e1-d0b85b219d4d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.2065174642,
      "longitude": 29.2283589306
    }
  },
  "aaf81697-1b36-4d56-ac0b-67cb78ef8051": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "aaf81697-1b36-4d56-ac0b-67cb78ef8051",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aaf81697-1b36-4d56-ac0b-67cb78ef8051",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.148776125,
      "longitude": 29.2538967504
    }
  },
  "ab3ff478-4667-465d-bfa3-e6314ab9ab74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ab3ff478-4667-465d-bfa3-e6314ab9ab74",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab3ff478-4667-465d-bfa3-e6314ab9ab74",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2355050823,
      "longitude": 29.1837140339
    }
  },
  "ab9cb918-1254-462a-8db0-0243c74a7a4d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 473",
      "id": "ab9cb918-1254-462a-8db0-0243c74a7a4d",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab9cb918-1254-462a-8db0-0243c74a7a4d",
    "image": "perev_left",
    "point": {
      "latitude": 53.5615823238,
      "longitude": 28.9655328849
    }
  },
  "aba0d3be-03a9-44e7-9f63-db7129ebe0d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "aba0d3be-03a9-44e7-9f63-db7129ebe0d7",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aba0d3be-03a9-44e7-9f63-db7129ebe0d7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6488898283,
      "longitude": 29.7259757987
    }
  },
  "ac157a66-6519-4e58-b0d3-af325e7e4ab8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 65",
      "id": "ac157a66-6519-4e58-b0d3-af325e7e4ab8",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac157a66-6519-4e58-b0d3-af325e7e4ab8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6456582873,
      "longitude": 29.7412490177
    }
  },
  "ac797e24-c10b-488f-a342-1efbc2992858": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 55",
      "id": "ac797e24-c10b-488f-a342-1efbc2992858",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac797e24-c10b-488f-a342-1efbc2992858",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6325305829,
      "longitude": 29.7975167918
    }
  },
  "aca9eb11-ddc1-42d2-9d5b-1b4d7bb17ce7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "aca9eb11-ddc1-42d2-9d5b-1b4d7bb17ce7",
      "kilometrage": 219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aca9eb11-ddc1-42d2-9d5b-1b4d7bb17ce7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3778839336,
      "longitude": 29.0307531555
    }
  },
  "acd09531-29d7-42e9-a107-ad6c1f5f0049": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 63",
      "id": "acd09531-29d7-42e9-a107-ad6c1f5f0049",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acd09531-29d7-42e9-a107-ad6c1f5f0049",
    "image": "perev_right",
    "point": {
      "latitude": 52.5729594596,
      "longitude": 30.0155085904
    }
  },
  "ad00cb76-5707-401d-a3d4-5ae1dc1f4345": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 221",
      "id": "ad00cb76-5707-401d-a3d4-5ae1dc1f4345",
      "kilometrage": 116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad00cb76-5707-401d-a3d4-5ae1dc1f4345",
    "image": "perev_right",
    "point": {
      "latitude": 52.8321739694,
      "longitude": 29.401633086
    }
  },
  "ad318b02-9bde-4668-9360-ef5a64699bba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 70",
      "id": "ad318b02-9bde-4668-9360-ef5a64699bba",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad318b02-9bde-4668-9360-ef5a64699bba",
    "image": "kilometrage",
    "point": {
      "latitude": 52.669499732,
      "longitude": 29.6996779088
    }
  },
  "ad42d9d3-da5d-438f-9427-8ec6dd39b2da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 337",
      "id": "ad42d9d3-da5d-438f-9427-8ec6dd39b2da",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad42d9d3-da5d-438f-9427-8ec6dd39b2da",
    "image": "perev_left",
    "point": {
      "latitude": 53.2307281719,
      "longitude": 29.2018298162
    }
  },
  "addbe1a4-b0a9-4247-91d7-7f3bd7ec8537": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 258",
      "id": "addbe1a4-b0a9-4247-91d7-7f3bd7ec8537",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "addbe1a4-b0a9-4247-91d7-7f3bd7ec8537",
    "image": "perev_left",
    "point": {
      "latitude": 52.97440758,
      "longitude": 29.373587089
    }
  },
  "ae3adff7-bc1e-4f95-97b0-61c417b10627": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "ae3adff7-bc1e-4f95-97b0-61c417b10627",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae3adff7-bc1e-4f95-97b0-61c417b10627",
    "image": "waves_forbidden",
    "point": {
      "latitude": 53.1303798807,
      "longitude": 29.2591393154
    }
  },
  "aee8a4d1-3e44-4c38-a25c-02bdb34c9ab2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 202",
      "id": "aee8a4d1-3e44-4c38-a25c-02bdb34c9ab2",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aee8a4d1-3e44-4c38-a25c-02bdb34c9ab2",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.8032752027,
      "longitude": 29.4309459536
    }
  },
  "af06c893-c961-4f50-a7cc-fbb7cc8b50bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "af06c893-c961-4f50-a7cc-fbb7cc8b50bb",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af06c893-c961-4f50-a7cc-fbb7cc8b50bb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6472606885,
      "longitude": 29.7233914069
    }
  },
  "af1ce5b4-bc18-4160-9064-efb1d5630dec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 67",
      "id": "af1ce5b4-bc18-4160-9064-efb1d5630dec",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af1ce5b4-bc18-4160-9064-efb1d5630dec",
    "image": "perev_right",
    "point": {
      "latitude": 52.5804382084,
      "longitude": 30.012975917
    }
  },
  "af48c98d-0946-4267-9de1-f63572f15d47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 374",
      "id": "af48c98d-0946-4267-9de1-f63572f15d47",
      "kilometrage": 205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af48c98d-0946-4267-9de1-f63572f15d47",
    "image": "perev_left",
    "point": {
      "latitude": 53.3031562995,
      "longitude": 29.0619090939
    }
  },
  "af92f6da-8846-4fd2-b3e8-84b733b0de48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 161",
      "id": "af92f6da-8846-4fd2-b3e8-84b733b0de48",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af92f6da-8846-4fd2-b3e8-84b733b0de48",
    "image": "perev_left",
    "point": {
      "latitude": 52.7074272329,
      "longitude": 29.6130408295
    }
  },
  "afb4af3b-f592-49ca-845f-315f286ad5d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 275",
      "id": "afb4af3b-f592-49ca-845f-315f286ad5d3",
      "kilometrage": 275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afb4af3b-f592-49ca-845f-315f286ad5d3",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6902385449,
      "longitude": 28.9567475952
    }
  },
  "b00ea0d6-f6b0-4b94-a8de-7a6235b233c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 160",
      "id": "b00ea0d6-f6b0-4b94-a8de-7a6235b233c8",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b00ea0d6-f6b0-4b94-a8de-7a6235b233c8",
    "image": "perev_left",
    "point": {
      "latitude": 52.701088556,
      "longitude": 29.6106070037
    }
  },
  "b01b702f-1a63-42c2-a48f-880f931173d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b01b702f-1a63-42c2-a48f-880f931173d3",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b01b702f-1a63-42c2-a48f-880f931173d3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1411805258,
      "longitude": 29.2646352159
    }
  },
  "b1926c03-2e2d-4057-9ec1-0defb26078e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  536",
      "id": "b1926c03-2e2d-4057-9ec1-0defb26078e3",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1926c03-2e2d-4057-9ec1-0defb26078e3",
    "image": "perev_left",
    "point": {
      "latitude": 53.7248457196,
      "longitude": 28.9568692664
    }
  },
  "b230b5a6-3a78-423a-94e2-3cef20788da8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "b230b5a6-3a78-423a-94e2-3cef20788da8",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b230b5a6-3a78-423a-94e2-3cef20788da8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5717044947,
      "longitude": 30.2005621957
    }
  },
  "b267d822-4cc1-4fb5-92bb-2379d8e81d70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 73",
      "id": "b267d822-4cc1-4fb5-92bb-2379d8e81d70",
      "kilometrage": 34,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b267d822-4cc1-4fb5-92bb-2379d8e81d70",
    "image": "perev_right",
    "point": {
      "latitude": 52.5878643228,
      "longitude": 29.994600909
    }
  },
  "b2bcd596-2ad9-405e-9067-7ecc03b10fda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 305",
      "id": "b2bcd596-2ad9-405e-9067-7ecc03b10fda",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2bcd596-2ad9-405e-9067-7ecc03b10fda",
    "image": "perev_right",
    "point": {
      "latitude": 53.1179838609,
      "longitude": 29.2547944676
    }
  },
  "b3ae32d6-86fd-4721-aa3e-91cae4a5a9f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "b3ae32d6-86fd-4721-aa3e-91cae4a5a9f2",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3ae32d6-86fd-4721-aa3e-91cae4a5a9f2",
    "image": "name_of",
    "point": {
      "latitude": 53.2108970504,
      "longitude": 29.228130747
    }
  },
  "b420e084-ccff-433c-bbc1-3e4d9402c58c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "b420e084-ccff-433c-bbc1-3e4d9402c58c",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b420e084-ccff-433c-bbc1-3e4d9402c58c",
    "image": "perev_left",
    "point": {
      "latitude": 52.5618768862,
      "longitude": 30.0959823253
    }
  },
  "b43c2ad5-64ad-4c6a-b4a2-430d3313835d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 282",
      "id": "b43c2ad5-64ad-4c6a-b4a2-430d3313835d",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b43c2ad5-64ad-4c6a-b4a2-430d3313835d",
    "image": "perev_left",
    "point": {
      "latitude": 53.0095576867,
      "longitude": 29.2844339182
    }
  },
  "b4694a74-5575-40ae-a2bb-d8b9bc57d656": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "b4694a74-5575-40ae-a2bb-d8b9bc57d656",
      "kilometrage": 48,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4694a74-5575-40ae-a2bb-d8b9bc57d656",
    "image": "perev_right",
    "point": {
      "latitude": 52.6213716006,
      "longitude": 29.8686022878
    }
  },
  "b511edad-94ba-4724-a4c9-baf51b831363": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 383",
      "id": "b511edad-94ba-4724-a4c9-baf51b831363",
      "kilometrage": 213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b511edad-94ba-4724-a4c9-baf51b831363",
    "image": "perev_left",
    "point": {
      "latitude": 53.3395436304,
      "longitude": 29.0404354791
    }
  },
  "b559941c-2264-46ce-9786-60d5c888b7fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 534",
      "id": "b559941c-2264-46ce-9786-60d5c888b7fb",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b559941c-2264-46ce-9786-60d5c888b7fb",
    "image": "perev_left",
    "point": {
      "latitude": 53.7144893943,
      "longitude": 28.9642633518
    }
  },
  "b5b77e83-6f00-443a-babf-ee4d116a55cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 304",
      "id": "b5b77e83-6f00-443a-babf-ee4d116a55cb",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5b77e83-6f00-443a-babf-ee4d116a55cb",
    "image": "perev_right",
    "point": {
      "latitude": 53.1143993819,
      "longitude": 29.2504104844
    }
  },
  "b619ba37-0b69-46d7-9c76-ff1e1fa03cf6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 240",
      "id": "b619ba37-0b69-46d7-9c76-ff1e1fa03cf6",
      "kilometrage": 240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b619ba37-0b69-46d7-9c76-ff1e1fa03cf6",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4905354876,
      "longitude": 28.9592072434
    }
  },
  "b61c0c76-eea1-4819-82d5-092f3f5e158d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "b61c0c76-eea1-4819-82d5-092f3f5e158d",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b61c0c76-eea1-4819-82d5-092f3f5e158d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5598746051,
      "longitude": 30.1112277726
    }
  },
  "b69053b9-c3d9-4851-b70d-e1e9bdb49d53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 148",
      "id": "b69053b9-c3d9-4851-b70d-e1e9bdb49d53",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b69053b9-c3d9-4851-b70d-e1e9bdb49d53",
    "image": "perev_right",
    "point": {
      "latitude": 52.6796449169,
      "longitude": 29.6685102725
    }
  },
  "b69b6aaa-3935-4cf3-b62a-65513c31daa5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 177а",
      "id": "b69b6aaa-3935-4cf3-b62a-65513c31daa5",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b69b6aaa-3935-4cf3-b62a-65513c31daa5",
    "image": "perev_right",
    "point": {
      "latitude": 52.7677883586,
      "longitude": 29.5408758445
    }
  },
  "b6f3142b-5387-4d26-a86a-d9802b2663b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b6f3142b-5387-4d26-a86a-d9802b2663b6",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6f3142b-5387-4d26-a86a-d9802b2663b6",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.6806743788,
      "longitude": 29.6564318368
    }
  },
  "b7649e8c-565a-4253-ab93-c7241158a7bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 514",
      "id": "b7649e8c-565a-4253-ab93-c7241158a7bd",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7649e8c-565a-4253-ab93-c7241158a7bd",
    "image": "perev_left",
    "point": {
      "latitude": 53.6830585059,
      "longitude": 28.9678355708
    }
  },
  "b7e8d677-133f-4f69-88e7-901e4a83bd06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 408",
      "id": "b7e8d677-133f-4f69-88e7-901e4a83bd06",
      "kilometrage": 227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7e8d677-133f-4f69-88e7-901e4a83bd06",
    "image": "perev_left",
    "point": {
      "latitude": 53.4255321081,
      "longitude": 29.0020019182
    }
  },
  "b8159dc2-a56e-4929-8006-63a8281b9215": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 256",
      "id": "b8159dc2-a56e-4929-8006-63a8281b9215",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8159dc2-a56e-4929-8006-63a8281b9215",
    "image": "perev_left",
    "point": {
      "latitude": 52.9632463134,
      "longitude": 29.3816872902
    }
  },
  "b84507c3-3a3b-4052-9016-6e1dde5805ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 289",
      "id": "b84507c3-3a3b-4052-9016-6e1dde5805ac",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b84507c3-3a3b-4052-9016-6e1dde5805ac",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0389051342,
      "longitude": 29.2659538849
    }
  },
  "b84a0bc8-c9c5-4263-9dff-30486301c8a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 276",
      "id": "b84a0bc8-c9c5-4263-9dff-30486301c8a0",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b84a0bc8-c9c5-4263-9dff-30486301c8a0",
    "image": "perev_right",
    "point": {
      "latitude": 52.9904543304,
      "longitude": 29.2682464924
    }
  },
  "b850a0f3-7a56-45fe-a2b3-629b05bd37fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 411",
      "id": "b850a0f3-7a56-45fe-a2b3-629b05bd37fc",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b850a0f3-7a56-45fe-a2b3-629b05bd37fc",
    "image": "perev_left",
    "point": {
      "latitude": 53.4330931825,
      "longitude": 28.9848725364
    }
  },
  "b97fc5ea-bb0f-480e-b77c-9853d0142efb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 180",
      "id": "b97fc5ea-bb0f-480e-b77c-9853d0142efb",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b97fc5ea-bb0f-480e-b77c-9853d0142efb",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1900465845,
      "longitude": 29.242392111
    }
  },
  "b9cf7b7f-5ba0-45fe-bd50-b576a2e1ab1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 333",
      "id": "b9cf7b7f-5ba0-45fe-bd50-b576a2e1ab1e",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9cf7b7f-5ba0-45fe-bd50-b576a2e1ab1e",
    "image": "perev_left",
    "point": {
      "latitude": 53.2308180091,
      "longitude": 29.2269396015
    }
  },
  "ba031eef-7600-48ba-8d4d-3c4daa8d435a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 388",
      "id": "ba031eef-7600-48ba-8d4d-3c4daa8d435a",
      "kilometrage": 216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba031eef-7600-48ba-8d4d-3c4daa8d435a",
    "image": "perev_right",
    "point": {
      "latitude": 53.3615316375,
      "longitude": 29.0208836323
    }
  },
  "ba4c8047-2452-4b7b-8b82-5a213e0f024d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ba4c8047-2452-4b7b-8b82-5a213e0f024d",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba4c8047-2452-4b7b-8b82-5a213e0f024d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1534395855,
      "longitude": 29.2533000898
    }
  },
  "ba57da8b-e355-4f36-8384-d57d2809c3e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 504",
      "id": "ba57da8b-e355-4f36-8384-d57d2809c3e3",
      "kilometrage": 271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba57da8b-e355-4f36-8384-d57d2809c3e3",
    "image": "perev_left",
    "point": {
      "latitude": 53.659926323,
      "longitude": 28.9488864606
    }
  },
  "ba6ac65d-0ce9-461f-b0aa-4f06c0272a50": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 80",
      "id": "ba6ac65d-0ce9-461f-b0aa-4f06c0272a50",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba6ac65d-0ce9-461f-b0aa-4f06c0272a50",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6869481703,
      "longitude": 29.6164680951
    }
  },
  "bb72a7fc-a6be-4369-8a0d-e0e939527dd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 483",
      "id": "bb72a7fc-a6be-4369-8a0d-e0e939527dd0",
      "kilometrage": 260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb72a7fc-a6be-4369-8a0d-e0e939527dd0",
    "image": "perev_right",
    "point": {
      "latitude": 53.595383398,
      "longitude": 28.9315745477
    }
  },
  "bbe0a99e-885c-4583-a751-41f9d2fecd76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 467",
      "id": "bbe0a99e-885c-4583-a751-41f9d2fecd76",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbe0a99e-885c-4583-a751-41f9d2fecd76",
    "image": "perev_right",
    "point": {
      "latitude": 53.5538462167,
      "longitude": 28.9525295442
    }
  },
  "bc359a9e-3afe-41a4-9710-e9f817096fee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 289а",
      "id": "bc359a9e-3afe-41a4-9710-e9f817096fee",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc359a9e-3afe-41a4-9710-e9f817096fee",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0369845412,
      "longitude": 29.2706439772
    }
  },
  "bcbc5e03-b9fd-43fa-865a-449559266c15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 265",
      "id": "bcbc5e03-b9fd-43fa-865a-449559266c15",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcbc5e03-b9fd-43fa-865a-449559266c15",
    "image": "perev_left",
    "point": {
      "latitude": 52.9767460637,
      "longitude": 29.3604020922
    }
  },
  "bcc34a6c-3625-460a-880f-2356f9fdfdae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 290",
      "id": "bcc34a6c-3625-460a-880f-2356f9fdfdae",
      "kilometrage": 290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcc34a6c-3625-460a-880f-2356f9fdfdae",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7488136553,
      "longitude": 28.9337387085
    }
  },
  "bcec087a-b1aa-4a7f-af7a-3130851a5384": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 19",
      "id": "bcec087a-b1aa-4a7f-af7a-3130851a5384",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcec087a-b1aa-4a7f-af7a-3130851a5384",
    "image": "buyo_left",
    "point": {
      "latitude": 53.1521585356,
      "longitude": 29.2530365665
    }
  },
  "bd69bb48-5679-413f-bd20-b28c17448d97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 185",
      "id": "bd69bb48-5679-413f-bd20-b28c17448d97",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd69bb48-5679-413f-bd20-b28c17448d97",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.7889465014,
      "longitude": 29.4880619371
    }
  },
  "bde47915-5793-43f9-90bc-7108a774bd3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "bde47915-5793-43f9-90bc-7108a774bd3d",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bde47915-5793-43f9-90bc-7108a774bd3d",
    "image": "bridge_low",
    "point": {
      "latitude": 52.6814855753,
      "longitude": 29.6587018622
    }
  },
  "be2d9933-66c6-4c4a-85ed-18ca0df99551": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 140",
      "id": "be2d9933-66c6-4c4a-85ed-18ca0df99551",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be2d9933-66c6-4c4a-85ed-18ca0df99551",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9664190679,
      "longitude": 29.3551975776
    }
  },
  "be2eac65-4ba2-4384-91cc-59f0d223aeba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 357",
      "id": "be2eac65-4ba2-4384-91cc-59f0d223aeba",
      "kilometrage": 197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be2eac65-4ba2-4384-91cc-59f0d223aeba",
    "image": "perev_left",
    "point": {
      "latitude": 53.2537199496,
      "longitude": 29.1208233403
    }
  },
  "be3c2ef8-6033-41c2-9cee-737ef9a84119": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 18",
      "id": "be3c2ef8-6033-41c2-9cee-737ef9a84119",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be3c2ef8-6033-41c2-9cee-737ef9a84119",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1469581082,
      "longitude": 29.2573658907
    }
  },
  "be5e0c6b-d382-4536-be35-d41583ec89d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 343",
      "id": "be5e0c6b-d382-4536-be35-d41583ec89d3",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be5e0c6b-d382-4536-be35-d41583ec89d3",
    "image": "perev_right",
    "point": {
      "latitude": 53.2352605863,
      "longitude": 29.1743126913
    }
  },
  "bed689cb-93c9-4c63-9d3e-3b47426dafe3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 37",
      "id": "bed689cb-93c9-4c63-9d3e-3b47426dafe3",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bed689cb-93c9-4c63-9d3e-3b47426dafe3",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.546403271,
      "longitude": 30.099661348
    }
  },
  "bf08671a-c4ce-4492-9d9e-a828edc28fe9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Не создавать волнения  ",
      "id": "bf08671a-c4ce-4492-9d9e-a828edc28fe9",
      "kilometrage": 243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf08671a-c4ce-4492-9d9e-a828edc28fe9",
    "image": "waves_forbidden",
    "point": {
      "latitude": 53.501014229,
      "longitude": 28.9682718687
    }
  },
  "bf7ed1e7-d389-4d80-af2c-6fa650db86f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 119",
      "id": "bf7ed1e7-d389-4d80-af2c-6fa650db86f4",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf7ed1e7-d389-4d80-af2c-6fa650db86f4",
    "image": "perev_right",
    "point": {
      "latitude": 52.6487896316,
      "longitude": 29.8034149985
    }
  },
  "bf949501-544d-444d-bb2b-c8c1b9fda600": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 61",
      "id": "bf949501-544d-444d-bb2b-c8c1b9fda600",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf949501-544d-444d-bb2b-c8c1b9fda600",
    "image": "perev_left",
    "point": {
      "latitude": 52.5675330494,
      "longitude": 30.0135855025
    }
  },
  "bfaae9d0-859c-4351-8b02-33c18f504ddd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 171",
      "id": "bfaae9d0-859c-4351-8b02-33c18f504ddd",
      "kilometrage": 89,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfaae9d0-859c-4351-8b02-33c18f504ddd",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.7403390755,
      "longitude": 29.5540193697
    }
  },
  "c0039957-8ca4-4074-9cef-5882f5f6e7d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 6",
      "id": "c0039957-8ca4-4074-9cef-5882f5f6e7d3",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0039957-8ca4-4074-9cef-5882f5f6e7d3",
    "image": "perev_right",
    "point": {
      "latitude": 52.5587328233,
      "longitude": 30.2116244766
    }
  },
  "c0276180-bb24-43e2-b5ae-770a8ca4ed3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 472",
      "id": "c0276180-bb24-43e2-b5ae-770a8ca4ed3f",
      "kilometrage": 254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0276180-bb24-43e2-b5ae-770a8ca4ed3f",
    "image": "perev_right",
    "point": {
      "latitude": 53.5665024008,
      "longitude": 28.9541961796
    }
  },
  "c03e9c98-fa93-4c07-b93d-68e6360f0077": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 25",
      "id": "c03e9c98-fa93-4c07-b93d-68e6360f0077",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c03e9c98-fa93-4c07-b93d-68e6360f0077",
    "image": "perev_right",
    "point": {
      "latitude": 52.5548306595,
      "longitude": 30.128741327
    }
  },
  "c1089f05-9f96-490f-a295-3b0e200967fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 23",
      "id": "c1089f05-9f96-490f-a295-3b0e200967fd",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1089f05-9f96-490f-a295-3b0e200967fd",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1660176787,
      "longitude": 29.2367226199
    }
  },
  "c1422eb1-bb98-4e7c-b441-63c76cec2135": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "c1422eb1-bb98-4e7c-b441-63c76cec2135",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1422eb1-bb98-4e7c-b441-63c76cec2135",
    "image": "perev_left",
    "point": {
      "latitude": 52.7792805951,
      "longitude": 29.512100755
    }
  },
  "c18d8039-eb8d-4a17-aa4c-8355e328c46a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 213",
      "id": "c18d8039-eb8d-4a17-aa4c-8355e328c46a",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c18d8039-eb8d-4a17-aa4c-8355e328c46a",
    "image": "perev_right",
    "point": {
      "latitude": 52.8306427632,
      "longitude": 29.4302591726
    }
  },
  "c1e8c1dd-2a82-444d-b97f-399a9aece77e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 181",
      "id": "c1e8c1dd-2a82-444d-b97f-399a9aece77e",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1e8c1dd-2a82-444d-b97f-399a9aece77e",
    "image": "perev_right",
    "point": {
      "latitude": 52.7788415885,
      "longitude": 29.5052727324
    }
  },
  "c2b4ddf4-8d3a-4187-bb57-9f3816b7b64d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "c2b4ddf4-8d3a-4187-bb57-9f3816b7b64d",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2b4ddf4-8d3a-4187-bb57-9f3816b7b64d",
    "image": "perev_right",
    "point": {
      "latitude": 52.6147283544,
      "longitude": 29.8841712425
    }
  },
  "c2bbd6c4-0831-4320-8ff1-25cc3eecafb6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 8",
      "id": "c2bbd6c4-0831-4320-8ff1-25cc3eecafb6",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2bbd6c4-0831-4320-8ff1-25cc3eecafb6",
    "image": "perev_right",
    "point": {
      "latitude": 52.5629014632,
      "longitude": 30.2022746286
    }
  },
  "c2eb9615-59fd-43a2-901b-51fbd057ed9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 422",
      "id": "c2eb9615-59fd-43a2-901b-51fbd057ed9e",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2eb9615-59fd-43a2-901b-51fbd057ed9e",
    "image": "perev_right",
    "point": {
      "latitude": 53.4608570438,
      "longitude": 28.9569253222
    }
  },
  "c35a14c8-8d98-4e7c-b898-e4d6af396c36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 466",
      "id": "c35a14c8-8d98-4e7c-b898-e4d6af396c36",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c35a14c8-8d98-4e7c-b898-e4d6af396c36",
    "image": "perev_left",
    "point": {
      "latitude": 53.5517124994,
      "longitude": 28.9579499306
    }
  },
  "c3e87604-9f2b-4b65-99cd-29815e9797d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 432",
      "id": "c3e87604-9f2b-4b65-99cd-29815e9797d7",
      "kilometrage": 236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3e87604-9f2b-4b65-99cd-29815e9797d7",
    "image": "perev_left",
    "point": {
      "latitude": 53.479855153,
      "longitude": 28.955864954
    }
  },
  "c45cdb6a-6978-427b-9135-37fda8cae362": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "c45cdb6a-6978-427b-9135-37fda8cae362",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c45cdb6a-6978-427b-9135-37fda8cae362",
    "image": "buyo_right",
    "point": {
      "latitude": 52.6915934764,
      "longitude": 29.6130229757
    }
  },
  "c4826228-adda-40b5-b289-b8bb64280b8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 231",
      "id": "c4826228-adda-40b5-b289-b8bb64280b8d",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4826228-adda-40b5-b289-b8bb64280b8d",
    "image": "perev_right",
    "point": {
      "latitude": 52.8573577342,
      "longitude": 29.3593256265
    }
  },
  "c51bf31c-a064-4dee-907e-7b8c247c1569": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 295",
      "id": "c51bf31c-a064-4dee-907e-7b8c247c1569",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c51bf31c-a064-4dee-907e-7b8c247c1569",
    "image": "perev_right",
    "point": {
      "latitude": 53.0565118778,
      "longitude": 29.2504572391
    }
  },
  "c5c15eb6-44e4-473c-9818-1cca8daea0e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 179",
      "id": "c5c15eb6-44e4-473c-9818-1cca8daea0e9",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5c15eb6-44e4-473c-9818-1cca8daea0e9",
    "image": "perev_left",
    "point": {
      "latitude": 52.7770325686,
      "longitude": 29.5199483485
    }
  },
  "c60245c2-df7d-4ef4-b6e1-0c05759e6021": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "c60245c2-df7d-4ef4-b6e1-0c05759e6021",
      "kilometrage": 255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c60245c2-df7d-4ef4-b6e1-0c05759e6021",
    "image": "name_of",
    "point": {
      "latitude": 53.5664011375,
      "longitude": 28.9712382899
    }
  },
  "c613448d-41b9-47bd-800f-a19646b451cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c613448d-41b9-47bd-800f-a19646b451cd",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c613448d-41b9-47bd-800f-a19646b451cd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.4100750759,
      "longitude": 29.0078273567
    }
  },
  "c621579e-fd9d-47e8-a6da-d5c854522881": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 336",
      "id": "c621579e-fd9d-47e8-a6da-d5c854522881",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c621579e-fd9d-47e8-a6da-d5c854522881",
    "image": "perev_right",
    "point": {
      "latitude": 53.2296776552,
      "longitude": 29.2051310953
    }
  },
  "c6e058e6-81b5-4ec7-9e8c-8d26048114bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c6e058e6-81b5-4ec7-9e8c-8d26048114bf",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6e058e6-81b5-4ec7-9e8c-8d26048114bf",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.4448998025,
      "longitude": 28.9703048748
    }
  },
  "c6e7de00-bf39-455d-aeb1-71c8ddba2d80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 75",
      "id": "c6e7de00-bf39-455d-aeb1-71c8ddba2d80",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6e7de00-bf39-455d-aeb1-71c8ddba2d80",
    "image": "perev_left",
    "point": {
      "latitude": 52.5993215802,
      "longitude": 29.9870786876
    }
  },
  "c736c8a3-716c-45ae-b6ae-5f9cc4372c86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 542",
      "id": "c736c8a3-716c-45ae-b6ae-5f9cc4372c86",
      "kilometrage": 289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c736c8a3-716c-45ae-b6ae-5f9cc4372c86",
    "image": "perev_left",
    "point": {
      "latitude": 53.7456478002,
      "longitude": 28.9332171655
    }
  },
  "c78d0131-8d16-4ea8-9769-f5b9a8f045f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 112",
      "id": "c78d0131-8d16-4ea8-9769-f5b9a8f045f7",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c78d0131-8d16-4ea8-9769-f5b9a8f045f7",
    "image": "perev_left",
    "point": {
      "latitude": 52.634865982,
      "longitude": 29.8056629439
    }
  },
  "c7b8ede0-8599-427c-b643-5e3c99cfabac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 74А",
      "id": "c7b8ede0-8599-427c-b643-5e3c99cfabac",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7b8ede0-8599-427c-b643-5e3c99cfabac",
    "image": "perev_right",
    "point": {
      "latitude": 52.5963396687,
      "longitude": 29.9880835896
    }
  },
  "c87a05e4-1a39-487a-9ffb-4dfa9a0f5575": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 36",
      "id": "c87a05e4-1a39-487a-9ffb-4dfa9a0f5575",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c87a05e4-1a39-487a-9ffb-4dfa9a0f5575",
    "image": "perev_right",
    "point": {
      "latitude": 52.5511647466,
      "longitude": 30.1040224623
    }
  },
  "c8c6f969-da7e-4758-85d8-5c0fd3b27f7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 354",
      "id": "c8c6f969-da7e-4758-85d8-5c0fd3b27f7e",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8c6f969-da7e-4758-85d8-5c0fd3b27f7e",
    "image": "perev_right",
    "point": {
      "latitude": 53.2505246951,
      "longitude": 29.1341105457
    }
  },
  "c8f227b8-b42f-47fa-8653-4164be61d959": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c8f227b8-b42f-47fa-8653-4164be61d959",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8f227b8-b42f-47fa-8653-4164be61d959",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.6525818412,
      "longitude": 28.9363744857
    }
  },
  "c926b241-5860-4beb-a30f-d102269c11bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 88",
      "id": "c926b241-5860-4beb-a30f-d102269c11bd",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c926b241-5860-4beb-a30f-d102269c11bd",
    "image": "perev_left",
    "point": {
      "latitude": 52.627425607,
      "longitude": 29.9094124483
    }
  },
  "c9373a56-4e46-4ee7-bee7-bd06e81e39dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 465",
      "id": "c9373a56-4e46-4ee7-bee7-bd06e81e39dc",
      "kilometrage": 251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9373a56-4e46-4ee7-bee7-bd06e81e39dc",
    "image": "perev_left",
    "point": {
      "latitude": 53.5472543693,
      "longitude": 28.9572115755
    }
  },
  "c9466f1a-e094-48f4-ac35-0d94866a0390": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 247",
      "id": "c9466f1a-e094-48f4-ac35-0d94866a0390",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9466f1a-e094-48f4-ac35-0d94866a0390",
    "image": "perev_right",
    "point": {
      "latitude": 52.931951626,
      "longitude": 29.3384923266
    }
  },
  "c97436ec-53bc-48f7-a19c-89fcd0dc1e7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 94",
      "id": "c97436ec-53bc-48f7-a19c-89fcd0dc1e7c",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c97436ec-53bc-48f7-a19c-89fcd0dc1e7c",
    "image": "perev_right",
    "point": {
      "latitude": 52.6133233009,
      "longitude": 29.8903553028
    }
  },
  "c99095e3-7b35-4b1c-af7c-6acba44b803b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 314",
      "id": "c99095e3-7b35-4b1c-af7c-6acba44b803b",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c99095e3-7b35-4b1c-af7c-6acba44b803b",
    "image": "perev_left",
    "point": {
      "latitude": 53.1544585481,
      "longitude": 29.2529818057
    }
  },
  "c9eeafdb-dc35-47b3-99b0-206f8dcc53f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 499",
      "id": "c9eeafdb-dc35-47b3-99b0-206f8dcc53f3",
      "kilometrage": 268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9eeafdb-dc35-47b3-99b0-206f8dcc53f3",
    "image": "perev_left",
    "point": {
      "latitude": 53.6396714709,
      "longitude": 28.9427977751
    }
  },
  "caa8e609-2c8f-463e-852d-eeee3990d58d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 35",
      "id": "caa8e609-2c8f-463e-852d-eeee3990d58d",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "caa8e609-2c8f-463e-852d-eeee3990d58d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5957079938,
      "longitude": 29.9942675646
    }
  },
  "caed13f8-8ee0-420f-9322-10e3be0e1995": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 269",
      "id": "caed13f8-8ee0-420f-9322-10e3be0e1995",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "caed13f8-8ee0-420f-9322-10e3be0e1995",
    "image": "perev_right",
    "point": {
      "latitude": 52.9772944969,
      "longitude": 29.3150188349
    }
  },
  "cb19aea4-80fc-4437-b365-3fea232ead4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "cb19aea4-80fc-4437-b365-3fea232ead4a",
      "kilometrage": 47,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb19aea4-80fc-4437-b365-3fea232ead4a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6230741513,
      "longitude": 29.8818220783
    }
  },
  "cb1efdf1-35fb-47d2-8335-6f2e0e88000a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "cb1efdf1-35fb-47d2-8335-6f2e0e88000a",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb1efdf1-35fb-47d2-8335-6f2e0e88000a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7124122229,
      "longitude": 29.6071681359
    }
  },
  "cb290b38-7bff-4c22-b968-788af0cba4ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 45",
      "id": "cb290b38-7bff-4c22-b968-788af0cba4ed",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb290b38-7bff-4c22-b968-788af0cba4ed",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6208715308,
      "longitude": 29.8946411922
    }
  },
  "cb2fbece-58bd-4269-a1c9-b0f31cbf421f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 323",
      "id": "cb2fbece-58bd-4269-a1c9-b0f31cbf421f",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb2fbece-58bd-4269-a1c9-b0f31cbf421f",
    "image": "perev_right",
    "point": {
      "latitude": 53.1886108358,
      "longitude": 29.2473758276
    }
  },
  "cb641c55-fdfd-4176-827f-a6265b178c38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "cb641c55-fdfd-4176-827f-a6265b178c38",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb641c55-fdfd-4176-827f-a6265b178c38",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9481341593,
      "longitude": 29.3792534344
    }
  },
  "cbc920bb-8195-4b2e-90ac-940ebf0653aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 195",
      "id": "cbc920bb-8195-4b2e-90ac-940ebf0653aa",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbc920bb-8195-4b2e-90ac-940ebf0653aa",
    "image": "perev_left",
    "point": {
      "latitude": 52.8031236095,
      "longitude": 29.4682710479
    }
  },
  "cbe9280e-5dc3-4f15-8cad-c6a79aa86aca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 3",
      "id": "cbe9280e-5dc3-4f15-8cad-c6a79aa86aca",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbe9280e-5dc3-4f15-8cad-c6a79aa86aca",
    "image": "perev_right",
    "point": {
      "latitude": 52.5514590566,
      "longitude": 30.2286552489
    }
  },
  "cc9314a2-680f-4017-9ba4-31fd1e1a3c8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 54",
      "id": "cc9314a2-680f-4017-9ba4-31fd1e1a3c8c",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc9314a2-680f-4017-9ba4-31fd1e1a3c8c",
    "image": "perev_right",
    "point": {
      "latitude": 52.5709844218,
      "longitude": 30.0375133901
    }
  },
  "ccb3d3af-1294-49c4-bfec-57e28df05864": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "ccb3d3af-1294-49c4-bfec-57e28df05864",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ccb3d3af-1294-49c4-bfec-57e28df05864",
    "image": "crossing_way",
    "point": {
      "latitude": 53.1377016132,
      "longitude": 29.2564018335
    }
  },
  "cd2aca42-9898-4e67-b291-901334991b8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 263",
      "id": "cd2aca42-9898-4e67-b291-901334991b8e",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd2aca42-9898-4e67-b291-901334991b8e",
    "image": "perev_right",
    "point": {
      "latitude": 52.9614675389,
      "longitude": 29.3522236805
    }
  },
  "cd797408-33cc-4765-87f4-42a3adfc1bc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 476",
      "id": "cd797408-33cc-4765-87f4-42a3adfc1bc7",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd797408-33cc-4765-87f4-42a3adfc1bc7",
    "image": "perev_left",
    "point": {
      "latitude": 53.569944874,
      "longitude": 28.9568169214
    }
  },
  "cd7f6ee6-33ed-44b0-8321-df8f6ff24232": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 317",
      "id": "cd7f6ee6-33ed-44b0-8321-df8f6ff24232",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd7f6ee6-33ed-44b0-8321-df8f6ff24232",
    "image": "perev_left",
    "point": {
      "latitude": 53.1698633938,
      "longitude": 29.2397945043
    }
  },
  "cd9cd438-c16e-452c-aa33-2fad2ba361ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 297",
      "id": "cd9cd438-c16e-452c-aa33-2fad2ba361ea",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd9cd438-c16e-452c-aa33-2fad2ba361ea",
    "image": "perev_right",
    "point": {
      "latitude": 53.0686955351,
      "longitude": 29.241726486
    }
  },
  "ce1bd7d8-44ab-4cfb-b676-13f57e0ba0fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ce1bd7d8-44ab-4cfb-b676-13f57e0ba0fd",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce1bd7d8-44ab-4cfb-b676-13f57e0ba0fd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1497916748,
      "longitude": 29.2567741332
    }
  },
  "ce2aa765-8509-4a8d-8778-135872b37329": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 366",
      "id": "ce2aa765-8509-4a8d-8778-135872b37329",
      "kilometrage": 202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce2aa765-8509-4a8d-8778-135872b37329",
    "image": "perev_right",
    "point": {
      "latitude": 53.2780517788,
      "longitude": 29.0770699808
    }
  },
  "ce5293b3-b7e8-4cfd-adbe-51c63fa7404f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 456",
      "id": "ce5293b3-b7e8-4cfd-adbe-51c63fa7404f",
      "kilometrage": 247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce5293b3-b7e8-4cfd-adbe-51c63fa7404f",
    "image": "perev_right",
    "point": {
      "latitude": 53.5252094213,
      "longitude": 28.9628213841
    }
  },
  "cec7b715-3be6-4dbb-81ac-55fa6d25fbc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 320",
      "id": "cec7b715-3be6-4dbb-81ac-55fa6d25fbc8",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cec7b715-3be6-4dbb-81ac-55fa6d25fbc8",
    "image": "perev_right",
    "point": {
      "latitude": 53.1820275891,
      "longitude": 29.2489545577
    }
  },
  "ceecf5b1-6e2a-4369-ab79-7974aab66151": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 201",
      "id": "ceecf5b1-6e2a-4369-ab79-7974aab66151",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ceecf5b1-6e2a-4369-ab79-7974aab66151",
    "image": "perev_right",
    "point": {
      "latitude": 52.8049168755,
      "longitude": 29.4420616793
    }
  },
  "cf598ab6-2897-4885-af56-577ad7ae6c8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 489",
      "id": "cf598ab6-2897-4885-af56-577ad7ae6c8f",
      "kilometrage": 263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf598ab6-2897-4885-af56-577ad7ae6c8f",
    "image": "perev_right",
    "point": {
      "latitude": 53.6172398875,
      "longitude": 28.9204817907
    }
  },
  "d0157173-665d-485d-affe-d69524bdc302": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 272",
      "id": "d0157173-665d-485d-affe-d69524bdc302",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0157173-665d-485d-affe-d69524bdc302",
    "image": "perev_right",
    "point": {
      "latitude": 52.9800892571,
      "longitude": 29.2825524136
    }
  },
  "d01cd47b-44c0-42b4-9ede-156b2b5c58c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 545",
      "id": "d01cd47b-44c0-42b4-9ede-156b2b5c58c6",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d01cd47b-44c0-42b4-9ede-156b2b5c58c6",
    "image": "perev_left",
    "point": {
      "latitude": 53.7550778145,
      "longitude": 28.9367002629
    }
  },
  "d0881e1c-e87e-4828-a5ef-6a5435646c79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 195",
      "id": "d0881e1c-e87e-4828-a5ef-6a5435646c79",
      "kilometrage": 195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0881e1c-e87e-4828-a5ef-6a5435646c79",
    "image": "kilometrage",
    "point": {
      "latitude": 53.255133045,
      "longitude": 29.139276101
    }
  },
  "d0bd4904-c5cc-4eb0-88a5-51e4da9eb003": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "d0bd4904-c5cc-4eb0-88a5-51e4da9eb003",
      "kilometrage": 223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0bd4904-c5cc-4eb0-88a5-51e4da9eb003",
    "image": "axis_romb",
    "point": {
      "latitude": 53.4103874882,
      "longitude": 29.0084787801
    }
  },
  "d1272f30-c0f9-4d0d-b7f0-7b0ce5809a10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 452",
      "id": "d1272f30-c0f9-4d0d-b7f0-7b0ce5809a10",
      "kilometrage": 245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1272f30-c0f9-4d0d-b7f0-7b0ce5809a10",
    "image": "perev_right",
    "point": {
      "latitude": 53.5141977517,
      "longitude": 28.96154178
    }
  },
  "d12f272d-f9d9-46b5-9f35-c40647c86445": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 399",
      "id": "d12f272d-f9d9-46b5-9f35-c40647c86445",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d12f272d-f9d9-46b5-9f35-c40647c86445",
    "image": "perev_left",
    "point": {
      "latitude": 53.4012106032,
      "longitude": 29.0165299197
    }
  },
  "d12fba5d-0ebf-4826-9155-6976e77f576a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 346",
      "id": "d12fba5d-0ebf-4826-9155-6976e77f576a",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d12fba5d-0ebf-4826-9155-6976e77f576a",
    "image": "perev_left",
    "point": {
      "latitude": 53.2492960584,
      "longitude": 29.1590241103
    }
  },
  "d20c7dcc-6eef-4e1c-ab5b-aaf98453bee0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 416",
      "id": "d20c7dcc-6eef-4e1c-ab5b-aaf98453bee0",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d20c7dcc-6eef-4e1c-ab5b-aaf98453bee0",
    "image": "perev_left",
    "point": {
      "latitude": 53.4483739345,
      "longitude": 28.9738414237
    }
  },
  "d285ef6c-59ac-4f75-8a4b-d1251187785b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "d285ef6c-59ac-4f75-8a4b-d1251187785b",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d285ef6c-59ac-4f75-8a4b-d1251187785b",
    "image": "crossing_way",
    "point": {
      "latitude": 52.6258034891,
      "longitude": 29.8132510102
    }
  },
  "d2a11a3a-09da-434e-932d-5b07462d2889": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d2a11a3a-09da-434e-932d-5b07462d2889",
      "kilometrage": 259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2a11a3a-09da-434e-932d-5b07462d2889",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5858358267,
      "longitude": 28.9407194808
    }
  },
  "d2a90943-92f2-48a2-bfd9-795255eaa929": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d2a90943-92f2-48a2-bfd9-795255eaa929",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2a90943-92f2-48a2-bfd9-795255eaa929",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.6417915035,
      "longitude": 29.7854615272
    }
  },
  "d2ebb023-6779-4039-af4a-5fe2064a7f86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20",
      "id": "d2ebb023-6779-4039-af4a-5fe2064a7f86",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2ebb023-6779-4039-af4a-5fe2064a7f86",
    "image": "buyo_right",
    "point": {
      "latitude": 53.1577283811,
      "longitude": 29.2488908288
    }
  },
  "d2f716f1-66d3-4134-9aac-bf53927686b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 435",
      "id": "d2f716f1-66d3-4134-9aac-bf53927686b2",
      "kilometrage": 238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2f716f1-66d3-4134-9aac-bf53927686b2",
    "image": "perev_right",
    "point": {
      "latitude": 53.4860198029,
      "longitude": 28.9434913484
    }
  },
  "d3e04ce5-1481-4463-8a9b-1f20409baf98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 307",
      "id": "d3e04ce5-1481-4463-8a9b-1f20409baf98",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3e04ce5-1481-4463-8a9b-1f20409baf98",
    "image": "perev_left",
    "point": {
      "latitude": 53.1239821861,
      "longitude": 29.2690413563
    }
  },
  "d4d101a4-f6db-414b-8107-77f6050d043c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "d4d101a4-f6db-414b-8107-77f6050d043c",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4d101a4-f6db-414b-8107-77f6050d043c",
    "image": "perev_right",
    "point": {
      "latitude": 52.5584439925,
      "longitude": 30.0974036042
    }
  },
  "d4f84dc0-d368-466d-b599-0ebfea6f820b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d4f84dc0-d368-466d-b599-0ebfea6f820b",
      "kilometrage": 308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4f84dc0-d368-466d-b599-0ebfea6f820b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8468367642,
      "longitude": 28.9992150655
    }
  },
  "d50ad021-6a1c-4ffa-a625-c670e1561998": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 95",
      "id": "d50ad021-6a1c-4ffa-a625-c670e1561998",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d50ad021-6a1c-4ffa-a625-c670e1561998",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7754848902,
      "longitude": 29.5238991121
    }
  },
  "d55c626f-a4fe-4ebe-8142-d8f7c3e0aa74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 285",
      "id": "d55c626f-a4fe-4ebe-8142-d8f7c3e0aa74",
      "kilometrage": 285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d55c626f-a4fe-4ebe-8142-d8f7c3e0aa74",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7120154979,
      "longitude": 28.9625575757
    }
  },
  "d5c0db56-5468-47f6-ab26-b4c91823ffdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d5c0db56-5468-47f6-ab26-b4c91823ffdd",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5c0db56-5468-47f6-ab26-b4c91823ffdd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1380085155,
      "longitude": 29.2642780659
    }
  },
  "d5c841ac-b9bf-4f81-8840-73ce43c419e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 79",
      "id": "d5c841ac-b9bf-4f81-8840-73ce43c419e5",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5c841ac-b9bf-4f81-8840-73ce43c419e5",
    "image": "perev_left",
    "point": {
      "latitude": 52.6045018832,
      "longitude": 29.9554323062
    }
  },
  "d622036a-439d-4a87-96b0-52936891bfb0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 178",
      "id": "d622036a-439d-4a87-96b0-52936891bfb0",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d622036a-439d-4a87-96b0-52936891bfb0",
    "image": "perev_left",
    "point": {
      "latitude": 52.7711061168,
      "longitude": 29.5384815735
    }
  },
  "d70021c2-e163-4a53-964f-822ab9388854": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 59",
      "id": "d70021c2-e163-4a53-964f-822ab9388854",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d70021c2-e163-4a53-964f-822ab9388854",
    "image": "perev_right",
    "point": {
      "latitude": 52.5648934932,
      "longitude": 30.0140279054
    }
  },
  "d7100a73-fb12-411d-8d5f-4e798f5ee640": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 101",
      "id": "d7100a73-fb12-411d-8d5f-4e798f5ee640",
      "kilometrage": 49,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7100a73-fb12-411d-8d5f-4e798f5ee640",
    "image": "perev_right",
    "point": {
      "latitude": 52.6233351459,
      "longitude": 29.8507900145
    }
  },
  "d77caa18-c968-4607-a636-6bca7cc3cac6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 373",
      "id": "d77caa18-c968-4607-a636-6bca7cc3cac6",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d77caa18-c968-4607-a636-6bca7cc3cac6",
    "image": "perev_right",
    "point": {
      "latitude": 53.3089782078,
      "longitude": 29.0602698226
    }
  },
  "d7fe1433-5fe2-43d5-b18e-147fe68656ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 528",
      "id": "d7fe1433-5fe2-43d5-b18e-147fe68656ab",
      "kilometrage": 283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7fe1433-5fe2-43d5-b18e-147fe68656ab",
    "image": "perev_right",
    "point": {
      "latitude": 53.7064958912,
      "longitude": 28.9705467421
    }
  },
  "d8315c6e-9a1b-44fd-ae6a-b706afd81c84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 398",
      "id": "d8315c6e-9a1b-44fd-ae6a-b706afd81c84",
      "kilometrage": 221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8315c6e-9a1b-44fd-ae6a-b706afd81c84",
    "image": "perev_right",
    "point": {
      "latitude": 53.3956896556,
      "longitude": 29.0114667814
    }
  },
  "d84ae14b-b09c-4e05-a871-bf22eb0851ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 458",
      "id": "d84ae14b-b09c-4e05-a871-bf22eb0851ee",
      "kilometrage": 248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d84ae14b-b09c-4e05-a871-bf22eb0851ee",
    "image": "perev_left",
    "point": {
      "latitude": 53.5367052807,
      "longitude": 28.9569075396
    }
  },
  "d8ed685d-ddf9-4f43-b777-f57738f054e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 341",
      "id": "d8ed685d-ddf9-4f43-b777-f57738f054e4",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8ed685d-ddf9-4f43-b777-f57738f054e4",
    "image": "perev_left",
    "point": {
      "latitude": 53.2401435831,
      "longitude": 29.1863821788
    }
  },
  "d92656ae-25d2-41dc-ba13-d14d18d3115d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 578",
      "id": "d92656ae-25d2-41dc-ba13-d14d18d3115d",
      "kilometrage": 306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d92656ae-25d2-41dc-ba13-d14d18d3115d",
    "image": "perev_left",
    "point": {
      "latitude": 53.8286202037,
      "longitude": 29.0023276465
    }
  },
  "d93a38e8-85b0-45ac-affe-983de0e33bbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 186",
      "id": "d93a38e8-85b0-45ac-affe-983de0e33bbf",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d93a38e8-85b0-45ac-affe-983de0e33bbf",
    "image": "perev_right",
    "point": {
      "latitude": 52.7933816676,
      "longitude": 29.4891861365
    }
  },
  "d969a70f-0c47-4681-96c8-a1e8e2e5bb83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 350",
      "id": "d969a70f-0c47-4681-96c8-a1e8e2e5bb83",
      "kilometrage": 194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d969a70f-0c47-4681-96c8-a1e8e2e5bb83",
    "image": "perev_left",
    "point": {
      "latitude": 53.2493312447,
      "longitude": 29.1398998019
    }
  },
  "d9706281-4603-4215-8b9e-4eb63fd83e8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 405",
      "id": "d9706281-4603-4215-8b9e-4eb63fd83e8f",
      "kilometrage": 226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9706281-4603-4215-8b9e-4eb63fd83e8f",
    "image": "perev_right",
    "point": {
      "latitude": 53.424400608,
      "longitude": 28.9909343677
    }
  },
  "d9787a7c-98a9-42f2-8d7a-669ab00139d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 502",
      "id": "d9787a7c-98a9-42f2-8d7a-669ab00139d0",
      "kilometrage": 270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9787a7c-98a9-42f2-8d7a-669ab00139d0",
    "image": "perev_right",
    "point": {
      "latitude": 53.6520678027,
      "longitude": 28.9338375787
    }
  },
  "d99eabb4-42ad-4771-9ad8-63ca38499201": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 413",
      "id": "d99eabb4-42ad-4771-9ad8-63ca38499201",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d99eabb4-42ad-4771-9ad8-63ca38499201",
    "image": "perev_right",
    "point": {
      "latitude": 53.4399241204,
      "longitude": 28.9695465853
    }
  },
  "d9a88066-bc5b-4325-bb1a-e9015164a837": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 459",
      "id": "d9a88066-bc5b-4325-bb1a-e9015164a837",
      "kilometrage": 250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9a88066-bc5b-4325-bb1a-e9015164a837",
    "image": "perev_right",
    "point": {
      "latitude": 53.5385843481,
      "longitude": 28.9550554389
    }
  },
  "d9f092bc-ac91-4e6a-aa58-1e2ee9dab142": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "d9f092bc-ac91-4e6a-aa58-1e2ee9dab142",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9f092bc-ac91-4e6a-aa58-1e2ee9dab142",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1338103342,
      "longitude": 29.2546197487
    }
  },
  "da00ea68-4b7a-4870-a521-b60135ba4e9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 210",
      "id": "da00ea68-4b7a-4870-a521-b60135ba4e9e",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da00ea68-4b7a-4870-a521-b60135ba4e9e",
    "image": "perev_right",
    "point": {
      "latitude": 52.8299968291,
      "longitude": 29.439951857
    }
  },
  "da6e6c01-5614-4dc0-88cd-383312db9902": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 217",
      "id": "da6e6c01-5614-4dc0-88cd-383312db9902",
      "kilometrage": 114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da6e6c01-5614-4dc0-88cd-383312db9902",
    "image": "perev_left",
    "point": {
      "latitude": 52.8387066886,
      "longitude": 29.4158763856
    }
  },
  "dbed990c-9156-4848-b15d-4c33e861fab1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 55",
      "id": "dbed990c-9156-4848-b15d-4c33e861fab1",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbed990c-9156-4848-b15d-4c33e861fab1",
    "image": "perev_left",
    "point": {
      "latitude": 52.5760846094,
      "longitude": 30.0386796419
    }
  },
  "dbf67ff9-d54f-45f0-ac6a-804452ebc1e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 12",
      "id": "dbf67ff9-d54f-45f0-ac6a-804452ebc1e7",
      "kilometrage": 126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbf67ff9-d54f-45f0-ac6a-804452ebc1e7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.8990142085,
      "longitude": 29.3340107358
    }
  },
  "dbfc87dc-a25f-4128-bb2b-ff5084b4cc67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 30",
      "id": "dbfc87dc-a25f-4128-bb2b-ff5084b4cc67",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbfc87dc-a25f-4128-bb2b-ff5084b4cc67",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5718860921,
      "longitude": 30.0156267578
    }
  },
  "dc274c84-437a-45da-b492-e616647f3b93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 169",
      "id": "dc274c84-437a-45da-b492-e616647f3b93",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc274c84-437a-45da-b492-e616647f3b93",
    "image": "perev_left",
    "point": {
      "latitude": 52.7433608542,
      "longitude": 29.5677881178
    }
  },
  "dc9911d6-d46a-4211-bfd7-8e7b6bf5fd96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 468",
      "id": "dc9911d6-d46a-4211-bfd7-8e7b6bf5fd96",
      "kilometrage": 252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc9911d6-d46a-4211-bfd7-8e7b6bf5fd96",
    "image": "perev_left",
    "point": {
      "latitude": 53.555980029,
      "longitude": 28.9562945734
    }
  },
  "dd07564b-5fa3-4fd9-b94d-f710e0a01f46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 184",
      "id": "dd07564b-5fa3-4fd9-b94d-f710e0a01f46",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd07564b-5fa3-4fd9-b94d-f710e0a01f46",
    "image": "perev_right",
    "point": {
      "latitude": 52.7868820939,
      "longitude": 29.4951990862
    }
  },
  "dd398c82-5b87-4363-b552-7f3d150a780e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 501",
      "id": "dd398c82-5b87-4363-b552-7f3d150a780e",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd398c82-5b87-4363-b552-7f3d150a780e",
    "image": "perev_right",
    "point": {
      "latitude": 53.6445550405,
      "longitude": 28.9337380803
    }
  },
  "dd9ae9dd-382d-4361-97c4-6406ed8d74f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "dd9ae9dd-382d-4361-97c4-6406ed8d74f3",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd9ae9dd-382d-4361-97c4-6406ed8d74f3",
    "image": "perev_left",
    "point": {
      "latitude": 52.6165909611,
      "longitude": 29.9305618189
    }
  },
  "ddb1ac77-e0a1-4b34-9aaa-21acebf44444": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "ddb1ac77-e0a1-4b34-9aaa-21acebf44444",
      "kilometrage": 229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddb1ac77-e0a1-4b34-9aaa-21acebf44444",
    "image": "name_of",
    "point": {
      "latitude": 53.4324925084,
      "longitude": 28.9833390449
    }
  },
  "de539690-3564-4818-be69-c9a20c970d36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "de539690-3564-4818-be69-c9a20c970d36",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de539690-3564-4818-be69-c9a20c970d36",
    "image": "perev_left",
    "point": {
      "latitude": 52.5703932772,
      "longitude": 30.0480395149
    }
  },
  "df398e88-aac1-4856-869d-a1d5b2148927": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 429",
      "id": "df398e88-aac1-4856-869d-a1d5b2148927",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df398e88-aac1-4856-869d-a1d5b2148927",
    "image": "perev_right",
    "point": {
      "latitude": 53.4711061372,
      "longitude": 28.9565576065
    }
  },
  "df4fa17a-76a2-4274-9d12-5e7f5583d4fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 175",
      "id": "df4fa17a-76a2-4274-9d12-5e7f5583d4fb",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df4fa17a-76a2-4274-9d12-5e7f5583d4fb",
    "image": "perev_right",
    "point": {
      "latitude": 52.7539647432,
      "longitude": 29.5422769712
    }
  },
  "df8ecbf4-7a99-4913-828e-d8d06b570453": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141",
      "id": "df8ecbf4-7a99-4913-828e-d8d06b570453",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df8ecbf4-7a99-4913-828e-d8d06b570453",
    "image": "perev_left",
    "point": {
      "latitude": 52.6750269061,
      "longitude": 29.6947947033
    }
  },
  "dfab9c42-0f8c-4206-b1ea-e7ee7b847b42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 25",
      "id": "dfab9c42-0f8c-4206-b1ea-e7ee7b847b42",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfab9c42-0f8c-4206-b1ea-e7ee7b847b42",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5717000793,
      "longitude": 30.0466436914
    }
  },
  "e03b486d-0495-4caa-99d9-a65653d3c56a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 548",
      "id": "e03b486d-0495-4caa-99d9-a65653d3c56a",
      "kilometrage": 292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e03b486d-0495-4caa-99d9-a65653d3c56a",
    "image": "perev_left",
    "point": {
      "latitude": 53.7592119444,
      "longitude": 28.9392320063
    }
  },
  "e041a879-f37c-45a3-be37-46cbeea2fc0c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 462",
      "id": "e041a879-f37c-45a3-be37-46cbeea2fc0c",
      "kilometrage": 249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e041a879-f37c-45a3-be37-46cbeea2fc0c",
    "image": "perev_left",
    "point": {
      "latitude": 53.5419993537,
      "longitude": 28.9635935667
    }
  },
  "e06e8027-4810-4683-86c6-ef996fa34c83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 10",
      "id": "e06e8027-4810-4683-86c6-ef996fa34c83",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e06e8027-4810-4683-86c6-ef996fa34c83",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7730007116,
      "longitude": 29.5269467572
    }
  },
  "e087f079-1655-48c1-b389-c11435686a69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e087f079-1655-48c1-b389-c11435686a69",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e087f079-1655-48c1-b389-c11435686a69",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1565789423,
      "longitude": 29.2482425559
    }
  },
  "e119d4e9-b91e-43b2-9177-cc34a97270a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 404",
      "id": "e119d4e9-b91e-43b2-9177-cc34a97270a0",
      "kilometrage": 225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e119d4e9-b91e-43b2-9177-cc34a97270a0",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.4202760582,
      "longitude": 28.9866766617
    }
  },
  "e187ec63-6504-4dfc-bee4-89f7503dceb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 60",
      "id": "e187ec63-6504-4dfc-bee4-89f7503dceb2",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e187ec63-6504-4dfc-bee4-89f7503dceb2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6428591437,
      "longitude": 29.7881668566
    }
  },
  "e1f7c60a-c2dc-4055-95b6-9bcbeb5f1d0e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 295",
      "id": "e1f7c60a-c2dc-4055-95b6-9bcbeb5f1d0e",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1f7c60a-c2dc-4055-95b6-9bcbeb5f1d0e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7789993994,
      "longitude": 28.9466553301
    }
  },
  "e2178901-1f6c-4e78-97dd-d6ec82a72c86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 250",
      "id": "e2178901-1f6c-4e78-97dd-d6ec82a72c86",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2178901-1f6c-4e78-97dd-d6ec82a72c86",
    "image": "perev_left",
    "point": {
      "latitude": 52.939845952,
      "longitude": 29.3649884781
    }
  },
  "e2561683-b6c1-4191-8eaa-a34d22caaf8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 232",
      "id": "e2561683-b6c1-4191-8eaa-a34d22caaf8d",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2561683-b6c1-4191-8eaa-a34d22caaf8d",
    "image": "perev_right",
    "point": {
      "latitude": 52.8594339856,
      "longitude": 29.3545055491
    }
  },
  "e25ac3da-7bda-411b-867d-c130e1d0b488": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 369",
      "id": "e25ac3da-7bda-411b-867d-c130e1d0b488",
      "kilometrage": 204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e25ac3da-7bda-411b-867d-c130e1d0b488",
    "image": "perev_right",
    "point": {
      "latitude": 53.2940968953,
      "longitude": 29.0527579589
    }
  },
  "e277c7bb-bb76-4c74-a8ac-bc407a76c1eb": {
    "data": {
      "color": false,
      "comment": "Нет знака",
      "description": "Соблюдать надводный габарит  ",
      "id": "e277c7bb-bb76-4c74-a8ac-bc407a76c1eb",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e277c7bb-bb76-4c74-a8ac-bc407a76c1eb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8098211246,
      "longitude": 29.4281295061
    }
  },
  "e293fe8d-96ba-4714-8f1e-cc321ca992af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 123",
      "id": "e293fe8d-96ba-4714-8f1e-cc321ca992af",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e293fe8d-96ba-4714-8f1e-cc321ca992af",
    "image": "perev_left",
    "point": {
      "latitude": 52.6477890322,
      "longitude": 29.774208383
    }
  },
  "e2ee526b-a956-4600-b2b8-ac346772aaf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 11",
      "id": "e2ee526b-a956-4600-b2b8-ac346772aaf7",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2ee526b-a956-4600-b2b8-ac346772aaf7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.8047261503,
      "longitude": 29.4923485354
    }
  },
  "e3fa4526-4830-4891-b573-398552900fad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 14",
      "id": "e3fa4526-4830-4891-b573-398552900fad",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3fa4526-4830-4891-b573-398552900fad",
    "image": "buyo_right",
    "point": {
      "latitude": 53.130341741,
      "longitude": 29.2616221253
    }
  },
  "e3fdf84e-5d83-44bc-88eb-ee095c2e1a58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 156",
      "id": "e3fdf84e-5d83-44bc-88eb-ee095c2e1a58",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3fdf84e-5d83-44bc-88eb-ee095c2e1a58",
    "image": "perev_right",
    "point": {
      "latitude": 52.688031124,
      "longitude": 29.6154897226
    }
  },
  "e4550738-da17-465f-8eba-85f9b878b149": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 344",
      "id": "e4550738-da17-465f-8eba-85f9b878b149",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4550738-da17-465f-8eba-85f9b878b149",
    "image": "perev_left",
    "point": {
      "latitude": 53.2415815621,
      "longitude": 29.1741917768
    }
  },
  "e4765000-d522-4544-b830-e58f9e1395e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 207",
      "id": "e4765000-d522-4544-b830-e58f9e1395e1",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4765000-d522-4544-b830-e58f9e1395e1",
    "image": "perev_right",
    "point": {
      "latitude": 52.8268537693,
      "longitude": 29.4394860247
    }
  },
  "e4943b95-0c22-4897-9dae-c042e121f6dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 306",
      "id": "e4943b95-0c22-4897-9dae-c042e121f6dd",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4943b95-0c22-4897-9dae-c042e121f6dd",
    "image": "perev_left",
    "point": {
      "latitude": 53.1204780864,
      "longitude": 29.2680819341
    }
  },
  "e4a14772-b055-4a39-bfb4-a0c887c87c69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e4a14772-b055-4a39-bfb4-a0c887c87c69",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4a14772-b055-4a39-bfb4-a0c887c87c69",
    "image": "name_of",
    "point": {
      "latitude": 52.6285915632,
      "longitude": 29.8156947297
    }
  },
  "e5ff2335-33b3-4e93-8537-0666f738eff5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 417",
      "id": "e5ff2335-33b3-4e93-8537-0666f738eff5",
      "kilometrage": 231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5ff2335-33b3-4e93-8537-0666f738eff5",
    "image": "perev_right",
    "point": {
      "latitude": 53.4485769093,
      "longitude": 28.9679734633
    }
  },
  "e61421d1-f9f6-4103-89c0-72c995fec14a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 290",
      "id": "e61421d1-f9f6-4103-89c0-72c995fec14a",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e61421d1-f9f6-4103-89c0-72c995fec14a",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.0336491387,
      "longitude": 29.2724551369
    }
  },
  "e61eb8ea-3dca-4a09-b106-e4d1c673690a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 535",
      "id": "e61eb8ea-3dca-4a09-b106-e4d1c673690a",
      "kilometrage": 286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e61eb8ea-3dca-4a09-b106-e4d1c673690a",
    "image": "perev_right",
    "point": {
      "latitude": 53.7183403606,
      "longitude": 28.9585708844
    }
  },
  "e6b20452-7791-40a4-b533-bf13f548e272": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 82",
      "id": "e6b20452-7791-40a4-b533-bf13f548e272",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6b20452-7791-40a4-b533-bf13f548e272",
    "image": "perev_right",
    "point": {
      "latitude": 52.6120950737,
      "longitude": 29.9323280972
    }
  },
  "e7194842-370f-45fe-a82c-241b2fa8dff2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 227",
      "id": "e7194842-370f-45fe-a82c-241b2fa8dff2",
      "kilometrage": 119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7194842-370f-45fe-a82c-241b2fa8dff2",
    "image": "perev_right",
    "point": {
      "latitude": 52.8510260151,
      "longitude": 29.3763926196
    }
  },
  "e738c07d-7578-41ae-aff8-b5210ce79205": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 475",
      "id": "e738c07d-7578-41ae-aff8-b5210ce79205",
      "kilometrage": 256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e738c07d-7578-41ae-aff8-b5210ce79205",
    "image": "perev_right",
    "point": {
      "latitude": 53.5677978569,
      "longitude": 28.9634609183
    }
  },
  "e776a154-d916-493b-9e16-ddb66959affb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 26",
      "id": "e776a154-d916-493b-9e16-ddb66959affb",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e776a154-d916-493b-9e16-ddb66959affb",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.5528488658,
      "longitude": 30.1167140729
    }
  },
  "e7dba9d2-9790-43a7-ac3c-70879b40ecd9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e7dba9d2-9790-43a7-ac3c-70879b40ecd9",
      "kilometrage": 220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7dba9d2-9790-43a7-ac3c-70879b40ecd9",
    "image": "name_of",
    "point": {
      "latitude": 53.3846655125,
      "longitude": 29.0234003152
    }
  },
  "e80da5c0-af36-4e0a-a6b7-17c577e5cd90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e80da5c0-af36-4e0a-a6b7-17c577e5cd90",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e80da5c0-af36-4e0a-a6b7-17c577e5cd90",
    "image": "attention",
    "point": {
      "latitude": 52.817969113,
      "longitude": 29.4421759606
    }
  },
  "e876fe7f-de5a-40a2-9d07-93f5a96a9a13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 212",
      "id": "e876fe7f-de5a-40a2-9d07-93f5a96a9a13",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e876fe7f-de5a-40a2-9d07-93f5a96a9a13",
    "image": "perev_left",
    "point": {
      "latitude": 52.8342597245,
      "longitude": 29.4360749236
    }
  },
  "e88ba1b1-e8f7-44bb-a8cb-5d40c68cc3fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 75",
      "id": "e88ba1b1-e8f7-44bb-a8cb-5d40c68cc3fd",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e88ba1b1-e8f7-44bb-a8cb-5d40c68cc3fd",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6816320649,
      "longitude": 29.6662046901
    }
  },
  "e8d8573a-880e-4c1d-956e-98d2e00905be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 239",
      "id": "e8d8573a-880e-4c1d-956e-98d2e00905be",
      "kilometrage": 124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8d8573a-880e-4c1d-956e-98d2e00905be",
    "image": "perev_right",
    "point": {
      "latitude": 52.8856970784,
      "longitude": 29.3408029846
    }
  },
  "eac1d5f6-6039-4cd8-b952-ba12a0a5051e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 424",
      "id": "eac1d5f6-6039-4cd8-b952-ba12a0a5051e",
      "kilometrage": 234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eac1d5f6-6039-4cd8-b952-ba12a0a5051e",
    "image": "perev_left",
    "point": {
      "latitude": 53.4649933877,
      "longitude": 28.9542105052
    }
  },
  "eaee6071-addb-4d76-834f-b3219ecc03ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "eaee6071-addb-4d76-834f-b3219ecc03ef",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eaee6071-addb-4d76-834f-b3219ecc03ef",
    "image": "perev_right",
    "point": {
      "latitude": 52.6484780957,
      "longitude": 29.7170374297
    }
  },
  "eb214631-2a5a-423a-9860-5bc60b453811": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 147",
      "id": "eb214631-2a5a-423a-9860-5bc60b453811",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb214631-2a5a-423a-9860-5bc60b453811",
    "image": "perev_right",
    "point": {
      "latitude": 52.6830905902,
      "longitude": 29.6743746515
    }
  },
  "eb96f09d-5049-4a2a-983d-067f4da24c8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 137",
      "id": "eb96f09d-5049-4a2a-983d-067f4da24c8c",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb96f09d-5049-4a2a-983d-067f4da24c8c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6649353634,
      "longitude": 29.7086910784
    }
  },
  "ebf74a70-6b24-4c7e-9286-8a05a618d35b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 400",
      "id": "ebf74a70-6b24-4c7e-9286-8a05a618d35b",
      "kilometrage": 222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebf74a70-6b24-4c7e-9286-8a05a618d35b",
    "image": "perev_left",
    "point": {
      "latitude": 53.4060559831,
      "longitude": 29.0167189482
    }
  },
  "ebf8369e-3769-498e-b6b0-8ec23dd9944b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 233",
      "id": "ebf8369e-3769-498e-b6b0-8ec23dd9944b",
      "kilometrage": 121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebf8369e-3769-498e-b6b0-8ec23dd9944b",
    "image": "perev_left",
    "point": {
      "latitude": 52.8630306849,
      "longitude": 29.3564014427
    }
  },
  "ecd3b656-5f08-45d8-8403-c3b77549e059": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 153",
      "id": "ecd3b656-5f08-45d8-8403-c3b77549e059",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ecd3b656-5f08-45d8-8403-c3b77549e059",
    "image": "perev_left",
    "point": {
      "latitude": 52.6955685748,
      "longitude": 29.6313090936
    }
  },
  "ecf247c1-4ea2-4a76-98af-ba68ad8e9dd2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ecf247c1-4ea2-4a76-98af-ba68ad8e9dd2",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ecf247c1-4ea2-4a76-98af-ba68ad8e9dd2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.2447101057,
      "longitude": 29.1644751853
    }
  },
  "ed5846a3-7772-41d9-a9b5-790d9db60ae9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 371",
      "id": "ed5846a3-7772-41d9-a9b5-790d9db60ae9",
      "kilometrage": 206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed5846a3-7772-41d9-a9b5-790d9db60ae9",
    "image": "perev_left",
    "point": {
      "latitude": 53.3065144587,
      "longitude": 29.0573518073
    }
  },
  "edb56f96-8492-49d5-b812-abd5ac51ebc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 494",
      "id": "edb56f96-8492-49d5-b812-abd5ac51ebc5",
      "kilometrage": 265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edb56f96-8492-49d5-b812-abd5ac51ebc5",
    "image": "perev_left",
    "point": {
      "latitude": 53.6286348863,
      "longitude": 28.9409325319
    }
  },
  "edd234c3-494c-4286-9908-59ebff09524e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "edd234c3-494c-4286-9908-59ebff09524e",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edd234c3-494c-4286-9908-59ebff09524e",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 53.1373549883,
      "longitude": 29.2555135408
    }
  },
  "ede2668f-aca6-4cc2-b3d1-7ae5d732504c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ede2668f-aca6-4cc2-b3d1-7ae5d732504c",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ede2668f-aca6-4cc2-b3d1-7ae5d732504c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.2445246202,
      "longitude": 29.1694447399
    }
  },
  "ee8bb5a6-a63c-484e-af83-71f66bc57ecb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 351",
      "id": "ee8bb5a6-a63c-484e-af83-71f66bc57ecb",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee8bb5a6-a63c-484e-af83-71f66bc57ecb",
    "image": "perev_right",
    "point": {
      "latitude": 53.2508682147,
      "longitude": 29.1358054511
    }
  },
  "ef1e2d16-83a0-472d-bf73-dee5ba4655cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 43",
      "id": "ef1e2d16-83a0-472d-bf73-dee5ba4655cd",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef1e2d16-83a0-472d-bf73-dee5ba4655cd",
    "image": "perev_left",
    "point": {
      "latitude": 52.5542874139,
      "longitude": 30.0792771967
    }
  },
  "ef3bbf09-af28-4286-aeb9-b302d8cf8d88": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ef3bbf09-af28-4286-aeb9-b302d8cf8d88",
      "kilometrage": 48,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef3bbf09-af28-4286-aeb9-b302d8cf8d88",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.6241633012,
      "longitude": 29.8746059079
    }
  },
  "f00054e2-dd27-4850-8640-7a4a0e00e6b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 56",
      "id": "f00054e2-dd27-4850-8640-7a4a0e00e6b2",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f00054e2-dd27-4850-8640-7a4a0e00e6b2",
    "image": "perev_left",
    "point": {
      "latitude": 52.5784363279,
      "longitude": 30.0296035309
    }
  },
  "f027ce00-1693-458f-a0f6-52337fd28165": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f027ce00-1693-458f-a0f6-52337fd28165",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f027ce00-1693-458f-a0f6-52337fd28165",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.1574067882,
      "longitude": 29.2512450141
    }
  },
  "f0441c87-a542-4b44-983c-d8ba32154f04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 260",
      "id": "f0441c87-a542-4b44-983c-d8ba32154f04",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0441c87-a542-4b44-983c-d8ba32154f04",
    "image": "perev_left",
    "point": {
      "latitude": 52.9633314758,
      "longitude": 29.3678661968
    }
  },
  "f05c48a9-dd9d-4ddd-98fc-825dd3096571": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 167",
      "id": "f05c48a9-dd9d-4ddd-98fc-825dd3096571",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f05c48a9-dd9d-4ddd-98fc-825dd3096571",
    "image": "perev_left",
    "point": {
      "latitude": 52.7398428527,
      "longitude": 29.5915048304
    }
  },
  "f0ba5e8e-8150-40f6-90b5-554dadb35998": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 4",
      "id": "f0ba5e8e-8150-40f6-90b5-554dadb35998",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0ba5e8e-8150-40f6-90b5-554dadb35998",
    "image": "buyo_right",
    "point": {
      "latitude": 52.6476937547,
      "longitude": 29.7267189663
    }
  },
  "f0dc0029-05b7-47d0-92bb-ac410a2197ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 485",
      "id": "f0dc0029-05b7-47d0-92bb-ac410a2197ec",
      "kilometrage": 261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0dc0029-05b7-47d0-92bb-ac410a2197ec",
    "image": "perev_left",
    "point": {
      "latitude": 53.6051295647,
      "longitude": 28.9389550363
    }
  },
  "f0e441b0-7ab1-4170-ae2e-30546d04b4d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 19",
      "id": "f0e441b0-7ab1-4170-ae2e-30546d04b4d8",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0e441b0-7ab1-4170-ae2e-30546d04b4d8",
    "image": "perev_left",
    "point": {
      "latitude": 52.5653654927,
      "longitude": 30.1493790332
    }
  },
  "f0eee8ed-cd3d-4639-ab92-d4e562dce799": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13",
      "id": "f0eee8ed-cd3d-4639-ab92-d4e562dce799",
      "kilometrage": 6,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0eee8ed-cd3d-4639-ab92-d4e562dce799",
    "image": "perev_left",
    "point": {
      "latitude": 52.5816182777,
      "longitude": 30.1900233558
    }
  },
  "f10a96ce-9510-447b-bf7e-4b3fec67acd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 84",
      "id": "f10a96ce-9510-447b-bf7e-4b3fec67acd6",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f10a96ce-9510-447b-bf7e-4b3fec67acd6",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.6190194771,
      "longitude": 29.9264818502
    }
  },
  "f125dd8e-790b-44be-a829-5d102cab370f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 443",
      "id": "f125dd8e-790b-44be-a829-5d102cab370f",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f125dd8e-790b-44be-a829-5d102cab370f",
    "image": "perev_right",
    "point": {
      "latitude": 53.4951319876,
      "longitude": 28.9577786474
    }
  },
  "f1509030-cbe4-4948-a283-7405370dbb54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 557",
      "id": "f1509030-cbe4-4948-a283-7405370dbb54",
      "kilometrage": 297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1509030-cbe4-4948-a283-7405370dbb54",
    "image": "perev_right",
    "point": {
      "latitude": 53.7834206341,
      "longitude": 28.9514460836
    }
  },
  "f185eb8a-4ae8-46d1-a4e1-7abe27aa22d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 211",
      "id": "f185eb8a-4ae8-46d1-a4e1-7abe27aa22d1",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f185eb8a-4ae8-46d1-a4e1-7abe27aa22d1",
    "image": "perev_left",
    "point": {
      "latitude": 52.8337025936,
      "longitude": 29.4386964259
    }
  },
  "f1f1b2e5-c89a-49c3-886a-23b6fa01f41f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f1f1b2e5-c89a-49c3-886a-23b6fa01f41f",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1f1b2e5-c89a-49c3-886a-23b6fa01f41f",
    "image": "bridge_low",
    "point": {
      "latitude": 53.1415810565,
      "longitude": 29.26607998
    }
  },
  "f24a0ef2-0f85-4c33-aafb-d39b58a24865": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f24a0ef2-0f85-4c33-aafb-d39b58a24865",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f24a0ef2-0f85-4c33-aafb-d39b58a24865",
    "image": "bridge_low",
    "point": {
      "latitude": 53.1299257093,
      "longitude": 29.2627686216
    }
  },
  "f2779cc5-bb8d-4973-af33-b0ae47ec2255": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f2779cc5-bb8d-4973-af33-b0ae47ec2255",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2779cc5-bb8d-4973-af33-b0ae47ec2255",
    "image": "bridge_low",
    "point": {
      "latitude": 53.2442119318,
      "longitude": 29.1678115743
    }
  },
  "f2fe08f6-1fe1-4134-87c6-a89670bf01f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 85",
      "id": "f2fe08f6-1fe1-4134-87c6-a89670bf01f0",
      "kilometrage": 85,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2fe08f6-1fe1-4134-87c6-a89670bf01f0",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7285238212,
      "longitude": 29.6018660432
    }
  },
  "f30ead27-ca6f-4f6d-aec6-20f6341cb8bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "f30ead27-ca6f-4f6d-aec6-20f6341cb8bc",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f30ead27-ca6f-4f6d-aec6-20f6341cb8bc",
    "image": "axis_romb",
    "point": {
      "latitude": 53.1302139301,
      "longitude": 29.2626177168
    }
  },
  "f328e7e7-7528-4de2-9ddf-17ed204b6d30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 270",
      "id": "f328e7e7-7528-4de2-9ddf-17ed204b6d30",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f328e7e7-7528-4de2-9ddf-17ed204b6d30",
    "image": "perev_left",
    "point": {
      "latitude": 52.9792060444,
      "longitude": 29.3060839018
    }
  },
  "f3b42287-6ff8-42b8-8c0b-cc590de2284c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 478",
      "id": "f3b42287-6ff8-42b8-8c0b-cc590de2284c",
      "kilometrage": 257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3b42287-6ff8-42b8-8c0b-cc590de2284c",
    "image": "perev_right",
    "point": {
      "latitude": 53.5710996223,
      "longitude": 28.9468209645
    }
  },
  "f430cbb3-0f93-45a4-8e58-da8020d41fa0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 235",
      "id": "f430cbb3-0f93-45a4-8e58-da8020d41fa0",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f430cbb3-0f93-45a4-8e58-da8020d41fa0",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4710956847,
      "longitude": 28.9528121485
    }
  },
  "f4fa76ee-8400-49fa-968a-3af59d79b97a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 145",
      "id": "f4fa76ee-8400-49fa-968a-3af59d79b97a",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4fa76ee-8400-49fa-968a-3af59d79b97a",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.6845642099,
      "longitude": 29.6855420653
    }
  },
  "f514863a-9347-46e2-9c65-98f802891b9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 356",
      "id": "f514863a-9347-46e2-9c65-98f802891b9a",
      "kilometrage": 196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f514863a-9347-46e2-9c65-98f802891b9a",
    "image": "perev_left",
    "point": {
      "latitude": 53.2531665553,
      "longitude": 29.1254514899
    }
  },
  "f53dd339-c147-4a0c-904c-493d01485434": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 237",
      "id": "f53dd339-c147-4a0c-904c-493d01485434",
      "kilometrage": 123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f53dd339-c147-4a0c-904c-493d01485434",
    "image": "perev_left",
    "point": {
      "latitude": 52.8764839611,
      "longitude": 29.3513565598
    }
  },
  "f54b793c-3b60-435e-a985-03a3c4f5aed3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 308",
      "id": "f54b793c-3b60-435e-a985-03a3c4f5aed3",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f54b793c-3b60-435e-a985-03a3c4f5aed3",
    "image": "perev_right",
    "point": {
      "latitude": 53.1355573918,
      "longitude": 29.2534461697
    }
  },
  "f5c3b713-8795-4167-a355-3c2f58839e26": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "f5c3b713-8795-4167-a355-3c2f58839e26",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5c3b713-8795-4167-a355-3c2f58839e26",
    "image": "axis_romb",
    "point": {
      "latitude": 52.6480308475,
      "longitude": 29.7244950755
    }
  },
  "f614e66d-c17b-4b3e-8579-16c1d499493b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 251",
      "id": "f614e66d-c17b-4b3e-8579-16c1d499493b",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f614e66d-c17b-4b3e-8579-16c1d499493b",
    "image": "perev_right",
    "point": {
      "latitude": 52.9430207591,
      "longitude": 29.3695282951
    }
  },
  "f6651730-d010-4bb4-9af4-81f01992aec6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 124",
      "id": "f6651730-d010-4bb4-9af4-81f01992aec6",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6651730-d010-4bb4-9af4-81f01992aec6",
    "image": "perev_left",
    "point": {
      "latitude": 52.6489916736,
      "longitude": 29.7679733174
    }
  },
  "f67fb1ed-3d7f-4a53-941f-7d41a613a4c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 321",
      "id": "f67fb1ed-3d7f-4a53-941f-7d41a613a4c3",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f67fb1ed-3d7f-4a53-941f-7d41a613a4c3",
    "image": "perev_left",
    "point": {
      "latitude": 53.1854810536,
      "longitude": 29.2560568558
    }
  },
  "f6c309b4-0488-45fc-8458-ff32dd178685": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 444",
      "id": "f6c309b4-0488-45fc-8458-ff32dd178685",
      "kilometrage": 241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6c309b4-0488-45fc-8458-ff32dd178685",
    "image": "perev_right",
    "point": {
      "latitude": 53.4974200491,
      "longitude": 28.9605274229
    }
  },
  "f704c1cf-a373-475f-929b-202e9dd2404d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "f704c1cf-a373-475f-929b-202e9dd2404d",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f704c1cf-a373-475f-929b-202e9dd2404d",
    "image": "perev_right",
    "point": {
      "latitude": 52.5487210506,
      "longitude": 30.0912149974
    }
  },
  "f70636e6-d3c2-4e37-91e1-394b5c25e221": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 552",
      "id": "f70636e6-d3c2-4e37-91e1-394b5c25e221",
      "kilometrage": 294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f70636e6-d3c2-4e37-91e1-394b5c25e221",
    "image": "perev_right",
    "point": {
      "latitude": 53.7749512773,
      "longitude": 28.9466085679
    }
  },
  "f726a544-1206-4383-993e-576d94505540": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "f726a544-1206-4383-993e-576d94505540",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f726a544-1206-4383-993e-576d94505540",
    "image": "name_of",
    "point": {
      "latitude": 52.991247728,
      "longitude": 29.2667566154
    }
  },
  "f755173f-0036-48dc-9b29-0bfadf9bf71f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 513",
      "id": "f755173f-0036-48dc-9b29-0bfadf9bf71f",
      "kilometrage": 276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f755173f-0036-48dc-9b29-0bfadf9bf71f",
    "image": "perev_left",
    "point": {
      "latitude": 53.6839390676,
      "longitude": 28.9614361577
    }
  },
  "f7d9cfa8-5734-458b-8cda-696efd2f030f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 554",
      "id": "f7d9cfa8-5734-458b-8cda-696efd2f030f",
      "kilometrage": 295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7d9cfa8-5734-458b-8cda-696efd2f030f",
    "image": "perev_right",
    "point": {
      "latitude": 53.783449519,
      "longitude": 28.9454159796
    }
  },
  "f8b41c6b-2227-49e1-b330-67cff71c01f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 564",
      "id": "f8b41c6b-2227-49e1-b330-67cff71c01f8",
      "kilometrage": 300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8b41c6b-2227-49e1-b330-67cff71c01f8",
    "image": "perev_right",
    "point": {
      "latitude": 53.7905235857,
      "longitude": 28.9665296579
    }
  },
  "f8c2cd87-a524-442b-a419-b4a2d7da613f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "f8c2cd87-a524-442b-a419-b4a2d7da613f",
      "kilometrage": 199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8c2cd87-a524-442b-a419-b4a2d7da613f",
    "image": "name_of",
    "point": {
      "latitude": 53.2608950657,
      "longitude": 29.0941260758
    }
  },
  "f8f1bd24-c95e-405b-9135-7ff25b15f45b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 303",
      "id": "f8f1bd24-c95e-405b-9135-7ff25b15f45b",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8f1bd24-c95e-405b-9135-7ff25b15f45b",
    "image": "perev_left",
    "point": {
      "latitude": 53.1046430652,
      "longitude": 29.2537616061
    }
  },
  "f9ab3422-95e6-4dd7-b680-dda84d37d5a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 266",
      "id": "f9ab3422-95e6-4dd7-b680-dda84d37d5a0",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9ab3422-95e6-4dd7-b680-dda84d37d5a0",
    "image": "perev_right",
    "point": {
      "latitude": 52.9749845313,
      "longitude": 29.3455270537
    }
  },
  "fa18f303-2cb2-4312-b3ff-f6db4ee5d80d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "fa18f303-2cb2-4312-b3ff-f6db4ee5d80d",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa18f303-2cb2-4312-b3ff-f6db4ee5d80d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1311138077,
      "longitude": 29.264064628
    }
  },
  "fa1af3fc-e41a-4503-8508-aa26af6caca6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 426",
      "id": "fa1af3fc-e41a-4503-8508-aa26af6caca6",
      "kilometrage": 235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa1af3fc-e41a-4503-8508-aa26af6caca6",
    "image": "perev_right",
    "point": {
      "latitude": 53.471271863,
      "longitude": 28.9533597231
    }
  },
  "fa3c6046-9f0d-4c11-901c-00f62423bc7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 107",
      "id": "fa3c6046-9f0d-4c11-901c-00f62423bc7d",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa3c6046-9f0d-4c11-901c-00f62423bc7d",
    "image": "perev_left",
    "point": {
      "latitude": 52.6290861359,
      "longitude": 29.8127135023
    }
  },
  "fb5b1537-643d-49b1-ae78-90688c386edb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 550",
      "id": "fb5b1537-643d-49b1-ae78-90688c386edb",
      "kilometrage": 293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb5b1537-643d-49b1-ae78-90688c386edb",
    "image": "perev_left",
    "point": {
      "latitude": 53.7667752524,
      "longitude": 28.9494713658
    }
  },
  "fc1a9117-d6ba-47e9-84d4-8407e0f3f0af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "fc1a9117-d6ba-47e9-84d4-8407e0f3f0af",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc1a9117-d6ba-47e9-84d4-8407e0f3f0af",
    "image": "name_of",
    "point": {
      "latitude": 52.8160694099,
      "longitude": 29.441175836
    }
  },
  "fc6ea5c9-fc0a-4b04-9a2b-dfdd96171ed4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 525",
      "id": "fc6ea5c9-fc0a-4b04-9a2b-dfdd96171ed4",
      "kilometrage": 282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc6ea5c9-fc0a-4b04-9a2b-dfdd96171ed4",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.7096660285,
      "longitude": 28.9810198701
    }
  },
  "fc8c3b1d-e2f8-45ca-829f-e269b467f5fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 230",
      "id": "fc8c3b1d-e2f8-45ca-829f-e269b467f5fd",
      "kilometrage": 230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc8c3b1d-e2f8-45ca-829f-e269b467f5fd",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4393076708,
      "longitude": 28.9703722504
    }
  },
  "fc991bf7-09f5-4537-808b-b2300f456cf5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 487",
      "id": "fc991bf7-09f5-4537-808b-b2300f456cf5",
      "kilometrage": 262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc991bf7-09f5-4537-808b-b2300f456cf5",
    "image": "perev_left",
    "point": {
      "latitude": 53.6083807994,
      "longitude": 28.9326607877
    }
  },
  "fce95b3b-d354-4954-b024-0fa030e38ca5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 249",
      "id": "fce95b3b-d354-4954-b024-0fa030e38ca5",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fce95b3b-d354-4954-b024-0fa030e38ca5",
    "image": "perev_right",
    "point": {
      "latitude": 52.9384797905,
      "longitude": 29.3550610831
    }
  },
  "fd0a0f5c-4477-4a6a-a864-bc6e0de558bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 385",
      "id": "fd0a0f5c-4477-4a6a-a864-bc6e0de558bb",
      "kilometrage": 214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd0a0f5c-4477-4a6a-a864-bc6e0de558bb",
    "image": "perev_right",
    "point": {
      "latitude": 53.3473584351,
      "longitude": 29.0191515125
    }
  },
  "fd5b4cf4-4978-4645-a3e4-2f39fce0480c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "fd5b4cf4-4978-4645-a3e4-2f39fce0480c",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd5b4cf4-4978-4645-a3e4-2f39fce0480c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.808592483847114,
      "longitude": 29.42499484317088
    }
  },
  "fd791846-9867-40e6-bb9f-4775d0fd1fce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 40",
      "id": "fd791846-9867-40e6-bb9f-4775d0fd1fce",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd791846-9867-40e6-bb9f-4775d0fd1fce",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6127660323,
      "longitude": 29.9304229108
    }
  },
  "fe4adac8-80cd-4eda-af9c-9044a068e3d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 235",
      "id": "fe4adac8-80cd-4eda-af9c-9044a068e3d0",
      "kilometrage": 122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe4adac8-80cd-4eda-af9c-9044a068e3d0",
    "image": "perev_right",
    "point": {
      "latitude": 52.8677532919,
      "longitude": 29.3478697454
    }
  },
  "fec417f0-bee9-46b4-9213-1e51b62d7aac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "fec417f0-bee9-46b4-9213-1e51b62d7aac",
      "kilometrage": 269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fec417f0-bee9-46b4-9213-1e51b62d7aac",
    "image": "name_of",
    "point": {
      "latitude": 53.6457932818,
      "longitude": 28.9316943853
    }
  },
  "fef3729c-d156-4ef1-90c0-7d8d3984ff40": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 252",
      "id": "fef3729c-d156-4ef1-90c0-7d8d3984ff40",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fef3729c-d156-4ef1-90c0-7d8d3984ff40",
    "image": "perev_left",
    "point": {
      "latitude": 52.9450945102,
      "longitude": 29.3784940534
    }
  },
  "ff77c9c7-0cfd-40f7-ac1a-b819aba5f31c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "ff77c9c7-0cfd-40f7-ac1a-b819aba5f31c",
      "kilometrage": 49,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff77c9c7-0cfd-40f7-ac1a-b819aba5f31c",
    "image": "perev_left",
    "point": {
      "latitude": 52.6239567832,
      "longitude": 29.8635032892
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

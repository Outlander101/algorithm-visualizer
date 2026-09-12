// Auto-generated city graphs
export interface CityNode {
  id: string;
  lat: number;
  lng: number;
  label: string;
}

export interface CityEdge {
  from: string;
  to: string;
  weight: number;
}

export interface CityGraph {
  id: string;
  name: string;
  center: [number, number];
  zoom: number;
  nodes: CityNode[];
  edges: CityEdge[];
}

export const CITY_GRAPHS: CityGraph[] = [
  {
    "id": "new_york",
    "name": "New York (Manhattan)",
    "center": [
      40.758,
      -73.9855
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 40.748000000000005,
        "lng": -74.0005,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 40.748000000000005,
        "lng": -73.9955,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 40.748000000000005,
        "lng": -73.9905,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 40.748000000000005,
        "lng": -73.9855,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 40.748000000000005,
        "lng": -73.9805,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 40.748000000000005,
        "lng": -73.9755,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 40.752,
        "lng": -74.0005,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 40.752,
        "lng": -73.9955,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 40.752,
        "lng": -73.9905,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 40.752,
        "lng": -73.9855,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 40.752,
        "lng": -73.9805,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 40.752,
        "lng": -73.9755,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 40.75600000000001,
        "lng": -74.0005,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 40.75600000000001,
        "lng": -73.9955,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 40.75600000000001,
        "lng": -73.9905,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 40.75600000000001,
        "lng": -73.9855,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 40.75600000000001,
        "lng": -73.9805,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 40.75600000000001,
        "lng": -73.9755,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 40.760000000000005,
        "lng": -74.0005,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 40.760000000000005,
        "lng": -73.9955,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 40.760000000000005,
        "lng": -73.9905,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 40.760000000000005,
        "lng": -73.9855,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 40.760000000000005,
        "lng": -73.9805,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 40.760000000000005,
        "lng": -73.9755,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 40.764,
        "lng": -74.0005,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 40.764,
        "lng": -73.9955,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 40.764,
        "lng": -73.9905,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 40.764,
        "lng": -73.9855,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 40.764,
        "lng": -73.9805,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 40.764,
        "lng": -73.9755,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_1",
        "weight": 421
      },
      {
        "from": "node_0",
        "to": "node_6",
        "weight": 445
      },
      {
        "from": "node_0",
        "to": "node_7",
        "weight": 613
      },
      {
        "from": "node_1",
        "to": "node_0",
        "weight": 421
      },
      {
        "from": "node_1",
        "to": "node_2",
        "weight": 421
      },
      {
        "from": "node_1",
        "to": "node_7",
        "weight": 445
      },
      {
        "from": "node_2",
        "to": "node_3",
        "weight": 421
      },
      {
        "from": "node_2",
        "to": "node_1",
        "weight": 421
      },
      {
        "from": "node_2",
        "to": "node_8",
        "weight": 445
      },
      {
        "from": "node_3",
        "to": "node_2",
        "weight": 421
      },
      {
        "from": "node_3",
        "to": "node_4",
        "weight": 421
      },
      {
        "from": "node_3",
        "to": "node_9",
        "weight": 445
      },
      {
        "from": "node_4",
        "to": "node_3",
        "weight": 421
      },
      {
        "from": "node_4",
        "to": "node_5",
        "weight": 421
      },
      {
        "from": "node_4",
        "to": "node_10",
        "weight": 445
      },
      {
        "from": "node_5",
        "to": "node_4",
        "weight": 421
      },
      {
        "from": "node_5",
        "to": "node_11",
        "weight": 445
      },
      {
        "from": "node_5",
        "to": "node_10",
        "weight": 613
      },
      {
        "from": "node_6",
        "to": "node_7",
        "weight": 421
      },
      {
        "from": "node_6",
        "to": "node_0",
        "weight": 445
      },
      {
        "from": "node_6",
        "to": "node_12",
        "weight": 445
      },
      {
        "from": "node_7",
        "to": "node_6",
        "weight": 421
      },
      {
        "from": "node_7",
        "to": "node_8",
        "weight": 421
      },
      {
        "from": "node_7",
        "to": "node_1",
        "weight": 445
      },
      {
        "from": "node_8",
        "to": "node_9",
        "weight": 421
      },
      {
        "from": "node_8",
        "to": "node_7",
        "weight": 421
      },
      {
        "from": "node_8",
        "to": "node_2",
        "weight": 445
      },
      {
        "from": "node_9",
        "to": "node_8",
        "weight": 421
      },
      {
        "from": "node_9",
        "to": "node_10",
        "weight": 421
      },
      {
        "from": "node_9",
        "to": "node_3",
        "weight": 445
      },
      {
        "from": "node_10",
        "to": "node_9",
        "weight": 421
      },
      {
        "from": "node_10",
        "to": "node_11",
        "weight": 421
      },
      {
        "from": "node_10",
        "to": "node_4",
        "weight": 445
      },
      {
        "from": "node_11",
        "to": "node_10",
        "weight": 421
      },
      {
        "from": "node_11",
        "to": "node_5",
        "weight": 445
      },
      {
        "from": "node_11",
        "to": "node_17",
        "weight": 445
      },
      {
        "from": "node_12",
        "to": "node_13",
        "weight": 421
      },
      {
        "from": "node_12",
        "to": "node_18",
        "weight": 445
      },
      {
        "from": "node_12",
        "to": "node_6",
        "weight": 445
      },
      {
        "from": "node_13",
        "to": "node_12",
        "weight": 421
      },
      {
        "from": "node_13",
        "to": "node_14",
        "weight": 421
      },
      {
        "from": "node_13",
        "to": "node_19",
        "weight": 445
      },
      {
        "from": "node_14",
        "to": "node_15",
        "weight": 421
      },
      {
        "from": "node_14",
        "to": "node_13",
        "weight": 421
      },
      {
        "from": "node_14",
        "to": "node_20",
        "weight": 445
      },
      {
        "from": "node_15",
        "to": "node_14",
        "weight": 421
      },
      {
        "from": "node_15",
        "to": "node_16",
        "weight": 421
      },
      {
        "from": "node_15",
        "to": "node_21",
        "weight": 445
      },
      {
        "from": "node_16",
        "to": "node_15",
        "weight": 421
      },
      {
        "from": "node_16",
        "to": "node_17",
        "weight": 421
      },
      {
        "from": "node_16",
        "to": "node_22",
        "weight": 445
      },
      {
        "from": "node_17",
        "to": "node_16",
        "weight": 421
      },
      {
        "from": "node_17",
        "to": "node_23",
        "weight": 445
      },
      {
        "from": "node_17",
        "to": "node_11",
        "weight": 445
      },
      {
        "from": "node_18",
        "to": "node_19",
        "weight": 421
      },
      {
        "from": "node_18",
        "to": "node_12",
        "weight": 445
      },
      {
        "from": "node_18",
        "to": "node_24",
        "weight": 445
      },
      {
        "from": "node_19",
        "to": "node_18",
        "weight": 421
      },
      {
        "from": "node_19",
        "to": "node_20",
        "weight": 421
      },
      {
        "from": "node_19",
        "to": "node_13",
        "weight": 445
      },
      {
        "from": "node_20",
        "to": "node_21",
        "weight": 421
      },
      {
        "from": "node_20",
        "to": "node_19",
        "weight": 421
      },
      {
        "from": "node_20",
        "to": "node_14",
        "weight": 445
      },
      {
        "from": "node_21",
        "to": "node_20",
        "weight": 421
      },
      {
        "from": "node_21",
        "to": "node_22",
        "weight": 421
      },
      {
        "from": "node_21",
        "to": "node_15",
        "weight": 445
      },
      {
        "from": "node_22",
        "to": "node_21",
        "weight": 421
      },
      {
        "from": "node_22",
        "to": "node_23",
        "weight": 421
      },
      {
        "from": "node_22",
        "to": "node_16",
        "weight": 445
      },
      {
        "from": "node_23",
        "to": "node_22",
        "weight": 421
      },
      {
        "from": "node_23",
        "to": "node_17",
        "weight": 445
      },
      {
        "from": "node_23",
        "to": "node_29",
        "weight": 445
      },
      {
        "from": "node_24",
        "to": "node_25",
        "weight": 421
      },
      {
        "from": "node_24",
        "to": "node_18",
        "weight": 445
      },
      {
        "from": "node_24",
        "to": "node_19",
        "weight": 613
      },
      {
        "from": "node_25",
        "to": "node_24",
        "weight": 421
      },
      {
        "from": "node_25",
        "to": "node_26",
        "weight": 421
      },
      {
        "from": "node_25",
        "to": "node_19",
        "weight": 445
      },
      {
        "from": "node_26",
        "to": "node_27",
        "weight": 421
      },
      {
        "from": "node_26",
        "to": "node_25",
        "weight": 421
      },
      {
        "from": "node_26",
        "to": "node_20",
        "weight": 445
      },
      {
        "from": "node_27",
        "to": "node_26",
        "weight": 421
      },
      {
        "from": "node_27",
        "to": "node_28",
        "weight": 421
      },
      {
        "from": "node_27",
        "to": "node_21",
        "weight": 445
      },
      {
        "from": "node_28",
        "to": "node_27",
        "weight": 421
      },
      {
        "from": "node_28",
        "to": "node_29",
        "weight": 421
      },
      {
        "from": "node_28",
        "to": "node_22",
        "weight": 445
      },
      {
        "from": "node_29",
        "to": "node_28",
        "weight": 421
      },
      {
        "from": "node_29",
        "to": "node_23",
        "weight": 445
      },
      {
        "from": "node_29",
        "to": "node_22",
        "weight": 613
      }
    ]
  },
  {
    "id": "london",
    "name": "London",
    "center": [
      51.5074,
      -0.1278
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 51.508198273758175,
        "lng": -0.12692561149594186,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 51.52019313198332,
        "lng": -0.11341734403376862,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 51.49309928865132,
        "lng": -0.13745853288223708,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 51.491563948434944,
        "lng": -0.13730335712931901,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 51.499612440277204,
        "lng": -0.11356063669382349,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 51.51421779338799,
        "lng": -0.12680797502807004,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 51.51151797472893,
        "lng": -0.12298651548532427,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 51.50360687162269,
        "lng": -0.13244838930307185,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 51.50979459250267,
        "lng": -0.12335992769768454,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 51.51108204227733,
        "lng": -0.13942720998990205,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 51.51119718477465,
        "lng": -0.10927189837205535,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 51.49763422597878,
        "lng": -0.141325175101113,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 51.49783888252547,
        "lng": -0.11894633949780732,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 51.49443564926216,
        "lng": -0.12552632477837938,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 51.512076691143704,
        "lng": -0.10920879574614456,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 51.499317484258874,
        "lng": -0.11431968476007628,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 51.49622787609036,
        "lng": -0.14039897702093476,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 51.49132270279817,
        "lng": -0.13222155948543626,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 51.50731008636401,
        "lng": -0.11390335077786182,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 51.500480721042685,
        "lng": -0.11837063408343146,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 51.49991060362795,
        "lng": -0.11707287938377778,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 51.50409099704384,
        "lng": -0.11618909644804551,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 51.513883812008,
        "lng": -0.12657010826504653,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 51.508542078564155,
        "lng": -0.12393140525564116,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 51.507052935121706,
        "lng": -0.11866911326222496,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 51.52176592719055,
        "lng": -0.12269775824372868,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 51.50626328307529,
        "lng": -0.12058645519161308,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 51.492345764868,
        "lng": -0.12322499063621316,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 51.510974942788074,
        "lng": -0.1268211893335085,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 51.51751489581682,
        "lng": -0.13447394592610298,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_23",
        "weight": 211
      },
      {
        "from": "node_0",
        "to": "node_8",
        "weight": 304
      },
      {
        "from": "node_0",
        "to": "node_28",
        "weight": 309
      },
      {
        "from": "node_1",
        "to": "node_25",
        "weight": 665
      },
      {
        "from": "node_1",
        "to": "node_14",
        "weight": 948
      },
      {
        "from": "node_1",
        "to": "node_10",
        "weight": 1041
      },
      {
        "from": "node_2",
        "to": "node_3",
        "weight": 171
      },
      {
        "from": "node_2",
        "to": "node_16",
        "weight": 403
      },
      {
        "from": "node_2",
        "to": "node_17",
        "weight": 413
      },
      {
        "from": "node_3",
        "to": "node_2",
        "weight": 171
      },
      {
        "from": "node_3",
        "to": "node_17",
        "weight": 353
      },
      {
        "from": "node_3",
        "to": "node_16",
        "weight": 561
      },
      {
        "from": "node_4",
        "to": "node_15",
        "weight": 62
      },
      {
        "from": "node_4",
        "to": "node_20",
        "weight": 245
      },
      {
        "from": "node_4",
        "to": "node_19",
        "weight": 347
      },
      {
        "from": "node_5",
        "to": "node_22",
        "weight": 41
      },
      {
        "from": "node_5",
        "to": "node_28",
        "weight": 361
      },
      {
        "from": "node_5",
        "to": "node_6",
        "weight": 400
      },
      {
        "from": "node_6",
        "to": "node_8",
        "weight": 193
      },
      {
        "from": "node_6",
        "to": "node_28",
        "weight": 272
      },
      {
        "from": "node_6",
        "to": "node_23",
        "weight": 337
      },
      {
        "from": "node_7",
        "to": "node_0",
        "weight": 638
      },
      {
        "from": "node_7",
        "to": "node_23",
        "weight": 805
      },
      {
        "from": "node_7",
        "to": "node_26",
        "weight": 873
      },
      {
        "from": "node_8",
        "to": "node_23",
        "weight": 145
      },
      {
        "from": "node_8",
        "to": "node_6",
        "weight": 193
      },
      {
        "from": "node_8",
        "to": "node_28",
        "weight": 273
      },
      {
        "from": "node_9",
        "to": "node_29",
        "weight": 793
      },
      {
        "from": "node_9",
        "to": "node_28",
        "weight": 872
      },
      {
        "from": "node_9",
        "to": "node_0",
        "weight": 923
      },
      {
        "from": "node_10",
        "to": "node_14",
        "weight": 98
      },
      {
        "from": "node_10",
        "to": "node_18",
        "weight": 538
      },
      {
        "from": "node_10",
        "to": "node_24",
        "weight": 797
      },
      {
        "from": "node_11",
        "to": "node_16",
        "weight": 169
      },
      {
        "from": "node_11",
        "to": "node_2",
        "weight": 571
      },
      {
        "from": "node_11",
        "to": "node_3",
        "weight": 730
      },
      {
        "from": "node_12",
        "to": "node_20",
        "weight": 264
      },
      {
        "from": "node_12",
        "to": "node_19",
        "weight": 296
      },
      {
        "from": "node_12",
        "to": "node_15",
        "weight": 360
      },
      {
        "from": "node_13",
        "to": "node_27",
        "weight": 282
      },
      {
        "from": "node_13",
        "to": "node_17",
        "weight": 579
      },
      {
        "from": "node_13",
        "to": "node_12",
        "weight": 592
      },
      {
        "from": "node_14",
        "to": "node_10",
        "weight": 98
      },
      {
        "from": "node_14",
        "to": "node_18",
        "weight": 622
      },
      {
        "from": "node_14",
        "to": "node_24",
        "weight": 861
      },
      {
        "from": "node_15",
        "to": "node_4",
        "weight": 62
      },
      {
        "from": "node_15",
        "to": "node_20",
        "weight": 202
      },
      {
        "from": "node_15",
        "to": "node_19",
        "weight": 309
      },
      {
        "from": "node_16",
        "to": "node_11",
        "weight": 169
      },
      {
        "from": "node_16",
        "to": "node_2",
        "weight": 403
      },
      {
        "from": "node_16",
        "to": "node_3",
        "weight": 561
      },
      {
        "from": "node_17",
        "to": "node_3",
        "weight": 353
      },
      {
        "from": "node_17",
        "to": "node_2",
        "weight": 413
      },
      {
        "from": "node_17",
        "to": "node_13",
        "weight": 579
      },
      {
        "from": "node_18",
        "to": "node_24",
        "weight": 331
      },
      {
        "from": "node_18",
        "to": "node_21",
        "weight": 391
      },
      {
        "from": "node_18",
        "to": "node_26",
        "weight": 477
      },
      {
        "from": "node_19",
        "to": "node_20",
        "weight": 110
      },
      {
        "from": "node_19",
        "to": "node_12",
        "weight": 296
      },
      {
        "from": "node_19",
        "to": "node_15",
        "weight": 309
      },
      {
        "from": "node_20",
        "to": "node_19",
        "weight": 110
      },
      {
        "from": "node_20",
        "to": "node_15",
        "weight": 202
      },
      {
        "from": "node_20",
        "to": "node_4",
        "weight": 245
      },
      {
        "from": "node_21",
        "to": "node_24",
        "weight": 371
      },
      {
        "from": "node_21",
        "to": "node_26",
        "weight": 389
      },
      {
        "from": "node_21",
        "to": "node_18",
        "weight": 391
      },
      {
        "from": "node_22",
        "to": "node_5",
        "weight": 41
      },
      {
        "from": "node_22",
        "to": "node_28",
        "weight": 324
      },
      {
        "from": "node_22",
        "to": "node_6",
        "weight": 362
      },
      {
        "from": "node_23",
        "to": "node_8",
        "weight": 145
      },
      {
        "from": "node_23",
        "to": "node_0",
        "weight": 211
      },
      {
        "from": "node_23",
        "to": "node_28",
        "weight": 336
      },
      {
        "from": "node_24",
        "to": "node_26",
        "weight": 159
      },
      {
        "from": "node_24",
        "to": "node_18",
        "weight": 331
      },
      {
        "from": "node_24",
        "to": "node_21",
        "weight": 371
      },
      {
        "from": "node_25",
        "to": "node_1",
        "weight": 665
      },
      {
        "from": "node_25",
        "to": "node_5",
        "weight": 886
      },
      {
        "from": "node_25",
        "to": "node_22",
        "weight": 916
      },
      {
        "from": "node_26",
        "to": "node_24",
        "weight": 159
      },
      {
        "from": "node_26",
        "to": "node_23",
        "weight": 343
      },
      {
        "from": "node_26",
        "to": "node_21",
        "weight": 389
      },
      {
        "from": "node_27",
        "to": "node_13",
        "weight": 282
      },
      {
        "from": "node_27",
        "to": "node_17",
        "weight": 633
      },
      {
        "from": "node_27",
        "to": "node_12",
        "weight": 679
      },
      {
        "from": "node_28",
        "to": "node_6",
        "weight": 272
      },
      {
        "from": "node_28",
        "to": "node_8",
        "weight": 273
      },
      {
        "from": "node_28",
        "to": "node_0",
        "weight": 309
      },
      {
        "from": "node_29",
        "to": "node_5",
        "weight": 645
      },
      {
        "from": "node_29",
        "to": "node_22",
        "weight": 680
      },
      {
        "from": "node_29",
        "to": "node_9",
        "weight": 793
      }
    ]
  },
  {
    "id": "tokyo",
    "name": "Tokyo",
    "center": [
      35.6762,
      139.6503
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 35.694250585518624,
        "lng": 139.6575778214902,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 35.68081075406714,
        "lng": 139.64058260439103,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 35.68150846124322,
        "lng": 139.64741224419632,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 35.678008758872394,
        "lng": 139.65628009847086,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 35.68877508491485,
        "lng": 139.6538795643475,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 35.660132558771735,
        "lng": 139.63982558967413,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 35.665533893536036,
        "lng": 139.65075388383445,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 35.68816547029969,
        "lng": 139.64544551595066,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 35.68818743302314,
        "lng": 139.65000454515965,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 35.6653802169694,
        "lng": 139.6340691853916,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 35.67592479932563,
        "lng": 139.64815452463557,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 35.68074880576247,
        "lng": 139.66861028461875,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 35.677252308667214,
        "lng": 139.65018443103236,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 35.674701155968485,
        "lng": 139.65749227302658,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 35.65786666363545,
        "lng": 139.65548371699344,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 35.66717684817175,
        "lng": 139.6582779395215,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 35.6657267939854,
        "lng": 139.65834467804305,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 35.68454388106822,
        "lng": 139.6398942692576,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 35.67582410837347,
        "lng": 139.64949715618187,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 35.66127630496803,
        "lng": 139.65404913603615,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 35.666651388060195,
        "lng": 139.6363640512174,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 35.679945302727475,
        "lng": 139.64970901845894,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 35.68112403390166,
        "lng": 139.64647662757187,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 35.68362225552667,
        "lng": 139.6418840211076,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 35.678345698942145,
        "lng": 139.64568736522492,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 35.66630415539906,
        "lng": 139.66070227737436,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 35.674655824021784,
        "lng": 139.6609339690117,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 35.68563065141497,
        "lng": 139.64432219755847,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 35.67960188373742,
        "lng": 139.65254660390016,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 35.67616291322805,
        "lng": 139.65124410912702,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_4",
        "weight": 694
      },
      {
        "from": "node_0",
        "to": "node_8",
        "weight": 960
      },
      {
        "from": "node_0",
        "to": "node_7",
        "weight": 1288
      },
      {
        "from": "node_1",
        "to": "node_23",
        "weight": 334
      },
      {
        "from": "node_1",
        "to": "node_17",
        "weight": 420
      },
      {
        "from": "node_1",
        "to": "node_22",
        "weight": 533
      },
      {
        "from": "node_2",
        "to": "node_22",
        "weight": 95
      },
      {
        "from": "node_2",
        "to": "node_21",
        "weight": 271
      },
      {
        "from": "node_2",
        "to": "node_24",
        "weight": 385
      },
      {
        "from": "node_3",
        "to": "node_28",
        "weight": 381
      },
      {
        "from": "node_3",
        "to": "node_13",
        "weight": 384
      },
      {
        "from": "node_3",
        "to": "node_29",
        "weight": 499
      },
      {
        "from": "node_4",
        "to": "node_8",
        "weight": 356
      },
      {
        "from": "node_4",
        "to": "node_0",
        "weight": 694
      },
      {
        "from": "node_4",
        "to": "node_7",
        "weight": 765
      },
      {
        "from": "node_5",
        "to": "node_9",
        "weight": 782
      },
      {
        "from": "node_5",
        "to": "node_20",
        "weight": 789
      },
      {
        "from": "node_5",
        "to": "node_6",
        "weight": 1156
      },
      {
        "from": "node_6",
        "to": "node_19",
        "weight": 559
      },
      {
        "from": "node_6",
        "to": "node_16",
        "weight": 686
      },
      {
        "from": "node_6",
        "to": "node_15",
        "weight": 704
      },
      {
        "from": "node_7",
        "to": "node_27",
        "weight": 300
      },
      {
        "from": "node_7",
        "to": "node_8",
        "weight": 412
      },
      {
        "from": "node_7",
        "to": "node_23",
        "weight": 599
      },
      {
        "from": "node_8",
        "to": "node_4",
        "weight": 356
      },
      {
        "from": "node_8",
        "to": "node_7",
        "weight": 412
      },
      {
        "from": "node_8",
        "to": "node_27",
        "weight": 587
      },
      {
        "from": "node_9",
        "to": "node_20",
        "weight": 251
      },
      {
        "from": "node_9",
        "to": "node_5",
        "weight": 782
      },
      {
        "from": "node_9",
        "to": "node_6",
        "weight": 1507
      },
      {
        "from": "node_10",
        "to": "node_18",
        "weight": 122
      },
      {
        "from": "node_10",
        "to": "node_12",
        "weight": 235
      },
      {
        "from": "node_10",
        "to": "node_29",
        "weight": 280
      },
      {
        "from": "node_11",
        "to": "node_26",
        "weight": 969
      },
      {
        "from": "node_11",
        "to": "node_3",
        "weight": 1155
      },
      {
        "from": "node_11",
        "to": "node_13",
        "weight": 1209
      },
      {
        "from": "node_12",
        "to": "node_29",
        "weight": 154
      },
      {
        "from": "node_12",
        "to": "node_18",
        "weight": 171
      },
      {
        "from": "node_12",
        "to": "node_10",
        "weight": 235
      },
      {
        "from": "node_13",
        "to": "node_26",
        "weight": 311
      },
      {
        "from": "node_13",
        "to": "node_3",
        "weight": 384
      },
      {
        "from": "node_13",
        "to": "node_29",
        "weight": 587
      },
      {
        "from": "node_14",
        "to": "node_19",
        "weight": 401
      },
      {
        "from": "node_14",
        "to": "node_16",
        "weight": 911
      },
      {
        "from": "node_14",
        "to": "node_6",
        "weight": 954
      },
      {
        "from": "node_15",
        "to": "node_16",
        "weight": 161
      },
      {
        "from": "node_15",
        "to": "node_25",
        "weight": 240
      },
      {
        "from": "node_15",
        "to": "node_6",
        "weight": 704
      },
      {
        "from": "node_16",
        "to": "node_15",
        "weight": 161
      },
      {
        "from": "node_16",
        "to": "node_25",
        "weight": 222
      },
      {
        "from": "node_16",
        "to": "node_19",
        "weight": 629
      },
      {
        "from": "node_17",
        "to": "node_23",
        "weight": 207
      },
      {
        "from": "node_17",
        "to": "node_27",
        "weight": 418
      },
      {
        "from": "node_17",
        "to": "node_1",
        "weight": 420
      },
      {
        "from": "node_18",
        "to": "node_10",
        "weight": 122
      },
      {
        "from": "node_18",
        "to": "node_29",
        "weight": 162
      },
      {
        "from": "node_18",
        "to": "node_12",
        "weight": 171
      },
      {
        "from": "node_19",
        "to": "node_14",
        "weight": 401
      },
      {
        "from": "node_19",
        "to": "node_6",
        "weight": 559
      },
      {
        "from": "node_19",
        "to": "node_16",
        "weight": 629
      },
      {
        "from": "node_20",
        "to": "node_9",
        "weight": 251
      },
      {
        "from": "node_20",
        "to": "node_5",
        "weight": 789
      },
      {
        "from": "node_20",
        "to": "node_6",
        "weight": 1306
      },
      {
        "from": "node_21",
        "to": "node_28",
        "weight": 259
      },
      {
        "from": "node_21",
        "to": "node_2",
        "weight": 271
      },
      {
        "from": "node_21",
        "to": "node_12",
        "weight": 303
      },
      {
        "from": "node_22",
        "to": "node_2",
        "weight": 95
      },
      {
        "from": "node_22",
        "to": "node_24",
        "weight": 317
      },
      {
        "from": "node_22",
        "to": "node_21",
        "weight": 320
      },
      {
        "from": "node_23",
        "to": "node_17",
        "weight": 207
      },
      {
        "from": "node_23",
        "to": "node_27",
        "weight": 314
      },
      {
        "from": "node_23",
        "to": "node_1",
        "weight": 334
      },
      {
        "from": "node_24",
        "to": "node_22",
        "weight": 317
      },
      {
        "from": "node_24",
        "to": "node_10",
        "weight": 349
      },
      {
        "from": "node_24",
        "to": "node_2",
        "weight": 385
      },
      {
        "from": "node_25",
        "to": "node_16",
        "weight": 222
      },
      {
        "from": "node_25",
        "to": "node_15",
        "weight": 240
      },
      {
        "from": "node_25",
        "to": "node_19",
        "weight": 821
      },
      {
        "from": "node_26",
        "to": "node_13",
        "weight": 311
      },
      {
        "from": "node_26",
        "to": "node_3",
        "weight": 562
      },
      {
        "from": "node_26",
        "to": "node_15",
        "weight": 866
      },
      {
        "from": "node_27",
        "to": "node_7",
        "weight": 300
      },
      {
        "from": "node_27",
        "to": "node_23",
        "weight": 314
      },
      {
        "from": "node_27",
        "to": "node_17",
        "weight": 418
      },
      {
        "from": "node_28",
        "to": "node_21",
        "weight": 259
      },
      {
        "from": "node_28",
        "to": "node_12",
        "weight": 337
      },
      {
        "from": "node_28",
        "to": "node_3",
        "weight": 381
      },
      {
        "from": "node_29",
        "to": "node_12",
        "weight": 154
      },
      {
        "from": "node_29",
        "to": "node_18",
        "weight": 162
      },
      {
        "from": "node_29",
        "to": "node_10",
        "weight": 280
      }
    ]
  },
  {
    "id": "san_francisco",
    "name": "San Francisco",
    "center": [
      37.7749,
      -122.4194
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 37.75600811542503,
        "lng": -122.42143734536835,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 37.79141871544777,
        "lng": -122.42481210531695,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 37.79078764488107,
        "lng": -122.41232455802476,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 37.77113272010406,
        "lng": -122.42194701121257,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 37.7705585419502,
        "lng": -122.42447114056742,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 37.772090791751495,
        "lng": -122.42554913700391,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 37.78039708733652,
        "lng": -122.41906121307078,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 37.76474425364714,
        "lng": -122.41867534643639,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 37.775464590190346,
        "lng": -122.42508768870074,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 37.76258897225552,
        "lng": -122.41322937257374,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 37.77095541232322,
        "lng": -122.42991142796362,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 37.77574293265151,
        "lng": -122.41761955944848,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 37.77943876045644,
        "lng": -122.40497330043307,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 37.77617888091037,
        "lng": -122.40937877196482,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 37.77648659866509,
        "lng": -122.43143157788013,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 37.775078369223436,
        "lng": -122.41933357627292,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 37.771234808154475,
        "lng": -122.42760450698164,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 37.77460562716573,
        "lng": -122.4233518350149,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 37.77919059065767,
        "lng": -122.41278727666598,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 37.758708843020656,
        "lng": -122.42108764330469,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 37.78368216991419,
        "lng": -122.40678533061183,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 37.77512799227873,
        "lng": -122.41944711238735,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 37.77946518003546,
        "lng": -122.42263105624389,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 37.77689502206544,
        "lng": -122.42483625012773,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 37.77007198598735,
        "lng": -122.43643130046632,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 37.78682674617437,
        "lng": -122.41918357295548,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 37.78155865963074,
        "lng": -122.42138023039796,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 37.78129395589373,
        "lng": -122.41178796011408,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 37.778005404574785,
        "lng": -122.42375159234868,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 37.774653858331696,
        "lng": -122.4075200570718,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_19",
        "weight": 302
      },
      {
        "from": "node_0",
        "to": "node_7",
        "weight": 1001
      },
      {
        "from": "node_0",
        "to": "node_9",
        "weight": 1028
      },
      {
        "from": "node_1",
        "to": "node_25",
        "weight": 711
      },
      {
        "from": "node_1",
        "to": "node_2",
        "weight": 1100
      },
      {
        "from": "node_1",
        "to": "node_26",
        "weight": 1137
      },
      {
        "from": "node_2",
        "to": "node_25",
        "weight": 747
      },
      {
        "from": "node_2",
        "to": "node_20",
        "weight": 928
      },
      {
        "from": "node_2",
        "to": "node_27",
        "weight": 1057
      },
      {
        "from": "node_3",
        "to": "node_4",
        "weight": 231
      },
      {
        "from": "node_3",
        "to": "node_5",
        "weight": 334
      },
      {
        "from": "node_3",
        "to": "node_17",
        "weight": 405
      },
      {
        "from": "node_4",
        "to": "node_5",
        "weight": 195
      },
      {
        "from": "node_4",
        "to": "node_3",
        "weight": 231
      },
      {
        "from": "node_4",
        "to": "node_16",
        "weight": 285
      },
      {
        "from": "node_5",
        "to": "node_4",
        "weight": 195
      },
      {
        "from": "node_5",
        "to": "node_16",
        "weight": 204
      },
      {
        "from": "node_5",
        "to": "node_3",
        "weight": 334
      },
      {
        "from": "node_6",
        "to": "node_26",
        "weight": 241
      },
      {
        "from": "node_6",
        "to": "node_22",
        "weight": 330
      },
      {
        "from": "node_6",
        "to": "node_28",
        "weight": 491
      },
      {
        "from": "node_7",
        "to": "node_9",
        "weight": 535
      },
      {
        "from": "node_7",
        "to": "node_19",
        "weight": 704
      },
      {
        "from": "node_7",
        "to": "node_3",
        "weight": 766
      },
      {
        "from": "node_8",
        "to": "node_23",
        "weight": 161
      },
      {
        "from": "node_8",
        "to": "node_17",
        "weight": 180
      },
      {
        "from": "node_8",
        "to": "node_28",
        "weight": 306
      },
      {
        "from": "node_9",
        "to": "node_7",
        "weight": 535
      },
      {
        "from": "node_9",
        "to": "node_19",
        "weight": 814
      },
      {
        "from": "node_9",
        "to": "node_0",
        "weight": 1028
      },
      {
        "from": "node_10",
        "to": "node_16",
        "weight": 205
      },
      {
        "from": "node_10",
        "to": "node_5",
        "weight": 404
      },
      {
        "from": "node_10",
        "to": "node_4",
        "weight": 480
      },
      {
        "from": "node_11",
        "to": "node_15",
        "weight": 168
      },
      {
        "from": "node_11",
        "to": "node_21",
        "weight": 175
      },
      {
        "from": "node_11",
        "to": "node_17",
        "weight": 519
      },
      {
        "from": "node_12",
        "to": "node_20",
        "weight": 498
      },
      {
        "from": "node_12",
        "to": "node_13",
        "weight": 530
      },
      {
        "from": "node_12",
        "to": "node_29",
        "weight": 577
      },
      {
        "from": "node_13",
        "to": "node_29",
        "weight": 235
      },
      {
        "from": "node_13",
        "to": "node_18",
        "weight": 449
      },
      {
        "from": "node_13",
        "to": "node_12",
        "weight": 530
      },
      {
        "from": "node_14",
        "to": "node_8",
        "weight": 569
      },
      {
        "from": "node_14",
        "to": "node_23",
        "weight": 581
      },
      {
        "from": "node_14",
        "to": "node_10",
        "weight": 629
      },
      {
        "from": "node_15",
        "to": "node_21",
        "weight": 11
      },
      {
        "from": "node_15",
        "to": "node_11",
        "weight": 168
      },
      {
        "from": "node_15",
        "to": "node_17",
        "weight": 357
      },
      {
        "from": "node_16",
        "to": "node_5",
        "weight": 204
      },
      {
        "from": "node_16",
        "to": "node_10",
        "weight": 205
      },
      {
        "from": "node_16",
        "to": "node_4",
        "weight": 285
      },
      {
        "from": "node_17",
        "to": "node_8",
        "weight": 180
      },
      {
        "from": "node_17",
        "to": "node_23",
        "weight": 286
      },
      {
        "from": "node_17",
        "to": "node_5",
        "weight": 340
      },
      {
        "from": "node_18",
        "to": "node_27",
        "weight": 250
      },
      {
        "from": "node_18",
        "to": "node_13",
        "weight": 449
      },
      {
        "from": "node_18",
        "to": "node_6",
        "weight": 567
      },
      {
        "from": "node_19",
        "to": "node_0",
        "weight": 302
      },
      {
        "from": "node_19",
        "to": "node_7",
        "weight": 704
      },
      {
        "from": "node_19",
        "to": "node_9",
        "weight": 814
      },
      {
        "from": "node_20",
        "to": "node_12",
        "weight": 498
      },
      {
        "from": "node_20",
        "to": "node_27",
        "weight": 514
      },
      {
        "from": "node_20",
        "to": "node_18",
        "weight": 726
      },
      {
        "from": "node_21",
        "to": "node_15",
        "weight": 11
      },
      {
        "from": "node_21",
        "to": "node_11",
        "weight": 175
      },
      {
        "from": "node_21",
        "to": "node_17",
        "weight": 348
      },
      {
        "from": "node_22",
        "to": "node_28",
        "weight": 190
      },
      {
        "from": "node_22",
        "to": "node_26",
        "weight": 257
      },
      {
        "from": "node_22",
        "to": "node_6",
        "weight": 330
      },
      {
        "from": "node_23",
        "to": "node_28",
        "weight": 156
      },
      {
        "from": "node_23",
        "to": "node_8",
        "weight": 161
      },
      {
        "from": "node_23",
        "to": "node_17",
        "weight": 286
      },
      {
        "from": "node_24",
        "to": "node_10",
        "weight": 581
      },
      {
        "from": "node_24",
        "to": "node_16",
        "weight": 787
      },
      {
        "from": "node_24",
        "to": "node_14",
        "weight": 838
      },
      {
        "from": "node_25",
        "to": "node_26",
        "weight": 617
      },
      {
        "from": "node_25",
        "to": "node_1",
        "weight": 711
      },
      {
        "from": "node_25",
        "to": "node_6",
        "weight": 715
      },
      {
        "from": "node_26",
        "to": "node_6",
        "weight": 241
      },
      {
        "from": "node_26",
        "to": "node_22",
        "weight": 257
      },
      {
        "from": "node_26",
        "to": "node_28",
        "weight": 447
      },
      {
        "from": "node_27",
        "to": "node_18",
        "weight": 250
      },
      {
        "from": "node_27",
        "to": "node_20",
        "weight": 514
      },
      {
        "from": "node_27",
        "to": "node_13",
        "weight": 607
      },
      {
        "from": "node_28",
        "to": "node_23",
        "weight": 156
      },
      {
        "from": "node_28",
        "to": "node_22",
        "weight": 190
      },
      {
        "from": "node_28",
        "to": "node_8",
        "weight": 306
      },
      {
        "from": "node_29",
        "to": "node_13",
        "weight": 235
      },
      {
        "from": "node_29",
        "to": "node_12",
        "weight": 577
      },
      {
        "from": "node_29",
        "to": "node_18",
        "weight": 685
      }
    ]
  },
  {
    "id": "venice",
    "name": "Venice",
    "center": [
      45.4408,
      12.3155
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 45.436090630402894,
        "lng": 12.313657647552285,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 45.44182155827285,
        "lng": 12.313875772144309,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 45.43841355153173,
        "lng": 12.324699762077685,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 45.458252125191805,
        "lng": 12.322390373493535,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 45.434882983334106,
        "lng": 12.313427507848631,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 45.43912396665768,
        "lng": 12.322942419285983,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 45.450949561363515,
        "lng": 12.307847778685725,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 45.43964685776438,
        "lng": 12.32415945914141,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 45.43784162528026,
        "lng": 12.309801498844255,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 45.42913839518273,
        "lng": 12.304657621999308,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 45.44277605129041,
        "lng": 12.316241603060789,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 45.45279683372623,
        "lng": 12.32473137215273,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 45.44974282191013,
        "lng": 12.332585543973094,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 45.44546718628681,
        "lng": 12.320248923076809,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 45.428967669572415,
        "lng": 12.305699391632459,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 45.45728834895354,
        "lng": 12.319913010060272,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 45.43871850456244,
        "lng": 12.320917808902763,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 45.43630730564931,
        "lng": 12.309350261374368,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 45.43279113762805,
        "lng": 12.305009273886935,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 45.43427646870783,
        "lng": 12.322749980422044,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 45.457295497723,
        "lng": 12.30929320075958,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 45.45158737808795,
        "lng": 12.314170503898834,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 45.42237553980273,
        "lng": 12.311973978476138,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 45.442059948207415,
        "lng": 12.296737210576408,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 45.45130075867336,
        "lng": 12.307171586734217,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 45.44601291103131,
        "lng": 12.311252774574502,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 45.44519007924944,
        "lng": 12.310573812428254,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 45.444988054946315,
        "lng": 12.327800110393442,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 45.44154885318836,
        "lng": 12.315131853414922,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 45.44532576368456,
        "lng": 12.305347877686092,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_4",
        "weight": 135
      },
      {
        "from": "node_0",
        "to": "node_17",
        "weight": 337
      },
      {
        "from": "node_0",
        "to": "node_8",
        "weight": 358
      },
      {
        "from": "node_1",
        "to": "node_28",
        "weight": 103
      },
      {
        "from": "node_1",
        "to": "node_10",
        "weight": 213
      },
      {
        "from": "node_1",
        "to": "node_26",
        "weight": 455
      },
      {
        "from": "node_2",
        "to": "node_7",
        "weight": 143
      },
      {
        "from": "node_2",
        "to": "node_5",
        "weight": 158
      },
      {
        "from": "node_2",
        "to": "node_16",
        "weight": 297
      },
      {
        "from": "node_3",
        "to": "node_15",
        "weight": 221
      },
      {
        "from": "node_3",
        "to": "node_11",
        "weight": 633
      },
      {
        "from": "node_3",
        "to": "node_21",
        "weight": 980
      },
      {
        "from": "node_4",
        "to": "node_0",
        "weight": 135
      },
      {
        "from": "node_4",
        "to": "node_17",
        "weight": 355
      },
      {
        "from": "node_4",
        "to": "node_8",
        "weight": 434
      },
      {
        "from": "node_5",
        "to": "node_7",
        "weight": 111
      },
      {
        "from": "node_5",
        "to": "node_2",
        "weight": 158
      },
      {
        "from": "node_5",
        "to": "node_16",
        "weight": 164
      },
      {
        "from": "node_6",
        "to": "node_24",
        "weight": 66
      },
      {
        "from": "node_6",
        "to": "node_21",
        "weight": 498
      },
      {
        "from": "node_6",
        "to": "node_25",
        "weight": 610
      },
      {
        "from": "node_7",
        "to": "node_5",
        "weight": 111
      },
      {
        "from": "node_7",
        "to": "node_2",
        "weight": 143
      },
      {
        "from": "node_7",
        "to": "node_16",
        "weight": 273
      },
      {
        "from": "node_8",
        "to": "node_17",
        "weight": 174
      },
      {
        "from": "node_8",
        "to": "node_0",
        "weight": 358
      },
      {
        "from": "node_8",
        "to": "node_4",
        "weight": 434
      },
      {
        "from": "node_9",
        "to": "node_14",
        "weight": 83
      },
      {
        "from": "node_9",
        "to": "node_18",
        "weight": 407
      },
      {
        "from": "node_9",
        "to": "node_17",
        "weight": 877
      },
      {
        "from": "node_10",
        "to": "node_28",
        "weight": 162
      },
      {
        "from": "node_10",
        "to": "node_1",
        "weight": 213
      },
      {
        "from": "node_10",
        "to": "node_13",
        "weight": 433
      },
      {
        "from": "node_11",
        "to": "node_15",
        "weight": 625
      },
      {
        "from": "node_11",
        "to": "node_3",
        "weight": 633
      },
      {
        "from": "node_11",
        "to": "node_12",
        "weight": 700
      },
      {
        "from": "node_12",
        "to": "node_27",
        "weight": 647
      },
      {
        "from": "node_12",
        "to": "node_11",
        "weight": 700
      },
      {
        "from": "node_12",
        "to": "node_13",
        "weight": 1073
      },
      {
        "from": "node_13",
        "to": "node_10",
        "weight": 433
      },
      {
        "from": "node_13",
        "to": "node_28",
        "weight": 591
      },
      {
        "from": "node_13",
        "to": "node_27",
        "weight": 591
      },
      {
        "from": "node_14",
        "to": "node_9",
        "weight": 83
      },
      {
        "from": "node_14",
        "to": "node_18",
        "weight": 429
      },
      {
        "from": "node_14",
        "to": "node_17",
        "weight": 864
      },
      {
        "from": "node_15",
        "to": "node_3",
        "weight": 221
      },
      {
        "from": "node_15",
        "to": "node_11",
        "weight": 625
      },
      {
        "from": "node_15",
        "to": "node_21",
        "weight": 776
      },
      {
        "from": "node_16",
        "to": "node_5",
        "weight": 164
      },
      {
        "from": "node_16",
        "to": "node_7",
        "weight": 273
      },
      {
        "from": "node_16",
        "to": "node_2",
        "weight": 297
      },
      {
        "from": "node_17",
        "to": "node_8",
        "weight": 174
      },
      {
        "from": "node_17",
        "to": "node_0",
        "weight": 337
      },
      {
        "from": "node_17",
        "to": "node_4",
        "weight": 355
      },
      {
        "from": "node_18",
        "to": "node_9",
        "weight": 407
      },
      {
        "from": "node_18",
        "to": "node_14",
        "weight": 429
      },
      {
        "from": "node_18",
        "to": "node_17",
        "weight": 517
      },
      {
        "from": "node_19",
        "to": "node_2",
        "weight": 485
      },
      {
        "from": "node_19",
        "to": "node_16",
        "weight": 514
      },
      {
        "from": "node_19",
        "to": "node_5",
        "weight": 539
      },
      {
        "from": "node_20",
        "to": "node_24",
        "weight": 687
      },
      {
        "from": "node_20",
        "to": "node_6",
        "weight": 715
      },
      {
        "from": "node_20",
        "to": "node_21",
        "weight": 740
      },
      {
        "from": "node_21",
        "to": "node_6",
        "weight": 498
      },
      {
        "from": "node_21",
        "to": "node_24",
        "weight": 547
      },
      {
        "from": "node_21",
        "to": "node_25",
        "weight": 660
      },
      {
        "from": "node_22",
        "to": "node_14",
        "weight": 882
      },
      {
        "from": "node_22",
        "to": "node_9",
        "weight": 944
      },
      {
        "from": "node_22",
        "to": "node_18",
        "weight": 1279
      },
      {
        "from": "node_23",
        "to": "node_29",
        "weight": 764
      },
      {
        "from": "node_23",
        "to": "node_8",
        "weight": 1122
      },
      {
        "from": "node_23",
        "to": "node_26",
        "weight": 1134
      },
      {
        "from": "node_24",
        "to": "node_6",
        "weight": 66
      },
      {
        "from": "node_24",
        "to": "node_21",
        "weight": 547
      },
      {
        "from": "node_24",
        "to": "node_25",
        "weight": 669
      },
      {
        "from": "node_25",
        "to": "node_26",
        "weight": 106
      },
      {
        "from": "node_25",
        "to": "node_29",
        "weight": 467
      },
      {
        "from": "node_25",
        "to": "node_1",
        "weight": 509
      },
      {
        "from": "node_26",
        "to": "node_25",
        "weight": 106
      },
      {
        "from": "node_26",
        "to": "node_29",
        "weight": 408
      },
      {
        "from": "node_26",
        "to": "node_1",
        "weight": 455
      },
      {
        "from": "node_27",
        "to": "node_13",
        "weight": 591
      },
      {
        "from": "node_27",
        "to": "node_12",
        "weight": 647
      },
      {
        "from": "node_27",
        "to": "node_7",
        "weight": 658
      },
      {
        "from": "node_28",
        "to": "node_1",
        "weight": 103
      },
      {
        "from": "node_28",
        "to": "node_10",
        "weight": 162
      },
      {
        "from": "node_28",
        "to": "node_26",
        "weight": 539
      },
      {
        "from": "node_29",
        "to": "node_26",
        "weight": 408
      },
      {
        "from": "node_29",
        "to": "node_25",
        "weight": 467
      },
      {
        "from": "node_29",
        "to": "node_6",
        "weight": 655
      }
    ]
  },
  {
    "id": "paris",
    "name": "Paris",
    "center": [
      48.8566,
      2.3522
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 48.8616,
        "lng": 2.3522,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 48.86013553390593,
        "lng": 2.3571497474683056,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 48.8566,
        "lng": 2.3592,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 48.85306446609407,
        "lng": 2.3571497474683056,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 48.8516,
        "lng": 2.3522,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 48.85306446609407,
        "lng": 2.347250252531694,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 48.8566,
        "lng": 2.3451999999999997,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 48.86013553390593,
        "lng": 2.347250252531694,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 48.8666,
        "lng": 2.3522,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 48.863671067811865,
        "lng": 2.3620994949366114,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 48.8566,
        "lng": 2.3661999999999996,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 48.849528932188136,
        "lng": 2.3620994949366114,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 48.8466,
        "lng": 2.3522,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 48.849528932188136,
        "lng": 2.3423005050633883,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 48.8566,
        "lng": 2.3382,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 48.863671067811865,
        "lng": 2.3423005050633883,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 48.8716,
        "lng": 2.3522,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 48.8672066017178,
        "lng": 2.367049242404917,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 48.8566,
        "lng": 2.3731999999999998,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 48.845993398282204,
        "lng": 2.367049242404917,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 48.8416,
        "lng": 2.3522,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 48.845993398282204,
        "lng": 2.3373507575950825,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 48.8566,
        "lng": 2.3312,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 48.8672066017178,
        "lng": 2.3373507575950825,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 48.8766,
        "lng": 2.3522,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 48.87074213562373,
        "lng": 2.371998989873223,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 48.8566,
        "lng": 2.3802,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 48.84245786437627,
        "lng": 2.371998989873223,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 48.8366,
        "lng": 2.3522,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 48.84245786437627,
        "lng": 2.3324010101267767,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_1",
        "weight": 397
      },
      {
        "from": "node_0",
        "to": "node_7",
        "weight": 397
      },
      {
        "from": "node_0",
        "to": "node_8",
        "weight": 556
      },
      {
        "from": "node_1",
        "to": "node_0",
        "weight": 397
      },
      {
        "from": "node_1",
        "to": "node_2",
        "weight": 421
      },
      {
        "from": "node_1",
        "to": "node_9",
        "weight": 534
      },
      {
        "from": "node_2",
        "to": "node_1",
        "weight": 421
      },
      {
        "from": "node_2",
        "to": "node_3",
        "weight": 421
      },
      {
        "from": "node_2",
        "to": "node_10",
        "weight": 512
      },
      {
        "from": "node_3",
        "to": "node_4",
        "weight": 397
      },
      {
        "from": "node_3",
        "to": "node_2",
        "weight": 421
      },
      {
        "from": "node_3",
        "to": "node_11",
        "weight": 535
      },
      {
        "from": "node_4",
        "to": "node_3",
        "weight": 397
      },
      {
        "from": "node_4",
        "to": "node_5",
        "weight": 397
      },
      {
        "from": "node_4",
        "to": "node_12",
        "weight": 556
      },
      {
        "from": "node_5",
        "to": "node_4",
        "weight": 397
      },
      {
        "from": "node_5",
        "to": "node_6",
        "weight": 421
      },
      {
        "from": "node_5",
        "to": "node_13",
        "weight": 535
      },
      {
        "from": "node_6",
        "to": "node_7",
        "weight": 421
      },
      {
        "from": "node_6",
        "to": "node_5",
        "weight": 421
      },
      {
        "from": "node_6",
        "to": "node_14",
        "weight": 512
      },
      {
        "from": "node_7",
        "to": "node_0",
        "weight": 397
      },
      {
        "from": "node_7",
        "to": "node_6",
        "weight": 421
      },
      {
        "from": "node_7",
        "to": "node_15",
        "weight": 534
      },
      {
        "from": "node_8",
        "to": "node_0",
        "weight": 556
      },
      {
        "from": "node_8",
        "to": "node_16",
        "weight": 556
      },
      {
        "from": "node_8",
        "to": "node_9",
        "weight": 794
      },
      {
        "from": "node_9",
        "to": "node_17",
        "weight": 534
      },
      {
        "from": "node_9",
        "to": "node_1",
        "weight": 534
      },
      {
        "from": "node_9",
        "to": "node_0",
        "weight": 760
      },
      {
        "from": "node_10",
        "to": "node_2",
        "weight": 512
      },
      {
        "from": "node_10",
        "to": "node_18",
        "weight": 512
      },
      {
        "from": "node_10",
        "to": "node_1",
        "weight": 770
      },
      {
        "from": "node_11",
        "to": "node_3",
        "weight": 535
      },
      {
        "from": "node_11",
        "to": "node_19",
        "weight": 535
      },
      {
        "from": "node_11",
        "to": "node_4",
        "weight": 760
      },
      {
        "from": "node_12",
        "to": "node_4",
        "weight": 556
      },
      {
        "from": "node_12",
        "to": "node_20",
        "weight": 556
      },
      {
        "from": "node_12",
        "to": "node_11",
        "weight": 794
      },
      {
        "from": "node_13",
        "to": "node_5",
        "weight": 535
      },
      {
        "from": "node_13",
        "to": "node_21",
        "weight": 535
      },
      {
        "from": "node_13",
        "to": "node_4",
        "weight": 760
      },
      {
        "from": "node_14",
        "to": "node_6",
        "weight": 512
      },
      {
        "from": "node_14",
        "to": "node_22",
        "weight": 512
      },
      {
        "from": "node_14",
        "to": "node_7",
        "weight": 770
      },
      {
        "from": "node_15",
        "to": "node_23",
        "weight": 534
      },
      {
        "from": "node_15",
        "to": "node_7",
        "weight": 534
      },
      {
        "from": "node_15",
        "to": "node_0",
        "weight": 760
      },
      {
        "from": "node_16",
        "to": "node_8",
        "weight": 556
      },
      {
        "from": "node_16",
        "to": "node_24",
        "weight": 556
      },
      {
        "from": "node_16",
        "to": "node_0",
        "weight": 1112
      },
      {
        "from": "node_17",
        "to": "node_25",
        "weight": 534
      },
      {
        "from": "node_17",
        "to": "node_9",
        "weight": 534
      },
      {
        "from": "node_17",
        "to": "node_1",
        "weight": 1069
      },
      {
        "from": "node_18",
        "to": "node_10",
        "weight": 512
      },
      {
        "from": "node_18",
        "to": "node_26",
        "weight": 512
      },
      {
        "from": "node_18",
        "to": "node_2",
        "weight": 1024
      },
      {
        "from": "node_19",
        "to": "node_11",
        "weight": 535
      },
      {
        "from": "node_19",
        "to": "node_27",
        "weight": 535
      },
      {
        "from": "node_19",
        "to": "node_3",
        "weight": 1069
      },
      {
        "from": "node_20",
        "to": "node_12",
        "weight": 556
      },
      {
        "from": "node_20",
        "to": "node_28",
        "weight": 556
      },
      {
        "from": "node_20",
        "to": "node_4",
        "weight": 1112
      },
      {
        "from": "node_21",
        "to": "node_13",
        "weight": 535
      },
      {
        "from": "node_21",
        "to": "node_29",
        "weight": 535
      },
      {
        "from": "node_21",
        "to": "node_5",
        "weight": 1069
      },
      {
        "from": "node_22",
        "to": "node_14",
        "weight": 512
      },
      {
        "from": "node_22",
        "to": "node_6",
        "weight": 1024
      },
      {
        "from": "node_22",
        "to": "node_15",
        "weight": 1130
      },
      {
        "from": "node_23",
        "to": "node_15",
        "weight": 534
      },
      {
        "from": "node_23",
        "to": "node_7",
        "weight": 1069
      },
      {
        "from": "node_23",
        "to": "node_8",
        "weight": 1088
      },
      {
        "from": "node_24",
        "to": "node_16",
        "weight": 556
      },
      {
        "from": "node_24",
        "to": "node_8",
        "weight": 1112
      },
      {
        "from": "node_24",
        "to": "node_17",
        "weight": 1507
      },
      {
        "from": "node_25",
        "to": "node_17",
        "weight": 534
      },
      {
        "from": "node_25",
        "to": "node_9",
        "weight": 1069
      },
      {
        "from": "node_25",
        "to": "node_16",
        "weight": 1451
      },
      {
        "from": "node_26",
        "to": "node_18",
        "weight": 512
      },
      {
        "from": "node_26",
        "to": "node_10",
        "weight": 1024
      },
      {
        "from": "node_26",
        "to": "node_17",
        "weight": 1522
      },
      {
        "from": "node_27",
        "to": "node_19",
        "weight": 535
      },
      {
        "from": "node_27",
        "to": "node_11",
        "weight": 1069
      },
      {
        "from": "node_27",
        "to": "node_20",
        "weight": 1452
      },
      {
        "from": "node_28",
        "to": "node_20",
        "weight": 556
      },
      {
        "from": "node_28",
        "to": "node_12",
        "weight": 1112
      },
      {
        "from": "node_28",
        "to": "node_19",
        "weight": 1507
      },
      {
        "from": "node_29",
        "to": "node_21",
        "weight": 535
      },
      {
        "from": "node_29",
        "to": "node_13",
        "weight": 1069
      },
      {
        "from": "node_29",
        "to": "node_20",
        "weight": 1452
      }
    ]
  },
  {
    "id": "dubai",
    "name": "Dubai",
    "center": [
      25.2048,
      55.2708
    ],
    "zoom": 14,
    "nodes": [
      {
        "id": "node_0",
        "lat": 25.204171581145292,
        "lng": 55.26725638369761,
        "label": "Point 0"
      },
      {
        "id": "node_1",
        "lat": 25.20623789017712,
        "lng": 55.270010640605435,
        "label": "Point 1"
      },
      {
        "id": "node_2",
        "lat": 25.205331453991374,
        "lng": 55.26721904338953,
        "label": "Point 2"
      },
      {
        "id": "node_3",
        "lat": 25.20499560154492,
        "lng": 55.27296217437133,
        "label": "Point 3"
      },
      {
        "id": "node_4",
        "lat": 25.190971997523,
        "lng": 55.269042377881284,
        "label": "Point 4"
      },
      {
        "id": "node_5",
        "lat": 25.21055450683935,
        "lng": 55.270052796693285,
        "label": "Point 5"
      },
      {
        "id": "node_6",
        "lat": 25.19076045070029,
        "lng": 55.264861933057844,
        "label": "Point 6"
      },
      {
        "id": "node_7",
        "lat": 25.2170044539746,
        "lng": 55.28030392230123,
        "label": "Point 7"
      },
      {
        "id": "node_8",
        "lat": 25.20625772107829,
        "lng": 55.27075198162781,
        "label": "Point 8"
      },
      {
        "id": "node_9",
        "lat": 25.212167273559672,
        "lng": 55.28344485869717,
        "label": "Point 9"
      },
      {
        "id": "node_10",
        "lat": 25.209771959980422,
        "lng": 55.26408332445228,
        "label": "Point 10"
      },
      {
        "id": "node_11",
        "lat": 25.203282289855004,
        "lng": 55.2650585704724,
        "label": "Point 11"
      },
      {
        "id": "node_12",
        "lat": 25.209134035605583,
        "lng": 55.258275210304696,
        "label": "Point 12"
      },
      {
        "id": "node_13",
        "lat": 25.196004798269076,
        "lng": 55.283906807401415,
        "label": "Point 13"
      },
      {
        "id": "node_14",
        "lat": 25.19845873580627,
        "lng": 55.27791706012001,
        "label": "Point 14"
      },
      {
        "id": "node_15",
        "lat": 25.215264007617893,
        "lng": 55.28564012850963,
        "label": "Point 15"
      },
      {
        "id": "node_16",
        "lat": 25.1955486917137,
        "lng": 55.27338789687329,
        "label": "Point 16"
      },
      {
        "id": "node_17",
        "lat": 25.199215066764744,
        "lng": 55.2691482167914,
        "label": "Point 17"
      },
      {
        "id": "node_18",
        "lat": 25.20290502933379,
        "lng": 55.27305536184487,
        "label": "Point 18"
      },
      {
        "id": "node_19",
        "lat": 25.205980947500503,
        "lng": 55.26718539349343,
        "label": "Point 19"
      },
      {
        "id": "node_20",
        "lat": 25.20697467786251,
        "lng": 55.274519187033846,
        "label": "Point 20"
      },
      {
        "id": "node_21",
        "lat": 25.203590201845508,
        "lng": 55.28670132158656,
        "label": "Point 21"
      },
      {
        "id": "node_22",
        "lat": 25.197428003565058,
        "lng": 55.27747760708181,
        "label": "Point 22"
      },
      {
        "id": "node_23",
        "lat": 25.20655243782744,
        "lng": 55.275144116932765,
        "label": "Point 23"
      },
      {
        "id": "node_24",
        "lat": 25.210121933857142,
        "lng": 55.267828868212845,
        "label": "Point 24"
      },
      {
        "id": "node_25",
        "lat": 25.22150822301438,
        "lng": 55.27279528158765,
        "label": "Point 25"
      },
      {
        "id": "node_26",
        "lat": 25.193157132723808,
        "lng": 55.28488521816347,
        "label": "Point 26"
      },
      {
        "id": "node_27",
        "lat": 25.207110701097324,
        "lng": 55.27597153143602,
        "label": "Point 27"
      },
      {
        "id": "node_28",
        "lat": 25.202861098492985,
        "lng": 55.27717965553305,
        "label": "Point 28"
      },
      {
        "id": "node_29",
        "lat": 25.20666692773299,
        "lng": 55.28444664047344,
        "label": "Point 29"
      }
    ],
    "edges": [
      {
        "from": "node_0",
        "to": "node_2",
        "weight": 129
      },
      {
        "from": "node_0",
        "to": "node_19",
        "weight": 201
      },
      {
        "from": "node_0",
        "to": "node_11",
        "weight": 242
      },
      {
        "from": "node_1",
        "to": "node_8",
        "weight": 75
      },
      {
        "from": "node_1",
        "to": "node_19",
        "weight": 286
      },
      {
        "from": "node_1",
        "to": "node_2",
        "weight": 298
      },
      {
        "from": "node_2",
        "to": "node_19",
        "weight": 72
      },
      {
        "from": "node_2",
        "to": "node_0",
        "weight": 129
      },
      {
        "from": "node_2",
        "to": "node_1",
        "weight": 298
      },
      {
        "from": "node_3",
        "to": "node_18",
        "weight": 233
      },
      {
        "from": "node_3",
        "to": "node_8",
        "weight": 263
      },
      {
        "from": "node_3",
        "to": "node_20",
        "weight": 270
      },
      {
        "from": "node_4",
        "to": "node_6",
        "weight": 421
      },
      {
        "from": "node_4",
        "to": "node_16",
        "weight": 671
      },
      {
        "from": "node_4",
        "to": "node_17",
        "weight": 917
      },
      {
        "from": "node_5",
        "to": "node_24",
        "weight": 229
      },
      {
        "from": "node_5",
        "to": "node_1",
        "weight": 480
      },
      {
        "from": "node_5",
        "to": "node_8",
        "weight": 483
      },
      {
        "from": "node_6",
        "to": "node_4",
        "weight": 421
      },
      {
        "from": "node_6",
        "to": "node_16",
        "weight": 1010
      },
      {
        "from": "node_6",
        "to": "node_17",
        "weight": 1034
      },
      {
        "from": "node_7",
        "to": "node_15",
        "weight": 571
      },
      {
        "from": "node_7",
        "to": "node_9",
        "weight": 624
      },
      {
        "from": "node_7",
        "to": "node_25",
        "weight": 906
      },
      {
        "from": "node_8",
        "to": "node_1",
        "weight": 75
      },
      {
        "from": "node_8",
        "to": "node_3",
        "weight": 263
      },
      {
        "from": "node_8",
        "to": "node_19",
        "weight": 360
      },
      {
        "from": "node_9",
        "to": "node_15",
        "weight": 409
      },
      {
        "from": "node_9",
        "to": "node_29",
        "weight": 620
      },
      {
        "from": "node_9",
        "to": "node_7",
        "weight": 624
      },
      {
        "from": "node_10",
        "to": "node_24",
        "weight": 379
      },
      {
        "from": "node_10",
        "to": "node_19",
        "weight": 524
      },
      {
        "from": "node_10",
        "to": "node_2",
        "weight": 586
      },
      {
        "from": "node_11",
        "to": "node_0",
        "weight": 242
      },
      {
        "from": "node_11",
        "to": "node_2",
        "weight": 315
      },
      {
        "from": "node_11",
        "to": "node_19",
        "weight": 369
      },
      {
        "from": "node_12",
        "to": "node_10",
        "weight": 589
      },
      {
        "from": "node_12",
        "to": "node_11",
        "weight": 943
      },
      {
        "from": "node_12",
        "to": "node_19",
        "weight": 963
      },
      {
        "from": "node_13",
        "to": "node_26",
        "weight": 332
      },
      {
        "from": "node_13",
        "to": "node_14",
        "weight": 662
      },
      {
        "from": "node_13",
        "to": "node_22",
        "weight": 666
      },
      {
        "from": "node_14",
        "to": "node_22",
        "weight": 123
      },
      {
        "from": "node_14",
        "to": "node_28",
        "weight": 495
      },
      {
        "from": "node_14",
        "to": "node_16",
        "weight": 559
      },
      {
        "from": "node_15",
        "to": "node_9",
        "weight": 409
      },
      {
        "from": "node_15",
        "to": "node_7",
        "weight": 571
      },
      {
        "from": "node_15",
        "to": "node_29",
        "weight": 963
      },
      {
        "from": "node_16",
        "to": "node_22",
        "weight": 462
      },
      {
        "from": "node_16",
        "to": "node_14",
        "weight": 559
      },
      {
        "from": "node_16",
        "to": "node_17",
        "weight": 590
      },
      {
        "from": "node_17",
        "to": "node_18",
        "weight": 568
      },
      {
        "from": "node_17",
        "to": "node_0",
        "weight": 583
      },
      {
        "from": "node_17",
        "to": "node_16",
        "weight": 590
      },
      {
        "from": "node_18",
        "to": "node_3",
        "weight": 233
      },
      {
        "from": "node_18",
        "to": "node_28",
        "weight": 415
      },
      {
        "from": "node_18",
        "to": "node_8",
        "weight": 439
      },
      {
        "from": "node_19",
        "to": "node_2",
        "weight": 72
      },
      {
        "from": "node_19",
        "to": "node_0",
        "weight": 201
      },
      {
        "from": "node_19",
        "to": "node_1",
        "weight": 286
      },
      {
        "from": "node_20",
        "to": "node_23",
        "weight": 78
      },
      {
        "from": "node_20",
        "to": "node_27",
        "weight": 147
      },
      {
        "from": "node_20",
        "to": "node_3",
        "weight": 270
      },
      {
        "from": "node_21",
        "to": "node_29",
        "weight": 410
      },
      {
        "from": "node_21",
        "to": "node_13",
        "weight": 889
      },
      {
        "from": "node_21",
        "to": "node_28",
        "weight": 961
      },
      {
        "from": "node_22",
        "to": "node_14",
        "weight": 123
      },
      {
        "from": "node_22",
        "to": "node_16",
        "weight": 462
      },
      {
        "from": "node_22",
        "to": "node_28",
        "weight": 605
      },
      {
        "from": "node_23",
        "to": "node_20",
        "weight": 78
      },
      {
        "from": "node_23",
        "to": "node_27",
        "weight": 104
      },
      {
        "from": "node_23",
        "to": "node_3",
        "weight": 280
      },
      {
        "from": "node_24",
        "to": "node_5",
        "weight": 229
      },
      {
        "from": "node_24",
        "to": "node_10",
        "weight": 379
      },
      {
        "from": "node_24",
        "to": "node_19",
        "weight": 465
      },
      {
        "from": "node_25",
        "to": "node_7",
        "weight": 906
      },
      {
        "from": "node_25",
        "to": "node_5",
        "weight": 1249
      },
      {
        "from": "node_25",
        "to": "node_24",
        "weight": 1361
      },
      {
        "from": "node_26",
        "to": "node_13",
        "weight": 332
      },
      {
        "from": "node_26",
        "to": "node_22",
        "weight": 884
      },
      {
        "from": "node_26",
        "to": "node_14",
        "weight": 916
      },
      {
        "from": "node_27",
        "to": "node_23",
        "weight": 104
      },
      {
        "from": "node_27",
        "to": "node_20",
        "weight": 147
      },
      {
        "from": "node_27",
        "to": "node_3",
        "weight": 383
      },
      {
        "from": "node_28",
        "to": "node_18",
        "weight": 415
      },
      {
        "from": "node_28",
        "to": "node_23",
        "weight": 459
      },
      {
        "from": "node_28",
        "to": "node_3",
        "weight": 486
      },
      {
        "from": "node_29",
        "to": "node_21",
        "weight": 410
      },
      {
        "from": "node_29",
        "to": "node_9",
        "weight": 620
      },
      {
        "from": "node_29",
        "to": "node_28",
        "weight": 845
      }
    ]
  }
];

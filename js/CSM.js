document.write('<script src="./js/CSM_funciton.js"></script>');

let csmSet = {
  chart:[
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],
  pop:[
    "#c93a3f",
    "#65ace4",
    "#fff001",
    "#56a764",
    "#9460a0",
    "#de9610",
    "#cc528b",
    "#0074bf",
    "#f2cf01",
    "#a0c238",
    "#d06d8c",
    "#d16b16",
  ],
  cute:[
    "#d685b0",
    "#a5d1f4",
    "#fff353",
    "#dbe159",
    "#c4a6ca",
    "#eabf4c",
    "#e2b2c0",
    "#7fc2ef",
    "#f9e697",
    "#b3d3ac",
    "#eac7cd",
    "#e4ad6d",
  ],
  dynamic:[
    "#b80117",
    "#222584",
    "#edc600",
    "#00904a",
    "#6d1782",
    "#d16b16",
    "#261e1c",
    "#c30068",
    "#0168b3",
    "#b88b26",
    "#a0c238",
    "#8f253b",
  ],
  gorgeous:[
    "#ab045c",
    "#0f5ca0",
    "#d5a417",
    "#d4c91f",
    "#7d0f80",
    "#c1541c",
    "#391d2b",
    "#a03c44",
    "#018a9a",
    "#b08829",
    "#d0b98d",
    "#546474",
  ],
  casual:[
    "#d5848b",
    "#7b9ad0",
    "#f8e352",
    "#c8d627",
    "#ae8dbc",
    "#e5ab47",
    "#e1cea3",
    "#66b7ec",
    "#c08e47",
    "#c3cfa9",
    "#51a1a2",
    "#b1d7e4",
  ],
  psychedelic:[
    "#b80e3b",
    "#0178bc",
    "#eee800",
    "#009b85",
    "#b7007c",
    "#bf5116",
    "#d685b0",
    "#382284",
    "#e2c80f",
    "#c4c829",
    "#95007e",
    "#009dc6",
  ],
  brightCarefree:[
    "#cd5638",
    "#00a5e7",
    "#fff001",
    "#a0c238",
    "#a563a0",
    "#d78114",
    "#d685b0",
    "#0168b3",
    "#f2cf01",
    "#00984b",
    "#cb5393",
    "#6bb6bb",
  ],
  maerchen:[
    "#dd9dbf",
    "#95bfe7",
    "#f7f06e",
    "#c7ddae",
    "#a199c8",
    "#d5a87f",
    "#f2dae8",
    "#aabade",
    "#edef9c",
    "#9bcad0",
    "#cca9ca",
    "#faede5",
  ],
  heavy:[
    "#872226",
    "#244765",
    "#bf7220",
    "#1a653c",
    "#5e2a58",
    "#814523",
    "#998c69",
    "#000000",
    "#5c002f",
    "#5f556e",
    "#84762f",
    "#6a6a68",
  ],
  stimulating:[
    "#c60019",
    "#1d4293",
    "#fff001",
    "#00984b",
    "#7d0f80",
    "#dc9610",
    "#d685b0",
    "#019fe6",
    "#dbdf19",
    "#a0c238",
    "#c2007b",
    "#261e1c",
  ],
  street:[
    "#c50030",
    "#0080c9",
    "#c8d627",
    "#5e3032",
    "#d16b16",
    "#c2007b",
    "#211917",
    "#44aeea",
    "#c8d627",
    "#816945",
    "#33476a",
    "#9193a0",
  ],
  transparentCool:[
    "#f2dae8",
    "#b0d7f4",
    "#f7f06e",
    "#c8d627",
    "#c4a6ca",
    "#44aeea",
    "#bcccd9",
    "#e4f0fc",
    "#eef0b1",
    "#85beab",
    "#c0cbe9",
    "#6490cd",
  ],
  elegant:[
    "#ae8dbc",
    "#82c0cd",
    "#e5d57d",
    "#6a9176",
    "#a04e90",
    "#dbbc86",
    "#e3b3cd",
    "#834e62",
    "#7f7eb8",
    "#c4c829",
    "#afc7a7",
    "#d6ddf0",
  ],
  juicy:[
    "#cd5638",
    "#6bb6bb",
    "#f8e133",
    "#70b062",
    "#a979ad",
    "#e3ab30",
    "#dd9dbf",
    "#c8d85b",
    "#9acce3",
    "#f7f39c",
    "#399548",
    "#dbdf19",
  ],
  warm:[
    "#d8836e",
    "#c59f22",
    "#f8e469",
    "#d6d11d",
    "#a6658d",
    "#dd9b9d",
    "#eac287",
    "#e4aa01",
    "#8d4f42",
    "#ebcc00",
    "#cbb586",
    "#f2d8bf",
  ],
  healingSoft:[
    "#dd9b9d",
    "#b2d6d4",
    "#f8e469",
    "#d9de84",
    "#e1d4e6",
    "#e7e0aa",
    "#e3be87",
    "#edef9c",
    "#9ac29f",
    "#f5dfa6",
    "#ebeddf",
    "#e4bd60",
  ],
  gentleman:[
    "#934e61",
    "#4d639f",
    "#7e8639",
    "#7e9895",
    "#dfe0d8",
    "#a76535",
    "#77aad7",
    "#1d695f",
    "#848a96",
    "#844f30",
    "#23466e",
    "#9aadbe",
  ],
  lady:[
    "#bf5346",
    "#614983",
    "#de9610",
    "#949b34",
    "#7b0050",
    "#a8006d",
    "#bd8683",
    "#bea620",
    "#cba777",
    "#be87a6",
    "#a26c54",
    "#e1d0b4",
  ],
  boy:[
    "#66b7ec",
    "#f2cf01",
    "#6bb6bb",
    "#b8b2d6",
    "#d5dbcf",
    "#0168b3",
    "#88b83e",
    "#afd0ef",
    "#5e4694",
    "#7a8bc3",
    "#e8e6f3",
    "#c6e2f8",
  ],
  girl:[
    "#d06da3",
    "#82c0cd",
    "#f8e352",
    "#c8d627",
    "#845d9e",
    "#cb6c58",
    "#e3b3cd",
    "#c73576",
    "#c2d3ed",
    "#e4ab5a",
    "#c6e0d5",
    "#be91bc",
  ],
  smart:[
    "#4d639f",
    "#ebc175",
    "#babea5",
    "#bda5bb",
    "#d6d680",
    "#356c92",
    "#a67b2d",
    "#c9ced1",
    "#3a614f",
    "#dfd4be",
    "#2c4b79",
    "#92a1a6",
  ],
  fresh:[
    "#eac39a",
    "#44aeea",
    "#ebe9ae",
    "#71b174",
    "#b2b6db",
    "#e4c4db",
    "#0080c9",
    "#dbe585",
    "#6db5a9",
    "#7da8db",
    "#b2d6d4",
    "#b4cb32",
  ],
  urban:[
    "#c0542d",
    "#004679",
    "#d6d680",
    "#499475",
    "#a44682",
    "#bac1c7",
    "#dfd4be",
    "#487ca3",
    "#58656e",
    "#9599b2",
    "#8eb4d9",
    "#6c5776",
  ],
  natural:[
    "#ba7d8c",
    "#9cb1c2",
    "#b8ac60",
    "#81a47a",
    "#c2b5d1",
    "#f9ebd1",
    "#ba9648",
    "#8b342a",
    "#797c85",
    "#87643e",
    "#acb130",
    "#acae98",
  ],
  spring:[
    "#d7847e",
    "#afd0ef",
    "#f8e352",
    "#c9d744",
    "#cbacbe",
    "#ebc061",
    "#dd9cb4",
    "#b2d6d4",
    "#eeea55",
    "#b3ce5b",
    "#b8b2d6",
    "#f2dae8",
  ],
  summer:[
    "#c60019",
    "#019fe6",
    "#fff001",
    "#0074bf",
    "#88b83e",
    "#c83955",
    "#174e9e",
    "#d16b16",
    "#68b8dd",
    "#f2cf01",
    "#019c96",
    "#b0d7f4",
  ],
  autumn:[
    "#ae3c22",
    "#bba929",
    "#875f3b",
    "#7e8639",
    "#902342",
    "#c59f22",
    "#a49e2e",
    "#786b4b",
    "#ba7c6f",
    "#eabd00",
    "#9f832f",
    "#ac5238",
  ],
  winter:[
    "#6591b6",
    "#b38da4",
    "#5f897b",
    "#7f7073",
    "#623d82",
    "#eff3f6",
    "#858aa0",
    "#42629f",
    "#674c51",
    "#c2d3dd",
    "#4f616f",
    "#a5aad4",
  ],
  modernJapan:[
    "#c3003a",
    "#787cac",
    "#d5a02e",
    "#918d43",
    "#6f2757",
    "#c1541c",
    "#e2b2c0",
    "#3a546b",
    "#918d43",
    "#604439",
    "#afc9ca",
    "#565d63",
  ],
  european:[
    "#b71232",
    "#1d4293",
    "#e4aa01",
    "#6aa43e",
    "#ad438e",
    "#e8e2be",
    "#6276b5",
    "#bf541c",
    "#b0bf30",
    "#25a4b7",
    "#d7832d",
    "#b2bfe1",
  ],
  scandinavian:[
    "#bf545e",
    "#149bdf",
    "#eabd00",
    "#86b070",
    "#c97a2b",
    "#a5a79a",
    "#b59a4d",
    "#665e51",
    "#dbdf19",
    "#945141",
    "#e6d9b9",
    "#9abca4",
  ],
  ethnic:[
    "#b80040",
    "#1d518b",
    "#dab100",
    "#95a578",
    "#7f1f69",
    "#b1623b",
    "#4eacb8",
    "#b9b327",
    "#946761",
    "#af508a",
    "#147472",
    "#c8b568",
  ],
}
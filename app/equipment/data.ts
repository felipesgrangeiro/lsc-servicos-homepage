export type EquipmentSpec = {
  label: string;
  value: string;
  /** lucide: weight | gauge | box */
  icon: "weight" | "gauge" | "box";
};

export type EquipmentSlide = {
  id: string;
  category: string;
  name: string;
  image: string;
  imagePosition?: string;
  href: string;
  specs: EquipmentSpec[];
};

/**
 * Slides da vitrine de frota. Inclua novas fotos em /public/images/
 * e acrescente um objeto neste array — o carrossel passa a exibir sozinho.
 */
export const equipmentSlides: EquipmentSlide[] = [
  {
    id: "john-deere-350g",
    category: "Escavadeira hidráulica",
    name: "John Deere 350G",
    image: "/images/equipment-john-deere-official.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "30.300 kg" },
      { icon: "gauge", label: "Potência bruta", value: "213 hp" },
      { icon: "box", label: "Capacidade da caçamba", value: "2,1 m³" },
    ],
  },
  {
    id: "pa-carregadeira-644k",
    category: "Pá carregadeira",
    name: "John Deere 644K",
    image: "/images/equipment-pa-carregadeira-644k.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "18.333 kg" },
      { icon: "gauge", label: "Potência líquida", value: "167 hp" },
      { icon: "box", label: "Capacidade da caçamba", value: "3,2 m³" },
    ],
  },
  {
    id: "trator-d6t",
    category: "Trator de esteiras",
    name: "Caterpillar D6T",
    image: "/images/equipment-trator-d6t.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "20.449 kg" },
      { icon: "gauge", label: "Potência líquida", value: "149 kW" },
      { icon: "box", label: "Capacidade da lâmina", value: "3,8 m³" },
    ],
  },
  {
    id: "trator-850j",
    category: "Trator de esteiras",
    name: "John Deere 850J",
    image: "/images/equipment-trator-850j.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "22.750 kg" },
      { icon: "gauge", label: "Potência líquida", value: "153 kW" },
      { icon: "box", label: "Capacidade da lâmina", value: "4,49 m³" },
    ],
  },
  {
    id: "escavadeira-922d",
    category: "Escavadeira hidráulica",
    name: "LiuGong 922D",
    image: "/images/equipment-escavadeira-922d.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "22.000 kg" },
      { icon: "gauge", label: "Potência líquida", value: "159 hp" },
      { icon: "box", label: "Profundidade máxima", value: "6,62 m" },
    ],
  },
  {
    id: "escavadeira-325dl",
    category: "Escavadeira hidráulica",
    name: "Caterpillar 325DL",
    image: "/images/equipment-escavadeira-325dl.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "29.240 kg" },
      { icon: "gauge", label: "Potência líquida", value: "202 hp" },
      { icon: "box", label: "Profundidade máxima", value: "7,69 m" },
    ],
  },
  {
    id: "escavadeira-350g",
    category: "Escavadeira hidráulica",
    name: "John Deere 350G",
    image: "/images/equipment-escavadeira-350g.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "34.728 kg" },
      { icon: "gauge", label: "Potência líquida", value: "271 hp" },
      { icon: "box", label: "Profundidade máxima", value: "8,18 m" },
    ],
  },
  {
    id: "motoniveladora-12k",
    category: "Motoniveladora",
    name: "Caterpillar 12K",
    image: "/images/equipment-motoniveladora-12k.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "13.832 kg" },
      { icon: "gauge", label: "Potência líquida", value: "125 hp" },
      { icon: "box", label: "Largura da lâmina", value: "3,66 m" },
    ],
  },
  {
    id: "motoniveladora-12m",
    category: "Motoniveladora",
    name: "Caterpillar 12M",
    image: "/images/equipment-motoniveladora-12m.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "18.400 kg" },
      { icon: "gauge", label: "Potência líquida", value: "136 kW" },
      { icon: "box", label: "Largura da lâmina", value: "3,7 m" },
    ],
  },
  {
    id: "pa-carregadeira-wa200-5",
    category: "Pá carregadeira",
    name: "Komatsu WA200-5",
    image: "/images/equipment-pa-carregadeira-wa200-5.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "10.330 kg" },
      { icon: "gauge", label: "Potência líquida", value: "127 hp" },
      { icon: "box", label: "Largura da caçamba", value: "2.535 mm" },
    ],
  },
  {
    id: "pa-carregadeira-hl757",
    category: "Pá carregadeira",
    name: "Hyundai HL 757",
    image: "/images/equipment-pa-carregadeira-hl757.jpg",
    imagePosition: "center center",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "17.900 kg" },
      { icon: "gauge", label: "Potência líquida", value: "205 hp" },
      { icon: "box", label: "Capacidade da caçamba", value: "3 m³" },
    ],
  },
  {
    id: "rolo-cs533",
    category: "Rolo compactador",
    name: "Caterpillar CS-533",
    image: "/images/equipment-rolo-cs533.jpg",
    imagePosition: "center 58%",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "11.530 kg" },
      { icon: "gauge", label: "Potência líquida", value: "130 hp" },
      { icon: "box", label: "Largura de compactação", value: "1.549 mm" },
    ],
  },
  {
    id: "rolo-clg612h",
    category: "Rolo compactador",
    name: "LiuGong CLG612H",
    image: "/images/equipment-rolo-clg612h.jpg",
    imagePosition: "center 55%",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "12.300 kg" },
      { icon: "gauge", label: "Potência líquida", value: "141 hp" },
      { icon: "box", label: "Largura de compactação", value: "2.130 mm" },
    ],
  },
  {
    id: "mini-carregadeira-l220",
    category: "Mini carregadeira",
    name: "New Holland L220",
    image: "/images/equipment-mini-carregadeira-l220.jpg",
    imagePosition: "center 55%",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Peso operacional", value: "2.935 kg" },
      { icon: "gauge", label: "Potência líquida", value: "57 hp" },
      { icon: "box", label: "Capacidade da caçamba", value: "1.814 kg" },
    ],
  },
  {
    id: "carreta-pw5000",
    category: "Carreta de perfuração",
    name: "PW 5000",
    image: "/images/equipment-carreta-pw5000.jpg",
    imagePosition: "center 50%",
    href: "#contato",
    specs: [
      { icon: "box", label: "Fabricante", value: "PW Hidropneumática" },
      { icon: "gauge", label: "Modelo", value: "PW 5000" },
      { icon: "weight", label: "Atividades", value: "Perfuração em rocha e solo" },
    ],
  },
  {
    id: "compressor-xas770",
    category: "Compressor de ar portátil",
    name: "Atlas Copco XAS 770",
    image: "/images/equipment-compressor-xas770.jpg",
    imagePosition: "center 55%",
    href: "#contato",
    specs: [
      { icon: "box", label: "Fabricante", value: "Atlas Copco" },
      { icon: "gauge", label: "Modelo", value: "XAS 770" },
      { icon: "weight", label: "Tipo", value: "Portátil" },
    ],
  },
  {
    id: "rompedor-mb17000",
    category: "Rompedor hidráulico",
    name: "Atlas Copco MB 17000",
    image: "/images/equipment-rompedor-mb17000.jpg",
    imagePosition: "center 48%",
    href: "#contato",
    specs: [
      { icon: "box", label: "Fabricante", value: "Atlas Copco" },
      { icon: "gauge", label: "Modelo", value: "MB 17000" },
      { icon: "weight", label: "Tipo", value: "Hidráulico" },
    ],
  },
  {
    id: "caminhao-basculante",
    category: "Caminhão basculante",
    name: "Truck 6x4",
    image: "/images/equipment-caminhao-basculante.jpg",
    imagePosition: "center 55%",
    href: "#contato",
    specs: [
      { icon: "weight", label: "Carga útil", value: "20 t" },
      { icon: "gauge", label: "Configuração", value: "Truck 6x4" },
      { icon: "box", label: "Báscula", value: "Vedada para finos" },
    ],
  },
  {
    id: "gerador-ges350",
    category: "Gerador",
    name: "Caterpillar GES 350",
    image: "/images/equipment-gerador-ges350.jpg",
    imagePosition: "center 50%",
    href: "#contato",
    specs: [
      { icon: "box", label: "Fabricante", value: "Caterpillar" },
      { icon: "gauge", label: "Modelo", value: "GES 350" },
      { icon: "weight", label: "Tipo", value: "Grupo gerador" },
    ],
  },
];

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
];

export type GroupCompany = {
  name: string;
  area: string;
  description: string;
  phone: string;
  address: string;
  logo: string;
  logoAlt: string;
  accent: string;
  href: string;
  /** Marca a propria LSC, destacada no grid */
  current?: boolean;
};

// Dados e logos normalizados vindos do site do Grupo TB, para as duas
// paginas apresentarem as mesmas marcas com a mesma informacao.
export const groupCompanies: GroupCompany[] = [
  {
    name: "TB Transportes",
    area: "Transporte e logística",
    description: "Transporte rodoviário de cargas, operações dedicadas e soluções logísticas.",
    phone: "(85) 99407-7495",
    address: "Rua Antero da Costa Gadelha, 10 — Genipabu, Caucaia/CE",
    logo: "/images/grupo/logo-tb-transportes-white.png",
    logoAlt: "TB Transportes",
    accent: "#168cff",
    href: "https://www.tbtransportes.srv.br/",
  },
  {
    name: "TMC Terminais",
    area: "Infraestrutura logística",
    description: "Armazenagem, depot e apoio estratégico para grandes operações.",
    phone: "(85) 99937-0569",
    address: "Rod. CE-422, s/n, km 2,7 — Sítio Salgado, Caucaia/CE",
    logo: "/images/grupo/logo-tmc-white.png",
    logoAlt: "TMC — Terminal Multimodal de Cargas",
    accent: "#e12435",
    href: "https://tmcterminais.com.br/",
  },
  {
    name: "LSC Serviços",
    area: "Equipamentos e operações",
    description: "Equipamentos pesados, britagem e serviços especializados para obras e operações de grande porte.",
    phone: "(85) 99148-1961",
    address: "Rua Antero da Costa Gadelha, 10-A — Genipabu, Caucaia/CE",
    logo: "/images/grupo/logo-lsc-white.png",
    logoAlt: "LSC — Locação de Equipamentos e Serviços",
    accent: "#ffb51b",
    href: "https://lscservicos.com.br/",
    current: true,
  },
  {
    name: "Truck Center",
    area: "Suporte para frotas",
    description: "Manutenção, abastecimento e suporte operacional para frotas pesadas.",
    phone: "(85) 99191-9266",
    address: "Rodovia CE-155, s/n, km 11 — Pecém, São Gonçalo do Amarante/CE",
    logo: "/images/grupo/logo-truck-center-white.png",
    logoAlt: "Truck Center Pecém",
    accent: "#4ac25f",
    href: "https://grupotbhub.com.br/tcp-truck-center/",
  },
];

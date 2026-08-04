export type Solution = {
  slug: string;
  /** Titulo do card, com quebra de linha manual */
  title: string;
  /** Titulo em linha unica, para a pagina de detalhe e o <title> */
  name: string;
  /** Linha de apoio exibida no card da home */
  text: string;
  image: string;
  /** Paragrafos da pagina de detalhe */
  body: string[];
  /** Frentes de atuacao, derivadas do que a LSC ja declara oferecer */
  services: string[];
};

export const solutions: Solution[] = [
  {
    slug: "portos-e-terminais",
    title: "Portos e\nterminais",
    name: "Portos e terminais",
    text: "Infraestrutura e apoio operacional para movimentação de cargas e materiais.",
    image: "/images/sector-ports-v2.jpg",
    body: [
      "Terminal parado custa caro. A operação portuária trabalha contra o relógio do navio, e cada hora de atraso na movimentação de carga se acumula em toda a cadeia — do pátio ao embarque.",
      "É um ambiente que exige equipamento disponível em turno contínuo, com manutenção que não pode esperar. A LSC atua com frota própria justamente por isso: o controle do equipamento é o que sustenta a disponibilidade.",
      "A integração com as demais empresas do Grupo TB permite acompanhar a carga além do pátio, unindo movimentação, transporte e armazenagem numa mesma operação.",
    ],
    services: [
      "Movimentação de cargas e materiais",
      "Apoio operacional a terminais",
      "Locação de equipamentos de grande porte",
      "Operação em turno contínuo",
    ],
  },
  {
    slug: "industrias",
    title: "Indústrias",
    name: "Indústrias",
    text: "Soluções completas para pátios industriais, usinas e plantas de produção.",
    image: "/images/sector-industry-v3.jpg",
    body: [
      "Dentro de uma planta industrial, o serviço de apoio precisa se encaixar na rotina da produção — e não o contrário. Pátio, movimentação interna e paradas programadas seguem o calendário da fábrica.",
      "Isso muda o tipo de exigência: menos volume bruto, mais precisão e previsibilidade. Equipamento no lugar certo, na janela combinada, com equipe que conhece o procedimento de segurança do cliente.",
      "É o ambiente onde a diferença entre um fornecedor e um parceiro operacional fica mais visível, porque o erro não atrasa só o serviço: atrasa a linha de produção.",
    ],
    services: [
      "Apoio a pátios industriais",
      "Suporte a usinas e plantas de produção",
      "Movimentação interna de materiais",
      "Apoio a paradas programadas",
    ],
  },
  {
    slug: "mineracao-e-britagem",
    title: "Mineração e\nbritagem",
    name: "Mineração e britagem",
    text: "Britagem, classificação e produção de agregados com alta performance.",
    image: "/images/sector-mining-v2.jpg",
    body: [
      "Produção de agregado é medida em metros cúbicos por hora, e todo o resto da obra depende desse ritmo. Britador parado significa frente de serviço parada quilômetros adiante.",
      "A operação envolve extração, britagem, classificação e carregamento funcionando como uma linha só. Cada etapa dimensionada para não estrangular a seguinte.",
      "É uma atividade dura com o equipamento: abrasão, poeira e carga constante. Frota própria e estrutura de manutenção deixam de ser detalhe e passam a ser a condição para manter a produção de pé.",
    ],
    services: [
      "Britagem",
      "Classificação de material",
      "Produção de agregados",
      "Carregamento e movimentação",
    ],
  },
  {
    slug: "obras-e-infraestrutura",
    title: "Obras e\ninfraestrutura",
    name: "Obras e infraestrutura",
    text: "Terraplenagem, pavimentação e apoio para obras de grande escala.",
    image: "/images/sector-infrastructure-v2.jpg",
    body: [
      "Obra linear não tem canteiro fixo: ela anda. Adutora, ferrovia e rodovia avançam quilômetro a quilômetro, e a frente de serviço muda de lugar junto com o traçado.",
      "Isso exige mobilização constante — equipamento, equipe e material chegando onde a obra chegou, no dia em que ela chega. Planejar essa cadência é boa parte do trabalho.",
      "É nesse tipo de operação que a LSC atua nas grandes obras de infraestrutura do Nordeste, de transposições e adutoras a ferrovia e terraplenagem de grande escala.",
    ],
    services: [
      "Terraplenagem",
      "Pavimentação",
      "Drenagem e apoio a obras lineares",
      "Mobilização de frentes de serviço",
    ],
  },
];

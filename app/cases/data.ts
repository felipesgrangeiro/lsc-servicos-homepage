export type CaseFact = { label: string; value: string };

export type CaseItem = {
  slug: string;
  tag: string;
  name: string;
  place: string;
  /** Linha de apoio exibida no card da home */
  detail: string;
  image: string;
  /** Paragrafos da pagina de detalhe */
  body: string[];
  facts: CaseFact[];
};

// Numeros conferidos em ago/2026 em fonte oficial (Governo do CE, DNOCS,
// MIDR/Agencia Brasil). Ao atualizar valores, checar a fonte de novo.
export const cases: CaseItem[] = [
  {
    slug: "eixao-das-aguas",
    tag: "Adutora",
    name: "Eixão das Águas",
    place: "Castanhão à Grande Fortaleza — CE",
    detail: "255 km de adutora que tiraram a Grande Fortaleza da dependência da chuva.",
    image: "/images/case-eixao.jpg",
    body: [
      "Fortaleza cresceu mais rápido do que a água que chegava até ela. O Eixão das Águas resolveu isso puxando o abastecimento de onde ele existe: 255 km entre o Açude Castanhão, no vale do Jaguaribe, e a Região Metropolitana, passando pelo Complexo Industrial e Portuário do Pecém.",
      "Não é um canal simples. São estações de bombeamento, canais, aquedutos, sifões e túneis operando em conjunto para integrar duas bacias e atender cerca de 4 milhões de habitantes, além dos distritos industriais de Maracanaú, Horizonte e Pacajus.",
      "O traçado atravessa caatinga, rocha, rodovias e propriedades rurais ao longo de todo o percurso — cada trecho é uma frente de obra própria, com escavação, revestimento e movimentação de material em terreno que muda a cada quilômetro.",
      "Em dezembro de 2024, o Novo PAC destinou R$ 1,2 bilhão à duplicação do Eixão, que vai ampliar a vazão do Castanhão para a Grande Fortaleza.",
    ],
    facts: [
      { label: "Extensão", value: "255 km" },
      { label: "População atendida", value: "~4 milhões" },
      { label: "Duplicação", value: "R$ 1,2 bilhão (Novo PAC, 2024)" },
      { label: "Origem e destino", value: "Castanhão → RM de Fortaleza e Pecém" },
    ],
  },
  {
    slug: "transposicao-do-sao-francisco",
    tag: "Transposição",
    name: "Transposição do São Francisco",
    place: "PE · CE · PB · RN",
    detail: "Água corrente onde antes só havia espera de chuva: 12 milhões de pessoas atendidas.",
    image: "/images/case-transposicao.jpg",
    body: [
      "Levar a água do São Francisco ao semiárido é vencer distância e relevo ao mesmo tempo. São cerca de 477 km de canais, túneis e aquedutos, divididos nos Eixos Norte e Leste, ligando o rio às regiões que historicamente dependeram do inverno para encher os açudes.",
      "O projeto garante segurança hídrica a 12 milhões de pessoas em 390 municípios de Pernambuco, Ceará, Paraíba e Rio Grande do Norte. Orçado inicialmente em R$ 8,2 bilhões, já recebeu mais de R$ 14 bilhões com a inclusão dos ramais associados.",
      "Obra linear dessa escala não tem canteiro único: tem dezenas de frentes simultâneas, cada uma exigindo terraplenagem, agregado e equipamento disponível no lugar certo, no dia certo.",
    ],
    facts: [
      { label: "Extensão", value: "~477 km de canais e túneis" },
      { label: "Beneficiados", value: "12 milhões de pessoas" },
      { label: "Municípios", value: "390" },
      { label: "Investido", value: "Mais de R$ 14 bilhões" },
    ],
  },
  {
    slug: "transnordestina",
    tag: "Ferrovia",
    name: "Transnordestina",
    place: "Eliseu Martins (PI) ao Pecém (CE)",
    detail: "1.206 km de via nova cruzando o sertão para levar grão e minério até o mar.",
    image: "/images/case-transnordestina.jpg",
    body: [
      "1.206 km de ferrovia nova entre Eliseu Martins, no Piauí, e o Porto do Pecém, no Ceará. O traçado corta chapada, caatinga e serra em 53 municípios para ligar as regiões produtoras do interior ao mar, e vai transportar grãos, combustíveis e minério.",
      "Ferrovia é obra que anda. Cada quilômetro de via exige terraplenagem, drenagem e brita entregues no ritmo do assentamento dos trilhos — a frente de serviço muda de lugar todos os dias, e o abastecimento precisa acompanhar.",
      "Dos cerca de R$ 15 bilhões previstos, aproximadamente R$ 10 bilhões já foram aplicados. O primeiro trecho está em torno de 82% concluído, com mais de 700 km de via prontos.",
    ],
    facts: [
      { label: "Extensão", value: "1.206 km" },
      { label: "Municípios", value: "53" },
      { label: "Investimento", value: "~R$ 15 bilhões previstos" },
      { label: "Cargas", value: "Grãos, combustíveis e minério" },
    ],
  },
  {
    slug: "barragem-do-castanhao",
    tag: "Barragem",
    name: "Barragem do Castanhão",
    place: "Alto Santo — CE",
    detail: "A maior barragem de múltiplos usos da América Latina: 6,7 bilhões de m³ de água.",
    image: "/images/case-castanhao.jpg",
    body: [
      "Com 6,7 bilhões de metros cúbicos, o Castanhão é a maior barragem de múltiplos usos da América Latina. Sozinho, responde por 37% de toda a capacidade de armazenamento dos cerca de 8 mil reservatórios do Ceará — é a reserva que sustenta o estado nos anos em que a chuva falha.",
      "Dele saem o abastecimento de Fortaleza e da Região Metropolitana, a irrigação do Vale do Jaguaribe e o início do Eixão das Águas. O reservatório se estende por Jaguaribara, Alto Santo, Jaguaretama e Jaguaribe.",
      "Uma estrutura desse porte é feita de volume: milhões de metros cúbicos de terra e rocha movimentados, britados e compactados dentro de janelas de tempo definidas pelo regime de chuvas.",
    ],
    facts: [
      { label: "Capacidade", value: "6,7 bilhões de m³" },
      { label: "Participação no CE", value: "37% da capacidade armazenada" },
      { label: "Abastece", value: "Fortaleza, RM e Vale do Jaguaribe" },
      { label: "Concluída em", value: "2002" },
    ],
  },
];

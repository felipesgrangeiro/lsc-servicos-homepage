import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Truck, Users } from "lucide-react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Quem somos — LSC Serviços",
  description:
    "Locação de equipamentos e serviços de britagem para operações de grande porte no Nordeste. Parte do Grupo TB.",
};

// Missao, visao, valores, area de atuacao e equipe reproduzidos do material
// institucional da propria LSC (lscservicos.com.br/empresa.php).
const pillars = [
  {
    label: "Missão",
    text: "Oferecer soluções de excelência em Locações de Equipamentos e Serviços de Britagem, maximizando resultados para Clientes e Acionistas.",
  },
  {
    label: "Visão",
    text: "Estar entre os principais Locadores e Prestadores de Serviços no Segmento de Construção e ser reconhecido na Excelência do atendimento às necessidades dos nossos Clientes.",
  },
];

const values = [
  "Excelência com simplicidade",
  "Foco em resultados",
  "Valorização e respeito às pessoas",
  "Respeito ao meio ambiente",
];

const numbers = [
  { icon: CalendarDays, value: "30+", label: "anos de experiência" },
  { icon: Truck, value: "Frota própria", label: "e moderna" },
  { icon: Users, value: "Parte do", label: "Grupo TB" },
];

export default function AboutPage() {
  return (
    <main className="casePage">
      <SiteHeader />

      <section className="casePageHero" style={{ "--image": "url(/images/lsc-excavator-v2.jpg)" } as React.CSSProperties}>
        <div className="casePageHeroInner shell">
          <Link className="casePageBack" href="/"><ArrowLeft size={16} /> Início</Link>
          <p className="eyebrow">Quem somos</p>
          <h1>Estrutura própria para operações que não podem parar.</h1>
          <p className="casePagePlace">Locação de equipamentos e serviços de britagem para o segmento de construção.</p>
        </div>
      </section>

      <section className="casePageBody shell">
        <div className="casePageText">
          <p>A LSC é a empresa de locação de equipamentos e serviços do Grupo TB. Atua onde a operação exige escala e continuidade: obras de infraestrutura, pátios industriais, terminais portuários e frentes de mineração e britagem.</p>
          <p>O modelo é de frota própria, com estrutura de apoio e manutenção em Caucaia, no Ceará. É essa combinação que sustenta a disponibilidade do equipamento — em obra grande, máquina parada custa mais do que o próprio aluguel.</p>
          <p>Como parte do Grupo TB, a LSC opera integrada a transporte, armazenagem e suporte de frota, o que permite atender uma operação de ponta a ponta em vez de apenas fornecer o equipamento.</p>
        </div>
        <ul className="solutionServices">
          <li><MapPin size={17} /> Atuação em todo o Nordeste</li>
          <li><Users size={17} /> Equipe administrativa, comercial e mecânica</li>
          <li><Truck size={17} /> Frota própria e estrutura de manutenção</li>
        </ul>
      </section>

      <section className="aboutNumbers">
        <div className="shell aboutNumbersGrid">
          {numbers.map((n) => (
            <div key={n.label}>
              <n.icon />
              <strong>{n.value}</strong>
              <b>{n.label}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutPillars shell">
        <div className="sectionTop"><h3>No que acreditamos</h3></div>
        <div className="pillarGrid">
          {pillars.map((p) => (
            <article key={p.label}>
              <b>{p.label}</b>
              <p>{p.text}</p>
            </article>
          ))}
          <article className="pillarValues">
            <b>Valores</b>
            <ul>
              {values.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="cta"><div className="shell ctaGrid">
        <h2>Vamos colocar sua operação<br /><em>em movimento.</em></h2>
        <div>
          <p>Fale com um especialista e descubra como a LSC pode entregar as máquinas e os serviços que seu projeto precisa.</p>
          <a className="goldButton" href="mailto:contato@lscservicos.com.br">Falar com um especialista <ArrowRight size={16} /></a>
        </div>
      </div></section>

      <SiteFooter />
    </main>
  );
}

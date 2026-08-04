"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import { useRevealOnScroll } from "./useRevealOnScroll";
import { solutions } from "./solucoes/data";
import SiteFooter from "./SiteFooter";
import { cases } from "./cases/data";
import { ArrowRight, Box, CalendarDays, CheckCircle, ChevronLeft, ChevronRight, ClipboardList, Gauge, Network, Ruler, Truck, Users, Weight, Wrench } from "lucide-react";

const process = [
  { n: "01", title: "Planejamento", text: "Entendemos o desafio e desenhamos a melhor estratégia.", icon: ClipboardList },
  { n: "02", title: "Preparação", text: "Estrutura, equipe e equipamentos prontos para a operação.", icon: Wrench },
  { n: "03", title: "Execução", text: "Movimentação, britagem e obras com máxima produtividade.", icon: Truck },
  { n: "04", title: "Integração", text: "Sinergia com as empresas do Grupo TB para uma operação completa.", icon: Network },
  { n: "05", title: "Resultados", text: "Entregamos valor com segurança, qualidade e compromisso.", icon: CheckCircle },
];

function Brand({ light = true, header = false }: { light?: boolean; header?: boolean }) {
  const logo = header ? "/images/lsc-logo-header-white-yellow.png" : "/images/lsc-logo-official-transparent.png";
  return <a className={`brand officialBrand ${header ? "headerBrand" : ""} ${light ? "brandLight" : ""}`} href="#top" aria-label="LSC — Locação de Equipamentos e Serviços — início"><img src={logo} alt="LSC — Locação de Equipamentos e Serviços" /></a>;
}

export default function Home() {
  const ecosystemRef = useRevealOnScroll<HTMLElement>("ecosystemVisible");
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero">
        <div className="heroContent shell">
          <h1>Onde a<br />operação<br />exige força,<br />a LSC entrega<br /><em>resultado.</em></h1>
          <p className="heroCopy">Equipamentos próprios, locação especializada e execução de serviços para operações que exigem escala, precisão e continuidade.</p>
          <a className="primaryButton" href="#solucoes">Conheça nossas soluções <ArrowRight size={17} /></a>
        </div>
        <div className="scrollCue"><span></span> EXPLORE</div>
      </section>

      <section className="stats"><div className="shell statsGrid">
        <div className="stat"><CalendarDays /><div><strong>30+</strong><b>anos de experiência</b><p>História sólida construída com segurança, qualidade e confiança.</p></div></div>
        <div className="stat"><Truck /><div><strong>Frota própria</strong><b>e moderna</b><p>Mais controle, disponibilidade e agilidade para operações de grande porte.</p></div></div>
        <div className="stat"><Ruler /><div><strong>20 mil m²</strong><b>de estrutura</b><p>Área própria para apoio, manutenção e operação de grande porte.</p></div></div>
        <div className="stat"><Users /><div><strong>Parte do</strong><b>Grupo TB</b><p>Soluções integradas com transporte, armazenagem e suporte operacional.</p></div></div>
      </div></section>

      <section className="sectors shell" id="solucoes">
        <p className="eyebrow">O que fazemos acontecer</p>
        <div className="solutionsIntro">
          <h3>Máquinas e serviços para<br />operações que movem<br />o Brasil.</h3>
          <div className="solutionsCopy">
            <p>Atuamos em operações complexas e ambientes desafiadores, fornecendo a estrutura, os equipamentos e a expertise necessários para entregar produtividade e resultados.</p>
            <a href="#contato">Ver todas as soluções <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="sectorGrid">{solutions.map((s) => (
          <Link className="sectorCard" key={s.slug} href={`/solucoes/${s.slug}`}>
            <div className="sectorMedia" style={{"--image": `url(${s.image})`} as React.CSSProperties} />
            <div className="sectorInfo">
              <div>
                <h4>{s.title.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h4>
                <p>{s.text}</p>
              </div>
              <span className="sectorArrow"><ArrowRight size={20}/></span>
            </div>
          </Link>
        ))}</div>
      </section>

      <section className="process" id="processo"><div className="shell">
        <p className="eyebrow">Como a operação acontece</p>
        <div className="processIntro"><h2>Cada etapa.<br />Cada detalhe.<br />Cada resultado.</h2><p>Integramos pessoas, equipamentos e inteligência operacional para que cada etapa da sua operação aconteça com segurança, eficiência e no prazo certo.</p></div>
        <div className="timeline">{process.map((p, i) => <div className="step" key={p.n}><div className="stepHead"><div><p.icon size={22}/><span>{p.n}</span></div>{i < process.length - 1 && <ArrowRight size={20}/>}</div><b>{p.title}</b><p>{p.text}</p></div>)}</div>
      </div></section>

      <section className="equipment shell" id="frota">
        <p className="eyebrow">Como é o alto desempenho</p>
        <div className="sectionTop"><h3>Equipamentos para<br />grandes operações.</h3><a href="#contato">Ver frota completa <ArrowRight size={16}/></a></div>
        <div className="productStage">
          <button className="slideArrow left" aria-label="Equipamento anterior"><ChevronLeft /></button>
          <div className="specPanel"><small>ESCAVADEIRA HIDRÁULICA</small><h4>JOHN DEERE 350G</h4><div className="machineSpecs"><div><Weight/><span><small>Peso operacional</small><b>30.300 kg</b></span></div><div><Gauge/><span><small>Potência bruta</small><b>213 hp</b></span></div><div><Box/><span><small>Capacidade da caçamba</small><b>2,1 m³</b></span></div></div><a href="#contato">Ver detalhes <ArrowRight size={18}/></a></div>
          <div className="productImage" />
          <button className="slideArrow right" aria-label="Próximo equipamento"><ChevronRight /></button>
        </div>
        <div className="dots"><i></i><i></i><i></i><i></i></div>
      </section>

      <section className="ecosystem" id="grupo" ref={ecosystemRef}><div className="shell ecosystemGrid">
        <div><p className="eyebrow">Ecossistema integrado</p><h2>A força de um grupo.<br />A eficiência de uma<br />operação completa.</h2></div>
        <div className="companies">
          <div className="activeCompany"><img className="companyLogo officialLscLogo" src="/images/lsc-logo-header-white-yellow.png" alt="LSC — Locação de Equipamentos e Serviços" /><p>Máquinas, equipamentos e serviços de britagem.</p></div><ArrowRight />
          <div><img className="companyLogo logoTb" src="/images/logo-tb-transportes.png" alt="TB Transportes" /><p>Transporte de cargas e operações logísticas.</p></div><ArrowRight />
          <div><img className="companyLogo logoTmc" src="/images/logo-tmc.png" alt="TMC Terminais" /><p>Armazenagem e operação portuária.</p></div><ArrowRight />
          <div><img className="companyLogo logoTruck" src="/images/logo-truck-center.png" alt="Truck Center Pecém" /><p>Manutenção e suporte para frota.</p></div>
        </div>
      </div></section>

      <section className="cases shell" id="cases">
        <p className="eyebrow">Cases</p><div className="sectionTop"><h3>Operações reais.<br />Resultados comprovados.</h3><a href="#contato">Ver todos os cases <ArrowRight size={16}/></a></div>
        <div className="caseGrid">{cases.map(p => (
          <Link className="caseCard" key={p.slug} href={`/cases/${p.slug}`}>
            <div className="caseMedia" style={{"--image": `url(${p.image})`} as React.CSSProperties} />
            <div className="caseInfo">
              <div>
                <b>{p.tag}</b>
                <small>{p.place}</small>
                <h4>{p.name}</h4>
                {p.detail && <p>{p.detail}</p>}
              </div>
              <ArrowRight />
            </div>
          </Link>
        ))}</div>
      </section>

      <section className="cta" id="contato"><div className="shell ctaGrid"><h2>Vamos colocar sua operação<br /><em>em movimento.</em></h2><div><p>Fale com um especialista e descubra como a LSC pode entregar as máquinas e os serviços que seu projeto precisa.</p><a className="goldButton" href="mailto:contato@lscservicos.com.br">Falar com um especialista <ArrowRight size={16}/></a></div></div></section>

      <SiteFooter />
    </main>
  );
}

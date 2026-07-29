"use client";

import { useState } from "react";
import { ArrowRight, Box, CalendarDays, Camera, CheckCircle, ChevronLeft, ChevronRight, ClipboardList, Gauge, Link, Mail, MapPin, Menu, Network, Phone, Ruler, Truck, Users, Weight, Wrench, X } from "lucide-react";

const sectors = [
  { title: "Portos e\nterminais", text: "Infraestrutura e apoio operacional para movimentação de cargas e materiais.", image: "/images/sector-ports-v2.png" },
  { title: "Indústrias", text: "Soluções completas para pátios industriais, usinas e plantas de produção.", image: "/images/sector-industry-v2.png" },
  { title: "Mineração e\nbritagem", text: "Britagem, classificação e produção de agregados com alta performance.", image: "/images/sector-mining-v2.png" },
  { title: "Obras e\ninfraestrutura", text: "Terraplenagem, pavimentação e apoio para obras de grande escala.", image: "/images/sector-infrastructure-v2.png" },
];

const process = [
  { n: "01", title: "Planejamento", text: "Entendemos o desafio e desenhamos a melhor estratégia.", icon: ClipboardList },
  { n: "02", title: "Preparação", text: "Estrutura, equipe e equipamentos prontos para a operação.", icon: Wrench },
  { n: "03", title: "Execução", text: "Movimentação, britagem e obras com máxima produtividade.", icon: Truck },
  { n: "04", title: "Integração", text: "Sinergia com as empresas do Grupo TB para uma operação completa.", icon: Network },
  { n: "05", title: "Resultados", text: "Entregamos valor com segurança, qualidade e compromisso.", icon: CheckCircle },
];

const projects = [
  { tag: "Porto", title: "Movimentação de Minério", place: "Terminal Portuário — BA", image: "/images/case-port.png" },
  { tag: "Indústria", title: "Apoio à Parada Industrial", place: "Complexo Industrial — CE", image: "/images/case-industry.png" },
  { tag: "Mineração", title: "Produção de Agregados", place: "Mina a Céu Aberto — CE", image: "/images/case-mining.png" },
  { tag: "Obra", title: "Terraplenagem e Drenagem", place: "Obra de Infraestrutura — CE", image: "/images/case-infrastructure.png" },
];

function Brand({ light = true, header = false }: { light?: boolean; header?: boolean }) {
  const logo = header ? "/images/lsc-logo-header-white-yellow.png" : "/images/lsc-logo-official-transparent.png";
  return <a className={`brand officialBrand ${header ? "headerBrand" : ""} ${light ? "brandLight" : ""}`} href="#top" aria-label="LSC — Locação de Equipamentos e Serviços — início"><img src={logo} alt="LSC — Locação de Equipamentos e Serviços" /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top">
      <section className="hero">
        <header className="nav shell">
          <Brand header />
          <nav className={menuOpen ? "navLinks open" : "navLinks"} aria-label="Navegação principal">
            {[["Quem somos", "#solucoes"], ["Soluções", "#solucoes"], ["Frota", "#frota"], ["Operações", "#processo"], ["Cases", "#cases"], ["Grupo TB", "#grupo"], ["Contato", "#contato"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="outlineButton navCta" href="#contato">Fale com um especialista <ArrowRight size={16} /></a>
          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </header>
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
          <h3>Infraestrutura para<br />operações que movem<br />o Brasil.</h3>
          <div className="solutionsCopy">
            <p>Atuamos em operações complexas e ambientes desafiadores, fornecendo a estrutura, os equipamentos e a expertise necessários para entregar produtividade e resultados.</p>
            <a href="#contato">Ver todas as soluções <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="sectorGrid">{sectors.map((s) => <article className="sectorCard" key={s.title} style={{"--image": `url(${s.image})`} as React.CSSProperties}><div><h4>{s.title.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h4><p>{s.text}</p></div><button aria-label={`Ver ${s.title}`}><ArrowRight size={20}/></button></article>)}</div>
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

      <section className="ecosystem" id="grupo"><div className="shell ecosystemGrid">
        <div><p className="eyebrow">Ecossistema integrado</p><h2>A força de um grupo.<br />A eficiência de uma<br />operação completa.</h2></div>
        <div className="companies">
          <div><img className="companyLogo logoTb" src="/images/logo-tb-transportes.png" alt="TB Transportes" /><p>Transporte de cargas e operações logísticas.</p></div><ArrowRight />
          <div><img className="companyLogo logoTmc" src="/images/logo-tmc.png" alt="TMC Terminais" /><p>Armazenagem e operação portuária.</p></div><ArrowRight />
          <div className="activeCompany"><img className="companyLogo officialLscLogo" src="/images/lsc-logo-header-white-yellow.png" alt="LSC — Locação de Equipamentos e Serviços" /><p>Infraestrutura, equipamentos e execução.</p></div><ArrowRight />
          <div><img className="companyLogo logoTruck" src="/images/logo-truck-center.png" alt="Truck Center Pecém" /><p>Manutenção e suporte para frota.</p></div>
        </div>
      </div></section>

      <section className="cases shell" id="cases">
        <p className="eyebrow">Cases</p><div className="sectionTop"><h3>Operações reais.<br />Resultados comprovados.</h3><a href="#contato">Ver todos os cases <ArrowRight size={16}/></a></div>
        <div className="caseGrid">{projects.map(p => <article className="caseCard" key={p.title} style={{"--image": `url(${p.image})`} as React.CSSProperties}><div><b>{p.tag}</b><small>{p.title}</small><h4>{p.place}</h4></div><ArrowRight /></article>)}</div>
      </section>

      <section className="cta" id="contato"><div className="shell ctaGrid"><h2>Vamos colocar sua operação<br /><em>em movimento.</em></h2><div><p>Fale com um especialista e descubra como a LSC pode entregar força e infraestrutura que seu projeto precisa.</p><a className="goldButton" href="mailto:contato@lscservicos.com.br">Falar com um especialista <ArrowRight size={16}/></a></div></div></section>

      <footer><div className="shell footerGrid">
        <div><Brand header/><div className="social"><a href="#" aria-label="LinkedIn"><Link/></a><a href="#" aria-label="Instagram"><Camera/></a></div></div>
        <div><b>Navegação</b><a href="#solucoes">Quem somos</a><a href="#solucoes">Soluções</a><a href="#frota">Frota</a><a href="#processo">Operações</a><a href="#cases">Cases</a></div>
        <div><b>Soluções</b><a href="#solucoes">Portos e Terminais</a><a href="#solucoes">Indústrias</a><a href="#solucoes">Mineração e Britagem</a><a href="#solucoes">Obras e Infraestrutura</a></div>
        <div><b>Empresa</b><a href="#grupo">Grupo TB</a><a href="#">Política de Qualidade</a><a href="#">Sustentabilidade</a><a href="#">Trabalhe conosco</a></div>
        <div className="contact"><b>Contato</b><a href="tel:+5585994077405"><Phone/> (85) 99407-7405</a><a href="mailto:contato@lscservicos.com.br"><Mail/> contato@lscservicos.com.br</a><span><MapPin/> Caucaia — CE · Brasil</span></div>
      </div><div className="shell copyright"><span>© 2026 LSC Serviços. Todos os direitos reservados.</span><a href="#">Política de Privacidade</a></div></footer>
    </main>
  );
}

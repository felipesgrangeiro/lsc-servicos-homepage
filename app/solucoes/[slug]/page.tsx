import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { solutions } from "../data";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = solutions.find((s) => s.slug === slug);
  if (!item) return {};
  return { title: `${item.name} — LSC Serviços`, description: item.text };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const item = solutions.find((s) => s.slug === slug);
  if (!item) notFound();

  const others = solutions.filter((s) => s.slug !== item.slug);

  return (
    <main className="casePage">
      <SiteHeader />

      <section className="casePageHero" style={{ "--image": `url(${item.image})` } as React.CSSProperties}>
        <div className="casePageHeroInner shell">
          <Link className="casePageBack" href="/#solucoes"><ArrowLeft size={16} /> Todas as soluções</Link>
          <p className="eyebrow">Soluções</p>
          <h1>{item.name}</h1>
          <p className="casePagePlace">{item.text}</p>
        </div>
      </section>

      <section className="casePageBody shell">
        <div className="casePageText">
          {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="solutionServices">
          {item.services.map((s) => (
            <li key={s}><CheckCircle size={17} /> {s}</li>
          ))}
        </ul>
      </section>

      <section className="casePageOthers shell">
        <div className="sectionTop"><h3>Outras soluções</h3></div>
        <div className="sectorGrid">
          {others.map((s) => (
            <Link className="sectorCard" key={s.slug} href={`/solucoes/${s.slug}`}>
              <div className="sectorMedia" style={{ "--image": `url(${s.image})` } as React.CSSProperties} />
              <div className="sectorInfo">
                <div>
                  <h4>{s.title.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h4>
                  <p>{s.text}</p>
                </div>
                <span className="sectorArrow"><ArrowRight size={20} /></span>
              </div>
            </Link>
          ))}
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

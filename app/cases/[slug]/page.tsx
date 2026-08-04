import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cases } from "../data";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — LSC Serviços`,
    description: item.detail,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();

  const others = cases.filter((c) => c.slug !== item.slug);

  return (
    <main className="casePage">
      <SiteHeader />

      <section className="casePageHero" style={{ "--image": `url(${item.image})` } as React.CSSProperties}>
        <div className="casePageHeroInner shell">
          <Link className="casePageBack" href="/#cases"><ArrowLeft size={16} /> Todos os cases</Link>
          <p className="eyebrow">{item.tag}</p>
          <h1>{item.name}</h1>
          <p className="casePagePlace">{item.place}</p>
        </div>
      </section>

      <section className="casePageBody shell">
        <div className="casePageText">
          {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="casePageFacts">
          {item.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="casePageOthers shell">
        <div className="sectionTop"><h3>Outros cases</h3></div>
        <div className="caseGrid">
          {others.map((c) => (
            <Link className="caseCard" key={c.slug} href={`/cases/${c.slug}`}>
              <div className="caseMedia" style={{ "--image": `url(${c.image})` } as React.CSSProperties} />
              <div className="caseInfo">
                <div>
                  <b>{c.tag}</b>
                  <small>{c.place}</small>
                  <h4>{c.name}</h4>
                </div>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta"><div className="shell ctaGrid">
        <h2>Vamos colocar sua operação<br /><em>em movimento.</em></h2>
        <div>
          <p>Fale com um especialista e descubra como a LSC pode entregar força e infraestrutura que seu projeto precisa.</p>
          <a className="goldButton" href="mailto:contato@lscservicos.com.br">Falar com um especialista <ArrowRight size={16} /></a>
        </div>
      </div></section>

      <SiteFooter />
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks: [string, string][] = [
  ["Quem somos", "/quem-somos"],
  ["Soluções", "/#solucoes"],
  ["Operações", "/#processo"],
  ["Frota", "/#frota"],
  ["Grupo TB", "/#grupo"],
  ["Cases", "/#cases"],
  ["Contato", "/#contato"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // A barra e transparente sobre a foto e ganha fundo escuro apos sair dela,
  // senao o texto branco fica ilegivel sobre o fundo claro da pagina.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Com o menu aberto em tela cheia, a pagina continuava rolando por tras da
  // sobreposicao — ao fechar, o visitante caia em outro ponto do site.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  return (
    <div className={scrolled ? "siteHeader siteHeaderSolid" : "siteHeader"}>
      <header className="nav shell">
        <Link className="brand officialBrand headerBrand brandLight" href="/" aria-label="LSC — Locação de Equipamentos e Serviços — início">
          <img src="/images/lsc-logo-header-white-yellow.png" alt="LSC — Locação de Equipamentos e Serviços" />
        </Link>
        <nav className={menuOpen ? "navLinks open" : "navLinks"} aria-label="Navegação principal">
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </nav>
        <Link className="outlineButton navCta" href="/#contato">Fale com um especialista <ArrowRight size={16} /></Link>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
    </div>
  );
}

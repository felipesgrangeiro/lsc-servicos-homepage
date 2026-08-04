import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { groupCompanies } from "./grupoTb";

// lucide nao traz icones de marca nesta versao, entao os glifos vao inline
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/grupotbhub/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.26 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.07.36-2.24.41-1.27.06-1.65.07-4.86.07s-3.59-.01-4.86-.07c-1.17-.06-1.82-.26-2.24-.42-.57-.22-.96-.48-1.38-.9-.42-.42-.69-.82-.9-1.38-.17-.42-.36-1.07-.42-2.24-.04-1.26-.06-1.65-.06-4.84s.02-3.59.06-4.86c.06-1.17.25-1.81.42-2.23.21-.57.48-.96.9-1.38.42-.42.81-.69 1.38-.9.42-.17 1.05-.36 2.22-.42 1.28-.05 1.65-.06 4.86-.06Zm0-2.16C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14c-.3.77-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13-.67-.67-1.34-1.08-2.13-1.38-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm7.85-10.41a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/grupotb1/",
    path: "M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.88v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5585991997779",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.46 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.42Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/grupotbhub/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z",
  },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="shell footerGrid">
        <div>
          <Link className="brand officialBrand headerBrand brandLight" href="/" aria-label="LSC — Locação de Equipamentos e Serviços — início">
            <img src="/images/lsc-logo-header-white-yellow.png" alt="LSC — Locação de Equipamentos e Serviços" />
          </Link>
          <div className="social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <b>Navegação</b>
          <Link href="/quem-somos">Quem somos</Link>
          <Link href="/solucoes/portos-e-terminais">Soluções</Link>
          <Link href="/#processo">Operações</Link>
          <Link href="/#frota">Frota</Link>
          <Link href="/cases/eixao-das-aguas">Cases</Link>
        </div>
        <div>
          <b>Soluções</b>
          <Link href="/solucoes/portos-e-terminais">Portos e Terminais</Link>
          <Link href="/solucoes/industrias">Indústrias</Link>
          <Link href="/solucoes/mineracao-e-britagem">Mineração e Britagem</Link>
          <Link href="/solucoes/obras-e-infraestrutura">Obras e Infraestrutura</Link>
        </div>
        <div className="footerCompanies">
          <b>Empresas</b>
          <nav aria-label="Empresas do Grupo TB">
            {groupCompanies.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.logoAlt} title={c.name}>
                <img src={c.logo} alt={c.logoAlt} />
              </a>
            ))}
          </nav>
        </div>
        <div className="contact">
          <b>Contato</b>
          <a href="tel:+5585994077405"><Phone /> (85) 99407-7405</a>
          <a href="mailto:contato@lscservicos.com.br"><Mail /> contato@lscservicos.com.br</a>
          <span><MapPin /> Caucaia — CE · Brasil</span>
        </div>
      </div>
      <div className="shell copyright">
        <span>© 2026 LSC Serviços. Todos os direitos reservados.</span>
        <Link href="/#contato">Política de Privacidade</Link>
      </div>
    </footer>
  );
}

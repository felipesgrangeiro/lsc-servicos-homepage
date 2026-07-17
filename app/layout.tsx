import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LSC Serviços | Infraestrutura para grandes operações",
  description: "Infraestrutura, equipamentos e execução para operações industriais, logísticas, portuárias e de mineração.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

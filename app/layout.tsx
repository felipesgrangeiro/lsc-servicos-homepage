import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LSC Serviços | Máquinas e serviços para grandes operações",
  description: "Locação de máquinas e serviços de britagem para operações industriais, logísticas, portuárias e de mineração.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

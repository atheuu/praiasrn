import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-proviter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praias RN - Descubra o Litoral do Rio Grande do Norte",
  description:
    "Guia completo de restaurantes, pousadas, pontos turísticos e esportes no litoral do Rio Grande do Norte. Encontre os melhores lugares para kitesurf, surf e muito mais.",
  keywords:
    "praias RN, litoral RN, pousadas, restaurantes, kitesurf, surf, turismo RN, pontos turísticos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { Bodoni_Moda, Montserrat } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Larissa Barbosa | Maquiagem & Sobrancelhas",
  description: "Maquiagem, design de sobrancelhas e cursos de beleza.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bodoni.variable} ${montserrat.variable}`}>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

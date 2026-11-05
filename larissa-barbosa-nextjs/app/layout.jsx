
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Larissa Barbosa | Maquiadora e Designer de Sobrancelhas em Guarulhos",
  description: "Maquiagem profissional e design de sobrancelhas em Guarulhos. Realce sua beleza com atendimento personalizado. Agende seu horário com Larissa Barbosa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://makeuplalab.com.br"),

  title: {
    default: "Larissa Barbosa | Maquiagem Profissional e Cursos em Guarulhos",
    template: "%s | Larissa Barbosa",
  },

  description:
    "Conheça o trabalho de Larissa Barbosa: maquiagem profissional e cursos de maquiagem em Guarulhos - Jardim São João. Confira os serviços, conheça os cursos e entre em contato.",

  applicationName: "Larissa Barbosa",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Larissa Barbosa | Maquiagem Profissional e Cursos em Guarulhos - Jardim São João",
    description:
      "Maquiagem profissional e cursos para quem deseja aprender e se desenvolver na área da beleza em Guarulhos.",
    url: "https://makeuplalab.com.br",
    siteName: "Larissa Barbosa",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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

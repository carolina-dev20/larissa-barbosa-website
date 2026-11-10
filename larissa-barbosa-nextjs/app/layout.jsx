
import "./globals.css";

import CookieConsent from "../components/CookieConsent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: {
    default: "Larissa Barbosa | Maquiagem e Cursos em Guarulhos",
    template: "%s | Larissa Barbosa",
  },
  description:
    "Maquiagem profissional, design de sobrancelhas e cursos de maquiagem em Guarulhos - SP. Conheça os serviços e agende seu horário.",
  metadataBase: new URL("https://makeuplalab.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Larissa Barbosa | Maquiagem e Cursos",
    description:
      "Maquiagem profissional e cursos de maquiagem em Guarulhos - SP.",
    url: "https://makeuplalab.com.br",
    siteName: "Makeup Lalab",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://makeuplalab.com.br/#business",
  name: "Larissa Barbosa",
  alternateName: "Makeup Lalab",
  url: "https://makeuplalab.com.br",
  description:
    "Maquiagem profissional, design de sobrancelhas e cursos de maquiagem em Guarulhos, São Paulo. Atendimento presencial com horário marcado.",
  telephone: "+5511957037051",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Riachuelo, 461",
    addressLocality: "Guarulhos",
    addressRegion: "SP",
    postalCode: "07151-080",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Guarulhos",
  },
  sameAs: ["https://www.instagram.com/makeuplalab/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <ScrollReveal />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

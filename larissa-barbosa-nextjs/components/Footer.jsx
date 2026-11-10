
import {
  ArrowRight,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";

const WHATSAPP = "5511957037051";
const INSTAGRAM = "https://www.instagram.com/makeuplalab/";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Avenida+Riachuelo%2C+461%2C+Jardim+S%C3%A3o+Jo%C3%A3o%2C+Guarulhos%2C+SP";

const MAP_EMBED =
  "https://maps.google.com/maps?q=Avenida%20Riachuelo%2C%20461%2C%20Guarulhos%2C%20SP&output=embed";

export default function Footer() {
  const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Olá, Larissa! Gostaria de saber mais sobre seus serviços e agendar um horário."
  )}`;

  return (
    <>
      <footer
        id="contato"
        className="bg-blush px-[7%] py-16 md:px-[10%] md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

          {/* INFORMAÇÕES */}
          <div>
            <span className="eyebrow">VAMOS CONVERSAR?</span>

            <h2 className="serif mt-4 text-[42px] leading-tight md:text-[56px]">
              Sua beleza, <em className="text-rose">do seu jeito.</em>
            </h2>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-rose" />

                <div>
                  <p className="text-[10px] uppercase tracking-[.15em] text-muted">
                    Nosso endereço
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#514441]">
                    Avenida Riachuelo, 461 -
                    Jardim São João
                    <br />
                    Guarulhos – SP
                    <br />
                    CEP 07151-080
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted">
                Atendimento presencial com horário marcado.
              </p>

            </div>

            <div className="mt-8 flex flex-col items-start gap-4">

              <a
                className="button button-dark"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale pelo WhatsApp
                <ArrowRight size={16} />
              </a>

              <a
                className="flex items-center gap-2 text-xs transition hover:text-rose"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
                Instagram
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[.12em] text-[#514441] underline underline-offset-4 transition hover:text-rose"
              >
                Como chegar
              </a>

            </div>
          </div>

          {/* MAPA À DIREITA */}
          <div className="w-full md:pl-6">

            <div className="relative mx-auto h-[220px] w-full max-w-[420px] overflow-hidden border border-[#cbb5b0] bg-[#e8dcd5] md:ml-auto md:h-[260px]">
              <iframe
                title="Localização de Larissa Barbosa em Guarulhos"
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-right text-[9px] uppercase tracking-[.15em] text-[#766965]">
              Larissa Barbosa · Guarulhos, SP
            </p>

          </div>

          {/* RODAPÉ INFERIOR */}
          <div className="col-span-full mt-3 flex flex-col justify-between gap-3 border-t border-black/15 pt-5 text-[9px] tracking-wider text-muted sm:flex-row">
            <span>© {new Date().getFullYear()} Larissa Barbosa</span>
            <span>BELEZA COM INTENÇÃO</span>
          </div>

        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Larissa pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 items-center justify-center gap-3 rounded-full bg-[#66534f] px-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f6565] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose sm:px-5"
      >
        <MessageCircle size={24} strokeWidth={1.8} />

        <span className="hidden text-[10px] font-medium uppercase tracking-[.1em] sm:inline">
          Agende pelo WhatsApp
        </span>
      </a>
    </>
  );
}

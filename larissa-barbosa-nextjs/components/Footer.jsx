import { ArrowRight, Instagram, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP = "5511957037051";
const INSTAGRAM = "https://www.instagram.com/makeuplalab/";

export default function Footer() {
  const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Larissa! Gostaria de saber mais sobre seus serviços.")}`;
  return (
    <>
      <footer id="contato" className="grid gap-9 bg-blush px-[7%] py-16 md:grid-cols-2 md:px-[10%] md:py-20">
        <div>
          <span className="eyebrow">VAMOS CONVERSAR?</span>
          <h2 className="serif mt-4 text-[42px] leading-tight md:text-[56px]">Sua beleza, <em className="text-rose">do seu jeito.</em></h2>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <a className="button button-dark" href={link} target="_blank" rel="noreferrer">
            Fale pelo WhatsApp <ArrowRight size={16}/>
          </a>
          <a className="flex items-center gap-2 text-xs transition hover:text-rose" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram size={16}/> Instagram
          </a>
          <span className="flex items-center gap-2 text-xs text-muted"><MapPin size={15}/> Guarulhos, SP</span>
        </div>
        <div className="col-span-full mt-3 flex justify-between border-t border-black/15 pt-5 text-[9px] tracking-wider text-muted">
          <span>© {new Date().getFullYear()} Larissa Barbosa</span>
          <span>BELEZA COM INTENÇÃO</span>
        </div>
      </footer>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Larissa pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#66534f] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8f6565]"
      >
        <MessageCircle size={25} strokeWidth={1.7}/>
      </a>
    </>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const WHATSAPP = "5511957037051";

const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá, Larissa! Gostaria de agendar meu horário. Pode me passar as informações sobre os serviços e disponibilidade?"
)}`;

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 flex min-h-[78px] items-center justify-between border-b border-black/10 bg-cream/95 px-[5%] backdrop-blur-md">

      {/* LOGO */}
      <Link
        href="/"
        onClick={close}
        className="flex items-center gap-3"
        aria-label="Larissa Barbosa, página inicial"
      >
        <span className="border-r border-blush pr-3 font-serif text-[28px] italic tracking-[-4px] text-rose">
          LB
        </span>

        <span className="flex flex-col gap-1">
          <strong className="font-serif text-[16px] font-normal">
            Larissa Barbosa
          </strong>

          <small className="text-[8px] tracking-[.18em] text-muted">
            BEAUTY · BROWS · EDUCATION
          </small>
        </span>
      </Link>

      {/* BOTÃO MENU MOBILE */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center text-ink transition hover:text-rose md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-principal"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      {/* NAVEGAÇÃO */}
      <nav
        id="menu-principal"
        className={`${
          open ? "flex" : "hidden"
        } absolute left-0 right-0 top-full flex-col border-b border-black/10 bg-cream px-[5%] pb-6 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        <Link
          className="border-b border-black/5 py-4 text-[11px] uppercase tracking-[.08em] transition hover:text-rose md:border-0 md:py-0"
          href="/"
          onClick={close}
        >
          Início
        </Link>

        <a
          className="border-b border-black/5 py-4 text-[11px] uppercase tracking-[.08em] transition hover:text-rose md:border-0 md:py-0"
          href="/#sobre"
          onClick={close}
        >
          Sobre
        </a>

        <a
          className="border-b border-black/5 py-4 text-[11px] uppercase tracking-[.08em] transition hover:text-rose md:border-0 md:py-0"
          href="/#servicos"
          onClick={close}
        >
          Serviços
        </a>

        <Link
          className="border-b border-black/5 py-4 text-[11px] uppercase tracking-[.08em] transition hover:text-rose md:border-0 md:py-0"
          href="/cursos"
          onClick={close}
        >
          Cursos
        </Link>

        {/* CTA WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-4 flex min-h-[48px] items-center justify-between gap-4 bg-ink px-5 py-4 text-[10px] font-medium uppercase tracking-[.1em] text-white transition hover:bg-rose md:mt-0 md:min-h-[44px] md:py-3"
        >
          Agendar horário
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

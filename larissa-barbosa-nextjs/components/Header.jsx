"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 flex h-[78px] items-center justify-between border-b border-black/10 bg-cream/95 px-[5%] backdrop-blur-md">
      <Link href="/" onClick={close} className="flex items-center gap-3" aria-label="Larissa Barbosa, página inicial">
        <span className="border-r border-blush pr-3 font-serif text-[28px] italic tracking-[-4px] text-rose">LB</span>
        <span className="flex flex-col gap-1">
          <strong className="font-serif text-[16px] font-normal">Larissa Barbosa</strong>
          <small className="text-[8px] tracking-[.18em] text-muted">BEAUTY · BROWS · EDUCATION</small>
        </span>
      </Link>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[77px] flex-col border-b border-black/10 bg-cream px-[5%] pb-6 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
        <Link className="border-b border-black/5 py-4 text-[10px] uppercase tracking-[.08em] hover:text-rose md:border-0 md:py-0" href="/" onClick={close}>Início</Link>
        <a className="border-b border-black/5 py-4 text-[10px] uppercase tracking-[.08em] hover:text-rose md:border-0 md:py-0" href="/#sobre" onClick={close}>Sobre</a>
        <a className="border-b border-black/5 py-4 text-[10px] uppercase tracking-[.08em] hover:text-rose md:border-0 md:py-0" href="/#servicos" onClick={close}>Serviços</a>
        <Link className="border-b border-black/5 py-4 text-[10px] uppercase tracking-[.08em] hover:text-rose md:border-0 md:py-0" href="/cursos" onClick={close}>Cursos</Link>
        <a className="mt-3 flex items-center justify-between bg-ink px-4 py-4 text-[10px] uppercase tracking-[.08em] text-white hover:bg-rose md:mt-0 md:gap-3 md:py-3" href="/#contato" onClick={close}>Agendar horário <ArrowRight size={15}/></a>
      </nav>
    </header>
  );
}

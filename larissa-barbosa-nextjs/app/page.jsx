"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowDownRight,
  GraduationCap,
  Heart,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const WHATSAPP = "5511957037051";

const autoModules = [
  { n: "01", title: "Conheça sua pele", text: "Identificação das características da pele, preparação adequada, hidratação e cuidados que fazem a maquiagem durar mais e assentar melhor." },
  { n: "02", title: "Produtos e ferramentas", text: "Como escolher produtos de acordo com sua pele, rotina e objetivo. Função de cada pincel, esponja e ferramenta — e como cuidar deles." },
  { n: "03", title: "Preparação e correção", text: "Aplicação de primer, base e corretivo; construção de camadas leves; correção pontual; acabamento natural e uniforme, sem excesso de produto." },
  { n: "04", title: "Olhos que valorizam você", text: "Noções de harmonia e combinação de cores, esfumado, aplicação de sombras, delineado adaptado ao seu formato de olho e máscara para cílios." },
  { n: "05", title: "Blush, contorno e iluminação", text: "Posicionamento dos produtos para valorizar seus traços, criar dimensão e trazer viço, respeitando o formato do rosto e o efeito desejado." },
  { n: "06", title: "Boca, acabamento e durabilidade", text: "Contorno e preenchimento dos lábios, selagem estratégica, fixação e ajustes para transformar a maquiagem do dia em uma produção para a noite." },
  { n: "07", title: "Sua maquiagem completa", text: "Execução prática acompanhada, revisão das etapas, correções personalizadas e orientação para reproduzir o resultado sozinha depois da aula." },
];

const proModules = [
  { n: "01", title: "Fundamentos e visão profissional", text: "Higiene, organização da bancada, biossegurança, atendimento, postura profissional e leitura do briefing para compreender o desejo de cada cliente." },
  { n: "02", title: "Pele: análise e preparação", text: "Leitura de tipos e condições de pele, escolha de skincare e primers, preparação por necessidade, construção de camadas e estratégias para diferentes acabamentos." },
  { n: "03", title: "Colorimetria aplicada à maquiagem", text: "Temperatura, subtom, contraste, neutralização e combinação de cores. Como selecionar tons de base, corretivo, blush e sombras com mais precisão." },
  { n: "04", title: "Correções, estrutura e acabamento", text: "Técnicas de correção, contorno, iluminação, dimensão e equilíbrio facial. Aplicação consciente de produtos cremosos e em pó." },
  { n: "05", title: "Olhos e técnicas de esfumado", text: "Construção de profundidade, transições, degradês, pontos de luz, delineados e adaptação da técnica a diferentes formatos e propostas de maquiagem." },
  { n: "06", title: "Maquiagem social e adequação de estilo", text: "Leitura de referências, harmonização entre pele, olhos e boca, escolha de intensidade e criação de propostas elegantes para diferentes ocasiões." },
  { n: "07", title: "Durabilidade e fotografia", text: "Selagem por zonas, fixação, acabamento em diferentes iluminações, retoques e cuidados para que a maquiagem seja bem percebida ao vivo e em fotografia." },
  { n: "08", title: "Prática orientada e avaliação", text: "Demonstração técnica, execução em modelo, acompanhamento etapa a etapa, análise do resultado, identificação de pontos de evolução e plano de prática." },
  { n: "09", title: "Atendimento e desenvolvimento", text: "Organização do atendimento, comunicação com a cliente, montagem de nécessaire profissional e orientações para continuar desenvolvendo portfólio e confiança." },
];

const faqs = [
  { q: "Nunca fiz um curso de maquiagem. Posso participar?", a: "Sim. A Automaquiagem foi pensada também para quem está começando do zero. No Profissional VIP, a Larissa entende seu nível atual antes de orientar a melhor jornada." },
  { q: "Preciso levar meus próprios produtos?", a: "Na conversa inicial, a Larissa orienta o que será disponibilizado durante a aula e o que vale a pena trazer. Na Automaquiagem, seus produtos são bem-vindos para que você aprenda a usar melhor o que já tem." },
  { q: "O curso é individual ou em turma?", a: "A proposta é priorizar acompanhamento próximo, com atendimento individual ou em turma reduzida, conforme a modalidade e a agenda. Confirme o formato disponível ao solicitar informações." },
  { q: "Recebo certificado?", a: "A proposta de formação prevê certificado de participação. Os detalhes e critérios de conclusão são confirmados no momento da inscrição." },
  { q: "Como funciona a reserva da data?", a: "Envie o formulário de interesse. A equipe conversa com você para confirmar modalidade, disponibilidade, investimento e condições de reserva antes de qualquer compromisso." },
];



function contactLink(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    number: "01",
    label: "BELEZA & EXPRESSÃO",
    title: "Maquiagem Social",
    text: "Produções para ocasiões especiais, com técnicas que valorizam seus traços e respeitam seu estilo.",
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    color: "bg-[#d9c8c2]",
    image: "/images/servicos/maquiagem-social.jpg",
    imagePosition: "center 28%",
    message: "Olá, Larissa! Gostaria de informações sobre maquiagem social.",
  },
  {
    number: "02",
    label: "ARTE & CRIATIVIDADE",
    title: "Maquiagem Artística",
    text: "Criatividade, cores e técnicas para transformar ideias em produções expressivas e cheias de personalidade.",
    icon: <WandSparkles size={20} strokeWidth={1.5} />,
    color: "bg-[#e6dcd5]",
    image: "/images/servicos/maquiagem-artistica.jpg",
    imagePosition: "center 25%",
    message: "Olá, Larissa! Gostaria de informações sobre maquiagem artística.",
  },
  {
    number: "03",
    label: "HARMONIA & PRECISÃO",
    title: "Sobrancelhas",
    text: "Design que respeita seus traços e busca equilíbrio, definição e naturalidade.",
    icon: <Heart size={20} strokeWidth={1.5} />,
    color: "bg-[#d0b0af]",
    image: "/images/servicos/sobrancelhas.jpg",
    imagePosition: "center center",
    message: "Olá, Larissa! Gostaria de informações sobre design de sobrancelhas.",
  },
  {
    number: "04",
    label: "APRENDIZADO & PRÁTICA",
    title: "Formação",
    text: "Desenvolva suas habilidades, aprimore sua técnica e dê novos passos na sua trajetória na beleza.",
    icon: <GraduationCap size={21} strokeWidth={1.5} />,
    color: "bg-[#e4d8cf]",
    image: "/images/servicos/formacao.jpg",
    imagePosition: "center center",
    message: "Olá, Larissa! Gostaria de informações sobre os cursos de maquiagem.",
  },
];

export default function Home() {
  return (
    <>
      {/* Abertura original: vídeo preservado */}
      <section className="relative flex min-h-[calc(100svh-78px)] items-center justify-center overflow-hidden bg-[#292322] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Vídeo de abertura da Larissa Barbosa"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-veil absolute inset-0" />
        <div className="absolute left-[5%] right-[5%] top-7 flex justify-between text-[8px] tracking-[.18em] md:text-[9px]">
          <span>BEAUTY · BROWS · EDUCATION</span>
          <span>GUARULHOS, SP</span>
        </div>
        <div className="reveal relative z-10 mx-auto flex w-[min(92%,900px)] flex-col items-center px-4 py-24 text-center">
          <span className="flex items-center justify-center gap-3 text-[8px] tracking-[.2em] text-[#f1dada] md:text-[9px]">
            <span className="h-px w-7 bg-blush" /> BELEZA QUE REVELA QUEM VOCÊ É
          </span>
          <h1 className="serif my-6 text-[clamp(44px,8vw,100px)] leading-[1.04] tracking-[-.045em]">
            Realce sua beleza.<br />
            <em className="font-normal text-[#e3c2c0]">Revele sua essência.</em>
          </h1>
          <p className="mb-7 max-w-[440px] text-xs leading-7 text-white/80 md:text-sm">
Maquiagem profissional para noivas, eventos e produções, e design de
 sobrancelhas personalizado em Guarulhos.          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#servicos" className="button button-light">
              Descubra os serviços <ArrowDownRight size={17} />
            </a>
            <a
              href={contactLink("Olá, Larissa! Gostaria de entrar em contato para saber mais sobre seus serviços e agendar um horário.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[58px] items-center justify-center gap-3 border border-white/75 px-6 py-4 text-[10px] uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[#292322]"
            >
              Entrar em contato <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-5 left-[5%] right-[5%] flex justify-between text-[7px] tracking-[.15em] text-white/75 md:bottom-7 md:text-[9px]">
          <span>01 / BELEZA COM INTENÇÃO</span>
          <a href="#sobre">ROLE PARA EXPLORAR ↓</a>
        </div>
      </section>

      {/* Sobre — composição editorial; fotografia original preservada */}
      <section id="sobre" className="about-minimal">
        <div data-reveal className="about-minimal-container">
          <div className="about-minimal-photo">
            <div className="about-photo-frame">
              <Image
                src="/images/larissa-sobre.png"
                alt="Larissa Barbosa, maquiadora e designer de sobrancelhas"
                width={992}
                height={1488}
                className="about-minimal-image"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </div>
            <span className="about-photo-label">LARISSA BARBOSA · BELEZA COM IDENTIDADE</span>
          </div>

          <div className="about-minimal-content">
            <span className="about-minimal-eyebrow">CONHEÇA A PROFISSIONAL</span>
            <h2 className="about-minimal-title">A beleza de ser <em>quem você é.</em></h2>
            <p className="about-minimal-intro">
              Acredito que a beleza não precisa ser transformada, mas valorizada.
            </p>

            <div className="about-minimal-experience">
              <strong className="about-minimal-number">+10</strong>
              <div>
                <span>ANOS DE PROFISSÃO</span>
                <p>Experiência, dedicação e paixão pela beleza.</p>
              </div>
            </div>

            <div className="about-minimal-text">
              <p>Sou Larissa Barbosa, maquiadora e designer de sobrancelhas, e há mais de 10 anos dedico minha trajetória à arte de realçar a beleza feminina.</p>
              <p>Ao longo dessa jornada, desenvolvi meu olhar, aperfeiçoei minhas técnicas e descobri que cada rosto carrega uma identidade única.</p>
              <p>Meu trabalho vai além da maquiagem. Está nos detalhes, na delicadeza de cada escolha e na atenção dedicada a cada mulher.</p>
              <p>Busco criar experiências que valorizem seus traços, respeitem sua personalidade e despertem a confiança de se reconhecer ainda mais bonita.</p>
            </div>

            <p className="about-minimal-quote">Porque, para mim, a verdadeira beleza está na essência de cada mulher.</p>
            <a
              href={contactLink("Olá, Larissa! Gostaria de conhecer melhor seu trabalho e agendar um horário.")}
              target="_blank"
              rel="noreferrer"
              className="about-minimal-button"
            >
              Entre em contato <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="section-pad bg-[#f0ebe7]">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">CUIDADO EM CADA DETALHE</span>
            <h2 className="section-title mt-4">Seu momento <em>de beleza.</em></h2>
          </div>
          <p className="max-w-[300px] text-xs leading-6 text-muted">
            Experiências pensadas para valorizar seus traços com leveza, técnica e personalidade.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-cream md:py-24">
        <span data-reveal className="serif text-[80px] leading-none text-rose">“</span>
        <p data-reveal className="serif my-5 text-[clamp(30px,4.5vw,55px)] leading-snug">
          O detalhe faz a diferença.<br />
          <em className="font-normal text-[#d6b4b2]">A confiança transforma tudo.</em>
        </p>
        <span className="eyebrow">LARISSA BARBOSA</span>
      </section>

      <section className="flex flex-col justify-between gap-10 bg-[#e8dcd5] px-[7%] py-20 md:flex-row md:items-center md:px-[12%]">
        <div data-reveal>
          <span className="eyebrow">PARA QUEM QUER APRENDER</span>
          <h2 className="serif my-5 text-[clamp(42px,5.5vw,68px)] leading-tight">
            Transforme seu interesse<br />em <em className="font-normal text-rose">habilidade.</em>
          </h2>
          <p className="mb-6 max-w-[440px] text-xs leading-6 text-muted">
            Conheça as opções de cursos e envie seu interesse diretamente para a Larissa.
          </p>
          <a href="/cursos" className="button button-dark">
            Conhecer os cursos <ArrowRight size={17} />
          </a>
        </div>
        <div data-reveal className="mx-auto flex h-[190px] w-[190px] shrink-0 rotate-[-9deg] flex-col items-center justify-center gap-4 rounded-full border border-[#b99b96] text-[#715b58] md:mx-0 md:h-[220px] md:w-[220px]">
          <span className="text-[8px] tracking-[.2em]">APRENDA</span>
          <strong className="serif text-center text-3xl font-normal">com<br /><em className="text-rose">intenção</em></strong>
          <span className="text-[8px] tracking-[.2em]">PRATIQUE · EVOLUA</span>
        </div>
      </section>

    </>
  );
}

function ServiceCard({ number, label, title, text, icon, color, message, image, imagePosition }) {
  return (
    <article
      data-reveal
      className={`${color} flex min-h-[470px] flex-col overflow-hidden transition duration-500 hover:-translate-y-1`}
    >
      <div className="relative h-[190px] w-full shrink-0 overflow-hidden bg-[#e8ded8] sm:h-[205px]">
        <Image
          src={image}
          alt={`${title} — Larissa Barbosa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
          style={{ objectPosition: imagePosition || "center center" }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex justify-between text-[#62534f]">
          <span className="text-[10px] tracking-widest">{number}</span>
          {icon}
        </div>

        <div className="mt-7">
          <span className="text-[8px] tracking-[.18em] text-[#655957]">{label}</span>
          <h3 className="serif my-3 text-[30px] font-normal leading-tight">{title}</h3>
          <p className="max-w-[270px] text-[11px] leading-6 text-[#625b58]">{text}</p>
          <a
            href={contactLink(message)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-3 border-b border-black/25 pb-2 text-[9px] uppercase tracking-wider"
          >
            Saiba mais <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}


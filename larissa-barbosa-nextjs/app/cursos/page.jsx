"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, GraduationCap, Heart, Sparkles, Check, Clock3, UserRound, MessageCircle, BookOpen, Award } from "lucide-react";

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


export default function CursosPage() {
  return (
    <main>
      <div className="bg-[#f8f6f3] px-[7%] py-5 text-[10px] uppercase tracking-[.12em] text-muted"><Link href="/" className="hover:text-rose">Início</Link> <span className="px-2">/</span> Cursos</div>
      <div className="mx-auto max-w-[1440px] px-[7%] pt-8"><Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted hover:text-rose">← Voltar à página inicial</Link></div>
      <CoursesContent />
    </main>
  );
}

function CoursesContent() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", experience: "", goal: "", availability: "" });
  const [feedback, setFeedback] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const message = [
      "Olá, Larissa! Gostaria de receber informações sobre os cursos.",
      `Nome: ${form.name}`,
      `Meu WhatsApp: ${form.phone}`,
      `Curso de interesse: ${form.course}`,
      `Experiência: ${form.experience}`,
      `Meu objetivo: ${form.goal || "Gostaria de conversar para entender as opções."}`,
      `Disponibilidade: ${form.availability || "A combinar"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFeedback("Sua mensagem está pronta no WhatsApp. Confira os dados e toque em enviar para falar com a Larissa.");
  }

  return (
    <>
      <section id="cursos" className="relative overflow-hidden bg-[#e9ded8]">
        <div className="mx-auto grid min-h-[590px] max-w-[1440px] items-center gap-10 px-[7%] py-20 md:grid-cols-[1.1fr_.9fr] md:px-[10%]">
          <div data-reveal>
            <span className="eyebrow">LARISSA BARBOSA · EDUCAÇÃO</span>
            <h1 className="serif my-6 max-w-[760px] text-[clamp(50px,7vw,88px)] leading-[1.02] tracking-tight">Aprenda a realçar a beleza. <em className="text-rose">Desenvolva sua própria técnica.</em></h1>
            <p className="max-w-[530px] text-sm leading-7 text-muted">Mais do que aprender passos, você vai compreender escolhas. Cursos pensados para quem deseja se maquiar com autonomia ou evoluir profissionalmente, com orientação próxima, prática e atenção aos detalhes.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a className="button button-dark" href="#formacao">Conheça os cursos <ArrowDownRight size={17}/></a><a className="button border border-[#9f8580] text-ink" href="#interesse">Quero conversar <MessageCircle size={16}/></a></div>
          </div>
          
<div
  data-reveal
  className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#d4b8b2] md:mx-0"
>
  <Image
    src="/images/cursos-hero.jpg"
    alt="Aula prática de maquiagem: Larissa ensinando a aplicação de maquiagem em uma aluna"
    fill
    priority
    sizes="(max-width: 768px) 90vw, 42vw"
    className="object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.02]"
  />
</div>

        </div>
      </section>

      <section className="section-pad text-center">
        <span className="eyebrow">DO SEU PRIMEIRO PINCEL À SUA ASSINATURA PROFISSIONAL</span>
        <h2 className="section-title mx-auto mt-5 max-w-[850px]">Conhecimento que transforma técnica em <em>confiança.</em></h2>
        <p className="mx-auto mt-5 max-w-[680px] text-sm leading-7 text-muted">Cada pessoa chega com uma história, um objetivo e um ponto de partida. Por isso, a proposta é respeitar seu momento, desenvolver seu olhar e transformar aprendizado em prática — com beleza, intenção e identidade.</p>
      </section>

      <section id="formacao" className="bg-[#f0e9e4]">
        <div className="section-pad pb-8 text-center"><span className="eyebrow">ESCOLHA SUA JORNADA</span><h2 className="section-title mt-5">Do seu jeito, <em>no seu tempo.</em></h2></div>
        <div className="mx-auto grid max-w-[1440px] gap-7 px-[7%] pb-24 lg:grid-cols-2 lg:px-[10%]">
          <CourseCard number="01 / AUTONOMIA" title="Curso de Automaquiagem" subtitle="Aprenda a se maquiar. Descubra o que valoriza você." intro="Um encontro para entender sua beleza, conhecer os produtos certos e aprender técnicas que façam sentido para sua rotina — do visual leve ao look especial." audience="Para quem deseja aprender a se maquiar desde o início, melhorar o resultado que já consegue fazer ou ganhar segurança para criar sua própria produção." duration="Encontro presencial individual ou em dupla · duração sugerida de 3 a 4 horas, ajustada ao ritmo e às necessidades da aluna." includes={["Aula prática guiada, com demonstração das etapas", "Uso orientado de produtos e ferramentas durante a aula", "Material de apoio digital com o passo a passo", "Orientação para montar ou otimizar sua nécessaire", "Certificado de participação e recomendações para continuar praticando"]} modules={autoModules} outcome="Ao final, você terá mais clareza para preparar sua pele, escolher e aplicar produtos, valorizar seus traços e reproduzir uma maquiagem completa com independência e segurança." />
          <CourseCard number="02 / DESENVOLVIMENTO PROFISSIONAL" title="Profissional VIP · Aperfeiçoamento" subtitle="Eleve sua técnica. Aprimore seu olhar. Assine seu trabalho." intro="Uma experiência de desenvolvimento técnico para quem deseja iniciar na maquiagem profissional ou aperfeiçoar fundamentos, acabamento e consistência no atendimento." audience="Para iniciantes que desejam construir uma base técnica e para maquiadoras que já atendem e querem refinar processos, corrigir dificuldades e ampliar repertório." duration="Mentoria presencial individual, com conteúdo distribuído em módulos. Carga horária sugerida de 10 a 12 horas, organizada em um ou dois encontros conforme avaliação inicial." includes={["Diagnóstico inicial do nível técnico e dos objetivos", "Demonstrações detalhadas e prática acompanhada", "Material didático digital e roteiro de estudos", "Prática em modelo, conforme organização da turma e disponibilidade", "Certificado de participação", "Orientação pós-curso para direcionar os próximos passos"]} modules={proModules} outcome="Você concluirá com mais domínio dos fundamentos, critério para escolher produtos e técnicas, segurança na execução e uma visão mais estruturada do atendimento profissional — respeitando seu nível e ritmo de evolução." />
        </div>
        <p className="mx-auto max-w-4xl px-7 pb-14 text-center text-[10px] leading-5 text-muted">Duração, formato, materiais, prática em modelo, certificado e condições de acompanhamento são alinhados com a Larissa antes da confirmação da inscrição. A estrutura acima apresenta a proposta pedagógica das modalidades.</p>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1180px]"><div className="text-center"><span className="eyebrow">APRENDER COM INTENÇÃO</span><h2 className="section-title mt-5">Uma experiência de ensino <em>mais próxima.</em></h2><p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-muted">Técnica importa. Mas aprender a observar, escolher e executar com consciência é o que transforma conhecimento em resultado.</p></div>
          <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            <Benefit icon={<UserRound/>} title="Olhar individual" text="Orientação atenta ao seu nível, às suas dúvidas e aos objetivos que deseja alcançar."/>
            <Benefit icon={<Sparkles/>} title="Técnica com intenção" text="Mais do que reproduzir tendências, você aprende a entender o porquê de cada escolha."/>
            <Benefit icon={<Heart/>} title="Beleza respeitada" text="Um ensino que valoriza características individuais, identidade e diferentes estilos."/>
            <Benefit icon={<BookOpen/>} title="Aprendizado aplicável" text="Conteúdo organizado para transformar demonstração em prática e evolução contínua."/>
          </div>
        </div>
      </section>

      <section className="bg-[#e9ded8] section-pad">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2 className="section-title mt-5">Tudo começa com <em>uma pergunta.</em></h2><p className="mt-5 max-w-[360px] text-sm leading-7 text-muted">Se ainda não sabe qual caminho escolher, converse com a Larissa. A melhor formação é aquela que faz sentido para o seu momento.</p></div>
          <div>{faqs.map((item) => <details key={item.q} className="group border-t border-[#cbb9b3] py-5 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl marker:hidden">{item.q}<span className="text-rose transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-[650px] text-xs leading-6 text-muted">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section id="interesse" className="section-pad grid gap-12 md:grid-cols-[.85fr_1.15fr] md:gap-[10%]">
        <div><span className="eyebrow">VAMOS CONVERSAR?</span><h2 className="section-title mt-5">Seu próximo passo começa <em>aqui.</em></h2><p className="mt-5 max-w-[410px] text-sm leading-7 text-muted">Conte um pouco sobre você e o que deseja aprender. Sua resposta vai preparar uma mensagem no WhatsApp para que a Larissa possa entender seu momento e orientar a modalidade mais adequada.</p><div className="mt-8 flex items-start gap-3 text-xs leading-6 text-muted"><GraduationCap className="shrink-0 text-rose" size={24}/>Sem compromisso. Tire suas dúvidas, conheça a proposta e avalie com tranquilidade.</div><div className="mt-10 flex items-center gap-3 text-[10px] tracking-[.16em] text-rose"><Award size={18}/> APRENDIZADO COM IDENTIDADE</div></div>
        <form data-reveal onSubmit={submit} className="flex flex-col gap-6">
          <Field label="Como podemos chamar você?"><input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Seu nome"/></Field>
          <Field label="Qual é o seu WhatsApp?"><input required type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="(11) 99999-9999"/></Field>
          <Field label="Qual curso despertou seu interesse?"><select required value={form.course} onChange={e=>update("course",e.target.value)}><option value="">Selecione uma opção</option><option>Curso de Automaquiagem</option><option>Profissional VIP / Aperfeiçoamento</option><option>Ainda tenho dúvidas e quero orientação</option></select></Field>
          <fieldset className="flex flex-col gap-3"><legend className="text-[10px] tracking-wide">Você já tem experiência com maquiagem?</legend><label className="flex items-center gap-3 text-xs text-muted"><input required type="radio" name="experience" checked={form.experience==="Estou começando do zero"} onChange={()=>update("experience","Estou começando do zero")}/> Estou começando do zero</label><label className="flex items-center gap-3 text-xs text-muted"><input type="radio" name="experience" checked={form.experience==="Já me maquio, mas quero aprender mais"} onChange={()=>update("experience","Já me maquio, mas quero aprender mais")}/> Já me maquio, mas quero aprender mais</label><label className="flex items-center gap-3 text-xs text-muted"><input type="radio" name="experience" checked={form.experience==="Já trabalho com maquiagem"} onChange={()=>update("experience","Já trabalho com maquiagem")}/> Já trabalho com maquiagem</label></fieldset>
          <Field label="O que você gostaria de aprender ou aperfeiçoar?"><textarea rows="3" value={form.goal} onChange={e=>update("goal",e.target.value)} placeholder="Conte um pouco sobre seu objetivo..."/></Field>
          <Field label="Qual período costuma ser melhor para você? (opcional)"><select value={form.availability} onChange={e=>update("availability",e.target.value)}><option value="">Selecione se desejar</option><option>Durante a semana</option><option>Aos sábados</option><option>Tenho flexibilidade</option></select></Field>
          <button className="button button-dark self-start" type="submit">Enviar pelo WhatsApp <ArrowRight size={17}/></button>
          {feedback && <p role="status" className="bg-[#e8dcd5] p-3 text-[11px] leading-6">{feedback}</p>}
          <small className="text-[9px] leading-5 text-muted">Seus dados não são armazenados neste site. Ao clicar, o WhatsApp será aberto com a mensagem preenchida para você revisar e enviar.</small>
        </form>
      </section>

      <section className="bg-[#171515] px-[7%] py-20 text-center text-[#f8f6f3]">
        <span className="text-[9px] tracking-[.22em] text-[#d5aaa7]">LARISSA BARBOSA · BELEZA & EDUCAÇÃO</span>
        <h2 className="serif mx-auto mt-5 max-w-[800px] text-[clamp(40px,6vw,70px)] leading-[1.08]">Aprenda. Pratique. <em className="text-[#d5aaa7]">Descubra sua beleza.</em></h2>
        <p className="mx-auto mt-5 max-w-[540px] text-xs leading-6 text-[#c9bfbb]">Seja para se sentir mais confiante diante do espelho ou para dar um novo passo na maquiagem profissional, sua jornada pode começar com uma conversa.</p>
        <a className="button button-light mt-8" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá, Larissa! Gostaria de saber mais sobre os cursos de maquiagem.")}`} target="_blank" rel="noreferrer">Falar com a Larissa <ArrowRight size={17}/></a>
      </section>
    </>
  );
}

function CourseCard({ number, title, subtitle, intro, audience, duration, includes, modules, outcome }) {
  return <article data-reveal className="flex flex-col bg-[#f8f6f3] p-7 md:p-10">
    <span className="eyebrow">{number}</span><h3 className="serif mt-5 text-[clamp(34px,4vw,49px)] leading-[1.06]">{title}</h3><p className="serif mt-3 text-xl italic text-rose">{subtitle}</p><p className="mt-5 text-xs leading-7 text-muted">{intro}</p>
    <div className="mt-8 grid gap-5 border-y border-[#ded4cf] py-6"><Info icon={<UserRound/>} title="Para quem é" text={audience}/><Info icon={<Clock3/>} title="Duração e formato" text={duration}/></div>
    <div className="mt-7"><h4 className="serif text-2xl">O que faz parte da experiência</h4><ul className="mt-4 space-y-3">{includes.map(x=><li key={x} className="flex gap-3 text-xs leading-6 text-muted"><Check size={15} className="mt-1 shrink-0 text-rose"/>{x}</li>)}</ul></div>
    <div className="mt-9"><h4 className="serif text-2xl">Conteúdo programático</h4><p className="mt-2 text-[10px] leading-5 text-muted">Uma jornada organizada em etapas, com explicação, demonstração e prática orientada.</p><div className="mt-5">{modules.map(m=><div key={m.n} className="grid grid-cols-[38px_1fr] gap-3 border-t border-[#ded4cf] py-5"><span className="text-[10px] tracking-widest text-rose">{m.n}</span><div><h5 className="font-serif text-xl">{m.title}</h5><p className="mt-2 text-xs leading-6 text-muted">{m.text}</p></div></div>)}</div></div>
    <div className="mt-auto border-t border-[#ded4cf] pt-7"><span className="eyebrow">AO CONCLUIR</span><p className="mt-3 text-xs leading-7 text-muted">{outcome}</p><a href="#interesse" className="button button-dark mt-7">Tenho interesse <ArrowRight size={16}/></a></div>
  </article>;
}
function Info({ icon, title, text }) { return <div className="flex items-start gap-3"><span className="mt-1 text-rose">{icon}</span><div><h4 className="text-[10px] font-semibold uppercase tracking-[.12em]">{title}</h4><p className="mt-2 text-xs leading-6 text-muted">{text}</p></div></div>; }
function Benefit({ icon, title, text }) { return <div className="text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#cbb9b3] text-rose">{icon}</span><h3 className="serif mt-5 text-2xl">{title}</h3><p className="mt-3 text-xs leading-6 text-muted">{text}</p></div>; }
function Field({ label, children }) { return <label className="flex flex-col gap-2 text-[10px] tracking-wide [&_input]:border-b [&_input]:border-[#cfc2bd] [&_input]:bg-transparent [&_input]:py-3 [&_input]:text-xs [&_input]:outline-none [&_input]:focus:border-rose [&_select]:border-b [&_select]:border-[#cfc2bd] [&_select]:bg-transparent [&_select]:py-3 [&_select]:text-xs [&_select]:outline-none [&_select]:focus:border-rose [&_textarea]:border-b [&_textarea]:border-[#cfc2bd] [&_textarea]:bg-transparent [&_textarea]:py-3 [&_textarea]:text-xs [&_textarea]:outline-none [&_textarea]:focus:border-rose">{label}{children}</label>; }

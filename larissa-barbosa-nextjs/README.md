# Larissa Barbosa — Next.js + Tailwind CSS

Projeto criado com Next.js (React), Node.js e Tailwind CSS.

## Requisitos
- Node.js LTS instalado.
- VS Code.

## Executar no VS Code
1. Extraia o ZIP.
2. Abra a pasta `larissa-barbosa-nextjs` no VS Code.
3. Abra `Terminal > New Terminal`.
4. Execute, um por vez:

```bash
npm install
npm run dev
```

5. Abra `http://localhost:3000`.

## Build de produção
```bash
npm run build
npm start
```

## Vídeo
O vídeo fornecido está em `public/videos/hero-video.mp4`. O Next.js o carrega em `/videos/hero-video.mp4`.

## Antes de publicar
- Atualize o número oficial de WhatsApp em `components/Footer.jsx`, `app/page.jsx` e `app/cursos/page.jsx`, usando DDI + DDD + número, somente dígitos.
- Adicione o link oficial do Instagram em `components/Footer.jsx`.
- Substitua os marcadores do portfólio por fotos reais autorizadas.
- Confirme com a profissional quais cursos estão disponíveis e adicione apenas informações verdadeiras.
- O formulário não salva informações em banco de dados; com WhatsApp configurado, abre uma mensagem para a pessoa revisar e enviar.

## Estrutura
- `app/page.jsx`: homepage com vídeo, serviços, portfólio e chamada para cursos.
- `app/cursos/page.jsx`: página de cursos, formulário de interesse e FAQ.
- `components/Header.jsx`: menu responsivo.
- `components/Footer.jsx`: contato e rodapé.
- `app/globals.css` e `tailwind.config.js`: estilos e configuração Tailwind.

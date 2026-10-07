# Sync Clínica — prévia comercial

Landing exclusiva criada em 07/10/2026 para apresentação, sem contratação, aprovação ou publicação confirmadas. Fonte de marca: Instagram oficial @sync.clinica e links públicos da bio.

## Executar

`npm install` → `npm run build` → `npm run preview`.

Prévia compilada local: http://localhost:3018/. `npm run dev` serve desenvolvimento; para inspecionar conteúdo pré-renderizado sem JavaScript, use o build e preview.

Prévia GitHub Pages: https://luqbruno.github.io/sync-clinica-landing/ (deploy pelo workflow ao enviar alterações à `main`).

`npm run typecheck` verifica TypeScript. `node scripts/verify.mjs` executa a verificação visual/funcional local com o Chrome instalado e o Puppeteer da infraestrutura compartilhada; gera capturas em `.impeccable/review/` e relatório em `docs/VERIFICACOES.json`.

## Organização

- `src/content.ts`: dados, links e textos separados da apresentação.
- `src/App.tsx`: seções independentes e comportamentos acessíveis.
- `src/styles.css`: tokens, responsividade e movimento.
- `src/entry-server.tsx` e `scripts/prerender.mjs`: HTML inicial com texto e contato, sem depender da hidratação.
- `public/media`: imagens WebP locais, sem dependência de links temporários do Instagram.
- `materials/originals`: arquivos de referência preservados.
- `materials/manifest.json`: origem e processamento das imagens.
- `docs/DIRECAO-VISUAL.md`: direção criativa específica.
- `docs/FONTES-E-PENDENCIAS.md`: evidências e requisitos antes de publicação.

## Identidade e imagens

Verde-petróleo, azul profundo, branco, curvas de reciprocidade e fotografia real da equipe. Manrope auto-hospedada. As imagens da equipe não foram recriadas nem tiveram rostos alterados: foram redimensionadas e comprimidas. As capas do Instagram são reproduzidas como publicações, não como fotos de pacientes ou atendimentos reais.

A logo teve remoção de fundo assistida por IA. O arquivo original permanece preservado; a extração não é um novo logotipo nem um vetor oficial. Solicitar arquivo transparente/vetorial e autorização antes da publicação comercial.

## Limites

Não há analytics, pixel, formulário de dados de saúde, depoimentos, números de resultados, registros profissionais inventados ou envio automático de mensagens. WhatsApp abre conversa com mensagem geral. Página marcada `noindex,nofollow` enquanto demonstração. Aprovação clínica, autorização de materiais, registros e horários permanecem pendentes. Nenhum deploy foi autorizado nesta rodada.

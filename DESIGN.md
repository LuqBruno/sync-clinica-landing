---
name: Sync Clínica
description: Movimento em sincronia — presença humana, movimento e ciência.
colors:
  teal: "#006d78"
  deep: "#00535e"
  ink: "#143f47"
  muted: "#45656a"
  paper: "#f6f9f8"
  white: "#fff"
  line: "#d4e2e0"
  mist: "#e6f0ee"
  focus: "#cb793c"
typography:
  display:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(48px, 5.3vw, 82px)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(36px, 4vw, 58px)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "32px"
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "15px"
    lineHeight: 1.7
  label:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "14px"
    fontWeight: 700
rounded:
  sm: "12px"
  md: "28px"
  lg: "48px"
spacing:
  gutter: "clamp(24px, 5vw, 80px)"
  section: "110px"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "28px"
  heading: "48px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "17px 22px"
  button-primary-hover:
    backgroundColor: "{colors.deep}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "17px 22px"
  button-light-hover:
    backgroundColor: "{colors.mist}"
  navigation:
    textColor: "{colors.ink}"
  care-explorer:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "32px 40px 42px"
  care-tab:
    textColor: "#d4e8e8"
    padding: "8px 0 20px"
  care-tab-selected:
    textColor: "{colors.white}"
  approach-step:
    textColor: "{colors.ink}"
    padding: "22px 0 0"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Sync Clínica

## Overview

**Creative North Star: "Movimento em sincronia"**

Movimento em sincronia traduz a identidade oficial em curvas que se encontram, tipografia precisa e presença humana. Verde-petróleo, azul profundo e branco sustentam a interface; fotografias reais mantêm seus tons quentes e oferecem o contraponto material.

A composição é editorial e espaçosa, com títulos densos e superfícies planas. Movimento indica mudança de estado e aproximação, sem simular medições clínicas. O conteúdo permanece legível e disponível quando animações são reduzidas.

**Key Characteristics:**

- Paleta oficial com contraste entre petróleo e superfícies claras.
- Manrope Variable em toda a hierarquia.
- Curvas recíprocas e fotografia real como assinatura.
- Feedback curto, foco visível e conteúdo independente de animação.

Extração em 07/10/2026 de `src/styles.css` e `src/App.tsx`, com identidade confirmada em `PRODUCT.md` e `docs/DIRECAO-VISUAL.md`. O frontmatter registra valores do código; o sidecar complementa estados e comportamento. Demonstração local, sujeita à aprovação da clínica.

## Colors

A paleta concentra a ação no verde-petróleo, apoia o encerramento em azul profundo e mantém a leitura sobre branco e névoa clara.

### Primary

- **Petróleo vivo — teal:** ações principais, realce de títulos e superfície do explorador.
- **Petróleo profundo — deep:** contato, fundo das capas e resposta de hover do botão principal.

### Neutral

- **Tinta azul-petróleo — ink:** títulos e leitura principal.
- **Cinza-petróleo — muted:** descrições e informação de apoio.
- **Papel frio — paper:** superfície dominante.
- **Branco — white:** texto sobre petróleo e ação clara.
- **Linha mineral — line:** divisores e contorno do menu.
- **Névoa — mist:** faixa de abordagem e hover da ação clara.
- **Cobre de foco — focus:** contorno de teclado. Sinal funcional, sem extensão para a identidade comercial.

**The Identidade Oficial Rule.** A paleta e o logo vêm dos materiais oficiais; referências de catálogo não substituem essa identidade.

## Typography

**Display Font:** Manrope Variable, com fallback sans-serif.  
**Body Font:** Manrope Variable, com fallback sans-serif.

A mesma família conecta precisão e acolhimento. Títulos usam peso intermediário e espaçamento compacto; parágrafos recebem entrelinha generosa.

### Hierarchy

- **Display:** título principal, com escala fluida do frontmatter; no celular a expressão final é `clamp(43px, 11vw, 54px)`.
- **Headline:** títulos de seção; abaixo de 900px passa a 42px e abaixo de 600px a `clamp(34px, 9vw, 44px)`, entrelinha 1.14. Abordagem e contato têm ajustes próprios no CSS.
- **Title:** título do atendimento; 28px abaixo de 900px, 27px abaixo de 600px e 25px abaixo de 380px. Títulos de pessoas e publicações têm suas escalas próprias.
- **Body:** descrições usam 15px, com redução observada para 14px em celular. Limites de largura variam entre 380px e 530px conforme contexto.
- **Label:** ações usam 14px e peso 700; navegação usa 13px e peso 650. Sem transformação global para maiúsculas.

## Layout

Contêiner máximo de 1600px com margem automática e recuo fluido. Seções usam ritmo vertical de 110px, com exceções específicas; abaixo de 900px o ritmo é 80px e abaixo de 600px, 65px. O recuo torna-se 24px no celular e 20px abaixo de 380px.

A primeira composição usa duas colunas na proporção 1:1.25; passa a 1:1 em tablet e empilha abaixo de 600px. A fotografia principal preserva proporção 3:2 em tablet e celular após as correções finais. Pessoas e publicações usam três colunas e passam a uma no celular. Contato também empilha. As abas passam de uma linha para grade de duas colunas.

O cabeçalho permanece no topo, com altura mínima 96px, reduzida para 82px abaixo de 900px. A navegação vira painel móvel nessa largura. Recuo de âncoras evita conteúdo escondido pelo cabeçalho.

## Elevation & Depth

Não há box-shadow no sistema implementado. Profundidade vem de planos tonais, fotografia, recorte assimétrico e linhas curvas. O cabeçalho usa papel quase opaco e a legenda fotográfica usa branco quase opaco, sem blur.

**The Planos Tonais Rule.** Separe superfícies por cor, espaço e contorno; preserve a ausência de sombras do sistema atual.

## Shapes

A escala distingue ações compactas, imagens e superfícies amplas. No celular, o raio médio torna-se 22px e o grande, 28px. A fotografia principal tem canto superior esquerdo expandido, com forma assimétrica; as órbitas e o indicador de publicação usam círculos. Divisores finos organizam a leitura sem envolver cada bloco numa caixa.

## Components

### Buttons

Ação confiante e direta. Botão principal tem altura mínima 56px, seta de 20px e separação de 24px. Hover em ponteiro preciso escurece para deep; a variante clara passa para mist. Pressão aplica escala 0.98. Foco recebe contorno cobre de 3px com offset de 5px. No hero móvel, o botão preenche a largura disponível até 360px; o contato móvel usa largura completa.

### Navigation

Texto compacto, links com alvo mínimo de 44px e ação de contato preenchida. Hover dos links simples usa teal. Não existe estado de seção ativa implementado. No celular, o botão alterna Menu/Fechar e `aria-expanded`; painel aberto ocupa a área abaixo do cabeçalho, bloqueia rolagem e mantém o foco dentro. Escape fecha e retorna o foco.

### Cards / Containers

Os blocos de pessoa e publicação permanecem planos, sem caixa externa. Retratos recebem raio médio e recorte controlado; hover amplia a imagem para 1.025 em 600ms. Capas preservam o conteúdo original com contain; o círculo de seta responde com deslocamento de 2px. Etapas da abordagem são unidades editoriais com linha superior, título e descrição, sem sombra nem raio próprio.

### Explorador de atendimentos

Superfície petróleo com raio grande. Aba selecionada usa texto branco, peso 750, linha branca e seta visível; demais abas usam texto claro suavizado. Setas do teclado, Home e End movem seleção e foco; apenas a selecionada está na ordem de Tab. Painel associa título e aba por ARIA.

Curvas rotacionam conforme seleção em 600ms, com easing do sistema, sem representar dados clínicos. O conteúdo troca imediatamente; não há transição de texto implementada. Em movimento reduzido, rotações são removidas.

### Links editoriais

Texto sublinhado com offset de 6px e seta. Alvo mínimo de 44px, peso 700 e hover teal; sobre superfícies escuras permanece branco. Foco usa o mesmo indicador global.

### Movimento e acessibilidade

Entradas pontuais usam Web Animations: 650ms, opacidade 0.65 → 1 e deslocamento vertical 16px → 0, uma vez, ao atingir threshold 0.13. Texto está disponível antes da entrada. Movimento reduzido desativa a criação dessas animações e o scroll suave. Contraste aumentado escurece texto de apoio e divisores e torna cabeçalho e legenda opacos.

Não há campos de formulário, chips ou tooltips implementados; não criar documentação de componentes inexistentes.

## Do's and Don'ts

### Do:

- Do preservar o logo oficial e os tons quentes das fotografias reais.
- Do usar as curvas como expressão de reciprocidade, sem atribuir significado clínico.
- Do manter títulos balanceados, texto corrido confortável e foco visível.
- Do respeitar movimento reduzido e a reorganização dos componentes no celular.

### Don't:

- Don't criar retratos artificiais de profissionais ou pacientes para substituir os materiais reais.
- Don't introduzir glassmorphism arbitrário ou transformar o logo em um card.
- Don't transformar curvas decorativas em gráficos de resultados ou medições.
- Don't depender de hover ou de animações para revelar conteúdo essencial.


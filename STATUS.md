# STATUS — Sync Clínica

## Estado em 07/10/2026

Demonstração comercial implementada, versão `sync-01`, compilada e testada localmente em 07/10/2026. Publicação no GitHub Pages solicitada pelo usuário. A página informa que é demonstração; não confundir com contratação ou aprovação da clínica.

## Decisões vigentes

- Marca própria baseada em fontes oficiais: verde-petróleo/azul profundo/branco e fotos reais da equipe.
- Atendimento confirmado em Tubarão/SC, não Criciúma.
- Canal da bio: +55 48 98804-1484; preservar como dado público e confirmar preferência institucional antes de publicação.
- Reabilitação, Quiropraxia, Osteopatia e Recovery observados nas fontes oficiais; descrições conservadoras sujeitas à revisão clínica.
- Equipe: Marcos Balsini Prates, Henrique Corrêa e Vitor Sampaio; não atribuir especialista, RQE ou RT sem comprovação.
- Imagens locais otimizadas; originais e origens preservados. Sem geração de pessoas.
- Logo extraída com IA para fundo transparente: substituir pelo arquivo oficial quando recebido.
- Conteúdo e contato pré-renderizados; efeitos não bloqueiam a leitura. Sem bibliotecas pesadas de animação ou WebGL, pois não contribuem ao objetivo deste projeto.

## Verificações desta rodada

Resultados efetivos em `docs/VERIFICACOES.json` e capturas de `.impeccable/review/`. Build final: JavaScript `index-C0-BVUcN.js` (74,03 kB gzip), CSS `index-DyIJ4dsF.css` (7,52 kB gzip). React/React DOM 19.3.0, Vite 7.3.7, TypeScript 5.9.3, Manrope Variable 5.3.0. Sem GSAP, Three ou Motion: o explorador de atendimentos e movimentos curtos usam CSS/Web Animations nativas.

- TypeScript, build Vite e pré-renderização: aprovados.
- 360, 390, 430, 768, 1024 e 1440 px: sem estouro horizontal, todas as imagens carregadas e sem erros de execução capturados.
- Abas: clique, setas e relação `aria-controls` verificados. Menu mobile: abrir, fechar por Escape. Todos os cinco CTAs usam o número da bio e a mesma mensagem geral.
- Movimento reduzido: captura específica; conteúdo preservado. JavaScript desativado: título e WhatsApp presentes no HTML.
- Revisão visual independente pediu proporção natural da foto em tablet e painel acessível de ID estável; ambos corrigidos em um lote e recapturados.
- Parecer final independente: `ship` para demonstração local; as duas correções foram pontuadas como `resolved`. Esse parecer não é aprovação da clínica nem validação para publicação.
- Detector Impeccable: uma execução, sem achados mecânicos. Não constitui auditoria completa de acessibilidade.
- Imagens: fonte local em WebP, originais e origem preservados, sem alteração de rostos. Capas ilustrativas identificadas como publicações, não atendimentos reais.
- Não foram medidos Lighthouse, Core Web Vitals de produção ou navegação com leitor de tela; não alegar resultados desses testes.

A primeira coleta de screenshots não aguardou corretamente imagens lazy devido à rolagem suave; o método foi corrigido e as evidências finais aguardam a decodificação de todas as imagens. Isso não foi tratado como erro comercial de publicação.

## Pendências reais

Autorização de marca/fotos; vetor da logo; inscrições profissionais, qualificações e RT; horários; validação final dos textos e dados pela clínica. Download do vídeo oficial dos ambientes falhou; nenhuma imagem de ambiente externo foi utilizada para substituí-lo.

## Próxima ação

Aguardar a conclusão da primeira implantação no GitHub Actions e validar a versão servida. Obter aprovação dos materiais/dados da clínica antes de usar como peça comercial aprovada. Nenhuma mensagem foi enviada.

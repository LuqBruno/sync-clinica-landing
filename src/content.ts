export const contact = {
  number: "5548988041484",
  display: "(48) 98804-1484",
  message:
    "Olá, equipe Sync! Gostaria de informações sobre uma avaliação de fisioterapia.",
  address: "Rua Aldomar Cardoso, 64, sala 203",
  neighborhood: "Passagem · Tubarão, SC",
  instagram: "https://www.instagram.com/sync.clinica/",
};
export const whatsapp = `https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`;
export const maps =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Sync Clínica Rua Aldomar Cardoso 64 sala 203 Passagem Tubarão SC",
  );
export const services = [
  {
    name: "Reabilitação",
    title: "Um plano que começa por você.",
    text: "Dores, lesões ou recuperação após cirurgias ortopédicas: o primeiro passo é compreender seu momento, sua rotina e seus objetivos.",
    detail:
      "A avaliação orienta a escolha do cuidado. A equipe acompanha seu caso e discute o plano de tratamento em conjunto.",
    cue: "Da rotina ao esporte",
  },
  {
    name: "Quiropraxia",
    title: "Antes da técnica, a avaliação.",
    text: "A quiropraxia integra os atendimentos da Sync. Converse com a equipe para entender se esse recurso faz sentido para o seu caso.",
    detail:
      "A indicação de cada técnica depende de uma avaliação individual. Não existe uma mesma resposta para todas as pessoas.",
    cue: "Cuidado individualizado",
  },
  {
    name: "Osteopatia",
    title: "Olhar para o corpo como um conjunto.",
    text: "A osteopatia faz parte dos recursos de atendimento oferecidos pela clínica, com análise individual das suas necessidades.",
    detail:
      "Na avaliação, o profissional explica a proposta de atendimento e os recursos que podem compor seu plano de cuidado.",
    cue: "Escuta e análise",
  },
  {
    name: "Recovery",
    title: "Cuidado também faz parte da rotina.",
    text: "A Sync oferece recovery. Solicite informações sobre os recursos disponíveis e como esse atendimento pode se encaixar na sua rotina.",
    detail:
      "A equipe orienta a indicação e esclarece suas dúvidas antes de programar o atendimento.",
    cue: "Movimento e recuperação",
  },
];
export const team = [
  {
    name: "Marcos Balsini Prates",
    field: "Fisioterapia e Osteopatia",
    image: "marcos",
    url: "https://www.instagram.com/balsiniosteopatia/",
  },
  {
    name: "Henrique Corrêa",
    field: "Movimento, dor e performance",
    image: "henrique",
    url: "https://www.instagram.com/fisio.henriquecorreas/",
  },
  {
    name: "Vitor Sampaio",
    field: "Fisioterapia Traumato-Ortopédica",
    image: "vitor",
    url: "https://www.instagram.com/fisio.vitor/",
  },
];
export const posts = [
  {
    title: "Sua rotina também entra na conversa.",
    text: "Um conteúdo sobre tempo sentado, variação de movimentos e desconfortos na rotina.",
    image: "postura",
    url: "https://www.instagram.com/sync.clinica/p/Ddtrpi4x9NE/",
  },
  {
    title: "Cuidado não é uma receita pronta.",
    text: "Por que história, rotina e objetivos pessoais importam no atendimento individualizado.",
    image: "cuidado",
    url: "https://www.instagram.com/sync.clinica/p/DdpKNT3CoUk/",
  },
  {
    title: "Informação para entender a artrose.",
    text: "A importância de analisar cada caso e conversar sobre as possibilidades de cuidado.",
    image: "artrose",
    url: "https://www.instagram.com/sync.clinica/p/DdKWKENlDtk/",
  },
];

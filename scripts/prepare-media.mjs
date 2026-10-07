import { createRequire } from 'node:module';
import { mkdir, writeFile, stat } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [process.env.CODEX_MEDIA_MODULES || 'C:/Users/itzlu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules'] }));
await mkdir('public/media', { recursive: true });
const records = [];
for (const name of ['equipe', 'marcos', 'henrique', 'vitor', 'postura', 'cuidado', 'artrose']) {
  const input = `materials/originals/${name}.jpg`;
  const origin = ['equipe','marcos','henrique','vitor'].includes(name) ? 'https://www.instagram.com/sync.clinica/p/DRXj5NBESpZ/' : {postura:'https://www.instagram.com/sync.clinica/p/Ddtrpi4x9NE/',cuidado:'https://www.instagram.com/sync.clinica/p/DdpKNT3CoUk/',artrose:'https://www.instagram.com/sync.clinica/p/DdKWKENlDtk/'}[name];
  const width = name === 'equipe' ? 1440 : ['marcos','henrique','vitor'].includes(name) ? 960 : 640;
  for (const size of [width, Math.min(640,width)]) {
    const file = `public/media/${name}${size===width?'':`-${size}`}.webp`;
    await sharp(input).rotate().resize({width:size,withoutEnlargement:true}).webp({quality:85,effort:6}).withXmp(`<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:source>${origin}</dc:source></rdf:Description></rdf:RDF></x:xmpmeta>`).toFile(file);
    records.push({file,origin,bytes:(await stat(file)).size,processing:'Redimensionamento proporcional e compressão WebP; sem alteração de pessoas ou conteúdo.',permission:'Uso comercial pendente de autorização.'});
    if (size === 640 && width === 640) break;
  }
}
await sharp('materials/logo-transparente.png').resize({width:900,withoutEnlargement:true}).webp({lossless:true}).toFile('public/media/logo.webp');
records.push({file:'public/media/logo.webp',origin:'https://ugc.production.linktr.ee/4135b665-7c9f-4e6e-8c39-fa66424abf5e_SYNC---PERFIL-07.png',processing:'Remoção de fundo assistida por IA, sem intenção de redesenho. Original preservado. Substituir pelo vetor oficial antes da publicação comercial.',permission:'Pendente.'});
await writeFile('materials/manifest.json', JSON.stringify({date:'2026-10-07',records},null,2));
console.log('Mídias preparadas:', records.length);

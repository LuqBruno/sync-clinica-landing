import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const puppeteer=require(require.resolve('puppeteer-core',{paths:['../../../03_Empresa_Interna/05_Templates/aesthetic']}));
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const dir='.impeccable/review'; await mkdir(dir,{recursive:true});
const reports=[];
for(const width of [360,390,430,768,1024,1440]){
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width,height:width<500?844:1000,isMobile:width<500,hasTouch:width<500});
 await page.goto('http://localhost:3018/',{waitUntil:'networkidle0'});await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(async()=>{document.documentElement.style.scrollBehavior='auto';for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,120));}await Promise.all(Array.from(document.images).map(async i=>{i.loading='eager';try{await i.decode();}catch{}}));scrollTo({top:0,behavior:'instant'});});
 await new Promise(r=>setTimeout(r,800));
 const metrics=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,ariaControls:Array.from(document.querySelectorAll('[role="tab"]')).every(t=>!!document.getElementById(t.getAttribute('aria-controls'))),images:Array.from(document.images).map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0})),contacts:Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a=>a.getAttribute('href')),resources:performance.getEntriesByType('resource').reduce((s,e)=>s+e.transferSize,0)}));
 const stem=width===1440?'desktop':width===390?'mobile':`user-${width}`;
 await page.screenshot({path:`${dir}/${stem}.png`,fullPage:true});await page.screenshot({path:`${dir}/${stem}-hero.png`});
 await page.locator('#tab-2').click();const selected=await page.$eval('#tab-2',e=>e.getAttribute('aria-selected'));
 await page.focus('#tab-2');await page.keyboard.press('ArrowRight');const keyboard=await page.$eval('#tab-3',e=>e.getAttribute('aria-selected'));
 let menu=true;if(width<768){await page.locator('.menu-toggle').click();await page.keyboard.press('Escape');menu=await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')==='false');}
 reports.push({width,errors,...metrics,tabs:selected==='true',tabKeyboard:keyboard==='true',menuEscape:menu});await page.close();
}
const reduced=await browser.newPage();await reduced.setViewport({width:390,height:844});await reduced.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await reduced.goto('http://localhost:3018/',{waitUntil:'networkidle0'});await reduced.evaluate(async()=>{await Promise.all(Array.from(document.images).map(async i=>{i.loading='eager';try{await i.decode();}catch{}}));});await reduced.screenshot({path:`${dir}/reduced-motion.png`,fullPage:true});
const nojs=await browser.newPage();await nojs.setJavaScriptEnabled(false);await nojs.goto('http://localhost:3018/',{waitUntil:'networkidle0'});const fallback=await nojs.evaluate(()=>({h1:document.querySelector('h1')?.textContent,contact:!!document.querySelector('a[href*="wa.me"]')}));
await browser.close();await writeFile('docs/VERIFICACOES.json',JSON.stringify({date:new Date().toISOString(),reports,reducedMotion:'Capturado com preferência reduce',noJavaScript:fallback},null,2));
console.log(JSON.stringify({reports:reports.map(({images,contacts,...r})=>r),fallback},null,2));
if(reports.some(r=>r.overflow||r.errors.length||r.images.some(i=>!i.loaded)||!r.ariaControls||!r.tabs||!r.tabKeyboard||!r.menuEscape)||!fallback.h1||!fallback.contact)process.exitCode=1;

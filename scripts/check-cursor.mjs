import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';

function element(){return {children:[],attributes:{},events:{},values:{},style:{setProperty(key,value){this.owner.values[key]=value}},append(...children){this.children.push(...children)},prepend(child){this.children.unshift(child)},setAttribute(key,value){this.attributes[key]=value},addEventListener(event,handler){this.events[event]=handler}};}
function makeElement(){const node=element();node.style.owner=node;return node;}
const surfaces=[makeElement(),makeElement()];
surfaces[0].getBoundingClientRect=()=>({left:30,top:90});
surfaces[1].getBoundingClientRect=()=>({left:10,top:300});
surfaces.forEach(surface=>surface.closest=()=>surface);
const reduced={matches:false,addEventListener(event,handler){this.change=handler}};
const fine={matches:true,addEventListener(event,handler){this.change=handler}};
const frames=new Map();let frameId=0,time=0;
const window={events:{},matchMedia:query=>query.includes('reduced-motion')?reduced:fine,requestAnimationFrame(callback){frames.set(++frameId,callback);return frameId},cancelAnimationFrame(id){frames.delete(id)},addEventListener(event,handler){this.events[event]=handler}};
const document={hidden:false,events:{},documentElement:makeElement(),querySelectorAll:()=>surfaces,createElement:makeElement,addEventListener(event,handler){this.events[event]=handler}};
runInNewContext(await readFile(new URL('../assets/cursor-magic.js',import.meta.url),'utf8'),{window,document,Map,Math});
assert.equal(frames.size,0,'No idle animation loop');
for(const surface of surfaces){const layer=surface.children[0];assert.equal(layer.className,'cursor-magic');assert.equal(layer.attributes['aria-hidden'],'true');assert.equal(layer.children[0].className,'pointer-wrap');assert.equal(layer.children[1].className,'cursor-pattern');}
function move(target=surfaces[0],clientX=160,clientY=210,pointerType='mouse'){document.events.pointermove({target,clientX,clientY,pointerType});}
function settle(){let iterations=0;while(frames.size){assert(iterations++<200,'Animation must settle');const batch=[...frames.values()];frames.clear();time+=16;batch.forEach(callback=>callback(time));}}
move();move();assert.equal(frames.size,1,'Pointer events coalesce into one frame');settle();
const first=surfaces[0].children[0],second=surfaces[1].children[0];
assert.equal(first.values['--cursor-x'],'130.00px');assert.equal(first.values['--cursor-y'],'120.00px');assert.equal(first.values['--cursor-visible'],'1');
move(surfaces[0],450,350);settle();assert.equal(first.values['--cursor-x'],'420.00px');assert.equal(frames.size,0);
move(surfaces[1],200,450);settle();assert.equal(first.values['--cursor-visible'],'0');assert.equal(second.values['--cursor-y'],'150.00px');
window.events.scroll();assert.equal(second.values['--cursor-visible'],'0');assert.equal(frames.size,0);
move();window.events.blur();assert.equal(frames.size,0);assert.equal(first.values['--cursor-visible'],'0');
move();document.documentElement.events.pointerleave();assert.equal(frames.size,0);
move();document.hidden=true;document.events.visibilitychange();assert.equal(frames.size,0);move();assert.equal(frames.size,0);document.hidden=false;
reduced.matches=true;reduced.change();move();assert.equal(frames.size,0,'Reduced motion disables tracking');reduced.matches=false;
fine.matches=false;fine.change();move();assert.equal(frames.size,0,'Touch-only devices disable tracking');fine.matches=true;
move(surfaces[0],120,150,'touch');assert.equal(frames.size,0);
move({closest:()=>null});assert.equal(frames.size,0,'Leaving decorated sections stops tracking');
move();settle();assert.equal(first.values['--cursor-visible'],'1','Tracking resumes when eligible');
const css=await readFile(new URL('../assets/cursor-magic.css',import.meta.url),'utf8');
assert.match(css,/:root\[data-theme=dark\]/);assert.match(css,/pointer-events:none/);assert.match(css,/prefers-reduced-motion:reduce/);
assert.match(css,/\.cursor-pattern,\.pointer-gradient\{[^}]*mask-image:url\('geometric-pattern.svg'\)/,'Both static and interactive colors must be clipped to the geometric lines');
assert.match(css,/\.cursor-pattern\{[^}]*opacity:var\(--pattern-base\)/,'The full pattern remains visible without pointer input');
assert.match(css,/@media\(any-hover:none\),\(prefers-reduced-motion:reduce\)\{\.pointer-wrap\{display:none\}\}/,'Reduced motion hides only interactive coloring');
assert(!css.includes('border-radius:50%'),'No circular cursor blob');
const tile=await readFile(new URL('../assets/geometric-pattern.svg',import.meta.url),'utf8');
assert.match(tile,/viewBox="0 0 101 58"/);assert.match(tile,/<mask id="lines"/);assert(!/<script|<image|<foreignObject|https?:\/\//i.test(tile.replace(/xmlns="[^"]+"/,'')),'Pattern must be self-contained');
console.log('Passed: cursor layers, coordinates, animation cleanup, pointer/motion guards, theme palettes, full-surface geometric stencil, static fallback, and local SVG asset.');

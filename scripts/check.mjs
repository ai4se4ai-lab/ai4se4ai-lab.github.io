import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
const root=new URL('../',import.meta.url);
const html=await readFile(new URL('index.html',root),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
 if(href.startsWith('#'))assert(ids.includes(href.slice(1)),`Missing anchor ${href}`);
 else if(!/^(https?:|mailto:)/.test(href))await access(new URL(href,root));
}
const data=JSON.parse(await readFile(new URL('assets/repositories.json',root),'utf8'));
assert.equal(new Set(data.repositories.map(repo=>repo.name)).size,data.repositories.length);
assert(data.repositories.length>0);
for(const repo of data.repositories)assert(repo.html_url.startsWith('https://github.com/ai4se4ai-lab/'));
function element(){const classes=new Set();return {innerHTML:'',textContent:'',value:'',dataset:{},style:{},attributes:{},hidden:false,className:'',children:[],listeners:{},classList:{toggle(name,force){const on=force??!classes.has(name);if(on)classes.add(name);else classes.delete(name);return on},add(name){classes.add(name)},remove(name){classes.delete(name)},contains(name){return classes.has(name)}},setAttribute(name,value){this.attributes[name]=String(value)},removeAttribute(name){delete this.attributes[name]},focus(){this.focused=true},addEventListener(type,callback){this.listeners[type]=callback},querySelectorAll(){return []},replaceChildren(){this.children=[]},append(...children){this.children.push(...children)}};}
const elements=new Map(ids.map(id=>['#'+id,element()]));
elements.set('.menu-toggle',element());elements.get('#repo-kind').value='all';
const appearanceRoot=Object.assign(element(),{dataset:{theme:'dark'}});
const filterButtons=['All','Agents','Analysis','Infrastructure'].map(filter=>Object.assign(element(),{dataset:{filter}}));
const categoryLinks=['Agents','Analysis','Infrastructure'].map(projectCategory=>Object.assign(element(),{dataset:{projectCategory}}));
const document={querySelector(selector){assert(elements.has(selector),`Missing element ${selector}`);return elements.get(selector)},querySelectorAll(selector){if(selector==='[data-theme]')return [appearanceRoot];if(selector==='.filter')return filterButtons;if(selector==='a[data-project-category]')return categoryLinks;return []},addEventListener(){},createElement(){return element()}};
const context={document,window:{},Date,fetch:async()=>({ok:true,json:async()=>data})};
runInNewContext(await readFile(new URL('assets/publication-data.js',root),'utf8'),context);
runInNewContext(await readFile(new URL('assets/main.js',root),'utf8'),context);
await new Promise(resolve=>setImmediate(resolve));
const evaluate=code=>runInNewContext(code,context);
const count=selector=>(elements.get(selector).innerHTML.match(/<article /g)||[]).length;
assert.equal(count('#project-grid'),11);
// Real clicks bubble to <html data-theme="dark">. Appearance must never filter projects.
for(const [index,expected] of [[1,3],[2,6],[3,2],[0,11]]){
 filterButtons[index].listeners.click();appearanceRoot.listeners.click?.();assert.equal(count('#project-grid'),expected);
 assert.equal(filterButtons[index].attributes['aria-pressed'],'true');
}
for(const [index,expected] of [[0,3],[1,6],[2,2]]){categoryLinks[index].listeners.click();appearanceRoot.listeners.click?.();assert.equal(count('#project-grid'),expected);}
evaluate("renderProjects('All')");
assert.match(html,/<section class="repository-directory"/,'Repository directory must be visible without expanding details');
assert(!html.includes('<details class="repository-directory"'));
for(const [category,expected] of [['Agents',3],['Analysis',6],['Infrastructure',2]]){evaluate(`renderProjects('${category}')`);assert.equal(count('#project-grid'),expected);}
evaluate("renderProjects('All')");assert.equal(count('#project-grid'),11);
assert.equal(count('#publication-list'),16);
assert.equal((elements.get('#publication-list').innerHTML.match(/class="publication-disclosure"/g)||[]).length,16);
assert.equal((elements.get('#publication-list').innerHTML.match(/data-pub-tab="abstract"/g)||[]).length,16);
assert.match(elements.get('#publication-list').innerHTML,/Published paper/);
assert.match(elements.get('#publication-list').innerHTML,/Download .bib/);
assert.match(elements.get('#publication-list').innerHTML,/Abstract summary/);
evaluate("renderPublications('review')");assert.equal(count('#publication-list'),7);
assert(!elements.get('#publication-list').innerHTML.includes('data-pub-tab="abstract"'));
assert(!elements.get('#publication-list').innerHTML.includes('Published paper'));
assert.match(elements.get('#publication-list').innerHTML,/@unpublished/);
assert(!evaluate('createBibTeX(submitted[0][2], publicationDetails[submitted[0][2]])').includes('journal ='));
for(const group of ['published','submitted']){
 const records=evaluate(`${group}.map(entry => ({title:entry[2],metadata:publicationDetails[entry[2]]}))`);
 for(const {title,metadata} of records){assert(metadata?.author,`Missing citation metadata for ${title}`);assert.match(evaluate(`createBibTeX(${JSON.stringify(title)}, publicationDetails[${JSON.stringify(title)}])`),/^@\w+\{[\w-]+,/);if(metadata.paperUrl)assert(!metadata.paperUrl.includes('github.com'),'Code repositories must not be labeled as published papers');}
}
// Check tab activation, roving focus, clipboard success, and denied clipboard fallback.
const abstractTab=element(),bibTab=element(),abstractPanel=element(),bibPanel=element();
const publicationContent={querySelectorAll:()=>[abstractTab,bibTab]};
for(const [tab,id] of [[abstractTab,'test-abstract'],[bibTab,'test-bib']]){tab.closest=()=>publicationContent;tab.getAttribute=name=>tab.attributes[name];tab.setAttribute('aria-controls',id);}
elements.set('#test-abstract',abstractPanel);elements.set('#test-bib',bibPanel);
context.testBibTab=bibTab;evaluate('selectPublicationTab(testBibTab, true)');assert.equal(abstractPanel.hidden,true);assert.equal(bibPanel.hidden,false);assert.equal(bibTab.attributes.tabindex,'0');assert(bibTab.focused);
const clipboardCode=element(),copyStatus=element(),copyButton=element();clipboardCode.textContent='@unpublished{example,\n  note = {Under review}\n}';elements.set('#test-citation',clipboardCode);copyButton.dataset.copyCitation='test-citation';copyButton.parentElement={querySelector:()=>copyStatus};context.testCopyButton=copyButton;
let copied;context.navigator={clipboard:{writeText:async text=>{copied=text}}};await evaluate('copyPublicationCitation(testCopyButton)');assert.equal(copied,clipboardCode.textContent);assert.equal(copyStatus.textContent,'Citation copied.');context.navigator.clipboard.writeText=async()=>{throw new Error('Denied')};await evaluate('copyPublicationCitation(testCopyButton)');assert.match(copyStatus.textContent,/download/);assert(clipboardCode.focused);
assert.equal(elements.get('#repo-list').children.length,data.repositories.length);
elements.get('#repo-kind').value='original';evaluate('renderRepositories()');assert.equal(elements.get('#repo-list').children.length,data.repositories.filter(repo=>!repo.fork).length);
elements.get('#repo-search').value='no-repository-matches-this';evaluate('renderRepositories()');assert.match(elements.get('#repo-list').children[0].textContent,/No repositories match/);
elements.get('#repo-search').value='use-hpc';evaluate('renderRepositories()');assert.equal(elements.get('#repo-list').children.length,3);
assert.equal(evaluate("escapeHTML('<script>\"&')"),'&lt;script&gt;&quot;&amp;');
// Exercise project-map selection, tooltip, close/focus, and pause behavior.
const nodes=Array.from({length:11},(_,index)=>Object.assign(element(),{dataset:{project:String(index)}}));
const threads=Array.from({length:11},(_,index)=>Object.assign(element(),{dataset:{thread:String(index)}}));
elements.set('.research-map',element());
document.querySelectorAll=selector=>selector==='.research-node'?nodes:selector==='[data-thread]'?threads:[];
context.clearTimeout=clearTimeout;context.setTimeout=setTimeout;
elements.get('#research-detail').hidden=true;
runInNewContext(await readFile(new URL('assets/research-layout.js',root),'utf8'),context);
runInNewContext(await readFile(new URL('assets/research-map.js',root),'utf8'),context);
assert.equal((elements.get('#research-nodes').innerHTML.match(/<button /g)||[]).length,11);
assert.equal((elements.get('#research-connections').innerHTML.match(/<g /g)||[]).length,11);
const layout=evaluate('projects.map(([name])=>({name,...researchPlacement[name]}))');
assert.equal(new Set(layout.map(item=>item.name)).size,11);
for(const item of layout){assert(item.reason);assert(['ai','bridge','se'].includes(item.world));assert(item.x>=15&&item.x<=85);assert(item.y>=40&&item.y<=90);for(const related of item.related)assert(layout.some(item=>item.name===related));}
assert(layout.find(item=>item.name==='AutoM2M').x<layout.find(item=>item.name==='SkillSpec').x);
assert(layout.find(item=>item.name==='SkillSpec').x<layout.find(item=>item.name==='MRegTest').x);
// Nodes must remain separate at the narrowest supported map dimensions, allowing floating motion.
for(let i=0;i<layout.length;i++)for(let j=i+1;j<layout.length;j++){const dx=Math.abs(layout[i].x-layout[j].x);const dy=Math.abs(layout[i].y-layout[j].y)*4.8;assert(dx>=25||dy>=44,`Overlapping map nodes: ${layout[i].name}, ${layout[j].name}`);}
nodes[0].listeners.pointerenter();assert.equal(elements.get('#research-tooltip').hidden,false);assert.match(elements.get('#research-tooltip').innerHTML,/SkillSpec/);
assert(nodes[1].classList.contains('related-node'));
assert.equal(elements.get('#map-context').textContent,'Formal methods for AI skills');
for(const [index,name,repository] of [[0,'SkillSpec','swe-multiskillsbench'],[5,'TAAF / TraceQA-100','Alireza-Ezaz/TAAF'],[10,'MReplayer','MajidGitHubRepos/MReplayer']]){
 nodes[index].listeners.click();assert.equal(elements.get('#research-detail').hidden,false);assert.equal(elements.get('#detail-title').textContent,name);assert(elements.get('#detail-link').href.endsWith(repository));assert.equal(nodes[index].attributes['aria-expanded'],'true');
 assert(elements.get('#detail-position').textContent.length>20);
 elements.get('#detail-close').listeners.click();assert.equal(elements.get('#research-detail').hidden,true);assert(nodes[index].focused);assert.equal(nodes[index].attributes['aria-expanded'],'false');
}
const pause=elements.get('#motion-toggle');pause.listeners.click({currentTarget:pause});assert.equal(pause.attributes['aria-pressed'],'true');pause.listeners.click({currentTarget:pause});assert.equal(pause.attributes['aria-pressed'],'false');
// Theme: system default, explicit toggle, storage, restored preference, and blocked storage.
const themeSource=await readFile(new URL('assets/theme.js',root),'utf8');
for(const stored of [undefined,'light','dark','blocked']){
 const themeElements=new Map(['#theme-toggle','#theme-label','#theme-icon','meta[name="theme-color"]'].map(selector=>[selector,element()]));
 const themeDocument={documentElement:{dataset:{}},querySelector:selector=>themeElements.get(selector),addEventListener(event,callback){if(event==='DOMContentLoaded')this.ready=callback}};
 let preference=stored;
 runInNewContext(themeSource,{document:themeDocument,window:{matchMedia:()=>({matches:true,addEventListener(){}})},localStorage:{getItem(){if(stored==='blocked')throw new Error('Blocked');return preference},setItem(key,value){if(stored==='blocked')throw new Error('Blocked');preference=value}}});
 themeDocument.ready();assert.equal(themeDocument.documentElement.dataset.theme,stored==='light'?'light':'dark');
 themeElements.get('#theme-toggle').listeners.click();assert.equal(themeDocument.documentElement.dataset.theme,stored==='light'?'dark':'light');
 if(stored!=='blocked')assert.equal(preference,themeDocument.documentElement.dataset.theme);
}
console.log(`Passed: local links, anchors, ${data.repositories.length} repositories, project/publication filters, publication disclosures and citations, tab selection, clipboard success/fallback, repository search, HTML escaping, 11 research nodes, tooltip, detail selection and links, close/focus, pause/resume, and theme preferences.`);

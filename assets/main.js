'use strict';
const projects = [
  ['SkillSpec','Agents','Verifiable agent-skill contracts and composition repair. A specification format for composing agent skills with explicit guarantees.','ICSE 2027 · To appear','swe-multiskillsbench','Contracts · Verification',true],
  ['AgentM2M','Agents','Model-to-model transformations for agent collaboration, with typed hand-offs and persistent transformation traces.','Submitted · ICSE 2027 NIER','AgentM2M','Coordination · Traceability'],
  ['AutoM2M','Agents','Checked agent-team composition, failure attribution, and repair for reliable, traceable LLM-assembled teams.','Submitted · EMSE','M2MColab','Agent teams · Repair'],
  ['use-hpc','Infrastructure','Agent-configured, statically checked Slurm experiment graphs, runtime guards, and audits for large-scale GPU experiments.','Under review · ASE journal','use-hpc','Slurm · Static checks'],
  ['RES-AI','Infrastructure','Evidence-bound readiness checks for experiment coverage, freshness, and memory headroom on shared HPC infrastructure.','Submitted · ASE journal','RES-AI','HPC · Experiment readiness'],
  ['TAAF / TraceQA-100','Analysis','Execution-trace abstraction and analysis combining knowledge graphs and LLMs, with a trace-question benchmark.','ICSE 2026','https://github.com/Alireza-Ezaz/TAAF','Knowledge graphs · Traces'],
  ['SIKG','Analysis','Semantic impact knowledge graphs for adaptive test selection and prioritization.','ICSE Companion 2026 · Poster','SIKG','Impact analysis · Testing'],
  ['RapidPay','Analysis','Identifying and prioritizing self-admitted technical-debt chains through impact-ripple ranking.','Accepted · EMSE','RapidPay','Technical debt · Maintenance'],
  ['RATEN / ra4xstate','Analysis','Efficient robustness analysis and test enhancement for state machines and statecharts.','SoSyM 2026','RATEN-ra4xstate','State machines · Robustness'],
  ['MRegTest','Analysis','Replay-based regression testing for distributed UML-RT models.','MODELS Companion 2021','https://github.com/MajidGitHubRepos/MRegTest','UML-RT · Regression testing'],
  ['MReplayer','Analysis','Deterministic execution-trace replay for distributed reactive systems in model-driven development.','MODELS Companion 2020','https://github.com/MajidGitHubRepos/MReplayer','Execution traces · Replay']
];
const published = [
 ['2027','ICSE','SkillSpec: A formally verifiable specification format for composing agent skills.','M. Babaei and A. Heydarnoori. Research Track; to appear.','https://github.com/ai4se4ai-lab/swe-multiskillsbench'],
 ['2026','SoSyM','RATEN: An efficient robustness analysis and test enhancement framework for state machines.','M. Babaei and Y.-G. Guéhéneuc. Published.','https://github.com/ai4se4ai-lab/RATEN-ra4xstate'],
 ['Accepted','EMSE','RapidPay: Identifying and prioritizing self-admitted technical debt chains for effective debt management in software systems.','M. Babaei, N. Ezzati-Jivan, F. Hendijani Fard, and A. Hamou-Lhadj.','https://github.com/ai4se4ai-lab/RapidPay'],
 ['2026','ICSE','TAAF: A trace abstraction and analysis framework synergizing knowledge graphs and LLMs.','A. Ezaz, G. Khodabandeh, M. Babaei, and N. Ezzati-Jivan.','https://doi.org/10.1145/3744916.3787832'],
 ['2026','ICSE Poster','SIKG: A semantic impact knowledge graph approach for adaptive test selection and prioritization.','M. Babaei, N. Ezzati-Jivan, and L. Wei. ICSE Companion, Poster Track.','https://doi.org/10.1145/3774748.3795655'],
 ['2025','ICPE','Utilizing graph neural networks for effective link prediction in microservice architectures.','G. Khodabandeh, A. Ezaz, M. Babaei, and N. Ezzati-Jivan. pp. 19–30.'],
 ['2024','CASCON','MemAdapt: Adaptive memory usage monitoring using irregularly sampled data.','P. Chakraborty, M. Babaei, L. Tahmooresnejad, and N. Ezzati-Jivan.'],
 ['2024','SERP4IoT','Communication semantics for IoT-aware business process management systems.','M. Babaei.'],
 ['2023','SoSyM','Efficient regression testing of distributed real-time reactive systems in the context of model-driven development.','M. Babaei and J. Dingel. 22(5):1565–1587.','https://doi.org/10.1007/s10270-023-01086-5'],
 ['2023','SERP4IoT','ra4xstate: An efficient quantitative robustness analysis approach for statecharts.','M. Babaei and M. Ben-Attia. pp. 46–53.','https://github.com/ai4se4ai-lab/RATEN-ra4xstate'],
 ['2021','MODELS','Efficient replay-based regression testing for distributed reactive systems in the context of model-driven development.','M. Babaei and J. Dingel. pp. 89–100. ACM SIGSOFT Distinguished Paper Award.'],
 ['2021','MODELS Companion','MRegTest: A replay-based regression testing tool for distributed UML-RT models.','M. Babaei and J. Dingel. pp. 620–624.','https://github.com/MajidGitHubRepos/MRegTest'],
 ['2020','MODELS','Efficient reordering and replay of execution traces of distributed reactive systems in the context of model-driven development.','M. Babaei, M. Bagherzadeh, and J. Dingel. pp. 285–296. Artifacts Available and Evaluated–Reusable.'],
 ['2020','MODELS Companion','MReplayer: A trace replayer of distributed UML-RT models.','M. Babaei, M. Bagherzadeh, and J. Dingel.','https://github.com/MajidGitHubRepos/MReplayer'],
 ['2019','MODELS Companion','Solving the RoboSoccer challenge problem with UML-RT and Papyrus-RT.','M. Babaei, K. Jahed, and J. Dingel.'],
 ['2013','Natural Computing','A novel text and image encryption method based on chaos theory and DNA computing.','M. Babaei. 12(1):101–107.']
];
const submitted = [
 ['Under review','ASE journal','use-hpc: Agent-configured, statically checked Slurm pipelines for large-scale GPU experiments.','M. Babaei.','https://github.com/ai4se4ai-lab/use-hpc'],
 ['Submitted','ASE journal','RES-AI: Evidence-bound readiness for AI software engineering experiments on shared HPC infrastructure.','M. Babaei.','https://github.com/ai4se4ai-lab/RES-AI'],
 ['Submitted','ICSE 2027 NIER','AgentM2M: M2M transformations for agentic collaborations in software engineering.','M. Babaei, S. Farshidi, O. Adesina, N. Ezzati-Jivan, and L. Wei.','https://github.com/ai4se4ai-lab/AgentM2M'],
 ['Submitted','EMSE','When the team writes itself: Reliable and traceable LLM-assembled agent teams through checked model transformations.','M. Babaei. AutoM2M.','https://github.com/ai4se4ai-lab/M2MColab'],
 ['Under review','IEEE TSE','Understanding and detecting login flow errors in Android applications.','Z. Zhou, R. Chen, N. Yun, J. Chen, Y. Liu, M. Babaei, and L. Wei. LIFTDroid.'],
 ['Submitted','MSR 2027','Mining design decisions and rationale evidence across research software projects.','S. Farshidi, M. Babaei, and B. Tekinerdogan.'],
 ['Submitted','ICSE 2027 NIER','Was it my code? Evidence-based performance diagnosis for CI on shared GPUs.','N. Ezzati-Jivan, M. Panahandeh, and M. Babaei.']
];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function renderProjects(category = 'All') {
  document.querySelector('#project-grid').innerHTML = projects.filter(project => category === 'All' || project[1] === category).map(([name, theme, description, status, repository, tags, featured]) => {
    const url = repository.startsWith('https://') ? repository : `https://github.com/ai4se4ai-lab/${repository}`;
    return `<article class="project-card${featured ? ' featured' : ''}"><div class="project-top"><span>${escapeHTML(theme.toUpperCase())}</span><span class="arrow" aria-hidden="true">↗</span></div><h3>${escapeHTML(name)}</h3><p>${escapeHTML(description)}</p><div class="project-bottom"><span>${escapeHTML(status)}</span><span>${escapeHTML(tags)}</span></div><a href="${url}" target="_blank" rel="noopener" aria-label="${escapeHTML(name)} repository on GitHub (opens in a new tab)"></a></article>`;
  }).join('');
  document.querySelectorAll('.filter').forEach(button => {const selected = button.dataset.filter === category; button.classList.toggle('active', selected);button.setAttribute('aria-pressed', selected);});
}
function renderPublications(kind = 'published') {
  document.querySelector('#publication-list').innerHTML = (kind === 'published' ? published : submitted).map(([year, venue, title, authors, artifact], index) => {
    const metadata = publicationDetails[title];
    const id = `pub-${kind}-${index}`;
    const review = kind !== 'published';
    const bib = createBibTeX(title, metadata);
    const externalLink = (url, label) => url ? `<a class="text-link" href="${escapeHTML(url)}" target="_blank" rel="noopener">${label} ↗</a>` : '';
    const codeUrl = artifact?.startsWith('https://github.com/') ? artifact : null;
    const abstract = metadata.abstractSummary
      ? `<p class="abstract-kind">Abstract summary</p><p>${escapeHTML(metadata.abstractSummary)}</p>${externalLink(metadata.abstractSource, 'Source and original abstract')}`
      : '<p class="small">An abstract has not yet been added for this paper.</p>';
    return `<article class="publication-entry"><details class="publication-disclosure"><summary class="publication"><span class="publication-label">${escapeHTML(year)}<small>${escapeHTML(venue)}</small></span><span class="publication-summary"><span class="publication-title">${escapeHTML(title)}</span><span class="publication-authors">${escapeHTML(authors)}</span><span class="publication-hint">${review ? 'BibTeX citation' : 'Abstract & BibTeX'} · Click to expand</span></span><span class="publication-expand" aria-hidden="true">+</span></summary><div class="publication-content">
      <div class="publication-links">${!review ? externalLink(metadata.paperUrl, 'Published paper') : ''}${externalLink(metadata.preprintUrl, 'Preprint / author manuscript')}${!review ? externalLink(codeUrl, 'Code / artifact') : ''}</div>
      ${review && !metadata.preprintUrl ? '<p class="small preprint-note">No verified public preprint link is currently available.</p>' : ''}
      <div class="citation-tabs" role="tablist" aria-label="Details for ${escapeHTML(title)}">
        ${!review ? `<button type="button" id="${id}-abstract-tab" role="tab" aria-selected="true" aria-controls="${id}-abstract" data-pub-tab="abstract">Abstract</button>` : ''}
        <button type="button" id="${id}-bib-tab" role="tab" aria-selected="${review}" aria-controls="${id}-bib" tabindex="${review ? '0' : '-1'}" data-pub-tab="bib">BibTeX</button>
      </div>
      ${!review ? `<div class="publication-panel" role="tabpanel" id="${id}-abstract" aria-labelledby="${id}-abstract-tab" tabindex="0">${abstract}</div>` : ''}
      <div class="publication-panel" role="tabpanel" id="${id}-bib" aria-labelledby="${id}-bib-tab" tabindex="0"${review ? '' : ' hidden'}>
        <div class="citation-actions"><button type="button" class="copy-citation" data-copy-citation="${id}-citation">Copy BibTeX</button><a download="${escapeHTML(metadata.key)}.bib" href="data:text/plain;charset=utf-8,${encodeURIComponent(bib)}">Download .bib ↓</a><span class="copy-status" role="status" aria-live="polite"></span></div>
        <pre id="${id}-citation" class="bibtex-code" tabindex="0"><code>${escapeHTML(bib)}</code></pre>
      </div></div></details></article>`;
  }).join('');
  document.querySelectorAll('.pub-filter').forEach(button => {const selected = button.dataset.pub === kind;button.classList.toggle('active', selected);button.setAttribute('aria-pressed', selected);});
}

function bibTeXValue(value) {
  return String(value).replace(/[\\{}%&#_$]/g, character => character === '\\' ? '\\textbackslash{}' : `\\${character}`);
}
function createBibTeX(title, metadata) {
  const fields = {title, ...Object.fromEntries(['author','year','journal','booktitle','volume','number','pages','doi','note'].filter(field => metadata[field]).map(field => [field, metadata[field]]))};
  const url = metadata.paperUrl || metadata.preprintUrl;
  if (url) fields.url = url;
  return `@${metadata.type}{${metadata.key},\n${Object.entries(fields).map(([key, value]) => `  ${key} = {${bibTeXValue(value)}}`).join(',\n')}\n}`;
}
function selectPublicationTab(button, moveFocus = false) {
  const content = button.closest('.publication-content');
  content.querySelectorAll('[role="tab"]').forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.setAttribute('tabindex', selected ? '0' : '-1');
    document.querySelector(`#${tab.getAttribute('aria-controls')}`).hidden = !selected;
  });
  if (moveFocus) button.focus();
}
async function copyPublicationCitation(button) {
  const code = document.querySelector(`#${button.dataset.copyCitation}`);
  const status = button.parentElement.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    status.textContent = 'Citation copied.';
  } catch {
    status.textContent = 'Select the citation below to copy it, or download the .bib file.';
    code.focus();
  }
}
document.querySelector('#publication-list').addEventListener('click', event => {
  const tab = event.target.closest('[data-pub-tab]');
  if (tab) selectPublicationTab(tab);
  const copyButton = event.target.closest('[data-copy-citation]');
  if (copyButton) copyPublicationCitation(copyButton);
});
document.querySelector('#publication-list').addEventListener('keydown', event => {
  const tab = event.target.closest('[data-pub-tab]');
  if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
  let index = tabs.indexOf(tab);
  if (event.key === 'Home') index = 0;
  else if (event.key === 'End') index = tabs.length - 1;
  else index = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  event.preventDefault();
  selectPublicationTab(tabs[index], true);
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => renderProjects(button.dataset.filter)));
document.querySelectorAll('a[data-project-category]').forEach(link => link.addEventListener('click', () => renderProjects(link.dataset.projectCategory)));
document.querySelectorAll('.pub-filter').forEach(button => button.addEventListener('click', () => renderPublications(button.dataset.pub)));
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click', () => {const open = navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded', open);});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && navigation.classList.contains('open')){closeMenu();menuButton.focus();}});
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){navigation.querySelectorAll('a').forEach(link => link.classList.toggle('current', link.hash === `#${entry.target.id}`));}});}, {rootMargin:'-10% 0px -60% 0px'});
 document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
let repositories = [];
let snapshotDate = '';
function renderRepositories() {
 const query = document.querySelector('#repo-search').value.toLowerCase().trim();
 const kind = document.querySelector('#repo-kind').value;
 const matches = repositories.filter(repo => (kind === 'all' || (kind === 'fork' ? repo.fork : !repo.fork)) && `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase().includes(query));
 document.querySelector('#repo-status').textContent = `${matches.length} of ${repositories.length} public repositories · Snapshot ${snapshotDate} · Forks are labeled`;
 const container = document.querySelector('#repo-list');
 container.replaceChildren();
 if (!matches.length) {const message = document.createElement('p');message.className='small';message.textContent='No repositories match your search. Try another term or repository type.';container.append(message);return;}
 matches.forEach(repo => {
   const article = document.createElement('article'); article.className='repo-item';
   const link = document.createElement('a');link.textContent=`${repo.name} ↗`;link.href=repo.html_url;link.target='_blank';link.rel='noopener';
   const description = document.createElement('p');description.textContent=repo.description || 'Explore the repository for code and project details.';
   const meta = document.createElement('div');meta.className='repo-meta';meta.textContent=[repo.fork?'FORK':'ORIGINAL',repo.language,repo.archived?'ARCHIVED':null].filter(Boolean).join(' · ');
   article.append(link,description,meta);container.append(article);
 });
}
async function loadRepositories(){
 try {const response=await fetch('assets/repositories.json');if(!response.ok)throw new Error('Repository data unavailable');const data=await response.json();repositories=data.repositories;snapshotDate=data.updated;renderRepositories();}
 catch {document.querySelector('#repo-status').textContent='The repository directory could not load. Use the GitHub link below to browse all repositories.';}
}
document.querySelector('#repo-search').addEventListener('input',renderRepositories);
document.querySelector('#repo-kind').addEventListener('change',renderRepositories);
document.querySelector('#year').textContent=new Date().getFullYear();
renderProjects();renderPublications();loadRepositories();

'use strict';
// Project descriptions and repository links share the portfolio's source data.
const researchStage = document.querySelector('#worlds-stage');
const researchMap = document.querySelector('.research-map');
const researchTooltip = document.querySelector('#research-tooltip');
const researchDetail = document.querySelector('#research-detail');
let activeResearchNode = null;
let tooltipTimer;
const nodePositions = projects.map(([name]) => {const placement=researchPlacement[name];return [placement.x,placement.y];});
document.querySelector('#research-connections').innerHTML = projects.map((project, index) => {
  const [x, y] = nodePositions[index].map(value => value * 5.6);
  const placement = researchPlacement[project[0]];
  const connection = world => {
    const origin = world === 'ai' ? 140 : 420;
    const path = `M ${origin} 98 C ${origin} ${y*.58}, ${x} ${y-58}, ${x} ${y}`;
    return `<path class="world-link link-${world}" d="${path}"/><path class="signal link-${world}" pathLength="100" d="${path}" style="animation-delay:-${index*.8}s"/>`;
  };
  return `<g class="research-thread affinity-${placement.world}" data-thread="${index}">${placement.world==='bridge'?connection('ai')+connection('se'):connection(placement.world)}</g>`;
}).join('');

document.querySelector('#research-nodes').innerHTML = projects.map(([name], index) => `<button type="button" class="research-node affinity-${researchPlacement[name].world}" data-project="${index}" style="left:${nodePositions[index][0]}%;top:${nodePositions[index][1]}%;--float-delay:-${index * .6}s" aria-label="${escapeHTML(name)}: ${escapeHTML(researchPlacement[name].label)}" aria-haspopup="dialog" aria-controls="research-detail" aria-expanded="false"><span class="node-indicator" aria-hidden="true"></span><span class="node-name">${escapeHTML(name.split(' / ')[0])}</span><span class="node-plus" aria-hidden="true">+</span></button>`).join('');
function highlightResearch(index) {
  researchMap.classList.toggle('has-highlight', index !== null);
  const placement = index === null ? null : researchPlacement[projects[index][0]];
  document.querySelectorAll('[data-thread]').forEach(thread => thread.classList.toggle('highlighted', Number(thread.dataset.thread) === index));
  document.querySelectorAll('.research-node').forEach(node => {
    const name = projects[Number(node.dataset.project)][0];
    node.classList.toggle('related-node', Boolean(placement?.related.includes(name)));
    node.classList.toggle('selected-node', Number(node.dataset.project) === index);
  });
  document.querySelector('#map-context').textContent = placement ? placement.label : 'AI systems ← shared methods → software systems';
}
function hideResearchTooltip() {
  researchTooltip.hidden = true;
  document.querySelectorAll('.research-node').forEach(node => node.removeAttribute('aria-describedby'));
  if (researchDetail.hidden) highlightResearch(null);
}
function showResearchTooltip(node) {
  clearTimeout(tooltipTimer);
  if (!researchDetail.hidden) return;
  const index = Number(node.dataset.project);
  const [name, category, description] = projects[index];
  researchTooltip.innerHTML = `<strong>${escapeHTML(name)}</strong><span>${escapeHTML(researchPlacement[name].label)} · ${escapeHTML(description)}</span><small>Click or press Enter to explore this connection ↗</small>`;
  // Center horizontally so long summaries stay inside the map on narrow screens.
  researchTooltip.style.top = `calc(${nodePositions[index][1]}% - 22px)`;
  researchTooltip.hidden = false;
  node.setAttribute('aria-describedby', 'research-tooltip');
  highlightResearch(index);
}
function closeResearchDetail(restoreFocus = true) {
  researchDetail.hidden = true;
  researchMap.classList.remove('detail-open');
  if (activeResearchNode) {
    activeResearchNode.setAttribute('aria-expanded', 'false');
    if (restoreFocus) activeResearchNode.focus();
  }
  activeResearchNode = null;
  hideResearchTooltip();
}
function openResearchDetail(node) {
  if (activeResearchNode === node && !researchDetail.hidden) {closeResearchDetail();return;}
  if (activeResearchNode) activeResearchNode.setAttribute('aria-expanded', 'false');
  hideResearchTooltip();
  const index = Number(node.dataset.project);
  const [name, category, description, status, repository, tags] = projects[index];
  document.querySelector('#detail-title').textContent = name;
  document.querySelector('#detail-category').textContent = `${category} / AI ↔ Software engineering`;
  document.querySelector('#detail-description').textContent = description;
  document.querySelector('#detail-position').textContent = researchPlacement[name].reason;
  document.querySelector('#detail-status').textContent = status;
  document.querySelector('#detail-tags').textContent = tags;
  document.querySelector('#detail-link').href = repository.startsWith('https://') ? repository : `https://github.com/ai4se4ai-lab/${repository}`;
  activeResearchNode = node;
  node.setAttribute('aria-expanded', 'true');
  researchDetail.hidden = false;
  researchMap.classList.add('detail-open');
  highlightResearch(index);
  document.querySelector('#detail-title').focus({preventScroll:true});
}
document.querySelectorAll('.research-node').forEach(node => {
  node.addEventListener('pointerenter', () => showResearchTooltip(node));
  node.addEventListener('pointerleave', () => {tooltipTimer = setTimeout(hideResearchTooltip, 120);});
  node.addEventListener('focus', () => showResearchTooltip(node));
  node.addEventListener('blur', hideResearchTooltip);
  node.addEventListener('click', () => openResearchDetail(node));
});
researchTooltip.addEventListener('pointerenter', () => clearTimeout(tooltipTimer));
researchTooltip.addEventListener('pointerleave', hideResearchTooltip);
document.querySelector('#detail-close').addEventListener('click', () => closeResearchDetail());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!researchDetail.hidden) closeResearchDetail();
    hideResearchTooltip();
  }
});
document.addEventListener('pointerdown', event => {
  if (!researchDetail.hidden && !researchDetail.contains(event.target) && !event.target.closest('.research-node')) closeResearchDetail(false);
});
document.querySelector('#motion-toggle').addEventListener('click', event => {
  const paused = researchMap.classList.toggle('motion-paused');
  event.currentTarget.setAttribute('aria-pressed', String(paused));
  event.currentTarget.setAttribute('aria-label', `${paused ? 'Resume' : 'Pause'} research animation`);
  event.currentTarget.textContent = paused ? 'Resume ▷' : 'Pause ⏸';
});

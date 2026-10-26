'use strict';
// Color the geometric pattern's lines; never draw a blob over the background.
(() => {
  const surfaces = [...document.querySelectorAll('[data-cursor-surface]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const layers = new Map();
  let active = null;
  let frame = 0;
  let lastTime = 0;
  let clientX = 0;
  let clientY = 0;
  let x = 0;
  let y = 0;

  surfaces.forEach(surface => {
    const layer = document.createElement('div');
    layer.className = 'cursor-magic';
    layer.setAttribute('aria-hidden', 'true');
    const pointer = document.createElement('div');
    pointer.className = 'pointer-wrap';
    const gradient = document.createElement('div');
    gradient.className = 'pointer-gradient';
    pointer.append(gradient);
    const pattern = document.createElement('div');
    pattern.className = 'cursor-pattern';
    layer.append(pointer, pattern);
    surface.prepend(layer);
    layers.set(surface, layer);
  });

  function hide() {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    if (active) layers.get(active).style.setProperty('--cursor-visible', '0');
    active = null;
  }
  function render(time) {
    frame = 0;
    if (!active) return;
    const bounds = active.getBoundingClientRect();
    const targetX = clientX - bounds.left;
    const targetY = clientY - bounds.top;
    const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16;
    lastTime = time;
    const ease = 1 - Math.exp(-elapsed / 55);
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    const moving = Math.abs(targetX - x) + Math.abs(targetY - y) > .15;
    if (!moving) { x = targetX; y = targetY; }
    const style = layers.get(active).style;
    style.setProperty('--cursor-x', `${x.toFixed(2)}px`);
    style.setProperty('--cursor-y', `${y.toFixed(2)}px`);
    style.setProperty('--cursor-visible', '1');
    // Stop when settled: no perpetual animation loop or idle polling.
    if (moving) frame = window.requestAnimationFrame(render);
  }
  document.addEventListener('pointermove', event => {
    if (reducedMotion.matches || !finePointer.matches || document.hidden || event.pointerType === 'touch') { hide(); return; }
    const surface = event.target.closest('[data-cursor-surface]');
    if (!layers.has(surface)) { hide(); return; }
    clientX = event.clientX;
    clientY = event.clientY;
    if (surface !== active) {
      hide();
      active = surface;
      const bounds = surface.getBoundingClientRect();
      x = clientX - bounds.left;
      y = clientY - bounds.top;
    }
    if (!frame) frame = window.requestAnimationFrame(render);
  }, {passive:true});
  document.documentElement.addEventListener('pointerleave', hide);
  document.addEventListener('visibilitychange', () => {if (document.hidden) hide();});
  window.addEventListener('blur', hide);
  window.addEventListener('scroll', hide, {passive:true, capture:true});
  reducedMotion.addEventListener('change', hide);
  finePointer.addEventListener('change', hide);
})();

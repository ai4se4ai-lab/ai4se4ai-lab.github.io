// Apply the saved preference before CSS paints; use the system preference initially.
(() => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch { /* Storage can be disabled. */ }
  function applyTheme(theme) {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#101c1a' : '#f5f6f2');
    const button = document.querySelector('#theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
      document.querySelector('#theme-label').textContent = dark ? 'Light' : 'Dark';
      document.querySelector('#theme-icon').textContent = dark ? '☀' : '◐';
    }
  }
  applyTheme(saved === 'dark' || saved === 'light' ? saved : preference.matches ? 'dark' : 'light');
  preference.addEventListener('change', event => {if (!saved) applyTheme(event.matches ? 'dark' : 'light');});
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(document.documentElement.dataset.theme);
    document.querySelector('#theme-toggle').addEventListener('click', () => {
      saved = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(saved);
      try { localStorage.setItem('portfolio-theme', saved); } catch { /* The toggle still works. */ }
    });
  });
})();

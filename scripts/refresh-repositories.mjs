// Run from the repository root: node scripts/refresh-repositories.mjs
import { writeFile } from 'node:fs/promises';
const repositories = [];
for (let page = 1; ; page++) {
  const response = await fetch(`https://api.github.com/users/ai4se4ai-lab/repos?per_page=100&sort=updated&page=${page}`, { headers: { 'User-Agent': 'ai4se4ai-portfolio' } });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}; existing snapshot preserved.`);
  const batch = await response.json();
  repositories.push(...batch.map(({name, description, html_url, language, fork, archived}) => ({name, description, html_url, language, fork, archived})));
  if (batch.length < 100) break;
}
await writeFile(new URL('../assets/repositories.json', import.meta.url), JSON.stringify({updated:new Date().toISOString().slice(0,10),repositories},null,2)+'\n');
console.log(`Saved ${repositories.length} public repositories.`);

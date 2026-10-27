// Run from the repository root: node scripts/refresh-repositories.mjs
import { writeFile } from 'node:fs/promises';
const repositories = [];
const headers = { 'User-Agent': 'ai4se4ai-portfolio', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
for (let page = 1; ; page++) {
  const response = await fetch(`https://api.github.com/users/ai4se4ai-lab/repos?type=owner&per_page=100&sort=full_name&page=${page}`, { headers });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}; existing snapshot preserved.`);
  const batch = await response.json();
  repositories.push(...batch.filter(repo => !repo.private).map(({name, description, html_url, language, fork, archived}) => ({name, description, html_url, language, fork, archived})));
  if (batch.length < 100) break;
}
await writeFile(new URL('../assets/repositories.json', import.meta.url), JSON.stringify({updated:new Date().toISOString().slice(0,10),repositories},null,2)+'\n');
console.log(`Saved ${repositories.length} public repositories.`);

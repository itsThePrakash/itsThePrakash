/**
 * SIGNAL CORE — GitHub snapshot refresher.
 * Writes src/snapshot.json so the build can bake fresh numbers even when the
 * visitor's browser cannot reach the GitHub API. Runs from GitHub Actions
 * (see .github/workflows/refresh.yml) or manually with `npm run refresh`.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const USER = 'itsThePrakash';
const API = 'https://api.github.com';
const OUT = join(dirname(fileURLToPath(import.meta.url)), 'snapshot.json');
const HEADERS = { accept: 'application/vnd.github+json', 'user-agent': 'signal-core' };

async function get(path) {
  const r = await fetch(API + path, { headers: HEADERS });
  if (!r.ok) throw new Error(`${path} → ${r.status}`);
  return r.json();
}

try {
  const [user, repos] = await Promise.all([
    get(`/users/${USER}`),
    get(`/users/${USER}/repos?per_page=100&sort=pushed`),
  ]);

  const own = repos.filter((r) => !r.fork);
  const langBytes = own.reduce((acc, r) => {
    if (!r.language) return acc; // repos with no detected language are not a language
    acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {});
  const total = Object.values(langBytes).reduce((a, b) => a + b, 0) || 1;
  const topLanguages = Object.entries(langBytes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));

  const snap = {
    login: user.login,
    name: user.name,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    totalStars: repos.reduce((a, r) => a + (r.stargazers_count || 0), 0),
    ownRepos: own.length,
    topLanguages,
    fetchedAt: new Date().toISOString(),
  };

  writeFileSync(OUT, JSON.stringify(snap, null, 2) + '\n');
  console.log(`✓ snapshot written → ${snap.publicRepos} repos, ${snap.totalStars} stars, ${snap.followers} followers`);
} catch (err) {
  console.warn(`! snapshot refresh failed (${err.message}) — keeping the previous snapshot`);
  process.exit(0); // never break a deploy over telemetry
}

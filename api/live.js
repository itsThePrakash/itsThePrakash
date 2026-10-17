/**
 * SIGNAL CORE — /api/live
 *
 * Edge-cached GitHub telemetry. Runs on Vercel's Edge Runtime, so the upstream
 * GitHub call happens roughly once per `s-maxage` window for the whole planet
 * instead of once per visitor — which is the only way a public unauthenticated
 * endpoint (60 req/hour/IP) can survive real traffic.
 *
 * Fallback ladder, in order:
 *   1. live GitHub REST API
 *   2. the build-time snapshot baked into this deployment (/data/github.json)
 *   3. an empty-but-valid payload, so the client never has to error
 */

export const config = { runtime: 'edge' };

const USER = 'itsThePrakash';
const API = 'https://api.github.com';
const HEADERS = {
  accept: 'application/vnd.github+json',
  'user-agent': 'signal-core-portfolio',
  'x-github-api-version': '2022-11-28',
};

const CACHE = 'public, max-age=60, s-maxage=600, stale-while-revalidate=86400';

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': CACHE,
      'access-control-allow-origin': '*',
      ...extra,
    },
  });
}

async function withTimeout(p, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await p(ctrl.signal);
  } finally {
    clearTimeout(t);
  }
}

export default async function handler(req) {
  const origin = new URL(req.url).origin;

  try {
    const [userRes, reposRes] = await Promise.all([
      withTimeout((s) => fetch(`${API}/users/${USER}`, { headers: HEADERS, signal: s }), 4500),
      withTimeout((s) => fetch(`${API}/users/${USER}/repos?per_page=100&sort=pushed`, { headers: HEADERS, signal: s }), 4500),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error(`upstream ${userRes.status}/${reposRes.status}`);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const own = repos.filter((r) => !r.fork);

    const payload = {
      source: 'live',
      login: user.login,
      name: user.name,
      bio: user.bio,
      publicRepos: user.public_repos,
      publicGists: user.public_gists,
      followers: user.followers,
      following: user.following,
      totalStars: repos.reduce((a, r) => a + (r.stargazers_count || 0), 0),
      ownRepos: own.length,
      languages: own.reduce((acc, r) => {
        if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
        return acc;
      }, {}),
      fetchedAt: new Date().toISOString(),
    };

    return json(payload);
  } catch (err) {
    // Tier 2 — the snapshot baked at build time, served from the same edge.
    try {
      const snap = await withTimeout(
        (s) => fetch(`${origin}/data/github.json`, { headers: { accept: 'application/json' }, signal: s }),
        2500,
      );
      if (snap.ok) {
        const data = await snap.json();
        return json({ ...data, source: 'snapshot', reason: String(err && err.message) });
      }
    } catch {
      /* fall through */
    }

    // Tier 3 — still valid JSON, so the client degrades instead of throwing.
    return json(
      {
        source: 'none',
        login: USER,
        publicRepos: 0,
        followers: 0,
        totalStars: 0,
        fetchedAt: new Date().toISOString(),
        reason: 'upstream unavailable',
      },
      200,
      { 'x-signal-core-source': 'none' },
    );
  }
}

/**
 * SIGNAL CORE — build pipeline.
 * Zero dependencies. Node 18+. Outputs a fully static, edge-cacheable site
 * into ./dist. Run with `npm run build`.
 */
import { writeFileSync, mkdirSync, rmSync, existsSync, statSync, readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SOCIALS, PROJECTS, TIMELINE, STACK, ACHIEVEMENTS_UNLOCKED, ACHIEVEMENTS_CATALOG, GITHUB_SNAPSHOT, buildIndex } from './data.mjs';
import { CSS } from './css.mjs';
import { JS } from './js.mjs';
import { medal, logoMark, favicon, ogCard, banner, constellation } from './art.mjs';
import { icon, ICONS } from './icons.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const BASE = process.env.SITE_URL || 'https://itstheprakash.vercel.app';

/** Merge a build-time snapshot (from `npm run refresh`) over the baked default. */
function loadSnapshot() {
  try {
    const f = join(ROOT, 'src', 'snapshot.json');
    if (!existsSync(f)) return GITHUB_SNAPSHOT;
    const s = JSON.parse(readFileSync(f, 'utf8'));
    return { ...GITHUB_SNAPSHOT, ...s, achievements: ACHIEVEMENTS_UNLOCKED.length };
  } catch {
    return GITHUB_SNAPSHOT;
  }
}
const SNAP = loadSnapshot();

/* ── minifiers ───────────────────────────────────────────────────────────── */
function minCSS(c) {
  return c
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{};:,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\n+/g, '')
    .trim();
}

/**
 * Comment-stripping scanner that never touches string or regex literals.
 * A `/` opens a regex only where an expression is expected, which keeps
 * character classes such as /[&<>"']/ from desynchronising the scan.
 */
function minJS(s) {
  const notRegexBefore = /[A-Za-z0-9_$)\]}.]$/;
  let out = '', i = 0;
  const n = s.length;
  while (i < n) {
    const c = s[i], d = s[i + 1];
    if (c === '/' && d === '/') { while (i < n && s[i] !== '\n') i++; continue; }
    if (c === '/' && d === '*') { i += 2; while (i < n && !(s[i] === '*' && s[i + 1] === '/')) i++; i += 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c; out += c; i++;
      while (i < n) {
        if (s[i] === '\\') { out += s[i] + (s[i + 1] || ''); i += 2; continue; }
        if (s[i] === q) { out += s[i]; i++; break; }
        out += s[i]; i++;
      }
      continue;
    }
    if (c === '/' && !notRegexBefore.test(out)) {
      let j = i + 1, inClass = false, ok = false;
      while (j < n) {
        if (s[j] === '\\') { j += 2; continue; }
        if (s[j] === '\n') break;
        if (s[j] === '[') inClass = true;
        else if (s[j] === ']') inClass = false;
        else if (s[j] === '/' && !inClass) { ok = true; break; }
        j++;
      }
      if (ok) {
        let k = j + 1;
        while (k < n && /[a-z]/.test(s[k])) k++;
        out += s.slice(i, k); i = k; continue;
      }
    }
    out += c; i++;
  }
  return out
    .split('\n').map((l) => l.replace(/^[ \t]+/, '')).join('\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

const RAW_TAG = /<(script|style|pre|textarea|svg)\b[\s\S]*?<\/\1>/gi;
function minHTML(h) {
  const keep = [];
  let masked = h.replace(RAW_TAG, (m) => { keep.push(m); return `\u0000${keep.length - 1}\u0000`; });
  masked = masked
    .replace(/<!--(?!\[)[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return masked.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
}

/* ── helpers ─────────────────────────────────────────────────────────────── */
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s) => esc(s);
const num = (v) => Number(v).toLocaleString('en-US');

const ALL_TAGS = [...new Set(PROJECTS.flatMap((p) => p.tags))];

/** Emit only the <symbol>s this page actually references. */
function pageSprite(body) {
  const used = new Set();
  for (const m of body.matchAll(/#i-([a-z0-9-]+)/g)) if (ICONS[m[1]]) used.add(m[1]);
  if (!used.size) return '';
  const defs = [...used]
    .map((k) => `<symbol id="i-${k}" viewBox="${ICONS[k].viewBox}">${ICONS[k].inner}</symbol>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><defs>${defs}</defs></svg>`;
}

function page({ title, description, body, path = '/', jsonld = '', extraHead = '' }) {
  const canonical = BASE + path;
  return `<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
<meta name="color-scheme" content="dark light"/>
<meta name="theme-color" content="#05060b"/>
<title>${esc(title)}</title>
<meta name="description" content="${attr(description)}"/>
<meta name="author" content="${attr(SITE.name)}"/>
<meta name="robots" content="index,follow,max-image-preview:large"/>
<link rel="canonical" href="${canonical}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="${attr(SITE.name)}"/>
<meta property="og:title" content="${attr(title)}"/>
<meta property="og:description" content="${attr(description)}"/>
<meta property="og:url" content="${canonical}"/>
<meta property="og:image" content="${BASE}/og.svg"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${attr(title)}"/>
<meta name="twitter:description" content="${attr(description)}"/>
<meta name="twitter:image" content="${BASE}/og.svg"/>
<link rel="icon" href="/icon.svg" type="image/svg+xml"/>
<link rel="apple-touch-icon" href="/icon.svg"/>
<link rel="manifest" href="/manifest.webmanifest"/>
<link rel="preconnect" href="https://api.github.com" crossorigin/>
<link rel="dns-prefetch" href="https://api.github.com"/>
<style>${minCSS(CSS)}</style>
${extraHead}${jsonld}
</head>
<body>
${pageSprite(body)}
${body}
</body>
</html>`;
}

/* ── shared chrome ───────────────────────────────────────────────────────── */
const NAV_LINKS = [
  ['#work', 'Work'], ['#achievements', 'Achievements'], ['#about', 'About'],
  ['#stack', 'Stack'], ['#contact', 'Contact'],
];

function nav() {
  return `<nav class="nav" id="nav" aria-label="Primary">
<div class="wrap nav-in">
  <a class="brand" href="#home" aria-label="Home">
    <span class="mark">${logoMark()}</span>
    <span>${esc(SITE.name)}<b>/${esc(SITE.handle)}</b></span>
  </a>
  <div class="nav-links">${NAV_LINKS.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>
  <div class="nav-acts">
    <button class="palette-btn" data-palette aria-label="Open command palette">
      ${icon('search')}<span>Search</span><span class="kbd">⌘K</span>
    </button>
    <button class="icbtn" id="themeBtn" aria-label="Toggle colour theme">${icon('moon')}</button>
    <a class="btn btn-p btn-s" href="/resume">Résumé</a>
  </div>
</div>
</nav>`;
}

function footer() {
  return `<footer class="foot"><div class="wrap foot-in">
  <span class="mono">© <span id="yr"></span> ${esc(SITE.name)} · built static, served at the edge</span>
  <span class="mono">Jaipur, IN · <span id="clk"></span></span>
  <span><a href="https://github.com/itsThePrakash" target="_blank" rel="noopener">GitHub</a> ·
        <a href="mailto:${esc(SITE.email)}">Email</a> ·
        <a href="/resume">Résumé</a></span>
</div></footer>`;
}

/* ── index ───────────────────────────────────────────────────────────────── */
function hero() {
  return `<section id="home" class="hero">
<div class="wrap hero-grid">
  <div>
    <span class="status"><span class="dot"></span>${esc(SITE.status)} · open to work</span>
    <h1><span class="ln">Building the</span><span class="ln grad">improbable</span><span class="ln">at scale.</span></h1>
    <div class="typed" id="typed" data-words='${attr(JSON.stringify(SITE.roles))}' aria-live="polite"><span class="caret"></span></div>
    <p class="lede">${esc(SITE.about)}</p>
    <div class="hero-cta">
      <a class="btn btn-p" href="#work">${icon('rocket')}See the work</a>
      <a class="btn btn-g" href="/resume">${icon('print')}Résumé</a>
      <a class="btn btn-g" href="https://github.com/itsThePrakash" target="_blank" rel="noopener">${icon('github')}GitHub</a>
    </div>
    <div class="hero-meta">
      <span>${icon('location')}${esc(SITE.location)}</span>
      <span>${icon('clock')}IST · UTC+5:30</span>
      <span>${icon('bolt')}Sub-second first paint</span>
      <span>${icon('trophy')}4 GitHub achievements</span>
    </div>
  </div>
  <div class="orbit" aria-hidden="true">
    <span class="ring"><i></i></span><span class="ring"><i></i></span><span class="ring"><i></i></span>
    <div class="core"><div class="core-in"><span>P</span></div></div>
    <span class="chip">ekguru.shop</span>
    <span class="chip">printsbuddy</span>
    <span class="chip">MNIT Jaipur</span>
  </div>
</div>
</section>`;
}

function marquee() {
  const items = STACK.flatMap((s) => s.items);
  const half = items.map((i) => `<span>${esc(i)}</span>`).join('');
  return `<div class="marquee" aria-hidden="true"><div class="marquee-t">${half}${half}</div></div>`;
}

function telemetry() {
  const cells = [
    ['repos', SNAP.publicRepos, 'Public repos', ''],
    ['stars', SNAP.totalStars, 'Total stars', ''],
    ['followers', SNAP.followers, 'Followers', ''],
    ['ach', SNAP.achievements, 'Achievements', ''],
  ];
  return `<div class="wrap">
<div class="telemetry" id="telemetry">
  ${cells.map(([id, v, label, sfx]) => `<div class="tel"><span class="src" id="telSrc">SNAPSHOT</span>
    <b id="tel-${id}" data-count="${v}" data-suffix="${sfx}">0</b><small>${label}</small></div>`).join('')}
</div>
<p class="mono" style="margin-top:12px;font-size:11px;color:var(--fg3)">Live telemetry refreshes from the GitHub REST API on your device and falls back to the build snapshot if the API is rate-limited.</p>
</div>`;
}

function projectCards() {
  return PROJECTS.map((p, i) => `<article class="card tilt rv rv-d${(i % 4) + 1}" style="--ac:${p.accent}" data-tags="${p.tags.join(',')}">
  <span class="halo"></span>
  <div class="card-top">
    <div><div class="kick">${esc(p.kicker)}</div><h3>${esc(p.name)}</h3></div>
    <span class="badge ${p.status === 'live' ? 'ok' : 'src'}">${p.status === 'live' ? '● Live' : 'Source'}</span>
  </div>
  <p class="tag">${esc(p.tagline)}</p>
  <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
  <div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.v)}</b><small>${esc(m.k)}</small></div>`).join('')}</div>
  <div class="card-acts">
    ${p.live ? `<a class="btn btn-p" href="${attr(p.live)}" target="_blank" rel="noopener">${icon('external')}Live</a>` : ''}
    <a class="btn btn-g" href="${attr(p.repo)}" target="_blank" rel="noopener">${icon('code')}Source</a>
  </div>
</article>`).join('');
}

function achievements() {
  const unlockedIds = new Set(ACHIEVEMENTS_UNLOCKED.map((a) => a.id));
  const unlocked = ACHIEVEMENTS_UNLOCKED.map((a) => {
    const pct = a.next ? Math.min(100, Math.round((a.progress / a.next) * 100)) : 100;
    return `<article class="ach tilt rv">
  <span class="shine"></span>
  <div class="ach-medal">${medal(a.id, a.tierRank)}</div>
  <div style="min-width:0;flex:1">
    <span class="tier">${esc(a.tier)}</span>
    <h4>${esc(a.name)}</h4>
    <p class="flv">${esc(a.flavor)}</p>
    ${a.next ? `<div class="bar"><i data-w="${pct}"></i></div>
    <p class="flv" style="margin-top:6px;font-family:var(--mono);font-size:10.5px;color:var(--fg3)">${a.progress} / ${a.next} ${esc(a.unit)} → next tier</p>` : ''}
    <p class="when">${icon('check')}Unlocked ${esc(a.unlocked)}</p>
    <p class="flv" style="margin-top:4px;font-size:11.5px;color:var(--fg3)">${esc(a.proof)}</p>
  </div>
</article>`;
  }).join('');

  const locked = ACHIEVEMENTS_CATALOG.filter((a) => !unlockedIds.has(a.id)).map((a) => {
    const t = a.tiers.map((x) => (x.need ? `${x.name} · ${x.need}` : x.name)).join('  ·  ');
    return `<article class="ach ach-locked tilt rv">
  <div class="ach-medal">${medal(a.id, 0)}</div>
  <div style="min-width:0;flex:1">
    <span class="tier">${icon('lock')} Locked</span>
    <h4>${esc(a.name)}</h4>
    <p class="flv">${esc(a.flavor)}</p>
    <p class="when" style="margin-top:8px">${esc(t)}</p>
  </div>
</article>`;
  }).join('');

  return `<section id="achievements">
<div class="wrap">
  <div class="sec-head rv">
    <span class="eyebrow">Trophy vault</span>
    <h2>Every achievement GitHub has <span class="grad">ever shipped</span>.</h2>
    <p class="lede">Four unlocked so far, each one verified against the live profile on ${new Date().getUTCFullYear()}. The rest are the roadmap — nothing here is decorative, every threshold is real.</p>
  </div>
  <div class="ach-grid">${unlocked}</div>
  <div class="sec-head rv" style="margin-top:56px">
    <span class="eyebrow">Roadmap</span>
    <h3 style="font-size:clamp(20px,2.6vw,26px)">Still locked. All of them, publicly.</h3>
  </div>
  <div class="ach-grid">${locked}</div>
</div>
</section>`;
}

function timeline() {
  return TIMELINE.map((t) => `<div class="tl-item rv" data-kind="${t.kind}">
  <div class="per">${esc(t.period)}</div>
  <h3>${esc(t.title)}</h3>
  <div class="org">${esc(t.org)}</div>
  <p>${esc(t.body)}</p>
  <div class="lnks">${(t.links || []).map((l) => `<a href="${attr(l.url)}" target="_blank" rel="noopener">${icon('external')}${esc(l.label)}</a>`).join('')}</div>
</div>`).join('');
}

function stack() {
  return `<section id="stack">
<div class="wrap">
  <div class="sec-head rv"><span class="eyebrow">Arsenal</span><h2>The stack I actually <span class="grad">ship with</span>.</h2></div>
  <div class="stack-grid">${STACK.map((s, i) => `<div class="stack-col rv rv-d${(i % 4) + 1}">
    <h4>${esc(s.group)}</h4><ul>${s.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>
</div>
</section>`;
}

function contact() {
  return `<section id="contact">
<div class="wrap">
  <div class="sec-head rv"><span class="eyebrow">Open a channel</span><h2>Every link I own, <span class="grad">in one place</span>.</h2>
  <p class="lede">Pick whichever you like. They all reach the same human.</p></div>
  <div class="contact">
    <div class="social-grid rv">${SOCIALS.map((s) => `<a class="soc" style="--sc:${s.color}" href="${attr(s.url)}" target="_blank" rel="noopener" aria-label="${attr(s.label)}">
      <span class="si">${icon(s.id)}</span>
      <span class="st"><b>${esc(s.label)}</b><small>${esc(s.handle)}</small></span>
    </a>`).join('')}</div>
    <div class="mailbox rv rv-d2">
      <h3>Start something</h3>
      <p>Freelance, full-time, collaboration, or just a good problem — I read everything.</p>
      <div class="copyrow">
        <input id="mailInput" value="${attr(SITE.email)}" readonly aria-label="Email address"/>
        <button class="btn btn-p" id="copyBtn" data-v="${attr(SITE.email)}">${icon('copy')}<span id="copyLbl">Copy</span></button>
      </div>
      <ul class="facts">
        <li>${icon('check')}<span>Usually replies within 24 hours</span></li>
        <li>${icon('location')}<span>${esc(SITE.location)} · remote-friendly</span></li>
        <li>${icon('clock')}<span>Available for internships and full-time roles</span></li>
        <li>${icon('mail')}<span>Also reachable at ${esc(SITE.emailAlt)}</span></li>
      </ul>
    </div>
  </div>
</div>
</section>`;
}

function work() {
  return `<section id="work">
<div class="wrap">
  <div class="sec-head rv">
    <span class="eyebrow">Selected work</span>
    <h2>Things I built that <span class="grad">actually run</span>.</h2>
    <p class="lede">Twelve public projects — three of them businesses or products with real users. Every card links straight to the live deployment and the source.</p>
  </div>
  <div class="pj-bar rv">
    <div class="filters" role="group" aria-label="Filter projects">
      <button class="chip" data-f="all" aria-pressed="true">All</button>
      ${ALL_TAGS.map((t) => `<button class="chip" data-f="${attr(t)}" aria-pressed="false">${esc(t)}</button>`).join('')}
    </div>
    <div class="view-tog" role="group" aria-label="View mode">
      <button data-v="grid" aria-pressed="true" aria-label="Grid view">${icon('grid')}</button>
      <button data-v="orbit" aria-pressed="false" aria-label="Constellation view">${icon('orbit')}</button>
    </div>
  </div>
  <div class="pj-grid" id="pjGrid">${projectCards()}</div>
  <div class="constel" id="constel" style="display:none" aria-label="Project constellation">
    ${constellation(PROJECTS)}
    <div id="conPanel" style="position:absolute;left:20px;bottom:20px;max-width:min(340px,80%);padding:18px;border:1px solid var(--line2);border-radius:16px;background:color-mix(in srgb,var(--bg2) 92%,transparent);backdrop-filter:blur(10px)"></div>
  </div>
</div>
</section>`;
}

function buildIndex_() {
  return `<script id="palData" type="application/json">${JSON.stringify(buildIndex()).replace(/</g, '\\u003c')}</script>`;
}

function palette() {
  return `<div class="pal" id="pal" role="dialog" aria-modal="true" aria-label="Command palette">
  <div class="pal-box">
    <div class="pal-in">${icon('search')}
      <input id="palInput" type="text" placeholder="Search projects, links, achievements…" autocomplete="off" spellcheck="false"/>
      <span class="kbd">ESC</span>
    </div>
    <div class="pal-list" id="palList" role="listbox"></div>
    <div class="pal-foot"><span>↑↓ navigate</span><span>↵ open</span><span>esc close</span><span style="margin-left:auto">${PROJECTS.length} projects · ${SOCIALS.length} links</span></div>
  </div>
</div>`;
}

function jsonld() {
  const d = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    alternateName: SITE.handle,
    jobTitle: SITE.title,
    email: `mailto:${SITE.email}`,
    url: BASE,
    image: `${BASE}/og.svg`,
    sameAs: SOCIALS.filter((s) => !s.url.startsWith('mailto:')).map((s) => s.url),
    address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Malaviya National Institute of Technology Jaipur' },
    knowsAbout: STACK.flatMap((s) => s.items),
    worksFor: { '@type': 'Organization', name: 'EkGuru', url: 'https://ekguru.shop' },
  };
  return `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`;
}

function homePage() {
  const body = `${nav()}
<main>
${hero()}
${marquee()}
${telemetry()}
${work()}
${achievements()}
<section id="about">
<div class="wrap">
  <div class="sec-head rv"><span class="eyebrow">Trajectory</span><h2>From a hostel room to a <span class="grad">platform</span>.</h2></div>
  <div class="tl">${timeline()}</div>
</div>
</section>
${stack()}
${contact()}
</main>
${footer()}
${palette()}
${buildIndex_()}
<script>${minJS(JS)}</script>`;
  return page({
    title: `${SITE.name} — Founder & CEO @ EkGuru · Full-Stack & AI Engineer`,
    description: `${SITE.about}`,
    body, path: '/', jsonld: jsonld(),
  });
}

/* ── résumé ──────────────────────────────────────────────────────────────── */
function resumePage() {
  const skills = STACK.map((s) => `<div class="rs-skill"><h4>${esc(s.group)}</h4><p>${esc(s.items.join(' · '))}</p></div>`).join('');
  const liveProjects = PROJECTS.filter((p) => p.live);
  const body = `${nav()}
<main>
<section style="padding-top:120px">
<div class="wrap">
  <div class="no-print" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:26px">
    <button class="btn btn-p" onclick="window.print()">${icon('print')}Print / Save as PDF</button>
    <a class="btn btn-g" href="/">${icon('arrow')}Back to portfolio</a>
  </div>
  <article class="rs">
    <header class="rs-head">
      <div>
        <h1>${esc(SITE.fullName)}</h1>
        <p class="rs-title">${esc(SITE.title)}</p>
        <p class="rs-sub">${icon('location')}${esc(SITE.location)} · ${icon('mail')}<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a> · ${icon('github')}<a href="https://github.com/itsThePrakash" target="_blank" rel="noopener">github.com/itsThePrakash</a></p>
      </div>
      <div class="rs-badge"><div class="rs-badge-in"><b>4</b><small>Achievements unlocked</small></div></div>
    </header>
    <section class="rs-sec">
      <h2>Profile</h2>
      <p>${esc(SITE.about)} Founder of two products that solve problems I personally hit: EkGuru, a Hindi-first language bridge with 2,600+ pages across 7 interface locales, and Print$Buddy, a late-night hostel print-delivery service at MNIT Jaipur. I work end to end — architecture, implementation, performance budget, deployment and the unglamorous parts nobody posts about.</p>
    </section>
    <section class="rs-sec">
      <h2>Experience</h2>
      ${TIMELINE.filter((t) => t.kind === 'work').map((t) => `<div class="rs-item">
        <div class="rs-item-h"><h3>${esc(t.title)}</h3><span>${esc(t.period)}</span></div>
        <p class="rs-org">${esc(t.org)}</p><p>${esc(t.body)}</p>
        <div class="lnks">${(t.links || []).map((l) => `<a href="${attr(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</div>
      </div>`).join('')}
    </section>
    <section class="rs-sec">
      <h2>Education</h2>
      ${TIMELINE.filter((t) => t.kind === 'education').map((t) => `<div class="rs-item">
        <div class="rs-item-h"><h3>${esc(t.title)}</h3><span>${esc(t.period)}</span></div>
        <p class="rs-org">${esc(t.org)}</p><p>${esc(t.body)}</p>
      </div>`).join('')}
    </section>
    <section class="rs-sec">
      <h2>Selected projects</h2>
      ${PROJECTS.filter((p) => p.featured).map((p) => `<div class="rs-item">
        <div class="rs-item-h"><h3>${esc(p.name)}${p.live ? ` · <a href="${attr(p.live)}" target="_blank" rel="noopener">live</a>` : ''}</h3><span>${esc(p.kicker)}</span></div>
        <p>${esc(p.description)}</p>
        <p class="rs-stack">${esc(p.stack.join(' · '))}</p>
      </div>`).join('')}
    </section>
    <section class="rs-sec">
      <h2>Technical skills</h2>
      <div class="rs-skills">${skills}</div>
    </section>
    <section class="rs-sec">
      <h2>Achievements &amp; certifications</h2>
      <ul class="rs-ach">
        ${ACHIEVEMENTS_UNLOCKED.map((a) => `<li><b>${esc(a.name)}</b> — ${esc(a.flavor)} <span class="rs-when">unlocked ${esc(a.unlocked)}</span></li>`).join('')}
        <li><b>GitHub Pro</b> — active subscription</li>
        <li><b>${liveProjects.length} live production deployments</b> — ${liveProjects.map((p) => p.name).join(', ')}</li>
      </ul>
    </section>
    <section class="rs-sec">
      <h2>Links</h2>
      <div class="rs-links">${SOCIALS.map((s) => `<a href="${attr(s.url)}" target="_blank" rel="noopener"><b>${esc(s.label)}</b><small>${esc(s.handle)}</small></a>`).join('')}</div>
    </section>
  </article>
</div>
</section>
</main>
${footer()}
<script>${minJS(JS)}</script>`;
  return page({
    title: `Résumé — ${SITE.fullName} · ${SITE.title}`,
    description: `Résumé of ${SITE.fullName} — Founder & CEO at EkGuru, full-stack and AI engineer, MNIT Jaipur CSE. Print-ready.`,
    body, path: '/resume',
    extraHead: `<style>${minCSS(RESUME_CSS)}</style>`,
  });
}

const RESUME_CSS = `
.rs{border:1px solid var(--line);border-radius:var(--r2);background:var(--surface);padding:clamp(24px,4vw,48px)}
.rs-head{display:flex;gap:24px;align-items:flex-start;justify-content:space-between;padding-bottom:22px;border-bottom:2px solid var(--line2);margin-bottom:8px}
.rs-head h1{font-size:clamp(32px,5vw,50px);letter-spacing:-.04em}
.rs-title{font-size:clamp(14px,1.8vw,18px);color:var(--c);font-family:var(--mono);margin-top:6px}
.rs-sub{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:12.5px;color:var(--fg3);margin-top:12px;font-family:var(--mono)}
.rs-sub a:hover{color:var(--c)}
.rs-sub svg{width:13px;height:13px;display:inline;vertical-align:-2px;margin-right:5px}
.rs-badge{flex:0 0 auto;text-align:center;padding:14px 20px;border-radius:16px;border:1px solid var(--line2);background:var(--bg2)}
.rs-badge b{display:block;font-size:34px;font-family:var(--mono);letter-spacing:-.04em;line-height:1}
.rs-badge small{font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--fg3);font-family:var(--mono)}
.rs-sec{padding-block:24px;border-bottom:1px solid var(--line)}
.rs-sec:last-child{border-bottom:0}
.rs-sec h2{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--fg3);margin-bottom:16px}
.rs-sec>p{font-size:14.5px;color:var(--fg2);max-width:78ch}
.rs-item{padding-block:14px;border-top:1px dashed var(--line)}
.rs-item:first-of-type{border-top:0;padding-top:0}
.rs-item-h{display:flex;gap:14px;align-items:baseline;justify-content:space-between}
.rs-item-h h3{font-size:16.5px}
.rs-item-h h3 a{color:var(--c);font-size:13px;font-family:var(--mono)}
.rs-item-h span{font-family:var(--mono);font-size:11px;color:var(--fg3);white-space:nowrap}
.rs-org{font-family:var(--mono);font-size:12px;color:var(--v);margin:3px 0 7px}
.rs-item p{font-size:13.5px;color:var(--fg2);max-width:80ch}
.rs-stack{font-family:var(--mono);font-size:11.5px;color:var(--fg3);margin-top:7px}
.rs-skills{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.rs-skill{border:1px solid var(--line);border-radius:12px;padding:13px 15px;background:var(--bg2)}
.rs-skill h4{font-family:var(--mono);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--fg3);margin-bottom:6px}
.rs-skill p{font-size:13px;color:var(--fg2);line-height:1.55}
.rs-ach{list-style:none;margin:0;padding:0;display:grid;gap:9px}
.rs-ach li{font-size:13.5px;color:var(--fg2);padding-left:18px;position:relative}
.rs-ach li::before{content:"▸";position:absolute;left:0;color:var(--g)}
.rs-ach b{color:var(--fg)}
.rs-when{font-family:var(--mono);font-size:11px;color:var(--fg3)}
.rs-links{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px}
.rs-links a{border:1px solid var(--line);border-radius:11px;padding:10px 13px;background:var(--bg2);transition:border-color .2s}
.rs-links a:hover{border-color:var(--line2)}
.rs-links b{display:block;font-size:13px}
.rs-links small{font-family:var(--mono);font-size:10.5px;color:var(--fg3)}
@media (max-width:640px){.rs-head{flex-direction:column}.rs-item-h{flex-direction:column;gap:2px}.rs-item-h span{white-space:normal}}
`;

/* ── 404 ─────────────────────────────────────────────────────────────────── */
function notFound() {
  const body = `${nav()}
<main><section style="padding-top:150px;min-height:70vh;display:flex;align-items:center">
<div class="wrap" style="text-align:center">
  <p class="eyebrow" style="justify-content:center">Error 404</p>
  <h1 style="font-size:clamp(48px,10vw,110px);letter-spacing:-.05em" class="grad">Signal lost.</h1>
  <p class="lede" style="margin:18px auto 28px">That route doesn't exist. The core is still spinning though.</p>
  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    <a class="btn btn-p" href="/">${icon('arrow')}Home</a>
    <a class="btn btn-g" href="/resume">Résumé</a>
    <a class="btn btn-g" href="https://github.com/itsThePrakash" target="_blank" rel="noopener">${icon('github')}GitHub</a>
  </div>
</div></section></main>
${footer()}
<script>${minJS(JS)}</script>`;
  return page({ title: '404 — Signal lost', description: 'Page not found.', body, path: '/404' });
}

/* ── static side-cars ────────────────────────────────────────────────────── */
function sidecars() {
  const robots = `# SIGNAL CORE
User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${BASE}/resume</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>
`;
  const manifest = {
    name: `${SITE.name} — ${SITE.title}`,
    short_name: SITE.name,
    description: SITE.about,
    start_url: '/',
    display: 'standalone',
    background_color: '#05060b',
    theme_color: '#05060b',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
  };
  const ghJson = JSON.stringify(SNAP, null, 2);
  return { robots, sitemap, manifest, ghJson };
}

/* ── run ─────────────────────────────────────────────────────────────────── */
function main() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(join(DIST, 'medals'), { recursive: true });
  mkdirSync(join(DIST, 'data'), { recursive: true });

  const pages = [
    ['index.html', homePage()],
    ['resume.html', resumePage()],
    ['404.html', notFound()],
  ];
  for (const [f, html] of pages) writeFileSync(join(DIST, f), minHTML(html));

  const s = sidecars();
  writeFileSync(join(DIST, 'robots.txt'), s.robots);
  writeFileSync(join(DIST, 'sitemap.xml'), s.sitemap);
  writeFileSync(join(DIST, 'manifest.webmanifest'), JSON.stringify(s.manifest, null, 2));
  writeFileSync(join(DIST, 'data', 'github.json'), s.ghJson);
  writeFileSync(join(DIST, 'icon.svg'), favicon());
  writeFileSync(join(DIST, 'og.svg'), ogCard());
  writeFileSync(join(DIST, 'banner.svg'), banner());

  for (const a of [...ACHIEVEMENTS_UNLOCKED, ...ACHIEVEMENTS_CATALOG]) {
    writeFileSync(join(DIST, 'medals', `${a.id}.svg`), medal(a.id, 0));
  }

  // report
  const sizes = pages.map(([f]) => [f, statSync(join(DIST, f)).size]);
  console.log('\n  SIGNAL CORE — build complete\n  ─────────────────────────────');
  for (const [f, b] of sizes) console.log(`  ${f.padEnd(16)} ${(b / 1024).toFixed(1)} KB`);
  console.log(`  medals/         ${ACHIEVEMENTS_UNLOCKED.length + ACHIEVEMENTS_CATALOG.length} svg`);
  console.log(`  total static    ${walk(DIST)} files\n`);
}

function walk(dir) {
  let n = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += walk(join(dir, e.name));
    else n++;
  }
  return n;
}

main();

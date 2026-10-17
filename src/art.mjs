/**
 * SIGNAL CORE — hand-authored SVG art.
 * No raster assets, no icon fonts, no CDN. Every pixel here is generated.
 */

const TIER_COLORS = ['#8b93ad', '#cd7f32', '#c0c6d4', '#ffcf4d'];

/** A 64×64 achievement medal, tier-aware. */
export function medal(id, tierRank = 0) {
  const ring = TIER_COLORS[Math.min(tierRank, 3)];
  const sym = SYMBOLS[id] || SYMBOLS.default;
  const gid = `g_${id}_${tierRank}`;
  return `<svg viewBox="0 0 64 64" role="img" aria-label="${id} medal">
<defs>
  <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${ring}" stop-opacity=".95"/>
    <stop offset="1" stop-color="${ring}" stop-opacity=".35"/>
  </linearGradient>
  <radialGradient id="${gid}b" cx=".5" cy=".38" r=".62">
    <stop offset="0" stop-color="#1a1f36"/>
    <stop offset="1" stop-color="#070a14"/>
  </radialGradient>
</defs>
<circle cx="32" cy="32" r="29" fill="url(#${gid}b)"/>
<circle cx="32" cy="32" r="29" fill="none" stroke="url(#${gid})" stroke-width="2.4"/>
<circle cx="32" cy="32" r="24.5" fill="none" stroke="${ring}" stroke-opacity=".22" stroke-width="1"/>
${tierRank > 0 ? `<circle cx="32" cy="32" r="26.4" fill="none" stroke="${ring}" stroke-width=".9" stroke-opacity=".5" stroke-dasharray="2.6 3.4"/>` : ''}
<g transform="translate(32 32) scale(1.02)" color="${ring}">${sym}</g>
</svg>`;
}

/** The brand mark — a stylised orbit core. */
export function logoMark() {
  return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<circle cx="12" cy="12" r="3.1" fill="currentColor"/>
<ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="currentColor" stroke-width="1.5" transform="rotate(-26 12 12)"/>
<circle cx="20.4" cy="8.6" r="1.7" fill="currentColor"/>
</svg>`;
}

/* ── favicon ─────────────────────────────────────────────────────────────── */
export function favicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs><linearGradient id="f" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#7c5cff"/><stop offset=".55" stop-color="#5b7cff"/><stop offset="1" stop-color="#00e5ff"/>
</linearGradient></defs>
<rect width="64" height="64" rx="16" fill="#05060b"/>
<circle cx="32" cy="32" r="8" fill="url(#f)"/>
<ellipse cx="32" cy="32" rx="23" ry="9.5" stroke="url(#f)" stroke-width="3" fill="none" transform="rotate(-26 32 32)"/>
<circle cx="52" cy="21" r="4" fill="#ff4d8d"/>
</svg>`;
}

/* ── Open Graph card (1200×630) ──────────────────────────────────────────── */
export function ogCard({ sub = 'Founder &amp; CEO @ EkGuru', tag = 'SIGNAL CORE · ONLINE' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" font-family="ui-monospace,Menlo,Consolas,monospace">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#05060b"/><stop offset=".5" stop-color="#0a0d1c"/><stop offset="1" stop-color="#05060b"/>
  </linearGradient>
  <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7c5cff"/><stop offset=".5" stop-color="#00e5ff"/><stop offset="1" stop-color="#ff4d8d"/>
  </linearGradient>
  <radialGradient id="glow" cx=".2" cy=".1" r=".8">
    <stop offset="0" stop-color="#7c5cff" stop-opacity=".38"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0"/>
  </radialGradient>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0v48" fill="none" stroke="#ffffff" stroke-opacity=".05"/>
  </pattern>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/>
<rect width="1200" height="630" fill="url(#grid)"/>
<rect width="1200" height="630" fill="url(#glow)"/>
<g transform="translate(88 96)">
  <rect x="-14" y="-34" width="300" height="34" rx="17" fill="#ffffff" fill-opacity=".05" stroke="#ffffff" stroke-opacity=".12"/>
  <circle cx="6" cy="-17" r="5" fill="#22e07a"/><text x="22" y="-12" fill="#a8b2cf" font-size="14" letter-spacing="3">${tag}</text>
  <text y="42" fill="#e9edf9" font-size="76" font-weight="700" letter-spacing="-3" font-family="ui-sans-serif,-apple-system,Inter,sans-serif">PRAKASH GOTHWAL</text>
  <text y="104" fill="url(#acc)" font-size="30" letter-spacing="-1" font-family="ui-sans-serif,-apple-system,Inter,sans-serif">${sub}</text>
  <text y="160" fill="#6b7594" font-size="20">B.Tech CSE, MNIT Jaipur · Kolwa, Dausa · Jaipur, India</text>
</g>
<g transform="translate(88 430)" font-size="17" fill="#a8b2cf">
  <text y="0">$ whoami</text>
  <text y="34" fill="#7c5cff">→</text><text x="30" y="34">ekguru.shop · printsbuddy.vercel.app · saranshne.vercel.app</text>
  <text y="68" fill="#7c5cff">→</text><text x="30" y="68">github.com/itsThePrakash · 4 achievements unlocked</text>
  <text y="102" fill="#22e07a">▸</text><text x="30" y="102" fill="#22e07a">available for work</text>
</g>
<g transform="translate(1010 470)">
  <circle r="96" fill="none" stroke="#ffffff" stroke-opacity=".1"/>
  <circle r="70" fill="none" stroke="#ffffff" stroke-opacity=".14" stroke-dasharray="3 6"/>
  <circle r="40" fill="url(#acc)" opacity=".9"/>
  <circle r="40" fill="none" stroke="#ffffff" stroke-opacity=".4"/>
  <circle cx="96" cy="-62" r="7" fill="#00e5ff"/>
  <circle cx="-88" cy="46" r="6" fill="#ff4d8d"/>
</g>
<rect y="612" width="1200" height="4" fill="url(#acc)"/>
</svg>`;
}

/* ── README banner (1500×480) ───────────────────────────────────────────── */
export function banner() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="480" viewBox="0 0 1500 480" font-family="ui-monospace,Menlo,Consolas,monospace">
<defs>
  <linearGradient id="bbg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#05060b"/><stop offset=".45" stop-color="#0b0e20"/><stop offset="1" stop-color="#05060b"/>
  </linearGradient>
  <linearGradient id="bacc" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7c5cff"/><stop offset=".5" stop-color="#00e5ff"/><stop offset="1" stop-color="#ff4d8d"/>
  </linearGradient>
  <radialGradient id="bglow" cx=".18" cy=".2" r=".85">
    <stop offset="0" stop-color="#7c5cff" stop-opacity=".42"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bglow2" cx=".85" cy=".85" r=".7">
    <stop offset="0" stop-color="#00e5ff" stop-opacity=".22"/><stop offset="1" stop-color="#00e5ff" stop-opacity="0"/>
  </radialGradient>
  <pattern id="bgrid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M40 0H0v40" fill="none" stroke="#ffffff" stroke-opacity=".045"/>
  </pattern>
</defs>
<rect width="1500" height="480" fill="url(#bbg)"/>
<rect width="1500" height="480" fill="url(#bgrid)"/>
<rect width="1500" height="480" fill="url(#bglow)"/>
<rect width="1500" height="480" fill="url(#bglow2)"/>
<g stroke="#ffffff" stroke-opacity=".07" fill="none">
  <path d="M0 380 C 300 340 620 420 1500 300"/>
  <path d="M0 420 C 380 380 700 460 1500 350"/>
  <path d="M0 460 C 420 420 780 500 1500 400"/>
</g>
<g transform="translate(80 84)">
  <rect x="-10" y="-30" width="278" height="30" rx="15" fill="#ffffff" fill-opacity=".05" stroke="#ffffff" stroke-opacity=".13"/>
  <circle cx="8" cy="-15" r="4.5" fill="#22e07a"/>
  <text x="24" y="-10" fill="#a8b2cf" font-size="12.5" letter-spacing="3.5">SIGNAL CORE // ACTIVE</text>
  <text y="58" fill="#e9edf9" font-size="66" font-weight="700" letter-spacing="-2.5" font-family="ui-sans-serif,-apple-system,Inter,sans-serif">PRAKASH GOTHWAL</text>
  <text y="104" fill="url(#bacc)" font-size="26" letter-spacing="-.5" font-family="ui-sans-serif,-apple-system,Inter,sans-serif">Founder &amp; CEO @ EkGuru · Full-Stack &amp; AI Engineer</text>
  <text y="152" fill="#6b7594" font-size="16">B.Tech CSE, MNIT Jaipur (2022–2026) · Kolwa, Dausa · Jaipur, India</text>
</g>
<g transform="translate(80 356)" font-size="14.5">
  <text y="0" fill="#22e07a">▸</text><text x="22" y="0" fill="#a8b2cf">ekguru.shop</text>
  <text x="200" y="0" fill="#22e07a">▸</text><text x="222" y="0" fill="#a8b2cf">printsbuddy.vercel.app</text>
  <text x="520" y="0" fill="#22e07a">▸</text><text x="542" y="0" fill="#a8b2cf">saranshne.vercel.app</text>
  <text x="820" y="0" fill="#22e07a">▸</text><text x="842" y="0" fill="#a8b2cf">github.com/itsThePrakash</text>
</g>
<g transform="translate(1270 240)">
  <circle r="130" fill="none" stroke="#ffffff" stroke-opacity=".08"/>
  <circle r="96" fill="none" stroke="#ffffff" stroke-opacity=".12" stroke-dasharray="3 7"/>
  <circle r="56" fill="url(#bacc)" opacity=".92"/>
  <circle r="56" fill="none" stroke="#ffffff" stroke-opacity=".35"/>
  <text y="8" text-anchor="middle" fill="#05060b" font-size="34" font-weight="700">P</text>
  <circle cx="130" cy="-86" r="9" fill="#00e5ff"/>
  <circle cx="-120" cy="66" r="8" fill="#ff4d8d"/>
  <circle cx="40" cy="128" r="6" fill="#7c5cff"/>
</g>
<rect y="472" width="1500" height="4" fill="url(#bacc)"/>
</svg>`;
}

/* ── per-achievement glyphs ─────────────────────────────────────────────── */
const SYMBOLS = {
  'pull-shark': `<g transform="translate(-32 -32) scale(1.34)" fill="currentColor"><path d="M24 6c-4 0-7.5 1.6-10 4.2C11.5 7.6 8 6 4 6 1.8 6 0 7.8 0 10v9c0 8 7.5 14.5 17 18.5l7 3.4 7-3.4C40.5 33.5 48 27 48 19v-9c0-2.2-1.8-4-4-4-4 0-7.5 1.6-10 4.2C31.5 7.6 28 6 24 6zm0 4.6c2.9 0 5.4 1.3 6.9 3.4l1.1 1.6 1.1-1.6C34.6 11.9 37.1 10.6 40 10.6v8.4c0 6-5.6 11.3-14 14.6L24 35.9l-2-2.3C13.6 30.3 8 25 8 19v-8.4c2.9 0 5.4 1.3 6.9 3.4l1.1 1.6 1.1-1.6c1.5-2.1 4-3.4 6.9-3.4z"/></g>`,
  'pair-extraordinaire': `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><circle cx="17" cy="8" r="6"/><circle cx="31" cy="8" r="6"/><path d="M6 34v-6c0-5 4.9-9 11-9 2.2 0 4.3.5 6 1.5V20c-1.7-1-3.8-1.5-6-1.5-6.1 0-11 4-11 9v6zm26 0v-6c0-5-4.9-9-11-9-2.2 0-4.3.5-6 1.5v4.5c1.7-1 3.8-1.5 6-1.5 6.1 0 11 4 11 9z" opacity=".55"/><path d="M24 30c6.1 0 11 4 11 9v3H13v-3c0-5 4.9-9 11-9z"/></g>`,
  quickdraw: `<g transform="translate(-32 -32) scale(1.32)" fill="currentColor"><path d="M26 2 4 28h14l-3 22 24-28H25z"/></g>`,
  yolo: `<g transform="translate(-32 -32) scale(1.28)" fill="currentColor"><path d="M27.6 4.4c-1-.9-2.5-.9-3.5 0L11 17.2H5.5C3.6 17.2 2 18.8 2 20.7v6.6c0 1.9 1.6 3.5 3.5 3.5H11l13.1 12.8c1 .9 2.5.9 3.5 0 .6-.6 1-1.4 1-2.2V6.6c0-.9-.4-1.7-1-2.2zM35 14v12c2.8-1.4 4.5-4.2 4.5-7.3v-.1c0-2.2-1.6-4.1-3.7-4.6z" opacity=".85"/></g>`,
  starstruck: `<g transform="translate(-32 -32) scale(1.34)" fill="currentColor"><path d="m24 3 6 12.6 13.8 2-10 9.8 2.4 13.8L24 35.6 11.8 41.2l2.4-13.8-10-9.8 13.8-2z"/></g>`,
  'galaxy-brain': `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><path d="M24 4C15.2 4 8 11.2 8 20c0 3 .8 5.7 2.3 8.1L8 36l8-2.3c2.4 1.4 5.1 2.3 8 2.3 8.8 0 16-7.2 16-16S32.8 4 24 4zm-4 12a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2zm8 0a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z" opacity=".9"/><path d="M17 28h14v3H17z" opacity=".5"/></g>`,
  'public-sponsor': `<g transform="translate(-32 -32) scale(1.32)" fill="currentColor"><path d="M24 40S6 29.4 6 16.6C6 10.2 10.9 5.4 17 5.4c3.1 0 5.8 1.4 7 3.6 1.2-2.2 3.9-3.6 7-3.6 6.1 0 11 4.8 11 11.2C42 29.4 24 40 24 40z"/></g>`,
  'open-sourcerer': `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><path d="M24 3 8 12v11c0 10 6.8 19.3 16 22 9.2-2.7 16-12 16-22V12zm-3 27-8-8 2.8-2.8L21 25l9.2-9.2L33 18.6z"/></g>`,
  'heart-on-your-sleeve': `<g transform="translate(-32 -32) scale(1.32)" fill="currentColor"><path d="M24 41S5 30 5 17.5C5 10.6 10.6 5 17.5 5 21 5 23.6 6.7 24 8.4 24.4 6.7 27 5 30.5 5 37.4 5 43 10.6 43 17.5 43 30 24 41 24 41z"/></g>`,
  'arctic-code-vault': `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><path d="M24 4 42 13v14c0 9.4-7.2 17.6-18 21C13.2 44.6 6 36.4 6 27V13zm0 5.6L10 15.6V27c0 7.2 5.4 13.6 14 16.6 8.6-3 14-9.4 14-16.6V15.6z"/><path d="M22 18h4v14h-4z" opacity=".6"/></g>`,
  'mars-2020': `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><circle cx="24" cy="24" r="17" opacity=".9"/><ellipse cx="24" cy="22" rx="9" ry="4" fill="#05060b"/><path d="M24 8c3 4 4 8 4 12s-1 8-4 12c-3-4-4-8-4-12s1-8 4-12z" fill="#05060b" opacity=".8"/></g>`,
  'github-star': `<g transform="translate(-32 -32) scale(1.34)" fill="currentColor"><path d="m24 2 5.8 12.2 13.2 1.8-9.6 9.4 2.4 13.4L24 33.2 12.2 38.8l2.4-13.4L5 16l13.2-1.8z"/></g>`,
  default: `<g transform="translate(-32 -32) scale(1.3)" fill="currentColor"><circle cx="24" cy="24" r="16" opacity=".85"/><circle cx="24" cy="24" r="7" fill="#05060b"/></g>`,
};

/* ── project constellation ──────────────────────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function panelHTML(p) {
  return `<div class="k">${esc(p.kicker)}</div><h3>${esc(p.name)}</h3>
<p class="tg">${esc(p.tagline)}</p><div class="lnks">
${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live ↗</a>` : ''}
<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source ↗</a></div>`;
}

export function constellation(projects) {
  const W = 1000, H = 560, cx = W / 2, cy = H / 2;
  const rings = [165, 250, 335];
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const nodes = [];
  featured.forEach((p, i) => {
    nodes.push({ p, r: rings[0], a: (i / featured.length) * Math.PI * 2 - Math.PI / 2, big: true });
  });
  rest.forEach((p, i) => {
    nodes.push({ p, r: rings[i % 2 === 0 ? 1 : 2], a: (i / rest.length) * Math.PI * 2 + 0.42, big: false });
  });
  let out = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-label="Project constellation">`;
  out += `<defs><radialGradient id="sun" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#7c5cff" stop-opacity=".5"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0"/>
  </radialGradient></defs>`;
  for (const r of rings) out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#ffffff" stroke-opacity=".055"/>`;
  out += `<circle cx="${cx}" cy="${cy}" r="120" fill="url(#sun)"/>`;
  out += `<circle cx="${cx}" cy="${cy}" r="34" fill="#0b0e1c" stroke="#7c5cff" stroke-opacity=".55"/>`;
  out += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="ui-monospace,monospace" font-size="13" fill="#a8b2cf" letter-spacing="2">CORE</text>`;
  for (const n of nodes) {
    const x = cx + Math.cos(n.a) * n.r, y = cy + Math.sin(n.a) * n.r;
    const rad = n.big ? 15 : 10;
    out += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${n.p.accent}" stroke-opacity=".2" stroke-width="1"/>`;
    out += `<g class="node" tabindex="0" role="button" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"
      data-tags="${n.p.tags.join(',')}" data-url="${n.p.live || n.p.repo}"
      data-panel="${esc(panelHTML(n.p))}">
      <circle class="hit" r="${rad + 14}"/>
      <circle r="${rad + 8}" fill="${n.p.accent}" opacity=".12"/>
      <circle class="glowc" r="${rad}" fill="#0b0e1c" stroke="${n.p.accent}" stroke-width="2" color="${n.p.accent}"/>
      <circle r="${(rad * 0.42).toFixed(1)}" fill="${n.p.accent}"/>
      <text y="${rad + 22}" text-anchor="middle">${esc(n.p.name)}</text>
    </g>`;
  }
  return out + `</svg>`;
}

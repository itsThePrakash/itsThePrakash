/**
 * Inline SVG icon set — hand-drawn 24×24 stroke icons, no external requests.
 * Emitted once as a <symbol> sprite, then referenced with <use>, so the whole
 * set costs ~120 bytes each on first paint and ~25 bytes per reuse.
 */

const P = (d, extra = '') =>
  `<path d="${d}" ${extra}/>`;

const RAW = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.3 9.6 7.9 11.2.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17.3 4.2 18.3 4.5 18.3 4.5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-11.2C23.5 5.8 18.3.5 12 .5z"/></svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.24V21H9z"/></svg>`,

  x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.9l-4.6-6.1L6.2 22H3l7.3-8.3L2.4 2h7l4.3 5.7zM17.6 20.1h1.9L7.5 3.8H5.5z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5 1 .5.5.77.9 1 1.5.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.23.6-.5 1-1 1.5-.5.5-.9.77-1.5 1-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.23-1-.5-1.5-1-.5-.5-.77-.9-1-1.5-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.23-.6.5-1 1-1.5.5-.5.9-.77 1.5-1 .4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.4.17-.7.36-1 .66-.3.3-.5.6-.66 1-.12.3-.28.8-.32 1.7C3.55 8.9 3.55 9.3 3.55 12s0 3.1.07 4.3c.04.9.2 1.4.32 1.7.17.4.36.7.66 1 .3.3.6.5 1 .66.3.12.8.28 1.7.32 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.4-.17.7-.36 1-.66.3-.3.5-.6.66-1 .12-.3.28-.8.32-1.7.07-1.2.07-1.6.07-4.3s0-3.1-.07-4.3c-.04-.9-.2-1.4-.32-1.7a2.7 2.7 0 0 0-.66-1 2.7 2.7 0 0 0-1-.66c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.2-2.1a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"/></svg>`,

  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.6V8.4L15.8 12z"/></svg>`,

  geeksforgeeks: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6zm.3 4.2c2.9 0 5 1.5 5.7 3.9l-2.6.7c-.4-1.2-1.4-2-3-2-2.1 0-3.5 1.6-3.5 4s1.4 4 3.6 4c1.4 0 2.4-.6 2.9-1.6h-2.7v-2.2h5.5v1.1c0 3.3-2.2 5.5-5.8 5.5-3.7 0-6.3-2.6-6.3-6.8 0-4.1 2.7-6.6 6.2-6.6z"/></svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6l-1 6 4 4H6l4-4z"/><path d="M12 13v8"/></svg>`,

  telegram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3 19 19.4c-.2 1-.8 1.2-1.6.75l-4.4-3.2-2.1 2c-.24.24-.44.44-.9.44l.32-4.5 8.2-7.4c.36-.32-.08-.5-.55-.18L7.6 13.1 3.3 11.8c-.96-.3-.98-.96.2-1.42L20.3 3.2c.8-.3 1.5.2 1.6 1.1z"/></svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.5-.13-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13h2.8v8z"/></svg>`,

  devto: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.4 8.6v6.8c0 .6-.2 1-.6 1.3-.4.3-.9.5-1.5.5H4.9v-1.5h.2c.3 0 .5-.1.6-.3.1-.2.2-.4.2-.7V8.6c0-.3-.1-.5-.2-.7a.8.8 0 0 0-.6-.3h-.2V6.1h.4c.6 0 1.1.2 1.5.5.4.3.6.7.6 1.3zM12 6.1c1.6 0 2.7.5 3.4 1.4l-1.5 1c-.3-.5-.8-.7-1.5-.7-.7 0-1.2.3-1.2.8 0 .3.2.6.5.7.2.1.7.3 1.4.5 1 .3 1.6.6 2 1 .4.5.6 1 .6 1.7 0 1.4-1.1 2.3-2.9 2.3-1.7 0-2.8-.7-3.4-2l1.5-1c.3.7.8 1 1.6 1 .6 0 1-.3 1-.8 0-.3-.2-.5-.6-.7-.2-.1-.7-.3-1.4-.5-1-.3-1.6-.6-2-1-.4-.5-.6-1-.6-1.7C8.4 7 9.5 6.1 12 6.1zM0 3v18h24V3zm2.2 2.2h19.6v13.6H2.2z"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>`,

  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 9h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M6.5 3.5c0 1-1 1.2-1 2.2M10 3.5c0 1-1 1.2-1 2.2"/></svg>`,

  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.54 3.54 0 0 0-5-5l-1.5 1.5"/><path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.54 3.54 0 0 0 5 5l1.5-1.5"/></svg>`,

  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16"/></svg>`,

  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,

  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/></svg>`,

  star: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95z"/></svg>`,

  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 5H4.5v1.5A3.5 3.5 0 0 0 8 10M17 5h2.5v1.5A3.5 3.5 0 0 1 16 10"/><path d="M12 13v4M8.5 21h7M9.5 21l.5-4h4l.5 4"/></svg>`,

  spark: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/></svg>`,

  bolt: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 2 4 14h6l-1.5 8L19 9.5h-6.5z"/></svg>`,

  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.5 2"/></svg>`,

  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2h10A1.5 1.5 0 0 1 16 3.5V5"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 12.5 5.5 5.5L20 6.5"/></svg>`,

  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/></svg>`,

  moon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>`,

  command: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"/></svg>`,

  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>`,

  orbit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="2.4"/><ellipse cx="12" cy="12" rx="9.5" ry="4.2" transform="rotate(-24 12 12)"/><circle cx="20" cy="9" r="1.4" fill="currentColor" stroke="none"/></svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/></svg>`,

  rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5c3.5 2.2 5.5 6 5.5 10.5L14 16l-2 3.5-2-3.5-3.5-3C6.5 12.5 8.5 8.7 12 2.5z"/><circle cx="12" cy="10" r="2"/><path d="M9.5 19.5c0 1.5-1 2.5-2.5 2.5S4.5 21 4.5 19.5"/></svg>`,

  print: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 8V3.5h10V8"/><rect x="3.5" y="8" width="17" height="8" rx="2"/><path d="M7 13h10v7.5H7z"/></svg>`,

  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v12M7.5 11 12 15.5 16.5 11"/><path d="M4 20.5h16"/></svg>`,

  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 4.5-9 4.5L3 7.5z"/><path d="m3 12.5 9 4.5 9-4.5"/><path d="m3 17 9 4.5 9-4.5"/></svg>`,
};

/** Turn the raw icon markup into <symbol> definitions + a <use> accessor. */
export const ICONS = {};
for (const [k, v] of Object.entries(RAW)) {
  const vb = (v.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 24 24';
  const inner = v.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  ICONS[k] = { viewBox: vb, inner };
}

/** One-time sprite, injected at the top of <body>. */
export function sprite() {
  const defs = Object.entries(ICONS)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="${v.viewBox}">${v.inner}</symbol>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><defs>${defs}</defs></svg>`;
}

/** Brand icon lookup with a safe default. */
export function icon(name, cls = 'ic') {
  const key = ICONS[name] ? name : 'link';
  return `<svg class="${cls}" aria-hidden="true"><use href="#i-${key}"/></svg>`;
}

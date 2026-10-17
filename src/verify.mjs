/**
 * SIGNAL CORE — build gate.
 * Zero dependencies. Checks the three things that must never regress:
 *   1. every HTML file has balanced tags
 *   2. every internal href/src points at a file that exists in dist/
 *   3. every inline <script> passes `node --check`
 * Plus the first-paint budget: index.html must stay at or under 26 KB gzipped.
 *
 * Run with `npm run verify` (after `npm run build`).
 */
import { readdirSync, readFileSync, writeFileSync, unlinkSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const BUDGET = 26 * 1024;

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const RAW = new Set(['script', 'style']);

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const problems = [];

/* ── 1. tag balance ─────────────────────────────────────────────────────── */
function checkTags(file, html) {
  const src = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  const stack = [];
  for (const m of src.matchAll(/<(\/?)([a-zA-Z][\w:.-]*)([^>]*?)(\/?)>/g)) {
    const [, close, name, , selfClose] = m;
    const tag = name.toLowerCase();
    if (VOID.has(tag) || selfClose === '/') continue;
    if (close) {
      const open = stack.pop();
      if (open !== tag) {
        problems.push(`${file}: </${tag}> closes <${open || 'nothing'}>`);
        return;
      }
    } else {
      stack.push(tag);
    }
  }
  if (stack.length) problems.push(`${file}: unclosed <${stack.join('>, <')}>`);
}

/* ── 2. internal links ──────────────────────────────────────────────────── */
function resolveInternal(url) {
  let p = url.split('#')[0].split('?')[0];
  if (!p.startsWith('/')) return null;
  if (p === '/') return join(DIST, 'index.html');
  if (p.startsWith('/api/')) return null; // edge function, not a static file
  if (p.endsWith('/')) p += 'index.html';
  if (!/\.[a-z0-9]+$/i.test(p)) p += '.html';
  return join(DIST, p.replace(/^\//, ''));
}

function checkLinks(file, html) {
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(url)) continue;
    const target = resolveInternal(url);
    if (!target) continue;
    try {
      statSync(target);
    } catch {
      problems.push(`${file}: broken internal link ${url}`);
    }
  }
}

/* ── 3. inline JS syntax ────────────────────────────────────────────────── */
let checkedScripts = 0;
function checkScripts(file, html) {
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || '';
    if (/type="(application\/(ld\+)?json|application\/json)"/.test(attrs)) continue;
    if (/\bsrc=/.test(attrs)) continue;
    const code = m[2];
    if (!code.trim()) continue;
    const tmp = join(ROOT, `.verify-${process.pid}-${checkedScripts}.js`);
    writeFileSync(tmp, code);
    try {
      execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
    } catch (err) {
      problems.push(`${file}: inline JS fails node --check\n${String(err.stderr || err.message).trim()}`);
    } finally {
      unlinkSync(tmp);
    }
    checkedScripts++;
  }
}

for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  const rel = f.replace(DIST + '/', '');
  checkTags(rel, html);
  checkLinks(rel, html);
  checkScripts(rel, html);
}

/* ── 4. first-paint budget ──────────────────────────────────────────────── */
const index = readFileSync(join(DIST, 'index.html'));
const gz = gzipSync(index, { level: 9 }).length;
if (gz > BUDGET) problems.push(`index.html: ${(gz / 1024).toFixed(1)} KB gzipped (budget 26.0 KB)`);

/* ── report ─────────────────────────────────────────────────────────────── */
console.log('\n  SIGNAL CORE — build gate\n  ───────────────────────────────────────────');
console.log(`  html files        ${htmlFiles.length}`);
console.log(`  inline scripts    ${checkedScripts} passed node --check`);
console.log(`  internal links    ${problems.filter((p) => p.includes('broken internal')).length} broken`);
console.log(`  first paint       ${(gz / 1024).toFixed(1)} KB gzipped (budget 26.0 KB)`);

if (problems.length) {
  console.error('\n  FAIL');
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(1);
}
console.log('  ✓ all checks passed\n');

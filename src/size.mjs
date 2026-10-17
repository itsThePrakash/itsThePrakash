/**
 * SIGNAL CORE — bundle report.
 * Shows raw and gzipped bytes for everything in ./dist so the performance
 * budget stays honest. Run with `npm run size`.
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(DIST).sort();
let raw = 0, gz = 0;
const rows = [];
for (const f of files) {
  const b = statSync(f).size;
  const g = gzipSync(readFileSync(f), { level: 9 }).length;
  raw += b;
  gz += g;
  rows.push([f.replace(DIST, ''), b, g]);
}

const pad = (s, n) => String(s).padStart(n);
console.log('\n  SIGNAL CORE — transfer budget\n  ───────────────────────────────────────────');
for (const [name, b, g] of rows.sort((a, c) => c[1] - a[1]).slice(0, 14)) {
  console.log(`  ${name.padEnd(34)} ${pad((b / 1024).toFixed(1) + ' KB', 10)} ${pad((g / 1024).toFixed(1) + ' KB', 10)}`);
}
console.log('  ───────────────────────────────────────────');
console.log(`  ${'TOTAL (' + files.length + ' files)'.padEnd(34)} ${pad((raw / 1024).toFixed(1) + ' KB', 10)} ${pad((gz / 1024).toFixed(1) + ' KB', 10)}`);
console.log(`\n  first paint cost (index.html only): ${(gzipSync(readFileSync(DIST + 'index.html'), { level: 9 }).length / 1024).toFixed(1)} KB gzipped\n`);

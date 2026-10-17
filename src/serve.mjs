/**
 * SIGNAL CORE — tiny dev server.
 * Serves ./dist with the right content types. No dependencies.
 */
import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

createServer((req, res) => {
  let p;
  try {
    p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  } catch {
    res.writeHead(400).end('bad request');
    return;
  }
  if (p.endsWith('/')) p += 'index.html';
  const file = normalize(join(ROOT, p));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403).end('forbidden');
    return;
  }
  let target = file;
  if (!exists(target)) {
    const html = file.replace(/\.html$/, '') + '.html';
    if (exists(html)) target = html;
    else if (exists(join(ROOT, '404.html'))) {
      res.writeHead(404, { 'content-type': TYPES['.html'] });
      createReadStream(join(ROOT, '404.html')).pipe(res);
      return;
    }
  }
  if (!exists(target)) {
    res.writeHead(404).end('not found');
    return;
  }
  res.writeHead(200, {
    'content-type': TYPES[extname(target)] || 'application/octet-stream',
    'cache-control': 'no-store',
  });
  createReadStream(target).on('error', () => res.writeHead(500).end('read error')).pipe(res);
}).listen(PORT, HOST, () => {
  console.log(`\n  ▸ SIGNAL CORE dev server → http://${HOST}:${PORT}\n`);
});

function exists(f) {
  try {
    return statSync(f).isFile();
  } catch {
    return false;
  }
}

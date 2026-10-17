# SIGNAL CORE — operator notes

Everything on the site comes from **one file**: `src/data.mjs`.
Change a link, a project, an achievement or a social there, then rebuild.

```bash
npm run build      # → dist/  (zero dependencies, ~300 ms)
npm run dev        # build + watch-less dev server on :4173
npm run size       # raw + gzip transfer budget
npm run refresh    # pull fresh GitHub numbers into src/snapshot.json
```

## What gets generated

| Output | Purpose |
|---|---|
| `dist/index.html` | the portfolio — hero, telemetry, projects, achievements, timeline, stack, contact |
| `dist/resume.html` | print-ready résumé (`/resume`, `/cv`, `/resume.pdf` all land here) |
| `dist/404.html` | themed 404 |
| `dist/medals/*.svg` | hand-drawn achievement medals, referenced by this README |
| `dist/banner.svg`, `dist/og.svg` | the profile banner and the social card |
| `dist/data/github.json` | the build-time telemetry snapshot |
| `dist/robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `icon.svg` | the usual |

## Performance model

The site is **fully static and inlined**: one HTML request per page, CSS in
`<head>`, one deferred script, no font requests, no framework runtime, no
third-party assets on first paint. ~25 KB gzipped for the homepage.

That is the whole answer to "can it take a billion hits" — there is no origin
compute in the request path, only Vercel's edge CDN serving immutable bytes.
`vercel.json` pins:

* `Cache-Control: public, max-age=31536000, immutable` for every asset
* `s-maxage=600, stale-while-revalidate=86400` for HTML
* HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP on every route

## The fallback ladder

Telemetry (repo count, stars, followers) resolves through four tiers, and the
page is already correct before any of them run:

1. `/api/live` — an edge function that calls the GitHub REST API once per
   `s-maxage` window for the entire planet, not once per visitor
2. the visitor's browser calling `api.github.com` directly
3. `dist/data/github.json`, the snapshot baked at build time
4. a valid-but-empty payload, so the client never throws

Every external link on the page (project live URLs, socials, repos) is a plain
anchor — no JS required, no client-side routing, nothing to break.

## Optional: automatic telemetry refresh

`.github/workflows/refresh.yml` is checked in as
**`docs/refresh-workflow.yml`** because this repo's GitHub App token does not
carry the `workflows` permission, so it could not be committed under
`.github/workflows/`.

To enable it:

```bash
mkdir -p .github/workflows
cp docs/refresh-workflow.yml .github/workflows/refresh.yml
git add .github/workflows/refresh.yml && git commit -m "ci: refresh telemetry" && git push
```

It re-fetches the GitHub snapshot every 6 hours and commits it, so the baked
numbers never go stale even with zero visitors.

## Deploying

The Vercel project `itstheprakash` is linked to this repository. Every push to
the branch builds with `node src/build.mjs` and publishes `dist/`.

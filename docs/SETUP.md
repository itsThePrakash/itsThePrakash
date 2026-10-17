# SIGNAL CORE — operator notes

Everything on the site comes from **one file**: `src/data.mjs`.
Change a link, a project, an achievement or a social there, then rebuild.

```bash
npm run build      # → dist/  (zero dependencies, ~300 ms)
npm run dev        # build + watch-less dev server on :4173
npm run verify     # build gate: tag balance, internal links, inline JS, size
npm run size       # raw + gzip transfer budget
npm run refresh    # pull fresh GitHub numbers into src/snapshot.json
```

## What gets generated

| Output | Purpose |
|---|---|
| `dist/index.html` | the portfolio — hero, telemetry, projects, achievements, timeline, stack, contact |
| `dist/resume.html` | print-ready résumé (`/resume`, `/cv`, `/resume.pdf` all land here) |
| `dist/about.html` | the bio page, aimed at name searches (`/about`) |
| `dist/404.html` | themed 404 |
| `dist/medals/*.svg` | hand-drawn achievement medals, referenced by this README |
| `dist/banner.svg`, `dist/og.svg` | the profile banner and the social card |
| `dist/data/github.json` | the build-time telemetry snapshot |
| `dist/robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `icon.svg` | the usual |

## Data model

`src/data.mjs` is the whole content layer. The fields that matter:

### `PROJECTS[]`

| Field | Type | Notes |
|---|---|---|
| `id` | string | stable key, also used by the filter and constellation |
| `name`, `kicker`, `tagline`, `description` | string | card + résumé copy |
| `tags[]`, `stack[]` | string[] | filter chips and résumé stack line |
| `live` | string \| null | deployed URL → renders the **Live** button |
| `pages` | string \| null | verified `GET /repos/{owner}/{repo}/pages` URL → renders the **Pages** button |
| `repo` | string | GitHub source → renders the **Source** button |
| `featured` | boolean | included in the résumé's selected projects |
| `pin` | boolean | sorts the card to the top and adds the **Pinned** badge |
| `status` | `'live'` \| `'source'` | status pill |
| `metrics[]` | `{k,v}[]` | three verified numbers; never estimates |
| `accent` | hex | per-card accent colour |

`pages` and `live` may be the same URL — for example EkGuru's custom domain
`ekguru.shop` is served by GitHub Pages. In that case only the **Live** button
is rendered, so the same destination never appears twice.

### `ORGS[]`

| Field | Type | Notes |
|---|---|---|
| `id`, `handle`, `display` | string | org slug, GitHub handle, human name |
| `tagline`, `body` | string | copy for the organisations section |
| `role` | string | your role in the org |
| `repos[]` | object[] | `{ name, desc, url, live?, pages? }`, one row per public repo |
| `live` | string \| null | primary org destination |
| `accent` | hex | card accent colour |

Only public repos are listed. A `pages` URL is added only when
`GET /repos/{owner}/{repo}/pages` returns `200` and a real `html_url`; a 404
means Pages is not enabled and the field is omitted.

### `TIMELINE[]`

`kind` is `work`, `education` or `oss`. The résumé renders all `work` and
`education` entries; the homepage renders every entry.

## Name search and metadata

`SITE.fullName`, `SITE.aliases`, `SITE.keywords` and `SITE.hometown` in
`src/data.mjs` drive every piece of name metadata:

* `<title>`, `<meta name="description">`, `<meta name="author">` and
  `<meta name="keywords">` on every page
* JSON-LD `Person` on `/` and `/resume` (`name`, `alternateName`, `givenName`,
  `familyName`, `homeLocation`, `alumniOf`, `sameAs`)
* JSON-LD `FAQPage` on `/about`, with the same questions shown on the page
* `<link rel="me">` and `<link rel="author">`

`/about` is a real page, not a keyword dump: it says where Prakash is from,
what he studied and which name variants point to the same person. Add new
aliases in `SITE.aliases` and they flow into the metadata and the FAQ answer
without touching `build.mjs`.

Search rankings are decided by Google and Bing, not by the build. After a
deploy, submit `${BASE}/sitemap.xml` in Google Search Console and Bing Webmaster
Tools so the pages are crawled sooner.

## Performance model

The site is **fully static and inlined**: one HTML request per page, CSS in
`<head>`, one deferred script, no font requests, no framework runtime, no
third-party assets on first paint. ~25.6 KB gzipped for the homepage, with a hard 26 KB gate in `npm run verify`.

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

## Automatic telemetry refresh

`.github/workflows/refresh.yml` runs every 6 hours (and on demand), calls
`node src/fetch-github.mjs`, and commits `src/snapshot.json` if the numbers
changed. That keeps the baked fallback fresh even with zero visitors.

The same file is kept at `docs/refresh-workflow.yml` for reference, because a
token without the `workflows` scope cannot create or update anything under
`.github/workflows/`.

## Deploying

The Vercel project `itstheprakash` is linked to this repository. Every push to
the branch builds with `node src/build.mjs` and publishes `dist/`.

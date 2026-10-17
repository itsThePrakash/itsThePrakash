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
| `dist/sponsor.html` | the sponsor page (`/sponsor`) — tiers, rails, wall, FAQ |
| `dist/projects.html` | index of every project (`/projects`) |
| `dist/projects/*.html` | one page per project (`/projects/ekguru`, `/projects/bhasha-bridge`, …) |
| `dist/orgs/*.html` | one page per organisation (`/orgs/ekguru`, `/orgs/printsbuddy`) |
| `dist/repos.html` | every public repository by name (`/repos`) |
| `dist/404.html` | themed 404 |
| `dist/medals/*.svg` | hand-drawn achievement medals, referenced by this README |
| `dist/banner.svg`, `dist/og*.svg` | the profile banner and per-page social cards |
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


## Sponsorship rails

Every sponsor surface is driven by `SPONSOR` in `src/data.mjs`.

| Field | What happens when it is set |
|---|---|
| `github` | the GitHub Sponsors URL |
| `githubLive` | `true` → the page says **Live now** and every CTA points at GitHub. `false` → CTAs fall back to email and the page says **Profile in review** |
| `upi` | a copy-able UPI card appears, with the VPA and a copy button |
| `razorpay` | a Razorpay payment-page card appears |
| `buymeacoffee` | a Buy Me a Coffee card appears |
| `wall` | `{ name, url? }[]`; empty renders an honest "nobody yet" line |

Only `githubLive: true`, a non-null `upi` or a non-null `razorpay` gives people a
way to actually pay. Nothing is invented: if a rail is off, the page does not
pretend it is on. Activation steps for GitHub Sponsors are in
[`SPONSOR.md`](SPONSOR.md).


## Repository names and the /repos page

`PUBLIC_REPOS` in `src/data.mjs` is a bake of the GitHub repository list: name,
description, language, stars, last push. `/repos` renders it so every repository
name has a real page. Refresh it when repos change:

```bash
gh api '/user/repos?affiliation=owner&visibility=public&per_page=100&sort=pushed' \
  --jq '[.[] | {name, description, language, stars: .stargazers_count, url: .html_url, homepage: .homepage, pushed: .pushed_at[0:10], fork: .fork, archived: .archived, topics}]'
```

Paste the output into `PUBLIC_REPOS`, rebuild, push.

## Sponsor wall in the repo

`npm run build` writes the wall in two places from the same `SPONSOR.wall` array:

- `SPONSORS.md`
- the block between `<!-- SPONSORS:START -->` and `<!-- SPONSORS:END -->` in `README.md`

Add a sponsor to `SPONSOR.wall`, rebuild, commit. The site and the repo can never
show different names. The build skips these writes on Vercel (`VERCEL` env), so a
deploy never rewrites your repo files.

## GitHub Pages

The site is built for two hosts from one source. Vercel uses clean URLs
(`/projects/ekguru`). GitHub Pages has no clean URLs and serves this repo under
`/itsThePrakash/`, so the Pages build is generated with two env vars:

```bash
SITE_URL=https://itstheprakash.github.io/itsThePrakash \
SITE_BASE=/itsThePrakash \
npm run build && SITE_BASE=/itsThePrakash npm run verify
```

`SITE_BASE` does three things: prefixes every root-absolute link and asset, adds
`.html` to page links, and rewrites `start_url`/icons in the manifest. Canonical,
Open Graph and JSON-LD URLs follow `SITE_URL`, so each host canonicalises to
itself.

`docs/pages-workflow.yml` is that job. Copy it to `.github/workflows/pages.yml`
(the automation token here has no `workflows` permission, so this step is manual).

**One manual step, once:** repo → Settings → Pages → *Source* → **GitHub Actions**.
After that every push to `main` (or a manual run from the Actions tab) republishes
the site. Without it, Pages stays on the legacy "deploy from a branch" mode,
which serves the repo root — and the repo root has no `index.html`.

## README images

`npm run build` writes the profile-page art into `assets/` (committed):

| File | Used for |
|---|---|
| `assets/banner.svg` | the header banner |
| `assets/stats.svg` | the numbers card (repos, stars, followers, badges, languages) |
| `assets/medals/*.svg` | the four unlocked badges |
| `assets/og.svg` | the social card |

The README references them with relative paths, so GitHub serves them from the
repo itself. No third-party stats service can break the profile page. The stats
card is generated from `src/snapshot.json`.

## Repository links

`REPO_LINKS` in `src/data.mjs` is the only place a repo link lives. Each entry
carries `live`, `pages` and the source URL (derived from `owner` + `repo`).

- The home org cards, `/orgs/*` and `/repos` all render from it.
- A link only appears when the field is filled, and `pages` must be a real
  GitHub Pages URL — verify with `gh api /repos/{owner}/{repo}/pages`.
- `/repos` also renders `PUBLIC_REPOS` for the full list of 15 public repos
  (language, last push), joined to `REPO_LINKS` by repo name.

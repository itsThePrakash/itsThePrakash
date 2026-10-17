/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PRAKASH · SIGNAL CORE — single source of truth
 *  Every page, badge, stat and link on the site is generated from this file.
 *  Edit here → `npm run build` → deploy. Nothing else needs touching.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: 'Prakash',
  fullName: 'PRAKASH',
  handle: 'itsThePrakash',
  title: 'Founder & CEO @ EkGuru · Full-Stack & AI Engineer',
  roles: [
    'Founder & CEO @ EkGuru',
    'Full-Stack Engineer',
    'AI/ML Builder',
    'MNIT Jaipur · CSE',
    'Open Source Contributor',
  ],
  tagline: 'I build things that ship at scale — and that people actually use.',
  about:
    'B.Tech in Computer Science & Engineering at MNIT Jaipur (2022–2026). I founded EkGuru, a Hindi-first language bridge, and Print$Buddy, a campus print-delivery service born out of a real hostel problem at 1 a.m. I like hard problems, tiny bundles, and systems that stay up.',
  location: 'Jaipur, Rajasthan, India',
  timezone: 'Asia/Kolkata',
  email: 'itsThePrakash@gmail.com',
  emailAlt: 'itsprakashwork@gmail.com',
  photo: null, // e.g. '/me.jpg' — drop the file in public/ to show it on the résumé
  phone: null,
  available: true,
  status: '🎯 Focusing',
  hireable: true,
  yearsCoding: 4,
  resumeUrl: '/resume',
  github: 'https://github.com/itsThePrakash',
};

/* ── Social graph. Every link the profile owns, in one place. ─────────────── */
export const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@itsThePrakash',
    url: 'https://github.com/itsThePrakash',
    color: '#e8ecf6',
    primary: true,
    desc: 'Code, commits and open source',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/itsThePrakash',
    url: 'https://www.linkedin.com/in/itsThePrakash',
    color: '#0a66c2',
    primary: true,
    desc: 'Professional timeline',
  },
  {
    id: 'x',
    label: 'X / Twitter',
    handle: '@itsThePrakash',
    url: 'https://twitter.com/itsThePrakash',
    color: '#e8ecf6',
    primary: true,
    desc: 'Build logs and hot takes',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@its.the.prakash',
    url: 'https://www.instagram.com/its.the.prakash',
    color: '#e1306c',
    primary: true,
    desc: 'Behind the keyboard',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@itstheprakash',
    url: 'https://youtube.com/@itstheprakash',
    color: '#ff0033',
    primary: true,
    desc: 'Builds, demos and walkthroughs',
  },
  {
    id: 'geeksforgeeks',
    label: 'GeeksforGeeks',
    handle: 'istheprakash',
    url: 'https://www.geeksforgeeks.org/profile/istheprakash',
    color: '#2f8d46',
    primary: false,
    desc: 'DSA practice and problem solving',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '@Prakash_gothwal',
    url: 'https://t.me/Prakash_gothwal',
    color: '#26a5e4',
    primary: false,
    desc: 'Fastest way to reach me',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'itsThePrakash1',
    url: 'https://www.facebook.com/itsThePrakash1',
    color: '#1877f2',
    primary: false,
    desc: 'Old-school but alive',
  },
  {
    id: 'devto',
    label: 'Dev.to',
    handle: '@itstheprakash',
    url: 'https://dev.to/itstheprakash',
    color: '#0a0a0a',
    primary: false,
    desc: 'Long-form write-ups',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'itsThePrakash@gmail.com',
    url: 'mailto:itsThePrakash@gmail.com',
    color: '#7c5cff',
    primary: true,
    desc: 'Serious inquiries only',
  },
  {
    id: 'coffee',
    label: 'Buy Me a Coffee',
    handle: '@itsThePrakash',
    url: 'https://buymeacoffee.com/itsThePrakash',
    color: '#ffdd00',
    primary: false,
    desc: 'Fuel the next build',
  },
];

/* ── GitHub achievements — unlocked, verified against the live profile ────── */
export const ACHIEVEMENTS_UNLOCKED = [
  {
    id: 'pull-shark',
    name: 'Pull Shark',
    tier: 'Default',
    tierRank: 0,
    emoji: '🦈',
    flavor: 'Opened pull requests that have been merged.',
    unlocked: '2026-04-06',
    proof: '2nd pull request merged',
    source: 'github.com/itsThePrakash?achievement=pull-shark',
    tiers: [2, 16, 128, 1024],
    unit: 'merged PRs',
    next: 16,
    progress: 2,
  },
  {
    id: 'pair-extraordinaire',
    name: 'Pair Extraordinaire',
    tier: 'Default',
    tierRank: 0,
    emoji: '👥',
    flavor: 'Coauthored commits on merged pull requests.',
    unlocked: '2026-04-16',
    proof: 'Coauthored with @google-labs-jules on Print-Buddy/PrintsBuddy#2',
    source: 'github.com/itsThePrakash?achievement=pair-extraordinaire',
    tiers: [1, 10, 24, 48],
    unit: 'co-authored PRs',
    next: 10,
    progress: 1,
  },
  {
    id: 'quickdraw',
    name: 'Quickdraw',
    tier: 'Default',
    tierRank: 0,
    emoji: '⚡',
    flavor: 'Gitty up! Closed an issue or PR within 5 minutes of opening.',
    unlocked: '2025-08-23',
    proof: 'itsThePrakash/id-maker#1 · Closed within 5 minutes of opening',
    source: 'github.com/itsThePrakash?achievement=quickdraw',
    tiers: null,
    unit: null,
    next: null,
    progress: null,
  },
  {
    id: 'yolo',
    name: 'YOLO',
    tier: 'Default',
    tierRank: 0,
    emoji: '🚀',
    flavor: 'You want it? You merge it. Merged a PR without a review.',
    unlocked: '2025-08-23',
    proof: 'itsThePrakash/id-maker#2 · Merged without a review',
    source: 'github.com/itsThePrakash?achievement=yolo',
    tiers: null,
    unit: null,
    next: null,
    progress: null,
  },
];

/* ── Every achievement GitHub has ever shipped. The roadmap. ──────────────── */
export const ACHIEVEMENTS_CATALOG = [
  {
    id: 'pull-shark',
    name: 'Pull Shark',
    emoji: '🦈',
    flavor: 'Get your pull requests merged.',
    tiers: [
      { name: 'Default', need: 2 },
      { name: 'Bronze', need: 16 },
      { name: 'Silver', need: 128 },
      { name: 'Gold', need: 1024 },
    ],
  },
  {
    id: 'pair-extraordinaire',
    name: 'Pair Extraordinaire',
    emoji: '👥',
    flavor: 'Coauthor commits on a merged PR.',
    tiers: [
      { name: 'Default', need: 1 },
      { name: 'Bronze', need: 10 },
      { name: 'Silver', need: 24 },
      { name: 'Gold', need: 48 },
    ],
  },
  {
    id: 'quickdraw',
    name: 'Quickdraw',
    emoji: '⚡',
    flavor: 'Close an issue or PR within 5 minutes of opening it.',
    tiers: [{ name: 'Default', need: 1 }],
  },
  {
    id: 'yolo',
    name: 'YOLO',
    emoji: '🚀',
    flavor: 'Merge your own PR with no review.',
    tiers: [{ name: 'Default', need: 1 }],
  },
  {
    id: 'starstruck',
    name: 'Starstruck',
    emoji: '⭐',
    flavor: 'Create a repository that collects stars.',
    tiers: [
      { name: 'Default', need: 16 },
      { name: 'Bronze', need: 128 },
      { name: 'Silver', need: 512 },
      { name: 'Gold', need: 4096 },
    ],
  },
  {
    id: 'galaxy-brain',
    name: 'Galaxy Brain',
    emoji: '🧠',
    flavor: 'Have a Discussions answer marked accepted.',
    tiers: [
      { name: 'Default', need: 2 },
      { name: 'Bronze', need: 8 },
      { name: 'Silver', need: 16 },
      { name: 'Gold', need: 32 },
    ],
  },
  {
    id: 'public-sponsor',
    name: 'Public Sponsor',
    emoji: '💖',
    flavor: 'Sponsor an open-source contributor via GitHub Sponsors.',
    tiers: [{ name: 'Default', need: 1 }],
  },
  {
    id: 'open-sourcerer',
    name: 'Open Sourcerer',
    emoji: '🧙',
    flavor: 'Get PRs merged into public repos you do not own.',
    tiers: [
      { name: 'Default', need: 1 },
      { name: 'Bronze', need: 16 },
      { name: 'Silver', need: 128 },
    ],
  },
  {
    id: 'heart-on-your-sleeve',
    name: 'Heart On Your Sleeve',
    emoji: '❤️',
    flavor: 'Undocumented by GitHub — currently unobtainable.',
    tiers: [
      { name: 'Default', need: null },
      { name: 'Bronze', need: null },
      { name: 'Silver', need: null },
    ],
  },
  {
    id: 'arctic-code-vault',
    name: 'Arctic Code Vault',
    emoji: '🧊',
    flavor: 'Contributed to a repo archived in the 2020 Arctic Vault.',
    tiers: [{ name: 'Default', need: null }],
  },
  {
    id: 'mars-2020',
    name: 'Mars 2020 Contributor',
    emoji: '🔴',
    flavor: 'Contributed to the Mars 2020 Ingenuity helicopter repo.',
    tiers: [{ name: 'Default', need: null }],
  },
  {
    id: 'github-star',
    name: 'GitHub Star',
    emoji: '🌟',
    flavor: 'Nominated by GitHub as a community Star.',
    tiers: [{ name: 'Default', need: null }],
  },
];

/* ── Projects. `live` is the deployed URL, `repo` the source. ─────────────── */
export const PROJECTS = [
  {
    id: 'ekguru',
    name: 'EkGuru',
    kicker: 'Founder & CEO · Flagship',
    tagline: 'A language bridge that turns Hindi into a door, not a wall.',
    description:
      'Hindi-first learning platform built from zero: 2,754 hand-tuned static pages, 11 locale directories, 31 "learn Hindi for <your language>" bridges, spaced repetition, voice practice, offline PWA and a zero-JS-first critical path. Runs on GitHub Pages with a Go/Python generator and no framework runtime.',
    tags: ['EdTech', 'Platform', 'SEO', 'PWA', 'i18n'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Service Worker'],
    live: 'https://ekguru.shop',
    pages: 'https://ekguru.shop/',
    repo: 'https://github.com/EkGuruLearning/EkGuru',
    featured: true,
    pin: true,
    status: 'live',
    metrics: [
      { k: 'Pages', v: '2,754' },
      { k: 'Locales', v: '11' },
      { k: 'Language bridges', v: '31' },
    ],
    accent: '#7c5cff',
  },
  {
    id: 'ekguru-questions',
    name: 'EkGuru Questions',
    kicker: 'Exam engine',
    tagline: 'A computer-based test platform that survives a full campus at once.',
    description:
      'All-subject CBT and results engine with a Supabase backend, server-rendered results, per-subject paper sets, theme support and a CI-gated content pipeline. Built to take an entire cohort sitting an exam simultaneously without breaking a sweat.',
    tags: ['EdTech', 'Realtime', 'Supabase', 'Node'],
    stack: ['Node.js', 'Supabase', 'PostgreSQL', 'CI/CD'],
    live: 'https://ekguru-questions.vercel.app',
    pages: 'https://ekgurulearning.github.io/Questions-/',
    repo: 'https://github.com/EkGuruLearning/Questions-',
    featured: true,
    pin: true,
    status: 'live',
    metrics: [
      { k: 'Mode', v: 'CBT' },
      { k: 'Backend', v: 'Supabase' },
      { k: 'Deploy', v: 'Vercel' },
    ],
    accent: '#00e5ff',
  },
  {
    id: 'printsbuddy',
    name: 'Print$Buddy',
    kicker: 'Founder · Campus venture',
    tagline: 'Born at 1 a.m. in a boys hostel — print delivered to your door.',
    description:
      'A real business idea turned product at MNIT Jaipur. Late-night hostel print delivery: upload, pay, and get the pages at your room. Order tracking, an admin console, a wall-of-buddy leaderboard and two built-in study-break games. Solved a problem I personally had, which is the only reason it worked.',
    tags: ['Startup', 'Full-Stack', 'Payments', 'Logistics'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    live: 'https://printsbuddy.vercel.app',
    pages: 'https://print-buddy.github.io/PrintsBuddy/',
    repo: 'https://github.com/Print-Buddy/PrintsBuddy',
    featured: true,
    pin: true,
    status: 'live',
    metrics: [
      { k: 'Campus', v: 'MNIT' },
      { k: 'Delivery', v: 'Hostel door' },
      { k: 'Stack', v: 'JS' },
    ],
    accent: '#ff4d8d',
  },
  {
    id: 'saransh',
    name: 'Saransh',
    kicker: 'AI summarizer',
    tagline: 'Long documents in, clean summaries out.',
    description:
      'A Gemini-powered summarization app. Paste a document, get a structured digest — key points, tone and reading time. Built on Google AI Studio and shipped as a static front end on Vercel.',
    tags: ['AI', 'NLP', 'TypeScript'],
    stack: ['TypeScript', 'Gemini API', 'Vercel'],
    live: 'https://saranshne.vercel.app',
    repo: 'https://github.com/itsThePrakash/saransh',
    featured: true,
    status: 'live',
    metrics: [
      { k: 'Model', v: 'Gemini' },
      { k: 'Stack', v: 'TS' },
      { k: 'Deploy', v: 'Vercel' },
    ],
    accent: '#22e07a',
  },
  {
    id: 'tanik',
    name: 'TANIK News India',
    kicker: 'AI newsroom',
    tagline: 'India-focused news, curated and summarised by AI.',
    description:
      'An AI-curated news reader for India: aggregated headlines rewritten into short, scannable briefs with category filtering and a fast static shell.',
    tags: ['AI', 'News', 'TypeScript'],
    stack: ['TypeScript', 'Gemini API', 'Vercel'],
    live: 'https://tanik-news-india.vercel.app',
    repo: 'https://github.com/itsThePrakash/TANIK-News-India-',
    featured: true,
    status: 'live',
    metrics: [
      { k: 'Scope', v: 'India' },
      { k: 'Stack', v: 'TS' },
      { k: 'Deploy', v: 'Vercel' },
    ],
    accent: '#ffb020',
  },
  {
    id: 'pdf-forensics',
    name: 'PDF Forensics',
    kicker: 'Major project',
    tagline: 'Read the metadata nobody thinks to check.',
    description:
      'A forensic analysis toolchain for PDF documents — metadata extraction, anomaly detection, structure inspection and reporting. My major project, with a Python analysis core and a TypeScript reporting front end.',
    tags: ['Security', 'Python', 'Tooling'],
    stack: ['Python', 'TypeScript', 'ReportLab'],
    live: null,
    pages: 'https://itstheprakash.github.io/PDF-Forensics-/',
    repo: 'https://github.com/itsThePrakash/PDF-Forensics-',
    featured: true,
    status: 'source',
    metrics: [
      { k: 'Type', v: 'Major' },
      { k: 'Core', v: 'Python' },
      { k: 'Report', v: 'Generated' },
    ],
    accent: '#8b5cf6',
  },
  {
    id: 'resume-parsing',
    name: 'Resume Parsing System',
    kicker: 'ML pipeline',
    tagline: 'Unstructured CVs in, structured records out.',
    description:
      'An ML pipeline that parses resumes into normalized fields — skills, education, experience — with scoring and dedupe. Python core, regex + model hybrid extraction.',
    tags: ['ML', 'Python', 'NLP'],
    stack: ['Python', 'scikit-learn', 'spaCy'],
    live: null,
    repo: 'https://github.com/itsThePrakash/Resume-Parsing-System',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Type', v: 'ML' },
      { k: 'Core', v: 'Python' },
      { k: 'Output', v: 'JSON' },
    ],
    accent: '#00e5ff',
  },
  {
    id: 'id-maker',
    name: 'ID Maker',
    kicker: 'Utility',
    tagline: 'Generate printable ID cards in the browser.',
    description:
      'A zero-dependency browser ID card generator — live preview, custom fields, print-ready output. Also the repo where I picked up my first Quickdraw and YOLO badges.',
    tags: ['Utility', 'Zero-dep'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    pages: 'https://itstheprakash.github.io/id-maker/',
    repo: 'https://github.com/itsThePrakash/id-maker',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Deps', v: '0' },
      { k: 'Badges', v: '⚡🚀' },
      { k: 'Runs', v: 'Browser' },
    ],
    accent: '#22e07a',
  },
  {
    id: 'classx',
    name: 'ClassX PDF Download',
    kicker: 'Tooling',
    tagline: 'Restricted course PDFs, unlocked for offline study.',
    description:
      'A tool that retrieves view-restricted course PDFs so they can actually be studied offline. Built after watching classmates screenshot slides at midnight.',
    tags: ['Tooling', 'Automation'],
    stack: ['JavaScript', 'Node.js'],
    live: null,
    repo: 'https://github.com/itsThePrakash/ClassX-Pdf-download',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Use', v: 'Offline' },
      { k: 'Stack', v: 'JS' },
      { k: 'Type', v: 'CLI' },
    ],
    accent: '#ffb020',
  },
  {
    id: 'view-only-pdf',
    name: 'View-Only PDF Download',
    kicker: 'Tooling',
    tagline: 'The follow-up nobody asked for and everybody used.',
    description:
      'A companion tool for pulling down view-only PDFs from locked document viewers. Pure JavaScript, no server.',
    tags: ['Tooling', 'JavaScript'],
    stack: ['JavaScript'],
    live: null,
    repo: 'https://github.com/itsThePrakash/how-to-download-View-only-pdf',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Stack', v: 'JS' },
      { k: 'Server', v: 'None' },
      { k: 'Type', v: 'Snippet' },
    ],
    accent: '#ff4d8d',
  },
  {
    id: 'cpp',
    name: 'C++ · DSA Vault',
    kicker: 'Fundamentals',
    tagline: 'Every algorithm I ever implemented, kept honest.',
    description:
      'A running vault of data-structures and algorithms implementations in modern C++ — the foundation everything else is built on.',
    tags: ['DSA', 'C++', 'Fundamentals'],
    stack: ['C++', 'STL'],
    live: null,
    repo: 'https://github.com/itsThePrakash/C-PLUS-PLUS',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Language', v: 'C++' },
      { k: 'Focus', v: 'DSA' },
      { k: 'Since', v: '2023' },
    ],
    accent: '#0a66c2',
  },
  {
    id: 'astro-supabase',
    name: 'Astro × Supabase Starter',
    kicker: 'Open template',
    tagline: 'Ship a full-stack Astro app with a database in one click.',
    description:
      'An open-source starter wiring Astro to Supabase with typed queries, auth scaffolding and a one-click deploy. MIT licensed.',
    tags: ['Open Source', 'Astro', 'Template'],
    stack: ['Astro', 'Supabase', 'TypeScript'],
    live: 'https://astro-supabase-starter.netlify.app/',
    repo: 'https://github.com/itsThePrakash/astro-supabase-starter',
    featured: false,
    status: 'live',
    metrics: [
      { k: 'License', v: 'MIT' },
      { k: 'Stack', v: 'Astro' },
      { k: 'DB', v: 'Supabase' },
    ],
    accent: '#ff5d01',
  },
];

/* ── Organisations. Public repos only; `pages` is a verified GitHub Pages URL. ─ */
export const ORGS = [
  {
    id: 'ekguru',
    handle: 'EkGuruLearning',
    display: 'EkGuru',
    tagline: 'One Student. One Goal. One Guru.',
    role: 'Founder & CEO',
    body: 'The org behind EkGuru — a Hindi-first learning platform and the CBT exam engine that runs alongside it. Both projects ship from here.',
    repos: [
      {
        name: 'EkGuru',
        desc: 'Hindi-first language bridge — 2,754 static pages, 11 locales, 31 language bridges.',
        url: 'https://github.com/EkGuruLearning/EkGuru',
        live: 'https://ekguru.shop',
        pages: 'https://ekguru.shop/',
      },
      {
        name: 'Questions-',
        desc: 'Computer-based test and results engine. Supabase backend, Vercel deploy.',
        url: 'https://github.com/EkGuruLearning/Questions-',
        live: 'https://ekguru-questions.vercel.app',
        pages: 'https://ekgurulearning.github.io/Questions-/',
      },
    ],
    live: 'https://ekguru.shop',
    accent: '#7c5cff',
  },
  {
    id: 'printsbuddy',
    handle: 'Print-Buddy',
    display: 'Print$Buddy',
    tagline: 'Print delivered to your hostel door.',
    role: 'Founder',
    body: 'The campus print-delivery venture I started at MNIT Jaipur — ordering, payments, an admin console and late-night delivery across campus.',
    repos: [
      {
        name: 'PrintsBuddy',
        desc: 'Hostel print delivery: order tracking, admin console, leaderboard and study-break games.',
        url: 'https://github.com/Print-Buddy/PrintsBuddy',
        live: 'https://printsbuddy.vercel.app',
        pages: 'https://print-buddy.github.io/PrintsBuddy/',
      },
    ],
    live: 'https://printsbuddy.vercel.app',
    accent: '#ff4d8d',
  },
];

/* ── Timeline ─────────────────────────────────────────────────────────────── */
export const TIMELINE = [
  {
    period: '2026 — now',
    title: 'Founder & CEO · EkGuru',
    org: 'EkGuruLearning',
    kind: 'work',
    body: 'Building a Hindi-first language bridge. Own product, architecture, SEO, i18n and the whole static pipeline — 2,600+ pages, zero framework runtime, sub-second first paint on a phone.',
    links: [
      { label: 'ekguru.shop', url: 'https://ekguru.shop' },
      { label: 'GitHub', url: 'https://github.com/EkGuruLearning/EkGuru' },
    ],
  },
  {
    period: '2025',
    title: 'Founder · Print$Buddy',
    org: 'MNIT Jaipur',
    kind: 'work',
    body: 'Took a 1 a.m. hostel print problem and shipped a delivery product for it — ordering, payments, an admin console and door delivery across campus.',
    links: [
      { label: 'printsbuddy.vercel.app', url: 'https://printsbuddy.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/Print-Buddy/PrintsBuddy' },
    ],
  },
  {
    period: '2022 — 2026',
    title: 'B.Tech · Computer Science & Engineering (CSE)',
    org: 'MNIT Jaipur',
    kind: 'education',
    body: 'Malaviya National Institute of Technology, Jaipur. Coursework in algorithms, systems, machine learning and databases, plus a lot of building outside the syllabus.',
    links: [{ label: 'mnit.ac.in', url: 'https://mnit.ac.in' }],
  },
  {
    period: '2022',
    title: 'Class XII · Senior Secondary',
    org: 'Completed 2022',
    kind: 'education',
    body: 'Finished senior secondary school in 2022 and joined MNIT Jaipur for B.Tech in Computer Science & Engineering.',
    links: [],
  },
  {
    period: '2022',
    title: 'Class X · Secondary',
    org: 'Completed 2022',
    kind: 'education',
    body: 'Completed secondary school in 2022.',
    links: [],
  },
  {
    period: '2023 — now',
    title: 'Open source & community',
    org: 'GitHub · @itsThePrakash',
    kind: 'oss',
    body: 'Public repos, merged PRs, co-authored work with AI agents, and four GitHub achievements unlocked so far. Still grinding toward Starstruck.',
    links: [{ label: 'GitHub profile', url: 'https://github.com/itsThePrakash' }],
  },
];

/* ── Stack ────────────────────────────────────────────────────────────────── */
export const STACK = [
  {
    group: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    group: 'Front end',
    items: ['HTML', 'CSS', 'React', 'Astro', 'Tailwind', 'Web Components'],
  },
  {
    group: 'Back end',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB', 'REST'],
  },
  {
    group: 'AI / ML',
    items: ['Gemini API', 'scikit-learn', 'spaCy', 'NumPy', 'Pandas'],
  },
  {
    group: 'Infra & tools',
    items: ['Vercel', 'GitHub Actions', 'Git', 'Firebase', 'Postman', 'Linux'],
  },
];

/* ── Live GitHub numbers — baked at build time, refreshed at runtime ─────── */
export const GITHUB_FALLBACK = {
  login: 'itsThePrakash',
  name: 'PRAKASH',
  bio: 'MNIT JAIPUR',
  company: 'MNIT',
  location: 'JAIPUR',
  followers: 0,
  following: 15,
  publicRepos: 15,
  publicGists: 0,
  totalStars: 15,
  achievements: 4,
  proMember: true,
  createdAt: '2023-09-05',
  topLanguages: [
    { name: 'JavaScript', pct: 25 },
    { name: 'Astro', pct: 17 },
    { name: 'HTML', pct: 17 },
    { name: 'Python', pct: 17 },
    { name: 'TypeScript', pct: 17 },
    { name: 'C++', pct: 8 },
  ],
  fetchedAt: null,
};

/* ── Static, build-time snapshot so the page is correct with zero network ── */
export const GITHUB_SNAPSHOT = {
  login: 'itsThePrakash',
  name: 'PRAKASH',
  publicRepos: 15,
  followers: 0,
  following: 15,
  totalStars: 15,
  achievements: 4,
  proMember: true,
  fetchedAt: '2026-10-17T00:00:00Z',
  topLanguages: [
    { name: 'JavaScript', pct: 25 },
    { name: 'Astro', pct: 17 },
    { name: 'HTML', pct: 17 },
    { name: 'Python', pct: 17 },
    { name: 'TypeScript', pct: 17 },
    { name: 'C++', pct: 8 },
  ],
};

/* ── Everything the command palette can find ─────────────────────────────── */
export function buildIndex() {
  const out = [];
  for (const s of SOCIALS) {
    out.push({
      title: s.label,
      subtitle: s.handle,
      url: s.url,
      kind: 'Social',
      keywords: s.desc,
    });
  }
  for (const p of PROJECTS) {
    out.push({
      title: p.name,
      subtitle: p.tagline,
      url: p.live || p.repo,
      repo: p.repo,
      kind: 'Project',
      keywords: [...p.tags, ...p.stack].join(' '),
    });
  }
  for (const o of ORGS) {
    out.push({
      title: o.display,
      subtitle: `${o.role} · ${o.handle}`,
      url: o.live || `https://github.com/${o.handle}`,
      kind: 'Org',
      keywords: o.tagline + ' ' + o.repos.map((r) => r.name).join(' '),
    });
  }
  for (const a of ACHIEVEMENTS_UNLOCKED) {
    out.push({
      title: `Achievement · ${a.name}`,
      subtitle: `Unlocked ${a.unlocked}`,
      url: '#achievements',
      kind: 'Achievement',
      keywords: a.flavor,
    });
  }
  out.push({ title: 'Résumé', subtitle: 'Full CV, print-ready', url: '/resume', kind: 'Page', keywords: 'cv resume hire' });
  out.push({ title: 'Email me', subtitle: SITE.email, url: `mailto:${SITE.email}`, kind: 'Contact', keywords: 'hire contact work' });
  out.push({ title: 'GitHub profile', subtitle: '@itsThePrakash', url: SITE.github, kind: 'Profile', keywords: 'code repos stars' });
  return out;
}

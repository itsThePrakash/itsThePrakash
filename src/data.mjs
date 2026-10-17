/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PRAKASH · SIGNAL CORE — single source of truth
 *  Every page, badge, stat and link on the site is generated from this file.
 *  Edit here → `npm run build` → deploy. Nothing else needs touching.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: 'Prakash',
  fullName: 'Prakash Gothwal',
  fullNameHi: 'प्रकाश गोथवाल',
  displayName: 'PRAKASH',
  handle: 'itsThePrakash',
  title: 'Founder & CEO @ EkGuru · Full-Stack & AI Engineer',
  roles: [
    'Founder & CEO @ EkGuru',
    'Full-Stack Engineer',
    'AI/ML Builder',
    'MNIT Jaipur · CSE',
    'Open Source Contributor',
  ],
  tagline: 'I build small things that people use.',
  about:
    "I'm Prakash Gothwal, usually just Prakash. I'm from Kolwa, a village in Dausa district, Rajasthan, and I studied Computer Science & Engineering (CSE) at MNIT Jaipur from 2022 to 2026. I started EkGuru, a Hindi-first learning site, and Print$Buddy, a print delivery service for my hostel. I like small pages, plain HTML and fixing things myself.",
  /* Name variants people actually search for. Used in metadata and structured data. */
  aliases: [
    'Prakash Gothwal',
    'Prakash',
    'Prakash MNIT',
    'Prakash MNIT Jaipur',
    'Prakash CSE',
    'Prakash Kolwa',
    'Prakash Dausa',
    'Prakash Gothwal MNIT',
    'Prakash Gothwal Dausa',
    'itsThePrakash',
    'प्रकाश गोथवाल',
  ],
  keywords: [
    'Prakash Gothwal',
    'Prakash MNIT',
    'Prakash CSE',
    'Prakash Kolwa',
    'Prakash Dausa',
    'MNIT Jaipur CSE',
    'itsThePrakash',
    'EkGuru',
  ],

  hometown: 'Kolwa, Dausa, Rajasthan',
  location: 'Jaipur, Rajasthan, India',
  timezone: 'Asia/Kolkata',
  email: 'itsThePrakash@gmail.com',
  emailAlt: 'itsprakashwork@gmail.com',
  photo: null, // e.g. '/me.jpg' — drop the file in public/ to show it on the résumé
  phone: null,
  available: true,
  hireable: true,
  yearsCoding: 4,
  resumeUrl: '/resume',
  github: 'https://github.com/itsThePrakash',
};

/* ─────────────────────────────────────────────────────────────────────────────
 *  SPONSORSHIP — one block controls every sponsor surface on the site.
 *  Turn a rail on by filling its field. Nothing else needs editing.
 *  · github   → works once github.com/sponsors/itsThePrakash is live
 *  · upi      → set the VPA (e.g. 'prakash@okhdfcbank') and the UPI card appears
 *  · razorpay → set a payment-page URL and that card appears
 *  · buymeacoffee → set the page URL and a coffee card appears
 *  · wall     → names of people who actually sponsored; empty = honest empty state
 * ───────────────────────────────────────────────────────────────────────────── */
export const SPONSOR = {
  github: 'https://github.com/sponsors/itsThePrakash',
  githubLive: false,
  upi: null,
  razorpay: null,
  buymeacoffee: null, // e.g. 'https://buymeacoffee.com/itsThePrakash'
  wall: [],
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


/* ── Every public repository, once ──────────────────────────────────────────
 * Verified against the GitHub API on 2026-10-17:
 *   live  → the deployed app
 *   pages → a real /repos/{owner}/{repo}/pages build (never guessed)
 *   repo  → source
 * /repos, /orgs/* and the home org cards all render from this list, so a repo
 * can never appear in one place with a link missing in another.
 * ──────────────────────────────────────────────────────────────────────────── */
export const REPO_LINKS = [
  { repo: 'EkGuru', owner: 'EkGuruLearning', what: 'Hindi-first learning site, 2,754 static pages', live: 'https://ekguru.shop', pages: 'https://ekguru.shop/', project: 'ekguru' },
  { repo: 'Questions-', owner: 'EkGuruLearning', what: 'Exam engine — CBT, results, Supabase backend', live: 'https://ekguru-questions.vercel.app', pages: 'https://ekgurulearning.github.io/Questions-/', project: 'ekguru-questions' },
  { repo: 'PrintsBuddy', owner: 'Print-Buddy', what: 'Hostel print delivery — closed, site archived', live: 'https://printsbuddy.vercel.app', pages: 'https://print-buddy.github.io/PrintsBuddy/', project: 'printsbuddy' },
  { repo: 'PDF-Forensics-', owner: 'itsThePrakash', what: 'PDF metadata forensics and anomaly reports', live: null, pages: 'https://itstheprakash.github.io/PDF-Forensics-/', project: 'pdf-forensics' },
  { repo: 'id-maker', owner: 'itsThePrakash', what: 'ID-card generator that runs in the browser', live: null, pages: 'https://itstheprakash.github.io/id-maker/', project: 'id-maker' },
  { repo: 'how-to-download-View-only-pdf', owner: 'itsThePrakash', what: 'Browser snippet for view-only PDFs', live: null, pages: 'https://itstheprakash.github.io/how-to-download-View-only-pdf/', project: 'view-only-pdf' },
  { repo: 'saransh', owner: 'itsThePrakash', what: 'Document summariser — key points, tone, reading time', live: 'https://saranshne.vercel.app', pages: null, project: 'saransh' },
  { repo: 'TANIK-News-India-', owner: 'itsThePrakash', what: 'Indian news, rewritten into short briefs', live: 'https://tanik-news-india.vercel.app', pages: null, project: 'tanik' },
  { repo: 'Resume-Parsing-System', owner: 'itsThePrakash', what: 'CVs in, normalised and deduplicated records out', live: null, pages: null, project: 'resume-parsing' },
  { repo: 'ClassX-Pdf-download', owner: 'itsThePrakash', what: 'Pulls view-restricted course PDFs for offline study', live: null, pages: null, project: 'classx' },
  { repo: 'C-PLUS-PLUS', owner: 'itsThePrakash', what: 'Every data structure and algorithm I have written', live: null, pages: null, project: 'cpp' },
  { repo: 'astro-supabase-starter', owner: 'itsThePrakash', what: 'Astro + Supabase starter, MIT licensed', live: 'https://astro-supabase-starter.netlify.app/', pages: null, project: 'astro-supabase' },
  { repo: 'astro-platform-starter', owner: 'itsThePrakash', what: 'Static-first Astro starter with content collections', live: null, pages: null, project: null },
  { repo: 'triyal', owner: 'itsThePrakash', what: 'Early Print$Buddy build', live: null, pages: 'https://itstheprakash.github.io/triyal/', project: null },
  { repo: 'awesome-piracy-', owner: 'itsThePrakash', what: 'A fork kept for reference', live: null, pages: 'https://itstheprakash.github.io/awesome-piracy-/', project: null },
];

export const repoUrl = (r) => `https://github.com/${r.owner}/${r.repo}`;
export const repoLinksFor = (owner) => REPO_LINKS.filter((r) => r.owner === owner);

/* ── Public repositories ────────────────────────────────────────────────────
 * Pulled from the GitHub API on 2026-10-17. Used by /repos so each repository
 * name has a real page to rank for. Re-run the query in docs/SETUP.md to update.
 * ──────────────────────────────────────────────────────────────────────────── */
export const PUBLIC_REPOS = [
  {
    "name": "itsThePrakash",
    "desc": "Config files for my GitHub profile.",
    "lang": "JavaScript",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/itsThePrakash",
    "pushed": "2026-10-17",
    "fork": false
  },
  {
    "name": "how-to-download-View-only-pdf",
    "desc": null,
    "lang": "JavaScript",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/how-to-download-View-only-pdf",
    "pushed": "2026-10-17",
    "fork": false
  },
  {
    "name": "PDF-Forensics",
    "desc": "Minor/Major Project",
    "lang": null,
    "stars": 1,
    "url": "https://github.com/itsThePrakash/PDF-Forensics",
    "pushed": "2026-10-17",
    "fork": true
  },
  {
    "name": "ClassX-Pdf-download",
    "desc": "ClassX resticted pdf download avalible ",
    "lang": null,
    "stars": 1,
    "url": "https://github.com/itsThePrakash/ClassX-Pdf-download",
    "pushed": "2026-06-17",
    "fork": false
  },
  {
    "name": "PDF-Forensics-",
    "desc": "Minor/Major Project ",
    "lang": "Python",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/PDF-Forensics-",
    "pushed": "2026-04-26",
    "fork": false
  },
  {
    "name": "TANIK-News-India-",
    "desc": null,
    "lang": "TypeScript",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/TANIK-News-India-",
    "pushed": "2025-12-05",
    "fork": false
  },
  {
    "name": "saransh",
    "desc": null,
    "lang": "TypeScript",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/saransh",
    "pushed": "2025-12-04",
    "fork": false
  },
  {
    "name": "Resume-Parsing-System",
    "desc": null,
    "lang": "Python",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/Resume-Parsing-System",
    "pushed": "2025-12-03",
    "fork": false
  },
  {
    "name": "id-maker",
    "desc": null,
    "lang": "HTML",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/id-maker",
    "pushed": "2025-08-23",
    "fork": false
  },
  {
    "name": "triyal",
    "desc": null,
    "lang": "HTML",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/triyal",
    "pushed": "2025-07-30",
    "fork": false
  },
  {
    "name": "triyal2printsbuddy",
    "desc": null,
    "lang": "JavaScript",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/triyal2printsbuddy",
    "pushed": "2025-07-30",
    "fork": false
  },
  {
    "name": "astro-platform-starter",
    "desc": null,
    "lang": "Astro",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/astro-platform-starter",
    "pushed": "2025-05-10",
    "fork": false
  },
  {
    "name": "astro-supabase-starter",
    "desc": null,
    "lang": "Astro",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/astro-supabase-starter",
    "pushed": "2025-05-10",
    "fork": false
  },
  {
    "name": "C-PLUS-PLUS",
    "desc": "all code",
    "lang": "C++",
    "stars": 1,
    "url": "https://github.com/itsThePrakash/C-PLUS-PLUS",
    "pushed": "2023-10-08",
    "fork": false
  },
  {
    "name": "awesome-piracy-",
    "desc": "A curated list of awesome warez and piracy links.how   ",
    "lang": null,
    "stars": 1,
    "url": "https://github.com/itsThePrakash/awesome-piracy-",
    "pushed": "2023-06-18",
    "fork": true
  }
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
    id: 'bhasha-bridge',
    name: 'Bhasha Bridge',
    kicker: 'Language app',
    tagline: 'Language learning, built as a web app.',
    description:
      'A Next.js web app for language learning with Google sign-in, Postgres behind the lessons and email for account flows. My newest build, and the one I am spending the most time on right now.',
    tags: ['Next.js', 'EdTech', 'Postgres'],
    stack: ['Next.js', 'Postgres', 'Google OAuth', 'Vercel'],
    live: 'https://bhashabridge-iota.vercel.app',
    repo: null,
    featured: true,
    status: 'live',
    pin: true,
    metrics: [
      { k: 'Stack', v: 'Next.js' },
      { k: 'Auth', v: 'Google' },
      { k: 'Data', v: 'Postgres' },
    ],
    accent: '#ff4d8d',
  },
  {
    id: 'ekguru',
    name: 'EkGuru',
    kicker: 'Founder & CEO · Flagship',
    tagline: 'Learn Hindi without going through English first.',
    description:
      'A Hindi learning site I started in college. Someone who speaks Arabic, Japanese or Tamil can begin with Hindi directly, without English as a middle step. It is plain HTML and CSS generated by a Python script: 2,754 pages, 11 locale directories and 31 language-bridge sections. No React, no framework, nothing running on a server.',
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
    tagline: 'A test engine that can hold a whole batch at once.',
    description:
      'The exam side of EkGuru. A teacher picks a subject and a paper set, students write a timed CBT paper in the browser, and results come back server-rendered from Supabase. Per-subject papers, theme support and a CI check on new questions.',
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
    tagline: 'Printed pages delivered to your hostel room at 1 a.m.',
    description:
      'Print$Buddy delivered printouts to hostel rooms at MNIT Jaipur. Upload a PDF, pay, and someone knocked on your door with the pages. It had order tracking, an admin console, a leaderboard and two games for study breaks. It ran through college and closed after graduation. The code and site are still online.',
    tags: ['Startup', 'Full-Stack', 'Payments', 'Logistics'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    live: 'https://printsbuddy.vercel.app',
    pages: 'https://print-buddy.github.io/PrintsBuddy/',
    repo: 'https://github.com/Print-Buddy/PrintsBuddy',
    featured: true,
    pin: true,
    status: 'closed',
    metrics: [
      { k: 'Campus', v: 'MNIT' },
      { k: 'Delivery', v: 'Hostel door' },
      { k: 'Status', v: 'Closed' },
    ],
    accent: '#ff4d8d',
  },
  {
    id: 'saransh',
    name: 'Saransh',
    kicker: 'AI summarizer',
    tagline: 'Long documents in, a short digest out.',
    description:
      'Paste a long document and get back the key points, the tone and an estimated reading time. The model is Gemini; the front end is TypeScript on Vercel and stays static.',
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
    tagline: 'Indian news, rewritten short.',
    description:
      'A news reader that only covers India. Headlines are pulled in, cut down to short briefs and grouped by category. The shell is static, so the page opens fast on a phone.',
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
      'My major project. A Python tool that opens a PDF, reads its metadata and internal structure, flags anything that looks off and writes a report. A TypeScript front end puts the report together.',
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
    tagline: 'Messy CVs in, clean records out.',
    description:
      'A Python pipeline that reads resumes and pulls out skills, education and experience into one shape. It scores the matches and removes duplicates. Extraction is part rules, part model.',
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
    tagline: 'Printable ID cards, made in the browser.',
    description:
      'Type the details, watch the card fill in, print it. No libraries, no server. This is also the repo where I picked up my first Quickdraw and YOLO badges.',
    tags: ['Utility', 'Zero-dep'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    pages: 'https://itstheprakash.github.io/id-maker/',
    repo: 'https://github.com/itsThePrakash/id-maker',
    featured: false,
    status: 'source',
    metrics: [
      { k: 'Deps', v: '0' },
      { k: 'Badges', v: '2' },
      { k: 'Runs', v: 'Browser' },
    ],
    accent: '#22e07a',
  },
  {
    id: 'classx',
    name: 'ClassX PDF Download',
    kicker: 'Tooling',
    tagline: 'Course PDFs saved for offline reading.',
    description:
      'A small tool I wrote for course PDFs that only opened inside a viewer. It fetches the file so the pages can be read later, without a connection.',
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
    tagline: 'The same trick for other locked viewers.',
    description:
      'A companion tool for view-only PDFs in other document viewers. It runs as a browser snippet, so there is nothing to install and no server involved.',
    tags: ['Tooling', 'JavaScript'],
    stack: ['JavaScript'],
    live: null,
    pages: 'https://itstheprakash.github.io/how-to-download-View-only-pdf/',
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
    tagline: 'Data structures and algorithms, written by hand.',
    description:
      'A folder of C++ implementations I wrote while learning data structures and algorithms. Not a library, just practice that stayed useful.',
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
    tagline: 'An Astro plus Supabase starter.',
    description:
      'A small starter that connects Astro to Supabase with typed queries and auth already wired. MIT licensed, and it runs on Netlify.',
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
    body: 'The organisation behind EkGuru and its exam engine. Both projects live here.',
    repos: [
      {
        name: 'EkGuru',
        desc: 'Hindi-first language bridge — 2,754 static pages, 11 locales, 31 language bridges.',
        url: 'https://github.com/EkGuruLearning/EkGuru',
        live: 'https://ekguru.shop',
        pages: 'https://ekguru.shop/',
      },
      {
        name: 'EkGuru Questions',
        desc: 'Questions- · CBT and results engine. Supabase backend, Vercel deploy.',
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
    body: 'The print delivery venture I started at MNIT Jaipur. Closed now, code still up.',
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
    body: 'I started EkGuru while at MNIT. I write the pages, the generator, the translations and the SEO myself. It is static HTML on GitHub Pages, so it costs almost nothing to run.',
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
    body: 'A hostel problem I had at 1 a.m. turned into an order form, a payment step and a delivery run across campus. It closed after graduation; the site stays up.',
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
    body: 'Malaviya National Institute of Technology, Jaipur. Algorithms, systems, databases and machine learning, plus a lot of code outside the syllabus.',
    links: [{ label: 'mnit.ac.in', url: 'https://mnit.ac.in' }],
  },
  {
    period: '2022',
    title: 'Class XII · Senior Secondary',
    org: 'Completed 2022',
    kind: 'education',
    body: 'Finished senior secondary in 2022 and joined MNIT Jaipur for B.Tech CSE.',
    links: [],
  },
  {
    period: '2020',
    title: 'Class X · Secondary',
    org: 'Completed 2020',
    kind: 'education',
    body: 'Finished secondary school in 2020.',
    links: [],
  },
  {
    period: '2023 — now',
    title: 'Open source and side projects',
    org: 'GitHub · @itsThePrakash',
    kind: 'oss',
    body: 'Public repos, a few merged pull requests and four GitHub achievements. I still push most weeks.',
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
      url: `/projects/${p.id}`,
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
  out.push({
    title: 'About Prakash Gothwal',
    subtitle: 'Kolwa, Dausa · MNIT Jaipur CSE',
    url: '/about',
    kind: 'Page',
    keywords: SITE.aliases.join(' '),
  });
  out.push({
    title: 'Sponsor the work',
    subtitle: 'GitHub Sponsors · any amount',
    url: '/sponsor',
    kind: 'Page',
    keywords: 'support sponsor donate coffee fund',
  });
  out.push({ title: 'All projects', subtitle: 'Every project, one page each', url: '/projects', kind: 'Page', keywords: 'work portfolio apps' });
  out.push({ title: 'Repositories', subtitle: 'All 15 public repos by name', url: '/repos', kind: 'Page', keywords: 'github code source repos' });
  out.push({ title: 'Email me', subtitle: SITE.email, url: `mailto:${SITE.email}`, kind: 'Contact', keywords: 'hire contact work' });
  out.push({ title: 'GitHub profile', subtitle: '@itsThePrakash', url: SITE.github, kind: 'Profile', keywords: 'code repos stars' });
  return out;
}

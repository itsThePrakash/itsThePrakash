/**
 * SIGNAL CORE — stylesheet.
 * Written by hand, ~14 KB unminified, zero dependencies, zero font requests.
 * Everything animates on transform/opacity only, so it stays on the compositor.
 */

export const CSS = `:root{
  --bg:#05060b; --bg2:#080a14; --bg3:#0b0e1c;
  --surface:rgba(255,255,255,.028); --surface2:rgba(255,255,255,.055);
  --line:rgba(255,255,255,.075); --line2:rgba(255,255,255,.14);
  --fg:#e9edf9; --fg2:#a8b2cf; --fg3:#6b7594;
  --v:#7c5cff; --c:#00e5ff; --p:#ff4d8d; --g:#22e07a; --y:#ffb020;
  --glow:0 0 0 1px rgba(124,92,255,.35), 0 18px 50px -18px rgba(124,92,255,.5);
  --shadow:0 24px 70px -30px rgba(0,0,0,.9);
  --r:18px; --r2:26px;
  --mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,"Helvetica Neue",Arial,sans-serif;
  --ease:cubic-bezier(.22,1,.36,1);
  --max:1180px;
}
[data-theme="light"]{
  --bg:#f4f6fc; --bg2:#eef1fa; --bg3:#e7ecf8;
  --surface:rgba(10,14,30,.028); --surface2:rgba(10,14,30,.06);
  --line:rgba(10,14,30,.09); --line2:rgba(10,14,30,.16);
  --fg:#0c1024; --fg2:#3d4666; --fg3:#6b7594;
  --glow:0 0 0 1px rgba(124,92,255,.28), 0 18px 50px -22px rgba(124,92,255,.35);
  --shadow:0 24px 60px -32px rgba(12,16,36,.35);
}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{
  margin:0;background:var(--bg);color:var(--fg);font-family:var(--sans);
  font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;overflow-x:hidden;
}
img,svg{display:block;max-width:100%}
svg.ic{width:1em;height:1em;flex:0 0 auto}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
::selection{background:rgba(124,92,255,.35);color:#fff}
:focus-visible{outline:2px solid var(--c);outline-offset:3px;border-radius:6px}

/* ── ambient background ─────────────────────────────────────────────────── */
.aurora{position:fixed;inset:0;z-index:-2;overflow:hidden;pointer-events:none}
.aurora i{position:absolute;display:block;border-radius:50%;filter:blur(90px);opacity:.5;will-change:transform}
.aurora i:nth-child(1){width:52vw;height:52vw;left:-12vw;top:-14vw;background:radial-gradient(circle,#7c5cff,transparent 68%);animation:drift1 26s var(--ease) infinite}
.aurora i:nth-child(2){width:44vw;height:44vw;right:-10vw;top:6vh;background:radial-gradient(circle,#00e5ff,transparent 68%);opacity:.32;animation:drift2 32s var(--ease) infinite}
.aurora i:nth-child(3){width:40vw;height:40vw;left:24vw;bottom:-16vw;background:radial-gradient(circle,#ff4d8d,transparent 68%);opacity:.26;animation:drift3 38s var(--ease) infinite}
[data-theme="light"] .aurora i{opacity:.22}
[data-theme="light"] .aurora i:nth-child(2){opacity:.16}
[data-theme="light"] .aurora i:nth-child(3){opacity:.13}
@keyframes drift1{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(6vw,5vh,0) scale(1.14)}}
@keyframes drift2{0%,100%{transform:translate3d(0,0,0) scale(1.08)}50%{transform:translate3d(-7vw,8vh,0) scale(.92)}}
@keyframes drift3{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(5vw,-6vh,0) scale(1.2)}}
.grid-bg{position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);
  background-size:64px 64px;
  -webkit-mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,#000 20%,transparent 78%);
  mask-image:radial-gradient(ellipse 90% 60% at 50% 0%,#000 20%,transparent 78%);
  opacity:.75}
.noise{position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.035;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")}

/* ── shell ──────────────────────────────────────────────────────────────── */
.wrap{width:100%;max-width:var(--max);margin-inline:auto;padding-inline:clamp(18px,4vw,32px)}
section{position:relative;padding-block:clamp(72px,10vw,124px)}
.eyebrow{font-family:var(--mono);font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--fg3);
  display:inline-flex;align-items:center;gap:9px;margin:0 0 14px}
.eyebrow::before{content:"";width:22px;height:1px;background:linear-gradient(90deg,var(--v),var(--c))}
h1,h2,h3,h4{line-height:1.08;letter-spacing:-.03em;margin:0;font-weight:680}
h2{font-size:clamp(30px,4.6vw,52px);margin-bottom:14px}
h3{font-size:clamp(19px,2.2vw,23px);letter-spacing:-.015em}
p{margin:0}
.lede{color:var(--fg2);font-size:clamp(15.5px,1.5vw,18px);max-width:62ch}
.grad{background:linear-gradient(100deg,var(--v),var(--c) 45%,var(--p));-webkit-background-clip:text;background-clip:text;color:transparent}
.sec-head{display:flex;flex-direction:column;gap:6px;margin-bottom:clamp(30px,4vw,52px);max-width:760px}

/* ── nav ────────────────────────────────────────────────────────────────── */
.nav{position:fixed;inset-inline:0;top:0;z-index:60;transition:background .35s,border-color .35s,backdrop-filter .35s;
  border-bottom:1px solid transparent}
.nav[data-stuck="1"]{background:color-mix(in srgb,var(--bg) 78%,transparent);backdrop-filter:blur(18px) saturate(1.5);-webkit-backdrop-filter:blur(18px) saturate(1.5);border-bottom-color:var(--line)}
.nav-in{display:flex;align-items:center;gap:14px;height:62px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;letter-spacing:-.02em;font-size:15px;flex:0 0 auto}
.brand .mark{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;flex:0 0 auto;
  background:linear-gradient(140deg,var(--v),var(--c));color:#fff;box-shadow:var(--glow)}
.brand .mark svg{width:17px;height:17px}
.brand b{font-family:var(--mono);font-size:12.5px;font-weight:600;color:var(--fg2);letter-spacing:0}
.nav-links{display:flex;gap:2px;margin-inline:auto;overflow-x:auto;scrollbar-width:none}
.nav-links::-webkit-scrollbar{display:none}
.nav-links a{font-size:13.5px;color:var(--fg2);padding:7px 12px;border-radius:9px;white-space:nowrap;transition:color .2s,background .2s}
.nav-links a:hover,.nav-links a[aria-current="true"]{color:var(--fg);background:var(--surface2)}
.nav-acts{display:flex;align-items:center;gap:8px;flex:0 0 auto}
.icbtn{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;border:1px solid var(--line);
  background:var(--surface);color:var(--fg2);transition:color .2s,border-color .2s,transform .2s}
.icbtn:hover{color:var(--fg);border-color:var(--line2);transform:translateY(-1px)}
.icbtn svg{width:16px;height:16px}
.kbd{font-family:var(--mono);font-size:10.5px;border:1px solid var(--line2);border-radius:6px;padding:2px 6px;color:var(--fg3);background:var(--surface)}
.palette-btn{display:flex;align-items:center;gap:8px;height:36px;padding:0 10px 0 11px;border-radius:10px;
  border:1px solid var(--line);background:var(--surface);color:var(--fg3);font-size:12.5px;transition:color .2s,border-color .2s}
.palette-btn:hover{color:var(--fg2);border-color:var(--line2)}
.palette-btn svg{width:15px;height:15px}
.progress{position:fixed;top:0;left:0;height:2px;z-index:70;width:0;
  background:linear-gradient(90deg,var(--v),var(--c),var(--p));box-shadow:0 0 12px rgba(124,92,255,.7)}

/* ── buttons ────────────────────────────────────────────────────────────── */
.btn{display:inline-flex;align-items:center;gap:9px;height:44px;padding:0 20px;border-radius:12px;
  font-size:14px;font-weight:600;letter-spacing:-.01em;position:relative;overflow:hidden;
  transition:transform .22s var(--ease),box-shadow .22s,border-color .22s,color .22s;will-change:transform}
.btn svg{width:16px;height:16px;flex:0 0 auto}
.btn-p{background:linear-gradient(120deg,var(--v),#5b7cff 55%,var(--c));color:#fff;box-shadow:var(--glow)}
.btn-p::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.32),transparent 70%);
  transform:translateX(-120%)}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 0 0 1px rgba(124,92,255,.5),0 26px 60px -20px rgba(124,92,255,.65)}
.btn-p:hover::after{transform:translateX(120%);transition:transform .7s var(--ease)}
.btn-g{border:1px solid var(--line2);background:var(--surface);color:var(--fg)}
.btn-g:hover{transform:translateY(-2px);border-color:var(--fg3);background:var(--surface2)}
.btn-s{height:36px;padding:0 14px;font-size:12.5px;border-radius:9px}

/* ── hero ───────────────────────────────────────────────────────────────── */
.hero{min-height:100svh;display:flex;align-items:center;padding-top:96px;padding-bottom:56px}
.hero-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:clamp(28px,5vw,64px);align-items:center;width:100%}
.status{display:inline-flex;align-items:center;gap:9px;height:30px;padding:0 13px 0 11px;border-radius:99px;
  border:1px solid var(--line2);background:var(--surface);font-family:var(--mono);font-size:11.5px;color:var(--fg2);letter-spacing:.02em}
.dot{width:7px;height:7px;border-radius:50%;background:var(--g);box-shadow:0 0 0 0 rgba(34,224,122,.55);animation:pulse 2.4s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(34,224,122,.5)}70%{box-shadow:0 0 0 9px rgba(34,224,122,0)}100%{box-shadow:0 0 0 0 rgba(34,224,122,0)}}
.hero h1{font-size:clamp(44px,8.4vw,104px);font-weight:750;margin:18px 0 0;letter-spacing:-.045em}
.hero h1 .ln{display:block}
.typed{font-family:var(--mono);font-size:clamp(13px,1.7vw,17px);color:var(--c);margin-top:16px;min-height:1.6em;
  display:flex;align-items:center;gap:2px}
.caret{display:inline-block;width:9px;height:1.05em;background:var(--c);margin-left:3px;animation:blink 1.05s steps(2) infinite;vertical-align:-2px}
@keyframes blink{50%{opacity:0}}
.hero .lede{margin-top:20px}
.hero-cta{display:flex;flex-wrap:wrap;gap:11px;margin-top:30px}
.hero-meta{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:30px;font-size:12.5px;color:var(--fg3)}
.hero-meta span{display:inline-flex;align-items:center;gap:7px}
.hero-meta svg{width:14px;height:14px;color:var(--fg3)}

/* orbit ring */
.orbit{position:relative;aspect-ratio:1;width:min(100%,400px);margin-inline:auto;display:grid;place-items:center}
.orbit .ring{position:absolute;border-radius:50%;border:1px solid var(--line);inset:0}
.orbit .ring:nth-child(1){inset:0;animation:spin 34s linear infinite}
.orbit .ring:nth-child(2){inset:13%;border-style:dashed;border-color:var(--line2);animation:spin 26s linear infinite reverse}
.orbit .ring:nth-child(3){inset:26%;animation:spin 18s linear infinite}
.orbit .ring i{position:absolute;top:-4px;left:50%;width:8px;height:8px;border-radius:50%;translate:-50% 0}
.orbit .ring:nth-child(1) i{background:var(--v);box-shadow:0 0 14px var(--v)}
.orbit .ring:nth-child(2) i{background:var(--c);box-shadow:0 0 14px var(--c);top:auto;bottom:-4px}
.orbit .ring:nth-child(3) i{background:var(--p);box-shadow:0 0 14px var(--p)}
@keyframes spin{to{transform:rotate(360deg)}}
.core{width:47%;aspect-ratio:1;border-radius:50%;position:relative;display:grid;place-items:center;
  background:conic-gradient(from 210deg,var(--v),var(--c),var(--p),var(--v));padding:2px;
  box-shadow:0 0 70px -12px rgba(124,92,255,.7);animation:breathe 7s ease-in-out infinite}
@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}
.core-in{width:100%;height:100%;border-radius:50%;background:var(--bg3);display:grid;place-items:center;
  font-family:var(--mono);font-weight:700;font-size:clamp(26px,4.4vw,42px);letter-spacing:-.04em;
  background-image:radial-gradient(circle at 30% 20%,rgba(124,92,255,.28),transparent 60%)}
.core-in span{background:linear-gradient(120deg,var(--v),var(--c));-webkit-background-clip:text;background-clip:text;color:transparent}
.orbit .chip{position:absolute;font-family:var(--mono);font-size:10.5px;padding:5px 9px;border-radius:8px;
  border:1px solid var(--line2);background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(8px);
  color:var(--fg2);white-space:nowrap;animation:float 6s ease-in-out infinite}
.orbit .chip:nth-of-type(1){top:4%;left:-6%;animation-delay:-1s}
.orbit .chip:nth-of-type(2){bottom:12%;right:-8%;animation-delay:-3s}
.orbit .chip:nth-of-type(3){bottom:-2%;left:12%;animation-delay:-5s}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}

/* ── marquee ────────────────────────────────────────────────────────────── */
.marquee{border-block:1px solid var(--line);padding-block:16px;overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.marquee-t{display:flex;gap:44px;width:max-content;animation:slide 34s linear infinite}
.marquee:hover .marquee-t{animation-play-state:paused}
@keyframes slide{to{transform:translateX(-50%)}}
.marquee-t span{font-family:var(--mono);font-size:12.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--fg3);
  display:inline-flex;align-items:center;gap:44px;white-space:nowrap}
.marquee-t span::after{content:"◆";color:var(--v);font-size:8px}

/* ── telemetry ──────────────────────────────────────────────────────────── */
.telemetry{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:1px;
  background:var(--line);border:1px solid var(--line);border-radius:var(--r2);overflow:hidden}
.tel{background:var(--bg2);padding:22px 20px;display:flex;flex-direction:column;gap:5px;position:relative;transition:background .3s}
.tel:hover{background:var(--bg3)}
.tel b{font-size:clamp(24px,3.4vw,34px);font-weight:700;letter-spacing:-.04em;font-variant-numeric:tabular-nums;
  font-family:var(--mono)}
.tel small{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--fg3);font-family:var(--mono)}
.tel .src{position:absolute;top:12px;right:12px;font-family:var(--mono);font-size:9px;color:var(--fg3);opacity:.6;letter-spacing:.08em}
.tel.live b{color:var(--c)} .tel.live small{color:var(--c);opacity:.8}

/* ── projects ───────────────────────────────────────────────────────────── */
.pj-bar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:26px}
.filters{display:flex;flex-wrap:wrap;gap:7px}
.chip{font-family:var(--mono);font-size:11.5px;padding:6px 12px;border-radius:99px;border:1px solid var(--line);
  background:var(--surface);color:var(--fg3);transition:all .2s}
.chip:hover{color:var(--fg2);border-color:var(--line2)}
.chip[aria-pressed="true"]{color:#fff;border-color:transparent;background:linear-gradient(110deg,var(--v),var(--c))}
.view-tog{display:flex;gap:3px;padding:3px;border:1px solid var(--line);border-radius:10px;background:var(--surface)}
.view-tog button{width:32px;height:28px;border-radius:7px;display:grid;place-items:center;color:var(--fg3);transition:all .2s}
.view-tog button svg{width:15px;height:15px}
.view-tog button[aria-pressed="true"]{background:var(--surface2);color:var(--fg)}

.pj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(316px,1fr));gap:16px}
.card{position:relative;border:1px solid var(--line);border-radius:var(--r2);background:var(--surface);
  padding:22px;display:flex;flex-direction:column;gap:14px;overflow:hidden;
  transition:transform .4s var(--ease),border-color .3s,box-shadow .4s;will-change:transform}
.card::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;
  background:linear-gradient(140deg,var(--ac,var(--v)),transparent 42%);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .35s}
.card:hover{transform:translateY(-5px);border-color:var(--line2);box-shadow:var(--shadow)}
.card:hover::before{opacity:.85}
.card .halo{position:absolute;width:220px;height:220px;border-radius:50%;top:-110px;right:-110px;
  background:radial-gradient(circle,var(--ac,var(--v)),transparent 62%);opacity:.13;filter:blur(26px);transition:opacity .4s}
.card:hover .halo{opacity:.3}
.card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.card h3{font-size:19px}
.card .kick{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--ac,var(--v));margin-bottom:5px}
.badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;
  text-transform:uppercase;padding:4px 8px;border-radius:6px;border:1px solid var(--line2);color:var(--fg3);flex:0 0 auto}
.badge.ok{color:var(--g);border-color:rgba(34,224,122,.35);background:rgba(34,224,122,.08)}
.badge.src{color:var(--y);border-color:rgba(255,176,32,.32);background:rgba(255,176,32,.08)}
.card .tag{font-size:13.5px;color:var(--fg2);line-height:1.6}
.metrics{display:flex;gap:18px;padding-block:12px;border-block:1px solid var(--line);margin-top:auto}
.metrics div{display:flex;flex-direction:column}
.metrics b{font-family:var(--mono);font-size:14px;letter-spacing:-.02em}
.metrics small{font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--fg3);font-family:var(--mono)}
.tags{display:flex;flex-wrap:wrap;gap:5px}
.tag{font-family:var(--mono);font-size:10.5px;padding:3px 8px;border-radius:6px;background:var(--surface2);color:var(--fg2);border:1px solid var(--line)}
.card-acts{display:flex;gap:8px}
.card-acts .btn{flex:1;justify-content:center;height:38px;font-size:12.5px}

/* constellation */
.constel{position:relative;border:1px solid var(--line);border-radius:var(--r2);background:
  radial-gradient(ellipse at 50% 50%,rgba(124,92,255,.07),transparent 68%);overflow:hidden;min-height:520px}
.constel svg{width:100%;height:100%;display:block}
.constel .node{cursor:pointer}
.constel .node circle.hit{fill:transparent}
.constel .node text{font-family:var(--mono);font-size:11px;fill:var(--fg2);pointer-events:none}
.constel .node.dim{opacity:.28}
.constel .node.on text{fill:var(--fg);font-weight:600}
.constel .node:focus-visible{outline:2px solid var(--c);outline-offset:4px}
.constel .glowc{filter:drop-shadow(0 0 8px currentColor)}
.con-panel .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--c);margin-bottom:5px}
.con-panel h3{font-size:18px;margin-bottom:5px}
.con-panel .tg{font-size:13px;color:var(--fg2);line-height:1.55}
.con-panel .lnks{display:flex;gap:7px;margin-top:12px}
.con-panel .lnks a{font-family:var(--mono);font-size:11px;padding:5px 10px;border-radius:8px;border:1px solid var(--line2);
  color:var(--fg2);transition:all .2s}
.con-panel .lnks a:hover{color:var(--fg);border-color:var(--fg3);background:var(--surface2)}

/* ── achievements ───────────────────────────────────────────────────────── */
.ach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(252px,1fr));gap:14px}
.ach{position:relative;border:1px solid var(--line);border-radius:var(--r);background:var(--surface);
  padding:20px;display:flex;gap:15px;align-items:flex-start;overflow:hidden;transition:transform .35s var(--ease),border-color .3s}
.ach:hover{transform:translateY(-4px);border-color:var(--line2)}
.ach .shine{position:absolute;inset:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.1) 50%,transparent 60%);
  transform:translateX(-100%);transition:transform .8s var(--ease)}
.ach:hover .shine{transform:translateX(100%)}
.ach-medal{width:60px;height:60px;flex:0 0 auto;position:relative;display:grid;place-items:center}
.ach-medal svg{width:100%;height:100%}
.ach h4{font-size:15px;margin-bottom:3px}
.ach .flv{font-size:12.5px;color:var(--fg2);line-height:1.5}
.ach .when{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg3);margin-top:8px;display:flex;align-items:center;gap:6px}
.ach .tier{position:absolute;top:14px;right:14px;font-family:var(--mono);font-size:9px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--fg3);border:1px solid var(--line2);border-radius:5px;padding:2px 6px}
.bar{height:4px;border-radius:99px;background:var(--surface2);overflow:hidden;margin-top:10px}
.bar i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,var(--v),var(--c));width:0;transition:width 1.2s var(--ease)}
.ach-locked{opacity:.62;filter:saturate(.25)}
.ach-locked .ach-medal svg{opacity:.4}

/* ── timeline ───────────────────────────────────────────────────────────── */
.tl{position:relative;padding-left:30px}
.tl::before{content:"";position:absolute;left:7px;top:6px;bottom:6px;width:1px;
  background:linear-gradient(180deg,var(--v),var(--c),transparent)}
.tl-item{position:relative;padding-bottom:34px}
.tl-item:last-child{padding-bottom:0}
.tl-item::before{content:"";position:absolute;left:-30px;top:5px;width:15px;height:15px;border-radius:50%;
  background:var(--bg);border:2px solid var(--v);box-shadow:0 0 14px rgba(124,92,255,.6)}
.tl-item[data-kind="work"]::before{border-color:var(--v)}
.tl-item[data-kind="education"]::before{border-color:var(--c)}
.tl-item[data-kind="oss"]::before{border-color:var(--p)}
.tl .per{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--fg3)}
.tl h3{font-size:18px;margin:5px 0 3px}
.tl .org{font-size:12.5px;color:var(--c);font-family:var(--mono);margin-bottom:8px}
.tl p{font-size:14px;color:var(--fg2);max-width:66ch}
.tl .lnks{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}
.tl .lnks a{font-family:var(--mono);font-size:11px;padding:4px 9px;border-radius:7px;border:1px solid var(--line);
  color:var(--fg2);display:inline-flex;align-items:center;gap:5px;transition:all .2s}
.tl .lnks a:hover{color:var(--fg);border-color:var(--line2);background:var(--surface2)}
.tl .lnks svg{width:11px;height:11px}

/* ── stack ──────────────────────────────────────────────────────────────── */
.stack-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}
.stack-col{border:1px solid var(--line);border-radius:var(--r);padding:18px;background:var(--surface)}
.stack-col h4{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--fg3);margin-bottom:12px}
.stack-col ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:6px}
.stack-col li{font-size:12.5px;padding:4px 10px;border-radius:7px;background:var(--surface2);border:1px solid var(--line);color:var(--fg2)}

/* ── contact ────────────────────────────────────────────────────────────── */
.contact{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,48px);align-items:start}
.social-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(196px,1fr));gap:10px}
.soc{display:flex;align-items:center;gap:12px;padding:13px 14px;border:1px solid var(--line);border-radius:14px;
  background:var(--surface);transition:transform .28s var(--ease),border-color .28s,background .28s;position:relative;overflow:hidden}
.soc:hover{transform:translateY(-3px);border-color:var(--line2);background:var(--surface2)}
.soc .si{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;flex:0 0 auto;
  background:var(--surface2);border:1px solid var(--line)}
.soc .si svg{width:16px;height:16px}
.soc:hover .si{color:var(--sc,var(--v));border-color:var(--sc,var(--v))}
.soc .st{min-width:0}
.soc .st b{display:block;font-size:13px;letter-spacing:-.01em}
.soc .st small{display:block;font-family:var(--mono);font-size:10.5px;color:var(--fg3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mailbox{border:1px solid var(--line);border-radius:var(--r2);background:var(--surface);padding:26px;position:relative;overflow:hidden}
.mailbox::before{content:"";position:absolute;width:260px;height:260px;border-radius:50%;top:-130px;right:-130px;
  background:radial-gradient(circle,var(--v),transparent 65%);opacity:.16;filter:blur(24px)}
.mailbox h3{font-size:22px;margin-bottom:8px}
.mailbox p{font-size:14px;color:var(--fg2);margin-bottom:18px}
.copyrow{display:flex;gap:8px;align-items:center}
.copyrow input{flex:1;min-width:0;height:44px;border-radius:11px;border:1px solid var(--line);background:var(--bg2);
  color:var(--fg);padding:0 14px;font-family:var(--mono);font-size:12.5px}
.facts{list-style:none;margin:20px 0 0;padding:0;display:grid;gap:10px}
.facts li{display:flex;gap:10px;font-size:13px;color:var(--fg2)}
.facts svg{width:15px;height:15px;color:var(--v);flex:0 0 auto;margin-top:3px}

/* ── footer ─────────────────────────────────────────────────────────────── */
.foot{border-top:1px solid var(--line);padding-block:34px;margin-top:20px}
.foot-in{display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;font-size:12.5px;color:var(--fg3)}
.foot-in a:hover{color:var(--fg2)}
.foot .mono{font-family:var(--mono);font-size:11px}

/* ── command palette ────────────────────────────────────────────────────── */
.pal{position:fixed;inset:0;z-index:100;display:none;place-items:start center;padding:12vh 16px 16px;
  background:rgba(3,4,9,.7);backdrop-filter:blur(6px)}
.pal[data-open="1"]{display:grid;animation:fade .2s}
@keyframes fade{from{opacity:0}}
.pal-box{width:min(600px,100%);border:1px solid var(--line2);border-radius:16px;background:color-mix(in srgb,var(--bg2) 94%,transparent);
  box-shadow:0 40px 100px -30px rgba(0,0,0,.85);overflow:hidden;animation:pop .28s var(--ease)}
@keyframes pop{from{opacity:0;transform:translateY(-14px) scale(.98)}}
.pal-in{display:flex;align-items:center;gap:11px;padding:14px 16px;border-bottom:1px solid var(--line)}
.pal-in svg{width:17px;height:17px;color:var(--fg3);flex:0 0 auto}
.pal-in input{flex:1;background:none;border:0;color:var(--fg);font-size:15px;outline:0;font-family:var(--sans)}
.pal-in input::placeholder{color:var(--fg3)}
.pal-list{max-height:min(52vh,420px);overflow-y:auto;padding:8px}
.pal-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;cursor:pointer}
.pal-item .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg3);
  border:1px solid var(--line);border-radius:5px;padding:2px 6px;flex:0 0 auto;min-width:74px;text-align:center}
.pal-item .t{min-width:0;flex:1}
.pal-item .t b{display:block;font-size:13.5px;font-weight:600;letter-spacing:-.01em}
.pal-item .t small{display:block;font-size:11.5px;color:var(--fg3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pal-item svg{width:14px;height:14px;color:var(--fg3);flex:0 0 auto}
.pal-item[aria-selected="true"]{background:var(--surface2)}
.pal-item[aria-selected="true"] .k{color:var(--c);border-color:rgba(0,229,255,.4)}
.pal-foot{display:flex;gap:14px;padding:10px 16px;border-top:1px solid var(--line);font-family:var(--mono);
  font-size:10.5px;color:var(--fg3);flex-wrap:wrap}
.pal-empty{padding:34px;text-align:center;color:var(--fg3);font-size:13.5px}

/* ── reveal ─────────────────────────────────────────────────────────────── */
.rv{opacity:0;transform:translateY(22px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.rv.in{opacity:1;transform:none}
.rv-d1{transition-delay:.07s}.rv-d2{transition-delay:.14s}.rv-d3{transition-delay:.21s}.rv-d4{transition-delay:.28s}
@media (prefers-reduced-motion:reduce){
  .rv{opacity:1;transform:none;transition:none}
  .aurora i,.orbit .ring,.core,.marquee-t,.orbit .chip,.dot{animation:none!important}
  .caret{animation:none}
}

/* ── responsive ─────────────────────────────────────────────────────────── */
@media (max-width:960px){
  .hero-grid{grid-template-columns:1fr;gap:38px}
  .orbit{order:-1;width:min(78%,300px)}
  .contact{grid-template-columns:1fr}
}
@media (max-width:720px){
  .nav-links{display:none}
  .palette-btn .kbd{display:none}
  .pj-grid{grid-template-columns:1fr}
  .tel b{font-size:26px}
  .constel{min-height:380px}
}
@media (max-width:420px){
  .brand b{display:none}
}

/* ── print (résumé) ─────────────────────────────────────────────────────── */
@media print{
  .nav,.progress,.aurora,.grid-bg,.noise,.foot,.no-print{display:none!important}
  body{background:#fff;color:#000;font-size:10.5pt;line-height:1.45}
  section{padding:0!important;break-inside:avoid}
  .wrap{max-width:100%;padding:0}
  *{box-shadow:none!important;text-shadow:none!important}
  a{color:#000}
  .grad{-webkit-text-fill-color:#000;color:#000;background:none}
}
`;

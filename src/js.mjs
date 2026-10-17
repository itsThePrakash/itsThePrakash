/**
 * SIGNAL CORE — client runtime.
 * Vanilla, ~7 KB unminified. No framework, no polyfills, no external calls
 * except the optional GitHub live-data refresh (which degrades silently).
 */
export const JS = `(function(){
'use strict';
var d=document, root=d.documentElement, $=function(s,c){return (c||d).querySelector(s)},
    $$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))},
    REDUCE=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── theme ─────────────────────────────────────────────────────────────── */
var THEME_KEY='sc:theme';
function setTheme(t){root.setAttribute('data-theme',t);try{localStorage.setItem(THEME_KEY,t)}catch(e){}}
var saved=null;try{saved=localStorage.getItem(THEME_KEY)}catch(e){}
setTheme(saved|| (window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'));
var tBtn=$('#themeBtn');
if(tBtn)tBtn.addEventListener('click',function(){
  setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark');
});

/* ── nav: stuck + scroll progress ──────────────────────────────────────── */
var nav=$('#nav'), bar=$('#progress');
function onScroll(){
  var y=window.scrollY||window.pageYOffset, h=d.body.scrollHeight-window.innerHeight;
  if(nav)nav.setAttribute('data-stuck', y>12?'1':'0');
  if(bar)bar.style.width=(h>0?Math.min(100,y/h*100):0)+'%';
  var secs=$$('section[id]'), cur='';
  for(var i=0;i<secs.length;i++){if(secs[i].getBoundingClientRect().top<=140)cur=secs[i].id}
  $$('.nav-links a').forEach(function(a){
    a.setAttribute('aria-current', a.getAttribute('href')==='#'+cur ? 'true':'false');
  });
}
var raf=null;
window.addEventListener('scroll',function(){
  if(raf)return; raf=requestAnimationFrame(function(){onScroll();raf=null});
},{passive:true});
onScroll();

/* ── typewriter ────────────────────────────────────────────────────────── */
(function(){
  var el=$('#typed'); if(!el)return;
  var words=[]; try{words=JSON.parse(el.getAttribute('data-words'))}catch(e){}
  if(!words.length||REDUCE){el.textContent=words[0]||'';return}
  var w=0,i=0,del=false;
  (function tick(){
    var word=words[w];
    el.textContent = del ? word.slice(0,--i) : word.slice(0,++i);
    var wait = del?38: word[i-1]===' '?60:74;
    if(!del && i===word.length){del=true;wait=1900}
    else if(del && i===0){del=false;w=(w+1)%words.length;wait=280}
    setTimeout(tick,wait);
  })();
})();

/* ── reveal on scroll ──────────────────────────────────────────────────── */
(function(){
  var els=$$('.rv');
  if(REDUCE||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(en){
    en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e){io.observe(e)});
})();

/* ── count-up ──────────────────────────────────────────────────────────── */
function countUp(el,to,suffix,dur){
  if(REDUCE){el.textContent=to+suffix;return}
  var t0=null, from=0;
  function step(t){
    if(!t0)t0=t;
    var p=Math.min(1,(t-t0)/(dur||1100)), e=1-Math.pow(1-p,3);
    el.textContent=Math.round(from+(to-from)*e).toLocaleString('en-US')+suffix;
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
(function(){
  var els=$$('[data-count]');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){countUp(e,+e.getAttribute('data-count'),e.getAttribute('data-suffix')||'',0)});return}
  var io=new IntersectionObserver(function(en){
    en.forEach(function(x){
      if(!x.isIntersecting)return;
      var e=x.target;
      countUp(e,+e.getAttribute('data-count'),e.getAttribute('data-suffix')||'');
      io.unobserve(e);
    });
  },{threshold:.4});
  els.forEach(function(e){io.observe(e)});
})();

/* ── project filters + view toggle ─────────────────────────────────────── */
(function(){
  var chips=$$('.filters .chip'), cards=$$('.pj-grid .card'), nodes=$$('.constel .node'),
      grid=$('#pjGrid'), con=$('#constel');
  if(!chips.length)return;
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      chips.forEach(function(x){x.setAttribute('aria-pressed', x===c?'true':'false')});
      var f=c.getAttribute('data-f');
      cards.forEach(function(card){
        var ok = f==='all' || (card.getAttribute('data-tags')||'').indexOf(f)>-1;
        card.style.display = ok?'':'none';
      });
      nodes.forEach(function(n){
        var ok = f==='all' || (n.getAttribute('data-tags')||'').indexOf(f)>-1;
        n.classList.toggle('dim', !ok);
      });
    });
  });
  var tg=$$('.view-tog button');
  tg.forEach(function(b){
    b.addEventListener('click',function(){
      tg.forEach(function(x){x.setAttribute('aria-pressed', x===b?'true':'false')});
      var v=b.getAttribute('data-v');
      if(grid)grid.style.display = v==='grid'?'':'none';
      if(con)con.style.display = v==='orbit'?'':'none';
    });
  });
})();

/* ── constellation interaction ─────────────────────────────────────────── */
(function(){
  var nodes=$$('.constel .node'), panel=$('#conPanel');
  if(!nodes.length||!panel)return;
  nodes.forEach(function(n){
    function show(){
      nodes.forEach(function(x){x.classList.remove('on')});
      n.classList.add('on');
      panel.innerHTML=n.getAttribute('data-panel')||'';
      var a=panel.querySelector('a'); if(a)a.focus();
    }
    n.addEventListener('mouseenter',show);
    n.addEventListener('focus',show);
    n.addEventListener('click',function(){
      var u=n.getAttribute('data-url'); if(u&&u.charAt(0)!=='#')window.open(u,'_blank','noopener');
    });
    n.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();n.click()}});
  });
})();

/* ── copy (email, UPI, anything with data-copy) ────────────────────────── */
(function(){
  [].forEach.call(document.querySelectorAll('[data-copy]'),function(b){
    b.addEventListener('click',function(){
      var v=b.getAttribute('data-v')||'',l=b.querySelector('span');
      function done(){b.classList.add('copied');if(l)l.textContent='Copied';setTimeout(function(){b.classList.remove('copied');if(l)l.textContent='Copy'},1800)}
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(v).then(done,done)}
      else{var i=$('#mailInput');if(i){i.select();try{d.execCommand('copy')}catch(e){}}done()}
    });
  });
})();

/* ── pointer tilt ──────────────────────────────────────────────────────── */
(function(){
  if(REDUCE||window.matchMedia('(hover:none)').matches)return;
  $$('.tilt').forEach(function(el){
    el.addEventListener('pointermove',function(e){
      var r=el.getBoundingClientRect(),
          x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      el.style.transform='perspective(900px) rotateY('+(x*7).toFixed(2)+'deg) rotateX('+(-y*7).toFixed(2)+'deg) translateY(-4px)';
    });
    el.addEventListener('pointerleave',function(){el.style.transform=''});
  });
})();

/* ── command palette ───────────────────────────────────────────────────── */
(function(){
  var pal=$('#pal'), input=$('#palInput'), list=$('#palList');
  if(!pal||!input||!list)return;
  var ITEMS=[]; try{ITEMS=JSON.parse(d.getElementById('palData').textContent)}catch(e){}
  var sel=0, view=ITEMS.slice(0,40);
  function esc(s){return String(s).replace(/[&<>"\u0027]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function render(){
    if(!view.length){list.innerHTML='<div class="pal-empty">No match. Try "ekguru", "linkedin", "resume"…</div>';return}
    list.innerHTML=view.map(function(it,i){
      return '<div class="pal-item" role="option" aria-selected="'+(i===sel)+'" data-i="'+i+'" data-url="'+esc(it.url)+'">'+
        '<span class="k">'+esc(it.kind)+'</span><span class="t"><b>'+esc(it.title)+'</b><small>'+esc(it.subtitle||'')+'</small></span>'+
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>';
    }).join('');
    var on=list.querySelector('[aria-selected="true"]'); if(on)on.scrollIntoView({block:'nearest'});
  }
  function filter(q){
    q=q.trim().toLowerCase();
    if(!q){view=ITEMS.slice(0,40)}
    else{
      view=ITEMS.filter(function(it){
        return (it.title+' '+(it.subtitle||'')+' '+(it.keywords||'')+' '+it.kind).toLowerCase().indexOf(q)>-1;
      }).slice(0,40);
    }
    sel=0;render();
  }
  function open(){pal.setAttribute('data-open','1');d.body.style.overflow='hidden';input.value='';filter('');setTimeout(function(){input.focus()},20)}
  function close(){pal.removeAttribute('data-open');d.body.style.overflow=''}
  function go(i){var it=view[i];if(!it)return;close();
    if(it.url&&it.url.charAt(0)==='#'){var t=d.querySelector(it.url);if(t)t.scrollIntoView({behavior:REDUCE?'auto':'smooth'})}
    else if(it.url)window.open(it.url,'_blank','noopener');}
  $$('[data-palette]').forEach(function(b){b.addEventListener('click',open)});
  pal.addEventListener('click',function(e){if(e.target===pal)close()});
  input.addEventListener('input',function(){filter(input.value)});
  list.addEventListener('click',function(e){
    var it=e.target.closest('.pal-item'); if(it)go(+it.getAttribute('data-i'));
  });
  d.addEventListener('keydown',function(e){
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();pal.getAttribute('data-open')?close():open();return}
    if(pal.getAttribute('data-open')!=='1')return;
    if(e.key==='Escape'){close()}
    else if(e.key==='ArrowDown'){e.preventDefault();sel=Math.min(sel+1,view.length-1);render()}
    else if(e.key==='ArrowUp'){e.preventDefault();sel=Math.max(sel-1,0);render()}
    else if(e.key==='Enter'){e.preventDefault();go(sel)}
  });
})();

/* -- live GitHub telemetry: 4-tier fallback ladder ----------------------- */
(function(){
  var API='https://api.github.com';
  var U='itsThePrakash';
  var els={};['repos','stars','followers','ach'].forEach(function(k){els[k]=$('#tel-'+k)});
  var srcEl=$('#telSrc');
  var CACHE_KEY='sc:gh', TTL=600000;

  function paint(o,label){
    if(els.repos)els.repos.textContent=o.publicRepos;
    if(els.stars)els.stars.textContent=o.totalStars;
    if(els.followers)els.followers.textContent=o.followers;
    if(srcEl){srcEl.textContent=label;srcEl.parentNode.classList.toggle('live',label==='LIVE')}
  }
  function readCache(){
    try{var c=JSON.parse(localStorage.getItem(CACHE_KEY));if(c&&Date.now()-c.t<TTL)return c.v}catch(e){}
    return null;
  }
  function writeCache(v){try{localStorage.setItem(CACHE_KEY,JSON.stringify({t:Date.now(),v:v}))}catch(e){}}
  function shape(u,rs){
    return {publicRepos:u.public_repos,followers:u.followers,
      totalStars:rs.reduce(function(a,r){return a+(r.stargazers_count||0)},0)};
  }
  function done(v,label){writeCache(v);paint(v,label)}
  function direct(){
    return Promise.all([
      fetch(API+'/users/'+U,{headers:{Accept:'application/vnd.github+json'}}).then(function(r){if(!r.ok)throw 0;return r.json()}),
      fetch(API+'/users/'+U+'/repos?per_page=100',{headers:{Accept:'application/vnd.github+json'}}).then(function(r){if(!r.ok)throw 0;return r.json()})
    ]).then(function(res){return shape(res[0],res[1])});
  }

  function load(){
    var c=readCache(); if(c){paint(c,'CACHED');return}
    /* tier 1 - same-origin edge function: one GitHub call per edge TTL, globally */
    fetch('/api/live',{headers:{Accept:'application/json'}}).then(function(r){
      if(!r.ok)throw 0; return r.json();
    }).then(function(j){
      if(j&&j.source==='live'){done(j,'LIVE');return}
      if(j&&j.source==='snapshot'){paint(j,'SNAPSHOT');return direct().then(function(v){done(v,'LIVE')},function(){})}
      throw 0;
    })['catch'](function(){}).then(function(){
      /* tier 2 - the visitor's own browser talks to GitHub directly */
      if(srcEl&&srcEl.textContent==='LIVE')return;
      return direct().then(function(v){done(v,'LIVE')},function(){});
    }).then(function(){
      /* tier 3 - the build-time snapshot already rendered into the HTML */
      if(srcEl&&srcEl.textContent==='LIVE')return;
      if(srcEl){srcEl.textContent='SNAPSHOT';srcEl.parentNode.classList.remove('live')}
    });
  }
  if(els.repos)load();
})();

/* ── footer clock (IST) ─────────────────────────────────────────────────── */
(function(){
  var el=$('#clk'); if(!el)return;
  function pad(x){return (x<10?'0':'')+x}
  function tick(){
    try{
      var t=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});
      el.textContent=t+' IST';
    }catch(e){var d2=new Date();el.textContent=pad(d2.getUTCHours()+5)+':'+pad(d2.getUTCMinutes())+' IST'}
  }
  tick(); setInterval(tick,1000);
})();

/* ── footer year ───────────────────────────────────────────────────────── */
(function(){var y=$('#yr');if(y)y.textContent=new Date().getFullYear()})();
})();`;

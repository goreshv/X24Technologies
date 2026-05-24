/* ============================================================
   X24 Technologies — Shared app script
   - Theme toggle (persisted)
   - Nav + Footer injection
   - Reveal-on-scroll observer
   - Counter animation
   - Particle field (hero)
   ============================================================ */

/* Init theme ASAP (before paint to avoid flash) — also runs inline in <head>. */
(function initTheme() {
  try {
    const saved = localStorage.getItem('x24-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

const NAV_LINKS = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work',     href: '/projects' },
  { name: 'Blog',     href: '/blog' },
  { name: 'Contact',  href: '/contact' },
];

const LOGO_HTML = `
  <a href="/" class="flex items-center gap-2.5">
    <div class="relative w-7 h-7">
      <div class="absolute inset-0 rounded-lg" style="background: conic-gradient(from 180deg, var(--blue), var(--violet), var(--mint), var(--blue));"></div>
      <div class="absolute rounded-md flex items-center justify-center" style="inset:2px; background: var(--bg);">
        <span class="font-mono text-xs font-medium" style="color: var(--ink);">X</span>
      </div>
    </div>
    <span class="font-display text-lg tracking-tight" style="font-weight:500;">X24 <span style="color: var(--muted);">Technologies</span></span>
  </a>`;

function renderNav() {
  const current = location.pathname.replace(/\/$/, '') || '/';
  const navHost = document.getElementById('site-nav');
  if (!navHost) return;
  navHost.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 nav-shell">
      <div class="wrap" style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;height:64px;">
          ${LOGO_HTML}
          <nav class="desk-nav" style="display:none;gap:2rem;align-items:center;">
            ${NAV_LINKS.map(l => `<a href="${l.href}" class="nav-link ${current===l.href?'active':''}">${l.name}</a>`).join('')}
          </nav>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
              <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <a href="/contact" class="btn btn-glow" style="font-size:0.85rem;padding:0.55rem 1.1rem;">Book a call <span>→</span></a>
            <button class="mob-menu-btn" id="mob-menu-btn" aria-label="Menu" style="display:none;width:36px;height:36px;border-radius:8px;background:var(--surface-3);border:1px solid var(--line);color:var(--ink);cursor:pointer;align-items:center;justify-content:center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mob-menu" style="display:none;border-top:1px solid var(--line);padding:1rem 1.5rem;">
        ${NAV_LINKS.map(l => `<a href="${l.href}" class="nav-link" style="display:block;padding:0.65rem 0;font-size:0.95rem;">${l.name}</a>`).join('')}
      </div>
    </header>
    <style>
      @media (min-width: 900px) { .desk-nav { display: flex !important; } }
      @media (max-width: 899px) { .mob-menu-btn { display: flex !important; } }
    </style>
  `;
  // Hook up theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('x24-theme', next); } catch(e){}
  });
  // Mobile menu
  document.getElementById('mob-menu-btn')?.addEventListener('click', () => {
    const m = document.getElementById('mob-menu');
    if (!m) return;
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
  });
}

function renderFooter() {
  const host = document.getElementById('site-footer');
  if (!host) return;
  host.innerHTML = `
    <footer class="section" style="border-top:1px solid var(--line);">
      <div class="wrap">
        <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:2.5rem;margin-bottom:4rem;" class="footer-grid">
          <div style="grid-column:span 4;" class="footer-brand">
            ${LOGO_HTML.replace('class="flex items-center gap-2.5"', 'class="flex items-center gap-2.5" style="margin-bottom:1.25rem;display:inline-flex;"')}
            <p style="font-size:0.9rem;color:var(--muted);max-width:24rem;line-height:1.65;margin:1rem 0 1.5rem;">Enterprise AI &amp; automation engineering. We build the production systems that turn AI ambition into measurable business outcomes.</p>
            <div style="display:flex;gap:0.5rem;">
              <a href="#" class="social-dot" aria-label="X/Twitter"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" class="social-dot" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.358V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.265 2.37 4.265 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.114 20.452H3.555V9h3.559v11.452z"/></svg></a>
              <a href="#" class="social-dot" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></a>
              <a href="#" class="social-dot" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
          <div style="grid-column:span 2;">
            <div class="field-label" style="margin-bottom:1rem;">Company</div>
            <ul style="display:flex;flex-direction:column;gap:0.6rem;font-size:0.88rem;color:var(--muted);list-style:none;padding:0;margin:0;">
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/about" class="nav-link">Team</a></li>
              <li><a href="/contact" class="nav-link">Careers</a></li>
              <li><a href="/blog" class="nav-link">Press</a></li>
            </ul>
          </div>
          <div style="grid-column:span 2;">
            <div class="field-label" style="margin-bottom:1rem;">Services</div>
            <ul style="display:flex;flex-direction:column;gap:0.6rem;font-size:0.88rem;color:var(--muted);list-style:none;padding:0;margin:0;">
              <li><a href="/services" class="nav-link">AI development</a></li>
              <li><a href="/services" class="nav-link">Automation</a></li>
              <li><a href="/services" class="nav-link">Data engineering</a></li>
              <li><a href="/services" class="nav-link">SaaS development</a></li>
            </ul>
          </div>
          <div style="grid-column:span 4;">
            <div class="field-label" style="margin-bottom:1rem;">Get the newsletter</div>
            <p style="font-size:0.88rem;color:var(--muted);margin-bottom:1rem;max-width:24rem;line-height:1.55;">Monthly engineering deep-dives on shipping AI in production. No fluff, no marketing emails.</p>
            <form style="display:flex;gap:0.5rem;max-width:24rem;" onsubmit="event.preventDefault();this.querySelector('button').textContent='Subscribed ✓';this.querySelector('input').value='';">
              <input type="email" placeholder="work@email.com" class="input" required style="flex:1;"/>
              <button class="btn btn-glow" style="padding:0.7rem 1.1rem;">Subscribe</button>
            </form>
          </div>
        </div>
        <div style="border-top:1px solid var(--line);padding-top:1.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:0.75rem;color:var(--dim);">
          <div>© 2026 X24 Technologies. All rights reserved.</div>
          <div style="display:flex;gap:1.25rem;">
            <a href="#" class="nav-link">Privacy</a>
            <a href="#" class="nav-link">Terms</a>
            <a href="#" class="nav-link">Security</a>
            <a href="#" class="nav-link">SOC 2</a>
          </div>
        </div>
      </div>
      <style>
        @media (max-width: 900px) {
          .footer-grid > * { grid-column: span 12 !important; }
        }
      </style>
    </footer>
  `;
}

/* ============== Reveal on scroll ============== */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============== Counters ============== */
function initCounters() {
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.counter);
      const dur = 1600;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start)/dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-counter]').forEach(el => countIO.observe(el));
}

/* ============== Particle field ============== */
function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, dpr;
  function resize() {
    const rect = c.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = rect.width; h = rect.height;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 70;
  const colors = ['#5b8cff', '#b78cff', '#5eead4'];
  const pts = Array.from({ length: N }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    r: Math.random() * 1.4 + 0.4,
    hue: colors[Math.floor(Math.random() * colors.length)],
  }));

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.fillStyle = p.hue;
      ctx.globalAlpha = 0.7;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--particle-line').trim() || 'rgba(140,160,220,0.18)';
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = pts[i], b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const alpha = 1 - d2 / (130 * 130);
          // approximate alpha multiply on existing rgba string
          ctx.strokeStyle = lineColor.replace(/rgba?\(([^)]+)\)/, (m, parts) => {
            const segs = parts.split(',').map(s => s.trim());
            if (segs.length === 4) {
              return `rgba(${segs[0]}, ${segs[1]}, ${segs[2]}, ${parseFloat(segs[3]) * alpha})`;
            }
            return `rgba(${segs[0]}, ${segs[1]}, ${segs[2]}, ${alpha * 0.18})`;
          });
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();
}

/* ============== INIT ============== */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initReveal();
  initCounters();
  initParticles();
});

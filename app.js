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
              <a href="https://www.linkedin.com/in/khailesh-sharma-561572411/" target="_blank" rel="noopener" class="social-dot" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.358V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.265 2.37 4.265 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.114 20.452H3.555V9h3.559v11.452z"/></svg></a>
              <a href="https://www.instagram.com/x24_technologies?igsh=MXJmbWt3N3d1YWwyNw==" target="_blank" rel="noopener" class="social-dot" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="https://x.com/X24_Tech" target="_blank" rel="noopener" class="social-dot" aria-label="X/Twitter"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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

/* ============== Counters ============== */
function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseFloat(el.dataset.counter);
    el.textContent = Number.isInteger(target) ? target : target.toFixed(1);
  });
}

/* ============== INIT ============== */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initCounters();
});

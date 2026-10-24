/* ============================================================
   X24 Technologies — Shared Core Script
   - Theme toggle (persisted, zero-flash)
   - Nav + Footer injection with accessible mobile menu
   - Form handling utilities & URL helpers
   ============================================================ */

/* Init theme immediately */
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
  { name: 'Home',      href: '/' },
  { name: 'Services',  href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About',     href: '/about' },
  { name: 'Insights',  href: '/insights' },
  { name: 'Contact',   href: '/contact' },
];

const LOGO_HTML = `
  <a href="/" class="flex items-center gap-2.5 group" aria-label="X24 Technologies Home">
    <div class="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-sm text-blue-500 group-hover:border-blue-400 group-hover:bg-blue-600/25 transition-all">
      <span>X24</span>
    </div>
    <div class="flex flex-col">
      <span class="font-display text-base font-semibold tracking-tight text-white leading-none">X24 <span class="text-slate-400 font-normal">Technologies</span></span>
      <span class="font-mono text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">Engineering</span>
    </div>
  </a>`;

function renderNav() {
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  const navHost = document.getElementById('site-nav');
  if (!navHost) return;

  navHost.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 nav-shell" role="banner">
      <div class="wrap" style="max-width:76rem;margin:0 auto;padding:0 1.5rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;height:68px;">
          ${LOGO_HTML}

          <nav class="desk-nav" aria-label="Main Navigation" style="display:none;gap:1.75rem;align-items:center;">
            ${NAV_LINKS.map(l => {
              const isActive = (currentPath === l.href) || 
                               (l.href === '/portfolio' && currentPath === '/projects') || 
                               (l.href === '/insights' && currentPath === '/blog');
              return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.name}</a>`;
            }).join('')}
          </nav>

          <div style="display:flex;align-items:center;gap:0.75rem;">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark/light theme" title="Toggle theme">
              <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>

            <a href="/contact" class="btn btn-primary btn-sm" style="font-size:0.85rem;padding:0.5rem 1rem;">
              Discuss Your Project
            </a>

            <button class="mob-menu-btn" id="mob-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mob-menu" style="display:none;width:36px;height:36px;border-radius:8px;background:var(--surface-3);border:1px solid var(--line);color:var(--ink);cursor:pointer;align-items:center;justify-content:center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mob-menu" style="display:none;border-top:1px solid var(--line);background:var(--bg);padding:1rem 1.5rem;" aria-hidden="true">
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${NAV_LINKS.map(l => {
            const isActive = (currentPath === l.href) || 
                             (l.href === '/portfolio' && currentPath === '/projects') || 
                             (l.href === '/insights' && currentPath === '/blog');
            return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}" style="display:block;padding:0.5rem 0;font-size:1rem;">${l.name}</a>`;
          }).join('')}
          <div style="padding-top:0.75rem;border-top:1px solid var(--line);margin-top:0.5rem;">
            <a href="/contact" class="btn btn-primary" style="width:100%;justify-content:center;">Discuss Your Project</a>
          </div>
        </div>
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
    try { localStorage.setItem('x24-theme', next); } catch (e) {}
  });

  // Mobile menu toggle
  const mobBtn = document.getElementById('mob-menu-btn');
  const mobMenu = document.getElementById('mob-menu');
  if (mobBtn && mobMenu) {
    mobBtn.addEventListener('click', () => {
      const isExpanded = mobBtn.getAttribute('aria-expanded') === 'true';
      mobBtn.setAttribute('aria-expanded', !isExpanded);
      mobMenu.style.display = isExpanded ? 'none' : 'block';
      mobMenu.setAttribute('aria-hidden', isExpanded);
    });
  }
}

function renderFooter() {
  const host = document.getElementById('site-footer');
  if (!host) return;

  host.innerHTML = `
    <footer class="section-divider" style="background:var(--bg);padding:4.5rem 0 2.5rem;" role="contentinfo">
      <div class="wrap">
        <div style="display:grid;grid-template-columns:repeat(12, 1fr);gap:2.5rem;margin-bottom:3.5rem;" class="footer-grid">
          
          <!-- Column 1: Brand -->
          <div style="grid-column:span 4;" class="footer-col">
            ${LOGO_HTML}
            <p style="font-size:0.88rem;color:var(--muted);line-height:1.65;margin:1.25rem 0 1.5rem;max-width:22rem;">
              <strong>Engineering Solutions. Delivering Business Value.</strong><br/>
              We help businesses build reliable software, improve existing applications, streamline data workflows, and apply practical AI to real business challenges.
            </p>
            <div style="display:flex;gap:0.6rem;">
              <a href="https://www.linkedin.com/in/khailesh-sharma-561572411/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn Profile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.358V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.265 2.37 4.265 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.114 20.452H3.555V9h3.559v11.452z"/></svg>
              </a>
              <a href="https://www.instagram.com/x24_technologies?igsh=MXJmbWt3N3d1YWwyNw==" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram Profile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/X24_Tech" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X / Twitter Profile">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Services -->
          <div style="grid-column:span 3;" class="footer-col">
            <div class="field-label" style="margin-bottom:1rem;color:var(--ink);">Engineering Services</div>
            <ul style="display:flex;flex-direction:column;gap:0.6rem;font-size:0.86rem;color:var(--muted);list-style:none;padding:0;margin:0;">
              <li><a href="/services#dotnet" class="nav-link">.NET & Web API Development</a></li>
              <li><a href="/services#sql" class="nav-link">SQL Server Optimization</a></li>
              <li><a href="/services#review" class="nav-link">Application Performance Review</a></li>
              <li><a href="/services#data" class="nav-link">Data Engineering & Pipelines</a></li>
              <li><a href="/services#ai" class="nav-link">AI & Intelligent Automation</a></li>
              <li><a href="/services#modernization" class="nav-link">Application Modernization</a></li>
            </ul>
          </div>

          <!-- Column 3: Navigation -->
          <div style="grid-column:span 2;" class="footer-col">
            <div class="field-label" style="margin-bottom:1rem;color:var(--ink);">Company</div>
            <ul style="display:flex;flex-direction:column;gap:0.6rem;font-size:0.86rem;color:var(--muted);list-style:none;padding:0;margin:0;">
              <li><a href="/about" class="nav-link">About Us</a></li>
              <li><a href="/about#philosophy" class="nav-link">Engineering Philosophy</a></li>
              <li><a href="/portfolio" class="nav-link">Demonstrations & Portfolio</a></li>
              <li><a href="/insights" class="nav-link">Technical Insights</a></li>
              <li><a href="/contact" class="nav-link">Contact & Inquiries</a></li>
            </ul>
          </div>

          <!-- Column 4: Direct Inquiries -->
          <div style="grid-column:span 3;" class="footer-col">
            <div class="field-label" style="margin-bottom:1rem;color:var(--ink);">Start a Project</div>
            <p style="font-size:0.84rem;color:var(--muted);margin-bottom:1rem;line-height:1.6;">
              Have an existing .NET workload, SQL bottleneck, or data workflow challenge?
            </p>
            <div style="margin-bottom:1rem;">
              <a href="mailto:support@x24tech.com" style="color:var(--blue);font-weight:500;font-size:0.88rem;display:inline-flex;align-items:center;gap:0.4rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                support@x24tech.com
              </a>
              <div style="font-size:0.75rem;color:var(--dim);margin-top:0.25rem;">Response within 24 business hours</div>
            </div>
            <a href="/contact" class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;">Request Initial Assessment</a>
          </div>

        </div>

        <!-- Sub-footer -->
        <div style="border-top:1px solid var(--line);padding-top:1.75rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:0.8rem;color:var(--dim);">
          <div>© 2026 X24 Technologies. All rights reserved. Registered domain: x24tech.com</div>
          <div style="display:flex;gap:1.5rem;">
            <a href="/privacy" class="nav-link" style="font-size:0.8rem;">Privacy Policy</a>
            <a href="/terms" class="nav-link" style="font-size:0.8rem;">Terms of Service</a>
            <a href="/contact" class="nav-link" style="font-size:0.8rem;">Support</a>
          </div>
        </div>

      </div>

      <style>
        @media (max-width: 900px) {
          .footer-grid > .footer-col { grid-column: span 12 !important; }
        }
      </style>
    </footer>
  `;
}

// Automatically init nav & footer
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});

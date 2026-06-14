// Publishing hub + Workflow timeline + Large dashboard preview

function PublishHub() {
  return (
    <section className="section" id="publish">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Distribution</div>
          <h2>Publish everywhere<br/>from one dashboard.</h2>
          <p>Connect each channel once. Forge handles the rest — format, frontmatter, tags, image sizing, canonical URLs.</p>
        </div>

        <div className="hub reveal">
          <div className="hub-ring r1"></div>
          <div className="hub-ring r2"></div>

          {/* Animated connection lines */}
          <svg className="hub-lines" viewBox="0 0 1000 560" preserveAspectRatio="none">
            {[
              "M 100 100 Q 300 250 500 280",
              "M 900 80 Q 700 240 500 280",
              "M 60 280 Q 280 280 500 280",
              "M 940 280 Q 720 280 500 280",
              "M 160 480 Q 320 380 500 280",
              "M 840 500 Q 680 380 500 280",
            ].map((d, i) => (
              <g key={i}>
                <path d={d} />
                <circle r="3" className="pulse-dot">
                  <animateMotion dur={`${3 + i * 0.4}s`} repeatCount="indefinite" path={d} />
                </circle>
              </g>
            ))}
          </svg>

          <div className="hub-center">
            <div className="hub-core">FORGE</div>
          </div>

          <div className="hub-node n1"><PMark p="devto" /><div><div className="name">Dev.to</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
          <div className="hub-node n2"><PMark p="wp" /><div><div className="name">WordPress</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
          <div className="hub-node n3"><PMark p="li" /><div><div className="name">LinkedIn</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
          <div className="hub-node n4"><PMark p="x" /><div><div className="name">Twitter / X</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
          <div className="hub-node n5"><PMark p="hn" /><div><div className="name">Hashnode</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
          <div className="hub-node n6"><PMark p="medium" /><div><div className="name">Medium</div><div className="status"><span className="live"></span>CONNECTED</div></div></div>
        </div>

        <div className="pipeline reveal">
          {[
            { n: '01', t: 'Generate', d: 'AI drafts long-form, short-form, and visuals from a single brief.' },
            { n: '02', t: 'Optimize', d: 'SEO score, schema, image alt-text, and per-channel rewrites.' },
            { n: '03', t: 'Publish',  d: 'Push to every connected channel with the right format and tags.' },
            { n: '04', t: 'Scale',    d: 'Repeat with triggers, calendars, and approval workflows.' },
          ].map(s => (
            <div className="pipe-step" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: '01', t: 'Generate Content',    d: 'Brief in, draft out. The blog agent writes structured long-form copy with citations and a voice that matches your style profile.', tag: 'AI BLOG AGENT' },
  { n: '02', t: 'Edit with AI',        d: 'Inline rewrites, tone shifts, expand or compress. Track changes preserved across versions and platforms.', tag: 'RICH EDITOR' },
  { n: '03', t: 'Optimize for SEO',    d: 'Live keyword targeting, schema injection, internal-link suggestions, and per-channel meta previews.', tag: 'SEO ENGINE' },
  { n: '04', t: 'Generate Social Pack',d: 'A thread, a carousel, a LinkedIn post, a short — all auto-derived from the source piece and ready to schedule.', tag: 'SOCIAL PACK' },
  { n: '05', t: 'Schedule Content',    d: 'Calendar view across every channel, optimal-time suggestions, drip-release windows, blackout dates.', tag: 'SCHEDULER' },
  { n: '06', t: 'Publish Automatically',d: 'Forge pushes to every destination in parallel, retries on transient failures, and reports back to your dashboard.', tag: 'PUBLISHER' },
];

function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Workflow</div>
          <h2>Idea to inbox in<br/>six orchestrated steps.</h2>
          <p>Every stage is an AI-powered module. Run them end-to-end, or drop in at any step with your own content.</p>
        </div>

        <div className="workflow reveal">
          {STEPS.map(s => (
            <div className="wf-step" key={s.n}>
              <div className="marker mono">{s.n}</div>
              <div className="content">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="tag"><span className="dot"></span>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  // simple sparkline path generator
  const spark = (seed) => {
    const pts = [];
    let v = 40;
    for (let i = 0; i <= 24; i++) {
      v += (Math.sin(i * 0.6 + seed) + Math.cos(i * 0.27 + seed * 1.7)) * 6;
      v = Math.max(8, Math.min(64, v));
      pts.push([i * (300 / 24), 72 - v]);
    }
    return 'M ' + pts.map(p => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L ');
  };

  return (
    <section className="section" id="dashboard">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>The product</div>
          <h2>An AI command center<br/>for content operations.</h2>
          <p>Drafts, queues, SEO health, image generation, and unified analytics — one calm dashboard instead of seven open tabs.</p>
        </div>

        <div className="dash-wrap reveal">
          <div className="dash">
            <div className="dash-grid">
              {/* KPI cards row */}
              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">Posts published</span><span className="sub mono">7D</span></div>
                <div className="kpi-row"><span className="kpi">428</span><span className="delta">↑ 23%</span></div>
                <svg className="sparkline" viewBox="0 0 300 72" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff7a3d" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#ff7a3d" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={spark(1) + ' L 300 72 L 0 72 Z'} fill="url(#g1)"/>
                  <path d={spark(1)} stroke="#ff7a3d" strokeWidth="1.6" fill="none"/>
                </svg>
              </div>
              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">AI generations</span><span className="sub mono">7D</span></div>
                <div className="kpi-row"><span className="kpi">12.4k</span><span className="delta">↑ 41%</span></div>
                <svg className="sparkline" viewBox="0 0 300 72" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#8b6cff" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#8b6cff" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={spark(3) + ' L 300 72 L 0 72 Z'} fill="url(#g2)"/>
                  <path d={spark(3)} stroke="#8b6cff" strokeWidth="1.6" fill="none"/>
                </svg>
              </div>
              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">Channel uptime</span><span className="sub mono">30D</span></div>
                <div className="kpi-row"><span className="kpi">99.98<span style={{ fontSize: 18, color: 'var(--text-mute)' }}>%</span></span><span className="delta">stable</span></div>
                <svg className="sparkline" viewBox="0 0 300 72" preserveAspectRatio="none">
                  <path d="M 0 30 L 60 28 L 120 31 L 180 22 L 240 29 L 300 26"
                        stroke="#6ee2b1" strokeWidth="1.6" fill="none"/>
                  <path d="M 0 60 L 300 60" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4"/>
                </svg>
              </div>

              {/* SEO + Editor block */}
              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">SEO health</span><span className="sub mono">CURRENT POST</span></div>
                <div className="seo-score" style={{ marginTop: 6 }}>
                  <div className="seo-ring">
                    <svg viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none"/>
                      <circle cx="40" cy="40" r="34" stroke="url(#seoG)" strokeWidth="6" fill="none"
                              strokeDasharray={`${2 * Math.PI * 34 * 0.94} ${2 * Math.PI * 34}`}
                              strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="seoG" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ff7a3d"/>
                          <stop offset="100%" stopColor="#8b6cff"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="num">94</div>
                  </div>
                  <div className="seo-list">
                    <div className="row"><span>Title length</span><span className="v">OK</span></div>
                    <div className="row"><span>Keyword density</span><span className="v">1.8%</span></div>
                    <div className="row"><span>Meta description</span><span className="v">OK</span></div>
                    <div className="row"><span>Internal links</span><span className="v warn">+2</span></div>
                    <div className="row"><span>Reading time</span><span className="v">7m</span></div>
                  </div>
                </div>
              </div>

              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">AI image studio</span><span className="sub mono">RECENT</span></div>
                <div className="gen-images">
                  <div className="img"></div><div className="img"></div><div className="img"></div>
                  <div className="img"></div><div className="img"></div><div className="img"></div>
                </div>
                <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                  <span className="mono" style={{ fontSize: 10, padding: '4px 8px', borderRadius: 6, background: 'rgba(255,122,61,0.12)', color: 'var(--ember-2)' }}>1024×1024</span>
                  <span className="mono" style={{ fontSize: 10, padding: '4px 8px', borderRadius: 6, background: 'rgba(139,108,255,0.12)', color: '#d4c7ff' }}>OG · 1200×630</span>
                </div>
              </div>

              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">Latest social</span><span className="sub mono">DRAFT · X</span></div>
                <div className="social-card">
                  <div className="author">
                    <div className="avatar"></div>
                    <div>
                      <div className="name">Forge AI</div>
                      <div className="handle mono">@x24forge · just now</div>
                    </div>
                  </div>
                  We open-sourced our orchestration layer. One brief now ships to 6 channels with platform-aware formatting and zero copy-paste.
                  <div className="tag-row mono">
                    <span>#AI</span><span>#contentops</span><span>#shipfast</span>
                  </div>
                </div>
              </div>

              {/* Queue full width */}
              <div className="dash-cell col-8">
                <div className="head"><span className="ttl">Publishing queue</span><span className="sub mono">SCHEDULED · NEXT 24H</span></div>
                <div className="queue-list">
                  <div className="queue-item">
                    <span className="qmark p-devto">D</span>
                    <div><div className="title">Launching our AI platform — a builder&rsquo;s log</div><div className="meta">DEV.TO · 14:20 UTC · LONG-FORM</div></div>
                    <span className="stat live">LIVE</span>
                  </div>
                  <div className="queue-item">
                    <span className="qmark p-hn">H</span>
                    <div><div className="title">From idea to launch in 4 hours: our toolchain</div><div className="meta">HASHNODE · 14:22 UTC · CROSSPOST</div></div>
                    <span className="stat live">LIVE</span>
                  </div>
                  <div className="queue-item">
                    <span className="qmark p-li">in</span>
                    <div><div className="title">5 lessons from shipping an AI publishing platform</div><div className="meta">LINKEDIN · 16:00 UTC · LONG POST</div></div>
                    <span className="stat sched">SCHEDULED</span>
                  </div>
                  <div className="queue-item">
                    <span className="qmark p-x">𝕏</span>
                    <div><div className="title">7-tweet thread on multi-channel publishing</div><div className="meta">TWITTER/X · 16:05 UTC · THREAD</div></div>
                    <span className="stat sched">SCHEDULED</span>
                  </div>
                  <div className="queue-item">
                    <span className="qmark p-med">M</span>
                    <div><div className="title">The case for AI-orchestrated content ops</div><div className="meta">MEDIUM · TOMORROW · ESSAY</div></div>
                    <span className="stat queue">QUEUED</span>
                  </div>
                </div>
              </div>

              <div className="dash-cell col-4">
                <div className="head"><span className="ttl">Integrations</span><span className="sub mono">6 / 12 ACTIVE</span></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                  {PLATFORMS.slice(0,6).map(p => (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: '1px dashed var(--border)', fontSize: 12 }}>
                      <PMark p={p.id} />
                      <span style={{ flex: 1 }}>{p.name}</span>
                      <span className="mono" style={{ fontSize: 9, letterSpacing: '0.14em', color: '#6ee2b1' }}>● LIVE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PublishHub = PublishHub;
window.Workflow = Workflow;
window.DashboardPreview = DashboardPreview;

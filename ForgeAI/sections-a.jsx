// Top of the page — Nav + Hero + Logo strip + Features
const { useState, useEffect, useRef } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 4 L17 4 L13 11 L17 11 L9 21 L11 14 L7 14 Z" fill="white" opacity="0.95"/>
            </svg>
          </span>
          <span>X24 Forge</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#integrations">Integrations</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#workflow">About</a>
          <a className="nav-link" href="#cta">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-ghost">Sign in</button>
          <button className="btn btn-primary">
            Get started <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="eyebrow">
          <span className="dot"></span>
          <span>v2.4 — Multi-platform agents now live</span>
        </div>
        <h1 className="hero-title">
          <span className="grad">Create once.</span>{' '}
          <span className="ember">Publish everywhere.</span>
        </h1>
        <p className="hero-sub">
          Generate AI-powered content and ship it instantly across blogs, social platforms,
          and developer communities — from one orchestrated workspace.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary btn-lg">
            Start free <Icon name="arrow-right" size={15} />
          </button>
          <button className="btn btn-ghost btn-lg">
            <Icon name="play" size={13} /> Watch demo
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><div className="num">12×</div><div className="lbl">Faster output</div></div>
          <div className="hero-stat"><div className="num">6+</div><div className="lbl">Platforms</div></div>
          <div className="hero-stat"><div className="num">94%</div><div className="lbl">Avg SEO score</div></div>
          <div className="hero-stat"><div className="num">2.4M</div><div className="lbl">Posts shipped</div></div>
        </div>

        <HeroPreview />

        <div className="logo-strip">
          <div className="label">Publish natively to</div>
          <div className="row">
            {PLATFORMS.map(p => (
              <div className="plat-chip" key={p.id}>
                <PMark p={p.id} />
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="hero-preview">
      {/* Floating cards around the preview */}
      <div className="float-card fc-1">
        <div className="ic-circle"><Icon name="sparkles" size={14} /></div>
        <div>
          <div className="lbl">Generation</div>
          <div className="val">Blog draft · 1,820 words</div>
        </div>
      </div>
      <div className="float-card fc-2">
        <div className="ic-circle violet"><Icon name="broadcast" size={14} /></div>
        <div>
          <div className="lbl">Published</div>
          <div className="val">6 platforms · 0 errors</div>
        </div>
      </div>
      <div className="float-card fc-3">
        <div className="ic-circle"><Icon name="gauge" size={14} /></div>
        <div>
          <div className="lbl">SEO score</div>
          <div className="val">94 / 100 · A+</div>
        </div>
      </div>

      <div className="preview-frame">
        <div className="preview-inner">
          <div className="preview-bar">
            <div className="dot-row"><span></span><span></span><span></span></div>
            <span className="path">forge.app / drafts / launching-our-ai-platform</span>
          </div>
          <div className="preview-body">
            <PreviewSide />
            <PreviewMain />
            <PreviewRight />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewSide() {
  return (
    <aside className="preview-side">
      <div className="nav-grp">
        <div className="label">Workspace</div>
        <div className="item active"><span className="ic"><Icon name="edit" size={9} /></span> Editor</div>
        <div className="item"><span className="ic"></span> Drafts</div>
        <div className="item"><span className="ic"></span> Scheduled</div>
        <div className="item"><span className="ic"></span> Published</div>
      </div>
      <div className="nav-grp">
        <div className="label">AI</div>
        <div className="item"><span className="ic"></span> Blog generator</div>
        <div className="item"><span className="ic"></span> Image studio</div>
        <div className="item"><span className="ic"></span> Social packs</div>
      </div>
      <div className="nav-grp">
        <div className="label">Integrations</div>
        <div className="item"><span className="ic"></span> Channels</div>
        <div className="item"><span className="ic"></span> Webhooks</div>
        <div className="item"><span className="ic"></span> API keys</div>
      </div>
    </aside>
  );
}

function PreviewMain() {
  return (
    <div className="preview-main">
      <div className="crumb">DRAFTS / NEW POST</div>
      <h4>Launching our AI platform: a builder&rsquo;s log</h4>
      <div className="editor">
        <div className="ln h">From idea to multi-platform launch in 4 hours</div>
        <div className="ln">We&rsquo;ve been shipping <span className="high">AI-native publishing workflows</span> for the last six months and</div>
        <div className="ln">today we&rsquo;re open-sourcing the orchestration layer. The model picks the channel,</div>
        <div className="ln">rewrites for tone, and queues everything behind a single approval gate<span className="typing"></span></div>
        <div className="ai-suggest">
          <Icon name="sparkles" size={10} />
          AI · Continue with &ldquo;What makes this different…&rdquo;
        </div>
      </div>
    </div>
  );
}

function PreviewRight() {
  return (
    <aside className="preview-right">
      <div className="right-card">
        <div className="ttl">SEO score</div>
        <div className="val">94<span className="unit">/ 100</span></div>
        <div className="meter"></div>
      </div>
      <div className="right-card">
        <div className="ttl">Publishing queue</div>
        <div style={{ marginTop: 6 }}>
          <div className="pub-row"><div className="plat"><span className="chip p-devto">D</span> Dev.to</div><span className="status ok">LIVE</span></div>
          <div className="pub-row"><div className="plat"><span className="chip p-hn">H</span> Hashnode</div><span className="status ok">LIVE</span></div>
          <div className="pub-row"><div className="plat"><span className="chip p-med">M</span> Medium</div><span className="status run">PUSHING</span></div>
          <div className="pub-row"><div className="plat"><span className="chip p-li">in</span> LinkedIn</div><span className="status q">QUEUED</span></div>
          <div className="pub-row"><div className="plat"><span className="chip p-x">𝕏</span> Twitter/X</div><span className="status q">QUEUED</span></div>
        </div>
      </div>
    </aside>
  );
}

const FEATURES = [
  { ic: 'sparkles',  name: 'AI Blog Generator',     desc: 'Brief in, long-form draft out — with sources, structure, and a voice that matches your brand.' },
  { ic: 'edit',      name: 'AI Rich Text Editor',   desc: 'Inline rewrites, tone shifts, summarize, expand. Markdown native, with a clean keyboard model.' },
  { ic: 'gauge',     name: 'SEO Optimization',      desc: 'Real-time scoring, keyword targeting, schema generation, and meta previews per channel.' },
  { ic: 'image',     name: 'AI Image Generator',    desc: 'Generate hero art, OG images, and inline graphics — sized correctly for every destination.' },
  { ic: 'share',     name: 'Social Media Packs',    desc: 'One brief produces a thread, a carousel, a LinkedIn post, and a short — automatically.' },
  { ic: 'broadcast', name: 'Multi-Platform Publish',desc: 'Push to 6+ destinations with platform-aware formatting, tags, and canonical URLs.' },
  { ic: 'calendar',  name: 'Content Scheduling',    desc: 'Calendar view, optimal-time suggestions per channel, and rolling drip-release windows.' },
  { ic: 'chart',     name: 'Analytics Dashboard',   desc: 'Unified attribution across channels — see which formats and topics actually drive growth.' },
  { ic: 'workflow',  name: 'AI Workflow Automation',desc: 'Trigger jobs from RSS, webhooks, or your own pipelines. Approval gates included.' },
];

function Features() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Capabilities</div>
          <h2>Every step of the content loop,<br/>in one workspace.</h2>
          <p>Nine purpose-built modules that talk to each other — so a single brief becomes a finished, multi-channel campaign without leaving the app.</p>
        </div>
        <div className="features-grid reveal">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={f.name} onMouseMove={onMove}>
              <div className="badge mono">{String(i + 1).padStart(2, '0')}</div>
              <div className="feature-icon"><Icon name={f.ic} size={20} /></div>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.Features = Features;

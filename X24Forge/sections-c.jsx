// Integrations + Pricing + Testimonials + FAQ + Final CTA + Footer

function Integrations() {
  const all = [
    ...PLATFORMS.map(p => ({ ...p, state: 'live' })),
    { id: 'openai',  name: 'OpenAI',     desc: 'Model provider',     state: 'live' },
    { id: 'pg',      name: 'PostgreSQL', desc: 'Self-hosted DB',     state: 'live' },
    { id: 'shopify', name: 'Shopify',    desc: 'E-commerce blogs',   state: 'soon' },
    { id: 'ghost',   name: 'Ghost CMS',  desc: 'Newsletter + blog',  state: 'soon' },
    { id: 'webflow', name: 'Webflow CMS',desc: 'Visual websites',    state: 'soon' },
    { id: 'notion',  name: 'Notion',     desc: 'Docs & pages',       state: 'soon' },
  ];
  return (
    <section className="section" id="integrations">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Integrations</div>
          <h2>Plays nicely with your<br/>entire content stack.</h2>
          <p>Six platforms live today. Six more on the runway. Plus webhooks and a typed API for everything custom.</p>
        </div>

        <div className="int-grid reveal">
          {all.map(i => (
            <div className="int-card" key={i.id}>
              <PMark p={i.id} />
              <h4>{i.name}</h4>
              <div className="desc">{i.desc}</div>
              <div className="status-line">
                <span className="mono">{i.id.toUpperCase()}</span>
                {i.state === 'live'
                  ? <span className="live">CONNECTED</span>
                  : <span className="soon">COMING SOON</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 36, textAlign: 'center' }}>
          <p style={{ fontSize: 13.5, color: 'var(--text-mute)' }}>
            Don&rsquo;t see your channel? <a href="#cta" style={{ color: 'var(--ember-2)' }}>Request an integration →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

const PRICING = [
  {
    tier: 'STARTER', name: 'Starter', price: '0', per: '/ forever',
    blurb: 'For solo creators experimenting with AI-powered publishing.',
    feats: ['50 AI generations / mo', '2 channel integrations', 'Basic SEO scoring', 'Markdown editor', 'Community support'],
    cta: 'Start free', featured: false,
  },
  {
    tier: 'PRO', name: 'Pro', price: '29', per: '/ month',
    blurb: 'For founders and teams shipping content as a growth lever.',
    feats: ['Unlimited AI generations', 'All 6 live integrations', 'Advanced SEO + schema', 'Image studio (1024 + OG)', 'Content scheduling', 'Priority support'],
    cta: 'Start 14-day trial', featured: true, ribbon: 'Most popular',
  },
  {
    tier: 'ENTERPRISE', name: 'Enterprise', price: 'Custom', per: '',
    blurb: 'For agencies and orgs that need controls, audit, and scale.',
    feats: ['Everything in Pro', 'SSO + role-based access', 'Approval workflows', 'Custom API integrations', 'Audit log + SOC 2', 'Dedicated success manager'],
    cta: 'Talk to sales', featured: false,
  },
];

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Pricing</div>
          <h2>Pricing that scales with<br/>your content volume.</h2>
          <p>Start free. Upgrade when AI generations save you a full hire. Cancel any time.</p>
        </div>

        <div className="pricing-grid reveal">
          {PRICING.map(p => (
            <div className={`price-card ${p.featured ? 'featured' : ''}`} key={p.name}>
              {p.ribbon && <div className="ribbon">{p.ribbon}</div>}
              <div className="tier">{p.tier}</div>
              <div className="name">{p.name}</div>
              <div className="price">
                {p.price === 'Custom'
                  ? <span className="amt" style={{ fontSize: 36 }}>Let&rsquo;s talk</span>
                  : <><span className="amt">${p.price}</span><span className="per">{p.per}</span></>
                }
              </div>
              <div className="blurb">{p.blurb}</div>
              <button className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-lg price-cta`}>
                {p.cta} <Icon name="arrow-right" size={14} />
              </button>
              <ul className="feat-list">
                {p.feats.map(f => (
                  <li key={f}>
                    <span className="check"><Icon name="check" size={14} stroke={2.2} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTS = [
  {
    quote: "Forge cut our publishing time from a full afternoon to about 12 minutes. The platform-aware rewrites are the part nobody else is doing well.",
    name: 'Maya Chen', role: 'FOUNDER · TENDRIL.IO',
    grad: 'linear-gradient(135deg, #ff7a3d, #ff4d8f)',
  },
  {
    quote: "We replaced four tools — drafting, SEO checking, image gen, and scheduling — with one. The audit trail alone makes it worth it for our agency.",
    name: 'Dev Patel', role: 'CONTENT LEAD · RAYWORKS',
    grad: 'linear-gradient(135deg, #8b6cff, #5ec8ff)',
  },
  {
    quote: "I write once. It hits Dev.to, Hashnode, LinkedIn and a Twitter thread within minutes — sized and tagged correctly for each. Genuinely magic.",
    name: 'Alex Romero', role: 'STAFF ENGINEER · INDIE',
    grad: 'linear-gradient(135deg, #ffb37a, #ff7a3d)',
  },
  {
    quote: "The workflow approval gate is the feature nobody markets but everyone needs. We can finally let AI draft, with humans in the loop where it matters.",
    name: 'Priya Kapoor', role: 'HEAD OF MARKETING · LOOPSCALE',
    grad: 'linear-gradient(135deg, #6ee2b1, #8b6cff)',
  },
  {
    quote: "SEO scores improved 22% in the first month. Not because the AI is smarter, but because Forge actually forces the basics on every draft.",
    name: 'Jonas Weber', role: 'GROWTH · BAUM.DEV',
    grad: 'linear-gradient(135deg, #ff4d8f, #8b6cff)',
  },
  {
    quote: "We onboarded our entire content team in an afternoon. The dashboard is one of the calmest pieces of B2B software I&rsquo;ve used in years.",
    name: 'Sara Lindqvist', role: 'CEO · NORTHLINE',
    grad: 'linear-gradient(135deg, #5ec8ff, #ff7a3d)',
  },
];

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Customers</div>
          <h2>Loved by the teams<br/>who ship daily.</h2>
          <p>Founders, developers, agencies, and creators have shipped over 2.4M posts with Forge.</p>
        </div>

        <div className="tst-grid reveal">
          {TESTS.map((t, i) => (
            <div className="tst-card" key={i}>
              <div className="quote">{t.quote}</div>
              <div className="author">
                <div className="avatar" style={{ background: t.grad }}>{t.name.split(' ').map(s => s[0]).join('')}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role mono">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'Which AI models power the platform?',
    a: 'Forge runs a mix of frontier and specialized models — we route by task. Long-form drafts, social rewrites, SEO scoring, and image generation each use the model that performs best for that job. You can also bring your own API key on Enterprise.' },
  { q: 'How does multi-platform publishing actually work?',
    a: 'You connect each channel once via OAuth or token. When you hit publish, Forge transforms the draft into each channel&rsquo;s native format — frontmatter for Dev.to, blocks for WordPress, threads for X, carousels for LinkedIn — and pushes them in parallel with retries and a status report.' },
  { q: 'Can I bring my own brand voice and style?',
    a: 'Yes. Upload reference posts, brand guidelines, or a few finished pieces. The voice profile is applied to every generation across long-form, short-form, and social.' },
  { q: 'Is my content private?',
    a: 'Yes. We don&rsquo;t train on your data. All drafts and assets are encrypted at rest. Enterprise plans get SOC 2 Type II, SSO, role-based access, and a full audit log.' },
  { q: 'What happens if a publish fails?',
    a: 'Forge retries transient failures automatically, surfaces hard failures in your dashboard with a reproducible error, and never silently drops a post. You can re-queue from the failed step in one click.' },
  { q: 'Can I export everything?',
    a: 'Always. Markdown, JSON, MDX, or a full ZIP of every post, version, and asset. Forge is a workspace, not a walled garden.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Questions</div>
          <h2>Frequently asked.</h2>
          <p>Everything else, our docs and team will answer in under an hour.</p>
        </div>
        <div className="faq reveal">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="icon"><Icon name="plus" size={12} stroke={2} /></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="final-cta reveal">
          <div className="eyebrow"><span className="dot"></span>Ready to ship</div>
          <h2 style={{ marginTop: 18 }}>
            Scale your content<br/>with <span className="ember">AI orchestration.</span>
          </h2>
          <p>Start free in 60 seconds. Connect a channel, generate a draft, watch it go live across six platforms.</p>
          <div className="ctas">
            <button className="btn btn-primary btn-lg">Start free <Icon name="arrow-right" size={15} /></button>
            <button className="btn btn-ghost btn-lg"><Icon name="play" size={13} /> Book a demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 4 L17 4 L13 11 L17 11 L9 21 L11 14 L7 14 Z" fill="white" opacity="0.95"/>
                </svg>
              </span>
              <span>X24 Forge</span>
            </a>
            <p>The AI command center for multi-platform content. Built for teams who ship every day.</p>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); }}>
              <input type="email" placeholder="you@company.com" />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#workflow">Workflows</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Integrations</h5>
            <ul>
              {PLATFORMS.map(p => (
                <li key={p.id}><a href="#integrations">{p.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press kit</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API reference</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© 2026 X24 Forge Inc. — All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="Twitter"><Icon name="twitter" size={14} /></a>
            <a href="#" aria-label="GitHub"><Icon name="github" size={14} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={14} /></a>
            <a href="#" aria-label="Discord"><Icon name="discord" size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Integrations = Integrations;
window.Pricing = Pricing;
window.Testimonials = Testimonials;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;

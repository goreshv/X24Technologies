// Icons used across the page — lucide-style stroke icons, hand-tuned
const Icon = ({ name, size = 18, stroke = 1.6 }) => {
  const props = {
    width: size, height: size,
    viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'sparkles': return (<svg {...props}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/><path d="M5 16l.6 1.6L7 18l-1.4.4L5 20l-.6-1.6L3 18l1.4-.4L5 16z"/></svg>);
    case 'edit': return (<svg {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>);
    case 'gauge': return (<svg {...props}><circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/><path d="M3 13a9 9 0 0 1 18 0"/></svg>);
    case 'image': return (<svg {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-9 9"/></svg>);
    case 'share': return (<svg {...props}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5L15.4 17.5"/><path d="M15.4 6.5L8.6 10.5"/></svg>);
    case 'broadcast': return (<svg {...props}><circle cx="12" cy="12" r="2"/><path d="M5 12a7 7 0 0 1 2-5"/><path d="M19 12a7 7 0 0 0-2-5"/><path d="M3 12a9 9 0 0 1 3-7"/><path d="M21 12a9 9 0 0 0-3-7"/></svg>);
    case 'calendar': return (<svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 11h18"/></svg>);
    case 'chart': return (<svg {...props}><path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 5-6"/></svg>);
    case 'workflow': return (<svg {...props}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 6h6a2 2 0 0 1 2 2v1"/><path d="M15 18H9a2 2 0 0 1-2-2v-1"/></svg>);
    case 'arrow-right': return (<svg {...props}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>);
    case 'play': return (<svg {...props}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></svg>);
    case 'check': return (<svg {...props}><path d="M5 13l4 4L19 7"/></svg>);
    case 'plus': return (<svg {...props}><path d="M12 5v14"/><path d="M5 12h14"/></svg>);
    case 'twitter': return (<svg {...props}><path d="M18 4l-6.5 8L19 21h-4.5L9.5 14 4 21H2l7-8.5L2 4h4.5l5 6.5L17 4z" fill="currentColor" stroke="none"/></svg>);
    case 'github': return (<svg {...props}><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>);
    case 'linkedin': return (<svg {...props}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7"/><path d="M8 7v.01"/><path d="M12 17v-4a2 2 0 0 1 4 0v4"/><path d="M12 10v7"/></svg>);
    case 'discord': return (<svg {...props}><path d="M18 5a13 13 0 0 0-3-1l-.4.8a11 11 0 0 0-5.2 0L9 4a13 13 0 0 0-3 1c-2 3-2.7 6-2.5 9 1.3 1 2.6 1.5 3.9 1.9L8.5 15a8 8 0 0 1-1.5-.7"/><path d="M6 14l1.4-1"/><path d="M18 14l-1.4-1"/><path d="M9.5 12.5h.01"/><path d="M14.5 12.5h.01"/><path d="M6 5c-2 3-2.7 6-2.5 9 0 0 4 2 6.5 2L11 15"/><path d="M18 5c2 3 2.7 6 2.5 9 0 0-4 2-6.5 2L13 15"/></svg>);
    case 'menu': return (<svg {...props}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>);
    default: return null;
  }
};

window.Icon = Icon;

// Platform mark — abstract monogram so we don't reproduce brand marks
const PMark = ({ p, size = 'sm' }) => {
  const m = {
    devto: { cls: 'p-devto', text: 'DEV' },
    wp:    { cls: 'p-wp',    text: 'W' },
    li:    { cls: 'p-li',    text: 'in' },
    x:     { cls: 'p-x',     text: '𝕏' },
    hn:    { cls: 'p-hn',    text: 'H' },
    medium:{ cls: 'p-med',   text: 'M' },
    openai:{ cls: 'p-oai',   text: 'AI' },
    pg:    { cls: 'p-pg',    text: 'pg' },
    shopify:{cls: 'p-shop',  text: 'S' },
    ghost: { cls: 'p-ghost', text: 'G' },
    webflow:{cls: 'p-wf',    text: 'W' },
    notion:{ cls: 'p-note',  text: 'N' },
  };
  const info = m[p] || { cls: '', text: '?' };
  return <span className={`pmark ${info.cls}`}>{info.text}</span>;
};
window.PMark = PMark;

// Platform display names (sanitized — we describe by category, no logo recreation)
const PLATFORMS = [
  { id: 'devto',  name: 'Dev.to',     desc: 'Developer community' },
  { id: 'wp',     name: 'WordPress',  desc: 'CMS publishing' },
  { id: 'li',     name: 'LinkedIn',   desc: 'Professional network' },
  { id: 'x',      name: 'Twitter / X',desc: 'Short-form social' },
  { id: 'hn',     name: 'Hashnode',   desc: 'Dev blogging' },
  { id: 'medium', name: 'Medium',     desc: 'Long-form essays' },
];
const SOON = [
  { id: 'shopify', name: 'Shopify',    desc: 'E-commerce blogs' },
  { id: 'ghost',   name: 'Ghost CMS',  desc: 'Newsletter + blog' },
  { id: 'webflow', name: 'Webflow CMS',desc: 'Visual sites' },
  { id: 'notion',  name: 'Notion',     desc: 'Docs & pages' },
  { id: 'openai',  name: 'OpenAI',     desc: 'Model provider' },
  { id: 'pg',      name: 'PostgreSQL', desc: 'Self-hosted DB' },
];
window.PLATFORMS = PLATFORMS;
window.SOON = SOON;

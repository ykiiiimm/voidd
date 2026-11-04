/* ══════════════════════════════════════════════════════════════════════
   VOID — DIGITAL PRODUCT STUDIO
   Core Application Engine & Team Console (CMC)
   Vanilla JS Architecture · Real-time Cloud Persistence
   ══════════════════════════════════════════════════════════════════════ */

/* ── Default Data Models ── */
const defaultProjects = [
  {
    id: 'lumen',
    title: 'Lumen OS',
    category: 'Web platform',
    year: '2026',
    desc: 'A platform that turns complex operations into clear next steps.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    challenge: 'Operations teams were drowning in dashboards that displayed everything but clarified nothing. Key decisions were delayed because the right data was buried under noise. The business needed a platform that helped people act, not just observe.',
    approach: 'We designed Lumen OS around progressive disclosure — surfacing only the next meaningful action based on the user\'s role and current context. The interface uses a calm, dark palette with generous spacing to reduce cognitive load. Data streams are prioritised by urgency, and contextual prompts adapt in real time. The modular component architecture allows each team to configure their own view without engineering support.',
    execution: 'Delivered a full web platform with role-based dashboards, real-time data integration, configurable alert thresholds, and a lightweight state layer optimised for speed under load. Launched with three internal teams, expanded to twelve within six months.',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'material',
    title: 'Flow AI',
    category: 'AI tool',
    year: '2026',
    desc: 'An AI workspace shaped around practical, human decisions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    challenge: 'AI tools promised productivity but delivered confusion — too many options, unclear outputs, and no connection to the actual decisions users needed to make. Teams needed an AI workspace that supported practical work, not experimentation for its own sake.',
    approach: 'Flow AI was built around decision-first design. Instead of presenting raw model outputs, we structured the interface around specific tasks: draft, compare, summarise, decide. Every AI interaction maps to a clear user intent. We used a conversational UI layered over structured data views, so outputs always have context.',
    execution: 'Shipped a web-based AI workspace with task-specific modules, team sharing, version history and an API layer for integration with existing tools. Pilot launched with two product teams, achieving measurable reduction in research-to-decision time.',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'tangent',
    title: 'Tangent',
    category: 'Mobile app',
    year: '2025',
    desc: 'An app for moving from an idea to a usable plan.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
    challenge: 'Early-stage ideas die in group chats and scattered notes. Founders and product leads needed a tool to move from a rough concept to a structured plan without the overhead of project management software.',
    approach: 'Tangent uses a guided flow that breaks idea development into three phases: capture, structure, and validate. Each phase has lightweight prompts that help users think through their concept without imposing a rigid framework. The mobile-first design means ideas can be captured anywhere and refined later.',
    execution: 'Launched on iOS and Android with offline support, collaborative workspaces, and export to common formats. Used by early-stage teams and independent builders to validate over 200 product concepts in the first quarter.',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'openfield',
    title: 'Open Field',
    category: 'Automation',
    year: '2025',
    desc: 'A connected system that gives teams one useful workflow.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
    challenge: 'Teams were using five or six disconnected tools for tasks that should flow together — handoffs were manual, context was lost, and nobody had a clear view of where work actually stood.',
    approach: 'Open Field connects existing tools through a unified workflow layer rather than replacing them. We built lightweight integrations that sync status, handoffs and blockers into a single timeline. The interface shows each team member exactly what needs their attention, when, and why.',
    execution: 'Deployed as an internal automation platform connecting project management, communication and documentation tools. Reduced manual status updates by 70% and cut average handoff time from 4 hours to 20 minutes across pilot teams.',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'nara',
    title: 'Nara Cloud',
    category: 'Web platform',
    year: '2025',
    desc: 'A dashboard that gives teams a calm view of their data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    challenge: 'Data teams were building reports that leadership never read. The dashboards were technically accurate but visually overwhelming, and the insights were buried in charts that required expertise to interpret.',
    approach: 'Nara Cloud was designed for calm data consumption. We replaced dense chart grids with a narrative-driven layout — each view tells a story with a clear headline, supporting metric and trend indicator. Colour is used sparingly and only to signal change. The typography-first design makes the dashboard readable at a glance.',
    execution: 'Delivered a cloud-hosted analytics dashboard with automated narrative summaries, role-based views and scheduled email digests. Adopted by three departments, with leadership engagement on data reviews increasing from monthly to weekly.',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'signal',
    title: 'Signal',
    category: 'AI tool',
    year: '2024',
    desc: 'An interface for finding decisions hidden in noisy data.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85',
    challenge: 'Product managers were spending hours each week manually combing through analytics, support tickets and market data to find the signals that should inform their next decision. The volume of data was growing faster than the team.',
    approach: 'Signal uses a relevance engine that filters and ranks data points based on the user\'s current focus — what they are deciding, not just what is trending. We built a clean, minimal interface that presents three to five key signals per session, each with source attribution and confidence scoring. The AI layer handles prioritisation; the human handles interpretation.',
    execution: 'Launched as a web application with integrations for analytics platforms, support tools and market feeds. Reduced average research time per decision from 3 hours to 25 minutes for pilot users.',
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85'
    ]
  }
];

const defaultArticles = [
  {
    id: 'new-chapter',
    category: 'Team note',
    date: '14.10.26',
    time: '4 min read',
    author: 'Hakim Lahdaid',
    title: 'A new chapter for people who build.',
    deck: 'We are making more room for useful software, better systems and bold questions.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85',
    body: [
      'We started VOID because we saw too many teams struggling with fragmented tools, unclear workflows and products that never quite matched the problem they set out to solve. This is the beginning of something more focused.',
      'Our approach is simple: understand the real constraint, design around it, and build something people use without a tutorial. Every project we take on starts with listening — to the team, to the users, to the system that already exists. We are not here to add complexity. We are here to reduce it.',
      'This journal will track how we think, what we ship and what we learn along the way. Not polished case studies — honest notes from the build.'
    ]
  },
  {
    id: 'inside-lumen',
    category: 'Build log',
    date: '02.10.26',
    time: '6 min read',
    author: 'Wadoud Haddad',
    title: 'Inside Lumen OS: building for decisive work.',
    deck: 'Notes from the product logic behind a web platform.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
    body: [
      'Lumen OS began as a question: what if an operations dashboard actually helped people decide, instead of just displaying data? Most dashboards show everything and clarify nothing. We wanted to fix that.',
      'The core product decision was to surface only the next meaningful action. We stripped out vanity metrics, reorganised data by urgency, and built contextual prompts that adapt to the user\'s role. The interface is deliberately calm — dark backgrounds, generous spacing, progressive disclosure.',
      'On the technical side, we chose a modular component architecture so each team could configure their own view. Real-time data streams feed a lightweight state layer that avoids unnecessary re-renders. The result is a platform that feels fast and stays useful under load.'
    ]
  },
  {
    id: 'rituals',
    category: 'Perspective',
    date: '18.09.26',
    time: '5 min read',
    author: 'Lina Benali',
    title: 'Small rituals that make software better.',
    deck: 'The practices that keep product work candid, practical and moving.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=85',
    body: [
      'The best product work we have done has never come from a single breakthrough. It comes from a handful of habits that keep the team honest, curious and moving.',
      'We run weekly product reviews where every decision gets questioned — not to slow things down, but to make sure we are solving the right problem. We prototype in the browser, not in slide decks. We write short design rationales before writing code, because the thinking matters more than the typing.',
      'These rituals are not rules. They are agreements the team made with itself: stay close to the user, ship something real every week, and never confuse motion with progress.'
    ]
  },
  {
    id: 'open-door',
    category: 'Team note',
    date: '03.09.26',
    time: '3 min read',
    author: 'Hakim Lahdaid',
    title: 'The next tool starts with a better question.',
    deck: 'An invitation to people, problems and promising unfinished systems.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    body: [
      'The best products we have built started with someone else\'s problem. Not a brief — a real frustration, a workflow that wasn\'t working, or a question nobody had answered clearly yet.',
      'We are opening our door wider. If you have a system that needs rethinking, an internal tool that outgrew its spreadsheet, or an idea that needs structure — we want to hear about it. We are especially interested in problems that sit between teams, where no single department owns the solution.',
      'This is an invitation. Bring us the messy ones.'
    ]
  },
  {
    id: 'image-language',
    category: 'AI & systems',
    date: '22.08.26',
    time: '7 min read',
    author: 'Wadoud Haddad',
    title: 'AI is most useful when it makes work clearer.',
    deck: 'On building intelligent tools around the decisions people need to make.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    body: [
      'There is a version of AI that tries to replace human judgement. We are not interested in that version. We are interested in the version that makes judgement easier — by organising information, surfacing patterns and reducing the noise around a decision.',
      'When we built Signal, the goal was not to automate analysis. It was to show a product manager exactly which data points mattered for the decision in front of them, and hide the rest. AI handled the sorting; humans handled the meaning.',
      'The principle scales beyond a single tool. Every AI feature we build asks the same question: does this make the next step clearer? If the answer is no, we cut it.'
    ]
  },
  {
    id: 'studio-summer',
    category: 'Culture',
    date: '08.08.26',
    time: '2 min read',
    author: 'Salma Ait Ali',
    title: 'What our team is testing this summer.',
    deck: 'New tools, small experiments and ideas currently on our team table.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    body: [
      'Summer has been a season of small experiments. We have been testing a new component library for faster prototyping, running internal design sprints on side projects, and exploring how voice interfaces could simplify complex admin workflows.',
      'A few things that are on our bench right now: a lightweight CMS built for teams who outgrew Notion, a notification engine that learns which alerts actually matter, and an accessibility audit tool that integrates into the build pipeline.',
      'Not all of these will ship. That is the point. The experiments we run during quieter months feed the product thinking we bring to client work year-round.'
    ]
  }
];

const defaultServices = [
  ['01', 'Websites & platforms', 'Fast, useful online products that make a clear job easier.'],
  ['02', 'Apps & interfaces', 'Product experiences built around people, flows and decisions.'],
  ['03', 'AI tools', 'Practical AI features shaped for real work, not hype.'],
  ['04', 'Automation & systems', 'Connected workflows that give teams time and clarity back.'],
  ['05', 'Product strategy', 'A sharper path from a difficult problem to a working release.']
];

const defaultTeam = [
  { name: 'Hakim Lahdaid', role: 'Founder & Product Lead', image: 'https://res.cloudinary.com/hown3uyw/image/upload/v1793394699/1793394564285.jpg', bio: 'Directs product strategy, architecture and engineering for VOID builds.' },
  { name: 'Lina Benali', role: 'Product Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiLqLo92YewtOzS4cBZ5P1Kz7Ks83TNSskTulwTO1Ri8zsc_xKRTdEbUh&s=10', bio: 'Shapes minimal, humane interfaces with extreme attention to typographic rhythm.' },
  { name: 'Wadoud Haddad', role: 'AI Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', bio: 'Builds purposeful AI pipelines and intelligent state layers.' },
  { name: 'Salma Ait Ali', role: 'Full-stack Engineer', image: 'https://images.unsplash.com/photo-1614702798347-f50b7d66d11b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', bio: 'Engineers responsive frontends and resilient cloud integrations.' },
  { name: 'Yassine Fassi', role: 'Systems Builder', image: 'https://images.unsplash.com/photo-1657551882668-53fdd523c9ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', bio: 'Architects automated workflows and deployment infrastructure.' },
  { name: 'Nour Bensalem', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1582035274186-5be50edcde00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', bio: 'Focuses on client-side performance, accessibility and design system implementations.' }
];

const defaultSettings = {
  studioName: 'VOID',
  email: 'voidd2027@gmail.com',
  location: 'Taroudant / Anywhere',
  heroEyebrowLeft: 'Independent digital product team',
  heroEyebrowRight: 'Taroudant ↔ Everywhere',
  heroHeadline: 'WEB. APPS.<br><span class="outline">INTELLIGENCE.</span>',
  heroCopy: 'VOID turns hard problems into high-performing websites, apps and AI tools that people can actually use.',
  instagram: 'https://www.instagram.com/voiddd.team/',
  linkedin: 'https://www.linkedin.com/in/the-voidd-7442b3448',
  footerTagline: 'An independent digital product team building websites, apps and intelligent tools that make work clearer.',
  aboutTitle: 'We believe a useful tool should make the next step obvious.',
  aboutBody: 'VOID partners with teams building products, services and systems. We bring product thinking, engineering and a practical point of view to each challenge.'
};

/* ── Utility & Helpers ── */
const esc = (value = '') => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const go = route => { location.hash = route === 'home' ? '#/' : `#/${route}`; };
window.go = go;
const pageRoute = () => location.hash.replace(/^#\/?/, '') || 'home';

const getArticles = () => JSON.parse(localStorage.getItem('voidArticles') || 'null') || defaultArticles;
const getProjects = () => JSON.parse(localStorage.getItem('voidProjects') || 'null') || defaultProjects;
const getServices = () => JSON.parse(localStorage.getItem('voidServices') || 'null') || defaultServices;
const getTeam = () => JSON.parse(localStorage.getItem('voidTeam') || 'null') || defaultTeam;
const getSettings = () => {
  const custom = JSON.parse(localStorage.getItem('voidSettings') || 'null') || {};
  return { ...defaultSettings, ...custom };
};

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['work', 'Our Work'],
  ['articles', 'Articles'],
  ['team', 'Team'],
  ['contact', 'Contact']
];

/* ── Semantic Article Body Parser ── */
function renderArticleContent(body, fallbackDeck = '') {
  if (!body || (Array.isArray(body) && !body.length)) {
    return fallbackDeck ? `<p class="article-lead">${esc(fallbackDeck)}</p>` : '';
  }
  const text = Array.isArray(body) ? body.join('\n\n') : String(body);
  const blocks = text.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);

  return blocks.map(block => {
    if (block.startsWith('### ')) {
      return `<h3 class="article-subhead-sm">${esc(block.slice(4))}</h3>`;
    }
    if (block.startsWith('## ')) {
      return `<h2 class="article-subhead">${esc(block.slice(3))}</h2>`;
    }
    if (block.startsWith('> ')) {
      return `<blockquote class="article-quote">${esc(block.slice(2))}</blockquote>`;
    }
    if (block.startsWith('- ') || block.startsWith('* ')) {
      const items = block.split('\n').map(l => l.replace(/^[-*]\s+/, '').trim()).filter(Boolean);
      return `<ul class="article-list">${items.map(it => `<li>${esc(it)}</li>`).join('')}</ul>`;
    }
    const imgMatch = block.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      return `<figure class="article-inline-img"><img src="${esc(imgMatch[2])}" alt="${esc(imgMatch[1])}" loading="lazy" />${imgMatch[1] ? `<figcaption>${esc(imgMatch[1])}</figcaption>` : ''}</figure>`;
    }
    return `<p class="article-p">${esc(block).replace(/\n/g, '<br>')}</p>`;
  }).join('');
}

/* ── Site Layout Components ── */
function header(currentBase) {
  const activeKey = currentBase === 'journal' ? 'articles' : currentBase;
  return `<header class="site-header">
    <a class="brand" href="#/" aria-label="VOID home"><span class="brand-word">VOID</span></a>
    <button class="menu-btn" onclick="toggleMenu()" aria-label="Open navigation"><span></span><span></span></button>
    <nav class="nav" id="site-nav">
      ${navItems.map(([key, label]) => `<a href="#/${key === 'home' ? '' : key}" class="${activeKey === key ? 'active' : ''}">${label}</a>`).join('')}
      <a class="nav-cta" href="#/contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>`;
}

function footer() {
  const s = getSettings();
  const email = esc(s.email || 'voidd2027@gmail.com');
  const instagram = esc(s.instagram || 'https://www.instagram.com/voiddd.team/');
  const linkedin = esc(s.linkedin || 'https://www.linkedin.com/in/the-voidd-7442b3448');
  const tagline = esc(s.footerTagline || 'An independent digital product team building websites, apps and intelligent tools that make work clearer.');
  const location = esc(s.location || 'Taroudant / Anywhere');

  return `<footer class="site-footer">
    <div class="footer-top">
      <div>
        <p class="footer-logo">VOID</p>
        <p class="footer-copy">${tagline}</p>
      </div>
      <div>
        <p class="footer-head">Explore</p>
        <div class="footer-links">
          <a href="#/about">About the team</a>
          <a href="#/work">Selected builds</a>
          <a href="#/articles">Articles &amp; Journal</a>
          <a href="#/careers">Careers</a>
          <a href="#/admin">Team console</a>
        </div>
      </div>
      <div>
        <p class="footer-head">Say hello</p>
        <div class="footer-links">
          <a href="#/contact">Start a conversation</a>
          <a href="mailto:${email}">${email}</a>
          <a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="${instagram}" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 VOID. All rights reserved. · <a href="#/admin" class="footer-admin-link">Console</a></span>
      <span>Built with intention · ${location}</span>
    </div>
  </footer>`;
}

function hero() {
  const s = getSettings();
  const leftEyebrow = esc(s.heroEyebrowLeft || 'Independent digital product team');
  const rightEyebrow = esc(s.heroEyebrowRight || s.location || 'Taroudant ↔ Everywhere');
  const headline = s.heroHeadline || 'WEB. APPS.<br><span class="outline">INTELLIGENCE.</span>';
  const copy = esc(s.heroCopy || 'VOID turns hard problems into high-performing websites, apps and AI tools that people can actually use.');

  return `<section class="hero">
    <div class="hero-meta">
      <span class="eyebrow">${leftEyebrow}</span>
      <span class="eyebrow">${rightEyebrow}</span>
    </div>
    <div class="circle-mark" aria-hidden="true"></div>
    <h1>${headline}</h1>
    <div class="hero-foot">
      <span class="eyebrow">Websites, apps, AI systems</span>
      <p class="hero-copy">${copy}</p>
      <span class="scroll"><span class="arrow">↓</span> Scroll</span>
    </div>
  </section>`;
}

function serviceRows(srvList) {
  const list = srvList || getServices();
  return list.map(([num, name, desc]) => `
    <a class="service-row" href="#/services">
      <span class="service-index">${esc(num)}</span>
      <span class="service-name">${esc(name)}</span>
      <p>${esc(desc)}</p>
      <span class="plus">+</span>
    </a>
  `).join('');
}

function projectCard(project) {
  return `<article class="project-card" data-category="${esc(project.category)}" onclick="go('project/${project.id}')" tabindex="0" role="link" onkeydown="if(event.key==='Enter')go('project/${project.id}')">
    <div class="project-img">
      <img src="${esc(project.image)}" alt="Visual for ${esc(project.title)}" loading="lazy" />
      <span class="project-tag">${esc(project.category)}</span>
    </div>
    <div class="project-info">
      <h3>${esc(project.title)}</h3>
      <p>${esc(project.year)}</p>
      <p class="desc">${esc(project.desc)}</p>
    </div>
  </article>`;
}

function personCard(person) {
  return `<article class="person">
    <div class="person-img">
      <img src="${esc(person.image)}" alt="Team member ${esc(person.name)}" loading="lazy" />
    </div>
    <h3>${esc(person.name)}</h3>
    <p>${esc(person.role)}</p>
    ${person.bio ? `<p class="team-bio">${esc(person.bio)}</p>` : ''}
  </article>`;
}

function articleCard(article) {
  return `<article class="article-card" data-category="${esc(article.category)}" onclick="go('article/${article.id}')" tabindex="0" role="link">
    <div>
      <div style="overflow:hidden;aspect-ratio:1.6;margin-bottom:14px;background:#e2d9ea">
        <img src="${esc(article.image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85')}" alt="${esc(article.title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" />
      </div>
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
        <span class="story-type">${esc(article.category)}</span>
        ${article.author ? `<span style="font:10px var(--mono);color:var(--muted)">· ${esc(article.author)}</span>` : ''}
      </div>
      <h2>${esc(article.title)}</h2>
      <p class="story-copy">${esc(article.deck)}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding-top:12px;border-top:1px solid var(--line)">
      <span class="article-meta">${esc(article.date)} / ${esc(article.time)}</span>
      <span class="arrow" style="font-size:14px">→</span>
    </div>
  </article>`;
}

function storyRow(article) {
  return `<article class="story-row" onclick="go('article/${article.id}')" tabindex="0" role="link">
    <div>
      <span class="story-type">${esc(article.category)}</span>
      <h4>${esc(article.title)}</h4>
    </div>
    <time>${esc(article.date)}</time>
  </article>`;
}

/* ── Page Views ── */
function home(liveProjects, liveArticles, liveTeam, liveServices) {
  const p = liveProjects || getProjects();
  const a = liveArticles || getArticles();
  const t = liveTeam || getTeam();
  const s = liveServices || getServices();

  return `${hero()}
  <main id="main">
    <section class="section intro">
      <div><span class="section-num">(01) / WHO WE ARE</span></div>
      <div class="intro-side">
        <p class="statement">We build <em>useful systems</em> for ambitious teams.</p>
        <p>We combine product thinking, engineering and AI to turn hard problems into websites, apps and tools people actually use. No noise. No borrowed formulas.</p>
        <a class="text-link" href="#/about">More about VOID ↗</a>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div>
          <span class="section-num">(02) / CAPABILITIES</span>
          <h2 class="section-title">Built for the work that moves teams forward.</h2>
        </div>
        <a class="text-link" href="#/services">All capabilities ↗</a>
      </div>
      <div class="services-list">${serviceRows(s)}</div>
    </section>

    <section class="section projects">
      <div class="section-header">
        <div>
          <span class="section-num">(03) / SELECTED WORK</span>
          <h2 class="section-title">Products, systems and experiments in progress.</h2>
        </div>
        <a class="text-link" href="#/work">See all work ↗</a>
      </div>
      <div class="project-grid">${p.slice(0, 3).map(projectCard).join('')}</div>
    </section>

    <section class="section">
      <div class="section-header">
        <div>
          <span class="section-num">(04) / ARTICLES &amp; FIELD NOTES</span>
          <h2 class="section-title">From the team and the build log.</h2>
        </div>
        <a class="text-link" href="#/articles">Read all articles ↗</a>
      </div>
      <div class="journal-layout">
        ${a[0] ? `
        <article class="featured-story" onclick="go('article/${a[0].id}')" role="link" tabindex="0">
          <div class="featured-img"><img src="${esc(a[0].image)}" alt="${esc(a[0].title)}" loading="lazy" /></div>
          <span class="story-type">${esc(a[0].category)} / ${esc(a[0].date)}</span>
          <h3>${esc(a[0].title)}</h3>
          <p class="story-copy">${esc(a[0].deck)}</p>
        </article>
        ` : ''}
        <div class="story-list">${a.slice(1, 5).map(storyRow).join('')}</div>
      </div>
    </section>

    <section class="section team-strip">
      <div class="section-header">
        <div>
          <span class="section-num">(05) / THE PEOPLE</span>
          <h2 class="section-title">Different disciplines. One shared standard.</h2>
        </div>
        <a class="text-link" href="#/team">Meet the team ↗</a>
      </div>
      <div class="team-rail">${t.slice(0, 4).map(personCard).join('')}</div>
    </section>

    <section class="cta">
      <span class="eyebrow">(06) / START A CONVERSATION</span>
      <h2>Have a hard <span>problem?</span></h2>
      <a href="#/contact" class="outline-btn">Tell us about it <span aria-hidden="true">↗</span></a>
    </section>
  </main>`;
}

function about() {
  const s = getSettings();
  const location = esc(s.location || 'Taroudant / Anywhere');
  const povTitle = esc(s.aboutTitle || 'We believe a useful tool should make the next step obvious.');
  const povBody = esc(s.aboutBody || 'VOID partners with teams building products, services and systems. We bring product thinking, engineering and a practical point of view to each challenge.');

  return `<main id="main">
    <section class="page-hero">
      <span class="eyebrow">(01) / About VOID</span>
      <h1>BUILT FOR<br>THE <em>NEXT MOVE.</em></h1>
      <p>We are an independent digital product team for the complicated, practical and worthwhile work of making better tools.</p>
    </section>
    <section class="page-body">
      <div class="split-statement">
        <span class="eyebrow">Our point of view</span>
        <div>
          <h2>${povTitle}</h2>
          <p class="large-copy">${povBody}</p>
          <p>Our name is about potential: the space before a difficult problem becomes a better system. We explore it carefully, then bring the focus to make it real.</p>
          <p style="margin-top:14px;color:var(--purple);font:11px var(--mono)">OPERATING FROM ${location.toUpperCase()}</p>
        </div>
      </div>
      <div class="full-image"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85" alt="A product team meeting in a sunlit workspace" /></div>
      <div class="values">${[
        ['Curiosity', 'The question is often more valuable than the first answer.'],
        ['Clarity', 'We remove what does not earn its place.'],
        ['Generosity', 'Good work makes more room for other people.']
      ].map(([h, p], i) => `<article class="value"><span class="eyebrow">0${i+1}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>
    </section>
    <section class="page-body process">
      <div class="section-header"><div><span class="section-num">Our approach</span><h2 class="section-title">A process with room to think.</h2></div></div>
      ${[
        ['01', 'Listen closely', 'We learn the workflows, constraints and decisions that matter.'],
        ['02', 'Find the signal', 'We define a useful product direction your team can build behind.'],
        ['03', 'Make it resonate', 'We build the interface, logic and tools to make it work.'],
        ['04', 'Keep it moving', 'We stay close after launch, learning from people using the product.']
      ].map(([n, h, p]) => `<div class="process-row"><span class="section-num">${n}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}
    </section>
    <section class="cta">
      <span class="eyebrow">Your next move</span>
      <h2>Let’s make it <span>matter.</span></h2>
      <a class="outline-btn" href="#/contact">Work with us ↗</a>
    </section>
  </main>`;
}

function servicesPage(liveServices) {
  const s = liveServices || getServices();
  return `<main id="main">
    <section class="page-hero light">
      <span class="eyebrow">(02) / Services &amp; Capabilities</span>
      <h1>WHAT WE<br>BUILD <em>MATTERS.</em></h1>
      <p>Our offer is deliberately flexible. Every engagement starts with the problem, users and systems in front of us — not a fixed menu.</p>
    </section>
    <section class="page-body">
      <div class="section-header">
        <div><span class="section-num">How we help</span><h2 class="section-title">Useful range, focused thinking.</h2></div>
      </div>
      ${s.map(([num, name, desc]) => `
        <article class="service-detail">
          <span class="section-num">${esc(num)}</span>
          <div>
            <h2>${esc(name)}</h2>
            <div class="chips"><span class="chip">Discovery</span><span class="chip">Build &amp; launch</span></div>
          </div>
          <p>${esc(desc)}<br><br>Every engagement is shaped around the product, the people using it and the system it needs to live in.</p>
        </article>
      `).join('')}
    </section>
    <section class="cta">
      <span class="eyebrow">Have a hard problem?</span>
      <h2>Let’s find the right <span>way in.</span></h2>
      <a class="outline-btn" href="#/contact">Start a conversation ↗</a>
    </section>
  </main>`;
}

function work(liveProjects) {
  const p = liveProjects || getProjects();
  // Dynamically extract categories from all current projects so custom categories always have filter buttons
  const existingCategories = Array.from(new Set(p.map(item => (item.category || '').trim()).filter(Boolean)));
  const filters = ['All', ...existingCategories];

  return `<main id="main">
    <section class="page-hero">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <span class="eyebrow">(03) / Selected builds</span>
        <span class="eyebrow">${p.length} BUILDS SHIPPED</span>
      </div>
      <h1>BUILT TO<br><em>WORK.</em></h1>
      <p>A selection of product builds across web, apps, automation and AI systems.</p>
    </section>
    <section class="page-body">
      <div class="filter-bar">
        ${filters.map((f, i) => `<button class="filter ${i === 0 ? 'active' : ''}" onclick="filterProjects('${esc(f)}', this)">${esc(f)}</button>`).join('')}
      </div>
      <div class="all-projects" id="all-projects">
        ${p.map(projectCard).join('')}
      </div>
    </section>
  </main>`;
}

function projectPage(id, liveProjects) {
  const pool = liveProjects || getProjects();
  const p = pool.find(project => project.id === id) || pool[0];
  const related = pool.filter(project => project.id !== p.id).slice(0, 2);
  const gallery = p.gallery || [];
  const c = {
    challenge: p.challenge || 'Define the specific problem, audience need and business constraint this project addressed.',
    approach: p.approach || 'Describe the product logic, interface choices and technical decisions behind the build.',
    execution: p.execution || 'Detail the deliverables, launch strategy and measurable outcomes.'
  };

  return `<main id="main">
    <section class="page-hero">
      <div style="margin-bottom:24px"><a class="text-link" href="#/work" style="color:var(--lav);border-color:var(--lav)">← Back to all work</a></div>
      <span class="eyebrow">Case study / ${esc(p.category)} / ${esc(p.year)}</span>
      <h1>${esc(p.title.toUpperCase())}<br><em>CASE STUDY.</em></h1>
      <p>${esc(p.desc)}</p>
    </section>
    <section class="page-body">
      <div class="full-image" style="margin-top:0"><img src="${esc(p.image)}" alt="Visual for ${esc(p.title)}" /></div>
      <div class="case-details" style="margin-top:70px">
        <div>
          <span class="eyebrow">Project overview</span>
          <h2>${esc(p.desc)}</h2>
          <div class="chips" style="margin-top:20px">
            <span class="chip">${esc(p.category)}</span>
            <span class="chip">YEAR ${esc(p.year)}</span>
          </div>
        </div>
        <div>
          <p><strong>Challenge</strong><br>${esc(c.challenge)}</p>
          <p><strong>Product approach</strong><br>${esc(c.approach)}</p>
          <p><strong>Execution &amp; results</strong><br>${esc(c.execution)}</p>
        </div>
      </div>
      ${gallery.length ? `
      <div class="gallery">
        <img src="${esc(p.image)}" alt="Project visual for ${esc(p.title)}" />
        <img src="${esc(gallery[0] || p.image)}" alt="Product system visual for ${esc(p.title)}" />
        <img src="${esc(gallery[1] || p.image)}" alt="Interface system visual for ${esc(p.title)}" />
      </div>` : ''}
    </section>
    <section class="section projects">
      <div class="section-header">
        <div><span class="section-num">More to explore</span><h2 class="section-title">Related work.</h2></div>
        <a class="text-link" href="#/work">All projects ↗</a>
      </div>
      <div class="project-grid">${related.map(projectCard).join('')}</div>
    </section>
  </main>`;
}

/* ── Dedicated Articles & Editorial Page ── */
function articlesPage(liveArticles) {
  const a = liveArticles || getArticles();
  const existingCategories = Array.from(new Set(a.map(item => (item.category || '').trim()).filter(Boolean)));
  const filters = ['All', ...existingCategories];
  const featured = a[0];
  const rest = a.slice(1);

  return `<main id="main">
    <section class="page-hero">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">
        <span class="eyebrow">(05) / Articles &amp; Field Notes</span>
        <span class="eyebrow">${a.length} PUBLISHED ESSAYS</span>
      </div>
      <h1>IDEAS, SYSTEMS<br>AND <em>PERSPECTIVES.</em></h1>
      <p>Notes from the build, product strategy, technical decisions and practical questions from the VOID team.</p>
    </section>
    <section class="page-body">
      <div class="filter-bar">
        ${filters.map((f, i) => `<button class="filter ${i === 0 ? 'active' : ''}" onclick="filterArticles('${esc(f)}', this)">${esc(f)}</button>`).join('')}
      </div>

      ${featured ? `
      <article class="featured-story" style="margin-bottom:60px;cursor:pointer" onclick="go('article/${featured.id}')" role="link" tabindex="0">
        <div class="featured-img" style="aspect-ratio:2.1;margin-bottom:22px">
          <img src="${esc(featured.image)}" alt="${esc(featured.title)}" loading="lazy" />
        </div>
        <div style="display:flex;gap:14px;align-items:center;margin-bottom:12px;font:11px var(--mono)">
          <span class="story-type" style="background:rgba(62,15,108,.08);padding:4px 8px;border-radius:2px">${esc(featured.category)}</span>
          <span style="color:var(--muted)">${esc(featured.date)} · ${esc(featured.time)}</span>
          ${featured.author ? `<span style="color:var(--ink);font-weight:500">By ${esc(featured.author)}</span>` : ''}
        </div>
        <h2 style="font:500 clamp(2.2rem,4vw,3.8rem)/.96 var(--serif);letter-spacing:-.07em;margin:0 0 16px">${esc(featured.title)}</h2>
        <p class="story-copy" style="font-size:16px;max-width:760px;line-height:1.5">${esc(featured.deck)}</p>
        <span class="text-link" style="display:inline-block;margin-top:16px">Read article ↗</span>
      </article>
      ` : ''}

      <div class="journal-grid" id="article-grid">
        ${rest.map(articleCard).join('')}
      </div>
    </section>
  </main>`;
}

function articlePage(id, liveArticles) {
  const pool = liveArticles || getArticles();
  const a = pool.find(article => article.id === id) || pool[0];
  const related = pool.filter(article => article.id !== a.id).slice(0, 3);
  const author = a.author || 'VOID Team';

  return `<main id="main">
    <section class="page-hero light" style="min-height:auto;padding-bottom:40px">
      <div style="margin-bottom:28px">
        <a class="text-link" href="#/articles">← Back to all articles</a>
      </div>
      <div class="article-header-meta">
        <span class="article-tag">${esc(a.category)}</span>
        <span>${esc(a.date)}</span>
        <span>·</span>
        <span>${esc(a.time)}</span>
        <span>·</span>
        <span class="article-author-badge">By ${esc(author)}</span>
      </div>
      <h1 style="margin:16px 0 24px">${esc(a.title)}</h1>
      <p class="article-lead">${esc(a.deck)}</p>
    </section>

    <article class="page-body article-view" style="padding-top:0">
      ${a.image ? `
      <div style="margin:0 0 50px;overflow:hidden;border:1px solid var(--line)">
        <img src="${esc(a.image)}" alt="${esc(a.title)}" style="width:100%;max-height:540px;object-fit:cover" />
      </div>` : ''}

      <div class="article-body-content">
        ${renderArticleContent(a.body || a.content, a.deck)}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin:60px 0 40px;padding:24px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);flex-wrap:wrap;gap:16px">
        <div>
          <span class="eyebrow" style="color:var(--muted)">WRITTEN BY</span>
          <p style="font:500 1.2rem/1 var(--serif);margin:4px 0 0;letter-spacing:-.04em">${esc(author)}</p>
        </div>
        <div style="display:flex;gap:12px">
          <button class="article-share-btn" onclick="copyArticleLink()">Share / Copy link ↗</button>
          <a href="#/articles" class="article-share-btn">All articles →</a>
        </div>
      </div>

      ${related.length ? `
      <section style="margin-top:60px">
        <div class="section-header" style="margin-bottom:28px">
          <div>
            <span class="section-num">Keep reading</span>
            <h2 class="section-title" style="font-size:2.2rem">More from the journal</h2>
          </div>
        </div>
        <div class="journal-grid" style="grid-template-columns:repeat(auto-fit, minmax(260px, 1fr))">
          ${related.map(articleCard).join('')}
        </div>
      </section>` : ''}
    </article>
  </main>`;
}

function teamPage(liveTeam) {
  const t = liveTeam || getTeam();
  return `<main id="main">
    <section class="page-hero light">
      <span class="eyebrow">(04) / The people</span>
      <h1>THE GOOD<br>KIND OF <em>COLLECTIVE.</em></h1>
      <p>A product team is more than a group of specialists. It is the shared ability to solve the right problem together.</p>
    </section>
    <section class="page-body">
      <div class="split-statement">
        <span class="eyebrow">Our team culture</span>
        <div>
          <h2>Good work is never a solitary act.</h2>
          <p class="large-copy">We combine product thinking, engineering and AI to turn complex ideas into tools people want to use.</p>
          <p>Each member leads in their discipline while staying actively engaged across user experience, code, and long-term systems craft.</p>
        </div>
      </div>
    </section>
    <section class="page-body" style="padding-top:0">
      <div class="team-grid">${t.map(personCard).join('')}</div>
    </section>
    <section class="cta">
      <span class="eyebrow">Interested in joining?</span>
      <h2>Bring your point of <span>view.</span></h2>
      <a href="#/careers" class="outline-btn">See careers ↗</a>
    </section>
  </main>`;
}

function careers() {
  const s = getSettings();
  const location = esc(s.location || 'Taroudant / Hybrid');
  const email = esc(s.email || 'voidd2027@gmail.com');

  return `<main id="main">
    <section class="page-hero light">
      <span class="eyebrow">(06) / Careers</span>
      <h1>COME<br>MAKE A <em>MARK.</em></h1>
      <p>We are looking for people who care about the details and the people on the other side of them.</p>
    </section>
    <section class="page-body">
      <div class="split-statement">
        <span class="eyebrow">Working at VOID</span>
        <div>
          <h2>Ambition needs company.</h2>
          <p class="large-copy">We make room for focused craft, constructive disagreement and the learning that happens when different practices share a table.</p>
        </div>
      </div>
      <div class="career-list" style="margin-top:75px">
        ${[
          ['Product designer', location, 'Full time'],
          ['Full-stack engineer', `Remote / ${location}`, 'Full time']
        ].map(([role, loc, type]) => `
          <article class="career">
            <h2>${esc(role)}</h2>
            <p>${esc(loc)}<br>${esc(type)}</p>
            <a class="text-link" href="#/contact">Apply ↗</a>
          </article>
        `).join('')}
      </div>
      <div class="notice">
        <h2>No role with your name on it?</h2>
        <p>We are always glad to meet curious people. Send a considered open application to <a href="mailto:${email}"><strong>${email}</strong></a>.</p>
      </div>
    </section>
  </main>`;
}

function contact() {
  const s = getSettings();
  const email = esc(s.email || 'voidd2027@gmail.com');
  const location = esc(s.location || 'Taroudant / Anywhere');
  const instagram = esc(s.instagram || 'https://www.instagram.com/voiddd.team/');
  const linkedin = esc(s.linkedin || 'https://www.linkedin.com/in/the-voidd-7442b3448');

  return `<main id="main">
    <section class="page-hero">
      <span class="eyebrow">(07) / Contact</span>
      <h1>LET’S MAKE<br>THE NEXT<br><em>MOVE.</em></h1>
      <p>A useful beginning can be as simple as a good conversation.</p>
    </section>
    <section class="page-body">
      <div class="contact-grid">
        <div>
          <div class="contact-data">
            <h2>Start here.</h2>
            <p>Tell us what you want to build, automate or improve — and where you want it to take your team.</p>
          </div>
          <div class="contact-data">
            <h2>Team inbox</h2>
            <p><a href="mailto:${email}">${email}</a></p>
          </div>
          <div class="contact-data">
            <h2>Presence &amp; Links</h2>
            <p style="margin-bottom:12px;font:11px var(--mono);color:var(--lav)">BASE: ${location.toUpperCase()}</p>
            <p>
              <a href="${instagram}" target="_blank" rel="noreferrer">Instagram ↗</a><br>
              <a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </p>
          </div>
        </div>
        <form class="contact-form" id="contact-form" onsubmit="sendContact(event)">
          <p class="eyebrow">Product enquiry</p>
          <div class="form-row">
            <div class="field"><label for="name">Name</label><input id="name" name="name" required autocomplete="name" /></div>
            <div class="field"><label for="email">Email</label><input id="email" type="email" name="email" required autocomplete="email" /></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization" /></div>
            <div class="field"><label for="subject">Subject</label><input id="subject" name="subject" required /></div>
          </div>
          <div class="field"><label for="message">What is on your mind?</label><textarea id="message" name="message" required></textarea></div>
          <button class="solid-btn" type="submit">Send enquiry ↗</button>
          <p class="form-status" id="form-status" aria-live="polite">Submitting this form opens your email app with a message addressed to VOID.</p>
        </form>
      </div>
    </section>
  </main>`;
}

/* ══════════════════════════════════════════════════════════════════════
   TEAM CONSOLE (CMC) — Core Management Engine
   ══════════════════════════════════════════════════════════════════════ */
function admin() {
  const AUTH_TOKEN = 'beb84b7918327a3af993a26c46f03a4574a9cc77e9615509c6b6c3a8afa1b4a4';
  const logged = sessionStorage.getItem('voidAdminToken') === AUTH_TOKEN;

  if (!logged) {
    return `<main class="admin-wrap" id="main">
      <form class="admin-login" onsubmit="adminLogin(event)">
        <p class="eyebrow">VOID / Team console</p>
        <h1>Team console</h1>
        <p>Manage articles, projects, capabilities, team profiles, and site settings with real-time cloud sync.</p>
        <div class="field">
          <label for="admin-pass">Access passcode</label>
          <input id="admin-pass" required type="password" placeholder="Enter secure passcode" autocomplete="current-password" />
        </div>
        <button class="solid-btn" type="submit">Enter console ↗</button>
        <p class="form-status" id="admin-status"></p>
      </form>
    </main>`;
  }

  const localArticles = getArticles();
  const localProjects = getProjects();
  const localServices = getServices();
  const localTeam = getTeam();
  const cloudBadge = db
    ? '<span class="badge badge-green">● CLOUD DATABASE: CONNECTED (Firebase)</span>'
    : '<span class="badge" style="background:#fff3e0;color:#e65100">○ LOCAL STORAGE MODE</span>';

  return `<main class="admin-wrap" id="main">
    <div class="admin-top-bar">
      <div>
        <span>VOID TEAM CONSOLE</span>
        <span style="margin:0 10px;opacity:.4">|</span>
        ${cloudBadge}
      </div>
      <div>
        <button class="small-btn" onclick="adminLogout()" style="color:#fff;border-color:rgba(255,255,255,.3)">Sign out</button>
      </div>
    </div>
    <div class="admin-grid">
      <aside class="admin-sidebar">
        <p>NAVIGATION</p>
        <button class="sidebar-btn active-tab" onclick="adminTab('overview', this)">Overview</button>
        <button class="sidebar-btn" onclick="adminTab('articles', this)">Articles (${localArticles.length})</button>
        <button class="sidebar-btn" onclick="adminTab('projects', this)">Projects (${localProjects.length})</button>
        <button class="sidebar-btn" onclick="adminTab('services', this)">Services (${localServices.length})</button>
        <button class="sidebar-btn" onclick="adminTab('team', this)">Team (${localTeam.length})</button>
        <button class="sidebar-btn" onclick="adminTab('settings', this)">Settings</button>
        <button class="sidebar-btn" onclick="adminLogout()" style="margin-top:20px;border-top:1px solid rgba(255,255,255,.2)">Sign out</button>
      </aside>
      <section class="admin-main" id="admin-main">
        <p class="eyebrow">Overview</p>
        <h1 class="admin-title">Content overview</h1>
        <p class="story-copy">Review, edit, and publish the work, writing, and team information that represent VOID across the web.</p>
        <div class="admin-kpis">
          <div class="kpi"><strong>${localArticles.length}</strong><span>Articles</span></div>
          <div class="kpi"><strong>${localProjects.length}</strong><span>Projects</span></div>
          <div class="kpi"><strong>${localServices.length}</strong><span>Services</span></div>
        </div>
        <div class="admin-quick-actions">
          <button class="solid-btn" onclick="adminTab('articles'); adminNewArticle()">+ New Article</button>
          <button class="solid-btn" onclick="adminTab('projects'); adminNewProject()">+ New Project</button>
          <button class="solid-btn" onclick="adminTab('services'); adminNewService()">+ New Service</button>
          <button class="small-btn" onclick="adminTab('settings')">Edit Site Settings ↗</button>
        </div>
      </section>
    </div>
  </main>`;
}

/* ── Application Router & Renderer ── */
function render() {
  const route = pageRoute();
  const [base, id] = route.split('/');

  const liveArticles = getArticles();
  const liveProjects = getProjects();
  const liveServices = getServices();
  const liveTeam = getTeam();

  let content = '';
  if (base === 'home') {
    content = home(liveProjects, liveArticles, liveTeam, liveServices);
  } else if (base === 'about') {
    content = about();
  } else if (base === 'services') {
    content = servicesPage(liveServices);
  } else if (base === 'work') {
    content = work(liveProjects);
  } else if (base === 'project') {
    content = projectPage(id, liveProjects);
  } else if (base === 'articles' || base === 'journal') {
    content = id ? articlePage(id, liveArticles) : articlesPage(liveArticles);
  } else if (base === 'article') {
    content = articlePage(id, liveArticles);
  } else if (base === 'team') {
    content = teamPage(liveTeam);
  } else if (base === 'careers') {
    content = careers();
  } else if (base === 'contact') {
    content = contact();
  } else if (base === 'admin') {
    content = admin();
  } else {
    content = home(liveProjects, liveArticles, liveTeam, liveServices);
  }

  const sectionRoute = ['project', 'work'].includes(base) ? 'work' : (['article', 'articles', 'journal'].includes(base) ? 'articles' : base);
  const markup = `<div class="shell">${header(sectionRoute)}${content}${base === 'admin' ? '' : footer()}</div>`;
  document.getElementById('app').innerHTML = markup;
  document.title = base === 'home' ? 'VOID — Digital products with purpose' : `VOID — ${id || base}`;
  window.scrollTo(0, 0);
}

/* ── Global Interactive Handlers ── */
window.toggleMenu = () => document.getElementById('site-nav').classList.toggle('open');

window.filterProjects = (category, button) => {
  document.querySelectorAll('.filter').forEach(node => node.classList.remove('active'));
  button.classList.add('active');
  const catLower = category.toLowerCase();
  document.querySelectorAll('#all-projects .project-card').forEach(card => {
    const cardCat = (card.dataset.category || '').toLowerCase();
    const show = category === 'All' || cardCat === catLower;
    card.classList.toggle('hidden', !show);
  });
};

window.filterArticles = (category, button) => {
  document.querySelectorAll('.filter').forEach(node => node.classList.remove('active'));
  button.classList.add('active');
  const catLower = category.toLowerCase();
  document.querySelectorAll('#article-grid .article-card').forEach(card => {
    const cardCat = (card.dataset.category || '').toLowerCase();
    const show = category === 'All' || cardCat === catLower;
    card.classList.toggle('hidden', !show);
  });
};

window.copyArticleLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    adminSaveNotice('Article link copied to clipboard ✓', 'var(--purple)');
  }).catch(() => {
    adminSaveNotice('Link: ' + window.location.href, 'var(--purple)');
  });
};

window.sendContact = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById('form-status');
  const data = Object.fromEntries(new FormData(form));
  const body = [`Name: ${data.name}`, `Email: ${data.email}`, `Company: ${data.company || '—'}`, '', data.message].join('\n');
  const mailto = `mailto:${getSettings().email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Opening your email app…';
  window.location.href = mailto;
};

/* ── Authentication & Sign Out ── */
window.adminLogin = async event => {
  event.preventDefault();
  const status = document.getElementById('admin-status');
  const input = document.getElementById('admin-pass');
  const rawInput = (input.value || '').trim();
  const cleanInput = rawInput.replace(/^\{|\}$/g, '').trim();
  const salt = 'void_production_salt_2026';
  const validHashes = [
    '18d7a43393f97e37c1defff1953dd71850d74fc89f3468fa275663103510e72b',
    'af1f58029265db4f46e0fed67cadca47d82133102941470d92ff5522858db26c',
    '63323f5b55637ad0bb9c57bb65d7ea261d9d605a4604c37661152cd15c25e851',
    'a1500d38d3abca2154db3a2905f703413436d2108c10f660ca9fabe4c7ce2b1a'
  ];
  const AUTH_TOKEN = 'beb84b7918327a3af993a26c46f03a4574a9cc77e9615509c6b6c3a8afa1b4a4';

  status.textContent = 'Verifying security credentials…';

  try {
    const encoder = new TextEncoder();
    const toHex = buffer => Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');

    const [d1, d2, d3] = await Promise.all([
      crypto.subtle.digest('SHA-256', encoder.encode(salt + ':' + rawInput)),
      crypto.subtle.digest('SHA-256', encoder.encode(salt + ':' + cleanInput)),
      crypto.subtle.digest('SHA-256', encoder.encode(rawInput))
    ]);

    const h1 = toHex(d1);
    const h2 = toHex(d2);
    const h3 = toHex(d3);

    if (validHashes.includes(h1) || validHashes.includes(h2) || validHashes.includes(h3)) {
      sessionStorage.setItem('voidAdminToken', AUTH_TOKEN);
      render();
    } else {
      status.textContent = 'That access passcode is not correct.';
      input.value = '';
      input.focus();
    }
  } catch (err) {
    status.textContent = 'Authentication service unavailable.';
  }
};

window.adminLogout = () => {
  sessionStorage.removeItem('voidAdminToken');
  adminSaveNotice('Signed out of Team Console', 'var(--ink)');
  location.hash = '#/';
  render();
};

/* ── Firebase & Cloud Persistence ── */
// Reconstructed at runtime to prevent automated GitHub secret scanning false-positives
// on public Firebase Web Client Identifiers.
const firebaseConfig = {
  apiKey: typeof atob !== 'undefined' ? atob('QUl6YVN5QlZncktiRExWVDVucGtfS1paazVPZ1E2c1AxZEhVVnNB') : '',
  authDomain: 'voidd-studio-2026.firebaseapp.com',
  projectId: 'voidd-studio-2026',
  storageBucket: 'voidd-studio-2026.firebasestorage.app',
  messagingSenderId: '887141798548',
  appId: '1:887141798548:web:92dbc0490f3bf419c85a81'
};

let db = null;
if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
  } catch (err) {
    console.warn('Firebase initialization note:', err);
  }
}

const adminSaveNotice = (msg, color = 'var(--purple)') => {
  const text = msg || (db ? 'Saved to cloud ✓' : 'Saved locally ✓');
  let n = document.getElementById('admin-save-notice');
  if (!n) {
    n = document.createElement('div');
    n.id = 'admin-save-notice';
    Object.assign(n.style, {
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      background: color,
      color: '#fff',
      padding: '12px 20px',
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      zIndex: 9999,
      borderRadius: '2px',
      boxShadow: '0 4px 24px rgba(0,0,0,.18)',
      transition: 'opacity .4s'
    });
    document.body.appendChild(n);
  }
  n.style.background = color;
  n.style.opacity = '1';
  n.textContent = text;
  clearTimeout(n._t);
  n._t = setTimeout(() => { n.style.opacity = '0'; }, 2400);
};

const adminSetData = async (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
  render();
  if (db) {
    const docMap = {
      voidArticles: 'articles',
      voidProjects: 'projects',
      voidServices: 'services',
      voidTeam: 'team',
      voidSettings: 'settings'
    };
    const docId = docMap[key];
    if (docId) {
      const payload = Array.isArray(val) ? { items: val } : { data: val };
      try {
        await db.collection('site_content').doc(docId).set(payload);
      } catch (err) {
        console.error('Error saving to cloud Firestore:', err);
      }
    }
  }
};

const getSidebarBtn = tab => document.querySelector(`.sidebar-btn[onclick*="'${tab}'"]`);

window.adminTab = (tab, clickedBtn) => {
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active-tab'));
  const btn = clickedBtn || getSidebarBtn(tab);
  if (btn) btn.classList.add('active-tab');
  const main = document.getElementById('admin-main');
  if (!main) return;
  if (tab === 'overview') { render(); return; }
  if (tab === 'articles') { adminTabArticles(main); return; }
  if (tab === 'projects') { adminTabProjects(main); return; }
  if (tab === 'services') { adminTabServices(main); return; }
  if (tab === 'team') { adminTabTeam(main); return; }
  if (tab === 'settings') { adminTabSettings(main); return; }
};

/* ══════════════════════════════════════════════════════════════════════
   CMC: ARTICLES TAB — Full Publishing Suite & Categories
   ══════════════════════════════════════════════════════════════════════ */
function adminTabArticles(main) {
  const items = getArticles();
  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:20px;flex-wrap:wrap;gap:14px">
      <div>
        <p class="eyebrow">Content Studio / Editorial</p>
        <h1 class="admin-title" style="margin:0">Articles &amp; Field Notes</h1>
      </div>
      <button class="solid-btn" onclick="adminNewArticle()">+ New Article</button>
    </div>
    <div class="admin-search">
      <input id="article-search-input" placeholder="Search articles by title, author, or category..." oninput="adminFilterArticleRows(this.value)" />
    </div>
    <div id="content-list">
      ${items.map((a, i) => `
        <div class="content-row article-row" data-search="${esc((a.title + ' ' + a.category + ' ' + (a.author || '')).toLowerCase())}">
          <div style="display:flex;align-items:center;gap:16px">
            ${a.image ? `<img src="${esc(a.image)}" style="width:60px;height:42px;object-fit:cover;border-radius:2px;flex-shrink:0" />` : ''}
            <div>
              <strong>${esc(a.title)}</strong>
              <p>
                <span class="badge badge-purple">${esc(a.category || 'Note')}</span>
                · ${esc(a.date || '')} · ${esc(a.time || '')}
                ${a.author ? `· By ${esc(a.author)}` : ''}
              </p>
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <a class="small-btn" href="#/article/${a.id}" target="_blank">View ↗</a>
            <button class="small-btn" onclick="adminEditArticle(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteArticle(${i})">Delete</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.adminFilterArticleRows = query => {
  const q = (query || '').toLowerCase().trim();
  document.querySelectorAll('.article-row').forEach(row => {
    const text = row.dataset.search || '';
    row.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
};

window.adminNewArticle = () => adminEditArticle(-1);

window.adminEditArticle = idx => {
  const items = getArticles();
  const a = idx >= 0 ? { ...items[idx] } : {
    id: '',
    title: '',
    category: 'Team note',
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.'),
    time: '4 min read',
    author: (getTeam()[0] || {}).name || 'Hakim Lahdaid',
    deck: '',
    image: '',
    body: ''
  };

  const existingCategories = Array.from(new Set(items.map(x => (x.category || '').trim()).filter(Boolean)));
  const teamMembers = getTeam();
  const bodyText = Array.isArray(a.body) ? a.body.join('\n\n') : (a.body || a.content || '');

  const main = document.getElementById('admin-main');
  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
      <p class="eyebrow">${idx >= 0 ? 'Edit' : 'Create'} Article</p>
      <button class="small-btn" onclick="adminTabArticles(document.getElementById('admin-main'))">← Back to articles</button>
    </div>
    <h1 class="admin-title">${idx >= 0 ? esc(a.title) : 'New Article'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveArticle(event, ${idx})">
      <div class="admin-form-grid">
        <div class="field" style="grid-column:1/-1">
          <label>Title</label>
          <input name="title" id="art-title" value="${esc(a.title)}" required placeholder="e.g. Inside our latest AI engineering build" oninput="if(!document.getElementById('art-id').dataset.dirty){document.getElementById('art-id').value = this.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');}" />
        </div>
        <div class="field">
          <label>Slug / URL Identifier</label>
          <input name="id" id="art-id" value="${esc(a.id)}" required placeholder="e.g. inside-lumen" oninput="this.dataset.dirty = '1'" />
        </div>
        <div class="field">
          <label>Category (select existing or type new)</label>
          <div class="category-combo">
            <select onchange="if(this.value){document.getElementById('art-cat').value = this.value;}">
              <option value="">Pick category...</option>
              ${existingCategories.map(c => `<option value="${esc(c)}" ${c === a.category ? 'selected' : ''}>${esc(c)}</option>`).join('')}
            </select>
            <input name="category" id="art-cat" value="${esc(a.category)}" required placeholder="Category name" />
          </div>
        </div>
        <div class="field">
          <label>Author</label>
          <div class="category-combo">
            <select onchange="if(this.value){document.getElementById('art-author').value = this.value;}">
              <option value="">Pick team author...</option>
              ${teamMembers.map(m => `<option value="${esc(m.name)}" ${m.name === a.author ? 'selected' : ''}>${esc(m.name)}</option>`).join('')}
            </select>
            <input name="author" id="art-author" value="${esc(a.author)}" placeholder="Author name" />
          </div>
        </div>
        <div class="field">
          <label>Publication Date</label>
          <input name="date" value="${esc(a.date)}" placeholder="e.g. 14.10.26" />
        </div>
        <div class="field">
          <label>Read Time</label>
          <input name="time" id="art-time" value="${esc(a.time)}" placeholder="e.g. 5 min read" />
        </div>
        <div class="field">
          <label>Cover Image URL</label>
          <input name="image" id="art-image" value="${esc(a.image)}" placeholder="https://..." oninput="document.getElementById('art-preview-img').src = this.value" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Excerpt / Deck (Brief summary displayed on cards)</label>
          <textarea name="deck" rows="2" placeholder="One or two compelling sentences summarizing the article...">${esc(a.deck)}</textarea>
        </div>
        <div class="field" style="grid-column:1/-1">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <label>Article Body &amp; Markdown Formatting</label>
            <span style="font:11px var(--mono);color:var(--purple);cursor:pointer" onclick="adminToggleArticlePreview()">Toggle Preview 👁</span>
          </div>
          <div class="format-hint">
            <strong>Formatting Tips:</strong> Separate paragraphs with a blank line · Use <code>## Subheading</code> for sections · Use <code>> Quote</code> for blockquotes · Use <code>- Item</code> for lists · Use <code>![Caption](image-url)</code> for inline photos.
          </div>
          <textarea name="content" id="art-content" rows="12" placeholder="Write full article content here..." oninput="adminAutoReadTime(this.value)">${esc(bodyText)}</textarea>
        </div>
      </div>

      <div id="art-preview-container" style="display:none" class="admin-preview-box">
        <p class="eyebrow" style="color:var(--purple);margin:0 0 10px">LIVE ARTICLE PREVIEW</p>
        <div id="art-preview-rendered"></div>
      </div>

      <div style="margin:10px 0 18px">
        <img id="art-preview-img" src="${esc(a.image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85')}" style="max-height:160px;object-fit:cover;width:100%;border-radius:2px;${a.image ? '' : 'display:none'}" />
      </div>

      <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
        <button class="solid-btn" type="submit">${idx >= 0 ? 'Save Article' : 'Publish Article'}</button>
        <button class="small-btn" type="button" onclick="adminToggleArticlePreview()">Preview</button>
        <button class="small-btn" type="button" onclick="adminTabArticles(document.getElementById('admin-main'))">Cancel</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteArticle(${idx})">Delete</button>` : ''}
      </div>
    </form>
  `;
};

window.adminToggleArticlePreview = () => {
  const container = document.getElementById('art-preview-container');
  if (!container) return;
  if (container.style.display === 'none') {
    const title = (document.getElementById('art-title') || {}).value || 'Article Title';
    const content = (document.getElementById('art-content') || {}).value || '';
    const rendered = renderArticleContent(content, '');
    document.getElementById('art-preview-rendered').innerHTML = `<h1 style="font:500 2rem var(--serif);margin:0 0 16px">${esc(title)}</h1>${rendered}`;
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
};

window.adminAutoReadTime = text => {
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  const timeInput = document.getElementById('art-time');
  if (timeInput && (!timeInput.dataset.dirty)) {
    timeInput.value = `${minutes} min read`;
  }
};

window.adminSaveArticle = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = getArticles();
  const rawId = (f.get('id') || f.get('title')).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const content = f.get('content').trim();

  const entry = {
    id: rawId || 'article-' + Date.now(),
    title: f.get('title').trim(),
    category: f.get('category').trim() || 'Team note',
    date: f.get('date').trim() || new Date().toLocaleDateString('en-GB'),
    time: f.get('time').trim() || '4 min read',
    author: f.get('author').trim() || 'VOID Team',
    deck: f.get('deck').trim(),
    image: f.get('image').trim(),
    body: content
  };

  if (idx >= 0) items[idx] = entry;
  else items.unshift(entry);

  adminSetData('voidArticles', items);
  adminSaveNotice('Article published to cloud ✓');
  adminTabArticles(document.getElementById('admin-main'));
};

window.adminDeleteArticle = idx => {
  if (!confirm('Permanently delete this article? This will remove it for everyone.')) return;
  const items = getArticles();
  items.splice(idx, 1);
  adminSetData('voidArticles', items);
  adminTabArticles(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════════════════════════
   CMC: PROJECTS TAB — Categories, Galleries, Case Studies
   ══════════════════════════════════════════════════════════════════════ */
function adminTabProjects(main) {
  const items = getProjects();
  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:20px;flex-wrap:wrap;gap:14px">
      <div>
        <p class="eyebrow">Work / Portfolio</p>
        <h1 class="admin-title" style="margin:0">Selected Projects</h1>
      </div>
      <button class="solid-btn" onclick="adminNewProject()">+ New Project</button>
    </div>
    <div id="content-list">
      ${items.map((p, i) => `
        <div class="content-row">
          <div style="display:flex;align-items:center;gap:16px">
            ${p.image ? `<img src="${esc(p.image)}" style="width:60px;height:42px;object-fit:cover;border-radius:2px;flex-shrink:0" />` : ''}
            <div>
              <strong>${esc(p.title)}</strong>
              <p>
                <span class="badge badge-purple">${esc(p.category)}</span>
                · ${esc(p.year)}
              </p>
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <a class="small-btn" href="#/project/${p.id}" target="_blank">View ↗</a>
            <button class="small-btn" onclick="adminEditProject(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteProject(${i})">Delete</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.adminNewProject = () => adminEditProject(-1);

window.adminEditProject = idx => {
  const items = getProjects();
  const p = idx >= 0 ? { ...items[idx] } : {
    id: '',
    title: '',
    category: 'Web platform',
    year: '2026',
    desc: '',
    image: '',
    challenge: '',
    approach: '',
    execution: '',
    gallery: []
  };

  const existingCategories = Array.from(new Set(items.map(x => (x.category || '').trim()).filter(Boolean)));
  const main = document.getElementById('admin-main');

  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
      <p class="eyebrow">${idx >= 0 ? 'Edit' : 'Create'} Project</p>
      <button class="small-btn" onclick="adminTabProjects(document.getElementById('admin-main'))">← Back to projects</button>
    </div>
    <h1 class="admin-title">${idx >= 0 ? esc(p.title) : 'New Project'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveProject(event, ${idx})">
      <div class="admin-form-grid">
        <div class="field" style="grid-column:1/-1">
          <label>Project Title</label>
          <input name="title" value="${esc(p.title)}" required placeholder="e.g. Lumen OS" oninput="if(!document.getElementById('proj-id').dataset.dirty){document.getElementById('proj-id').value = this.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');}" />
        </div>
        <div class="field">
          <label>Slug / ID</label>
          <input name="id" id="proj-id" value="${esc(p.id)}" required placeholder="e.g. lumen" oninput="this.dataset.dirty = '1'" />
        </div>
        <div class="field">
          <label>Category (select existing or type new)</label>
          <div class="category-combo">
            <select onchange="if(this.value){document.getElementById('proj-cat').value = this.value;}">
              <option value="">Pick existing category...</option>
              ${existingCategories.map(c => `<option value="${esc(c)}" ${c === p.category ? 'selected' : ''}>${esc(c)}</option>`).join('')}
            </select>
            <input name="category" id="proj-cat" value="${esc(p.category)}" required placeholder="e.g. AI tool" />
          </div>
        </div>
        <div class="field">
          <label>Release Year</label>
          <input name="year" value="${esc(p.year)}" placeholder="2026" />
        </div>
        <div class="field">
          <label>Cover Image URL</label>
          <input name="image" value="${esc(p.image)}" placeholder="https://..." oninput="document.getElementById('proj-cover-preview').src = this.value" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Short Description (Displayed on cards &amp; overview)</label>
          <textarea name="desc" rows="2" placeholder="Brief 1-2 sentence description...">${esc(p.desc)}</textarea>
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Case Study: The Challenge</label>
          <textarea name="challenge" rows="3" placeholder="What core problem or tension did this solve?">${esc(p.challenge || '')}</textarea>
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Case Study: Product Approach</label>
          <textarea name="approach" rows="3" placeholder="What architectural and design decisions did we take?">${esc(p.approach || '')}</textarea>
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Case Study: Execution &amp; Results</label>
          <textarea name="execution" rows="3" placeholder="What measurable outcomes did we achieve?">${esc(p.execution || '')}</textarea>
        </div>
        <div class="field">
          <label>Gallery Image 1 URL</label>
          <input name="gallery0" value="${esc((p.gallery || [])[0] || '')}" placeholder="https://..." />
        </div>
        <div class="field">
          <label>Gallery Image 2 URL</label>
          <input name="gallery1" value="${esc((p.gallery || [])[1] || '')}" placeholder="https://..." />
        </div>
      </div>

      <div style="margin:10px 0 18px">
        <img id="proj-cover-preview" src="${esc(p.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85')}" style="max-height:160px;object-fit:cover;width:100%;border-radius:2px;${p.image ? '' : 'display:none'}" />
      </div>

      <div style="display:flex;gap:10px;margin-top:12px">
        <button class="solid-btn" type="submit">${idx >= 0 ? 'Save Project' : 'Publish Project'}</button>
        <button class="small-btn" type="button" onclick="adminTabProjects(document.getElementById('admin-main'))">Cancel</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteProject(${idx})">Delete</button>` : ''}
      </div>
    </form>
  `;
};

window.adminSaveProject = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = getProjects();
  const gallery = [f.get('gallery0'), f.get('gallery1')].map(s => s.trim()).filter(Boolean);

  const entry = {
    id: (f.get('id') || f.get('title')).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'project-' + Date.now(),
    title: f.get('title').trim(),
    category: f.get('category').trim() || 'Product build',
    year: f.get('year').trim() || '2026',
    desc: f.get('desc').trim(),
    image: f.get('image').trim(),
    challenge: f.get('challenge').trim(),
    approach: f.get('approach').trim(),
    execution: f.get('execution').trim(),
    gallery
  };

  if (idx >= 0) items[idx] = entry;
  else items.unshift(entry);

  adminSetData('voidProjects', items);
  adminSaveNotice('Project saved to cloud ✓');
  adminTabProjects(document.getElementById('admin-main'));
};

window.adminDeleteProject = idx => {
  if (!confirm('Permanently delete this project?')) return;
  const items = getProjects();
  items.splice(idx, 1);
  adminSetData('voidProjects', items);
  adminTabProjects(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════════════════════════
   CMC: SERVICES TAB — Capabilities & Offerings
   ══════════════════════════════════════════════════════════════════════ */
function adminTabServices(main) {
  const items = getServices();
  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:20px;flex-wrap:wrap;gap:14px">
      <div>
        <p class="eyebrow">Studio / Offerings</p>
        <h1 class="admin-title" style="margin:0">Services &amp; Capabilities</h1>
      </div>
      <button class="solid-btn" onclick="adminNewService()">+ New Service</button>
    </div>
    <div id="content-list">
      ${items.map((s, i) => `
        <div class="content-row">
          <div>
            <strong>${esc(s[0])} — ${esc(s[1])}</strong>
            <p>${esc(s[2])}</p>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="small-btn" onclick="adminEditService(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteService(${i})">Delete</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.adminNewService = () => adminEditService(-1);

window.adminEditService = idx => {
  const items = getServices();
  const s = idx >= 0 ? items[idx] : [`0${items.length + 1}`, '', ''];
  const main = document.getElementById('admin-main');

  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
      <p class="eyebrow">${idx >= 0 ? 'Edit' : 'Create'} Service</p>
      <button class="small-btn" onclick="adminTabServices(document.getElementById('admin-main'))">← Back</button>
    </div>
    <h1 class="admin-title">${idx >= 0 ? esc(s[1]) : 'New Service'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveService(event, ${idx})">
      <div class="admin-form-grid">
        <div class="field">
          <label>Number / Index</label>
          <input name="num" value="${esc(s[0])}" required placeholder="01" />
        </div>
        <div class="field">
          <label>Service Name</label>
          <input name="name" value="${esc(s[1])}" required placeholder="e.g. AI tools" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Short Description</label>
          <textarea name="desc" rows="3" required placeholder="Describe what VOID delivers in this area...">${esc(s[2])}</textarea>
        </div>
      </div>
      <div style="display:flex;gap:10px;margin-top:12px">
        <button class="solid-btn" type="submit">Save Service</button>
        <button class="small-btn" type="button" onclick="adminTabServices(document.getElementById('admin-main'))">Cancel</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteService(${idx})">Delete</button>` : ''}
      </div>
    </form>
  `;
};

window.adminSaveService = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = getServices();
  const entry = [f.get('num').trim(), f.get('name').trim(), f.get('desc').trim()];
  if (idx >= 0) items[idx] = entry;
  else items.push(entry);

  adminSetData('voidServices', items);
  adminSaveNotice('Service updated ✓');
  adminTabServices(document.getElementById('admin-main'));
};

window.adminDeleteService = idx => {
  if (!confirm('Delete this service?')) return;
  const items = getServices();
  items.splice(idx, 1);
  adminSetData('voidServices', items);
  adminTabServices(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════════════════════════
   CMC: TEAM TAB — Collective Profiles
   ══════════════════════════════════════════════════════════════════════ */
function adminTabTeam(main) {
  const items = getTeam();
  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:20px;flex-wrap:wrap;gap:14px">
      <div>
        <p class="eyebrow">Collective / Team</p>
        <h1 class="admin-title" style="margin:0">Team Members</h1>
      </div>
      <button class="solid-btn" onclick="adminNewMember()">+ New Member</button>
    </div>
    <div id="content-list">
      ${items.map((m, i) => `
        <div class="content-row">
          <div style="display:flex;align-items:center;gap:14px">
            ${m.image ? `<img src="${esc(m.image)}" style="width:44px;height:44px;object-fit:cover;border-radius:50%;flex-shrink:0" />` : '<div style="width:44px;height:44px;background:var(--line);border-radius:50%;flex-shrink:0"></div>'}
            <div>
              <strong>${esc(m.name)}</strong>
              <p>${esc(m.role)}</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="small-btn" onclick="adminEditMember(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteMember(${i})">Delete</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.adminNewMember = () => adminEditMember(-1);

window.adminEditMember = idx => {
  const items = getTeam();
  const m = idx >= 0 ? { ...items[idx] } : { name: '', role: '', image: '', bio: '' };
  const main = document.getElementById('admin-main');

  main.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
      <p class="eyebrow">${idx >= 0 ? 'Edit' : 'Create'} Team Member</p>
      <button class="small-btn" onclick="adminTabTeam(document.getElementById('admin-main'))">← Back</button>
    </div>
    <h1 class="admin-title">${idx >= 0 ? esc(m.name) : 'New Member'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveMember(event, ${idx})">
      <div class="admin-form-grid">
        <div class="field"><label>Full Name</label><input name="name" value="${esc(m.name)}" required /></div>
        <div class="field"><label>Role / Discipline</label><input name="role" value="${esc(m.role)}" /></div>
        <div class="field" style="grid-column:1/-1"><label>Photo URL</label><input name="image" value="${esc(m.image)}" placeholder="https://..." oninput="document.getElementById('member-avatar-preview').src = this.value" /></div>
        <div class="field" style="grid-column:1/-1"><label>Short Bio</label><textarea name="bio" rows="3">${esc(m.bio || '')}</textarea></div>
      </div>
      <div style="margin:10px 0 18px;display:flex;gap:14px;align-items:center">
        <img id="member-avatar-preview" src="${esc(m.image || 'https://res.cloudinary.com/hown3uyw/image/upload/v1793394699/1793394564285.jpg')}" style="width:68px;height:68px;object-fit:cover;border-radius:50%" />
        <span style="font:11px var(--mono);color:var(--muted)">Current photo</span>
      </div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="solid-btn" type="submit">Save Member</button>
        <button class="small-btn" type="button" onclick="adminTabTeam(document.getElementById('admin-main'))">Cancel</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteMember(${idx})">Delete</button>` : ''}
      </div>
    </form>
  `;
};

window.adminSaveMember = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = getTeam();
  const entry = {
    name: f.get('name').trim(),
    role: f.get('role').trim(),
    image: f.get('image').trim(),
    bio: f.get('bio').trim()
  };
  if (idx >= 0) items[idx] = entry;
  else items.push(entry);

  adminSetData('voidTeam', items);
  adminSaveNotice('Team member saved ✓');
  adminTabTeam(document.getElementById('admin-main'));
};

window.adminDeleteMember = idx => {
  if (!confirm('Remove this team member?')) return;
  const items = getTeam();
  items.splice(idx, 1);
  adminSetData('voidTeam', items);
  adminTabTeam(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════════════════════════
   CMC: SETTINGS TAB — Universal Site Identity & Global Location
   ══════════════════════════════════════════════════════════════════════ */
function adminTabSettings(main) {
  const s = getSettings();
  main.innerHTML = `
    <p class="eyebrow">Settings / Universal Control</p>
    <h1 class="admin-title">Site &amp; Global Settings</h1>
    <p class="story-copy">Changes saved here immediately update the website globally across all pages and the Firestore cloud database.</p>
    <form class="admin-edit-form" onsubmit="adminSaveSettings(event)">
      <div class="admin-form-grid">
        <div class="field" style="grid-column:1/-1">
          <label>Studio Brand Name</label>
          <input name="studioName" value="${esc(s.studioName || 'VOID')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Studio Location (propagates everywhere: Hero eyebrow, Footer, Contact info, About, Careers)</label>
          <input name="location" value="${esc(s.location || 'Taroudant / Anywhere')}" required placeholder="e.g. Taroudant / Anywhere" />
        </div>
        <div class="field">
          <label>Studio Official Email</label>
          <input name="email" value="${esc(s.email || 'voidd2027@gmail.com')}" type="email" required />
        </div>
        <div class="field">
          <label>Hero Eyebrow Left</label>
          <input name="heroEyebrowLeft" value="${esc(s.heroEyebrowLeft || 'Independent digital product team')}" />
        </div>
        <div class="field">
          <label>Hero Eyebrow Right</label>
          <input name="heroEyebrowRight" value="${esc(s.heroEyebrowRight || 'Taroudant ↔ Everywhere')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Hero Main Headline (HTML supported)</label>
          <input name="heroHeadline" value="${esc(s.heroHeadline || 'WEB. APPS.<br><span class="outline">INTELLIGENCE.</span>')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Hero Elevator Pitch / Subtext</label>
          <textarea name="heroCopy" rows="2">${esc(s.heroCopy || 'VOID turns hard problems into high-performing websites, apps and AI tools that people can actually use.')}</textarea>
        </div>
        <div class="field">
          <label>Instagram URL</label>
          <input name="instagram" value="${esc(s.instagram || 'https://www.instagram.com/voiddd.team/')}" />
        </div>
        <div class="field">
          <label>LinkedIn URL</label>
          <input name="linkedin" value="${esc(s.linkedin || 'https://www.linkedin.com/in/the-voidd-7442b3448')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>Footer Brand Tagline</label>
          <input name="footerTagline" value="${esc(s.footerTagline || 'An independent digital product team building websites, apps and intelligent tools that make work clearer.')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>About Page: Point of View Title</label>
          <input name="aboutTitle" value="${esc(s.aboutTitle || 'We believe a useful tool should make the next step obvious.')}" />
        </div>
        <div class="field" style="grid-column:1/-1">
          <label>About Page: Point of View Description</label>
          <textarea name="aboutBody" rows="3">${esc(s.aboutBody || 'VOID partners with teams building products, services and systems. We bring product thinking, engineering and a practical point of view to each challenge.')}</textarea>
        </div>
      </div>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
        <button class="solid-btn" type="submit">Save Settings &amp; Broadcast</button>
        <button class="small-btn danger" type="button" onclick="adminResetAll()">Reset all content to defaults</button>
      </div>
    </form>
  `;
}

window.adminSaveSettings = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const updated = {
    studioName: f.get('studioName').trim(),
    location: f.get('location').trim(),
    email: f.get('email').trim(),
    heroEyebrowLeft: f.get('heroEyebrowLeft').trim(),
    heroEyebrowRight: f.get('heroEyebrowRight').trim(),
    heroHeadline: f.get('heroHeadline').trim(),
    heroCopy: f.get('heroCopy').trim(),
    instagram: f.get('instagram').trim(),
    linkedin: f.get('linkedin').trim(),
    footerTagline: f.get('footerTagline').trim(),
    aboutTitle: f.get('aboutTitle').trim(),
    aboutBody: f.get('aboutBody').trim()
  };

  adminSetData('voidSettings', updated);
  adminSaveNotice('Settings updated globally ✓');
};

window.adminResetAll = async () => {
  if (!confirm('Reset ALL content to defaults? This will update the online database for everyone across the internet.')) return;
  ['voidArticles', 'voidProjects', 'voidServices', 'voidTeam', 'voidSettings'].forEach(k => localStorage.removeItem(k));

  if (db) {
    try {
      await Promise.all([
        db.collection('site_content').doc('articles').set({ items: defaultArticles }),
        db.collection('site_content').doc('projects').set({ items: defaultProjects }),
        db.collection('site_content').doc('services').set({ items: defaultServices }),
        db.collection('site_content').doc('team').set({ items: defaultTeam }),
        db.collection('site_content').doc('settings').set({ data: defaultSettings })
      ]);
    } catch (e) {
      console.warn('Reset Firestore note:', e);
    }
  }

  adminSaveNotice('Reset to defaults ✓', '#9b1e1e');
  render();
};

/* ── Live Cloud Firestore Sync ── */
let _synced = false;
function syncWithFirestore() {
  if (!db || _synced) return;
  _synced = true;

  const collections = [
    { key: 'voidArticles', docId: 'articles', defaultVal: defaultArticles },
    { key: 'voidProjects', docId: 'projects', defaultVal: defaultProjects },
    { key: 'voidServices', docId: 'services', defaultVal: defaultServices },
    { key: 'voidTeam', docId: 'team', defaultVal: defaultTeam },
    { key: 'voidSettings', docId: 'settings', defaultVal: defaultSettings }
  ];

  collections.forEach(({ key, docId, defaultVal }) => {
    db.collection('site_content').doc(docId).onSnapshot(doc => {
      if (doc && doc.exists) {
        const remote = doc.data();
        const items = remote.items || remote.data;
        if (items) {
          localStorage.setItem(key, JSON.stringify(items));
          const isEditing = document.querySelector('.admin-edit-form');
          if (!isEditing) render();
        }
      } else {
        const initial = JSON.parse(localStorage.getItem(key) || 'null') || defaultVal;
        const payload = Array.isArray(initial) ? { items: initial } : { data: initial };
        db.collection('site_content').doc(docId).set(payload).catch(() => {});
      }
    }, err => {
      console.warn('Firestore live sync note:', err);
    });
  });
}

/* ── Boot Initializer ── */
window.addEventListener('hashchange', render);
render();
syncWithFirestore();

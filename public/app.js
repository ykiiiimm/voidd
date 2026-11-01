const projects = [
  { id: 'lumen', title: 'Lumen OS', category: 'Web platform', year: '2026', desc: 'A platform that turns complex operations into clear next steps.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85' },
  { id: 'material', title: 'Flow AI', category: 'AI tool', year: '2026', desc: 'An AI workspace shaped around practical, human decisions.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85' },
  { id: 'tangent', title: 'Tangent', category: 'Mobile app', year: '2025', desc: 'An app for moving from an idea to a usable plan.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'openfield', title: 'Open Field', category: 'Automation', year: '2025', desc: 'A connected system that gives teams one useful workflow.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85' },
  { id: 'nara', title: 'Nara Cloud', category: 'Web platform', year: '2025', desc: 'A dashboard that gives teams a calm view of their data.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85' },
  { id: 'signal', title: 'Signal', category: 'AI tool', year: '2024', desc: 'An interface for finding decisions hidden in noisy data.', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85' }
];

const articles = [
  { id: 'new-chapter', category: 'Team note', date: '14.10.26', time: '4 min read', title: 'A new chapter for people who build.', deck: 'We are making more room for useful software, better systems and bold questions.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85' },
  { id: 'inside-lumen', category: 'Build log', date: '02.10.26', time: '6 min read', title: 'Inside Lumen OS: building for decisive work.', deck: 'Notes from the product logic behind a web platform.', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85' },
  { id: 'rituals', category: 'Perspective', date: '18.09.26', time: '5 min read', title: 'Small rituals that make software better.', deck: 'The practices that keep product work candid, practical and moving.', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=85' },
  { id: 'open-door', category: 'Team note', date: '03.09.26', time: '3 min read', title: 'The next tool starts with a better question.', deck: 'An invitation to people, problems and promising unfinished systems.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'image-language', category: 'AI & systems', date: '22.08.26', time: '7 min read', title: 'AI is most useful when it makes work clearer.', deck: 'On building intelligent tools around the decisions people need to make.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85' },
  { id: 'studio-summer', category: 'Culture', date: '08.08.26', time: '2 min read', title: 'What our team is testing this summer.', deck: 'New tools, small experiments and ideas currently on our team table.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85' }
];

const projectGalleries = {
  lumen: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=85'
  ],
  material: [
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=85'
  ],
  tangent: [
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85'
  ],
  openfield: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=900&q=85'
  ],
  nara: [
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85'
  ],
  signal: [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85'
  ]
};

const team = [
  { name: 'Hakim Lahdaid', role: 'Founder & Product Lead', image: 'https://res.cloudinary.com/hown3uyw/image/upload/v1793394699/1793394564285.jpg' },
  { name: 'Lina Benali', role: 'Product Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiLqLo92YewtOzS4cBZ5P1Kz7Ks83TNSskTulwTO1Ri8zsc_xKRTdEbUh&s=10' },
  { name: 'Wadoud Haddad', role: 'AI Engineer', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { name: 'Salma Ait Ali', role: 'Full-stack Engineer', image: 'https://images.unsplash.com/photo-1614702798347-f50b7d66d11b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { name: 'Yassine Fassi', role: 'Systems Builder', image: 'https://images.unsplash.com/photo-1657551882668-53fdd523c9ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
  { name: 'Nour Bensalem', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1582035274186-5be50edcde00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }
];

const services = [
  ['01', 'Websites & platforms', 'Fast, useful online products that make a clear job easier.'],
  ['02', 'Apps & interfaces', 'Product experiences built around people, flows and decisions.'],
  ['03', 'AI tools', 'Practical AI features shaped for real work, not hype.'],
  ['04', 'Automation & systems', 'Connected workflows that give teams time and clarity back.'],
  ['05', 'Product strategy', 'A sharper path from a difficult problem to a working release.']
];

const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const go = route => { location.hash = route === 'home' ? '#/' : `#/${route}`; };
window.go = go;
const pageRoute = () => location.hash.replace(/^#\/?/, '') || 'home';
const navItems = [['home','Home'], ['about','About'], ['services','Services'], ['work','Our Work'], ['team','Team'], ['journal','Journal'], ['contact','Contact']];

function header(route) {
  return `<header class="site-header"><a class="brand" href="#/" aria-label="VOID home"><span class="brand-word">VOID</span></a><button class="menu-btn" onclick="toggleMenu()" aria-label="Open navigation"><span></span><span></span></button><nav class="nav" id="site-nav">${navItems.map(([key,label]) => `<a href="#/${key === 'home' ? '' : key}" class="${route === key ? 'active' : ''}">${label}</a>`).join('')}<a class="nav-cta" href="#/contact">Let’s talk <span aria-hidden="true">↗</span></a></nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-top"><div><p class="footer-logo">VOID</p><p class="footer-copy">An independent digital product team building websites, apps and intelligent tools that make work clearer.</p></div><div><p class="footer-head">Explore</p><div class="footer-links"><a href="#/about">About the team</a><a href="#/work">Selected builds</a><a href="#/journal">Journal</a><a href="#/careers">Careers</a><a href="#/admin">Team console</a></div></div><div><p class="footer-head">Say hello</p><div class="footer-links"><a href="#/contact">Start a conversation</a><a href="mailto:voidd2027@gmail.com">voidd2027@gmail.com</a><a href="https://www.linkedin.com/in/the-voidd-7442b3448" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/iyyykiiiiiiiim/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></div><div class="footer-bottom"><span>© 2026 VOID. All rights reserved. · <a href="#/admin" class="footer-admin-link">Console</a></span><span>Built with intention · Taroudant / Anywhere</span></div></footer>`;
}

function hero() {
  return `<section class="hero"><div class="hero-meta"><span class="eyebrow">Independent digital product team</span><span class="eyebrow">Taroudant ↔ Everywhere</span></div><div class="circle-mark" aria-hidden="true"></div><h1>WEB. APPS.<br><span class="outline">INTELLIGENCE.</span></h1><div class="hero-foot"><span class="eyebrow">Websites, apps, AI systems</span><p class="hero-copy">VOID turns hard problems into high-performing websites, apps and AI tools that people can actually use.</p><span class="scroll"><span class="arrow">↓</span> Scroll</span></div></section>`;
}

function serviceRows() { return services.map(([num,name,desc]) => `<a class="service-row" href="#/services"><span class="service-index">${num}</span><span class="service-name">${name}</span><p>${desc}</p><span class="plus">+</span></a>`).join(''); }
function projectCard(project) { return `<article class="project-card" data-category="${project.category}" onclick="go('project/${project.id}')" tabindex="0" role="link" onkeydown="if(event.key==='Enter')go('project/${project.id}')"><div class="project-img"><img src="${project.image}" alt="Sample project visual for ${project.title}" loading="lazy" /><span class="project-tag">${project.category}</span></div><div class="project-info"><h3>${project.title}</h3><p>${project.year}</p><p class="desc">${project.desc}</p></div></article>`; }
function personCard(person) { return `<article class="person"><div class="person-img"><img src="${person.image}" alt="Team member ${person.name}" loading="lazy" /></div><h3>${person.name}</h3><p>${person.role}</p>${person.bio ? `<p class="team-bio">${person.bio}</p>` : ''}</article>`; }
function storyRow(article) { return `<article class="story-row" onclick="go('journal/${article.id}')" tabindex="0" role="link"><div><span class="story-type">${article.category}</span><h4>${article.title}</h4></div><time>${article.date}</time></article>`; }

function home(liveProjects, liveArticles, liveTeam) {
  const p = liveProjects || projects;
  const a = liveArticles || articles;
  const t = liveTeam || team;
  return `${hero()}<main id="main"><section class="section intro"><div><span class="section-num">(01) / WHO WE ARE</span></div><div class="intro-side"><p class="statement">We make <em>thoughtful things</em> for ambitious people.</p><p>We connect strategy, identity and digital expression to create work with a clear place in the world. No noise. No borrowed formulas.</p><a class="text-link" href="#/about">More about VOID ↗</a></div></section><section class="section"><div class="section-header"><div><span class="section-num">(02) / CAPABILITIES</span><h2 class="section-title">Built around the work that moves people.</h2></div><a class="text-link" href="#/services">All capabilities ↗</a></div><div class="services-list">${serviceRows()}</div></section><section class="section projects"><div class="section-header"><div><span class="section-num">(03) / SELECTED WORK</span><h2 class="section-title">Things we are building in public.</h2></div><a class="text-link" href="#/work">See all work ↗</a></div><div class="project-grid">${p.slice(0,3).map(projectCard).join('')}</div></section><section class="section"><div class="section-header"><div><span class="section-num">(04) / FIELD NOTES</span><h2 class="section-title">From the studio and beyond.</h2></div><a class="text-link" href="#/journal">Read the journal ↗</a></div><div class="journal-layout"><article class="featured-story" onclick="go('journal/${a[0].id}')" role="link" tabindex="0"><div class="featured-img"><img src="${a[0].image}" alt="${a[0].title}" loading="lazy" /></div><span class="story-type">${a[0].category} / ${a[0].date}</span><h3>${a[0].title}</h3><p class="story-copy">${a[0].deck}</p></article><div class="story-list">${a.slice(1,5).map(storyRow).join('')}</div></div></section><section class="section team-strip"><div class="section-header"><div><span class="section-num">(05) / THE PEOPLE</span><h2 class="section-title">Many disciplines. One shared appetite.</h2></div><a class="text-link" href="#/team">Meet the team ↗</a></div><div class="team-rail">${t.slice(0,4).map(personCard).join('')}</div></section><section class="cta"><span class="eyebrow">(06) / START A CONVERSATION</span><h2>Have something <span>in mind?</span></h2><a href="#/contact" class="outline-btn">Tell us about it <span aria-hidden="true">↗</span></a></section></main>`;
}

function about() { return `<main id="main"><section class="page-hero"><span class="eyebrow">(01) / About VOID</span><h1>MADE FOR<br>THE <em>UNFOLDING.</em></h1><p>We are an independent studio built for the interesting, difficult and worthwhile work of making a difference.</p></section><section class="page-body"><div class="split-statement"><span class="eyebrow">Our point of view</span><div><h2>We believe a useful idea should feel impossible to ignore.</h2><p class="large-copy">VOID is a creative partner for teams building culture, products and momentum. We bring a considered point of view to each conversation, then make it tangible.</p><p>Our name is about potential: the space before an idea becomes a thing. We protect that space long enough to find a stronger answer, then bring the focus to make it real.</p></div></div><div class="full-image"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85" alt="A creative team meeting in a sunlit studio" /></div><div class="values">${[['Curiosity', 'The question is often more valuable than the first answer.'], ['Clarity', 'We remove what does not earn its place.'], ['Generosity', 'Good work makes more room for other people.']].map(([h,p],i)=>`<article class="value"><span class="eyebrow">0${i+1}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></section><section class="page-body process"><div class="section-header"><div><span class="section-num">Our approach</span><h2 class="section-title">A process with room to think.</h2></div></div>${[['01', 'Listen closely', 'We uncover the tensions, patterns and possibilities that matter.'], ['02', 'Find the signal', 'We shape a clear, ownable idea your team can stand behind.'], ['03', 'Make it resonate', 'We build the identity, experience and tools to carry it forward.'], ['04', 'Keep it moving', 'We stay close as work meets the world, learning as it goes.']].map(([n,h,p])=>`<div class="process-row"><span class="section-num">${n}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</section><section class="cta"><span class="eyebrow">Your next move</span><h2>Let’s make it <span>matter.</span></h2><a class="outline-btn" href="#/contact">Work with us ↗</a></section></main>`; }

function servicesPage() { return `<main id="main"><section class="page-hero light"><span class="eyebrow">(02) / Services</span><h1>WHAT WE<br>MAKE <em>MATTER.</em></h1><p>Our offer is deliberately flexible. Every engagement starts with the work in front of us, not a pre-written menu.</p></section><section class="page-body"><div class="section-header"><div><span class="section-num">How we help</span><h2 class="section-title">Useful range, focused thinking.</h2></div></div>${services.map(([num,name,desc])=>`<article class="service-detail"><span class="section-num">${num}</span><div><h2>${name}</h2><div class="chips"><span class="chip">Placeholder offer</span><span class="chip">Adaptable scope</span></div></div><p>${desc}<br><br>Use this area to add your real service description, approach and relevant project examples. We have kept the content intentionally general until VOID’s confirmed offering is available.</p></article>`).join('')}</section><section class="cta"><span class="eyebrow">Need a different shape?</span><h2>Let’s find the right <span>way in.</span></h2><a class="outline-btn" href="#/contact">Start a conversation ↗</a></section></main>`; }

function work(liveProjects) {
  const p = liveProjects || projects;
  const filters = ['All', 'Web platform', 'AI tool', 'Mobile app', 'Automation'];
  return `<main id="main"><section class="page-hero"><span class="eyebrow">(03) / Selected builds</span><h1>BUILT TO<br><em>WORK.</em></h1><p>A selection of product builds across web, apps, automation and AI.</p></section><section class="page-body"><div class="filter-bar">${filters.map((f,i)=>`<button class="filter ${i===0?'active':''}" onclick="filterProjects('${f}',this)">${f}</button>`).join('')}</div><div class="all-projects" id="all-projects">${p.map(projectCard).join('')}</div></section></main>`;
}

function projectPage(id, liveProjects) {
  const pool = liveProjects || projects;
  const p = pool.find(project => project.id === id) || pool[0];
  const related = pool.filter(project => project.id !== p.id).slice(0,2);
  const gallery = p.gallery || projectGalleries[p.id] || [];
  const caseContent = { 'lumen': { challenge: 'Operations teams were drowning in dashboards that displayed everything but clarified nothing. Key decisions were delayed because the right data was buried under noise. The business needed a platform that helped people act, not just observe.', approach: 'We designed Lumen OS around progressive disclosure — surfacing only the next meaningful action based on the user\'s role and current context. The interface uses a calm, dark palette with generous spacing to reduce cognitive load. Data streams are prioritised by urgency, and contextual prompts adapt in real time. The modular component architecture allows each team to configure their own view without engineering support.', execution: 'Delivered a full web platform with role-based dashboards, real-time data integration, configurable alert thresholds, and a lightweight state layer optimised for speed under load. Launched with three internal teams, expanded to twelve within six months.' }, 'material': { challenge: 'AI tools promised productivity but delivered confusion — too many options, unclear outputs, and no connection to the actual decisions users needed to make. Teams needed an AI workspace that supported practical work, not experimentation for its own sake.', approach: 'Flow AI was built around decision-first design. Instead of presenting raw model outputs, we structured the interface around specific tasks: draft, compare, summarise, decide. Every AI interaction maps to a clear user intent. We used a conversational UI layered over structured data views, so outputs always have context.', execution: 'Shipped a web-based AI workspace with task-specific modules, team sharing, version history and an API layer for integration with existing tools. Pilot launched with two product teams, achieving measurable reduction in research-to-decision time.' }, 'tangent': { challenge: 'Early-stage ideas die in group chats and scattered notes. Founders and product leads needed a tool to move from a rough concept to a structured plan without the overhead of project management software.', approach: 'Tangent uses a guided flow that breaks idea development into three phases: capture, structure, and validate. Each phase has lightweight prompts that help users think through their concept without imposing a rigid framework. The mobile-first design means ideas can be captured anywhere and refined later.', execution: 'Launched on iOS and Android with offline support, collaborative workspaces, and export to common formats. Used by early-stage teams and independent builders to validate over 200 product concepts in the first quarter.' }, 'openfield': { challenge: 'Teams were using five or six disconnected tools for tasks that should flow together — handoffs were manual, context was lost, and nobody had a clear view of where work actually stood.', approach: 'Open Field connects existing tools through a unified workflow layer rather than replacing them. We built lightweight integrations that sync status, handoffs and blockers into a single timeline. The interface shows each team member exactly what needs their attention, when, and why.', execution: 'Deployed as an internal automation platform connecting project management, communication and documentation tools. Reduced manual status updates by 70% and cut average handoff time from 4 hours to 20 minutes across pilot teams.' }, 'nara': { challenge: 'Data teams were building reports that leadership never read. The dashboards were technically accurate but visually overwhelming, and the insights were buried in charts that required expertise to interpret.', approach: 'Nara Cloud was designed for calm data consumption. We replaced dense chart grids with a narrative-driven layout — each view tells a story with a clear headline, supporting metric and trend indicator. Colour is used sparingly and only to signal change. The typography-first design makes the dashboard readable at a glance.', execution: 'Delivered a cloud-hosted analytics dashboard with automated narrative summaries, role-based views and scheduled email digests. Adopted by three departments, with leadership engagement on data reviews increasing from monthly to weekly.' }, 'signal': { challenge: 'Product managers were spending hours each week manually combing through analytics, support tickets and market data to find the signals that should inform their next decision. The volume of data was growing faster than the team.', approach: 'Signal uses a relevance engine that filters and ranks data points based on the user\'s current focus — what they are deciding, not just what is trending. We built a clean, minimal interface that presents three to five key signals per session, each with source attribution and confidence scoring. The AI layer handles prioritisation; the human handles interpretation.', execution: 'Launched as a web application with integrations for analytics platforms, support tools and market feeds. Reduced average research time per decision from 3 hours to 25 minutes for pilot users.' } };
  const fallback = caseContent[p.id] || { challenge: 'Define the specific problem, audience need and business constraint this project addressed.', approach: 'Describe the product logic, interface choices and technical decisions behind the build.', execution: 'Detail the deliverables, launch strategy and measurable outcomes.' };
  const c = { challenge: p.challenge || fallback.challenge, approach: p.approach || fallback.approach, execution: p.execution || fallback.execution };
  return `<main id="main"><section class="page-hero"><span class="eyebrow">Case study / ${p.category} / ${p.year}</span><h1>${p.title.toUpperCase()}<br><em>CASE STUDY.</em></h1><p>${p.desc}</p></section><section class="page-body"><div class="full-image" style="margin-top:0"><img src="${p.image}" alt="Visual for ${p.title}" /></div><div class="case-details" style="margin-top:70px"><div><span class="eyebrow">Project overview</span><h2>${p.desc}</h2></div><div><p><strong>Challenge</strong><br>${c.challenge}</p><p><strong>Product approach</strong><br>${c.approach}</p><p><strong>Execution</strong><br>${c.execution}</p></div></div><div class="gallery"><img src="${p.image}" alt="Project visual for ${p.title}" /><img src="${gallery[0]||p.image}" alt="Product system visual for ${p.title}" /><img src="${gallery[1]||p.image}" alt="Interface system visual for ${p.title}" /></div></section><section class="section projects"><div class="section-header"><div><span class="section-num">More to explore</span><h2 class="section-title">Related work.</h2></div><a class="text-link" href="#/work">All projects ↗</a></div><div class="project-grid">${related.map(projectCard).join('')}</div></section></main>`;
}

function teamPage(liveTeam) {
  const t = liveTeam || team;
  return `<main id="main"><section class="page-hero light"><span class="eyebrow">(04) / The people</span><h1>THE GOOD<br>KIND OF <em>COLLECTIVE.</em></h1><p>A structure can be a group of individuals. A studio should be more than that.</p></section><section class="page-body"><div class="split-statement"><span class="eyebrow">A note on this page</span><div><h2>Good work is never a solitary act.</h2><p class="large-copy">The team cards below are purposefully marked placeholders. Swap in real team details, approved portraits and social links from the admin area before public launch.</p></div></div></section><section class="page-body" style="padding-top:0"><div class="team-grid">${t.map(personCard).join('')}</div></section><section class="cta"><span class="eyebrow">Interested in joining?</span><h2>Bring your point of <span>view.</span></h2><a href="#/careers" class="outline-btn">See careers ↗</a></section></main>`;
}

function journal(liveArticles) {
  const a = liveArticles || articles;
  const cats = ['All', 'Team note', 'Build log', 'Perspective', 'AI & systems', 'Culture'];
  return `<main id="main"><section class="page-hero"><span class="eyebrow">(05) / Journal</span><h1>THINGS<br>WORTH <em>BUILDING.</em></h1><p>Notes, process and questions from a team that likes making useful things.</p></section><section class="page-body"><div class="filter-bar">${cats.map((f,i)=>`<button class="filter ${i===0?'active':''}" onclick="filterArticles('${f}',this)">${f}</button>`).join('')}</div><div class="journal-grid" id="article-grid">${a.map(articleCard).join('')}</div></section></main>`;
}
function articleCard(article) { return `<article class="article-card" data-category="${article.category}" onclick="go('journal/${article.id}')" tabindex="0" role="link"><div><span class="story-type">${article.category}</span><h2>${article.title}</h2><p class="story-copy">${article.deck}</p></div><span class="article-meta">${article.date} / ${article.time} →</span></article>`; }
function articlePage(id, liveArticles) {
  const pool = liveArticles || articles;
  const a = pool.find(article=>article.id===id) || pool[0];
  // Use custom body paragraphs saved via admin, or fall back to hardcoded bodyContent
  const bodyContent = { 'new-chapter': ['We started VOID because we saw too many teams struggling with fragmented tools, unclear workflows and products that never quite matched the problem they set out to solve. This is the beginning of something more focused.', 'Our approach is simple: understand the real constraint, design around it, and build something people use without a tutorial. Every project we take on starts with listening — to the team, to the users, to the system that already exists. We are not here to add complexity. We are here to reduce it.', 'This journal will track how we think, what we ship and what we learn along the way. Not polished case studies — honest notes from the build.'], 'inside-lumen': ['Lumen OS began as a question: what if an operations dashboard actually helped people decide, instead of just displaying data? Most dashboards show everything and clarify nothing. We wanted to fix that.', 'The core product decision was to surface only the next meaningful action. We stripped out vanity metrics, reorganised data by urgency, and built contextual prompts that adapt to the user\'s role. The interface is deliberately calm — dark backgrounds, generous spacing, progressive disclosure.', 'On the technical side, we chose a modular component architecture so each team could configure their own view. Real-time data streams feed a lightweight state layer that avoids unnecessary re-renders. The result is a platform that feels fast and stays useful under load.'], 'rituals': ['The best product work we have done has never come from a single breakthrough. It comes from a handful of habits that keep the team honest, curious and moving.', 'We run weekly product reviews where every decision gets questioned — not to slow things down, but to make sure we are solving the right problem. We prototype in the browser, not in slide decks. We write short design rationales before writing code, because the thinking matters more than the typing.', 'These rituals are not rules. They are agreements the team made with itself: stay close to the user, ship something real every week, and never confuse motion with progress.'], 'open-door': ['The best products we have built started with someone else\'s problem. Not a brief — a real frustration, a workflow that wasn\'t working, or a question nobody had answered clearly yet.', 'We are opening our door wider. If you have a system that needs rethinking, an internal tool that outgrew its spreadsheet, or an idea that needs structure — we want to hear about it. We are especially interested in problems that sit between teams, where no single department owns the solution.', 'This is an invitation. Bring us the messy ones.'], 'image-language': ['There is a version of AI that tries to replace human judgement. We are not interested in that version. We are interested in the version that makes judgement easier — by organising information, surfacing patterns and reducing the noise around a decision.', 'When we built Signal, the goal was not to automate analysis. It was to show a product manager exactly which data points mattered for the decision in front of them, and hide the rest. AI handled the sorting; humans handled the meaning.', 'The principle scales beyond a single tool. Every AI feature we build asks the same question: does this make the next step clearer? If the answer is no, we cut it.'], 'studio-summer': ['Summer has been a season of small experiments. We have been testing a new component library for faster prototyping, running internal design sprints on side projects, and exploring how voice interfaces could simplify complex admin workflows.', 'A few things that are on our bench right now: a lightweight CMS built for teams who outgrew Notion, a notification engine that learns which alerts actually matter, and an accessibility audit tool that integrates into the build pipeline.', 'Not all of these will ship. That is the point. The experiments we run during quieter months feed the product thinking we bring to client work year-round.'] };
  const paras = (a.body && a.body.length) ? a.body : (bodyContent[a.id] || [a.deck, 'We are documenting our process, decisions and learnings as we go. Each entry captures the thinking behind the product, not just the output.', 'Follow the journal for regular updates on what we are building and why.']);
  return `<main id="main"><section class="page-hero light"><span class="eyebrow">${a.category} / ${a.date} / ${a.time}</span><h1>${a.title.toUpperCase()}</h1></section><article class="page-body article-view"><p class="story-type">Journal / ${a.category}</p><p>${a.deck}</p><img src="${a.image}" alt="Editorial image for ${a.title}" />${paras.map(p=>'<p>'+p+'</p>').join('')}<a class="outline-btn" href="#/journal">Back to journal <span>↗</span></a></article></main>`;
}

function careers() { return `<main id="main"><section class="page-hero light"><span class="eyebrow">(06) / Careers</span><h1>COME<br>MAKE A <em>MARK.</em></h1><p>We are looking for people who care about the details and the people on the other side of them.</p></section><section class="page-body"><div class="split-statement"><span class="eyebrow">Working at VOID</span><div><h2>Ambition needs company.</h2><p class="large-copy">We make room for focused craft, constructive disagreement and the learning that happens when different practices share a table.</p></div></div><div class="career-list" style="margin-top:75px">${[['Senior designer — sample listing','Casablanca / Hybrid','Full time'],['Creative developer — sample listing','Remote / Casablanca','Full time']].map(([role,location,type])=>`<article class="career"><h2>${role}</h2><p>${location}<br>${type}</p><a class="text-link" href="#/contact">Apply ↗</a></article>`).join('')}</div><div class="notice"><h2>No role with your name on it?</h2><p>We are always glad to meet curious people. Send a considered open application to <a href="mailto:hello@void.example"><strong>hello@void.example</strong></a> (placeholder email).</p></div></section></main>`; }

function contact() { return `<main id="main"><section class="page-hero"><span class="eyebrow">(07) / Contact</span><h1>LET’S MAKE<br>THE NEXT<br><em>MOVE.</em></h1><p>A useful beginning can be as simple as a good conversation.</p></section><section class="page-body"><div class="contact-grid"><div><div class="contact-data"><h2>Start here.</h2><p>Tell us what you are working towards, where you are now, and what you want to make possible.</p></div><div class="contact-data"><h2>Studio inbox</h2><p><a href="mailto:hello@void.example">hello@void.example</a><br><small>Placeholder — replace before launch.</small></p></div><div class="contact-data"><h2>Elsewhere</h2><p>Instagram (placeholder)<br>LinkedIn (placeholder)</p></div></div><form class="contact-form" id="contact-form" onsubmit="sendContact(event)"><p class="eyebrow">Project enquiry</p><div class="form-row"><div class="field"><label for="name">Name</label><input id="name" name="name" required autocomplete="name" /></div><div class="field"><label for="email">Email</label><input id="email" type="email" name="email" required autocomplete="email" /></div></div><div class="form-row"><div class="field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization" /></div><div class="field"><label for="subject">Subject</label><input id="subject" name="subject" required /></div></div><div class="field"><label for="message">What is on your mind?</label><textarea id="message" name="message" required></textarea></div><button class="solid-btn" type="submit">Send enquiry ↗</button><p class="form-status" id="form-status" aria-live="polite">In this local build, messages save to your browser only. Connect a production email provider before launch.</p></form></div></section></main>`; }

function admin() {
  const logged = sessionStorage.getItem('voidAdminToken') === 'beb84b7918327a3af993a26c46f03a4574a9cc77e9615509c6b6c3a8afa1b4a4';
  if (!logged) return `<main class="admin-wrap" id="main"><form class="admin-login" onsubmit="adminLogin(event)"><p class="eyebrow">VOID / Team console</p><h1>Team console</h1><p>Manage the journal, project updates and team information from one focused workspace.</p><div class="field"><label for="admin-pass">Access passcode</label><input id="admin-pass" required type="password" placeholder="Enter secure passcode" autocomplete="current-password" /></div><button class="solid-btn" type="submit">Enter console ↗</button><p class="form-status" id="admin-status"></p></form></main>`;
  const localArticles = JSON.parse(localStorage.getItem('voidArticles') || 'null') || articles;
  const localProjects = JSON.parse(localStorage.getItem('voidProjects') || 'null') || projects;
  const localTeam = JSON.parse(localStorage.getItem('voidTeam') || 'null') || team;
  return `<main class="admin-wrap" id="main"><div class="admin-grid"><aside class="admin-sidebar"><p>VOID / team console</p><button class="sidebar-btn active-tab" onclick="adminTab('overview',this)">Overview</button><button class="sidebar-btn" onclick="adminTab('articles',this)">Journal</button><button class="sidebar-btn" onclick="adminTab('projects',this)">Projects</button><button class="sidebar-btn" onclick="adminTab('team',this)">Team</button><button class="sidebar-btn" onclick="adminTab('settings',this)">Settings</button><button class="sidebar-btn" onclick="adminLogout()">Sign out</button></aside><section class="admin-main" id="admin-main"><p class="eyebrow">Overview</p><h1 class="admin-title">Content overview</h1><p class="story-copy">Review and organize the work, ideas and people that represent VOID.</p><div class="admin-kpis"><div class="kpi"><strong>${localArticles.length}</strong><span>Journal entries</span></div><div class="kpi"><strong>${localProjects.length}</strong><span>Projects</span></div><div class="kpi"><strong>${localTeam.length}</strong><span>Team members</span></div></div></section></div></main>`;
}

function productCopy(markup) {
  const changes = [
    ['We make <em>thoughtful things</em> for ambitious people.', 'We build <em>useful systems</em> for ambitious teams.'],
    ['We connect strategy, identity and digital expression to create work with a clear place in the world. No noise. No borrowed formulas.', 'We combine product thinking, engineering and AI to turn hard problems into websites, apps and tools people actually use.'],
    ['Built around the work that moves people.', 'Built for the work that moves teams forward.'],
    ['Things we are building in public.', 'Products, systems and experiments in progress.'],
    ['From the studio and beyond.', 'From the team and the build log.'],
    ['Many disciplines. One shared appetite.', 'Different disciplines. One shared standard.'],
    ['We are an independent studio built for the interesting, difficult and worthwhile work of making a difference.', 'We are an independent digital product team for the complicated, practical and worthwhile work of making better tools.'],
    ['MADE FOR<br>THE <em>UNFOLDING.</em>', 'BUILT FOR<br>THE <em>NEXT MOVE.</em>'],
    ['We believe a useful idea should feel impossible to ignore.', 'We believe a useful tool should make the next step obvious.'],
    ['VOID is a creative partner for teams building culture, products and momentum. We bring a considered point of view to each conversation, then make it tangible.', 'VOID partners with teams building products, services and systems. We bring product thinking, engineering and a practical point of view to each challenge.'],
    ['Our name is about potential: the space before an idea becomes a thing. We protect that space long enough to find a stronger answer, then bring the focus to make it real.', 'Our name is about potential: the space before a difficult problem becomes a better system. We explore it carefully, then bring the focus to make it real.'],
    ['A creative team meeting in a sunlit studio', 'A product team meeting in a sunlit workspace'],
    ['We uncover the tensions, patterns and possibilities that matter.', 'We learn the workflows, constraints and decisions that matter.'],
    ['We shape a clear, ownable idea your team can stand behind.', 'We define a useful product direction your team can build behind.'],
    ['We build the identity, experience and tools to carry it forward.', 'We build the interface, logic and tools to make it work.'],
    ['We stay close as work meets the world, learning as it goes.', 'We stay close after launch, learning from people using the product.'],
    ['Our offer is deliberately flexible. Every engagement starts with the work in front of us, not a pre-written menu.', 'Our offer is deliberately flexible. Every engagement starts with the problem, users and systems in front of us — not a fixed menu.'],
    ['WHAT WE<br>MAKE <em>MATTER.</em>', 'WHAT WE<br>BUILD <em>MATTERS.</em>'],
    ['Need a different shape?', 'Have a hard problem?'],

    ['A structure can be a group of individuals. A studio should be more than that.', 'A product team is more than a group of specialists. It is the shared ability to solve the right problem together.'],

    ['Senior designer — sample listing', 'Product designer — sample listing'],
    ['Creative developer — sample listing', 'Full-stack engineer — sample listing'],
    ['Studio inbox', 'Team inbox'],
    ['Project enquiry', 'Product enquiry'],
    ['VOID / Local content studio', 'VOID / Local team console'],
    ['VOID / content studio', 'VOID / team console'],
    ['Studio settings', 'Team settings'],

    ['The team cards below are purposefully marked placeholders. Swap in real team details, approved portraits and social links from the admin area before public launch.', 'We combine product thinking, engineering and AI to turn complex ideas into tools people want to use.'],

    ['Product designer — sample listing', 'Product designer'],
    ['Full-stack engineer — sample listing', 'Full-stack engineer'],
    ['Casablanca / Hybrid', 'Taroudant / Hybrid'],
    ['Remote / Casablanca', 'Remote / Taroudant'],
    ['<a href="mailto:hello@void.example"><strong>hello@void.example</strong></a> (placeholder email)', '<a href="mailto:voidd2027@gmail.com"><strong>voidd2027@gmail.com</strong></a>'],
    ['hello@void.example', 'voidd2027@gmail.com'],
    ['<small>Placeholder — replace before launch.</small>', ''],
    ['Tell us what you are working towards, where you are now, and what you want to make possible.', 'Tell us what you want to build, automate or improve — and where you want it to take your team.'],
    ['Instagram (placeholder)<br>LinkedIn (placeholder)', '<a href="https://www.instagram.com/iyyykiiiiiiiim/" target="_blank" rel="noreferrer">Instagram ↗</a><br><a href="https://www.linkedin.com/in/the-voidd-7442b3448" target="_blank" rel="noreferrer">LinkedIn ↗</a>'],
    ['In this local build, messages save to your browser only. Connect a production email provider before launch.', 'Submitting this form opens your email app with a message addressed to VOID.'],
    ['Placeholder offer', 'Discovery'],
    ['Adaptable scope', 'Build & launch'],
    ['Use this area to add your real service description, approach and relevant project examples. We have kept the content intentionally general until VOID’s confirmed offering is available.', 'Every engagement is shaped around the product, the people using it and the system it needs to live in.'],
    ['Replace placeholder biographies and portraits after connecting a media-enabled CMS.', 'Keep team information accurate and up to date.'],
    ['Team placeholders', 'Team members'],
    ['Local demo content', 'Team content']
  ];
  return changes.reduce((html, [from, to]) => html.replaceAll(from, to), markup);
}

function render() {
  const route = pageRoute();
  const [base, id] = route.split('/');
  // Always read live data from localStorage so admin changes are reflected immediately
  const liveArticles = JSON.parse(localStorage.getItem('voidArticles') || 'null') || articles;
  const liveProjects = JSON.parse(localStorage.getItem('voidProjects') || 'null') || projects;
  const liveTeam = JSON.parse(localStorage.getItem('voidTeam') || 'null') || team;
  let content = '';
  if (base === 'home') content = home(liveProjects, liveArticles, liveTeam);
  else if (base === 'about') content = about();
  else if (base === 'services') content = servicesPage();
  else if (base === 'work') content = work(liveProjects);
  else if (base === 'project') content = projectPage(id, liveProjects);
  else if (base === 'team') content = teamPage(liveTeam);
  else if (base === 'journal' && id) content = articlePage(id, liveArticles);
  else if (base === 'journal') content = journal(liveArticles);
  else if (base === 'careers') content = careers();
  else if (base === 'contact') content = contact();
  else if (base === 'admin') content = admin();
  else content = home(liveProjects, liveArticles, liveTeam);
  const sectionRoute = ['project', 'journal'].includes(base) ? (base === 'project' ? 'work' : 'journal') : base;
  const markup = `<div class="shell">${header(sectionRoute)}${content}${base === 'admin' ? '' : footer()}</div>`;
  document.getElementById('app').innerHTML = productCopy(markup);
  document.title = base === 'home' ? 'VOID — Digital products with purpose' : `VOID — ${id || base}`;
  window.scrollTo(0, 0);
}

window.toggleMenu = () => document.getElementById('site-nav').classList.toggle('open');
window.filterProjects = (category, button) => { document.querySelectorAll('.filter').forEach(node => node.classList.remove('active')); button.classList.add('active'); document.querySelectorAll('#all-projects .project-card').forEach(card => { const show = category === 'All' || card.dataset.category === category; card.classList.toggle('hidden', !show); }); };
window.filterArticles = (category, button) => { document.querySelectorAll('.filter').forEach(node => node.classList.remove('active')); button.classList.add('active'); document.querySelectorAll('#article-grid .article-card').forEach(card => card.classList.toggle('hidden', category !== 'All' && card.dataset.category !== category)); };
window.sendContact = event => { event.preventDefault(); const form = event.currentTarget; const status = document.getElementById('form-status'); const data = Object.fromEntries(new FormData(form)); const body = [`Name: ${data.name}`, `Email: ${data.email}`, `Company: ${data.company || '—'}`, '', data.message].join('\n'); const mailto = `mailto:voidd2027@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`; status.textContent = 'Opening your email app…'; window.location.href = mailto; };
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
/* ── helpers ── */
const adminSaveNotice = (msg = 'Saved.', color = 'var(--purple)') => {
  let n = document.getElementById('admin-save-notice');
  if (!n) { n = document.createElement('div'); n.id = 'admin-save-notice'; Object.assign(n.style, { position:'fixed', bottom:'28px', right:'28px', background:color, color:'#fff', padding:'12px 20px', fontFamily:'var(--mono)', fontSize:'12px', zIndex:9999, borderRadius:'2px', boxShadow:'0 4px 24px rgba(0,0,0,.18)', transition:'opacity .4s' }); document.body.appendChild(n); } n.style.opacity = '1'; n.textContent = msg; clearTimeout(n._t); n._t = setTimeout(() => { n.style.opacity = '0'; }, 2200);
};
const adminGetData = key => JSON.parse(localStorage.getItem(key) || 'null');
const adminSetData = (key, val) => localStorage.setItem(key, JSON.stringify(val));
const getSidebarBtn = tab => document.querySelector(`.sidebar-btn[onclick*="'${tab}'"]`);

window.adminTab = (tab, clickedBtn) => {
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active-tab'));
  const btn = clickedBtn || getSidebarBtn(tab);
  if (btn) btn.classList.add('active-tab');
  const main = document.getElementById('admin-main');
  if (tab === 'overview') { render(); return; }
  if (tab === 'articles') { adminTabArticles(main); return; }
  if (tab === 'projects') { adminTabProjects(main); return; }
  if (tab === 'team') { adminTabTeam(main); return; }
  if (tab === 'settings') { adminTabSettings(main); return; }
};

/* ══════════════════════════════════════════════════
   JOURNAL TAB — full CRUD with all fields
══════════════════════════════════════════════════ */
function adminTabArticles(main) {
  const items = adminGetData('voidArticles') || [...articles];
  main.innerHTML = `
    <p class="eyebrow">Manage journal</p>
    <h1 class="admin-title">Journal entries</h1>
    <button class="solid-btn" style="margin-bottom:24px" onclick="adminNewArticle()">+ Add entry</button>
    <div id="content-list">
      ${items.map((a, i) => `
        <div class="content-row">
          <div>
            <strong>${esc(a.title)}</strong>
            <p>${esc(a.category || 'Draft')} · ${esc(a.date || '')} · ${esc(a.time || '')}</p>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="small-btn" onclick="adminEditArticle(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteArticle(${i})">Delete</button>
          </div>
        </div>`).join('')}
    </div>`;
}

window.adminNewArticle = () => adminEditArticle(-1);
window.adminEditArticle = idx => {
  const items = adminGetData('voidArticles') || [...articles];
  const a = idx >= 0 ? { ...items[idx] } : { id:'', title:'', category:'', date:'', time:'', deck:'', image:'' };
  const main = document.getElementById('admin-main');
  main.innerHTML = `
    <p class="eyebrow">${idx >= 0 ? 'Edit' : 'New'} journal entry</p>
    <h1 class="admin-title">${idx >= 0 ? esc(a.title) : 'New entry'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveArticle(event,${idx})">
      <div class="admin-form-grid">
        <div class="field"><label>Title</label><input name="title" value="${esc(a.title)}" required /></div>
        <div class="field"><label>ID / slug (URL key)</label><input name="id" value="${esc(a.id)}" placeholder="e.g. new-chapter" /></div>
        <div class="field"><label>Category</label><input name="category" value="${esc(a.category)}" placeholder="e.g. Team note" /></div>
        <div class="field"><label>Date</label><input name="date" value="${esc(a.date)}" placeholder="e.g. 14.10.26" /></div>
        <div class="field"><label>Read time</label><input name="time" value="${esc(a.time)}" placeholder="e.g. 4 min read" /></div>
        <div class="field"><label>Cover image URL</label><input name="image" value="${esc(a.image)}" placeholder="https://…" /></div>
        <div class="field" style="grid-column:1/-1"><label>Deck / subtitle</label><textarea name="deck" rows="2">${esc(a.deck)}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Body — paragraph 1</label><textarea name="body0" rows="4">${esc((a.body||[])[0]||'')}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Body — paragraph 2</label><textarea name="body1" rows="4">${esc((a.body||[])[1]||'')}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Body — paragraph 3</label><textarea name="body2" rows="4">${esc((a.body||[])[2]||'')}</textarea></div>
      </div>
      ${a.image ? `<div style="margin:10px 0 18px"><img src="${esc(a.image)}" style="max-height:140px;object-fit:cover;width:100%;border-radius:2px" /></div>` : ''}
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="solid-btn" type="submit">Save entry</button>
        <button class="small-btn" type="button" onclick="adminTabArticles(document.getElementById('admin-main'))">← Back</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteArticle(${idx})">Delete</button>` : ''}
      </div>
    </form>`;
};

window.adminSaveArticle = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = adminGetData('voidArticles') || [...articles];
  const body = [f.get('body0'), f.get('body1'), f.get('body2')].filter(p => p && p.trim());
  const entry = {
    id: (f.get('id') || f.get('title')).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    title: f.get('title').trim(),
    category: f.get('category').trim(),
    date: f.get('date').trim(),
    time: f.get('time').trim(),
    deck: f.get('deck').trim(),
    image: f.get('image').trim(),
    body
  };
  if (idx >= 0) items[idx] = entry; else items.unshift(entry);
  adminSetData('voidArticles', items);
  adminSaveNotice('Entry saved ✓');
  adminTabArticles(document.getElementById('admin-main'));
};

window.adminDeleteArticle = idx => {
  if (!confirm('Delete this journal entry?')) return;
  const items = adminGetData('voidArticles') || [...articles];
  items.splice(idx, 1);
  adminSetData('voidArticles', items);
  adminTabArticles(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════
   PROJECTS TAB — full CRUD with all fields
══════════════════════════════════════════════════ */
function adminTabProjects(main) {
  const items = adminGetData('voidProjects') || [...projects];
  main.innerHTML = `
    <p class="eyebrow">Manage projects</p>
    <h1 class="admin-title">Projects</h1>
    <button class="solid-btn" style="margin-bottom:24px" onclick="adminNewProject()">+ Add project</button>
    <div id="content-list">
      ${items.map((p, i) => `
        <div class="content-row">
          <div style="display:flex;align-items:center;gap:14px">
            ${p.image ? `<img src="${esc(p.image)}" style="width:54px;height:40px;object-fit:cover;border-radius:2px;flex-shrink:0" />` : ''}
            <div><strong>${esc(p.title)}</strong><p>${esc(p.category)} · ${esc(p.year)}</p></div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="small-btn" onclick="adminEditProject(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteProject(${i})">Delete</button>
          </div>
        </div>`).join('')}
    </div>`;
}

window.adminNewProject = () => adminEditProject(-1);
window.adminEditProject = idx => {
  const items = adminGetData('voidProjects') || [...projects];
  const p = idx >= 0 ? { ...items[idx] } : { id:'', title:'', category:'', year:'', desc:'', image:'', challenge:'', approach:'', execution:'' };
  const main = document.getElementById('admin-main');
  main.innerHTML = `
    <p class="eyebrow">${idx >= 0 ? 'Edit' : 'New'} project</p>
    <h1 class="admin-title">${idx >= 0 ? esc(p.title) : 'New project'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveProject(event,${idx})">
      <div class="admin-form-grid">
        <div class="field"><label>Title</label><input name="title" value="${esc(p.title)}" required /></div>
        <div class="field"><label>ID / slug</label><input name="id" value="${esc(p.id)}" placeholder="e.g. lumen" /></div>
        <div class="field"><label>Category</label><input name="category" value="${esc(p.category)}" placeholder="e.g. Web platform" /></div>
        <div class="field"><label>Year</label><input name="year" value="${esc(p.year)}" placeholder="e.g. 2026" /></div>
        <div class="field" style="grid-column:1/-1"><label>Short description</label><textarea name="desc" rows="2">${esc(p.desc)}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Cover image URL</label><input name="image" value="${esc(p.image)}" placeholder="https://…" /></div>
        <div class="field" style="grid-column:1/-1"><label>Challenge</label><textarea name="challenge" rows="4">${esc(p.challenge||'')}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Product approach</label><textarea name="approach" rows="4">${esc(p.approach||'')}</textarea></div>
        <div class="field" style="grid-column:1/-1"><label>Execution / results</label><textarea name="execution" rows="4">${esc(p.execution||'')}</textarea></div>
        <div class="field"><label>Gallery image 1 URL</label><input name="gallery0" value="${esc((p.gallery||[])[0]||'')}" placeholder="https://…" /></div>
        <div class="field"><label>Gallery image 2 URL</label><input name="gallery1" value="${esc((p.gallery||[])[1]||'')}" placeholder="https://…" /></div>
      </div>
      ${p.image ? `<div style="margin:10px 0 18px"><img src="${esc(p.image)}" style="max-height:140px;object-fit:cover;width:100%;border-radius:2px" /></div>` : ''}
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="solid-btn" type="submit">Save project</button>
        <button class="small-btn" type="button" onclick="adminTabProjects(document.getElementById('admin-main'))">← Back</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteProject(${idx})">Delete</button>` : ''}
      </div>
    </form>`;
};

window.adminSaveProject = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = adminGetData('voidProjects') || [...projects];
  const gallery = [f.get('gallery0'), f.get('gallery1')].filter(u => u && u.trim());
  const entry = {
    id: (f.get('id') || f.get('title')).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    title: f.get('title').trim(),
    category: f.get('category').trim(),
    year: f.get('year').trim(),
    desc: f.get('desc').trim(),
    image: f.get('image').trim(),
    challenge: f.get('challenge').trim(),
    approach: f.get('approach').trim(),
    execution: f.get('execution').trim(),
    gallery
  };
  if (idx >= 0) items[idx] = entry; else items.unshift(entry);
  adminSetData('voidProjects', items);
  adminSaveNotice('Project saved ✓');
  adminTabProjects(document.getElementById('admin-main'));
};

window.adminDeleteProject = idx => {
  if (!confirm('Delete this project?')) return;
  const items = adminGetData('voidProjects') || [...projects];
  items.splice(idx, 1);
  adminSetData('voidProjects', items);
  adminTabProjects(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════
   TEAM TAB — full CRUD with all fields
══════════════════════════════════════════════════ */
function adminTabTeam(main) {
  const items = adminGetData('voidTeam') || [...team];
  main.innerHTML = `
    <p class="eyebrow">Manage team</p>
    <h1 class="admin-title">Team members</h1>
    <button class="solid-btn" style="margin-bottom:24px" onclick="adminNewMember()">+ Add member</button>
    <div id="content-list">
      ${items.map((m, i) => `
        <div class="content-row">
          <div style="display:flex;align-items:center;gap:14px">
            ${m.image ? `<img src="${esc(m.image)}" style="width:44px;height:44px;object-fit:cover;border-radius:50%;flex-shrink:0" />` : '<div style="width:44px;height:44px;background:var(--line);border-radius:50%;flex-shrink:0"></div>'}
            <div><strong>${esc(m.name)}</strong><p>${esc(m.role)}</p></div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="small-btn" onclick="adminEditMember(${i})">Edit</button>
            <button class="small-btn danger" onclick="adminDeleteMember(${i})">Delete</button>
          </div>
        </div>`).join('')}
    </div>`;
}

window.adminNewMember = () => adminEditMember(-1);
window.adminEditMember = idx => {
  const items = adminGetData('voidTeam') || [...team];
  const m = idx >= 0 ? { ...items[idx] } : { name:'', role:'', image:'', bio:'' };
  const main = document.getElementById('admin-main');
  main.innerHTML = `
    <p class="eyebrow">${idx >= 0 ? 'Edit' : 'New'} team member</p>
    <h1 class="admin-title">${idx >= 0 ? esc(m.name) : 'New member'}</h1>
    <form class="admin-edit-form" onsubmit="adminSaveMember(event,${idx})">
      <div class="admin-form-grid">
        <div class="field"><label>Full name</label><input name="name" value="${esc(m.name)}" required /></div>
        <div class="field"><label>Role / title</label><input name="role" value="${esc(m.role)}" /></div>
        <div class="field" style="grid-column:1/-1"><label>Photo URL</label><input name="image" value="${esc(m.image)}" placeholder="https://…" /></div>
        <div class="field" style="grid-column:1/-1"><label>Short bio (optional)</label><textarea name="bio" rows="3">${esc(m.bio||'')}</textarea></div>
      </div>
      ${m.image ? `<div style="margin:10px 0 18px;display:flex;gap:12px;align-items:center"><img src="${esc(m.image)}" style="width:72px;height:72px;object-fit:cover;border-radius:50%" /><span style="font:11px var(--mono);color:var(--muted)">Current photo</span></div>` : ''}
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="solid-btn" type="submit">Save member</button>
        <button class="small-btn" type="button" onclick="adminTabTeam(document.getElementById('admin-main'))">← Back</button>
        ${idx >= 0 ? `<button class="small-btn danger" type="button" onclick="adminDeleteMember(${idx})">Delete</button>` : ''}
      </div>
    </form>`;
};

window.adminSaveMember = (e, idx) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const items = adminGetData('voidTeam') || [...team];
  const entry = { name: f.get('name').trim(), role: f.get('role').trim(), image: f.get('image').trim(), bio: f.get('bio').trim() };
  if (idx >= 0) items[idx] = entry; else items.push(entry);
  adminSetData('voidTeam', items);
  adminSaveNotice('Team member saved ✓');
  adminTabTeam(document.getElementById('admin-main'));
};

window.adminDeleteMember = idx => {
  if (!confirm('Remove this team member?')) return;
  const items = adminGetData('voidTeam') || [...team];
  items.splice(idx, 1);
  adminSetData('voidTeam', items);
  adminTabTeam(document.getElementById('admin-main'));
};

/* ══════════════════════════════════════════════════
   SETTINGS TAB
══════════════════════════════════════════════════ */
function adminTabSettings(main) {
  const s = adminGetData('voidSettings') || {};
  main.innerHTML = `
    <p class="eyebrow">Settings</p>
    <h1 class="admin-title">Site settings</h1>
    <form class="admin-edit-form" onsubmit="adminSaveSettings(event)">
      <div class="admin-form-grid">
        <div class="field" style="grid-column:1/-1"><label>Studio email</label><input name="email" value="${esc(s.email||'voidd2027@gmail.com')}" type="email" /></div>
        <div class="field"><label>Instagram URL</label><input name="instagram" value="${esc(s.instagram||'https://www.instagram.com/iyyykiiiiiiiim/')}" /></div>
        <div class="field"><label>LinkedIn URL</label><input name="linkedin" value="${esc(s.linkedin||'https://www.linkedin.com/in/the-voidd-7442b3448')}" /></div>
        <div class="field" style="grid-column:1/-1"><label>Footer tagline</label><input name="footerTagline" value="${esc(s.footerTagline||'An independent digital product team building websites, apps and intelligent tools that make work clearer.')}" /></div>
        <div class="field" style="grid-column:1/-1"><label>Studio location</label><input name="location" value="${esc(s.location||'Taroudant / Anywhere')}" /></div>
      </div>
      <div style="display:flex;gap:10px;margin-top:12px">
        <button class="solid-btn" type="submit">Save settings</button>
        <button class="small-btn danger" type="button" onclick="adminResetAll()">Reset all content to defaults</button>
      </div>
    </form>`;
}

window.adminSaveSettings = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  adminSetData('voidSettings', { email: f.get('email').trim(), instagram: f.get('instagram').trim(), linkedin: f.get('linkedin').trim(), footerTagline: f.get('footerTagline').trim(), location: f.get('location').trim() });
  adminSaveNotice('Settings saved ✓');
};

window.adminResetAll = () => {
  if (!confirm('Reset ALL content to defaults? This cannot be undone.')) return;
  ['voidArticles','voidProjects','voidTeam','voidSettings'].forEach(k => localStorage.removeItem(k));
  adminSaveNotice('Reset to defaults ✓', '#9b1e1e');
  render();
};

window.addEventListener('hashchange', render);
render();

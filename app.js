const i18n = {
  es: {
    description: 'Desarrollador de software apasionado por la tecnología e innovación. Combino experiencia práctica en front-end, back-end, bases de datos y DevOps, y disfruto especialmente el reto de convertir una idea compleja en algo que funciona de verdad.',
    intro: 'Hola, soy Ricardo Tejedor Anaya. Experiencia construyendo productos para clientes.',
    skills: 'Habilidades en: React, Node.js, TypeScript, Python, SQL, Docker.',
    roles: ['Software', 'Fullstack', 'Frontend', 'Backend'],
    skillsPrefix: 'Mis ',
    skillsTitle: 'Habilidades',
    skillsSubtitle: 'Tecnologías, frameworks y herramientas con las que trabajo.',
    catFrontend: 'Frontend',
    catBackend: 'Backend / APIs',
    catDevOps: 'DevOps / Herramientas',
    catAutomation: 'Automatización / IA',
    catSupport: 'Soporte Técnico',
    tagRag: 'Integración de LLM',
    tagRagFull: 'RAG (Retrieval-Augmented Generation)',
    tagPowerAutomate: 'Power Automate',
    tagEmbeddings: 'Embeddings vectoriales',
    tagAd: 'Active Directory (Nivel 1)',
    projectsEyebrow: 'Trabajo seleccionado',
    projectsPrefix: 'Proyectos',
    projectsTitle: '',
    projectsSubtitle: 'Productos digitales pensados para ser claros, útiles y agradables de usar.',
    projectOneType: 'Proyecto full-stack',
    projectOneDescription: 'Una plataforma de gestión que reúne tareas, conversaciones y métricas en un espacio de trabajo claro.',
    projectTwoType: 'Automatización e IA',
    projectTwoDescription: 'Un centro de automatización que reduce tareas repetitivas y hace visible cada paso de la operación.',
    projectThreeType: 'Proyecto personal',
    projectThreeDescription: 'Una interfaz editorial para descubrir, guardar y consultar conocimiento técnico sin perder el contexto.',
    liveDemo: 'Live Demo',
    contactEyebrow: 'Contacto',
    contactTitle: '¿Tienes un proyecto en mente? Hablemos.',
    contactDescription: 'Abierto a nuevas oportunidades, colaboraciones y conversaciones sobre productos digitales.',
    copyEmail: 'Copiar email',
    emailCopied: 'Copiado ✓',
    footerRole: 'Desarrollador de software',
    footerDesc: 'Desarrollador de software especializado en construir APIs, productos y experiencias digitales. Arquitectura, backend y aplicaciones a escala.',
    footerQuickLinks: 'Enlaces rápidos',
    footerTechTitle: 'Tecnologías principales',
    footerContactTitle: 'Entremos en contacto',
    footerLinkSummary: 'Resumen',
    footerLinkSkills: 'Habilidades',
    footerLinkProjects: 'Proyectos',
    footerLinkContact: 'Contacto',
    navSummary: 'Resumen',
    navSkills: 'Habilidades',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    footerRights: '© 2026 Ricardo Tejedor Anaya. Todos los derechos reservados.'
  },
  en: {
    description: 'A software developer passionate about technology and innovation. I combine hands-on experience in front-end, back-end, databases, and DevOps, and I especially enjoy the challenge of turning a complex idea into something that actually works.',
    intro: 'Hi, I’m Ricardo Tejedor Anaya. I build products for clients.',
    skills: 'Skills: React, Python, N8N, TypeScript, Supabase/SQL, Docker.',
    roles: ['Software', 'Fullstack', 'Frontend', 'Backend'],
    skillsPrefix: 'My ',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies, frameworks, and tools I work with.',
    catFrontend: 'Frontend',
    catBackend: 'Backend / APIs',
    catDevOps: 'DevOps / Tools',
    catAutomation: 'Automation / AI',
    catSupport: 'Technical Support',
    tagRag: 'LLM Integration',
    tagRagFull: 'RAG (Retrieval-Augmented Generation)',
    tagPowerAutomate: 'Power Automate',
    tagEmbeddings: 'Vector embeddings',
    tagAd: 'Active Directory (Level 1)',
    projectsEyebrow: 'Selected work',
    projectsPrefix: 'Projects',
    projectsTitle: '',
    projectsSubtitle: 'Digital products designed to be clear, useful, and enjoyable to use.',
    projectOneType: 'Full-stack project',
    projectOneDescription: 'A management platform that brings tasks, conversations, and metrics into one clear workspace.',
    projectTwoType: 'Automation & AI',
    projectTwoDescription: 'An automation hub that reduces repetitive tasks and makes every operational step visible.',
    projectThreeType: 'Personal project',
    projectThreeDescription: 'An editorial interface to discover, save, and consult technical knowledge without losing context.',
    liveDemo: 'Live Demo',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s build something together.',
    contactDescription: 'Open to new opportunities, collaborations, and conversations about digital products.',
    copyEmail: 'Copy email',
    emailCopied: 'Copied ✓',
    footerRole: 'Software Developer',
    footerDesc: 'Software developer specialized in building APIs, products, and digital experiences. Architecture, backend, and scalable applications.',
    footerQuickLinks: 'Quick links',
    footerTechTitle: 'Main technologies',
    footerContactTitle: 'Let’s get in touch',
    footerLinkSummary: 'Summary',
    footerLinkSkills: 'Skills',
    footerLinkProjects: 'Projects',
    footerLinkContact: 'Contact',
    navSummary: 'Summary',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    footerRights: '© 2026 Ricardo Tejedor Anaya. All rights reserved.'
  }
};

const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const flagCo = document.getElementById('flag-co');
const flagUk = document.getElementById('flag-uk');
const typedEl = document.getElementById('typed-text');
const copyEmailButton = document.getElementById('copy-email');
const heroCard = document.querySelector('.hero-profile-container');
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLang = localStorage.getItem('lang') || 'es';
let timer;
let word = 0, char = 0, deleting = false;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withViewTransition(updateDOM) {
  if (!prefersReducedMotion() && document.startViewTransition) {
    document.startViewTransition(updateDOM);
    return;
  }
  updateDOM();
}

function typeRole() {
  clearTimeout(timer);
  const roles = i18n[currentLang].roles;
  word = 0;
  char = 0;
  deleting = false;
  const tick = () => {
    const role = roles[word % roles.length];
    typedEl.textContent = role.slice(0, char);
    if (!deleting && char === role.length) { deleting = true; timer = setTimeout(tick, 1500); return; }
    if (deleting && char === 0) { deleting = false; word++; }
    char += deleting ? -1 : 1;
    timer = setTimeout(tick, deleting ? 55 : 105);
  };
  tick();
}

function applyTheme(theme, animate = true) {
  const update = () => {
    currentTheme = theme;
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  };

  if (!animate || prefersReducedMotion()) {
    update();
    return;
  }

  if (document.startViewTransition) {
    withViewTransition(update);
    return;
  }

  html.classList.add('is-theme-switching');
  update();
  setTimeout(() => html.classList.remove('is-theme-switching'), 480);
}

function waitForTransition(el, duration = 420) {
  return new Promise(resolve => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      el.removeEventListener('transitionend', onEnd);
      clearTimeout(fallback);
      resolve();
    };
    const onEnd = (event) => {
      if (event.target === el && (event.propertyName === 'width' || event.propertyName === 'height')) finish();
    };
    el.addEventListener('transitionend', onEnd);
    const fallback = setTimeout(finish, duration + 60);
  });
}

function measureHeroCardSize(card) {
  const lockedWidth = card.style.width;
  const lockedHeight = card.style.height;
  card.style.width = '';
  card.style.height = '';
  const size = { width: card.offsetWidth, height: card.offsetHeight };
  card.style.width = lockedWidth;
  card.style.height = lockedHeight;
  return size;
}

function removecloneIds(element) {
  element.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
}

async function crossfadeHeroText(updateContent) {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent || prefersReducedMotion()) {
    updateContent();
    return;
  }

  const clone = heroContent.cloneNode(true);
  clone.classList.add('hero-content-crossfade-clone');
  removecloneIds(clone);
  heroContent.append(clone);

  heroContent.classList.add('is-crossfade-entering');
  await wait(30);

  updateContent();

  requestAnimationFrame(() => {
    heroContent.classList.remove('is-crossfade-entering');
  });

  await wait(560);
  clone.remove();
}

async function animateHeroCardResize(updateContent) {
  if (!heroCard || prefersReducedMotion()) {
    updateContent();
    return;
  }

  const startWidth = heroCard.offsetWidth;
  const startHeight = heroCard.offsetHeight;

  heroCard.classList.add('is-resizing');
  heroCard.style.width = `${startWidth}px`;
  heroCard.style.height = `${startHeight}px`;

  updateContent();

  const { width: endWidth, height: endHeight } = measureHeroCardSize(heroCard);
  const sizeChanged = startWidth !== endWidth || startHeight !== endHeight;

  if (!sizeChanged) {
    heroCard.style.width = '';
    heroCard.style.height = '';
    heroCard.classList.remove('is-resizing');
    return;
  }

  requestAnimationFrame(() => {
    heroCard.style.width = `${endWidth}px`;
    heroCard.style.height = `${endHeight}px`;
  });

  await waitForTransition(heroCard);
  heroCard.style.width = '';
  heroCard.style.height = '';
  heroCard.classList.remove('is-resizing');
}

function updateLangContent(lang) {
  currentLang = lang;
  html.lang = lang;
  localStorage.setItem('lang', lang);
  const copy = i18n[lang];

  document.querySelectorAll('[data-copy]').forEach(el => {
    const key = el.dataset.copy;
    if (copy[key]) el.textContent = copy[key];
  });

  const isEnglish = lang === 'en';
  flagCo.classList.toggle('hidden', isEnglish);
  flagUk.classList.toggle('hidden', !isEnglish);
  langToggle.setAttribute('aria-label', isEnglish ? 'Cambiar a español' : 'Switch to English');
  langToggle.title = langToggle.getAttribute('aria-label');
  typeRole();

  if (cachedProjects.length > 0) renderProjects(cachedProjects);
}

async function applyLang(lang, animate = true) {
  if (lang === currentLang && animate) return;

  const shouldAnimate = animate && !prefersReducedMotion();

  if (shouldAnimate) {
    await crossfadeHeroText(() => animateHeroCardResize(() => updateLangContent(lang)));
    return;
  }

  updateLangContent(lang);
}
themeToggle.addEventListener('click', () => applyTheme(currentTheme === 'light' ? 'dark' : 'light'));
langToggle.addEventListener('click', () => applyLang(currentLang === 'en' ? 'es' : 'en'));
copyEmailButton.addEventListener('click', async () => {
  const email = 'ricardotejedor18@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const input = document.createElement('textarea');
    input.value = email;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
  const label = copyEmailButton.querySelector('.contact-channel');
  label.textContent = i18n[currentLang].emailCopied;
  copyEmailButton.classList.add('copied');
  setTimeout(() => {
    label.textContent = i18n[currentLang].copyEmail;
    copyEmailButton.classList.remove('copied');
  }, 1800);
});
applyTheme(currentTheme, false);
applyLang(currentLang, false);

// Supabase
// Supabase credentials (from project settings)
const SUPABASE_URL = 'https://blabbeshdmhpqwdvytrz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsYWJiZXNoZG1ocHF3ZHZ5dHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjEwMzAsImV4cCI6MjEwMTY5NzAzMH0.Fp1GnQ1FL_18ggnycNs9kfkE9gY9u1hg7bbpOGin02E';

// Init client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// cached projects
let cachedProjects = [];

// fetch projects
async function fetchProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '<p style="opacity: 0.6;">Cargando proyectos...</p>';

  const { data: projects, error } = await supabaseClient
    .from('projects')
    .select('*')
    .order('num', { ascending: true });

  if (error) {
    console.error('Error cargando proyectos desde Supabase:', error);
    container.innerHTML = '<p>Error al cargar los proyectos.</p>';
    return;
  }

  cachedProjects = projects;
  renderProjects(cachedProjects);
}

// render projects
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (!projects || projects.length === 0) {
    container.innerHTML = '<p class="projects-subtitle">No hay proyectos disponibles.</p>';
    return;
  }

  container.innerHTML = projects.map((p, index) => {
    // handle techs
    let techArray = p.technologies;
    if (typeof techArray === 'string') {
      try { techArray = JSON.parse(p.technologies); } catch (e) { techArray = [p.technologies]; }
    }
    const techFormatted = Array.isArray(techArray) ? techArray.join(' <span>•</span> ') : p.technologies;

    // localize
    const projectType = currentLang === 'en' ? (p.type_en || p.type) : (p.type_es || p.type);
    
    // Reveal delay (cycle 0, 1, 2)
    const delayClass = index % 3 === 0 ? '' : (index % 3 === 1 ? ' reveal-delay-1' : ' reveal-delay-2');

    return `
      <div class="project-row reveal${delayClass}" data-preview-img="${p.image_url || ''}">
        <!-- Left: number + title -->
        <div class="project-primary">
          <span class="project-number">${p.num}</span>
          <h3 class="project-title">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-name">
              ${p.name}
            </a>
          </h3>
        </div>

        <!-- Middle: techs -->
        <div class="project-techline">${techFormatted}</div>

        <!-- Right: type, year, links -->
        <div class="project-meta">
          <span>${projectType}</span>
          <span>${p.year}</span>
          <div class="project-links">
            ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-icon-btn" aria-label="Repositorio GitHub de ${p.name}">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>` : ''}
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-arrow" aria-label="Ver ${p.name}">
              ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initDynamicHoverPreview();
}

function initDynamicHoverPreview() {
  const rows = document.querySelectorAll('.project-row[data-preview-img]');
  
  rows.forEach(row => {
    const imgUrl = row.getAttribute('data-preview-img');
    if (imgUrl && !row.querySelector('.project-preview-box')) {
      const previewEl = document.createElement('div');
      previewEl.className = 'project-preview-box';
      previewEl.style.backgroundImage = `url('${imgUrl}')`;
      row.appendChild(previewEl);
    }
  });
}

// hover preview
function initProjectHover() {
  const previewBox = document.querySelector('.project-preview');
  const projectRows = document.querySelectorAll('.project-row');

  if (!previewBox) return;

  projectRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      const imgUrl = row.getAttribute('data-preview');
      if (imgUrl) {
        previewBox.style.backgroundImage = `url('${imgUrl}')`;
        previewBox.classList.add('active');
      }
    });

    row.addEventListener('mouseleave', () => {
      previewBox.classList.remove('active');
    });
  });
}

// load on ready
document.addEventListener('DOMContentLoaded', () => {
  fetchProjects();

  /* ── Scroll reveal ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
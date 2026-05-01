/* ── Projects Data ── */
const projects = [
  {
    title: "Weather App",
    category: "webapp",
    image: "assets/project_1_image.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "Open-Meteo API", "Nominatim"],
    summary: "API-based weather application that provides current weather conditions and forecasts for any location worldwide with a clean, intuitive UI.",
    detail: "Full-featured weather app consuming Open-Meteo API for weather data and Air Quality API for pollution data. Integrates Nominatim (OpenStreetMap) for location search. Built with pure vanilla JavaScript.",
    githubUrl: "https://github.com/KISHAN652/Weather-app-beta",
    liveUrl: "https://weather-app-beta-three-gamma.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    category: "website",
    image: "assets/project_2_image.webp",
    tags: ["React", "Node.js", "JavaScript", "Bootstrap", "Stripe API"],
    summary: "Full-featured e-commerce platform with shopping cart, user authentication, product catalog, and secure checkout process.",
    detail: "End-to-end e-commerce solution with React frontend, Node.js backend, Stripe integration for payments, user auth system, product catalog with filters, and cart management.",
    githubUrl: "https://github.com/KISHAN652/Ecoomerce-demo",
    liveUrl: "https://ecoomerce-demo.onrender.com/",
  },
  {
    title: "Healthcare Chatbot",
    category: "website",
    image: "assets/project_3_image.webp",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Genkit AI"],
    summary: "AI-powered healthcare chatbot that provides preliminary medical advice, symptom checking, and appointment scheduling.",
    detail: "Built with Next.js 15 and React 19, powered by Genkit AI for intelligent medical conversations. Features symptom analysis, appointment scheduling, and responsive design with Tailwind CSS.",
    githubUrl: "https://github.com/KISHAN652/helathcare-chatbot-v3",
    liveUrl: "https://helathcare-chatbot-v3.vercel.app/",
  },
  {
    title: "Todo App",
    category: "webapp",
    image: "assets/project_4_image.webp",
    tags: ["JavaScript", "LocalStorage", "CSS3", "HTML5"],
    summary: "A productivity application for managing daily tasks with features like priority levels, due dates, and progress tracking.",
    detail: "Clean, lightweight task manager using vanilla JavaScript with LocalStorage for data persistence. Features priority levels, due dates, progress tracking, and a polished UI.",
    githubUrl: "https://github.com/KISHAN652/Todo-app",
    liveUrl: "https://todo-app-six-beige-10.vercel.app/",
  },
  {
    title: "Micro-Interaction Gallery",
    category: "website",
    image: "assets/project_5_image.webp",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
    summary: "A curated collection of premium, production-ready UI animations and micro-interactions showcasing high-quality frontend craftsmanship.",
    detail: "Showcases production-ready UI animations and micro-interactions built with pure Vanilla JavaScript and CSS3. Demonstrates how to create engaging user experiences without heavy libraries.",
    githubUrl: "https://github.com/KISHAN652/Micro-Interaction-Gallery-Website",
    liveUrl: "https://micro-interaction-gallery-website.vercel.app/",
  },
  {
    title: "Job Portal UI",
    category: "website",
    image: "assets/project_6_image.webp",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    summary: "JobHunt — a modern, responsive job finding platform with candidate-facing job board, application flow, and recruiter dashboard.",
    detail: "Feature-rich job portal simulating a real-world recruiting application. Includes candidate job board, detailed application flow, comprehensive recruiter dashboard, and fully responsive design.",
    githubUrl: "https://github.com/KISHAN652/job-portal",
    liveUrl: "https://job-portal-one-black.vercel.app/",
  },
  {
    title: "Spotify Web Player Clone",
    category: "webapp",
    image: "assets/project_7_image.webp",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
    summary: "A fully responsive Spotify Web Player clone replicating the core experience of the Spotify web app with a modern UI.",
    detail: "Pixel-accurate Spotify clone built with standard web technologies. Features modern player UI, responsive design, playlist views, and smooth interactions — all without frameworks.",
    githubUrl: "https://github.com/KISHAN652/Spotify-clone/tree/main",
    liveUrl: "https://spotify-clone-gamma-navy.vercel.app/",
  },
  {
    title: "Online Code Editor",
    category: "website",
    image: "assets/project_8_image.webp",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)"],
    summary: "A modern, lightweight, and fully responsive online code editor for HTML, CSS, and JavaScript with live preview.",
    detail: "Browser-based code editor supporting HTML, CSS, and JavaScript with real-time live preview. Lightweight, fast, and fully responsive — built entirely with vanilla technologies.",
    githubUrl: "https://github.com/KISHAN652/online-code-editor/tree/main",
    liveUrl: "https://online-code-editor-drab.vercel.app/",
  },
  {
    title: "Expense Tracker",
    category: "webapp",
    image: "assets/project_9_image.webp",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js"],
    summary: "FinTrack — a modern personal finance app for tracking income and expenses with powerful analytics and clean UI.",
    detail: "Intuitive personal finance application with Chart.js-powered analytics. Features income/expense tracking, category breakdowns, visual reports, and responsive design for seamless money management.",
    githubUrl: "https://github.com/KISHAN652/expense-tracker",
    liveUrl: "https://expense-tracker-theta-pied-14.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    category: "crm",
    image: "assets/project_10_image.webp",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chart.js"],
    summary: "NexDash — a modern, responsive admin dashboard for managing users, tracking orders, and visualizing real-time analytics.",
    detail: "Feature-rich admin dashboard with user management, order tracking, real-time analytics visualizations using Chart.js, and clean iconography. Designed for efficiency and aesthetics.",
    githubUrl: "https://github.com/KISHAN652/admin-dashboard",
    liveUrl: "https://admin-dashboard-mu-pearl-71.vercel.app",
  },
];

/* ── Real World Projects Data ── */
const realWorldProjects = [
  {
    title: "Micro System",
    subtitle: "Absolute Power, No Compromise",
    category: "Production Website",
    image: "assets/real-world-project-1.webp",
    tags: ["Next.js 16", "Tailwind CSS 4", "Framer Motion", "React 19", "Lucide React"],
    description: "Complete redesign of Micro System's industrial web platform — a premium power protection brand by Rajmandir Corporation (Est. 1997). Built with a \"Voltage Noir\" design language featuring dark-themed glassmorphic interface, dynamic product showcases, and 90+ Lighthouse scores.",
    liveUrl: "https://microsystem.net.in",
    deploy: "Static HTML • Hostinger",
    client: "Rajmandir Corporation, Gujarat",
  },
  {
    title: "Quick Quotation App",
    subtitle: "Instant Quotations, Anytime",
    category: "Production App",
    image: "assets/real-world-project-2_image.webp",
    tags: ["Flutter", "Dart", "PDF Generation", "Mobile"],
    description: "Built exclusively for Micro System to solve a critical business problem — the inability to generate quotations during late nights and weekends. Enables the sales team to create professional PDF quotations for Stabilizers, Inverters & Online UPS instantly on mobile, anytime, anywhere.",
    liveUrl: null,
    deploy: "Private Distribution",
    client: "Micro System (Rajmandir Corporation)",
  },
];

/* ── DOM refs ── */
const grid = document.querySelector("[data-project-grid]");
const filters = document.querySelectorAll("[data-filter]");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalCategory = document.querySelector("[data-modal-category]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalMeta = document.querySelector("[data-modal-meta]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");

/* ── Render Projects ── */
function renderProjects(filter = "all") {
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  grid.innerHTML = visible
    .map((p, idx) => {
      const liveLink = p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="project-live-link"><svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live</a>` : "";
      const githubLink = p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.21.69.83.57A12 12 0 0 0 12 .5z"/></svg> GitHub</a>` : "";
      const typeLabel = p.category === "webapp" ? "Web App" : p.category === "website" ? "Website" : "CRM Dashboard";
      return `
        <article class="project-card reveal" data-project="${p.title}" style="--delay:${idx * 60}ms">
          <div class="project-img-wrap"><img src="${p.image}" alt="${p.title} preview" loading="lazy" /><span class="project-number">${String(idx + 1).padStart(2, "0")}</span></div>
          <div class="project-body">
            <p class="project-type">${typeLabel}</p>
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="project-actions">
              ${liveLink}
              ${githubLink}
            </div>
          </div>
        </article>`;
    })
    .join("");
  observeReveal();
}

/* ── Render Real World Projects ── */
function renderRealWorldProjects() {
  const rwGrid = document.querySelector("[data-rw-grid]");
  if (!rwGrid) return;
  rwGrid.innerHTML = realWorldProjects
    .map((p, idx) => {
      const liveBtn = p.liveUrl
        ? `<a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="rw-btn rw-btn--live"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Visit Live</a>`
        : `<span class="rw-btn rw-btn--private"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Private App</span>`;
      const statusDot = p.liveUrl
        ? `<span class="rw-status"><span class="rw-status-dot"></span>Live</span>`
        : `<span class="rw-status rw-status--private"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>Private</span>`;
      return `
        <article class="rw-card reveal">
          <div class="rw-img ${p.title.includes('Quick Quotation') ? 'rw-img-contain' : ''}">
            <img src="${p.image}" alt="${p.title}" loading="lazy"/>
            <span class="rw-badge">${p.category}</span>
            <span class="rw-number">${String(idx + 1).padStart(2, "0")}</span>
          </div>
          <div class="rw-body">
            <div class="rw-head">
              <div class="rw-head-top">
                <h3>${p.title}</h3>
                ${statusDot}
              </div>
              <p class="rw-subtitle">${p.subtitle}</p>
            </div>
            <div class="rw-separator"></div>
            <p class="rw-desc">${p.description}</p>
            <div class="rw-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="rw-meta">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z"/></svg> ${p.deploy}</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> ${p.client}</span>
            </div>
            <div class="rw-actions">${liveBtn}</div>
          </div>
        </article>`;
    })
    .join("");
  observeReveal();
}

/* ── Project Modal ── */
function openProject(title) {
  const p = projects.find((i) => i.title === title);
  if (!p) return;
  modalImage.src = p.image;
  modalImage.alt = `${p.title} preview`;
  modalTitle.textContent = p.title;
  modalCategory.textContent = p.category;
  modalDescription.textContent = p.detail;
  modalMeta.innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
  modal.hidden = false;
  document.body.classList.add("is-locked");
}
function closeProject() {
  modal.hidden = true;
  document.body.classList.remove("is-locked");
}

/* ── Reveal Observer ── */
function observeReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-observed)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }),
    { threshold: 0.15 }
  );
  items.forEach((item, i) => {
    item.classList.add("is-observed");
    item.style.transitionDelay = `${Math.min(i % 8, 7) * 55}ms`;
    obs.observe(item);
  });
}

/* ── Filters ── */
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open-project]");
  if (btn) openProject(btn.dataset.openProject);
});
document.querySelectorAll("[data-modal-close]").forEach((b) => b.addEventListener("click", closeProject));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeProject(); });

/* ── Mobile Nav ── */
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", () => { nav.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); });

/* ── Scroll Spy ── */
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
  let current = null;
  sections.forEach((s) => { if (s.getBoundingClientRect().top <= 130) current = s; });
  navLinks.forEach((l) => l.classList.toggle("is-active", current && l.getAttribute("href") === `#${current.id}`));
});

/* ── Contact Form Logic ── */
const contactForm = document.querySelector("[data-contact-form]");
const inquirySelect = document.querySelector("[data-inquiry-select]");
const servicesWrap = document.querySelector("[data-services-wrap]");
const descHeading = document.querySelector("[data-desc-heading]");
const descTextarea = document.querySelector("[data-desc-textarea]");
const formHeading = document.querySelector("[data-form-heading]");

if (inquirySelect) {
  inquirySelect.addEventListener("change", () => {
    const isHire = inquirySelect.value === "hire";
    if (isHire) {
      if (servicesWrap) servicesWrap.style.display = "none";
      if (formHeading) formHeading.textContent = "I'd love to work with you.";
      if (descHeading) descHeading.textContent = "Description";
      if (descTextarea) descTextarea.placeholder = "Tell me about yourself, your company, and why you'd like to hire me...";
    } else {
      if (servicesWrap) servicesWrap.style.display = "";
      if (formHeading) formHeading.textContent = "Tell me what you want to create.";
      if (descHeading) descHeading.textContent = "Project Description";
      if (descTextarea) descTextarea.placeholder = "Share your project goal, timeline, and pages needed.";
    }
  });
  if (inquirySelect.value === "service" && servicesWrap) servicesWrap.style.display = "";
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type=submit]");
  const note = document.querySelector("[data-form-note]");
  const fd = new FormData(e.currentTarget);
  const name = fd.get("name");
  const email = fd.get("email");
  const inquiry = fd.get("inquiry");
  const service = fd.get("service") || "N/A";
  const message = fd.get("message");
  const gotcha = fd.get("_gotcha");

  btn.disabled = true;
  btn.textContent = "Sending...";

  try {
    // IMPORTANT: Replace "YOUR_FORMSPREE_ENDPOINT" with your actual Formspree form ID
    // Example: https://formspree.io/f/xabcdefg
    const response = await fetch("https://formspree.io/f/maqvnwao", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json" 
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _gotcha: gotcha,
        subject: `Portfolio ${inquiry === "hire" ? "Hiring" : "Service"} inquiry from ${name}`,
        message: `${message}\n\nInquiry Type: ${inquiry}\nService: ${service}\nFrom: ${name}\nEmail: ${email}`
      }),
    });

    if (response.ok) {
      note.innerHTML = `<div class="success-msg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div><strong>Message Sent Successfully!</strong><span>Thank you ${name}! Your message has been securely delivered. I'll get back to you within 24 hours.</span></div></div>`;
      contactForm.reset();
      if (servicesWrap) servicesWrap.style.display = "";
      if (formHeading) formHeading.textContent = "Tell me what you want to create.";
    } else {
      const errorData = await response.json();
      let errorMessage = "Server returned an error";
      if (errorData.errors && errorData.errors.length > 0) {
        errorMessage = errorData.errors.map(err => err.message).join(", ");
      }
      throw new Error(errorMessage);
    }
  } catch (err) {
    console.error("Submission Error:", err);
    note.innerHTML = `<div class="success-msg" style="border-color:rgba(231,120,85,.3);background:linear-gradient(135deg,#fff5f0,#ffede6)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e77855" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><div><strong style="color:#c45a30">Something went wrong: ${err.message || 'Unknown error'}</strong><span>Please try again or email me directly at gajjarsk111@gmail.com</span></div></div>`;
  }
  btn.disabled = false;
  btn.textContent = "Send Message";

  // Auto-hide the success/error message after 5 seconds
  if (note.innerHTML) {
    setTimeout(() => {
      note.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      note.style.opacity = "0";
      note.style.transform = "translateY(-10px)";
      setTimeout(() => {
        note.innerHTML = "";
        note.style.opacity = "";
        note.style.transform = "";
        note.style.transition = "";
      }, 500);
    }, 5000);
  }
});

/* ── Hero Particles ── */
function createParticles() {
  const container = document.querySelector(".hero-particles");
  if (!container) return;
  const colors = ['var(--teal)', 'var(--coral)', 'var(--sky)', 'var(--lemon)'];
  for (let i = 0; i < 200; i++) {
    const p = document.createElement("span");
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `--x:${Math.random() * 100}%;--y:${Math.random() * 100}%;--s:${2 + Math.random() * 6}px;--d:${3 + Math.random() * 7}s;--delay:${Math.random() * 5}s;--c:${color};`;
    container.appendChild(p);
  }
}
createParticles();

/* ── Tilt Effect on Cards ── */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".bento-card, .expertise-card, .certificate-card, .experience-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
    } else {
      card.style.transform = "";
    }
  });
});

/* ── Chatbot ── */
let chatbotData = null;
async function loadChatbot() {
  try {
    const res = await fetch("chatbot.json");
    chatbotData = await res.json();
    initChatbot();
  } catch (err) { console.warn("Chatbot data not found:", err); }
}

function initChatbot() {
  const panel = document.querySelector("[data-chatbot]");
  const msgs = document.querySelector("[data-chatbot-messages]");
  const suggestions = document.querySelector("[data-chatbot-suggestions]");
  const form = document.querySelector("[data-chatbot-form]");
  const toggles = document.querySelectorAll("[data-chatbot-toggle]");

  toggles.forEach((btn) => btn.addEventListener("click", () => {
    const isHidden = panel.hidden;
    panel.hidden = !isHidden;
    if (isHidden && msgs.children.length === 0) {
      addBotMsg(chatbotData.greeting);
      renderSuggestions();
    }
  }));

  function addBotMsg(text) {
    const div = document.createElement("div");
    div.className = "chat-msg chat-bot";
    div.innerHTML = `<div class="chat-avatar">KS</div><div class="chat-bubble">${text.replace(/\n/g, "<br>")}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addUserMsg(text) {
    const div = document.createElement("div");
    div.className = "chat-msg chat-user";
    div.innerHTML = `<div class="chat-bubble">${text}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function findAnswer(q) {
    const lower = q.toLowerCase();
    for (const item of chatbotData.qa) {
      if (item.keywords.some((kw) => lower.includes(kw))) return item.answer;
    }
    return chatbotData.fallback;
  }

  function renderSuggestions() {
    suggestions.innerHTML = chatbotData.suggestions.map((s) => `<button type="button" class="chat-suggestion">${s}</button>`).join("");
    suggestions.querySelectorAll("button").forEach((btn) => btn.addEventListener("click", () => {
      const q = btn.textContent;
      addUserMsg(q);
      setTimeout(() => addBotMsg(findAnswer(q)), 400);
    }));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    const q = input.value.trim();
    if (!q) return;
    addUserMsg(q);
    input.value = "";
    setTimeout(() => addBotMsg(findAnswer(q)), 400);
  });
}

/* ── Init ── */
renderProjects();
renderRealWorldProjects();
observeReveal();
loadChatbot();

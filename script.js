const projects = [
  {
    title: "Micro System Website Redesign",
    category: "website",
    label: "Corporate Website",
    client: "Rajmandir Corporation (Est. 1997)",
    image: "assets/real-world-project-1.png",
    previews: [
      "assets/real-world-project-1.png",
      "assets/micro-system-preview-1.svg",
      "assets/micro-system-preview-2.svg",
    ],
    tags: ["Next.js 16", "Tailwind 4", "Framer Motion", "React 19", "SEO"],
    summary:
      "A complete redesign of the microsystem.net.in website, featuring a high-end visual aesthetic and optimized SEO.",
    detail:
      "I completely redesigned the microsystem.net.in website from the ground up to deliver a high-end, visually stunning user experience with significantly improved SEO. This platform was created exclusively for the Micro System company, built with dedication and love to elevate their digital presence.",
    impact: [
      "Built with Next.js 16 & React 19 for future-proof performance.",
      "Styled with Tailwind CSS 4 for a lean, lightning-fast UI.",
      "Implemented smooth, high-end motion design using Framer Motion.",
      "Optimized for Hostinger static hosting with perfect lighthouse scores.",
    ],
    links: [
      {
        label: "Live Preview",
        url: "https://microsystem.net.in",
      },
    ],
  },
  {
    title: "QUICK QUOTATION App",
    category: "app",
    label: "Workflow Engine",
    client: "Micro System (Rajmandir Corporation)",
    image: "assets/real-world-project-2.jpeg",
    previews: [
      "assets/real-world-project-2.jpeg",
      "assets/quick-quotation-preview-1.svg",
      "assets/quick-quotation-preview-2.svg",
    ],
    tags: ["Flutter", "Productivity", "Internal Tool", "Business Logic"],
    summary:
      "A Flutter-based mobile app that allows the team to generate quotations instantly, anytime and anywhere.",
    detail:
      "I developed this app for Micro System to solve a critical problem: the company couldn't generate quotations during holidays or late hours without access to their office system. Solution: I created 'QUICK QUOTATION' using Flutter. This app empowers the sales team to create professional quotations from anywhere in minutes—simple, fast, and easy.",
    impact: [
      "Eliminated dependency on office systems for quote generation.",
      "Reduced customer response time from hours to minutes.",
      "Created a streamlined mobile interface for on-the-go sales.",
      "Built specifically for Micro System's unique pricing and tax logic.",
    ],
    links: [
      {
        label: "Internal Access",
        url: "#contact",
      },
    ],
  },
];

const personalProjects = [
  {
    id: "weather-app",
    title: "Weather App",
    category: "webapp",
    label: "Web App",
    number: "01",
    image: "assets/project-1.png",
    description: "API-based weather application that provides current weather conditions and forecasts for any location worldwide with a clean, intuitive UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Open-Meteo API"],
    links: [
      { label: "Live Preview", url: "https://weather-app-beta-three-gamma.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/Weather-app-beta", icon: "github" },
    ],
  },
  {
    id: "ecommerce-website",
    title: "Ecommerce Website",
    category: "website",
    label: "Website",
    number: "02",
    image: "assets/project-2.png",
    description: "Full-featured e-commerce platform with shopping cart, user authentication, product catalog, and secure checkout process.",
    tags: ["React", "Node.js", "JavaScript", "Bootstrap", "Stripe API"],
    links: [
      { label: "Live Preview", url: "https://ecoomerce-demo.onrender.com/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/Ecoomerce-demo", icon: "github" },
    ],
  },
  {
    id: "healthcare-chatbot",
    title: "Healthcare Chatbot",
    category: "website",
    label: "Website",
    number: "03",
    image: "assets/project-3.png",
    description: "AI-powered healthcare chatbot providing preliminary medical advice, symptom checking, appointment scheduling, and nearest hospital-finding system with Normal & Women modes.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Genkit AI"],
    links: [
      { label: "Live Preview", url: "https://helathcare-chatbot-v3.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/helathcare-chatbot-v3", icon: "github" },
    ],
  },
  {
    id: "todo-app",
    title: "Todo App",
    category: "webapp",
    label: "Web App",
    number: "04",
    image: "assets/project-4.png",
    description: "A productivity application for managing daily tasks with features like priority levels, due dates, and progress tracking.",
    tags: ["JavaScript", "LocalStorage", "CSS3", "HTML5"],
    links: [
      { label: "Live Preview", url: "https://todo-app-six-beige-10.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/Todo-app", icon: "github" },
    ],
  },
  {
    id: "micro-interaction-gallery",
    title: "Micro-Interaction Gallery",
    category: "website",
    label: "Website",
    number: "05",
    image: "assets/project-5.png",
    description: "A curated collection of premium, production-ready UI animations and micro-interactions showcasing high-quality frontend craftsmanship.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
    links: [
      { label: "Live Preview", url: "https://micro-interaction-gallery-website.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/Micro-Interaction-Gallery-Website", icon: "github" },
    ],
  },
  {
    id: "job-portal-ui",
    title: "Job Portal UI",
    category: "website",
    label: "Website",
    number: "06",
    image: "assets/project-6.png",
    description: "JobHunt — a modern, responsive job-finding platform with a candidate-facing job board, application flow, and recruiter dashboard.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+"],
    links: [
      { label: "Live Preview", url: "https://job-portal-one-black.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/job-portal", icon: "github" },
    ],
  },
  {
    id: "spotify-clone",
    title: "Spotify Web Player Clone",
    category: "webapp",
    label: "Web App",
    number: "07",
    image: "assets/project-7.png",
    description: "A fully responsive Spotify Web Player clone replicating the core experience of the Spotify web app with a modern UI. (BETA)",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
    links: [
      { label: "Live Preview", url: "https://spotify-clone-gamma-navy.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/Spotify-clone", icon: "github" },
    ],
  },
  {
    id: "online-code-editor",
    title: "Online Code Editor",
    category: "website",
    label: "Website",
    number: "08",
    image: "assets/project-8.png",
    description: "A modern, lightweight, and fully responsive online code editor for HTML, CSS, and JavaScript with live preview.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript ES6+"],
    links: [
      { label: "Live Preview", url: "https://online-code-editor-drab.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/online-code-editor", icon: "github" },
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "webapp",
    label: "Web App",
    number: "09",
    image: "assets/project-9.png",
    description: "FinTrack — a modern personal finance app for tracking income and expenses with powerful analytics, clean UI, Firebase authentication, Cloud Firestore storage, and PDF export.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Chart.js", "Firebase"],
    links: [
      { label: "Live Preview", url: "https://expense-tracker-theta-pied-14.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/expense-tracker/tree/main", icon: "github" },
    ],
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    category: "crm",
    label: "CRM Dashboard",
    number: "10",
    image: "assets/project-10.png",
    description: "NexDash — a modern, responsive admin dashboard for managing users, tracking orders, and visualizing real-time analytics.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Chart.js"],
    links: [
      { label: "Live Preview", url: "https://admin-dashboard-mu-pearl-71.vercel.app/", icon: "link" },
      { label: "GitHub", url: "https://github.com/KISHAN652/admin-dashboard", icon: "github" },
    ],
  },
];

const defaultChatKnowledge = [
  {
    topic: "about",
    questions: ["tell me about kishan", "who is kishan", "about kishan", "profile", "introduce kishan", "kishan profile"],
    keywords: ["kishan", "about", "profile", "intro", "introduction"],
    answer:
      "Kishan Sondagar is a web developer focused on responsive websites, clean front-end development, SEO optimization, deployment, and business-friendly digital experiences.",
  },
  {
    topic: "education",
    questions: ["education", "what is kishan education", "degree", "college", "cgpa", "what did kishan study", "which university", "bca details"],
    keywords: ["education", "degree", "college", "university", "cgpa", "bca", "marwadi"],
    answer: "Kishan completed BCA from Marwadi University from 2022 to 2025 with a 7.04 CGPA.",
  },
  {
    topic: "skills",
    questions: ["skills", "what skills does kishan have", "technology stack", "tech stack", "what technologies kishan knows", "frontend skills"],
    keywords: ["skills", "html", "css", "javascript", "seo", "github", "supabase", "mongodb", "deployment"],
    answer:
      "Kishan works with HTML, CSS, JavaScript, SEO, website management, digital marketing support, GitHub, Supabase, MongoDB, and deployment platforms like Vercel, Netlify, and Render.",
  },
  {
    topic: "projects",
    questions: ["projects", "what projects has kishan built", "portfolio projects", "show projects", "project list"],
    keywords: ["projects", "project", "micro", "quick", "quotation", "website", "app"],
    answer:
      "Kishan has two highlighted real-world projects: a Micro System website redesign with SEO optimization, and QUICK QUOTATION, a company-specific app for preparing quotations when the office system is not available.",
  },
  {
    topic: "real world projects",
    questions: ["real world project", "real world projects", "tell me about kishan's real world projects", "company project", "micro system project", "professional project"],
    keywords: ["real world", "real-world", "company project", "micro system", "rajmandir", "professional", "client", "business project"],
    answer:
      "Kishan's real-world work includes the Micro System website redesign for microsystem.net.in and the QUICK QUOTATION app built specially for Micro System's sales workflow. Both projects solve practical business problems instead of being only demo concepts.",
  },
  {
    topic: "micro system website",
    questions: ["micro system website", "website redesign", "microsystem.net.in", "seo project", "tell me about website redesign"],
    keywords: ["microsystem.net.in", "website redesign", "seo project", "corporate website", "next.js", "micro system website"],
    answer:
      "The Micro System website project is a redesign of microsystem.net.in with a more professional interface, better product presentation, responsive pages, and SEO optimization for the company's stabilizer, inverter, and online UPS business.",
  },
  {
    topic: "quick quotation",
    questions: ["quick quotation", "quotation app", "tell me about quick quotation app", "app project", "why quick quotation app"],
    keywords: ["quick quotation", "quotation", "quote app", "flutter", "late night", "sunday", "sales app"],
    answer:
      "QUICK QUOTATION is a company-specific app Kishan built for Micro System so the team can generate quotations during late-night or Sunday inquiries when the regular office system is not available.",
  },
  {
    topic: "experience",
    questions: ["experience", "work experience", "where does kishan work", "micro system job", "current job", "company experience"],
    keywords: ["experience", "experince", "work", "job", "micro", "system", "position", "company"],
    answer:
      "Kishan joined Micro System on 14 February 2026 and continues there, handling website management and supporting digital marketing work.",
  },
  {
    topic: "services",
    questions: ["services", "what services do you offer", "hire kishan", "website services", "can i hire kishan", "what work can kishan do"],
    keywords: ["services", "servies", "service", "hire", "website", "redesign", "seo", "frontend", "deployment", "app"],
    answer:
      "Kishan offers website development, website redesign, frontend improvements, SEO optimization, deployment setup, and business web app support.",
  },
  {
    topic: "hobbies",
    questions: ["hobbies", "what are kishan hobbies", "interests", "free time", "what does kishan like"],
    keywords: ["hobbies", "interests", "ai", "technology", "movies"],
    answer: "Kishan enjoys discovering new technology, exploring AI technology, and watching movies.",
  },
  {
    topic: "contact",
    questions: ["contact", "how can i contact kishan", "phone", "email", "contact details", "mobile number", "send message"],
    keywords: ["contact", "phone", "email", "call", "message", "number", "mobile", "details"],
    answer:
      "You can contact Kishan at +91 63533 73957 or gajjarsk111@gmail.com. The contact form on this website also handles inquiries directly inside the page.",
  },
];

let chatKnowledge = [...defaultChatKnowledge];

const grid = document.querySelector("[data-project-grid]");
const filters = document.querySelectorAll("[data-filter]");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalCategory = document.querySelector("[data-modal-category]");
const modalDescription = document.querySelector("[data-modal-description]");
const modalImpact = document.querySelector("[data-modal-impact]");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalLinks = document.querySelector("[data-modal-links]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");
const contactForm = document.querySelector("[data-contact-form]");

function iconPath(type) {
  const icons = {
    details:
      "M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Zm4 2.3v2h8v-2H8Zm0 4.1v2h8v-2H8Zm0 4.1v2h5.4v-2H8Z",
    link: "M13.2 5.6h5.2v5.2h-2V9l-6.8 6.8-1.4-1.4 6.8-6.8h-1.8v-2ZM5.8 6.8h5.1v2H7.8v7.4h7.4v-3.1h2v5.1H5.8V6.8Z",
  };
  return icons[type];
}

function projectSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function renderProjects(filter = "all") {
  if (!grid) return;

  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  grid.innerHTML = visible
    .map((project) => {
      const primaryLink = project.links[0];

      return `
        <article class="project-card reveal" data-project="${project.title}">
          <div class="project-preview">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
          </div>
          <div class="project-body">
            <div class="project-title-row">
              <h3>${project.title}</h3>
              <span class="project-category-pill">${project.label}</span>
            </div>
            <p class="project-summary">${project.summary}</p>
            <ul class="project-highlight-list">
              ${project.impact.slice(0, 2).map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button type="button" data-open-project="${projectSlug(project.title)}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${iconPath("details")}"/></svg>
                View Details
              </button>
              <a href="${primaryLink.url}" ${primaryLink.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${iconPath("link")}"/></svg>
                ${primaryLink.label}
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveal();
}

function openProject(slug) {
  const project = projects.find((item) => projectSlug(item.title) === slug);
  if (!project || !modal) return;

  modalImage.src = project.image;
  modalImage.alt = `${project.title} preview`;
  modalTitle.textContent = project.title;
  modalCategory.textContent = `${project.client} / ${project.label}`;
  modalDescription.textContent = project.detail;
  modalImpact.innerHTML = project.impact.map((item) => `<li>${item}</li>`).join("");
  modalMeta.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalLinks.innerHTML = project.links
    .map(
      (link) => `
        <a href="${link.url}" class="btn-project primary" ${link.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
          <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path d="${iconPath("link")}"/></svg>
          ${link.label}
        </a>
      `,
    )
    .join("");
  modal.hidden = false;
  document.body.classList.add("is-locked");
}

function closeProject() {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("is-locked");
}

function observeReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-observed)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item, index) => {
    item.classList.add("is-observed");
    item.style.transitionDelay = `${Math.min(index % 8, 7) * 55}ms`;
    observer.observe(item);
  });
}

function setupProjects() {
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProjects(button.dataset.filter);
    });
  });

  grid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-project]");
    if (button) openProject(button.dataset.openProject);
  });

  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closeProject);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) closeProject();
  });
}

function setupNavigation() {
  navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    let current = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 130) current = section;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
    });
  });
}

function setupContactForm() {
  if (!contactForm) return;

  const intentSelect = contactForm.querySelector("[data-intent-select]");
  const serviceDetail = contactForm.querySelector("[data-service-detail]");
  const serviceSelect = serviceDetail?.querySelector("select");
  const messageLabel = contactForm.querySelector("[data-message-label]");
  const messageInput = contactForm.querySelector("[data-message-input]");
  const note = contactForm.querySelector("[data-form-note]");
  const successMessage = contactForm.querySelector("[data-success-message]");
  const submitButton = contactForm.querySelector("[data-submit-button]");
  const defaultButtonText = submitButton?.textContent || "Send Message";

  function updateContactFields() {
    const isHire = intentSelect.value === "hire";
    serviceDetail?.classList.toggle("is-hidden", isHire);
    if (serviceSelect) serviceSelect.disabled = isHire;
    if (messageLabel) messageLabel.textContent = isHire ? "Description" : "Project Message";
    if (messageInput) {
      messageInput.placeholder = isHire
        ? "Describe the role, project, timeline, budget range, and how I can help."
        : "Share your service need, project goal, timeline, and pages or features required.";
    }
  }

  intentSelect?.addEventListener("change", updateContactFields);
  updateContactFields();

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const endpoint = contactForm.getAttribute("action");
    if (!endpoint) return;

    const formData = new FormData(contactForm);
    formData.append("submittedAt", new Date().toISOString());
    formData.append("source", "Kishan Sondagar portfolio contact form");

    contactForm.classList.add("is-submitting");
    if (submitButton) submitButton.textContent = "Sending...";
    if (note) note.textContent = "Sending your message...";
    if (successMessage) successMessage.hidden = true;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      contactForm.reset();
      updateContactFields();
      if (note) note.textContent = "";
      if (successMessage) {
        const userName = formData.get("name") || "there";
        successMessage.innerHTML = `
          <div class="toast-content">
            <svg viewBox="0 0 24 24" class="toast-icon" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <div class="toast-text">
              <strong>Thank you, ${userName}!</strong>
              <span>Your message has been sent successfully. I will get back to you soon.</span>
            </div>
          </div>
        `;
        successMessage.hidden = false;
        // Trigger reflow
        void successMessage.offsetWidth;
        successMessage.classList.add("show-toast");
        
        setTimeout(() => {
          successMessage.classList.remove("show-toast");
          setTimeout(() => {
            successMessage.hidden = true;
          }, 400); // Wait for CSS transition
        }, 5000);
      }
      
    } catch (error) {
      if (error.message && error.message.toLowerCase().includes("recaptcha")) {
        alert("Developer Note: To submit without redirecting, please go to your Formspree settings and disable reCAPTCHA for this form.");
      }
      if (note) note.textContent = "Could not send message. Please try emailing directly at gajjarsk111@gmail.com";
    } finally {
      contactForm.classList.remove("is-submitting");
      if (submitButton) submitButton.textContent = defaultButtonText;
    }
  });
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findChatAnswer(question) {
  const normalized = normalizeText(question);
  let bestIntent = null;
  let bestScore = 0;

  chatKnowledge.forEach((intent) => {
    const questionScore = (intent.questions || []).some((item) => normalizeText(item) === normalized) ? 20 : 0;
    const keywordScore = (intent.keywords || []).reduce((score, keyword) => {
      return normalized.includes(normalizeText(keyword)) ? score + 4 : score;
    }, 0);
    const topicScore = normalized.includes(normalizeText(intent.topic || "")) ? 6 : 0;
    const score = questionScore + keywordScore + topicScore;

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  });

  if (bestIntent && bestScore >= 4) return bestIntent.answer;

  return "I can help with Kishan's profile, education, skills, real-world projects, QUICK QUOTATION, Micro System website redesign, experience, services, hobbies, certificates, and contact details.";
}

function appendChatMessage(container, message, type = "bot") {
  const bubble = document.createElement("div");
  bubble.className = `chat-message ${type}`;
  bubble.textContent = message;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

async function loadChatKnowledge() {
  try {
    const response = await fetch("chatbot-qa.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Chatbot JSON not available");
    const data = await response.json();
    if (Array.isArray(data.intents) && data.intents.length) chatKnowledge = data.intents;
  } catch (error) {
    chatKnowledge = [...defaultChatKnowledge];
  }
}

function setupChatbot() {
  const chatbot = document.querySelector("[data-chatbot]");
  if (!chatbot) return;

  const toggle = chatbot.querySelector("[data-chatbot-toggle]");
  const panel = chatbot.querySelector("[data-chatbot-panel]");
  const close = chatbot.querySelector("[data-chatbot-close]");
  const form = chatbot.querySelector("[data-chatbot-form]");
  const input = form?.querySelector("input");
  const messages = chatbot.querySelector("[data-chatbot-messages]");
  const prompts = chatbot.querySelectorAll("[data-chat-prompt]");

  function setOpen(isOpen) {
    panel.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) setTimeout(() => input?.focus(), 80);
  }

  function ask(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    appendChatMessage(messages, cleanQuestion, "user");
    appendChatMessage(messages, findChatAnswer(cleanQuestion), "bot");
  }

  toggle?.addEventListener("click", () => setOpen(panel.hidden));
  close?.addEventListener("click", () => setOpen(false));

  prompts.forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(true);
      ask(button.dataset.chatPrompt);
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    ask(input.value);
    input.value = "";
  });
}

function setupParticles() {
  const container = document.querySelector("[data-orbit-container]");
  if (!container) return;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const particleScale = viewportWidth <= 680 ? 0.28 : viewportWidth <= 900 ? 0.42 : 1;
  const ringConfigs = [
    { class: "orbit-ring-1", count: 50, size: [2, 4], speed: [15, 25] },
    { class: "orbit-ring-2", count: 80, size: [2, 5], speed: [20, 35] },
    { class: "orbit-ring-3", count: 120, size: [3, 6], speed: [25, 45] },
  ].map((config) => ({
    ...config,
    count: Math.max(10, Math.round(config.count * particleScale)),
  }));

  const colors = ["#168b7a", "#f4be4f", "#5aa7dc", "#e77855", "#b78ad7", "#ffffff"];

  ringConfigs.forEach((config) => {
    const ring = document.createElement("div");
    ring.className = `orbit-ring ${config.class}`;
    container.appendChild(ring);

    for (let i = 0; i < config.count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.floor(Math.random() * (config.size[1] - config.size[0] + 1)) + config.size[0];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * -20;
      const duration = config.speed[0] + Math.random() * (config.speed[1] - config.speed[0]);

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 ${size * 3}px ${size / 2}px ${color}`;
      particle.style.top = `${top}%`;
      particle.style.left = `${left}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      if (Math.random() > 0.8) {
        particle.classList.add("twinkle");
      }
      
      if (Math.random() > 0.7) {
        particle.style.filter = `blur(${Math.random() * 2}px)`;
        particle.style.opacity = "0.6";
      }

      ring.appendChild(particle);
    }
  });
}

function setupTerminal() {
  const terminalInput = document.querySelector("[data-terminal-input]");
  const terminalStatus = document.querySelector("[data-terminal-status]");
  const terminalProgressBar = document.querySelector(".terminal-progress-bar");
  const terminalLogs = document.querySelector("[data-terminal-logs]");

  if (!terminalInput || !terminalStatus) return;

  const commands = [
    { text: "npm install @kishan/core-skills", logs: ["Resolving dependencies...", "Added 14 packages...", "HTML5, CSS3, JavaScript detected.", "Optimizing for mobile..."] },
    { text: "seo-audit --target=microsystem.net.in", logs: ["Analyzing metadata...", "Checking viewport tags...", "Improving lighthouse score...", "SEO Score: 98/100"] },
    { text: "git commit -m 'feat: obsidian glass hero section'", logs: ["1 file changed, 127 insertions(+)", "Create mode 100644 hero.css", "Build assets generated."] },
    { text: "portfolio-deploy --env=production", logs: ["Building for production...", "Minifying scripts...", "Uploading to Vercel...", "Live at: kishansondagar.com"] }
  ];

  let currentCommand = 0;

  async function typeText(element, text) {
    element.textContent = "";
    for (const char of text) {
      element.textContent += char;
      await new Promise(r => setTimeout(r, 40 + Math.random() * 60));
    }
    await new Promise(r => setTimeout(r, 600));
  }

  async function runSequence() {
    const cmd = commands[currentCommand];
    
    await typeText(terminalInput, cmd.text);
    
    terminalStatus.classList.remove("is-hidden");
    terminalProgressBar.style.width = "0%";
    terminalLogs.innerHTML = "";
    
    for (let i = 0; i <= 100; i += 5) {
      terminalProgressBar.style.width = `${i}%`;
      if (i % 25 === 0 && cmd.logs[i / 25]) {
        const log = document.createElement("div");
        log.textContent = cmd.logs[i / 25];
        terminalLogs.appendChild(log);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;
      }
      await new Promise(r => setTimeout(r, 50 + Math.random() * 100));
    }

    await new Promise(r => setTimeout(r, 2000));
    terminalStatus.classList.add("is-hidden");
    terminalInput.textContent = "";
    
    currentCommand = (currentCommand + 1) % commands.length;
    setTimeout(runSequence, 1000);
  }

  runSequence();
}

function setupMarquee() {
  const spans = document.querySelectorAll('.marquee-track span[data-color]');
  spans.forEach(span => {
    const color = span.dataset.color;
    if (!color) return;
    // Set CSS variable so the hover rule can use it
    span.style.setProperty('--brand-color', color);
  });
}

function renderPersonalProjects(filter = "all") {
  const ppGrid = document.querySelector("[data-pp-grid]");
  if (!ppGrid) return;

  const visible = filter === "all"
    ? personalProjects
    : personalProjects.filter((p) => p.category === filter);

  ppGrid.innerHTML = visible.map((project) => {
    const githubIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`;
    const linkIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.2 5.6h5.2v5.2h-2V9l-6.8 6.8-1.4-1.4 6.8-6.8h-1.8v-2ZM5.8 6.8h5.1v2H7.8v7.4h7.4v-3.1h2v5.1H5.8V6.8Z"/></svg>`;

    const categoryColors = {
      webapp: { dot: "#3ecf8e", badge: "rgba(62,207,142,0.12)", border: "rgba(62,207,142,0.25)" },
      website: { dot: "#5aa7dc", badge: "rgba(90,167,220,0.12)", border: "rgba(90,167,220,0.25)" },
      crm: { dot: "#f4be4f", badge: "rgba(244,190,79,0.12)", border: "rgba(244,190,79,0.25)" },
    };
    const col = categoryColors[project.category] || categoryColors.website;

    return `
      <article class="pp-card reveal" data-pp-category="${project.category}">
        <div class="pp-card-number">${project.number}</div>
        <div class="pp-card-image-wrap">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="pp-card-image-overlay"></div>
          <span class="pp-badge" style="--badge-bg:${col.badge};--badge-border:${col.border};">
            <span class="pp-badge-dot" style="background:${col.dot};box-shadow:0 0 8px ${col.dot};"></span>
            ${project.label}
          </span>
        </div>
        <div class="pp-card-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="pp-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="pp-card-links">
            <a href="${project.links[0].url}" target="_blank" rel="noreferrer" class="pp-link-primary">
              ${linkIcon}Live Preview
            </a>
            <a href="${project.links[1].url}" target="_blank" rel="noreferrer" class="pp-link-ghost">
              ${githubIcon}GitHub
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  observeReveal();
}

function setupPersonalProjects() {
  const ppFilterBtns = document.querySelectorAll("[data-pp-filter]");
  ppFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      ppFilterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderPersonalProjects(btn.dataset.ppFilter);
    });
  });
}

loadChatKnowledge();
setupProjects();
setupNavigation();
setupContactForm();
setupChatbot();
setupParticles();
setupTerminal();
setupMarquee();
renderProjects();
setupPersonalProjects();
renderPersonalProjects();
observeReveal();

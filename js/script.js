// ========================================
// PREMIUM PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize all features
    initThemeToggle();
    initMobileMenu();
    initScrollEffects();
    initScrollReveal();
    initSmoothScroll();
    initParticles();
    initTypingEffect();
    initCursorTrail();
    setCurrentYear();
    initResumeDownload();
    initMobileDarkModeToggle();
    initCloseMenuOnOutsideClick();
    initResponsiveThemeToggle();
}

// ========================================
// THEME TOGGLE - UPDATED FOR MOBILE
// ========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        updateMobileThemeIcon(newTheme);

        // Add rotation animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    const mobileIcon = document.querySelector('#mobileThemeToggle i');
    
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    if (mobileIcon) {
        mobileIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function updateMobileThemeIcon(theme) {
    const mobileIcon = document.querySelector('#mobileThemeToggle i');
    if (mobileIcon) {
        mobileIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ========================================
// MOBILE DARK MODE TOGGLE
// ========================================

function initMobileDarkModeToggle() {
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const html = document.documentElement;
    
    if (!mobileThemeToggle) return;

    mobileThemeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Close mobile menu after toggle (optional)
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileNav && mobileMenuBtn) {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// ========================================
// MOBILE MENU - UPDATED
// ========================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = mobileNav.classList.contains('active')
            ? 'fas fa-times'
            : 'fas fa-bars';
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });

    // Close mobile menu when clicking dark mode toggle in mobile menu
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            // Menu closing is handled in initMobileDarkModeToggle
        });
    }
}

// ========================================
// CLOSE MENU ON OUTSIDE CLICK
// ========================================

function initCloseMenuOnOutsideClick() {
    document.addEventListener('click', (e) => {
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (mobileNav && mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// ========================================
// RESPONSIVE THEME TOGGLE HANDLING
// ========================================

function initResponsiveThemeToggle() {
    // Sync both theme toggles on page load
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    updateThemeIcon(currentTheme);
    
    // Handle window resize to update icons
    window.addEventListener('resize', () => {
        const currentTheme = html.getAttribute('data-theme');
        updateThemeIcon(currentTheme);
    });
}

// ========================================
// SCROLL EFFECTS
// ========================================

function initScrollEffects() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.stat-item, .skill-category, .project-card, .education-card, .highlight-item, .contact-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('scroll-reveal', 'active');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        revealObserver.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileNav = document.getElementById('mobileNav');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.className = 'fas fa-bars';
                }
            }
        });
    });
}

// ========================================
// PARTICLES BACKGROUND
// ========================================

function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        resizeCanvas();
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
        animate();
    });
}

// ========================================
// TYPING EFFECT
// ========================================

function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let index = 0;

    function type() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    setTimeout(type, 1000);
}

// ========================================
// CURSOR TRAIL EFFECT
// ========================================

function initCursorTrail() {
    let trails = [];
    const maxTrails = 15;

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);

        trails.push(trail);

        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(2)';
        }, 10);

        setTimeout(() => {
            trail.remove();
        }, 300);

        if (trails.length > maxTrails) {
            const oldTrail = trails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }
    });
}

// ========================================
// ANIMATED COUNTERS
// ========================================

function animateCounters() {
    const statValues = document.querySelectorAll('.stat-value');

    statValues.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = stat.textContent;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '%');
            }
        }, 16);
    });
}

// Initialize counters when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ========================================
// PROJECT CARD TILT EFFECT
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// SKILL ITEMS ANIMATION
// ========================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
    item.style.animation = 'fadeInUp 0.6s ease forwards';
});

// ========================================
// PARALLAX EFFECT
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * -0.2}px)`;
    }
});

// ========================================
// CURRENT YEAR
// ========================================

function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========================================
// RESUME DOWNLOAD
// ========================================

function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');

    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', () => {
        // Small success animation (no preventDefault)
        downloadBtn.classList.add('downloading');

        setTimeout(() => {
            downloadBtn.classList.remove('downloading');
        }, 800);
    });
}

// ========================================
// FLOATING ACTION BUTTON - SCROLL TO TOP
// ========================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1) translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate elements on load
    const animateOnLoad = document.querySelectorAll('.hero-content > *, .hero-image');
    animateOnLoad.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🚀 Premium Portfolio', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c✨ Designed with passion and modern web technologies', 'color: #ec4899; font-size: 14px;');
console.log('%cLooking to hire? Let\'s connect!', 'color: #8b5cf6; font-size: 12px;');
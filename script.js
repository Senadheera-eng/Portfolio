// ============================================
// PROJECTS DATA - EDIT THIS TO ADD YOUR GITHUB PROJECTS
// ============================================
const projects = [
    {
        icon: 'bi-receipt',
        title: 'Invoice Management System',
        description: 'Comprehensive invoice and billing system with complex pricing calculations, free collection tracking, and automated reporting.',
        tags: ['PHP', 'MySQL', 'JavaScript'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    },
    {
        icon: 'bi-graph-up-arrow',
        title: 'Deriv Copy Trading Platform',
        description: 'Real-time trading platform with WebSocket integration for automated trade replication and portfolio management.',
        tags: ['WebSocket', 'Deriv API', 'Real-time'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    },
    {
        icon: 'bi-shop',
        title: 'Multi-Business POS System',
        description: 'Versatile point-of-sale system adapted for various industries including retail, gold shops, and metal crushers with inventory integration.',
        tags: ['PHP', 'Inventory', 'Barcode'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    },
    {
        icon: 'bi-mortarboard',
        title: 'Educational Quiz Platform',
        description: 'Interactive learning platform with multimedia support, progress tracking, and comprehensive quiz management system.',
        tags: ['Flutter', 'PHP Backend', 'MySQL'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    },
    {
        icon: 'bi-cash-coin',
        title: 'Loan Management System',
        description: 'Financial management system with reducing balance calculations, payment tracking, and automated reminders.',
        tags: ['PHP', 'Financial', 'Automation'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    },
    {
        icon: 'bi-car-front',
        title: 'RoadSafe AI',
        description: 'Driver drowsiness detection system combining ESP32-CAM hardware with Flutter mobile application for real-time safety monitoring.',
        tags: ['IoT', 'Flutter', 'ESP32'],
        github: 'https://github.com/Senadheera-eng/project-name',
        demo: null
    }
];

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Initialize Particles.js
    initParticles();
    
    // Load Projects
    loadProjects();
    
    // Initialize Event Listeners
    initNavbar();
    initScrollProgress();
    initBackToTop();
    initContactForm();
    initSmoothScroll();
});

// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ============================================
// LOAD PROJECTS DYNAMICALLY
// ============================================
function loadProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    container.innerHTML = projects.map((project, index) => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="project-card-modern">
                <div class="project-image-modern">
                    <i class="bi ${project.icon}"></i>
                </div>
                <div class="project-content-modern">
                    <h4 class="fw-bold mb-3">${project.title}</h4>
                    <p class="text-muted mb-3">${project.description}</p>
                    <div class="mb-3">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="d-flex gap-3">
                        ${project.github ? `
                            <a href="${project.github}" class="project-link-modern" target="_blank">
                                <i class="bi bi-github"></i> View Code
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link-modern" target="_blank">
                                <i class="bi bi-box-arrow-up-right"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize AOS for dynamically loaded content
    AOS.refresh();
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
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
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================
function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Show success message (you can replace this with actual form submission)
        showAlert('success', 'Thank you for your message! I will get back to you soon.');
        
        // Reset form
        form.reset();
    });
}

// ============================================
// ALERT HELPER
// ============================================
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.style.zIndex = '9999';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// TYPING EFFECT (Optional)
// ============================================
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============================================
// PRELOADER (Optional - uncomment if needed)
// ============================================
/*
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
*/
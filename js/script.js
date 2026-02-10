// Theme Management
const themes = ['dark', 'light', 'midnight', 'forest', 'sunset'];
const themeIcons = {
    dark: '🌙',
    light: '☀️',
    midnight: '🌃',
    forest: '🌲',
    sunset: '🌅'
};

function initTheme() {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme, false);
}

function setTheme(theme, save = true) {
    if (!themes.includes(theme)) return;
    
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : theme);
    
    // Update icon
    const iconEl = document.getElementById('current-theme-icon');
    if (iconEl) iconEl.textContent = themeIcons[theme];
    
    // Save preference
    if (save) {
        localStorage.setItem('theme', theme);
    }
    
    // Close dropdown
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) dropdown.classList.remove('active');
}

function toggleThemeMenu() {
    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Close theme menu when clicking outside
document.addEventListener('click', (e) => {
    const switcher = document.querySelector('.theme-switcher');
    const dropdown = document.getElementById('theme-dropdown');
    
    if (switcher && !switcher.contains(e.target) && dropdown) {
        dropdown.classList.remove('active');
    }
});

// Initialize theme on load
document.addEventListener('DOMContentLoaded', initTheme);

// Typewriter Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Render Functions
function renderHero() {
    const nameElement = document.getElementById('typewriter-name');
    if (!nameElement) return;
    
    typeWriter(nameElement, portfolioData.personal.name, 150);
    
    const summaryEl = document.getElementById('hero-summary');
    if (summaryEl) summaryEl.textContent = portfolioData.personal.summary;
    
    const statsContainer = document.getElementById('hero-stats');
    if (statsContainer) {
        statsContainer.innerHTML = portfolioData.personal.stats.map(stat => `
            <div class="stat-item">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        `).join('');
    }
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="experience-card ${exp.current ? 'active' : ''} fade-in">
            <div class="exp-header">
                <div>
                    <h3 class="exp-title">${exp.title}</h3>
                    <div class="exp-company">${exp.company}</div>
                </div>
                <span class="exp-date">${exp.period}</span>
            </div>
            ${exp.location ? `<div class="exp-location">📍 ${exp.location}</div>` : ''}
            <ul class="exp-points">
                ${exp.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-category fade-in">
            <div class="skill-header">
                <div class="skill-icon">${skill.icon}</div>
                <h3>${skill.category}</h3>
            </div>
            <div class="skill-list">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.certifications.map(cert => `
        <div class="cert-card fade-in">
            <div class="cert-icon">🏅</div>
            <div class="cert-content">
                <h4>${cert.name}</h4>
                <p>${cert.issuer}</p>
            </div>
        </div>
    `).join('');
}

function renderAwards() {
    const container = document.getElementById('awards-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.awards.map(award => `
        <div class="award-item fade-in">
            <div class="award-icon">${award.icon}</div>
            <div class="award-content">
                <h4>${award.title}</h4>
                <p>${award.org}${award.year ? ` • ${award.year}` : ''}${award.desc ? ` • ${award.desc}` : ''}</p>
            </div>
        </div>
    `).join('');
}

// NEW: Render contact details in the new contact section
function renderContactDetails() {
    const container = document.getElementById('contact-details-container');
    if (!container) return;
    
    container.innerHTML = portfolioData.contact.map(link => `
        <a href="${link.href}" class="contact-detail-item" ${link.type !== 'Location' && link.type !== 'Phone' ? 'target="_blank"' : ''}>
            <div class="contact-detail-icon">${link.icon}</div>
            <div class="contact-detail-text">
                <h4>${link.type}</h4>
                <p>${link.value}</p>
            </div>
        </a>
    `).join('');
}

// Contact Form Handling
/**function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message
        form.style.display = 'none';
        successMsg.style.display = 'block';
        
        // Optional: Reset after 5 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            successMsg.style.display = 'none';
        }, 5000);
    });
}**/

// Contact Form Handling with Formspree
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const submitBtn = form?.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn?.textContent || 'Send Message';
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable button during submission
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
        
        // Hide previous messages
        if (successMsg) successMsg.style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                form.reset();
                form.style.display = 'none';
                if (successMsg) successMsg.style.display = 'block';
                
                // Optional: Reset after 5 seconds
                setTimeout(() => {
                    form.style.display = 'flex';
                    if (successMsg) successMsg.style.display = 'none';
                }, 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            if (errorMsg) {
                errorMsg.textContent = error.message || 'Failed to send message. Please try again.';
                errorMsg.style.display = 'block';
            }
        } finally {
            // Re-enable button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    
    const isHidden = nav.style.display === 'none' || nav.style.display === '';
    nav.style.display = isHidden ? 'flex' : 'none';
    
    if (isHidden) {
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.background = 'var(--bg-primary)';
        nav.style.padding = '20px';
        nav.style.borderBottom = '1px solid var(--border-color)';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
     initTheme();
    renderHero();
    renderExperience();
    renderSkills();
    renderCertifications();
    renderAwards();
    renderContactDetails(); // This replaces the old renderContact()
    initContactForm();
    initScrollAnimations();
    initNavbar();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
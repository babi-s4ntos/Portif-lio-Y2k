// ============================================
// Y2K PORTFOLIO - SCRIPT.JS
// Interactive JavaScript for Y2K effects
// ============================================

// ===== LOADING SCREEN =====
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingStatus = document.getElementById('loadingStatus');
    
    const loadingSteps = [
        'Dialing...',
        'Connecting...',
        'Authenticating...',
        'Loading resources...',
        'Almost there...',
        'Welcome!'
    ];
    
    let progress = 0;
    let stepIndex = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = `${progress}%`;
        
        if (progress >= (stepIndex + 1) * 20 && stepIndex < loadingSteps.length - 1) {
            stepIndex++;
            loadingStatus.textContent = loadingSteps[stepIndex];
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
    }, 200);
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// ===== FLOATING ELEMENTS ANIMATION =====
const floatItems = document.querySelectorAll('.float-item');
floatItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.5}s`;
});

// ===== WINDOW CONTROLS (DEMO) =====
const windowControls = document.querySelectorAll('.control');
windowControls.forEach(control => {
    control.addEventListener('click', () => {
        // Add a fun animation
        control.style.transform = 'scale(0.8)';
        setTimeout(() => {
            control.style.transform = 'scale(1)';
        }, 100);
    });
});

// ===== PROJECT FOLDER INTERACTION =====
const projectFolders = document.querySelectorAll('.project-folder');
projectFolders.forEach(folder => {
    folder.addEventListener('click', () => {
        const contents = folder.querySelector('.folder-contents');
        contents.style.display = contents.style.display === 'flex' ? 'none' : 'flex';
        
        // Add glitch effect
        folder.classList.add('glitch');
        setTimeout(() => {
            folder.classList.remove('glitch');
        }, 300);
    });
});

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== EASTER EGG =====
const easterEgg = document.createElement('div');
easterEgg.className = 'easter-egg';
easterEgg.innerHTML = '🎮';
easterEgg.title = 'Click me!';
document.body.appendChild(easterEgg);

let easterEggClicks = 0;
easterEgg.addEventListener('click', () => {
    easterEggClicks++;
    
    if (easterEggClicks === 5) {
        // Mini game trigger
        alert('🎮 SECRET UNLOCKED! 🎮\n\nYou found the hidden easter egg!\n\n+100 XP\n+1 Achievement');
        easterEggClicks = 0;
    } else if (easterEggClicks < 5) {
        const messages = ['Keep clicking...', 'Almost there...', 'You\'re getting closer...'];
        easterEgg.title = messages[easterEggClicks - 1] || 'Keep clicking...';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== TYPING EFFECT FOR HERO =====
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;
let charIndex = 0;

function typeText() {
    if (charIndex < originalText.length) {
        heroSubtitle.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing effect after loading screen
setTimeout(typeText, 3000);

// ===== RANDOM SPARKLE EFFECT =====
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✦';
    sparkle.style.position = 'fixed';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.fontSize = `${Math.random() * 20 + 10}px`;
    sparkle.style.color = ['#FFBACE', '#00D4FF', '#9B59B6', '#FFD700'][Math.floor(Math.random() * 4)];
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '0';
    sparkle.style.opacity = '0';
    sparkle.style.transition = 'opacity 0.5s ease';
    sparkle.style.animation = 'float 3s ease-in-out';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.opacity = '0.6';
    }, 100);
    
    setTimeout(() => {
        sparkle.style.opacity = '0';
        setTimeout(() => {
            sparkle.remove();
        }, 500);
    }, 2000);
}

// Create sparkles periodically
setInterval(createSparkle, 2000);

// ===== CONTACT BUTTON SOUND EFFECT (VISUAL) =====
const contactBtns = document.querySelectorAll('.contact-btn');
contactBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create visual feedback
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.8)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left - 10}px`;
        ripple.style.top = `${e.clientY - rect.top - 10}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== TIMELINE ANIMATION =====
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ===== PARALLAX EFFECT ON SCROLL =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelector('.floating-elements');
    if (floatingElements) {
        floatingElements.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===== KONAMI CODE EASTER EGG =====
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Konami code activated!
            document.body.style.animation = 'rainbow 2s linear infinite';
            document.body.style.backgroundSize = '400% 400%';
            
            setTimeout(() => {
                document.body.style.animation = '';
                document.body.style.backgroundSize = '';
            }, 5000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c✨ Welcome to my Digital Universe! ✨', 'color: #FFBACE; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Y2K aesthetic and pure HTML/CSS/JS', 'color: #00D4FF; font-size: 14px;');
console.log('%cTip: Try the Konami code for a surprise! ↑↑↓↓←→←→BA', 'color: #9B59B6; font-size: 12px;');

// ===== PRELOAD IMAGES =====
// Preload any images if needed in the future
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Handle resize if needed
    }, 250);
});

// ===== HAMBURGER MENU =====
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navbarLinks = document.querySelector('.navbar-links');

if (hamburgerBtn && navbarLinks) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navbarLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navbarLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerBtn.contains(e.target) && !navbarLinks.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navbarLinks.classList.remove('active');
        }
    });
}

// ===== PAINT FUNCTIONALITY =====
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentColor = '#000000';
let currentSize = 5;
let currentTool = 'brush';

// Set canvas size
function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = Math.min(800, container.clientWidth - 20);
    canvas.height = 500;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Drawing functions
function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.lineWidth = currentSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (currentTool === 'eraser') {
        ctx.strokeStyle = '#ffffff';
    } else {
        ctx.strokeStyle = currentColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Touch events
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
});
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
});

// Tool buttons
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTool = btn.dataset.tool;
    });
});

// Color buttons
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentColor = btn.dataset.color;
    });
});

// Size slider
const sizeSlider = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');
sizeSlider.addEventListener('input', (e) => {
    currentSize = e.target.value;
    sizeValue.textContent = currentSize + 'px';
});

// Clear button
document.querySelector('.clear-btn').addEventListener('click', () => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Save button
document.querySelector('.save-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'y2k-painting.png';
    link.href = canvas.toDataURL();
    link.click();
});

// ===== CLICK STAR EFFECT =====
document.addEventListener('click', (e) => {
    // Don't create star if clicking on paint canvas or navbar
    if (e.target.closest('#paintCanvas') || e.target.closest('.y2k-navbar')) {
        return;
    }

    const star = document.createElement('div');
    star.className = 'click-star';
    
    // Randomly choose pink or purple star
    const colors = ['var(--pink-neon)', 'var(--purple-digital)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    star.innerHTML = '✦';
    star.style.left = e.clientX - 15 + 'px';
    star.style.top = e.clientY - 15 + 'px';
    star.style.color = randomColor;
    star.style.textShadow = `0 0 20px ${randomColor}, 0 0 40px ${randomColor}`;
    
    document.body.appendChild(star);
    
    // Remove star after animation
    setTimeout(() => {
        star.remove();
    }, 800);
});

// ===== INITIALIZATION COMPLETE =====
console.log('🎮 Y2K Portfolio initialized successfully!');

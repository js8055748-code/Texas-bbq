// ==================== MENU MOBILE ====================
const mobileMenu = document.querySelector('.mobile-menu-btn');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    const isHidden = window.getComputedStyle(navUl).display === 'none';
    
    if (isHidden) {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'column';
        navUl.style.position = 'absolute';
        navUl.style.top = '100%';
        navUl.style.left = '0';
        navUl.style.right = '0';
        navUl.style.backgroundColor = 'var(--preto-chaminé)';
        navUl.style.padding = '1rem';
        navUl.style.gap = '0.5rem';
        navUl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    } else {
        navUl.style.display = 'none';
    }
});

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se estiver aberto
            if (window.innerWidth <= 768) {
                navUl.style.display = 'none';
            }
        }
    });
});

// ==================== HEADER BACKGROUND NO SCROLL ====================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'var(--preto-chaminé)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ==================== ANIMAÇÃO AO ROLAR (INTERSECTION OBSERVER) ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observar cards do cardápio
document.querySelectorAll('.item-cardapio, .categoria').forEach(card => {
    observer.observe(card);
});

// ==================== MENU MOBILE FECHAR AO CLICAR LINK ====================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navUl.style.display = 'none';
        }
    });
});

// ==================== WINNDOW RESIZE ====================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'row';
        navUl.style.position = 'static';
        navUl.style.boxShadow = 'none';
        navUl.style.padding = '0';
    } else {
        navUl.style.display = 'none';
    }
});

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    // Esconder menu mobile inicialmente
    if (window.innerWidth <= 768) {
        navUl.style.display = 'none';
    }
    
    console.log('Texas BBQ - Site carregado com sucesso!');
});
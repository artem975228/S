// Простой скрипт для плавной прокрутки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем мобильное меню после клика
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        }
    });
});

// Мобильное меню
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Адаптивность меню
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('show');
    }
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
        nav.classList.remove('show');
    }
});
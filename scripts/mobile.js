// Inicializa os ícones Lucide
lucide.createIcons();

// Ano atual no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Menu Mobile Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); 

if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden'); // mostrar menu
        document.body.style.overflow = 'hidden'; // impedir scroll
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // esconder menu
        document.body.style.overflow = ''; // liberar scroll
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // esconder menu ao clicar em link
            document.body.style.overflow = '';
        });
    });
}
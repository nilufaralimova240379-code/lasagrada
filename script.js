// ==========================================================================
// LASAGRADA WEBSITE INTERACTIVITY LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

    // 1. Navbar Scroll Effect (Прокруткада менюга эффект берүү)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Handling (Мобилдик менюну ачуу / жабуу)
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Мобилдик менюдагы шилтеме чыкылдаганда менюну автоматтык түрдө жабуу
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

});

// 3. Gallery Lightbox Functions (Сүрөттөрдү чоңойтуп көрсөтүү)
function openLightbox(element) {
    const imgSrc = element.querySelector('img').src;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// 4. Collection Detail Modal (Коллекция карточкаларынын маалыматы)
function openModal(title, text) {
    alert(title + "\n\n" + text);
}
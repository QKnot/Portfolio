// Certificate Lightbox Functions with Navigation

const certificates = [
    { src: 'image/icpc2025p1.png', caption: 'ICPC Dhaka Regional 2025 - Participation Certificate' },
    { src: 'image/icpc2025p2.png', caption: 'ICPC Dhaka Regional 2025 - Achievement Certificate' },
    { src: 'image/icpc2025p3.png', caption: 'ICPC Dhaka Regional 2025 - Team Excellence' },
    { src: 'image/icpc2025p4.png', caption: 'ICPC Dhaka Regional 2025 - Programming Certificate' },
    { src: 'image/icpc2025p5.png', caption: 'ICPC Dhaka Regional 2025 - Competitive Programming' },
    { src: 'image/icpc2025p6.png', caption: 'ICPC Dhaka Regional 2025 - ICPC 2025' }
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    lightbox.style.display = 'flex';
    lightbox.classList.add('active');
    img.src = certificates[index].src;
    caption.textContent = certificates[index].caption;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentIndex += direction;

    // Loop around
    if (currentIndex < 0) {
        currentIndex = certificates.length - 1;
    } else if (currentIndex >= certificates.length) {
        currentIndex = 0;
    }

    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    // Add fade effect
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = certificates[currentIndex].src;
        caption.textContent = certificates[currentIndex].caption;
        img.style.opacity = '1';
    }, 150);
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// Add smooth image transition
document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('lightbox-img');
    if (img) {
        img.style.transition = 'opacity 0.15s ease';
    }

    // Add fast staggered animation to cards
    const cards = document.querySelectorAll('.certificate-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50 + (index * 60));
    });
});

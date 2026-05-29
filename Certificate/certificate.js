// Certificate Lightbox Functions with Navigation

const certificates = [
    { src: 'image/icpc2025p1.png', caption: 'ICPC Dhaka Regional 2025 - Participation Certificate' },
    { src: 'image/icpc2025p2.png', caption: 'ICPC Dhaka Regional 2025 - Achievement Certificate' },
    { src: 'image/icpc2025p3.png', caption: 'ICPC Dhaka Regional 2025 - Team Excellence' },
    { src: 'image/icpc2025p4.png', caption: 'ICPC Dhaka Regional 2025 - Programming Certificate' },
    { src: 'image/icpc2025p5.png', caption: 'ICPC Dhaka Regional 2025 - Competitive Programming' },
    { src: 'image/icpc2025p6.png', caption: 'ICPC Dhaka Regional 2025 - ICPC 2025' },
    { src: 'image/658387344_122130152169023585_1459835600841281494_n.jpg', caption: 'Certificate 7' },
    { src: 'image/656942176_122130152223023585_7328227418115973037_n.jpg', caption: 'Certificate 8' },
    { src: 'image/658933468_122130152289023585_5888706071906847638_n.jpg', caption: 'Certificate 9' },
    { src: 'image/658937840_122130152343023585_8193064021269962259_n.jpg', caption: 'Certificate 10' },
    { src: 'image/656594291_122130152397023585_1299070417593216126_n.jpg', caption: 'Certificate 11' },
    { src: 'image/656621583_122130152463023585_3435159524454495649_n.jpg', caption: 'Certificate 12' },
    { src: 'image/658417343_122130152577023585_6949603499875702645_n.jpg', caption: 'Certificate 13' },
    { src: 'image/656356612_122130152679023585_8965976401452477941_n.jpg', caption: 'Certificate 14' },
    { src: 'image/657834315_122130152793023585_4558296274824592324_n.jpg', caption: 'Certificate 15' },
    { src: 'image/657340044_122130152949023585_7177952720334494801_n.jpg', caption: 'Certificate 16' },
    { src: 'image/658367301_122130153069023585_1639568802400619339_n.jpg', caption: 'Certificate 17' },
    { src: 'image/657482585_122130153159023585_5902939903108132533_n.jpg', caption: 'Certificate 18' },
    { src: 'image/659027746_122130153243023585_3587508740642468982_n.jpg', caption: 'Certificate 19' },
    { src: 'image/657512510_122130153315023585_8816724405948663326_n.jpg', caption: 'Certificate 20' },
    { src: 'image/658771591_122130153399023585_526260520636660552_n.jpg', caption: 'Certificate 21' }
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

document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for profile image
    const profileImage = document.getElementById('clickableImage');
    profileImage.style.opacity = 0;
    setTimeout(() => {
        profileImage.style.transition = 'opacity 1s ease-in-out';
        profileImage.style.opacity = 1;
    }, 500);

    // Animate social icons on hover
    const socialIcons = document.querySelectorAll('.social-nav a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Add a scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '&uarr;';
    scrollButton.setAttribute('id', 'scrollToTop');
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Add a simple dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌓';
    darkModeToggle.setAttribute('id', 'darkModeToggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });


    const header = document.querySelector('header');
    const profileName = document.querySelector('.profile-name h1');

    // Animated gradient background for header
    let gradient = 0;
    function animateHeader() {
        gradient += 0.5;
        header.style.backgroundImage = `linear-gradient(${gradient}deg, #3498db, #2c3e50)`;
        requestAnimationFrame(animateHeader);
    }
    animateHeader();

    // Typing effect for the name
    const fullName = "Rahul Ghosh";
    let i = 0;
    function typeWriter() {
        if (i < fullName.length) {
            profileName.innerHTML += fullName.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    profileName.innerHTML = '';
    typeWriter();

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Add a subtitle that changes on hover
    const subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Passionate about Classical Computing';
    profileName.after(subtitle);

    const subtitles = [
        'Competitive Programming',
        'Problem Solving',
        'Neural Computing',
        'Quantum Computing',
        'Human Behavior',
        'Evolutionary Biology',
        'Computional Biology',
        'Software Development',
        'Mixed Martial Art(MMA)',
        'Music'
    ];
    let currentSubtitle = 0;

    subtitle.addEventListener('mouseenter', () => {
        currentSubtitle = (currentSubtitle + 1) % subtitles.length;
        subtitle.textContent = subtitles[currentSubtitle];
    });
    
});

// Existing image change function
let isOriginalImage = true;
function changeImage() {
    const image = document.getElementById('clickableImage');
    if (isOriginalImage) {
        image.src = "image/rahul2.jpg";
    } else {
        image.src = "image/rahul.jpg";
    }
    isOriginalImage = !isOriginalImage;
}
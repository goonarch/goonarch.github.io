// Load anime.js library (make sure to include this in your HTML file)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>

// Animation for the download button
anime({
    targets: '.download-button',
    translateY: 10,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
});

// Scroll animation for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

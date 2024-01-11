let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function next() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

function prev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
}



document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

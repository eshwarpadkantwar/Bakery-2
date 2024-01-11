let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
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




// Add click event listeners to the icons
document.getElementById('phone-icon').addEventListener('click', function() {
    window.open('tel:+911234567890', '_blank'); // Replace with your actual phone number
});

document.getElementById('email-icon').addEventListener('click', function() {
    window.open('mailto:ksbakery@gmail.com', '_blank'); // Replace with your actual email address
});

document.getElementById('map-icon').addEventListener('click', function() {
    // Replace with the actual latitude and longitude of your location
    window.open('https://t.ly/j5I1Y', '_blank');
});
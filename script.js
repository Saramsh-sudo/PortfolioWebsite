// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.section, .project-card').forEach((el) => {
        el.classList.add('animate-fade');
        observer.observe(el);
    });

    // Form submission
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form handling logic here
        alert('Thank you for your message!');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});
document.querySelectorAll('.section, .project-card, .blog-post').forEach(el => {
    el.classList.add('pre-fade');
    observer.observe(el);
});

// Contact form (no backend, just a thank you alert)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out, Saramsh will get back to you soon!');
});

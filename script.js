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

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.contact-form').reset();
    document.querySelector('.contact-form').insertAdjacentHTML(
        'afterend',
        '<p class="success-msg" style="color:green;text-align:center;margin-top:1rem;">Thank you for reaching out, Saramsh will get back to you soon!</p>'
    );
});

// JavaScript to trigger animations on scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.about, .curriculum, .testimonials, .cta');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach(function(element) {
        if (scrollTop + window.innerHeight >= element.offsetTop + 100) {
            element.classList.add('reveal');
        }
    });
});

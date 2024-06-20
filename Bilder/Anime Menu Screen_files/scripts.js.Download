let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel .slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('center', 'hidden-left', 'hidden-right', 'active');
        if (index === currentSlide) {
            slide.classList.add('center', 'active');
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add('hidden-right', 'active');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add('hidden-left', 'active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.carousel .slide').length) % document.querySelectorAll('.carousel .slide').length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);

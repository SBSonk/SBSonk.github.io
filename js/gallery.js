const projectCarouselState = {};

function openProject(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove('gallery-hidden');
    document.body.classList.add('disable-scroll');
    showSlide(id, 0);
}

function closeProject(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.add('gallery-hidden');
    document.body.classList.remove('disable-scroll');
}

function changeSlide(id, delta) {
    const slides = document.querySelectorAll(`#${id} .carousel-slide`);
    if (!slides.length) return;
    const current = projectCarouselState[id] ?? 0;
    let next = current + delta;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    showSlide(id, next);
}

function showSlide(id, index) {
    const slides = document.querySelectorAll(`#${id} .carousel-slide`);
    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index);
    });
    projectCarouselState[id] = index;
}
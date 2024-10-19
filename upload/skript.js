const carousel = document.querySelector('.carousel');

// Дублирование слайдов для создания эффекта зацикливания
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    carousel.appendChild(clone);
});

let scrollSpeed = 2; // скорость прокрутки
let position = 0;

function animateSlider() {
    position += scrollSpeed;
    if (position >= carousel.scrollHeight / 2) {
        position = 0; // зацикливаем
    }
    carousel.style.transform = `translateY(${-position}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();
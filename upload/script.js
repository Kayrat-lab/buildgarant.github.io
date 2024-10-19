let currentSlide1 = 0;
let currentSlide2 = 0;

function showSlide(carouselIndex, index) {
    const carousel = document.querySelector(`#carousel${carouselIndex}`);
    const totalSlides = document.querySelectorAll(`#carousel${carouselIndex} .carousel-item`).length;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    if (carouselIndex === 1) {
        currentSlide1 = index;
        carousel.style.transform = `translateX(-${currentSlide1 * 100}%)`;
    } else if (carouselIndex === 2) {
        currentSlide2 = index;
        carousel.style.transform = `translateX(-${currentSlide2 * 100}%)`;
    }
}

function nextSlide(carouselIndex) {
    if (carouselIndex === 1) {
        showSlide(1, currentSlide1 + 1);
    } else if (carouselIndex === 2) {
        showSlide(2, currentSlide2 + 1);
    }
}

function prevSlide(carouselIndex) {
    if (carouselIndex === 1) {
        showSlide(1, currentSlide1 - 1);
    } else if (carouselIndex === 2) {
        showSlide(2, currentSlide2 - 1);
    }
}

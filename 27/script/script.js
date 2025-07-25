// Definitions
// DOM
const track = document.getElementById('slider-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// constants
const sliderRotationInterval = 40000;
const slideWidth = 960; // px

// state
let currentSlideIndex = 0;
let timer = null;

// Functionality
function startRotation() {
    timer = setInterval(nextSlide, sliderRotationInterval);
}

function initDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.append(dot);

        dot.addEventListener('click', _ => {
            clearInterval(timer);
            showSlide(index);
            updateDots(index);
            startRotation();
        });
    });
}

function updateDots(dotIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));

    dots.forEach((dot, index) => {
        if (index === dotIndex) {
            dot.classList.add('active');
        }
    });
}

function showSlide(idx) { // Number
    track.style.transform = `translateX(-${idx * slideWidth}px)`;

    currentSlideIndex = idx;
    updateDots(idx);
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex >= slides.length - 1 ? 0 : ++currentSlideIndex;

    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex <= 0 ? slides.length - 1 : --currentSlideIndex;

    showSlide(currentSlideIndex);
}

// Event Listeners
// TRUE - go forward, FALSE - go backward
function handleBackForward(direction = true) {
    clearInterval(timer);
    if (direction) nextSlide()
    else prevSlide();
    startRotation();
}

nextButton.addEventListener('click', () => {
    handleBackForward();
});

prevButton.addEventListener('click', () => {
    handleBackForward(false);
});





let startX = 0;
let isMoving = false;


track.addEventListener('touchstart', (event) => {
    clearInterval(timer);

    if (event.touches > 1) {
        return;
    }

    startX = event.touches[0].clientX;
    isMoving = true;
});

track.addEventListener('touchmove', (event) => {
    if (!isMoving) return;

    let dx = event.touches[0].clientX - startX;

    track.style.transform = `translateX(${-currentSlideIndex * slideWidth + dx}px)`;
});

track.addEventListener('touchend', (event) => {
    if (!isMoving) return;

    isMoving = false;


    const endX = event.changedTouches[0].clientX;

    const dx = endX - startX;

    if (dx > 200) {
        prevSlide();
    } else if (dx < -200) {
        nextSlide();
    } else {
        showSlide(currentSlideIndex);
    }

    startRotation();
});







// Initialization
showSlide(currentSlideIndex);
startRotation();
initDots();
updateDots(currentSlideIndex);











































































// function showSlide(idx) { // Number
//     slides.forEach((slide, index) => {  // typeof index === 'number'
//         if (index + 1 === idx) {
//             slide.classList.add('active');
//         } else if (slide.classList.contains('active')) {
//             slide.classList.remove('active');
//         }
//     });
// }
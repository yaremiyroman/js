class Slider {
    #track = null;
    #sliderContainer = null;
    #sliderWindow = null;
    #slides = null;
    #dotsContainer = null;
    #prevButton = null;
    #nextButton = null;

    #resizeTimer = null;

    #sliderRotationInterval = null;

    #sliderBasicWidth = null;
    #slideWindowWidth = null;

    #currentSlideIndex = null;
    #timer = null;
    #startX = null;
    #isMoving = null;

    #ratio = 2.66;

    constructor(options = {}) {
        this.#sliderContainer = document.getElementById(options.sliderContainer);
        this.#sliderWindow = document.getElementById(options.sliderWindow);
        this.#track = document.getElementById(options.trackID);
        this.#slides = document.querySelectorAll(options.slidesClass);

        this.#dotsContainer = document.getElementById(options.dotsContainerId);
        this.#prevButton = document.getElementById(options.prevButtonId);
        this.#nextButton = document.getElementById(options.nextButtonId);

        this.#setSliderDimensions(options.sliderWidth);

        this.#sliderRotationInterval = options.sliderRotationInterval;
        this.#currentSlideIndex = 0;
        this.#timer = null;
        this.#startX = 0;
        this.#isMoving = false;

        // Initialization
        this.#initDots();
        this.#updateDots(this.#currentSlideIndex);
        this.#showSlide(this.#currentSlideIndex);
        this.startRotation();

        this.#attachEventListeners();
    }

    // Functionality
    startRotation() {
        this.stopRotation();
        this.#timer = setInterval(() => this.#nextSlide(this.#slides), this.#sliderRotationInterval);
    }

    stopRotation() {
        if (this.#timer) {
            clearInterval(this.#timer);
            this.#timer = null;
        }
    }

    #setSliderDimensions(basicWidth) {


        this.#sliderBasicWidth = basicWidth;
        this.#sliderContainer.style.width = basicWidth + 'px';


        this.#slideWindowWidth = this.#sliderBasicWidth - 240;



        this.#sliderWindow.style.width = this.#slideWindowWidth + 'px';
        this.#sliderWindow.style.height = Math.floor(this.#slideWindowWidth / this.#ratio) + 'px';



        this.#slides.forEach((slide) => {
            slide.style.width = this.#slideWindowWidth + 'px';
            slide.style.height = Math.floor(this.#slideWindowWidth / this.#ratio) + 'px';
        });

    }

    #initDots() {
        this.#slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            this.#dotsContainer.append(dot);

            dot.addEventListener('click', _ => {
                this.stopRotation();
                this.#showSlide(index);
                this.#updateDots(index);
                this.startRotation();
            });
        });
    }

    #updateDots(dotIndex) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));

        dots.forEach((dot, index) => {
            if (index === dotIndex) {
                dot.classList.add('active');
            }
        });
    }

    #showSlide(idx) { // Number
        this.#track.style.transform = `translateX(-${idx * this.#slideWindowWidth}px)`;

        this.#currentSlideIndex = idx;
        this.#updateDots(idx);
    }

    #nextSlide() {
        this.#currentSlideIndex = this.#currentSlideIndex >= (this.#slides.length - 1) ? 0 : ++this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #prevSlide() {
        this.#currentSlideIndex = this.#currentSlideIndex <= 0 ? this.#slides.length - 1 : --this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #handleBackForward(direction = true) {
        this.stopRotation();

        if (direction) this.#nextSlide()
        else this.#prevSlide();

        this.startRotation();
    }

    #attachEventListeners() {
        this.#nextButton.addEventListener('click', () => {
            this.#handleBackForward();
        });

        this.#prevButton.addEventListener('click', () => {
            this.#handleBackForward(false);
        });

        this.#track.addEventListener('touchstart', (event) => {
            this.stopRotation();

            if (event.touches > 1) {
                return;
            }

            this.#startX = event.touches[0].clientX;
            this.#isMoving = true;
        });

        this.#track.addEventListener('touchmove', (event) => {
            if (!this.#isMoving) return;

            let dx = event.touches[0].clientX - this.#startX;

            this.#track.style.transform = `translateX(${-this.#currentSlideIndex * this.#slideWindowWidth + dx}px)`;
        });

        this.#track.addEventListener('touchend', (event) => {
            if (!this.#isMoving) return;

            this.#isMoving = false;


            const endX = event.changedTouches[0].clientX;

            const dx = endX - this.#startX;

            if (dx > 200) {
                this.#prevSlide();
            } else if (dx < -200) {
                this.#nextSlide();
            } else {
                this.#showSlide(currentSlideIndex);
            }

            this.startRotation();
        });

        window.addEventListener('resize', (event) => {

            clearTimeout(this.#resizeTimer);

            this.#resizeTimer = setTimeout(() => {
                this.#setSliderDimensions(event.target.innerWidth > 1500 ? 1500 : event.target.innerWidth)
            }, 500);

        });
    }
}

const slider = new Slider({
    trackID: 'slider-track',
    slidesClass: '.slide',
    dotsContainerId: 'dots',
    prevButtonId: 'prev',
    nextButtonId: 'next',
    sliderRotationInterval: 100000,
    sliderWidth: 1500,
    sliderContainer: 'slider-container',
    sliderWindow: 'slider'
});

const sliderAnother = new Slider({
    trackID: 'slider-track2',
    slidesClass: '.slide2',
    dotsContainerId: 'dots2',
    prevButtonId: 'prev',
    nextButtonId: 'next',
    sliderRotationInterval: 100000,
    sliderWidth: 1500,
    sliderContainer: 'slider-container',
    sliderWindow: 'slider'
});


// setTimeout(() => {
//     slider.stopRotation();
// }, 2500);

// setTimeout(() => {
//     slider.startRotation();
// }, 4000);



// x^3 = x * x * x
// power(x, 3) = x^3 = x * x * x

// x^5 = x^5 = power(x, 5)
// x^5 = x * x^4 = x * power(x, 4)
// x^5 = x * x * x^3 = x * x *  power(x, 3) 
// x^5 = x * x * x * x^2 = x * x * x * power(x, 2)
// x^5 = x * x * x * x * x = x * x * x * x


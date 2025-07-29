class Slider {
    constructor(options = {}) {
        this.track = document.getElementById(options.trackID);
        this.slides = document.querySelectorAll(options.slidesClass);
        this.dotsContainer = document.getElementById(options.dotsContainerId);
        this.prevButton = document.getElementById(options.prevButtonId);
        this.nextButton = document.getElementById(options.nextButtonId);

        this.sliderRotationInterval = options.sliderRotationInterval;
        this.slideWidth = options.slideWidth;

        this.currentSlideIndex = 0;
        this.timer = null;
        this.startX = 0;
        this.isMoving = false;

        // Initialization
        this.initDots();
        this.updateDots(this.currentSlideIndex);
        this.showSlide(this.currentSlideIndex);
        this.startRotation();

        this.attachEventListeners();
    }

    // Functionality
    startRotation() {
        this.stopRotation();
        this.timer = setInterval(() => this.nextSlide(this.slides), this.sliderRotationInterval);
    }

    stopRotation() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    initDots() {
        this.slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            this.dotsContainer.append(dot);

            dot.addEventListener('click', _ => {
                this.stopRotation();
                this.showSlide(index);
                this.updateDots(index);
                this.startRotation();
            });
        });
    }

    updateDots(dotIndex) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));

        dots.forEach((dot, index) => {
            if (index === dotIndex) {
                dot.classList.add('active');
            }
        });
    }

    showSlide(idx) { // Number
        this.track.style.transform = `translateX(-${idx * this.slideWidth}px)`;

        this.currentSlideIndex = idx;
        this.updateDots(idx);
    }

    nextSlide() {
        this.currentSlideIndex = this.currentSlideIndex >= (this.slides.length - 1) ? 0 : ++this.currentSlideIndex;

        this.showSlide(this.currentSlideIndex);
    }

    prevSlide() {
        this.currentSlideIndex = this.currentSlideIndex <= 0 ? this.slides.length - 1 : --this.currentSlideIndex;

        this.showSlide(this.currentSlideIndex);
    }

    handleBackForward(direction = true) {
        this.stopRotation();

        if (direction) this.nextSlide()
        else this.prevSlide();

        this.startRotation();
    }

    attachEventListeners() {
        this.nextButton.addEventListener('click', () => {
            this.handleBackForward();
        });

        this.prevButton.addEventListener('click', () => {
            this.handleBackForward(false);
        });

        this.track.addEventListener('touchstart', (event) => {
            this.stopRotation();

            if (event.touches > 1) {
                return;
            }

            this.startX = event.touches[0].clientX;
            this.isMoving = true;
        });

        this.track.addEventListener('touchmove', (event) => {
            if (!this.isMoving) return;

            let dx = event.touches[0].clientX - this.startX;

            this.track.style.transform = `translateX(${-this.currentSlideIndex * this.slideWidth + dx}px)`;
        });

        this.track.addEventListener('touchend', (event) => {
            if (!this.isMoving) return;

            this.isMoving = false;


            const endX = event.changedTouches[0].clientX;

            const dx = endX - this.startX;

            if (dx > 200) {
                this.prevSlide();
            } else if (dx < -200) {
                this.nextSlide();
            } else {
                this.showSlide(currentSlideIndex);
            }

            this.startRotation();
        });
    }
}



const slider = new Slider({
    trackID: 'slider-track',
    slidesClass: '.slide',
    dotsContainerId: 'dots',
    prevButtonId: 'prev',
    nextButtonId: 'next',
    sliderRotationInterval: 1000,
    slideWidth: 960,
});


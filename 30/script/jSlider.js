class JSlider {
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
        this.#sliderContainer = $(options.sliderContainer);
        this.#sliderWindow = $(options.sliderWindow);
        this.#track = $(options.trackID);
        this.#slides = $(options.slidesClass);

        this.#dotsContainer = $(options.dotsContainerId);
        this.#prevButton = $(options.prevButtonId);
        this.#nextButton = $(options.nextButtonId);

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
        this.#sliderContainer.css('width', basicWidth + 'px');


        this.#slideWindowWidth = this.#sliderBasicWidth - 240;



        this.#sliderWindow.css('width', this.#slideWindowWidth + 'px');
        this.#sliderWindow.css('height', Math.floor(this.#slideWindowWidth / this.#ratio) + 'px');

        const self = this;

        this.#slides.each(function (index, slide) {
            slide.style.width = self.#slideWindowWidth + 'px';
            slide.style.height = Math.floor(self.#slideWindowWidth / self.#ratio) + 'px';
        });
    }

    #initDots() {
        const self = this;

        this.#slides.each(function (index) {
            self.#dotsContainer.append(
                $('<div>').addClass('dot').on('click', _ => {
                    self.stopRotation();
                    self.#showSlide(index);
                    self.#updateDots(index);
                    self.startRotation();
                })
            );
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
        this.#track.css('transform', `translateX(-${idx * this.#slideWindowWidth}px)`);

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
        this.#nextButton.on('click', () => {
            this.#handleBackForward();
        });

        this.#prevButton.on('click', () => {
            this.#handleBackForward(false);
        });

        this.#track.on('touchstart', (event) => {
            this.stopRotation();

            if (event.touches > 1) {
                return;
            }

            this.#startX = event.touches[0].clientX;
            this.#isMoving = true;
        });

        this.#track.on('touchmove', (event) => {
            if (!this.#isMoving) return;

            let dx = event.touches[0].clientX - this.#startX;

            this.#track.style.transform = `translateX(${-this.#currentSlideIndex * this.#slideWindowWidth + dx}px)`;
        });

        this.#track.on('touchend', (event) => {
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

        $(window).on('resize', (event) => {

            clearTimeout(this.#resizeTimer);

            this.#resizeTimer = setTimeout(() => {
                this.#setSliderDimensions(event.target.innerWidth > 1500 ? 1500 : event.target.innerWidth)
            }, 500);

        });
    }
}

const slider = new JSlider({
    trackID: '#slider-track',
    slidesClass: '.slide',
    dotsContainerId: '#dots',
    prevButtonId: '#prev',
    nextButtonId: '#next',
    sliderRotationInterval: 10000,
    sliderWidth: 500,
    sliderContainer: 'slider-container',
    sliderWindow: 'slider'
});


// const appContainer = document.getElementById('app');
// console.log('appContainer > ', appContainer);




// $('#app').hide().show();



// $('<div>').addClass('newDiv').appendTo($('#app'));



// $.ajax({
//     url: "/api/getWeather",
//     data: {
//         zipcode: 97201
//     },
//     success: function (result) {
//         $("#weather-temp").html("<strong>" + result + "</strong> degrees");
//     }
// });




// XmlHTTPRequest


// $.ajax({
//     url: "http://jsonplaceholder.typicode.com/todos/1",
//     success: function (result) {
//         console.log('result > ', result);
//     }
// });


// https://jsonplaceholder.typicode.com/users/3


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         console.log('result > ', result);
//         response.json();
//     })
//     .then(json => console.log(json))



DOM BOM Addeventlistener getelement by iD 
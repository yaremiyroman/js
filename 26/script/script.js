
// const handler1 = function () {
//     console.log('Rectangle clicked!');
// };

// rect.addEventListener(
//     'click',
//     handler1
// );


// rect.addEventListener(
//     'click',
//     function () {
//         console.log('Rectangle clicked with another handler!');
//     }
// );


// rect.removeEventListener('click', handler1);
// rect.remove();


// const rect = document.querySelectorAll('.rect');



// rect.addEventListener('dblclick', function () {
//     console.log('Rectangle DOUBLE clicked!');
// });



// rect.addEventListener('mouseenter', function () {
//     console.log('ON ENTER!');
// });


// rect.addEventListener('mouseleave', function () {
//     console.log('ON LEAVE!');
// });

// rect.addEventListener('mousemove', function () {
//     console.log('ON LEAVE!');
// });



// rect.addEventListener('mousedown', function () {
//     console.log('On Click DOWN!');
// });


// rect.addEventListener('click', handler1);

// rect.addEventListener('mouseup', function () {
//     console.log('On Click UP!');
// });


// document.addEventListener('scroll', function () {
//     console.log('Scrolled!');
// });


// console.log(rect);

// for (let shape of rect) {
//     shape.addEventListener('click', function(event) {
//         console.log('event > ', event.target);
//         console.log('this > ', this);

//         event.target.style.backgroundColor = 'red';

//     });
// }


// const body = document.querySelector('body');
// const red = document.querySelector('.red');
// const blue = document.querySelector('.blue');


// window.addEventListener('click', function (event) {
//     console.log('Window clicked!');
// });

// document.addEventListener('click', function (event) {
//     console.log('Document clicked!');
// });

// body.addEventListener('click', function (event) {
//     console.log('Body clicked!');
// });

// red.addEventListener('click', function (event) {
//     console.log('Red clicked!');
// });

// blue.addEventListener('click', function (event) {
//     console.log('Blue clicked!');
// });



// yellow.addEventListener('click', function (event) {
//     event.stopPropagation();
//     // event.stopImmediatePropagation();
//     console.log('Yellow clicked I');
// });

// yellow.addEventListener('click', function (event) {
//     console.log('Yellow clicked II');
// }, true);

// yellow.addEventListener('click', function (event) {
//     console.log('Yellow clicked III');
// });


// CAPTURING
// EVENT
// BUBBLING



// const yellow = document.querySelector('.yellow');


// yellow.addEventListener('click', function (event) {
//     event.stopPropagation();
//     event.preventDefault();
//     // event.stopImmediatePropagation();
//     console.log('Yellow clicked I');
// });







const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const closeModal = document.getElementById('close-btn');



closeModal.addEventListener('click', function (event) {
    modal.classList.remove('open');
});


document.addEventListener('click', function (event) {
    if (
        // Чи цільовий клік по потрібному елементу
        modal.contains(event.target) &&
        !event.target.classList.contains('modal-content') &&
        event.target !== modalBtn
    ) {
        modal.classList.remove('open');
    }
});



modalBtn.addEventListener('click', function (event) {
    event.preventDefault();

    modal.classList.add('open');
});

const modalTitle = document.querySelector('.modal-content h2');
const modalText = document.querySelector('.modal-content p');

modalTitle.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
});

modalText.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) { // ESC key
        modal.classList.remove('open');
    }
});








const nameInput = document.getElementById('name');
const formSubmit = document.getElementById('submit');
const animalCheckboxes = document.querySelectorAll('[type="checkbox"]');

function isAllNotDigits(input) {
    for (let i = 0; i < input.length; i++) {
        const code = input.charCodeAt(i);

        if (code >= 48 && code <= 57) {
            // Found a digit (char code for '0'–'9')
            return false;
        }
    }

    return true; // No digits found
}

function validateForm() {
    const isInputValid = nameInput.value.length;

    for (let animalCheckboxe of animalCheckboxes) {
        if (animalCheckboxe.checked && isInputValid && isAllNotDigits(nameInput.value)) {
            formSubmit.disabled = false;
            return;
        } else {
            formSubmit.disabled = true;
        }
    }
}

nameInput.addEventListener('input', function (event) {
    validateForm();
});

for (let animalCheckboxe of animalCheckboxes) {
    animalCheckboxe.addEventListener('change', function (event) {
        validateForm();
    });
}

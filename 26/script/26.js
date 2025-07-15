// const rect = document.getElementById('rect');

// // console.log(rect);

// const handleRectClick = function() {
//   alert('click');
// };

// rect.addEventListener("click", handleRectClick);
// rect.removeEventListener("click", handleRectClick);

// rect.addEventListener("dblclick", function() {
//   alert('dbl click');
// });




// // -   mouseenter
// // -   mouseleave
// // -   mousemove

// rect.addEventListener("mouseenter", function() {
//   console.log('mouseenter');
// });

// rect.addEventListener("mouseleave", function() {
//   console.log('mouseleave');
// });

// // rect.addEventListener("mousemove", function() {
// //   console.log('mousemove');
// // });






// rect.addEventListener("mousedown", function() {
//   console.log('mousedown');
// });

// rect.addEventListener("mouseup", function() {
//   console.log('mouseup');
// });


// document.addEventListener("scroll", function() {
//   console.log('scroll');
// });


// document.addEventListener("click", function() {
//   console.log('click document');
// });



// document.addEventListener("keydown", function() {
//   console.log('key down');
// });


// document.addEventListener("keyup", function() {
//   console.log('key up');
// });


// document.addEventListener("keypress", function() {
//   console.log('key press');
// });



// window.addEventListener('load', function() {
//   alert('LOAD DONE');
// });







// rect.addEventListener('mouseenter', function(event) {
//   const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   event.target.style.backgroundColor = color;
// });








// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const grey = document.getElementById('grey');

// addEventListener('eventName', handler() {}, eventCapture - false)

// document.addEventListener('click', function() {
//   console.log('DOCUMENT');
// });

// grey.addEventListener('click', function() {
//   console.log('grey');
// });

// green.addEventListener('click', function() {
//   console.log('green');
//   // alert('!!!!!!!!!!!!');
// });

// blue.addEventListener('click', function(event) {
// event.stopPropagation();
//   console.log('blue');
// });







// const element = document.getElementById('myElement');

// document.addEventListener('click', function (event) {
//     if (!element.contains(event.target)) {
//         // Clicked outside the element
//         console.log('Clicked outside!');
//         // You can close dropdown/modal/etc. here
//     }
// });




// const myLink = document.getElementById('myLink');

// myLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   event.stopPropagation();

//   alert('LINK CLICK');
// });



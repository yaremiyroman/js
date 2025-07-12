// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// - getElementById
// - getElementsByClassName
// - getElementsByTagName
// - querySelector
// - querySelectorAll



// const header = document.getElementById('header');


// console.log(header);

// const menuItems = document.getElementsByClassName('menu__item');

// console.log(menuItems); // <header class="container" id="header">

// for (let i = 0; i < menuItems.length; i++) {
//     console.log(menuItems[i]); // <li class="menu__item">...</li>
// }

// for (menuItem of menuItems) {
//     console.log(menuItem); // <li class="menu__item">...</li>
// }



// const paragraphs = document.getElementsByTagName('p');

// console.log(paragraphs); // <header class="container" id="header">



// - querySelector
// - querySelectorAll

// const headerByID = document.getElementById('header');
// const headerByQuery = document.querySelector('body #header');

// console.log(headerByID);
// console.log(headerByQuery);



// const paragraphs = document.getElementsByTagName('p');
// const paragraphsByQuery = document.querySelector('p');

// console.log(paragraphs);
// console.log(paragraphsByQuery);






// # Навігація по DOM
// - children
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling
// - parentElement
// - closest



// const designLayout = document.querySelector('.content.design-layout');
// const designLayoutNext = designLayout.nextElementSibling;
// const designLayoutPrev = designLayout.previousElementSibling;

// const designLayoutChildrenFirst = designLayout.firstElementChild;
// const lastFirst = designLayout.lastElementChild;
// const designLayoutPerent = designLayout.parentElement;

// const designLayoutChildren = designLayout.children;
// const designLayoutText = designLayoutChildren[1];
// const designLayoutClosest = designLayoutText.closest('.container');



// console.log(designLayoutText); // <p class="design-layout__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// console.log(designLayoutChildren); // HTMLCollection of child elements
// console.log(designLayoutChildrenFirst); // HTMLCollection of child elements
// console.log(lastFirst); // HTMLCollection of child elements
// console.log(designLayoutNext); // HTMLCollection of child elements
// console.log(designLayoutPrev); // HTMLCollection of child elements
// console.log(designLayoutPerent); // HTMLCollection of child elements
// console.log(designLayoutClosest); // HTMLCollection of child elements









// # Операції з DOM контентом
// - createElement
// - innerHTML
// - textContent
// - append
// - prepend
// - before
// - after
// - remove
// - contains



// const newTitle = document.createElement('h1');
// console.log(newTitle); // <h1></h1>


// // newTitle.textContent = 'New Title';
// newTitle.innerHTML = '<span>New Title</span>';

// newTitle.style.color = 'red';
// newTitle.style.fontSize = '32px';


// newTitle.id = 'new-title';
// newTitle.classList.add('new-title-class');



// const headerElement = document.getElementById('header');
// headerElement.style.backgroundColor = 'red';
// const newTitle2 = newTitle;

// headerElement.prepend(newTitle);
// headerElement.append(newTitle2);
// headerElement.before(newTitle);
// headerElement.after(newTitle2);

// headerElement.remove();

// headerElement.removeChild





// const myPar = document.getElementsByClassName('design-layout');
// console.log(myPar[1]);

// const myParText = document.getElementById('design-layout-text');
// console.log(myParText.contains(myParText))








// const myPar = document.getElementsByClassName('design-layout');
// // console.log(myPar[1]);
// // console.log(myPar[1].children);


// for (let parChild of myPar[1].children) {
//     parChild.remove();
//     console.log(parChild);
//     // myPar.removeChild(parChild);
// }





// const element = document.getElementById("design-layout");

// while (element.firstChild) {
//     element.removeChild(element.firstChild);
// }

// console.log(element); // Should be empty now
// console.log(element.children); // Should be empty now







// if (window.innerWidth < 600) {
//     document.body.style.backgroundColor = 'blue';
// }



// const newTimer = window.setTimeout(
//     () => {
//         alert('Hello, this is a delayed message!');
//     },
//     3000
// );

// alert('Timer started!');





// const interval = window.setInterval(() => {
//     console.log('Interval')
// }, 1000);


// window.setTimeout(() => {
//     clearInterval(interval);
// }, 6000);



// alert('123');

// const areYouSure = confirm('Are you sure?');
// console.log(areYouSure); // true or false


// const areYouSure = prompt('Are you sure?', 'yes');
// console.log(areYouSure); // true or false


// open('https://www.example.com', '_blank');

// const testArr = ['value', 123, null];
// const stringifiedArr = JSON.stringify(testArr);

// window.localStorage.setItem('key', stringifiedArr);


// const myArr = window.localStorage.getItem('key');
// console.log(myArr);

// const unserializedArr = JSON.parse(myArr);
// console.log(unserializedArr);




// function setCookie(name, value, days) {
//     const date = new Date();
//     // const utcString = new Date(Date.now()).toUTCString();

//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = `expires=${date.toUTCString()}`;
//     document.cookie = `${name}=${value}; ${expires} path=/`;
// }

// setCookie('username', 'JohnDoe', 7);


// function getCookie(name) {
//     const cookies = document.cookie.split(';');

//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();

//         if (cookie.indexOf(name + '=') === 0) {
//             return cookie.substring(name.length + 1);
//         }
//     }

//     return "";
// }











// navigator.geolocation.getCurrentPosition(
//     function (position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log('latitude > ', latitude);
//         console.log('longitude > ', longitude);

//         document.body.textContent = `${latitude}, ${longitude}`;
//     }
// );




// Browser Web APIs


























































































































































































































































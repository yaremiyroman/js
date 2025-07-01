// // // name, value, expireData, path


// // // timestamp

// // function setCookie(name, value, days) {
// //     const date = new Date();
// //     // const utcString = new Date(Date.now()).toUTCString();
// //     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
// //     const expires = `expires=${date.toUTCString()}`;
// //     document.cookie = `${name}=${value}; ${expires} path=/`;
// // }


// // setCookie('myCat', 'brown', 3);

// // setCookie('myCat2', 'brown');

// // setCookie('myCat', 'brown', -3);


// // function getCookie(name) {
// //     const cookies = document.cookie.split(';');

// //     for (let i = 0; i < cookies.length; i++) {
// //         const cookie = cookies[i].trim();

// //         if (cookie.indexOf(name + '=') === 0) {
// //             return cookie.substring(name.length + 1);
// //         }
// //     }

// //     return "";
// // }

// // // const cookieValue = getCookie('myCat2');
// // // console.log(cookieValue);


// // // const cookieValue2 = getCookie('myCat2zdfgds');
// // // console.log(!!cookieValue2);


// // function hasCookie(name) {
// //     const cookies = document.cookie.split(';');

// //     for (let i = 0; i < cookies.length; i++) {
// //         const cookie = cookies[i].trim();

// //         if (cookie.indexOf(name + '=') === 0) {
// //             return true;
// //         }
// //     }

// //     return false;
// // }


// // console.log(hasCookie('myCat2'));





// // function removeCookie(name) {
// //     document.cookie = `${name}=; expires=Mon, 18 Mar 1980 18:21:36 GMT; path=/`;
// // }

// // removeCookie('myCat2');


// // setCookie('!!!!!!!!!!!', '!!!!!!!!!!!!!!!!!!!!!!', 100);


// // window
// // window.document
// // window.navigator
// // window.screen
// // window.location
// // window.history


// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//         function (position) {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             console.log('latitude > ', latitude);
//             console.log('longitude > ', longitude);

//             document.body.textContent = `${latitude}, ${longitude}`;
//         }
//     );
// } else {
//     alert('Geolocation is not supported yet in this browser!!!')
// }



// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');
// console.log('asdfasdfasdfasdfasdfsadf');

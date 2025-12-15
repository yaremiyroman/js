// const name1 = 'John';
// console.log(name1);

// const name2 = 'Jane';
// console.log(name2);


// window.setTimeout(() => {
//     console.log('name 3');
// }, 1000);


// window.setTimeout(() => {
//     console.log('name 4');
// }, 2000);


// const name3 = 'Jane33';
// console.log(name3);

// Event loop





// callback hell





// setTimeout(() => {
//     console.log('1000');

//     setTimeout(() => {
//         console.log('2000');

//         setTimeout(() => {
//             console.log('4000');
//         }, 4000);
//     }, 2000);
// }, 1000);


// function firstTimeout(callback) {
//     setTimeout(() => {
//         console.log('1000');

//         callback();
//     }, 1000);
// }

// function secondTimeout(callback) {
//     setTimeout(() => {
//         console.log('2000');

//         callback();
//     }, 1000);
// }


// function thirdTimeout(callback) {
//     setTimeout(() => {
//         console.log('4000');

//         callback();
//     }, 1000);
// }



// firstTimeout(() =>
//     secondTimeout(() =>
//         thirdTimeout(() => {
//             console.log('All timeouts completed');
//         })
//     )
// );




// firstTimeout(() => secondTimeout(() =>
//     thirdTimeout(() => {
//         console.log('All timeouts completed');
//     })
// ));




// Promises

// let promiseObject = new Promise((resolve, reject) => {
//     // resolve('Promise RESOLVED');
//     setTimeout(() => {
//         // console.log('1000');
//         reject('Promise REJECTED');
//     }, 1000);
// });


// promiseObject.then(
//     (result) => {
//         return new Promise(resolve => {
//             setTimeout(_ => {
//                 resolve(result + ' after 2 seconds');
//             }, 3000);
//         })
//     }
//     // ,
//     // (reject) => {
//     //     console.log('Promise REJECTED: ', reject);
//     // },
// ).then((result) => {
//     console.log('Finish > ', result);
// }).catch((reject) => {
//     console.log('Promise REJECTED: ', reject);
// }).finally(() => {
//     console.log('Promise FINALLY');
// });



// function sum(a, b) {
//     return a + b;
// }

// const promiseSum = (x, y) => new Promise((resolve, reject) => {
//     resolve(sum(x, y));
// });


// promiseSum(5, 10).then(result => {
//     console.log('Sum result:', result);
// });



// let delay = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Delay completed');
//     }, 1000);
// });


// Promise.resolve(setTimeout(() => {
//     resolve('Delay completed');
// }, 1000));


// Promise.reject(setTimeout(() => {
//     resolve('Delay completed');
// }, 1000));


// pending
// fulfilled  -> resolve()
// rejected -> reject()


// delay
//     .then((result) => {
//         console.log(result + ' after 1 second');

//         return new Promise(resolve => {
//             setTimeout(_ => {
//                 resolve(result + ' after 2 seconds');
//             }, 2000);
//         });
//     })
//     .then((result) => {
//         console.log(result);

//         return new Promise(resolve => {
//             setTimeout(_ => {
//                 resolve(result + ' after 2 seconds');
//             }, 4000);
//         });
//     })
//     .then((result) => {
//         console.log(result);

//         return new Promise(resolve => {
//             setTimeout(_ => {
//                 resolve(result + ' after 2 seconds');
//             }, 10000);
//         });
//     })
//     .then((result) => {
//         console.log(result);
//     });





// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// async function run() {
//     console.log('Start RUN');
//     await delay(2000);
//     console.log('End RUN');
//     await delay(3000);
//     console.log('End RUN 2');
// }

// run();





// async function f() {
//     return Promise.resolve(1);
// }

// f().then(result => console.log('result > ', result)); // 1



// const todosUrl = 'https://jsonplaceholder.typicode.com/todos';



// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// function fetchTodos() {
//     return delay(2000)
//         .then(() => {
//             return fetch(todosUrl);
//         })
//         .then(response => response.json())
// }

// // fetchTodos().then(result => console.log('res > ', result));




// async function fetchTodosAsync() {
//     await delay(2000);

//     const response = await fetch(todosUrl);

//     const data = await response.json();

//     console.log('data > ', data);
// }


// fetchTodosAsync();

// AJAX










// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log('Fetch data > ', data));











console.log('1');

function fn1() {
    console.log('2');
    fn2();
    console.log('3');
}

function fn2() { console.log('4'); }

console.log('5');

setTimeout(() => console.log('6'), 1);

setTimeout(() => console.log('7'), 0);

setTimeout(() => console.log('8'), 100);

Promise.resolve().then(() => console.log('9'));

setTimeout(() => console.log('10'), 0);

Promise.resolve().then(() => console.log('11'));

console.log('12');

fn1();

console.log('13');


// 1
// 5
// 12
// 2
// 4
// 3
// 13

// 9
// 11

// 7
// 10
// 6
// 8



const BASE_URL = 'https://jsonplaceholder.typicode.com';

// // https://jsonplaceholder.typicode.com/posts
// // GET
// fetch(`${BASE_URL}/posts`)
//     .then(res => res.json())
//     .then(res => console.log('Posts > ', res));



// // https://jsonplaceholder.typicode.com/posts/1
// // GET
// fetch(`${BASE_URL}/posts/1`)
//     .then(res => res.json())
//     .then(res => console.log('Post 1 > ', res));


//endpoint

// https://jsonplaceholder.typicode.com/posts
// POST
// fetch(
//     `${BASE_URL}/posts`,
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: 'NEW TITLE',
//             body: 'Lorem ipsum dolor sit amet',
//             userId: 1,
//             id: 101
//         })
//     }
// )
//     .then(res => res.json())
//     .then(data => console.log('Posts > ', data));




// // https://jsonplaceholder.typicode.com/posts
// // PUT
// fetch(
//     `${BASE_URL}/posts/1`,
//     {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: 'NEW TITLE',
//             body: 'Lorem ipsum dolor sit amet',
//             userId: 1,
//             id: 101
//         })
//     }
// )
//     .then(res => res.json())
//     .then(data => console.log('Posts > ', data));





// // https://jsonplaceholder.typicode.com/posts
// // PATCH
// fetch(
//     `${BASE_URL}/posts/1`,
//     {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             body: 'NEW BODY',
//         })
//     }
// )
//     .then(res => res.json())
//     .then(data => console.log('Posts > ', data));





// // https://jsonplaceholder.typicode.com/posts
// // DELETE
// fetch(
//     `${BASE_URL}/posts/1`,
//     {
//         method: 'DELETE',
//     }
// )
//     .then(res => res)
//     .then(data => console.log('Posts > ', data.status));



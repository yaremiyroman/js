'use strict';

// то він виконується після виклику функції sum(a, b), і як вхідне значення приймає результат роботи функції sum(a, b).
// - Функція main повинна повертати результат функції аргументу cb, якщо він є, або результат функції sum(a, b)

// function main(a = 2, b = 3, cb) {
//     if (typeof cb === 'function') {
//         return cb(sum(a, b));
//     } else {
//         return sum(a, b);
//     }
// }

// function cb(result) {
//     alert(result);
// }

// function sum(a, b) {
//     return a + b;
// }

// // const res = main(7, 9);
// // console.log('res > ', res);

// main(10, 20, cb);



// const cityProperties = ["name", "area", "population", "main street", "mayor's name"];


// function createCity(properties) {
//     const city = {};

//     properties.forEach(function(elem, i) {
//         city[elem] = prompt(`Enter your city ${elem}`, elem);
//     });

//     return city;
// } 

// const city  = createCity(cityProperties);
// console.log('city > ', city);





// let a = 5;
// console.log('a > ', a);

// let b = a;
// console.log('b > ', b);



// let obj1 = {};
// obj1.a = 56;
// obj1 = 10000;
// console.log('obj1 > ', obj1);

// const obj2 = {};
// console.log('obj2 > ', obj2);

// console.log(obj1 === obj2);




// const user = {
//     name: 'Petro',
//     isLoggedIn: true,
// };


// user.name = 'John';

// const admin = user;

// admin.name = 'Paul';


// console.log('user >', user);
// console.log('admin >', admin);




// const user = {
//     name: 'Petro',
//     isLoggedIn: true,
// };

// const admin = user;

// console.log(admin === user);
// console.log({} === {});






// const user = {
//     name: 'Petro',
//     isLoggedIn: true,
// };

// const superUser = {};

// for (let prop in user) {
//     // console.log('prop > ', prop);
//     // console.log('user[prop] > ', user[prop]);

//     superUser[prop] = user[prop];
// }

// superUser.console = 'log';

// console.log('user > ', user);
// console.log('superUser > ', superUser);






// const user1 = {
//     name: 'Petro',
//     isLoggedIn: true,
// };

// // console.log('user1 > ', user1);

// const user2 = {
//     name: 'Qwerty',
//     isLoggedIn: true,
//     age: 423,
//     height: 150,
//     newObj: {
//         x: 1,
//         y: 2,
//         z: {
//             wqert: 'adfgsdg',
//             wqert: 'adfgsdg',
//             wqert: 'adfgsdg',
//         }
//     }
// };

// const postalInfo = {
//     address: 'Deribasovska',
//     zip: 54007,
// }

// // console.log('user2 > ', user2);

// // const result = Object.assign(user1, user2, postalInfo);
// const newResult = Object.assign({}, user1, user2);

// console.log('newResult > ', newResult);





// const user2 = {
//     name: 'Qwerty',
//     isLoggedIn: true,
//     age: 423,
//     height: 150,
//     newObj: {
//         x: 1,
//         y: 2,
//         z: {
//             wqert: 'adfgsdg',
//             wqert: 'adfgsdg',
//             wqert: 'adfgsdg',
//         }
//     }
// };


// const newObject = structuredClone(user2);

// user2.name = 'Zxcvbnm';

// console.log('user2 > ', user2);
// console.log('newObject > ', newObject);





// const user1 = {
//     name: 'Petro',
//     isLoggedIn: false,
//     sayHello: function(newName) {
//         console.log('newName > ', newName);
//         this.name = newName;
//         alert(`Hello, ${this.name}!`);
//     },
//     logOut: function() {
//         this.isLoggedIn = false;
//     },
//     logIn: function() {
//         this.isLoggedIn = true;
//     },
// };


// console.log('user1.isLoggedIn >', user1.isLoggedIn);
// user1.logIn();
// console.log('user1.isLoggedIn >', user1.isLoggedIn);
// user1.name = 'New Name';
// user1.sayHello('SuperUserName');
// user1.logOut();
// console.log('user1.isLoggedIn >', user1.isLoggedIn);

// console.log('user1.name >', user1.name);
// user1.sayHello();



// // Створіть об’єкт ladder, що дозволяє підійматися вгору-вниз

// const ladder = {
//     step: 0,
//     goUpstairs: function() {
//         this.step++;
//     },
//     goDownstairs: function() {
//         this.step--;
//     },
//     showCurrentStep: function() {
//         console.log('step >', this.step);
//     }
// };

// ladder.showCurrentStep();
// ladder.goUpstairs();
// ladder.goUpstairs();
// ladder.goUpstairs();
// ladder.showCurrentStep();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.goDownstairs();
// ladder.showCurrentStep();


// var, let, const








//global

// let

// function f() {
//     const x = true;

//     if (x === true) {
//         // block 
//         const y = 'Hello';
//         console.log('y > ', y);
//     }
//     const y = 'Hello Next';

//     console.log('y > ', y);

// }


// f();












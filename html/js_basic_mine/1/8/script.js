// # Реалізуйте функцію removeElement(array, item, new), яка шукає елементи item в масиві array та замінює їх на newElem.

// function removeElement(array, item, newItem) {
//     return array.map(
//         (elem) => {
//             if (elem === item) {
//                 return newItem;
//             } else {
//                 return elem;
//             }
//         }
//     );
// }

// const arr = [5, 7, 8, 9];
// const toFind = 8;
// const toChange = 888;

// const result = removeElement(arr, toFind, toChange);

// console.log('result > ', result);


// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 8));

// console.log( sum );

// const a = 5;
// const b = 'string';



// const x = 6 + 9;

// const newSum = function(a, b) {
//     return a + b;
// };



// function sum(a, b) {
//     return a + b;
// }

// console.log(typeof sum);

// const anotherSum = sum;

// console.log(typeof sum);

// console.log(typeof anotherSum);

// const anotherSum2 = sum(5, 8);

// console.log(typeof anotherSum2);

// // console.log(sum(4, 10));
// // console.log(anotherSum);



// const anon = function() {
//     alert('anon');
// };




// (function() {
//     alert('some alert1');
// })()






// function showLog(result) {
//     console.log('*****************');
//     console.log(`****** ${result} *****`);
//     console.log('*****************');
// }


// function sum(a, b, anyThingBackCall) {
//     const result = a + b;

//     return anyThingBackCall(result);
// }


// showLog('some pretty result');
// const result = sum(3, 8, showLog);
// console.log('result > ', result);

// sum(3, 8, showLog);



// sum(9, 7);


// function sum(a, b) {
//     console.log(a + b);
// }


// sum(9, 999);

// const sum2 = function (a, b) {
//     console.log(a + b);
// };
// sum2(1, 1);

// sum(9234, 999);



// 'use strict';

// const x = 20;

// let A;

// if (x < 10) {

//     A = function() {
//         alert('a');
//     }

// } else {

//     A = function() {
//         alert('b');
//     }

// }


// A();










// function sum(a, b) {
//     return a + b;
// }


// const sumExpression = function(a, b) {
//     return a + b;
// }


// const sumArrow = (a, b) => a + b;


// console.log('sum(a, b) > ', sum(3, 4));
// console.log('sumExpression(a, b) > ', sumExpression(6, 9));
// console.log('sumArrow(a, b) > ', sumArrow(5, 5));







// const sumArrow = (a, b) => a + b;

// const sumArrow = (a, b) => a + b;



// console.log('sumArrow(a, b) > ', sumArrow(5, 5));

// const newArrow = x => alert(x);

// const newFunction = _ => alert('Pryvit');



// newFunction();




// # Реалізуйте функцію removeElement(array, item, new), яка шукає елементи item в масиві array та замінює їх на newElem.








// function removeElement(array, item, newItem) {
//     return array.map(
//         (elem) => {
//             if (elem === item) {
//                 return newItem;
//             } else {
//                 return elem;
//             }
//         }
//     );
// }


// const removeElement = (array, item, newItem) =>
//     array.map(elem => elem === item ? newItem : elem);


// const arr = [5, 7, 8, 9];
// const toFind = 8;
// const toChange = 888;

// const result = removeElement(arr, toFind, toChange);

// console.log('result > ', result);






// function sum(a, b, operation = '+') {
//     if (operation === null) return;

//     if (operation === '+') {
//         return a + b;
//     } else if (operation === '-') {
//         return a - b;
//     }
// }



// const sum = (a, b, operation) => operation === '+' ? a + b : a - b;



// const Y = sum(2, 9, '+');
// console.log('Y  > ', Y);


// sum(34, 6);


// function sum(a, b) {
//     console.log(a + b);
// }


// const sum = (a, b) => a + b;

// const sum2 = (a, b) => a + b;
// const showMessage = _ => alert('1');


// sum3(4, 7);

// const sum3 = (a, b) => {
//     console.log('123');
//     console.log('sdfgdsfgsdfgsdfg');
//     console.log(a + b);
// }




// let sum6;

// sum6 = function(a,b) {
//     return a + b;
// }

// sum6 = 5;

// sum6 = function(a,b) {
//     return a + b;
// };
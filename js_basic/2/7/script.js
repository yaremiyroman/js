// const arr = [false, 1, '', -234, 0, -0.434, NaN, undefined, null, undefined, 4];
// const arr1 = [1, 'string', -234, -0.434, 4];

// const resultArray = [];

// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];

//     if (item !== 0 && item !== null && item !== undefined && !isNaN(item) && !!item) {
//         resultArray.push(item);
//     }
// }

// arr.forEach(item => {
//     if (item !== 0 && item !== null && item !== undefined && !isNaN(item) && !!item) {
//         resultArray.push(item);
//     }
// });

// const resultArray = arr.filter(item => {
//     if (item !== 0 && item !== null && item !== undefined && !isNaN(item) && !!item) {
//         return true;
//     }
// });

// const resultArray = arr.filter(item => {
//     if (item !== 0 && item !== null && item !== undefined && !isNaN(item) && !!item) {
//         return true;
//     }
// });

// const resultArray = arr.filter(item => {
//     if (!!item) {
//         return true;
//     }
// });

// const resultArray = arr.filter(item => {
//         return !!item;
// });

// const resultArray = arr.filter(item => !!item);

// const resultArray = arr.filter(item => Boolean(item));

// function Boolean(value) {
//     return !!value;
// }

// const resultArray = arr.filter(Boolean);

// console.log('resultArray >', resultArray);

// array.forEach(element => {

// });

// filter

// map

// every
// some
// reduce

// const numbers = [4, 6, 0, 2, 4];

// const resultArray = numbers.map((item, index, arr) => {
//     console.log('item > ', item);

//     const newItem = item + 2;

//     return newItem;
// });

// console.log('resultArray > ', resultArray);

// const arr1 = [34, 5, 2, 7, 2, 6];

//          1 2 3
//---------------
//  1       5 8 9
//  2       3 6 7
//  3       2 4 6

// console.log('arr2 > ', arr2);

// const arr2 = [  [5, 8, 9],   [3, 6, 7],    [2, 4, 6]  ];

// // console.log(arr2);
// // console.log(arr2[0]);
// // console.log(arr2[0][1]);
// // console.log(arr2[2][0]);

// for (let i = 0; i < arr2.length; i++) {
//     const subArray = arr2[i];

//     for (let k = 0; k < subArray.length; k++) {
//         console.log(`arr2[${i}][${k}] =>  ${arr2[i][k]}`);
//     }

// }

// console.log('!!!!!!!!!!!!!!!!!');
// alert('ALERT!!!');

// console.log(
//     `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//      Magni iure corporis architecto, labore minima blanditiis vero,
//     perspiciatis natus rerum dolore perferendis est, nostrum ad aut recusandae
//     similique amet accusamus. Sint!`
// );

// function showMessage() {
//     console.log(
//         `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//          Magni iure corporis architecto, labore minima blanditiis vero,
//         perspiciatis natus rerum dolore perferendis est, nostrum ad aut recusandae
//         similique amet accusamus. Sint!`
//     );
// }

// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// const cat = 'Tom';
// const color = 'Red';
// const age = 18;

// const newVar = 'Show me';

// function showVar() {

//     console.log('newVar 1 > ', newVar);

//     const localVar = 'I am Local var';

//     console.log('localVar > ', localVar);

//     const secondLocalVar = 77;
//     console.log('secondLocalVar > ', secondLocalVar);
// }

// function yetAnotherOneFunc() {
//     // const anotherVar = '111';
//     // console.log('anotherVar > ', anotherVar);
//     // console.log('newVar 2 > ', newVar);

//     showVar();
//     newnew();
// }

// function newnew() {
//     console.log('NEW NEW');
// }

// // console.log('secondLocalVar > ', secondLocalVar);

// showVar();
// yetAnotherOneFunc();

// {
//     const localVar = 222;
//     console.log(localVar2);

//     function showVar() {
//         const localVar2 = 111;

//         console.log(localVar2);

//          {
//             {
//                 {
//                     {
//                         console.log('localVar > ', localVar);
//                     }
//                 }
//             }
//          }
//     }

//     showVar();
// }

// alert('Some String', 'Sometghing else', 8);

// console.log(8);

// function showLog(messageType) {

//     console.log('Some ' + messageType + ' message');

// }

// showLog('error');
// showLog('confirm');
// showLog('warning');

// const a = 7;
// const b = 8;
// const sum = a + b;
// console.log('sum > ', sum);

// function sum(a, b) {
    // if (a === undefined) {
    //     a = 0;
    // }

    // if (b === undefined) {
    //     b = 0;
    // }

//     const result = a + b;
//     console.log(result);
// }

// sum();

// function sum(a, b) {

    // a = a ?? 10;
    // b = b ?? 10;

//     const result = a + b;
//     console.log(result);
// }

// sum(2, 0);

// function sum(a, b) {

//     a = a || 10;
//     b = b || 10;

//     const result = a + b;
//     console.log(result);
// }

// sum(2, 0);

// function sum(a, b = 10) {

//     const result = a + b;
//     console.log(result);
// }

// sum(undefined, 6);

// function sum(a, b = 10) {
//     let result = a + b;
//     alert(result);

//     result += 10;
//     console.log('result > ', result);

//     result = result / 8;

//     return result;
// }

// // const summa = sum(2, 3);

// // console.log('summa >', summa);

// const summa = sum(2, 3);
// console.log('summa >', summa);

// function sumX3(a, b = 10, c = 0) {
//     let result = a + b + c;

//     return result;
// }

// const result = sumX3(1, 2, 3);

// console.log('result > ', result);

// Порівняння двох чисел

// function compare(x, y) {
//     if (x > y) {
//         return x;
//     } else if (x < y) {
//         return y;
//     } else {
//         return 'Ніхто не більший, не меньший';
//     }
// }

// const result = compare(2, 2);
// console.log('result > ', result);

// # Напишіть функцію operation, що приймає 3 аргумента: число,
// число, та необовʼязковий параметр +/- , в залежності від якого
// виконується відповідна операція

// function operation(a, b, sign = "+") {
//     if (sign === "+") {
//         const sum = a + b;
//         return sum;
//     }

//     if (sign === "-") {
//         return a - b;
//     }
// }

// console.log(operation(6, 3));
// console.log(operation(6, 2, "-"));





// JavaScript

// ECMAScript
// escript

// if
// switch
// []
// Number\
// 'asdfsadfsa'
// 2 + 5 


// 94 - es1
// 99 - es2

// 2009 - es5 
// 2015 - es6 = ES2015

// 2016 -es7
// 2017 -es8
// 2020 -es9

// var -> let const




// // es5
// for
// while
// do while;

// // es6
// forEach
// Map
// reduce
// filter
// some
// every
// reduceRight



// let a: number = 5;

// a = 'sdfgdsg'; ERROR
// a = false;

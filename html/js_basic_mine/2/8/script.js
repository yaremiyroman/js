// function declaration
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// function declaration
// function sumExpression(a, b) {

// }

// function expression
// const sumExpression = function(a, b) {
//     return a + b;
// }

// const anotherFunctionName = sumExpression;
// const yetAnotherFunc = sumExpression;

// console.log(sumExpression(2,3));
// console.log(anotherFunctionName(4,6));
// console.log(yetAnotherFunc(6, 7));

// function sum(a, b) {
//     return a + b;
// }

// const num = 5;
// const str = 'string';
// const sum = function(a, b) {
//     return a + b;
// }

// console.log(typeof sum);

// console.log(sum(3,5));

// console.log(sum);

// function with name
// function someNameFunction() {
//     return null;
// }

// anonymous function
// function(a, b, ...) {
//     return null;
// }

// const anon = function(a) {
//     alert('I am anonymous function = ' + a);
// }

// anon('anything');

// function declaration
// function newName(a) {
//     return a;
// }

// // function expression
// const newName = function(a) {
//     return a;
// }

// // anonymous function
// function(a) {
//     return a;
// }

// function newName(a) {
//     return 'I am A';
// }

// function newName(b) {
// return 'I am B';
// }

// console.log(newName(10));
// console.log(newName(10));

// let newName = function(a) {
//     return 'I am A';
// }

// newName = function(b) {
//     return 'I am B';
// }

// console.log(newName());

// function newName(a) {
// return 'I am A';
// }

// const newName = function() {
//     return 'I am A';
// }

// console.log(newName);

// f(x) = y

// function myFunction(x) {
//     let y = x + 1;
//     return y;
// }

// const result = myFunction(5);

// function sayHello() {
//     alert('Hello!');
//     const a = 16;
//     const b = '17';

//     return a + b;
// }

// const newResult = sayHello();
// console.log(newResult);

// function sum(a, b) {
//     const result = a + b;

//     return result;
// }

// const sumResult = sum(4, 6);

// console.log(sumResult);

// (expresion)
// {block}

// Immediate invoked function

// (function() {

//     const myVar = 2;
//     console.log(myVar);

// })()

// function showLog(result) {
//     console.log('*******************');
//     console.log('******* ' + result + ' *******');
//     console.log('*******************');
// }

// function sum(a = 1, b = 4, cb) {
//     const sumResult = a + b;

//     return callBack(sumResult);
// }

// sum(6, 5, showLog);

// const a = 10;

// let myFunc = null;

// if (a < 5) {
//     myFunc = function() {
//         alert('I am firstFunction');
//     }
// } else {
//     myFunc = function() {
//         alert('I am secondFunction');
//     }
// }

// myFunc();

// function nameFunc(a,g,b,) {
//     return null;
// }

// function nameFunc2() {
//     nameFunc3();
// }

// function nameFunc3() {
//     return nameFunc();
// }

// # Arrow functions

// function sum(a, b) {
//     const myResult = a + b;
//     return myResult;
// }

// const result = sum(5, 6);

// console.log("result > ", result);

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;
// const sum = (a, b) => {
//     return a + b;
// }
// const sum = (a, b) => {
//     const myResult = a + b;
//     return myResult;
// }

// const result = sum(5, 6);

// console.log("result > ", result);

// const showMessage = () => alert('Hello!');
// showMessage();

// const myMessage = (str) => alert('Hello! ' + str);

// myMessage('Monday');

// // function() {
// //     return alert('Hello!');
// // }

// function sum(a, b) {
//     a = a + 10;
//     b = a / 5;
//     let c = a * b;
//     return c;
// }

// const sum = (a, b) => a + b;

// const showMessage = () => alert('Hello!');
// showMessage();

// # Переписуємо функції на стрілкові функції та функціональні вирази.
//  Функція отримує на вході 2 числа. Якщо числа парні - повертає добуток
//  чисел, якщо непарні - їх суму, інакше - повернути непарне число.

// function homeWork(x, y) {
//     if (x % 2 === 0 && y % 2 === 0) {
//         return x * y;
//     } else if (x % 2 !== 0 && y % 2 !== 0) {
//         return x + y;
//     } else {
//         if (x % 2 !== 0) {
//             return x;
//         } else {
//             return y;
//         }
//     }
// }

// // function homeWork(x, y) {
// const homeWork = (x, y) =>
//     x % 2 === 0 && y % 2 === 0
//         ? x * y
//         : x % 2 !== 0 && y % 2 !== 0
//         ? x + y
//         : x % 2 !== 0
//         ? x
//         : y;

// const result = homeWork(4, 4);

// console.log("result > ", result);




// function whoIsBigger(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// const whoIsBigger = (a, b) => {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// const whoIsBigger = (a, b) => {
//     return (a > b) ? a : b;
// }

// const whoIsBigger = (a, b) => {
//     return a > b ? a : b;
// }

// const whoIsBigger = (a, b) => a > b ? a : b;

// const biggerNumber = whoIsBigger(17, 9);
// console.log('biggerNumber > ', biggerNumber);



//   Напишіть функцию main (a, b, cb) наступним чином:

// - Якщо a та b не передані, вони дорівнюють за замовчюванням 2 
// та 3  відповідно.

// - Якщо аргумент cb переданий і він є функцією, то він 
// виконується після виклику функції sum(x, y), і як вхідне значення приймає
// результат роботи функції sum(x, y).

// - Функція main повинна повертати результат функції аргументу cb, якщо він є, 
// або результат функції sum(x, y)


// function sum(x, y) {
//     return x + y;
// }

// function showMessage(message) {
//     alert(message);
// }

// function main(a = 2, b = 3, cb) {
//     const result = sum(a, b);

//     if (typeof cb === 'function') {
//         return cb(result);
//     } else {
//         return result;
//     }
// }


// const result = main(6, 8, showMessage);
// console.log('result > ', result);


// # Напишіть фукнцію range(), що приймає наступні аргументи: 
// початок діапазону, кінець діапазону та необовʼязковий крок.
//  Функція повинна повертати масив, якій містить всі числа 
//  з діапазону враховуючи крок.


function range(begin, end, step = 1) {
    const arr = [];

    for (let i = begin; i <= end; i = step + i) {
        arr.push(i)
    }

    return arr;
}

// const result = range(5, 70, 8);
// console.log(result);
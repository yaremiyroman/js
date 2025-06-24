// const newVar = 5 + 8;


// const digit = 3;

// console.log('digit > ', -digit);


// const positiveDigit = -5;

// console.log('positiveDigit > ', +positiveDigit);


// console.log('plus effect > ', +'1234234');





// let num = 5;

// console.log('num > ', --num);
// console.log('num > ', num);


// let num = 5;

// const sum = ++num + 6;

// console.log('sum > ', sum);

// const sum = 10 + 5; // 15
// const difference = 10 - 5; // 5
// const product = 10 * 5; // 50
// const quotient = 10 / 5; // 2


// const isEqual = (10 == 5); // false
// const isNotEqual = (10 != 5); // true
// const isGreater = (10 > 5); // true
// const isLess = (10 < 5); // false



// var isEqual = 10 == 5;
// console.log('isEqual > ', isEqual); // false


// var andOperation = (true && false); // false
// var orOperation = (true || false); // true


// Boolean values
// const positibeBool = true;
// const negativeBool = false;

// Logical operations
// Logical AND
const andOperation = false && false; // false
const andOperation2 = false && true; // false
const andOperation3 = true && false; // false
const andOperation4 = true && true; // true


// const andOperationLong = true && true && true && true && true; // true

// console.log('andOperation4 > ', andOperation4); // false


// // Logical OR
const orOperation = false || false; // false
const orOperation2 = false || true; // true
const orOperation3 = true || false; // true
const orOperation4 = true || true; // true

// const orOperationLong = false && false && false && true && false; // true

// console.log('orOperation4 > ', orOperation4); // false

// // Logical NOT
// const notOperation = true; // false
// console.log('notOperation > ', notOperation); // falser1



// let num = 5;
// console.log('num > ', num);

// // num = num + 7; // 12
// num += 7;
// console.log('num > ', num);

// num += 9; // 21
// console.log('num > ', num);


// const division = 13 / 2; // 5
// const divisionRest = 13 % 2; // 5
// console.log('division > ', division); // 5
// console.log('divisionRest > ', divisionRest); // 1


// const numberOne = 5;
// const numberTwo = 10;

// // Перевіряємо, чи numberOne менше numberTwo
// if (numberOne < numberTwo) {
//     console.log("numberOne менше за numberTwo"); // Виведе: "numberOne менше за numberTwo"
// }


// alert("Hello, world!"); // Виведе: "Hello, world!"


// ()
// const a = ((5 + 7) + 1);


// {
//     const a = 5;
// }

// {

//     const a = 5;

//     console.log('a > ', a); // 5

// }

// console.log('a > ', a); // ReferenceError: a is not defined



// const numberOne = 5;
// const numberTwo = 10;

// // Перевіряємо, чи numberOne менше numberTwo
// if (numberOne > numberTwo) { // false
//     console.log("numberOne менше за numberTwo"); // Виведе: "numberOne менше за numberTwo"
// } else {
//     console.log("numberOne не менше за numberTwo"); // Не виконається
// }




// if (condition) { // logical expression
//     // true
// } else {
//     // false
// }



// if (condition1) { // logical expression
//     // condition1 true
// } else if (condition2) { // logical expression
//     // condition2 true
// } else {
//     // else NEITHER condition1 NOR condition2 true
// }

// if (condition1 && condition2) { // logical expression
//     // condition1 AND condition2 true
// }

// const maxNumber = Math.max(10, 20, 30, 40, 50);
// console.log(maxNumber); // Виведе: 50


// // Math.min(arg1, arg3, arg3);


// var minNumber = Math.min(10, 20, 30, 40, 50);
// console.log(minNumber); // Виведе: 10


// var roundedNumber = Math.round(4.7);
// console.log(roundedNumber); // Виведе: 5

// var floorNumber = Math.floor(4.7);
// console.log(floorNumber); // Виведе: 4


// var sqrtNumber = Math.sqrt(3, 7);
// console.log(sqrtNumber); // Виведе: 4

// var powerNumber = Math.pow(-2, -2);
// console.log(powerNumber); // Виведе: 16


// const randomNumber = Math.random();
// console.log(Math.ceil(randomNumber * 1000)); // Виведе випадкове число між 0 (включно) та 1 (не включно)

// // Math.pow
// let result = Math.pow(2, 8);

// // Оператор **
// result = 2 ** 8;
// console.log(result); // Виведе: 8

// console.log(Math.PI);

// const  myString = 'Begin' + ' End';
// console.log(myString); // Виведе: 'Begin End'


// var text = 'Привіт, світе!';
// console.log(text[3]); // Виведе: 'Привіт, світе!'
// console.log(text.charAt(3)); // Виведе: 'Привіт, світе!'

// console.log(text.length); // Виведе: 13



// const text = 'Привіт, світе!';
// console.log(text.slice(0, 6)); // Виведе: Привіт
// console.log(text.slice(3)); // Виведе: Привіт
// console.log(text.slice(-4, -1)); // Виведе: Привіт



// var text = 'Привіт, світе!';
// console.log(text.indexOf('світе')); // Виведе: 8


// var text = 'Привіт, світе!';
// console.log(text.replace('світе', 'друже')); // Виведе: Привіт, друже!


// var text = 'Привіт, світе!';
// console.log(text.toUpperCase()); // Виведе: ПРИВІТ, СВІТЕ!
// // console.log(text.toLowerCase()); // Виведе: привіт, світе!


// var text = 'Привіт, світе!';
// console.log(text.includes('sdfgsdfg')); // Виведе: true


// var text = 'Привіт, світе!';
// console.log(text.indexOf('sdfgsdfg')); // Виведе: 8

// if (text.indexOf('sdfgsdfg') == -1) {
//     console.log('Підрядок не знайдено'); // Виведе: Підрядок не знайдено    
// }



// var isRainy = true;
// var isSunny = true;

// // Використання логічних значень у умовному операторі
// if (isRainy && isSunny) {
//     console.log('Візьміть парасольку!');
// } else {
//     console.log('Сьогодні парасолька не потрібна.');
// }


// let user = null;

// console.log(user); ;

// user = 'Іван Петрович';

// if (user === null) {
//     console.log('Користувач не визначений.');
// } else {
//     console.log(`Користувач: ${user}`);
// }

// // Пізніше в програмі, користувач отримує значення


// if (user !== null) {
//     console.log(`Користувач: ${user}`); // Виведе: Користувач: Іван Петрович
// }



// const num = 5;
// const myStr = 'Hello, world!';
// const isTrue = true;
// const myNull = null;
// // const myUndefined = undefined;

// const user = {
//     name: 'Іван',
//     age: 30,
//     isActive: true,
// };

// console.log(user); // Виведе об'єкт користувача
// console.log(user.name); // Виведе об'єкт користувача
// console.log(user.age); // Виведе об'єкт користувача
// console.log(user.isActive); // Виведе об'єкт користувача










// function sayGreat() {
//     console.log(`%c*************************`, `color: red;`);
//     console.log('Hello, world!'); // Виведе: Hello, world!
//     console.log(`%c*************************`, `color: red;`);
// }


// sayGreat();

// sayGreat();
// sayGreat();
// sayGreat();
// sayGreat();
// sayGreat();





// function sayGreat(name) {
//     console.log(`%c*************************`, `color: red;`);
//     console.log('Hello, ', name); // Виведе: Hello, world!
//     console.log(`%c*************************`, `color: red;`);
// }


// sayGreat('Roman');

// f(a, b) = y
// function getSum(a, b) {
//     // 5 a
//     // 17 b
//     console.log(a + b);
//     console.log('a + b > !!! '); // Виведе: 22§
// }


// getSum(5, 17); // Виведе: 15
// getSum(7, 7);




function getSum(a, b) {
   const result = a + b;

   return result;
}


const sumResult = getSum(5, 17); // Поверне: 15



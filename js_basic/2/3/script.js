// const first = prompt('Whatever', 333);

// console.log('first > ', typeof first);
// console.log('first > ', typeof first);

// string, number, undefined, null, boolean

// const str = 'Various string';
// const num = 134;

// undefined

// let str2 = 'Second string';

// // let str2;
// let result = str2 + 3;

// console.log('result > ', result);

// console.log('str2 > ', str2);
// console.log('str2 > ', typeof str2);

// const x = NaN;

// console.log('x > ', x);
// console.log('x > ', typeof x);

// const x = 5;
// const y = 0;
// const z = 1;
// const a = -11;

// const str1 = '';
// const str2 = 'dsgdsfgdsfg';
// const str3 = '     df    ';

// const undef = undefined;

// // typeof x = undefined
// let x;

// const x = 5;
// const y = 0;
// const z = 1;
// const a = -11;
// const a2 = NaN;
// const infin = Infinity;
// const negativeInfin = -Infinity;

// const result1 = 100 / 0;
// console.log('result1 > ', result1);

// const result2 = -100 / 0;
// console.log('result1 > ', result2);

// null

// const newVar = null;
// console.log('newVar > ', newVar);

// const digit = 555;
// const zero = 0;

// const undef = undefined;

// // const empty = null;

// let someVart = null;

// boolean

// const firstVar = true;
// const anotherVar = 'true';
// const secondVar = false;

// console.log('firstVar > ', firstVar);
// console.log('anotherVar > ', anotherVar);
// console.log('secondVar > ', secondVar);

// confirm

// const decision = confirm('Are you ready for development');

// console.log('decision > ', decision);

// # Оператори порівняння, порівняння чисел

// const a = 5;
// const b = 6;

// const result = a > b;
// const result = a < b;
// const result =  (a >= b);
// const result =  (a <= b);
// const result =  (a === b);

// console.log('result > ', result);

// # порівняння строк, unicode

// const str1 = 'AAAAAAAA';
// const str2 = 'Aac';

// console.log(str1 < str2);

// 'a'.charCodeAt()

// # порівняння різних типів, строге и нестроге

// const a = 5;
// const b = 5;

// const result = (a === b);
// const result = (a == b);

// console.log("result > ", result);


// const x: number = 5;


// # Перетворення типів
// - String to Number: Number(strNumber);
// - String to Number: +string
// - String to Number: parseInt(strNumber), parseFloat(strNumber);

// const str = '2023.412';
// const num1 = Number(str);
// const num5 = parseInt(str3);
// const num1 = Number('12352135235234532453253245');
// const num5 = parseInt('12341234243124324');
// const num2 = +str;

// console.log('str > ', str);
// console.log('num1 > ', num1);
// console.log('num2 > ', num2);



// const str3 = '421.88421711353251';
// const parsedInt = parseInt(str3);
// const parsedFloat = parseFloat(str3);

// console.log('parsedInt > ', parsedInt);
// console.log('parsedFloat > ', parsedFloat);


// - Number to String: num.toString();
// - Number to String: string + num

// const num = 375;
// console.log('num > ', num);

// const str = num.toString();
// console.log('str > ', str);

// const str2 = num + '';
// console.log('str2 > ', str2);

// Boolean(str);

// numbers
// Boolean(0) = false
// Boolean(1) = true
// Boolean(-6345) = true
// Boolean(Infinity) = true
// Boolean(NaN) = false

// // numbers
// Boolean("sdfgdsdsfg") = true
// Boolean("    ") = true
// Boolean('') = false

// Boolean(null) = false
// Boolean(undefined) = false



// if (condition) {
//     execution block;
// }


// const a = 2;

// if (a > 4) {
//     alert('A greater than 4');
// } else {
//     alert('Hello, world!');
// }


// const a = +prompt('Enter A:', 0);
// console.log('a > ', a);

// const b = +prompt('Enter B:', 0);
// console.log('b > ', b);


// if (a > b) {
//     alert('A is bigger');
// } else {
//     alert('B is bigger');
// }



// if (condition) {
//     execution block 1;
// } else {
//     execution block 2;
// }


// if (condition) {
//     execution block 1;
// } else if (condition2) {
//     execution block 2;
// } else {
//     execution block 3;
// }




// const a = +prompt('Enter A:', 0);
// console.log('a > ', a);

// const b = +prompt('Enter B:', 0);
// console.log('b > ', b);


// if (a > b) {
//     alert('A is bigger');
// } else if (b > a) {
//     alert('B is bigger');
// } else {
//     alert('A equals B');
// }



// # Good Day, Good evening, Good morning

// const hrs = +prompt('What time is it now?', 12);
// console.log('hrs > ', hrs);

// if (hrs < 10) {
//     alert('Good morning');
// } else if (hrs < 18) {
//     alert('Good Day');
// } else {
//     alert('Good evening');
// }



// # Запит на реєстрації з confirm та з перевіркою на повноліття

// const isAdult = confirm('Are you adult?');
// // console.log('isAdult > ', isAdult);
// let age = null;

// if (isAdult) {
//     age = +prompt('Enter your age', 18);

//     if (age > 30) {
//         alert(`My age is ${age}`);
//     } else {
//         console.log(`My age is ${age}`);
//     }
// }




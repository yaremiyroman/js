// const arr = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];
// console.log('arr > ', arr);

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== null && arr[i] !== false && arr[i] !== undefined && !isNaN(arr[i]) && arr[i] !== 0) {
//         newArr.push(arr[i]);
//     }
// }

// arr.forEach(elem => {
//     if (elem !== null && elem !== false && elem !== undefined && !isNaN(elem) && elem !== 0) {
//         newArr.push(elem);
//     }
// });

// const newArr = arr.filter(elem => {
//     if (elem !== null && elem !== false && elem !== undefined && !isNaN(elem) && elem !== 0) {
//         return elem;
//     }
// });

// const newArr = arr.filter(elem => {
//     if (!!elem) {
//         return elem;
//     }
// });

// const newArr = arr.filter(elem => Boolean(elem));

// const newArr = arr.filter(elem => !!elem);

// console.log('newArr > ', newArr);







// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi tempore quis repudiandae incidunt cum notrum officia magni at, fuga assumenda animi totam saepe eum soluta nam quidem qui aperiam.');
// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi tempore quis repudiandae incidunt cum notrum officia magni at, fuga assumenda animi totam saepe eum soluta nam quidem qui aperiam.');
// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi tempore quis repudiandae incidunt cum notrum officia magni at, fuga assumenda animi totam saepe eum soluta nam quidem qui aperiam.');
// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi tempore quis repudiandae incidunt cum notrum officia magni at, fuga assumenda animi totam saepe eum soluta nam quidem qui aperiam.');
// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi tempore quis repudiandae incidunt cum notrum officia magni at, fuga assumenda animi totam saepe eum soluta nam quidem qui aperiam.');


// const age = 5;
// const color = 'red';


// function showLog() {
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!2');
// }

// console.log('age > ', age);

// showLog();
// showLog();
// showLog();
// showLog();
// showLog();
// showLog();




// {
//     const A = 1;
//     console.log('A > ', A);
// }


// {
//     const A = 2;
//     console.log('A > ', A);
// }





// let t1 = 5;
// console.log('t1 > ', t1);



// function newFunction() {
//     t1 = 12345;

//     console.log('t1 > ', t1);

// }




// newFunction();



// f(x) = y;


// function example(x) {
//     console.log(x + 5);
// }

// example(7);
// example(777);
// example(7777);



// function sum(a, b) {
//     const B = b + 1;

//     console.log(a + B);
//     console.log(a - B);
//     console.log('Before that we had ', b);
//     console.log(a / B);
//     console.log(a * B);
// }
// sum(5, 6);



// function sum(a, b, c) {
//     // if (c === undefined) {
//     //     c = 10;
//     // }

//     // c = c ? c : 10;

//     // && || !

//     // c = c || 10;
//     c = c ?? 10;
//     console.log('c > ', c);

//     console.log(a + b + c);
// }


// sum(2, 8, undefined);





// alert(1);

// const X = prompt('???', 100);




// function sum(a, b) {
//     // console.log(a + b);
//     const sum = a + b;

//     return sum;
// }


// sum(2, 8);

// const Y = sum(2, 8);

// console.log('Y  > ', Y);




// function sum(a, b, operation = '+') {
//     if (operation === null) return;

//     if (operation === '+') {
//         return a + b;
//     } else if (operation === '-') {
//         return a - b;
//     }
// }


// const Y = sum(2, 9);
// console.log('Y  > ', Y);








// const firstNumber = 12345;
// const secondNumber = 12345;

// function showPrettyMessage(firstNumber, secondNumber, operation = '=') {
//     console.log('-*************************************-');
//     console.log(`${firstNumber} ${operation} ${secondNumber}`);
//     console.log('-*************************************-');
// }


// if (firstNumber > secondNumber) {
//     showPrettyMessage(firstNumber, secondNumber, '>');
// } else if (firstNumber < secondNumber) {
//     showPrettyMessage(firstNumber, secondNumber, '<');
// } else {
//     showPrettyMessage(firstNumber, secondNumber);
// }







// Функція отримує на вході 2 числа. Якщо числа парні - повертає добуток чисел, якщо непарні - їх суму, інакше - непарне число.


// function compareDigits(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return 'NaN';
//     }

//     if (!(x % 2) && !(y % 2))
//         return x * y;

//     if (!!(x % 2) && !!(y % 2))
//         return x + y;

//     if (!!(x % 2))
//         return x;

//     if (!!(y % 2))
//         return y;
// }



// const result = compareDigits(7, 9);


// const newCompareDigits = compareDigits;


// const result2 = newCompareDigits(4, 8);


// console.log('result > ', result);
// console.log('result2 > ', result2);




// f(startIndex, endIndex, [step]) => []

// function displayRange(startIndex, endIndex, step = 1) {
//     const arr = [];

//     for (let i = startIndex; i <= endIndex; i = step + i) {
//         arr.push(i);
//     }

//     return arr;
// }

// // [4,5,6,7,8 ... 20]
// const result = displayRange(4, 20, 5);
// console.log('result > ', result);





// 3 5 6
// 2 4 6
// 6 3 3


// [[3, 5, 6], [2, 4, 6], [6, 3, 3]]



// function createMatrix(size) {
//     const matrix = [];

//     for (let i = 0; i < size; i++) {
//         matrix[i] = [];

//         for (let j = 0; j < size; j++) {
//             matrix[i][j] = Math.floor(Math.random() * 100);
//         }
//     }

//     return matrix;
// }

// const resultMatrix = createMatrix(3);
// console.table('resultMatrix > ', resultMatrix);

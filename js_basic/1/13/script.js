// console.log(arr.sort());


// console.log([-5, 8, 3, -10, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, 8, -10, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 8, 4, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 8, 3, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 10, 5, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 5, 10, 0]);
// console.log([-5, 3, -10, 8, 4, 3, 8, 5,  0, 10]);



// [6, 3, 5, 4]
// [3, 6, 5, 4]
// [3, 5, 6, 4]
// [3, 5, 4, 6]



// const arr = [-5, 8, 3, -10, 5, 0];

// // console.log('arr    > ', arr);

// function bubbleSort(arr) {

//     for (let j = 0; j < arr.length; j++) {


//         for (let i = 0; i < arr.length; i++) {

//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }

//         }


//     }

//     return arr;
// }


// const result = bubbleSort(arr);

// console.log('result > ', result); 



// Вам буде надано масив з двох чисел. Поверніть суму цих двох чисел плюс суму всіх чисел між ними. Найменше число не завжди буде на першому місці.

// [3, 6]
// [6, 3]



// два однакових числа
// порядок чисел
// вхідні дані: саме масив саме з 2х чисел


// function sumAll(arr) {

//     if (!Array.isArray(arr)) {
//         console.log('Not an array');
//         return;
//     }

//     if (arr.length !== 2) {
//         console.log('Not correct array');
//         return;
//     }

//     const arrSorted = bubbleSort(arr);
//     let sum = 0;

//     for (let i = arrSorted[0]; i <= arrSorted[1]; i++) {
//         sum += i;
//     }

//     return sum;
// }


// console.log(sumAll([6, 2]));



// Рекурсія

// 4! = 1 * 2 * 3 * 4;

// -n! = error
// 0! = 1;
// 1! = 1;

// function factorial(n) {

//     if (n < 0) {
//         console.log('Negative number!!!');
//         return;
//     }

//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }

//     return fact;
// }

// console.log('factorial > ', factorial(4));


// function factorialRecursive(n) {

// }




// 5! = 5 * 4 * 3 * 2 * 1;

// factorialRecursive(5) = 5 * factorialRecursive(4)

// factorialRecursive(5) = 5 * 4 * factorialRecursive(3)

// factorialRecursive(5) = 5 * 4 * 3 * factorialRecursive(2);

// factorialRecursive(5) = 5 * 4 * 3 * 2 * 1;



// function factorialRecursive(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n * factorialRecursive(n - 1);
// }


// {
//     a: {
//         b: {
//             c: {
//                 d: {
//                     ...
//                 }
//             }
//         }
//     }
// }





// function factorialRecursive(n) {

//     if (n < 0) {
//         console.log('Negative number!!!');
//         return;
//     }

//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     return n * factorialRecursive(n - 1);
// }




// const factorialRecursive = n => n < 0 ? console.log('Negative number!!!') :
//     (!n || n === 1) ? 1 : n * factorialRecursive(n - 1);




// console.log('factorialRecursive > ', factorialRecursive(5));









// kebabCase: Перетворіть рядок в шашличний регістр. У шашличному регістрі всі-слова-в-нижньому-регістрі-та-розділені-рискою.

// - spinalCase("This Is Spinal Tap") має повертати рядок this-is-spinal-tap.


// function kebabCase(str) {
//     console.log('str > ', str);

//     const lowerCaseStr = str.toLowerCase();

//     console.log('lowerCaseStr > ', lowerCaseStr);

//     const splittedStr = lowerCaseStr.split(" ");

//     console.log('splittedStr > ', splittedStr);

//     const joinedStr = splittedStr.join("-");

//     console.log('joinedStr > ', joinedStr);
// }



// function kebabCase(str) {
//     const lowerCaseStr = str.toLowerCase();
//     const splittedStr = lowerCaseStr.split(" ");
//     const joinedStr = splittedStr.join("-");

//     return joinedStr;
// }






// function kebabCase(str) {
//     const lowerCaseStr = str.toLowerCase().split(" ").join("-");

//     return lowerCaseStr;
// }




// const kebabCase = str => str.toLowerCase().split(" ").join("-");





// const result = kebabCase("This Is Spinal Tap");
// console.log('result > ', result);

//           "this-is-spinal-tap"


// This
// Is
// Spinal
// Tap
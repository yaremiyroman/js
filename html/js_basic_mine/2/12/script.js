// # Corner cases та рекурсія
// factorial
// 4! = 1 * 2 * 3 * 4
// Знайти факторіaл від довільного number

// function factorial(n) {
//     if (typeof n !== 'number') {
//         return alert('Не число!');
//     }

//     if (n < 0 || n > 20) {
//         return alert('З таким числов факторіл не обчислюється');
//     }

//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }

//     return fact;
// }

// const result = factorial(1);
// console.log('result > ', result );

// 1 * 2  3 4
// 4 * 3 * 2 * 1

// 9!

// 4!

// factorialRecursive(4) = 4 * factorialRecursive(3)
// factorialRecursive(3) = 4 * 3 * factorialRecursive(2)
// factorialRecursive(2) = 4 * 3 * 2 * factorialRecursive(1)

// factorialRecursive(2) = factorialRecursive(4) * factorialRecursive(3) * factorialRecursive(2) * factorialRecursive(1)

// function factorialRecursive(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n * factorialRecursive(n - 1);
// }

// const result = factorialRecursive(5);
// console.log("result > ", result);

// const a = {
//     b: 5,
//     c: {
//         b: 5,
//         c: {
//             b: 5,
//             c: {},
//             bg: 5,
//             cd: {
//                 b: 5,
//                 c: {
//                     b: 5,
//                     c: [3],
//                 },
//             },
//         },
//     },
// };

// bg

// const myArr = [4, 3, 6, 6, 4, 36, 6];
// const toSearch = 36;

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (target === arr[i]) {
//             return i;
//         }
//     }

//     return -1;
// }

// const result = linearSearch(myArr, toSearch);
// console.log(result);

// [3, 4, 6, 7, 8, 9, 36]
//          [7, 8, 9, 36]
//                [9, 36]
//   36

//0  1  2  3  4  5  6
// const myArr = [3, 4, 6, 7, 8, 9, 36];
// const toSearch = 9;

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// const result = binarySearch(myArr, toSearch);

// console.log("result >", result);

// .sort();

// const newArr = [
//     {
//         id: 11,
//         name: 'John61',
//         age: 3,
//     },
//     {
//         id: 53,
//         name: 'John66',
//         age: 2754,
//     },
//     {
//         id: 2727,
//         name: 'John2',
//         age: 3,
//     },
//     {
//         id: 9845,
//         name: 'John1',
//         age: 67,
//     },
//     {
//         id: 6362346,
//         name: 'John14',
//         age: 51,
//     },
// ];

// // 2727







// [6, 3, 5, 4]
// [3, 6, 5, 4]
// [3, 5, 6, 4]
// [3, 5, 4, 6]


// [3, 5, 4, 6]

// [3, 4, 5, 6]


// const arr = [6, 5, 3, 9];

// function bubbleSort(arr) {
//     for (let j = 0; j < arr.length; j++) {

//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr);
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }

//         console.log('---------------');
//     }
// }

// bubbleSort(arr);




// # kebabCase: Перетворіть рядок в шашличний регістр. 
// У шашличному регістрі 
// всі-слова-в-нижньому-регістрі-та-розділені-рискою.
//  Припустимо, що функція на вході отримує одну цілу строку  
// та лише з літерами латинської абетки.

// -   spinalCase("This Is Spinal Tap") 
// має повертати рядок this-is-spinal-tap.

const inputString = "This Is Spinal Tap";
const outputString = "this-is-spinal-tap";

// function toKebabCase(spinal) {
//     console.log('spinal >', spinal);

//     let kebab = spinal.toLowerCase();
//     kebab = kebab.split(" ");
//     kebab = kebab.join("-");

//     return kebab;
// }



// const toKebabCase = spinal => {
//     return spinal.toLowerCase().split(" ").join("-");
// }



const toKebabCase = spinal => spinal.toLowerCase().split(" ").join("-");

const result = toKebabCase(inputString);

console.log('result >', result);
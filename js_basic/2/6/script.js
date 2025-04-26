// # number та його обмеження, кутові випадки

// 9! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9;

// -х!
// 0! = 1
// 1! = 1

// 4.63! = !!!

// [0, 21]

// const value = 0;
// let result = 1;

// if (value < 0) {
//     alert("Відʼємне ПОГАНО!");
// } else if (value === 0 || value === 1) {
//     console.log("result > ", result);
// } else if (value <= 0 || value > 21) {
//     alert('1');
// } else if (!Number.isInteger(value)) {
//     alert("ПОГАНЕ ЧИЛО!");
// } else {
//     for (let i = 1; i <= value; i++) {
//         result *= i;
//     }

//     console.log("---------------------");
//     console.log("result > ", result);
// }

// # Робота з масивами
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// -
// - includes/indexOf
// - find/findIndex
// - split/join
// - slice, split for strings

// const arr = [];

// console.log(typeof arr);

// - splice/slice

// splice(startIndex, [elementAmount, elements1, elements2 ...])

// const arr = [5, 7, 3, 8];
// console.log('arr > ', arr);

// arr.splice(1, 3);
// console.log('arr > ', arr);

// arr.splice(1, 3, 777, 888, 999);
// // console.log('arr > ', arr);

// arr.splice(0, 2);
// // console.log('arr > ', arr);

// const removedElemetns = arr.splice(0, 1);
// console.log('arr > ', arr);
// // console.log('removedElemetns > ', removedElemetns);

// arr.splice(1, 0, null, undefined, 0, -0, 123, 666, true,  1, 1, 1, 1, 1, 1, 1 ,1);
// console.log('arr > ', arr);

// slice
// const arr = [5, 7, 3, 8];

// const result = arr.slice(1, 4);
// const result2 = arr.slice(2);
// console.log('arr > ', arr);
// console.log('result > ', result);
// console.log('result2 > ', result2);
// console.log('arr > ', arr);

// concat/destruction

// const arr1 = [5, 7, 3, 8];
// const arr2 = [6, 2, 7, 8, 3];
// const arrX = ["x", "y", "z", "w"];
// const arr0 = [null, undefined, NaN];

// const arr3 = arr1.concat(arr2, arrX, arr0, 6, ['arr'], NaN);

// console.log('arr1 > ', arr1);
// console.log('arr2 > ', arr2);
// console.log('arr3 > ', arr3);

// const arr4 = [...arr1, ...arr2, ...arrX, ...arr0];
// const arr4 = [...arr1, ...arr2, 0, null, 123];

// console.log("arr4 > ", arr4);

// includes/indexOf
// const arrX = ["x", "y", "z", "w"];

// const isInArray = arrX.includes('x');
// console.log('isInArray > ', isInArray);

// const searchFor = arrX.indexOf('x');
// console.log('searchFor > ', searchFor);

// split/join

// const animals = 'cat, dog, cow, frog, elk';
// const animalsArr = animals.split(',');

// const animals2 = 'cat+dog+cow+frog+elk';
// const animalsArr2 = animals2.split('+');
// console.log('animalsArr2 > ', animalsArr2);

// const animals = ['cat', 'dog', 'cow', 'frog', 'elk'];
// console.log('animals > ', animals);

// const joinedAnimald = animals.join('+-!-+');
// console.log('joinedAnimald > ', joinedAnimald);

// - slice, split for strings

// const animals = 'cat, dog, cow, frog, elk';
// const animalsArr = animals.split(',');

// const str = 'What a happy day!';
// const slicedString = str.slice(0, 4);
// console.log('slicedString > ', slicedString);

// # Сортування масиву
// - sort/reverse

// const arr = [6, 170, 16, 2, 3];

// // const sortedArr = arr.sort();
// // console.log("sortedArr > ", sortedArr);

// const arr = [6, 170, 16, 2, 3];

// const sortedArr = arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     if (a === b) return 0;
// });

// console.log("sortedArr > ", sortedArr);


// const arr = [6, 170, 16, 2, 3];
// console.log("arr > ", arr);

// const arrReversed = arr.reverse();
// console.log("arrReversed > ", arrReversed);



// - forEach

// - filter (typeof number)



// const testArr = [6, 170, 16, 2, 3];

// for (let i = 0; i < testArr.length; i++) {
//     console.log('elem > ', testArr[i]);
// }

// console.log('----------------------');


// const testArr = [6, 170, 16, 2, 3];
// const halfArray = Math.floor(testArr.length / 2);
// console.log('halfArray > ', halfArray);

// testArr.forEach((element, index) => {
//     if (index === halfArray) {
//         console.log('Значення на половині = ', element);
//     };
// });



// testArr.filter((elem, i) => {

// });

// const testArr = [6, 170, 17, 2, 3];


// const filteredArray = testArr.filter((elem, i) => {
//     return (elem % 2 === 0);
// });

// console.log('testArr > ', testArr);
// console.log('filteredArray > ', filteredArray);


// # Перетворити “my-short-string” в “myShortString”




// "my-short-string"
// "my" "short" "string"
// "my" "Short" "String"
// "myShortString"

// const kebabString = "my-short-string";
// console.log('kebabString > ', kebabString);
// const kebabArray = kebabString.split('-');

// kebabArray.forEach((elem, i, kebabBase) => {
//     if (i !== 0) {
//         const splittedElem = elem.split('');
//         splittedElem[0] = splittedElem[0].toUpperCase();
//         const joinedElem = splittedElem.join('');
//         kebabBase[i] = joinedElem;
//     }
// });

// const kebabJoined = kebabArray.join('');
// console.log('kebabJoined > ', kebabJoined);



const str = 'My-$+$-New-$+$-Awesome-$+$-String';
const splittedString = str.split('$+$');

console.log(splittedString);
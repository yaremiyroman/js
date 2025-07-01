// let n = +prompt('Enter number: ', 1);

// let counter = 1;

// if (n === 0 || n <= 1) {
//     console.log(`! = ${counter}`);
// }

// if (n < 0) {
//     console.log(`Відʼємні не потрібні!`);
// }


// for (let i = 1; i <= n; i++) {
//     counter *= i;
// }



// let i = 1

// while (i <= n) {
//     counter *= i;
//     i++;
// }

// let i = 1;

// while (n) {
//     counter *= n;
//     n--;
// }



// console.log('counter > ', counter);





// splice
// const arr = [13, 62, 5, 26, 7, 23, 7, 76]; 

// console.log('arr > ', arr);



// // Array.splice(startIndex, counter, elements...);

// // вирізати 3 елементи починаючи з 2 індексу
// const subArray = arr.splice(2, 3);

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);

// вирізати всі елементи починаючи з 4 індексу

// const arr = [13, 62, 5, 26, 7, 23, 7, 76, null, undefined]; 
// console.log('arr > ', arr);

// const subArray = arr.splice(4);

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);

// вирізати 2 елементи починаючи з 3 індексу, та замість них вставити будь які 2 елементи
// const arr = [13, 62, 5, 26, 7, 23, 7, 76]; 
// console.log('arr > ', arr);

// const subArray = arr.splice(3, 2, 'X', 'Y', 5, 'Z', 'A');

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);

// вирізати 2 елементи починаючи з 3 індексу, та замість них вставити будь які 2 елементи
// const arr = [13, 62, 5, 26, 7, 23, 7, 76];
// console.log('arr > ', arr);

// const subArray = arr.splice(3, 0, 'X', 'Y', 5, 'Z', 'A');

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);



// slice
// const arr = [13, 62, 5, 26, 7, 23, 7, 76]; 

// console.log('arr > ', arr);



// const subArray = arr.slice(3, 6);

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);




// const arr = [13, 62, 5, 26, 7, 23, 7, 76]; 

// console.log('arr > ', arr);

// // вирізати 3 елементи починаючи з кінця
// const subArray = arr.slice(-2, -4);

// console.log('subArray > ', subArray);
// console.log('!arr > ', arr);



// concat/destruction


// const a = [1, 3, 5];
// const b = [2, 5, 3];
// const d = ['2', '5', '3'];



// const c = a.concat(
//     d,
//     b,
//     [4, 4, 4, 4],
//     null,
//     'X',
//     '100*10'
// );

// console.log('a > ', a);
// console.log('b > ', b);
// console.log('c > ', c);





// const a = [1, 3, 5];
// const b = [2, 5, 3];
// const d = ['2', '5', '3'];

// const result = [...a, ...b, ...d, 'Y'];

// console.log('result > ', result);






// - includes/indexOf


// const arr = [13, 62, 5, 26, 7, 'Y', 23, 7, 76];

// console.log('arr > ', arr);

// const isIncluded = arr.includes('Y');


// console.log('isIncluded > ', isIncluded);


// const elemIndex = arr.indexOf('Y');

// console.log('elemIndex > ', elemIndex);






// - split/join (str)

// const arr = [13, 62, 5, 26, 7, 'Y', 23, 7, 76, NaN, null, undefined];

// const joined = arr.join(' <-=-> ');

// console.log('joined > ', joined);


// const strrr = '5+8+3+6+5+8+3+6+5+8+3+6+5+8+3+6';


// const splitted = strrr.split('+');

// console.log('splitted > ', splitted);

// const splitted = strrr.split('');

// console.log('splitted > ', splitted);



// const strr = '   Dovilna dstroka    ';
// console.log('strr > ', strr);


// // const result = strr.split('');
// // const result = strr.slice(2, 5);
// // const result = strr.splice(2);
// const result = strr.trim();




// console.log('result > ', result);




// const arr = [13, 62, 5, 26, 7, 'Y', 23, 7, 76, NaN, null, undefined];

// arr.forEach(function (elem, i) {
//     console.log('i > ', i);
//     console.log('elem > ', elem);
// });


// const result = arr.some(function(elem, i) {
//     return elem === 62;
// })


// console.log('result > ', result);





// const arr = [13, 62, 5, 26, 7,  23, 7, 76];
// const arr2 = ["Sean", "John", "Mark", "Bob",];
// console.log('arr2 > ', arr2);

// const result = arr2.sort();
// console.log('result > ', result);




// const arr = [13, 62, 5, 26, 7, 23, 7, 76];
// console.log('arr > ', arr);

// const result = arr.sort();
// console.log('result > ', result);

// const result = arr.sort(function (a, b) {
//     if (a > b) return 1;
//     // if (a === b) return 0;
//     if (a < b) return -1;
// });
// console.log('result > ', result);





// const arr = [1, 3, 5, 7, 8];
// arr[i];
// console.log('arr[2] > ', arr[2]);

// const arrMulti = [
//     [1, 3, 5],
//     [5, 4, 7],
//     [4, 7, 8],
// ];

// // arr[i][k];
// console.log('arrMulti[2] > ', arrMulti[1]);
// console.log('arrMulti[2] > ', arrMulti[1][2]);


// const arrMulti = [
//     [[1, 4, 6], [3, 4], [5, 6]],
//     [[5, 5], [4, 5], [7, 7]],
//     [[2, 3, 4], [6], [8]],
// ];

// // arr[i][k][j];
// console.log('arrMulti > ', arrMulti);




// const arrMulti = [
//     [1, 3, 5],
//     [5, 4, 7],
//     [4, 7, 8],
// ];


// for (let i = 0; i < arrMulti.length; i++) {
//     for (let k = 0; k < arrMulti[i].length; k++) {
//         console.log(`i > ${i}-${k} =`, arrMulti[i][k]);
//     }
// }








// Перетворити “my-short-string” в “my Short String”

// const str1 = 'dlya-pere-virky';
// // const str2 = 'myShortString';

// const subStrings = str1.split('-');



// subStrings.forEach(function(subString, i) {
//     if (i !== 0) {
//         const chars = subString.split('');
//         chars[0] = chars[0].toUpperCase();

//         subStrings[i] = chars.join('');
//     }
// });

// const result = subStrings.join('');


// console.log('result > ', result);



// # Почистити масив від нуль-значень


const arr = [12, '23424', 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];
// const arr = [12, '23424', 324, 6, 7];




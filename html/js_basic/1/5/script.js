// const year = +prompt('Enter year: ', 0);

// year % 0 === 0 => true
// year % 0 => false  =>  0
// !(year % 0) => !false => true

// if (true) alert('1');

// if (!(year % 400) || (!(year % 4) && year !== 100)) {
//     alert('Високосний');
// } else {
//     alert('-Високосний');
// }


// const variable = (!(year % 400) || (!(year % 4) && year !== 100)) ? alert('Високосний') : alert('-Високосний');


// const variable = 1;

// const arr2 = [];
// const arr3 = new Array(5);

// const arrMix = [1, 3, '234', 'string', null, undefined, NaN, {}];

// console.log(arrMix);


// console.log('typeof > ', typeof arr);

// const arr = [1, 3, 6, 18, 21];
//          // [0, 1, 2, 3, 4];

// console.log(arr[3]);

// arr[3] = 333;

// console.log(arr[3]);



// let a = 15;
// console.log('a > ', a);

// a = 25;
// console.log('a > ', a);

// const ab = [];


// arr[1] = 44;
// arr[2] = 66;

// const arr = [2, 4, 6, 7, 8, 9, 62];
// const arrLength = arr.length;

// console.log('arrLength > ', arrLength);

// const lastElement = arr[arr.length - 1];  // es4
// const lastElement3 = arr.at(-2);  // es6

// console.log('lastElement > ', lastElement);




// const arr = [5, 7, 7, 3, 7, 12];

// // arr[2] = 77;

// // console.log('arr > ', arr);

// arr.shift();

// // console.log('arr > ', arr);

// arr.unshift(111);
// console.log('arr > ', arr);

// arr.unshift(112);
// console.log('arr > ', arr);

// arr.unshift(113);
// console.log('arr > ', arr);


// arr.push(14);
// arr.push(18, 21);
// console.log('arr > ', arr);

// arr.pop();
// console.log('arr > ', arr);



// ЧЕРГА
// const queue = [5, 7, 3, 7, 12];
// console.log('queue > ', queue);

// queue.push(333);
// console.log('queue > ', queue);


// queue.shift();
// console.log('queue > ', queue);


// СТЕК
// const stack = [1, 2, 3, 4, 5];
// console.log('stack > ', stack);

// stack.push('5');
// stack.push('5');
// console.log('stack > ', stack);

// stack.pop();
// console.log('stack > ', stack);




// let a = 5;
// +a;
// -a;


// a++;

// console.log('a > ', a);

// a--;
// a--;
// console.log('a > ', a);


// console.log('a > ', ++a);
// console.log('a > ', a);




// let x = 1;

// while (x <= 5) {
//     console.log(x);

//     x++;
// }





// let x = 1;

// while (true) {
//     console.log(x);

//     x++;
// }




// let x = 8;


// while (x <= 5) {
//     console.log(x);

//     x++;
// }


// do {
//     console.log(x);

//     x++;
// } while (x <= 5);



// let x = 5;

// for (let i = 1; i <= 5; i++) {
//     console.log(i);

// }


// let i = 1;

// for (; ;) {
//     console.log(i);

//     if (i >= 5) {
//         break;
//     }

//     i++;
// }







// Вивести парні числа
// const numbers = [2, 5, 6, 8, 3, 5, 6, 1, 2, 3, 5, 6, 78, 5, 4, 64, 5624, 5624, 7534, 73];

// for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }




// Вивести максимальне число з масива
// const numbers = [2, 5, 6, 8, 3, 5, 6, 7534, 1, 2, 3, 5, 6, 78, 5, 4, 64, 5624, 73];
// let result = null;

// for (let i = 0; i < numbers.length - 1; i++) {
//     if (i === 0) {
//         result = numbers[0];
//         continue;
//     }


//     if (numbers[i] > numbers[i - 1] && numbers[i] > result) {
//         result = numbers[i];
//     } else if (numbers[i - 1] > result) {
//         result = numbers[i - 1];
//     }


// }

// console.log('result > ', result);






// Інверсія
// const numbers = [2, 5, 5, 6, 7534, 1, 2, 78, 5, 4, 64, 5624, 73];
// const reversed = [];

// console.log(numbers);

// for (let i = 0; i <= numbers.length - 1; i++) {

//     reversed[i] = numbers[numbers.length - 1 - i];


// }

// console.log(reversed);



const doIwish = confirm('Do you wish to resgister?');

if (doIwish) {
    // YES
    const currentYear = new Date().getFullYear();
    let yearOfBirth = +prompt('Ваш рік народженя', 1920);

    while (currentYear - yearOfBirth < 18) {
        yearOfBirth = +prompt('Ваш рік народженя', 1920);
    }

    alert("Welcome on board!!! Continue registration!");
    
    // else {
    //     alert("Not today");
    // }

} else {
    // NO
    alert('До побачення!!!');
}

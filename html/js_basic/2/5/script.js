// Визначити, чи є рік високосним, чи ні.
// Рік буде високосним, якщо він кратний (тобто ділиться без залишку)
//  на 400 або він одночасно кратний 4 і не кратний 100.

// const year = +prompt('What is the year?');

// if (!(year % 400) || (!(year % 4) && (year / 100))) {
// if (year % 400 === 0) {
// alert('Високосний рік');
// }

// console.log(1600 % 400 === 0);
// console.log(Boolean(1600 % 400));

// const a = 5;
// const b = 6;
// const x = 100;

// const arr = [1, 4, 6];
// console.log('arr > ', arr);

// const emptyArr = [];
// console.log('emptyArr > ', emptyArr);

// const numberArr = [1, 4, 6];
// console.log('numberArr > ', numberArr);

// const atringArr = ['first', 'second', 'third'];
// console.log('atringArr > ', atringArr);

// const nullArr = [null, null];
// console.log('nullArr > ', nullArr);

// const boolArr = [true, false, false];
// console.log('boolArr > ', boolArr);

// const randomArr = [234532, 'false', false, null, undefined, '3245'];
// console.log('randomArr > ', randomArr);

// const emptyArr = ['elem1', 'elem2', 'elem3'];
// const secondArr = new Array('elem1', 'elem2', 'elem3');

//              0   1   2   3   4
// const newArr = [25, 62, 72, 36, 5];
// console.log(newArr);

// // newArr.length
// const arrayLength = newArr.length;
// console.log(arrayLength);

//              0   1   2   3   4   5
// const newArr = [25, 62, 72, 36, 5, 88];

// // newArr[0]
// // newArr[2]

// console.log(newArr);

// newArr[2] = 222;
// newArr[4] = 567;

// console.log(newArr[4]);
// console.log(newArr[2]);

// console.log(newArr.length);

// // newArr.length - 1   =  6 - 1
// const lastElement = newArr[newArr.length - 1];
// console.log(lastElement);

// const beforeLastElement = newArr[newArr.length - 3];
// console.log('beforeLastElement > ', beforeLastElement);

// newArr.length = 0;
// // console.log(newArr);

// newArr.length = 130;
// console.log(newArr);

// const newArr = [25, 62, 72, , , , 36, 5, 88];
// console.log('newArr >', newArr[3]);
// console.log('length >', newArr.length);

// console.log('newArr >', newArr[333]);
// console.log('newArr >', newArr[-25]);

// const newArr = [25, 62, 72, 36, 5, 88];
// console.log('newArr >', newArr);

// newArr[3] = 555;
// console.log('newArr >', newArr);

// newArr[0] = 0;
// console.log('newArr >', newArr);

// const i = 2;
// newArr[i]
// newArr[(i + 2) / 1]
// console.log('newArr >', newArr[(i + 2) / 1]);

// newArr[0]
// newArr[newArr.length - 1]

// const newArr = [25, 62, 72, 36, 5, 88];
// console.log('newArr >', newArr);

// newArr.push(777);
// console.log('newArr >', newArr);

// newArr.push(888, 333, 432);
// console.log('newArr >', newArr);

// newArr.pop();
// console.log('newArr >', newArr);

// newArr.pop();
// console.log('newArr >', newArr);

// newArr.unshift(111);
// console.log('newArr >', newArr);

// newArr.unshift(112);
// console.log('newArr >', newArr);

// newArr.unshift(113, 115, 117);
// console.log('newArr >', newArr);

// newArr.shift();
// console.log('newArr >', newArr);

// newArr.shift();
// console.log('newArr >', newArr);

// queue
// const queue = [25, 62, 72, 36, 5, 88];
// const queue = [62, 72, 36, 5, 88 ];
// console.log(queue);

// const shiftedElement = queue.shift();
// console.log(queue);
// console.log('shiftedElement >', shiftedElement);

// queue.shift();
// console.log(queue);

// queue.push(99);
// console.log(queue);

// queue.push(101);
// console.log(queue);

// queue.shift();
// console.log(queue);

// stack
// const stack = [25, 62, 72, 36, 5, 88];
// console.log(stack);

// const poppedElement = stack.pop();
// console.log(stack);
// console.log('poppedElement >', poppedElement);

// stack.pop();
// console.log(stack);

// stack.push(9);
// console.log(stack);

// stack.push(10);
// console.log(stack);

// stack.push(100);
// console.log(stack);

// const index = (1 + 1 + 1);
// console.log('index > ', index);

// const stack = [25, 62, 72, 36, 5, 88];

// const firstElem = stack[index - 1];

// console.log("firstElem > ", firstElem);

// # while
// # do while
// # for

// while (condition) {
//     // operation1;
//     // operation2;
// }

// let sum = 10;
// let steps = 5;
// console.log('start sum > ', sum);

// while (true) {
// while (steps < 0) {
// while (steps === 0) {
// while (steps > 0) {
//     console.log('-----------------------------------');
//     sum += 3;
//     console.log('sum > ', sum);

//     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     steps++;
//     console.log('steps > ', steps);
// }

// console.log('-----------------------------------');
// console.log('end sum > ', sum);

// let sum = 10;
// let steps = 5;
// console.log('start sum > ', sum);

// let doLoop = true;

// do {
//     console.log('-----------------------------------');
//     sum += 3;
//     console.log('sum > ', sum);

//     steps--;

//     if (steps <= 0) {
//         doLoop = false;
//     }
//     console.log('steps > ', steps);
// } while (doLoop);

// console.log('-----------------------------------');
// console.log('end sum > ', sum);

// let sum = 10;
// let steps = 5;
// console.log("start sum > ", sum);

// for (let i = 0; i < steps; i++) {
//     console.log(`------ Step #${i + 1} ----------------`);
//     sum += 3;

//     console.log("sum > ", sum);
//     console.log("i > ", i);
// }

// console.log("end sum > ", sum);

// const newArr = [25, 62, 72, 36, 5, 88];
// console.log(newArr);

// for (let i = 0; i < newArr.length; i++) {
//     console.log(`------ Step #${i + 1} ----------------`);
//     console.log("i > ", i);
//     console.log(`newArr[${i}] > `, newArr[i]);
// }

// # Виведіть парні числа

// const newArr = [25, 62, 72, 36, 5, 88];

// // const k = 1;

// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] % 2 === 0) {
//         console.log(newArr[i]);
//     }
// }

// # Виведіть максимальне число з масива





// const newArr = [25, 62, 88, 72, 36, 5];
// console.log("newArr > ", newArr);


// let maxValue = newArr[0];



// for (let i = 0; i < newArr.length; i++) {
//     console.log(`newArr[${i}] > ${maxValue}`);

//     if (newArr[i] > maxValue) {
//         maxValue = newArr[i];
//     }

// }


// console.log('maxValue > ', maxValue);


// # Інверсія масиву

// const newArr = [25, 62, 88, 72, 36, 5];
// const invertedArr = [];

// for (let i = newArr.length - 1; i >= 0; i--) {
//         console.log(newArr[i]);
//         invertedArr.push(newArr[i]);
// }

// console.log(' newArr > ', newArr);
// console.log(' invertedArr > ', invertedArr);






// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for (counter; condition; step) {
//     const element = array[index];
    
// }



// counter = 0;

// while (condition) {
    
//     step++;
// }





// const newArr = [25, 62, 88, 72, 36, 5];

// console.log('newArr > ', newArr);
// console.log('newArr > ', newArr[0]);
// console.log('newArr > ', newArr[4]);




// const counterEnd = 7;

// for (let i = 0; i < newArr.length; i++) {
//     console.log(i);
// }

// // GLOBAL
// // const globalVar = 'I AM GLOBAL';
// // const anotherVar = 11;

// // function go() {
// //    // FUNCTION
// //    const myVar = 'ANOTHER VAR';

// //    console.log(globalVar);
// //    console.log(anotherVar);
// //    console.log(myVar);

// //    function innerFN1 () {
// //       console.log('111');
// //    }

// //    function innerFN2 () {
// //       console.log('222');
// //    }

// //    innerFN2();
// // }

// // // console.log(myVar);

// // go();

// // function anoterFN() {}
// // function anoterFN2() {}



// // const globalVar = 'GLOBAL';

// // function main() {
// //    const mainVar = 'MAIN';

// //    // console.log(globalVar);
// //    // console.log(innerVar);

// //    function inner() {
// //       const innerVar = 'INNER';

// //       console.log(globalVar);
// //       console.log(mainVar);
// //       console.log(innerVar);
// //    }

// //    inner();
// // }


// // // console.log(globalVar);

// // main();



// // function withReturn() {
// //    return BigInt('34523452345235');
// // }

// // const anotherReturn = withReturn;






// // function main() {
// //    const varVAR = 'SOME VAR';

// //    return function() {
// //       console.log(varVAR);
// //    }
// // }



// // const inner = main();

// // inner();




// // let couner = 0;

// // function sam() {
// //    console.log(++couner);
// // }

// // sam();
// // sam();
// // sam();
// // couner = 1234124124;
// // sam();




// function makeCount(start) {
//    let counter = start;

//    return function () {
//       return ++counter;
//    }

// }


// const counter = makeCount(23);
// // const counter2 = makeCount();

// let result = counter();
// result = counter();
// result = counter();
// result = counter();

// console.log('result > ', result);



// (function () {

// })();

// (function (someVar) {
//    console.log(someVar);
// })('wer5w5');


// function num(a, b) {
//    return a > b;
// }


// function greaterThan(n, comparator) {

//    return comparator(n);


// }

// greaterThan(10, num);




// fn();
// var a;
// console.log(a);
// console.log(b);

// var a = 17;
// var b = 17;


// const fn = () => {
//    console.log('fn');
// }









// function sum(a, b) {
//    return a + b;
// }

// sum(4, 5)

// function closureSum(a) {
//    4
//    return function(b) {
//       5
//       return a + b;
//    }
// }

// const result = closureSum(4)      (5);

// console.log('result', result);




// var - functional scope
// const, let - block scope



//    {
//       const a = '1234';

//       var b = 17;
//       console.log(b);
//    }

//    // console.log(a);
//    console.log(b);


//    {

//       console.log(b);
//    }

// console.log(b);













// var asd = 'UNIQUE';


// function newnew() {
//    var temp = 12;
// }





// NUMBER
// STRING
// BOOLEAN
// NULL
// UNDEFINED
// BigInt
// Symbol

// Object
// Array

// const user = {
//    name: 'Roman',
//    secondName: 'Yaremiy',
//    age: 101,
//    isStudent: false,
// };


// console.log(user);
// console.log(user.name);

// user.name = 'Not A rOman';
// console.log(user.name);

// delete user.name;

// console.log(user.name);







const a = 1;



const myArray = [];
const myArray2 = [4];
const myArray3 = [4, 6];
const myArray5 = [4, 6, 6, 7, 8, 9];
// const myArray7 = ['4', '6', '6', '7', '8', '4'];
const myArray8 = [true, false, true];

// const weirdArray = [14, 'string', bool, null, undefined, BigInt(452), Symbol('234'), { name: 'User' }, [5, 6, 8]]



// console.log('myArray7 >', myArray7);
// console.log('myArray7 >', myArray7.length);
// console.log(myArray7[0]);
// console.log(myArray7[3]);



const myArray7 = ['4', '6', '6', '7', '8', '4'];


for (let i = 0; i < myArray7.length; i++) {
   console.log(myArray7[i]);
}





function sum() {}

sum(a)(b)(c);


const sumWithOne = sum(7)(8);

const newResult = sumWithOne(20);
const newResult2 = sumWithOne(30);
// "use strict";

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new Error("Введене значення не є числом");
//     }

//     return a + b;
// }

// try {
//     console.log(sum(1, '234'));
// } catch (error) {
//     console.error(error.message);
// } finally {
//     console.log('CODE FINISHED');
// }

// console.log('NEXT EXECUTION');




// function sum(a, b) {
//     return a + b;
// }


// console.log(sum(1, 4));



// const newSomeVar = sum;

// console.log(newSomeVar(8, 4));




// function sum(a, b) {
//     return a + b;
// }


// console.log(sum(1, 4));




// var arrowSum = (a, b) => a + b;

// // function expression
// var arrowSum = (a, b) => {
//     console.log('Additional');

//     return a + b;
// };

// // function declaration
// function arrowSum(a, b) {
//     console.log('Additional');

//     return a + b;
// }





// const emptyArrow = (a, b, c) => a + b + c;

// console.log(emptyArrow(4, 6, 7));

// const singleParam = str => console.log(str);

// singleParam('Hi');



// function userReturn() {
//     return {
//         name: 'Ivan',
//         age: 31,
//     };
// }

// console.log(userReturn());


// const userReturnArrow = () => ({
//     name: 'Ivan',
//     age: 32,
// });

// console.log(userReturnArrow());



// const processNumbers = (a, b) => {
//     const sum = a + b;

//     if (sum > 10) {
//         return 'Sum is greater than 10';
//     } else {
//         return 'Sum is less than or equal to 10';
//     }
// }


// Помилка

// let num; // Змінній потрібно явно присвоїти значення.

// function showNum() {
//   let message = "Number: " + num; // Помилка, якщо використовувати неоголошену змінну.

//   console.log(message);
// }

// showNum();




// 1. Привʼязка за замовчуванням
// function sum(a, b) {
//     console.log(this);


//     return a + b;
// }



// sum(4, 7);




// 2. Неявна привʼязка
// var user = {
//     name: 'Ivan',
//     age: 30,
//     sayHello: function (who) {
//         console.log(this);
//         console.log('Hello, ' + this.name);
//     },
// };

// user.sayHello('John');






// 3. Явна привʼязка
// function sayHello(age, secondName) {
//     const userName = this.myName;

//     console.log(userName + ' ' + secondName + ' of ' + age + ' years');
// }

// const person = { myName: 'UserName 44'};

// // sayHello(16);
// sayHello.call(person, 16, 'Johnson');
// sayHello.apply(person, [17, 'Johnson2']);

// const bindedSayHello = sayHello.bind(person, 18, 'Smith');

// bindedSayHello();
// bindedSayHello();



// let result = 1;

// for (let i = 1; i <= n; i++) {
//     result *= i;
// }

// console.log(result);


// !4 = 1 * 2 * 3 * 4
// !6 = 1 * 2 * 3 * 4 * 5 * 6


// typeof !== 'number'
// not negative
// range: 0 - 21
// !0 = 1
// !1 = 1


// corner cases
// function factorial(n) {
// if (typeof n !== 'number') {
//     throw new Error('Введіть число.');
// }

// if (n < 0) {
//     throw new Error('Число має бути додатним.');
// }

// if (n >= 0 && n <= 21) {
//     throw new Error('Число має бути [0, 21].');
// }

// if (n === 0 || n === 1) {
//     return 1;
// }

//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

// try {
//     console.log(factorial(-5));
// } catch (error) {
//     console.error(error.message);
// }






// !6 = 1 * 2 * 3 * 4 * 5 * 6
// !6 = 6 * 5 * 4 * 3 * 2 * 1

// f(x) = !y
// f(5) = 5!

// 5! = 5 * f(4)
// 5! = 5 * 4 * f(3)
// 5! = 5 * 4 * 3 * f(2)
// 5! = 5 * 4 * 3 * 2 * f(1)


// !6 = 6 * 5 * 4 * 3 * 2 * 1

function recursiveFactorial(n) {
    if (typeof n !== 'number') {
        throw new Error('Введіть число.');
    }

    if (n < 0) {
        throw new Error('Число має бути додатним.');
    }

    if (n > 21) {
        throw new Error('Число має бути [0, 21].');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

const result = recursiveFactorial(5);
console.log(result);

// 5 * recursiveFactorial(5 - 1) 20
// 4 * recursiveFactorial(4 - 1) 60
// 3 * recursiveFactorial(3 - 1) 120
// 2 * recursiveFactorial(2 - 1)
// 1 * 1
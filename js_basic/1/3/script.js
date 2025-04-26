// Домашка
// let firstNumber = prompt('Enter first number:', 0);
// let secondNumber = prompt('Enter second number:', 0);


// firstNumber = +firstNumber;
// secondNumber = +secondNumber;

// alert(`
//     ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
//     ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
//     ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
//     ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
// `);


// Домашка
// let firstNumber = +prompt('Enter first number:', 0);
// let secondNumber = +prompt('Enter second number:', 0);

// alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);





// Оператори порівняння

// const first = true;
// const second = false;

// const result = Boolean(4 > 3);
// const result = Boolean(5 < 3);
// const result = Boolean(3 >= 3);
// const result = Boolean(3 <= 3);
// const result = Boolean(3 === 3);
// const result = Boolean(4 !== 3);

// console.log('Result > ', result);


// порівняння строк


// const firstString =  'Stroka2';
// const secondString = ' Stroka2';

// const result = Boolean(firstString > secondString);

// const space = ' ';

// console.log('result > ', space.charCodeAt());




// порівняння різних типів, строге и нестроге


// const firstNumber = '5';
// console.log('typeof firstNumber > ', typeof firstNumber);

// const secondNumber = 5;
// console.log('typeof secondNumber > ', typeof secondNumber);


// let result = Boolean(firstNumber === secondNumber); // FALSE


// result = result + '123';

// const result = Boolean(firstNumber == secondNumber);

// const result = Boolean(+firstNumber === +secondNumber);

// const varrr = null;


// console.log('result > ', result);



// const firstNumber = prompt('Enter first number: ', 0);
// const secondNumber = prompt('Enter second number: ', 0);


// 0, "", null, undefined, NaN, false  => FALSE


// x > y
// x < y
// x = y


// if (firstNumber > secondNumber) {
//     console.log('*************************************');
//     console.log(`First number is greater: ${firstNumber} > ${secondNumber}`);
//     console.log('*************************************');
// } else if (firstNumber < secondNumber) {
//     console.log('*************************************');
//     console.log(`Second number is greater: ${firstNumber} < ${secondNumber}`);
//     console.log('*************************************');
// } else {
//     console.log('*************************************');
//     console.log(`First number is not greater`);
//     console.log('*************************************');
// }

// console.log('End of calculations');





// Good Day, Good evening, Good morning

// let currentTime = new Date().getHours();
// console.log('currentTime > ', currentTime);

// currentTime = -23;

// // Morning:   < 10
// // Day:       < 19
// // Evening:   < 24


// if (currentTime < 10) {
//     console.log('Good morning!');
// } else if (currentTime < 19) {
//     console.log('Good day!');
// } else {
//     console.log('Good evening!');
// }






// Запит на реєстрації з confirm та з перевіркою на повноліття

// alert
// prompt
// confirm


// const logical = confirm("Yes or No ?");

// console.log('logical > ', logical);

// console.log('doIwish > ', doIwish);



// const doIwish = confirm('Do you wish to resgister?');

// if (doIwish) {
//     // YES
//     const currentYear = new Date().getFullYear();
//     const yearOfBirth = +prompt('Ваш рік народженя', 1920);

//     if (currentYear - yearOfBirth > 18) {
//         alert("Welcome on board!!! Continue registration!")
//     } else {
//         alert("Not today");
//     }

// } else {
//     // NO
//     alert('До побачення!!!');
// }
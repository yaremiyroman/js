// switch (a) {
//     case 1: // if (x === 1)
//         alert('');
//         break;
//     case 2:
//         alert('');
//         break;
//     case 3:
//         alert('');
//         break;
//     defaul1:
//         alert('');
// }

// alert( false || false ); // false
// alert( false || true );  // true
// alert( true || false );  // true
// alert( true || true );   // true



// Домашка

// const fingerNumber = +prompt('Enter your finger', 0);


// if (fingerNumber === 1) {
//     alert('Великий');
// } else if (fingerNumber === 2) {
//     alert('Вказіваний');
// } else if (fingerNumber === 3) {
//     alert('Середній');
// } else if (fingerNumber === 4) {
//     alert('Безимяний');
// } else if (fingerNumber === 5) {
//     alert('М');
// } else {
//     alert('Був введений неправильний варінт');
// }



// SWITCH

// const fingerNumber = +prompt('Enter your finger', 0);


// switch (fingerNumber) {

//     case 1:
//         alert('Великий');
//         break;

//     case 2:
//         alert('Вказіваний');
//         break;

//     case 3:
//         alert('Середній');
//         break;

//     case 4:
//         alert('Безимяний');
//         break;

//     case 5:
//         alert('М');
//         break;

//     default:
//         alert('Був введений неправильний варінт');
//         break;

// }


// Switch 2

// const errorCode0 = 0;
// const errorCode2 = 2;
// const errorCode1 = 1;
// const errorCode5 = 5;

// switch (errorCode) {
//     case 24327:
//         alert(`Error Number: ${errorCode}`);
//         break;

//     case 23464:
//     case 23525235:
//         alert(`Error Number Big Error`);
//         break;

//     case 345353:
//         alert(`Error Number: ${errorCode}`);
//         break;

//     default:
//         alert('123');
//         break;
// }


// Скоречений ариф оператор


// let price = 0;
// const applePrice = 10;
// const orangePrice = 12;
// const kiwiPrice = 15;

// const desire = confirm('Do you want fruits?');

// if (desire === false) {
//     alert('Go away');
// } else {
//     const desireApples = confirm('Do you want apples?');
//     if (desireApples === true) {
//         const amountApples = +prompt('How many apples?', 1);

//         price += amountApples * applePrice;
//         // price -= amountApples * applePrice;
//         // price /= amountApples * applePrice;
//         // price *= amountApples * applePrice;
//         // price %= amountApples * applePrice;
//     }

//     const desireOranges = confirm('Do you want oranges?');
//     if (desireOranges === true) {
//         const amountOranges = +prompt('How many oranges?', 1);

//         price += amountOranges * orangePrice;
//     }

//     const desireKiwi = confirm('Do you want kiwi?');
//     if (desireKiwi === true) {
//         const amountKiwi = +prompt('How many kiwi?', 1);

//         price += amountKiwi * kiwiPrice;
//     }

//     alert(price);
// }



// Тернарний оператор

// X >= 0 => X
// X < 0 => |X|

// const numberToConvert = +prompt('Enter number > ', 0);

// if (numberToConvert >= 0) {
//     console.log('ABS > ', numberToConvert);
// } else {
//     console.log('ABS > ', -numberToConvert);
// }

// const num = numberToConvert >= 0
//                 ? numberToConvert
//                 : -numberToConvert;


// console.log('ABS > ', num);





// const a = 5;
// const b = 9;
// const c = 3;

// ()  (||)  (+)  (++)

// ! && || 

// console.log(   a + (b * (c / a))  );




//  Логічні оператори. !, !!, &&, ||

const okay = true;
const maybeOk = true;
const no = false;

// !
// Логічне Ні
// Інверсія

// const result = !true;

// const smthng = 0;

// console.log('smthng >', !true);
// console.log('smthng >', !!smthng);


// &&
// Логічне І
// Обʼєднанння

// const relsult = okay && no;

// console.log('&& >', relsult);

// console.log('false && false >', false && false ); // false
// console.log('true && false >', true && false ); // false
// console.log('false && true >', false && true ); // false
// console.log('true && true >', true && true ); // true

// console.log    (okay && no && maybeOk);

// ||
// Логічне Або
// Множення

// const relsult = okay && no;

// console.log('&& >', relsult);

// console.log('false || false >', false || false ); // false
// console.log('true || false >', true || false ); // true
// console.log('false || true >', false || true ); // true
// console.log('true || true >', true || true ); // true

// console.log     (no || okay || maybeOk);




// Boolean(   true && false || true && !false      )

// Boolean(   true && false || true && true      )

// Boolean(   false || true      )

//             true




// true && (false || true) && !false
// true && true && !false
// true && true && true
// true



//  Чи зараз йде заняття? &&, ||


//  [19 - 21) => заняття йде
//  < 19 => заняття !йде
//  > 21 => заняття !йде

let currentHours = new Date().getHours();

if (currentHours < 19) {
    console.log('FREE TIME');
} else if (currentHours >= 21) {
    console.log('FREE TIME');
} else {
    console.log('TIME TO LEARN');   
}


// &&
if (currentHours >= 19 && currentHours < 21) {
    console.log('TIME TO LEARN');  
} else {
    console.log('FREE TIME');
}

// ||
if (currentHours < 19 || currentHours >= 21) {
    console.log('FREE TIME');
} else {
    console.log('TIME TO LEARN');   
}



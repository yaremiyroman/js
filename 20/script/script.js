// let newNumber = 20;

// // let myString = "Hello, world!";
// // let myString = null;
// let myString = "Hello, world!";

// myString = "New Value"
// myString = 111;
// myString = newNumber

// console.log("newNumber > ", newNumber); // 20
// console.log("myString > ", myString); // "Hello, world!"
// let a = adgas dgfal;



// // let myString = "Hello, world!";



// const a = '15';

// const type = typeof a;

// console.log("type > ", type); // "number"

// if (type == 'number') {
//       console.log("a - це число"); // Виведе: a - це число
// } else {
//       console.log("a - це не число"); // Виведе: a - це не число
// }


// const strToNum = 456;
// const strToNum = Number('1234');
// const numToStr = String(true);
// const toBigNumber = BigInt(true);

// console.log('toBigNumber > ', toBigNumber); // 456


// let toBool = Boolean(false);
// toBool = Boolean('');
// toBool = Boolean(0);
// toBool = Boolean(null);
// toBool = Boolean(undefined);

// toBool = Boolean(NaN);

// falsy data

// console.log('toBool > ', toBool); // 456


// const str = -123 / 0;

// console.log('str > ', str);

// Not A Number
//  NaN Є Number
//  +Infinity Є Number
//  -Infinity Є Number



// const num = 12345.67892134234523452345352345;

// const numToStr = String(num);
// const numToStr = num.toString();

// const strToInt = parseInt("100px");
// const strToFloat = parseFloat("3.14someText");
// console.log('strToFloat > ', strToFloat);

// if ("5" === 5) {
//    console.log('MY MESSAGE');
// } else {
//    console.log('NOT EQUAL');
// }



// const toNum = +false;

// console.log('toNum > ', toNum); // 123123123123



// // 1, 2, 3, 4, 5, 6, 7

// function getDay(dayID) {
//    if (dayID === 1) {
//       return 'Monday';
//    } else if (dayID === 2) {
//       return 'Tuesday';
//    } else if (dayID === 3) {
//       return 'Wednesday';
//    } else if (dayID === 4) {
//       return 'Thursday';
//    } else if (dayID === 5) {
//       return 'Friday';
//    } else if (dayID === 6) {
//       return 'Saturday';
//    } else if (dayID === 7) {
//       return 'Sunday';
//    } else {
//       return 'Invalid day ID';
//    }
// }

// // const day = getDay(5);

// console.log('day > ', day); // 'Monday'


// function getDaySwitch(dayID) {
//    let result = null;

//    switch (dayID) {
//       case 1, 55: // dayID === 1 || dayID === 55
//          result = 'Понеділок';
//          break;
//       case 2: // dayID === 2
//          result = 'Вівторок';
//          break;
//       case 3: // dayID === 3
//          result = 'Середа';
//          break;
//       case 4: // dayID === 4
//          result = 'ЧТ';
//          break;
//       case 5: // dayID === 5
//          result = 'ПТ';
//          break;
//       case 6: // dayID === 6
//          result = 'СБ';
//          break;
//       case 7: // dayID === 7
//          result = 'НД';
//          break;
//       default:
//          result = 'Інший день тижня';
//    }

//    return result;
// }


// const dayOfWeek = getDaySwitch(1); // Виведе: Вівторок

// console.log('dayOfWeek > ', dayOfWeek); // 'Інший день тижня'










// function getDaySwitch(dayID) {
//    switch (dayID) {
//       case 1: return 'Понеділок';
//       case 2: return 'Вівторок';
//       case 3: return 'Середа';
//       case 4: return 'ЧТ';
//       case 5: return 'ПТ';
//       case 6: return 'СБ';
//       case 7: return 'НД';
//       default: return 'Інший день тижня';
//    }
// }




// const day = getDaySwitch(5);

// console.log('day > ', day); // 'Monday'





// let message = age >= 18 ? 'Ви повнолітній, голосуйте' : 'Ви неповнолітній, голосувати не можете';


// // console.log(message); // Виведе: Ви повнолітній, голосуйте

// let age = 1;


// ((age >= 18)
//    ? console.log('Ви повнолітній, голосуйте')
//    : console.log('Ви неповнолітній, голосувати не можете'))


// if (age >= 18) {
//    message = 'Ви повнолітній, голосуйте';
// } else {
//    message = 'Ви неповнолітній, голосувати не можете';
// }


// init, condition, step

// const topBorder = 10;

// for (let i = 0; i < topBorder; i++) {
//    if (i === 5) {
//       continue; // Пропускає ітерацію, коли i дорівнює 5
//    }

//    console.log(i);

//    if (i === 7) {
//       break;
//    }
// }




// function sum(a, b) {
//    const result = a + b;

//    return result;
// }

// const myVar = sum;

// console.log(   myVar(5, 7)     ); // Виведе: 12

// console.log(   myVar   );






function positiveInt() {
   console.log('This is a positive integer number');
}

function anotherMessage() {
   console.log('Some new message');
}

// cb - callback
function sum(a, b, cb, message) {
   const result = a + b;

   if (result > 0) {
      cb();
   }

   message();

   return result;
}


const total = sum(5, 7, positiveInt, anotherMessage);
console.log('total >', total);


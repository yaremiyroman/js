const myArr = [1, 2, 3, 4, 5];

// console.log(myArrVar[3]); // 1
// console.log(myArrVar.length);


// const myArrVar = [1, null, 3, false, 5];
// console.log(myArrVar);

// myArrVar.push('New Element')
// myArrVar.push('New Element2', 'New Element3');
// myArrVar.push([7, 8, 9]);
// console.log(myArrVar);

// myArrVar.pop();
// myArrVar.pop();
// console.log(myArrVar);



// const myArrVar = [1, null, 3, false, 5];
// console.log(myArrVar);


// myArrVar.shift();
// myArrVar.unshift('BEGIN', 'START');

// console.log(myArrVar);




// const myArrVar = [1, null, 3, false, 5];

// myArrVar.unshift('BEGIN');




// const months = ['Jan', 'March', 'April', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// console.log(months);


// const cuttedMonthes = months.splice(3, 6, 'New', 'New2');

// console.log(months);
// console.log(cuttedMonthes);



// const months = ['Jan', 'March', 'April', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// console.log(months);

// const slices = months.slice(3, 6);
// console.log(months);
// console.log(slices);






// const months1 = ['Jan', 'March', 'April'];
// const months2 = ['Jan2', 'March2', 'April2'];
// const months3 = ['Jan3', 'March3', 'April3'];



// const allMonths = months1.concat(months2, months3, 14, 'string', null);

// console.log(allMonths);





// const months1 = ['Jan', 'March', 'April'];
// const months2 = ['Jan2', 'March2', 'April2'];
// const months3 = ['Jan3', 'March3', 'April3'];


// const allMonths = ['Jan', 'March', 'April', ...months2, [], null];

// console.log(allMonths);



// const months1 = ['Jan', 'March', 'April'];

// console.log(months1.includes('March')); // true
// console.log(months1.indexOf('adfgdsfgsdfg')); // true



// const months1 = ['Jan', 'March', 'April'];

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.findIndex(
//     (element) => {
//         return element > 129
//     }
// );

// console.log(found);
// // Expected output: 12



// // split/join

// const months1 = ['Jan', 'March', 'April'];

// // console.log(months1.join(' - ')); // Jan - March - April
// // console.log(months1); // JanMarchApril

// const joinedMonthes = months1.join(' - ');
// console.log(joinedMonthes.split(' - ')); // Jan - March - April



// console.log(array1);

// array1.sort((a, b) => {
//     return a - b;
// });

// console.log(array1);

// const array1 = [1, 30, 4, 21, 100000];

// console.log(array1.reverse());


// 5!
// const factorial = 5;
// let result = 1;

// for (let i = 1; i <= factorial; i++) {
//     result *= i;
// }

// console.log(result); // 120

// let factorial = 5;
// let result = 1;

// while (factorial > 0) {
//     result *= factorial;

//     factorial--;
// }

// // console.log(result); // 120



// let factorial = 5;
// let result = 1;

// do {
//     result *= factorial;

//     factorial--;
// } while (factorial > 0)

// console.log(result); // 120





// const months = ['Jan', 'March', 15, 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// for (let i = 0; i < months.length; i++) {
//     console.log(months[i]);
// }

// months.forEach((month, i, arr) => {
//     console.log(i + ': ' + month);
//     console.log(months[i - 1]);
// });

// const isAllMonthes = months.every((month) => typeof month === 'string');

// const isSomeMonth = months.some((month) => typeof month === 'undefined');

// console.log(isAllMonthes); // true
// console.log(isSomeMonth); // true






// const months = ['Jan', 'March', 15, 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// const filteredMonths = months.filter((month) => {
//     return (typeof month === 'string');
// });

// console.log(months); // ['Jan', 'March', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
// console.log(filteredMonths); // ['Jan', 'March', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']




// const mapCityToCodeARRAY = [
//     ['kyiv', '044'],
//     ['mykolaiv', '0512'],
//     ['odesa', '405']
// ];

// const mapCityToCodeOBJECT = {
//     'kyiv': '044',
//     'mykolaiv': '0512',
//     'odesa': '405',
// };

// const cityToCodeMAP = new Map([
//     ['kyiv', '044'],
//     ['mykolaiv', '0512'],
//     ['odesa', '4035'],
// ]);


// console.log(mapCityToCodeARRAY);
// console.log(cityToCodeMAP);




// mapCityToCodeOBJECT.forEach(element => {
//     console.log(element);
// });


// console.log(mapCityToCodeOBJECT);

// for (key in mapCityToCodeOBJECT) {
//     console.log('key > ', key);
//     console.log('value > ', mapCityToCodeOBJECT[key]);
// }

// console.log(cityToCodeMAP);

// for ([key, value] of cityToCodeMAP) {
//     console.log('key > ', key);
//     console.log('value > ', value);
// }

// const twoDimensionalArray = [
//     ['kyiv', '044', 142, 'hh'],
//     ['mykolaiv', '0512', 142, 'hh'],
//     ['odesa', '405', 142, 'hh'],
//     ['rivne', '123', 142, 'hh'],
// ];

// console.log(twoDimensionalArray[2][2][2]);



// for (let i = 0; i < twoDimensionalArray.length; i++) {
//     for (let j = 0; j < twoDimensionalArray[i].length; j++) {
//         console.log(twoDimensionalArray[i][j]);
//     }
// }

// twoDimensionalArray.forEach(firstDimensionElement =>
//     firstDimensionElement.forEach(secondDimensionElement =>
//         console.log(secondDimensionElement)
//     )
// );





// const months = ['Jan', 'March', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberArray);

// numberArray.map((element) => {
//     return element * 2 + '';
// }).filter((element) => {
//     return +element > 10;
// }).forEach((element) => {
//     console.log(element);
// });





// const user = {
//     name: 'Name',
//     secondName: 'Second Name',
//     sayName: function () {
//         console.log(this.name);

//         return this;
//     },
//     saySecondName: function () {
//         console.log(this.secondName);

//         return this;
//     },
// };


// user.sayName().saySecondName();



const user = {
    name: 'Name',
    secondName: 'Second Name',
    age: 25,
};

const user2 = {
    name: 'Name',
    secondName: 'Second Name',
    age: 15,
};

const user3 = {
    name: 'Name',
    secondName: 'Second Name',
    age: 35,
};

const users = [user, user2, user3];

const elderUsers = users.filter((user) => {
    return user.age > 20;
});

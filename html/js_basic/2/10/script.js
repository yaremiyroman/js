// const object1 = {};
// const object2 = {};

// // console.log(object1 == object2);

// const myNumber = 212;
// const myString = "212";
// const myBool = true;

// object2.color = "red";

// const myArray = [];

// myArray.push("anyValue");
// // console.log('myArray > ', myArray);

// const myNewObject = {
//     value: "123",
//     anyProp: false,
//     internal: {
//         value: "123",
//         anyProp: false,
//         internal2: {
//             value: "123123123",
//             anyProp: false,
//         },
//     },
// };

// // console.log(myNewObject.internal.internal2.value);

// const mySuperArray = [2, 3, 34, 3452, 2345, 2345];

// mySuperArray.push("X");

// // console.log(mySuperArray);

// // const a = 5;
// // const b = 5;

// // console.log(a == b);

// // const object3 = {
// //     a: 5,
// // };

// // const object4 = {
// //     a: 5,
// // };

// // console.log(object3 === object4); // false
// // console.log(object3 === object3); // true

// const object4 = {
//     a: 5,
//     b: "5",
//     new: false,
// };

// const object8 = {
//     a: 5,
//     b: "5",
//     new: false,
// };

// const object5 = {
//     a: 5,
//     b: "5",
//     new: false,
//     object4L: {
//         a: 5,
//         b: "5",
//         new: false,
//         object4L: {
//             a: 5,
//             b: "5",
//             new: false,
//             object4L: {
//                 a: 5,
//                 b: "5",
//                 new: false,
//                 object4L: {
//                     a: 5,
//                     b: "5",
//                     new: false,
//                 },
//             },
//         },
//     },
// };

// //es6

// // const object9 = {
// //     a: 5,
// //     b: "5",
// //     new: false,
// // };

// // const object10 = {
// //     true: "Long string",
// //     newProp: [4, 6, 7, 8, 9],
// //     prop: true,
// // };

// // console.log('object9 > ', object9);
// // console.log('object10 > ', object10);

// // // Spread

// // const object11 = { ...object9, ...object10};
// // console.log('object11 > ', object11);



// const object9 = {
//     a: 5,
//     b: "5",
//     new: false,
// };

// const object99 = {
//     a: 5,
//     b: "5",
//     new: true,
// };

// const object10 = {
//     true: "Long string",
//     newProp: [4, 6, 7, 8, 9],
//     prop: true,
// };


// console.log('object9 > ', object9);

// // const object111 = { ...object9, ...object99,  ...object10};


// const object111 = { 
//     ...object9,
//     ...{
//         'YY': 'YY'
//     },
//     ...object99,
//     ...object10,
//     ...{
//         XX: 'YY'
//     }
// };

// console.log('object111 > ', object111);



// // es5



// const object99 = {
//     a: 5,
//     b: "5",
//     new: true,
// };

// const object10 = {
//     true: "Long string",
//     newProp: [4, 6, 7, 8, 9],
//     prop: true,
// };

// const newObject = Object.assign({}, object99, object10);

// console.log('newObject > ', newObject);




// // es5



// const object99 = {
//     a: 5,
//     b: "5",
//     new: true,
//     nestedProp: {
//         true: "Long string",
//         newProp: [4, 6, 7, 8, 9],
//         prop: true,
//         nestedProp: {
//             true: "Long string",
//             newProp: [4, 6, 7, 8, 9],
//             prop: true,
//         }
//     }
// };

// const object10 = {
//     true: "Long string",
//     newProp: [4, 6, 7, 8, 9],
//     prop: true,
// };

// const newObject = Object.assign({}, object99, object10);

// console.log('newObject > ', newObject);





// const object10 = {
//     true: "Long string",
//     newProp: [4, 6, 7, 8, 9],
//     prop: true,
// };



// for (let key in object10) {
//     console.log('key > ', key);
//     console.log('object10[key] > ', object10[key]);
//     console.log('----------------');
// }


// const object10 = {
//     true: "Long string",
//     newProp: [4, 6, 7, 8, 9],
//     prop: true,
// };



// const allEntries = Object.entries(object10);
// const allKeys = Object.keys(object10);
// const allValues = Object.values(object10);

// console.log('allEntries > ', allEntries);
// console.log('---------------------------');
// console.log('allKeys > ', allKeys);
// console.log('---------------------------');
// console.log('allValues > ', allValues);



// console.log(object10.hasOwnProperty('newProp'));
// console.log(object10.hasOwnProperty('anyProp'));






// const userData = {
//     name: 'UserName',
//     secondName: 'Johnson',
//     sayName: function() {
//         alert(this.name + ' ' + this.secondName);
//     }
// };

// userData.sayName();



// const ladder = {
//     step: 0,
//     goUpstairs: function() {
//         this.step++;
//     },
//     goDownstairs: function() {
//         this.step--;
//     },
//     showCurrentStep: function() {
//         console.log('step > ', this.step);
//     },
//     ladderInside: {
//         showCurrentStep: function() {
//             console.log('step > ', this.step);
//         },
//     }
// };


// console.log(ladder.showCurrentStep());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.showCurrentStep());
// console.log(ladder.goDownstairs());
// console.log(ladder.showCurrentStep());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.goUpstairs());
// console.log(ladder.showCurrentStep());
// console.log(ladder.ladderInside.showCurrentStep());







const asdgdsg = ['name', 'area', 'population', 'main street', 'mayor\'s name']

function newFunc(array) {

const sdgdsfgdsfg = {};

sdgdsfgdsfg[array[i]] = 'Mykolaiv';



    return {
        'name': prompt(),
        'area': 450,
        'population': 500000,
        'main street': 'Soborna',
        'mayor\'s name': 'S. Syenkivich',
    };
}

newFunc(asdgdsg);
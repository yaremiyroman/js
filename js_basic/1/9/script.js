// // Global
// const a = 'GLOBAL A';


// function main() {
//     // outer

//     // const b = 567;

//     // console.log('a > ', a);
//     // console.log('b > ', b);

//     function inner() {
//         // inner

//         const c = 999;

//         console.log('a > ', a);
//         // console.log('b > ', b);
//         // console.log('c > ', c);
//     }

//     inner();
// }

// // console.log('a > ', a);

// main();








// function outer() {
//     const X = 'Hello, World!';


//     console.log(X);
// }



// outer();













// function outer() {
//     const X = 'Hello, World!';

//     return function inner() {
//         console.log('X > ', X);
//     }
// }

// // const callFunction = inner();

// const callFunction = outer();


// callFunction();
// // inner();





// function makeCount() {
//     let counter = 0;
//     console.log('counter > ', counter);

//     return function() {
//         return counter++;
//     }
// }

// // makeCount();
// // makeCount();
// // makeCount();

// const goCount = makeCount();


// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());





//  Перепишіть функцію sum(a, b) щоб вона працювали у вігляді sum(a)(b)

// function sum(a, b) {
//     console.log(' a + b  >', a + b);
// }

// sum(6, 7);

// sum(6)
// sum(6)(7);


// function sum(a) {
//     return function (b) {
//         console.log(' a + b  >', a + b);
//     }
// }

// sum(7);

// sum(7)(7);

// carrying







// const arr = [1, 5, 6];
// const num = 2345;
// const str = ';lsdkfgnlkds;g';

// console.log(typeof arr);
// console.log(typeof num);
// console.log(typeof str);







// const arr = [];

// const obj = {};





// const cat = {
//     name: 'es6',

//     numberOfLegs: 4,

//     color: 'black',

//     hadLunch: true,

//     sayMeow: () => alert('meow'),

//     catGetBigData: [1345, 2345, 234, 2456],

//     sex: 'female',

//     children: {
//         1: 'Tom',
//         2: 'Korky',
//     }

// };



// console.log('cat > ', cat);
// console.table(cat);







// const cat = {
//     name: 'es6',
//     numberOfLegs: 4,
//     color: 'black',
//     hadLunch: true,

//     sayMeow: function() {
//         alert('meow');
//     },
// };


// console.log(cat);

// cat.name
// console.log(cat.name);
// console.log(cat.numberOfLegs);
// console.log(cat.color);
// console.log(cat.hadLunch);

// cat.sayMeow();

// console.log(cat);
// delete cat.hadLunch;
// console.log(cat);


// console.log(cat.numberOfLegs);
// console.log(cat["numberOfLegs"]);
// console.log(cat["number" + "OfLegs"]);
// console.log(cat[`numberOfLegs`]);

// const incognitaConst = "numberOfLegs";

// console.log(cat[incognitaConst]);

// const incognitaConst2 = "OfLegs";

// console.log(cat[   "number" + incognitaConst2  ]);



// QWERTY = 'QWERTY';




// const cat = {
//     name: 'es6',
//     numberOfLegs: 4,
//     color: 'black',
//     hadLunch: true,
//     someProperty: undefined,

//     sayMeow: function() {
//         alert('meow');
//     },
// };



// console.log(("name" in cat));

// if ("name" in cat) {
//     cat.sayMeow();
// }


// console.log(("someProperty" in cat));


// console.log(cat.someProperty);

// if (cat.someProperty === undefined) {
//     alert('NO PROPERTY');
// }


// const cat = {
//     name: 'es6',
//     numberOfLegs: 4,
//     color: 'black',
//     hadLunch: true,
// };


// for (let key in cat) {
//     console.log('key > ', key);


//     const currentValue = cat[key];

//     console.log('currentValue > ', currentValue);
// }



// const cat = {
//     name: 'es6',
//     numberOfLegs: 4,
//     color: 'black',
//     hadLunch: true,
// };




// const dog = {};
// console.log(dog);

// dog.color = 'red';
// console.log(dog);

// dog.barks = true;
// console.log(dog);

// console.log(dog.barks);

// dog["angry"] = false;
// console.log(dog.angry);




// const vocabulary = {
//     'hello': 'привіт',
//     'bye': 'пока',
//     'programming': 'програмування'
// };

// const vocabulary = [
//     {
//         eng: 'hello',
//         ua: 'привіт',
//     },
//     {
//         eng: 'bye',
//         ua: 'пока',
//     },
//     {
//         eng: 'programming',
//         ua: 'програмування',
//     },
// ];

// console.log(vocabulary.hello);
// console.log(vocabulary.bye);
// console.log(vocabulary.programming);




// Напишіть функцію що перевіряє, щоб всі властивості обʼєкта були примітивами


// const cat = {
//     name: 'es6',
//     numberOfLegs: 4,
//     color: 'black',
//     hadLunch: true,

//     sayMeow: function () {
//         alert('meow');
//     },
// };

// const cat2 = {
//     name: 'es4',
//     numberOfLegs: 3,
//     color: 'white',
//     hadLunch: true,
//     someObj: {}
// };


// function isAllPrimitives(obj) {
//     let allPrimitives = true;

//     for (let key in obj) {
//         if (typeof obj[key] === 'function' || typeof obj[key] === 'object') {
//             allPrimitives = false;
//             break;
//         }
//     }

//     console.log(allPrimitives);

// }


// isAllPrimitives(cat2);


// Напишіть функцію що видаляє із масиву обʼєктів обʼєкт з певним name
// const people = [
//     {
//         name: "asdfghjk",
//         age: 30
//     },
//     {
//         name: "qwerty",
//         age: 21
//     },
//     {
//         name: "zxcvbnm",
//         age: 19
//     }
// ];

// function removeSomeone(peoples, name) {
//     return peoples.filter(person => {
//         if (person.name !== name) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// const result = removeSomeone(people, 'qwerty');

// console.log('result > ', result);




// const sum = a => b => console.log(' a + b  >', a + b);


// sum(7)(7);
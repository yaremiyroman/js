// let a = 5;
// console.log('a > ', a);

// function testFunction() {
//     const b = 10;
//     console.log('b > ', b);
//     a = a + 1;
//     console.log('a > ', a);
// }

// testFunction();

// function testFunction2(X) {
//     const b = 10;
//     console.log('b > ', b);

//     console.log('X > ', X);
// }

// testFunction2(a);

// let x = 100;
// console.log('x > ', x);

// y = 200;
// console.log('y > ', y);

// let x = 100;
// console.log('x > ', x);
// console.log('superGlobal > ', superGlobal);

// function outer() {
//     let y = 200;

//     console.log('x > ', x);
//     console.log('y > ', y);
//     console.log('superGlobal > ', superGlobal);

//     function inner() {
//         let c = 300;

//         console.log('x > ', x);
//         console.log('y > ', y);
//         console.log('c > ', c);
//         console.log('superGlobal > ', superGlobal);
//     }

//     inner();
// }

// outer();

// function testSecond() {
//     const X = 'Hello';

//     console.log('X > ', X);
// }

// testSecond();

// function outer(a) {
//     const Y = 55;

//     return function middle(b) {
//         const X = 'Hello';

//         return function inner(f) {
//             const a = 3;
//             const b = 4;
//             console.log('X > ', X);
//         }
//     }
// }

// outer()();

// function makeCount() {
//     let counter = 0;

//     return function tereretsdfg(makeNull) {
//         return makeNull === null ? counter = 0 : counter++;
//     }

//     tereretsdfg();
//     tereretsdfg();
// }

// const goCount = makeCount();

// console.log(goCount());
// console.log(goCount());
// console.log(goCount(null));
// console.log(goCount());
// console.log(goCount());

// function makeCount() {
//     let counter = 0;

//     return function() {
//         return counter++;
//     }
// }

// const goCount = makeCount();

// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());





// function sum(a, b) {
//     return a + b;
// }

// const result = sum(3, 5);


// console.log("sum >", result);



// sum(3, 5);

// sum(3)(5);



// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const result = sum(4)(8);
// console.log("sum >", result);


// carrying




const a = 35;
const b = 'sdfgdsg';
const isBool = true;
const arr = [];


const obj = {};

// const cat = {
//     'color': 'red',
//     'amountLegs': 4,
//     'isHungry': true,
// };

// console.log('cat > ', cat);

// console.log(cat.color);
// console.log(cat.amountLegs);
// console.log(cat.isHungry);


// const cat = {};
// console.log('cat > ', cat);

// cat.color = 'yellow';
// console.log('cat > ', cat);

// cat.amountLegs = 4;
// console.log('cat > ', cat);



// const cat = {
//     'color': 'red',
//     'amountLegs': 4,
//     'isHungry': true,
//     'sayMeow': function() {
//         alert('sayMeow');
//     }
// };

// // cat.sayMeow();
// console.log('cat > ', cat);

// cat.anyProp = 'new property';
// console.log('cat > ', cat);

// delete cat.color;
// console.log('cat > ', cat);


// const numberObj = {
//     string: 'string',
//     let: '1',
//     15: '1',
//     const: '1',
//     'newProperty': 99,
// }

// numberObj.anyProp = 'anyProp';



// console.log('numberObj > ', numberObj);
// console.log('numberObj > ', numberObj['new property']);

// const propName = 'property';

// const anyVar = numberObj['new ' + 'property'];
// console.log(anyVar);





// const numberObj = {
//     string2: 'string',
//     let: '1',
//     15: '1',
//     const: '1',
//     'newProperty': 99,
// }


// // console.log(numberObj.errorProp === undefined);

// console.log('errorProp' in numberObj);


// for (let key in numberObj) {
//     console.log('key > ', key);
//     const val = numberObj[key];
//     console.log('val > ', val);
// }



const cityCodes = {
    kyiv: '044',
    mykolaiv: '0512',
    odesa: '048',
    dnipro: '056',
}

console.log(cityCodes.kyiv);
console.log(cityCodes.mykolaiv);


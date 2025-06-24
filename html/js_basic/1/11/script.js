// const a = {
//     x: 3,
//     y: 6
// };

// const b = {
//     w: 11
// };


// function main() {
//     sdfgsdfg
// }

// main(123);


// // console.log('a > ', a);
// // console.log('b > ', b);

// Object.assign(a, b);

// console.log('a > ', a);

// const newCloned = Object.assign({}, a, b);
// console.log('newCloned > ', newCloned);

// spread operator
// ...


// const a = {
//     x: 3,
//     y: 6
// };

// ...a
// x: 3, y: 6



// const b = {
//     w: 11
// };

// const c = {
//     c: "stringstirg"
// };


// ...b
// w: 11

// const newObj = { ...a, ...b, ...c };

// const newObj2 = Object.assign({}, a, b, c);

// console.log('newObj > ', newObj);


// console.log('...a > ', {...a});



// const A = [3, 5, 7];
// const B = [345, 524524];

// const C = [ ...A, ...B];

// console.log('C > ', C);





// const catParent = {
//     secondName: 'sphinx',
//     color: 'red',
// };



// const catChild = {
//     name: 'Tom',
//     __proto__: catParent
// };


// console.log('catChild > ', catChild);
// console.log('catChild.name > ', catChild.name);
// console.log('catChild.name > ', catChild.secondName);
// console.log('catChild.name > ', catChild.color);




// const cat = {
//     legs: 4,
//     sayMeow: function() {
//         alert('sayMeow');
//     }
// };


// const catParent = {
//     secondName: 'sphinx',
//     color: 'red',
//     __proto__: cat
// };



// const catChild = {
//     name: 'Tom',
//     __proto__: catParent
// };


// console.log('catChild > ', catChild);





const cat = {
    legs: 4,
    sayMeow: function () {
        alert('sayMeow');
    },
    name: 'Parent Name',
};



// const catParent = {
//     secondName: 'sphinx',
//     color: 'red',

//     sayMeow: function() {
//         alert(`  My name is: ${this.name}   `)
//     },
//     __proto__: cat

// };



// const catChild1 = {
//     id: 1000,
//     __proto__: catParent
// };

// const catChild2 = {
//     id: 1001,
//     __proto__: catParent
// };

// const catChild3 = {
//     id: 1002,
//     __proto__: catParent
// };

// const catChild4 = {
//     id: 1006,
//     __proto__: catParent
// };



// console.log(catChild1.id);
// console.log(catChild3.id);
// console.log(catChild1.color);
// console.log(catChild2.color);
// console.log(catChild3.color);


// console.log(' > ', catParent.color);










// secondName: 'sphinx',
// color: 'red',

// sayMeow: function() {
//     alert(`  Meow   `)
// },


// camelCase
// CamelCase



// function Cat() {

//     const tempObj = {};

//     tempObj.color = 'red';
//     tempObj.secondName = 'sphinx';
//     tempObj.sayMeow = function() {
//         alert(`  Meow   `);
//     };

//     return tempObj;

// }


// function Cat() {
//     // const this = {};

//     this.color = 'red';
//     this.secondName = 'sphinx';
//     this.sayMeow = function() {
//         alert(`  Meow   `);
//     };

//     // return this;
// }




// function Cat() {
//     this.color = 'red';
//     this.secondName = 'sphinx';
//     this.sayMeow = function() {
//         alert(`  Meow   `);
//     };
// }




// const firstCat = new Cat();
// const firstCat2 = new Cat();
// const firstCat3 = new Cat();
// const firstCat4 = new Cat();
// const firstCat5 = new Cat();
// const firstCat6 = new Cat();
// const firstCat7 = new Cat();
// const firstCat8 = new Cat();
// const firstCat10 = new Cat();



// const firstCat9 = new Cat();
// firstCat9.hadDinner = true;

// console.log('firstCat8 > ', firstCat8);
// console.log('firstCat9 > ', firstCat9);




// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     this.sayMeow = function () {
//         alert(`  Meow   `);
//     };
// }




// const firstCat9 = new Cat('black', 'best');
// const firstCat7 = new Cat('red', 'super');
// const firstCat777 = new Cat('orange', 'good');

// const newDate = new Date();


// console.log(  firstCat7 instanceof    Cat   );
// console.log(  newDate instanceof    Cat   );
// console.log(  newDate instanceof    Date   );









// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     this.sayMeow = function () {
//         alert(`  Meow   `);
//     };
// }




// const firstCat777 = new Cat('orange', 'good');



// const hasSecondName = firstCat777.hasOwnProperty('secondName');
// const hasAnotherProp = firstCat777.hasOwnProperty('anotherProp');

// console.log('hasSecondName > ', hasSecondName);
// console.log('hasAnotherProp > ', hasAnotherProp);





// function Cat(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     // this.eyes = 2;
// }



// const firstCat777 = new Cat('orange', 'good');
// const firstCat6 = new Cat('black', 'fine');
// const firstCat3 = new Cat('red', 'best');



// Cat.prototype.sayMeow = function() {
//     alert(' Meow ');
// };


// firstCat777.sayMeow();




// console.log('firstCat777 > ', firstCat777);
// console.log('firstCat6 > ', firstCat6);
// console.log('firstCat3 > ', firstCat3);

// Cat.prototype.ears = 2;

// firstCat777.ears = 5;

// console.log('firstCat3.ears > ', firstCat777.ears);
// console.log('firstCat3.ears > ', firstCat3.ears);
// console.log('firstCat3.ears > ', firstCat6.ears);


// console.log('firstCat777 > ', firstCat777);





// 1 option
// function MakeBuilding(name, floors, apartments, street) {
//     this.floorsCount = floors;
//     this.apartmentsCount = apartments;
//     this.street = street;
//     this.name = name;
// }

// const firstBuilding = new MakeBuilding('JK Gefest', 22, 300, "Soborna");
// const firstBuilding2 = new MakeBuilding('JK Gefest', 22, 300, "Soborna");
// const firstBuilding3 = new MakeBuilding('JK Gefest', 22, 300, "Soborna");

// console.log('firstBuilding > ', firstBuilding);



// 2 option
// function MakeBuilding(name, floors, apartments, street) {
//     this.floorsCount = floors;
//     this.apartmentsCount = apartments;
//     this.street = street;
//     this.name = name;
// }

// const firstBuilding = new MakeBuilding(
//     prompt('Enter JK name: ', 'JK Gefest'),
//     prompt('How much floors? ', 22),
//     prompt('How much apartments? ', 300),
//     prompt('Enter street name: ', "Soborna"),
// );

// console.log('firstBuilding > ', firstBuilding);


// 3 option

// function MakeBuilding() {
//     this.floorsCount = prompt('How much floors? ', 22);
//     this.apartmentsCount = prompt('How much apartments? ', 300);
//     this.street = prompt('Enter street name: ', "Soborna");
//     this.name = prompt('Enter JK name: ', 'JK Gefest');
// }

// const firstBuilding = new MakeBuilding();
// const firstBuilding2 = new MakeBuilding();
// const firstBuilding6 = new MakeBuilding();
// const firstBuilding4 = new MakeBuilding();

// console.log('firstBuilding > ', firstBuilding);

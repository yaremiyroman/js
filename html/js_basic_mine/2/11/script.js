var b;
// процедурне програму
// функціональне прог
// обʼєктно орієнтоване прог - Успадкування, інкапсуляція, поліморфізм

// Успадкування, Prototype
// функцію-контрусктор

// # Успадкування з прототипів

// const catParent = {
//     breed: 'sphinx51',
//     color: 'red',
//     name: 'erased',
//     sayMeow: function() {
//         alert('meow');
//     }
// };

// const catChild = {
//     name: 'Tom',
//     __proto__: catParent,
// };

// catParent.breed = ' new    ';
// console.log('catParent > ', catParent.name);
// console.log('catChild > ', catChild.breed);

// # Ланцюжок прототипів

// const cat = {
//     legs: 5,
//     sayMeow: function() {
//         alert('meow');
//     }
// };

// const catParent = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Father',
//     __proto__: cat,
// };

// const catChild = {
//     name: 'Child-cat',
//     __proto__: catParent,
// };

// const superCat = {...cat, ...catParent, ...catChild};
// console.log('superCat > ', superCat);
// catChild.__proto__ = catParent;

// console.log('cat > ', cat);
// console.log('catParent > ', catParent);
// console.log('catChild > ', catChild);

// const obj = {};
// const objChild = { name: 'anyName' };

// obj.__proto__ = objChild;

// console.log('obj > ', obj);
// console.log('objChild > ', objChild);

// const obj5 = { super2: 1415415 };
// const obj4 = { super: 14 };
// const obj3 = {};
// const objChild6 = { name: 'anyName' };

// Object.setPrototypeOf(obj3, objChild6);
// Object.setPrototypeOf(objChild6, obj4);
// Object.setPrototypeOf(obj4, obj5);

// console.log('obj3 > ', obj3);
// console.log('objChild6 > ', objChild6);

// const cat = {};

// const catParent = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Father',
//     __proto__: cat,
// };

// cat.legs = 5;
// cat.sayMeow = function() { alert('meow');};

// console.log('catParent > ', catParent);

// const catChild1 = {
//     name: 'Child1',
//     __proto__: catParent,
// };

// console.log('catChild1 > ', catChild1);

// const catChild2 = {
//     name: 'Child2',
//     __proto__: catParent,
// };

// console.log('catChild2 > ', catChild2);

// const catChild3 = {
//     name: 'Child3',
//     __proto__: catParent,
// };

// console.log('catChild3 > ', catChild3);

// const catChild4 = {
//     name: 'Child4',
//     __proto__: catParent,
// };

// console.log('catChild4 > ', catChild4);

// # Використання конструктора для створення об’єктів

// const cat2 = {
//     breed: 'sphinx',
// color: 'red',
//     name: 'Father',
// };

// console.log(getCat());

// function GetCat() {
//     const this = {};

//     this.breed = 'sphinx';
//     this.color = 'red';
//     this.name = 'Father';

//     return this;
// }

// function getCat() {
//     const cat = {};

//     cat.breed = 'sphinx';
//     cat.color = 'red';
//     cat.name = 'Father';

//     return cat;
// }

// function GetCat() {
//     this.breed = 'sphinx';
//     this.color = 'red';
//     this.name = 'Father';
// }

// const cat = new GetCat();
// const cat2 = new GetCat();
// const cat3 = new GetCat();

// console.log('cat > ', cat);
// console.log('cat2 > ', cat2);
// console.log('cat3 > ', cat3);

// function Date() {
//     this.date = 'today 20:44';
// }

// function GetCat(breedName = 'sphinx', colorValue = 'red', nameName = 'Father') {
//     this.breed = breedName;
//     this.color = colorValue;
//     this.name = nameName;
//     this.legs = 4 + 100 / 12 - 6;
// }

// const cat = new GetCat('SuperBreed', 'orange', 'NewFather');
// const cat2 = new GetCat('SuperBreed', 'orange');
// const cat3 = new GetCat('SuperBreed', undefined, 'NewFather');

// const newDate = new Date();

// console.log(newDate);
// console.log(cat instanceof GetCat);
// console.log(cat2 instanceof GetCat);
// console.log(cat3 instanceof GetCat);
// console.log(newDate instanceof GetCat);

// const catParent = {
//     legs: 5,
//     sayMeow: function() {
//         alert('meow');
//     }
// };

// const catChild = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Father',
//     __proto__: catParent,
// };

// catParent.anyProp = 234654235;
// catParent.anyPropNew = 'new';

// // console.log(catChild.hasOwnProperty('breed'));
// // console.log(catChild.hasOwnProperty('name'));
// // console.log(catChild.hasOwnProperty('sayMeow'));
// catChild.sayMeow();

// function GetCat(breedName = 'sphinx', colorValue = 'red', nameName = 'Father') {
//     this.breed = breedName;
//     this.color = colorValue;
//     this.name = nameName;
// }

// const cat = new GetCat('SuperBreed', 'orange', 'NewFather');
// const cat3 = new GetCat('SuperBreed', undefined, 'NewFather');

// GetCat.prototype.sayMeow = function() { alert('mewo'); };
// GetCat.prototype.legs = 4;

// // cat.sayMeow();
// // cat3.sayMeow();

// console.log(cat3.hasOwnProperty('legs'));

// // console.log(cat3.legs);

// for (let key in cat3) {
//     if (cat3.hasOwnProperty(key))  {
//         console.log(key);
//     }
// }

// написати функцію ConstuctCity
// приймати в себе властивості на наш розсуд
// функція має бути конструкторм

// function ConstuctCity(
//     cityName = prompt('enter city name'),
//     cityMayor = prompt('enter cityMayor'),
//     mainStreet = prompt('enter mainStreet'),
// ) {
//     this.cityName = cityName;
//     this.cityMayor = cityMayor;
//     this.mainStreet = mainStreet;
// }

// const myCity = new ConstuctCity('Mykolaiv');

// console.log('myCity > ', myCity);

// es5
// es6

// var, let, const

// const constName = 5;
// let letName = 5;

// letName = 56;
// letName = null;

// var newVariable =  234535;
// newVariable = '123421424';
// newVariable = null;




// function exampleVar() {
//     var x = 10;

//     if (true) {
//         x = 10;
//     }

//     console.log("x > ", x);
// }

// exampleVar();





// function exampleLet() {
//     let x2 = 10;

//     if (true) {
//         x2 = 15;
//     }

//     console.log("x2 > ", x2);
// }

// exampleLet();



// hoisting



// console.log(a);
// const a = 15;
// // console.log(a);


// console.log(b);
// var b = 16161;





// let a = 15;
// console.log(a);
// let a = 25;
// console.log(a);


// var a = 15;
// console.log(a);
// var a = 25;
// console.log(a);






// function newFunc(a, b) {
//     if (a === undefined) {
//         a = 15;
//     }

//     if (b === undefined) {
//         b = 25;
//     }
// }



// function newFunc(a = 15, b = 25) {

// }





// const arr1 = [2, 5, 7];
// const arr2 = ['2', '5', '7'];

// var arrUnited = arr1.concat(arr2);
// console.log('arrUnited > ', arrUnited);

// const arrUnitedES6 = [...arr1, ...arr2];
// console.log('arrUnited > ', arrUnitedES6);





// function funcDeclaration() {

// }

// const funcExpression = () => {};
// const funcExpression3 = _ => {};




// var stringES5 = '1341234124124';

// const stringES6 = `the same ${6 +  stringES5 + 7} old string`;

// console.log('stringES5 > ', stringES5);
// console.log('stringES6 > ', stringES6);



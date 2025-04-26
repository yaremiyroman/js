// class MyClass {
//     prop = value;   
//     constructor(...) {     }
//     method(...) {}
//     get something(...) {}
//     set something(...) {}
//   }

// 'use strict';

// var js = 1;

// () => {}
// ...js
// class ClassName;



// const firstCat6 = new Cat('black', 'fine');
// const firstCat3 = new Cat('red', 'best');



// Cat.prototype.sayMeow = function() {
//     alert(' Meow ');
// };


// firstCat777.sayMeow();





// function CatConstructor(catColor, catSecondName) {
//     this.color = catColor;
//     this.secondName = catSecondName;
//     this.eyes = 2;
// }



// const cat1 = new CatConstructor('orange', 'good');

// console.log('cat1 > ', cat1);





// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }


// }

// // CatClass.prototype.sayMeow = function() {
// //     alert(' Meow ');
// // };

// CatClass.prototype.howManyEyes = function () {
//     console.log(`I have ${this.eyes} eyes`);
// };


// // console.log('CatClass.prototype > ', CatClass.prototype);
// // console.log('CatClass.prototype.constructor > ', CatClass.prototype.constructor);

// const cat2 = new CatClass('black', 'bad');

// console.log('cat2 > ', cat2);
// // console.log('typeof CatClass > ', typeof CatClass);

// // console.log('cat2.color > ', cat2.color);
// // console.log('cat2.secondName > ', cat2.secondName);
// // console.log('cat2.eyes > ', cat2.eyes);

// cat2.sayMeow();
// cat2.howManyEyes();



// Class Declaration та Class Expression
// Function Declaration
// function name() {}
// Function Expression
// const name = function() {}


// Class Declaration
// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }
// }


// // Class Expression
// const CatClass2 = class {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }
// }




// class Animal {}

// class Dog {}

// class Cat {}


// const weather = 'good';


// let MyClass = null;

// if (weather === 'good') {
//     MyClass = class {
//         // DOG
//     }
// } else {
//     MyClass = class {
//         // CAT
//     }
// }






// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }

//     get eyesGetSet() {
//         console.log('Getter started > ');
//         return this.eyes - 1;
//     }

//     set eyesGetSet(eyesNumber) {
//         console.log('Setter started > ');
//         this.eyes = eyesNumber * 3;
//         console.log('Setter finished > ');
//     }
// }

// const cat3 = new CatClass('red', 'red');

// console.log('cat3.eyes > ', cat3.eyes);

// cat3.eyes = 1000;
// console.log('cat3.eyes > ', cat3.eyes);

// const getterResult = cat3.eyesGetSet;

// console.log('getterResult > ', getterResult);

// cat3.eyesGetSet = 5;

// cat3.eyesGetSet = 7;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;
// cat3.eyesGetSet = 30;

// const getterResult2 = cat3.eyesGetSet;
// console.log('getterResult2 > ', getterResult2);

// cat3.sayMeow();








// class Animal {
//     constructor(legsNumber, speed) {
//         this.legs = legsNumber;
//         this.speed = speed;
//     }

//     static X = 'Y';

//     say() {
//         console.log('I am animal');
//     }
// }

// class Cat extends Animal {
//     constructor(legsNumber, speed, catColor, catSecondName) {
//         super(legsNumber, speed);

//         this.color = catColor;
//         this.secondName = catSecondName;
//         this.eyes = 2;
//     }

//     sayMeow() {
//         console.log(' Meow ');
//     }

//     say() {
//         console.log(super.X);
//         super.say();
//         console.log('I am CAT');
//     }

//     get eyesGetSet() {
//         console.log('Getter started > ');
//         return this.eyes - 1;
//     }

//     set eyesGetSet(eyesNumber) {
//         console.log('Setter started > ');
//         this.eyes = eyesNumber * 3;
//         console.log('Setter finished > ');
//     }
// }

// const cat6 = new Cat(4, 200, 'yellow', 'Smith');

// // console.log('cat6 > ', cat6);

// cat6.sayMeow();
// cat6.say();

// console.log(Animal.X);






// Використайте ключове слово class та напишіть constructor, щоб створити клас Vegetable. 

// Клас Vegetable дозволяє створити об’єкт-овоч із властивістю name, що передається до constructor.

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Повинно показувати 'carrot'


// class Vegetable {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const potato = new Vegetable('potato');
// console.log('potato > ', potato);

// const carrot = new Vegetable('carrot');
// console.log('carrot > ', carrot);

// const onion = new Vegetable('onion');
// console.log('onion > ', onion);



//  Використайте ключове слово class, щоб створити клас Thermostat.
// constructor приймає температуру в градусах Фаренгейта.
// У класі створіть getter, щоб отримати температуру в градусах Цельсія,
//  та setter, що приймає температуру в градусах Цельсія.
// - C = 5/9 * (F - 32)
// - F = C * 9.0 / 5 + 32
// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм


// class Thermostat {
//     constructor(F) {
//         this.F = F;
//     }

//     static newProperty = 'I am new';

//     static PI = 3.141592653589793;

//     // coolMethod() {
//     //     console.log('this.newProperty > ', this.newProperty);
//     // }

//     get temp() {
//         return Math.floor((this.F - 32) * (5 / 9));
//     }

//     set temp(C) {
//         this.F = (C * 9/5) + 32;
//     }
// }

// const thermos = new Thermostat(90);

// console.log(thermos.F);

// const celsius = thermos.temp;
// console.log('celsius > ', celsius);

// thermos.temp = 100;
// console.log(thermos.F);

// 
// thermos.coolMethod();

// thermos.newProperty = 'XYXXX';

// thermos.coolMethod();

// console.log('thermos.newProperty > ', thermos.newProperty);
// console.log('thermos.PI > ', thermos.PI);

// console.log('Thermostat.newProperty > ', Thermostat.newProperty);
// console.log('Thermostat.PI > ', Thermostat.PI);







// Write a JavaScript program that creates a class called 'Shape' 
// with a method to calculate the area.
// Create two subclasses, 'Circle' and 'Triangle',
// that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.



class Shape {
    area() { }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.floor(Math.PI * Math.pow(this.radius, 2));
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}


const circle1 = new Circle(44);
const circle1Area = circle1.area();
console.log('circle1Area > ', circle1Area);


const triangle2 = new Triangle(34, 25);
const triangle2Area = triangle2.area();
console.log('triangle2Area > ', triangle2Area);

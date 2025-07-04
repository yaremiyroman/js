// const user = {
//     name: 'Name',
//     secondName: 'Name II',
//     sayName: function () { console.log(this.name) }
// };

// user.sayName();

// const mapCityToCode = {
// 'kyiv': '044',
// 'mykolaiv': '0512',
// 'odesa': '405',
// };




// CRUD

// mapCityToCode.rivne = '123';
// console.log(mapCityToCode.kyiv);
// mapCityToCode.kyiv = '777';
// delete mapCityToCode.odesa;




// const cityToCodeMap = new Map([
//     ['kyiv', '044']
//     ['mykolaiv', '0512']
//     ['odesa', '405']
// ]);


// cityToCodeMap.set(123, '044');
// cityToCodeMap.set('mykolaiv', '0512');
// cityToCodeMap.set('false', '044123123').set('odesa', '405');
// console.log(cityToCodeMap);

// const cityToFind = 'kyiv';
// const someValue = cityToCodeMap.get(cityToFind);
// // console.log(someValue);
// // console.log(someValue);



// cityToCodeMap.delete('odesa');
// console.log(cityToCodeMap);
// const isCityInMap = cityToCodeMap.has('odesa');
// console.log('isCityInMap > ', isCityInMap);
// cityToCodeMap.clear();
// console.log('isCityInMap SIZE > ', cityToCodeMap.size);




// const myNumber = 5;
// const myString = '5';
// const myBool = false;


// const user = {
//     name: 'Name',
//     secondName: 'Name II',
//     sayName: function () { console.log(this.name) },
//     myNumber: 5,
//     myString: '5',
//     myBool: false,

//     userCard: {
//         math: 100,
//         literature: 99,

//         books: {
//             math: 2,
//             biology: 10,
//         }
//     }
// };


// const user22 = {
//     name: 'Name',
//     secondName: 'Name II',
//     sayName: function () { console.log(this.name) },
//     myNumber: 5,
//     myString: '5',
//     myBool: false,

//     userCard: {
//         math: 100,
//         literature: 99,

//         books: {
//             math: 2,
//             biology: 10,
//         }
//     }
// };



// const obj1 = {
//     myString: '5',
// };

// const obj2 = {
//     myString: '5',
// };

// const obj3 = obj1;

// console.log(obj1 == obj3); // FALSE


// const myArr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4];
// delete myArr[2];

// console.log(myArr);

// const mySet = new Set([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4]);
// const mySet = new Set();

// mySet.add('apple');
// mySet.add('orange').add('tomato');
// console.log('mySet > ', [...mySet.values()][2]);
// console.log('mySet > ', [...mySet][2]);





// function FN() {
//     return 1;
// }

// function FN2() {
//     console.log(2);
// }


// Процедурне
// ООП  (прототипне та класове)
// Функціональне




// const cat = {
//     numberOfLegs: 4,
//     isHungry: false,
//     name: 'CAT MAIN',

//     sayMeow: function () {
//         console.log(this.name);
//     }
// };

// console.log('cat > ', cat);

// const catChild = {
//     name: 'Cat Secondary',
//     __proto__: cat,
// };

// catChild.sayMeow();
// console.log('catChild > ', catChild);







// const abstractCat = {
//     numberOfLegs: 4,
//     isHungry: false,
//     sayMeow: function () {
//         console.log(this.name);
//     }
// };


// const catChild = {
//     name: 'Cat Secondary',
//     __proto__: abstractCat,
// };

// const catChild2 = {
//     name: 'Cat Secondary 22',
//     __proto__: abstractCat,
// };

// const catChild3 = {
//     name: 'Cat Secondary 33',
//     __proto__: abstractCat,
// };




// const catGrandChild3 = {
//     name: 'Cat GRAND CHILD 33',
//     __proto__: catChild3,
// };




// console.log(catGrandChild3);




// const abstractCat = {
//     numberOfLegs: 4,
//     isHungry: false,
//     sayMeow: function () {
//         console.log(this.name);
//     }
// };

// // console.log(abstractCat);






// function MakeCat(name, anotherOne, third = 'BY DEFAULT') {
//     this.numberOfLegs = 4;
//     this.isHungry = false;
//     this.name = name;
//     this.third = third;
//     this.anotherOne = anotherOne;
// }



// const catChild = new MakeCat('Tom1', 123);
// const catChild2 = new MakeCat('Tom2', 123);
// const catChild3 = new MakeCat('Tom3', 123);

// console.log(catChild);
// console.log(catChild2);
// console.log(catChild3);


// MakeCat.prototype.sayMeow = function () {
//     console.log('CAT');
// }

// catChild.sayMeow();





// const abstractCat = {
//     numberOfLegs: 4,
//     isHungry: false,
//     sayMeow: function () {
//         console.log(this.name);
//     }
// };





// class Cat {
//     #catAge = 0;
//     color = 'red';


//     static staticProp = 'Static Value';
//     static staticMethod() {
//         console.log(' I AM STATIC METHOD !!!');
//     }


//     constructor(name) {
//         this.numberOfLegs = 4;
//         this.isHungry = false;
//         this.name = name;
//     }

//     // public method
//     sayMeow() {
//         this.#sayHello();
//         console.log(this.name);
//     }

//     // private method
//     #sayHello() {
//         console.log('PRIVATE SAY HELLO');
//     }

//     #catGettingOlder(howManyYears) {
//         if (typeof howManyYears !== 'undefined')
//             this.#catAge = howManyYears
//         else
//             this.#catAge++;
//     }

//     changeYear(howManyYears) {
//         this.#catGettingOlder(howManyYears);
//         console.log('тепер коту ', this.#catAge, ' років');
//     }
// }

// console.log(Cat.staticProp);

// const myCat = new Cat('Tom');
// const myCat2 = new Cat('Tom2');

// myCat2.newProp = '123';

// myCat.changeYear();
// myCat.changeYear();
// myCat.changeYear(234);
// myCat.changeYear();
// myCat.changeYear();


// myCat.color = 1000500;
// console.log(myCat.color);



class Vehicle {
    static vehicleInfo = '4 wheel vehicle';

    constructor(mark, model) {
        this.mark = mark;
        this.model = model;
    }

    getInfo() {
        console.log(`${this.mark} ${this.model}`);
        this.#privMethod();
    }

    #privMethod() {
        console.log(' I AM PRIVATE ');
    }
}


class Car extends Vehicle {
    #privateProp = 0;
    publicProp = 0;

    constructor(mark, model, color) {
        super(mark, model);

        console.log('asdf');
    
        this.color = color;
    }

    anotherPublicMethod() {
        super.getInfo();
    }
}



const newCar = new Car('Toyo', 'Camry', 'Black');

newCar.getInfo();

newCar.anotherPublicMethod();
console.log('newCar > ', newCar);

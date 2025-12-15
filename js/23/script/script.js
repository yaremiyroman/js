const user = {
    name: 'Name',
    secondName: 'Name II',
    sayName: function () { console.log(this.name) }
};

user.sayName();

const mapCityToCode = {
'kyiv': '044',
'mykolaiv': '0512',
'odesa': '405',
};




CRUD

mapCityToCode.rivne = '123';
console.log(mapCityToCode.kyiv);
mapCityToCode.kyiv = '777';
delete mapCityToCode.odesa;




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






// Процедурне
// Функціональне
// ООП  (прототипне та класове)


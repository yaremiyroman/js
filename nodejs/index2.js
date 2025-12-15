import 'dotenv/config';

const myEnvName = process.env.NODE_ENV;

console.log("myEnvName: ", process.env.NODE_ENV);


import greet from './greet.js';
// Імпортуємо модуль mathOperations за допомогою require
import * as  mathOps from './mathOperations.js';


const name = 'World2';
console.log(greet(name));





// Використовуємо функції з імпортованого модуля
const sum = mathOps.add(10, 5);
const difference = mathOps.subtract(10, 5);
const product = mathOps.multiply(10, 5);
const quotient = mathOps.divide(10, 5);

// Виводимо результати в консоль
console.log(`Sum: ${sum}`); // Sum: 15
console.log(`Difference: ${difference}`); // Difference: 5
console.log(`Product: ${product}`); // Product: 50
console.log(`Quotient: ${quotient}`); // Quotient: 2
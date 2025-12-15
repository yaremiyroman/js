// import React from 'react';
// import { createRoot } from 'react-dom/client';
import { NewUser } from './User/User';
// import App from './App';

// const container = document.getElementById('root');

// createRoot(container!).render(<App />);


import './styles.scss';




// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(1, 2));


// const a: number = 1;
// let b: number = 2.5;

// b = 3;

// console.log(b);


// const c: string = 'hello';
// console.log(c);

// const d: boolean = true;

// const some: null = null
// const someUndef: undefined = undefined

// let anyData: any = 123;
// anyData = 'hello';

// console.log(anyData);


// function add(a: number, b: number): number {
//     const newString: string = 'hello';
//     return a + b + newString.length;
// }

// function sayHello(): void {
//     console.log(`Hello, Hello`);
// }


// let numbers: number[] = [1, 2, 3, 4, 5];
// let strings: string[] = ['1', '2', '3', '4', '5'];

// let anyArr: any[] = [1, '32', true, null];





// type User = { name: string, age: number };

// const newUser: User = {
//     name: 'John',
//     age: 30
// };
// let users: User[] = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jim', age: 35 },
// ];



// let matrix: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // matrix[1]?.forEach(num => console.log(num * 2));

// console.log(matrix[1][1]);


// let person: [string, number, boolean];
// person = ['John', 30, true];

// console.log(person[0].toUpperCase());
// console.log(person[1].toFixed());


// let pairs: [string, number][];

// pairs = [
//     ['one', 1],
//     ['two', 2],
//     ['three', 3],
// ];

// console.log(pairs[1][0]);

// let user: [string, number] = ['Oleg', 30];

// const [name, age] = user;

// console.log(name, age);


// tulpe


// let user: [string, number?] = ['Oleg'];

// const [name] = user;

// console.log(name);



// let values: [string, ...number[]];


// values = ['some', 1, 2, 3, 4, 5];




// function add(a: number = 100, b?: number): number {
//     if (!b) {
//         return a;
//     }

//     return a + b;
// }


// console.log(add());


// let calc: (x: number, y: number) => number;


// calc = function (a, b) {
//     return a + b;
// }



// calc = function (a, b) {
//     return a - b;
// }



// const toUpper = (str: string): string =>
//     str.toUpperCase();



// function sumAll(...numbers: number[]) {
//     return numbers.reduce((sum, x) => sum + x, 0);
// }


// console.log(sumAll(4, 5, 7, 7));





// type User = {
//     name: string,
//     age?: number,
//     status?: string,
//     isAdmin?: boolean,
//     lastName?: string
// };

// const user: User = {
//     name: 'ivan',
// };



// const user2: User = {
//     name: 'ivan2',
// };


// console.log(user);



// type AnyObj = {
//     [key: string]: any;
// };

// const anyObj = {
//     first: 1,
//     second: null,
//     third: '3rd'
// };

// console.log('anyObj > ', anyObj);



// type Product = {
//     name: string;
//     price: number;
// };


// let products: Product[] = [
//     {name: 'hello', price: 10050},
//     {name: 'hello2', price: 100504},
// ];


// type UserID = number | string;


// const userID: UserID = 17;
// const userId: UserID = '17';






// // Union
// type Status = "active" | "inactive" | "banned";

// const userStatus: Status = 'banned';

// console.log('userStatus > ', userStatus);




// // Enum
// enum StatusEnum {
//     Active = "activeasdfasdfsagf",
//     Inactive = "inactivew245g345g543g",
//     Banned = "banned",
// };

// const userStatusEnum: StatusEnum = StatusEnum.Inactive;

// // StatusEnum.Inactive
// // StatusEnum.Active
// // StatusEnum.Banned


// console.log('userStatusEnum > ', userStatusEnum);




// let value: unknown;

// value = 5;
// value = 'hello';

// if (typeof value === 'string') {
//     console.log(value.toUpperCase());
// }


// function error(message?: string): never | string {
//     if (!message) {
//         throw new Error('some message');
//     }

//     return message;
// }

// Ця функція ніколи не завершить своє виконання успішно, тому її тип повернення - never





// Union - |

// type Success = { code: 200 };
// type Error = { code: 500, message: string };

// type Result = Success | Error;


// // Intersection

// type User = { name: string; age: number };
// type UserData = { subscription: string; points: number };

// type UserInfo = User & UserData;

// const newUser: UserInfo = {
//     name: 'Ibdg',
//     age: 43,
//     subscription: 'monthly',
//     points: 101
// };



// const user = new NewUser(123, 'John', 'john@mail.com');

// console.log(user.getUser());


// ``




// function identity(arg: any): any {
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<string>('123');
// console.log(output);


// let output2 = identity<number>(123);
// console.log(output2);


// interface Pair<T, U> {
//     first: T;
//     second: U;
// }

// let pair: Pair<string, number> = {
//     first: 'hello',
//     second: 123
// };


// class Box<T, T2 = string> {
//     value: T;
//     value2: T2;

//     constructor(value: T, value2: T2) {
//         this.value = value;
//         this.value2 = value2;
//     }
// }

// let box1 = new Box<number>(123, 'hello');

// console.log(box1.value);
// console.log(box1.value2);


// function swap<T, U>(a: T, b: U): [U, T] {
//     return [b, a];
// }

// console.log(swap(4, 8));

// interface Result<T> {
//     data?: T;  // {1: v, 2:v2}
//     error?: string;
// }

// const userResult: Result<{id: number, name: string}> = {
//     data: {
//         id: 1,
//         name: 'John'
//     },
// };

// console.log(userResult);



// interface IUserData {
//     id: number;
//     name: string;
// }

// interface IUser extends IUserData {
//     age?: number;
//     status?: string;
// }

// type TypeUserData = {
//     id: number;
//     name: string;
// };

// type TypeUserInfo = {
//     age?: number;
//     status?: string;
// };

// type TUser = TypeUserData & TypeUserInfo & { new?: string; };
// // type TUser = {};


// const newUser: IUser = {
//     id: 1,
//     name: 'John',
//     age: 30,
// };

// console.log('newUser > ', newUser);

// class User implements IUser {
//     id: number;
//     name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }




// - оголосити інтерфейси для  Book та Author
// - створити масив з книгами та авторами
// - створити функцію яка виводить всі книги певного автора


// interface Author {
//     id: number;
//     name: string;
// }

// interface Book {
//     id: number;
//     title: string;
//     author: Author;
//     year: number;
// }

// const author1: Author = {
//     id: 1,
//     name: 'AuthorOne',
// };

// const author2: Author = {
//     id: 2,
//     name: 'AuthorTwo',
// };

// const books: Book[] = [
//     { id: 1, title: 'Book One', author: author1, year: 2001 },
//     { id: 2, title: 'Book Two', author: author2, year: 2002 },
//     { id: 3, title: 'Book Three', author: author1, year: 2003 },
// ];


// function getBooksByAuthor(authorName: string, books: Book[]): void {
//     const  filteredBooks = books.filter(book => book.author.name === authorName);

//     console.log(`Books by ${authorName}: `, filteredBooks);
// }


// getBooksByAuthor('AuthorOne', books);


// @myDecorator es9
// function toDecorate(target: Function) {

// }





// // Декларуємо декоратор logClass, який приймає клас як параметр
// function logClass(target: Function) {
//     console.log('target > ', target);
//     // Виводимо в консоль ім'я класу, до якого застосовано декоратор
//     console.log(`Клас ${target.name} був створений`) // "Class [class name] has been created"
// }

// // Застосовуємо декоратор @logClass до класу Person
// // @logClass
// class Person {
//     // Конструктор класу Person приймає два параметри: name та age
//     constructor(
//         public name: string, // Публічна властивість name, яка зберігає ім'я особи
//         public age: number // Публічна властивість age, яка зберігає вік особи
//     ) { }
// }

// function decoratedPerson() {
//     // Створюємо екземпляр класу Person з ім'ям 'Боб' та віком 25
//     console.log(new Person('Боб', 25));
//     return Person;
// }

// // Створюємо екземпляр класу Person з ім'ям 'Аліса' та віком 30
// const person = new Person('Аліса', 30)



// function Log(
//     target: any,
//     propertyKey: string,
//     descriptor: any
// ): any {
//     // console.log('target > ', target);
//     // console.log('propertyKey > ', propertyKey);
//     // console.log('descriptor > ', descriptor);

//     const originalMethod = descriptor.value;

//     descriptor.value = function () {
//         console.log(`-- Method ${propertyKey} is called ---`);
//         const result = originalMethod.apply(this);

//         return result;
//     }

//     return descriptor

// }

// class SomeClass {
//     @Log
//     someMethod() {
//         console.log('Inside someMethod');
//     }

//     @Log
//     someMethod2() {
//         console.log('Inside someMethod');
//     }
// }

// const someInstance = new SomeClass();
// someInstance.someMethod();
// someInstance.someMethod2();
// someInstance.someMethod2();


// Оголошення простору імен Utilities
// namespace Utilities {
//     // Функція в просторі імен, яка повертає найбільше число з масиву
//     export function maxArray(numbers: number[]): number | never {
//         if (numbers.length > 10) {
//             throw new Error('Array is too big');
//         }

//         return Math.max(...numbers);
//     }

//     // Інтерфейс в просторі імен
//     export interface Logger {
//         log: (msg: string) => void;
//     }

//     // Клас в просторі імен
//     export class ConsoleLogger implements Logger {
//         log(msg: string) {
//             console.log(msg);
//         }
//     }
// }


// Оголошення простору імен Utilities
// namespace AnotherUtilities {
//     // Функція в просторі імен, яка повертає найбільше число з масиву
//     export function maxArray(numbers: number[]): number {
//         return Math.max(...numbers);
//     }

//     // Інтерфейс в просторі імен
//     export interface Logger {
//         log: (msg: string) => void;
//     }

//     // Клас в просторі імен
//     export class ConsoleLogger implements Logger {
//         log(msg: string) {
//             console.log(msg);
//         }
//     }
// }

import { Utilities } from './Utilities';
import { AnotherUtilities } from './AnotherUtilities';

// Використання елементів з простору імен
const numbers: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 8, 3];
console.log(AnotherUtilities.maxArray(numbers)); // Виводить найбільше число з масиву

const logger: Utilities.Logger = new Utilities.ConsoleLogger();
logger.log('Це повідомлення залоговано за допомогою ConsoleLogger'); // Логує повідомлення
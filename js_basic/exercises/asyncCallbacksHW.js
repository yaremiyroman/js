// Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

// const randomDelayPrint = message => message.split('').forEach((char, i) =>
//     setTimeout(() => console.log('char >', char), i * Math.floor(Math.random() * 10000)));

// randomDelayPrint('Some message');





// Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку(в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.

// const eventHandler = _ => alert('Click >');

// function debounce(fn, delay) {
//     let timeoutId;

//     return function (...args) {
//         if (timeoutId) clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => fn.apply(this, args), delay);
//     };
// }

// const debounced = debounce(eventHandler, 1000);
// debounced();





// Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.Коли всі функції виконано, intervalRace має повернути масив із результатами.

const test1 = _ => 'test_1';
const test2 = _ => 'test_2';
const test3 = _ => 'test_3';

function callback(results) {
    console.log('[results] >', results);
}

function intervalRace(fns, t, callback = console.log) {
    let results = [];
    let index = 0;

    function callFunction() {
        if (index < fns.length) {
            results.push(fns[index++]());
            setTimeout(callFunction, t);
        } else {
            callback(results);
        }
    }

    return callFunction();
}

intervalRace([test1, test2, test3, test3], 500, callback);

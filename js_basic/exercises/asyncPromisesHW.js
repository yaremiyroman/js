// Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise. Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

// function sumF(nums = []) {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         resolve(nums.reduce((sum, num) => sum += num, 0))
//     }, 3000));
// }

// sumF([3, 4, 6]).then((message) => {
//     console.log('message >', message);
// }).catch((error) => {
//     console.error(error);
// });




// Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів, що виконуються одночасно. Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості. Результатом функції має бути масив результатів промісів.

function sliceArrayIntoSubarrays(arr, chunkSize) {
    const result = [];
    let i = 0;

    while (i < arr.length) {
        result.push(arr.slice(i, i + chunkSize));
        i += chunkSize;
    }

    return result;
}

function concurrentPromises(promises, maxInMoment) {
    return sliceArrayIntoSubarrays(promises, maxInMoment).flatMap(slice => {
        return Promise.all(slice).then(x => console.log(x));
    });
}

const results = concurrentPromises(
    [
        new Promise(resolve => resolve('1000')),
        new Promise(resolve => resolve('2000')),
        new Promise(resolve => resolve('3000')),
        new Promise(resolve => resolve('4000')),
        new Promise(resolve => resolve('5000')),
        new Promise(resolve => resolve('6000')),
        new Promise(resolve => resolve('7000')),
        new Promise(resolve => resolve('8000')),
        new Promise(resolve => resolve('9000')),
        new Promise(resolve => resolve('10000')),
        new Promise(resolve => resolve('11000')),
        new Promise(resolve => resolve('12000')),
        new Promise(resolve => resolve('13000')),
    ],
    3
);


console.log('results > ', results);




// Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions. Кожна функція-проміс приймає попередній результат як аргумент і повертає новий результат. Функція sequenceAsync має виконати проміси послідовно, передаючи результат попереднього промісу в наступний. Зверніть увагу, що вам потрібно надати реалізацію функції sequenceAsync, яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.



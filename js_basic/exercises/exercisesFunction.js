// Оголошуємо функцію для обчислення площі прямокутника
function calculateRectangleArea(length, width) {
    return length * width;
}

// Викликаємо функцію та передаємо їй значення сторін прямокутника
var rectangleLength = 5;
var rectangleWidth = 3;
var area = calculateRectangleArea(rectangleLength, rectangleWidth);

// Виводимо результат у консоль
console.log("Площа прямокутника з довжиною " + rectangleLength + " і шириною " + rectangleWidth + " дорівнює " + area);








// Обчислити площу кола за його радіусом та вивести результат у консоль.

function calculateArea(radius) {
    return Math.PI * radius * radius;
}

function printArea(radius) {
    var area = calculateArea(radius);
    console.log("Площа кола з радіусом " + radius + " дорівнює " + area.toFixed(2));
}

// Приклад виклику функції
var radius = 5;
printArea(radius);




// Обчислити суму та середнє значення елементів масиву.

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage(arr) {
    return sumArray(arr) / arr.length;
}

// Приклад виклику функції
var numbers = [10, 20, 30, 40, 50];
console.log("Сума елементів масиву: " + sumArray(numbers));
console.log("Середнє значення елементів масиву: " + calculateAverage(numbers));




//   Напишіть функцию main (a, b, cb) наступним чином:

// - Якщо a та b не передані, вони дорівнюють за замовчюванням 2 
// та 3  відповідно.

// - Якщо аргумент cb переданий і він є функцією, то він 
// виконується після виклику функції sum(x, y), і як вхідне значення приймає
// результат роботи функції sum(x, y).

// - Функція main повинна повертати результат функції аргументу cb, якщо він є, 
// або результат функції sum(x, y)


function sum(x, y) {
    return x + y;
}

function showMessage(message) {
    alert(message);
}

function main(a = 2, b = 3, cb) {
    const result = sum(a, b);

    if (typeof cb === 'function') {
        return cb(result);
    } else {
        return result;
    }
}


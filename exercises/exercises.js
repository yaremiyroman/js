

// Задача: Зчитати числа з клавіатури, поки не буде введено від'ємне число. Після цього вивести суму всіх введених додатніх чисел.

let sum = 0;
let number;

do {
    number = parseInt(prompt("Введіть число:"));
    if (number > 0) {
        sum += number;
    }
} while (number >= 0);

console.log("Сума додатніх чисел:", sum);




// Задача: Знайдіть суму всіх чисел від 1 до 100, які не кратні ані 3, ані 5.

let sum2 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        continue; // Пропускаємо числа, які кратні 3 або 5
    }
    sum2 += i;
}
console.log("Сума чисел від 1 до 100, які не кратні ані 3, ані 5:", sum2);





// Задача: Перевірка наявності дублікатів в масиві

function hasDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true; // Знайдено дублікат
            }
        }
    }
    return false; // Дублікати не знайдено
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 1];

console.log("arr1 містить дублікати:", hasDuplicates(arr1)); // false
console.log("arr2 містить дублікати:", hasDuplicates(arr2)); // true



// # Зворотний порядок слів у рядку


/*
 ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції

 Створіть вищу функцію (higher-order function) modifyFunction, яка приймає як аргументи функцію originalFunction та число multiplier.

 Функція originalFunction приймає один числовий аргумент.

 modifyFunction повинна повертати нову функцію, яка при виклику з будь-яким числовим аргументом викликає originalFunction з цим аргументом і множить результат на multiplier.

 Наприклад, якщо originalFunction повертає вхідний аргумент, помножений на 2, і multiplier дорівнює 3, то повернута функція повинна повертати вхідний аргумент, помножений на 6.
*/

function originalFunction(num) {
  // code
}

function modifyFunction(originalFunc, multiplier) {
  // code
}

// Приклад використання
// const modifiedFunc = modifyFunction(originalFunction, 3)
// console.log('Original function output for 4:', originalFunction(4)) // Повинно вивести 16
// console.log('Modified function output for 4:', modifiedFunc(4)) // Повинно вивести 48 (16 * 3)

/*
 У цьому коді ми створюємо модифіковану версію originalFunction за допомогою modifyFunction з множником 3.
 Потім ми виводимо результати для обох функцій, коли вони викликаються з аргументом 4.

 originalFunction(4) повинно повернути 16 (4 * 4), а modifiedFunc(4) повинно повернути 48, оскільки 16 (результат originalFunction) множиться на 3 (множник у modifyFunction).
*/

export { originalFunction, modifyFunction }

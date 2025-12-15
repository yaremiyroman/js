/*
! Завдання: Розробка Функції Трирівневої Вкладеності в JavaScript з Конкретною Операцією

Створіть функцію outerFunction, яка приймає один аргумент.

outerFunction повинна повертати функцію innerFunction, яка також приймає один аргумент.

innerFunction повинна повертати функцію deepInnerFunction, яка також приймає один аргумент.

deepInnerFunction повинна виконувати операцію множення з усіма переданими аргументами (один з кожної функції) і повертати результат цієї операції.

Результатом виклику outerFunction(arg1)(arg2)(arg3) має бути добуток arg1 * arg2 * arg3.
*/

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      // code
    }

    // code
  }

  // code
}

// const result = outerFunction(2)(3)(4)
// console.log(result) // Повинно повернути 24 (2*3*4)

/*
 Цей код є прикладом використання вкладених функцій у JavaScript, а також демонструє концепцію замикань (closures).

 ! Функція outerFunction:
 outerFunction є функцією вищого порядку, яка приймає один аргумент arg1.
 Вона повертає іншу функцію, innerFunction.

 ! Функція innerFunction:
 Ця функція, замкнена всередині outerFunction, також приймає один аргумент, arg2.
 innerFunction повертає ще одну функцію, deepInnerFunction.

 ! Функція deepInnerFunction:
 Ця функція є внутрішньою для innerFunction і приймає аргумент arg3.
 Всередині deepInnerFunction, вона використовує аргументи arg1, arg2 та arg3. Цікаво, що deepInnerFunction має доступ до аргументів arg1 та arg2, незважаючи на те, що вона знаходиться в різних областях видимості. Це можливо завдяки замиканням в JavaScript.
 deepInnerFunction повертає добуток трьох аргументів.

 ? Виклик функцій:
 Коли виконується outerFunction(2)(3)(4), відбувається наступне:
 * outerFunction(2) викликається і повертає innerFunction.
 * Потім, innerFunction(3) викликається і повертає deepInnerFunction.
 * Нарешті, deepInnerFunction(4) викликається, і вона повертає 2 * 3 * 4, що дорівнює 24.
 console.log(result) виводить результат, 24, у консоль.
*/

export { outerFunction }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Промісіфікація (або "promisification") в JavaScript означає перетворення функцій, які використовують колбеки (callbacks), на функції, які повертають проміси (Promises). Це робиться для спрощення асинхронного коду і покращення його читабельності.

// Розглянемо функцію, яка використовує колбек:

function loadData(callback) {
    setTimeout(() => {
        callback(null, "Data loaded");
    }, 1000);
}

loadData((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result); // Виведе "Data loaded" через 1 секунду
    }
});


// Тепер перетворимо цю функцію на таку, що повертає проміс:

function loadDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Умовне визначення успіху операції
            if (success) {
                resolve("Data loaded");
            } else {
                reject(new Error("Failed to load data"));
            }
        }, 1000);
    });
}

loadDataAsync()
    .then(result => {
        console.log(result); // Виведе "Data loaded" через 1 секунду
    })
    .catch(error => {
        console.error(error);
    });





// Розглянемо ще один приклад промісіфікації. У цьому випадку ми перетворимо функцію navigator.geolocation.getCurrentPosition, яка використовує колбек, на функцію, що повертає проміс.

navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    },
    (error) => {
        console.error('Error:', error.message);
    }
);

// Промісіфікація getCurrentPosition

function getCurrentPositionAsync() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });
}

// Використання з промісом
getCurrentPositionAsync()
    .then(position => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Функції-генератори в JavaScript дозволяють зручно працювати з послідовностями значень. Вони створюються за допомогою ключового слова function* і використовують ключове слово yield для повернення значень. Генератори можуть призупиняти своє виконання та відновлювати його пізніше, що робить їх ідеальними для роботи з ітераціями, потоками даних або асинхронними операціями

// Визначення генератора
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Використання генератора
const gen = myGenerator();

console.log(gen.next().value); // Виведе 1
console.log(gen.next().value); // Виведе 2
console.log(gen.next().value); // Виведе 3
console.log(gen.next().value); // Виведе undefined, оскільки більше значень немає


// Опис роботи генератора
// Визначення: Генератор визначається за допомогою function* синтаксису.
// Виклик: При виклику генератора (myGenerator()) повертається ітератор.
// Ітерація: Кожен виклик методу next() ітератора продовжує виконання генератора до наступного yield.


// Функції-генератори поводяться інакше, ніж звичайні. Коли така функція викликається, вона не запускає свій код. Замість цього вона повертає спеціальний об’єкт, який називається «об’єкт-генератор», щоб керувати її виконанням.

// "функція-генератор" створює "об’єкт-генератор"

console.log('gen > ', gen);



function* myGenerator() {
    yield 1;
    yield 2;
    return 3;
}

// Основним методом генератора є next(). При виклику він запускає виконання коду до найближчого оператора yield <value> (value можна опустити, тоді воно є undefined). Потім виконання функції призупиняється, а отримане value повертається до зовнішнього коду.

// Результатом next() завжди є об’єкт з двома властивостями:

// value: отримане значення.
// done: true, якщо код функції закінчився, інакше false.

let one = gen.next();

console.log(JSON.stringify(one)); // {value: 1, done: false}

// На даний момент ми отримали лише перше значення, а виконання функції відбувається на другому рядку:

// Давайте знову викличемо generator.next(). Він відновлює виконання коду і повертає наступний yield:


let two = gen.next();

console.log(JSON.stringify(two)); // {value: 1, done: false}


// І якщо ми викликаємо його втретє, виконання досягає оператора return, який завершує виконання функції:

let three = gen.next();

alert(JSON.stringify(three)); // {value: 3, done: true}


// Тепер генератор виконався. Ми можемо побачити це за допомогою done:true і обробити value:3 як кінцевий результат.

// Нові виклики generator.next() більше не мають сенсу. Якщо ми їх робимо, вони повертають той самий об’єкт: {done: true}.






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Як ви, напевно, вже здогадалися, дивлячись на метод next(), генератори є об’єктами, що перебираються.

// Ми можемо перебирати їх значення за допомогою for..of:

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

for (let value of generator) {
    alert(value); // 1, потім 2
}


// Значення 3 не показується!

// Це тому, що перебір через for..of ігнорує останнє value, коли done: true. Отже, якщо ми хочемо, щоб усі результати відображалися через for..of, то повинні повертати їх через yield:



function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator2 = generateSequence();

for (let value of generator2) {
    alert(value); // 1, потім 2, потім 3
}


const values = [...generateSequence()]
console.log(values) // [1, 2, 3]










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Генератори в ітераторах
const naturalIntegers = {
    [Symbol.iterator]: function () {
        return ({
            counter: 0,
            next() {
                return ({
                    value: ++this.counter,
                    done: this.counter > 5 ? true : false
                });
            }
        });
    },
}

for (let count of naturalIntegers) {
    console.log('count > ', count);
}

// перепишемо на генератори


const naturalIntegers2 = {
    *[Symbol.iterator]() { // скорочення для [Symbol.iterator]: function*()
        for (let counter = 0; counter < 5; counter++) {
            yield counter;
        }
    }
}

for (let count of naturalIntegers2) {
    console.log('count > ', count);
}


// Це працює, тому що range[Symbol.iterator]() тепер повертає генератор, а методи генератора – це саме те, що очікує for..of:

// він має метод .next()
// повертає значення у вигляді {value: ..., done: true/false}










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// У JavaScript генератори можуть приймати значення, передані назад в них під час виконання, за допомогою оператора yield. Це дозволяє взаємодіяти з генератором під час його виконання. Ось детальний приклад, що демонструє цю концепцію:

function* interactiveGenerator() {
    const initial = yield "Initial value";
    console.log('Received initial:', initial);

    const second = yield "Second value";
    console.log('Received second:', second);

    const third = yield "Third value";
    console.log('Received third:', third);

    return "Done";
}

// Виклик генератора
const gen3 = interactiveGenerator();

// Перший виклик next() запускає генератор до першого yield і повертає "Initial value". На цей момент генератор призупиняється.
console.log(gen3.next().value); // Виведе "Initial value"
// Значення 'First input' передається генератору, і це значення присвоюється змінній initial. Генератор продовжує виконання до наступного yield, повертаючи "Second value". Логування:
console.log(gen3.next('First input').value); // Виведе "Second value" та лог "Received initial: First input"
// Наступні виклики next() працюють аналогічно:
console.log(gen3.next('Second input').value); // Виведе "Third value" та лог "Received second: Second input"
console.log(gen3.next('Third input').value); // Виведе "Done" та лог "Received third: Third input"




// Щоб продемонструвати ще один приклад з використанням циклу для передачі значень:

function* incrementGenerator() {
    let count = 0;
    while (true) {
        count += yield count;
    }
}

const gen7 = incrementGenerator();

console.log(gen7.next().value); // Виведе 0
console.log(gen7.next(1).value); // Виведе 1 (count = 0 + 1)
console.log(gen7.next(2).value); // Виведе 3 (count = 1 + 2)
// gen7.throw(new Error("Відповідь не знайдено в моїй базі даних"));
gen7.return('END');
console.log(gen7.next(3).value); // Виведе 6 (count = 3 + 3)



// Як ми помітили у прикладах вище, зовнішній код може передати значення в генератор, як результат yield.
// …Але він також може ініціювати (викинути) там помилку. Це природно, оскільки помилка – це свого роду результат.
// Щоб передати помилку в yield, ми повинні викликати generator.throw(err). У цьому випадку err викидається в рядок із цим yield
gen7.throw(new Error("Відповідь не знайдено в моїй базі даних"));



// generator.return(value) завершує виконання генератора та повертає задане value.
gen7.return('END');
console.log(gen7.next());







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Композиція генераторів (або делегування генераторів) в JavaScript дозволяє одному генератору делегувати частину своєї роботи іншому генератору або ітератору. Це досягається за допомогою оператора yield*. Така композиція спрощує структуру коду і дозволяє створювати складні послідовності значень, розділяючи їх на менші, керовані частини.





// Розглянемо приклад, де один генератор делегує частину своєї роботи іншому генератору.

function* innerGenerator() {
    yield 'A';
    yield 'B';
    yield 'C';
}

function* outerGenerator() {
    yield 1;
    yield* innerGenerator(); // Делегує роботу innerGenerator
    yield 2;
    yield 3;
}

const gen23 = outerGenerator();

for (const value of gen23) {
    console.log(value);
}
// Виведе: 1, 'A', 'B', 'C', 2, 3


// Генератор outerGenerator генерує значення 1, делегує генерацію значень генератору innerGenerator (через yield* innerGenerator()), а потім генерує значення 2 і 3.





// Композиція з вкладеними генераторами

function* generator1() {
    yield 'X';
    yield 'Y';
}

function* generator2() {
    yield 1;
    yield* generator1();
    yield 2;
}

function* generator3() {
    yield 'Start';
    yield* generator2();
    yield 'End';
}

const gen33 = generator3();

for (const value of gen33) {
    console.log(value);
}
// Виведе: 'Start', 1, 'X', 'Y', 2, 'End'

// Композиція генераторів з yield* дозволяє спрощувати складні ітеративні процеси шляхом розбиття їх на менші частини і делегування роботи між ними. Це сприяє підвищенню читабельності і повторного використання коду.












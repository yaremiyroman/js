// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля 'source' / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const data = [
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 1 1 1 1',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля 1 1 1 1',
        'date': '01.01.2022',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт 1 1 1 1',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 1 2 2 2 2 ',
        'date': '23.11.1889',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля 2 2 2 2 ',
        'date': '01.12.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт 2 2 2 2 ',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 21555',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля1555',
        'date': '01.42.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт1555',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 332',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля32',
        'date': '01.01.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт32',
        'date': '05.12.2024',
    },
    {
        'source': 'ukr.net',
        'text': 'Вам необхідно написати функцію 43',
        'date': '23.11.1989',
    },
    {
        'source': 'google.com',
        'text': 'Кожен об\'єкт описує сповіщення та має поля3',
        'date': '01.01.2002',
    },
    {
        'source': 'unian.ua',
        'text': 'Вам необхідно перетворити цей масив на об\'єкт3',
        'date': '05.12.2024',
    },
];

// Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

const mapMessagesToSource = msgs => {
    const groupedMessages = Object.groupBy(msgs, (msg, i) => {
        return msg.source;
    });

    return groupedMessages[Symbol.iterator] = function () {
        let index = 0;
        const keys = Object.keys(this);

        return {
            next: () => {
                if (index < keys.length) {
                    return { value: keys[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    };
}

// Call
const groups = mapMessagesToSource(msgs);

for (let group of groups) {
    console.log(groups[group]);
}










// Memo
// Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
// Додайте перевірку, щоб прибрати дублікати результатів із кешу
const multiple = (a, b) => +a * +b;

function memo(fn, N) {
    let cache = new Map();
    let counter = 0;

    return function (...args) {
        const newKey = args.join('-');

        if (cache.has(newKey)) {
            // console.log("CACHED", cache);
            return cache.get(newKey);
        }

        if (cache.size === N) {
            // console.log("cache.size === N", cache.size, ' = ', N);
            const entries = [...cache.entries()];
            const keys = [...cache.keys()];
            const cacheItemIndex = entries.findIndex(entry => entry.includes(keys[counter]));

            if (++counter === N) {
                counter = 0;
            }

            if (!!entries[cacheItemIndex]) {
                entries[cacheItemIndex][0] = newKey;
                cache = new Map(entries);
                cache.set(newKey, fn(...args));
                // console.log("cacheItemIndex");
                return cache.get(newKey);
            }
        }

        // console.log("SET");
        cache.set(newKey, fn(...args));

        return cache.get(newKey);
    }
}

const memoMultiplication = memo(multiple, 3);



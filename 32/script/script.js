// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6];

// // Об'єднання масивів
// const combinedArray = [...firstArray, ...secondArray, 4, 8, ...[6, 8]];

// console.log(combinedArray); // Виведе: [1, 2, 3, 4, 5, 6]








// const firstObject = { name: 'John', surname: 'Doe' };
// const secondObject = { age: 30 };

// // Об'єднання об'єктів
// const combinedObject = { ...{name: 'John', surname: 'Doe'}, ...secondObject, 5: 9 };
// console.log(combinedObject); // Виведе: { name: 'John', age: 30 }





// function ariphmetic(operation, ...numbers) {
//     console.log(operation, ' > ', numbers); // Виведе: [1, 2, 3]

//     if (numbers.length < 2) {
//         throw new Error('No numbers provided');
//     }

//     let result = numbers[0];

//     numbers.forEach((num, index) => {
//         if (index === 0) return; // Пропускаємо перший елемент

//         switch (operation) {
//             case '+':
//                 result += num;
//                 break;
//             case '-':
//                 result -= num;
//                 break;
//         }
//     });

//     return result;
// }

// // Передача елементів масиву як аргументів
// console.log(ariphmetic('+', 1, 8, 7, -7)); // Виведе: 6








// const numbers = [1, 2, 3, 4, 5];
// const [elementNmOne, second, ...rest] = numbers;

// console.log(elementNmOne); // Виведе: 1
// console.log(second); // Виведе: 2
// console.log(rest); // Виведе: [3, 4, 5]




// const [first, second, ...rest] = numbers;

// console.log(first); // Виведе: 1
// console.log(second); // Виведе: 2
// console.log(rest); // Виведе: [3, 4, 5]









// const person = { name: 'John', age: 30, city: 'New York' };
// const { name, age, city } = person;

// console.log(name); // Виведе: John
// console.log(age); // Виведе: { age: 30, city: 'New York' }
// console.log(city); // Виведе: { age: 30, city: 'New York' }


// function sum(...numbers) {
//     return numbers.reduce((acc, current) => acc + current, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Виведе: 15





// const colors = ['червоний', 'зелений', 'синій'];
// const [red, , third] = colors;


// console.log(red); // Виведе: "червоний"
// console.log(third); // Виведе: "зелений"
// // console.log(blue); // Виведе: "синій"




// function displayStudentInfo(  { name, age }    )  {
//     console.log(`Name: ${name}, Age: ${age}`);
// }



// displayStudentInfo({
//     name: 'Alex',
//     age: 22
// });
// // Виведе: "Name: Alex, Age: 22"






// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 'done'; // Повертає значення при завершенні генератора
// }

// const gen = numberGenerator(); // Ініціалізація генератора

// console.log(gen.next()); // Виведе: 1
// console.log(gen.next().value); // Виведе: 2
// console.log(gen.next().value); // Виведе: 3
// console.log(gen.next()); // Виведе: 3
// console.log(gen.next()); // Виведе: 3








// const nonIterableObject = {
//     a: [1, 6, 8, 9, 10, 102],
//     b: 2,
//     c: 3,
//     x: '1234123123',
// };


// [nonIterableObject].forEach((value) => {
//     if (typeof value === 'object' && Array.isArray(value)) {
//         value.forEach((item) => {
//             console.log(item); // Виведе по черзі: 1, 6, 8, 9, 10, 102
//         });
//     }
// });


// for (const value in nonIterableObject) {
//     console.log(nonIterableObject[value]); // Виведе по черзі: 1, 2, 3
// }


// const nonIterableObject = {
//     a: [1, 6, 8, 9, 10, 102],
//     b: 2,
//     c: 3,
//     x: '1234123123',
// };


// nonIterableObject[Symbol.iterator] = function () {
//     const keys = Object.keys(this);
//     let arrToIterate;

//     keys.forEach((key) => {
//         if (Array.isArray(this[key])) {
//             arrToIterate = this[key]; // Перетворюємо масив на ітератор
//         }
//     });

//     let index = 0;

//     return {
//         next: () => {
//             if (index < arrToIterate.length) {
//                 return { value: arrToIterate[index++], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// for (const value of nonIterableObject) {
//     console.log(value); // Виведе по черзі: 1, 2, 3
// }



// const user = {
//     name: 'Олексій',
//     address: { street: 'Шевченка', city: 'Львів' }
// };

// // Традиційний спосіб отримання вулиці з адреси користувача
// const street = user?.address?.street ?? 'Вулиця не вказана';
//     // ? user.address.street
//     // : 'Вулиця не вказана';

// // Використання оператора необов'язкового ланцюжка
// // const safeStreet = user?.address?.street ?? 'Вулиця не вказана';

// console.log(street); // 'Шевченка'
// // console.log(safeStreet); // 'Шевченка'




























const API_BASE_URL = 'https://www.omdbapi.com/?apikey=8a313b38&i=tt3896198';
const searchInput = document.getElementById('movieSearch');
const movieList = document.getElementById('movieList');

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

async function searchByTitle(wordToSearch) {
    try {
        const response = await fetch(`${API_BASE_URL}&s=${wordToSearch}`).catch(error => {
            console.error('Fetch error:', error.message);
            throw error; // Пробросити помилку далі
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        renderMovies(data);
    } catch (error) {
        console.error('Fetch failed:', error.message);
    }
}

function renderMovies(movies) {
    console.log('Movies:', movies);
    clearMovies();

    movies.Search.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h3>${movie.Title}</h3>
        `;

        movieList.appendChild(movieItem);
    });
}

function clearMovies() {
    movieList.innerHTML = '';
}

const debouncedSearchByTitle = debounce(searchByTitle, 1000);

searchInput.addEventListener('input', (event) => {
    if (event.target.value.length >= 3) {
        debouncedSearchByTitle(event.target.value);
    }

    if (!event.target.value.length) {
        clearMovies();
    }
});



















































































































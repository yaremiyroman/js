// a = '144';


// // window.alert(a);
// // alert(a);



// // Document Object Model


// // html = {
// //     head: {},
// //     body: 'body',
// // }

// // body = {
// //     div: {},
// //     'div#newId' : {
// //         div: {

// //         }
// //     },
// //     p: {},
// // },

// // const getElementById2 = document.getElementById;

// const myParagraph = document.getElementById('myParagraph');

// myParagraph.style.backgroundColor = 'red';

// document.getElementById('newId').style.backgroundColor = 'yellow';



// const divsCollection = document.getElementsByClassName('divClass');


// // for in
// // for of


// for (let element of divsCollection) {
//     // console.log('element > ', element);
//     element.style.backgroundColor = 'blue';
// }



// const allParagraphs = document.getElementsByTagName('p');




// const divs = document.querySelectorAll('.divClass.newClass');
// console.log('querySelectorAll > ', divs);



// const div = document.querySelector('.divClass.newClass');
// console.log('querySelector > ', div);



// document.getElementById
// document.querySelectorAll




// const parentDiv = document.getElementById('parent');
// console.log('parentDiv > ', parentDiv);

// const divsChildren = parentDiv.children;
// // console.log('divsChildren > ', divsChildren);

// const firstChild = parentDiv.firstElementChild;
// // console.log('firstChild > ', firstChild);

// const lastChild = parentDiv.lastElementChild;

// const prevSibling = parentDiv.previousElementSibling;
// const nextSibling = parentDiv.nextElementSibling;
// const parentElem = parentDiv.parentElement;

// const closestElem = parentDiv.closest('#newId');

// console.log('closestElem > ', closestElem);





// const newDiv = document.createElement('div');
// // newDiv.textContent = '<p>simple <a href="/">text</a> content</p>';
// console.log('newDiv.textContent > ', newDiv.textContent);


// newDiv.innerHTML = '<p>simple <a href="/">text</a> content</p>';
// console.log('newDiv > ', newDiv);

// document.body.prepend(newDiv);



// const secondDiv = document.createElement('div');
// secondDiv.innerHTML = ' I am second';

// document.body.append(secondDiv);



// const middleElem = document.getElementById('middle');
// console.log('middleElem > ', middleElem);



// const prevElement = document.createElement('div');
// prevElement.innerHTML = 'I am PREV';

// const nextElement = document.createElement('div');
// nextElement.innerHTML = 'I am NEXT';


// middleElem.before(prevElement);
// middleElem.after(nextElement);

// // middleElem.remove();
// // nextElement.remove();

// const insider = document.createElement('div');
// insider.innerHTML = 'I am insider!';


// middleElem.prepend(insider);

// const isInsde = middleElem.contains(prevElement);

// console.log(isInsde);





// # Створення елемента

// -   Використовуючи JavaScript, створіть новий HTML-елемент (наприклад, <p>).
// -   Встановіть текстовий вміст на "Новий елемент створений!".
// -   Додайте створений елемент до кінця <body>.




const paragraph = document.createElement('p');
paragraph.textContent = 'Новий елемент створений';
document.body.append(paragraph);


// # Додавання атрибутів

// -   Створіть новий HTML-елемент (наприклад, <a>).
// -   Встановіть текстовий вміст на "Нове посилання".
// -   Встановіть атрибут id цього елемента на myNewLink.
// -   Встановіть атрибут href цього елемента на https://www.example.com/.
// -   Додайте створений елемент до кінця <body>.
// https://www.google.com

const myLink = document.createElement('a');
myLink.textContent = 'Нове посилання';
myLink.id = 'myNewLink';
myLink.href = 'https://www.google.com';
document.body.append(myLink);
// console.log(myLink);



// # Додавання елемента

// -   Створити порожній <div> з унікальним id.
// -   Використовуючи JavaScript, знайдіть цей елемент 
// за його id і додайте до нього новий елемент (наприклад, <p>Новий елемент доданий!</p>).

const emptyDiv = document.createElement('div');
emptyDiv.id = 'uniqueID';
emptyDiv.textContent = 'uniqueID';
document.body.prepend(emptyDiv);

const emptyDivById = document.getElementById('uniqueID');

const childParagraph = document.createElement('p');
childParagraph.textContent = 'Новий елемент доданий!';


emptyDivById.prepend(childParagraph);





const tasks = [];

while (true) {
    const task = prompt('Enter task:');

    if (task === null) break;

    tasks.push(task);
}

console.log('tasks > ', tasks);
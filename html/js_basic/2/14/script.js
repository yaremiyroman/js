// const rect = document.getElementById('rect');

// // console.log(rect);

// const handleRectClick = function() {
//   alert('click');
// };

// rect.addEventListener("click", handleRectClick);
// rect.removeEventListener("click", handleRectClick);

// rect.addEventListener("dblclick", function() {
//   alert('dbl click');
// });



// // -   mouseenter
// // -   mouseleave
// // -   mousemove

// rect.addEventListener("mouseenter", function() {
//   console.log('mouseenter');
// });

// rect.addEventListener("mouseleave", function() {
//   console.log('mouseleave');
// });

// // rect.addEventListener("mousemove", function() {
// //   console.log('mousemove');
// // });



// rect.addEventListener("mousedown", function() {
//   console.log('mousedown');
// });

// rect.addEventListener("mouseup", function() {
//   console.log('mouseup');
// });


// document.addEventListener("scroll", function() {
//   console.log('scroll');
// });


// document.addEventListener("click", function() {
//   console.log('click document');
// });



// document.addEventListener("keydown", function() {
//   console.log('key down');
// });


// document.addEventListener("keyup", function() {
//   console.log('key up');
// });


// document.addEventListener("keypress", function() {
//   console.log('key press');
// });



// window.addEventListener('load', function() {
//   alert('LOAD DONE');
// });



// rect.addEventListener("click", function() {
//   const newRect = document.createElement('div');
//   newRect.classList.add('new-rect');

//   const taskText = prompt('Enter new task');
//   newRect.textContent = taskText;


//   document.body.prepend(newRect);
//   console.log(newRect);
// });









// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const grey = document.getElementById('grey');

// addEventListener('eventName', handler() {}, eventCapture - false)

// document.addEventListener('click', function() {
//   console.log('DOCUMENT');
// });

// grey.addEventListener('click', function() {
//   console.log('grey');
// });

// green.addEventListener('click', function() {
//   console.log('green');
//   // alert('!!!!!!!!!!!!');
// });

// blue.addEventListener('click', function(event) {
  // event.stopPropagation();
//   console.log('blue');
// });




// const myLink = document.getElementById('myLink');

// myLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   event.stopPropagation();

//   alert('LINK CLICK');
// });



// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const grey = document.getElementById('grey');

// grey.classList.add('my-new-class');
// grey.classList.add('one-more-class');
// grey.classList.remove('my-new-class');


// blue.addEventListener('click', function() {
//   grey.classList.toggle('my-new-class');
// });

// blue.addEventListener('click', function() {
//   if (grey.classList.contains('my-new-class')) {
//     grey.classList.remove('my-new-class');
//   } else {
//     grey.classList.add('my-new-class');
//   }
// });





// -   створіть блок на сторінці, який
// змінює свій колір кожен раз, коли користувач наводить вказівник миші на нього
// -   cтворіть декілька кнопок, кожна з яких додає новий блок з певним коліром


// const rect = document.createElement('div');
// rect.id = 'rect';
// document.body.prepend(rect);
// console.log('rect > ', rect);



// rect.addEventListener('mouseenter', function(event) {
//   const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   event.target.style.backgroundColor = color;
// });


// const redBtn = document.createElement('button');
// redBtn.textContent = 'red';
// document.body.append(redBtn);

// const blueBtn = document.createElement('button');
// blueBtn.textContent = 'blue';
// document.body.append(blueBtn);



// const setColor = function(event, color) {
//   console.log('event > ', event);
//   rect.style.backgroundColor = color;
// }


// redBtn.addEventListener('click', (event) => setColor(event, 'red'));

// blueBtn.addEventListener('click', (event) => setColor(event, 'blue'));





// # Створіть візуалізацю стека





// const addElem = document.getElementById('add');
// const removeElem = document.getElementById('remove');


// addElem.addEventListener('click', function() {
//   const newElem = document.createElement('div');
//   newElem.classList.add('stack-element');
//   newElem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   document.body.prepend(newElem);
// });

// removeElem.addEventListener('click', function() {
//   document.body.firstChild.remove();
// });






// -   створіть масив рядків (наприклад,
// ["Пункт 1", "Пункт 2", "Пункт 3"]), запитайте їх promptom


// -   створіть список (<ul>) та додайте
// кожен елемент(<li>) масиву у вигляді окремого пункту списку
// -   додайте створений список до <body></body>





function collectTasks() {
  const tasks = [];

  while (true) {
    const task = prompt('Введіть ваш таск');
    if (task === null) break;
    tasks.push(task);
  }

  return tasks;
}


function render(tasks) {
  const list = document.createElement('ul');
  // list.id = 'task-list';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.append(listItem);
  });

  document.body.prepend(list);
}


function init() {
  render(collectTasks());
}


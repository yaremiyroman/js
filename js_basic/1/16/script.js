// const textInput = document.getElementById('textInput');

// console.log('textInput > ', textInput);

// blur
// focus
// -   input
// -   change
// -   submit

// textInput.addEventListener('focus', (event) => {
//     // event.target.value = 'Щось Там';
//     // console.log('focus > ');
// });

// textInput.addEventListener('blur', (event) => {
//     // event.target.value = '';
//     // console.log('blur > ');
// });

// textInput.addEventListener('input', (event) => {
//     const inputLength = event.target.value.length;
//     console.log('inputLength > ', inputLength);

//     if (inputLength >= 10) {
//         textInput.blur();
//     }
// });

// const testForm = document.getElementById("testForm");

// testForm.addEventListener("submit", event => {
//     const input1 = event.target["text-input"].value;
//     const input2 = event.target["text-input2"].value;
//     const input3 = event.target["text-input3"].value;

//     if (input1.length === 0 || input2.length === 0 || input3.length === 0) {
//         console.log('ЯКЕСЬ ПОЛЕ ПУСТЕ!!!!!!');
//         event.preventDefault();
//     }
// });

// newVar = '123123123123123123123123';

// window.setTimeout()/ window.setInterval()

// console.log('1');

// window.setTimeout(
//     () => { console.log(3); },
//     20
// )

// console.log('2');

// window.setInterval(
//     () => { console.log('Interval'); },
//     1000
// )

// -   alert, confirm, prompt, open

// alert('123');

// open('https://www.google.com');

// window.setTimeout(() => {
//     open("https://www.google.com");
// }, 5000);

// const obj = {
//     'key': 'value',
//     'key2': 'value2',
// }

// document.cookie = 'test=testValue';

// const data = localStorage.getItem("phrase");

// console.log("data > ", data);






const storageName = 'elements';
const arr = [];
let store = null;

if (localStorage.getItem(storageName)) {
    store = localStorage.getItem(storageName).split(',');
} else {
    while (true) {
        const option = prompt('Enter option > ');
        if (option === null) break;

        arr.push(option);
    }

    localStorage.setItem(storageName, arr);
    store = arr;
}

console.log("store > ", store);

// console.log("arr > ", arr);

store.forEach(option => {
    const h2 = document.createElement('h2');
    h2.innerHTML = option;
    document.body.append(h2);
});


localStorage.clear()


// CRUD
// create
// read
// update
// delete
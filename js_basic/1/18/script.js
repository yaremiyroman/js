// document.getElementById('app')
// document.querySelector('#app')

// $('#app')

// $('#css .selecto .selector').operation1().operation2().operation3().operation4(() => {

// });

// const appElementJQuery = $("#app").html('<div>New HTML</div>');

// console.log("appElementJQuery > ", appElementJQuery);

// const elem = document.getElementById('id');
// elem.addEventListener('click', function() {
//     alert('YA FUNCTION');
// });

// $("#app")
//     .html("<div>New HTML</div>")
//     .hide()
//     .show()
//     .fadeOut(1000)
//     .fadeIn(2000)
//     .addClass('SUPER-CLASS')
//     .on("click", () => alert("ME CALLBACK"));

// $( "#accordionID" ).accordion();



let tasksInput = prompt("Please, write down a list of tasks to do, separated by commas", " ");
const tasksArray = tasksInput.split(",");


function createToDoList(arr){
    const tasksList = document.createElement('ul');
    for (let i = 0; i < arr.length; i++ ) {
        let task = document.createElement('li');
        task.innerHTML = arr[i];
        tasksList.appendChild(task);
    }
    return tasksList;
}

let bodyPage = createToDoList(tasksArray).body;

console.log(bodyPage);


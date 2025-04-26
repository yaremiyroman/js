function addElement(name, content, container, id = null) {
    const element = document.createElement(name);
    element.innerHTML = content;
    if (!!id) element.id = id;
    container.append(element);
    return element;
}

function renderListItem(task) {
    const listElement = document.getElementById("list");
    const taskElement = addElement("li", `<span>${task}</span>`, listElement);
    const deleteButton = addElement("button", "❌", taskElement);

    deleteButton.addEventListener("click", event => {
        const listItemToDelete = event.target.previousElementSibling.innerHTML;
        const tasks = localStorage.getItem("tasks").split(",");
        const tasksFiltered = tasks.filter(task => task !== listItemToDelete);
        localStorage.setItem("tasks", tasksFiltered);

        event.target.closest("li").remove();
    });
}

function addTaskButton(container) {
    const addButton = addElement("button", "✚✚✚✚✚", container);

    addButton.addEventListener("click", () => {
        const task = prompt("Enter your task: ");
        console.log("task > ", task);
        const tasks = localStorage.getItem("tasks").split(",");
        tasks.push(task);
        localStorage.setItem("tasks", tasks);
        renderListItem(task);
    });
}

function init() {
    const appElement = document.getElementById("app");
    let tasks = [];

    addElement("ul", "", appElement, "list");

    if (localStorage.getItem("tasks")) {
        tasks = localStorage.getItem("tasks").split(",");
    } else {
        while (true) {
            const task = prompt("Enter your task: ");
            if (task === null) break;
            if (!!task) {
                tasks.push(task);
            }
        }

        localStorage.setItem("tasks", tasks);
    }

    tasks.forEach(task => renderListItem(task));



    addTaskButton(appElement);
}

init();

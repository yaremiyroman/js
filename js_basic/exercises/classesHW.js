// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

// Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

// Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.

class Task {
    constructor(task) {
        this.text = task;
        this.status = false;
        this.created = new Date();
        this.edited = null;
    }
}

class TodoList {
    constructor(taskList = null) {
        this._taskList = !taskList
            ? this.collectTasks()
            : taskList.map((task, i) => ({ ...new Task(task), index: i + 1 }));
    }

    get taskList() {
        return this._taskList;
    }

    set taskList(taskList) {
        this._taskList = taskList;
    }

    collectTasks() {
        const tasks = [];

        while (true) {
            const taskText = prompt('Enter task:');

            if (taskText === null) break;

            if (taskText.length > 0) {
                const newTask = new Task(taskText);
                tasks.push(newTask);
            }
        }

        return tasks;
    }

    sortTasksByStatus(finishedFirst = true) {
        this.taskList = this._taskList.sort((a, b) => finishedFirst ? b.status - a.status : a.status - b.status);
    }

    sortTasksByDate(newestFirst = true) {
        this.taskList = this._taskList.sort((a, b) => newestFirst ? b.date - a.date : a.date - b.date);
    }

    findTasks(sample) {
        return this._taskList.filter(task => task.text.includes(sample));
    }

    getTasksInfo() {
        const undone = this._taskList.reduce((undone, { text, status }, i) => {
            console.log(`%c#${i + 1}: ${text}`, `color: ${!status ? 'red' : 'green'}`);

            return status === false ? undone += 1 : undone;
        }, 0);

        console.log(`${this._taskList.length} tasks / ${undone} active`);
    }

    getLastIndex() {
        return this._taskList
            .reduce((index, task) => index = task.index > index ? task.index : index, 0);
    }

    getTask(index) {
        return this._taskList.find(task => task.index === index);
    }

    addTask(taskText) {
        const newTask = new Task(taskText);
        newTask.index = this.getLastIndex() + 1;
        this.taskList = [...this._taskList, newTask];
    }

    deleteTask(index) {
        if (index >= 0 && index < this._taskList.length) {
            this.taskList = this.taskList.filter(task => task.index + 1 !== index);
        }
    }

    setTaskDone(index) {
        this._taskList.find(task => task.index === index).status = true;
    }

    editTask(index) {
        const editedTask = this._taskList.find(task => task.index === index);

        editedTask.text = prompt('', editedTask.text);
        editedTask.edited = new Date();
    }
}

const APP = new TodoList(['task1', 'task22', 'task1333', 'task1444', 'task155555', 'task1666666']);

APP.getTasksInfo();
APP.setTaskDone(4);
APP.getTasksInfo();
APP.sortTasksByStatus();
APP.getTasksInfo();

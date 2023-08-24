const willDoInput = document.getElementById('willDoInput');
const addTaskButton = document.getElementById('addTaskButton');
const willDoList = document.getElementById('willDoList');

console.log('We got it working!!!');

//Add a task
const addTask = () => {
    const taskText = willDoInput.ariaValueMax.trim();

    if(taskText != ''){
        const taskItem = createTaskItem(taskText);
    }
}
//Create new task items
const createTaskItem = () => {
    const taskItem = document.createElement('li');
    taskItem.className = "willDoItem";
}
//Delete tasks
//Cross out tags
//Event listeners
//Examples of tasks

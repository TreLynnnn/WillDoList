const willDoInput = document.getElementById('willDoInput');
const addTaskButton = document.getElementById('addTaskButton');
const willDoList = document.getElementById('willDoList');

console.log('We got it working!!!');

//Add a task
const addTask = () => {
     const taskText = willDoInput.value.trim();

    if(taskText != ''){
        const taskItem = createTaskItem(taskText);
        willDoList.appendChild(taskItem)
        willDoInput.value = '';
    }
}
//Create new task items
const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className = "willDoItem";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}
//Delete tasks
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    willDoList.removeChild(taskItem);
}
//Cross out tags
const toggleTask = () => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
}
//Event listeners
addTaskButton.addEventListener('click', addTask);
willDoInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
})

willDoList.addEventListener('change', toggleTask);
//Examples of tasks
const intialTasks = ['Buy groceries', 'Read Bible', 'Study for 2 hours'];

intialTasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    willDoList.appendChild(taskItem);
})
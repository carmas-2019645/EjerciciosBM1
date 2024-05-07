let tasks = [];
let priorities = Array.from({length: 10}, (_, i) => i + 1); 

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        let priority;
        if (priorities.length === 0) {
            priorities = Array.from({length: 10}, (_, i) => i + 1);
            priority = priorities.pop();
        } else {
            priority = priorities.pop();
        }
        
        const task = {
            text: taskText,
            priority: priority
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = ''; 
    }
}

function editTask(index) {
    const newText = prompt("Editar tarea:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    
    tasks.sort((a, b) => b.priority - a.priority);

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.text} (Prioridad: ${task.priority})`;
        
        
        if (task.priority >= 1 && task.priority <= 5) {
            li.classList.add('task-priority-1-to-5');
        } else if (task.priority >= 6 && task.priority <= 10) {
            li.classList.add('task-priority-6-to-10');
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editTask(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(index);
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
    });
}

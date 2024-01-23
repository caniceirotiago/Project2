/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKSS */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
    loadTasks();
});

/* LOAD ALL TASKS */
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];// vai buscar as tarefas gravadas anteriormente
    tasks.forEach(task => {
        addTaskToRightList(task); // para cada terefa chama ométodo para a adicionar à lista correta
    });
}
/* ADD TASKS TO THE RIGHT LIST */
function addTaskToRightList(task) {
    const itemList = document.createElement('li');
    itemList.setAttribute('data-task-id', task.id); // Cria um novo elemento li
    itemList.classList.add('task-item');
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = task.title;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = task.description;
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    createNextBtnListener(nextButton, task);
    itemList.appendChild(nextButton);
    itemList.appendChild(itemTitle);
    itemList.appendChild(itemDescription);
    document.getElementById(task.status).appendChild(itemList); // Adiciona a tarefa à lista correta
}

function createNextBtnListener(nextButton, task) {
    nextButton.addEventListener('click', function() {
        let nextStatus ="";
        if (task.status === 'todo') {
            nextStatus = 'doing';
        } else if (task.status === 'doing') {
            nextStatus = 'done';
        }
        else if (task.status === 'done') {
            nextStatus = 'todo';
        }
        moveTask(task, nextStatus);
    });
}
function moveTask(task, nextStatus) {
    const oldTaskElement = document.querySelector(`[data-task-id="${task.id}"]`);
    if (oldTaskElement) {
        oldTaskElement.remove();
    }

    // Cria uma nova tarefa atualizada
    const updatedTask = {...task, status: nextStatus};
    addTaskToRightList(updatedTask);

    // Salva a tarefa
    saveTasks();
}
function saveTask() {
    const tasks = [];
    ['todo', 'doing', 'done'].forEach(status => {
        document.querySelectorAll('#' + status + '-tasks li').forEach(taskElement => {
            const taskParts = taskElement.textContent.split(': ');
            tasks.push({ 
                title: taskParts[0], 
                description: taskParts[1], 
                status: status,
                id: taskElement.dataset.taskId // Supondo que cada tarefa tem um data-task-id
            });
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


/* EXIT BUTTON LISTENER  */
btn-RetroNW.addEventListener("click", function() {
    location.href = "retrospective.html";
});

/* OPTION BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "options.html";
});

/* Exit button on South-West BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "index.html";
});
/* Copyright button on South-East BUTTON LISTENER  */
btn-CopySE.addEventListener("click", function() {
    location.href = "copyright.html";
});



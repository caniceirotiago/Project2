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
    const itemList = document.createElement('li'); // Cria um novo elemento li
    const itemTitle = document.createElement('h3');
    const itemDescription = document.createElement('p');
    const nextButton = document.createElement('button');
    createNextBtnListener(nextButton, task);
    itemList.textContent = task.title + ': ' + task.description; // Adiciona o texto à tarefa 
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
        saveTask(task, nextStatus);
    });
}
function saveTask(task, nextStatus) {
    const updateTask ={...task, status: nextStatus};
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(t => t.id === task.id ? updatedTask : t);
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



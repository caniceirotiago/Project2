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
        addTaskToRightList(task.title, task.description, task.status); // para cada terefa chama ométodo para a adicionar à lista correta
    });
}
/* ADD TASKS TO THE RIGHT LIST */
function addTaskToRightList(title, description, status) {
    const itemList = document.createElement('li'); // Cria um novo elemento li
    itemList.textContent = title + ': ' + description; // Adiciona o texto à tarefa 
    document.getElementById(status).appendChild(itemList); // Adiciona a tarefa à lista correta
}


/* EXIT BUTTON LISTENER  */
btn-RetroNW.addEventListener("click", function() {
    location.href = "index.html";
});

/* EXIT BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "index.html";
});

/* Exit button on South-West BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "index.html";
});
/* Copyright button on South-East BUTTON LISTENER  */
btn-CopySE.addEventListener("click", function() {
    location.href = "copyright.html";
});



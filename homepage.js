/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

let welcomeMsg = 'Welcome ';
let delConfirmMsg = 'Do you really want to delete this task?';

/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKSS */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = welcomeMsg+  storedUsername;
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
    /* <li> list items */
    const itemList = document.createElement('li');
    itemList.setAttribute('data-task-id', task.id); // Creates a new <li> element
    itemList.classList.add('task-item');
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = task.title;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = task.description;

    /* Creating the buttons */
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    const delButton = document.createElement('button');
    delButton.innerHTML = 'del';
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    
    /* Creating the button Listeners */
    createNextBtnListener(nextButton, task);
    createDelBtnListener(delButton, task);
    createPrevBtnListener(prevButton, task);

    /* Append Title and Description to Task */
    itemList.appendChild(itemTitle);
    itemList.appendChild(itemDescription);
    
    /* Append Buttons to Task - with contextual relevance logic */
    if (!(task.status === 'done')) { itemList.appendChild(nextButton); }
    itemList.appendChild(delButton);
    if (!(task.status === 'todo')) { itemList.appendChild(prevButton); }
    
    /* Add Task to correct List */
    document.getElementById(task.status).appendChild(itemList);
}

/* *** Este código tem de ser revisto e estudado. Adiciona o action listner ao elemento evitando os botões */
document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.querySelector('.mainBoard.tasks-container');

    tasksContainer.addEventListener('dblclick', function(event) {
        // Verificar se o clique foi diretamente em um botão
        if (event.target.tagName === 'BUTTON') {
            return; // Não faz nada se um botão foi clicado, permitindo que o evento do botão seja processado
        }

        let targetElement = event.target;

        // Subir na árvore do DOM até encontrar um task-item
        while (targetElement != null && !targetElement.classList.contains('task-item')) {
            targetElement = targetElement.parentElement;
        }

        // Se um task-item foi clicado
        if (targetElement && targetElement.classList.contains('task-item')) {
            const taskId = targetElement.getAttribute('data-task-id');
            window.location.href = `edittask.html?taskId=${taskId}`;
        }
    });
});



function createNextBtnListener(nextButton, task) {
    nextButton.addEventListener('click', function() {
        let nextStatus =""; // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
        if (task.status === 'todo') {
            nextStatus = 'doing';
        } else if (task.status === 'doing') {
            nextStatus = 'done';
        }
        else if (task.status === 'done') {
            nextStatus = 'done';
        }
        moveTask(task, nextStatus);
    });
}


function createDelBtnListener(delButton, task) {
    delButton.addEventListener('click', function() {
        /* delConfirmation */
        if (delConfirmation()) { // boolean confirm
            delTask(task);
        }
    });
}

function delConfirmation(){
    // (alternatives would be: alert ||prompt)
    let result = confirm(delConfirmMsg);
    if (result == false) {
        return false;
    }
    return true;
}

function createPrevBtnListener(nextButton, task) {
    nextButton.addEventListener('click', function() {
        let nextStatus ="";
        if (task.status === 'doing') {
            nextStatus = 'todo';
        } else if (task.status === 'done') {
            nextStatus = 'doing';
        }
        else if (task.status === 'todo') {
            nextStatus = 'todo';
        }
        moveTask(task, nextStatus);
    });
}

function delTask(task) {
    const oldTaskElement = document.querySelector(`[data-task-id="${task.id}"]`);
    if (oldTaskElement) {
        oldTaskElement.remove();
    }

    // *** confirmação de delete
    // Salva a tarefa
    saveTasks();
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
function saveTasks() {
    const tasks = [];
    ['todo', 'doing', 'done'].forEach(status => {
        document.querySelectorAll('#' + status + ' .task-item').forEach(taskElement => {
            const taskTitle = taskElement.querySelector('h3').textContent;
            const taskDescription = taskElement.querySelector('p').textContent;
            const taskId = taskElement.dataset.taskId;
            tasks.push({ 
                id: taskId, 
                title: taskTitle, 
                description: taskDescription, 
                status: status
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



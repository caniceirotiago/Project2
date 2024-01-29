/* JavaScript File - all the code that was written goes here  */
/* Switch to strict mode to get more useful errors, when/if you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKS */
/**************************************************************************************************************************************************************************************/


document.addEventListener('DOMContentLoaded', function() {
    let storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
    ['todo', 'doing', 'done'].forEach(status => { //faz com que as listas recebam itens
        const column = document.getElementById(status);
        column.addEventListener('dragover', function(e) {
            e.preventDefault(); // Permite o drop
        });
    
        column.addEventListener('drop', function(e) {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text/plain');
            // Lógica para mover a tarefa para a coluna atual
            moveTaskToColumn(taskId, status);
        });
    });
    loadTasks();
    saveTasks(); 
    updateTaskCountView();
});
/**************************************************************************************************************************************************************************************/ 
/* function loadTasks - LOAD ALL TASKS */
/**************************************************************************************************************************************************************************************/
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];// vai buscar as tarefas gravadas anteriormente
    tasks.forEach(task => {
        addTaskToRightList(task); // para cada terefa chama ométodo para a adicionar à lista correta
    });
}
/**************************************************************************************************************************************************************************************/ 
/* function addTaskToRightList - ADD TASKS TO THE RIGHT LIST */
/**************************************************************************************************************************************************************************************/
function addTaskToRightList(task) {
    /* <li> list items */
    const itemList = document.createElement('li');
    itemList.setAttribute('data-task-id', task.id); // Creates a new <li> element
    itemList.classList.add('task-item');
    itemList.setAttribute('draggable','true');
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = task.title;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = task.description;
    
    /* Creating the buttons */
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    const delButton = document.createElement('button');
    const delIcon = document.createElement('img');
    delIcon.src = "images/trashCanIcon.png";
    delIcon.alt = 'del';
    delButton.appendChild(delIcon);
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';

    /* Creating the button Listeners */
    createNextBtnListener(nextButton, task);
    createDelBtnListener(delButton, task);
    createPrevBtnListener(prevButton, task);
    createDragDropListener(itemList, task);


    /* Creating div's */
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add("banner");
    bannerDiv.appendChild(itemTitle);
    const contentDiv = document.createElement('div');
    contentDiv.classList.add("content");
    contentDiv.appendChild(itemDescription);

    /* Append Title and Description to Task */
    itemList.appendChild(bannerDiv);
    itemList.appendChild(contentDiv);
    
    /* Append Buttons to Task - with contextual relevance logic */
    if (!(task.status === 'done')) { itemList.appendChild(nextButton); }
    itemList.appendChild(delButton);
    if (!(task.status === 'todo')) { itemList.appendChild(prevButton); }
    
    /* Add Task to correct List */
    document.getElementById(task.status).appendChild(itemList);
    updateTaskCountView();
}


/**************************************************************************************************************************************************************************************/ 
/* ADD ACTION LISTENERS TO DRAG AND DROP - Specifically Drag and drop
/**************************************************************************************************************************************************************************************/
/* *** Este código tem de ser revisto e estudado. Adiciona o action listner ao elemento evitando os botões */

function createDragDropListener(itemList, task){
    itemList.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', task.id);
    });

}

function moveTaskToColumn(taskId, newStatus){
     // Buscar as tarefas do armazenamento local
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
     // Encontrar a tarefa pelo taskId
    let task = tasks.find(t => t.id === taskId);
    if (task) {
         // Atualizar o status da tarefa
        task.status = newStatus;
         // Atualizar as tarefas no armazenamento local
        localStorage.setItem('tasks', JSON.stringify(tasks));
         // Mover a representação visual da tarefa para a coluna correta
        moveTaskElement(task);
    }
}
function moveTaskElement(task) {
    // Remover a tarefa da sua coluna atual
    const existingElement = document.querySelector(`[data-task-id="${task.id}"]`);
    if (existingElement) {
        existingElement.remove();
    }

    // Adicionar a tarefa à nova coluna
    addTaskToRightList(task);
}


/**************************************************************************************************************************************************************************************/ 
/* ADD ACTION LISTENERS TO THE EACH TASK ITEM - Specifically in the buttons
/**************************************************************************************************************************************************************************************/
/* *** Este código tem de ser revisto e estudado. Adiciona o action listner ao elemento evitando os botões */
document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.querySelector('.mainBoard-tasks-container');

    tasksContainer.addEventListener('click', function(event) {
        // Verificar se o clique foi diretamente em um botão
        if (event.target.tagName === 'BUTTON'|| event.target.tagName === 'IMG') {
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
/**************************************************************************************************************************************************************************************/ 
/* function createNextBtnListener - CREATES NEXT BUTTON LISTENER AND HANDLES THE LOGIC RESPONSE - moving to NEXT column and saving/updating the display
/**************************************************************************************************************************************************************************************/
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
/**************************************************************************************************************************************************************************************/ 
/* function createDelBtnListener - CREATES DEL BUTTON LISTENER AND HANDLES THE LOGIC RESPONSE - deleting the task if pressed + confirmed
/**************************************************************************************************************************************************************************************/
function createDelBtnListener(delButton, task) {
    delButton.addEventListener('click', function() {
        if (delConfirmation()) { // boolean confirm
            delTask(task);
        }
    });
}
/**************************************************************************************************************************************************************************************/ 
/* function delConfirmation - Delete confirmation small box appears - boolean logic return value
/**************************************************************************************************************************************************************************************/
function delConfirmation(){
    let delConfirmMsg = 'Are you sure you want to delete this task?';
    // (alternatives would be: alert ||prompt || modal popup (but those are annoying! please never use those))
    let result = confirm(delConfirmMsg);
    if (result == false) {
        return false;
    }
    return true;
}
/**************************************************************************************************************************************************************************************/ 
/* function createPrevBtnListener - CREATES PREV BUTTON LISTENER AND HANDLES THE LOGIC RESPONSE - moving to PREVIOUS column and saving/updating the display
/**************************************************************************************************************************************************************************************/
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
/**************************************************************************************************************************************************************************************/ 
/* function delTask(task) - DELETES A TASK PASSED BY ARGUMENT - deletes task and saves/updatesthe display
/**************************************************************************************************************************************************************************************/
function delTask(task) {
    const oldTaskElement = document.querySelector(`[data-task-id="${task.id}"]`);
    if (oldTaskElement) {
        oldTaskElement.remove();
    }
    saveTasks(); // Saves Tasks, thus also updating the localStorage
    updateTaskCountView();
}
/**************************************************************************************************************************************************************************************/ 
/* function moveTask(task, nextStatus) - 
/**************************************************************************************************************************************************************************************/
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
/**************************************************************************************************************************************************************************************/ 
/* function saveTasks() 
/**************************************************************************************************************************************************************************************/


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

/**************************************************************************************************************************************************************************************/ 
/* CHECK LANGUAGE IS SET ON DOMcl
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
});
/**************************************************************************************************************************************************************************************/ 
/* activeLangFlag() = Toggle of active under the FlagElement */
/**************************************************************************************************************************************************************************************/
function activeLangFlag() {
    // 
    if(localStorage.getItem('language')==='en') {
        document.getElementById("langIndexEN").classList.add("active");
        document.getElementById("langIndexPT").classList.remove("active");
    }
    if(localStorage.getItem('language')==='pt') {
        document.getElementById("langIndexPT").classList.add("active");
        document.getElementById("langIndexEN").classList.remove("active");
    }
};
/**************************************************************************************************************************************************************************************/ 
/* DEFAULT LANGUAGE = ENGLISH */
/**************************************************************************************************************************************************************************************/
function checkLanguage() {
   if (localStorage.getItem('language')===null) { // if it doesn't exist 
       let lang='en'; // set it to English
       localStorage.setItem('language', lang); // save it
        console.log("Default language was null. Default language is now set to: "+lang);
    }
   else { // otherwise...
        changeLanguage(localStorage.getItem('language')); // call function to changeLanguage (and all the elements which of change)
        console.log("Default language was previously set to: "+localStorage.getItem('language')+".");
    }
};
/**************************************************************************************************************************************************************************************/
/* LANGUAGE SETTINGS */
/* Content switching according to */
/**************************************************************************************************************************************************************************************/
let languageContent = {
    "en": {
        "nav-home": "Homepage",
        "nav-retro": "Retrospective",
        "nav-sett": "Settings",
        "nav-copy": "Copyright",
        "nav-exit": "Exit",
        "col-leftMenu-text": "MENU",
        "create-project": "Create Project",
        "select-project": "Select Project",
        "manage-backlog": "Backlog Manager",
        "select-sprint": "Sprint Selector",
        "project-settings": "Project Settings",

        "col-todo-text": "TO DO",
        "add-task-btn": "Add Task",
        "col-doing-text": "DOING",   
        "col-done-text": "DONE",
        "footer": "About",
    },
    "pt": {
        "nav-home": "Início",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "col-leftMenu-text": "MENU",
        "create-project": "Criar projeto",
        "select-project": "Selecionar projeto",
        "manage-backlog": "Gestor de atrasos",
        "select-sprint": "Seletor de Sprint",
        "project-settings": "Definições do projeto",


        "col-todo-text": "PARA FAZER",
        "add-task-btn": "Adicionar Tarefa",
        "col-doing-text": "EM CURSO",
        "col-done-text": "FEITO",
        "footer": "Sobre",
}
};
function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        else {
            document.getElementById(key).innerHTML = languageContent[lang][key];
        }
    }
    activeLangFlag();
};


/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/

/*Contagem de tarefas */

function countTODOTasks(){
    const taskList = document.getElementById("todo");
    let nOfTasks = taskList.childElementCount
    return nOfTasks;
}
function countDOINGTasks(){
    const taskList = document.getElementById("doing");
    let nOfTasks = taskList.childElementCount
    return nOfTasks;
}
function countDONETasks(){
    const taskList = document.getElementById("done");
    let nOfTasks = taskList.childElementCount
    return nOfTasks;
}
function updateTaskCountView(){
    document.getElementById("todo-count").textContent = countTODOTasks();
    document.getElementById("doing-count").textContent = countDOINGTasks();
    document.getElementById("done-count").textContent = countDONETasks();
}
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
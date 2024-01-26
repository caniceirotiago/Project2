/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* TASK SUBMISSION */
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('taskForm'); // obtem o forumulário de criação de uma task!
    form.addEventListener('submit', function(event) { //Adiciona actionListner em caso de submissão
        event.preventDefault(); // previne que o formulário seja enviado da forma default
        var title = document.getElementById('title').value; //obtem o titulo da task
        var description = document.getElementById('description').value; //obtem a descrição da task
        if(title && description) { // se o titulo e a descrição não estiverem vazios    
            addTask(title, description); // adiciona uma task com o titulo e a descrição
            window.location.href = 'homepage.html'; // redireciona para a página principal
        }    
    });
});
/* TASK CREATION */
function addTask(title, description) { // adiciona uma task com o titulo e a descrição
    let task = { // cria um objeto task
        id: getNextTaskId(),
        title: title,
        description: description,
        status : "todo",
    };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // obtem as tasks do localStorage
    tasks.push(task); // adiciona a task ao array de tasks
    localStorage.setItem('tasks', JSON.stringify(tasks)); // guarda as tasks no localStorage
}

function getNextTaskId() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id || 0), 0);
    return maxId + 1;
}


/* SET USERNAME INTO HEADER  */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});
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
/* CHECK LANGUAGE IS SET ON DOMcl
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
});
/**************************************************************************************************************************************************************************************/
 /* LANGUAGE SETTINGS */
 /* Content switching according to */
/**************************************************************************************************************************************************************************************/
let languageContent = {
    "en": {
        "nav-home": "Homepage",
        "nav-add": "Add Task",
        "nav-retro": "Retrospective",
        "nav-sett": "Settings",
        "nav-copy": "Copyright",
        "nav-exit": "Exit",
        "add-task": "Add Task",
        "label-title":"Title",
        "title":"Insert Title",
        "label-description":"Description",
        "description":"Insert Task Description",
        "save-task":"Save Task",
        
        "footer": "About",
    },
    "pt": {
        "nav-home": "Início",
        "nav-add": "Adicionar Tarefa",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "add-task": "Adicionar Tarefa",
        "label-title":"Título",
        "title":"Inserir título",
        "label-description":"Descrição",
        "description":"Inserir descrição da tarefa",
        "save-task":"Salvar Tarefa",


        "footer": "Sobre",
    }
};
function changeLanguage(lang) {
    if (lang) {
         localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContent[lang]) {
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).placeholder === 'Insert Title')
        document.getElementById(key).placeholder = languageContent[lang][key];
        // conditional: extra special case <input> element for the 'Save Task' button
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Save Task')
            document.getElementById(key).value = languageContent[lang][key];
        else
            document.getElementById(key).innerHTML = languageContent[lang][key];
    }
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
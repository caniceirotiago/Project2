/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/*  TASK SUBMISSION */
/**************************************************************************************************************************************************************************************/
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
/**************************************************************************************************************************************************************************************/ 
/* TASK CREATION */
/**************************************************************************************************************************************************************************************/
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
};
/**************************************************************************************************************************************************************************************/ 
/* function getNextTaskId() */
/**************************************************************************************************************************************************************************************/
function getNextTaskId() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id || 0), 0);
    return maxId + 1;
};
/**************************************************************************************************************************************************************************************/ 
/* SET USERNAME INTO HEADER  */
/**************************************************************************************************************************************************************************************/ 
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
/* CHECK LANGUAGE IS SET ON DOMcl && triggers the active flag
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
    checkTheme(); // on load checks which theme dark/light was predefined
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
        "add-task": "Add Task",
        "label-title":"Title",
        "title":"Insert Title",
        "label-description":"Description",
        "description":"Insert Task Description",
        "save-task":"Save Task",
    },
    "pt": {
        "nav-home": "Início",
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
    }
};
/**************************************************************************************************************************************************************************************/ 
/* changeLanguage(lang) = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
function changeLanguage(lang) {
    if (lang) {
         localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).placeholder === 'Insert Title')
        document.getElementById(key).placeholder = languageContent[lang][key];
        // conditional: extra special case <input> element for the 'Save Task' button
        if(document.getElementById(key).tagName.toLowerCase() === 'input')
            document.getElementById(key).value = languageContent[lang][key];
        else
            document.getElementById(key).innerHTML = languageContent[lang][key];
    }
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
};
/**************************************************************************************************************************************************************************************/ 
/* changeTheme(theme) = changes theme from on click and... calls the checkTheme
/**************************************************************************************************************************************************************************************/
function changeTheme(theme) {
    if (theme) {
        // set no local storage.............. gravar lá
        localStorage.setItem('theme', theme); // saves data into localStorage
    }
    checkTheme();
};
/**************************************************************************************************************************************************************************************/ 
/* check(theme) = Toggle according set of colours for ROOT element
/**************************************************************************************************************************************************************************************/
function checkTheme() {
    let theme = localStorage.getItem('theme');

    if (theme==='theme-dark') {
        console.log("now dark");
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
        
    }
    if (theme==='theme-light') {
        console.log("now light");
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
        
    }
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
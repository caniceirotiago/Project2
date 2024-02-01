/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import { setUsername } from "./username.js";
import { loadTheme} from "./theme.js";

/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username, changes theme *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    setUsername(); // set username on loading
    loadTheme(); // loads up the previously set theme
});
/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK PART I - Finds task by ID - EDITTASK.HTML - fetches the Task that was passed through URL, finds it in localStorage JSON, and displays it */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    if (taskId) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToEdit = tasks.find(task => task.id === taskId);

        if (taskToEdit) {
            // Aqui  pode preencher os campos de edição com os dados da tarefa
            document.getElementById('title').value = taskToEdit.title;
            document.getElementById('description').value = taskToEdit.description;
            // ... outros campos conforme necessário
        }
    }
});
/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK PART II - Interactivity - EDITTASK.HTML - adds the EDIT button and it's responsiveness, on 'click' it enables editing */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.getElementById('edit-btn');
    const inputs = document.querySelectorAll('#taskForm input, #taskForm textarea');

    editButton.addEventListener('click', function() {
        inputs.forEach(function(input) {
            input.disabled = false;
        });
        this.disabled = true; // Opcional: desabilita o botão Edit após o clique
    });
});
/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK  PART III - Save Changes  - EDITTASK.HTML - saves the task and returns to homepage */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário ...
        saveTask();
        window.location.href = 'homepage.html';
    });
});
/**************************************************************************************************************************************************************************************/ 
/* function saveTask() - saves the task into local storage ::: finds previous occurence, replaces it and resaves */
/**************************************************************************************************************************************************************************************/
function saveTask() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    if (taskId) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToEdit = tasks.find(task => task.id === taskId);

        if (taskToEdit) {
            // Aqui você pode preencher os campos de edição com os dados da tarefa
            taskToEdit.title = document.getElementById('title').value;
            taskToEdit.description = document.getElementById('description').value;
            // ... outros campos conforme necessário
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
};
/**************************************************************************************************************************************************************************************/ 
/* function checkLanguage() - CHECKS PREVIOUSLY SET LANGUAGE OR DEFAULTS TO LANGUAGE = ENGLISH */
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
/* CHECK LANGUAGE, activeLangFlag IS SET ON DOMcl - on document/page loading checks the language that was set, the language flag that needs to be underlined 
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
});
/**************************************************************************************************************************************************************************************/ 
/* activeLangFlag() = Toggle of active under the FlagElement */
/**************************************************************************************************************************************************************************************/
function activeLangFlag() {
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
        "edit-btn":"Edit",
        "label-title":"Title",
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
        "edit-btn":"Editar",
        "label-title":"Título",
        "label-description":"Descrição",
        "description":"Inserir descrição da tarefa",
        "save-task":"Salvar Tarefa",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* changeLanguage() = parses elements and translates them into appropriate lang + toggles the activeFlag underlined
/**************************************************************************************************************************************************************************************/
function changeLanguage(lang) {
    if (lang) {
         localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        // conditional: extra special case <input> element for the 'Save Task' button
        if(document.getElementById(key).tagName.toLowerCase() === 'input')
            document.getElementById(key).value = languageContent[lang][key];
        else
            document.getElementById(key).innerHTML = languageContent[lang][key];
    }
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/










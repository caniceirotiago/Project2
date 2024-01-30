/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKSS */
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
/* CHECK LANGUAGE IS SET ON DOMcl
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
    "copyright":"In here we place some general corporate info...",
    "adressTitle":"Address:",
    "phoneNumberTitle":"Phone Number:",
    "footer": "About",
    },
    "pt": {
    "nav-home": "Início",
    "nav-retro": "Retrospetiva",
    "nav-sett": "Definições",
    "nav-copy": "Direitos de autor",
    "nav-exit": "Sair",
    "copyright":"Aqui colocamos algumas informações gerais sobre a empresa...",
    "adressTitle":"Morada:",
    "phoneNumberTitle":"Número de telefone:",
    "footer": "Sobre",
    }
};
function changeLanguage(lang) {
    if (lang) {
         localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContent[lang]) {
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
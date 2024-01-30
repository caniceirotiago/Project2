/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';


/* TASK SUBMISSION*/
document.addEventListener('DOMContentLoaded', function() {
     var form = document.getElementById('retrospectiveForm'); // obtem o forumulário de criação de uma task!
     form.addEventListener('submit', function(event) { //Adiciona actionListner em caso de submissão
         event.preventDefault(); // previne que o formulário seja enviado da forma default
         var date = document.getElementById('date').value; //obtem o titulo da task
         var presentMembers = document.getElementById('pres-TA-retro').value; //obtem a descrição da task
         var comments= document.getElementById('comment-retro').value; //obtem a descrição da task
         if(date && presentMembers && comments) { // se o titulo e a descrição não estiverem vazios    
            addRetrospective(date, presentMembers, comments); // adiciona uma task com o titulo e a descrição
            clearRetrospectivesList();
            loadRetrospectives();
        }    
    });
});
/* Retrospective CREATION*/
 function addRetrospective(date, presentMembers, comments) { // adiciona uma task com o titulo e a descrição
     let retrospective = { // cria um objeto task
        id: getNextRetrospectiveId(),
        date: date,
        presentMembers: presentMembers,
        comments : comments,
    };
     let retrospectives = JSON.parse(localStorage.getItem('retrospectives')) || []; // obtem as tasks do localStorage
     retrospectives.push(retrospective); // adiciona a task ao array de tasks
     localStorage.setItem('retrospectives', JSON.stringify(retrospectives)); // guarda as tasks no localStorage
}
function getNextRetrospectiveId() {
    const retrospectives = JSON.parse(localStorage.getItem('retrospectives')) || [];
    const maxId = retrospectives.reduce((max, retrospective) => Math.max(max, retrospective.id || 0), 0);
    return maxId + 1;
}
/**************************************************************************************************************************************************************************************/ 
/* function loadTasks - LOAD ALL TASKS */
/**************************************************************************************************************************************************************************************/
function loadRetrospectives() {
    const retrospectives = JSON.parse(localStorage.getItem('retrospectives')) || [];// vai buscar as tarefas gravadas anteriormente
    retrospectives.forEach(retrospective => {
        addRetrospectiveToList(retrospective); // para cada terefa chama ométodo para a adicionar à lista correta
    });
}
/**************************************************************************************************************************************************************************************/ 
/* function addTaskToRightList - ADD TASKS TO THE RIGHT LIST */
/**************************************************************************************************************************************************************************************/
function addRetrospectiveToList(retrospective) {
    /* <li> list items */
    const itemList = document.createElement('li');
    itemList.setAttribute('retrospective-id', retrospective.id); // Creates a new <li> element
    itemList.classList.add('retrospective-item');
    const itemDate = document.createElement('h3');
    itemDate.textContent = retrospective.date;
    const presentMembers = document.createElement('p');
    presentMembers.textContent = retrospective.presentMembers;
    const comments = document.createElement('p');
    comments.textContent = retrospective.comments;
    

    /* Append Title and Description to Task */
    itemList.appendChild(itemDate);
    itemList.appendChild(presentMembers);
    itemList.appendChild(comments);
    console.log("taqui");
    
    /* Add Task to correct List */
    document.getElementById("historic-retrospectives-list").appendChild(itemList);
}
function clearRetrospectivesList() {
    const list = document.getElementById("historic-retrospectives-list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

 /* SET USERNAME INTO HEADER  */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
    loadRetrospectives();
});
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
        "hist-retro":"Historic Retrospectives",
        "add-retro":"Add Retrospective",
        "label-date-retro":"Date",
        "label-pres-retro":"Present Members",
        "pres-TA-retro":"Insert Present Members",
        "label-comment-retro":"Comments",
        "comment-retro":"Insert positive aspects, challenges or suggestions for improvement",
        "input-save-retro":"Save Retrospective",
    },
    "pt": {
        "nav-home": "Início",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "hist-retro":"Retrospectivas históricas",
        "add-retro":"Adicionar Retrospetiva",
        "label-date-retro":"Data",
        "label-pres-retro":"Membros presentes",
        "pres-TA-retro":"Inserir membros presentes",
        "label-comment-retro":"Comentários",
        "comment-retro":"Inserir aspectos positivos, desafios ou sugestões de melhoria",
        "input-save-retro":"Guardar Retrospetiva",
    }
};
function changeLanguage(lang) {
    if (lang) {
        localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContent[lang]) {
        // conditional: extra special case <input> element for the 'Save Retrospective' button
        if (document.getElementById(key) === null) {
            continue;
        }
        if (document.getElementById(key).tagName.toLowerCase() === 'input') {
            document.getElementById(key).value = languageContent[lang][key];
        }
        else {
        document.getElementById(key).innerHTML = languageContent[lang][key];
    }
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
    }
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
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
         var presentMembers = document.getElementById('present-members').value; //obtem a descrição da task
         var comments= document.getElementById('comments').value; //obtem a descrição da task
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

 /* BACK BUTTON LISTENER  */
btn-BackSE.addEventListener("click", function() {
location.href = "homepage.html";

});

 /* DEL BUTTON LISTENER  */
btn-DelSE.addEventListener("click", function() {
    location.href = "homepage.html";
});

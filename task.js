/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';


/* TASK SUBMISSION*/
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
/* TASK CREATION*/
function addTask(title, description) { // adiciona uma task com o titulo e a descrição
            var task = { // cria um objeto task
                title: title,
                description: description,
                status : "todo",
            };
            var tasks = JSON.parse(localStorage.getItem('tasks')) || []; // obtem as tasks do localStorage
            tasks.push(task); // adiciona a task ao array de tasks
            localStorage.setItem('tasks', JSON.stringify(tasks)); // guarda as tasks no localStorage
        }
/* SET USERNAME INTO HEADER  */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});





























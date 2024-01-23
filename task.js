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
        localStorage.setItem('title', title); // gravar no localStorage o titulo
        localStorage.setItem('description', description); // gravar no localStorage a descrição
        form.submit(); // faz o submit do formulario (ativa a ação do form)
        /* falta aqui o código/metodo de tratamento e criacao de uma task, no TODO:default*/
        document.
    });
});




/* SET USERNAME INTO HEADER  */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});





























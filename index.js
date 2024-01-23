/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';


document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm'); // obtem o forumulário do login
    form.addEventListener('submit', function(event) { //Adiciona actionListner em caso de submit
        event.preventDefault(); // previne que o formulário seja enviado da forma defoult
        var username = document.getElementById('username').value; //obtem o username do campo correspondente
        localStorage.setItem('username', username); // gravar no localStorage
        form.submit(); // faz o submit do formulario (ativa a ação do form)
    });
});






























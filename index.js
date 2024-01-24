/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';


document.addEventListener('DOMContentLoaded', function() {
    // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
    // index.html // <form id="loginForm" action="homepage.html">
    let form = document.getElementById('loginForm'); // obtains the loginForm

    // adds an EventListener to the form, on submission, triggers the function that follows
    form.addEventListener('submit', function(event) { 
        var username = document.getElementById('username').value; //obtem o username do campo correspondente
        if (username === "") {
            event.preventDefault(); // prevents that the form be set/submitted without any fields filled out (just username for now)
        }
        else {
            localStorage.setItem('username', username); // gravar no localStorage
            form.submit(); // faz o submit do formulario (ativa a ação do form)
        }
    });
});






























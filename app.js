/* JavaScript File - all the code in the world  */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o envio padrão
        var username = document.getElementById('username').value;
        localStorage.setItem('username', username); // Salvar no localStorage
        form.submit(); // Enviar o formulário
    });
});






























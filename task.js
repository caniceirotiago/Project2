/* JavaScript File - all the code in the world  */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('taskForm'); // obtem o forumulário de criação de uma task!
    form.addEventListener('submit', function(event) { //Adiciona actionListner em caso de submissão
        event.preventDefault(); // previne que o formulário seja enviado da forma default
        var title = document.getElementById('title').value; //obtem o titulo da task
        var description = document.getElementById('description').value; //obtem a descrição da task
        localStorage.setItem('title', title); // gravar no localStorage o titulo
        localStorage.setItem('description', description); // gravar no localStorage a descrição
        form.submit(); // faz o submit do formulario (ativa a ação do form)
    });
});






























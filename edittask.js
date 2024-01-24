/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    if (taskId) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToEdit = tasks.find(task => task.id === taskId);

        if (taskToEdit) {
            // Aqui você pode preencher os campos de edição com os dados da tarefa
            document.getElementById('title').value = taskToEdit.title;
            document.getElementById('description').value = taskToEdit.description;
            // ... outros campos conforme necessário
        }
    }
});

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

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        saveTask();
        window.location.href = 'homepage.html';
    });
});

// Função para salvar a tarefa editada
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
}























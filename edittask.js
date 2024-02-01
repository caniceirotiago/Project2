/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import * as language from "./language.js";
import * as username from "./username.js";
import * as theme from "./theme.js";



language.listenerLanguageBtns(); // adds listener to the language buttons
/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username, changes theme *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    username.setUsername(); // set username on loading
    theme.loadTheme(); // loads up the previously set theme
    language.underlineLangFlag();
    loadTaskId();
    editButtonActionListner();
    submitActionListnerCreation();
});
/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK PART I - Finds task by ID - EDITTASK.HTML - fetches the Task that was passed through URL, finds it in localStorage JSON, and displays it */
/**************************************************************************************************************************************************************************************/
function loadTaskId(){
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');

    if (taskId) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToEdit = tasks.find(task => task.id === taskId);

        if (taskToEdit) {
            // Aqui  pode preencher os campos de edição com os dados da tarefa
            document.getElementById('title').value = taskToEdit.title;
            document.getElementById('description').value = taskToEdit.description;
            // ... outros campos conforme necessário
        }
    }
};
/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK PART II - Interactivity - EDITTASK.HTML - adds the EDIT button and it's responsiveness, on 'click' it enables editing */
/**************************************************************************************************************************************************************************************/
function editButtonActionListner(){
    const editButton = document.getElementById('edit-btn');
    const inputs = document.querySelectorAll('#taskForm-viewer-edition input, #taskForm-viewer-edition textarea');

    editButton.addEventListener('click', function() {
        inputs.forEach(function(input) {
            input.disabled = false;
        });
        this.disabled = true; // Opcional: desabilita o botão Edit após o clique
    });
}

/**************************************************************************************************************************************************************************************/ 
/* DISPLAY TASK  PART III - Save Changes  - EDITTASK.HTML - saves the task and returns to homepage */
/**************************************************************************************************************************************************************************************/
function submitActionListnerCreation(){
    const taskForm = document.getElementById('taskForm-viewer-edition');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário ...
        saveTask();
        const inputs = document.querySelectorAll('#taskForm-viewer-edition input, #taskForm-viewer-edition textarea');
        inputs.forEach(function(input) {
            input.disabled = true;
        });
        const editButton = document.getElementById('edit-btn');
        editButton.disabled = false;
    });
}
/**************************************************************************************************************************************************************************************/ 
/* function saveTask() - saves the task into local storage ::: finds previous occurence, replaces it and resaves */
/**************************************************************************************************************************************************************************************/
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
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/










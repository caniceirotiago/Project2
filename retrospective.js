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
     localStorage.setItem('retrospectives', JSON.stringify(retrospective)); // guarda as tasks no localStorage
 }
 
 function getNextRetrospectiveId() {
     const retrospectives = JSON.parse(localStorage.getItem('retrospectives')) || [];
     const maxId = retrospectives.reduce((max, retrospective) => Math.max(max, retrospective.id || 0), 0);
     return maxId + 1;
 }
 
 
 /* SET USERNAME INTO HEADER  */
 document.addEventListener('DOMContentLoaded', function() {
     var storedUsername = localStorage.getItem('username');
     if (storedUsername) {
         document.getElementById('usernameDisplay').textContent = storedUsername;
     }
 });
 
 /* BACK BUTTON LISTENER  */
 btn-BackSE.addEventListener("click", function() {
     location.href = "homepage.html";
 });
 
 /* DEL BUTTON LISTENER  */
 btn-DelSE.addEventListener("click", function() {
     
     location.href = "homepage.html";
 });
 
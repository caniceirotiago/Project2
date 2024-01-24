/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* SET USERNAME INTO HEADER AND LOAD UPDATED TASKSS */
document.addEventListener('DOMContentLoaded', function() {
    let welcomeMsg = 'Welcome ';
    let storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = welcomeMsg+  storedUsername;
    }
});

let themeBtns = document.getElementsByClassName('btn-theme');

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', function() {
        console.log('pressed' +themeBtns[i].textContent);
    })
} 



/* THEME changing code--- reverted */
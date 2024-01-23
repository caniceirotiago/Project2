/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* SET USERNAME INTO HEADER  */
document.addEventListener('DOMContentLoaded', function() {
    var storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});




/* EXIT BUTTON LISTENER  */
btn-RetroNW.addEventListener("click", function() {
    location.href = "index.html";
});

/* EXIT BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "index.html";
});

/* Exit button on South-West BUTTON LISTENER  */
btn-ExitSW.addEventListener("click", function() {
    location.href = "index.html";
});
/* Copyright button on South-East BUTTON LISTENER  */
btn-CopySE.addEventListener("click", function() {
    location.href = "copyright.html";
});



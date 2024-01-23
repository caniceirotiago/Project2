/* Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/5-javascript-basics
*/
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/* Variable switcher  now references the button
through a CSS selector function */
const switcher = document.querySelector('.btn');

/* Linking the switcher to an EventListener*/
switcher.addEventListener('click',function() {
    /* Logic for swapping to the currently non used theme*/
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    /* Conditional swapping of the Button's inner Text */
    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    /* message display on console: 
    className = document.body.className; being that
    <body class="light-theme"> */
    console.log('current class name: ' + className);
});










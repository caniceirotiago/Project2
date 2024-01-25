/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* DEFAULT LANGUAGE = ENGLISH */
/**************************************************************************************************************************************************************************************/
function checkLanguage() {
    if (localStorage.getItem('language')===null) { // if it doesn't exist 
        let lang='en'; // set it to English
        localStorage.setItem('language', lang); // save it
        console.log("Default language was null. Default language is now set to: "+lang);
    }
    else { // otherwise...
        changeLanguage(localStorage.getItem('language')); // call function to changeLanguage (and all the elements which of change)
        console.log("Default language was previously set to: "+localStorage.getItem('language')+".");
    }
};
/**************************************************************************************************************************************************************************************/ 
/* PAGE UPDATE TO REFLECT LANGUAGE SETTINGS
/**************************************************************************************************************************************************************************************/
let languageContent = {
    "en": {
        "username-label": "Username",
        "username": "Enter your username",
        "errorLogin": "Mandatory field",
        "password-label":"Password",
        "password":"Enter your password",
        "login": "Login",
        "footer": "About",
    },
    "pt": {
        "username-label": "Nome de utilizador",
        "username": "Insira nome de utilizador",
        "errorLogin": "Campo obrigatório",
        "password-label":"Palavra-passe",
        "password":"Insira a sua palavra-passe",
        "login": "Entrar",
        "footer": "Sobre",
    }
};
function changeLanguage(lang) {
     if (lang) {
         // set no local storage.............. gravar lá
         localStorage.setItem('language', lang); // saves data into localStorage
         console.log("The language has been set to "+lang+".");
     }

    for (let key in languageContent[lang]) { // all the normal ones
        if (document.getElementById(key).tagName.toLowerCase() === 'input') {
            console.log(key+' element is an input, changing placeholder text.');
            document.getElementById(key).placeholder = languageContent[lang][key];
        } if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Login') {
            document.getElementById(key).value = languageContent[lang][key];
        }
         else {
            document.getElementById(key).textContent = languageContent[lang][key];
          }  
    }
 }; 


/**************************************************************************************************************************************************************************************/ 
/* FORM FOR LOGIN */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage();
    // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
    // index.html // <form id="loginForm" action="homepage.html">
    let form = document.getElementById('loginForm'); // obtains the loginForm

    // adds an EventListener to the form, on click, triggers the function that follows
    form.addEventListener('submit', function(event) { 
        const errorElement = document.getElementById('errorLogin');
        let errorMsg = 'Mandatory field';
        if (localStorage.getItem('language')==='pt') {
            errorMsg='Campo obrigatório';
        }
        
        let username = document.getElementById('username').value; //obtem o username do campo correspondente

        if (username === "" || username === null) {
            event.preventDefault(); // prevents that the form be set/submitted without any fields filled out (just username for now)
            errorElement.innerText = errorMsg;
        }
        else {
            localStorage.setItem('username', username); // saves data into localStorage
            console.log("The user "+username+" has been added.");
            // so the username variable in localStorage, will contain the username data that we just retrieved
            // to view it do: right click, inspect, application tab, Storage -> local storage
            //form.submit(); // submits the form, thus activating the html bit that states // action="homepage.html"
        }

    });
});

/*
function validateUsername() {
    ; // insert code here to check for 6 letters min and alphanumeroc    
}
*/































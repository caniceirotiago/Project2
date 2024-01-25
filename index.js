/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* DEFAULT LANGUAGE = ENGLISH */
/**************************************************************************************************************************************************************************************/
function checkLanguage() {
    let language = localStorage.getItem('language');
    if (language===null) { // if it doesn't exist 
        let lang='en'; // defaults to English
        localStorage.setItem('language', lang); // save it
        console.log("Default language was null. Default language is now set to: "+lang);
    }
    else { // otherwise...
        changeLanguage(localStorage.getItem('language')); // call function to changeLanguage (and all the elements which of change)
        console.log("Default language was previously set to: "+localStorage.getItem('language')+".");
    }
    underlineLangFlag();
};
/**************************************************************************************************************************************************************************************/ 
/* underlineLangFlag() = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
function underlineLangFlag() {
    // 
    if(localStorage.getItem('language')==='en') {
        document.getElementById("langIndexEN").classList.add("underline");
        document.getElementById("langIndexPT").classList.remove("underline");
    }
    if(localStorage.getItem('language')==='pt') {
        document.getElementById("langIndexPT").classList.add("underline");
        document.getElementById("langIndexEN").classList.remove("underline");
    }
}
/**************************************************************************************************************************************************************************************/ 
/* PAGE UPDATE TO REFLECT LANGUAGE SETTINGS ACCORDING TO languageContet[en/pt] applying the correspondence between pair {key : string}
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
        "username": "Insira o nome de utilizador",
        "errorLogin": "Campo obrigatório",
        "password-label":"Palavra-passe",
        "password":"Insira a palavra-passe",
        "login": "Entrar",
        "footer": "Sobre",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* FUNCTION changeLanguage(lang) - applies to each element {key : string} the corresponding language from the languageContet[en/pt] above */
/**************************************************************************************************************************************************************************************/
function changeLanguage(lang) {
     if (lang) {
         // set no local storage.............. gravar lá
         localStorage.setItem('language', lang); // saves data into localStorage
     }
    for (let key in languageContent[lang]) { // all the normal ones
        let username = document.getElementById('username').value; //obtem o username do campo correspondente
        // conditional: special case <input> elements
        if (key==='errorLogin' && username === "" || username === null)
            continue;
        if (document.getElementById(key).tagName.toLowerCase() === 'input')
            document.getElementById(key).placeholder = languageContent[lang][key];
        // conditional: extra special case <input> element for the Login button
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Login')
            document.getElementById(key).value = languageContent[lang][key];
        // default : all the remaining elements
        else
            document.getElementById(key).textContent = languageContent[lang][key];
    }

    underlineLangFlag();
}; 
/**************************************************************************************************************************************************************************************/ 
/* FORM FOR LOGIN */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
    // index.html // <form id="loginForm" action="homepage.html">
    let form = document.getElementById('loginForm'); // obtains the loginForm

    // adds an EventListener to the form, on click, triggers the function that follows
    form.addEventListener('submit', function(event) { 
        let username = document.getElementById('username').value; // obtains username inserted text
        let errorElement = document.getElementById('errorLogin'); // obtains the error element for later message insertion
        let errorMsg = 'Mandatory field';

        if (localStorage.getItem('language')==='pt')
            errorMsg='Campo obrigatório';    
        if (username === "" || username === null) {
            event.preventDefault(); // prevents that the form be set/submitted without any fields filled out (just username for now)
            errorElement.innerText = errorMsg; // sets the error message
        } else {
            localStorage.setItem('username', username); // saves data into localStorage
            console.log("The user "+username+" has been added.");
            errorElement.innerText=""; // clear the error message 
        }
    });
});
/**************************************************************************************************************************************************************************************/ 
/* FUNCTION validateUsername() - checks if the username has min 6 length && is alphanumeric (only a-z, A-Z, 0-9 allowed)
/**************************************************************************************************************************************************************************************/
/* to implement later
function validateUsername() {
    ; // insert code here to check for 6 letters min and alphanumeroc    
}
*/































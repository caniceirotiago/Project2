/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import { setUsername } from "./username.js";
import { listenerThemeBtns,loadTheme} from "./theme.js";

/**************************************************************************************************************************************************************************************/ 
/* adds listener to theme buttons */
/**************************************************************************************************************************************************************************************/ 
listenerThemeBtns(); // adds listener to the theme buttons
/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username, changes theme *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    setUsername(); // set username on loading
    loadTheme(); // loads up the previously set theme
});
/**************************************************************************************************************************************************************************************/ 
/* CHECK LANGUAGE IS SET ON DOMcl
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {

    const langPT = document.getElementById('langIndexPT');
    const langEN = document.getElementById('langIndexEN');

    if (langPT) {
        langPT.addEventListener('click', () => changeLanguage('pt'));
    }

    if (langEN) {
        langEN.addEventListener('click', () => changeLanguage('en'));
    }
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
});
/**************************************************************************************************************************************************************************************/ 
/* activeLangFlag() = Toggle of active under the FlagElement */
/**************************************************************************************************************************************************************************************/
function activeLangFlag() {
    // 
    if(localStorage.getItem('language')==='en') {
        document.getElementById("langIndexEN").classList.add("active");
        document.getElementById("langIndexPT").classList.remove("active");
    }
    if(localStorage.getItem('language')==='pt') {
        document.getElementById("langIndexPT").classList.add("active");
        document.getElementById("langIndexEN").classList.remove("active");
    }
};
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
/* underlineLangFlag() = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
function underlineLangFlag() {
    // 
    if(localStorage.getItem('language')==='en') {
        document.getElementById("langEN").classList.add("underline"); // *** mudar para selected em vez de underline
        document.getElementById("langPT").classList.remove("underline");
    }
    if(localStorage.getItem('language')==='pt') {
        document.getElementById("langPT").classList.add("underline");
        document.getElementById("langEN").classList.remove("underline");
    }
};
/**************************************************************************************************************************************************************************************/
/* LANGUAGE SETTINGS */
/* Content switching according to */
/**************************************************************************************************************************************************************************************/
let languageContent = {
    "en": {
        "nav-home": "Homepage",
        "nav-retro": "Retrospective",
        "nav-sett": "Settings",
        "nav-copy": "Copyright",
        "nav-exit": "Exit",
        "theme":"Theme",
        "dark-theme": "Dark",
        "light-theme": "Light",
    },
    "pt": {
        "nav-home": "Início",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "theme":"Tema",
        "dark-theme": "Escuro",
        "light-theme": "Claro",
        "lang":"Língua",
        "langEN": "Inglês",
        "langPT": "Português",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* changeLanguage(lang) = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        else {
            document.getElementById(key).innerHTML = languageContent[lang][key];
        }
    }
    activeLangFlag();
};


/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
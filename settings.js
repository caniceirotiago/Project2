/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* DISPLAY USERNAME INTO HEADER */
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    let storedUsername = localStorage.getItem('username'); //
    if (storedUsername) {
        document.getElementById('usernameDisplay').textContent = storedUsername;
    }
});
/**************************************************************************************************************************************************************************************/ 
/* CHECK LANGUAGE IS SET ON DOMcl
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
    checkTheme(); // on load checks which theme dark/light was predefined
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
/* changeTheme(theme) = changes theme from on click and... calls the checkTheme
/**************************************************************************************************************************************************************************************/
function changeTheme(theme) {
    if (theme) {
        // set no local storage.............. gravar lá
        localStorage.setItem('theme', theme); // saves data into localStorage
    }
    checkTheme();
};
/**************************************************************************************************************************************************************************************/ 
/* check(theme) = Toggle according set of colours for ROOT element
/**************************************************************************************************************************************************************************************/
function checkTheme() {
    let theme = localStorage.getItem('theme');
    let darkBtn = document.getElementById('dark-theme');
    let lightBtn = document.getElementById('light-theme');

    if (theme==='theme-dark') {
        console.log("now dark");
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
        darkBtn.classList.add('active');
        lightBtn.classList.remove('active');
    }
    if (theme==='theme-light') {
        console.log("now light");
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
        lightBtn.classList.add('active');
        darkBtn.classList.remove('active');
    }
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
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
        "white-theme": "White",
        "footer": "About",
    },
    "pt": {
        "nav-home": "Início",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "theme":"Tema",
        "dark-theme": "Escuro",
        "white-theme": "Claro",
        "lang":"Língua",
        "langEN": "Inglês",
        "langPT": "Português",
        "footer": "Sobre",
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
/* changeTheme(thme) = Toggle of colour set
/**************************************************************************************************************************************************************************************/
function changeTheme(theme) {
    if (theme) {
        // set no local storage.............. gravar lá
        localStorage.setItem('theme', theme); // saves data into localStorage
    }
    if(theme='dark') {
        document.documentElement.style.setProperty('--primary-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--secondary-color', 'rgba(224, 224, 224, 0.2)');
        document.documentElement.style.setProperty('--tertiary-color', 'rgba(91, 91, 91, 0.2)');
        document.documentElement.style.setProperty('--quaternary-color', 'rgba(0, 5, 5, 0.3)');
        document.documentElement.style.setProperty('--quinary-color', 'rgb(0, 0, 0, 1)');
        document.documentElement.style.setProperty('--todo-color', 'rgba(255, 119, 0, 0.756)');
        document.documentElement.style.setProperty('--doing-color', 'rgba(158, 155, 0, 0.655)');
        document.documentElement.style.setProperty('--done-color', 'rgba(86, 153, 117, 0.66)');
        document.documentElement.style.setProperty('--header-color', 'rgba(154, 156, 161, 0.9)');
        document.documentElement.style.setProperty('--background-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255, 1)');
        document.documentElement.style.setProperty('--text-color2', 'rgb(0, 0, 0, 1)');
    }
    if(theme='light') { // default = light
        document.documentElement.style.setProperty('--primary-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--secondary-color', 'rgba(31, 34, 38, 0.2)');
        document.documentElement.style.setProperty('--tertiary-color', 'rgba(164, 164, 169, 0.2)');
        document.documentElement.style.setProperty('--quaternary-color', 'rgba(255, 250, 250, 0.3)');
        document.documentElement.style.setProperty('--quinary-color', 'rgb(255, 255, 255, 1)');
        document.documentElement.style.setProperty('--todo-color', 'rgba(0, 136, 255, 0.756)');
        document.documentElement.style.setProperty('--doing-color', 'rgba(239, 235, 100, 0.655)');
        document.documentElement.style.setProperty('--done-color', 'rgba(117, 211, 86, 0.66)');
        document.documentElement.style.setProperty('--header-color', 'rgba(101, 103, 108, 0.9)');
        document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0, 1)');
        document.documentElement.style.setProperty('--text-color2', 'rgb(255, 255, 255, 1)');
    }
};


/*
:root {
    --primary-color: rgb(255, 255, 255);
    --secondary-color: rgba(31, 34, 38, 0.2);
    --tertiary-color: rgba(164, 164, 169, 0.2);
    --quaternary-color: rgba(255, 250, 250, 0.3);
    --quinary-color: rgb(255,255,255,1);
    --todo-color:rgba(0, 136, 255, 0.756);
    --doing-color:rgba(239, 235, 100, 0.655);
    --done-color:rgba(117, 211, 86, 0.66);
    --header-color:rgba(101, 103, 108, 0.9);
    --background-color: rgb(255, 255, 255);
    --text-color:  rgb(0,0,0,1);
    --text-color2:  rgb(255,255,255,1);
}
*/

/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
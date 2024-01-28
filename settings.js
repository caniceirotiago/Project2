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
});
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
   underlineLangFlag();
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
     "lang":"Language",
      "langEN": "English",
      "langPT": "Portuguese",
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
function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

   for (let key in languageContent[lang]) {
      document.getElementById(key).innerHTML = languageContent[lang][key];
   }
   underlineLangFlag();
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
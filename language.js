/**************************************************************************************************************************************************************************************/ 
/* listenerLanguageBtns() -   */
/**************************************************************************************************************************************************************************************/ 
export function listenerLanguageBtns(){
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
    underlineLangFlag();
};
/**************************************************************************************************************************************************************************************/ 
/* activeLangFlag() = Toggle of active under the FlagElement */
/**************************************************************************************************************************************************************************************/
export function activeLangFlag() {
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
export function checkLanguage() {
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
export function underlineLangFlag() {
    // 
    if(localStorage.getItem('language')==='en') {
        document.getElementById("langIndexEN").classList.add("underline");
        document.getElementById("langIndexPT").classList.remove("underline");
    }
    if(localStorage.getItem('language')==='pt') {
        document.getElementById("langIndexPT").classList.add("underline");
        document.getElementById("langIndexEN").classList.remove("underline");
    }
};
/**************************************************************************************************************************************************************************************/
/* LANGUAGE SETTINGS */
/* Content switching according to */
/**************************************************************************************************************************************************************************************/
export let languageContent = {
    "en": {
        "nav-home": "Homepage",
        "nav-retro": "Retrospective",
        "nav-sett": "Settings",
        "nav-copy": "Copyright",
        "nav-exit": "Exit",
        "theme":"Theme",
        "dark-theme": "Dark",
        "light-theme": "Light",
        "edit-btn":"Edit",
        "add-task":"Edit Task",
        "label-title":"Title",
        "label-description":"Description",
        "description":"Insert Task Description",
        "save-task":"Save Task",
        "cancel-edit":"Back",
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
        "edit-btn":"Editar",
        "add-task":"Editar Tarefa",
        "label-title":"Título",
        "label-description":"Descrição",
        "description":"Inserir descrição da tarefa",
        "save-task":"Salvar Tarefa",
        "cancel-edit":"Retroceder",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* changeLanguage(lang) = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
export function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        if(isInputSaveTaskAnyLang(key)) {
            document.getElementById(key).value = languageContent[lang][key];
        }
        else {
            document.getElementById(key).innerHTML = languageContent[lang][key];
        }
    }
    activeLangFlag();
};

/**************************************************************************************************************************************************************************************/ 
/* function isInputSaveTaskAnyLang(key) - very specific case for input element in edittask.html
/**************************************************************************************************************************************************************************************/
export function isInputSaveTaskAnyLang(key){
    if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Save Task')
        return true;
    if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Salvar Tarefa')
            return true;
    return false;
};


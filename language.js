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
/* changeLanguage(lang) = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/
export function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

    for (let key in languageContent[lang]) {
        console.log(" key: "+key);
        if (document.getElementById(key) === null) {
            continue;
        }
        if(isInputSaveTaskAnyLang(key)) { // very specific case of edittask.html and task.html <input
            document.getElementById(key).value = languageContent[lang][key];
        }
        if (document.getElementById(key).tagName.toLowerCase() === 'input') {

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

/**************************************************************************************************************************************************************************************/
/* LANGUAGE SETTINGS */
/* Content switching according to */
/**************************************************************************************************************************************************************************************/
export let languageContent = {
    "en": {
        // index.html
        "member-login-banner":"Member Login",
        "username-label": "Username",
        "username": "Enter your username",
        "password-label":"Password",
        "password":"Enter your password",
        "login": "Login",
        "contact":"Contact information's:",
        "infosContact":"You can reach us at our headquarters during workdays from 09:30 to 17:30",
        "adressTitle":"Address",
        "phoneNumberTitle":"Phone Number:",
        "text-about1":"As a proficient practitioner of Agile and Scrum methodologies, I bring extensive experience and a deep understanding of these approaches to software development and project management. My expertise encompasses a thorough knowledge of the Agile Manifesto, its principles, and practical applications in various project scenarios. I have a strong background in implementing Agile practices like pair programming, continuous integration, and test-driven development, with a focus on facilitating a rapid and flexible response to change through iterative development.",
        "text-about2":"In the realm of Scrum, I have demonstrated expertise in understanding and applying the framework's roles, events, and artifacts. My experience as a Scrum Master has seen me guide teams in Scrum practices, adeptly removing impediments and fostering an environment conducive to high-performing team dynamics. Additionally, my role as a Product Owner involved effective management of the product backlog, task prioritization, and stakeholder engagement to ensure that projects align with business objectives.",
        // pretty much "all"
        "nav-home": "Homepage",
        "nav-retro": "Retrospective",
        "nav-sett": "Settings",
        "nav-copy": "Copyright",
        "nav-exit": "Logout",
        "theme":"Theme",
        // settings.html
        "dark-theme": "Dark",
        "light-theme": "Light",
        "langEN": "English",
        "langPT": "Portuguese",
        // edittask.html
        "task-viewer":"Task Viewer",
        "edit-btn":"Edit",
        "add-task":"Edit Task",
        "label-title":"Title",
        "label-description":"Description",
        "save-task":"Save Task",
        "cancel-edit":"Back",
        // retrospective.html
        "hist-retro":"Historic Retrospectives",
        "add-retro":"Add Retrospective",
        "label-date-retro":"Date",
        "label-pres-retro":"Present Members",
        "label-comment-retro":"Comments",
        "input-save-retro":"Save Retrospective",
        // homepage.html
        "create-project": "Create Project",
        "select-project": "Select Project",
        "manage-backlog": "Backlog Manager",
        "select-sprint": "Sprint Selector",
        "project-settings": "Project Settings",
        "col-todo-text": "TO DO",
        "add-task-btn": "Add Task",
        "col-doing-text": "DOING",   
        "col-done-text": "DONE",
        "project-name": "Project: Name",
        "sprint-name": "Sprint: Name",
        "sprint-progress": "Sprint Progress:",
    },
    "pt": {
        // index.html
        "member-login-banner":"Acesso de membro",
        "username-label": "Nome de utilizador",
        "username": "Insira o nome de utilizador",
        "password-label":"Palavra-passe",
        "password":"Insira a palavra-passe",
        "login": "Entrar",
        "contact":"Informações de contacto:",
        "infosContact":"Pode contactar-nos na nossa sede durante os dias úteis das 09:30 às 17:30",
        "adressTitle":"Morada",
        "phoneNumberTitle":"Número de telefone:",
        "text-about1":"Como praticante proficiente das metodologias Agile e Scrum, trago uma vasta experiência e um profundo conhecimento destas abordagens ao desenvolvimento de software e à gestão de projectos. A minha experiência engloba um conhecimento profundo do Manifesto Agile, dos seus princípios e aplicações práticas em vários cenários de projectos. Tenho uma sólida experiência na implementação de práticas Agile, como a programação em pares, a integração contínua e o desenvolvimento baseado em testes, com o objetivo de facilitar uma resposta rápida e flexível à mudança através do desenvolvimento iterativo.",
        "text-about2":"No domínio do Scrum, demonstrei experiência na compreensão e aplicação das funções, eventos e artefactos da estrutura. A minha experiência como Scrum Master permitiu-me orientar as equipas nas práticas Scrum, removendo habilmente os impedimentos e promovendo um ambiente propício a uma dinâmica de equipa de elevado desempenho. Além disso, o meu papel como Product Owner envolveu a gestão eficaz do backlog do produto, a priorização de tarefas e o envolvimento das partes interessadas para garantir que os projectos estão alinhados com os objectivos comerciais.",
        // pretty much "all"
        "nav-home": "Início",
        "nav-retro": "Retrospetiva",
        "nav-sett": "Definições",
        "nav-copy": "Direitos de autor",
        "nav-exit": "Sair",
        "theme":"Tema",
        //settings.html
        "dark-theme": "Escuro",
        "light-theme": "Claro",
        "lang":"Língua",
        "langEN": "Inglês",
        "langPT": "Português",
        // edittask.html
        "task-viewer":"Visualizador de Tarefas",
        "edit-btn":"Editar",
        "add-task":"Editar Tarefa",
        "label-title":"Título",
        "label-description":"Descrição",
        "save-task":"Salvar Tarefa",
        "cancel-edit":"Retroceder",
        // retrospective.html
        "hist-retro":"Retrospectivas históricas",
        "add-retro":"Adicionar Retrospetiva",
        "label-date-retro":"Data",
        "label-pres-retro":"Membros presentes",
        "label-comment-retro":"Comentários",
        "input-save-retro":"Guardar Retrospetiva",
        // homepage.html
        "create-project": "Criar projeto",
        "select-project": "Selecionar projeto",
        "manage-backlog": "Gestor de tarefas pendentes",
        "select-sprint": "Seletor de Sprint",
        "project-settings": "Definições do projeto",
        "col-todo-text": "PARA FAZER",
        "add-task-btn": "Adicionar tarefa",
        "col-doing-text": "EM CURSO",   
        "col-done-text": "FEITO",
        "project-name": "Projeto: Nome",
        "sprint-name": "Sprint: Nome",
        "sprint-progress": "Progresso do Sprint:",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* changeLanguage(lang) = Toggle of underline under the FlagElement */
/**************************************************************************************************************************************************************************************/

/*export function changeLanguage(lang) {
    if (lang) {
        // set no local storage.............. gravar lá
        localStorage.setItem('language', lang); // saves data into localStorage
    }

    for (let key in languageContent[lang]) {
        if (document.getElementById(key) === null) 
            continue;
        }
        if (document.getElementById(key).tagName.toLowerCase() === 'input')
            document.getElementById(key).placeholder = languageContentIndex[lang][key];
        // conditional: extra special case <input> element for the Login button
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Login')
            document.getElementById(key).value = languageContentIndex[lang][key];
        if(document.getElementById(key).tagName.toLowerCase() === 'input' && document.getElementById(key).value === 'Entrar')
            document.getElementById(key).value = languageContentIndex[lang][key];
        // default : all the remaining elements
    

*/
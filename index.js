/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

/**************************************************************************************************************************************************************************************/ 
/* PAGE UPDATE TO REFLECT LANGUAGE SETTINGS ACCORDING TO: */
/* languageContetIndex[en/pt] applying the correspondence between pair {key : string} */
/**************************************************************************************************************************************************************************************/
let languageContentIndex = {
    "en": {
        "member-login-banner":"Member Login",
        "username-label": "Username",
        "username": "Enter your username",
        "errorLogin": "Mandatory field",
        "password-label":"Password",
        "password":"Enter your password",
        "login": "Login",
        "contact":"Contact information's:",
        "infosContact":"You can reach us at our headquarters during workdays from 09:30 to 17:30",
        "adressTitle":"Address",
        "phoneNumberTitle":"Phone Number:",
        "text-about1":"As a proficient practitioner of Agile and Scrum methodologies, I bring extensive experience and a deep understanding of these approaches to software development and project management. My expertise encompasses a thorough knowledge of the Agile Manifesto, its principles, and practical applications in various project scenarios. I have a strong background in implementing Agile practices like pair programming, continuous integration, and test-driven development, with a focus on facilitating a rapid and flexible response to change through iterative development.",
        "text-about2":"In the realm of Scrum, I have demonstrated expertise in understanding and applying the framework's roles, events, and artifacts. My experience as a Scrum Master has seen me guide teams in Scrum practices, adeptly removing impediments and fostering an environment conducive to high-performing team dynamics. Additionally, my role as a Product Owner involved effective management of the product backlog, task prioritization, and stakeholder engagement to ensure that projects align with business objectives.",
    },
    "pt": {
        "member-login-banner":"Acesso de membro",
        "username-label": "Nome de utilizador",
        "username": "Insira o nome de utilizador",
        "errorLogin": "Campo obrigatório",
        "password-label":"Palavra-passe",
        "password":"Insira a palavra-passe",
        "login": "Entrar",
        "contact":"Informações de contacto:",
        "infosContact":"Pode contactar-nos na nossa sede durante os dias úteis das 09:30 às 17:30",
        "adressTitle":"Morada",
        "phoneNumberTitle":"Número de telefone:",
        "text-about1":"Como praticante proficiente das metodologias Agile e Scrum, trago uma vasta experiência e um profundo conhecimento destas abordagens ao desenvolvimento de software e à gestão de projectos. A minha experiência engloba um conhecimento profundo do Manifesto Agile, dos seus princípios e aplicações práticas em vários cenários de projectos. Tenho uma sólida experiência na implementação de práticas Agile, como a programação em pares, a integração contínua e o desenvolvimento baseado em testes, com o objetivo de facilitar uma resposta rápida e flexível à mudança através do desenvolvimento iterativo.",
        "text-about2":"No domínio do Scrum, demonstrei experiência na compreensão e aplicação das funções, eventos e artefactos da estrutura. A minha experiência como Scrum Master permitiu-me orientar as equipas nas práticas Scrum, removendo habilmente os impedimentos e promovendo um ambiente propício a uma dinâmica de equipa de elevado desempenho. Além disso, o meu papel como Product Owner envolveu a gestão eficaz do backlog do produto, a priorização de tarefas e o envolvimento das partes interessadas para garantir que os projectos estão alinhados com os objectivos comerciais.",
    }
};
/**************************************************************************************************************************************************************************************/ 
/* function checkLanguage() - checks localstorage for value, if null defaults to english */
/**************************************************************************************************************************************************************************************/
function checkLanguage() {
    let language = localStorage.getItem('language');
    if (language===null) { // if it doesn't exist as preset 
        let lang='en'; // defaults to English
        localStorage.setItem('language', lang); // saves it
        console.log("Default language was null. Default language is now set to: "+lang); // displays message on console
    }
    else { // otherwise... reads from memory preexisting value
        changeLanguage(localStorage.getItem('language')); // calls function to changeLanguage
        console.log("Default language was previously set to: "+localStorage.getItem('language')+".");
    }
    activeLangFlag();
};
/**************************************************************************************************************************************************************************************/ 
/* DOMContentLoaded Listener :: CHECK LANGUAGE, LANGUAGE FLAGS
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    checkLanguage(); // checks the language setting - needs to be inside a DOMcl to trigger when loaded
    activeLangFlag(); // sets the flag element to active so it can have corresponding CSS applied
});
/**************************************************************************************************************************************************************************************/ 
/* function activeLangFlag() = Toggle of class="active" on each of the Language Flag Elements */
/**************************************************************************************************************************************************************************************/
function activeLangFlag() {
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
/* function changeLanguage(lang) - applies to each element {key : string} the corresponding language from the languageContet[en/pt] above */
/**************************************************************************************************************************************************************************************/
function changeLanguage(lang) {
    if (lang) {
         localStorage.setItem('language', lang); // saves data into localStorage
    }
    for (let key in languageContentIndex[lang]) { // all the normal ones
        let username = document.getElementById('username').value; //obtem o username do campo correspondente
        let errorElement = document.getElementById('errorLogin'); // error login
        // conditional: special case <input> elements
        if (key==='errorLogin' && (username === "" || username === null) ) {
            errorElement.innerText=""; // clear the error message 
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
        else
            document.getElementById(key).textContent = languageContentIndex[lang][key];
    }
    activeLangFlag(); // swaps the active lang flag
}; 
/**************************************************************************************************************************************************************************************/ 
/* FORM FOR LOGIN LISTENER */ // index.html // <form id="loginForm" action="homepage.html">
/**************************************************************************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    // declare variable: var nextStatus is not recommended after IE6, best practice is let keyword
    let form = document.getElementById('loginForm'); // obtains the loginForm
    // adds an EventListener to the form, on click, triggers the function that follows
    form.addEventListener('submit', function(event) { 
        let username = document.getElementById('username').value; // obtains username inserted text
        let errorElement = document.getElementById('errorLogin'); // obtains the error element for later message insertion
        let errorMsg = 'Mandatory field. Min. 6 letters.';
        if (localStorage.getItem('language')==='pt')
            errorMsg='Campo obrigatório. Min. 6 letras.';

        if (isUsernameInvalid(username) || isUsernameSmall(username)) {
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
/* FUNCTION isUsernameInvalid(username) - checks if username is empty or null
/**************************************************************************************************************************************************************************************/
function isUsernameInvalid(username) {
    if (username === "" || username === null)
        return true;
    return false;
};
/**************************************************************************************************************************************************************************************/ 
/* FUNCTION isUsernameSmall(username) - checks if username is under 6 letters
/**************************************************************************************************************************************************************************************/
function isUsernameSmall(username) {
    if (username.length<6) {
        console.log("username is smoll");
        return true;
    }
    return false;
};
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/


























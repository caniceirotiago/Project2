/**************************************************************************************************************************************************************************************/ 
/* SET USERNAME INTO HEADER  */
/**************************************************************************************************************************************************************************************/ 
export function setUsername(){
    document.addEventListener('DOMContentLoaded', function() {
        let storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            document.getElementById('usernameDisplay').textContent = storedUsername;
        }
        else { // default (should never ever happen)
            document.getElementById('usernameDisplay').textContent = "Username";
        }
    });
};
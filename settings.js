/* JavaScript File - all the code in the world  */
/* Switch to strict mode to get more useful errors
 when you make mistakes. */
'use strict';

import { setUsername } from "./username.js";
import { listenerThemeBtns,loadTheme} from "./theme.js";
import { listenerLanguageBtns, underlineLangFlag } from "./language.js";

/**************************************************************************************************************************************************************************************/ 
/* adds listener to theme && language buttons */
/**************************************************************************************************************************************************************************************/ 
listenerThemeBtns(); // adds listener to the theme buttons
listenerLanguageBtns(); // adds listener to the language buttons
/**************************************************************************************************************************************************************************************/ 
/* DOMcl sets username, changes theme *** */
/**************************************************************************************************************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function() {
    setUsername(); // set username on loading
    loadTheme(); // loads up the previously set theme
    underlineLangFlag();
});



/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
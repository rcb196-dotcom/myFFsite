"use strict"; 

//single line comment 
/*multi
 * line
 * comment
 */
//ctrl or cmd + / is keyboard command 

let message = "Hello world!"; 
console.log(message); 
alert(message); 

document.querySelector("#heading").innerText = message; 
document.getElementById("heading").innerText = message; 
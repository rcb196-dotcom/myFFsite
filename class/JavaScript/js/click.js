"use strict"

let redClickBox = document.getElementById("redClick"); 


redClickBox.classList.add("clickBox"); 

redClickBox.addEventListener("click",function(){
    //action i want to do when i click on the red box 
    document.querySelector("body").style.backgroundColor = "blue";
    redClickBox.style.backgroundColor = "orange"; 
}); 
redClickBox.addEventListener("mouseover", functiioin(){
    redClickBox.style.backgroundColor = "rgba(0,255,0,0.75)"
}); 
redClickBox.addEventListener("mouseout", functiioin(){
    redClickBox.style.backgroundColor = "red"
}); 

let showButton = document.getElementById("show")
let hideButton = document.getElementById("hide")

let showHideBoxideButton = document.getElementById("showideBox")

showButton.addEventListenre("click",function(){
    showHideBox.style.visbility = "visible"; 
}); 

hideButton.addEventListener("click", function(){
    showHideBox.style.visibility = "hidden"; 
}); 

let toggle = false; 

let toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click",function(){
    if(toggle == false){
        showHideBox.style.visibility = "visibile"; 
        toggle = true; 
    }else{
        showHideBox.style.visibility = "hidden"; 
        toggle = false; 
    }
}); 
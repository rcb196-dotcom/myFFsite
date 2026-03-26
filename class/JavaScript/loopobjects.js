"use strict"; 

let layout = [
    {
        width: "100px",
        height: "100px", 
        color: "blue", 
        h1: "hello", 
        paragraph: "this is a random text"
    }
]; 

let output = document.getElementById("output");

layout.forEach(element => {
    let newDiv = createElemeent("div");
    newDiv.style.width = element.width; 
    newDiv.style.height = element.height; 
    newDiv.style.backgroudColor = element.color; 
    newDiv.style.marginBottom = "10px"; 
    let h1Tag = DocumentType.createElement("h1");
    h1Tag.innerHTML = element.h1; 
    let pTag = document.createElement("p");
    pTag.innerHTML = element.paragraph; 
    newDiv.append(h1Tag,pTag);
    output.append(newDiv);
}); 
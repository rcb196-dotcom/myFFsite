"use strict"; 
const qa = [
    {
        question:"What is the largest land animal?",
        answer:"Elephant"
    }, 
    {
        question: "which animal is the king of the jungle?",
        answer: "Lion"
    }
];

console.log(qa[0].question);
document.getElementById("question").innerHTML = qa[0].question; 

//when i press submit, check for the answer, 
// correct or incorrect, go to next question, 

let submitButton = document.getElementById("submit"); 
let result = document.getElementById("result");

submitButton.addEventListener("click",function(){
    const selected = document.querySelector('input[name="option"):checked'); 
    console.log(selected.value);
    if(selected.value == qa[currentQuestion].answer){
        console.log("correct");
        //result.innerHTML = "Correct";
        increaseScore();
        nextQuestion();
        updateQuestion();
    }else{
        console.log("incorrect");
        //result.innerHTML = "Incorrect"; 
        decreaseScore();
        nextQuestion();
        updateQuestion();
    }
}); 

function checkAnswer(){
    const selected = document.querySelector('input[name="option"):checked'); 
    console.log(selected.value);
    if(selected.value == qa[currentQuestion].answer){
        console.log("correct");
}

function nextQuestion(){
    // currentQuestion = currentQuestion +1; 
    currentQuestion++; 
    if(currentQuestionnn == qa.length){
        currentQuestion = 0; 
    }
}

function updateQuestion(){
    document.getElementById("question").innerHTML = qa
    [currenQuestion].question;
}

function increaseScore(){
    score++;
    result.innerHTML = "Correct Score: " + score;
}

function decreaseScore(){
    score--;
    result.innerHTML = "Correct Score: " + score;
} 
// overthinking    
    function fixThought1() {
        document.getElementById("thought1").innerHTML = "they're probably just busy";
    }
    function fixThought2() {
        document.getElementById("thought2").innerHTML = "you are overthinking it";
    }
    function fixThought3() {
        document.getElementById("thought3").innerHTML = "no ❤️";
    }

// red flags 
function checkFlag1() {
    document.getElementById("result1").innerHTML = "🚩";
    const block = document.getElementById("result1").parentElement;
    block.classList.add("red-flag");
}
function checkFlag2() {
    document.getElementById("result2").innerHTML = "neutral, don't sweat it";
    const block = document.getElementById("result2").parentElement;
    block.classList.add("yellow-flag"); 
}
function checkFlag3() {
    document.getElementById("result3").innerHTML = "proceed with caution...";
    const block = document.getElementById("result3").parentElement;
    block.classList.add("yellow-flag2");
}
function checkFlag4() {
    document.getElementById("result4").innerHTML = "that's okay... they have a life";
    const block = document.getElementById("result4").parentElement;
    block.classList.add("green-flag");
}
function checkFlag5() {
    document.getElementById("result5").innerHTML = "green flag. and stand up.";
    const block = document.getElementById("result5").parentElement;
    block.classList.add("green-flag2");
}
function checkFlag6() {
    document.getElementById("result6").innerHTML = "run while you can";
    const block = document.getElementById("result6").parentElement;
    block.classList.add("red-flag2"); 
}
function checkFlag7() {
    document.getElementById("result7").innerHTML = "it's because they have self respect. take notes.";
    const block = document.getElementById("result7").parentElement;
    block.classList.add("green-flag3");
}
function checkFlag8() {
    document.getElementById("result8").innerHTML = "they're just not that into you sweetie it's time to move on";
    const block = document.getElementById("result8").parentElement;
    block.classList.add("red-flag3");
} 

// attachment 
function showAnxious() {
    document.getElementById("result").innerHTML = 
        "Anxious traits: clingy, overthinking, seeking constant reassurance.";

    document.getElementById("resultImage").src = "images/anxious.jpeg";
}

function showAvoidant() {
    document.getElementById("result").innerHTML = 
        "Avoidant traits: independent, distant, avoids emotional closeness.";

    document.getElementById("resultImage").src = "images/avoidant.jpeg";
}

function showMixed() {
    document.getElementById("result").innerHTML = 
        "Disorganized attachment: a little anxious, a little avoidant, a little chaotic.";

    document.getElementById("resultImage").src = "images/mixed.jpeg";
}

function showNeutral() {
    document.getElementById("result").innerHTML = 
        "You’re healthy and mentally stable (maybe). Congrats :)";

    document.getElementById("resultImage").src = "images/secure.jpg";
}

// healing 
const affirmations = [
    "I will not text him",
    "I deserve better",
    "I am focusing on myself",
    "I’m thriving, not surviving",
    "ALWAYS. choose self love."
];

let currentIndex = 0;

function nextAffirmation() {
    currentIndex++;
    if(currentIndex >= affirmations.length) {
        currentIndex = 0; 
    }
    document.getElementById("affirmation").innerText = affirmations[currentIndex];
}
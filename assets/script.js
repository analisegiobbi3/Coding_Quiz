var startGameButton = document.getElementById("startButton")
var countdownEl = document.getElementById("countdown");
var headerEl = document.querySelector("header");
var highScore = document.getElementById("highscore");
var mainEl = document.querySelector("main");
var questionTitle = document.getElementById("question")
var orderedListEl = document.getElementById("list")
var questions = 5;
//variables that I want to create as a I go: answer list, question,


startGameButton.addEventListener("click", function(){
    setTimer();
    quizQuestions();
});


// going to need local storage to store and see the results of the quiz
// localStorage.setItem ("key", item)
// localStorage.getItem("key")

highScore.addEventListener("click", function(){
    //add function that takes you to high score display page
})

// Need to update this function to show something when the game ends/ the timer is out
function gameOver() {
    countdownEl.textContent = " ";
    var timesUp = document.createElement("p");
    timesUp.textContent = "Game Over";
    headerEl.appendChild(timesUp);
 }


function quizQuestions() {

    for (i=0; i<questions.length; i++){
        //pulls the question promopt based on the index
        var Qs = quizQuestionObject[i].Prompt;
        //Sets the question title to be the prompt
        questionTitle.textContent = Qs;
        var choice1 = quizQuestionObject[i].Choices[0];
        var choice2 = quizQuestionObject[i].Choices[1];
        var choice3 = quizQuestionObject[i].Choices[2];
        var choice4 = quizQuestionObject[i].Choices[3];
    
    
        // questions holders
        var choice1Element = document.createAttribute("li");
        var button1El = document.createElement("button");
        choice1Element.setAttribute("class", "choiceList")
        button1El.setAttribute("class", "choiceButton");
        button1El.textContent = choice1;
        choice1Element.appendChild(button1El);
        orderedListEl.appendChild(choice1Element);
        mainEl.appendChild(orderedListEl);
    
        var choice2Element = document.createAttribute("li");
        var button2El = document.createElement("button");
        choice2Element.setAttribute("class", "choiceList")
        button2El.setAttribute("class", "choiceButton");
        button2El.textContent = choice2;
        choice2Element.appendChild(button2El);
        orderedListEl.appendChild(choice2Element);
        mainEl.appendChild(orderedListEl);
    
    
        var choice3Element = document.createAttribute("li");
        var button3El = document.createElement("button");
        choice3Element.setAttribute("class", "choiceList")
        button3El.setAttribute("class", "choiceButton");
        button3El.textContent = choice3;
        choice3Element.appendChild(button3El);
        orderedListEl.appendChild(choice3Element);
        mainEl.appendChild(orderedListEl);
    
        var choice4Element = document.createAttribute("li");
        var button4El = document.createElement("button");
        choice4Element.setAttribute("class", "choiceList")
        button4El.setAttribute("class", "choiceButton");
        button4El.textContent = choice4;
        choice4Element.appendChild(button4El);
        orderedListEl.appendChild(choice4Element);
        mainEl.appendChild(orderedListEl);
    
    
        //add event listener to allwo click for buttons
        var clickAnswer = document.querySelectorAll(".answerButton")
        clickAnswer.addEventListener("click", function(){
            //if statement to handle answers?
        })
    }
}

function checkAnswer(){
 
}   


var secondsLeft = 60;
//Function to set the timer 
function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = "Countdown: " + secondsLeft;
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Shows the stop game image
          gameOver();
        }
    
      }, 1000);
};




//  Quiz Quesiton Objects

var quizQuestionObject = [
    {
        Prompt: "commonly used data types DO NOT include:",
        Choices: ["strings", "booleans", "alerts", "numbers"],
        Answer: "alerts",
    },
    {
        Prompt: "The condition in an if / else statement is enclosed within ____.",
        Choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        Answer: "parentheses"
    },
    {
        Prompt: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        Choices: ["Inline", "Import", "External", "Internal"],
        Answer: "Import",
    },
    {
        Prompt: "How to create an array in js ?",
        Choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],
        Answer: "var A=[]",
    },
    {   
        Prompt: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        Choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        Answer: "querySelectorAll()",
    },
]

//variables used in this script
var startGameButton = document.querySelector('#startButton');
var elementsToClear = document.querySelector('.starterElements');
var clickForHighScores = document.getElementById('highscore');
var button = document.querySelector('button');
var countdownEl = document.getElementById('countdown');
var headerEl = document.querySelector('header');
var highScoreEl = document.getElementById('highScorePage');
var divEl = document.querySelector('.bodyDiv');
var questionTitle = document.getElementById('question');
var orderedListEl = document.getElementById('list');
var resultEl = document.getElementById('result');
var form = document.getElementById('score-form');
var divButtonEl = document.getElementById('buttomEl');
var gohomeEl = document.getElementById('goBack');
var clearScoreEl = document.getElementById('clearScore');
var listOfScoreEl = document.getElementById('listOfScores')
var showScoreEl = document.getElementById('showScores')
var goBackHighScoreEl = document.getElementById('goBackHighScore')



//event listener that allows the user to start the game
//also clears the page of the start game button and text
//finally calls the quest quiz function, which cylces through questions
startGameButton.addEventListener('click', function(event){
    if (event.target === startGameButton) {
        elementsToClear.style.display = 'none';
        setTimer();
        quizQuestions();
    }
});


//index variable for the quiz questions
// score varialbe to hold how many quests are answered correctly
var i=0;
var score=0;

function quizQuestions() {
        //pulls the question promopt based on the index
        var Qs = quizQuestionObject[i].Prompt;
        //clears out the previous question choices 
        orderedListEl.innerHTML='';

        //Sets the question title to be the prompt
        questionTitle.textContent = Qs;


        //sets each question choice to a variable
        var choice1 = quizQuestionObject[i].Choices[0];
        var choice2 = quizQuestionObject[i].Choices[1];
        var choice3 = quizQuestionObject[i].Choices[2];
        var choice4 = quizQuestionObject[i].Choices[3];
              
          
        //Choice 1 Setup
        var createListEl1 = document.createElement('li');
        var button1El = document.createElement('button');
        //creating classes for my choice buttons
        createListEl1.setAttribute('class', 'listElement');
        button1El.setAttribute('class', 'choiceButton');
        //adds the text for choice one to the button
        button1El.textContent = choice1;
        createListEl1.appendChild(button1El);
        //appends the button to the list item created above
        orderedListEl.appendChild(createListEl1);
        //Adds the list item to the orderlist creaated in the HTML
        //Adds this to the div element 
        divEl.appendChild(orderedListEl);
                
        //Choice 2 Setup
        var createListEl2 = document.createElement('li');
        var button2El = document.createElement('button');
        createListEl2.setAttribute('class', 'listElement');
        button2El.setAttribute('class', 'choiceButton');
        button2El.textContent = choice2;
        createListEl2.appendChild(button2El);
        orderedListEl.appendChild(createListEl2);
        divEl.appendChild(orderedListEl);
                
                
         //Choice 3 Setup
        var createListEl3 = document.createElement('li');
        var button3El = document.createElement('button');
        createListEl3.setAttribute('class', 'listElement');
        button3El.setAttribute('class', 'choiceButton');
        button3El.textContent = choice3;
        createListEl3.appendChild(button3El);
        orderedListEl.appendChild(createListEl3);
        divEl.appendChild(orderedListEl);
            
        //Choice 4 Setup
        var createListEl4 = document.createElement('li');
        var button4El = document.createElement('button');
        createListEl4.setAttribute('class', 'listElement');
        button4El.setAttribute('class', 'choiceButton');
        button4El.textContent = choice4;
        createListEl4.appendChild(button4El);
        createListEl4.appendChild(button4El);
        orderedListEl.appendChild(createListEl4);
        divEl.appendChild(orderedListEl);
        

        //grabs each answer button and allows grabs the text to compare to the actual answer
         var answerChoiceButton = document.getElementsByClassName('choiceButton');
         for (var j=0; j<answerChoiceButton.length; j++){
            var button = answerChoiceButton[j];
            button.addEventListener('click', checkAnswer);
         }

};

//function checks if the answer is correct but comparting target to the answer based on idex
function checkAnswer(event){
        //similar to the prompt index, this looks at the answer
        var questionAnswerIndex = quizQuestionObject[i].Answer;
        //if the answer is correct, a new element is created and we see the "correct" text
        if(event.target.textContent === questionAnswerIndex){
            var resultEl = document.getElementById('result');
            resultEl.innerText='Correct';
            resultEl.setAttribute('style', 'color:#a7c957');
            divEl.appendChild(resultEl);
            //if answer is correct, we keep the timer as is and add to the score
            secondsLeft = secondsLeft;
            score ++
            i++
        }else if(event.target.textContent !== questionAnswerIndex){
            //if the answer is wrong, a new element is created and we see the "wrong" text
            var resultEl = document.getElementById('result');
            resultEl.innerText='Wrong';
            resultEl.setAttribute('style', 'color:#bc4749');
            divEl.appendChild(resultEl);
            //if the answer is wrong, subtract 15 seconds
            secondsLeft = secondsLeft - 15;
            i++
        }

        //conditional statement to check if we still have questions or if we have finished the quiz
        if (i<quizQuestionObject.length){
            quizQuestions(); 
        }else{
            divEl.innerHTML='';
            clearInterval(timerInterval);
            quizFinalScore();
            buildInput();
        }
};  

//function to build the input field and allow the user to enter their initals and save their score
function buildInput(){
    var input = document.createElement('input');
    var createSubmitButton = document.createElement('button');
    createSubmitButton.innerHTML='Submit';
    createSubmitButton.setAttribute('id', 'submit');
    input.setAttribute('id', 'initialsInput');
    form.textContent='Enter your Initials';
    form.setAttribute('style', 'color: #e0b1cb;  padding: 5px');
    form.appendChild(input);
    form.appendChild(createSubmitButton);
    var submitButton=document.getElementById('submit');
    // submitButton.addEventListener("submit", submitScore)
    submitButton.onclick = function (event){
        if (document.getElementById('initialsInput').value.length === 0){
            return;
        }
        event.preventDefault();
        var initialsInput = document.getElementById('initialsInput').value;
        localStorage.setItem('initials', initialsInput);
        localStorage.setItem('score', score);
        localStorage.setItem('time', secondsLeft);
        highScorePage(); 
    }
}

//stores scores in an array to later pull into the high score page
var highScoreStorage = [];
var storedTime = localStorage.getItem('time');
var storedInitials = localStorage.getItem('initials');


//function to get the stores scores and display them after initials are submited
function highScorePage(){
    divEl.innerHTML = '';
    form.style.display = 'none';
    var yourScore = localStorage.getItem('score');
    var yourTime = localStorage.getItem('time');
    var yourInitials = localStorage.getItem('initials');
    var resultsPage = document.getElementById('highScorePage');
    var scoreList = document.createElement('ol');
    var createScoreList = document.createElement('li');
    createScoreList.setAttribute('class', 'scoreListClass');
    resultsPage.appendChild(scoreList);
    scoreList.appendChild(createScoreList);
    createScoreList.textContent = yourInitials + ": Score: " + yourScore + " Time:  " + yourTime;

    //create the end option buttons
    divButtonEl.style.visibility='visible';
    gohomeEl.addEventListener('click', goBacktoHome);
    clearScoreEl.addEventListener("click", selfDestruct);
}

//function reload the first page and restart the quiz
function goBacktoHome(){
    location.reload();
}

//function to clear scores
function selfDestruct(){
    highScoreEl.value = '';
    location.reload();
}

clickForHighScores.onclick = storedScores;
clearScoreEl.onclick = selfDestruct;

//pulls up stored scores in the high score page
function storedScores(){
    highScoreStorage.push(storedInitials + " : " + storedTime);
    elementsToClear.style.display = 'none';    
    for (var i=0; i<highScoreStorage.length; i++){
        var scoreListItem = document.createElement('li');
        scoreListItem.setAttribute('class', 'scoreListItemEl')
        scoreListItem.textContent = highScoreStorage[i];
        showScoreEl.appendChild(scoreListItem);
    }

    goBackHighScoreEl.style.visibility='visible';
    goBackHighScoreEl.addEventListener('click', goBacktoHome);
}


//Function handles grabbing the final score
//Function also shows the input, which will allow the user to input their name to store their score
function quizFinalScore(){
    var finalScoreEl = document.createElement('p');
    finalScoreEl.setAttribute('class', 'final');
    divEl.appendChild(finalScoreEl); 
    finalScoreEl.textContent=" your score is " + score + " and your final time is " + secondsLeft;
}



//Function handles the timer
//when the timer hits 0, time clears and the final score appears
var secondsLeft = 70;
var timerInterval;
function setTimer(){
    timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = "Countdown: " + secondsLeft;
        if (!secondsLeft > 0) {
            secondsLeft = 0;
        }
        if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          divEl.innerHTML='';
          buttomEl.style.visibility='visible';
          gohomeEl.addEventListener('click', goBacktoHome);
          quizFinalScore();
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
];

// Selects element by id
var countdownEl = document.getElementById("countdown");

// Selects element by section
var bodyEl = document.querySelector("body");

// Sets timer for 60 seconds
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
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
}



// Need to update this function to show something when the game ends/ the timer is out
function gameOver() {
  countdownEl.textContent = " ";
  var timesUp = document.createElement("p");
  timesUp.setAttribute("style", "color: red");
  bodyEl.appendChild(timesUp);

}

setTime();
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
const guessField  document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
function checkGuess() {
    const userGuess = Number(HguessField.value);
    // DEcide what feedback to show next
    }
    if (guessCount == 1) {
        guesses.textContent = "Previous guesses:";
    }
    if (userGuess == randomNumber) {
        // Show a winning mesaage 
    } else if (guessCount == 10) {
        // End the game
    } else {
        // Say wheather the guess is high or low
    }
    if (userGuess < randomNumber) {
        low0rHi.textContent = "Too low!"; 
    } else if (userGuess < randomNumber) {
        low0rHi.textContent = "Too high"
    }
    guessSubmit.addEventsListener("click", checkGuess);
    fuction setGame0ver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        // Add a button to start a new game
    }
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }
guessCount = 1;
randomNumber = Math.floor(Math.random() * 100) + 1;
let currentGuessCount = 0;
const maxGuesses = 5;
const mysteryObject = "Panda"; // Example object
const hints = [
    "This animal is native to a country in Asia.",
    "It primarily eats bamboo.",
    "It is black and white.",
    "It is considered a national treasure in its native country.",
    "It spends most of its life eating and sleeping."
];
let currentGuess

function makeGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const feedbackElement = document.getElementById("feedback");
    const hintElement = document.getElementById("hint");

    if (userGuess === mysteryObject.toLowerCase()) {
        feedbackElement.innerText = "Congratulations! You've guessed correctly.";
        hintElement.innerText = "";
        feedbackElement.style.color = '#5cb85c'; // Success color
        return;
    }

    currentGuessCount++;

    if (currentGuessCount >= maxGuesses) {
        feedbackElement.innerText = `Sorry, you're out of guesses. The correct answer was ${mysteryObject}.`;
        hintElement.innerText = "";
    } else {
        feedbackElement.innerText = "That's not correct. Try again!";
        hintElement.innerText = `Hint: ${hints[currentGuessCount]}`;
    }
}

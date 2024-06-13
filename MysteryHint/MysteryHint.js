let currentGuessCount = 0;
const maxGuesses = 5;
const mysteryObject = "Eiffel Tower"; // Example object
const hints = [
    "It's located in Europe.",
    "It's over 300 meters tall.",
    "It was built in the late 19th century.",
    "It is one of the most visited monuments in the world.",
    "It is made of iron."
];

function makeGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const feedbackElement = document.getElementById("feedback");
    const hintElement = document.getElementById("hint");

    if (userGuess === mysteryObject.toLowerCase()) {
        feedbackElement.innerText = "Congratulations! You've guessed correctly.";
        hintElement.innerText = "";
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

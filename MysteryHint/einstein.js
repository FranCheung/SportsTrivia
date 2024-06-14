let currentGuessCount = 0;
const maxGuesses = 5;
const mysteryObject = "Albert Einstein"; // Example object
const hints = [
    "He was born in the Kingdom of Württemberg in the German Empire.",
    "Famous for his theory of relativity.",
    "He won the Nobel Prize in Physics in 1921.",
    "He had a distinctive hairstyle.",
    "He was a pacifist during World War I."
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

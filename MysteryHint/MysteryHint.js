function startGame() {
    let currentGuessCount = 0;
    const maxGuesses = 5;
    const mysteryObjects = {
        "Eiffel Tower": [
            "It's located in Europe.",
            "It's over 300 meters tall.",
            "It was built in the late 19th century.",
            "It is one of the most visited monuments in the world.",
            "It is made of iron."
        ],
        "Panda": [
            "This animal is native to a country in Asia.",
            "It primarily eats bamboo.",
            "It is black and white.",
            "It is considered a national treasure in its native country.",
            "It spends most of its life eating and sleeping."
        ],
        "Albert Einstein": [
            "He was born in the Kingdom of Württemberg in the German Empire.",
            "Famous for his theory of relativity.",
            "He won the Nobel Prize in Physics in 1921.",
            "He had a distinctive hairstyle.",
            "He was a pacifist during World War I."
        ]
        
    }
    const keys = Object.keys(mysteryObjects);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const mysteryObject = keys[randomIndex];
    const hints = mysteryObjects[mysteryObject];
    let currentGuess

    function makeGuess() {
        const userGuess = document.getElementById("guessInput").value.toLowerCase();
        const feedbackElement = document.getElementById("feedback");
        const hintElement = document.getElementById("hint");

        if (userGuess === mysteryObject.toLowerCase()) {
            feedbackElement.innerText = "Congratulations! You've guessed correctly.";
            hintElement.innerText = "";
            feedbackElement.style.color = '#5cb85c'; // Success color
            nextButton.style.display = "block";
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
    
}
function nextGame() {
    document.getElementById("nextButton").style.display = "none"; 
    startGame(); // Start a new game
}
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});
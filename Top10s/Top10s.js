// script.js
const top10Items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]; // Example category: fruits
let guesses = [];
let score = 0;
let incorrectGuesses = 0; // Counter for incorrect guesses

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("answerList");
    top10Items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
});

function startQuiz(category) {
    // Redirect user to the quiz page for the selected category
    window.location.href = category + ".html";
}

function submitGuess() {
    const userGuess = document.getElementById("userGuess").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    const answers = document.querySelectorAll("#answerList li");
    const scoreDiv = document.getElementById("score");

    if (userGuess && !guesses.includes(userGuess)) {
        guesses.push(userGuess);
        if (top10Items.includes(userGuess)) {
            score++;
            resultsDiv.innerHTML = `<p>Correct! You've guessed ${score} out of 10 correctly!</p>`;
            answers[top10Items.indexOf(userGuess)].style.visibility = "visible"; // Reveal the correct guess
            scoreDiv.innerHTML = `Score: ${score} / 10`; // Update the score display
        } else {
            incorrectGuesses++;
            if (incorrectGuesses < 3) {
                resultsDiv.innerHTML = `<p>Wrong! You have ${3 - incorrectGuesses} attempts left.</p>`;
            } else {
                resultsDiv.innerHTML = `<p>Game Over! Thank you for playing. Your final score was ${score} out of 10.</p>`;
                document.getElementById("userGuess").disabled = true; // Disable further input
                document.querySelector("button").disabled = true; // Disable the submit button
                return; // End the function early to stop further execution
            }
        }
    } else if (guesses.includes(userGuess)) {
        resultsDiv.innerHTML = `<p>You've already guessed that! Try something different.</p>`;
    }

    document.getElementById("userGuess").value = ""; // Clear the input field after each guess
}

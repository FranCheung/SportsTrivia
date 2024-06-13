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
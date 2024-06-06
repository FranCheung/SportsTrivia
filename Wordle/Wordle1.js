const correctAnswer = "Michael Jordan".toUpperCase(); // Example answer, adjust accordingly
const maxAttempts = 6;
let attempts = 0;
let guesses = [];
const hints = [
    "This athlete played the majority of his career in Chicago.",
    "He is often considered the greatest basketball player of all time.",
    "He won six NBA championships and earned two Olympic gold medals."
];

function createGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < maxAttempts; i++) {
        let row = document.createElement('div');
        row.className = 'grid-row';
        for (let j = 0; j < correctAnswer.length; j++) {
            let cell = document.createElement('div');
            cell.className = 'grid-cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function addGuessToGrid(guess) {
    const grid = document.getElementById('grid');
    let row = document.createElement('div');
    row.className = 'grid-row';
    for (let j = 0; j < correctAnswer.length; j++) {
        let cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = j < guess.length ? guess[j].toUpperCase() : '';
        if (isCorrect) {
            cell.classList.add('correct-guess'); // Add the correct-guess class if the answer is right
        }
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

function submitGuess() {
    const input = document.getElementById('guessInput');
    const guess = input.value.toUpperCase();

    if (guess.length !== correctAnswer.length) {
        document.getElementById('feedback').textContent = `Please enter a guess that is ${correctAnswer.length} characters long.`;
        return; // Exit the function if guess length is incorrect
    }
    attempts++;

    const isCorrect = guess === correctAnswer;
    addGuessToGrid(guess, isCorrect); // Pass whether the guess is correct to the function

    if (isCorrect) {
        document.getElementById('feedback').textContent = "Congratulations! You've guessed correctly!";
        input.disabled = true; // Disable further input since the game is won
    } else if (attempts < maxAttempts) {
        let hintIndex = Math.min(attempts - 1, hints.length - 1); // Handle hint indexing safely
        document.getElementById('feedback').textContent = `Incorrect, try again! Attempts left: ${maxAttempts - attempts} Hint: ${hints[hintIndex]}`;
    } else {
        document.getElementById('feedback').textContent = `Game Over! The correct answer was ${correctAnswer}. Last hint: ${hints[hintIndex]}`;
        input.disabled = true;
    }

    input.value = ''; // Clear input after guess
}

document.addEventListener('DOMContentLoaded', createGrid);

document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitGuess();
    }
});
let currentGuessCount = 0;
const maxGuesses = 5;
let mysteryObject;
let hints;
let mysteryObjects;

function startGame() {
    mysteryObjects = {
        "Eiffel Tower": {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/360px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
            hints: [
                "It's located in Europe.",
                "It's over 300 meters tall.",
                "It was built in the late 19th century.",
                "It is one of the most visited monuments in the world.",
                "It is made of iron."
            ]
        },
        "Panda": {
            image: "https://example.com/images/panda.jpg",
            hints: [
                "This animal is native to a country in Asia.",
                "It primarily eats bamboo.",
                "It is black and white.",
                "It is considered a national treasure in its native country.",
                "It spends most of its life eating and sleeping."
            ]
        },
        "Albert Einstein": {
            image: "https://example.com/images/einstein.jpg",
            hints: [
                "He was born in the Kingdom of Württemberg in the German Empire.",
                "Famous for his theory of relativity.",
                "He won the Nobel Prize in Physics in 1921.",
                "He had a distinctive hairstyle.",
                "He was a pacifist during World War I."
            ]
        }
    };

    const keys = Object.keys(mysteryObjects);
    const randomIndex = Math.floor(Math.random() * keys.length);
    mysteryObject = keys[randomIndex];
    hints = mysteryObjects[mysteryObject].hints;

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("guessInput").value = "";
    document.getElementById("hint").innerText = "Hint: Begin guessing!";
    document.getElementById("feedback").innerText = "";
    currentGuessCount = 0;

    document.getElementById("silhouette").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

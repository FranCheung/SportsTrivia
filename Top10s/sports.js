// script.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, limit, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("testing");
const firebaseConfig = {
  apiKey: "AIzaSyCtxdXykgJRn_Kq3nW5K65kMai9rHUjcPo",
  authDomain: "trivia-senior-project.firebaseapp.com",
  projectId: "trivia-senior-project",
  storageBucket: "trivia-senior-project.appspot.com",
  messagingSenderId: "920352771122",
  appId: "1:920352771122:web:411c9976ddba4e4ae9802b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider()
const auth = getAuth(app);


const top10Items = ["jordan", "lebron", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]; // Example category: fruits
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

// function startQuiz(category) {
    // Redirect user to the quiz page for the selected category
//     window.location.href = category + ".html";
// }

export function submitGuess() {
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
                document.getElementById("homeButton").disabled = false;
                resultsDiv.innerHTML = `<p>Game Over! Thank you for playing. Your final score was ${score} out of 10.</p><br><button id="signInButton">Sign In to Submit Score</button>`;
                document.getElementById("userGuess").disabled = true; // Disable further input
                document.querySelector("button").disabled = true; // Disable the submit button
                const signInButton = document.getElementById("signInButton");
                signInButton.removeEventListener('click', userSignIn);
                signInButton.addEventListener('click', userSignIn);
                console.log("testing")
                return; // End the function early to stop further execution
            }
        }
    } else if (guesses.includes(userGuess)) {
        resultsDiv.innerHTML = `<p>You've already guessed that! Try something different.</p>`;
    }

    document.getElementById("userGuess").value = ""; // Clear the input field after each guess
}
async function submitScore(name, score, category){
    try {
        const docRef = await addDoc(collection(db,"top10s"), {
            name: name, 
            score: score,
            category: category,
            timestamp: new Date()
        })
    } catch (e){
        console.error("Error adding document:", e);
    }
}
async function getTopScores(category) {
    const topScoresDiv = document.getElementById("topScores");
    topScoresDiv.innerHTML = "<h2>Top Scores:</h2>"; // Add a heading for the top scores

    const q = query(collection(db, "top10s"), where("category", "==", category), orderBy("score", "desc"), limit(10));

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const scoreItem = document.createElement("p");
            scoreItem.textContent = `${data.name}: ${data.score}`;
            topScoresDiv.appendChild(scoreItem);
        });
    } catch (e) {
        console.error("Error getting documents:", e);
    }
}
const userSignIn = async() => {
    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user
        console.log("User signed in: ", user);
        await submitScore(user.displayName || "Anonymous", score, "sports");
        await getTopScores("sports");
    }catch (error){
        console.error("Error during sign-in: ", error);
    }
    
  }
function goHome() {
    window.location.href = 'Top10sWelcome.html'; // Redirect to the welcome page
}
window.goHome=goHome
window.submitGuess = submitGuess;
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
            image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRW343_6kUQRm1nz6VkjDIOf-SuqMF8mRxV_QHWcO_alVzlnWmD6DoXNm1Q9FFEzcRZ",
            hints: [
                "This animal is native to a country in Asia.",
                "It primarily eats bamboo.",
                "It is black and white.",
                "It is considered a national treasure in its native country.",
                "It spends most of its life eating and sleeping."
            ]
        },
        "Albert Einstein": {
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCzHlEV2IRR8dzvw_HPvscPe9zc-l24Lx5b0xrPrbCHCh7Ha4T",
            hints: [
                "He was born in the Kingdom of Württemberg in the German Empire.",
                "Famous for his theory of relativity.",
                "He won the Nobel Prize in Physics in 1921.",
                "He had a distinctive hairstyle.",
                "He was a pacifist during World War I."
            ]
        },
        "Michael Jordan": {
            image: "https://cdn.nba.com/manage/2021/08/michael-jordan-celebrates-archive-1568x882.jpg",
            hints: [
                "He played the majority of his career with a team based in Chicago.",
                "He is often considered the greatest basketball player of all time.",
                "He won six NBA championships and earned two Olympic gold medals.",
                "He had brief retirements, one of which he spent attempting a career in baseball.",
                "Famous for his sneaker line and the logo inspired by his silhouette."
            ]
        },
        "Lionel Messi": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s",
            hints: [
                "He began his professional career at the age of 17 with a famous club in Spain.",
                "He is known for his dribbling ability and goal-scoring records.",
                "He has won the Ballon d'Or award multiple times, given to the world's best football player.",
                "Originally from Argentina, he led his national team to a Copa América victory.",
                "Known for his lifelong association with FC Barcelona, though he later moved to another club."
            ]
        },
        "Usain Bolt": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lZsV5DJWEJnnR3odW13LGgz6skUKbM6j6Q&s",
            hints: [
                "This athlete is known for his incredible speed.",
                "He holds world records in both 100 meters and 200 meters.",
                "He is from Jamaica and his nickname relates to his speed.",
                "He won multiple gold medals across three Olympic Games.",
                "He famously celebrates his victories with a signature pose that mimics a lightning bolt."
            ]
        },
        "Inception": {
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
            hints: [
                "This movie involves a complex narrative structure with multiple layers.",
                "It's directed by Christopher Nolan.",
                "The plot revolves around dreams within dreams.",
                "It features a spinning top in a crucial scene.",
                "Leonardo DiCaprio stars as the main character."
            ]
        },
        "Tom Hanks": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw9av-RD0_R0yeMl0wnqI-8FNGIXK8jgRNw&s",
            hints: [
                "This actor started his career in comedic roles.",
                "He won back-to-back Academy Awards in the 1990s.",
                "He starred in Forrest Gump.",
                "He often collaborates with director Steven Spielberg.",
                "Known for his voice role as Woody in Toy Story."
            ]
        },
        "Sushi": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoscM6RlobHymnk1XLjLmegHEvOL0tEwmg&s",
            hints: [
                "This dish originated in Japan.",
                "It traditionally includes raw fish.",
                "Rice in this dish is seasoned with vinegar.",
                "It can be served in rolls or as individual pieces called nigiri.",
                "Wasabi and soy sauce are common condiments served with it."
            ]
        },
        "Sydney": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngiJTg6PiqusPFTzNtXFqGnNJfPKupnnHwg&s",
            hints: [
                "This city is famous for its Opera House.",
                "It's located in Australia.",
                "It hosts a famous annual fireworks display on New Year's Eve.",
                "It's the most populous city in its country.",
                "It has a renowned beach called Bondi."
            ]
        },
        "Pizza": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnWYk05nhD89qd5NO6I9n8ivr9jFktDkIuw&s",
            hints: [
                "This dish originated in Italy.",
                "It is typically round, flat, and baked in an oven.",
                "It is commonly topped with tomato sauce, cheese, and various other ingredients.",
                "One of the most popular variants comes from a city known for its deep-dish version.",
                "Often consumed on game nights or during casual gatherings."
            ]
        },
        "Kimchi": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ThQbcf0Asf_7Wfuu1a-Zb9l455MkqUStZQ&s",
            hints: [
                "This is a traditional fermented dish from Korea.",
                "It is made primarily with cabbage and a variety of spices and seasonings.",
                "It's known for its distinctive spicy and sour taste.",
                "This food is often served as a side dish with every meal.",
                "It is considered a health food and may aid in digestion."
            ]
        },
        "Venice": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIhCipoz1CN8LLM2QJPLysbQ9GmA2KLTjJw&s",
            hints: [
                "This city is famous for its canals and bridges.",
                "Located in Italy, it is often referred to as The Floating City.",
                "One of the most famous events here is an annual international mask festival.",
                "It is known for its significant role in the history of symphonic and operatic music.",
                "This city is sinking at an alarming rate."
            ]
        },
        "Sahara Desert": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU8Ykp9cqZi6rSwSNoRsryLQm1ZBqTeKFsw&s",
            hints: [
                "This is the largest hot desert in the world.",
                "It covers a large part of Northern Africa.",
                "It is characterized by some of the harshest landscapes including sand dunes, scree fields, and gravel plains.",
                "Despite the harsh conditions, it has various animal species that are adapted to the desert environment.",
                "The name of this desert comes from the Arabic word for desert."
            ]
        },
        "Machu Picchu": {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEWL9XMs8lczn4QQnLeINpfEzhejQc43-WA&s",
            hints: [
                "This ancient city is located in Peru.",
                "It's often called the Lost City of the Incas.",
                "It is situated high in the Andes Mountains.",
                "This site was rediscovered by Hiram Bingham in 1911.",
                "It's one of the New Seven Wonders of the World."
            ]
        }
    };

    const keys = Object.keys(mysteryObjects);
    const randomIndex = Math.floor(Math.random() * keys.length);
    mysteryObject = keys[randomIndex];
    hints = mysteryObjects[mysteryObject].hints;

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("guessInput").value = "";
    document.getElementById("hint").innerText = "Begin guessing!";
    document.getElementById("feedback").innerText = "";
    document.getElementById("feedback").style.color = '#333'; // Reset color to default or choose a neutral color
    currentGuessCount = 0;

    document.getElementById("silhouette").style.display = "none";
}

function makeGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const feedbackElement = document.getElementById("feedback");
    const hintElement = document.getElementById("hint");
    const nextButton = document.getElementById("nextButton");
    const silhouetteImage = document.getElementById("silhouette");

    if (userGuess === mysteryObject.toLowerCase()) {
        feedbackElement.innerText = "Congratulations! You've guessed correctly.";
        hintElement.innerText = "";
        feedbackElement.style.color = '#5cb85c'; // Success color
        nextButton.style.display = "block";
        silhouetteImage.style.display = "block";
        silhouetteImage.src = mysteryObjects[mysteryObject].image;
        return;
    }

    currentGuessCount++;

    if (currentGuessCount >= maxGuesses) {
        feedbackElement.innerText = `Sorry, you're out of guesses. The correct answer was ${mysteryObject}.`;
        hintElement.innerText = "";
        nextButton.style.display = "block";
    } else {
        feedbackElement.innerText = "That's not correct. Try again!";
        hintElement.innerText = `Hint: ${hints[currentGuessCount - 1]}`;
    }
}

function nextGame() {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("silhouette").style.display = "none";
    startGame();
}

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

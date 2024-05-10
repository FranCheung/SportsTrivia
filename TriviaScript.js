document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('gameBoard');
    let selectedTiles = [];
    let mistakes = 0;
    const submitButton = document.getElementById('submitGuess');

    const tiles = [
        { name: "Stephen Curry", team: "Golden State Warriors" },
        { name: "Klay Thompson", team: "Golden State Warriors" },
        { name: "Draymond Green", team: "Golden State Warriors" },
        { name: "Golden State Warriors", team: "Golden State Warriors" },
        { name: "Patrick Mahomes", team: "MVP" },
        { name: "Aaron Rodgers", team: "MVP" },
        { name: "Tom Brady", team: "MVP" },
        { name: "Peyton Manning", team: "MVP" },
        { name: "Nikola Jokic", team: "International" },
        { name: "Shai Gilgeous-Alexander", team: "International" },
        { name: "Luka Doncic", team: "International" },
        { name: "Victor Wembanyama", team: "International" },
        { name: "Edmonton", team: "Canadian NHL" },
        { name: "Vancouver", team: "Canadian NHL" },
        { name: "Montreal", team: "Canadian NHL" },
        { name: "Toronto", team: "Canadian NHL" }
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // Swap elements
        }
    }

    function setupTiles() {
        shuffle(tiles);
        gameBoard.innerHTML = '';  // Clear the game board
        tiles.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = 'tile';
            tileElement.textContent = tile.name;
            tileElement.dataset.team = tile.team;
            tileElement.addEventListener('click', () => selectTile(tileElement));
            gameBoard.appendChild(tileElement);
        });
    }

    function selectTile(tileElement) {
        if (selectedTiles.includes(tileElement)) {
            selectedTiles = selectedTiles.filter(t => t !== tileElement);
            tileElement.classList.remove('selected');
        } else if (selectedTiles.length < 4) {
            selectedTiles.push(tileElement);
            tileElement.classList.add('selected');
        }
        updateSubmitButton();
    }

    function updateSubmitButton() {
        submitButton.style.opacity = selectedTiles.length === 4 ? '1' : '0.5';
        submitButton.style.pointerEvents = selectedTiles.length === 4 ? 'auto' : 'none';
    }

    function submitGuess() {
        if (selectedTiles.length === 4) {
            const firstTeam = selectedTiles[0].dataset.team;
            const isCorrect = selectedTiles.every(tile => tile.dataset.team === firstTeam);

            if (isCorrect) {
                alert('Correct group!');
                selectedTiles.forEach(tile => {
                    tile.style.backgroundColor = 'green';
                    tile.removeEventListener('click', () => selectTile(tile));
                });
            } else {
                alert('Incorrect group!');
                mistakes++;
                document.getElementById('mistakeCounter').textContent = 'Mistakes: ' + mistakes;
                if (mistakes >= 3) {
                    alert('Strike 3! Game Over: You have made too many mistakes.');
                    resetGame();
                }
            }
            resetSelection();
        } else {
            alert('Please select exactly 4 tiles to submit a guess.');
        }
    }

    function resetSelection() {
        selectedTiles.forEach(tile => {
            if (tile.style.backgroundColor !== 'green') {
                tile.classList.remove('selected');
            }
        });
        selectedTiles = [];
        updateSubmitButton();
    }

    function resetGame() {
        mistakes = 0;
        document.getElementById('mistakeCounter').textContent = 'Mistakes: 0';
        setupTiles();
    }

    setupTiles();  // Initialize the game
});

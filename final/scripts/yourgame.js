// Get games data and find the best match for the user
async function displayYourGame() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);

    // Fetch games data
    const response = await fetch('./data/games.json');
    const data = await response.json();
    const games = data.games;

    // Create array to store games with their scores
    let scoredGames = [];

    // Score each game based on user preferences
    games.forEach(game => {
        let score = 0;

        // Check genre match
        if (params.has('genre') && game.genre.toLowerCase() === params.get('genre').toLowerCase()) {
            score += 3;
        }

        // Check feeling match
        if (params.has('feeling') && game.feeling.toLowerCase() === params.get('feeling').toLowerCase()) {
            score += 3;
        }

        // Check multiplayer preference
        if (params.has('multiplayer') && game.multiplayer.toLowerCase() === params.get('multiplayer').toLowerCase()) {
            score += 2;
        }

        // Check platform match
        if (params.has('platform') && game.platform.toLowerCase() === params.get('platform').toLowerCase()) {
            score += 2;
        }

        // Check preference match
        if (params.has('preference') && game.preference.toLowerCase() === params.get('preference').toLowerCase()) {
            score += 3;
        }

        // Only add games with at least one match
        if (score > 0) {
            scoredGames.push({ game, score });
        }
    });

    // Sort by score (highest first)
    scoredGames.sort((a, b) => b.score - a.score);

    // Get top 3 games (or fewer if not enough matches)
    const topGames = scoredGames.slice(0, 3);

    // If no matches found, select a random game from all games
    let selectedGame;
    if (topGames.length === 0) {
        selectedGame = games[Math.floor(Math.random() * games.length)];
    } else {
        // Select random game from top 3
        selectedGame = topGames[Math.floor(Math.random() * topGames.length)].game;
    }

    // Display the selected game
    displayGame(selectedGame);
}

// Function to display game information in the HTML
function displayGame(game) {
    document.getElementById('logo').src = game.logo;
    document.getElementById('logo').alt = game.name + " logo";
    document.getElementById('logo').width = 533;
    document.getElementById('logo').height = 300;
    document.getElementById('name').textContent = game.name;
    document.getElementById('genre').textContent = `Genre: ${game.genre}`;
    document.getElementById('multiplayer').textContent = `Multiplayer: ${game.multiplayer}`;
    document.getElementById('description').textContent = game.description;
}

// Call the function when the page loads
displayYourGame();

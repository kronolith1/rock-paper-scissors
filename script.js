let playerWins = 0;
let computerWins = 0;
let round = 0;

function startGame(e) {
    // Get the ID of the clicked button, which corresponds with the player's choice
    let playerSelection = this.id;

    // Get the computer's play and the result (who won)
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    // If it's the first round, we'll have to make some DOM changes first
    if (round === 0) {
        changeFirstRoundDivs();
    };

    // Show the choices both players made
    document.getElementById('player-img').src = `images/${playerSelection}.png`;
    document.getElementById('computer-img').src = `images/${computerSelection}.png`;

    // Let's see who won this round!
    if (result == 'computerWins') {
        document.getElementById('who-won-message').textContent = 'AI won this round!';
    } else if (result == 'playerWins') {
        document.getElementById('who-won-message').textContent = 'You won this round!';
    } else {
        document.getElementById('who-won-message').textContent = "That's a draw!";
    };

    // Update the scoreboard
    document.getElementById('player-score-count').textContent = playerWins;
    document.getElementById('computer-score-count').textContent = computerWins;

    // If either the player or computer won 5 times, we have a winner!
    if (playerWins === 5 || computerWins === 5) {
        changeWinnerDivs();
    };

    round++;
};

function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];

    return plays[Math.floor(Math.random() * plays.length)];
};

function changeFirstRoundDivs() {
    document.getElementById('start-message').style.display='none';
    document.getElementById('banner-message').style.display='inline';
    document.getElementById('player-choice').style.visibility='visible';
    document.getElementById('computer-choice').style.visibility='visible';
    document.getElementById('playerscore').style.visibility='visible';
    document.getElementById('computerscore').style.visibility='visible';
};

function changeWinnerDivs() {
    document.getElementById('player-choice').style.visibility='hidden';
    document.getElementById('computer-choice').style.visibility='hidden';
    document.getElementById('round-won-message').style.visibility='hidden';
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    if (playerWins === 3) {
        document.getElementById('winner-banner').textContent = `Congrats! You won!
            Click the button to play again.`;
    } else {
        document.getElementById('winner-banner').textContent = `Too bad! You lost!
            Click the button to try again...`;
    };

    document.getElementById('we-have-a-winner').style.visibility='visible';
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'draw';
    };

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            computerWins++;
            return 'computerWins';
        } else {
            playerWins++;
            return 'playerWins';
        }
    };

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            computerWins++;
            return 'computerWins';
        } else {
            playerWins++;
            return 'playerWins';
        }
    };

    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection == 'rock') {
            computerWins++;
            return 'computerWins';
        } else {
            playerWins++;
            return 'playerWins';
        }
    };
};


const buttons = document.querySelectorAll('input');
buttons.forEach(button => button.addEventListener('click', startGame));
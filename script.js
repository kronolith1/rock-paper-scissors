const buttons = document.querySelectorAll('input');
buttons.forEach(button => button.addEventListener('click', game));

function showRoundBanner(round) {
    document.getElementById('roundBannerMsg').style.display="inline";
}

function playerPlay(e) {
    let playerChoice;
    if (e === 'rock-button') {
        playerChoice = 'rock';
    } else if (e === 'paper-button') {
        playerChoice = 'paper';
    } else {
        playerChoice = 'scissors';
    }

    return playerChoice;
};

function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];

    return plays[Math.floor(Math.random() * plays.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Draw! Nobody wins this round!';
    }

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Computer wins!'
            computerWins++;
        } else {
            return 'You win!'
            playerWins++;
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection == 'rock') {
            return 'Computer wins!'
            computerWins++;
        } else {
            playerWins++;
            return 'You win!'
        }
    }
}

function game(e) {
    let clickedButton = this.id;
    let playerWins = 0;
    let computerWins = 0;
    let round = 0;

    showRoundBanner(round);
    
    const computerSelection = computerPlay();
    const playerSelection = playerPlay(clickedButton);

    console.log(playerSelection);
    console.log(computerSelection);
    const result = playRound(playerSelection, computerSelection);

    if (result == 'Computer wins!') {
        computerWins++;
        document.getElementById('computerWonMsg').style.display="inline";
    } else if (result == 'You win!') {
        playerWins++;
        document.getElementById('playerWonMsg').style.display="inline";
    }

    console.log(`Round - Computer: ${computerSelection}, You: ${playerSelection}. ${result}
    Total score - Computer: ${computerWins}, You: ${playerWins}`)

    document.getElementById('rock-button').disabled="true";
    document.getElementById('startmessage').style.display="none";
    document.getElementById('playerChoice').style.visibility="visible";
    document.getElementById('computerChoice').style.visibility="visible";
    document.getElementById(`${playerSelection}-player-img`).style.display="inline";
    document.getElementById(`${computerSelection}-computer-img`).style.display="inline";
    
}

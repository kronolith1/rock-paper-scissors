const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playerPlay));

function playerPlay(e) {
    switch (this.id) {
        case 'rock-button':
            const playerSelection = 'rock';
            console.log(playerSelection);
    };
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
            return 'You win!'
            playerWins++;
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    
    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);

    if (result == 'Computer wins!') {
        computerWins++;
    } else if (result == 'You win!') {
        playerWins++;
    }

    console.log(`Round - Computer: ${computerSelection}, You: ${playerSelection}. ${result}
    Total score - Computer: ${computerWins}, You: ${playerWins}`)
    
}

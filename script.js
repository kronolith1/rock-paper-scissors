const buttons = document.querySelectorAll('input');
buttons.forEach(button => button.addEventListener('click', playerPlay));


function playerPlay(e) {
    let playerSelection;
    if (this.id === 'rock-button') {
        playerSelection = 'rock';
    } else if (this.id === 'paper-button') {
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }
    document.getElementById('startmessage').style.visibility="hidden";
    console.log(playerSelection)
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

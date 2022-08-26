let selectionHandle;
let pScore = 0;
let cScore = 0;
let maxScore = 0;
let computer;
startGame();

function startGame() {
    for (let i = 0; i < 5; i++) {
        let resultFlag = 'draw';
        while (resultFlag === 'draw') {
            let playerSelection = prompt('Rock, Scissors or Paper?');
            validateInput(playerSelection);
            getComputerChoice();
            let result = playRound(selectionHandle, computer);
            if (result != 'draw') {
                resultFlag = result;
            }
            else {
                outputResults(resultFlag, selectionHandle, computer);
            }
        }
        outputResults(resultFlag, selectionHandle, computer);
    }
}



function outputResults(result, playerSelection, computerSelection) {
    if (result === "win") { pScore += 1; }
    else if (result === "lose") { cScore += 1; }

    if (pScore > cScore) {
        maxScore = pScore;
    } else {
        maxScore = cScore;
    }

    // Show Round Result
    alert(`${result.toUpperCase()}:\nPlayer: ${playerSelection}\nComputer: ${computerSelection}\n\nSCORE:\nPayer: ${pScore} Computer: ${cScore}`);
    document.getElementById("gameResults").innerHTML = `${result.toUpperCase()}:\nPlayer: ${playerSelection}\nComputer: ${computerSelection}`;

    // Print Running score on page
    document.getElementById("pTotal").innerHTML = pScore;
    document.getElementById("cTotal").innerHTML = cScore;

    return result
}


function validateInput(playerSelection) {
    selectionHandle = playerSelection.toLowerCase().substr(0, 1);
    if (selectionHandle === 'r' || selectionHandle === 'p' || selectionHandle === 's') { return selectionHandle; }
    else {
        selectionHandle = "";
        playerSelection = prompt('INVALID INPUT... Try again: \nRock, Scissors or Paper?');
        validateInput(playerSelection);
    }
}


function playRound(pChoice, cChoice) {
    if (pChoice === cChoice) {
        return 'draw';
    }
    else if ((pChoice === 'r' && cChoice === 's') ||
        (pChoice === 'p' && cChoice === 'r') ||
        (pChoice === 's' && cChoice === 'p')) {
        return "win";
    }
    else {
        return "lose";
    }
}


function getComputerChoice() {

    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            computer = 'r';
            break;
        case 1:
            computer = 's';
            break;
        case 2:
            computer = 'p';
            break;
        default:
            computer = 'Something went wrong!';
            break;
    }
    return computer;
}




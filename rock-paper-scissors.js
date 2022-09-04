let firstRound = true
let lastRound = false;
let selectionString = 'Rock';

const displayBox = document.querySelector('#displayBox');
const handResults = document.createElement('p');
const handResults2 = document.createElement('p');
const handResults3 = document.createElement('p');
const handResults4 = document.createElement('p');
const handResults5 = document.createElement('button');
const playerBoxDisplay = document.createElement('p');
const computerBoxDisplay = document.createElement('p');
const plScoreResults = document.createElement('p');
const coScoreResults = document.createElement('p');
const buttons = document.querySelectorAll('button');
const e = document.querySelector("#buttons"); 

start();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        beginGame(button.id);

        if (playerScore > 4 || computerScore > 4){
            
            endGame(computerScore, playerScore);
            start();
        }
    })
});

function start(){
    if (firstRound){ 
        initializeGame ();
        firstRound = false;        
    } 
    if (lastRound) {
        lastRound = false
        start()
    }
}

function initializeGame (){
    let playerChoice = '✊';
    let computerSelection = '✊';
    playerScore = 0; computerScore = 0;
    displayInitializedScreen(playerChoice, computerSelection)
}

function displayInitializedScreen(playerChoice, computerSelection) {
    
    handResults.classList.add('handResults');
    handResults2.classList.add('handResults2');
    coScoreResults.classList.add('coScoreResults');
    playerBoxDisplay.classList.add('playerBoxDisplay');
    computerBoxDisplay.classList.add('computerBoxDisplay');

    handResults.textContent = ("");
    handResults2.textContent = ("");
    plScoreResults.textContent = ("0");
    coScoreResults.textContent = ("0");
    playerBoxDisplay.textContent = (`${playerChoice}`);
    computerBoxDisplay.textContent = (`${computerSelection}`);

    plScoreResults.setAttribute("style", "color: rgb(18, 193, 228);");
    coScoreResults.setAttribute("style", "color: rgb(18, 193, 228);");

    displayBox.appendChild(handResults);
    displayBox.appendChild(handResults2);
    plScore.appendChild(plScoreResults);
    coScore.appendChild(coScoreResults);
    playerBox.appendChild(playerBoxDisplay);
    computerBox.appendChild(computerBoxDisplay); 
}

function beginGame(playerSelection) {
    getComputerSelection();
    let roundResult = getRoundResult(playerSelection, computerSelection);
    
    if (roundResult === 'WIN'){
        playerScore += 1;
        resultsDisplayString2 = (`${emojiToString(playerSelection)} Beats ${emojiToString(computerSelection)}`)
    } 
    else if (roundResult === 'LOOSE'){
        computerScore += 1;
        resultsDisplayString2 = (`${emojiToString(computerSelection)} Beats ${emojiToString(playerSelection)}`)
    }
    else { // if DRAW
        resultsDisplayString2 = (`Replay Hand!`)
    }
    resultsDisplayString = (`${roundResult}:`);
    displayResults(playerSelection, computerSelection, resultsDisplayString, resultsDisplayString2);
    myMove(playerSelection, computerSelection);
}

function getComputerSelection() {
    let compSelection = Math.floor(Math.random() * 3);
    switch (compSelection) {
        case 0:
            computerSelection = '✊';
            return computerSelection;        
        case 1:
            computerSelection = '✌';
            return computerSelection;        
        case 2:
            computerSelection = '✋';
            return computerSelection;        
        default:
            computerSelection = 'Something went wrong!';
            return computerSelection;    
    }
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'DRAW';
    }
    else if ((playerSelection === '✊' && computerSelection === '✌') ||
        (playerSelection === '✋' && computerSelection === '✊') ||
        (playerSelection === '✌' && computerSelection === '✋')) {
        return "WIN";
    }
    else {
        return "LOOSE";
    }
}

function displayResults(playerSelection, computerSelection, resultsDisplayString, resultsDisplayString2) {  
    handResults.textContent = (resultsDisplayString);
    handResults2.textContent = (resultsDisplayString2);
    plScoreResults.textContent = (playerScore);
    coScoreResults.textContent = (computerScore);
    playerBoxDisplay.textContent = (`${playerSelection}`);
    computerBoxDisplay.textContent = (`${computerSelection}`);
}

function emojiToString(selection){
    switch(selection) {
        case '✊':
            selectionString = 'Rock';
            break;
        case '✋':
            selectionString = 'Paper';
            break;
        case '✌':
            selectionString = 'Scissors';
            break;
        default:
            selectionString = 'ERROR';
    }
    return selectionString
}

function myMove(playerSelection, computerSelection) {
    playerBoxDisplay.textContent = '✊';
    computerBoxDisplay.textContent = '✊';
    let id = null;
    const playerBoxElement = document.getElementById("playerBox");
    const computerBoxElement = document.getElementById("computerBox");
    let bumpCounter = 0;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() { 
        if (bumpCounter == 3) {
            playerBoxDisplay.textContent = (`${playerSelection}`);
            computerBoxDisplay.textContent = (`${computerSelection}`);
            clearInterval(id);
        }
        else{
            playerBoxDisplay.textContent = '✊';
            computerBoxDisplay.textContent = '✊';
            
            while (pos >= -100) {
                pos -= 1; 
                playerBoxElement.style.top = pos + "px";
                computerBoxElement.style.top = pos + "px";
                Thread.sleep(5);  
            }

            while (pos <= 0){
                pos += 10;
                playerBoxElement.style.top = pos + "px";
                computerBoxElement.style.top = pos + "px";
            }
            bumpCounter += 1;
        }
    }
}

function endGame(computerScore, playerScore) { 
    let gameScore = (playerScore > computerScore) ? 'WON' : 'LOST'
    resultsDisplayString = (`Game Over\nYOU ${gameScore}!!`);
    resultsDisplayString2 = (`YOU: ${playerScore}     COMPUTER: ${computerScore}`);
    outputEndResults(resultsDisplayString, resultsDisplayString2);
}

function outputEndResults(resultsDisplayString, resultsDisplayString2) {
    let playAgainButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode("PLAY AGAIN?");
    playAgainButton.appendChild(buttonText);

    handResults3.textContent = (resultsDisplayString);
    handResults4.textContent = (resultsDisplayString2);
    
    handResults3.classList.add('handResults3');
    handResults4.classList.add('handResults4');
    playAgainButton.classList.add('playagain');
 
    displayBox.appendChild(handResults3);
    displayBox.appendChild(handResults4);
    displayBox.appendChild(playAgainButton);
    
   e.style.display = 'none';
   
    playAgainButton.addEventListener ("click", function(){
        displayBox.removeChild(handResults3);
        displayBox.removeChild(handResults4);
        displayBox.removeChild(playAgainButton);
        firstRound = true
        e.style.display = 'block';
        start();
        });
}

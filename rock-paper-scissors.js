let selectionHandle;
let computer;
let pScore;
let cScore;

startGame()

    
//     let cScore = 0; 
//     let pScore = 0;
//     let maxScore = 0;
    // while (maxScore < 6) {
    //     playRound();
    //     if (result === "WIN") 
    //     {pScore += 1 ;}
    //     else if (result === "LOSE") 
    //     {cScore += 1 ;}

    //     if (pScore > cScore){
    //         maxScore = pScore;
    //     } else {
    //         maxScore = cScore;
    //     }
    // }
  //adding 'p' tag to body


//   let element = document.getElementsByTagName("body")[0];
//   element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
// }


function startGame(){

    let playerSelection = prompt('Rock, Scissors or Paper?');
    validateInput(playerSelection);
    getComputerChoice();
    let result = playRound(selectionHandle, computer);
    outputResults(result, selectionHandle, computer);

}

function outputResults(result, playerSelection, computer) {
    console.log("Player: " + selectionHandle + " " + "Computer: " + computer);
    if (confirm(`${result.toUpperCase()}:\nPlayer: ${playerSelection}\nComputer: ${computer}\n\n------ PLAY AGAIN? ------`))
    {startGame()}
}

function validateInput(playerSelection){
    selectionHandle = playerSelection.toLowerCase().substr(0,1);
        if (selectionHandle === 'r' || selectionHandle === 'p' || selectionHandle === 's') 
        { return selectionHandle; }
        else {
            selectionHandle = "";
            playerSelection = prompt('INVALID INPUT... Try again: \nRock, Scissors or Paper?');
            validateInput(playerSelection);
        }
}


function playRound(pChoice, cChoice){
    if (pChoice === cChoice) {
        return 'draw';
    }
    else if  ((pChoice === 'r' && cChoice === 's') ||
        (pChoice === 'p' && cChoice === 'r') ||
        (pChoice === 's' && cChoice === 'p')){
        return "win";
        }
    else {
        return "lose";
    }
}


 function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3 + 1);
    switch (compChoice) {
        case 1: 
            computer = 'r';
            break;
        case 2: 
            computer = 's';
            break;
        case 3: 
            computer = 'p';
            break;
        default:
            computer = 'Something went wrong!';
            break;
    }
    return computer;
}




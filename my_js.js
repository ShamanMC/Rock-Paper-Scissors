console.log("ola kala2");

function computerPlay()
{
    let chance=Math.random();
    if (chance<0.33)
        {return "rock";}
    else if (chance>=0.33 && chance<0.66)
        {return "paper";}
    else (chance>0.66) 
        {return "scissors";}
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if (playerSelection==="rock"){
        if (computerSelection==="rock") return "It's a draw!";
        else if (computerSelection==="scissors") return "You win!";
        else return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection==="scissors"){
        if (computerSelection==="scissors") return "It's a draw!";
        else if (computerSelection==="paper") return "You win!";
        else return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="paper") return "It's a draw!";
        else if (computerSelection==="rock") return "You win!";
        else return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

/*let playerSelection="rock";
let computerSelection=computerPlay();

console.log(playRound(playerSelection,computerSelection));*/

function game(){
    let player=0;
    let computer=0;
    for (i=0;i<5;i++){
        let userInput = prompt("Rock, Paper, Scissors??!");
        let playerSelection=userInput.toLocaleLowerCase();
        let computerSelection=computerPlay();
        if(playRound(playerSelection,computerSelection)==="You win!") {
            console.log("You win this round!")
            player++;
        }
        else if(playRound(playerSelection,computerSelection)===`You lose! ${computerSelection} beats ${playerSelection}`){
            console.log("You lose this round!");
            computer++;}
        else console.log("Draw!");
        console.log (`Player=${player} VS Computer=${computer}`);
    }
}

game();
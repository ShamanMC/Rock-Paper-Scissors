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
let computerSelection=computerPlay();
let playerSelection;

document.getElementById("Rock").addEventListener("click", function(){game("rock",computerPlay());});
document.getElementById("Paper").addEventListener("click", function(){game("paper",computerPlay());});
document.getElementById("Scissors").addEventListener("click", function(){game("scissors",computerPlay());});

//console.log(computerPlay());

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

//let playerSelection="rock";


//console.log(playRound(playerSelection,computerSelection));
let player=0;
let computer=0;

function game(playerSelection, computerSelection){
    
        
        if(playRound(playerSelection,computerSelection)==="You win!") {
            console.log("You win this round!");
            document.getElementById("results").innerHTML="You win this round!";
            player++;
        }
        else if(playRound(playerSelection,computerSelection)===`You lose! ${computerSelection} beats ${playerSelection}`){
            console.log("You lose this round!");
            document.getElementById("results").innerHTML="You lose this round!";
            computer++;}
        else {console.log("Draw!");
        document.getElementById("results").innerHTML="Draw!";}

        console.log (`Player=${player} VS Computer=${computer}`);
        document.getElementById("results2").innerHTML=`Player=${player} VS Computer=${computer}`;
    
    if (player==5) {
        document.getElementById("results").innerHTML="You win the game!! WoW!! So GoOd pLaYeR!";
        document.getElementById("results2").innerHTML="";
        computer=player=0;
    }
    if (computer==5) {
            document.getElementById("results").innerHTML="You LOSE the game!! hAhAaAA Computer is smarter than you!";
            document.getElementById("results2").innerHTML="";
            
    }

    else if (player<computer) console.log("You lose!");
    else console.log("It's a draw");
}

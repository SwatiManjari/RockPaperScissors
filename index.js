const choices=["rock","paper","scissors"];

const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const scoreDisplay=document.getElementById("scoreDisplay");
var score=0;
function playGame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice)
    {
        result="It's a TIE!";
    }
    else if((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper"))
    {
        result="You Win!";
        score+=1;
    }
    else
    {
        result="You Lost";
    }
    playerDisplay.textContent=`Player:${playerChoice}`;
    computerDisplay.textContent=`Computer:${computerChoice}`;
    resultDisplay.textContent=result;
    scoreDisplay.textContent=`Score:${score}`;
}
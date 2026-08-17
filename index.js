const choices=["rock","paper","scissors"];

const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

function playGame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice)
    {
        result="It's a TIE!";
    }
    else
    {
        switch(playerChoice){
        case "rock":
            result=(computerChoice==="scissors")?"You Win!":"You Lost!";
            break;
        case "paper":
            result=(computerChoice==="rock")?"You Win!":"You Lost";
            break;
        case "scissors":
            result=(computerChoice==="paper")?"You Win!":"You Lost";
            break;
    }
    }
    playerDisplay.textContent=`Player:${playerChoice}`;
    computerDisplay.textContent=`Computer:${computerChoice}`;
    resultDisplay.textContent=result;
}
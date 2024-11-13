


function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function GetComputerChoice(){
    return GetRandomInt(3)
}
function GetHumanChoice(){
    let HumanAnswer = prompt("Choose Between Rock, Paper and Scissors");
    let HumanInt = 0;
    if(HumanAnswer === "Rock"){
        HumanInt = 0;
    } else if(HumanAnswer === "Paper"){
        HumanInt = 1;
    } else if(HumanAnswer === "Scissors"){
        HumanInt = 2;
    }
    return HumanInt;
}
let HumanScore = 0, ComputerScore = 0;

function PlayRound(HumanAnswer, ComputerAnswer){
    if(HumanAnswer === ComputerAnswer){
        return 0; // draw
    }
    if(HumanAnswer === 0){ //Om Piatra
        if(ComputerAnswer === 1){
            return -1; //ComputerWins
        } else if(ComputerAnswer === 2){
            return 1; //Human Wins
        }
    } else if(HumanAnswer === 1){ // Om Hartie
        if(ComputerAnswer === 2){ // Computer Foarfeca
            return -1; // Computer Wins
        } else if(ComputerAnswer === 0){ //Computer Piatra
            return 1; // Human Wins
        }
    } else if(HumanAnswer === 2){
        if(ComputerAnswer === 0) {
            return -1; // Computer Wins
        } else if(ComputerAnswer === 1){
            return 1; // Human Wins;
        }
    }
}
function playGame(){
    let HumanScore = 0, ComputerScore = 0;
    for (let index = 1; index <= 5; index++) {
        let HumanAnswer = Number(GetHumanChoice());
        let ComputerAnswer = Number(GetComputerChoice());
        //console.log(`The game is played as : ${HumanAnswer}, ${ComputerAnswer}`);
        let winner = Number(PlayRound(HumanAnswer, ComputerAnswer));
        //console.log(`The winner is ${winner}`);
        //console.log(winner);
        if(winner === 0){
            HumanScore++;
            ComputerScore++;
            console.log("You tied");
        } else if(winner === 1){
            console.log("Human won");
            HumanScore++;
        } else if(winner === -1){
            console.log("Computer Won");
            ComputerScore++;
        }
    }
    if(HumanScore === ComputerScore){
        console.log(`Draw , ${HumanScore} - ${ComputerScore}`);
    } else if(HumanScore > ComputerScore){
        console.log(`You won , ${HumanScore} - ${ComputerScore}`);
    } else if(HumanScore < ComputerScore){
        console.log(`You lost , ${ComputerScore} - ${HumanScore}`);
    }
    
    
}
playGame();


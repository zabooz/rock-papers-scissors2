let playerCount = 0;
let computerCount = 0;
let roundCount = 0;



getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    const rng = Math.floor(Math.random()*3);
    return choices[rng];
};

singleRound = (playerSelection,computerSelection) => {
    
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    
    if(player === computer){
        console.log('It/s a draw');
        
    }else if(player === 'rock' && computer === 'scissors' ||
    player === 'paper' && computer === 'rock' ||
    player === 'scissors' && computer === 'paper'){
        console.log('You won');
        playerCount++
    }else{
        computerCount++
        console.log('you lose');
    }

    roundCount++
};
game = () => {
    const playerSelection = prompt('Enter your Choice(Rock,Paper, Scissors)')
    
    singleRound(playerSelection,getComputerChoice())
    
    console.log(playerCount, computerCount)

    if(roundCount === 5){

        if(playerCount === computerCount){
            console.log('it\'s a draw')
        }else if(playerCount > computerCount){
            console.log('You won the game')
        }else{
            console.log('You lost the game')
        }

    }else{
        game()
    }
}





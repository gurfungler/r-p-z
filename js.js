function game()
{
//make user choice
let userChoice = '';
//make computer choice
let compChoice = '';
//make win/loss/tie counter
let win = 0;
let loss = 0;
let tie = 0;
//loop start with counter < 5
for(let i = 1; i <=5; i++)
{
//ask user for rock paper scizor store user choice

userChoice = getUserChoice();
//get random computer choice
compChoice = getCompChoice();
//compare choices
let winLoss = compareChoices(userChoice, compChoice)
switch (winLoss)
{
    case 0:
        console.log('it\' a tie!')
        tie += 1;
        break;
    case 1:
        console.log('it\'s a win!')
        win += 1;
        break;
    case 2:
        console.log('it\'s a loss!');
        loss += 1;
        break;
}
//display win/loss
console.log(`win: ${win}, loss: ${loss}, tie: ${tie}`);
//loop
}
}
//get computer choice
function getCompChoice()
{
    let rando = Math.floor(Math.random() * 3);
    switch(rando)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';

    }
}
//get 
function getUserChoice()
{
    let check = true;
    while(check)
    {
        let userChoice = (prompt('Rock, Paper, Scissor?')).toLowerCase();
        if(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissor')
        {
            return userChoice;
        }
        console.log('Gotta enter Rock, Paper, Or Scissor');
    }
}

function compareChoices(userChoice, compChoice)
{
    if(userChoice == compChoice)
    {
        return 0;
    }
    if((userChoice == 'rock' && compChoice == 'scissor') || (userChoice == 'scissor' && compChoice == 'paper') || (userChoice == 'paper' && compChoice == 'rock'))
    {
        return 1;
    }
    return 3;
}










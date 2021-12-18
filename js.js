/*
make user choice
make computer choice
make win/loss/tie counter
see if win/loss == 5
listen for button click for user choice
get random computer choice
compare choices
display win/loss
update winloss
*/


let win = 0;
let loss = 0; 
let tie = 0;


const buttons = document.querySelectorAll('button');
const winLoss = document.querySelector('#winLoss');
const counter = document.createElement('div');

winLoss.appendChild(counter);
buttons.forEach((button) => {  button.addEventListener('click', playGame);});

function playGame()
{
    let winOrLose = compareChoices(this.id, getCompChoice())
    switch (winOrLose)
    {
        case 0:
            tie += 1;
            break;
        case 1:
            win += 1;
            break;
        case 2:
            loss += 1;
            break;
    }
    UpdateCounter();
}

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

function UpdateCounter()
{
    counter.textContent = `win: ${win}, loss: ${loss}, tie: ${tie}`;

    if(win == 5)
    {
        counter.textContent = `You beat the computer!`;
        win = 0;
        loss = 0;
        tie = 0;
    }
    else if(loss == 5)
    {
        counter.textContent = `You lost to the computer`;
        win = 0;
        loss = 0;
        tie = 0;
    }
    return;
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
    return 2;
}

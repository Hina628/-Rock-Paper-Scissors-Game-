
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const msg = document.getElementById("msg");
const rock = document.querySelectorAll("img")[0];
const paper = document.querySelectorAll("img")[1];
const scissors = document.querySelectorAll("img")[2];

let userScoreVal = 0;
let compScoreVal = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}


function win(userChoice, computerChoice) {
    userScoreVal++;
    userScore.innerText = userScoreVal;
    msg.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
}

function lose(userChoice, computerChoice) {
    compScoreVal++;
    compScore.innerText = compScoreVal;
    msg.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
}

function draw(userChoice, computerChoice) {
    msg.innerText = `It's a draw! You both chose ${userChoice}.`;
}

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));


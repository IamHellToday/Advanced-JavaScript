let newGameBtn = document.getElementById('js-newGameButton');
debugger;
newGameBtn.addEventListener('click', newGame);

let pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');
debugger;
pickRock.addEventListener('click', function(){
    playerPick('rock')
});
pickPaper.addEventListener('click', function(){
    playerPick('paper')
});
pickScissors.addEventListener('click', function(){
    playerPick('scissors')
});
debugger;
//region Starting values
let gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//endregion
debugger;
//variables showing parts of game elements
let newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
debugger;
function setGameElements(){
    switch(gameState){
        case 'started':
                newGameElem.style.display = 'none';
                pickElem.style.display = 'block';
                resultsElem.style.display = 'block';
            break;
        case 'ended':
                newGameBtn.innerText = 'Once again';
        case 'notStarted':
        default:
                newGameElem.style.display = 'block';
                pickElem.style.display = 'none';
                resultsElem.style.display = 'none';
    }
}
setGameElements();
debugger;
let playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
debugger;
function newGame(){
    player.name = prompt(`Please, share with me your name, 'imię gracza'`);
    if(player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

    playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}
debugger;
function playerPick(playerPick){
    console.log(playerPick);
}
debugger;
let playerPickElem = document.getElementById('js-playerPick'),  // nazwa zmiennej z dużej litery -> pozniej odwołujesz sie do niej z małej (dlatego masz błąd). Poza tym sprawdź czy ten element jest prawidłowo pobierany z DOM

    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
debugger;
function getComputerPick (){
    let possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
debugger;
function checkRoundWinner(playerPick, computerPick){
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';   // Nieprawidłowa nazwa właściwości (literówka)

    let winnerIs = 'player';

        if (playerPick == computerPick){
            winnerIs = 'noone';
        }
        else if (
            (computerPick == 'rock' && playerPick =='scissors') ||
            (computerPick == 'scissors' && playerPick =='paper') ||
            (computerPick == 'paper' && playerPick == 'rock')) {
            winnerIs = 'computer';
        }

        if (winnerIs == 'player'){
            playerResultElem.innerHTML = 'WIN!';
            player.score++;
        }
        else if (winnerIs == 'computer') {
            computerResultElem.innerHTML = 'WIN!'  // Nieprawidłowa nazwa właściwości (literówka)
            computer.score++;
        }
}
debugger;
function playerPick(playerPick) {
    let computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}
debugger;
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
debugger;
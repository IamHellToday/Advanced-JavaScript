
//region New Game button
let newGameBtn = document.getElementById('js-newGameButton');
//endregion

newGameBtn.addEventListener('click', newGame);

//region Player buttons
let pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');
//endregion

//region Listeners of choice
pickRock.addEventListener('click', function(){
    playerPick('rock')
});
pickPaper.addEventListener('click', function(){
    playerPick('paper')
});
pickScissors.addEventListener('click', function(){
    playerPick('scissors')
});
//endregion

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

//region variables showing parts of game elements
let newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
//endregion

//region Game State
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
                newGameElem.style.display = 'block';
                pickElem.style.display = 'none';
                resultsElem.style.display = 'none';
    }
}
//endregion

//Function of game layout
setGameElements();
//region New Game
let playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame(){
    player.name = prompt('Please, share with me your name :)');
    if(player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

    playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}
//endregion

//region Player pick
function playerPick(playerPick){
    console.log(playerPick);
}
//endregion

//region Computer pick
function getComputerPick (){
    let possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
//endregion

//region Picks - variables and functions
let playerPickElem = document.getElementById('js-playerPick'),  // nazwa zmiennej z dużej litery -> pozniej odwołujesz sie do niej z małej (dlatego masz błąd). Poza tym sprawdź czy ten element jest prawidłowo pobierany z DOM
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    let computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}
//endregion

//region Game mechanics
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
            playerResultElem.innerHTML = "Win!";
            player.score++;
        }
        else if (winnerIs == 'computer') { // Nieprawidłowa nazwa właściwości (literówka)
            computerResultElem.innerHTML = "Win!";
            computer.score++;
        }
        setGamePoints();
        if (player.score == 10 || computer.score == 10) {
            endGame();
        }
}	
//endregion

//region Game points update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
//endregion 
function endGame(){
    gameState = 'ended';
    setGameElements();
    let winner = function(){
        if(player.score == 10){
            return player.name
        }
        else{
            return computer
        }
    }
    alert(`And the winner is ${winner}`)
}
//region Finish

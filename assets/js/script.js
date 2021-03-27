document.addEventListener('DOMContentLoaded', () => {

    let userPattern = [];
    let gamePattern = [];
    let buttonArray = [];

    let startBtn = document.getElementById('start')
    let gameBtn = document.getElementsByClassName('gameButtons');

    for (buttons of gameBtn) {
     buttonArray.push(buttons);
}

function gamesTurn() {
    let gamesChoice = buttonArray(Math.floor(Math.random() * buttonArray.length))

    console.log(gamesChoice)
}





});
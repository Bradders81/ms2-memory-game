document.addEventListener('DOMContentLoaded', () => {

    let startBtn = document.getElementById('start');

    let userPattern = []; //Array to store the selections by the gamesTurn function
    let gamePattern = []; //Array to sore the selections by the usersTurn function
    const buttonArray = []; //Array to hold games buttons for the game to chose from randomly
    const soundArray = [{ name: 'beep1', sound: 'assets/sounds.beep1.wav' }, { name: 'beep2', sound: 'assets/sounds.beep2.mp3' }, { name: 'beep3', sound: 'assets/beep3.wav' },
    { name: 'beep4', sound: 'assets/sound/beep4.wav' }];


    //gets the game buttons and pushes them into the buttonArray
    let gameBtn = document.getElementsByClassName('gameButtons');
    for (buttons of gameBtn) {
        buttonArray.push(buttons);
    }

    //Creates audio elements and links to audio files sorted in soundArray
    function createSoundElements() {
        for (let i = 0; i < soundArray.length; i++) {
            sound = document.createElement('audio')
            sound.id = i;
            sound.src = soundArray[i].sound;
        }
    };


    function startGame() {

    }

    //updates the gamePattern array
    function gamesTurn() {
        let gamesChoice = buttonArray[Math.floor(Math.random() * buttonArray.length)]; //Credit: this line taken from https://www.kirupa.com/html5/picking_random_item_from_array.htm
        gamePattern.push(gamesChoice);

    }



    //Checks what the user clicked and updates userPattern array
    for (buttonsClicked of gameBtn) {
    buttonsClicked.addEventListener("click", function () {
        let userChoice = this.getAttribute('id');
        userPattern.push(userChoice)
        console.log(userPattern)
    });
}


});



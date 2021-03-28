

document.addEventListener('DOMContentLoaded', () => {

    let startBtn = document.getElementById('start');
    let userPattern = []; //Array to store the selections by the gamesTurn function
    let gamePattern = []; //Array to sore the selections by the usersTurn function
    const buttonArray = []; //Array to hold games buttons for the game to choose from randomly


    //gets the game buttons and pushes them into the buttonArray
    let gameBtn = document.getElementsByClassName('gameButtons');
    for (buttons of gameBtn) {
        buttonArray.push(buttons);
    }




    //Plays sound when game buttons pressed/selected
    function sound(pressed) {
        if (pressed == 'btn-green') {
            beep1 = new Audio('assets/sounds/beep1.wav');
            beep1.play()
        } else if (pressed == 'btn-blue') {
            beep2 = new Audio('assets/sounds/beep2.mp3');
            beep2.play()
        } else if (pressed == 'btn-purple') {
            beep3 = new Audio('assets/sounds/beep3.wav');
            beep3.play()
        } else if (pressed == 'btn-red'); {
            beep4 = new Audio('assets/sounds/beep4.wav');
            beep4.play()
        }
    }

    function roundCounter(num) {
        let roundDiv = document.getElementById('roundCounter');
        let roundSpan = document.createElement('span');
        roundSpan.id = 'round';
        roundSpan.innerHTML= (num)
        roundDiv.appendChild(roundSpan)
    }

    function startGame() {
        userPattern = [];
        gamePattern = [];
        //PLACEHOLDER: play start game sound
        gamesTurn()

    }

    //updates the gamePattern array
    function gamesTurn() {
        let gamesChoice = buttonArray[Math.floor(Math.random() * buttonArray.length)]; //Credit: this line taken from https://www.kirupa.com/html5/picking_random_item_from_array.htm
        gamePattern.push(gameChoice);
    }

    // function displayGamesPattern()

    //Checks what the user clicked and updates userPattern array.  Also makes button clicked flash to user.
    for (buttonsClicked of gameBtn) {
        buttonsClicked.addEventListener("click", function () {
            userPattern.push(buttonsClicked)
            clickedBtnID = this.id
            sound(clickedBtnID)
            this.style.backgroundColor = 'rgb(250, 250, 250)' //Shade of white
            setTimeout(function () {
                if (clickedBtnID === 'btn-green') {
                    changeBack = document.getElementById("btn-green")
                    changeBack.style.backgroundColor = 'rgb(19, 226, 36)'; //green
                }
                else if (clickedBtnID === 'btn-blue') {
                    changeBack = document.getElementById("btn-blue")
                    changeBack.style.backgroundColor = 'rgb(13, 13, 228)'; //blue
                }
                else if (clickedBtnID === 'btn-purple') {
                    changeBack = document.getElementById("btn-purple")
                    changeBack.style.backgroundColor = 'rgb(185, 22, 185)'; //purple
                }
                else if (clickedBtnID === 'btn-red') {
                    changeBack = document.getElementById("btn-red")
                    changeBack.style.backgroundColor = 'rgb(223, 18, 18)'; //red
                }
                else alert('Sorry something went wrong')
               
            }, 300)
             roundCounter(1)

        });
    }


 



});



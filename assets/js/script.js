

document.addEventListener('DOMContentLoaded', () => {

    let startBtn = document.getElementById('start');
    let roundCounter = 0;
    let score = 0;
    let reset;
    let userPattern = []; //Array to store the of selections by the gamesTurn function
    let gamePattern = []; //Array to sore the selections by the usersTurn function
    const buttonArray = []; //Array to hold games buttons for the game to choose from randomly

    //gets the game button id and pushes them into the buttonArray
    let gameBtn = document.getElementsByClassName('gameButtons');
    for (buttons of gameBtn) {
        let gameBtnID = buttons.id
        buttonArray.push(gameBtnID);
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

    function countToRoundCounter() {

    }

    startBtn.addEventListener('click', function () {
        userPattern = [];
        gamePattern = [];
        roundCounter = 0;
        score = 0;
        //PLACEHOLDER: play start game sound
        setTimeout(function () {
            gamesTurn();
        }, 1000);
    });



    //updates the gamePattern array
    function gamesTurn() {
        let gamesChoice = buttonArray[Math.floor(Math.random() * buttonArray.length)]; //Credit: this line taken from https://www.kirupa.com/html5/picking_random_item_from_array.htm
        gamePattern.push(gamesChoice);
        sound(gamesChoice);
        let randomBtn = document.getElementById(gamesChoice)
        randomBtn.style.backgroundColor = 'rgb(250, 250, 250)' //Shade of white
        randomBtn.style.boxShadow = 'none';
        setTimeout(function () {
            if (randomBtn.id === 'btn-green') {
                // changeBack = document.getElementById("btn-green")
                randomBtn.style.backgroundColor = 'rgb(19, 226, 36)'; //green
                randomBtn.style.boxShadow = '#000 6px 4px 4px';
            }
            else if (randomBtn.id === 'btn-blue') {
                // randomBtn= document.getElementById("btn-blue")
                randomBtn.style.backgroundColor = 'rgb(13, 13, 228)'; //blue
                randomBtn.style.boxShadow = '#000 6px 4px 4px';
            }
            else if (randomBtn.id === 'btn-purple') {
                // changeBack = document.getElementById("btn-purple")
                randomBtn.style.backgroundColor = 'rgb(185, 22, 185)'; //purple
                randomBtn.style.boxShadow = '#000 6px 4px 4px';
            }
            else if (randomBtn.id === 'btn-red') {
                // changeBack = document.getElementById("btn-red")
                randomBtn.style.backgroundColor = 'rgb(223, 18, 18)'; //red
                randomBtn.style.boxShadow = '#000 6px 4px 4px';
            }
            else alert('Sorry something went wrong')

        }, 300)

       

    }

    // function displayGamesPattern()

    //Checks what the user clicked and updates userPattern array.  Also makes button clicked flash to user.
    for (buttonsClicked of gameBtn) {
        buttonsClicked.addEventListener("click", function () {
            clickedBtnID = this.id
            userPattern.push(clickedBtnID)
            sound(clickedBtnID)
            this.style.backgroundColor = 'rgb(250, 250, 250)' //Shade of white
            this.style.boxShadow = 'none';
            setTimeout(function () {
                if (clickedBtnID === 'btn-green') {
                    changeBack = document.getElementById("btn-green")
                    changeBack.style.backgroundColor = 'rgb(19, 226, 36)'; //green
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-blue') {
                    changeBack = document.getElementById("btn-blue")
                    changeBack.style.backgroundColor = 'rgb(13, 13, 228)'; //blue
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-purple') {
                    changeBack = document.getElementById("btn-purple")
                    changeBack.style.backgroundColor = 'rgb(185, 22, 185)'; //purple
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-red') {
                    changeBack = document.getElementById("btn-red")
                    changeBack.style.backgroundColor = 'rgb(223, 18, 18)'; //red
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else alert('Sorry something went wrong')

            }, 300)
            console.log(userPattern)

        });
    }


});



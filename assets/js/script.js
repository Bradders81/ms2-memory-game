



document.addEventListener('DOMContentLoaded', () => {
    turnOff()
    getReady()
    highScore = 0;
    let startBtn = document.getElementById('start');
    let reset = document.getElementById('reset')


    let userPattern = []; // Array to store the of selections by the gamesTurn function
    let gamePattern = []; // Array to sore the selections by the usersTurn function
    let buttonArray = []; // Array to hold games buttons for the game to choose from randomly

    // Gets all id of all the game button id and pushes them into the buttonArray
    let gameBtn = document.getElementsByClassName('gameButtons');
    for (buttons of gameBtn) {
        let gameBtnID = buttons.id
        buttonArray.push(gameBtnID);
    }

    // Plays sound when game buttons pressed/selected
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

    // Credit: Influence for this function came from: Code Institute Love Math Project walk-through.
    function countToRoundCounter() {
        let roundNum = gamePattern.length;
        document.getElementById("round").innerHTML = roundNum;
    }

    startBtn.addEventListener('click', function () {
        userPattern = [];
        gamePattern = [];
        document.getElementById('score').innerHTML = " "
        waitInstruction()
        setTimeout(function () {
            gamesTurn()
        }, 1000);
    });

    // Updates the gamePattern array each round when it is the games turn
    function gamesTurn() {
        let gamesChoice = buttonArray[Math.floor(Math.random() * buttonArray.length)]; // Credit: method on this line learned from: https://www.kirupa.com/html5/picking_random_item_from_array.htm
        gamePattern.push(gamesChoice);
        waitInstruction()
        countToRoundCounter();
        setTimeout(function () {
            displayGamesPattern()
        }, 200)

    }

    // Displays the content of the gamePattern array each round to the user to simulate the games turn at pressing the game buttons
    function displayGamesPattern() {
        $('.gameButtons').attr("disabled", true)
        for (let i = 0; i < gamePattern.length; i++) {
            setTimeout(function () {
                btnSound = gamePattern[i];
                BtnShow = document.getElementById(btnSound);
                sound(btnSound);
                BtnShow.style.backgroundColor = 'rgb(250, 250, 250)' // Shade of white
                BtnShow.style.boxShadow = 'none'
                setTimeout(function () {
                    if (BtnShow.id === 'btn-green') {
                        BtnShow.style.backgroundColor = 'rgb(19, 226, 36)'; // green
                        BtnShow.style.boxShadow = '#000 6px 4px 4px';
                    }
                    else if (BtnShow.id === 'btn-blue') {
                        BtnShow.style.backgroundColor = 'rgb(13, 13, 228)'; // blue
                        BtnShow.style.boxShadow = '#000 6px 4px 4px';
                    }
                    else if (BtnShow.id === 'btn-purple') {
                        BtnShow.style.backgroundColor = 'rgb(185, 22, 185)'; // purple
                        BtnShow.style.boxShadow = '#000 6px 4px 4px';
                    }
                    else if (BtnShow.id === 'btn-red') {
                        BtnShow.style.backgroundColor = 'rgb(223, 18, 18)'; // red
                        BtnShow.style.boxShadow = '#000 6px 4px 4px';
                    }
                    else alert('Sorry something went wrong');
                }, 500);

            }, i * 600);
            setTimeout(function () {
                turnOn();
                yourTurnInstruction()
            }, gamePattern.length * 600);

        }
    }

    // USERS TURN 
    // Checks what the user clicked and updates userPattern array.  Also makes button clicked flash to user.
    for (buttonsClicked of gameBtn) {
        buttonsClicked.addEventListener("click", function () {
            let clickedBtnID = this.id;
            userPattern.push(clickedBtnID);
            let clickIndex = userPattern.length - 1;
            sound(clickedBtnID);
            this.style.backgroundColor = 'rgb(250, 250, 250)' // Shade of white
            this.style.boxShadow = 'none';
            setTimeout(function () {
                if (clickedBtnID === 'btn-green') {
                    changeBack = document.getElementById("btn-green");
                    changeBack.style.backgroundColor = 'rgb(19, 226, 36)'; // green
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-blue') {
                    changeBack = document.getElementById("btn-blue");
                    changeBack.style.backgroundColor = 'rgb(13, 13, 228)'; // blue
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-purple') {
                    changeBack = document.getElementById("btn-purple");
                    changeBack.style.backgroundColor = 'rgb(185, 22, 185)'; //purple
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else if (clickedBtnID === 'btn-red') {
                    changeBack = document.getElementById("btn-red");
                    changeBack.style.backgroundColor = 'rgb(223, 18, 18)'; //red
                    changeBack.style.boxShadow = '#000 6px 4px 4px';
                }
                else alert('Sorry something went wrong');
            }, 300)
            checkMatch(clickIndex)
        });
    }


    //Checks if the User is submitting the correct pattern.
    function checkMatch(clickIndex) {
        if (userPattern[clickIndex] === gamePattern[clickIndex]) {
            if (userPattern.length === gamePattern.length) {
                userPattern = []
                setTimeout(function () {
                    waitInstruction()
                }, 400)
                setTimeout(function () {
                    gamesTurn()
                    score()
                }, 800);
            } else {
            }
        } else if (userPattern[clickIndex] !== gamePattern[clickIndex]) {
            gameOver()
        }
    }

    //Resets the game for the user
    reset.addEventListener('click', function () {
        userPattern = []
        gamePattern = []
        document.getElementById("round").innerHTML = "0";
        document.getElementById("score").innerHTML = "0";
        document.getElementById('hscore').innerHTML = "0"
        // document.getElementById('score').innerHTML = ""
    })


    function score() {
        document.getElementById('score').innerHTML = gamePattern.length * 10;
    }

    function EndOfGame() {
        let conclusion = getElementById('conclusion')

    }

    function highScore() {
        let highScore = document.getElementById('hScore')
        let score = document.getElementById('score')
        if (score > highScore+1) {
            highScore.innerHTML = score;
        } else {
            return
        }
    }

    function turnOn() {
        $('.gameButtons').attr("disabled", false);
    }

    function turnOff() {
        $('.gameButtons').attr("disabled", true);
    }
    // Creates paragraph to tell user to wait for their turn
    function waitInstruction() {
        let instructions = document.getElementById('instructions');
        instructions.innerText = "WAIT!"
        instructions.style.color = 'rgb(220,53,69)'
    }

    // Tells the user when it is their turn
    function yourTurnInstruction() {
        let = instructions = document.getElementById('instructions');
        instructions.innerText = "YOUR TURN!"
        instructions.style.color = 'rgb(65, 236, 49)'
    }

    // Opening Text - tells the press start
    function getReady() {
        let instructions = document.getElementById('instructions');
        instructions.innerText = "PRESS START!"
        instructions.style.color = 'rgb(265, 796, 0)'
    }
    function gameOver() {
        let score = document.getElementById('score');
        let scoreNum = score.innerHTML;
        let gameOver = document.getElementById('instructions');
        gameOver.innerText = `GAME OVER! Score: ${scoreNum}`
        instructions.style.color = 'rgb(185, 22, 185)'
        highScore()
    }


});



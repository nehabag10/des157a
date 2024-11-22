(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const spoopygame = document.querySelector('#spoopygame');
    const charliegame = document.querySelector('#charliegame');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1purp.svg', 'images/2purp.svg', 'images/3purp.svg', 'images/4purp.svg', 'images/5purp.svg', 'images/6purp.svg'],
        players: ['Spoopy', 'Charlie Crown'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }; 

    startGame.addEventListener("click", function () {
        //adding in the sound for the game state button//
        const startSound = document.querySelector("#start-sound");
        startSound.play();
    
        gameControl.innerHTML = `<h2>The game has started</h2>`;
        gameControl.innerHTML += '<button id="quit"> Wanna Quit? </button>';
    
        //adding in the sound for the quit button in the gamne//
        document.querySelector("#quit").addEventListener("click", function () {
            const quitSound = document.querySelector("#wanna-quit-sound");
            quitSound.play();
    
            quitSound.addEventListener("ended", function () {
                location.reload();
            });
        });
    
        gameData.index = Math.round(Math.random()); 
        setUpTurn();
    });
    

    function setUpTurn() {
        game.innerHTML = `<p class="rollcommand">Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = `<button id="roll">Roll the Dice</button>`;
        document.querySelector("#roll").addEventListener("click", function(){
            console.log('roll the dice');
            throwDice();
        });
    }


    function throwDice() {
        actionArea.innerHTML = '';

        spoopygame.innerHTML = '';
        charliegame.innerHTML = '';

        gameData.roll1= Math.floor(Math.random()*6)+1; //rounds number and gives number from 1-5 so add 1//
        gameData.roll2= Math.floor(Math.random()*6)+1; 
        //if else statements to place the woodstocks//
        game.innerHTML = `<p> Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        if (gameData.players[gameData.index] === 'Spoopy') {
            spoopygame.innerHTML = `<img class="purpimages" src="${gameData.dice[gameData.roll1-1]}">
                                    <img class="purpimages" src="${gameData.dice[gameData.roll2-1]}">`;
        } else  {
            charliegame.innerHTML = `<img class="purpimages" src="${gameData.dice[gameData.roll1-1]}">
            <img class="purpimages" src="${gameData.dice[gameData.roll2-1]}">`;
        }
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {
            //console.log("snake eyes");
            game.innerHTML += '<p>Oh Snap! Snake Eyes</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index=0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn,2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            //console.log('one of the two rolls was a 1');
            gameData.index ? (gameData.index=0)  : (gameData.index = 1);
            game.innerHTML = `<p>One of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn,2000);

        } else {
            //console.log('the game proceeds');
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button class= "rollagain" id="rollagain">Roll Again?</button> or <button id="pass">Pass</button>';
            document.querySelector('#rollagain').addEventListener("click", function(){
                setUpTurn();
            });
            document.querySelector('#pass').addEventListener("click", function(){
                gameData.index ? (gameData.index=0)  : (gameData.index = 1);
                setUpTurn();
            });
        }

        checkWinningCondition();

    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = "Start a New Game!";
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;

    }


})();
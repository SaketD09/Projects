"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'please type a number';
        displayMessage("please type a number");

        //when the guess is correct.
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage("Correct Number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        //code containing high and low guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ?
            //     'your guess is a bit high' :
            //     'your guess is a bit low';
            displayMessage(
                guess > secretNumber ?
                "your guess is a bit high" :
                "your guess is a bit low"
            );
            score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector('.message').textContent =
            //     'sorry you have lost the game';
            displayMessage("sorry you have lost the game");
            document.querySelector(".score").textContent = "0";
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = null;
});
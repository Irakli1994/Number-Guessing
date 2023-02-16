"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // were there is no input!
    if (!guess) {
        displayMessage('No Number! 😒');
        document.querySelector('.guess').style.backgroundColor = '#740202';

        // when player WIN!
    } else if (guess === secretNumber) {
        displayMessage('Congretulations🏆 The number is correct!!!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}

        // When guess & secret Number are defferents
    } else if (guess != secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'to high' : 'to low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You loos the game');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('.guess').style.backgroundColor = '#0a0a0a';
    document.querySelector('body').style.backgroundColor = '#161515';
    document.querySelector('.number').style.width = '15rem';
});


/*
I provided a block of JavaScript code.
This code appears to be a simple number guessing game that can be played in a web browser.
The game generates a random number between 1 and 20 using the Math.random() and Math.trunc() functions.
The player has 20 attempts to guess the correct number, and their score is reduced by 1 for each incorrect guess.
The player wins the game if they correctly guess the random number, and they lose if they run out of attempts.
The code includes an event listener that listens for a click on the "Check" button.
When the button is clicked, the code checks whether the player's guess is correct, too high, or too low.
It updates the UI to provide feedback to the player, changing the background color, and resizing the text depending on the outcome of the game.
The code also includes another event listener that listens for a click on the "Again" button, which resets the game
to its initial state, generating a new random number and restoring the player's score and other game elements to their original values.
Overall, this code provides a simple and fun interactive experience for users to play a number guessing game in a web browser.
*/






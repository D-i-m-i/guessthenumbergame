'use strict';

// document.querySelector('.message').textContent = 'Testing the connection..';
// console.log(document.querySelector('.message').textContent);

let secretNumber = randomNumber();

// console.log(typeof secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(scr) {
  document.querySelector('.score').textContent = scr;
}

function randomNumber() {
  return Math.trunc(Math.random() * 1000) + 1;
}

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  // when there is no user input
  if (!guess) {
    // document.querySelector('.message').textContent = '🤯 No number!';
    displayMessage('🤯 No number!');

    // when the guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct!';
    displayMessage('🎉 Correct!');
    document.querySelector('body').style.backgroundColor = '#015F02';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is higher
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '🚀 Too high!' : '👎 Too low!';
      displayMessage(guess > secretNumber ? '🚀 Too high!' : '👎 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You have lost!';
      displayMessage('You have lost!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});

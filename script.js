'use strict';

// document.querySelector('.message').textContent = 'Testing the connection..';
// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 400) + 1;

// console.log(typeof secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 400) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
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
    document.querySelector('.message').textContent = '🤯 No number!';

    // when the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct!';
    document.querySelector('body').style.backgroundColor = '#015F02';
    document.querySelector('.number').style.width = '45rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚀 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost!';
      document.querySelector('.score').textContent = 0;
    }

    // when the guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👎 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

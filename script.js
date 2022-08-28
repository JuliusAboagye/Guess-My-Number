'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    calculateHighScore(score)
    document.querySelector('.message').textContent = ' Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ' 📈 Too High!';
    } else {
      document.querySelector('.score').textContent = '😔';
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ' 📉 Too Low!';
    } else {
      document.querySelector('.score').textContent = '😔';
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }


});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score=20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value=''
  document.querySelector('body').style.backgroundColor = '#222';


});

function calculateHighScore(score){
highScore=highScore<score?score:highScore
}

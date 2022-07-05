'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Correct number';
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ' 📈 Too High!';
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ' 📉 Too Low!';
  }

  console.log();
});

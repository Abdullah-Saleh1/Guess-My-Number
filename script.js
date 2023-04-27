'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1; 
let scoreStatus = 20; 
let highScore = 0; 
const number = document.querySelector('.number'); 
const score = document.querySelector('.score'); 

function displayMessage(message) {
  document.querySelector('.message').textContent = message; 
}; 

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value; 
  
    // When Ther Is No Input
  if (!guess) {
    displayMessage('No Number!'); 

    // When The Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!'); 
    document.querySelector('body').style.backgroundColor = '#60b347'; 
    document.querySelector('.number').textContent = secretNumber; 
    document.querySelector('.number').style.padding = 'clamp(2.5rem, 3.5vw, 5rem) 7rem'; 
    if (scoreStatus > highScore) {
      highScore = scoreStatus; 
      document.querySelector('.highscore').textContent = highScore
    }

    // When The Guess Is Wrong
  } else if (guess !== secretNumber) {
    if (scoreStatus > 1) {
      displayMessage(guess > secretNumber ? '😉 Too High!' : '😉 Too Low!'); 
      scoreStatus--; 
      score.textContent = scoreStatus; 
    } else {
      displayMessage('💥 You Lost The Game'); 
      scoreStatus--; 
      document.querySelector('.score').textContent = 0;     
    }
  }
}); 
document.querySelector('.again').addEventListener('click', function () {
  scoreStatus = 20; 
  secretNumber = Math.floor(Math.random() * 20) + 1; 
  displayMessage('Start guessing...'); 
  score.textContent = scoreStatus; 
  number.textContent = "?"; 
  number.style.padding = ""; 
  document.querySelector('body').style.backgroundColor = '#222'; 
  document.querySelector('.guess').value = "";
}); 

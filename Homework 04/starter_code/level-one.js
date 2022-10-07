/*
 * DOTS: Level One
 *
 */

/* 
 *
 *
 *
  ## Level 1
  For level 1, implement a single event listener to the `.js-ball` element. When the user clicks on the ball, it should increment their score by 10 points. When the user reaches 100 points, they've beat the level and can move on!  
 *
 *
 *
 */


let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

// Create a function for adding +10 to the score

function plusTEN(){
  score += 10;
  scoreEl.innerText = score;
}

ballEl.addEventListener('click',plusTEN) 







//When ball is clicked, launch funciton to add 10 points



//Create a rule that when the score is zero, the game end
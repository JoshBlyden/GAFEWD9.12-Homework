/*
 * DOTS: Level Two  
    ## Level 2
    Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their score until they reach 100.
 *
 */


let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
let ballEl = document.querySelector('.js-ball');


function declareWinner() {
    document.body.classList.add('game-over');
  }


// Create a function for adding +10 to the score

function plusTEN(){
    score += 10;                // Create a function for adding +10 to the score
    scoreEl.innerText = score; // Change the score board to reflect the score
    if (score < 100) {scoreEl.innterText = score; // Show score up until 100 points
    }else declareWinner(); // At 100 points delcare Winner
  };
  
  //When ball is clicked, launch funciton
  
  ballEl.addEventListener('click',plusTEN) 
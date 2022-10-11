/*
 * DOTS: Level Three
## Level 3 - Bonus Level
Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.

*
 */

let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');




/*
*
*
*
*

****************** 

Hi TOR AND PAULA! 

SO IT WORKS... BUT I DID THIS IS IN THE "NOT CORRECT" WAY FOR THIS ASSINGMENT- Because I modified the hTMLl by giving each ball an ID, and then running seperate funcitons for each ball. I see now, from the solution, that there is a way to to run this all in one function- so trying to understand and learn this now.  

Just fyi- thanks!!

****************** 
*
*
*
*
*/

// If data-increment is 20, then add 20 points

// If data-increment is 5, then add 5 points

// If data-increment is 10, then add 10 points





// Create a function for adding respective points to the score

function plusTwenty(e){
  if (e.target.classList.contains('js-ball'))
    score += 20;                // Create a function for adding +20 to the score
    scoreEl.innerText = score; // Change the score board to reflect the score
    if (score < 100) {scoreEl.innterText = score; // Show score up until 100 points
    }else declareWinner(); // At 100 points delcare Winner
  };
  

  function plusFive(e){
    if (e.target.classList.contains('js-ball'))
      score += 5;                // Create a function for adding +5 to the score
      scoreEl.innerText = score; // Change the score board to reflect the score
      if (score < 100) {scoreEl.innterText = score; // Show score up until 100 points
      }else declareWinner(); // At 100 points delcare Winner
    };
    

    function plusTen(e){
        if (e.target.classList.contains('js-ball'))
          score += 10;                // Create a function for adding +10 to the score
          scoreEl.innerText = score; // Change the score board to reflect the score
          if (score < 100) {scoreEl.innterText = score; // Show score up until 100 points
          }else declareWinner(); // At 100 points delcare Winner
        };



  //When ball is clicked, launch funciton


  document.getElementById('smallball').addEventListener('click',plusTwenty);

  document.getElementById('medball').addEventListener('click',plusFive);

  document.getElementById('largeball').addEventListener('click',plusTen);


  function declareWinner() {
    document.body.classList.add('game-over');
  }
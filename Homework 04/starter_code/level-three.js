/*
 * DOTS: Level Three
## Level 3 - Bonus Level
Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.

 <section class="level-arena js-arena">
        <span class="ball js-ball" data-increment="20"></span>
        <span class="ball js-ball" data-increment="5"></span>
        <span class="ball js-ball" data-increment="10"></span>
      </section>

 *
 */

let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');






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
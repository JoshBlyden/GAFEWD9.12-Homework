



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let computerChoiceNumber = Math.ceil(Math.random()*3) ;
        if(computerChoiceNumber == 1){
            return "scissors";
                }else if(computerChoiceNumber == 2){
            return "paper";
                }else{
            return "rock";
            }
    };


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.
 */

function compare(me, opponent) {

    document.querySelector('#computerSelection').innerText = opponent;

    if(me===opponent){
        return 'Tie';
    } else if(me === 'rock') {

        if (opponent === 'paper') {
            return 'My rock lost to paper :(';
        } else if (opponent === 'scissors') {
            return 'My rock crushed scissors! >:)';
        }

    } else if (me === 'paper') {

        if (opponent === 'rock') {
            return 'My paper beat rock :)';
        } else if (opponent === 'scissors') {
            return 'My paper got cut by scissors! >:)';
        }
    } else if (me === 'scissors') {

        if (opponent === 'paper') {
            return 'My scissor beat paper :(';
        } else if (opponent === 'rock') {
            return 'My scissor got crushed! >:)';
        }
    } else {
        return "That doesn't make any sense!"
    }
};




// Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html


document.querySelector('#scissors').addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    let result = compare("scissors", computerPlayerChoice);
    document.querySelector("#decision").innerHTML = result;
});

document.querySelector('#paper').addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    let result = compare("paper", computerPlayerChoice);
    document.querySelector("#decision").innerHTML = result;
});

document.querySelector('#rock').addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    let result = compare("rock", computerPlayerChoice);
    document.querySelector ("#decision").innerHTML = result;
});
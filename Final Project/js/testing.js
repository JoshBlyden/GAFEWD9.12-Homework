
let pCount = 0;
let populationCount = document.querySelector('.populationCounter');
const signUpBtn = document.querySelector('.ctaMain');




/* Increase population counter by 1 */

signUpBtn.onclick = function(e) {
    e.preventDefault()
    console.log("This too")
};

function plusOne() {
    pCount =+1;
    populationCount.innertext = pCount;
    document.querySelector('.box').classList.add('.blueback');
    console.log("This Part Works")
};


/*Ignore primary link function*/


    /* When clicking "Join the City" the population tracker will increase by 1 */
signUpBtn.addEventListener('click',plusOne);
signUpBtn.addEventListener('click', console.log("Finally, this"));




    var i = 0;
    function buttonClick() {
        i++;
        document.getElementById('inc').value = i;
    }


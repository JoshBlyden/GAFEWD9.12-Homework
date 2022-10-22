
let pCount = 798;
let populationCount = document.querySelector('.populationCounter');
const signUpBtn = document.querySelector('.ctaMain');

/*Ignore primary link function*/
signUpBtn.onclick = function(e) {
    e.preventDefault()
};

function plusOne() {
    pCount +=1;
    populationCount.innerText = pCount;
};

    /* When clicking "Join the City" the population tracker will increase by 1 */
signUpBtn.addEventListener('click',plusOne);




 


// BURGER MENU

// Selection of HTML objects
const burger = document.querySelector('.hamburgerMenu i');
const nav = document.querySelector('.linksAndCta');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav_active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
    console.log("works");
});




// Validation













// Thank you screen after submitting


//identify submit button
//identify the population count number

// When clicking submit- increase the pop count number
let popula = 4798
let submitButton = document.querySelector('.submitBtn');
let populationCount = document.querySelector('.popNumber');


submitButton.addEventListener('click', function(e) {
    console.log("Thisworks1");
    popula += 1;
populationCount.innerText = popula;
console.log("Thisworks2");

});




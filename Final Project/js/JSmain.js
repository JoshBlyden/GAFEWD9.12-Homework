
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
 

// TOGGLE HOME PAGE SECTION

// Identify "newest" article button
// Identify the hidden articles 
// create function to Change the page to display the new articles 
// create function to add underline to "newest"
// create function to remove underline to "trending"
// Add click event to call functions

// Selection of HTML objects
let articleTrendingColumn = document.querySelector('#columnLeftArticles');
let articleNewestColumn = document.querySelector('#articleCardsColumnNewest');
let articleToggleButtonRight = document.querySelector('#newest');
let articleToggleButtonLeft = document.querySelector('#trending');


// functions for newest articles
function toggleArticlesRight(e){
    e.preventDefault();
    console.log("Thisworks");
    articleTrendingColumn.classList.add('displayNone');
    articleNewestColumn.classList.remove('displayNone');
    console.log("This works 1");
    articleToggleButtonRight.classList.add('navActive');
    console.log("This works 2");
    articleToggleButtonLeft.classList.remove('navActive');
    console.log("This works 3");
}

// Calling the function after click event occurs

articleToggleButtonRight.addEventListener('click', toggleArticlesRight);

// functions for trending articles
function toggleArticlesLeft(e){
    e.preventDefault();
    console.log("Thisworks");
    articleNewestColumn.classList.add('displayNone');
    articleTrendingColumn.classList.remove('displayNone');
    console.log("This works 1");
    articleToggleButtonRight.classList.remove('navActive');
    console.log("This works 2");
    articleToggleButtonLeft.classList.add('navActive');
    console.log("This works 3");
}

// Calling the function after click event occurs

articleToggleButtonLeft.addEventListener('click', toggleArticlesLeft);

// Identify "trending" article button
// Identify the hidden articles 
// create function to Change the page to display the new articles 
// create function to add underline to "newest"
// create function to remove underline to "trending"
// Add click event to call functions

// Selection of HTML objects


//

// Calling the function after click event occurs
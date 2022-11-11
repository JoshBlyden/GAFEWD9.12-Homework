


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
 


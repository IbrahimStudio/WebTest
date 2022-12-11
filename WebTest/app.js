/*using querySelector because??*/
const menu = document.querySelector('#mobile-menu');  // catching by id the toggle (burger menu)
const menuLinks = documet.querySelector('.navbar__menu');   // catching the class which holds the navbar_links

// Display mobile menu
//create a function which triggers the CSS
//we're going to refer to the classes we created in CSS (isactive etc etc)
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
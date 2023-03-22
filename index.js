const hamburger = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.links');
const container = document.querySelector(".container");

hamburger.addEventListener('click', () => {
    container.classList.toggle('active');
    menuLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})


/*  mobile js */
const menuIconToggle = document.querySelector('.menu-icon-toggle');
const body = document.querySelector('body');

menuIconToggle.addEventListener('click', function(e) {
  body.classList.toggle('open');
  
  e.preventDefault();
});
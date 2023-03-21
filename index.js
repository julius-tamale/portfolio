const hamburger = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.links');
const container = document.querySelector(".container");

hamburger.addEventListener('click', () => {
    container.classList.toggle('active');
    menuLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})
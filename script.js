const hamburger = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.links');
const container = document.querySelector(".container");
const menuIconToggle = document.querySelector('.menu-icon-toggle');
const body = document.querySelector('body');

menuIconToggle.addEventListener('click', function(e) {
  body.classList.toggle('open');
  
  e.preventDefault();
});

hamburger.addEventListener('click', () => {
    container.classList.toggle('active');
    menuLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
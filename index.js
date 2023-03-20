const hamburger = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.links');
const container = document.querySelector(".container");

hamburger.addEventListener('click', () => {
    container.classList.toggle('active');
    menuLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
})
// if(window.innerWidth > 767){
//     hamburger.addEventListener('click', () => {
//     container.classList.toggle('active');
// })
// } else {
//     hamburger.addEventListener('click', () => {
//                  hamburger.classList.toggle("active");
//                  menuLinks.classList.toggle("active");
//              })
            
//              document.querySelectorAll('.nav-link').forEach(n => n.
//                  addEventListener('click', () => {
//                      hamburger.classList.remove('active');
//                      menuLinks.classList.remove('active');
//                  }))
// }


















// const hamburger = document.querySelector('.hamburger-menu');
// const navMenu = document.querySelector('.links');

// if(window.innerWidth > 768) {
//     const hamburger_menu = document.querySelector(".hamburger-menu");
//     const container = document.querySelector(".container");
//     hamburger_menu.addEventListener("click", () => {
//         container.classList.toggle("active");
//     });
// } else {
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//     })
    
//     document.querySelectorAll('.nav-link').forEach(n => n.
//         addEventListener('click', () => {
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
//         }))
// }
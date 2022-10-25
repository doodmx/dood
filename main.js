const hamburger = document.querySelector('.menu');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    menu.classList.toggle('show');
});
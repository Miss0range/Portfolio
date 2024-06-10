let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
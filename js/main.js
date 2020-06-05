const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const lines = document.querySelectorAll('.line');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
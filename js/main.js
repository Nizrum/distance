const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const lines = document.querySelectorAll('.line');
const postButtonShare = document.querySelector('.post-button-share');
const postShareTitle = document.querySelector('.post-share-title');
const shareTitleClose = document.querySelector('.share-title-close');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

shareTitleClose.addEventListener('click', function () {
    postShareTitle.classList.remove('active');
});

postButtonShare.addEventListener('click', function () {
    postShareTitle.classList.toggle('active');
});
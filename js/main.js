const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const lines = document.querySelectorAll('.line');
const postButtonShare = document.querySelectorAll('.post-button-share');
const postShareTitle = document.querySelectorAll('.post-share-title');
const shareTitleClose = document.querySelectorAll('.share-title-close');
const buttonMore = document.querySelector('.nav-more');
const buttonMoreIcon = document.querySelector('.nav-more svg');
const buttonMoreText = document.querySelector('.nav-more span');
const navGroupHidden = document.querySelector('.nav-group-hidden');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

for (let i = 0; i < shareTitleClose.length; i++) {
    shareTitleClose[i].addEventListener('click', function () {
        postShareTitle[i].classList.remove('active');
    });
}

for (let i = 0; i < postButtonShare.length; i++) {
    postButtonShare[i].addEventListener('click', function () {
        postShareTitle[i].classList.toggle('active');
    });
}

buttonMore.addEventListener('click', function () {
    navGroupHidden.classList.toggle('hide');
    if (buttonMoreText.textContent === 'Свернуть...') {
        buttonMoreText.textContent = 'Ещё...';
        buttonMoreIcon.style.transform = 'rotate(0)';
    } else {
        buttonMoreText.textContent = 'Свернуть...';
        buttonMoreIcon.style.transform = 'rotate(180deg)';
    }
});
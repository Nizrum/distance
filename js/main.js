const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const lines = document.querySelectorAll('.line');
const postButtonShare = document.querySelectorAll('.post-button-share');
const postShareTitle = document.querySelectorAll('.post-share-title');
const shareTitleClose = document.querySelectorAll('.share-title-close');
const buttonMoreMenu = document.querySelector('.nav-more-menu');
const buttonMoreMenuIcon = document.querySelector('.nav-more-menu svg');
const buttonMoreMenuText = document.querySelector('.nav-more-menu span');
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

buttonMoreMenu.addEventListener('click', function () {
    navGroupHidden.classList.toggle('hide');
    if (buttonMoreMenuText.textContent === 'Свернуть...') {
        buttonMoreMenuText.textContent = 'Ещё...';
        buttonMoreMenuIcon.style.transform = 'rotate(0)';
    } else {
        buttonMoreMenuText.textContent = 'Свернуть...';
        buttonMoreMenuIcon.style.transform = 'rotate(180deg)';
    }
});
"use strict"

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header__container');


navBtn.onclick = function(){
    

    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('header__container-mobile')
    document.body.classList.toggle('no-scroll');

    
}

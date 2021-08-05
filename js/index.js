const hamburger = document.querySelector('.menu');
const menuList = document.querySelector('.nav');

const toggleMenu = () => {
  if (hamburger.class.endsWith('')) {
    hamburger.src = 'image/icon-close.svg';
  } else {
    hamburger.src = 'image/icon-hamburger.svg';
  }
  menuList.classList.toggle('menu-list');
};
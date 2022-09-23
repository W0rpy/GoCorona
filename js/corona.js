const menuBurger = document.querySelector('.header_burger');
const Body = document.querySelector('body');
const menuList = document.querySelector('.menu_list');
const menuNav = document.querySelector('.header_nav');
menuBurger.addEventListener('click', function () {
   menuBurger.classList.toggle('active');
   menuList.classList.toggle('active');
   menuNav.classList.toggle('active');
   Body.classList.toggle('lock');

})

console.log("1. Реализация burger menu на обеих страницах [26/26]\nИтого: 26 из 110 баллов");

/*Burger menu*/
const menuNav = document.querySelector('.header__navigation');
const menuList = document.querySelector('.navigation'); //получаем меню
const menuItems = document.querySelectorAll('.navigation__item'); //получили пункты меню
const burger = document.querySelector('.header__burger'); //кнопка бургера
const getBody = document.querySelector('body');
const overlay = document.querySelector('.shadow');


//функция переключения класса active и scroll
function toggleMenu() {
   if (menuNav.classList.contains('menu-active')) {
      console.log('close');
      menuNav.classList.remove('menu-active');
      getBody.classList.remove('body__locked');
      burger.classList.remove('burger-active');
      menuNav.classList.remove('shadow');
   } else {
      console.log('open');
      menuNav.classList.add('menu-active');
      menuList.classList.add('menu-active');
      burger.classList.add('burger-active');
      menuNav.classList.add('shadow');
      getBody.classList.add('body__locked');
   }
}

burger.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
   const click = e.composedPath().includes(menuNav);
   const click2 = e.composedPath().includes(burger);
   console.log(click);
   console.log(click2);
   if (!click && !burger) {
      console.log('close');
      menuNav.classList.remove('menu-active');
      getBody.classList.remove('body__locked');
      burger.classList.remove('burger-active');
      menuNav.classList.remove('shadow');
   }
})

document.addEventListener('click', (e) => {
   const click = e.composedPath().includes(menuNav);
   const click2 = e.composedPath().includes(burger);
   console.log(click);
   console.log(click2);
   console.log(menuNav.classList.contains('menu-active'));
   if (menuNav.classList.contains('menu-active') && !click && !click2) {
      console.log('close');
      menuNav.classList.remove('menu-active');
      getBody.classList.remove('body__locked');
      menuNav.classList.remove('shadow');
      burger.classList.remove('burger-active');
   }
})



menuItems.forEach(
   function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
   }
)

let offset = 0; //смещение относительно левого края
const btnLeft = document.querySelector('.arrow__left'); //получили левую кнопку
const btnRight = document.querySelector('.arrow__rigth'); //получили правую кнопку

const sliderItems = document.querySelector('.slider__items');
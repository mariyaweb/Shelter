console.log("1. Реализация burger menu на обеих страницах [26/26]\n2.Реализация слайдера-карусели на странице Main [36/36].\nИтого: 62 из 110 баллов");

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
      // console.log('close');
      menuNav.classList.remove('menu-active');
      getBody.classList.remove('body__locked');
      // menuList.classList.remove("active");
      burger.classList.remove('burger-active');
      menuNav.classList.remove('shadow');

      // overlay.classList.remove("active");
   } else {
      // console.log('open');
      menuNav.classList.add('menu-active');
      menuList.classList.add('menu-active');
      burger.classList.add('burger-active');
      menuNav.classList.add('shadow');
      getBody.classList.add('body__locked');

      // overlay.classList.add('active');
   }
}

burger.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
   const click = e.composedPath().includes(menuNav);
   const click2 = e.composedPath().includes(burger);
   // console.log(click);
   // console.log(click2);
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
   // console.log(click);
   // console.log(click2);
   // console.log(menuNav.classList.contains('menu-active'));
   if (menuNav.classList.contains('menu-active') && !click && !click2) {
      // console.log('close');
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


/*Pets Slider*/
import petsList from "./petsList.js";
// console.log(petsList);

//Получаем элементы слайдера
const mainItem = document.querySelector('.slider-item__main');
const leftItem = document.querySelector('.slider-item__left');
const rightItem = document.querySelector('.slider-item__right');
const sliderBlock = document.querySelector('.slider__items');
const btnLeft = document.querySelector('.arrow__left');
const btnRight = document.querySelector('.arrow__rigth');

let cardsArrLeft;
let cardsArrMain;
let cardsArrRight;

// let currArrLeft;
// let currArrMain;
// let currArrRight;


//Функция, которая создаёт карточку
function createCard(el, currentItem) {
   let card = document.createElement('div');
   card.classList.add('slider__card', 'item__pet');
   let imgConteiner = document.createElement('div');
   imgConteiner.classList.add('item__img', 'card__element');
   let imgPet = document.createElement('img');
   imgPet.src = petsList[el].img;
   let namePet = document.createElement('p');
   namePet.classList.add('item__subtitle', 'subtitle', 'card__element');
   namePet.textContent = petsList[el].name;
   let btnPet = document.createElement('button');
   btnPet.classList.add('btn__pet', 'btn', 'btn-bordered', 'card__element');
   btnPet.textContent = 'Learn more';

   imgConteiner.append(imgPet);
   card.append(imgConteiner);
   card.append(namePet);
   card.append(btnPet);
   currentItem.append(card);
}

//Функция, которая создаёт набор карточек для определенного блока
function createCardsBlock(arr, block) {
   arr.forEach(el => {
      createCard(el, block)
   })
};

//Функция, которая сгенерирует ранодомное первоначальное значение массива
let initRandomArr;
function createRandomArr() {
   initRandomArr = [];
   while (initRandomArr.length < 3) {
      let number = Math.floor(Math.random() * 8);
      if (!initRandomArr.includes(number)) {
         initRandomArr.push(number);
      }
   }
}
createRandomArr();
// console.log(initRandomArr);

let randomArr = initRandomArr;

//Функция, которая генерирует cardsArrRight и создаёт блок из карточек

function createRightArr() {

   let arr = [...cardsArrMain];
   while (arr.length < 6) {
      let number = Math.floor(Math.random() * 8);
      if (!arr.includes(number)) {
         arr.push(number);
      }
   }
   // console.log(arr);
   arr.splice(0, 3);
   cardsArrRight = arr;
   createCardsBlock(cardsArrRight, rightItem);
}

//Функция, которая генерирует cardsArrMAin и создаёт блок из карточек
function createMainArr() {
   let arr = [...cardsArrLeft];
   // console.log(arr);
   while (arr.length < 6) {
      let number = Math.floor(Math.random() * 8);
      if (!arr.includes(number)) {
         arr.push(number);
      }
      // console.log(arr);
   }
   arr.splice(0, 3);
   // console.log(arr);
   cardsArrMain = arr;
   createCardsBlock(cardsArrMain, mainItem);
}
// createMainArr();

//Функция, которая генерирует cardsArrLeft и создаёт блок из карточек
function createLeftArr() {
   let arr = [...cardsArrMain];
   // console.log(arr);
   while (arr.length < 6) {
      let number = Math.floor(Math.random() * 8);
      if (!arr.includes(number)) {
         arr.push(number);
      }
      // console.log(arr);
   }
   arr.splice(0, 3);
   // console.log(arr);
   cardsArrLeft = arr;
   createCardsBlock(cardsArrLeft, leftItem);
}
// createLeftArr();

//Функция которая генерирует карусель из 3 блоков по 3 карточки в каждом, согласно условию. После генерации карточек, обновляем значения для создания новой генерации при перемещении
function createCarusel() {
   cardsArrMain = randomArr;
   createRightArr();
   // currArrRight = cardsArrRight;
   createCardsBlock(cardsArrMain, mainItem);
   // createMainArr();
   // currArrMain = cardsArrMain;
   // cardsArrRight = [];
   createLeftArr();
   // currArrLeft = cardsArrLeft;
   // cardsArrMain = [];
   // console.log(cardsArrLeft);
   // console.log(cardsArrMain);
   // console.log(cardsArrRight);
}
createCarusel();


//Функция прокрутки карточек вправо
function forward() {
   cardsArrLeft = [];
   leftItem.innerHTML = mainItem.innerHTML;
   cardsArrLeft = cardsArrMain;
   mainItem.innerHTML = '';
   cardsArrMain = [];
   mainItem.innerHTML = rightItem.innerHTML;
   cardsArrMain = cardsArrRight;
   rightItem.innerHTML = '';
   cardsArrMain = cardsArrRight;
   randomArr = cardsArrRight;
   // console.log(currArrRight);
   // console.log(cardsArrRight);
   createRightArr();
   // console.log(cardsArrRight);
   // currArrRight = cardsArrRight;
   // console.log(currArrRight);
}

//Функция прокрутки карточек влево
function back() {
   cardsArrRight = [];
   rightItem.innerHTML = mainItem.innerHTML;
   cardsArrRight = cardsArrMain;
   mainItem.innerHTML = '';
   cardsArrMain = [];
   mainItem.innerHTML = leftItem.innerHTML;
   cardsArrMain = cardsArrLeft;
   leftItem.innerHTML = '';
   cardsArrMain = cardsArrLeft;
   // randomArr = cardsArrLeft;
   createLeftArr();

}

//добавляем анимацию для переключения по стрелке влево и вправо
//и запрет на нажатие кнопки пока идёт анимация
const moveLeft = () => {
   sliderBlock.classList.add('transition-left');
   btnLeft.removeEventListener('click', moveLeft);
   btnRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
   sliderBlock.classList.add('transition-right');
   btnLeft.removeEventListener('click', moveLeft);
   btnRight.removeEventListener('click', moveRight);
}

//вешаем на кнопки лево и право событие клик и функцию прокрутки
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);


//Анимации move-right и move-left, которые прописаны в css,
//онимации перелистывают блоки и 1 итерация длится 4 секунды,
//чтобы после завершения пролистывания 1го блока не запустилось
// пролистывание следующего блока необходимо её остановить. 
//1. Для этого удаляем классы со слайдера,
//которые ранее запускали эти анимации и добавляем функции,
//которые формируют новые карточки 
//2. Возвращаем разрешение нажимать кнопки пока идёт анимация
sliderBlock.addEventListener('animationend', (animationEvent) => {

   if (animationEvent.animationName === 'move-right') {
      sliderBlock.classList.remove('transition-right');
      forward();
   } else if (animationEvent.animationName === 'move-left') {
      sliderBlock.classList.remove('transition-left');
      back();
   }
   btnLeft.addEventListener('click', moveLeft);
   btnRight.addEventListener('click', moveRight);
})
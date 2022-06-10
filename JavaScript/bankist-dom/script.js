// 'use strict';

// ///////////////////////////////////////
// // Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

[...btnsOpenModal].forEach((modal) => {
  modal.addEventListener('click',openModal);
})
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// console.log(document.documentElement);

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent="We use cookies for imporved functionality and analytics."
// message.innerHTML=`we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`


// const header = document.querySelector('.header');
// // header.append(message);
// header.prepend(message);
// header.after(message);
// header.before(message);

// const cookieClose = document.querySelector('.btn--close-cookie').addEventListener('click',(e) => {
//   message.remove();
// })

// message.style.backgroundColor = `#37383d`;
// message.style.height = "120%";

// console.log(getComputedStyle(message).color);

// document.documentElement.style.setProperty('--color-primary','orangered');

/*Attributes*/
// const link = document.querySelector('.nav img')
// console.log(link.src);
// console.log(link.alt);
// console.log(link.className);


// console.log(link.getAttribute('designer'));
// link.setAttribute('designer','sarvesh');

// console.log(link.dataset.roleVersion)

console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
console.log(section1)

btnScrollTo.addEventListener('click', (e) => {
  console.log(window.pageXOffset,window.pageYOffset);

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // window.scrollTo(s1coords.x,s1coords.y)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.y + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  section1.scrollIntoView({behavior: 'smooth'})
})


//rgb

// const randomInt = (min,max) => {
//   return Math.random() * ((max - min + 1) + min);
// }

// const randomColor = () => {
//   return `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
// }

// document.querySelector('.nav__link').addEventListener('click',(e) => {
//   document.querySelector('.nav__link').style.backgroundColor = randomColor();
//  })
// document.querySelector('.nav__links').addEventListener('click',(e) => {
//   document.querySelector('.nav__links').style.backgroundColor = randomColor();
// })
// document.querySelector('.nav').addEventListener('click',(e) => {
//   document.querySelector('.nav').style.backgroundColor = randomColor();
// })

document.querySelector('.nav__links' ).addEventListener('click',e => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if(e.target.classList.contains('nav__link'))
  document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})


 
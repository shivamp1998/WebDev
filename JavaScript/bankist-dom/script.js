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


console.log(document.documentElement);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent="We use cookies for imporved functionality and analytics."
message.innerHTML=`we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`


const header = document.querySelector('.header');
// header.append(message);
header.prepend(message);
// header.after(message);
// header.before(message);

const cookieClose = document.querySelector('.btn--close-cookie').addEventListener('click',(e) => {
  message.remove();
})


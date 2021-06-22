'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for(let i=0;i<btnOpenModal.length;i++){
  btnOpenModal[i].addEventListener("click",function(){
    console.log("Button "+btnOpenModal[i].textContent+" Clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
function closeModal(){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);


document.addEventListener("keydown",function(event){
  console.log(event.key);
  if(event.key == "Escape"){
    closeModal();
  }
})



console.log(modal,overlay,btnCloseModal,btnOpenModal);

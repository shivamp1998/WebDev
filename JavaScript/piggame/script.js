'use strict';
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

buttonRoll.addEventListener("click",function(){
  const dice = Math.floor(Math.random()*6 + 1);
  diceEl.classList.remove("hidden");
  diceEl.setAttribute("src","dice-"+dice+".png");
})

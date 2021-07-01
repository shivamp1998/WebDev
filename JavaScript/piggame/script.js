'use strict';
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
 let currentScore = 0;
 let activePlayer = 0;
const scores = [0,0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");



buttonRoll.addEventListener("click",function(){
  const dice = Math.floor(Math.random()*6 + 1);
  diceEl.classList.remove("hidden");
  //diceEl.setAttribute("src","dice-"+dice+".png");

  diceEl.src = `dice-${dice}.png`;
  if(dice!==1){
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else{
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer  = activePlayer === 0 ? 1 : 0 ;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }

  buttonHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  })


})

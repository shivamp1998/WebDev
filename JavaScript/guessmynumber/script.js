'use strict';


// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
//document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click",function(){
  const guess =  Number(document.querySelector(".guess").value);

  if(!guess){
    document.querySelector(".message").textContent = "No Number!";
  }else if(number === guess){
      if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      document.querySelector(".number").textContent = number;
      document.querySelector("body").style = "background-color: #60b347";
      document.querySelector(".number").style = "width: 30rem;"
      document.querySelector(".message").textContent = "Correct Number!";
  }else if(number > guess){
    score--;
    if(score > 0){
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Too Low!";
    }else{
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You Lost the game!";
    }
  }else{
    score--;
    if(score > 0){
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Too high!";
  }else{
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "You Lost the game!";
  }
  }
});
document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector('.guess').value= " ";
    document.querySelector('.message').textContent = "Start Guessing...";
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";

    });

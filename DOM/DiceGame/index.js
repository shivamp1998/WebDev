
var num1 = Math.floor(Math.random() * 6)+1;
var num2 = Math.floor(Math.random() * 6)+1;


if(num1 > num2){
  document.querySelectorAll(".game-img")[0].setAttribute("src","images/dice"+num1+".png");
  document.querySelector(".wintext").textContent = "Player 1 Wins";
}
else if(num1 < num2){
  document.querySelectorAll(".game-img")[1].setAttribute("src","images/dice"+num2+".png");
  document.querySelector(".wintext").textContent = "Player 2 Wins";
}else{
  document.querySelectorAll(".game-img")[1].setAttribute("src","images/dice"+num2+".png");
  document.querySelectorAll(".game-img")[0].setAttribute("src","images/dice"+num1+".png");
  document.querySelector(".wintext").textContent = "Draw!";
}

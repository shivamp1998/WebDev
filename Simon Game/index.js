// LEVEL 1
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["blue","green","red","yellow"];
var started = false;
var level = 0;
$(document).keypress(function(){
  if(!started){
    nextSequence();
    $("#level-title").text("Level "+level);
    started = true;
  }

});
$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});
function playSound(userChosenColor){
  var audio = new Audio("sounds/"+userChosenColor+".mp3");
  audio.play();
}
function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var randomChosenColor = buttonColors[random];
    gamePattern.push(randomChosenColor);
    var random = Math.floor(Math.random()*4);
    playSound(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100);
}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
      console.log("Success!");
    }
}

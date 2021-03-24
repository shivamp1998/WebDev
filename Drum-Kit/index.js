function handleClick()
{
alert("hello");
}
var audio = ["tom-1.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];

for(var i=0;i<document.querySelectorAll("button").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var sound = this.innerHTML;
      this.style.fadeIn = "100";
      makeSound(sound);
      addAnimation(sound);
  });

  document.addEventListener("keydown",function (e){
      var sound = e.key;
      makeSound(sound);
      addAnimation(sound);
  });
}

function makeSound(key){
  switch(key){
    case 'w': var sound = new Audio("sounds/crash.mp3");
              sound.play();
              break;
    case 'a': var sound = new Audio("sounds/kick-bass.mp3");
              sound.play();
              break;
    case 's': var sound = new Audio("sounds/snare.mp3");
              sound.play();
              break;
    case 'd': var sound = new Audio("sounds/tom-1.mp3");
              sound.play();
              break;
    case 'j': var sound = new Audio("sounds/tom-2.mp3");
              sound.play();
    case 'k': var sound = new Audio("sounds/tom-3.mp3");
              sound.play();
              break;
    case 'l': var sound = new Audio("sounds/tom-4.mp3");
              sound.play();
              break;
    }
}
function addAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}

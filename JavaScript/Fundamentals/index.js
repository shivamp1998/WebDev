
//Coding Assignment 1
// let marksHeight = 1.69;
// let marksWeight = 78;
// let johnsHeight = 1.96;
// let johnWeight = 92;
//
//
// let BMImarks = (marksWeight) / (marksHeight ** 2);
// let BMIjohns = (johnWeight) / johnsHeight ** 2;
//
// console.log(BMImarks,BMIjohns)
// let markHigherBMI = false;
// if(BMImarks > BMIjohns)
//   markHigherBMI = true;
//
//
// if ( markHigherBMI == true){
//   document.querySelector(".answer").innerHTML = `Mark's BMI ${BMImarks} is higher than John's BMI ${BMIjohns}`;
// } else{
//   document.querySelector(".answer").innerHTML = `John's BMI ${BMIjohns} is higher than Mark's BMI ${BMImarks}`;
// }


//coding assignment - 2

let dolphins = (96 + 108 + 89)/3;
let koalas = (88+91+110)/3;


if(dolphins > koalas && dolphins >= 100){
  console.log(`Dolphins win with the avg score of ${dolphins}`);
}else if(koalas > dolphins && koalas>=100){
  console.log(`Koalas win with the avg score of ${koalas}`);
}else{
  console.log("Match End in Draw since either the score is equal or the avegage score of winning team is less than 100");
}


//statement in a template literal using ternary operator

let age = 16;
console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

//coding assignment - 3

let amount = 275;
let tip = (amount>=50 && amount<=300) ? 0.15 : 0.20;
console.log(`The Bill is ${amount} and the Tip is ${tip*amount} and the total value to pay for is ${amount+tip*amount}`);

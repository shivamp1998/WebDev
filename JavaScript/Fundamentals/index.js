
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

// let dolphins = (96 + 108 + 89)/3;
// let koalas = (88+91+110)/3;
//
//
// if(dolphins > koalas && dolphins >= 100){
//   console.log(`Dolphins win with the avg score of ${dolphins}`);
// }else if(koalas > dolphins && koalas>=100){
//   console.log(`Koalas win with the avg score of ${koalas}`);
// }else{
//   console.log("Match End in Draw since either the score is equal or the avegage score of winning team is less than 100");
// }


//statement in a template literal using ternary operator

// let age = 16;
// console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

//coding assignment - 3

// let amount = 275;
// let tip = (amount>=50 && amount<=300) ? 0.15 : 0.20;
// console.log(`The Bill is ${amount} and the Tip is ${tip*amount} and the total value to pay for is ${amount+tip*amount}`);

 // 'use strict';
 //  let hasDriversLicense = false;
 //  const passTest = true;
 //  if( passTest  === true )
 //    hasDriversLicense = true;
 //
 //  if(hasDriversLIcense) console.log("I Can Drive!");
 //
 //


 //Years left before Retirement


//  const retirement = (currentYear, birthYear,retirementAge) =>  retirementAge-(currentYear-birthYear);
// console.log(retirement(2021,1998,60));


//Assignment - 3
//
// const average = (score1,score2,score3) => (score1+score2+score3)/3;
// const averageForKoalas = average(65,54,49);
// const averageForDolphis = average(44,23,71);
//
//
// function checkWinner(avgKoalas,avgDolphins){
//   if(avgKoalas >= 2*avgDolphins){
//     return ("Koalas Are the Real Winners Today!");
//   }else if(avgDolphins >= 2*avgKoalas){
//     return ("Dolphins Are the Real Winners Today!");
//   }else{
//     return ("No Real Winners Today!");
//   }
// }
//
// console.log(checkWinner(averageForKoalas, averageForDolphis));

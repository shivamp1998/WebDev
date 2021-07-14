var rect = require("./rectangle")

function solveRect(l,b) {
  console.log("Solving for Rectangle with l = " + l + " and b  = " + b);
  rect(l,b,(err,rectangle) => {
    if(err) {
      console.log(err.message);
    }else{
      console.log(rectangle.area(l,b),rectangle.perimter(l,b));
    }
  });
}

solveRect(2,4);

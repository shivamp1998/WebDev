module.exports = (x,y,callback) => {
  if (x<= 0 && y<=0) {
    setTimeout(()=>{
      callback(new Error("The given Rectangle parameters are not valid!"),null);
    }, 2000);
  }else {
    setTimeout(()=>{
      callback(null, {
        perimter: (x,y) => (2*(x+y)),
        area : (x,y) => (x * y),
      })
    },2000)
  }
}

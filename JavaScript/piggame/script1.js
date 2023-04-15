function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red" ;
B.prototype.color = "red" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);
// hoisting

console.log(scissors);
scissors = "blue";

console.log(scissors)
var scissors

//js reads code twice. first tiem, its looking for the left hand side of variables and functions. the second time , it reads the right hand side and assigns values and expressions.
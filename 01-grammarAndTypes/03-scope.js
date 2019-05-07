// Scope
// JavaScript has function scope.
//scope determines the accessibility of these variables
//variables defined insidea function are not accessible from outside the function.

//local and global scope

let x = 12

function scope() {
    let x = 33
    console.log(x)
}
scope()
console.log(x)

// var vs let

var x = 12

function scope(){
    var x = 33
    if (true){
        var x = 45;
        console.log(x)
    }
    console.log(x)
}
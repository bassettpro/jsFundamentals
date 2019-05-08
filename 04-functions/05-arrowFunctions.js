// arrow functions

//normal
function coffee(){
    console.log('coffee is good');
}
//fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();

//concise body
//concise bodies do not need parentheses, unless you have more than one parameter
let apples = x => (`There are ${x} apples.`);
apples(10,5)

//block body
let apples = (x) => { console.log(`there are ${x} apples.`);}
apples(10);
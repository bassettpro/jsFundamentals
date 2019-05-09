//returns

function  capitalizeName(name){
let capName = '';
for (let l in name){
    if (l == 0) {
        capName += name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}
//console.log(capName)
return capName
}

const myName = capitalizeName('jAcob')

console.log(myName + ' how are you doing?')

/* 
challenge:
make a tip calculator using a function 
have it return the value
capture that returned value in a variable
print that variable
*/

function tipCalc (bill){
    let tip = (bill * .2);
    return tip.toFixed(2)
}

let totalTip = tipCalc(19.88);
console.log(totalTip);



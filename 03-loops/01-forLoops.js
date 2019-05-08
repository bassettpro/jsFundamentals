// for loops
/*
A loop is a programming tool that repeats a set of instruction s until a specified condition is met.
*/

const vacationSpots = ['Florence', 'Copenhagen', 'Instanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//types of loops 
/*
for statement
do while statements
while statement
labeled statement
break statement
continue statement
for in statement
for of statement
*/

/*
to stop infinite loop
 ctr C = stops terminal
*/

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i >= -24; i -= 2) {
    console.log(i)
}

let name = 'Jacob'
for (p = 0; p < name.length; p++) {
    console.log(name[p])
}

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum = sum + 1;
}
console.log(sum)
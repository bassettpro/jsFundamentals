// for of loops

//the for... of statment creates a loop iterating over iterable objects, meaning it can numerically look over these iterms.

let student = {name: 'peter', awesome: true, degree: 'javascript', week: 1{
for(item in student) console.log(item);
}

//student is not iterable

let catArray = ['tabby', 'british', 'burmese', 'maine', 'rag'];

for(cat of catArray){
    console.log(cat)
}
for(cat)
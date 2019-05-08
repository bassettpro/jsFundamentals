// for in loops 

// great for iterating over values in an object
// the for in statement iterates a specified variable over all te enumerable properties of an object.

let student = { name: 'peter', awesome: true, degree: 'JavaScript', week: 1};
for(item in student){
    //console.log('item =>', item; // name awesome degree week
    console.log('student[item] =>', student[item]);
}

let dogArray = ['collie', 'pittbull','newfie', 'st bernard', 'dachshund'];
for(dog in dogArray){
    console.log(dog)
}

let studentName = 'cody';
let capName;
for(let n in studentName) {
    console.log(n)
    if(n==)
}
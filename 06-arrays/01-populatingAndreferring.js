// arrays

// arrays are an object. They are a container that can hold multiple dayatypes.
//has [] brackets
// great for lists

let students = ['sebastian', 'eric', 'michael', 16, 74,false, ['nic', 'charles', 'ethan']]

//console.log(tpeof students);
//console.log(students instanceof array);
// console.log(students[1]) square bracket notation
console.log(students[6[1]])

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.push('pizza') // appends pizza to end of array
food.splice(1, 1, 'bananas')
food.splice(2, 0, 'sweet potato pie')

food.pop()
//removes last item in my array
food.shift()// removes first item in my array

food.unshift('muffin', 'apples') //adds elements to beginning of array

for (f in food){
    console.log(food[f]);
//console.log(f)
}
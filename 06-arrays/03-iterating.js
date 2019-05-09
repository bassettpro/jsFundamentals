// iterating

// for each() method that executes a function once for each array element

//forEach('currentValue', 'the index', 'the entire array')

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.forEach(f => { console.log(f) })

food.forEach((f, number) => { console.log(number, f) })

food.forEach((f, number, array) => { console.log(f, number, array) })

/* challenge:
Create a list (with an array) of movies

use.forEach()to list your movies 

add another movie at the end 

and replace one of your existing movies with another one
*/

let movies = ['the departed, avengers, iron man'];

movies.push('MIB')
movies.splice(0,1, 'requiem for a dream')
movies.forEach(movie => {console.log(movies)})
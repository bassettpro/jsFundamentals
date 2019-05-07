// Types
// Boolean

let on = true
console.log(on)
let off = false;
console.log(off);

//Null
//Null = empty value (not 0, not undefined);
let empty = null
console.log(empty);

//Undefined
// No value assigned. NOT AN ERROR!
let undef = undefined;
console.log(undef);
let grass;
console.log(grass);

//Numbers
let degrees = 90

let precise = 999999999999999;


let rounded = 9999999999999999;

let notQuite = 0.2 + 0.1
console.log (notQuite)

let numbersAreHard = (.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
// Strings are any value within quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);
let first = 1050 + 100;
let second = '1050' + '100';

console.log(typeof first)



// challenge!!

let firstName = 'Jacob'
let lastName = 'Bassett'
let houseNumber = 965
let street = 'Woodruff Place' 
let city = 'indianapolis'
let state = 'IN'
let zipCode = 46201

console.log(firstName, lastName, houseNumber, street, city + ',', state, zipCode)


//Objects
//A collection of key-value pairings.
// Hold multiple dayatypes

//Denotes by {}
// Has keys and values (color (key): 'blue' (value)), separated with a colon.
//Each key is separated with a comma

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritosNow);
console.log(typeof burritosNow)

//Arrays

//Arrays are great for lists
//denotes by []
//Has balues('blue', 'green', 'yellow'), separated by commas.

let burritos = ['large', 4, true];
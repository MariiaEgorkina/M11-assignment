//STEP 1

let x = prompt("Enter a number:");
x = parseFloat(x);
console.log(Math.abs(x));

//STEP 2

let x = prompt("Enter a number:");
x = parseFloat(x); 
console.log(Math.ceil(x));

//STEP 3

let x = prompt("Enter a number:");
x = parseFloat(x); 
console.log(Math.floor(x));

//STEP 4

let x = prompt("Enter 5 numbers separated by commas:");
let numbers = x.split(",").map(Number); 

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//STEP 5

let number = prompt("Enter a number:");
console.log(Math.sqrt(number));

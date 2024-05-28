//STEP 1

let userName = prompt("Enter your name:");
alert(userName.length);

//STEP 2

let userName = prompt("Enter your name:");
let num = prompt("Enter the number:");
alert(userName.charAt(num));

// STEP 3

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName.concat(" ", lastName);
alert("Your name is: " + fullName);

//STEP 4

let sentence = "The quick brown fox jumps over the lazy dog";
alert(sentence.indexOf("fox"));

//STEP 5

let sentence = "The quick brown fox jumps over the lazy dog";
alert(sentence.lastIndexOf("fox"));
 
//STEP 6

let sentence = "The quick brown fox jumped over the lazy dog";
let fullName = prompt("Enter your full name:");
let newSentence = sentence.replace("the lazy dog", fullName);
alert(newSentence);

//STEP 7

let sentence = "The quick brown fox jumps over the lazy dog";
let word = prompt("Enter a word to search for:");
alert(sentence.search(word));

//STEP 8

let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(35);
alert(new_string.toUpperCase());

//STEP 9

let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
let trimmed_text = text.trim();
alert(trimmed_text.toLowerCase());


//STEP 10

let sentence = "the quick brown fox jumps over the lazy dog";
alert(sentence.charAt(0).toUpperCase() + sentence.slice(1));
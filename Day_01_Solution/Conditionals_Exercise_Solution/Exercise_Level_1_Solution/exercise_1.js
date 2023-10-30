// Install prompt sync https://www.npmjs.com/package/prompt-sync

// Conditionals Exercise Solution

// Exercise Level 1 Solution

// Exercise 1

const prompt = require("prompt-sync")();

let localAge = 18;
let ageInput = prompt("Enter your age: ");
ageInput = Number(ageInput);


if (ageInput >= localAge) {
    console.log("You are old enough to drive.")
}

else if (ageInput < 0) {
    console.log("incorrect value input");
}

else {
    let waitYear = localAge - ageInput;
    console.log(`You are left with ${waitYear} years to drive.`)
}

// Exercise 1.2
let myAge = 22;
let yourAge = prompt("Enter your age: ");
yourAge = Number(yourAge);

if (yourAge >= myAge) {
    console.log(`You are  ${yourAge - myAge} years older than me.`)
}
else if (myAge > yourAge) {
    console.log(`You are  ${myAge - yourAge} years younger than me.`)
}
else {
    onsole.log("incorrect value input");
}

// Exercise 1.3
var a = 4;
var b = 3;

// if - else

if (a > b) {
    console.log("4 is greater than 3");
}

else {
    console.log("3 is less than 4");
}

// Ternary Operator

let ternary = a > b ? "4 is greater than 3" : "3 is greater than 4";
console.log(ternary);

// Exercise 1.4
let numberPrompt = prompt("Enter a number: ");
numberPrompt = Number(numberPrompt);

if (numberPrompt % 2 == 0) {
    console.log(`${numberPrompt} is an even number. `);
}
else if (numberPrompt % 2 == 1) {
    console.log(`${numberPrompt} is an odd number.`);
}
else {
    console.log("incorrect value input");
}
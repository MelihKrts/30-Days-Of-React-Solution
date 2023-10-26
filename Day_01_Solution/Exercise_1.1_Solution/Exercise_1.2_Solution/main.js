// Exercise 1 Level 2 Solution

// country.js and web_techs.js Access both file in main.js file

// Exercisec 1.2.1

import { countries } from "./country.js";
import { webTechs } from "./web_techs.js"

console.log(countries);
console.log(webTechs);

// Exercise 1.2.2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regex = text.replace(/[^\w\s]/g, '');
let splitted = regex.split(' ');
console.log(splitted, splitted.length);
console.log(regex);

// Exercise 1.2.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);

// Exercise 1.2.4
const countryControl = countries.includes("Ethiopia");

// const countryIndex = countries.findIndex(rank => rank === "Ethiopia"); Ethiopia find index

countries[4] = "ETHIOPIA"; // Array find index value

// console.log(countryIndex);
console.log(countryControl);
console.log(countries);

// Exercise 1.2.5

const webTechsControl = webTechs.includes("Sass");
console.log(webTechsControl);
const addSass = webTechs.splice(2, 0, "Sass");
webTechs.join();
console.log(webTechs);
console.log(webTechs.includes("Sass"));
console.log(webTechsControl);

// Exercise 1.2.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);




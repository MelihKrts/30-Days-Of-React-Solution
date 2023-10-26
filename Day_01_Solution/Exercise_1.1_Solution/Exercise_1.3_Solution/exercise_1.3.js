// Exercise 1 Level 3 Solution

// Exercise 1.3.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort array
ages.sort();

// array's min value
const minVal = Math.min(...ages);
console.group("Min age: ", minVal);

// array's max value
const maxVal = Math.max(...ages);
console.log("Max age : ", maxVal);

// array's median age
ages.sort((a, b) => a - b);

const length = ages.length;
let median;

if (length % 2 === 1) {
    median = ages[Math.floor(length / 2)];
}
else {
    const middleOne = ages[length / 2 - 1];
    const middleTwo = ages[length / 2];
    median = (middleOne + middleTwo) / 2;
}

console.log("Median Age: ", median);

// array's average
const average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log("Age average: ", average);

// array's find to range
const range = maxVal - minVal;
console.log("Range: ", range);

// Compare the value of 
const minDifference = Math.abs(minVal - average);
const maxDifference = Math.abs(maxVal - average);

if (minDifference > maxDifference) {
    console.log(`${minDifference},The difference between min and average is greater.`);
}
else if (minDifference < maxDifference) {
    console.log(`${maxDifference}, The difference between max and average is greater.`);
} else {
    console.log("The differences are equal.");
}
console.log(minDifference);
console.log(maxDifference);
console.log(ages);

// Exercise 1.3.2.1 First ten country
import { countries } from "./countries.js";
const slices = countries.slice(0, 10);
console.log(slices);

// Exercise 1.3.2.2 Middle country
const countyLength = Math.floor(countries.length / 2);
if (countries.length % 2 === 1) {
    const middleCountry = countries[countyLength];
    console.log("Middle Country :", middleCountry);
}
else {
    const middleCountries = [countries[countyLength - 1], countries[countyLength]];
    console.log("Middle Country :", middleCountries);
}

// Exercise 1.3.3 divide array

let firstHalf, secondHalf;

if (countries.length % 2 == 0) {
    firstHalf = countries.slice(0, firstHalf);
    secondHalf = countries.slice(countyLength);
}
else {
    firstHalf = countries.slice(0, countyLength + 1);
    secondHalf = countries.slice(countyLength);
}

console.log("Original Country Array : ", countries);
console.log("First Half : ", firstHalf);
console.log("Second Half : ", secondHalf);

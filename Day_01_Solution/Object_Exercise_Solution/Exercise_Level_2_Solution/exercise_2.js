// Object Exercise Solution

// Exercise Level 2 Solution

// inmport countries_data.js

import { countries } from "./countries_data.js"

// Exercise 2.1

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const result = Object.entries(users).sort((a, b) => a[1].skills.length - b[1].skills.length).pop();
// console.log(result);

// Exercise 2.2

const controlLogged = Object.values(users).filter(user => user.isLoggedIn).length;
const checkPoints = Object.values(users).filter(user => user.points >= 50).length;

// console.log(controlLogged);
// console.log(checkPoints);

// Exercise 2.3

const controlledMERN = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name)
    .join(", ");
// console.log(controlledMERN);

// Exercise 2.4

const copyUsers = Object.assign({}, users);
copyUsers["Melih"] =
{
    email: "melih@melih.com",
    skills: ["HTML", "CSS", "Javascript", "React"],
    age: 22,
    isLoggedIn: true,
    points: 50
}
// console.log(copyUsers);
// console.log(users);

// Exercise 2.5

const keys = Object.keys(users);
console.log(keys);

// Exercise 2.6

const values = Object.values(users);
console.log(values);

// Exercise 2.7

function printCountryInfo(country){
    console.log(`\nCountry Name: ${country.name}\n Country Capital: ${country.capital}\n Country Population: ${country.population}\n Country Language: ${country.languages.join(', ')}` );
}

countries.forEach(printCountryInfo);
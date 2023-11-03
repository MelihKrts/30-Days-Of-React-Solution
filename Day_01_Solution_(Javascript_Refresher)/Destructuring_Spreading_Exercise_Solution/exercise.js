// Destructuring and Spreading Solution

// Lesson and exercise Solution

// Lesson example

const countries = ["Turkey", "Romania", "Bulgaria"];

const [tur, ron, bul, gre] = countries; // ISO 639-2
console.log(tur, ron, bul, gre);

const medCountries = ["Spain", "France", "Italy", undefined];
const [spa, fra, ita, ara = "Egypt"] = medCountries
console.log(spa, fra, ita, ara);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, num3, ...rest] = numbers;
console.log(num1, num2, num3, rest);

// Object Destructuring lesson example

const rectangle = {
    width: 20,
    height: 10,
}
let { width, height, perimeter } = rectangle;
console.log(width, height, perimeter);

// const rectangle = {
//     width: 20,
//     height: 10,
// }
// let { width, height, perimeter = 200 } = rectangle;
// console.log(width, height, perimeter);


// const rectangle = {
//     width: 20,
//     height: 10,
// }

// let { width: w, height: h } = rectangle

// console.log(w, h);

const props = {
    user: {
        firstName: "Melih",
        lastName: "Karatas",
        age: 22
    },
    post: {
        title: "Destructuring and Spread",
        subtitle: "ES6",
        year: 2023
    },
    skills: ["HTML", "CSS", "Javascript", "React"]
}
// const { user, post, skills } = props;
// const { firstName, lastName, age } = user;
// const { title, subtitle, year } = post;
// const [skillOne, skillTwo, skillThree, skillFour] = skills;

// console.log(user, props, skills);
// console.log(firstName,lastName,age);
// console.log(title,subtitle,year);
// console.log(skillOne,skillTwo,skillThree,skillFour);

// const { user: { firstName, lastName, age }, post: { title, subtitle, year }, skills: [skillOne, skillTwo, skillThree, skillFour] } = props;

// console.log("User:");
// console.log(`  First Name: ${firstName}`);
// console.log(`  Last Name: ${lastName}`);
// console.log(`  Age: ${age}`);

// console.log("\nPost:");
// console.log(`  Title: ${title}`);
// console.log(`  Subtitle: ${subtitle}`);
// console.log(`  Year: ${year}`);

// console.log("\nSkills:");
// console.log(`  Skill One: ${skillOne}`);
// console.log(`  Skill Two: ${skillTwo}`);
// console.log(`  Skill Three: ${skillThree}`);
// console.log(`  Skill Four: ${skillFour}`);


// Exercise Solution 


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonInfo(person) {
    let skillsString = '';
    for (let i = 0; i < person.skills.length; i++) {
        skillsString += person.skills[i];
        if (i < person.skills.length - 1) {
            skillsString += ', ';
        }
    }

    let languagesString = '';
    for (let i = 0; i < person.languages.length; i++) {
        languagesString += person.languages[i];
        if (i < person.languages.length - 1) {
            languagesString += ', ';
        }
        if (i === person.languages.length - 2) {
            languagesString += 'and a little bit of ';
        }
    }

    const info =
        person.firstName +
        ' ' +
        person.lastName +
        ' lives in ' +
        person.country +
        '. He is ' +
        person.age +
        ' years old. He is an ' +
        person.job +
        '. He teaches ' +
        skillsString +
        '. He speaks ' +
        languagesString +
        '.';

    return info;
}

const personInfo = getPersonInfo(person);
console.log(personInfo);


function getPersonInfoDestructuring({ firstName, lastName, age, country, job, skills, languages }) {
    const skillsString = skills.join(", ");
    const languagesString = `${languages.slice(0, -1).join(", ")} and a little bit of ${languages.slice(-1)}`;

    const info =`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skillsString}. He speakes ${languagesString}`;

    return info;
}

console.log(getPersonInfoDestructuring(person))

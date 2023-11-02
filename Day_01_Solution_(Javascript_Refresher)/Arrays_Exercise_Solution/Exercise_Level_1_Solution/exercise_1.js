// Exercise Solution 

// Arrays Exercise Solution

// Exercise 1
const emptyArr = [];

// Exercise 2
const element = ["Helium", "Carbon", "Oxygen", "Magnesium", "Calcium"];

// Exercise 3
console.log("Element length: ", element.length);

// Exercise 4

const middleItem = Math.floor(element.length / 2);
const middleIndex = element[middleItem];

const lastItem = element.length - 1;
const lastIndex = element[lastItem];

console.log(element[0]);
console.log(middleIndex);
console.log(lastIndex);

// Exercise 5
const mixedDataTypes = [
    "Melih",
    22,
    false,
    5.75,
    null,
    { country: 'Turkey', city: "Manisa" },
    { skilss: ["HTML", "CSS", "JavaScript", "React"] }
];
console.log(mixedDataTypes.length)

// Exercise 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Exercise 7
console.log(itCompanies);

// Exercise 8
console.log(itCompanies.length);

// Exercise 9
const itFirst = itCompanies[0];

const itMid = Math.floor(itCompanies.length / 2);
const itMidIndex = itCompanies[itMid];

const itLast = itCompanies.length - 1;
const itLastIndex = itCompanies[itLast];

console.log(itFirst);
console.log(itMidIndex);
console.log(itLastIndex);

// Exercise 10
let eachCompany;
for (let eachCompany = 0; eachCompany < itCompanies.length; eachCompany++) {
    console.log(itCompanies[eachCompany]);
}

// Exercise 11
let upperEash;
for (let upperEash = 0; upperEash < itCompanies.length; upperEash++) {
    console.log(itCompanies[upperEash].toUpperCase());
}

// Exercise 12
const sentenceCompany = itCompanies.slice(0, -1).join(", ") + " and " + itCompanies.slice(-1) + " are big IT companies.";
console.log(sentenceCompany);

// Exercise 13

// Return company print

let findIndex = itCompanies.indexOf("Google");
if (findIndex !== -1) {
    console.log(`The index of "Google" is, ${findIndex}`);
}
else {
    console.log("company is not found")
}

// ---------------------------------------

let noFindIndex = itCompanies.indexOf("Cisco");
if (noFindIndex == 1) {
    console.log(`The index of "Cisco" is, ${noFindIndex}`);
}
else {
    console.log("Cisco company is not found")
}

// Exercise 14
function filterCompaniesWithMoreThanOneO(companies) {
    var filteredCompanies = [];

    for (var i = 0; i < companies.length; i++) {
        var company = companies[i];
        var oCount = 0;

        for (var j = 0; j < company.length; j++) {
            if (company[j].toLowerCase() === 'o') {
                oCount++;
                if (oCount > 1) {
                    break;
                }
            }
        }

        if (oCount <= 1) {
            filteredCompanies.push(company);
        }
    }

    return filteredCompanies;
}

var filteredCompanies = filterCompaniesWithMoreThanOneO(itCompanies);

console.log(filteredCompanies);

// Exercise 15
const sorted = itCompanies.sort();
console.log(sorted);

// Exercise 16
const reversed = itCompanies.reverse();
console.log(reversed);

// Exercise 17
const firstSlide = itCompanies.slice(0, 3);
console.log(firstSlide);

// Exercise 18
const lastSlide = itCompanies.slice(-3);
console.log(lastSlide);

// Exercise 19
function sliceMiddle(companies) {
    const middleIndex = Math.floor(companies.length / 2);
    if (companies.length % 2 == 0) {
        return companies.slice(middleIndex - 1, middleIndex + 1)
    }
    else {
        return [companies[middleIndex]];
    }
}
var middlecompaines = sliceMiddle(itCompanies);
console.log(middlecompaines);

// Exercise 20
const removeFirst = itCompanies.shift();
console.log(itCompanies);

// Exercise 21
function removeMiddle(companies) {
    var middleIndex = Math.floor(companies.length / 2);
    if (companies.length % 2 == 0) {
        companies.splice(middleIndex - 1, 2);
    }
    else {
        companies.splice(middleIndex, 1);
    }
}
removeMiddle(itCompanies);
console.log(itCompanies);

// Exercise 22
itCompanies.pop();
console.log(itCompanies)

// Exercise 23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

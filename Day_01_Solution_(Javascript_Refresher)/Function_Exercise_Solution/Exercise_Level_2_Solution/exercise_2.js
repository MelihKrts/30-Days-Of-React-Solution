// Functions Exercise Solution

// Exercise Level 2 Soution

// Exercise 2.1

function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return "No real roots";
    }
    else if (discriminant == 0) {
        const root = -b / (2 * a);
        return `Single real root: ${root}`;
    }
    else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return `Two real roots: ${root1} and ${root2}`;
    }
}

console.log(solveQuadEquation())
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))

// Exercise 2.2

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
const nameArray = ["Harun", "Selim", "Behzat"];
printArray(nameArray);

// Exercise 2.3

function showDateTime() {
    const date = new Date();

    const day = date.toLocaleString('en-US', { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "2-digit" });
    const year = date.getFullYear();

    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);

    return `${day}/${month}/${year} ${hour}:${minute}`;
}
console.log(showDateTime())

// Exercise 2.4

function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return { x, y };
}

console.log(swapValues(4, 5))

// Exercise 2.5

function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const numberArr = [1, 2, 3, 4, 5];
const letterArr = ["A", "B", "C"];
console.log(reverseArray(numberArr));
console.log(reverseArray(letterArr));

// Exercise 2.6

function capitalizeArray(inputArray) {
    if (!Array.isArray(inputArray)) {
        throw new Error('Input must be an array');
    }

    const capitalizedArray = inputArray.map((str) => {
        if (typeof str !== "string") {
            throw new Error('Array must contain only strings');
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
    })

    return capitalizedArray
}

const name = ["sophie", "john", "alice"];
console.log(capitalizeArray(name));

// Exercise 2.7

function addItem(item, existingArray) {
    if (!Array.isArray(existingArray)) {
        throw new Error('Existing array parameter must be an array');
    }
    const newArray = existingArray.slice();
    newArray.push(item);

    return newArray;
}
const existingArray = ["HTML", "CSS", "JavaScript"];
const newItem = "React";

console.log(addItem(newItem, existingArray));

// Exercise 2.8

function removeItem(index, existingArray) {
    if (!Array.isArray(existingArray)) {
        throw new Error('Existing array parameter must be an array');
    }
    const newArray = existingArray.slice();

    if (index < 0 || index >= newArray.length) {
        throw new Error('Index is out of valid range');
    }

    newArray.splice(index, 1);
    return newArray;
}
const existingFruit = ['apple', 'banana', 'cherry'];
const indexToRemove = 1;
const newArray = removeItem(indexToRemove, existingFruit);
console.log(newArray);

// Exercise 2.9

function evensAndOdds(number) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            even++
        }

        else {
            odd++;
        }
    }
    return `The number of odds are ${odd}. The number of evens are ${even}.`;
}

console.log(evensAndOdds(100));

// Exercise 2.10

function sumArguments(...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(sumArguments(1, 2, 3));

// Exercise 2.11

function userGenerator(length) {
    let id = "";
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        id += character.charAt(Math.floor(Math.random() * character.length));
    }

    return id
}
console.log(userGenerator(7));
console.log(userGenerator(7));
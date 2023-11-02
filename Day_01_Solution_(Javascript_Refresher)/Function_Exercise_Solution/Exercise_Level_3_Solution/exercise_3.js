// Functions Exercise Solution

// Exercise Level 3 Soution

// Exercise 3.1

// const prompt = require('prompt-sync')();

// function userIdGeneratedByUser() {

//     const characterLengthInput = prompt("Enter the number of characters for each ID:");

//     const characterLength = parseInt(characterLengthInput, 10);

//     if (isNaN(characterLength) || characterLength <= 0) {
//         console.error("Invalid input for character length. Please enter a valid positive number.");
//         return;
//     }

//     const numberOfIdsInput = prompt("Enter the number of IDs to generate:");

//     const numberOfIds = parseInt(numberOfIdsInput, 10);

//     if (isNaN(numberOfIds) || numberOfIds <= 0) {
//         console.error("Invalid input for the number of IDs. Please enter a valid positive number.");
//         return;
//     }

//     for (let i = 1; i <= numberOfIds; i++) {
//         const userId = generateRandomId(characterLength);
//         console.log(`Generated User ID ${i}: ${userId}`);
//     }
// }

// function generateRandomId(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let randomId = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         randomId += characters.charAt(randomIndex);
//     }
//     return randomId;
// }

// userIdGeneratedByUser();

// Exercise 3.2

function generateColors(colorType, numberOfColors) {
    const colors = [];
    for (let i = 0; i < numberOfColors; i++) {
        let color = '';

        if (colorType === "hex") {
            color = generateRandomHexColor();
        }

        else if (colorType === "rgb") {
            color = generateRandomRgbColor();
        }

        else {
            throw new Error('Invalid colorType. Please use "hex" or "rgb".');
        }
        colors.push(color);
    }
    return colors
}

function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb : ${r}, ${g},${b}`;
}

console.log(generateColors("hex", 5));
console.log(generateColors("rgb", 1));

// Exercise 3.3
function shuffleArray(arr) {
    const randomArr = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        remove = arr.splice(randomIndex, 1)[0];

        randomArr.push(remove);
    }
    return randomArr;
}
console.log(shuffleArray(["1", "2", "3", "4", "5"]));

// Exercise 3.4

function factorial(facNumber) {
    if (facNumber < 1) return 1;
    return facNumber * factorial(facNumber - 1);
}
console.log(factorial(4));

// Exercise 3.5

function isEmpty(value) {
    if (value === undefined) {
        return "Empty";
    }
    else {
        return "Not Empty";
    }
}

console.log(isEmpty());

// Exercise 3.6

function average(array) {
    let result = 0;

    for (item of array) {
        if (typeof item !== "number") {
            result = 'No other value can be entered except number';
            break;
        }
        result += item;
    }
    return Math.floor(result/ array.length);
}
console.log(average(["A"]))
console.log(average([25, 25, 100, 50]));
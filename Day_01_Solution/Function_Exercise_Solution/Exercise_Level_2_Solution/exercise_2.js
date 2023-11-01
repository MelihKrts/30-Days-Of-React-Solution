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
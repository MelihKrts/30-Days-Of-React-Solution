// Functions Exercise Solution

// Exercise Level 1 Soution

// Exercise 1.1

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Melih", "Karatas"));

// Exercise 1.2

function addNumber(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum
}
console.log(addNumber(7, 15));

// Exercise 1.3

function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(5));

// Exercise 1.4

function convertCelciusToFahrenheit(celcius) {
    let f
    let fahrenheit = (celcius * 9 / 5) + 32;
    return fahrenheit;
}
console.log(convertCelciusToFahrenheit(7));

// Exercise 1.5

function calculateBMI(weight, height) {

    let bmi = weight / (height * height);

    let weightGroup;

    if (bmi < 18.5) {
        weightGroup = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightGroup = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightGroup = 'Overweight';
    } else {
        weightGroup = 'Obese';
    }

    return {
        bmi: bmi.toFixed(2),
        weightGroup: weightGroup
    };
}

const bmiInfo = calculateBMI(70, 1.75);
console.log(`Your BMI is ${bmiInfo.bmi}. You are ${bmiInfo.weightGroup}.`);

// Exercise 1.6

function checkSeason(season) {
    let seasonType;

    switch (season) {
        case "December":
        case "January":
        case "February":
            seasonType = "Winter"
            break;

        case "March":
        case "April":
        case "May":
            seasonType = "Spring"
            break;

        case "June":
        case "July":
        case "August":
            seasonType = "Summer";
            break;

        case "September":
        case "October":
        case "November":
            seasonType = "Autumn";
            break;

        default:
            seasonType = "Unknown";
            break;
    }

    return `${season} is in the ${seasonType} season`;
}
console.log(checkSeason("January"));


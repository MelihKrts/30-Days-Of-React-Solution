// Exercise Level 3 Solution

// Exercise 3.1 and 3.2 solution 
const prompt = require("prompt-sync")();
let dayInput = prompt("Enter a month: ").toLowerCase();

let year = prompt("Enter a year: ");
year = Number(year);

function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        console.log(year + " is a leap year");
    }
    else {
        console.log(year + " is not a leap year")
    }
}




let dayIsMonth;
switch (dayInput) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        dayIsMonth = 31;
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        dayIsMonth = 30;
        break;

    case "february":
        dayIsMonth = leapYear(year) ? 29 : 28;
        break;

    default:
        console.log("Invalid month input.");
        return;


}
console.log(`${dayInput.charAt(0).toUpperCase() + dayInput.slice(1)} ${year} has ${dayIsMonth} days`);
leapYear(year);
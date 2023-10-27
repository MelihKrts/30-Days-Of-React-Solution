// Exercise Level 2 Solution

// Exercise 2.1

const prompt = require("prompt-sync")();
let notesPrompt = prompt("Enter a exam grade: ");
notesPrompt = Number(notesPrompt);
switch (true) {

    case (notesPrompt >= 80 && notesPrompt <= 100):
        console.log("Letter grade A");
        break;

    case (notesPrompt >= 70 && notesPrompt <= 79):
        console.log("Letter grade B");
        break;

    case (notesPrompt >= 60 && notesPrompt <= 69):
        console.log("Letter grade C");
        break;

    case (notesPrompt >= 50 && notesPrompt <= 59):
        console.log("Letter grade D");
        break;

    case (notesPrompt >= 0 && notesPrompt <= 49):
        console.log("Letter grade F");
        break;

    default:
        console.log("Invalid score");
        break;
}

// Exercise 2.2

let seasonPrompt = prompt("Enter month name: ").toLowerCase();
switch (seasonPrompt) {
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn");
        break;

    case "december":
    case "january":
    case "february":
        console.log("The season is Winter");
        break;

    case "march":
    case "april":
    case "may":
        console.log("The season is Spring");
        break;

    case "june":
    case "july":
    case "august":
        console.log("The season is Summer")
        break;

    default:
        console.log("Invalid month input.");
        break;
}

// Exercise 2.3

let dayPrompt = prompt("What is the day today? ").toLowerCase();
switch (dayPrompt) {
    case "saturday":
    case "sunday":
        console.log(`${dayPrompt} is a weekend`);
        break;

    case "monday":
    case "tuesday":
    case "WednesDay":
    case "thurday":
    case "friday":
        console.log(`${dayPrompt} is a work day`);
        break;

    default:
        console.log("Invalid day input.");
        break;
}
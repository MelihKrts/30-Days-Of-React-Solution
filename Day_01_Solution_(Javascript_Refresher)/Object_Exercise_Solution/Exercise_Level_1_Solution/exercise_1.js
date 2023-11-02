// Object Exercise Solution

// Exercise Level 1 Solution

// Exercise 1.1

const dog = {};

// Exercise 1.2
console.log(dog);

// Exercise 1.3

const dogTwo = {
    name: "Lucky",
    legs: 4,
    color: "white",
    age: 3,
    bark: function () {
        return "Woof Woof";
    }
}

// Exercise 1.4

console.log(dogTwo.name);
console.log(dogTwo.legs);
console.log(dogTwo.color);
console.log(dogTwo.bark());

// Exercise 1.5

dogTwo.breed = "Golden Retriever";
dogTwo.getInfo = function () {
    return (`${this.name} is a, ${this.legs}, ${this.age}-year-old ${this.color}, ${this.breed}`);
}
console.log(dogTwo.breed);
console.log(dogTwo.getInfo());
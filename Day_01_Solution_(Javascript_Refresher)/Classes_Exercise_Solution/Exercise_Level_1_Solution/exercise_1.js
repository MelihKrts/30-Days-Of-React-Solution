// Classes Exercise Solution

// Exercise Level 1 Solution

// Exercise 1.1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        return `Name: ${this.name}\n Age: ${this.age}\n Color: ${this.color}\n Legs: ${this.legs}\n Type: ${this.type}\n Breed: ${this.breed}`;
    }

    animalType(type) {
        this.type = type;
        return `Type: ${this.name} is ${type}`
    }

    animalBreed(breed) {
        this.breed = breed;
        return `Breed: ${this.name} is ${breed}`;
    }
}

// const animal = new Animal("Lucky", 2, "White", 4);
// animal.animalType("Mammalia");
// animal.animalBreed("Dalmatia");
// console.log(animal.displayInfo());

// Exercise 1.2

class Dog extends Animal {
    constructor(name, age, color, legs, breed, type) {
        super(name, age, color, legs)
        this.breed = breed;
        this.type = type;
    }

    bark() {
        return `This is ${this.name} is barking Woof!`;
    }

}
const dog = new Dog("Buddy", 3, "Brown", 4, "Mammalia", "Golden Retreiver");
console.log(dog.displayInfo());
console.log(dog.bark());

class Cat extends Animal {
    constructor(name, age, color, legs, breed, type) {
        super(name, age, color, legs)
        this.breed = breed;
        this.type = type;
    }

    meov() {
        return `This is ${this.name} is meowing Meow!`;
    }
}
const cat = new Cat("Lucky", 1, "Orange", 4, "Mammalia", "Orange Cat");
console.log(cat.displayInfo());
console.log(cat.meov());
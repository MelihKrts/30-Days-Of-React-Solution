// Classes Exercise Solution

// Exercise Level 2 Solution

// Exercise 2.1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        return `Name: ${this.name}\nAge :${this.age}\nColor: ${this.color}\nLegs: ${this.legs}`;
    }

    animalType(type) {
        this.type = type;
        return `Type : ${this.name} is ${type}`
    }

    animalBreed(breed) {
        this.breed = breed;
        return `Breed: ${this.name} is ${breed}`;
    }
}

const animal = new Animal("Honey", 3, "Gray", 4);
console.log(animal.displayInfo());
console.log(" ");

class Dog extends Animal {
    constructor(name, age, color, legs, breed, type) {
        super(name, age, color, legs)
        this.breed = breed;
        this.type = type;
    }

    displayInfo() {
        return `Dog Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}\nBreed: ${this.breed}\nType: ${this.type}`;
    }

    bark() {
        return `This is ${this.name} is barking woof!`;
    }
}
const dog = new Dog("Buddy", 3, "Brown", 4, "Mammalia", "Golden Retreiver");
console.log(dog.displayInfo());
console.log(dog.bark());
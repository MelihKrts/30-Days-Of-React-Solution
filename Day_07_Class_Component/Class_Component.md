# Day 07 Class Component Exercise Level 1 Solution
## Answer to Exercise Level 1 Solution
### Answer to Question 1
 ```javascript
    function add(a, b) {
    return a + b;
    }

    console.log(add(5, 5));
```
<br>

### Answer to Question 2

<p align="justify">
<strong> Inheritance : </strong>  is a fundamental concept in <code>object-orianted programming (OOP)</code> that allows a new <code>class</code> (child or derived class) to inherit properties and methods from an existing class (parent or base class). <br> 

```javascript
// Parent class

function Animal(name) {
  this.name = name;
}

// Method in the parent class
Animal.prototype.sayHello = function () {
  console.log(`Hello I'm ${this.name}`);
}

// Child Class
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
// Inherit from the parent class
Dog.prototype = Object.create(Animal.prototype);

// Additional method in the child class
Dog.prototype.bark = function () {
  console.log("Woof! Woof!")
};

// Create an instance of the child class
const myDog = new Dog("Buddy", "Golden Retreiver");
myDog.sayHello();
myDog.bark();
console.log(myDog.breed);
```
</p>

### Answer to Question 3
<p align="justify">In React, a class-based component is a type of component that is defined ES6 class syntax </p>

### Answer to Question 4
<table style="background-color:pink">
  <thead>
    <tr>
      <th colspan="2" style="text-align:center">Differences between Functional Components and Class Components </th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td style="text-align:center">Functional Component</td>
      <td style="text-align:center">Class Component</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
    <tr>
      <td>Row 3, Cell 1</td>
      <td>Row 3, Cell 2</td>
    </tr>
  </tbody>
</table>


### Answer to Question 5
1. State with Complex Logic
2. Access to Lifecycle Methods
3. Ref Usage
4. Historical Codebases
5. Inheritance
6. Codebases Using Mixins

### Answer to Question 6
1. Complex State Logic
2. Access to Lifecycle Methods
3. Ref Usage
4. Inheritance
5. Codebases Using Mixins
6. Integration with External Libraries
7. Historical Codebases
8. Integration with Redux

### Answer to Question 7
<p align="justify">Functional component. Because the current technology (relative to the class component) is easier to write, maintain, hook than the class component and React recommends the functional component.</p>

### Answer to Question 8
<p align="justify">Each component in React has a lifecycle which you can monitor and manipulate during its three main phases <br>

1. Mounting
2. Updating
3. Unmounting
</p>

### Answer to Question 9
<p align="justify">The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The changes in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.</p>

# References
- [Simplilearn](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state)
- [W3Schools](https://www.w3schools.com/react/react_lifecycle.asp)
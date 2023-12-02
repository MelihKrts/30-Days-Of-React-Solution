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
<table>

<thead>
<tr>
<th colspan="2" style="text-align:center">Differences between Functional Components and Class Components </th>
</tr>
</thead>

<tbody align="justify">

<tr align="center">
<td>Functional Component	</td>
<td> Class Component </td>
</tr>

<tr>
<td>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).	</td>
<td>A class component requires you to extend from React. Component and create a render function that returns a React element.
</td>
</tr>

<tr>
<td>There is no render method used in functional components.	</td>
<td>It must have the render() method returning JSX (which is syntactically similar to HTML)
</td>
</tr>

<tr>
<td>Functional components run from top to bottom and once the function is returned it can’t be kept alive.	</td>
<td>The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component.
</td>
</tr>

<tr>
<td>React lifecycle methods (for example, componentDidMount) cannot be used in functional components.	</td>
<td>React lifecycle methods can be used inside class components (for example, componentDidMount).
</td>
</tr>

<tr>
<td>Constructors are not used.	</td>
<td>Constructor is used as it needs to store state. </td>
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

#### Mounting
<hr>

<p align="justify">The mounting phase refers to the period when a component is being created and inserted into the DOM </p>

<p align="justify">During the phase, several lifecycle methods are invoked by React to enable the developer to configure the component, set up any necessary state or event listeners, and perfom other initialization tasks.</p> 

<p align="justify">The mounting phase has three main lifecycle methods
</p>
<hr>

#### The `constructor`
<hr>
<p align="justify">The <code>constructor()</code> method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance.</p>

<p align="justify">The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
</p>

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
<hr>

#### The `render`
<p align="justify">The <code> render()</code> method is required, and is the method that actually outputs the HTML to the DOM. </p>
<hr>

#### The `getDerivedStateFromProps`
<p align="justify"><code>The getDerivedStateFromProps()</code> method is called right before rendering the element(s) in the DOM.

This is the natural place to set the <code>state</code> object based on the initial <code>props</code>.

It takes <code>state</code> as an argument, and returns an object with changes to the <code>state</code>.

The example below starts with the favorite color being "red", but the <code>getDerivedStateFromProps()</code> method updates the favorite color based on the favcol attribute:</p>

<br>

`props`: The updated props for the component.

`state`: The current state of the component.

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```

<hr>
<br>

#### The `componentDidMount`
<hr>

<p align="justify">
The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.
</p>

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```
<br>
<hr>

### Updating
<p align="justify">
The next phase in the lifecycle is when a component is updated.</p>

<p align="justify">A component is updated whenever there is a change in the component's state or props.
<p>
<hr>

### Answer to Question 9
<p align="justify">The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The changes in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.</p>

```jsx
class Greetings extends React.Component {
  state = {
    name: "World"
  };

  updateName() {
    this.setState({ name: "Simplilearn" });
  }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}
```

<br>

# References
- [Simplilearn](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state)
- [W3Schools](https://www.w3schools.com/react/react_lifecycle.asp)
- [Geeks of Geeks](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/)
- [FreeCodeCamp](https://www.freecodecamp.org/news/react-component-lifecycle-methods)
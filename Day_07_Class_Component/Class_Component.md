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

<p align="justify">React has four built-in methods that gets called, in this order, when mounting a component:

1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

</p>
<hr>

#### The `constructor()`
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

#### The `render()`
<p align="justify">The <code>render()</code> method is required, and is the method that actually outputs the HTML to the DOM. </p>
<hr>

#### The `getDerivedStateFromProps()`
<p align="justify">The <code>getDerivedStateFromProps()</code> method is called right before rendering the element(s) in the DOM.

This is the natural place to set the <code>state</code> object based on the initial <code>props</code>.

It takes <code>state</code> as an argument, and returns an object with changes to the <code>state</code>.

The example below starts with the favorite color being "red", but the <code>getDerivedStateFromProps()</code> method updates the favorite color based on the favcol attribute:</p>


`props`: The updated props for the component.

`state`: The current state of the component.

<br>

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

#### The `componentDidMount()`

<p align="justify">
The <code>componentDidMount()</code> method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.
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
<hr>

### Updating
<p align="justify">
The next phase in the lifecycle is when a component is updated.</p>

<p align="justify">A component is updated whenever there is a change in the component's state or props.
<p>

<p align="justify">
React has five built-in methods that gets called, in this order, when a component is updated:

1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`
</p>
<hr>

#### The `getDerivedStateFromProps()`
<p align="justify">Also at updates the <code>getDerivedStateFromProps</code> method is called. This is the first method that is called when a component gets updated.</p>

<p align="justify">This is still the natural place to set the state object based on the initial props.</p>

<p align="justify">The example below has a button that changes the favorite color to blue, but since the <code>getDerivedStateFromProps()</code> method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:</p>
<br>

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```
<hr>

#### The `shouldComponentUpdate()`
<p align="justify">In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. </p>

<p align="justify">The default value is <code>true</code>.</p>

<p align="justify">The example below shows what happens when the <code>shouldComponentUpdate()</code> method returns <code>false</code></p>


Stop the component from rendering at any update

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

<br>
<p align="justify">Same example as above, but this time the <code>shouldComponentUpdate()</code> method returns true instead</p>

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

<hr>

#### The `render()`
<p align="justify">The <code>render()</code> method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.</p>

<p align="justify">
The example below has a button that changes the favorite color to blue:
</p>

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```
<hr>

#### The `getSnapshotBeforeUpdate()`
<p align="justify">The <code>getSnapshotBeforeUpdate()</code> method is called just before the component's UI is updated. It allows the component to capture some information about the current state of the UI, such as the scroll position before it changes. This method returns a value that is passed as the third parameter to the <code>componentDidUpdate()</code> method.</p>

<p align="justify">Here's an example of how to use <code>getSnapshotBeforeUpdate()</code> to capture the scroll position of a component before it updates:</p>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritefood: "rice"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefood: "pizza"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritefood;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite food is " + this.state.favoritefood;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```
<p align="justify">This is a React component called <code>Header</code> that renders a heading and a button that, when clicked, shows the user's favorite food. The component also has a state that keeps track of the favorite food and whether or not to show it.</p>

<p align="justify">The <code>constructor</code> method sets the component's initial state, including the default favorite food of "rice" and the <code>showFavFood</code> state variable to false.</p>

<p align="justify"> The <code>componentDidMount</code> method is called after the component has been mounted to the DOM. In this case, it sets a timeout that will change the favorite food to "pizza" after one second. </p>

<p align="justify">The <code>getSnapshotBeforeUpdate</code> method is called right before the component is updated. It checks if the <code>favoriteFood</code> state variable has changed since the last update and returns an object with the previous favorite food if it has. Otherwise, it returns <code>null</code>. </p>

<p align="justify"> The <code>componentDidUpdate</code> method is called after the component has been updated. It receives the previous props, state, and snapshot as arguments. In this case, it checks if the snapshot is not null and logs the previous favorite food to the console. </p>

<p align="justify"> In the <code>render</code> method, the component renders a heading that displays the current favorite food state variable. When the button is clicked, the showFavFood state variable is set to <code>true</code> and a paragraph is rendered that displays the current favorite food state variable. </p>

<p align="justify"> Finally, the <code>ReactDOM.render</code> function is called to render the Header component inside an HTML element with the id of "root".</p>

<hr>

#### The `componentDidUpdate()`
<p align="justify">
<p align="justify">The <code>componentDidUpdate</code> method is called after the component is updated in the DOM.</p>

<p align="justify">The example below might seem complicated, but all it does is this: </p>

<p align="justify"> When the component is mounting it is rendered with the favorite color "red". </p>

<p align="justify"> When the component has been mounted, a timer changes the state, and the color becomes "yellow". </p>

<p align="justify"> This action triggers the update phase, and since this component has a <code>componentDidUpdate</code> method, this method is executed and writes a message in the empty DIV element:</p>
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
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```
<hr>

### Unmountig
<p align="justify">The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
<p align="justify">React has only one built-in method that gets called when a component is unmounted:

1. `componentWillUnmount()`
</p>


#### The `componentWillUnmount()`
<p align="justify">The <code>componentWillUnmount</code> method is called when the component is about to be removed from the DOM.</p>

<p align="justify">Click the button to delete the header:</p>

```jsx
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
```
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
<p align="justify"> 

1. A state can be modified based on user action or network changes

2. Every time the state of an object changes, React re-renders the component to the browser
  
3. The state object is initialized in the constructor
  
4. The state object can store multiple properties

5. `this.setState()` is used to change the value of the state object

6. `setState()` function performs a shallow merge between the new and the previous state
</p>

<br>

#### The `setState()` Method
<p align="justify">State can be updated in response to event handlers, server responses, or prop changes. This is done using the <code>setState()</code> method. The <code>setState()</code> method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.</p>

<p align="justify">Always use the <code>setState()</code> method to change the state object, since it will ensure that the component knows it’s been updated and calls the <code>render()</code> method.</p>


# References
- [Simplilearn](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state)
- [W3Schools](https://www.w3schools.com/react/react_lifecycle.asp)
- [Geeks of Geeks](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/)
- [FreeCodeCamp](https://www.freecodecamp.org/news/react-component-lifecycle-methods)
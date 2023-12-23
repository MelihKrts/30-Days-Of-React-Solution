# Day 16 Higher Order Component Exercise Level 1 Solution
## Answers to Exercise Level 1 Questions
### Answer to Question 1
<p align="justify">A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

```javascript
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func) {
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction);
```
</p>

### Answer to Question 2
<p align="justify">In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.</p>

<p align="justify">HOC's allow you to add additional functionally to a component without modifiying the component's code.</p>

### Answer to Quetion 3
<p align="justify">A higher-order function is a concept in functional programming that involves functions, while a higher-order component is a concept in React that involves components.</p>

### Answer to Question 4
<p align="justify">True</p>

# References
[FreeCodeCamp](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/)

[FreeCodeCamp](https://www.freecodecamp.org/news/higher-order-components-in-react/)
# Exercises : Components Solution
#### Answer to question 1
<p align="justify">
1)  <strong>Nomenclature : </strong> A named function has a name. It is defined using the <code>function</code> keyword </p>
   
``` javascript
function regularFunction(parameters) {
  return result;
}
```
<br>
<p align="justify">
1.2) <strong>Arrow Function :  </strong> Arrow functions usually do not use names
</p> 

```javascript
const arrowFunction = (parameters) => {
  return result;
};
```
<br>

- Arrow function does not have `this` keyword. <br>
- The normal function takes unlimited parameters, while the Arow function takes one or no parameters
<br><br>

<p align="justify">
<h4>Answer to question 2</h4>
2) Components are independent and resuable pieces of code. A React application is a combination of components. We use javascript functions or classes to create components
</p> <br>

# Functional Component
#### Answer to question 3
```javascript
export default function Header(){
  const titleText= `Lorem ipsum dolor sit amet`;
  return(
    <h1>{titleText}</h1>
  )
}
```
<br>

<p align="justify">
<h4>Answer to question 4 </h4>
4) <strong>Usage :</strong> JS functions are specific to doing something. React functional components are used to define components that can be passed to the user interface in React. <br>
   
<strong>Definition :</strong> JS function are defined with the `function` keyword, while React components are defined using the `const` keyword and `=>` <br>

<strong>State :</strong> JS functions do have not have a state. In React, functions with state can be created.
</p>

<br>

# Small React Component
#### Answer to question 5
```javascript
const Button = () => <button> button </button>
```
<br>

# Button or Input Field Component
#### Answer to question 6
```javascript
// Button Component
const Button = () => {
    return(
        <button> This is a button </button>
    )
}
```
<br>

```javascript
// Input Component
const Input = () =>{
    return(
        <input type="text">
    )
}
```
<br>

# :information_source: Info
Answers to questions 7,8,9 of the exercise, Components [see Exercise_app](https://github.com/MelihKrts/30-Days-Of-React-Solution/tree/main/Day_04_Components/exercises_app)
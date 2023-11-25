# Day 05 Components and Props Exercise Level 1 Solution
## Answers to Exercise Level 1 Questions
<p align="justify">
1. <strong>Props :</strong> Is a special keyword in React that stands for properties and is used to transfer data from one component to another and often from a parent component to a child component. Props can be called data mover or data migration tool. <br><br>
2. In a functional React component, you can access the props passed to the component as an object parameter in the function. <br>
   
```jsx
const Component = (props) => {
    return(
        <div>
        <p> Name: {props.name}</p>
        <p> Age:  {props.age} </p>
        </div>
    )
}
```
<br>
3.<strong> Datatype Props: </strong>
<ul>
<br>
<li><code>Boolean</code></li><br>
<li><code>Number</code></li><br>
<li><code>String</code></li><br>
<li><code>Array</code></li><br>
<li><code>Object</code></li> <br>
<li><code>Function</code></li>
</ul>
<br>
1. The PropTypes package helps us assign the data types of the props we pass to a component. <br><br>
2. Used to provide a default prop value for a component.
<p>

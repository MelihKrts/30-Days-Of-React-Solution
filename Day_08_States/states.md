# Day 08 States Exercise Level 1 Solution
## Answer to Exercise Level 1 Solution
### Answer to Question 1
<p align="justify">My condition today is good. I am happy to reach day eight, bu I have to go back to the previous days and repeat them. It's bit boring as there are 22 days left in the repo and I have to repeat backwards. &#128515; </p> 

### Answer to Question 2
<p align="justify">React Components has a built-in <code>state</code> object. The <code>state</code> object is where we store property values of the component.
</p>

<p align="justify">When the <code>state</code> object chnages, the component re-renders</p>

### Answer to Question 3
<table>

<thead>
<tr>
<th colspan="2" style="text-align:center">Differences Between Props and State</th>
</tr>
</thead>

<tbody align="justify">
<tr align="center">
<td>Props</td>
<td> State</td>
</tr>

<tr>
<td>The Data is passed from one component to another.</td>
<td>The Data is passed within the component only.
</td>
</tr>

<tr>
<td>It is Immutable (cannot be modified).</td>
<td>It is Mutable (can be modified).</td>
</tr>

<tr>
<td>Props can be used with state and functional components.	</td>
<td>The state can be used only with the state components/class component (Before 16.0).</td>
</tr>

<tr>
<td>Props are read-only. </td>
<td>The state is both read and write.</td>
</tr>

</tbody>

</table>

### Answer to Question 4
```jsx
import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div>
        <p> Counter : {this.state.counter} </p>
      </div>
    );
  }
}
```

### Answer to Question 5
```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [mySet, setMySet] = useState(new Set());

  const addItemToSet = (item) => {
    setMySet((prevSet) => new Set([...prevSet, item]));
  };

  const removeItemFromSet = (item) => {
    setMySet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(item);
      return newSet;
    });
  };

  return (
    <div>
      <p>Set items: {Array.from(mySet).join(', ')}</p>
      <button onClick={() => addItemToSet('Item 1')}>Add Item 1</button>
      <button onClick={() => addItemToSet('Item 2')}>Add Item 2</button>
      <button onClick={() => removeItemFromSet('Item 1')}>Remove Item 1</button>
    </div>
  );
}

export default MyComponent;
```
# References
- [W3Schools](https://www.w3schools.com/react/react_state.asp)
- [Geek Of Geeks](https://www.geeksforgeeks.org/what-are-the-differences-between-props-and-state/)
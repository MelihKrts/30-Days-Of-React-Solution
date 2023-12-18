# Day 13 Uncontrolled Copmonent Exercise Solution
## Answer to Exercise Question
### Answer to Question 1
<p align="justify"><b>Controlled Input: </b> In controlled inputs, there is at all times some sort of changes and amendments going on in the field, every single character entered and even something like a backspace would count as a change. </p>

### Answer to Question 2
<p align="justify"><b>Uncontrolled Input : </b> With uncontrolled input values, there is no updating or changing of any states. That value can be exploited by pulling it using the <code>ref</code> keyword whenever it needs to be used.</p>

### Answer to Question 3
<hr>

### Using `ref`
```jsx
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myElementRef = useRef(null);

  useEffect(() => {
    // Access the content of the element
    const elementContent = myElementRef.current.innerHTML;
    console.log(elementContent);
  }, []);

  return <div ref={myElementRef}>This is the content</div>;
}
```
<br>

### Using `State`
```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [elementContent, setElementContent] = useState('This is the content');

  // Access the content of the element
  console.log(elementContent);

  return <div>{elementContent}</div>;
}
```

<br>

### Using `document.getElementById`
```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Access the content of the element using its id
    const elementContent = document.getElementById('myElementId').innerHTML;
    console.log(elementContent);
  }, []);

  return <div id="myElementId">This is the content</div>;
}
```

<br>

### Using `Event Handling`
```jsx
import React from 'react';

function MyComponent() {
  const handleElementClick = (event) => {
    const elementContent = event.target.innerHTML;
    console.log(elementContent);
  };

  return <div onClick={handleElementClick}>This is the content</div>;
}
```

### Answer to Question 4
<h4><b>Unpredictable Updates: </b> </h4> 

<p align="justify">Directly manipulating the DOM can lead to unpredictable updates, as React manages its own virtual DOM to efficiently update and render components. When you manually modify the DOM outside of React's knowledge, it may not be aware of those changes, leading to inconsistencies and potential bugs. </p>

<h4><b>Reconciliation Issues:</b></h4>

<p align="justify">React relies on a process called reconciliation to efficiently update the DOM. If you manipulate the DOM directly, React may not be able to reconcile its virtual DOM with the actual DOM, leading to unexpected behavior.</p>

<h4><b>Performance Concerns:</b></h4>

<p align="justify">React is optimized for performance, and it employs various strategies like batching updates and virtual DOM diffing to minimize the number of changes sent to the actual DOM. Directly manipulating the DOM can bypass these optimizations and negatively impact the performance of your application.</p>

<h4><b>Code Maintainability: </b></h4>
<p align="justify">Direct DOM manipulation can make your code less maintainable and harder to reason about. React components provide a declarative and component-based approach to building user interfaces. Direct DOM manipulation tends to introduce imperative code, making it more difficult to understand and maintain over time.</p>

<h4><b>Compatibility Issues:</b></h4>

<p align="justify">React abstracts away many cross-browser compatibility issues, ensuring that your application works consistently across different browsers. Directly manipulating the DOM might introduce browser-specific quirks and issues that React takes care of under the hood.</p>

<h4><b>Debugging Challenges:</b></h4>
<p align="justify">Debugging becomes more challenging when you mix direct DOM manipulation with React. React DevTools and other debugging tools are designed to work seamlessly with React's virtual DOM. Direct manipulation can lead to inconsistencies between the virtual and actual DOM, making it harder to identify and fix issues.</p>

### Answer to Question 5
<p align="justify">The choice between controlled and uncontrolled components depends on the specific requirements of  project, the level of control you need, and  personal or team preferences.</p>

### Answer to Question 6
`Create a Ref:`
```jsx
const inputRef = React.createRef();
```

<br>

`Attach the Ref to the Input Element:`
```jsx
<input type="text" ref={inputRef} />
```

<br>

`Access the Input Value:`
```jsx
const inputValue = inputRef.current.value;
```

<br>

```jsx
import React from 'react';

function UncontrolledInput() {
  const inputRef = React.createRef();

  const handleClick = () => {
    // Access the input value directly using the ref
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </>
  );
}

export default UncontrolledInput;
```

### Answer to Question 7
<p align="justify">No. There is no issue using uncontrolled input on React performance.</p>

### Answer to Question 8
- Integration with Non-React Code
  
- Legacy Code
- Performance Considerations
- Simpler Forms
- Interacting with External Libraries
- Rapid Prototyping

### Answer to Question 9
- Form Validation

- Dynamic Form Behavior
- Consistent UI State
- Programmatic Control
- Easy Testing
- React's One-Way Data Binding
- Integration with React Features
- Predictable Rendering

### Answer to Question 10
<p align="justify">Yes. I use controlled input</p>

# References
[Geek for Geeks](https://www.geeksforgeeks.org/react-js-uncontrolled-vs-controlled-inputs/)

[Stackoverflow](https://stackoverflow.com/questions/70706964/can-i-use-uncontrolled-inputs-in-react-without-ref)
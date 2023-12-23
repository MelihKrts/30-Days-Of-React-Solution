# Day 11 Event Exercise Level 1 Solution
## Answers to Exercise Level 1 Questions
### Answer to Question 1


<p align="justify">An event is an action or occurence recognized by a software</p>

### Answer to Question 2

<p align="justify">

- React uses `camelCase` for event names while HTML uses lowercase.

- Instead of passing a `string` as an event handler, we pass a function React.

- Another difference between HTML and React event is that you cannot retrun `false` to prevent default behavior in React. You must call `preventDefault` explicity.

- In HTML, the function is called by inserting `()` to the function name. If we don't want to utilize this way, we may use `addEventListener` to provide events and listeners, however in React, we require the method name without the `()` appened.

<br>

**HTML**


```html
<button onclick="clickHandler()">
  Clicked
</button>
```
<br>

**React.js**


```jsx
<button onClick={clickHandler}>
    Clicked
</button>
```

</p>

<br>

### Answer to Question 3


1) **onKeyDown**

<br>

```jsx
  handleKeyDown = (event) => {
    this.setState({ message: "Key Down: " + event.key });
  };
```
<br>

2) **onKeyPress**

<br>

```jsx
  handleKeyPress = (e) =>{
    this.setState({message: "Key Pressed: "+ e.key})
  }
```

<br>

3) **onKeyUp**

<br>

```jsx
  handleKeyUp = (e) => {
    this.setState({ message: "Key Up " + e.key })
  }
```

<br>

4) **onChange**

<br>

```jsx
  handleChange = (e) => {
    this.setState({ message: "Key Press " + event.target.value })
  }
```

<br>

### Answer to Question 4


1) **onClick**

<br>

```jsx
  handleClick = (e) => {
    this.setState({
      message: "Welcome to the world of events"
    })
  }
```

<br>

2) **onDoubleClick**

<br>

```jsx
  handleDoubleClick = (e) => {
    this.setState({
      message: "Double Clicked"
    })
  }
```

<br>

3) **onMouseDown**

<br>

```jsx
  handleMouseDown = (e) => {
    this.setState({
      message: "Mouse button pressed!"
    })
  }
```

<br>

4) **onMouseUp**

<br>

```jsx
  handleMouseUp = (e) =>{
    this.setState({
      message:"Mouse button released"
    })
  }
```

<br>

5) **onMouseMove**

<br>

```jsx
  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  }
```

6) **onMouseEnter**

<br>

```jsx
  handleMouseEnter = (e) => {
    this.setState({ message: "Mouse entered element" })
  }
```

<br>

7) **onMouseLeave**

<br>

```jsx
  handleMouseLeave = (e) => {
    this.setState({ message: "Opposite onMouseEnter event" })
  }
```

<br>

8) **onWheel**

<br>

```jsx
  handleWheel = (e) => {
    this.setState({message: "Mouse wheel scroll"})
  }
```

<br>

### Answer to Question 5

<p align="justify">

**Mouse Event**

1. `click` : Triggered when the mouse button is clicked.

2. `dblclick` : Triggered when the mouse button is double-clicked.

3. `mousedown` : Triggered when a mouse button is pressed down.

4. `mouseup` : Triggered when a mouse button is released.

5. `mousemove` : Triggered when the mouse pointer moves over an element.

6. `mouseover` : Triggered when the mouse pointer enters the boundaries of an element.

7. `mouseout` : Triggered when the mouse pointer leaves the boundaries of an element.

8. `wheel` : Triggered when the mouse wheel is rotated.

<br>

**Keyboard Events**

1. `keydown` : Triggered when a key on the keyboard is pressed down.

2. `keypress` : Triggered when a key that produces a character value is pressed down.

3. `keyup` : Triggered when a key on the keyboard is released.

4. `input` : Triggered when the value of an input element changes (including typing).

5. `change` : Triggered when the value of a form element changes (for example, checkbox, select).

</p>
<br>

### Answer to Question 6 


```jsx
import { Component } from 'react'

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  }

    handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <label htmlFor='firstname'>First Name: </label>
        <input onChange={this.handleChange} name='firstname' value={this.state.value}></input>
    </div>
    )

}
```

### Answer to Question 7


```jsx
import React, { Component } from 'react';

class MyFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted with data:', this.state.formData);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.formData.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.formData.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyFormComponent;
```

### Answer to Question 8


```jsx
class MouseCoordinateTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <>
        <div style={{ position: "relative", inset: "10px 0 0 10px", backgroundColor: "rgba(255,255,255,0.7)", padding: 10, borderRadius: 5 }}>Coordinates X: {this.state.x}, Y: {this.state.y}</div>

        <div style={{ width: "100%", height: "100vh", border: "1px solid #ddd" }} onMouseMove={this.handleMouseMove}></div>

      </>
    )
  }
}
```

### Answer to Question 9

<p align="justify">

`onInput`:
- This event fires continuously as the user types of edits the value of the input field.
  
- It provides the most-immediate feedback on the changing input.

- Useful for tasks like real-time character validation or dynamic suggestions.



`onChange`:
- This event fires once when the user stops typing or editing the input field.

- It captures the final value entered by the user.

- Commonly used for submitting forms, updating databases, or performing actions based on the final input.

`onBlur`:
- This event fires once when the user clicks outside the input field, effectively losing focus on it. 

- It indicates that the user has finished interacting with the field.

- Often used for tasks like hiding suggestions or validating the final input on leaving the field.

</p>

### Answer to Question 10

<p align="justify"> In React, you typically place the <code>onSubmit</code> event handler on the <code>form</code> element. This is where the event is triggered when the form is submitted.
</p>

# References

- [Topcoder](https://www.topcoder.com/thrive/articles/event-handling-in-react-js)

- [DEV.to](https://dev.to/vandnakapoor19/difference-between-html-and-react-event-handling-59bh)
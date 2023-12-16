# Day 12 Forms Exercise Level 1 Solution
## Answer to Exercise Level 1 Question
### Answer to Ouestion 1
<p align="justify">We use the form to collect data from user, to enter our information. We use forms in business, social media, when logging in to websites, or becoming a member of a website. If we are a developer, we can use forms to retreive data and store it in a database. </p>

### Answer to Question 2
<p align="justify">I know nine input types</p>

### Answer to Question 3
<p align="justify">
<b><h4>Value :</b> </h4> The input <code>value</code> attribute specifies an initial value for an input field:</p>


<p align="justify">
<b><h4>Maxlength : </h4></b>The input <code>maxlength</code> attribute specifies the maximum number of characters allowed in an input field.</p>

<p align="justify">
<b><h4>Placeholder : </h4></b>
The input <code>placeholder</code> attribute specifies a short hint that describes the expected value of an input field (a sample value or a short description of the expected format).</p>

<p align="justify">
The short hint is displayed in the input field before the user enters a value.
</p>

<p align="justify">
<b><h4>Required : </h4></b>
The input <code>required</code> attribute specifies that an input field must be filled out before submitting the form.

</p>

### Answer to Question 4
<p align="justify">The <code>htmlFor</code> property sets or returns the value of the for attribute of a <code>label</code>.</p>

<p align="justify">The for attribute specifies which form  element a label is bound to.</p>

### Answer to Question 5
<p align="justify">No data entry type not given in the example</p>

### Answer to Question 6
<p align="justify">In controlled inputs, there is at all times some sort of changes and amendments going on in the field, every single character entered and even something like a backspace would count as a change.</p>

### Answer to Question 7
```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })

  }

  render() {
    return (
      <div>
        <input value = {this.state.input} onChange = {this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

### Answer to Question 8
<p align="justify"><code>onChange</code></p> 

### Answer to Question 9
<p align="justify">Selected value</p>

### Answer to Question 10
<p align="justify">
<b><h4>onChange </h4></b> It is commonly used with form elements like input fields, textarea, and select to detect changes in their values. </p>

<p align="justify">
<b><h4>onBlur</h4></b> It is triggered when an element loses focus, such as when the user clikcs outside an input field after editing its value.
</p>

<p align="justify">
<b><h4>onSubmit</h4></b>
It is used with the form element to detect when the form is subtitled
</p>

<p align="justify">In summary, <code>onChange</code> is used for live updates during input, <br>

<code>onBlur</code> is used when an input loses focus</p>

<p align="justify">
<code>onSubmit</code> is used when a form is submitted.
</p>

### Answer to Question 11
<p align="justify">Stops the default behavior of form element specially refreshing of page</p>

### Answer to Question 12
```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = { value: 'Hello World' };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}
```

### Answer to Question 13
<p align="justify">The action or process of checking or proving the validity or accuracy of something in this case data.</p>

### Answer to Question 14
`onChange`

### Answer to Question 15
- `onChange`
  
- `onBlur`

- `onSubmit`

# References
[W3Schools](https://www.w3schools.com/html/html_form_attributes.asp) <br>

[Geeks For Geeks](https://www.geeksforgeeks.org/react-js-uncontrolled-vs-controlled-inputs/)

[DEV.to](https://dev.to/rthefounding/react-creating-a-controlled-input-2kcd)

[Javatpoint](https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript)
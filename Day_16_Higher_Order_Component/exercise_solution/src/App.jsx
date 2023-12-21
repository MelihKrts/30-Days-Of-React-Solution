import React, { useState } from 'react'
import './App.css'

const withCustomInput = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />
  }
}

const CustomInput = ({ type, ...rest }) => {
  return <input type={type} {...rest}>
  </input>
}

const EnhancedCustomInput = withCustomInput(CustomInput);


function App() {

  const [value, setValue] = useState(50);
  const [textValue, setTextValue] = useState('John');

  const handleResetClick = () => {
    setTextValue('John');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleValue = (e) => {
    setTextValue(e.target.value);
  }



  return (
    <>
      <div className='container'>
        <h1>All Input types</h1>
        <EnhancedCustomInput type="text" className="form-data" placeholder="Enter a text" value={textValue} onChange={handleValue} />
        <EnhancedCustomInput type="button" className="form-data" value="Click me" onClick={() => alert("I am button type input")} />
        <EnhancedCustomInput type="checkbox" value="bike" className="form-data" />
        <label>I have a bike</label>
        <EnhancedCustomInput type="color" className="form-data" />
        <EnhancedCustomInput type="date" className="form-data" />
        <EnhancedCustomInput type="datetime-local" className="form-data" />
        <EnhancedCustomInput type="email" className="form-data" placeholder="Enter a e-mail address" />
        <EnhancedCustomInput type="file" className="form-data" />
        <EnhancedCustomInput type="hidden" className="form-data" />
        <EnhancedCustomInput type="image" className="form-data" src="/assets/images/green-button-icon.png" width="48" height="48" />
        <EnhancedCustomInput type="month" className="form-data" />
        <EnhancedCustomInput type="number" className="form-data" placeholder="Enter a number" />
        <EnhancedCustomInput type="password" className="form-data" placeholder="Enter a password" />
        <EnhancedCustomInput type="radio" className="form-data" value="Javascript" />
        <label >Javascript</label>
        <EnhancedCustomInput type="range" className="form-data" min="0" max="100" step="1" value={value} onChange={handleChange} />
        <EnhancedCustomInput type="reset" className="form-data" onClick={handleResetClick} />
        <EnhancedCustomInput type="search" className="form-data" placeholder="Search" />
        <EnhancedCustomInput type="submit" className="form-data" />
        <EnhancedCustomInput type="tel" className="form-data" placeholder="Enter a phone number" />
        <EnhancedCustomInput type="time" className="form-data" />
        <EnhancedCustomInput type="url" className="form-data" placeholder="Enter a URL" />
        <EnhancedCustomInput type="week" className="form-data" />
      </div>
    </>
  )
}

export default App

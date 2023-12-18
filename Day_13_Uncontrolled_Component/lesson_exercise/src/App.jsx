import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react'

class App extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.country.current.value);
    console.log(this.title.current.value);

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    }

    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor='firstName'>First Name: </label>
          <input type='text'  name='firstName' placeholder='First Name' ref={this.firstName}></input>
          <input type='text'  name='lastName' placeholder='Last Name' ref={this.lastName}></input>
          <input type='text'  name='country' placeholder='Country' ref={this.country}></input>
          <input type='text'  name='title' placeholder='Title' ref={this.title}></input>

          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


export default App

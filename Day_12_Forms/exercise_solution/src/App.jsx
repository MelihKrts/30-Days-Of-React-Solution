import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import validator from 'validator';


function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: '',
  })

  const [error, setError] = useState({});

  const validateField = (value, fieldName, validationType) => {

    if (validationType === "length") {
      if (value.trim().length === 0) {
        return `${fieldName} is required`;
      }
      if (value.trim().length < 2 || value.trim().length > 20) {
        return `${fieldName} must be between 2 and 20 characters`;
      }
    }

    if (validationType === "email") {
      const validDomains = ["gmail.com", "outlook.com", "hotmail.com", "yandex.com", "yahoo.com"];
      const emailParts = value.split('@');

      if (emailParts.length !== 2 || !validDomains.includes(emailParts[1])) {
        return `Invalid ${fieldName}`;
      }

      // Now, check the standard email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return `Invalid ${fieldName}`;
      }
    }

    if (validationType === "password") {
      if (value.trim().length === 0) {
        return `${fieldName} is required`;
      }
      if (value.trim().length < 6) {
        return `${fieldName} must be at least 6 characters`;
      }
    }

    return null;
  };



  const validateForm = () => {
    const newErrors = {
      firstName: validateField(formData.firstName, "First Name", "length"),
      lastName: validateField(formData.lastName, "Last Name", "length"),
      email: validateField(formData.email, "e-mail", "email"),
      password: validateField(formData.password, "Password", "password")
    };

    setError(newErrors);
    return Object.values(newErrors).every((error) => !error)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted with data:', formData);
    }
    else {
      alert('Form has validation errors. Please correct them.');
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='container'>

          <input type='text' name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} className={`form-data ${error.firstName ? 'errorInput' : ''}`}></input>

          {error.firstName && <p className='error-message'>{error.firstName}</p>}


          <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} className={`form-data ${error.lastName ? "errorInput" : ""}`}></input>

          {error.lastName && <p className='error-message'>{error.lastName}</p>}


          <input type='email' name='email' placeholder='enter your e-mail' value={formData.email} onChange={handleChange} className={`form-data ${error.email ? "errorInput" : ""}`}></input>

          {error.email && <p className='error-message'> {error.email}</p>}

          <input type='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} className={`form-data ${error.password ? "errorInput" : ""}`}></input>

          {error.password && <p className='error-message'>{error.password}</p>}

          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App

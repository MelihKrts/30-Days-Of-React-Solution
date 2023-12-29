import React, {useState} from 'react'
import validator from "validator"
import './App.css'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    const errors = {};

    if (validator.isEmpty(firstName)) {
      errors.firstName = "First Name is required";
    }

    if (validator.isEmpty(lastName)) {
      errors.lastName = "Last Name is reuqired";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|info)$/i;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'Invalid email format';
    }

    if (validator.isEmpty(password)) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return
    }

    console.log('Form submitted:', formData);

  }

  return (
    <form onSubmit={handleSubmit} className='container'>
      <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} className={`form-data ${error.firstName ? 'errorInput' : ''}`}
      />

      {error.firstName && <p className='error-message'>{error.firstName}</p>}

      <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} className={`form-data ${error.lastName ? 'errorInput' : ''}`}
      />

      {error.lastName && <p className='error-message'>{error.lastName}</p>}

      <input type='email' name='email' placeholder='Enter your e-mail' value={formData.email} onChange={handleChange} className={`form-data ${error.email ? 'errorInput' : ''}`}
      />

      {error.email && <p className='error-message'>{error.email}</p>}


      <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className={`form-data ${error.password ? 'errorInput' : ''}`}
      />

      {error.password && <p className='error-message'>{error.password}</p>}

      <button type='submit'>Submit</button>

    </form>
  )

}

function App() {


  return (
    <>
    <Form/>
    </>
  )
}

export default App

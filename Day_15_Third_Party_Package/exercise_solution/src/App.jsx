import React, { useState, useEffect } from 'react'
import './App.css'
import "~/style/app.scss"
import { Header } from '~/Component/Header'
import axios from 'axios' // axios
import { FaReact } from "react-icons/fa"; // React icons 
import moment from "moment"; // moment
import validator from "validator" // validator
import classnames from 'classnames'; // classnames

const Example = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const buttonClasses = classnames("button", {
    "active": isActive,
    "disabled": !isActive
  });

  return (
    <div>
      <button className={buttonClasses} onClick={handleClick}>Click me</button>
      {isActive && <p>Text to show when the button is clicked</p>}
    </div>
  )
}

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
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        setData(response.data);
        setLoading(false)
      }
      catch (error) {
        setError(error);
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div>
        <h1>Axios in React Example</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        )}
      </div>
      <Header />
      <FaReact className='react' />
      <h1>How to use moment</h1>
      <p>This challange was started {moment("2023-10-25").fromNow()}</p>
      <p>This challange will be over in {moment("2023-12-20").fromNow()}</p>
      <p>Today is {moment(new Date()).format("MMMM DD, YYYY HH:mm:ss")}</p>

      <Form />

      <Example />

    </>
  )
}

export default App

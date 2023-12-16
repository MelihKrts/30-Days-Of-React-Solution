import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

class Validation extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  }
  handleChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
  }
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    }
    return errors
  }
  handleSubmit = (e) => {
    /*
      e.preventDefault()
      stops the default behavior of form element 
      specifically refreshing of page
      */
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    /*
     the is the place where we connect backend api
      to send the data to the database
      */
    console.log(data)
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName } = this.validate()
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              /> <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

class MultipleInputData extends Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { firstName, lastName, country, title } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>

          <div>
            <input type='text' name='firstName' placeholder='First Name' value={firstName.toLowerCase()} onChange={this.handleChange}></input>
          </div>

          <div>
            <input type='text' name='lastName' placeholder='Last Name' value={lastName.toLowerCase()} onChange={this.handleChange}></input>
          </div>

          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country.toLowerCase()}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title.toLowerCase()}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>

        </form>
      </div>
    )
  }
}


class DifferentInputFiled extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    }
    else if (type === "file") {
      console.log(type, "check here")
      this.setState({ [name]: e.target.files[0] })
    }

    else {
      this.setState({ [name]: value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills, } = this.state

    const formattedSkills = [];

    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    }

    console.log(data)

  }

  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state

    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                placeholder='First Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='color'
              name='color'
              value={favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }


}

class App extends Component {
  state = {
    firstName: "",
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ firstName: value })
  }

  render() {
    const firstName = this.state.firstName
    return (
      <>
        <div className='App'>
          <label htmlFor='firstName'>First Name : </label>
          <input type='text' id='firstName' name='firstName' placeholder='First Name' value={firstName} onChange={this.handleChange}></input>
          <h1>{this.state.firstName}</h1>
        </div>

        <MultipleInputData />
        <DifferentInputFiled/>
        <Validation/>
      </>

    )
  }
}
export default App

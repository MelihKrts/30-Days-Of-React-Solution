import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Age = (props) => <div>The Person is {props.age} years old</div>
  const Weight = (props) => <p>The weight of the object on earth is {props.weight} N.</p>

  const Status = (props) => {
    let status = props.status ? "Old enough to drive" : "Too young for driving"
    return <p>{status}</p>
  }

  const Skills = (props) => {
    const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
    return <ul>{skillList}</ul>
  }

  const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

  const welcome = "Welcome to 30 Days Of React"
  const title = "Getting Started React"
  const subtitle = "JavaScript Library"
  const firstName = "Asabeneh"
  const lastName = "Yetayeh"
  const date = "Nov 24 2023";

  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh"
    },
    date: new Date(),
  }

  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date} ${year}`;
  }

  let currentYear = 2023;
  let birthYear = 2007
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  const majorityAge = currentYear - birthYear;

  let status = majorityAge >= 18;

  const HeaderData = (props) => {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{props.data.welcome}</h1>
          <h2>{props.data.title}</h2>
          <h3>{props.data.subtitle}</h3>
          <p>{props.data.author.firstName} {props.data.author.lastName}</p>
          <small>{showDate(props.data.date)}</small>
        </div>
      </header>
    )
  }

  const Header = (props) => {
    console.log(props);
    return (
      <header>
        <div className="header-wrapper">
          <h1>{props.welcome}</h1>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <p>{props.firstName} {props.lastName}</p>
          <small>{props.date}</small>
        </div>
      </header>
    )
  }

  const App = () => {
    // const sayHi = () =>{
    //   alert("Hi");
    // }
    const handleTime = () => {
      alert(showDate(new Date()))
    }
    const greatPeople = () => {
      alert("Welcome to 30 Days Of React Challenge, 2023");
    }
    return (
      <div className='app'>
        <Header
          welcome={welcome}
          title={title}
          subtitle={subtitle}
          firstName={firstName}
          lastName={lastName}
          date={date}
        />
        <Age age={age} />
        <Weight weight={gravity * mass} />
        <Status status={status} />
        <Skills skills={["HTML", "CSS", "JavaScript"]} />
        <HeaderData data={data} />
        <Button text="Say Hi" onClick={() => alert("Hi")} />
        <Button text="Greet People" onClick={greatPeople} />
        <Button text="Show Time" onClick={handleTime} />
      </div>
    )
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement)

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  )
}

export default App

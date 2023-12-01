import React from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import asabeneh from "./image/asabeneh.jpg";
import './App.css'
import "./index.css"

// Class Component

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2023")
  }
  render() {
    const {
      welcome,
      title,
      author: { firstName, lastName },
      date,
    } = this.props.data
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>
            {firstName} {lastName}
          </h3>
          <small>{date}</small>
          <button className='btn' onClick={this.greetPeople}>Greet</button>
        </div>
      </header>
    )
  }
}

// UserCard Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button Component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Techlist Component
// Class base component

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted;
  }
}

// Main Component
// Function

// const Main = () => {
//   <main>
//     <div className="main-wrapper">
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <Techlist />

//       </ul>
//     </div>
//   </main>
// }

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button text="Greet People" onClick={this.props.greetPeople} style={buttonStyles} />
          <Button text="Show Time" onClick={this.props.handleTime} style={buttonStyles} />
        </div>
      </main>
    )

  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  showDate = (time) => {
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

    return `${month} ${date} ${year}`
  }

  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2023')
  }
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh"
      },
      date: "Nov 1, 2023"
    }
    const techs = ["HTML", "CSS", "JavaScript"];
    const user = {...data.author, image: asabeneh}
    return (
      <div className='app'>
        <Header data={data} />
        <Main user={user} techs={techs} handleTime={this.handleTime} greetPeople={this.greetPeople} />
        <Footer date={new Date()} />
      </div>
    )
  }
}

// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Asabeneh",
//       lastName: "Yetayeh"
//     },
//     date: "Oct 7, 2020"
//   }
//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)



export default App

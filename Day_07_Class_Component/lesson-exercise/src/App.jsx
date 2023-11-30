import React from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"

// Class Component

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}

// Techlist Component
// Class base component

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
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
            <TechList />
          </ul>
        </div>
      </main>
    )

  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer>
        <div className="footer-wrapper">
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer/>
      </div>
    )
  }

}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)



export default App

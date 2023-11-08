import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Golden from "./images/golden.jpg"
import { createRoot } from 'react-dom/client'


// import "./math";
// import { addTwo, multiply, subtract } from './math.jsx';
// import * as everything from "./math.jsx"
function App() {
  // console.log(multiply(5,5))
  // console.log(doSomeMath.multiply(5,5));
  // console.log(everything);

  const date = new Date();
  const day = date.toLocaleString("en-GB", { day: "2-digit" });
  const month = date.toLocaleString("en-GB", { month: "2-digit" });
  const year = date.getFullYear();
  const displayTime = `${day}/${month}/${year}`;

  // JSX Styles

  // const headerStyles = {
  //   backgroundColor: "#61dbfb",
  //   fontFamily: "Xolonium",
  //   padding: 25,
  //   lineHeight: 1.5
  // }

  // const mainStyles = {
  //   backgroundColor: "#f3f0f5",
  // }

  // const footerStyles = {
  //   backgroundColor: "#61dbfb"
  // }

  // JSX Inject data
  const welcome = "Welcome to 30 Days of React";
  const title = "Getting Started React";
  const subtitle = "Javascript Library";
  const author = {
    firstName: "Melih",
    lastName: "Karataş",
  }


  const header = (
    <header>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>{displayTime}</small>
    </header>
  )

  const numOne = 3;
  const numTwo = 2;

  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  )

  const yearBorn = 1820;
  const currentYear = year;
  const age = currentYear - yearBorn;

  const personAge = (
    <p>
      {' '}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  )

  const techs= ["HTML","CSS","Javascript"];
  const techFormatted = techs.map((techs)=> <li key={techs}>{techs}</li>)

  const user = (
    <div><img src={Golden} alt="Golden Retreiver" title='Golden Retreiver'/></div>
  )

  const main = (
    <main>
      <p>Prerequisite to get started {' '}
      <strong><em>react.js</em></strong>
      :
      </p>
      <ul>
        {techFormatted}
      </ul>
      {result}
      {personAge}
      {user}
    </main>
  )

  const copyright = "Copyright 2023"

  const footer = (
    <footer>
      <p>{copyright}</p>
    </footer>
  )

  const app = (
    <div>
      {header}
      {main}
      {footer}
    </div>
  )

  const rootElement = document.getElementById("root");

  ReactDOM.render(app, rootElement)


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

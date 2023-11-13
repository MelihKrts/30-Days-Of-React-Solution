import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profile from "./image/pp.jpg"
import './App.css'

function App() {

  const welcome = "Welcome to 30 Days Of React";
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const author = {
    firstName: "Melih",
    lastName: "Karataş"
  }

  const date = new Date();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const day = date.toLocaleString("en-GB", { day: "2-digit" });
  const year = date.getFullYear();
  const displayTime = `${month} ${day}, ${year}`;

  // Header Component
  const Header = () => (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p> Instructor: {author.firstName} {author.lastName}</p>
        <small>Date: {displayTime}</small>
      </div>
    </header>
  )




  const numOne = 3;
  const numTwo = 2;

  const result = () => {
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  }

  const yearBorn = 1820;
  const currentYear = 2023;
  const age = currentYear - yearBorn;

  const personAge = () => (
    <p>
      {' '}
      {author.firstName} {author.lastName} is {age} years old;
    </p>
  )

  // User Card Component

  const UserCard = () => (
    <div className="user-card">
      <img src={profile} alt="Profile image" />
      <h2>{author.firstName} {author.lastName}</h2>
    </div>
  )

  const techList = ["HTML", "CSS", "JavaScript"];
  const techListFormatted = techList.map((tech) => <li key={tech}>{tech}</li>)


  const Main = () => (
    <main>
      <div className="main-wrapper">
        <div>

          <p>Prerequisite to get started {' '}
            <strong>
              <em>react.js:</em>
            </strong>
          </p>

          <ul>
            {techListFormatted}
          </ul>
          {result}
          {personAge}
        </div>
        <UserCard />
      </div>
    </main>
  )

  const copyright = 2023
  const Footer = () => (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {copyright}</p>
      </div>
    </footer>
  )

  const Button = () => (
    <button style={buttonStyles}>action</button>
  )

  const buttonStyles = {
    padding: "10px 20px",
    background: "rgb(0,255,0)",
    border: "none",
    borderRadius: 5
  }

  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  }

  const HexaColor = () => (
    <div>{hexaColor()}</div>
  )

  const ReusableBtn = ({ onClick, label }) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1)
      onClick && onClick();
    }
    return <button onClick={handleClick}> {label} - Clicked : {count} times</button>
  }

  const handleBtnClick = () => {
    console.log("Button Clicked");
  }

  const App = () => (
    <div className="app">
      <Header />
      <Main />
      <Button /> 
      <ReusableBtn onClick={handleBtnClick} label="Click me" />
      <ReusableBtn onClick={handleBtnClick} label="Another Button" />
      <HexaColor />
      <Footer />
    </div>
  )

  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

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

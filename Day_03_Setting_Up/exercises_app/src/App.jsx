import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'

import HTML from "./images/html_logo.png";
import CSS from "./images/css_logo.png";
import JS from "./images/JavaScript-logo.png";
import profile from "./images/pp.jpg";

import "./style.css"

import { TiTick } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";



function App() {
  // Exercises Level 2.1

  const img = (
    <div>
      <h1>Front End Technologies</h1>
      <img src={HTML} alt="HTML logo" className='logo' title='HTML logo' />
      <img src={CSS} alt="CSS logo" className='logo' title='CSS Logo' />
      <img src={JS} alt="JS logo" className='logo' title='JS Logo' />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )

  // Exercises Level 2.2

  const main = (
    <main className='main-wrapper'>
      <h1>Subscribe</h1>
      <p>Sign Up with your emaill address to receive news and updates</p>
      <form action="#">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='Email' />
      </form>
      <button> Subscribe</button>
    </main>
  )

  // Exercises Level 3

  const skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"];
  const skillsFormatted = skills.map((skill) => <div className='skills-box' key={skill}>{skill}</div>)

  const date = new Date();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const day = date.toLocaleString("en-GB", { day: "2-digit" });
  const year = date.getFullYear();
  const displayTime = `${month} ${day}, ${year}`

  const card = (
    <section>

      <div className="container">

        <div className='image-div'><img src={profile} alt="Profile image" title='Profile image' className='images' /></div>

        <div className="profile-info-area">

          <div className="profile-name">
            <p>Melih Karataş</p>
            <div className='circle'><TiTick /></div>
          </div>
          <div className="profile-title"><p>Junior Developer Turkey</p></div>
        </div>

      </div>

      <div className="skills-area">
        <div className="skills-container">
          <div style={{ width: "100%", textAlign: "left" }}><h1>Skills</h1></div>
          {skillsFormatted}

        </div>
      </div>

      <div className="join-info">

        <div className="join-container">

          <div className='join-time-info-area'>

            <div className='join-box'>
              <BiTimeFive />
              <p>Joined on {displayTime} </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
  const app = (
    <div>
      {img}
      {main}
      {card}
    </div>
  )

  const rootElement = document.getElementById("root");
  ReactDOM.render(app, rootElement)
  return (
    <>
    </>
  )
}

export default App

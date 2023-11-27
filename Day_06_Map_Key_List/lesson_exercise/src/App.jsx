import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["Javascript", 9],
  ["React", 8],
]

const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)



const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill key={skill} skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavik" }
]

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({ countries }) => {
  const couuntryList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{couuntryList}</div>
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div>
        <h1>Number List</h1>
        <Numbers numbers={numbers} />
        <h1>Skills Level</h1>
        <Skills skills={skills} />
        <h1>Country List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)



export default App

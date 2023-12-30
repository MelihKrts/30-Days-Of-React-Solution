import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"


const Country = ({ country: { name, flag, population } }) => {
  return (
    <div>
      <div>
        <img src={flag} alt={name} />
      </div>
      <h3>{name.toUppercase()}</h3>
      <div>
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

const App = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async  () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    catch (error) {
      console.log(error);
    }
  }

  return(
    <div>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>These ara {data.length} countries in the api</p>
        <div>
          {data.map((country)=>(
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )

}

export default App

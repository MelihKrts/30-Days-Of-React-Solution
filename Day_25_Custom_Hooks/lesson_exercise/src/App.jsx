import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useFetch } from './UseFetch'
import './App.css'


const Country = ({ country: { name, flags, population } }) => {
  return (
    <div>
      <div>
        <img src={flags.png} alt={name.common} />
      </div>
      <h3>{name.common.toUpperCase()}</h3>
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
  const url="https://restcountries.com/v3.1/all"
  // const url ="https://restcountries.eu/rest/v2/all"
  const data= useFetch(url)

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

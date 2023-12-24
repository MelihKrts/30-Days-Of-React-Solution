import React, { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [allCats, setAllCats] = useState([])
  const [singleCat, setSingleCat] = useState('')

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=5")
      .then(response => setAllCats(response.data.map(cat => cat.url)))
      .catch(error => console.error("Error fetching all cats:", error))

    axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys")
      .then(response => setSingleCat(response.data[0].url))
      .catch(error => console.error('Error fetching single cat:', error));
  }, [])

  return (
    <>
      <div>
        <h1>All Cats</h1>
        <div className='img-container'>
          {allCats.map((cat, index) => (
            <div key={index} className='img'><img src={cat} alt={`Cat ${index + 1}`} /></div>
          ))}
        </div>

        <h1>Single Cat</h1>
        <div className='img-container'>
        {singleCat &&
        <div className='img'><img src={singleCat} alt="Single Cat" /></div> }
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./style/global.css"
import { Numbers } from './component/Numbers'
import { ColorPalette } from './component/ColorPalette';  
import { Countries } from './component/Countries'

function App() {

  const numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i)
    if (i % 2 == 0) {

    }
  }

   const countries = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  return (
    <>
      {/* Exercise Level 2.1 */}
      <Numbers numbers={numbers} />
      {/* Exercise Level 2.2 */}
      <ColorPalette/>
      {/* Exercise Level 3 */}
      <Countries countries={countries}/>
    </>
  )
}

export default App

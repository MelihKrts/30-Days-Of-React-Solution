import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Numbers } from './component/Numbers'
import { ColorPalette } from './component/ColorPalette';  

function App() {

  const numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i)
    if (i % 2 == 0) {

    }
  }


  return (
    <>
      {/* Exercise Level 2.1 */}
      <Numbers numbers={numbers} />
      {/* Exercise Level 2.2 */}
      <ColorPalette/>
    </>
  )
}

export default App

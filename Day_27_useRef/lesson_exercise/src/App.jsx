import React, { useRef } from 'react'
import './App.css'

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.style.backgroundColor = "#61dbfb"
    ref.current.style.padding = "50px"
    ref.current.style.textAlign = "center"
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Style it</button>
    </div>
  )
}
export default App

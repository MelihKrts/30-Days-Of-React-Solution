import React, { useState, useEffect } from 'react'
import './App.css'

const ColorApp = () => {
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const generateRandomColors = (count) => {
    const randomColors = Array.from({ length: count }, getRandomColor);
    setColors(randomColors);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleButtonClick = () => {
    const count = inputValue !== '' ? parseInt(inputValue, 10) : 27;
    generateRandomColors(count);
  };

  useEffect(() => {
    generateRandomColors(27);
  }, []);

  return (
    <div className="App">
      <header className='head-container'>
        <h1>30 Days Of React</h1>
        <p>Hexadecimal Colors</p>
      </header>

      <div className='container'>
        <button onClick={handleButtonClick}>Generate</button>
        <input
          type="text"
          placeholder="Enter a color number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>


      <div className="colorBox-wrapper">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color }}>
            <p className='hex-code'>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {


  return (
    <>
      <ColorApp />
    </>
  )
}

export default App

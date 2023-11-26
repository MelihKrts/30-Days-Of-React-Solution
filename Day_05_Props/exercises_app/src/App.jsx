import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import FrontEnd from './component/FrontEnd'
import { Container } from './component/Container'
import { InputField } from './component/InputField'
import { UserCard } from './component/UserCard.Jsx'

function App() {


  // Exercise Level 3.1

  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16).toString(16);
      color += randomDigit;
    }
    return color;
  }

  const RandomColorBox = () => {
    const [randomColor, setRandomColor] = useState(generateRandomColor());

    const changeColor = () => {
      setRandomColor(generateRandomColor());
    }
    return (
      <div className='w-full px-2 py-4 my-2' style={{ backgroundColor: randomColor }}>
        <p className='text-center text-white'>{randomColor}</p>
      </div>
    )
  }

  // Exercise Level 2 and Exercise Level 3 Solution
  return (
    <>
      <Container>
        {/* Exercise 2.1 Frontend */}
        <FrontEnd />
        {/* Exercise 2.2 InputField */}
        <InputField />

        {/* Exercise 3.1 */}

        <RandomColorBox />
        <RandomColorBox />
        <RandomColorBox />
        <RandomColorBox />
        <RandomColorBox />

        {/* Exercise 3.2 */}
        
        <UserCard />

      </Container>
    </>
  )
}

export default App

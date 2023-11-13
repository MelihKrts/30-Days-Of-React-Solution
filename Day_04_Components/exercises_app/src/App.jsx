import reactLogo from './assets/react.svg'
import ReactDOM from 'react-dom'
import viteLogo from '/vite.svg'
import { useState } from 'react';

import "./styles/button.css";
import "./styles/subscribe.css";
import "./styles/usercard.css";

import Button from "../component/Button"
import Container from '../component/Container';
import InputField from '../component/InputField';
import Alertbox from '../component/Alertbox';
import Frontend from '../component/Frontend';
import Subscribe from '../component/Subscribe';
import UserCard from '../component/UserCard';




function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Exercises Components Answer to question 3.1

  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomDight = Math.floor(Math.random() * 16).toString(16);
      color += randomDight;
    }
    return color;
  }

  const RandomColorBox = () => {
    const [randomColor, setRandomColor] = useState(generateRandomColor());

    const changeColor = () => {
      setRandomColor(generateRandomColor());
    };

    return(
      <div className='w-full px-2 py-4 my-2' style={{backgroundColor:randomColor}}>
        <p className='text-center'>{randomColor}</p>
      </div>
    )
  }

  {/*  Exercises Components Answer to question 7*/ }


  return (
    <>

      <Container>
        <Button className="first" onClick={() => console.log("First button clicked")}>First Button</Button>
        <Button className="second" onClick={() => alert("Second button")}>Second Button</Button>

      </Container>

      {/* Exercises Components Answer to question 8 */}

      <Container>

        <InputField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a Name"></InputField>

        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter a Email"></InputField>

        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a Password"></InputField>

      </Container>

      {/* Exercises Components Answer to question 9 */}

      <Container>
        <Alertbox type="bg-green-500 text-white">Success Message</Alertbox>
        <Alertbox type="bg-yellow-500 text-white">Warning Message</Alertbox>
      </Container>

      <Container>
        {/* Exercises Component level 2.1 Solution */}
        <Frontend />
      </Container>

      {/* Exercises Component level 2.2 Solution */}
      <Subscribe />

      {/* Exercise Component level 3.1 Solution */}

      <Container>
        <RandomColorBox/>
        <RandomColorBox/>
        <RandomColorBox/>
        <RandomColorBox/>
        <RandomColorBox/>
      </Container>

      <UserCard />

    </>
  )
}

export default App

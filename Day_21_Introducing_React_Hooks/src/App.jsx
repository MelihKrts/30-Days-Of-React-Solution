import React, { useState, useEffect } from 'react'
import './App.css'
import "./index.scss"
import asabenehImage from "./image/asabeneh.jpg"

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const day = time.getDate();

  return `${month} ${day} ${year}`;
}

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={`${firstName} ${lastName}`} title={`${firstName} ${lastName}`} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {text}
  </button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
};
const Header = (props) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = props.data;

  return (
    <header style={props.style}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )

}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

const TechList = (props) => {
  const { techs } = props;
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

const Main = (props) => {
  const {
    techs,
    user,
    greetPeople,
    handleTime,
    changeBackground,
    count,
    addOne,
    minusOne
  } = props;

  useEffect(() => {
    // Update background color when it changes
    document.body.style.backgroundColor = props.backgroundColor;
    return () => {
      // Cleanup when component unmounts
      document.body.style.backgroundColor = ''; // Reset background color
    };
  }, [props.backgroundColor]);

  return (
    <main>
      <div className='main-wrapper'>
        <p>Prerequisite to get started react.js</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        <UserCard user={user} />
        <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
        <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
        <Button text="Change Background" onClick={changeBackground} style={buttonStyles} />
        <Count count={count} addOne={addOne} minusOne={minusOne} />
      </div>
    </main>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <p> Copyright {props.date.getFullYear()}</p>
      </div>
    </footer>
  )
}

const App = (props) => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("")

  const addOne = () => {
    setCount(count + 1);
  }

  const minusOne = () => {
    setCount(count - 1);
  }

  const handleTime = () => {
    alert(showDate(new Date()));
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  };

  const changeBackground = () => {
    setBackgroundColor('#f0f0f0');
  };

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Dec 25, 2023',
  };

  const techs = ['HTML', 'CSS', 'JavaScript'];

  const user = { ...data.author, image: asabenehImage };

  return (
    <div className='app' style={{ backgroundColor }}>
      <Header data={data} />
      <Main user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count} />
      <Footer date={new Date()} />
    </div>
  )

}

export default App

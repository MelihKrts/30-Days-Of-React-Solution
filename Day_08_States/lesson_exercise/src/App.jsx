import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from "react-dom/client"
import asabeneh from "~/image/asabeneh.jpg"
import '~/css/App.css'
import "~/css/index.css"

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

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear();
  const date = time.getDate()

  return `${month} ${date} ${year}`;
}

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
)

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
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
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { welcome, title, subtitle, author: { firstName, lastName }, date } = this.props.data
    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
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
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
      styles,
    } = this.props
    return (
      <main style={styles}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
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
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
    isDarkTheme: false,
  }


  showDate = (time) => {
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
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date} ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  }
  handleTime = () => {
    alert(this.showDate(new Date()));
  }
  greetPeople = () => {
    alert("Welcome to 30 Days of React Challenge 2023")
  }

  changeBackground = () => {
    const newTheme = !this.state.isDarkTheme;
    // Update the backgroundColor property in the styles state
    this.setState({
      styles: {
        ...this.state.styles,
        backgroundColor: newTheme ? '#0f172a' : '#fff', // Change these colors based on your themes
        color: newTheme ? '#fff' : '#0f172a', // Change these colors based on your themes
      },
      isDarkTheme: newTheme,
    });
    document.body.style.backgroundColor = newTheme ? '#0f172a' : '#fff'; // Change these colors based on your themes

    document.body.style.color = newTheme ? '#fff' : '#0f172a'; // Change these colors based on your themes

  }

  // state = { image: "http://placekitten.com/400/400" };

  // changeAnimal = () => {
  //   let dogUrl = "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
  //   let catUrl = "http://placekitten.com/400/400";
  //   let image = this.state.image === catUrl ? dogUrl : catUrl
  //   this.setState({ image });
  // }


  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh"
      },
      date: "Dec 5 2023"
    }
    const techs = ["HTML", "CSS", "JavaScript"];
    const date = new Date();
    const user = { ...data.author, image: asabeneh };

    // const count = this.state.count
    return (
      // <div className='app'>
      //   <h1>30 Days of React</h1>
      //   <div className='animal'>
      //     <img src={this.state.image} alt="animal" />
      //   </div>
      //   <button onClick={this.changeAnimal}>Change</button>
      // </div>
      <div className='App' style={this.state.styles}>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>

    )
  }
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)
export default App
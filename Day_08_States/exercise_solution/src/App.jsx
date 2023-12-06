import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from "react-dom/client"
import asabeneh from "~/image/asabeneh.jpg";
import "./app.scss";

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer className={`footer-section ${this.props.theme}`}>
        <Container className="container">
          <p className='copyright'>CopyRight {this.props.date.getFullYear()}</p>
        </Container>
      </footer>
    )
  }
}

const showTime = (time) => {
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
  const year = String(time.getFullYear()).padStart(2, 0);
  const day = time.getDate() + 1;

  return `${day} ${month} ${year}`;

}

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='img-box'>
    <img src={image} alt={`${firstName} ${lastName}`} title={`${firstName} ${lastName}`} />
    <h2>{firstName} {lastName}</h2>
  </div>
)

const Button = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick} style={{
    color: 'white',
  }}>
    {text}
  </button>
)

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props;
    const techFormatted = techs.map((tech) => <div key={tech}>{tech}</div>)
    return techFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      theme,
      techs,
      user,
      greetPeople,
      showingTime,
    } = this.props

    return (
      <Section className={`main-section ${theme}`}>
        <Container className="container">
          <p>Prerequisite to get started react.js:</p>
          <TechList techs={techs} />
          <UserCard user={user} />

          <div className='btn-wrapper'>
            <Button text="Greet People" onClick={greetPeople} className="btn" />
            <Button text="Show Time" onClick={showingTime} className="btn" />
            {/* <Button text="Change Background" onClick={this.props.changeBg} className="btn" /> */}
            <Button text="Change Background" onClick={() => this.props.changeBg('#0F172A')} className="btn" />


          </div>

        </Container>
      </Section>
    )
  }
}

const Container = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}



class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data
    return (
      <>
        <Section className={`info-section ${this.props.theme}`}>
          <Container className="container">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              {firstName} {lastName}
            </p>
            <small>{date}</small>
          </Container>
        </Section >
      </>

    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light-theme',
    };

  }

  showTime = (time) => {
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
    const day = String(time.getDate()).padStart(2, 0);
    return `${day} ${month} ${year} `;
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2023')
  }

  showingTime = () => {
    alert(this.showTime(new Date()));
  }


  changeBg = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
    }));
  }

  render() {
    const { theme } = this.state;
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Dec 5 2023"
    }
    const techs = ["HTML", "CSS", "JavaScript"];
    const date = new Date()
    const user = { ...data.author, image: asabeneh }
    return (
      <>
      <Content data={data} />
        <Main techs={techs}  user={user} greetPeople={this.greetPeople} showingTime={this.showingTime} changeBg={this.changeBg} theme={theme} />
        <Footer date={new Date()} />
      </>
    )
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)

export default App


import React from 'react'
import { css, html, js, reactLogo, asabeneh } from '~/image';
import { createRoot } from 'react-dom/client';
import { TiTick } from "react-icons/ti";

import "~/style/global.css"

const imageObj = [html, css, js, reactLogo];
const techNames = ['HTML', 'CSS', 'JS', 'React'];

const imageShow = imageObj.map((image, index) => (<img key={index} className="fe-tech" src={image} alt={`${techNames[index]}`} title={`${techNames[index]}`} />))

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const generateRandomColor = () => {
  const letters = "01234567889ABCEDF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ColorGeneratorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }
  componentDidMount() {
    this.generateColors();
  }

  generateColors = () => {
    const newColors = Array.from({ length: 5 }, () => generateRandomColor());
    this.setState({ colors: newColors });
  };

  render() {
    const { colors } = this.state;
    return (
      <>
        <div>
          {colors.map((color, index) => (
            <div key={index} style={{ backgroundColor: color, color: "#fff", textAlign: "center", padding: 10, margin: "30px auto", width: "50%" }}>
              {color}
            </div>
          ))}
        </div>
      </>
    )
  }
}

const Button = ({ className, children }) => {
  return (
    <button className={className}>{children}</button>
  )
}

const Input = ({ type, className, placeholder }) => {
  return (
    <input type={type} className={className} placeholder={placeholder}></input>
  )
}

const skill = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPY", "Pandas", "Data Analysis", "MYSQL", "GraphSql", "D3.js", "Gatsby", "Docker", "Heroku", "Git"]


const Skills = ({ skill }) => {
  const skillList = skill.map((skill) => <div key={skill} className='skillbox'>{skill}</div>)
  return skillList;
}

class PersonInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      firstName,
      lastName,
      image,
      title,
      country
    } = this.props.data;
    const fullName = `${firstName} ${lastName}`;
    return (
      <div className='infobox-wrapper'>

        <div className='infobox'>

        <div className='infobox-img'>
        <img src={image} alt={fullName} title={fullName}></img>
        </div>

        <div className="name-wrapper">
          <div className='namebox'>
          <h1>{firstName} {lastName}</h1>
          <div className='icon'><TiTick/></div>
          </div>
          <h2>{title} {country}</h2>
        </div>
          
        </div>

      </div>
    )
  }
}

class Usercard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      title: "Senior Developer",
      country: "Finland",
      image: asabeneh
    }

    return (
      <Section className="user-info">
        <PersonInfo data={data} />
        <div className='left-div'>
          <h1>Skills</h1>
        </div>

        <Container className="container">

          <Container className="skill-container">
            <Skills skill={skill} />
          </Container>

        </Container>
      </Section>

    )
  }
}

class InputField extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Section className="input-field">
        <Container className="container">

          <h1 className='subscribe'>Subscribe</h1>
          <p className='info-text'>Sign up with your email address to receive news and updates</p>

          <Container className="form-container">
            <Input className="field-text" placeholder="First Name" type="text" />
            <Input className="field-text" placeholder="Last Name" type="text" />
            <Input className="field-text" placeholder="Email" type="email" />
          </Container>

          <Button className="submit">Subscribe</Button>

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

class FrontEnd extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Section className="front-end">
        <Container className="container">
          <h1>Front End Technologies</h1>
          <div>
            {imageShow}
          </div>
        </Container>
      </Section>
    )

  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <FrontEnd />
        <InputField />
        <ColorGeneratorComponent />
        <Usercard />
      </>

    )
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

export default App

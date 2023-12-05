import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from "react-dom/client"
import '~/style/global.css'

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
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
        <Section className="info-section">
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
  render() {
    const data = {
      welcome:"Welcome to 30 Days Of React",
      title:"Getting Started React",
      subtitle:"JavaScript Library",
      author:{
        firstName:"Asabeneh",
        lastName:"Yetayeh",
      },
      date:"Dec 5 2023"
    }
    return (
      <Content data={data} />
    )
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />)

export default App


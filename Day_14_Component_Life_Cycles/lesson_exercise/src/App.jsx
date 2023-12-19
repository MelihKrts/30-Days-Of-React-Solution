import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    console.log("I am the constructor and I will be the first to run.")
    this.state = {
      day:1,
      congratulate:"",
    };
  }

  shouldComponentUpdate(nexProps, nextState){
    console.log(nexProps, nextState)
    console.log(nextState.day)
    if(nextState.day>31){
      return false
    }
    else {
      return true
    }
  }

  doChallenge = () =>{
    this.setState({
      day:this.state.day+1
    })
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("I am  getDerivedStateFromProps and I will be the second run.");
  //   return { firstName: props.firstName };
  // }
  componentDidMount() {
    console.log("I am componentDidMount and I will be last to run.");
    const API_URL = "https://restcountries.eu/rest/v2/all";
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => console.log(error));
  }

  // renderCountries = () => {
  //   return this.state.data.map((country) => {
  //     return (
  //       <div>
  //         <div>
  //           {' '}
  //           <img src={country.flag} alt={country.name} />{' '}
  //         </div>
  //         <div>
  //           <h1>{country.name}</h1>
  //           <p>Population: {country.population}</p>
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  componentDidUpdate(prevProps, prevState){
    if(prevState.day ==30) {
      this.setState({
        congratulate:"Congratulations,Challenge has been completed",
      })
    }console.log(prevState,prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challange: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
        <div>
          {/* <p>There are {this.state.data.length} countries in the api</p> */}
          {/* <div className='countries-wrapper'>{this.renderCountries()}</div> */}
        </div>
      </div>
    )
  }

}

export default App

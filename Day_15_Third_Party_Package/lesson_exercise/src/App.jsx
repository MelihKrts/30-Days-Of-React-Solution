import './App.css'
import "~/styles/test.scss"
import axios from "axios"
import { Header } from '~/component/Header'
import { Component } from 'react'
import moment from "moment"

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      const languageOrLanguages = country.languages.length > 1 ? "Languages " : "Language"
      const formatLanguages = country.languages
        .map(({ name }) => name)
        .join(", ")
      return (
        <div>
          <div>
            {' '}
            <img src={country.flag} alt={country.name} />{' '}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Fetching Data Using Axios</h1>
        <h1>How to use Moment</h1>
        <p>This challamnge was started {moment("2023-10-25").fromNow()}</p>
        <p>The Challange will be over in {moment("2023-10-25").fromNow()}</p>
        <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
        </div>
      </div>
    )
  }

}

export default App

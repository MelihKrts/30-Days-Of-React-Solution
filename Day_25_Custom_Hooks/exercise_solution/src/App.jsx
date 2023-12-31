import React, {useState} from 'react'
import './App.css'
import { useFetch } from './useFetch'

const Country = ({ country: { name, capital, languages, population, currencies, flags, region } }) => {
  const languageArray = Object.values(languages || {});
  const formatLanguageText = languageArray.length > 1 ? "Languages: " : "Language: "

  return (
    <div className='country-box'>

      <div className='country-flag'>
        <img src={flags.png} alt={name.common} title={name.common} />
      </div>

      <div className='country-name'>
        <h3>{name.common.toUpperCase()}</h3>
      </div>

      <div className='country-info'>
        <p>
          <span>Capital: </span>
          {capital}
        </p>

        <p>
          <span>{formatLanguageText} </span>
          {languageArray.join(', ')}
        </p>

        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>

        <p>
          <span>Currency: </span>
          {currencies
            ? Object.values(currencies)
              .map(currency => currency.name.charAt(0).toUpperCase() + currency.name.slice(1))
              .join(', ')
            : "N/A"}
        </p>

        <p>
          <span>Region: </span>
          {region}
        </p>


      </div>

    </div>
  )
}



const App = (props) => {
  const url = "https://restcountries.com/v3.1/all"
  const data = useFetch(url)
  const [searchTerm, setSearchTerm] = useState("");
  const sortedData = data.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));

  // const filteredCountries = data.filter((country) => {
  //   const countryName = (country.name?.common || "").toLowerCase();
  //   const countryCapital = (country.capital || "").toString().toLowerCase();
  //   const countryLanguages = Object.values(country.languages || {}).map((language) => language.toLowerCase());

  //   return (
  //     countryName.includes(searchTerm.toLowerCase()) ||
  //     countryCapital.includes(searchTerm.toLowerCase()) ||
  //     countryLanguages.some((language) => language.includes(searchTerm.toLowerCase()))
  //   );
  // });
  // .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const filteredCountries = data
  .filter((country) => {
    const countryName = (country.name?.common || "").toLowerCase();
    const countryCapital = (country.capital || "").toString().toLowerCase();
    const countryLanguages = Object.values(country.languages || {}).map((language) => language.toLowerCase());

    return (
      countryName.includes(searchTerm.toLowerCase()) ||
      countryCapital.includes(searchTerm.toLowerCase()) ||
      countryLanguages.some((language) => language.includes(searchTerm.toLowerCase()))
    );
  })
  .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className='App'>
      <div className='country-info-text'>
        <h2>World Countries Data</h2>
        <p>Currently, we have {data.length} countries </p>
      </div>

      <input
        type="text"
        placeholder="Search by name, city, or language"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search-bar'
      />


      <div>

        <div className='country-wrapper'>
          {filteredCountries.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </div>
  )

}

export default App

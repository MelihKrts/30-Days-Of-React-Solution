import React from 'react'

const Country = ({ country: { country, population }, maxPopulation }) => {
    const barWidth = (population / maxPopulation) * 100;
    return (
        <div className='country'>

            <div className='country-box'>
                <h1 className='country-name'>{country.toUpperCase()}</h1>
            </div>

            <div className='country-box'>
                <div className='population-bar' style={{ width: `${barWidth}%` }}></div>
            </div>

            <div className='country-box'>
                <p>{population}</p>
            </div>

        </div>
    )
}

export const MostCountry = ({ countries }) => {
    const maxPopulation = Math.max(...countries.map(country => country.population));
    const countryList = countries.map((country, index) => <Country key={index} country={country} maxPopulation={maxPopulation} />)
    return (
        <>
        <h1 className='title'>World Population</h1>
        <div className='country-wrapper'>{countryList}</div>
        </>
  )
}

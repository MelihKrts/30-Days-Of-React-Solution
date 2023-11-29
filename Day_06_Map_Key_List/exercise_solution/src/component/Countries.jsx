import React from 'react'

const Country = ({ country: { country, population }, maxPopulation }) => {
    const barWidth = (population / maxPopulation) * 100;
    return (
        <div className='country'>
            <div className="country-content-box">
                <h1>{country.toUpperCase()}</h1>
            </div>
            <div className="country-content-box">
                <div className='population-bar' style={{ width: `${barWidth}%` }}></div>
            </div>
            <div className="country-content-box">
                <p>{population}</p>
            </div>
        </div>
    )
}

export const Countries = ({ countries }) => {
    const maxPopulation = Math.max(...countries.map(country => country.population));
    const countryList = countries.map((country, index) => <Country key={index} country={country} maxPopulation={maxPopulation} />)
    return (
        <>
            <h1>30 Days Of React</h1>
            <h2 className='subtitle'>World Population</h2>
            <div className='country-wrapper'>{countryList}</div>
        </>

    )
}

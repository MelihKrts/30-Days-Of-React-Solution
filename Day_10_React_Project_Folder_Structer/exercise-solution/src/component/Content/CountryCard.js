import React, { useState } from 'react'
import { countriesData } from 'data/countries';
import { MainButton } from 'component/Portfolio/Main';
import { buttonStyles } from 'styles/buttonStyles';

export const CountryCard = () => {
    const [selectedCountry, setSelectedCountry] = useState({});
    const formattedCapital = selectedCountry.capital ? (
        <>
            <span>Capital: </span>
            {selectedCountry.capital}
        </>
    ) : '';

    const formatLanguage = selectedCountry.languages && selectedCountry.languages.length > 1 ? "Languages: " :
        "Language :";

    const changeCountry = () => {
        const randomIndex = Math.floor(Math.random() * countriesData.length);
        const newSelectedCountry = countriesData[randomIndex];
        setSelectedCountry(newSelectedCountry);
    }

    return (
        <>
            <div className='countrys-wrapper'>
                <div className='country_flag'>

                    <img src={selectedCountry && selectedCountry.flag} alt={selectedCountry && selectedCountry.name} title={selectedCountry && selectedCountry.name}></img>

                    <h3 className='country_name'>{selectedCountry && selectedCountry.name && selectedCountry.name.toUpperCase()}</h3>

                    <div className='country_text'>

                        <p>{formattedCapital}</p>

                        <p>
                            <span>{formatLanguage}</span>
                            {selectedCountry.languages && selectedCountry.languages.join(', ')}
                        </p>

                        <p>
                            <span>Population: </span>
                            {selectedCountry.population && selectedCountry.population.toLocaleString()}
                        </p>

                        <p>
                            <span>Currency: </span>
                            {selectedCountry.currency}
                        </p>

                    </div>

                </div>
            </div>
            <div style={{ margin: 50, textAlign:'center' }}>
                <MainButton text="Select Country" onClick={changeCountry} style={buttonStyles} />
            </div>
        </>
    )
}

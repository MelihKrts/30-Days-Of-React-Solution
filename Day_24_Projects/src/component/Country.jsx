import axios from 'axios';
import React, { useState, useEffect } from 'react';


// const CountryBar = ({ country: { country, population }, maxPopulation }) => {
//     const barWidth = (population / maxPopulation) * 100;
//     return (
//         <div className='country'>
//             <div className="country-content-box">
//                 <h1>{country.toUpperCase()}</h1>
//             </div>
//             <div className="country-content-box">
//                 <div className='population-bar' style={{ width: `${barWidth}%` }}></div>
//             </div>
//             <div className="country-content-box">
//                 <p>{population}</p>
//             </div>
//         </div>
//     )
// }



// export const Country = ({ countriess }) => {
//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//         const url = "https://restcountries.com/v3.1/all"
//         axios.get(url)
//             .then((response) => {
//                 const data = response.data;
//                 setCountries(data);
//                 console.log(data)
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             })
//     }, [])

//     const maxPopulation = Math.max(...countriess.map(country => country.population));
//     const countryList = countriess.map((country, index) => <Country key={index} country={country} maxPopulation={maxPopulation} />)

//     return (
//         <>
//             <div className='info'>
//                 <h1 className='orange'>World Countries Data</h1>
//                 <p>Currently we have {countriess.length} countries</p>
//             </div>
//             <div className='country-wrapper'>
//                 {countries.map((country, index) => {
//                     const { capital, flags, languages, name, population, region, currencies
//                     } = country
//                     const languageArray = Object.values(languages || {}); // Convert languages object to an array
//                     return (
//                         <div className='country-box' key={index}>
//                             <div className='country-flag'>
//                                 <img className='country-img' src={flags.png} alt={name.common} title={name.common}></img>
//                             </div>

//                             <div className='country-name'>
//                                 <h3>{name.common.toUpperCase()}</h3>
//                             </div>

//                             <div className='country-info'>
//                                 <p>
//                                     <span>Capital: </span>
//                                     {capital}
//                                 </p>

//                                 <p>
//                                     <span>Languages: </span>
//                                     {languageArray.join(', ')}
//                                 </p>

//                                 <p>
//                                     <span>Population: </span>
//                                     {population.toLocaleString()}
//                                 </p>

//                                 <p>
//                                     <span>Currency: </span>
//                                     {currencies
//                                         ? Object.values(currencies).map(currency => currency.name).join(', ')
//                                         : 'N/A'
//                                     }
//                                 </p>

//                                 <p>
//                                     <span>Region: </span>
//                                     {region}
//                                 </p>

//                             </div>

//                         </div>
//                     )
//                 })}
//                 <h1>30 Days Of React</h1>
//                 <h2 className='subtitle'>World Population</h2>
//                 <div className='country-wrapper'>{countryList}</div>
//             </div>
//         </>

//     )
// }

export const Country = ({ countriess }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setCountries(data);
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Check if countriess is undefined or empty before mapping
    const countryList = countriess && countriess.length
        ? countriess.map((country, index) => <Country key={index} country={country} />)
        : null;

    return (
        <>

            <div className='info'>
                <h1 className='orange'>World Countries Data</h1>
                <p>Currently we have {countries.length} countries</p>
            </div>
            <div className='country-wrapper'>
                {countries.map((country, index) => {
                    const { capital, flags, languages, name, population, region, currencies
                    } = country
                    const languageArray = Object.values(languages || {}); // Convert languages object to an array
                    return (
                        <div className='country-box' key={index}>
                            <div className='country-flag'>
                                <img className='country-img' src={flags.png} alt={name.common} title={name.common}></img>
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
                                    <span>Languages: </span>
                                    {languageArray.join(', ')}
                                </p>

                                <p>
                                    <span>Population: </span>
                                    {population.toLocaleString()}
                                </p>

                                <p>
                                    <span>Currency: </span>
                                    {currencies
                                        ? Object.values(currencies).map(currency => currency.name).join(', ')
                                        : 'N/A'
                                    }
                                </p>

                                <p>
                                    <span>Region: </span>
                                    {region}
                                </p>

                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
}

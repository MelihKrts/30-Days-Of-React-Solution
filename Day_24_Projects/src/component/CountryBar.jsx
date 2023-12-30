import React, { useEffect, useState } from 'react';
import axios from 'axios';

// export const CountryBar = () => {
//   const [mostPopulatedCountries, setMostPopulatedCountries] = useState([]);
//   const [mostSpokenLanguages, setMostSpokenLanguages] = useState([]);
//   const [worldPopulation, setWorldPopulation] = useState(0);

//   useEffect(() => {
//     const fetchMostPopulatedCountries = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const sortedCountries = response.data
//           .filter(country => country.population)
//           .sort((a, b) => b.population - a.population)
//           .slice(0, 10);
//         setMostPopulatedCountries(sortedCountries);

//         // Calculate and set world population
//         const totalPopulation = response.data.reduce((total, country) => total + (country.population || 0), 0);
//         setWorldPopulation(totalPopulation);
//       } catch (error) {
//         console.error('Error fetching most populated countries:', error);
//       }
//     };

//     const fetchMostSpokenLanguages = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const allLanguages = response.data.flatMap(country => country.languages || []);
//         const languageCounts = allLanguages.reduce((acc, language) => {
//           const languageName = language.name || (language instanceof Object && Object.keys(language)[0]);
//           acc[languageName] = (acc[languageName] || 0) + 1;
//           return acc;
//         }, {});
//         const sortedLanguages = Object.entries(languageCounts)
//           .sort(([, countA], [, countB]) => countB - countA)
//           .slice(0, 10)
//           .map(([name, count]) => ({ name, count }));
//         setMostSpokenLanguages(sortedLanguages);
//       } catch (error) {
//         console.error('Error fetching most spoken languages:', error);
//       }
//     };

//     fetchMostPopulatedCountries();
//     fetchMostSpokenLanguages();
//   }, []);

//   const maxPopulation = Math.max(...mostPopulatedCountries.map(country => country.population));
//   const maxLanguageCount = Math.max(...mostSpokenLanguages.map(language => language.count));

//   return (
//     <div>
//       <h1 style={{marginBottom:"20px"}}>10 Most Populated Countries</h1>
//       <div>
//         {mostPopulatedCountries.map((country, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//             <div style={{ flex: 1 }}>
//               {country.name.common}
//             </div>
//             <div style={{ flex: 3, marginRight: '8px' }}>
//               <div
//                 style={{
//                   height: '20px',
//                   backgroundColor: 'orange',
//                   border:".1rem solid orange",
//                   borderRadius:"0.2rem",
//                   width: `${(country.population / maxPopulation) * 100}%`,
//                 }}
//               ></div>
//             </div>
//             <div style={{ flex: 1 }}>
//               {country.population}
//             </div>
//           </div>
//         ))}
//       </div>

//   <h1 style={{marginBottom:"20px"}}>10 Most Spoken Languages</h1>
//   <div>
//     {mostSpokenLanguages.map((language, index) => (
//       <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <div style={{ flex: 1 }}>
//           {language.name}
//         </div>
//         <div style={{ flex: 3, marginRight: '8px' }}>
//           <div
//             style={{
//               height: '20px',
//               backgroundColor: 'orange',
//               border:".1rem solid orange",
//               borderRadius:"0.2rem",
//               width: `${(language.count / maxLanguageCount) * 100}%`,
//             }}
//           ></div>
//         </div>
//         <div style={{ flex: 1 }}>
//           {language.count}
//         </div>
//       </div>
//     ))}
//   </div>

//       <h1>Total World Population</h1>
//       <p>{worldPopulation}</p>
//     </div>
//   );
// };



// export const CountryBar = () => {
//   const [mostPopulatedCountries, setMostPopulatedCountries] = useState([]);
//   const [mostSpokenLanguages, setMostSpokenLanguages] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');

//         // En yüksek 10 nüfuslu ülkeleri al
//         const sortedCountries = response.data
//           .filter(country => country.population)
//           .sort((a, b) => b.population - a.population)
//           .slice(0, 10);

//         // Dünya nüfusunu ekleyerek sırala
//         const totalPopulation = response.data.reduce((total, country) => total + (country.population || 0), 0);
//         const world = { name: { common: 'World' }, population: totalPopulation };
//         const updatedList = [world, ...sortedCountries];

//         setMostPopulatedCountries(updatedList);

//       } catch (error) {
//         console.error('Veri getirme hatası:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const maxPopulation = Math.max(...mostPopulatedCountries.map(country => country.population));


//   return (
//     <div>
//       {/* En Yüksek 10 Nüfuslu Ülkeler */}
//       <div>
//         <h2>10 Most spoken languages in the world</h2>
//         {mostPopulatedCountries.map((country, index) => (
//           <div key={index} style={{ display: 'flex', alignItems: 'center', margin:"10px", marginBottom: '8px' }}>
//             <div style={{ flex: 1 }}>
//               {country.name.common || country.name.official || 'Bilinmiyor'}
//             </div>
//             <div style={{ flex: 3, marginRight: '8px' }}>
//               <div
//                 style={{
//                   height: '35px',
//                   backgroundColor: 'orange',
//                   border:".1rem solid orange",
//                   borderRadius:".2rem",
//                   width: `${(country.population / maxPopulation) * 100}%`,
//                 }}
//               ></div>
//             </div>
//             <div style={{ flex: 1 }}>
//               {country.population.toLocaleString()}
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };



// export const CountryBar = () => {
//     const [mostPopulatedCountries, setMostPopulatedCountries] = useState([]);
//     const [mostSpokenLanguages, setMostSpokenLanguages] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://restcountries.com/v3.1/all');
//                 console.log(response.data)

//                 // En yüksek 10 nüfuslu ülkeleri al
//                 const sortedCountries = response.data
//                     .filter(country => country.population)
//                     .sort((a, b) => b.population - a.population)
//                     .slice(0, 10);

//                 // Dünya nüfusunu ekleyerek sırala
//                 const totalPopulation = response.data.reduce((total, country) => total + (country.population || 0), 0);
//                 const world = { name: { common: 'World' }, population: totalPopulation };
//                 const updatedList = [world, ...sortedCountries];

//                 setMostPopulatedCountries(updatedList);

//                 // Fetch and set most spoken languages
//                 const languages = response.data.flatMap(country => country.data.languages || []);
//                 console.log(languages); // Log the extracted language data

//                 setMostSpokenLanguages(sortedLanguages);

//             } catch (error) {
//                 console.error('Veri getirme hatası:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const maxPopulation = Math.max(...mostPopulatedCountries.map(country => country.population));

//     return (
//         <div>
//             {/* En Yüksek 10 Nüfuslu Ülkeler */}
//             <div>
//                 <h2>10 Most Populated Countries</h2>
//                 {mostPopulatedCountries.map((country, index) => (
//                     <div key={index} style={{ display: 'flex', alignItems: 'center', margin: "10px", marginBottom: '8px' }}>
//                         <div style={{ flex: 1 }}>
//                             {country.name.common || country.name.official || 'Bilinmiyor'}
//                         </div>
//                         <div style={{ flex: 3, marginRight: '8px' }}>
//                             <div
//                                 style={{
//                                     height: '35px',
//                                     backgroundColor: 'orange',
//                                     border: ".1rem solid orange",
//                                     borderRadius: ".2rem",
//                                     width: `${(country.population / maxPopulation) * 100}%`,
//                                 }}
//                             ></div>
//                         </div>
//                         <div style={{ flex: 1 }}>
//                             {country.population.toLocaleString()}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <h2>10 Most Spoken Languages</h2>
//                 {mostSpokenLanguages.map((language, index) => (
//                     <div key={index}>
//                         {language.name || 'Unknown'} - {language.nativeName || 'Unknown'}
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };


export const CountryBar = () => {
    const [mostPopulatedCountries, setMostPopulatedCountries] = useState([]);
    const [mostSpokenLanguages, setMostSpokenLanguages] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');


                // En yüksek 10 nüfuslu ülkeleri al
                const sortedCountries = response.data
                    .filter(country => country.population)
                    .sort((a, b) => b.population - a.population)
                    .slice(0, 10);

                // Dünya nüfusunu ekleyerek sırala
                const totalPopulation = response.data.reduce((total, country) => total + (country.population || 0), 0);
                const world = { name: { common: 'World' }, population: totalPopulation };
                const updatedList = [world, ...sortedCountries];

                setMostPopulatedCountries(updatedList);

                const languageCounts = response.data.reduce((counts, country) => {
                    const languages = country.languages || [];
                    languages.forEach((language) => {
                        counts[language] = (counts[language] || 0) + 1;
                    });
                    return counts;
                }, {});

                // Dilleri sıklığına göre sırala
                const sortedLanguages = Object.keys(languageCounts)
                    .sort((a, b) => languageCounts[b] - languageCounts[a])
                    .slice(0, 10);

                // Bu dilleri konuşan ülkeleri bul
                const spokenCountries = response.data.filter((country) => {
                    const languages = country.languages || [];
                    return languages.some((language) => sortedLanguages.includes(language));
                });

            } catch (error) {
                console.error('Veri getirme hatası:', error);
            }
        };

        const fetchMostSpokenLanguages = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const allLanguages = response.data.flatMap(country => country.languages || []);
                const languageCounts = allLanguages.reduce((acc, language) => {
                    const languageName = language.name || (language instanceof Object && Object.keys(language)[0]);
                    acc[languageName] = (acc[languageName] || 0) + 1;
                    return acc;
                }, {});
                const sortedLanguages = Object.entries(languageCounts)
                    .sort(([, countA], [, countB]) => countB - countA)
                    .slice(0, 10)
                    .map(([name, count]) => ({ name, count }));
                setMostSpokenLanguages(sortedLanguages);
            } catch (error) {
                console.error('Error fetching most spoken languages:', error);
            }
        };

        fetchData();
        fetchMostSpokenLanguages();
    }, []);

    const maxPopulation = Math.max(...mostPopulatedCountries.map(country => country.population));
    const maxLanguageCount = Math.max(...mostSpokenLanguages.map(language => language.count));

    return (
        <div>
            {/* En Yüksek 10 Nüfuslu Ülkeler */}
            <div>
                <h2>10 Most Populated Countries</h2>
                {mostPopulatedCountries.map((country, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', margin: "10px", marginBottom: '8px' }}>
                        <div style={{ flex: 1 }}>
                            {country.name.common || country.name.official || 'Bilinmiyor'}
                        </div>
                        <div style={{ flex: 3, marginRight: '8px' }}>
                            <div
                                style={{
                                    height: '35px',
                                    backgroundColor: 'orange',
                                    border: ".1rem solid orange",
                                    borderRadius: ".2rem",
                                    width: `${(country.population / maxPopulation) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <div style={{ flex: 1 }}>
                            {country.population.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ marginBottom: "20px" }}>10 Most Spoken Languages</h1>
            <div>
                {mostSpokenLanguages.map((language, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ flex: 1 }}>
                            {language.name}
                        </div>
                        <div style={{ flex: 3, marginRight: '8px' }}>
                            <div
                                style={{
                                    height: '35px',
                                    backgroundColor: 'orange',
                                    border: ".1rem solid orange",
                                    borderRadius: "0.2rem",
                                    width: `${(language.count / maxLanguageCount) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <div style={{ flex: 1 }}>
                            {language.count}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );


};



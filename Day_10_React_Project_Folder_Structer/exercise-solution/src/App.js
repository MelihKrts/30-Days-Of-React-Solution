import './App.css';
import "styles/index.css";
import { countries } from 'data/Most-population';
import { FrontEnd, InputField, HexaColor, MostCountry, Portfolio, Header, CountryCard, Footer  } from 'component/component';
import { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkmode] = useState(false)

  const data = {
    welcome: "30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh"
    },
    date: "Dec 13, 2023"
  }
  return (
    <>
      <FrontEnd />
      <InputField />
      <HexaColor />
      <MostCountry countries={countries} />
      <Header data={data} />
      <Portfolio />
      <CountryCard/>
      <Footer date={new Date()} isDarkMode={isDarkMode}/>
    </>
  );
}

export default App;

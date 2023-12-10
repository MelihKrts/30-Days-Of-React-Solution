import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { spring, summer, autumn, winter, morning, noon, evening, night } from '~/image'
import './App.css'
import { useEffect } from 'react'
import Timerout from './component/Timerout'

var time = new Date();


const images = {
  spring: spring,
  summer: summer,
  autumn: autumn,
  winter: winter,
  morning: morning,
  noon: noon,
  evening: evening,
  night: night
};

function getTimeOfDay() {
  let hours = time.getHours();
  return hours >= 6 && hours < 12 ? "morning" : hours >= 12 && hours < 18 ? "noon" : hours >= 18 && hours < 22 ? "evening" : "night"
}


const getCurrentSeason = () => {
  let month = time.getMonth() + 1;
  return month >= 3 && month < 6 ? "spring" : month >= 6 && month < 9 ? "summer" : month >= 9 && month < 12 ? "autumn" : "winter";
};

function App() {
  const currentSeason = getCurrentSeason();
  const timeOfDay = getTimeOfDay();

  const timeImage = images[timeOfDay]
  const backgroundImage = images[currentSeason];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='wrapper'>
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h1>Welcome to the Seasonal Background App!</h1>
          <p>The current season is {currentSeason}.</p>
        </div>
      </section>

      <section className='wrapper'>
        <div
          className="container"
          style={{
            backgroundImage: `url(${timeImage})`,
            backgroundColor: timeOfDay === "night" ? "#111" : "transparent",
          }}
        >
          <h1>Welcome to the Dynamic Background App!</h1>
          <p>The current time of day is {timeOfDay}.</p>
        </div>
      </section>

      <Timerout/>

    </>
  );
}

export default App;


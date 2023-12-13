import React, { useState } from 'react'
import { Section } from 'shared/Section'

import { Main } from 'component/component'
import { asabeneh } from 'assets/assets'

export const Portfolio = () => {


  const [isDarkMode, setIsDarkMode] = useState(false);

  const techs = ["HTML", "CSS", "JS"];

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

  const user = { ...data.author, image: asabeneh }


  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2023");
  }

  const handleTime = () => {
    alert(showDate(new Date()));
  }

  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const day = time.getDate();
    const year = time.getFullYear();

    return `${month} ${day} ${year}`;
  }

  const changeBg = () => {
    setIsDarkMode(!isDarkMode);
  }


  return (
    <Section className={`null ${isDarkMode ? "dark-mode" : ''}`}>
      <Main techs={techs} user={user} greetPeople={greetPeople} handleTime={handleTime} changeBg={changeBg} />
    </Section>
  )
}

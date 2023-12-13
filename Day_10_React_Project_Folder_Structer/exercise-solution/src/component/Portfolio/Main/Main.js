import React from 'react'
import { buttonStyles } from 'styles/buttonStyles';

import { MainButton, Usercard, Techlist } from './index';

export const Main = (props) => {
    const { techs, greetPeople, user, handleTime, changeBg } = props;

    return (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started react.js:</p>

                <ul>
                    <Techlist techs={techs} />
                </ul>

                <Usercard user={user} />

                <div className='button-wrapper'>

                <MainButton style={buttonStyles} onClick={greetPeople} text="Greet People" /> 
                <MainButton style={buttonStyles} onClick={handleTime} text="Show Time" /> 
                <MainButton style={buttonStyles} onClick={changeBg} text="Change Background" />

                </div>

            </div>
        </main>
    )
}

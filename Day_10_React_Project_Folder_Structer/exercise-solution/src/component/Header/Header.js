import React from 'react'

export const Header = (props) => {
    const { welcome, title, subtitle, author: { firstName, lastName }, date } = props.data;
    return (
        <header >
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{firstName} {lastName}</p>
                <small>{date}</small>
            </div>
        </header>
    )
}

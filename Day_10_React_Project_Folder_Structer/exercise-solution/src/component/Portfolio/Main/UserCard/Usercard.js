import React from 'react'

export const Usercard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
        <img src={image} alt={`${firstName} ${lastName}`} title={`${firstName} ${lastName}`}></img>
        <h2>{firstName} {lastName}</h2>
    </div>
)


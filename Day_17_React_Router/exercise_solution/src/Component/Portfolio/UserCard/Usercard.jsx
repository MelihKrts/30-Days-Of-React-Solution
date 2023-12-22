import React from 'react'

export const Usercard = ({ user:{firstName,lastName, image,traits} }) => {

    return (
        <div className='user-card'>
            <div className='user-img'>
                <img src={image} alt={`${firstName} ${lastName}`} title={`${firstName} ${lastName}`} className='portfolio-img'></img>
            </div>

            <div className='data-wrapper'>

                <div className='data'>
                    <div className='title-area'><h2>First Name : </h2></div>
                    <div className='info'><span> {firstName}</span></div>
                </div>
                <div className='data'>
                    <div className='title-area'><h2>Last Name : </h2></div>
                    <div className='info'><span> {lastName}</span></div>
                </div>

                <div className='data'>
                    <div className='title-area'><h2>Person Trait : </h2></div>
                    <div className='info'>
                    <span className='traits'>{traits}</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

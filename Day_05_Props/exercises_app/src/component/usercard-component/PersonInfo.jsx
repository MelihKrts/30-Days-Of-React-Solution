import React from 'react'
import { TiTick } from "react-icons/ti";

export const PersonInfo = (props) => {
    const { firstName, lastName, image, title, country } = props;

    const fullName = `${firstName} ${lastName}`
    return (
        <div className="w-1/6">
            <img src={image} alt={fullName} title={fullName} className='rounded-full my-2' />
            <div className="w-full flex flex-col">
                <div className="flex w-full flex-row items-center">

                <h1 className='uppercase font-bold'>{fullName}</h1>

                <div className="rounded-full w-6 h-6 mx-2 bg-btn-icon flex justify-center items-center">
                <TiTick className='text-white'/>
                </div>

                </div>
            </div>
            
            <h2>{title} {country}</h2>
        </div>
    )
}

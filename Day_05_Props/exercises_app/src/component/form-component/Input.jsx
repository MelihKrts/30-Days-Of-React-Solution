import React from 'react'

export const Input = ({ placeholder, type, className }) => {
    return (
        <input type={type} placeholder={placeholder} className={className}></input>
    )
}

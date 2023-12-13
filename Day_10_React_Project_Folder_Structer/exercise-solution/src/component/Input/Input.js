import React from 'react'

export const Input = (className, type, placeholder) => {
    const { className, type, placeholder } = props
    return (
        <input type={type} placeholder={placeholder} className={className}></input>
    )
}

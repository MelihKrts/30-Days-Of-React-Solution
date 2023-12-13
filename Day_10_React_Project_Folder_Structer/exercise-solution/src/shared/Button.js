import React from 'react'

export const Button = (className, children, onClick) => {
    return (
        <button className={className} onClick={onClick}> {children}</button>
    )
}

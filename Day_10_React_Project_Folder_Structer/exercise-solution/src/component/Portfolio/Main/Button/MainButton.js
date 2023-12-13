import React from 'react'

export const MainButton = ({ onClick, text, style }) => (
    <button onClick={onClick} style={style}>
        {text}
    </button>
)


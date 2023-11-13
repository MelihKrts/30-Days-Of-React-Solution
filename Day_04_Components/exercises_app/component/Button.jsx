import React from 'react'

const Button = (props) => {
    const { className, children, onClick } = props;
    return (
        <button className={`px-4 py-2 rounded-md inline-block my-4 text-white mx-2 text-center font-semibold ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button

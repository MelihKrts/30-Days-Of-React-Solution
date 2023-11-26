import React from 'react'

export const Container = (props) => {
    const { children, className } = props;
    return (
        <div className='mx-auto my-2 flex justify-center items-center container flex-wrap'>{children}</div>
    )
}

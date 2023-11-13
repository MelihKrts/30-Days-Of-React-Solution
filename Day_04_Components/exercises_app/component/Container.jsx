import React from 'react'

const Container = (props) => {
    const { children } = props;
    return (
        <div className='mx-auto my-2 flex justify-center items-center container flex-wrap'>{children}</div >
    )
}

export default Container
import React from 'react'
import Container from './Container';

const Alertbox = (props) => {
    const { type, children } = props;
    const alertClasses = `px-2 py-2 mx-2 rounded-md ${type}`
    return (
            <div className={alertClasses}>
                <p>{children}</p>
            </div>
    )
}

export default Alertbox
import React from 'react'

export const Container = (props) => {
    const { className, children } = props
    return (
        <div className={className}>{children}</div>
    )
}

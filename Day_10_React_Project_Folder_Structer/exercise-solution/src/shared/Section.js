import React from 'react'

export const Section = (props) => {
    const { className, children } = props
    return (
        <section className={className}> {children}</section>
    )
}

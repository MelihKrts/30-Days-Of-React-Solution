import React from 'react'

export const Techlist = (props) => {
    const { techs } = props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted;
}

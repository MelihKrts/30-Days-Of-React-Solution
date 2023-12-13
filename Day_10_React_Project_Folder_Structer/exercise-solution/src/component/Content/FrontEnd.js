import { css, html, javascript, logo } from 'assets/assets'
import React from 'react'

import { Container, Section } from 'shared/shared'

export const FrontEnd = () => {

    const imageObj = [
        html, css, javascript, logo
    ]

    const imageShow = imageObj.map((image, index) => <img key={index} src={image} alt={`Tech ${index + 1}`} className='fe-tech'></img>)

    return (
        <Section className="front-end">
            <Container className="container column">
                <h1 className='title'>Front End Technologies</h1>

                <div>
                    {imageShow}
                </div>

            </Container>
        </Section>
    )
}

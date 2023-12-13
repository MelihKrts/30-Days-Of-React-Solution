import React from 'react'

import { Container, Section } from 'shared/shared'

export const InputField = () => {

    return (
        <Section className="input-field">
            <Container className="container column">

                <h1 className='uppercase title'>Subscribe</h1>
                <p>Sign up with your email address to receive news and updates</p>

                <Container className="form-container">
                    <input type='text' placeholder='First name' className='field-text'></input>
                    <input type='text' placeholder='Last name' className='field-text'></input>
                    <input type='email' placeholder='Email' className='field-text'></input>
                </Container>

                <button className='submit'>Subscribe</button>

            </Container>
        </Section>
    )
}

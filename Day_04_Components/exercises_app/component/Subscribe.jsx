import React from 'react'
import Container from './Container'
import InputField from './InputField'
import Button from './Button'

export default function Subscribe() {
  return (
    <section className='subarea'>
    <Container>
        <div className="w-full my-4">
        <h1 className='text-center text-3xl'>Subscribe</h1>
        </div>
        <InputField type="text" value={name} placeholder="First Name" onChange={(e) => setName(e.target.value)}></InputField>
        <InputField type="text" placeholder="Last Name" onChange={(e) => setName(e.target.value)}></InputField>
        <InputField type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></InputField>
        <div className="w-full my-4 text-center">

        <Button className="btn">Subscribe</Button>
        </div>
    </Container>
    </section>

  )
}

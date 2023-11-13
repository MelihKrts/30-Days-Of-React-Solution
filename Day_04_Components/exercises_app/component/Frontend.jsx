import React from 'react'
import Container from './Container'
import Html from "../public/image/html_logo.png"
import CSS from "../public/image/css_logo.png";
import JS from "../public/image/JavaScript-logo.png";
import reactImg from "../public/image/react.svg";

export default function Frontend() {
  return (
    <Container>
        <div className="w-full my-4"><h1 className='text-3xl text-center'>Front End Technologies</h1></div>
        <img src={Html} alt="HTML Logo" title='HTML logo' className='w-1/6 mx-4 my-8' />
        <img src={CSS} alt="CSS Logo" title='CSS logo' className='w-1/6 mx-4 my-8' />
        <img src={JS} alt="JS Logo" title='JS logo' className='w-1/6 mx-4 my-8' />
        <img src={reactImg} alt="React Logo" title='React logo' className='w-1/6 mx-4 my-8' />
    </Container>
  )
}

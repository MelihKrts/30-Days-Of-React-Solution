import React from 'react'
import { Container } from './Container'
import Html from "../../public/image/html_logo.png";
import CSS from "../../public/image/css_logo.png";
import JS from "../../public/image/JavaScript-logo.png";
import reactLogo from '../assets/react.svg'

const FrontEnd = () => {

  const ImageObj = [
    Html, CSS, JS, reactLogo
  ]

  const imageShow = ImageObj.map((image, index) => (
    <img key={index} src={image} alt={`Tech ${index + 1}`} className="w-1/12 mx-4" />
  ));
  return (
    <>
      <h1 className='text-3xl text-center font-semibold'>Front End Technologies</h1>
      <div className="w-full flex justify-center flex-wrap my-4">
        {imageShow}
      </div>
    </>
  )
}

export default FrontEnd
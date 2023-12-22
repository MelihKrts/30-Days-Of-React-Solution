import React from 'react'
import { NavLink } from 'react-router-dom'

import "~/styles/header.css"
export const Header = () => {
  return (
    <header>
        <nav className='link-wrapper'>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}


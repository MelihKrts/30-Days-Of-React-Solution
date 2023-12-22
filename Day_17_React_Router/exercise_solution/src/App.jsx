import React from 'react'
import './App.css'
import { Header } from '~/Component/component'
import "~/styles/index.css"
import { Portfolio } from '~/Component/Portfolio/Portfolio'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'





function App() {

  return (
    <Router>
      <>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </>
    </Router>

  )
}

export default App

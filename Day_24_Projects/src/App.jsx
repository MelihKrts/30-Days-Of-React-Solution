import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryBar } from './component/CountryBar';
import { Country } from './component/Country';






function App() {


  return (
    <>
    <CountryBar />
    <Country/>
    </>
  );
}

export default App;


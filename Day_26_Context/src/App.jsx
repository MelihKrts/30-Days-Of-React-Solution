import React, { createContext, useContext, useState } from 'react'
import './App.css'

const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState("John Doe")

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  )
}

const Component3 = () => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

const Component4 = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

const Component5 = () => {
  const user = useContext(UserContext)
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  )
}


const App = () => {
  return(
    <Component1/>
  )
}


export default App

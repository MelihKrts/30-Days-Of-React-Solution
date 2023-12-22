import React from 'react'
import { Usercard } from '../UserCard/Usercard'

export const Main = (props) => {
    const {user, traits} = props
  return (
    <main>
        <div className='container'>
            <Usercard user={user} traits={traits}/>
        </div>
    </main>
  )
}

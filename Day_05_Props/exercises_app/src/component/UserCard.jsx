import React from 'react'

import { PersonInfo } from './usercard-component/PersonInfo'
import asabeneh from "../../public/image/asabeneh.jpg"
import { Skills } from './usercard-component/Skills'

export const UserCard = () => {
  const personInfo = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    image: asabeneh,
    title: "Senior Developer",
    country: "Finland"
  }

  const skill=["HTML","CSS","Sass","JS","React","Redux","Node","MongoDB","Python", "Flask","Django","NumPY","Pandas", "Data Analysis","MYSQL","GraphSql","D3.js","Gatsby","Docker","Heroku","Git"]

  return (
    <div className="w-full">
      <div className="w-full">
        <PersonInfo {...personInfo} />
        <Skills skills={skill}/>
      </div>

    </div>
  )
}

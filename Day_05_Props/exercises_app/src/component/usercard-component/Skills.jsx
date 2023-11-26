import React from 'react'
import styled from "styled-components"
const SkillItem = styled.div`
background-color: #2ACFCF;
color: #fff;
border-radius: 0.5rem;
padding: 5px 15px;
margin:8px;
display: flex;
align-items: center;
justify-content: center;

&:first-of-type{
    margin-left: 0;
}

${({isMySQL})=> isMySQL && `
margin-left:0`}
`
export const Skills = ({ skills }) => {

    const skillList = skills.map((skill, index) => <SkillItem key={index} isMySQL={skill==="MYSQL"}>{skill}</SkillItem>)
    return (
        <>
            <h1 className='font-bold uppercase my-4'>Skills</h1>
            <div className="w-full flex flex-wrap">

                {skillList}
            </div>
        </>
    )
}

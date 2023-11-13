import React from 'react'
import asabeneh from "../public/image/asabeneh.jpg"

import { TiTick } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";

export default function UserCard() {

    const time = new Date();
    const month = time.toLocaleString("en-GB", { month: "short" });
    const day = time.toLocaleString("en-GB", { day: "2-digit" });
    const year = time.getFullYear();

    const displayTime = `${month} ${day}, ${year}`;

    const skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"];

    const skillsFormatted = skills.map((skill) => <div key={skill} className='skill'>{skill}</div>)

    return (
        <section className='w-full'>
            <div className="flex flex-col">

                <div className="w-40 h-40 mx-9"><img src={asabeneh} className='rounded-full' alt="Asabeneh image" title='Asabeneh image' /></div>

                <div className='flex items-center'>
                    <h1 className='ml-9 my-4'>Asabeneh Yetayeh</h1>
                    <div className='w-4 h-4 flex rounded-full circle mx-2 text-white'><TiTick /></div>
                </div>

                <div className='ml-9'>
                    <h1>Senior Developer, Finland</h1>
                </div>

            </div>

            <div className="w-full my-4 flex-wrap">
                <h1 className="text-left font-semibold ml-9 text-2xl">Skills</h1>
                <div className='w-full flex flex-wrap pl-7'>{skillsFormatted}</div>
            </div>

            <div className="w-full">
                <div className="flex ml-9 items-center">
                    <BiTimeFive />
                    <p className='ml-2'>Joined {displayTime}</p>
                </div>
            </div>

        </section>
    )
}

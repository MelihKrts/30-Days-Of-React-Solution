import React from 'react'
import { Main } from './Main/Main'
import  AngoraCat  from "~/images/Angora_cat.jpg"

export const Portfolio = () => {
    const data = {
        author: {
            firstName: "Ankarali Kedi",
            lastName: "Angarali",
            traits: ["Friendly", "Adventurous", "Playful"]
        },
        image: AngoraCat,
    }


    const user = { ...data.author, image: AngoraCat, traits: data.author.traits.join(", ") };

    return (
        <section>
            <Main user={user}  />
        </section>
    )
}

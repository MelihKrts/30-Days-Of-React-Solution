import React from 'react'
import headerStyles from "~/styles/header.module.scss"

const {header, headerwrapper} = headerStyles

export const Header = () => (
    <header className={headerStyles.header}>
        <div className={headerStyles.headerwrapper}>
            <h1>30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>Javascript Library</h3>
            <p>Instructor: Asabeneh Yetayeh</p>
            <small>Dec, 20, 2023</small>
        </div>
    </header>
)



import React from 'react';

const ColorPalette = () => {
    const generateRandomHexColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    };

    const randomHexColors = Array.from({ length: 32 }, () => generateRandomHexColor());

    return (
        <div className="color-palette-wrapper">
            <div className="color-text-wrapper">
            <h1>30 Days Of React</h1>
            <h2 className='subtitle'>Hexadecimal Colors</h2>
            </div>
            <div className="color-box-wrapper">
            {randomHexColors.map((color, index) => (
                <ColorBox key={index} hexColor={color} />
            ))}
            </div>
        </div>
    );
};

const ColorBox = ({ hexColor }) => {
    const style = {
        backgroundColor: hexColor,
    };

    return (
        <>
            <div className="color-box" style={style}>{hexColor}</div>
        </>

    );
};

export { ColorPalette, ColorBox }; 

import React from 'react'

export const HexaColor = () => {
    const generateRandomStyles = () => {
        const hexaColor = () => {
            let str = "0123456789abcdef";
            let color = '';
            for (let i = 0; i < 6; i++) {
                let index = Math.floor(Math.random() * str.length)
                color += str[index];
            }
            return "#" + color;
        };

        return {
            width: "50%",
            height: "50px",
            color: "#fff",
            margin: "20px auto",
            textAlign: "center",
            backgroundColor: hexaColor(),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:5,
        };
    };

    const renderColorDiv = () => {
        const styles = generateRandomStyles();
        return (
            <div style={styles}>
                <span>{styles.backgroundColor}</span>
            </div>
        );
    };

    return (
        <div className='color-container'>
            {renderColorDiv()}
            {renderColorDiv()}
            {renderColorDiv()}
            {renderColorDiv()}
            {renderColorDiv()}
        </div>
    );
};

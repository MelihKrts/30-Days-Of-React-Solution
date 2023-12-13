import React from 'react'

export const Footer = (props) => {
    const { isDarkMode } = props;
    const footerStyle = {
        backgroundColor: isDarkMode ? 'black' : '#61dbfb',
        color: isDarkMode ? 'white' : 'black', // Yazı rengini değiştir
    };
    return (
        <footer style={footerStyle}>
            <div className='footer-wrapper'>
                <p>Copyright {props.date.getFullYear()}</p>
            </div>
        </footer>
    )
}

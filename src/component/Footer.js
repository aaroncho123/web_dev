
import React from 'react';
import ReactDOM from 'react-dom/client';

function Footer() {

    const footerStyle={margin:"5px"};

    let date =  new Date().getFullYear();

    return (
        <footer style={footerStyle}> 
        {'@ '+ date}
        </footer>
    );
}

export default Footer;
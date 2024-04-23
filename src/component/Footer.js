
import React from 'react';
import ReactDOM from 'react-dom/client';

function Footer() {

    let date =  new Date().getFullYear();

    return (
        <footer>
        {'@ '+ date}
        </footer>
    );
}

export default Footer;
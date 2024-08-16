import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor : "grey", border : "2px solid black"}}>
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer
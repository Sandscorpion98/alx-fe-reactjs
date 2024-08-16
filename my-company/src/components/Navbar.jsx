import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul style={{listStyle : "none", color: "green", display: "flex", flexDirection : "row", justifyContent: "space-around"}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/footer">Footer</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
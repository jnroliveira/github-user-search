import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
    <nav className="main-nav row">
        <div className="main-nav-content">
            <Link to="/" className="main-nav-text">
                <h4>Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;
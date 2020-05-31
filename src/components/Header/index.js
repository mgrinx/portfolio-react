import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand font-weight-light">Misha Gringauze</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/portfolio">Portfolio</HeaderLink>
                    <HeaderLink to="/contact">Contact</HeaderLink>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
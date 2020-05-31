import React from 'react';
import { Link } from 'react-router-dom';

function Header({ page }) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand font-weight-light mr-4">Misha Gringauze</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={"nav-item" + (page === "home" ? " active" : "")}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className={"nav-item" + (page === "portfolio" ? " active" : "")}>
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    </li>
                    <li className={"nav-item" + (page === "contact" ? " active" : "")}>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
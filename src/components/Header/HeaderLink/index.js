import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function HeaderLink({ to, children }) {
    let currentPath = useLocation().pathname;
    return (
        <li className={currentPath === to ? "nav-item active" : "nav-item"}>
            <Link to={to} className="nav-link">
                {children} {currentPath === to ? <span className="sr-only">(current)</span> : null}
            </Link>
        </li>
    )
}

export default HeaderLink
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'


function Navbar() {
    return (
        <nav className="navbar">

            <h1 className="navbar-logo">FNSM 2025</h1>
            <ul className="navbar-links">
                <li >
                    <Link to="/">INICIAR SESION</Link>
                </li>
                <li >
                    <Link to="/HomePublic">TABLERO TURISTA</Link>
                </li>
                <li >
                    <Link to="/Dashboard">TABLERO ADMIN</Link>
                </li>

            </ul>
        </nav>
    );
}
export default Navbar;

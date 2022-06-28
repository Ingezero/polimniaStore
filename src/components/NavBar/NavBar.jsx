import CartWidget from "./CartWidget";
import "./navbar.css"
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <nav className="navStyling">
            <ul>
                <li>
                    <Link className="linkStyling" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="linkStyling" to="/categoria/postres">Postres</Link>
                </li>
                <li>
                    <Link className="linkStyling" to="/categoria/pasteles">Pasteles</Link>
                </li>
                <li>
                    <Link className="linkStyling" to="/categoria/galletas">Galletas</Link>
                </li>
                <li>
                    <Link className="linkStyling" to="/contact">Contacto</Link>
                </li>
                <CartWidget />
            </ul>
            <img className="logoSize" src="../img/mainLogo1.jpg" alt="logoPolimniaError" />
        </nav>
    )
}

export default NavBar;
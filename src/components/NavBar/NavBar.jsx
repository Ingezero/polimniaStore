/* import NavLink from "../NavLink/NavLink"; */
import CartWidget from "../NavBar/CartWidget";
import "./navbar.css"
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navStyling">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Contact">Contacto</Link>
                </li>
                <CartWidget />
            </ul>
            <h2 className="headerStyles">Tienda Polimnia Reposteria</h2>
        </nav>
    )
}

export default NavBar;
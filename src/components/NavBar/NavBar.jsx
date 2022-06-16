import NavLink from "../NavLink/NavLink";
import CartWidget from "../NavBar/CartWidget";
import "./navbar.css"
import React from "react";

function NavBar() {

    function handleClick() {
        console.log("click");
    }

    return (
        <nav>
            <h2>Tienda Polimnia Reposteria</h2>
            <ul>
                <NavLink handleClick={handleClick} linkTitle="Inicio"/>
                <NavLink handleClick={handleClick} linkTitle="Productos"/>
                <NavLink handleClick={handleClick} linkTitle="Contactanos"/>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;
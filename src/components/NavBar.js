import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <p className="logo">e-Commerce</p>
                <CartWidget />
                <ul className="links">
                    <li><a href="#">inicio</a></li>
                    <li><a href="#">productos</a></li>
                    <li><a href="#">nosotros</a></li>
                    <li><a href="#">contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
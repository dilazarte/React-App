import React from "react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <p className="logo">e-Commerce</p>
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
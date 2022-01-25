import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { BrowserRouter, Switch, Route, Router, Link, NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../img/logo2.png"

const NavBar = () => {
    const [toggleIcon, setToggleIon] = useState(false)

    const toggleMenu = () =>{
        toggleIcon ? setToggleIon(false) : setToggleIon(true)
        console.log(toggleIcon)
    }
    const men = "men's clothing"
    const woman = "women's clothing"


    return (
        <>
            <nav className="navbar">
                <FaBars onClick={toggleMenu} className="toggleIcon"/>
                <Link to={'/'}><img className="logo-brand" src={Logo} alt="logo"></img></Link>
                <CartWidget />
                <ul className={toggleIcon ? "links showNav" : "links"}>
                    <li><Link to={'/'}>inicio</Link></li>
                    <li>Productos
                        <ul className="subMenu">
                            <li><Link to={`/category/${men}`}>Ropa de Hombre</Link></li>
                            <li><Link to={`/category/${woman}`}>Ropa de Mujer</Link></li>
                            <li><Link to={`/category/jewelery`}>Joyería</Link></li>
                            <li><Link to={`/category/electronics`}>Electrónica</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/nosotros'}>Nosotros</Link></li>
                    <li><Link to={'/contacto'}>Contacto</Link></li>
                    <IoMdClose onClick={toggleMenu} className="closeIcon"/>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
import React, { useState, useEffect, useContext } from "react";
import CartWidget from "./CartWidget";
import { BrowserRouter, Switch, Route, Router, Link, NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../img/logo2.png"
import { cartContext } from "./CartContext";
import { AiOutlineRight } from "react-icons/ai";


const NavBar = () => {
    const [toggleIcon, setToggleIon] = useState(false)
    const { totalProds } = useContext(cartContext)
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
                <Link to={`/cart`}><div className='cartWidgetContainer'><CartWidget /><span className='quantityBadge'>{totalProds}</span></div></Link>
                <ul className={toggleIcon ? "links showNav" : "links"}>
                    <li><Link to={'/'} onClick={toggleMenu}>inicio</Link></li>
                    <li>Productos <AiOutlineRight className='prod-icon' />
                        <ul className="subMenu">
                            <li><Link to={`/category/${men}`} onClick={toggleMenu}>Ropa de Hombre</Link></li>
                            <li><Link to={`/category/${woman}`} onClick={toggleMenu}>Ropa de Mujer</Link></li>
                            <li><Link to={`/category/jewelery`} onClick={toggleMenu}>Joyería</Link></li>
                            <li><Link to={`/category/electronics`} onClick={toggleMenu}>Electrónica</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/nosotros'} onClick={toggleMenu}>Nosotros</Link></li>
                    <li><Link to={'/contacto'} onClick={toggleMenu}>Contacto</Link></li>
                    <IoMdClose onClick={toggleMenu} className="closeIcon"/>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
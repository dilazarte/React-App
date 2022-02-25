import React, { useState, useContext } from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../img/logo2.png"
import { cartContext } from "./CartContext";
import { AiFillHeart } from "react-icons/ai";


const NavBar = () => {
    const [toggleIcon, setToggleIon] = useState(false)
    const { totalProds } = useContext(cartContext)
    const toggleMenu = () =>{
            toggleIcon ? setToggleIon(false) : setToggleIon(true)
            console.log(toggleIcon)
    }
    return (
        <>
            <div className="navbar">
                {/* <FaBars onClick={toggleMenu} className="toggleIcon"/> */}
                {/* <Link to={'/'}><img className="logo-brand" src={Logo} alt="logo"></img></Link> */}
                <Link to={'/'}><span ><p className="brandLogo">CbaSports</p></span></Link>
                <div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Link to={'/favoritos'}><div className="favDiv"><AiFillHeart size={19} /></div></Link>
                        <Link to={`/cart`}><div className="cartDiv">
                            <div className='cartWidgetContainer'><CartWidget /><span style={ totalProds ?
                                {display: 'block'}
                                :
                                {display:'none'}}
                                className='quantityBadge'>{totalProds}</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="containerLinks">
            <button onClick={toggleMenu}  className="toggleIcon"><FaBars /> MENU</button>
                <ul className={toggleIcon ? "links showNav" : "links"}>
                    <li><NavLink activeClassName="activeLink" className='inicioclass' to={'/'} onClick={toggleMenu}>Todos</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to={`/category/zapatillas`} onClick={toggleMenu}>Zapatillas</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to={`/category/pantalones`} onClick={toggleMenu}>Pantalones</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to={`/category/remeras`} onClick={toggleMenu}>Remeras</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to={`/category/buzos`} onClick={toggleMenu}>Buzos</NavLink></li>
                    <IoMdClose onClick={toggleMenu} className="closeIcon"/>
                </ul>
                </div>
        </>
    )
}

export default NavBar
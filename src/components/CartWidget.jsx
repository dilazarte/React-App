import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from './CartContext'

const CartWidget = () => {
    const {carrito} = useContext(cartContext)
    return(
        <FaShoppingCart color="white" fontSize="1.1em"/>
    )
}

export default CartWidget
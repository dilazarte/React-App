import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { cartContext } from './CartContext'

const CartWidget = () => {
    const {carrito} = useContext(cartContext)
    return(
        <>
        <MdShoppingCart color="white" fontSize="1.1em"  />
        </>
    )
}

export default CartWidget
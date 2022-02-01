import React, {useState, useEffect} from 'react'
import { HiMinus, HiPlus } from "react-icons/hi";
import CartContext, { cartContext } from './CartContext'

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    
    return (
        <CartContext>
        <div className='itemCountContiner'>
            <div>
                <button className='controlSust' disabled={cantidad === 1} onClick={()=> setCantidad(cantidad-1)}><HiMinus /></button>
                <span className="cantidadNum"> {cantidad} </span>
                <button className='controlAdd' disabled={stock=== cantidad} onClick={()=> setCantidad(cantidad+1)}><HiPlus /></button>
            </div>
            <button className='addToCart' onClick={ ()=> onAdd(cantidad) }>Agregar al carrito</button>
        </div>
        </CartContext>
    )
}

export default ItemCount
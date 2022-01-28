import React, {useState, useEffect} from 'react'
import { HiMinus, HiPlus } from "react-icons/hi";

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    
    return (
        <div className='itemCountContiner'>
            <div>
                <button className='controlSust' disabled={cantidad === 1} onClick={()=> setCantidad(cantidad-1)}><HiMinus /></button>
                <span className="cantidadNum"> {cantidad} </span>
                <button className='controlAdd' disabled={stock=== cantidad} onClick={()=> setCantidad(cantidad+1)}><HiPlus /></button>
            </div>
            <button className='addToCart' onClick={ ()=> onAdd(cantidad) }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
// ()=> {alert(`Se agregaron ${cantidad} productos al carrito`) setCantidad(initial)}
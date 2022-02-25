import React, {useState} from 'react'
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa"
// import CartContext from './CartContext'

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    
    function valor(e){
        isNaN(e.target.value) ?
        setCantidad(initial)
        :setCantidad(parseInt(e.target.value))
    }
    return (
        // <CartContext>
        <div>
            <span style={cantidad>stock?{color:'red'}:{display:'none'}}>No hay suficiente stock!</span>
            <div className='itemCountContiner'>
                <div style={{position:'relative'}}>
                    <button className='controlSust' disabled={cantidad === 1} onClick={()=> setCantidad(cantidad-1)}><HiMinus /></button>
                    
                    <input onChange={valor} className={cantidad>stock ? 'cantidadNum errorQty' : 'cantidadNum'} type='number' min={initial} max={stock} value={cantidad}></input>
                    <button className='controlAdd' disabled={stock=== cantidad} onClick={()=> setCantidad(cantidad+1)}><HiPlus /></button>
                </div>
                <button disabled={cantidad>stock || cantidad===0 || !cantidad} className='addToCart' onClick={ ()=> onAdd(cantidad) }><FaCartPlus style={{fontSize:'15px', marginRight:'4px'}}/> Agregar Al Carrito</button>
            </div>
        </div>
        
        // </CartContext>
    )
}

export default ItemCount
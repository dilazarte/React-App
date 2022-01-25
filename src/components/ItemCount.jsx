import React, {useState, useEffect} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    return (
        <div className='itemCountContiner'>
            <div>
                <button className='controlSust' disabled={cantidad === 1} onClick={()=> setCantidad(cantidad-1)}> - </button>
                <span className="cantidadNum"> {cantidad} </span>
                <button className='controlAdd' disabled={stock=== cantidad} onClick={()=> setCantidad(cantidad+1)}> + </button>
            </div>
            <button className='addToCard' onClick={ ()=> {alert(`Se agregaron ${cantidad} productos al carrito`)
            setCantidad(initial)} }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

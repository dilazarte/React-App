import React, {useState, useEffect} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    return (
        <div className='itemCountContiner'>
            <p className="cantidadNum">Cantidad: {cantidad}</p>
            <button disabled={cantidad === 1} onClick={()=> setCantidad(cantidad-1)}> - </button> <button disabled={stock=== cantidad} onClick={()=> setCantidad(cantidad+1)}> + </button><br />
            <button onClick={ ()=> alert(`Se agregaron ${cantidad} productos al carrito`)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

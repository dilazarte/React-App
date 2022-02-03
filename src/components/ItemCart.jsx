import React, {useContext} from 'react';
import { cartContext } from './CartContext'
import CartContext from './CartContext';

function ItemCart({item}) {
    const {carrito, setCarrito, removeItem, sumar, restar} = useContext(cartContext)

    return(
        <div className='cartContainer'>
            <div style={{border: '1px solid red', padding: '5px', marginTop: '5px', marginBottom: '5px'}}>
                <h5 key={item.id}> {item.title} - Cantidad: {item.quantity}</h5>
                <button onClick={()=>removeItem(item.id)}>borrar!</button>
                <button onClick={()=>sumar(item.id)}>+</button>
                <button onClick={()=>restar(item.id)}>-</button>
            </div>
        </div>   
    )
}

export default ItemCart;

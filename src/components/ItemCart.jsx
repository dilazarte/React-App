import React, {useContext} from 'react';
import { cartContext } from './CartContext'
import CartContext from './CartContext';

function ItemCart({item}) {
    const {carrito, setCarrito, removeItem} = useContext(cartContext)

    return(
        <div className='cartContainer'>
            <div style={{border: '1px solid red', padding: '5px', margin: '5px'}}>
                <h5 key={item.id}> {item.title} - Cantidad: {item.quantity}</h5>
                <button onClick={()=>removeItem(item.id)}>borrar!</button>
            </div>
        </div>   
    )
}

export default ItemCart;

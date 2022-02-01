import React, {useContext, useEffect} from 'react';
import { cartContext } from './CartContext'
import ItemCart from './ItemCart';

function Cart() {
    const {carrito, setCarrito, removeItem, clearCart} = useContext(cartContext)
    return(
        <>
        {
            (carrito.length > 0) ?
            <>
                {
                    carrito.map(item => <ItemCart key={item.id} item={item} />)
                }
                <button onClick={()=>clearCart()}>Vaciar Carrito!</button>
            </>
            : <h1>El carrito está vacio...</h1>
        }
        </>
    )
}

export default Cart;

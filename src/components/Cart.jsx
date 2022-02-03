import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { cartContext } from './CartContext'
import ItemCart from './ItemCart';

function Cart() {
    const {carrito, setCarrito, removeItem, clearCart, totalPrice} = useContext(cartContext)
    return(
        <div className='cartProducts'>
        {
            (carrito.length > 0) ?
            <>
                {
                    carrito.map(item => <ItemCart key={item.id} item={item} />)
                }
                <button onClick={()=>clearCart()}>Vaciar Carrito!</button>
                <h1>Total: {totalPrice.toFixed(2)}</h1>
            </>
            :
            <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', marginTop: '5em'}}>
                <h1>El carrito está vacio...</h1>
                <Link to={'/'}><button>Volver al inicio</button></Link>
            </div>
        }
        </div>
    )
}

export default Cart;

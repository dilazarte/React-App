import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { cartContext } from './CartContext'
import ItemCart from './ItemCart';
import {RiArrowGoBackLine} from 'react-icons/ri'
import {MdRemoveShoppingCart} from 'react-icons/md'
import {FiCheckCircle} from 'react-icons/fi'

function Cart() {
    document.title = 'CbaSports - Carrito'
    const {carrito, clearCart, totalPrice} = useContext(cartContext)
    return(
        <div className='cartContainer'>
        {
            (carrito.length > 0) ?
            <>
                {
                    carrito.map(item => <ItemCart key={item.id} item={item} />)
                }
                <div className='cartControlSection'>
                    {/* <span className='totalPrice'>Total: ${totalPrice.toFixed(2)}</span> */}
                    <span className='totalPrice'>Total: ${Intl.NumberFormat('de-DE').format(totalPrice)}</span>
                    <div className='cartCheckButtons'>
                        <button className='vaciarCart' onClick={()=>clearCart()}><MdRemoveShoppingCart style={{marginRight:'2px'}}/> Vaciar Carrito</button>
                        <Link to={'/checkout'}><button className='checkoutCart'><FiCheckCircle style={{marginRight:'2px'}}/> Finalizar Compra</button></Link>
                    </div>
                </div>
            </>
            :
            <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', marginTop: '5em'}}>
                <h1>El carrito está vacio...</h1>
                <Link to={'/'}><button className='goToHome'><RiArrowGoBackLine /> VOLVER AL INICIO</button></Link>
            </div>
        }
        </div>
    )
}

export default Cart;

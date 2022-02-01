import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'
import Loading from './Loading';
import { Link } from 'react-router-dom'
import { cartContext } from './CartContext';

function ItemDetail({item}) {
    const [numOnAdd, setNumOnAdd] = useState(0)
    const [onCart, setOnCart] = useState(false)
    const {carrito, setCarrito, addItem} = useContext(cartContext)
    console.log(carrito);
//'id': item.id, 'title': item.title, 'price': item.price, 'image': item.image, 'category': item.category, 'description': item.description, 'quantity': n
    function onAdd(n){
        // setCarrito([ ...carrito, {...item, 'quantity': n}])
        addItem(item, n)
        if(n > 0) { setNumOnAdd(n) }
        setTimeout(()=>{
            setOnCart(true)
            console.log('se agregaron '+n+' articulos');
            console.log(carrito);
        }, 1000)
    }
    
    return(
        <div className='item-detail' id={item.id}>
            <img src={item.image} alt={item.title}></img>
            <div className='info-detail'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Precio: <span>${item.price} USD</span></p>
                <p>Categoria: <span>{item.category}</span></p>
                {
                    (numOnAdd > 0) ?
                    <>
                    {
                        (onCart) ? 
                        <>
                        <Link to={`/cart`}><button className='goToCart'>Ir al carrito!</button></Link>
                        <Link to={`/`}><button className='continueShopping'>Seguir comprando</button></Link>
                        </>
                        : <Loading />
                    }
                    </>
                    :
                    <ItemCount stock={4} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
    ) 
}

export default ItemDetail;

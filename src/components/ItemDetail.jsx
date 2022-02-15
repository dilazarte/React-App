import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'
import Loading from './Loading';
import { Link } from 'react-router-dom'
import { cartContext } from './CartContext';
import ImgThumb from './ImgThumb';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {arrayProductos, setArrayProductos} from './ItemListContainer'
import { BiErrorCircle } from "react-icons/bi";



function ItemDetail({ item, index, setArray }) {
    const [numOnAdd, setNumOnAdd] = useState(0)
    const [onCart, setOnCart] = useState(false)
    const { carrito, setCarrito, addItem } = useContext(cartContext)
    const [image, setImage] = useState(item.img[0])

    function onAdd(n) {
        addItem(item, n) //item.img[0]
        if (n > 0) { setNumOnAdd(n) }
        setTimeout(() => {
            setOnCart(true)
            console.log('se agregaron ' + n + ' articulos');
        }, 500)
    }
    
    return (
        
        <div className='item-detail' id={item.id}>
            <img className='img-item' src={image} alt={item.title}></img>
            <div className='info-detail' style={(item.stock===0) ? {justifyContent:'space-around'} : {justifyContent:'space-between'}}>
                <div className='item-info'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Precio: <span>${item.price} USD</span></p>
                    <p>Stock: <span>{item.stock}</span></p>
                    <p>Categoria: <span>{item.category}</span></p>
                    <div className='imgThumb-container'>
                        {item.img.map((item, index) => <ImgThumb key={index} item={item} image={image} setImage={setImage} />)}
                    </div>
                </div>
                { (item.stock > 0) ?
                <>
                    {
                        (numOnAdd > 0) ?
                            <>
                                {
                                    (onCart) ?
                                        <div style={{ display: "flex", flexFlow: "column" }}>
                                            <Link to={`/cart`}><button className='goToCart'>Ir al carrito!</button></Link>
                                            <Link to={`/`}><button className='continueShopping'>Seguir comprando</button></Link>
                                        </div>
                                        : <Loading />
                                }
                            </>
                            :
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    }
                </>
                :
                <>
                    <span style={{color:'red',
                    width:'10em',
                    margin:'auto',
                    alignItems:'center',
                    textAlign:'center',
                    backgroundColor:'#ffc8c8',
                    padding:'10px',
                    borderRadius:'5px',
                    fontWeight:'500',
                    display:'flex',
                    justifyContent:'center'}}>
                        <BiErrorCircle style={{marginRight:'6px'}}/> SIN STOCK!
                    </span>
                </>
                }
            </div>
        </div>
    )   
}

export default ItemDetail;

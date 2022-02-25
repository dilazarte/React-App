import React, { useContext, useEffect, useState } from 'react';
import ItemCount from './ItemCount'
import Loading from './Loading';
import { Link } from 'react-router-dom'
import { cartContext } from './CartContext';
import { BiErrorCircle } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Rating } from 'react-simple-star-rating'
import FavButton from './FavButton';
import Item from './Item';
import { getFirestore } from '../config/getFirestore'


function ItemDetail({ item }){
    const [numOnAdd, setNumOnAdd] = useState(0)
    const [onCart, setOnCart] = useState(false)
    const { addItem, carrito, isInCart } = useContext(cartContext)
    const [similProds, setSimilProds] = useState([])
    const [overQty, setOverQty] = useState(false)
    document.title = `CbaSports - ${item.title}`
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('items').where('category', '==', `${item.category}`)
            itemCollection.get()
            .then((res) => {
                if(res.size === 0) {
                    return
                }
                setSimilProds(res.docs.map( (items) => {
                    return {...items.data(), id: items.id}  } 
                ));
            })
    },[item.category])
    let prodsSimilars = similProds.filter(prods => (prods.category === item.category) && (prods.id !== item.id))
    const [image, setImage] = useState(item.img[0])
    function onAdd(n) {
        if(isInCart(item.id) > -1) {
            if( (carrito[isInCart(item.id)].quantity + n) > item.stock ) {
                setOverQty(true)
                return
                } else {
                    addItem(item, n)
                    if (n > 0) { setNumOnAdd(n) }
                    setTimeout(() => {
                        setOnCart(true)
                    }, 500)
                }
        } else {
            addItem(item, n)
            if (n > 0) { setNumOnAdd(n) }
            setTimeout(() => {
                setOnCart(true)
            }, 500) }
    }
    return (
        <>
        <div className='item-detail' id={item.id}>
            <img className='img-item' src={image} alt={item.title}></img>
            <div className='info-detail' style={(item.stock===0) ? {justifyContent:'space-around'} : {justifyContent:'space-between'}}>
            <FavButton item={item} class1={'favOnDetail'} setDisplay={'flex'}/>
                <div className='item-info'>
                    <h1>{item.title}</h1>
                    <span style={{fontSize:'18px', fontFamily:'Nunito', color:'#00a650', fontWeight:'700'}}>${item.price} USD</span>
                    <div style={{marginTop:'10px'}}><Rating initialValue={item.rating} size={17} readonly={true} /><span style={{fontSize:'14px'}}> ({item.rating})</span></div>
                    <p>{item.description}</p>
                    <p>Stock: <span>{item.stock}</span></p>
                    <p>Categoria: <span>{item.category}</span></p>
                    <div className='imgThumb-container'>
                        {
                            item.img.map((item, index) => <img onClick={()=> setImage(item)} key={index}
                            className={(image === item) ? 'img-thumb active' : 'img-thumb'}
                            src={item}
                            alt={'thumnail'}>
                            </img>)
                        }
                    </div>
                </div>
                {overQty ?
                <div className='errorContainer'><span>La cantidad que desea agregar supera el stock del producto
                    <button onClick={()=>setOverQty(false)}>x</button>
                </span></div>
                :
                <></>
                }
                { (item.stock > 0) ?
                <>
                    {
                        (numOnAdd > 0) ?
                        <>
                        {
                            (onCart) ?
                                <div style={{ display: "flex", flexFlow:'column'}}>
                                    <Link to={`/cart`}><button className='goToCart'><BsFillCartCheckFill /> Ir al carrito!</button></Link>
                                    <Link to={`/`}><button className='continueShopping'><GiShoppingBag /> Seguir comprando</button></Link>
                                </div>
                                : <Loading />
                        }
                        </>
                        :
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    }
                </>
                :
                <div className='outOfStock'>
                    <span><BiErrorCircle style={{marginRight:'6px'}}/> SIN STOCK!</span>
                    <Link to={`/`}><button className='goToHome' style={{padding:'13px'}}><RiArrowGoBackLine /> VOLVER AL INICIO</button></Link>
                </div>
                }
            </div>
        </div>
        {
            similProds.length === 0 ?
            <div className='itemListSimilarContainer'><Loading /></div>
            :
            <div className='itemListSimilarContainer'>
                    <p>Articulos similares:</p>
                    <div className='itemListSimilar'>
                    {
                        prodsSimilars.map(item => <Item key={item.id} item={item}/>)
                    }
                    </div>
                </div>
        }
        </>
    
    )   
}

export default ItemDetail;
import React, {useContext} from 'react';
import { cartContext } from './CartContext'
import { IoTrashOutline } from "react-icons/io5";

function ItemCart({item}) {
    const {removeItem, sumar, restar} = useContext(cartContext)

    return(
        <div className='productContainer'>
            <div className='productDetailContainer'>
                <img src={item.img[0]} alt={item.title} />
                    <div className='productDetailInfo'>
                        <h5 key={item.id}>{item.title}</h5>
                            <div className='productControls'>
                                <button onClick={()=>restar(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                <button disabled={item.quantity === item.stock} onClick={()=>sumar(item.id)}>+</button>
                                <button onClick={()=>removeItem(item.id)}>
                                    <span style={
                                        {alignItems:'center',
                                        width: '100%',
                                        border: 'none',
                                        display: 'flex',
                                        justifyContent:'center',
                                        paddingBottom:'0',
                                        fontSize:'1.5em'}
                                    }>
                                        <IoTrashOutline />
                                    </span>
                                </button>
                            </div>
                    </div>
            </div>
        </div>   
    )
}

export default ItemCart;

import React, {useContext, useState} from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { cartContext } from './CartContext';

function FavButton({item, class1, activo, setDisplay}) {
    const { favoritos, agregarFav } = useContext(cartContext)

    
    return (
        <button style={activo ? {display:'flex'} : {display:setDisplay||'none'} }
        onClick={() => agregarFav(item)} className={class1}>
            {favoritos.find(el => el.id == item.id) ?
                <AiFillHeart className='mark'/>
                :
                <AiOutlineHeart />
            }
        </button>
    )
}

export default FavButton

//style={activo ? {display:'flex'} : {display:'none' || displaySet} }

{/* <button style={activo ? {display:'flex'} : {display:'none'} }
        onClick={() => agregarFav(item)} className={class1}>
            {favoritos.find(el => el.id == item.id) ?
                <AiFillHeart className='mark'/>
                :
                <AiOutlineHeart />
            }
        </button> */}
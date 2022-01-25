import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    return(
        <div className='item-detail' id={item.id}>
            <img src={item.image} alt={item.title}></img>
            <div className='info-detail'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Precio: <span>${item.price} USD</span></p>
                <p>Categoria: <span>{item.category}</span></p>
                <ItemCount stock={4} initial={1} />
            </div>
        </div>
    ) 
}

export default ItemDetail;

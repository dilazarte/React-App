import React from 'react';

function ItemDetail(props) {
    return(
        <div className='item-detail' id={props.id}>
            <img src={props.img} alt={props.title}></img>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>Precio: <span>${props.price} USD</span></p>
                <p>Categoria: <span>{props.category}</span></p>
            </div>
        </div>
    ) 
}

export default ItemDetail;

import React from 'react'
//id, title, description, price, pictureUrl
function Item(props) {
    return (
        <div className='producto' id={props.id}>
            <img className='img-item' src={props.pictureUrl} alt={props.description} />
            <div className='info-item-container'>
                <span className='title-item'>{props.title}</span>
                <span className='price-item'>Precio: {props.price}</span>
                <span className='description-item'>{props.description}</span>
            </div>
        </div>
    )
}

export default Item
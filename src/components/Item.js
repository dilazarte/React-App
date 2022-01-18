import React from 'react'

function Item({id, title, description, price, pictureUrl}) {
    return (
        <div className='producto' id={id}>
            <img className='img-item' src={pictureUrl} alt='' />
            <div className='info-item-container'>
                <span className='title-item'>{title}</span>
                <span className='price-item'>Precio: {price}</span>
                <span className='description-item'>{description}</span>
            </div>
        </div>
    )
}

export default Item
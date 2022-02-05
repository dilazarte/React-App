import React from 'react'
import {Link} from 'react-router-dom'
//id, title, description, price, pictureUrl
function Item({item}) {
    return (
        <Link to={`/item/${item.id}`}>
            <div className='producto' id={item.id}>
                
                    <div className='img-container' style={{backgroundImage: `url(${item.img})`}}>
                        {/* <img className='img-item' src={item.image} alt={item.title} /> */}
                    </div>
                    <div className='info-item-container'>
                        <span className='price-item'>USD {item.price}</span>
                        {/* <span className='description-item'>Categoria: {item.category}</span> */}
                        <span className='title-item'>{item.title}</span>
                    </div>
            </div>
            </Link>
    )
}

export default Item
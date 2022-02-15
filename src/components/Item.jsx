import React from 'react'
import {Link} from 'react-router-dom'
//id, title, description, price, pictureUrl
function Item({item}) {
    return (
        <Link to={`/item/${item.id}`}>
            <div className='producto' id={item.id} style={(item.stock === 0) ? {position:'relative'} : {position:'static'}}>
                    <>
                    <div className='img-container' style={(item.stock === 0) ?
                    {backgroundImage: `url(${item.img[0]})`, opacity: '.3'}
                    :
                    {backgroundImage: `url(${item.img[0]})`}}>
                    </div>
                    {(item.stock === 0) ?
                        <span style={{display: 'block', position: 'absolute', textAlign: 'center', top:'90px'}}>SIN STOCK</span>
                        :
                        <span style={{display: 'none'}}></span>}
                    </>
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
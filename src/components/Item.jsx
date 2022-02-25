import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavButton from './FavButton';

function Item({ item }) {
    const [activo, setActivo] = useState(false)
    function ShowFavIcon(op){
        activo ? setActivo(op) : setActivo(op)
    }
    
    return (
        <div onMouseOver={()=>ShowFavIcon(true)} onMouseOut={()=>ShowFavIcon(false)} style={{ position: 'relative' }}>
            <Link to={`/item/${item.id}`}>
                <div className='producto' id={item.id}>
                    <>
                        <div className='img-container' style={(item.stock === 0) ?
                            { backgroundImage: `url(${item.img[0]})`, opacity: '.3' }
                            :
                            { backgroundImage: `url(${item.img[0]})` }}>
                        </div>
                        {(item.stock === 0) ?
                            <span style={{
                                display: 'block',
                                position: 'absolute',
                                textAlign: 'center',
                                top:'90px',
                                backgroundColor:'#ffffffb8',
                                padding:'10px',
                                borderRadius:'30px'
                            }}>SIN STOCK</span>
                            :
                            // <span style={{ display: 'none' }}></span>
                            <></>
                            }
                    </>
                    <div className='info-item-container'>
                        <span className='price-item'>USD {item.price}</span>
                        <span className='title-item'>{item.title}</span>
                    </div>
                </div>
            </Link>
                <FavButton activo={activo} item={item} class1={'favButton'} />
        </div>
    )
}

export default Item
import React, {useContext} from 'react'
import { cartContext } from './CartContext';
import Item from './Item'
import {RiArrowGoBackLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Favorites = () => {
    document.title = 'CbaSports - Favoritos'
    const { favoritos } = useContext(cartContext)
    return (
        <div className='seccionFavoritos'>
        {
            (favoritos.length > 0 ) ?
            <>
                <h1>Tu lista de favoritos</h1>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, 230px)', gridGap:'1em', gridAutoRows:'330px', margin:'auto', width:'90%', justifyContent:'space-around'}}>
                {
                    favoritos.map(item => {
                        return <Item key={item.id} item={item}/>
                    })
                }
                </div>
            </>
            :
            <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', marginTop: '5em'}}>
                <h1>Tu lista de favoritos está vacía.</h1>
                <Link to={'/'}><button className='goToHome'><RiArrowGoBackLine /> VOLVER AL INICIO</button></Link>
            </div>
        }
        </div>
    )
}

export default Favorites
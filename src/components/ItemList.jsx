import React, {useEffect, useState} from 'react'
import Item from './Item'

function ItemList({props}) {
    //este es mi 'json' de productos
    // const listaProductos = [
    //     {id: 1, title: "Producto 1", description: "descripcion del producto", price: 10, pictureUrl: 'https://dummyimage.com/200x200/f5f5f5/363636.png&text=Imagen+de+prueba'},
    //     {id: 2, title: "Producto 2", description: "descripcion del producto", price: 20, pictureUrl: 'https://dummyimage.com/200x200/944a8f/363636.png&text=Imagen+de+prueba'},
    //     {id: 3, title: "Producto 3", description: "descripcion del producto", price: 30, pictureUrl: 'https://dummyimage.com/200x200/25e38f/363636.png&text=Imagen+de+prueba'},
    //     {id: 4, title: "Producto 4", description: "descripcion del producto", price: 40, pictureUrl: 'https://dummyimage.com/200x200/94e39g/363636.png&text=Imagen+de+prueba'}
    // ]
    //declaro un estado para guardar los productos en el array por si se actualiza el
    //stock en ejecucion.-

    return (
        <div className='itemList'>
        {props.map(item => {
                return <Item  key={item.id} item={item}/>
            })
        }
        </div>
    )
}

export default ItemList
{/*key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} price={item.price} category={item.category}*/}
import React, {useEffect, useState} from 'react'
import Item from './Item'

function ItemList() {
    //este es mi 'json' de productos
    const listaProductos = [
        {id: 1, title: "Producto 1", description: "descripcion del producto", price: 10, pictureUrl: 'https://dummyimage.com/200x200/f5f5f5/363636.png&text=Imagen+de+prueba'},
        {id: 2, title: "Producto 2", description: "descripcion del producto", price: 20, pictureUrl: 'https://dummyimage.com/200x200/944a8f/363636.png&text=Imagen+de+prueba'},
        {id: 3, title: "Producto 3", description: "descripcion del producto", price: 30, pictureUrl: 'https://dummyimage.com/200x200/25e38f/363636.png&text=Imagen+de+prueba'},
        {id: 4, title: "Producto 4", description: "descripcion del producto", price: 40, pictureUrl: 'https://dummyimage.com/200x200/94e39g/363636.png&text=Imagen+de+prueba'}
    ]
    //declaro un estado para guardar los productos en el array por si se actualiza el
    //stock en ejecucion.-
    const [arrayProductos, setArrayProductos] = useState([])

    //este estado es para verificar si esta resuelta la peticion para listar los productos
    const [resuelta, setResuelta] = useState(false)
    
    const productos = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(listaProductos)
        }, 2000)
    })

    useEffect(()=>{
        productos.then(res => {
            console.log(res)
            setArrayProductos(res)
            setResuelta(true)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='itemListContainer'>
        { (resuelta) ? 
        arrayProductos.map(item => {
                return <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />
            })
            : <h2>Cargando productos...</h2>
        } 
        </div>
    )
}

export default ItemList

import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    //declaro los estados para los productos y el loading...
    const [productos, setProductos] = useState([])

    //aca hago la peticion a la api dentro de un useEffect con un delay de 2seg
        useEffect(()=>{
                fetch('https://fakestoreapi.com/products/14')
                    .then(res=>res.json())
                    .then(res => {
                        setProductos([res])
                        console.log(res)
                    })
        },[])
    return(
        <div>
            {
                (productos.length > 0) ?
                <>
                    {
                        productos.map( item => {
                            return <ItemDetail key={item.id} id={item.id} img={item.image} title={item.title} description={item.description} price={item.price} category={item.category} />
                        })
                    }
                </>
                :
                <>
                    Cargando detalles del producto...
                </>
            }
            
        </div>
    )
}

export default ItemDetailContainer;

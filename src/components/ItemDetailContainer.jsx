import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';

function ItemDetailContainer() {
    const {Id} = useParams()
    const [item, setItem] = useState([])


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${Id}`)
                    .then(res=>res.json())
                    .then(res => {
                        setItem([res])
                        console.log(res)
        })
    }, [])
    return(
        <div>
            {
                (item.length > 0) ?
                <>
                    {
                        item.map( item => {
                            return <ItemDetail key={item.id} item={item} />
                        })
                    }
                </>
                :
                <div style={{margin: 'auto', display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center'}}>
                    <Loading />
                </div>
            }
            
        </div>
    )
}

export default ItemDetailContainer;

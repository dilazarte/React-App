import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { getFirestore } from '../config/getFirestore'

function ItemDetailContainer() {
    const {Id} = useParams()
    const [item, setItem] = useState([])
    
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('items')
        //pido el item con el id segun el producto
        const item = itemCollection.doc(`${Id}`)
        //hago el get
        item.get()
        .then((res)=>{
            if (!res.exists){
                return
            }
            setItem([{id: res.id, ...res.data()}])
        })
    }, [Id])
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

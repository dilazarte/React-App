import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../config/getFirestore'
//inicio el firestore
const ItemListContainer = () => {
    const [arrayProductos, setArrayProductos] = useState([])
    const { IdCategory } = useParams()
    document.title = IdCategory ? `CbaSports - ${IdCategory.toUpperCase()}` : 'CbaSports - INICIO'
        useEffect(()=>{
            const db = getFirestore()
            if(IdCategory) {
                const itemCollection = db.collection('items').where('category', '==', `${IdCategory}`)
                itemCollection.get()
                .then((res) => {
                    if(res.size === 0) {
                        return
                    }
                    setArrayProductos(res.docs.map( (item) => {
                        return {...item.data(), id: item.id} }
                    ));
                })
            } else {
                const itemCollection = db.collection('items')
                itemCollection.get()
                .then((res) => {
                    if(res.size === 0) {
                        return
                    }
                    setArrayProductos(res.docs.map( (item) => {
                        return {...item.data(), id: item.id} } 
                    ));
                })
            }
        }, [IdCategory])
    return(
        <div className="ItemListContainer">
            {
                (arrayProductos.length > 0) ? 
                <div>
                    <ItemList array={arrayProductos} />
                </div>
            :
            <div style={{margin: 'auto', display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center'}}>
                <Loading />
            </div>
            }
        </div>
        
    )
}

export default ItemListContainer
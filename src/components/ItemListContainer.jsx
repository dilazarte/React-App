import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';
// import { doc, getDoc, getFirestore } from 'firebase'
import { getFirestore } from '../config/getFirestore'

//inicio el firestore

const ItemListContainer = () => {
    const [arrayProductos, setArrayProductos] = useState([])
    const { IdCategory } = useParams()

        useEffect(()=>{
            const db = getFirestore()

            if(IdCategory) {
                const itemCollection = db.collection('items').where('category', '==', `${IdCategory}`)
                itemCollection.get()
                .then((res) => {
                    if(res.size == 0) {
                        console.log('no hay items en la categoria')
                        return
                    }
                    console.log('hay items en la categoria')
                    setArrayProductos(res.docs.map( (item) => {
                        return {...item.data(), id: item.id} }
                    ));
                })
            } else {
                const itemCollection = db.collection('items')
                itemCollection.get()
                .then((res) => {
                    if(res.size == 0) {
                        console.log('no hay items en la categoria')
                        return
                    }
                    console.log('hay items en la categoria')
                    setArrayProductos(res.docs.map( (item) => {
                        return {...item.data(), id: item.id} } 
                    ));
                    console.log(arrayProductos)
                })
            }
                
        
        }, [IdCategory])


    return(
        <div className="ItemListContainer">
            {
                (arrayProductos.length > 0) ? 
                    <ItemList props={arrayProductos} />
            :
            <div style={{margin: 'auto', display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center'}}>
                <Loading />
            </div>
            } 
        </div>
        
    )
}

export default ItemListContainer


            // if(IdCategory) {
            //     fetch(`https://fakestoreapi.com/products/`)
            //             .then(res=>res.json())
            //             .then(res => {
            //                 setArrayProductos(res.filter(item => item.category == IdCategory))
            //                 console.log(res)
            //         })
            //     } else {
            //         fetch('https://fakestoreapi.com/products/')
            //             .then(res=>res.json())
            //             .then(res => {
            //                 setArrayProductos(res)
            //                 console.log(res)
            //         })
            //     }
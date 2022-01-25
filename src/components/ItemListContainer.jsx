import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [arrayProductos, setArrayProductos] = useState([])
    const { IdCategory } = useParams()
    
        // useEffect(()=>{
        //     fetch('https://fakestoreapi.com/products/')
        //             .then(res=>res.json())
        //             .then(res => {
        //                 setArrayProductos(res)
        //                 console.log(res)
        //             })
        // },[])

        useEffect(()=>{
            if(IdCategory) {
                fetch(`https://fakestoreapi.com/products/`)
                        .then(res=>res.json())
                        .then(res => {
                            setArrayProductos(res.filter(item => item.category == IdCategory))
                            console.log(res)
                    })
                } else {
                    fetch('https://fakestoreapi.com/products/')
                        .then(res=>res.json())
                        .then(res => {
                            setArrayProductos(res)
                            console.log(res)
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